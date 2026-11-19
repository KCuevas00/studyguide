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
          code: "print(len('A'.encode('utf-8')))    # 1 byte  (ASCII)\nprint(len('é'.encode('utf-8')))    # 2 bytes (Latin)\nprint(len('文'.encode('utf-8')))   # 3 bytes (CJK BMP)\nprint(len('\\U0001F600'.encode('utf-8'))) # 4 bytes (Supplementary Plane)"
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
      id: "q-7a-1",
      section: "7a",
      q: "In Python 3.13, how is a single character like \"a\" represented in memory?",
      options: [
        "As a distinct primitive \"char\" type (like in C or Java)",
        "As a standard \"str\" object with len(s) == 1",
        "As a single 8-bit unsigned integer",
        "As an ASCII character pointer",
      ],
      answer: 1,
      explain: "Python has no separate \"char\" type. A single character is simply a string object (str) of length 1 (type(\"a\") is <class \"str\">, len(\"a\") == 1)."
    },
    {
      id: "q-7a-2",
      section: "7a",
      q: "Given s = \"abc\", what happens if you execute s[1] = \"d\", and why?",
      options: [
        "s becomes \"adc\"",
        "TypeError is raised because strings are immutable",
        "ValueError is raised because strings cannot change length",
        "s becomes \"adbc\"",
      ],
      answer: 1,
      explain: "Strings in Python are immutable. Attempting to assign to an item index raises TypeError. To change the value, construct a new string: s = s[:1] + \"d\" + s[2:]."
    },
    {
      id: "q-7a-3",
      section: "7a",
      q: "What does \"  cat   dog  \".split() return compared to \"  cat   dog  \".split(\" \")?",
      options: [
        "Both return [\"cat\", \"dog\"]",
        ".split() returns [\"cat\", \"dog\"]; .split(\" \") preserves consecutive spaces as empty strings [\"\"]",
        ".split() raises ValueError on consecutive whitespace",
        ".split(\" \") returns [\"cat\", \"dog\"] and .split() preserves spaces",
      ],
      answer: 1,
      explain: "With no arguments, s.split() groups contiguous whitespace together and strips leading and trailing whitespace, returning [\"cat\", \"dog\"]. In contrast, s.split(\" \") uses a single space as an exact delimiter, producing multiple empty string elements (\"\") for consecutive spaces."
    },
    {
      id: "q-7a-4",
      section: "7a",
      q: "Which expression evaluates to True when comparing strings in Python?",
      options: [
        "\"zebra\" < \"Apple\"",
        "\"Apple\" < \"apple\"",
        "\"apple\" < \"Apple\"",
        "\"banana\" < \"apple\"",
      ],
      answer: 1,
      explain: "Python compares strings lexicographically by their Unicode code points using ord(). In Unicode/ASCII, uppercase letters come before lowercase letters: ord(\"A\") is 65, while ord(\"a\") is 97. Thus \"Apple\" < \"apple\" is True."
    },
    {
      id: "q-7a-5",
      section: "7a",
      q: "What does \"banana\".find(\"z\") return, and how does it differ from \"banana\".index(\"z\")?",
      options: [
        "Both raise ValueError",
        ".find(\"z\") returns -1, while .index(\"z\") raises ValueError",
        ".find(\"z\") returns None, while .index(\"z\") returns -1",
        "Both return -1",
      ],
      answer: 1,
      explain: "s.find(sub) returns -1 if the substring is not found, making it safe for conditionals without try/except. In contrast, s.index(sub) raises a ValueError when the substring is missing."
    },
    {
      id: "q-7a-6",
      section: "7a",
      q: "Given s = \"Python\", what do s[1:4] and s[::-1] evaluate to?",
      options: [
        "\"yth\" and \"nohtyP\"",
        "\"pyt\" and \"Python\"",
        "\"ytho\" and \"nohtyP\"",
        "\"yth\" and an IndexError",
      ],
      answer: 0,
      explain: "Slice s[1:4] takes indices 1, 2, and 3 (\"yth\"). The slice s[::-1] with a step of -1 traverses from right to left, reversing the string to \"nohtyP\". Slicing never raises IndexError on out-of-bounds indices."
    },
    {
      id: "q-7a-7",
      section: "7a",
      q: "How can you validate that a string s consists entirely of digits before attempting to convert it with int(s)?",
      options: [
        "s.isalpha()",
        "s.isdigit()",
        "type(s) == int",
        "s.has_digits()",
      ],
      answer: 1,
      explain: "s.isdigit() returns True if all characters in the string are digits (0-9) and the string contains at least one character. This prevents ValueError when subsequently calling int(s)."
    },
    {
      id: "q-7a-8",
      section: "7a",
      q: "What happens when evaluating \"-\".join([\"apple\", 42, \"banana\"])?",
      options: [
        "\"apple-42-banana\"",
        "TypeError: sequence item 1: expected str instance, int found",
        "[\"apple\", \"-\", \"42\", \"-\", \"banana\"]",
        "\"apple-None-banana\"",
      ],
      answer: 1,
      explain: "str.join() requires every element of the iterable to be an instance of str. It does not automatically cast non-string objects like integers to strings; passing an int raises TypeError."
    },
    {
      id: "q-7b-1",
      section: "7b",
      q: "How many total code points exist in the Unicode standard, and what is the valid code point range?",
      options: [
        "65,536 (U+0000 to U+FFFF)",
        "128 (U+0000 to U+007F)",
        "1,114,112 (U+0000 to U+10FFFF)",
        "2,097,152 (U+0000 to U+1FFFFF)",
      ],
      answer: 2,
      explain: "Unicode defines exactly 1,114,112 code points spanning 17 planes of 65,536 code points each (17 \u00d7 65,536 = 1,114,112), ranging from U+0000 to U+10FFFF."
    },
    {
      id: "q-7b-2",
      section: "7b",
      q: "What is the Basic Multilingual Plane (BMP), and how many code points does it contain?",
      options: [
        "Plane 1 containing 128 ASCII characters",
        "Plane 0 containing 65,536 code points (U+0000 to U+FFFF)",
        "All 17 planes combined (1,114,112 code points)",
        "The UTF-8 header block containing 256 code points",
      ],
      answer: 1,
      explain: "Plane 0 is designated as the Basic Multilingual Plane (BMP). It covers code points U+0000 through U+FFFF (2^16 = 65,536 code points) and contains characters for nearly all modern languages and common symbols."
    },
    {
      id: "q-7b-3",
      section: "7b",
      q: "The character \"A\" has Unicode code point U+0041. Is \"0041\" decimal or hexadecimal, and what is its decimal value?",
      options: [
        "Decimal; value is 41",
        "Hexadecimal; decimal value is 65 (4 \u00d7 16 + 1)",
        "Octal; decimal value is 33",
        "Binary; decimal value is 41",
      ],
      answer: 1,
      explain: "Values following \"U+\" in Unicode notation are always in hexadecimal. 0x0041 in base 10 is 4 \u00d7 16^1 + 1 \u00d7 16^0 = 64 + 1 = 65."
    },
    {
      id: "q-7b-4",
      section: "7b",
      q: "Which Python string escape sequences represent the character \"A\" (code point U+0041)?",
      options: [
        "\"\\x41\", \"\\u0041\", and \"\\U00000041\"",
        "\"\\c41\" and \"\\d65\"",
        "\"\\u41\" and \"\\U41\"",
        "\"U+0041\" only",
      ],
      answer: 0,
      explain: "Python supports \\xhh (2 hex digits), \\uhhhh (4 hex digits), and \\Uhhhhhhhh (8 hex digits). All three escape sequences (\"\\x41\", \"\\u0041\", \"\\U00000041\") evaluate to \"A\"."
    },
    {
      id: "q-7b-5",
      section: "7b",
      q: "What does ord(\"A\") and chr(66) return respectively in Python 3?",
      options: [
        "65 and \"B\"",
        "\"A\" and 66",
        "0x41 and \"A\"",
        "97 and \"b\"",
      ],
      answer: 0,
      explain: "ord(\"A\") takes a 1-character string and returns its integer Unicode code point 65. chr(66) takes an integer and returns the corresponding 1-character string \"B\"."
    },
    {
      id: "q-7b-6",
      section: "7b",
      q: "Which identity is always True for any legal single Unicode character c in Python?",
      options: [
        "ord(chr(c)) == c",
        "chr(ord(c)) == c",
        "ord(c) == hex(c)",
        "len(chr(ord(c))) == 2",
      ],
      answer: 1,
      explain: "ord(c) maps character -> integer code point, and chr(i) maps integer code point -> character. Therefore chr(ord(c)) == c is an exact inverse identity."
    },
    {
      id: "q-7c-1",
      section: "7c",
      q: "What is the fundamental difference between Unicode and UTF-8?",
      options: [
        "Unicode is an encoding; UTF-8 is a character set",
        "Unicode assigns abstract numbers (code points) to characters; UTF-8 specifies how those numbers are stored as a sequence of bytes",
        "Unicode is limited to English; UTF-8 is multilingual",
        "Unicode uses 8 bits; UTF-8 uses 32 bits",
      ],
      answer: 1,
      explain: "Unicode is the universal character set that assigns abstract numeric identifiers (code points) to characters. UTF-8 (Unicode Transformation Format 8-bit) is a byte serialization format that encodes those numbers into 1 to 4 bytes."
    },
    {
      id: "q-7c-2",
      section: "7c",
      q: "Do all characters in the BMP (Basic Multilingual Plane) have the same byte length in UTF-8?",
      options: [
        "Yes, they all use exactly 2 bytes",
        "Yes, they all use exactly 3 bytes",
        "No, BMP characters take 1, 2, or 3 bytes in UTF-8",
        "No, BMP characters take 1 or 4 bytes",
      ],
      answer: 2,
      explain: "In UTF-8, ASCII characters (0-127) take 1 byte, code points 128-2047 take 2 bytes, and code points 2048-65535 take 3 bytes. All of these code points reside within the BMP (Plane 0)."
    },
    {
      id: "q-7c-3",
      section: "7c",
      q: "Which Unicode code points match the standard 7-bit ASCII character set exactly?",
      options: [
        "U+0000 to U+007F (0 to 127)",
        "U+0000 to U+00FF (0 to 255)",
        "U+0080 to U+00FF (128 to 255)",
        "U+0001 to U+0020 (1 to 32)",
      ],
      answer: 0,
      explain: "Code points 0 through 127 (U+0000 to U+007F) correspond one-to-one with 7-bit ASCII. In UTF-8, these are encoded as identical single bytes (0x00 to 0x7F)."
    },
    {
      id: "q-7c-4",
      section: "7c",
      q: "How can you tell if an individual byte contains a legal 7-bit ASCII character?",
      options: [
        "The byte value is between 128 and 255",
        "The highest bit (most significant bit, MSB) is 0 (byte value < 128)",
        "The byte ends with bit 1",
        "The byte is an even integer",
      ],
      answer: 1,
      explain: "7-bit ASCII characters span values 0 to 127 (0x00 to 0x7F). In an 8-bit byte, the eighth bit (most significant bit, MSB) is always 0 (b & 0x80 == 0)."
    },
    {
      id: "q-7c-5",
      section: "7c",
      q: "Why is there no such thing as an official \"extended ASCII standard\"?",
      options: [
        "ASCII was strictly limited to 6 bits by law",
        "Multiple incompatible 8-bit standards (ISO-8859 variants, Windows CP1252, OEM 437) each mapped codes 128-255 differently",
        "Computers could only process 7 bits until Unicode was invented",
        "ASCII does not permit numeric digits",
      ],
      answer: 1,
      explain: "When 8-bit bytes became standard, different manufacturers and regional bodies assigned characters 128-255 differently for local alphabets. No single universal standard was ever adopted for \"extended ASCII\"."
    },
    {
      id: "q-7c-6",
      section: "7c",
      q: "What is the relationship between ISO-8859-1 (Latin-1) and the first 256 code points (0-255) of Unicode?",
      options: [
        "They are completely incompatible",
        "The first 256 Unicode code points (U+0000 to U+00FF) were intentionally defined to match ISO-8859-1 character values identically",
        "ISO-8859-1 characters are mapped to the last 256 code points of Unicode",
        "Unicode shifted ISO-8859-1 characters by +128 slots",
      ],
      answer: 1,
      explain: "To provide direct backwards compatibility, the Unicode consortium defined code points U+0000 through U+00FF to match ISO-8859-1 one-for-one."
    },
    {
      id: "q-7c-7",
      section: "7c",
      q: "What is the primary difference between ISO-8859-1 and Windows CP1252?",
      options: [
        "CP1252 is 16-bit while ISO-8859-1 is 8-bit",
        "CP1252 assigns printable characters (such as \u20ac, curly quotes, and dashes) to byte positions 0x80-0x9F, which are unused control codes in ISO-8859-1",
        "ISO-8859-1 includes Cyrillic letters while CP1252 is purely Greek",
        "CP1252 does not contain ASCII characters 0-127",
      ],
      answer: 1,
      explain: "In ISO-8859-1, bytes 0x80 to 0x9F are reserved for C1 control codes. Windows-1252 replaced these control codes with common printable symbols like the Euro (\u20ac), trademark (\u2122), and typographical quotes."
    },
    {
      id: "q-7c-8",
      section: "7c",
      q: "How many bytes does each character use in ASCII, ISO-8859-1, and UTF-8 respectively?",
      options: [
        "ASCII: 1 byte; ISO-8859-1: 1 byte; UTF-8: 1 to 4 bytes",
        "ASCII: 7 bytes; ISO-8859-1: 8 bytes; UTF-8: 16 bytes",
        "ASCII: 1 byte; ISO-8859-1: 2 bytes; UTF-8: 4 bytes",
        "ASCII: 1 byte; ISO-8859-1: 1 byte; UTF-8: always 2 bytes",
      ],
      answer: 0,
      explain: "ASCII uses 1 byte (7 bits used). ISO-8859-1 is a fixed 1-byte (8-bit) encoding. UTF-8 is a variable-length encoding using 1, 2, 3, or 4 bytes per character."
    },
    {
      id: "q-7d-1",
      section: "7d",
      q: "What is byte serialization (endianness)?",
      options: [
        "Converting strings to lowercase bytes",
        "The order in which the individual bytes of a multi-byte quantity are arranged in memory or on disk",
        "Encrypting byte streams using public key cryptography",
        "Compressing text files with gzip",
      ],
      answer: 1,
      explain: "Endianness refers to the sequence in which bytes of multi-byte numbers (e.g., 16-bit or 32-bit values) are ordered: Big-Endian puts the most significant byte first, while Little-Endian puts the least significant byte first."
    },
    {
      id: "q-7d-2",
      section: "7d",
      q: "For a 16-bit integer with hex value 0x1234, how is it stored in Big-Endian vs Little-Endian byte order?",
      options: [
        "Big-Endian: 0x12 then 0x34; Little-Endian: 0x34 then 0x12",
        "Big-Endian: 0x34 then 0x12; Little-Endian: 0x12 then 0x34",
        "Both store 0x12 then 0x34",
        "Big-Endian uses 4 bytes; Little-Endian uses 2 bytes",
      ],
      answer: 0,
      explain: "Big-Endian places the most significant byte (0x12) at the lowest memory address (first). Little-Endian places the least significant byte (0x34) first."
    },
    {
      id: "q-7d-3",
      section: "7d",
      q: "Why does UTF-8 NOT require a Byte Order Mark (BOM) to indicate endianness?",
      options: [
        "UTF-8 only supports 7-bit characters",
        "UTF-8 encodes text as a sequence of single 8-bit byte units whose internal byte order is fixed by specification",
        "Modern CPUs automatically reverse UTF-8 bytes",
        "UTF-8 is always Big-Endian 32-bit",
      ],
      answer: 1,
      explain: "In UTF-8, characters are represented as a predetermined sequence of 1-byte units. Because the basic unit is 1 byte, there is no multi-byte reordering within a unit; endianness is irrelevant."
    },
    {
      id: "q-7d-4",
      section: "7d",
      q: "In a UTF-16 encoded file, what byte sequences mark Big-Endian and Little-Endian BOMs (U+FEFF)?",
      options: [
        "UTF-16BE: 0xFE 0xFF; UTF-16LE: 0xFF 0xFE",
        "UTF-16BE: 0xFF 0xFE; UTF-16LE: 0xFE 0xFF",
        "UTF-16BE: 0x00 0x16; UTF-16LE: 0x16 0x00",
        "UTF-16BE: 0xEF 0xBB; UTF-16LE: 0xBF 0x00",
      ],
      answer: 0,
      explain: "The Unicode BOM character is U+FEFF. In Big-Endian UTF-16, the bytes appear as FE FF. In Little-Endian UTF-16, the bytes appear as FF FE."
    },
    {
      id: "q-7d-5",
      section: "7d",
      q: "Why is the 3-byte sequence EF BB BF added by some software (like Windows Notepad) to UTF-8 files not a true BOM, and what problems can it cause?",
      options: [
        "It converts the text to binary executable code",
        "UTF-8 has no byte order to mark; the 3 signature bytes can cause parsers, compilers, and Unix scripts to crash or misinterpret leading characters",
        "It corrupts the hard drive file allocation table",
        "It reduces text quality by dropping accents",
      ],
      answer: 1,
      explain: "Because UTF-8 has no byte order, EF BB BF is merely an encoding signature. Programs expecting pure UTF-8 or ASCII see EF BB BF as illegal syntax or unexpected characters (e.g. breaking #! shebang lines in Unix scripts)."
    },
    {
      id: "q-7d-6",
      section: "7d",
      q: "If a UTF-8 file contains a leading byte order mark (EF BB BF), how should you open it in Python to automatically strip the BOM?",
      options: [
        "open(fn, encoding=\"utf-8\")",
        "open(fn, encoding=\"utf-8-sig\")",
        "open(fn, encoding=\"utf-8-bom\")",
        "open(fn, mode=\"rb-sig\")",
      ],
      answer: 1,
      explain: "Python provides the \"utf-8-sig\" codec specifically to detect and strip the 3 BOM signature bytes (EF BB BF) on read, without exposing U+FEFF in your string."
    },
    {
      id: "q-7e-1",
      section: "7e",
      q: "What happens if format() has FEWER variables than format items: \"{0} {1}\".format(\"cat\")?",
      options: [
        "IndexError is raised",
        "ValueError is raised",
        "The missing item prints as None",
        "The missing item prints as empty string",
      ],
      answer: 0,
      explain: "Having fewer positional arguments than indexed replacement fields raises IndexError: Replacement index 1 out of range."
    },
    {
      id: "q-7e-2",
      section: "7e",
      q: "What happens if format() has MORE variables than format items: \"{0}\".format(\"cat\", \"dog\")?",
      options: [
        "IndexError is raised",
        "\"cat\" is returned and extra variables are safely ignored",
        "ValueError is raised",
        "\"cat dog\" is returned",
      ],
      answer: 1,
      explain: "Supplying more arguments than required format items does not cause an error in Python. The extra variables are simply ignored."
    },
    {
      id: "q-7e-3",
      section: "7e",
      q: "What are the default alignments for numbers (integers, floats) and strings when using format specifiers with a field width?",
      options: [
        "Both default to left-justified (<)",
        "Both default to right-justified (>)",
        "Numbers default to right-justified (>); strings default to left-justified (<)",
        "Numbers default to left-justified (<); strings default to right-justified (>)",
      ],
      answer: 2,
      explain: "By default, numbers (int, float) right-justify in their field width to align decimal places vertically, while strings left-justify."
    },
    {
      id: "q-7e-4",
      section: "7e",
      q: "Given val = 12.3456, what does f\"{val:.2f}\" produce, and are floating-point numbers rounded or truncated for printing?",
      options: [
        "\"12.34\"; floats are truncated",
        "\"12.35\"; floats are rounded",
        "\"12.3456\"; floats are unmodified",
        "\"12.30\"; floats are zero-padded",
      ],
      answer: 1,
      explain: "Python format specifiers ROUND floating-point values to the specified decimal precision. 12.3456 with .2f rounds up to \"12.35\"."
    },
    {
      id: "q-7e-5",
      section: "7e",
      q: "Which expression prints integer x right-justified in a 10-column field?",
      options: [
        "f\"{x:>10d}\" or f\"{x:10d}\"",
        "f\"{x:<10d}\"",
        "f\"{x:^10d}\"",
        "f\"{x:10s}\"",
      ],
      answer: 0,
      explain: "For integers, right-justification is the default, so both f\"{x:10d}\" and f\"{x:>10d}\" right-justify in a 10-character field."
    },
    {
      id: "q-7e-6",
      section: "7e",
      q: "What does the format specifier \":c\" do when applied to an integer?",
      options: [
        "Formats the integer as currency",
        "Converts the integer code point to its corresponding Unicode character",
        "Calculates the bitwise complement of the integer",
        "Formats the number as a C-style pointer",
      ],
      answer: 1,
      explain: "The \":c\" specifier treats the integer as a Unicode code point and formats it as the corresponding character (similar to calling chr(n)). For example, f\"{65:c}\" produces \"A\"."
    },
    {
      id: "q-7e-7",
      section: "7e",
      q: "How can you prevent print() from adding a newline at the end and prevent spaces between printed arguments?",
      options: [
        "print(a, b, sep=\"\", end=\"\")",
        "print(a + b, newline=False)",
        "print(a, b, space=0, nl=0)",
        "print.raw(a, b)",
      ],
      answer: 0,
      explain: "In print(), sep=\"\" removes the default space delimiter between items, and end=\"\" replaces the default trailing newline (\"\n\") with an empty string."
    },
    {
      id: "q-7e-8",
      section: "7e",
      q: "What does \"-42\".zfill(5) return, and how does it handle the negative sign?",
      options: [
        "\"00-42\"",
        "\"-0042\"",
        "\"-4200\"",
        "ValueError",
      ],
      answer: 1,
      explain: "zfill() pads numeric strings with leading zeros up to the specified width, correctly retaining the leading sign (\"+\" or \"-\") before the zeros."
    },
    {
      id: "q-7f-1",
      section: "7f",
      q: "What does re.match(r\"\\d+\", \"cat 123\") return vs re.search(r\"\\d+\", \"cat 123\")?",
      options: [
        "re.match returns None; re.search returns a Match object with group() == \"123\"",
        "Both return a Match object with group() == \"123\"",
        "Both return None",
        "re.match returns \"123\"; re.search returns None",
      ],
      answer: 0,
      explain: "re.match() matches ONLY from the start of the string (index 0). Since \"cat 123\" starts with letters, re.match() returns None. re.search() scans through the string and finds \"123\"."
    },
    {
      id: "q-7f-2",
      section: "7f",
      q: "Why are raw strings (r\"...\") recommended when writing regular expressions in Python?",
      options: [
        "They run 2x faster than regular strings",
        "They prevent backslashes from being treated as Python string escape characters",
        "They automatically compile the regex pattern",
        "They allow case-insensitive matching by default",
      ],
      answer: 1,
      explain: "In raw strings, backslashes are treated literally. Without raw strings, matching a literal backslash requires \"\\\\\". With raw strings, you write r\"\\\" (and r\"\\d\" instead of \"\\d\")."
    },
    {
      id: "q-7f-3",
      section: "7f",
      q: "What does re.findall(r\"[a-z]+\", \"Cat 123 DOG and fish\") return?",
      options: [
        "[\"at\", \"and\", \"fish\"]",
        "[\"Cat\", \"DOG\", \"and\", \"fish\"]",
        "A Match object",
        "\"at and fish\"",
      ],
      answer: 0,
      explain: "re.findall() returns a list of all non-overlapping matches as strings. [a-z]+ matches only lowercase ASCII letters: in \"Cat\" it matches \"at\", then \"and\", then \"fish\"."
    },
    {
      id: "q-7f-4",
      section: "7f",
      q: "What is the difference between regex quantifiers \"*\" and \"+\"?",
      options: [
        "\"*\" matches 0 or more occurrences; \"+\" matches 1 or more occurrences",
        "\"*\" matches exactly 1; \"+\" matches multiple",
        "\"+\" matches 0 or more; \"*\" matches 1 or more",
        "\"*\" matches letters; \"+\" matches digits",
      ],
      answer: 0,
      explain: "In regular expressions, \"*\" means zero or more repetitions of the preceding element, while \"+\" requires at least one repetition."
    },
    {
      id: "q-7f-5",
      section: "7f",
      q: "What does the regular expression pattern r\"^\\d+$\" match?",
      options: [
        "Any string containing at least one digit",
        "A string that consists entirely of one or more digits from start to end",
        "Any string that starts with a digit",
        "Any string that ends with a digit",
      ],
      answer: 1,
      explain: "\"^\" anchors at the start of the string and \"$\" anchors at the end. Together with \"\\d+\", the string must contain only digits from beginning to end with no other characters."
    },
    {
      id: "q-7f-6",
      section: "7f",
      q: "Given m = re.search(r\"(\\w+): (\\d+)\", \"Score: 95\"), what do m.group(0) and m.group(2) return?",
      options: [
        "\"Score: 95\" and \"95\"",
        "\"Score\" and \"95\"",
        "\"95\" and \"Score\"",
        "IndexError",
      ],
      answer: 0,
      explain: "m.group(0) (or m.group()) returns the entire matched substring (\"Score: 95\"). m.group(1) is the first parenthesized capture group (\"Score\"), and m.group(2) is the second capture group (\"95\")."
    },
    {
      id: "q-7f-7",
      section: "7f",
      q: "When should you use re.compile(pattern)?",
      options: [
        "Only when the pattern contains numbers",
        "When the same regular expression is used repeatedly in loops or multiple searches to avoid re-compiling overhead",
        "When matching Unicode characters",
        "To convert a regex into a SQL query",
      ],
      answer: 1,
      explain: "re.compile() parses and compiles the pattern into a regex Pattern object once, which improves performance when searching or matching in loops."
    },
    {
      id: "q-7f-8",
      section: "7f",
      q: "What does re.sub(r\"\\s+\", \"-\", \"apple   banana  orange\") return?",
      options: [
        "\"apple---banana--orange\"",
        "\"apple-banana-orange\"",
        "[\"apple\", \"banana\", \"orange\"]",
        "\"apple banana orange\"",
      ],
      answer: 1,
      explain: "re.sub(pattern, replacement, string) replaces all occurrences of pattern. Since \"\\s+\" matches contiguous blocks of whitespace as single matches, each block of spaces is replaced by a single \"-\", producing \"apple-banana-orange\"."
    },
    {
      id: "q-8a-1",
      section: "8a",
      q: "When reading a file with f.readline(), how do you know you have reached the end of the file (EOF)?",
      options: [
        "It returns \"\n\"",
        "It returns \"\" (empty string of length 0)",
        "It raises an EOFError exception",
        "It returns None",
      ],
      answer: 1,
      explain: "f.readline() returns an empty string \"\" (len == 0) at EOF. An empty line in the file returns \"\n\" (length 1), NOT \"\"."
    },
    {
      id: "q-8a-2",
      section: "8a",
      q: "How do Unix and Windows mark line endings, and how does Python text mode handle them by default?",
      options: [
        "Unix uses LF (\"\n\"), Windows uses CRLF (\"\r\n\"); Python's universal newline mode translates CRLF to \"\n\" on read",
        "Unix uses CRLF, Windows uses LF; Python leaves them unchanged",
        "Both use CR (\"\r\"); Python converts them to \"\u0000\"",
        "Unix uses EOF; Windows uses \"\n\"",
      ],
      answer: 0,
      explain: "Unix uses LF (\n, byte 0x0A). Windows uses CRLF (\r\n, bytes 0x0D 0x0A). Python's universal newlines feature automatically translates \r\n to \n when reading in text mode."
    },
    {
      id: "q-8a-3",
      section: "8a",
      q: "What are the default mode and access type if you call open(\"file.txt\") with no additional arguments?",
      options: [
        "mode=\"w\" and binary (\"wb\")",
        "mode=\"r\" and text (\"rt\")",
        "mode=\"a\" and text (\"at\")",
        "mode=\"r+\" and binary (\"rb+\")",
      ],
      answer: 1,
      explain: "open() defaults to read mode (\"r\") and text mode (\"t\"). Calling open(\"file.txt\") is equivalent to open(\"file.txt\", \"rt\")."
    },
    {
      id: "q-8a-4",
      section: "8a",
      q: "What is the key advantage of using \"with open(filename) as f:\"?",
      options: [
        "It automatically parses the file into JSON",
        "It guarantees the file is properly closed when exiting the block, even on exceptions",
        "It loads the entire file into RAM faster",
        "It prevents file permission errors",
      ],
      answer: 1,
      explain: "The context manager guarantees file closure upon block exit, preventing file descriptor leaks even if unhandled exceptions occur."
    },
    {
      id: "q-8a-5",
      section: "8a",
      q: "When reading a file using \"for line in f:\", what does each line variable contain?",
      options: [
        "Only the text content, with the newline automatically stripped",
        "The text content along with the trailing newline \"\n\" (unless the last line lacks one)",
        "A list of words on the line",
        "A tuple of (line_number, line_text)",
      ],
      answer: 1,
      explain: "Iterating line-by-line over a file object preserves the trailing newline character \"\n\". To remove it, use line.rstrip(\"\n\") or line.strip()."
    },
    {
      id: "q-8a-6",
      section: "8a",
      q: "What data structure does f.readlines() return?",
      options: [
        "A single string containing the entire file",
        "A list of strings, where each element is a line including its trailing \"\n\"",
        "A generator yielding lines",
        "A dictionary of lines indexed by line number",
      ],
      answer: 1,
      explain: "f.readlines() reads all lines into memory and returns a list of strings, with each line retaining its trailing \"\n\"."
    },
    {
      id: "q-8a-7",
      section: "8a",
      q: "How does f.write(s) differ from print(s, file=f)?",
      options: [
        "f.write() automatically appends a newline; print() does not",
        "f.write() does NOT append a newline and requires a string; print() appends a newline by default and converts arguments to strings",
        "f.write() writes binary data; print() writes text data",
        "f.write() only accepts integers",
      ],
      answer: 1,
      explain: "f.write() takes exactly one string and does not append a newline. print(*args, file=f) converts arguments to str, separates them with sep (\" \"), and appends end (\"\n\")."
    },
    {
      id: "q-8a-8",
      section: "8a",
      q: "In a loop \"for line in f:\", which condition correctly tests if a line is an empty line (containing only the newline)?",
      options: [
        "line == \"\"",
        "line == \"\n\"",
        "line is None",
        "len(line) == 0",
      ],
      answer: 1,
      explain: "When iterating over a file, an empty line consists solely of the newline character \"\n\" (len(line) == 1). A string of length 0 (line == \"\") indicates EOF in readline(), but never appears in for line in f."
    },
    {
      id: "q-8b-1",
      section: "8b",
      q: "How do you open a file for reading in binary mode in Python?",
      options: [
        "open(filename, \"r\", binary=True)",
        "open(filename, \"rb\")",
        "open(filename, \"b\")",
        "open.binary(filename)",
      ],
      answer: 1,
      explain: "Appending \"b\" to the mode string (e.g. \"rb\" for read binary, \"wb\" for write binary) opens the file in binary mode, returning bytes objects instead of str."
    },
    {
      id: "q-8b-2",
      section: "8b",
      q: "Why does Python need to know whether a file is opened in text mode or binary mode?",
      options: [
        "Binary mode runs on a secondary CPU thread",
        "Text mode automatically performs character decoding and newline translation (\r\n <-> \n); doing this on binary files would corrupt binary data",
        "Binary mode limits file size to 2 GB",
        "Text mode cannot handle numbers",
      ],
      answer: 1,
      explain: "In text mode, Python translates newlines and decodes bytes into str. If applied to binary data (like an image or audio file), changing 0x0D 0x0A or attempting character decoding would corrupt the data."
    },
    {
      id: "q-8b-3",
      section: "8b",
      q: "Which module and functions convert between raw byte strings and Python tuples of native types (integers, floats)?",
      options: [
        "struct.unpack() (bytes to tuple) and struct.pack() (tuple to bytes)",
        "json.loads() and json.dumps()",
        "bytes.to_tuple() and tuple.to_bytes()",
        "pickle.unflatten() and pickle.flatten()",
      ],
      answer: 0,
      explain: "Python's standard \"struct\" module performs conversions between Python values and C structs represented as Python bytes: struct.unpack() reads bytes into a tuple, and struct.pack() packs values into bytes."
    },
    {
      id: "q-8b-4",
      section: "8b",
      q: "Why is endianness critical when reading multi-byte binary numbers from a file?",
      options: [
        "Endianness determines if the file is compressed",
        "The byte order changes the numerical value entirely: reading 0x00000001 as Little-Endian yields 16,777,216 instead of 1",
        "Endianness is only relevant for text files",
        "Little-Endian numbers cannot be negative",
      ],
      answer: 1,
      explain: "Multi-byte values depend on whether the most significant byte comes first (Big-Endian) or last (Little-Endian). Reading binary data with the wrong endianness completely corrupts numeric values."
    },
    {
      id: "q-8b-5",
      section: "8b",
      q: "How do you convert a bytes object b = b\"hello\" into a str in Python?",
      options: [
        "b.decode(\"utf-8\")",
        "b.encode(\"utf-8\")",
        "str(b)",
        "b.to_str()",
      ],
      answer: 0,
      explain: "Use bytes.decode(encoding) to decode raw bytes into a Unicode string. (Note: str(b) produces the literal representation \"b'hello'\", which is not the string \"hello\")."
    },
    {
      id: "q-8b-6",
      section: "8b",
      q: "Why must you know the encoding when converting raw bytes to characters?",
      options: [
        "Because raw bytes contain no metadata indicating which character set created them, and the same byte value represents different characters in different encodings",
        "Because all Python encodings require 16 bits",
        "Because UTF-8 cannot decode English letters",
        "Because binary files always encrypt characters",
      ],
      answer: 0,
      explain: "A byte sequence is just numbers from 0 to 255. Without an encoding specification (like UTF-8 or Latin-1), there is no way to determine which characters those numbers represent."
    },
    {
      id: "q-8c-1",
      section: "8c",
      q: "What is a CSV file, and are column header rows required in CSV files?",
      options: [
        "CSV stands for Comma-Separated Values; header rows are optional",
        "CSV stands for Compiled Standard Variables; headers are mandatory on row 1",
        "CSV is a binary database format; headers are forbidden",
        "CSV files must contain XML metadata",
      ],
      answer: 0,
      explain: "CSV stands for Comma-Separated Values. It is a plain-text tabular format. Header rows are optional; some files start directly with data."
    },
    {
      id: "q-8c-2",
      section: "8c",
      q: "When reading fields from a CSV file using Python's csv module, what is the default data type of every field?",
      options: [
        "String (str)",
        "Integer (int)",
        "Float (float)",
        "Auto-detected by value",
      ],
      answer: 0,
      explain: "CSV is a plain text format without type annotations. By default, every field is read as a string (str), and numeric fields must be explicitly cast using int() or float()."
    },
    {
      id: "q-8c-3",
      section: "8c",
      q: "In a CSV file, how can a field containing a comma (e.g. \"Smith, John\") be correctly represented?",
      options: [
        "Enclosing the field in double quotes or using an alternate delimiter like tab or semicolon",
        "Replacing commas with hyphens or deleting them",
        "Commas are illegal in CSV data under all circumstances",
        "Encoding the field in hexadecimal",
      ],
      answer: 0,
      explain: "CSV standard conventions allow commas inside fields by enclosing the entire field in double quotes (e.g. \"Smith, John\"), or by configuring an alternate delimiter like tab (TSV)."
    },
    {
      id: "q-8c-4",
      section: "8c",
      q: "In standard JSON, what data type must ALL object (dictionary) keys be?",
      options: [
        "String (enclosed in double quotes)",
        "Any hashable Python object",
        "Integer",
        "Symbol",
      ],
      answer: 0,
      explain: "The JSON specification strictly requires all object keys to be strings enclosed in double quotes. In Python, if a dictionary has integer keys, json.dump() converts them to strings."
    },
    {
      id: "q-8c-5",
      section: "8c",
      q: "How does JSON differentiate between a string value and a numeric value?",
      options: [
        "Strings are enclosed in double quotes (e.g. \"123\"); numbers are unquoted (e.g. 123)",
        "Strings use single quotes; numbers use double quotes",
        "Numbers are prefixed with #",
        "JSON cannot distinguish numbers from strings",
      ],
      answer: 0,
      explain: "In JSON, double quotes denote string literals (\"42\"), whereas numeric literals appear without quotes (42 or 3.14)."
    },
    {
      id: "q-8c-6",
      section: "8c",
      q: "What is the difference between json.dump() and json.load() in Python?",
      options: [
        "json.dump() writes Python data to a file stream; json.load() reads and parses JSON from a file stream",
        "json.dump() deletes JSON files; json.load() creates them",
        "json.dump() works on strings; json.load() works on binary files",
        "Both functions are identical",
      ],
      answer: 0,
      explain: "json.dump(obj, fp) serializes an object to a file stream. json.load(fp) deserializes JSON from a file stream into Python data structures. (Contrast with json.dumps() and json.loads(), which operate on in-memory strings)."
    },
    {
      id: "q-8c-7",
      section: "8c",
      q: "What does passing sort_keys=True to json.dump(data, f, sort_keys=True) do, and why is it useful?",
      options: [
        "Sorts the file lines in reverse order",
        "Sorts dictionary keys alphabetically in the output, producing deterministic JSON ideal for diffs and testing",
        "Deletes unsorted dictionary keys",
        "Sorts list elements numerically",
      ],
      answer: 1,
      explain: "sort_keys=True forces dictionary keys to be serialized in alphabetical order. This guarantees deterministic, reproducible JSON output, making file comparisons and git diffs clean."
    }
  ]
};
