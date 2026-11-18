// Python Exam #2 Cram Guide Data - Python 3.13
// Strict adherence to review sheet topics: 7a-7f, 8a-8c, sample code, and evaluation drills.

const STUDY_DATA = {
  sections: [
    {
      id: "7a",
      title: "7a. Strings",
      desc: "Immutability, concatenation, string methods, slicing, comparison, and iteration.",
      items: [
        {
          id: "7a-1",
          section: "7a",
          topic: "Character vs String",
          q: "1. How is a character different from a one-character string?",
          short: "Python has NO separate character type (like char in C/Java). A single character is just a str of length 1 (len(s) == 1).",
          bullets: [
            "Python does not have a char type.",
            "A 'character' is simply a string object (str) with length 1.",
            "Example: type('a') is <class 'str'>, len('a') == 1."
          ],
          code: "c = 'A'\nprint(type(c))   # <class 'str'>\nprint(len(c))    # 1"
        },
        {
          id: "7a-2",
          section: "7a",
          topic: "String Concatenation",
          q: "2. How do you concatenate strings?",
          short: "Use '+' operator, '+=', str.join(), or f-strings.",
          bullets: [
            "+ operator: s1 + s2 joins two strings into a new string.",
            "+= operator: s1 += s2 appends to s1 (creates a new string in memory).",
            "''.join(list_of_strings): Most efficient for concatenating many strings.",
            "f-strings: f\"{s1}{s2}\" combines variables cleanly."
          ],
          code: "a = 'cat'\nb = 'dog'\nc = a + b              # 'catdog'\nd = ' '.join([a, b])    # 'cat dog'\ne = f\"{a}-{b}\"          # 'cat-dog'"
        },
        {
          id: "7a-3",
          section: "7a",
          topic: "Essential String Methods",
          q: "3. Make sure you know how to use: s.count(), s.find(), s.rfind(), s.lstrip(), s.rstrip(), s.replace(), s.ljust(), s.rjust(), s.lower().",
          short: "Common inspection, search, stripping, padding, and case conversion methods.",
          bullets: [
            "s.count(sub): Returns count of non-overlapping occurrences of sub.",
            "s.find(sub): Returns lowest index of sub, or -1 if not found (never raises ValueError).",
            "s.rfind(sub): Returns highest (rightmost) index of sub, or -1 if not found.",
            "s.lstrip([chars]): Strips leading whitespace (or specified chars) from left.",
            "s.rstrip([chars]): Strips trailing whitespace (or specified chars) from right.",
            "s.replace(old, new[, count]): Replaces occurrences of old with new (returns new string).",
            "s.ljust(width[, fill]): Left-aligns string in field of width (pads right).",
            "s.rjust(width[, fill]): Right-aligns string in field of width (pads left).",
            "s.lower(): Returns a copy with all characters lowercase."
          ],
          code: "s = '  banana  '\nprint(s.count('a'))        # 3\nprint(s.find('na'))        # 4 (first index)\nprint(s.rfind('na'))       # 6 (last index)\nprint(s.find('z'))         # -1 (not found)\nprint(s.strip())           # 'banana'\nprint('cat'.replace('c','b')) # 'bat'\nprint('hi'.rjust(5, '-'))  # '---hi'"
        },
        {
          id: "7a-4",
          section: "7a",
          topic: "String to Int & Validation",
          q: "4. How do you convert a string of digits to an integer? How can you validate that a string is composed of digits before you do the conversion?",
          short: "Convert with int(s). Validate with s.isdigit() or s.isdecimal() before converting.",
          bullets: [
            "Conversion: int('123') -> 123.",
            "Validation: s.isdigit() returns True if all characters are digits (0-9) and string is non-empty.",
            "Alternatively: Wrap int(s) in a try...except ValueError block."
          ],
          code: "s = '42'\nif s.isdigit():\n    val = int(s)   # 42\nelse:\n    print('Invalid digits')"
        },
        {
          id: "7a-5",
          section: "7a",
          topic: "split() vs split('x') & join()",
          q: "5. Make sure you know how to use: s.split(), s.split('x'), ' '.join(list)",
          short: "s.split() splits on whitespace runs and discards empty chunks; s.split('x') splits strictly on delimiter 'x' and keeps empty strings; sep.join(lst) joins iterable of strings.",
          bullets: [
            "s.split(): Splits on consecutive whitespace (spaces, tabs, newlines), strips outer whitespace, and never returns empty strings.",
            "s.split('x'): Splits on exact delimiter 'x'. Empty substrings ARE retained (e.g. 'ax'.split('x') -> ['a', '']).",
            "' '.join(lst): Joins a list of strings with ' ' as separator. Items MUST be strings."
          ],
          code: "# Whitespace split\n'  a   b  c  '.split()     # ['a', 'b', 'c']\n\n# Delimiter split\n'a:b::c'.split(':')        # ['a', 'b', '', 'c']\n\n# Join\n'-'.join(['x', 'y', 'z'])    # 'x-y-z'"
        },
        {
          id: "7a-6",
          section: "7a",
          topic: "String Slicing",
          q: "6. Make sure you understand how slicing works for strings",
          short: "s[start:stop:step] extracts elements from start up to (excluding) stop by step.",
          bullets: [
            "s[start:stop]: From start up to stop - 1. Stop is EXCLUSIVE.",
            "s[start:]: From start to end of string.",
            "s[:stop]: From beginning (0) up to stop - 1.",
            "s[::step]: Slices with step stride. s[::-1] reverses the string.",
            "Negative indices: -1 is last character, -2 is second to last.",
            "Slicing never raises IndexError on out-of-range bounds."
          ],
          code: "s = 'Python'\nprint(s[0:2])    # 'Py'\nprint(s[2:])     # 'thon'\nprint(s[-3:])    # 'hon'\nprint(s[::-1])   # 'nohtyP'\nprint(s[10:20])  # '' (no error!)"
        },
        {
          id: "7a-7",
          section: "7a",
          topic: "String Immutability",
          q: "7. What does it mean to say strings are immutable? You have 'abc' and you want 'adc'. Since strings are immutable, how do you change the value of s?",
          short: "Strings cannot be modified in place. To change 'abc' to 'adc', create a new string with slicing or replace() and reassign s.",
          bullets: [
            "Immutable: The characters inside a str object in memory cannot be changed once created (s[1] = 'd' raises TypeError).",
            "How to change: Construct a NEW string and rebind the variable s.",
            "Method 1 (Slicing): s = s[:1] + 'd' + s[2:]",
            "Method 2 (Replace): s = s.replace('b', 'd')"
          ],
          code: "s = 'abc'\n# s[1] = 'd'       # ERROR: TypeError!\ns = s[:1] + 'd' + s[2:]   # 'adc'\n# Or:\ns = s.replace('b', 'd')    # 'adc'"
        },
        {
          id: "7a-8",
          section: "7a",
          topic: "String Comparison (s1 < s2)",
          q: "8. Given two strings, how does Python decide whether s1 < s2?",
          short: "Lexicographically: character by character using Unicode code point values (ord()).",
          bullets: [
            "Python compares corresponding characters from left to right using their code point values (ord(c)).",
            "Uppercase comes before lowercase in ASCII/Unicode: ord('A') is 65, ord('a') is 97. So 'Apple' < 'apple' is True, and 'Zebra' < 'apple' is True.",
            "If all characters match but one string is shorter, the shorter string is smaller ('cat' < 'caterpillar')."
          ],
          code: "print('A' < 'a')         # True  (65 < 97)\nprint('Zebra' < 'ant')     # True  ('Z' is 90 < 'a' is 97)\nprint('app' < 'apple')     # True  (prefix is shorter)"
        },
        {
          id: "7a-9",
          section: "7a",
          topic: "for x in string",
          q: "9. What does 'for x in string' do?",
          short: "Iterates over the string character by character from start to finish, binding x to a 1-character string on each pass.",
          bullets: [
            "Strings are iterables of 1-character strings.",
            "The loop runs len(string) times.",
            "x is a str of length 1 on each iteration."
          ],
          code: "for ch in 'Hi!':\n    print(ch)\n# Output:\n# H\n# i\n# !"
        }
      ]
    },
    {
      id: "7b",
      title: "7b. Unicode",
      desc: "Standard, code points, BMP, hex representation, ord() and chr().",
      items: [
        {
          id: "7b-1",
          section: "7b",
          topic: "Unicode, Code Points, BMP",
          q: "1. What is Unicode? What is a Unicode code point? How many of them are there? What is the BMP? How many characters does it contain?",
          short: "Unicode is the universal character set standard. A code point is a unique integer (U+XXXX). Total code points: 1,114,112. BMP is Plane 0 (U+0000 to U+FFFF) with 65,536 characters.",
          bullets: [
            "Unicode: Universal industry standard mapping characters of all human languages to unique numbers.",
            "Unicode Code Point: The integer number assigned to a character, written as U+XXXX (hexadecimal).",
            "Total code points: 1,114,112 (from U+0000 to U+10FFFF, across 17 planes of 65,536 each).",
            "BMP (Basic Multilingual Plane): Plane 0 (U+0000 to U+FFFF).",
            "BMP characters: Exactly 65,536 (2^16) characters, containing almost all modern languages and common symbols."
          ],
          code: "# BMP range: U+0000 to U+FFFF (65,536 characters)\n# Total Unicode range: U+0000 to U+10FFFF (1,114,112 code points)"
        },
        {
          id: "7b-2",
          section: "7b",
          topic: "U+0041 & Python Escapes",
          q: "2. The character 'A' has code point U+0041. Is that value decimal or hex? How do you write it using a Python escape sequence?",
          short: "Hexadecimal. Write in Python as '\\u0041' (4-digit hex) or '\\x41' (2-digit hex) or '\\U00000041' (8-digit hex).",
          bullets: [
            "U+0041 is HEXADECIMAL (0x0041 in hex = 65 in decimal).",
            "Python escape sequences:",
            "\\xXX: 2-digit hex (e.g. '\\x41')",
            "\\uXXXX: 4-digit hex for BMP (e.g. '\\u0041')",
            "\\UXXXXXXXX: 8-digit hex for any plane (e.g. '\\U00000041')"
          ],
          code: "print('\\x41')       # 'A'\nprint('\\u0041')     # 'A'\nprint('\\U00000041') # 'A'\nprint(0x0041)        # 65 (decimal)"
        },
        {
          id: "7b-3",
          section: "7b",
          topic: "ord() and chr()",
          q: "3. What does ord() do? What does chr() do?",
          short: "ord(c) returns the integer code point for a 1-character string; chr(i) returns the 1-character string for an integer code point.",
          bullets: [
            "ord('A') -> 65 (character to integer code point).",
            "chr(65) -> 'A' (integer code point to character).",
            "They are inverse functions: chr(ord('A')) == 'A'."
          ],
          code: "print(ord('A'))      # 65\nprint(chr(65))       # 'A'\nprint(ord('a'))      # 97\nprint(chr(ord('A') + 3)) # 'D'"
        }
      ]
    },
    {
      id: "7c",
      title: "7c. Encoding",
      desc: "UTF-8, ASCII, ISO-8859-1, Latin-1, CP1252, BOM, and file encodings.",
      items: [
        {
          id: "7c-1",
          section: "7c",
          topic: "UTF-8 vs Unicode",
          q: "1. What is UTF-8? What is the difference between Unicode and UTF? Do all characters have the same byte length in the UTF-8 encoding?",
          short: "UTF-8 is a variable-length byte encoding (1-4 bytes). Unicode is the abstract character-to-number mapping; UTF is the encoding into bytes. No, byte lengths vary.",
          bullets: [
            "UTF-8: Variable-width encoding that serializes Unicode code points into 1 to 4 bytes.",
            "Unicode vs UTF: Unicode assigns numbers (code points) to characters; UTF (Unicode Transformation Format) specifies how those numbers are stored as raw bytes in memory/disk.",
            "Byte lengths vary: ASCII characters take 1 byte; others take 2, 3, or 4 bytes."
          ],
          code: "print(len('A'.encode('utf-8')))    # 1 byte  (ASCII)\nprint(len('é'.encode('utf-8')))    # 2 bytes (Latin)\nprint(len('文'.encode('utf-8')))   # 3 bytes (CJK BMP)\nprint(len('🐍'.encode('utf-8')))   # 4 bytes (Emoji)"
        },
        {
          id: "7c-2",
          section: "7c",
          topic: "BMP Byte Length in UTF-8",
          q: "2. Do all the characters in the BMP (basic multilingual plane) have the same byte length in UTF-8? Why or why not?",
          short: "NO. In UTF-8, BMP characters use 1, 2, or 3 bytes depending on their code point value.",
          bullets: [
            "Code points 0 to 127 (U+0000..U+007F): 1 byte.",
            "Code points 128 to 2047 (U+0080..U+07FF): 2 bytes.",
            "Code points 2048 to 65535 (U+0800..U+FFFF): 3 bytes.",
            "Because UTF-8 uses variable-length prefix bits to preserve backwards ASCII compatibility."
          ],
          code: "# All in BMP (U+0000 - U+FFFF):\n# 'A' (U+0041) -> 1 byte\n# 'é' (U+00E9) -> 2 bytes\n# '中' (U+4E2D) -> 3 bytes"
        },
        {
          id: "7c-3",
          section: "7c",
          topic: "ASCII & 128-255 Ranges",
          q: "3. Which code points match the 7-bit ASCII characters? Which standard do the code points from 128 to 255 match?",
          short: "Code points 0 to 127 match 7-bit ASCII. Code points 128 to 255 match ISO 8859-1 (Latin-1).",
          bullets: [
            "0 to 127 (U+0000 to U+007F): 7-bit ASCII characters.",
            "128 to 255 (U+0080 to U+00FF): ISO 8859-1 (Latin-1).",
            "Unicode was explicitly designed so its first 256 code points match ISO 8859-1 exactly."
          ],
          code: "# 0..127    -> ASCII\n# 128..255  -> ISO 8859-1 (Latin-1)\n# 0..255 of Unicode == ISO 8859-1"
        },
        {
          id: "7c-4",
          section: "7c",
          topic: "ASCII & Extended ASCII",
          q: "4. What is ASCII? How many characters does the ASCII encoding contain? How can you tell if a byte contains a legal ASCII character? Why is there no such thing as an “extended ASCII standard”?",
          short: "ASCII is a 7-bit code with 128 characters (0-127). A legal ASCII byte has most significant bit = 0 (value < 128). There is NO single extended ASCII standard because multiple incompatible 8-bit standards were created.",
          bullets: [
            "ASCII: American Standard Code for Information Interchange.",
            "Size: 128 characters (codes 0 to 127, using 7 bits).",
            "Legal ASCII check: The highest bit (bit 7) is 0 (i.e. byte < 128, or byte & 0x80 == 0).",
            "Why no 'extended ASCII standard': No single governing body standard exists; instead, numerous conflicting proprietary and regional 8-bit code pages (ISO-8859-1..16, CP1252, OEM 437) each used 128-255 differently."
          ],
          code: "# Check if byte is legal ASCII:\ndef is_ascii_byte(b):\n    return b < 128  # bit 7 is 0"
        },
        {
          id: "7c-5",
          section: "7c",
          topic: "ISO 8859-1, ASCII & Unicode",
          q: "5. What is the relationship between ISO 8859-1 and ASCII? What is the relationship between ISO 8859-1 and Unicode?",
          short: "ISO 8859-1 is a strict 8-bit superset of 7-bit ASCII (0-127 identical). Unicode's first 256 code points (0-255) are identical to ISO 8859-1.",
          bullets: [
            "ISO 8859-1 and ASCII: Characters 0-127 in ISO 8859-1 are identical to ASCII.",
            "ISO 8859-1 and Unicode: Unicode adopted ISO 8859-1 verbatim for code points U+0000 through U+00FF."
          ],
          code: "# ASCII (0-127) ⊂ ISO 8859-1 (0-255) == Unicode (U+0000-U+00FF)"
        },
        {
          id: "7c-6",
          section: "7c",
          topic: "Python Default Encoding & open()",
          q: "6. What is Python’s default encoding for files? How do you indicate a different encoding?",
          short: "Platform-dependent (locale-dependent, moving to UTF-8 in modern Python). Specify a different encoding with open(..., encoding='name').",
          bullets: [
            "Default encoding in Python: Historically platform/locale dependent (e.g. cp1252 on Windows, utf-8 on Linux), UTF-8 in Python UTF-8 mode.",
            "Specifying encoding: Pass the encoding keyword parameter to open(), e.g. open('data.txt', encoding='utf-8') or encoding='latin-1'."
          ],
          code: "with open('file.txt', 'r', encoding='utf-8') as f:\n    content = f.read()\n\nwith open('legacy.txt', 'r', encoding='latin-1') as f:\n    content = f.read()"
        },
        {
          id: "7c-7",
          section: "7c",
          topic: "BOM & utf-8-sig",
          q: "7. What is a BOM? Why does a UTF-8 file not need a BOM? If a UTF-8 file contains a BOM anyhow, how do you indicate that when opening the file?",
          short: "BOM is Byte Order Mark (U+FEFF). UTF-8 doesn't need it because its units are 1-byte (no endianness). If a file has one, open with encoding='utf-8-sig'.",
          bullets: [
            "BOM (Byte Order Mark): Code point U+FEFF placed at the start of a file to indicate byte order (endianness) for UTF-16 / UTF-32.",
            "Why UTF-8 does not need it: UTF-8 encodes code points as single-byte sequences, so byte order does not exist.",
            "If UTF-8 has a BOM: Open with encoding='utf-8-sig' to automatically strip the EF BB BF signature bytes on read."
          ],
          code: "# Strips BOM automatically\nwith open('windows_utf8.txt', 'r', encoding='utf-8-sig') as f:\n    text = f.read()"
        },
        {
          id: "7c-8",
          section: "7c",
          topic: "Bytes Per Character Comparison",
          q: "8. How many bytes does each character use in ASCII? How about in the different variants of extended ASCII? How about in UTF-8?",
          short: "ASCII: 1 byte (7 bits used). Extended ASCII: 1 byte (8 bits). UTF-8: Variable, 1 to 4 bytes.",
          bullets: [
            "ASCII: Exactly 1 byte per character (highest bit is always 0).",
            "Extended ASCII (ISO 8859-x, CP1252): Exactly 1 byte per character (8 bits, fixed width).",
            "UTF-8: Variable width: 1 byte (ASCII), 2 bytes (Latin/Greek/Arabic), 3 bytes (Asian BMP), 4 bytes (emojis/supplementary)."
          ],
          code: "# ASCII: 1 byte\n# Extended ASCII: 1 byte\n# UTF-8: 1 to 4 bytes"
        },
        {
          id: "7c-9",
          section: "7c",
          topic: "ISO 8859-1 vs Latin-1 vs CP1252",
          q: "9. What is the relationship between ISO 8859-1, Latin-1 and CP1252?",
          short: "ISO 8859-1 IS Latin-1. CP1252 (Windows-1252) is a superset of ISO 8859-1 that replaces unused control codes (128-159) with printable characters like €, “, ”, —.",
          bullets: [
            "ISO 8859-1 and Latin-1 are two names for the exact same standard.",
            "In ISO 8859-1, byte range 128–159 (0x80–0x9F) contains unused C1 control codes.",
            "CP1252 (Windows-1252) replaces those unused control codes with useful printable symbols: Euro (€, 0x80), smart quotes (“ ”), em-dash (—), bullet (•), and trademark (™)."
          ],
          code: "# 0x80 in CP1252 = '€'\n# 0x80 in ISO 8859-1 = undefined / control char"
        },
        {
          id: "7c-10",
          section: "7c",
          topic: "ASCII vs Extended ASCII Variants",
          q: "10. What is the relationship between ASCII and any of the variants of extended ASCII?",
          short: "ASCII (0-127) is the identical base foundation (lower half) of every extended ASCII variant; only codes 128-255 differ.",
          bullets: [
            "All extended ASCII variants preserve 0-127 exactly as 7-bit ASCII.",
            "They only differ in the characters mapped to the upper 128 positions (128-255)."
          ],
          code: "# Any extended ASCII: [0..127: pure ASCII] + [128..255: variant-specific]"
        }
      ]
    },
    {
      id: "7d",
      title: "7d. Endianness",
      desc: "Byte ordering, Big-Endian vs Little-Endian, BOM issues, and utf-8-sig.",
      items: [
        {
          id: "7d-1",
          section: "7d",
          topic: "Endianness & UTF-8",
          q: "1. What is byte serialization/byte ordering/endianness? How can endianness be marked on a file? Why does UTF-8 not need to mark endianness? How do you indicate encoding when opening a file in Python?",
          short: "Endianness is the order of bytes in multi-byte values (Big-Endian = MSB first, Little-Endian = LSB first). Marked via BOM (U+FEFF). UTF-8 doesn't need it because its units are 1-byte. In Python: open(..., encoding='utf-16-le').",
          bullets: [
            "Endianness: The sequence order in which multi-byte words are stored in memory/files (Big-Endian = most significant byte first; Little-Endian = least significant byte first).",
            "File marker: BOM (U+FEFF): FE FF = Big-Endian, FF FE = Little-Endian.",
            "Why UTF-8 doesn't need it: UTF-8 code units are individual 8-bit bytes, so byte ordering within units does not apply.",
            "Python open: open(fn, encoding='utf-16-le') or encoding='utf-16-be'."
          ],
          code: "# UTF-16 with explicit endianness:\nopen('data.txt', encoding='utf-16-le')\nopen('data.txt', encoding='utf-16-be')"
        },
        {
          id: "7d-2",
          section: "7d",
          topic: "The UTF-8 'BOM' Problem & utf-8-sig",
          q: "2. Some software manufacturers provide a “BOM” on UTF-8 files. Why is this not truly a BOM? What problems does this cause? How does the utf-8-sig encoding solve these problems?",
          short: "Not a real BOM because UTF-8 has no byte order; it's just a 3-byte signature (EF BB BF). It breaks scripts, shebangs, and parsers. utf-8-sig strips it on read and handles it cleanly.",
          bullets: [
            "Why not truly a BOM: UTF-8 has no byte ordering; Microsoft tools used the 3 bytes (0xEF, 0xBB, 0xBF) merely as an encoding signature.",
            "Problems caused: Breaks Unix shell scripts/shebangs (#!/bin/bash becomes ï»¿#!/bin/bash), breaks JSON/CSV parsers, and shows up as unwanted characters in text.",
            "Solution: open(fn, encoding='utf-8-sig') transparently strips the BOM when reading, and writes it when writing."
          ],
          code: "# Without utf-8-sig: text might start with '\\ufeff'\n# With utf-8-sig: '\\ufeff' is automatically stripped\nwith open('file.txt', 'r', encoding='utf-8-sig') as f:\n    clean_text = f.read()"
        }
      ]
    },
    {
      id: "7e",
      title: "7e. Format",
      desc: "str.format(), specifiers (:d, :c, :s, :e, :f), alignment, rounding, and f-strings.",
      items: [
        {
          id: "7e-1",
          section: "7e",
          topic: "format() Variable Mismatches & Types",
          q: "1. When format() is used for printing, what happens if there are fewer variables than format items? What happens if there are more variables than format items? What happens if a variable doesn’t have the type required by the corresponding format item?",
          short: "Fewer variables -> IndexError. More variables -> extra variables are ignored. Wrong type -> ValueError.",
          bullets: [
            "Fewer variables: Raises IndexError: Replacement index ... out of range.",
            "More variables: No error; extra variables are simply ignored.",
            "Wrong type: Raises ValueError: Unknown format code ... or Cannot switch from... (e.g. passing 'abc' to {:d})."
          ],
          code: "# Fewer variables:\n# '{0} {1}'.format('a')        # IndexError!\n\n# More variables:\n'{0}'.format('a', 'b')         # 'a' (no error)\n\n# Wrong type:\n# '{:d}'.format('hello')       # ValueError!"
        },
        {
          id: "7e-2",
          section: "7e",
          topic: "Field Width, Justification & Rounding",
          q: "2. How can you use format() to print an integer right-justified in a 10-column field? How about left justified? What is the default justification for integers? Same questions for strings. Same question for float (6 before, 2 after). Are floats rounded or truncated?",
          short: "Int right: '{:>10d}'.format(n) or '{:10d}'.format(n). Int left: '{:<10d}'.format(n). Numbers default RIGHT, strings default LEFT. Float: '{:9.2f}'.format(x). Floats are ROUNDED.",
          bullets: [
            "Integer right-justified (10 cols): '{:>10d}'.format(x) or '{:10d}'.format(x).",
            "Integer left-justified (10 cols): '{:<10d}'.format(x).",
            "Defaults: Numbers (int, float) default to RIGHT-justified; strings default to LEFT-justified.",
            "String right-justified: '{:>10s}'.format(s). String left: '{:<10s}'.format(s) or '{:10s}'.format(s).",
            "Float (6 digits before, 2 after): Total field width = 6 + 1(dot) + 2 = 9. So '{:9.2f}'.format(x).",
            "Floats are ROUNDED (not truncated) to the requested decimal places!"
          ],
          code: "print('{:10d}'.format(42))      # '        42' (right default)\nprint('{:<10d}'.format(42))     # '42        '\nprint('{:10s}'.format('hi'))    # 'hi        ' (left default)\nprint('{:9.2f}'.format(123456.789)) # '123456.79' (ROUNDED!)"
        },
        {
          id: "7e-3",
          section: "7e",
          topic: "int to str, ljust(), rjust(), zfill()",
          q: "3. How can you convert an int to a string, e.g., so that you can build a complex output via concatenation? How can you left or right-justify the int in the string? What do ljust(), rjust() and zfill() do?",
          short: "Convert with str(n) or f'{n}'. Justify with s.ljust(width), s.rjust(width). zfill(width) pads on left with zeros while preserving leading sign (+/-).",
          bullets: [
            "Convert int to str: str(x) or f'{x}'.",
            "s.ljust(width[, fillchar]): Left-aligns string, padding right with spaces (or fillchar).",
            "s.rjust(width[, fillchar]): Right-aligns string, padding left with spaces (or fillchar).",
            "s.zfill(width): Pads left with zeros ('0') to reach width. Preserves leading '+' or '-' correctly!"
          ],
          code: "s = str(42)\nprint(s.ljust(6, '.'))   # '42....'\nprint(s.rjust(6, '.'))   # '....42'\nprint('42'.zfill(5))     # '00042'\nprint('-42'.zfill(5))    # '-0042' (sign preserved!)"
        },
        {
          id: "7e-4",
          section: "7e",
          topic: "print() newline, sep, and no-args",
          q: "4. How can you avoid the default newline at the end of a print statement? How can you avoid the default space between items? What does print() with no arguments do?",
          short: "Avoid newline: print(..., end=''). Avoid space: print(..., sep=''). print() with no args prints a single newline.",
          bullets: [
            "Avoid newline: Set end='', e.g. print('Hello', end=''). Default is end='\\n'.",
            "Avoid space between items: Set sep='', e.g. print('A', 'B', sep=''). Default is sep=' '.",
            "print() with no arguments: Prints an empty line (outputs just the end newline character)."
          ],
          code: "print('a', 'b', sep='')       # 'ab'\nprint('Line 1', end=' -> ')  # No newline\nprint('Line 2')\nprint()                      # Prints blank line"
        },
        {
          id: "7e-5",
          section: "7e",
          topic: "s.format() Specifiers",
          q: "5. Make sure you know how to use s.format(), including: data types :d, :c, :s, :e, :f; minus sign; field width; alignment; braces to choose a variable.",
          short: ":d (int), :c (char from ord), :s (str), :e (exp), :f (float); :- or :+; field width; <, >, ^ alignment; {0}, {1}, {var}.",
          bullets: [
            ":d = decimal integer, :c = character from integer code point, :s = string.",
            ":e = exponential / scientific notation (e.g. 1.23e+02), :f = fixed-point float.",
            "Minus sign: ':-' (default: minus on negative only), ':+' (always show sign + or -), ': ' (space for positive).",
            "Width & Alignment: '<' left, '>' right, '^' center (e.g. '{:^10}').",
            "Braces: Positional '{0}', '{1}' or named '{name}'."
          ],
          code: "print('{:d} {:c} {:s}'.format(65, 65, 'hi')) # '65 A hi'\nprint('{:10.2e}'.format(1234.5))            # '  1.23e+03'\nprint('{:+d} {:+d}'.format(42, -42))        # '+42 -42'\nprint('{0} then {1}, back to {0}'.format('A', 'B')) # 'A then B, back to A'"
        },
        {
          id: "7e-6",
          section: "7e",
          topic: "f-strings",
          q: "6. Make sure you know how to use an f-string to create a formatted string.",
          short: "Prefix with f or F; embed expressions in {expr:specifier}.",
          bullets: [
            "Syntax: f\"text {variable:specifier} text\".",
            "Expressions are evaluated directly at runtime: f\"{2 + 2}\" -> '4'.",
            "Supports all format specifiers: f\"{val:>10.2f}\"."
          ],
          code: "name = 'Alice'\nscore = 95.678\nprint(f\"{name:>10}: {score:6.2f}\") # '     Alice:  95.68'"
        }
      ]
    },
    {
      id: "7f",
      title: "7f. Regex / subst",
      desc: "Regex syntax, compilation, search vs match vs findall, raw strings, Match object, and re.sub.",
      items: [
        {
          id: "7f-1",
          section: "7f",
          topic: "Regex Metacharacters & Classes",
          q: "1. Make sure you can write or evaluate a regex: letters/digits, ., [], [^], ^, $, *, +, (), \\d, \\s, \\w.",
          short: "Literal letters/digits; . any char; [] set; [^] complement; ^ start; $ end; * 0+; + 1+; () group; \\d digit; \\s space; \\w word.",
          bullets: [
            "Constants: Letters and digits match themselves literally.",
            ". (dot): Matches any single character except newline.",
            "[abc] / [^abc]: Character set / Negated set (matches any char NOT in set).",
            "^ / $: Anchored at beginning of string (^) or end of string ($).",
            "* / +: 0 or more occurrences (*), 1 or more occurrences (+).",
            "(): Grouping and capturing sub-matches.",
            "\\d: Any decimal digit [0-9].",
            "\\s: Any whitespace character (space, tab, newline).",
            "\\w: Any word character [a-zA-Z0-9_]."
          ],
          code: "import re\npattern = r'^\\w+\\s+\\d+$'\nprint(bool(re.match(pattern, 'Item 42')))   # True\nprint(bool(re.match(pattern, 'Item 42!')))  # False ($ anchored)"
        },
        {
          id: "7f-2",
          section: "7f",
          topic: "Compiled vs Uncompiled Regex",
          q: "2. Make sure you can use a regex both with and without compilation.",
          short: "With compilation: p = re.compile(pattern); p.search(s). Without: re.search(pattern, s). Compilation saves time in loops.",
          bullets: [
            "Without compilation: re.search(pattern, s), re.findall(pattern, s). Convenient for one-off calls.",
            "With compilation: p = re.compile(pattern); p.search(s). Pre-compiles the regex into an object.",
            "Why compile: Significantly improves performance when searching repeatedly or inside loops."
          ],
          code: "import re\n# Without compilation:\nm1 = re.search(r'\\d+', 'abc123')\n\n# With compilation:\npat = re.compile(r'\\d+')\nm2 = pat.search('abc123')"
        },
        {
          id: "7f-3",
          section: "7f",
          topic: "re.search() vs re.match() vs re.findall()",
          q: "3. Make sure you understand the difference between re.search(), re.match() and re.findall().",
          short: "re.match() checks ONLY at string start. re.search() finds the FIRST match anywhere. re.findall() finds ALL matches and returns a list of strings.",
          bullets: [
            "re.match(p, s): Matches ONLY from index 0 (start of string). Returns Match object or None.",
            "re.search(p, s): Searches anywhere in string for the first match. Returns Match object or None.",
            "re.findall(p, s): Returns a list of all non-overlapping matches as strings (or tuples of groups). Returns empty list [] if no match."
          ],
          code: "import re\ns = 'cat 10 dog 20'\n\nprint(re.match(r'\\d+', s))     # None (doesn't start with digits)\nprint(re.search(r'\\d+', s).group())  # '10' (first match anywhere)\nprint(re.findall(r'\\d+', s))  # ['10', '20'] (all matches as list)"
        },
        {
          id: "7f-4",
          section: "7f",
          topic: "Raw Strings (r'...') & Regex",
          q: "4. What is a raw string? How are escape characters handled in raw strings? Why are raw strings useful when using regex?",
          short: "Raw strings (r'...') treat backslashes literally without interpreting escape sequences. Regex needs many backslashes (\\d, \\s); raw strings avoid double-escaping ('\\\\\\\\').",
          bullets: [
            "Raw string: A string prefixed with r or R, e.g. r'\\n'.",
            "Escape characters: Backslashes are treated as literal characters; '\\n' is two characters ('\\' and 'n'), not a newline.",
            "Why useful in regex: Regex uses backslashes for character classes (\\d, \\w) and escapes. Without raw strings, you would need '\\\\d' instead of r'\\d'."
          ],
          code: "# Normal string: '\\n' is 1 char (newline)\n# Raw string: r'\\n' is 2 chars ('\\' and 'n')\nimport re\n# Clean with raw string:\nre.search(r'\\d+\\.\\d+', '3.14')"
        },
        {
          id: "7f-5",
          section: "7f",
          topic: "The Match Object",
          q: "5. Make sure you know how to create and use a match object.",
          short: "Returned by re.search() or re.match(). Use m.group() for entire match, m.group(1) for group 1, m.groups() for tuple of groups, m.span() for (start, end).",
          bullets: [
            "Creation: m = re.search(pattern, string). Evaluates to True if matched, None (False) if not.",
            "m.group() or m.group(0): Full matched text.",
            "m.group(1), m.group(2): Captured parenthesized groups.",
            "m.groups(): Tuple containing all captured groups.",
            "m.start(), m.end(), m.span(): Index positions of match in original string."
          ],
          code: "import re\nm = re.search(r'(\\w+)-(\\d+)', 'Item-999')\nif m:\n    print(m.group(0))  # 'Item-999'\n    print(m.group(1))  # 'Item'\n    print(m.group(2))  # '999'\n    print(m.span())    # (0, 8)"
        },
        {
          id: "7f-6",
          section: "7f",
          topic: "re.sub()",
          q: "6. Make sure you know how to use re.sub().",
          short: "re.sub(pattern, replacement, string, count=0) replaces matches of pattern with replacement string.",
          bullets: [
            "Syntax: re.sub(pattern, replacement, string, count=0).",
            "Returns a new string with matches replaced.",
            "count=0 replaces all occurrences; count=1 replaces only the first."
          ],
          code: "import re\ns = 'red, green, blue 123'\n# Replace all numbers with '#'\nprint(re.sub(r'\\d+', '#', s)) # 'red, green, blue #'\n\n# Replace commas with semicolons\nprint(re.sub(r',\\s*', '; ', s)) # 'red; green; blue 123'"
        }
      ]
    },
    {
      id: "8a",
      title: "8a. Files and text I/O",
      desc: "Line endings, open(), modes, context manager with, readline() vs readlines(), and write().",
      items: [
        {
          id: "8a-2",
          section: "8a",
          topic: "Line Endings & Python Translation",
          q: "2. How does Unix mark a line ending? How does Windows mark a line ending? How does Python indicate a line ending when you read a file?",
          short: "Unix: LF (\\n). Windows: CRLF (\\r\\n). In text mode, Python universal newlines translates all of them to \\n.",
          bullets: [
            "Unix / Linux / macOS: LF (Line Feed, '\\n', ASCII 10).",
            "Windows: CRLF (Carriage Return + Line Feed, '\\r\\n', ASCII 13 followed by ASCII 10).",
            "Python behavior: In text mode, Python's universal newline mode automatically converts '\\r\\n' (and old Mac '\\r') into a single '\\n' upon reading."
          ],
          code: "# Regardless of whether the file was saved on Windows or Unix:\nwith open('file.txt', 'r') as f:\n    for line in f:\n        assert line.endswith('\\n') or True"
        },
        {
          id: "8a-3",
          section: "8a",
          topic: "open() Modes & Defaults",
          q: "3. How do you open a file in Python? How do you indicate whether the file is to be opened for reading or writing? Which is the default? How do you indicate characters vs binary? Which is the default?",
          short: "open(filename, mode). Read is 'r', write is 'w'. Default is 'r'. Characters is 't', binary is 'b'. Default is 't'. Combined default is 'rt'.",
          bullets: [
            "Syntax: f = open('filename.txt', 'r').",
            "Read vs Write: 'r' = read, 'w' = write (truncates file), 'a' = append. Default is 'r'.",
            "Text vs Binary: 't' = text mode (strings), 'b' = binary mode (bytes). Default is 't'.",
            "Combined default mode: 'rt' (reading text)."
          ],
          code: "# Defaults to read text ('rt'):\nwith open('notes.txt') as f: ...\n\n# Explicit write text:\nwith open('out.txt', 'w') as f: ...\n\n# Binary read:\nwith open('img.png', 'rb') as f: ..."
        },
        {
          id: "8a-4",
          section: "8a",
          topic: "with Context Manager",
          q: "4. How do you use the with context manager? What are the advantages of using it? Which file I/O functions should use a context manager?",
          short: "with open(...) as f:. Automatically closes file on block exit even if exceptions happen. ALL file open operations should use it.",
          bullets: [
            "Syntax: with open('data.txt') as f: ...",
            "Advantage: Guarantees file is automatically closed as soon as the block exits, even if an exception is raised or a return occurs. Prevents resource/descriptor leaks.",
            "Which operations: ALL file open operations in Python should use with."
          ],
          code: "with open('data.txt', 'r') as f:\n    data = f.read()\n# File is automatically closed here!"
        },
        {
          id: "8a-5",
          section: "8a",
          topic: "for line in file, Empty Lines & EOF",
          q: "5. Make sure you can read a file using 'for x in file' and a context manager. Example: line count, empty lines, EOF.",
          short: "for line in file iterates lazily line-by-line. An empty line is line == '\\n'. Loop naturally ends when EOF is reached.",
          bullets: [
            "for line in f: Iterates line-by-line without loading entire file into memory.",
            "Empty line check: An empty line contains ONLY the newline character: line == '\\n' (or line.rstrip('\\r\\n') == '').",
            "EOF detection: The iterator stops automatically when end of file is reached (generator exhausts)."
          ],
          code: "lines = 0\nempty_lines = 0\nwith open('file.txt', 'r') as f:\n    for line in f:\n        lines += 1\n        if line == '\\n':\n            empty_lines += 1\nprint(f'Total: {lines}, Empty: {empty_lines}')"
        },
        {
          id: "8a-6",
          section: "8a",
          topic: "f.readline() & EOF",
          q: "6. What does f.readline() do? How do you tell if it has reached end of file?",
          short: "Reads one line at a time (including trailing '\\n'). Reached EOF when it returns an empty string '' (len == 0).",
          bullets: [
            "f.readline(): Reads the next line up to and including the newline character '\\n'.",
            "EOF check: Returns '' (empty string of length 0) when EOF is reached.",
            "CRUCIAL EXAM DISTINCTION: A blank/empty line returns '\\n' (length 1), NOT ''! Only EOF returns ''."
          ],
          code: "with open('file.txt') as f:\n    while True:\n        line = f.readline()\n        if line == '':   # EOF reached!\n            break\n        print(line, end='')"
        },
        {
          id: "8a-7",
          section: "8a",
          topic: "f.readlines()",
          q: "7. What data structure does f.readlines() return? Do the entries contain an end-of-file marker (\\n)?",
          short: "Returns a list of strings. YES, each string retains the trailing newline '\\n'.",
          bullets: [
            "Return type: A Python list of strings (list[str]).",
            "Trailing newline: YES, each line in the list includes '\\n' at the end (unless the very last line of the file had no newline)."
          ],
          code: "with open('test.txt') as f:\n    lines = f.readlines()\n# lines is ['line1\\n', 'line2\\n', '']"
        },
        {
          id: "8a-8",
          section: "8a",
          topic: "f.write() vs print(..., file=f)",
          q: "8. How do you write an output file with write? What is different from writing an output file with print?",
          short: "f.write(s) takes ONLY strings and adds NO newline. print(..., file=f) converts any types to string, separates with spaces, and appends a newline automatically.",
          bullets: [
            "f.write(s): Only accepts string (numbers cause TypeError); does NOT automatically append a newline (must add '\\n' manually).",
            "print(val, file=f): Automatically converts any type to string, adds spaces between multiple args (sep=' '), and adds a newline (end='\\n') by default."
          ],
          code: "with open('out.txt', 'w') as f:\n    f.write('Hello\\n')          # Must supply '\\n' and string\n    # f.write(42)              # TypeError!\n    print(42, 'cats', file=f)  # Automatically converts and appends '\\n'"
        }
      ]
    },
    {
      id: "8b",
      title: "8b. Binary I/O",
      desc: "Binary mode, struct.pack/unpack, endianness in binary data, bytes.decode.",
      items: [
        {
          id: "8b-1",
          section: "8b",
          topic: "Binary Mode ('b') vs Text Mode",
          q: "1. How do you open a file for binary I/O? Why does Python need to know whether a file is text or binary?",
          short: "Open with 'rb' or 'wb'. Text mode decodes bytes to strings and translates newlines; binary mode preserves raw, untranslated bytes.",
          bullets: [
            "Open syntax: open('file.bin', 'rb') or open('file.bin', 'wb').",
            "Why Python needs to know: In text mode, Python decodes bytes into str using an encoding and alters CRLF/LF newlines. In binary mode, Python deals with pure raw bytes without any decoding or newline translation."
          ],
          code: "with open('image.png', 'rb') as f:\n    raw_bytes = f.read(4) # returns bytes object, e.g. b'\\x89PNG'"
        },
        {
          id: "8b-2",
          section: "8b",
          topic: "struct.unpack() & struct.pack()",
          q: "2. Why does Python need to know the types of items you expect to find in a binary file? What function converts from a byte string to a Python tuple? What function converts from a Python tuple to a byte string?",
          short: "Binary data has no type tags. struct.unpack() converts bytes to tuple; struct.pack() converts tuple/values to bytes.",
          bullets: [
            "Why need types: A binary file is just a stream of 0s and 1s; nothing inside indicates if 4 bytes are an integer, a float, or text.",
            "Bytes -> Tuple: struct.unpack(format, byte_data).",
            "Tuple/values -> Bytes: struct.pack(format, v1, v2, ...)."
          ],
          code: "import struct\n# Pack int and float into bytes:\ndata = struct.pack('>if', 42, 3.14)\n# Unpack bytes back to tuple:\nvalues = struct.unpack('>if', data) # (42, 3.140000104904175)"
        },
        {
          id: "8b-3",
          section: "8b",
          topic: "Endianness in Binary Data",
          q: "3. Why is endianness important when using binary data in Python?",
          short: "Multi-byte values (ints, floats) store bytes in Big-Endian or Little-Endian order. Reading in the wrong byte order scrambles the numerical value completely.",
          bullets: [
            "Multi-byte numbers (e.g. 32-bit int) span multiple bytes.",
            "Big-Endian: Most significant byte stored first.",
            "Little-Endian: Least significant byte stored first.",
            "If read with the wrong endianness, the value is completely wrong (e.g. 1 becomes 16,777,216)."
          ],
          code: "import struct\n# 1 in 32-bit int Big-Endian vs Little-Endian:\nprint(struct.pack('>I', 1)) # b'\\x00\\x00\\x00\\x01'\nprint(struct.pack('<I', 1)) # b'\\x01\\x00\\x00\\x00'"
        },
        {
          id: "8b-4",
          section: "8b",
          topic: "Encoding & bytes.decode()",
          q: "4. Why do you need to know the encoding to convert a byte string to characters? What Python function is used for this purpose?",
          short: "Different encodings map the same byte values to completely different characters. Use bytes.decode(encoding) (e.g. b.decode('utf-8')).",
          bullets: [
            "Why encoding is needed: A byte value like 0xE9 represents 'é' in Latin-1, but is an illegal incomplete sequence in UTF-8. Without the encoding, bytes cannot be mapped to Unicode characters.",
            "Function: bytes.decode(encoding) converts bytes -> str.",
            "(Opposite function: str.encode(encoding) converts str -> bytes)."
          ],
          code: "b = b'hello'\ns = b.decode('utf-8')  # 'hello' (bytes to str)\nraw = s.encode('utf-8') # b'hello' (str to bytes)"
        }
      ]
    },
    {
      id: "8c",
      title: "8c. CSV and JSON",
      desc: "Delimiters, handling commas, keys, data types, json.dump() vs load(), sort_keys.",
      items: [
        {
          id: "8c-1",
          section: "8c",
          topic: "CSV Basics, Headers & Types",
          q: "1. What is CSV? Do CSV files always have headers? What is the default data type of fields in a CSV file?",
          short: "Comma-Separated Values (plain text tabular data). Headers are NOT required (optional). Default data type of all fields is string (str).",
          bullets: [
            "CSV: Comma-Separated Values, a simple plain-text format for tabular data.",
            "Headers: Optional! CSV files do not always have header rows.",
            "Default type: String (str). All values read from a CSV file are strings until explicitly converted (e.g. int() or float())."
          ],
          code: "import csv\n# CSV rows are always lists of strings:\n# ['Alice', '25', '98.5'] -> '25' is str, not int!"
        },
        {
          id: "8c-2",
          section: "8c",
          topic: "Separators & Commas in Fields",
          q: "2. What is the default field separator in a CSV file? What is an alternate separator? What are two ways to handle a field that contains a comma?",
          short: "Default separator is comma (,). Alternates: tab (\\t), semicolon (;), pipe (|). Handle commas: 1) Enclose field in quotes (\"Doe, Jane\"), 2) Escape comma with backslash (Doe\\, Jane).",
          bullets: [
            "Default separator: Comma (,).",
            "Alternate separators: Tab ('\\t', TSV), semicolon (';'), pipe ('|').",
            "Handling field with comma: Method 1: Enclose the field inside double quotes: \"Smith, John\".",
            "Method 2: Escape the comma with an escape character: Smith\\, John."
          ],
          code: '# Valid CSV row with commas inside fields:\n# 101,"Smith, John",Chicago,IL\n# Or with semicolon delimiter:\n# 101;Smith, John;Chicago;IL'
        },
        {
          id: "8c-3",
          section: "8c",
          topic: "JSON Keys & Strings vs Numbers",
          q: "3. What is JSON? What data type must a JSON key be? How does JSON differentiate between a string and a number?",
          short: "JavaScript Object Notation. JSON keys MUST be strings (in double quotes). Strings are enclosed in double quotes (\"123\"), numbers are unquoted (123).",
          bullets: [
            "JSON: JavaScript Object Notation, a lightweight text data-interchange format.",
            "JSON Key type: MUST ALWAYS BE A STRING in double quotes (e.g. {\"age\": 25}).",
            "String vs Number: Strings are surrounded by double quotes (\"42\"); numbers are written without quotes (42 or 3.14)."
          ],
          code: '{\n  "name": "Alice",   // String (double quotes)\n  "age": 20,         // Number (unquoted)\n  "id": "20"         // String (has quotes!)\n}'
        },
        {
          id: "8c-4",
          section: "8c",
          topic: "json.dump() vs json.load() & sort_keys",
          q: "4. What does json.dump() do? What does json.load() do? What does sort_keys=True do as a keyword argument to json.dump? Why is it useful?",
          short: "json.dump(obj, f) serializes Python object to a JSON file. json.load(f) reads JSON file to Python object. sort_keys=True sorts dictionary keys alphabetically (useful for deterministic diffs/output).",
          bullets: [
            "json.dump(obj, fp): Writes Python object (dict, list, etc.) to a file as JSON.",
            "json.load(fp): Reads JSON data from a file and parses it into Python data structures.",
            "(Note: dumps/loads operate on strings; dump/load operate on file objects).",
            "sort_keys=True: Outputs dictionary keys sorted alphabetically.",
            "Why useful: Ensures deterministic output for consistent file diffs, testing, and caching."
          ],
          code: "import json\ndata = {'zebra': 1, 'apple': 2}\nwith open('data.json', 'w') as f:\n    json.dump(data, f, sort_keys=True) # writes {\"apple\": 2, \"zebra\": 1}\n\nwith open('data.json', 'r') as f:\n    obj = json.load(f)"
        }
      ]
    },
    {
      id: "sample_program",
      title: "Sample Program to Write",
      desc: "Full code and line-by-line breakdown matching the exact study guide specification.",
      items: [
        {
          id: "prog-1",
          section: "sample_program",
          topic: "Required Coding Problem",
          q: "Write a program that reads a file using 'for x in file' and a context manager (with...) that: 1. Prints total lines, 2. Prints empty lines, 3. Prints total characters (not counting \\n), 4. Uses regex to count or print lines with a specific pattern.",
          short: "Complete, tested Python 3.13 solution meeting all 4 criteria and matching the sample file output: 3 lines, 1 empty, 30 chars.",
          bullets: [
            "Requirement 1: Use with open(...) as f: context manager.",
            "Requirement 2: Read with for line in f:.",
            "Requirement 3: Empty line has line == '\\n' (or line == '\\r\\n').",
            "Requirement 4: Count chars by stripping trailing newline: len(line.rstrip('\\r\\n')).",
            "Requirement 5: Compile regex pattern and use pattern.search(line).",
            "Sample verification: 3 lines, 1 empty, 30 characters -> 30 + 3 = 33 total bytes on disk."
          ],
          code: `import re

# Target pattern to search for (e.g., words containing 'python' case-insensitive)
target_pattern = re.compile(r'python', re.IGNORECASE)

total_lines = 0
empty_lines = 0
char_count = 0
matching_lines = 0

with open('files-many.txt', 'r', encoding='utf-8') as f:
    for line in f:
        total_lines += 1
        
        # Check if line is empty (contains only newline)
        if line == '\\n' or line == '\\r\\n':
            empty_lines += 1
            
        # Count characters not counting end-of-line markers
        stripped_line = line.rstrip('\\r\\n')
        char_count += len(stripped_line)
        
        # Regex search for target pattern
        if target_pattern.search(line):
            matching_lines += 1

print(f"Total lines: {total_lines}")
print(f"Empty lines: {empty_lines}")
print(f"Characters (no EOL): {char_count}")
print(f"Lines matching pattern: {matching_lines}")`
        }
      ]
    },
    {
      id: "eval_drills",
      title: "Sample Code to Evaluate",
      desc: "Practice predicting outputs for regex, split, join, format, ord, chr, and string methods.",
      items: [
        {
          id: "eval-1",
          section: "eval_drills",
          topic: "Code Eval: split() vs split(' ')",
          q: "What is the output of '  a   b  '.split() vs '  a   b  '.split(' ') ?",
          short: ".split() -> ['a', 'b']; .split(' ') -> ['', '', 'a', '', '', 'b', '', '']",
          bullets: [
            ".split() with NO argument groups multiple consecutive whitespaces and discards leading/trailing empty strings.",
            ".split(' ') splits on EVERY single space, preserving empty strings between adjacent spaces."
          ],
          code: "s = '  a   b  '\nprint(s.split())       # ['a', 'b']\nprint(s.split(' '))    # ['', '', 'a', '', '', 'b', '', '']"
        },
        {
          id: "eval-2",
          section: "eval_drills",
          topic: "Code Eval: ord() and chr() Math",
          q: "What does chr(ord('A') + 32) produce? What does chr(ord('C') + 2) produce?",
          short: "chr(ord('A') + 32) is 'a'. chr(ord('C') + 2) is 'E'.",
          bullets: [
            "ord('A') is 65. 65 + 32 = 97. chr(97) is 'a' (uppercase to lowercase difference is 32).",
            "ord('C') is 67. 67 + 2 = 69. chr(69) is 'E'."
          ],
          code: "print(chr(ord('A') + 32))  # 'a'\nprint(chr(ord('C') + 2))   # 'E'"
        },
        {
          id: "eval-3",
          section: "eval_drills",
          topic: "Code Eval: Format Rounding and Alignment",
          q: "What is the output of '{:>8.2f}'.format(12.3456) and '{:06d}'.format(42) ?",
          short: "'   12.35' (rounded, field width 8) and '000042' (padded with zeros, width 6).",
          bullets: [
            "12.3456 rounded to 2 decimal places is 12.35 (5 characters). Field width 8 right-justified adds 3 leading spaces.",
            "{:06d} formats integer with leading zeros to width 6."
          ],
          code: "print(f\"{12.3456:>8.2f}\")   # '   12.35'\nprint(f\"{42:06d}\")         # '000042'"
        },
        {
          id: "eval-4",
          section: "eval_drills",
          topic: "Code Eval: re.findall() vs re.search()",
          q: "Given text = 'x12y34z', what does re.findall(r'\\d+', text) return? What does re.search(r'\\d+', text).group() return?",
          short: "findall -> ['12', '34']; search().group() -> '12'",
          bullets: [
            "re.findall returns all non-overlapping matches as a list of strings: ['12', '34'].",
            "re.search returns a Match object for only the FIRST match: group() is '12'."
          ],
          code: "import re\ntext = 'x12y34z'\nprint(re.findall(r'\\d+', text))          # ['12', '34']\nprint(re.search(r'\\d+', text).group())   # '12'"
        },
        {
          id: "eval-5",
          section: "eval_drills",
          topic: "Code Eval: re.sub() and String Slicing",
          q: "What does re.sub(r'\\s+', '-', 'hello   world test') produce? What does 'Python'[1:5:2] produce?",
          short: "re.sub -> 'hello-world-test'. Slice -> 'yh'",
          bullets: [
            "\\s+ matches one or more whitespace characters and replaces each run with a single dash '-'.",
            "'Python'[1:5:2] starts at index 1 ('y'), goes up to index 5 ('n' excluded), step 2: indices 1 ('y') and 3 ('h') -> 'yh'."
          ],
          code: "import re\nprint(re.sub(r'\\s+', '-', 'hello   world test')) # 'hello-world-test'\nprint('Python'[1:5:2])                           # 'yh'"
        }
      ]
    }
  ],

  // Quiz questions for cram self-testing
  quizQuestions: [
    {
      q: "In Python 3.13, what is the type of a single character 'a'?",
      options: [
        "char",
        "character",
        "str of length 1",
        "byte"
      ],
      answer: 2,
      explain: "Python has no separate 'char' type. A single character is simply a str with len(s) == 1."
    },
    {
      q: "Given s = 'abc', what happens if you execute s[1] = 'd'?",
      options: [
        "s becomes 'adc'",
        "TypeError is raised because strings are immutable",
        "ValueError is raised",
        "s becomes 'adbc'"
      ],
      answer: 1,
      explain: "Strings in Python are immutable; modifying an index in place raises TypeError. You must create a new string: s[:1] + 'd' + s[2:]."
    },
    {
      q: "What does '  cat   dog  '.split() return?",
      options: [
        "['', '', 'cat', '', '', 'dog', '', '']",
        "['cat', 'dog']",
        "['  cat', 'dog  ']",
        "['cat   dog']"
      ],
      answer: 1,
      explain: "s.split() with no argument treats consecutive whitespace as a single delimiter and strips leading/trailing empty strings."
    },
    {
      q: "Which expression evaluates to True when comparing strings in Python?",
      options: [
        "'zebra' < 'Apple'",
        "'Apple' < 'apple'",
        "'apple' < 'Apple'",
        "'banana' < 'apple'"
      ],
      answer: 1,
      explain: "Python compares Unicode code points (ord()). Uppercase 'A' (65) is less than lowercase 'a' (97), so 'Apple' < 'apple' is True."
    },
    {
      q: "How many total code points exist in the Unicode standard?",
      options: [
        "65,536",
        "128",
        "1,114,112",
        "256"
      ],
      answer: 2,
      explain: "Unicode defines 1,114,112 code points (U+0000 to U+10FFFF). 65,536 is the number of code points in the BMP (Plane 0)."
    },
    {
      q: "What does ord('A') and chr(66) return respectively?",
      options: [
        "65 and 'B'",
        "'A' and 66",
        "0x41 and 'A'",
        "97 and 'b'"
      ],
      answer: 0,
      explain: "ord('A') returns integer code point 65. chr(66) returns the character 'B'."
    },
    {
      q: "Do all characters in the BMP (Basic Multilingual Plane) have the same byte length in UTF-8?",
      options: [
        "Yes, they all use exactly 2 bytes",
        "Yes, they all use exactly 3 bytes",
        "No, BMP characters take 1, 2, or 3 bytes in UTF-8",
        "No, they take 1 or 4 bytes"
      ],
      answer: 2,
      explain: "In UTF-8, ASCII (0-127) takes 1 byte, 128-2047 takes 2 bytes, and 2048-65535 takes 3 bytes. All are in the BMP."
    },
    {
      q: "Why is there no such thing as an official 'extended ASCII standard'?",
      options: [
        "ASCII was limited to 6 bits",
        "Multiple incompatible proprietary/regional 8-bit standards (ISO-8859, CP1252, OEM) were developed",
        "Unicode made ASCII illegal",
        "Extended ASCII only works on Windows"
      ],
      answer: 1,
      explain: "No single standard exists because multiple competing 8-bit encodings each mapped codes 128-255 differently."
    },
    {
      q: "If a UTF-8 file contains a leading byte order mark (BOM), how should you open it in Python to automatically strip the BOM?",
      options: [
        "open(fn, encoding='utf-8')",
        "open(fn, encoding='utf-8-sig')",
        "open(fn, encoding='utf-8-bom')",
        "open(fn, mode='rb-sig')"
      ],
      answer: 1,
      explain: "encoding='utf-8-sig' automatically identifies and strips the 3 BOM signature bytes (EF BB BF) on read."
    },
    {
      q: "What happens if format() has FEWER variables than format items: '{0} {1}'.format('cat')?",
      options: [
        "IndexError is raised",
        "ValueError is raised",
        "The missing item prints as None",
        "The missing item prints as empty string"
      ],
      answer: 0,
      explain: "Having fewer variables than replacement fields raises an IndexError (Replacement index 1 out of range)."
    },
    {
      q: "What are the default alignments for integers and strings when using format specifiers?",
      options: [
        "Both default to left-justified",
        "Both default to right-justified",
        "Integers default to right-justified; strings default to left-justified",
        "Integers default to left-justified; strings default to right-justified"
      ],
      answer: 2,
      explain: "Numbers (int, float) default to right-justified in their field width; strings default to left-justified."
    },
    {
      q: "What does re.match(r'\\d+', 'cat 123') return?",
      options: [
        "'123'",
        "A Match object with group() == '123'",
        "None",
        "['123']"
      ],
      answer: 2,
      explain: "re.match() checks ONLY from the beginning of the string. Since 'cat 123' starts with letters, it returns None. (re.search() would find '123')."
    },
    {
      q: "Why are raw strings (r'...') recommended when writing regular expressions in Python?",
      options: [
        "They run 2x faster than regular strings",
        "They prevent backslashes from being treated as Python escape characters",
        "They automatically compile the regex pattern",
        "They allow case-insensitive matching by default"
      ],
      answer: 1,
      explain: "In raw strings, backslashes are treated literally, so you write r'\\d+' instead of '\\\\\\\\d+'."
    },
    {
      q: "When reading a file with f.readline(), how do you know you have reached the end of the file (EOF)?",
      options: [
        "It returns '\\n'",
        "It returns '' (empty string of length 0)",
        "It raises an EOFError exception",
        "It returns None"
      ],
      answer: 1,
      explain: "f.readline() returns '' at EOF. An empty line returns '\\n' (length 1), NOT ''."
    },
    {
      q: "What is the key advantage of using 'with open(filename) as f:'?",
      options: [
        "It automatically parses the file into JSON",
        "It guarantees the file is properly closed when exiting the block, even on exceptions",
        "It loads the entire file into RAM faster",
        "It prevents file permission errors"
      ],
      answer: 1,
      explain: "The context manager guarantees file closure upon block exit, preventing file descriptor leaks even if errors occur."
    },
    {
      q: "In a JSON file, what data type must all dictionary keys be?",
      options: [
        "Integer",
        "String (in double quotes)",
        "Any hashable Python object",
        "Symbol"
      ],
      answer: 1,
      explain: "In standard JSON, all keys MUST be strings enclosed in double quotes."
    },
    {
      q: "What does json.dump(data, f, sort_keys=True) do?",
      options: [
        "Sorts the file lines numerically",
        "Sorts the dictionary keys alphabetically in the serialized output",
        "Deletes unsorted dictionary keys",
        "Loads sorted JSON from file f"
      ],
      answer: 1,
      explain: "sort_keys=True sorts dictionary keys alphabetically, producing deterministic output useful for diffing."
    }
  ]
};
