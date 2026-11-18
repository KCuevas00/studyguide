// Python Exam #2 Cram Guide - Core Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentTab = 'tab-learn';
  let tooltipsEnabled = true;
  let flashcardList = [];
  let currentCardIndex = 0;
  let cardFlipped = false;
  let cardMastery = {}; // { id: 'mastered' | 'review' }
  let quizAnswers = {};
  let currentFilter = 'all';

  // Flatten all items for flashcards & quick lookup
  const allItems = [];
  const itemsById = {};
  STUDY_DATA.sections.forEach(sec => {
    sec.items.forEach(item => {
      const fullItem = { ...item, sectionTitle: sec.title };
      allItems.push(fullItem);
      itemsById[item.id] = fullItem;
    });
  });

  flashcardList = [...allItems];

  // DOM Elements
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');
  const globalSearch = document.getElementById('global-search');
  const searchClear = document.getElementById('search-clear');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  const learnContainer = document.getElementById('learn-content-container');
  const sectionNav = document.getElementById('section-nav');
  const cursorTooltip = document.getElementById('cursor-tooltip');
  const ttBadge = document.getElementById('tt-badge');
  const ttShort = document.getElementById('tt-short');
  const ttCode = document.getElementById('tt-code');
  const btnToggleTooltips = document.getElementById('btn-toggle-tooltips');
  const btnExpandAll = document.getElementById('btn-expand-all');
  const btnCollapseAll = document.getElementById('btn-collapse-all');
  const resultsCountText = document.getElementById('results-count-text');

  // =========================================================================
  // Theme Toggle
  // =========================================================================
  const savedTheme = localStorage.getItem('studyguide-theme') || 'dark';
  applyTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('studyguide-theme', theme);
    if (theme === 'light') {
      themeIcon.textContent = '🌙';
      themeText.textContent = 'Dark';
    } else {
      themeIcon.textContent = '☀️';
      themeText.textContent = 'Light';
    }
  }

  // =========================================================================
  // Tabs Navigation
  // =========================================================================
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  function switchTab(tabId) {
    currentTab = tabId;
    tabButtons.forEach(b => {
      const isMatch = b.getAttribute('data-tab') === tabId;
      b.classList.toggle('active', isMatch);
      b.setAttribute('aria-selected', isMatch);
    });
    tabPanels.forEach(p => {
      p.classList.toggle('active', p.id === tabId);
    });
    // Hide tooltip on tab change
    hideTooltip();
    window.location.hash = tabId.replace('tab-', '');
  }

  // Check URL hash on load
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(`tab-${hash}`)) {
    switchTab(`tab-${hash}`);
  }

  // =========================================================================
  // Render Learn Section
  // =========================================================================
  function renderLearnSections() {
    learnContainer.innerHTML = '';
    sectionNav.innerHTML = '';

    // "All" Nav Pill
    const allPill = document.createElement('a');
    allPill.className = 'nav-pill active';
    allPill.textContent = 'All Topics';
    allPill.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
      allPill.classList.add('active');
      document.querySelectorAll('.study-section').forEach(s => s.style.display = 'block');
      window.scrollTo({ top: 120, behavior: 'smooth' });
    });
    sectionNav.appendChild(allPill);

    STUDY_DATA.sections.forEach(sec => {
      // Build Quick Nav Pill
      const pill = document.createElement('a');
      pill.className = 'nav-pill';
      pill.textContent = sec.title.split('.')[0] + '.' + sec.title.split('.')[1];
      pill.title = sec.title;
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        const targetEl = document.getElementById(`sec-${sec.id}`);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          document.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
        }
      });
      sectionNav.appendChild(pill);

      // Section Wrapper
      const sectionEl = document.createElement('div');
      sectionEl.className = 'study-section';
      sectionEl.id = `sec-${sec.id}`;

      // Section Header
      const headerEl = document.createElement('div');
      headerEl.className = 'section-header';
      headerEl.innerHTML = `
        <div>
          <div class="section-title">${sec.title}</div>
          <div class="section-desc">${sec.desc}</div>
        </div>
        <span class="cram-pill">${sec.items.length} questions</span>
      `;
      sectionEl.appendChild(headerEl);

      // Question List
      const qListEl = document.createElement('div');
      qListEl.className = 'question-list';

      sec.items.forEach(item => {
        const card = createQuestionCard(item);
        qListEl.appendChild(card);
      });

      sectionEl.appendChild(qListEl);
      learnContainer.appendChild(sectionEl);
    });

    // Also populate eval code list in tab 4
    renderEvalCodeList();
  }

  function createQuestionCard(item) {
    const card = document.createElement('div');
    card.className = 'q-card';
    card.setAttribute('data-item-id', item.id);
    card.setAttribute('tabindex', '0');

    const bulletsHtml = item.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('');
    const codeHtml = item.code ? `
      <div class="code-box">
        <button class="copy-code-btn" title="Copy code">Copy</button>
        <pre><code>${escapeHtml(item.code)}</code></pre>
      </div>
    ` : '';

    card.innerHTML = `
      <div class="q-header">
        <div class="q-title-wrap">
          <span class="q-topic-badge">${item.topic}</span>
          <div class="q-text">${escapeHtml(item.q)}</div>
        </div>
        <div class="q-hint">
          <span>Tap/Click</span>
          <span class="q-expand-icon">▼</span>
        </div>
      </div>
      <div class="q-drawer">
        <div class="answer-lead">💡 Cram Answer:</div>
        <div style="font-size:0.92rem; color:var(--text-main); margin-bottom:10px;">${escapeHtml(item.short)}</div>
        <ul class="bullets-list">${bulletsHtml}</ul>
        ${codeHtml}
      </div>
    `;

    // Click / Enter toggle drawer
    card.addEventListener('click', (e) => {
      // Don't toggle if clicking copy button
      if (e.target.classList.contains('copy-code-btn')) return;
      card.classList.toggle('is-open');
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('is-open');
      }
    });

    // Copy button
    const copyBtn = card.querySelector('.copy-code-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(item.code);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy', 1500);
      });
    }

    // Attach smooth cursor follower listeners
    card.addEventListener('mouseenter', (e) => onCardMouseEnter(e, item));
    card.addEventListener('mouseleave', onCardMouseLeave);
    card.addEventListener('mousemove', onCardMouseMove);

    return card;
  }

  function renderEvalCodeList() {
    const evalList = document.getElementById('eval-code-list');
    if (!evalList) return;
    evalList.innerHTML = '';
    const evalSec = STUDY_DATA.sections.find(s => s.id === 'eval_drills');
    if (evalSec) {
      evalSec.items.forEach(item => {
        evalList.appendChild(createQuestionCard(item));
      });
    }
  }

  // =========================================================================
  // Smooth Cursor Tooltip Follower
  // =========================================================================
  let isMouseOverCard = false;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let animationFrameId = null;

  function onCardMouseEnter(e, item) {
    // Disable on coarse pointer (touch / mobile) or if user turned tooltips off
    if (window.matchMedia('(pointer: coarse)').matches || !tooltipsEnabled) {
      return;
    }

    isMouseOverCard = true;
    ttBadge.textContent = `${item.section.toUpperCase()} • ${item.topic}`;
    ttShort.textContent = item.short;

    if (item.code) {
      ttCode.textContent = item.code;
      ttCode.style.display = 'block';
    } else {
      ttCode.style.display = 'none';
    }

    targetX = e.clientX + 18;
    targetY = e.clientY + 18;
    currentX = targetX;
    currentY = targetY;

    positionTooltip(currentX, currentY);
    cursorTooltip.classList.add('is-active');

    if (!animationFrameId) {
      animationFrameId = requestAnimationFrame(smoothFollowLoop);
    }
  }

  function onCardMouseMove(e) {
    if (!isMouseOverCard || !tooltipsEnabled) return;
    targetX = e.clientX + 18;
    targetY = e.clientY + 18;
  }

  function onCardMouseLeave() {
    isMouseOverCard = false;
    hideTooltip();
  }

  function hideTooltip() {
    cursorTooltip.classList.remove('is-active');
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }

  function smoothFollowLoop() {
    if (!isMouseOverCard) return;

    // Smooth lerp interpolation for natural, non-jittery motion
    currentX += (targetX - currentX) * 0.35;
    currentY += (targetY - currentY) * 0.35;

    positionTooltip(currentX, currentY);
    animationFrameId = requestAnimationFrame(smoothFollowLoop);
  }

  function positionTooltip(x, y) {
    const ttRect = cursorTooltip.getBoundingClientRect();
    const width = ttRect.width || 380;
    const height = ttRect.height || 180;
    const padding = 16;

    let posX = x;
    let posY = y;

    // Boundary check right edge
    if (posX + width > window.innerWidth - padding) {
      posX = x - width - 36;
    }

    // Boundary check bottom edge
    if (posY + height > window.innerHeight - padding) {
      posY = y - height - 36;
    }

    // Ensure within left and top bounds
    if (posX < padding) posX = padding;
    if (posY < padding) posY = padding;

    cursorTooltip.style.transform = `translate3d(${Math.round(posX)}px, ${Math.round(posY)}px, 0)`;
  }

  // Toggle tooltips button
  btnToggleTooltips.addEventListener('click', () => {
    tooltipsEnabled = !tooltipsEnabled;
    btnToggleTooltips.textContent = `Hover Tooltip: ${tooltipsEnabled ? 'ON' : 'OFF'}`;
    if (!tooltipsEnabled) hideTooltip();
  });

  // Expand / Collapse All
  btnExpandAll.addEventListener('click', () => {
    document.querySelectorAll('.q-card').forEach(c => c.classList.add('is-open'));
  });

  btnCollapseAll.addEventListener('click', () => {
    document.querySelectorAll('.q-card').forEach(c => c.classList.remove('is-open'));
  });

  // =========================================================================
  // Search & Filter
  // =========================================================================
  globalSearch.addEventListener('input', handleSearch);
  searchClear.addEventListener('click', () => {
    globalSearch.value = '';
    searchClear.classList.remove('visible');
    handleSearch();
    globalSearch.focus();
  });

  function handleSearch() {
    const query = globalSearch.value.trim().toLowerCase();
    searchClear.classList.toggle('visible', query.length > 0);

    let matchCount = 0;
    const sections = document.querySelectorAll('.study-section');

    sections.forEach(sec => {
      const cards = sec.querySelectorAll('.q-card');
      let secMatches = 0;

      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const isMatch = !query || text.includes(query);
        card.style.display = isMatch ? 'block' : 'none';
        if (isMatch) {
          secMatches++;
          matchCount++;
          if (query) card.classList.add('is-open'); // Auto-expand when searching
        }
      });

      sec.style.display = secMatches > 0 ? 'block' : 'none';
    });

    resultsCountText.textContent = query
      ? `Found ${matchCount} matching topics`
      : `Showing all ${allItems.length} review items`;
  }

  // =========================================================================
  // Flashcards Logic
  // =========================================================================
  const cardScene = document.getElementById('card-scene');
  const cardInner = document.getElementById('card-inner');
  const cardFrontBadge = document.getElementById('card-front-badge');
  const cardFrontText = document.getElementById('card-front-text');
  const cardBackBadge = document.getElementById('card-back-badge');
  const cardBackLead = document.getElementById('card-back-lead');
  const cardBackBullets = document.getElementById('card-back-bullets');
  const cardBackCodeWrap = document.getElementById('card-back-code-wrap');
  const cardBackCode = document.getElementById('card-back-code');
  const cardIndexIndicator = document.getElementById('card-index-indicator');
  const cardMasteryIndicator = document.getElementById('card-mastery-indicator');
  const deckProgressBar = document.getElementById('deck-progress-bar');
  const deckFilterBar = document.getElementById('deck-filter-bar');

  const btnPrevCard = document.getElementById('btn-prev-card');
  const btnNextCard = document.getElementById('btn-next-card');
  const btnFlipCard = document.getElementById('btn-flip-card');
  const btnShuffleDeck = document.getElementById('btn-shuffle-deck');
  const btnMarkMastered = document.getElementById('btn-mark-mastered');
  const btnMarkReview = document.getElementById('btn-mark-review');

  function initFlashcards() {
    renderDeckFilters();
    updateFlashcard();

    // Flip triggers
    cardScene.addEventListener('click', flipCard);
    btnFlipCard.addEventListener('click', flipCard);

    // Prev / Next
    btnPrevCard.addEventListener('click', () => stepCard(-1));
    btnNextCard.addEventListener('click', () => stepCard(1));

    // Shuffle
    btnShuffleDeck.addEventListener('click', () => {
      shuffleArray(flashcardList);
      currentCardIndex = 0;
      cardFlipped = false;
      cardInner.classList.remove('is-flipped');
      updateFlashcard();
    });

    // Mastery markings
    btnMarkMastered.addEventListener('click', () => {
      const current = flashcardList[currentCardIndex];
      if (current) {
        cardMastery[current.id] = 'mastered';
        updateMasteryDisplay();
        stepCard(1);
      }
    });

    btnMarkReview.addEventListener('click', () => {
      const current = flashcardList[currentCardIndex];
      if (current) {
        cardMastery[current.id] = 'review';
        updateMasteryDisplay();
        stepCard(1);
      }
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (currentTab !== 'tab-flashcards') return;
      // Ignore if user typing in an input
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        flipCard();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        stepCard(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        stepCard(1);
      }
    });
  }

  function renderDeckFilters() {
    deckFilterBar.innerHTML = '';
    const filters = [
      { id: 'all', label: `All (${allItems.length})` },
      { id: '7a', label: '7a Strings' },
      { id: '7b', label: '7b Unicode' },
      { id: '7c', label: '7c Encoding' },
      { id: '7d', label: '7d Endian' },
      { id: '7e', label: '7e Format' },
      { id: '7f', label: '7f Regex' },
      { id: '8a', label: '8a Files' },
      { id: '8b', label: '8b Binary' },
      { id: '8c', label: '8c CSV/JSON' },
      { id: 'needs_review', label: '⚠️ Review List' }
    ];

    filters.forEach(f => {
      const btn = document.createElement('button');
      btn.className = `deck-filter-btn ${f.id === currentFilter ? 'active' : ''}`;
      btn.textContent = f.label;
      btn.addEventListener('click', () => {
        currentFilter = f.id;
        document.querySelectorAll('.deck-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (f.id === 'all') {
          flashcardList = [...allItems];
        } else if (f.id === 'needs_review') {
          flashcardList = allItems.filter(item => cardMastery[item.id] === 'review');
          if (flashcardList.length === 0) {
            alert('No cards marked for review yet! Mark cards using the "⚠️ Need Review" button.');
            flashcardList = [...allItems];
            currentFilter = 'all';
            document.querySelector('.deck-filter-btn').classList.add('active');
          }
        } else {
          flashcardList = allItems.filter(item => item.section === f.id);
        }

        currentCardIndex = 0;
        cardFlipped = false;
        cardInner.classList.remove('is-flipped');
        updateFlashcard();
      });
      deckFilterBar.appendChild(btn);
    });
  }

  function flipCard() {
    cardFlipped = !cardFlipped;
    cardInner.classList.toggle('is-flipped', cardFlipped);
  }

  function stepCard(dir) {
    if (flashcardList.length === 0) return;
    currentCardIndex += dir;
    if (currentCardIndex < 0) currentCardIndex = flashcardList.length - 1;
    if (currentCardIndex >= flashcardList.length) currentCardIndex = 0;

    cardFlipped = false;
    cardInner.classList.remove('is-flipped');
    updateFlashcard();
  }

  function updateFlashcard() {
    if (flashcardList.length === 0) {
      cardFrontText.textContent = 'No cards available in this filter.';
      cardIndexIndicator.textContent = '0 of 0';
      deckProgressBar.style.width = '0%';
      return;
    }

    const item = flashcardList[currentCardIndex];
    cardFrontBadge.textContent = `${item.section.toUpperCase()} • ${item.topic}`;
    cardFrontText.textContent = item.q;

    cardBackBadge.textContent = `${item.section.toUpperCase()} • ANSWER`;
    cardBackLead.textContent = item.short;

    cardBackBullets.innerHTML = item.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('');

    if (item.code) {
      cardBackCode.textContent = item.code;
      cardBackCodeWrap.style.display = 'block';
    } else {
      cardBackCodeWrap.style.display = 'none';
    }

    cardIndexIndicator.textContent = `Card ${currentCardIndex + 1} of ${flashcardList.length}`;
    const percent = ((currentCardIndex + 1) / flashcardList.length) * 100;
    deckProgressBar.style.width = `${percent}%`;

    updateMasteryDisplay();
  }

  function updateMasteryDisplay() {
    const masteredCount = Object.values(cardMastery).filter(v => v === 'mastered').length;
    const reviewCount = Object.values(cardMastery).filter(v => v === 'review').length;
    cardMasteryIndicator.textContent = `Mastered: ${masteredCount} | Review: ${reviewCount}`;
  }

  // =========================================================================
  // Quiz Logic
  // =========================================================================
  const quizListEl = document.getElementById('quiz-questions-list');
  const quizScoreBadge = document.getElementById('quiz-score-badge');
  const btnRestartQuiz = document.getElementById('btn-restart-quiz');

  function initQuiz() {
    renderQuiz();
    btnRestartQuiz.addEventListener('click', () => {
      quizAnswers = {};
      renderQuiz();
    });
  }

  function renderQuiz() {
    quizListEl.innerHTML = '';
    let correctCount = 0;
    let answeredCount = 0;

    STUDY_DATA.quizQuestions.forEach((qItem, idx) => {
      const qCard = document.createElement('div');
      qCard.className = 'quiz-card';

      const userAns = quizAnswers[idx];
      const hasAnswered = userAns !== undefined;

      if (hasAnswered) {
        answeredCount++;
        if (userAns === qItem.answer) correctCount++;
      }

      qCard.innerHTML = `
        <div class="quiz-q-num">Question ${idx + 1} of ${STUDY_DATA.quizQuestions.length}</div>
        <div class="quiz-q-text">${escapeHtml(qItem.q)}</div>
        <div class="quiz-options">
          ${qItem.options.map((opt, optIdx) => {
            let stateClass = '';
            if (hasAnswered) {
              if (optIdx === qItem.answer) stateClass = 'correct';
              else if (optIdx === userAns) stateClass = 'wrong';
            }
            return `
              <button class="quiz-opt-btn ${stateClass}" data-q="${idx}" data-opt="${optIdx}" ${hasAnswered ? 'disabled' : ''}>
                <span style="font-weight:700; color:var(--text-dim);">${String.fromCharCode(65 + optIdx)}.</span>
                <span>${escapeHtml(opt)}</span>
              </button>
            `;
          }).join('')}
        </div>
        <div class="quiz-explain ${hasAnswered ? 'is-visible' : ''}">
          <strong>💡 Rule / Explanation:</strong> ${escapeHtml(qItem.explain)}
        </div>
      `;

      // Option click
      const optionButtons = qCard.querySelectorAll('.quiz-opt-btn');
      optionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const optIdx = parseInt(btn.getAttribute('data-opt'), 10);
          quizAnswers[idx] = optIdx;
          renderQuiz();
        });
      });

      quizListEl.appendChild(qCard);
    });

    const percent = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    quizScoreBadge.textContent = `Score: ${correctCount} / ${answeredCount} (${percent}%)`;
  }

  // =========================================================================
  // Utilities
  // =========================================================================
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Initialize all components
  renderLearnSections();
  initFlashcards();
  initQuiz();
});
