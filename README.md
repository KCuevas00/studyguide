# Python Exam #2 Cram & Review Guide (Python 3.13)

Interactive, high-yield study website built directly from the CSCI Python Exam #2 Review Sheet.

Designed for rapid 2-day exam cramming with clean controls, no distractions, smooth cursor-tracking hover tooltips, mobile tap-to-pin drawers, interactive flashcards, practice quiz, and sample code verification.

---

## 🚀 Features

- **📖 Learn Tab**:
  - Exact review sheet questions styled cleanly with zero fluff.
  - **Smooth Cursor Tooltip**: Hovering over any question smoothly follows your cursor with a concise answer and code snippet.
  - **Tap-to-Pin (Mobile & Desktop)**: Click or tap any card to lock open its inline explanation and copy code snippets.
  - **Real-Time Search**: Instant filtering across all questions and topics (e.g. `BOM`, `split`, `ord`, `utf-8`, `readline`).
  - **Quick Section Navigation**: Fast jump pills for 7a, 7b, 7c, 7d, 7e, 7f, 8a, 8b, 8c, and sample code.
  - **Expand / Collapse All & Tooltip Toggle**: Custom controls to tailor your cram style.

- **🗂️ Flashcards Tab**:
  - Full deck of 57 interactive 3D flip cards covering all review questions.
  - **Keyboard Navigation**:
    - `Spacebar` / `Up` / `Down`: Flip card
    - `Left Arrow`: Previous card
    - `Right Arrow`: Next card
  - Filter deck by specific section (e.g. 7a Strings, 7f Regex, 8a Files) or study only cards marked for review.
  - Mastery tracking: **Got It (Mastered)** vs **Need Review** with visual progress bar.
  - Shuffle mode.

- **✍️ Quiz Tab**:
  - **Quizzes for Each Section**: Dedicated quizzes for every section (**7a Strings**, **7b Unicode**, **7c Encoding**, **7d Endianness**, **7e Format**, **7f Regex**, **8a Files & I/O**, **8b Binary I/O**, and **8c CSV & JSON**) plus an **All Sections** comprehensive exam mode.
  - **65 Targeted Multiple-Choice Questions**: Expanded from 17 to 65 deep questions derived directly from the review sheet and Python 3.13 nuances.
  - **Instant Feedback & In-Depth Explanations**: Immediate green/red visual states with clear explanations of exact Python 3.13 behavior.
  - **Per-Section Progress & Scoring**: Track live scores and accuracy percentages independently per section or across the entire course.
  - **Quick Quiz Launch**: "Take Quiz" buttons in the Learn tab let you jump directly into that section's quiz after reading.

- **💻 Sample Code & Lab Tab**:
  - **Sample Program**: Full, clean Python 3.13 solution using `with open(...)` and regex to count total lines, empty lines, characters (without EOL markers), and regex pattern matches.
  - **Professor Test Case**: Tested against `files-many.txt` (3 lines, 1 empty, 30 chars -> 33 bytes total).
  - **Code Evaluation Drills**: High-frequency output prediction questions (regex, split vs split(' '), format rounding, ord/chr math).

---

## 🛠️ How to Run Locally

No build tools or Node packages required! Simply double-click `index.html` or run:

```bash
# Python built-in server:
python -m http.server 8000
```
Then visit `http://localhost:8000` in any browser.

---

## 🌐 Deploy to GitHub Pages

1. In your GitHub repository settings, go to **Settings > Pages**.
2. Under **Build and deployment**, select:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `/ (root)`
3. Click **Save** — your site is live!
