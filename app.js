/* ============================================
   EDUPLAY - COMPLETE APPLICATION LOGIC
   ============================================ */

// ==================== DATA STORE ====================

const COURSES_DATA = [
    {
        id: 'python-basics',
        title: 'Python Programming Basics',
        icon: '🐍',
        category: 'coding',
        description: 'Learn Python from scratch through fun coding challenges and puzzles.',
        color: '#3776AB',
        lessons: 12,
        games: 8,
        students: 15420,
        rating: 4.8,
        topics: [
            { name: 'Variables & Data Types', type: 'Game: Code Quiz', completed: false },
            { name: 'Operators & Expressions', type: 'Game: Fix the Bug', completed: false },
            { name: 'Conditional Statements', type: 'Game: Logic Maze', completed: false },
            { name: 'Loops - For & While', type: 'Game: Loop Runner', completed: false },
            { name: 'Functions', type: 'Game: Function Builder', completed: false },
            { name: 'Lists & Tuples', type: 'Game: Data Sorter', completed: false },
            { name: 'Dictionaries', type: 'Game: Key-Value Match', completed: false },
            { name: 'String Operations', type: 'Game: Word Processor', completed: false },
            { name: 'File Handling', type: 'Game: File Explorer', completed: false },
            { name: 'Error Handling', type: 'Game: Bug Catcher', completed: false },
            { name: 'OOP Basics', type: 'Game: Class Creator', completed: false },
            { name: 'Final Project', type: 'Build: Mini Calculator', completed: false }
        ]
    },
    {
        id: 'web-dev',
        title: 'HTML, CSS & JavaScript',
        icon: '🌐',
        category: 'coding',
        description: 'Build websites by completing fun web development challenges.',
        color: '#E44D26',
        lessons: 15,
        games: 10,
        students: 18200,
        rating: 4.9,
        topics: [
            { name: 'HTML Structure', type: 'Game: Tag Builder', completed: false },
            { name: 'HTML Forms', type: 'Game: Form Designer', completed: false },
            { name: 'CSS Basics', type: 'Game: Style Matcher', completed: false },
            { name: 'CSS Flexbox', type: 'Game: Flexbox Froggy', completed: false },
            { name: 'CSS Grid', type: 'Game: Grid Garden', completed: false },
            { name: 'JavaScript Basics', type: 'Game: JS Quiz', completed: false },
            { name: 'DOM Manipulation', type: 'Game: DOM Explorer', completed: false },
            { name: 'Events', type: 'Game: Event Catcher', completed: false },
            { name: 'Arrays & Objects', type: 'Game: Data Master', completed: false },
            { name: 'Responsive Design', type: 'Game: Screen Sizer', completed: false }
        ]
    },
    {
        id: 'accounting-basics',
        title: 'Accounting Fundamentals',
        icon: '📊',
        category: 'accounting',
        description: 'Master accounting concepts through interactive financial games.',
        color: '#27AE60',
        lessons: 10,
        games: 7,
        students: 12300,
        rating: 4.7,
        topics: [
            { name: 'Accounting Equation', type: 'Game: Balance Builder', completed: false },
            { name: 'Journal Entries', type: 'Game: Journal Match', completed: false },
            { name: 'T-Accounts', type: 'Game: T-Account Trainer', completed: false },
            { name: 'Trial Balance', type: 'Game: Balance Checker', completed: false },
            { name: 'Income Statement', type: 'Game: Profit Calculator', completed: false },
            { name: 'Balance Sheet', type: 'Game: Sheet Builder', completed: false },
            { name: 'Cash Flow Statement', type: 'Game: Cash Tracker', completed: false },
            { name: 'Depreciation', type: 'Game: Asset Manager', completed: false },
            { name: 'Bank Reconciliation', type: 'Game: Bank Matcher', completed: false },
            { name: 'Final Assessment', type: 'Game: Accountant Sim', completed: false }
        ]
    },
    {
        id: 'tally-gst',
        title: 'Tally & GST',
        icon: '🧾',
        category: 'accounting',
        description: 'Learn Tally software and GST filing through simulation games.',
        color: '#2C3E50',
        lessons: 8,
        games: 6,
        students: 9800,
        rating: 4.6,
        topics: [
            { name: 'Tally Interface', type: 'Game: Tally Navigator', completed: false },
            { name: 'Creating Ledgers', type: 'Game: Ledger Builder', completed: false },
            { name: 'Voucher Entry', type: 'Game: Voucher Master', completed: false },
            { name: 'GST Basics', type: 'Game: GST Quiz', completed: false },
            { name: 'GST Registration', type: 'Game: Form Filler', completed: false },
            { name: 'GST Returns', type: 'Game: Return Filer', completed: false },
            { name: 'Invoice Generation', type: 'Game: Invoice Creator', completed: false },
            { name: 'Reports in Tally', type: 'Game: Report Reader', completed: false }
        ]
    },
    {
        id: 'math-fundamentals',
        title: 'Mathematics Mastery',
        icon: '📐',
        category: 'math',
        description: 'Build strong math skills through speed challenges and puzzles.',
        color: '#E74C3C',
        lessons: 12,
        games: 10,
        students: 22100,
        rating: 4.8,
        topics: [
            { name: 'Arithmetic Operations', type: 'Game: Math Race', completed: false },
            { name: 'Fractions & Decimals', type: 'Game: Fraction Frenzy', completed: false },
            { name: 'Percentages', type: 'Game: Percent Pro', completed: false },
            { name: 'Algebra Basics', type: 'Game: Equation Solver', completed: false },
            { name: 'Geometry', type: 'Game: Shape Builder', completed: false },
            { name: 'Statistics', type: 'Game: Data Analyzer', completed: false },
            { name: 'Probability', type: 'Game: Chance Calculator', completed: false },
            { name: 'Number Patterns', type: 'Game: Pattern Finder', completed: false }
        ]
    },
    {
        id: 'science-explorer',
        title: 'Science Explorer',
        icon: '🔬',
        category: 'science',
        description: 'Discover science through experiments and trivia games.',
        color: '#9B59B6',
        lessons: 10,
        games: 8,
        students: 14500,
        rating: 4.7,
        topics: [
            { name: 'Physics Basics', type: 'Game: Force Lab', completed: false },
            { name: 'Chemistry Elements', type: 'Game: Element Match', completed: false },
            { name: 'Biology Basics', type: 'Game: Cell Explorer', completed: false },
            { name: 'Human Body', type: 'Game: Body Quiz', completed: false },
            { name: 'Space & Astronomy', type: 'Game: Space Quiz', completed: false },
            { name: 'Environmental Science', type: 'Game: Eco Challenge', completed: false }
        ]
    },
    {
        id: 'english-skills',
        title: 'English Language Skills',
        icon: '📝',
        category: 'english',
        description: 'Improve vocabulary, grammar, and writing through word games.',
        color: '#F39C12',
        lessons: 10,
        games: 8,
        students: 19800,
        rating: 4.6,
        topics: [
            { name: 'Vocabulary Building', type: 'Game: Word Scramble', completed: false },
            { name: 'Grammar Rules', type: 'Game: Grammar Fix', completed: false },
            { name: 'Sentence Formation', type: 'Game: Sentence Builder', completed: false },
            { name: 'Tenses', type: 'Game: Tense Match', completed: false },
            { name: 'Reading Comprehension', type: 'Game: Speed Reader', completed: false },
            { name: 'Typing Skills', type: 'Game: Typing Speed', completed: false },
            { name: 'Spelling Bee', type: 'Game: Spell Master', completed: false },
            { name: 'Synonyms & Antonyms', type: 'Game: Word Pairs', completed: false }
        ]
    },
    {
        id: 'graphic-design',
        title: 'Design Fundamentals',
        icon: '🎨',
        category: 'design',
        description: 'Learn design principles through creative challenges.',
        color: '#E91E63',
        lessons: 8,
        games: 6,
        students: 8900,
        rating: 4.5,
        topics: [
            { name: 'Color Theory', type: 'Game: Color Mixer', completed: false },
            { name: 'Typography', type: 'Game: Font Match', completed: false },
            { name: 'Layout Principles', type: 'Game: Layout Builder', completed: false },
            { name: 'UI Design Basics', type: 'Game: UI Challenge', completed: false },
            { name: 'Logo Design', type: 'Game: Logo Creator', completed: false },
            { name: 'Design Tools', type: 'Game: Tool Quiz', completed: false }
        ]
    }
];

const GAMES_DATA = [
    {
        id: 'code-quiz',
        title: 'Code Quiz',
        icon: '💻',
        description: 'Test your programming knowledge',
        category: 'coding',
        difficulty: 'easy',
        coins: 50,
        type: 'quiz'
    },
    {
        id: 'math-race',
        title: 'Math Race',
        icon: '🔢',
        description: 'Solve math problems before time runs out',
        category: 'math',
        difficulty: 'medium',
        coins: 75,
        type: 'math'
    },
    {
        id: 'word-scramble',
        title: 'Word Scramble',
        icon: '📝',
        description: 'Unscramble English words',
        category: 'english',
        difficulty: 'easy',
        coins: 40,
        type: 'word'
    },
    {
        id: 'account-match',
        title: 'Account Match',
        icon: '📊',
        description: 'Match accounting terms with definitions',
        category: 'accounting',
        difficulty: 'medium',
        coins: 60,
        type: 'quiz'
    },
    {
        id: 'science-trivia',
        title: 'Science Trivia',
        icon: '🔬',
        description: 'Test your science knowledge',
        category: 'science',
        difficulty: 'medium',
        coins: 55,
        type: 'quiz'
    },
    {
        id: 'typing-speed',
        title: 'Typing Speed',
        icon: '⌨️',
        description: 'How fast can you type?',
        category: 'english',
        difficulty: 'easy',
        coins: 45,
        type: 'typing'
    },
    {
        id: 'debug-challenge',
        title: 'Debug Challenge',
        icon: '🐛',
        description: 'Find and fix the bugs in code',
        category: 'coding',
        difficulty: 'hard',
        coins: 100,
        type: 'quiz'
    },
    {
        id: 'gst-calculator',
        title: 'GST Calculator',
        icon: '🧾',
        description: 'Calculate GST amounts quickly',
        category: 'accounting',
        difficulty: 'medium',
        coins: 70,
        type: 'math'
    },
    {
        id: 'algebra-solver',
        title: 'Algebra Solver',
        icon: '🧮',
        description: 'Solve algebraic equations',
        category: 'math',
        difficulty: 'hard',
        coins: 90,
        type: 'math'
    },
    {
        id: 'html-builder',
        title: 'HTML Builder',
        icon: '🌐',
        description: 'Build HTML structures correctly',
        category: 'coding',
        difficulty: 'easy',
        coins: 45,
        type: 'quiz'
    },
    {
        id: 'grammar-fix',
        title: 'Grammar Fixer',
        icon: '✏️',
        description: 'Fix grammar errors in sentences',
        category: 'english',
        difficulty: 'medium',
        coins: 50,
        type: 'quiz'
    },
    {
        id: 'color-mixer',
        title: 'Color Mixer',
        icon: '🎨',
        description: 'Mix colors to match the target',
        category: 'design',
        difficulty: 'easy',
        coins: 40,
        type: 'quiz'
    }
];

// Question banks for games
const QUESTION_BANKS = {
    'code-quiz': [
        {
            question: 'What does HTML stand for?',
            options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyper Transfer Markup Language', 'Home Tool Markup Language'],
            correct: 0,
            explanation: 'HTML stands for Hyper Text Markup Language, used to create web pages.'
        },
        {
            question: 'Which symbol is used for comments in Python?',
            options: ['//', '/* */', '#', '--'],
            correct: 2,
            explanation: 'In Python, the hash symbol (#) is used for single-line comments.'
        },
        {
            question: 'What is the output of: print(2 ** 3)?',
            options: ['6', '8', '5', '9'],
            correct: 1,
            explanation: '** is the power operator. 2 ** 3 = 2³ = 8'
        },
        {
            question: 'Which data type is used to store True/False?',
            options: ['String', 'Integer', 'Boolean', 'Float'],
            correct: 2,
            explanation: 'Boolean data type stores True or False values.'
        },
        {
            question: 'What does CSS stand for?',
            options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
            correct: 1,
            explanation: 'CSS stands for Cascading Style Sheets, used to style web pages.'
        },
        {
            question: 'Which tag is used for the largest heading in HTML?',
            options: ['<h6>', '<heading>', '<h1>', '<head>'],
            correct: 2,
            explanation: '<h1> is the largest heading tag. Headings go from h1 (largest) to h6 (smallest).'
        },
        {
            question: 'What keyword is used to define a function in JavaScript?',
            options: ['def', 'func', 'function', 'define'],
            correct: 2,
            explanation: 'The "function" keyword is used to declare functions in JavaScript.'
        },
        {
            question: 'Which of these is a loop in Python?',
            options: ['repeat', 'for', 'loop', 'iterate'],
            correct: 1,
            explanation: 'Python uses "for" and "while" loops for iteration.'
        },
        {
            question: 'What is the correct way to create a list in Python?',
            options: ['list = (1,2,3)', 'list = [1,2,3]', 'list = {1,2,3}', 'list = <1,2,3>'],
            correct: 1,
            explanation: 'Lists in Python are created using square brackets [].'
        },
        {
            question: 'Which operator is used for equality comparison in JavaScript?',
            options: ['=', '==', ':=', '!='],
            correct: 1,
            explanation: '== checks equality (with type coercion), === checks strict equality.'
        }
    ],
    'account-match': [
        {
            question: 'What is the accounting equation?',
            options: ['Assets = Liabilities + Equity', 'Assets = Revenue - Expenses', 'Revenue = Assets + Liabilities', 'Equity = Assets + Liabilities'],
            correct: 0,
            explanation: 'The fundamental accounting equation: Assets = Liabilities + Owner\'s Equity'
        },
        {
            question: 'Which side of a T-account do debits go?',
            options: ['Right side', 'Left side', 'Top', 'Bottom'],
            correct: 1,
            explanation: 'Debits are always recorded on the left side of a T-account.'
        },
        {
            question: 'What type of account is "Cash"?',
            options: ['Liability', 'Revenue', 'Asset', 'Expense'],
            correct: 2,
            explanation: 'Cash is an asset account - it represents something the business owns.'
        },
        {
            question: 'GST stands for?',
            options: ['General Sales Tax', 'Goods and Services Tax', 'Government Service Tax', 'Gross Sales Tax'],
            correct: 1,
            explanation: 'GST stands for Goods and Services Tax, a comprehensive indirect tax.'
        },
        {
            question: 'What increases a revenue account?',
            options: ['Debit', 'Credit', 'Both', 'Neither'],
            correct: 1,
            explanation: 'Revenue accounts are increased by credits and decreased by debits.'
        },
        {
            question: 'What is depreciation?',
            options: ['Increase in asset value', 'Decrease in asset value over time', 'Payment for assets', 'Tax on assets'],
            correct: 1,
            explanation: 'Depreciation is the systematic allocation of an asset\'s cost over its useful life.'
        },
        {
            question: 'Which financial statement shows profitability?',
            options: ['Balance Sheet', 'Income Statement', 'Cash Flow Statement', 'Trial Balance'],
            correct: 1,
            explanation: 'The Income Statement (P&L) shows revenues, expenses, and net profit/loss.'
        },
        {
            question: 'What is the current GST rate for most goods in India?',
            options: ['5%', '12%', '18%', '28%'],
            correct: 2,
            explanation: '18% is the most common GST rate applied to majority of goods and services.'
        },
        {
            question: 'What does CGST stand for?',
            options: ['Central GST', 'Common GST', 'Combined GST', 'Corporate GST'],
            correct: 0,
            explanation: 'CGST = Central GST, collected by the central government on intra-state sales.'
        },
        {
            question: 'Double-entry bookkeeping means:',
            options: ['Recording twice a day', 'Each transaction affects two accounts', 'Using two books', 'Having two accountants'],
            correct: 1,
            explanation: 'Every transaction affects at least two accounts - one debit and one credit.'
        }
    ],
    'science-trivia': [
        {
            question: 'What is the chemical symbol for water?',
            options: ['H2O', 'CO2', 'O2', 'NaCl'],
            correct: 0,
            explanation: 'Water is H2O - two hydrogen atoms bonded to one oxygen atom.'
        },
        {
            question: 'What planet is known as the Red Planet?',
            options: ['Venus', 'Jupiter', 'Mars', 'Saturn'],
            correct: 2,
            explanation: 'Mars appears red due to iron oxide (rust) on its surface.'
        },
        {
            question: 'What is the powerhouse of the cell?',
            options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Cell Wall'],
            correct: 2,
            explanation: 'Mitochondria generate most of the cell\'s supply of ATP (energy).'
        },
        {
            question: 'What is Newton\'s First Law about?',
            options: ['Gravity', 'Inertia', 'Acceleration', 'Reaction'],
            correct: 1,
            explanation: 'Newton\'s First Law (Law of Inertia): An object at rest stays at rest, and an object in motion stays in motion.'
        },
        {
            question: 'What gas do plants absorb from the atmosphere?',
            options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
            correct: 2,
            explanation: 'Plants absorb CO2 during photosynthesis and release oxygen.'
        },
        {
            question: 'What is the speed of light?',
            options: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10¹⁰ m/s', '3 × 10⁴ m/s'],
            correct: 0,
            explanation: 'The speed of light in vacuum is approximately 3 × 10⁸ meters per second.'
        },
        {
            question: 'How many bones are in the adult human body?',
            options: ['106', '206', '306', '156'],
            correct: 1,
            explanation: 'An adult human body has 206 bones. Babies are born with about 270.'
        },
        {
            question: 'What is the largest organ of the human body?',
            options: ['Heart', 'Liver', 'Skin', 'Lungs'],
            correct: 2,
            explanation: 'The skin is the largest organ, covering about 2 square meters.'
        }
    ],
    'debug-challenge': [
        {
            question: 'Find the bug: for i in range(5)\n    print(i)',
            options: ['Missing colon after range(5)', 'range should be Range', 'print should be Print', 'i should be I'],
            correct: 0,
            explanation: 'In Python, a colon (:) is required after the for statement: for i in range(5):'
        },
        {
            question: 'What\'s wrong? x = "Hello" + 5',
            options: ['Nothing wrong', 'Cannot concatenate string and integer', 'Hello is not a valid string', 'x is reserved keyword'],
            correct: 1,
            explanation: 'Python cannot concatenate a string with an integer. Use str(5) to convert first.'
        },
        {
            question: 'Find the error: if x = 5:',
            options: ['x should be X', 'Use == for comparison, not =', 'Missing parentheses', 'if should be If'],
            correct: 1,
            explanation: '= is assignment, == is comparison. Use: if x == 5:'
        },
        {
            question: 'Bug in CSS: color: blue\nfont-size: 16px;',
            options: ['blue is not a valid color', 'Missing semicolon after blue', 'font-size is wrong property', 'px is not a valid unit'],
            correct: 1,
            explanation: 'Each CSS property must end with a semicolon: color: blue;'
        },
        {
            question: 'Error in HTML: <img src="pic.jpg">',
            options: ['Missing closing tag', 'Missing alt attribute', 'src is wrong attribute', 'No error, but should have alt for accessibility'],
            correct: 3,
            explanation: 'While valid, images should have alt attributes for accessibility: <img src="pic.jpg" alt="description">'
        }
    ],
    'html-builder': [
        {
            question: 'Which tag creates a paragraph?',
            options: ['<paragraph>', '<p>', '<para>', '<text>'],
            correct: 1,
            explanation: 'The <p> tag defines a paragraph in HTML.'
        },
        {
            question: 'Which attribute specifies the URL for a link?',
            options: ['src', 'link', 'href', 'url'],
            correct: 2,
            explanation: 'The href attribute in <a> tag specifies the URL destination.'
        },
        {
            question: 'Which tag creates an ordered list?',
            options: ['<ul>', '<ol>', '<list>', '<dl>'],
            correct: 1,
            explanation: '<ol> creates an ordered (numbered) list. <ul> creates unordered (bulleted) list.'
        },
        {
            question: 'How do you add a CSS class to an element?',
            options: ['class="name"', 'style="name"', 'css="name"', 'type="name"'],
            correct: 0,
            explanation: 'The class attribute is used: <div class="name">'
        },
        {
            question: 'Which CSS property changes text color?',
            options: ['font-color', 'text-color', 'color', 'foreground'],
            correct: 2,
            explanation: 'The "color" property sets the text color in CSS.'
        }
    ],
    'grammar-fix': [
        {
            question: 'Which sentence is correct?',
            options: ['She don\'t like coffee', 'She doesn\'t like coffee', 'She not like coffee', 'She no like coffee'],
            correct: 1,
            explanation: 'With "she/he/it", use "doesn\'t" (does not) for negation.'
        },
        {
            question: 'Choose the correct form:',
            options: ['Their going to the park', 'There going to the park', 'They\'re going to the park', 'Theyre going to the park'],
            correct: 2,
            explanation: '"They\'re" = "They are". "Their" shows possession. "There" indicates place.'
        },
        {
            question: 'Which is correct?',
            options: ['I have went there', 'I have gone there', 'I have go there', 'I have going there'],
            correct: 1,
            explanation: 'Present perfect tense uses "have/has" + past participle. "Gone" is the past participle of "go".'
        },
        {
            question: 'Find the error: "The team are playing good."',
            options: ['"are" should be "is"', '"good" should be "well"', '"playing" should be "played"', 'No error'],
            correct: 1,
            explanation: '"Well" is an adverb modifying the verb "playing". "Good" is an adjective.'
        },
        {
            question: 'Which sentence uses correct punctuation?',
            options: ['Its a beautiful day.', 'It\'s a beautiful day.', 'Its\' a beautiful day.', 'It`s a beautiful day.'],
            correct: 1,
            explanation: '"It\'s" = "It is". "Its" (without apostrophe) shows possession.'
        }
    ],
    'color-mixer': [
        {
            question: 'What two primary colors make GREEN?',
            options: ['Red + Blue', 'Blue + Yellow', 'Red + Yellow', 'Red + White'],
            correct: 1,
            explanation: 'Blue + Yellow = Green in subtractive color mixing (paint/pigments).'
        },
        {
            question: 'What is the hex code for pure white?',
            options: ['#000000', '#FFFFFF', '#FF0000', '#0000FF'],
            correct: 1,
            explanation: '#FFFFFF is white (all colors at full intensity). #000000 is black.'
        },
        {
            question: 'Which color scheme uses opposite colors on the color wheel?',
            options: ['Analogous', 'Complementary', 'Monochromatic', 'Triadic'],
            correct: 1,
            explanation: 'Complementary colors are opposite each other on the color wheel (e.g., red & green).'
        },
        {
            question: 'RGB stands for?',
            options: ['Red Green Black', 'Red Green Blue', 'Real Graphic Blend', 'Render Graph Base'],
            correct: 1,
            explanation: 'RGB = Red, Green, Blue - the additive color model used in screens.'
        },
        {
            question: 'What feeling does BLUE typically convey?',
            options: ['Excitement', 'Trust & Calm', 'Danger', 'Happiness'],
            correct: 1,
            explanation: 'Blue is associated with trust, calm, professionalism, and stability.'
        }
    ],
    'gst-calculator': [],
    'algebra-solver': []
};

// Word scramble data
const WORD_BANK = [
    { word: 'VARIABLE', hint: 'A container for storing data in programming' },
    { word: 'FUNCTION', hint: 'A reusable block of code' },
    { word: 'DEBIT', hint: 'Left side of a T-account entry' },
    { word: 'CREDIT', hint: 'Right side of a T-account entry' },
    { word: 'ALGORITHM', hint: 'Step-by-step procedure for solving a problem' },
    { word: 'BALANCE', hint: 'The difference between debits and credits' },
    { word: 'ARRAY', hint: 'A collection of elements in programming' },
    { word: 'LEDGER', hint: 'A book of accounting records' },
    { word: 'SYNTAX', hint: 'Rules governing the structure of code' },
    { word: 'REVENUE', hint: 'Income earned by a business' },
    { word: 'BOOLEAN', hint: 'Data type that is either true or false' },
    { word: 'ASSET', hint: 'Something of value owned by a business' },
    { word: 'STRING', hint: 'A sequence of characters in programming' },
    { word: 'EQUITY', hint: 'Owner\'s stake in the business' },
    { word: 'LOOP', hint: 'Repeating code structure in programming' }
];

const TYPING_TEXTS = [
    "The quick brown fox jumps over the lazy dog.",
    "Programming is the art of telling a computer what to do.",
    "Every debit must have an equal and opposite credit.",
    "HTML is the skeleton of every web page on the internet.",
    "Python is known for its simplicity and readability.",
    "Assets equal liabilities plus owner equity in accounting.",
    "JavaScript is the language of the web browser.",
    "Practice makes perfect when learning to code."
];

// Leaderboard data
const LEADERBOARD_DATA = {
    overall: [
        { name: 'Arjun K.', score: 15420, level: 25, avatar: 'A' },
        { name: 'Sneha R.', score: 14200, level: 23, avatar: 'S' },
        { name: 'Vikram M.', score: 13850, level: 22, avatar: 'V' },
        { name: 'Priya S.', score: 12900, level: 21, avatar: 'P' },
        { name: 'Rohit D.', score: 12100, level: 20, avatar: 'R' },
        { name: 'Anita G.', score: 11500, level: 19, avatar: 'A' },
        { name: 'Karthik N.', score: 10800, level: 18, avatar: 'K' },
        { name: 'Deepa J.', score: 10200, level: 17, avatar: 'D' },
        { name: 'Suresh B.', score: 9800, level: 16, avatar: 'S' },
        { name: 'Meena T.', score: 9200, level: 15, avatar: 'M' }
    ],
    coding: [
        { name: 'Arjun K.', score: 8200, level: 25, avatar: 'A' },
        { name: 'Vikram M.', score: 7500, level: 22, avatar: 'V' },
        { name: 'Rohit D.', score: 6800, level: 20, avatar: 'R' }
    ],
    accounting: [
        { name: 'Sneha R.', score: 7100, level: 23, avatar: 'S' },
        { name: 'Priya S.', score: 6400, level: 21, avatar: 'P' },
        { name: 'Deepa J.', score: 5900, level: 17, avatar: 'D' }
    ],
    math: [
        { name: 'Karthik N.', score: 6500, level: 18, avatar: 'K' },
        { name: 'Arjun K.', score: 6200, level: 25, avatar: 'A' },
        { name: 'Suresh B.', score: 5800, level: 16, avatar: 'S' }
    ]
};

const ACHIEVEMENTS = [
    { icon: '🎯', name: 'First Game', unlocked: false },
    { icon: '🔥', name: '3-Day Streak', unlocked: false },
    { icon: '💯', name: 'Perfect Score', unlocked: false },
    { icon: '📚', name: '5 Lessons', unlocked: false },
    { icon: '🏆', name: 'Top 10', unlocked: false },
    { icon: '⚡', name: 'Speed Demon', unlocked: false },
    { icon: '🎮', name: '10 Games', unlocked: false },
    { icon: '🌟', name: 'Level 5', unlocked: false },
    { icon: '💎', name: '500 Coins', unlocked: false },
    { icon: '🧠', name: 'All Courses', unlocked: false },
    { icon: '👑', name: 'Premium', unlocked: false },
    { icon: '🚀', name: 'Level 10', unlocked: false }
];

// ==================== STATE MANAGEMENT ====================

let currentUser = null;
let currentGame = null;
let gameTimer = null;
let gameState = {};

// ==================== INITIALIZATION ====================

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 2500);

    initParticles();
    initTypingAnimation();
    initCountUp();
    initScrollEffects();
    checkSavedSession();
});

function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const colors = ['#6C5CE7', '#A29BFE', '#00CEC9', '#FD79A8', '#FDCB6E'];
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 10 + 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = Math.random() * 4 + 4 + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        container.appendChild(particle);
    }
}

function initTypingAnimation() {
    const words = ['Coding', 'Accounting', 'Math', 'Science', 'English', 'Design'];
    const el = document.getElementById('typingText');
    if (!el) return;
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const current = words[wordIndex];
        if (isDeleting) {
            el.textContent = current.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
                return;
            }
        } else {
            el.textContent = current.substring(0, charIndex++);
            if (charIndex > current.length) {
                isDeleting = true;
                setTimeout(type, 2000);
                return;
            }
        }
        setTimeout(type, isDeleting ? 50 : 100);
    }
    type();
}

function initCountUp() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                animateCount(el, target);
                observer.unobserve(el);
            }
        });
    });

    document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
}

function animateCount(el, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            el.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current).toLocaleString();
        }
    }, 30);
}

function initScrollEffects() {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ==================== PAGE NAVIGATION ====================

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('page-' + pageId);
    if (page) {
        page.classList.add('active');
        window.scrollTo(0, 0);
    }

    // Close mobile menu
    document.getElementById('navLinks').classList.remove('show');

    // Load page specific content
    if (pageId === 'courses') loadCourses();
    if (pageId === 'games') loadGames();
    if (pageId === 'leaderboard') loadLeaderboard('overall');
    if (pageId === 'dashboard') loadDashboard();
}

function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('show');
}

// ==================== AUTHENTICATION ====================

function handleRegister(e) {
    e.preventDefault();

    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const password = document.getElementById('regPassword').value;
    const plan = document.querySelector('input[name="plan"]:checked').value;

    if (!name || !email || !password) {
        showToast('Please fill all fields', '⚠️');
        return;
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('eduplay_users') || '[]');
    if (users.find(u => u.email === email)) {
        showToast('Email already registered! Please login.', '⚠️');
        return;
    }

    const planDetails = {
        free: { name: 'Free Trial', price: 0, days: 3 },
        standard: { name: 'Standard Plan', price: 99, days: 15 },
        premium: { name: 'Premium Plan', price: 249, days: 45 }
    };

    const user = {
        id: Date.now(),
        name,
        email,
        phone,
        password,
        plan: planDetails[plan],
        planType: plan,
        registeredAt: new Date().toISOString(),
        subscriptionStart: new Date().toISOString(),
        subscriptionEnd: new Date(Date.now() + planDetails[plan].days * 24 * 60 * 60 * 1000).toISOString(),
        coins: 100,
        xp: 0,
        level: 1,
        streak: 0,
        lastActive: new Date().toISOString(),
        gamesPlayed: 0,
        totalScore: 0,
        courseProgress: {},
        achievements: ACHIEVEMENTS.map(a => ({ ...a })),
        activities: [{ icon: '🎉', text: 'Joined EduPlay!', time: 'Just now' }]
    };

    if (plan === 'free') {
        // Free plan - register directly
        users.push(user);
        localStorage.setItem('eduplay_users', JSON.stringify(users));
        loginUser(user);
        showToast('Welcome to EduPlay! Your free trial has started.', '🎉');
    } else {
        // Paid plan - go to payment
        currentUser = user;
        document.getElementById('paymentPlanName').textContent = planDetails[plan].name;
        document.getElementById('paymentAmount').textContent = '₹' + planDetails[plan].price;
        document.getElementById('paymentDuration').textContent = planDetails[plan].days + ' days access to all courses & games';
        showPage('payment');
    }
}

function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('eduplay_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        showToast('Invalid email or password!', '❌');
        return;
    }

    loginUser(user);
    showToast('Welcome back, ' + user.name + '!', '👋');
}

function loginUser(user) {
    currentUser = user;
    localStorage.setItem('eduplay_currentUser', JSON.stringify(user));

    // Update navbar
    document.getElementById('navAuthButtons').style.display = 'none';
    document.getElementById('navUserInfo').style.display = 'flex';
    document.getElementById('profileNavItem').style.display = 'block';
    document.getElementById('navUsername').textContent = user.name.split(' ')[0];
    document.getElementById('navAvatar').textContent = user.name.charAt(0).toUpperCase();
    document.getElementById('navCoins').textContent = user.coins;

    // Unlock first achievement
    user.achievements[0].unlocked = true;
    saveUser();

    showPage('dashboard');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('eduplay_currentUser');

    document.getElementById('navAuthButtons').style.display = 'flex';
    document.getElementById('navUserInfo').style.display = 'none';
    document.getElementById('profileNavItem').style.display = 'none';

    showToast('Logged out successfully!', '👋');
    showPage('landing');
}

function checkSavedSession() {
    const saved = localStorage.getItem('eduplay_currentUser');
    if (saved) {
        const user = JSON.parse(saved);
        loginUser(user);
    }
}

function saveUser() {
    if (!currentUser) return;
    localStorage.setItem('eduplay_currentUser', JSON.stringify(currentUser));

    const users = JSON.parse(localStorage.getItem('eduplay_users') || '[]');
    const idx = users.findIndex(u => u.id === currentUser.id);
    if (idx !== -1) {
        users[idx] = currentUser;
    } else {
        users.push(currentUser);
    }
    localStorage.setItem('eduplay_users', JSON.stringify(users));

    // Update nav coins
    const navCoins = document.getElementById('navCoins');
    if (navCoins) navCoins.textContent = currentUser.coins;
}

// ==================== PAYMENT ====================

// ============================================
// RAZORPAY REAL PAYMENT INTEGRATION
// ============================================

// Your Razorpay Key ID (get from dashboard)
const RAZORPAY_KEY_ID = 'rzp_test_SwjzljOboA3T4o'; // Replace with your key

function handlePayment(e) {
    if (e) e.preventDefault();

    if (!currentUser) {
        showToast('Please register first', '⚠️');
        return;
    }

    const planDetails = {
        free: { name: 'Free Trial', price: 0, days: 3 },
        standard: { name: 'Standard Plan', price: 99, days: 15 },
        premium: { name: 'Premium Plan', price: 249, days: 45 }
    };

    const plan = currentUser.planType || 'standard';
    const planInfo = planDetails[plan];

    // Amount in PAISE (multiply by 100)
    const amountInPaise = planInfo.price * 100;

    const options = {
        key: RAZORPAY_KEY_ID,
        amount: amountInPaise,        // In paise
        currency: 'INR',
        name: 'EduPlay',
        description: planInfo.name + ' - ' + planInfo.days + ' Days Access',
        image: 'https://yourdomain.com/logo.png', // Your logo URL

        // Prefill user details
        prefill: {
            name: currentUser.name,
            email: currentUser.email,
            contact: currentUser.phone
        },

        // Theme
        theme: {
            color: '#6C5CE7'
        },

        // Notes (optional - appears in dashboard)
        notes: {
            plan: plan,
            userId: currentUser.id,
            days: planInfo.days
        },

        // PAYMENT SUCCESS HANDLER
        handler: function(response) {
            console.log('Payment Success:', response);
            /*
            response contains:
            - razorpay_payment_id: "pay_XXXXXXXXXX"
            - razorpay_order_id: "order_XXXXXXXXXX"
            - razorpay_signature: "XXXXXXXXXX"
            */
            onPaymentSuccess(response, planInfo);
        },

        // PAYMENT FAILURE HANDLER
        modal: {
            ondismiss: function() {
                showToast('Payment cancelled', '❌');
            }
        }
    };

    // Open Razorpay Checkout
    const rzp = new Razorpay(options);

    rzp.on('payment.failed', function(response) {
        console.error('Payment failed:', response.error);
        showToast('Payment failed: ' + response.error.description, '❌');
        showModal(`
            <div style="text-align:center">
                <div style="font-size:3rem">❌</div>
                <h2>Payment Failed</h2>
                <p style="color:var(--danger)">${response.error.description}</p>
                <button class="btn btn-primary" onclick="closeModal();handlePayment()">Try Again</button>
            </div>
        `);
    });

    rzp.open();
}

// Called after successful payment
function onPaymentSuccess(response, planInfo) {
    // Save payment proof
    currentUser.paymentId = response.razorpay_payment_id;
    currentUser.plan = planInfo;
    currentUser.subscriptionStart = new Date().toISOString();
    currentUser.subscriptionEnd = new Date(
        Date.now() + planInfo.days * 24 * 60 * 60 * 1000
    ).toISOString();

    // Save to local storage
    const users = JSON.parse(localStorage.getItem('eduplay_users') || '[]');
    const idx = users.findIndex(u => u.id === currentUser.id);
    if (idx !== -1) {
        users[idx] = currentUser;
    } else {
        users.push(currentUser);
    }
    localStorage.setItem('eduplay_users', JSON.stringify(users));
    saveUser();

    // Show success message
    showModal(`
        <div style="text-align:center">
            <div style="font-size:4rem;margin-bottom:15px">✅</div>
            <h2>Payment Successful!</h2>
            <p style="color:var(--gray);margin:10px 0">
                Payment ID: <strong>${response.razorpay_payment_id}</strong>
            </p>
            <p style="color:var(--primary);font-weight:600;font-size:1.2rem">
                ₹${planInfo.price} paid successfully
            </p>
            <p>Your ${planInfo.name} is active for ${planInfo.days} days!</p>
            <button class="btn btn-primary btn-lg" 
                onclick="closeModal();showPage('dashboard')" 
                style="margin-top:20px">
                Start Learning! 🚀
            </button>
        </div>
    `);

    showToast('Payment successful! Welcome!', '🎉');
}

function simulateUPI() {
    showModal(`
        <div style="text-align:center">
            <div style="font-size:3rem;margin-bottom:15px">📱</div>
            <h2>UPI Payment</h2>
            <p style="color:var(--gray);margin:10px 0">Enter your UPI ID</p>
            <div class="form-group">
                <div class="input-icon">
                    <i class="fas fa-mobile-alt"></i>
                    <input type="text" placeholder="username@upi" id="upiId" style="width:100%">
                </div>
            </div>
            <button class="btn btn-primary btn-block" onclick="processUPIPayment()">
                Pay via UPI
            </button>
        </div>
    `);
}

function processUPIPayment() {
    const upiId = document.getElementById('upiId').value;
    if (!upiId) {
        showToast('Please enter UPI ID', '⚠️');
        return;
    }
    closeModal();
    // Trigger the card payment flow (simulated)
    document.getElementById('paymentForm').dispatchEvent(new Event('submit'));
}

function renewSubscription() {
    if (!currentUser) {
        showPage('login');
        return;
    }

    showModal(`
        <div style="text-align:center">
            <h2>🔄 Renew Subscription</h2>
            <p style="color:var(--gray);margin:10px 0 20px">Choose your renewal plan</p>
            <div style="display:flex;flex-direction:column;gap:10px;text-align:left">
                <button class="btn btn-outline btn-block" onclick="processRenewal('standard')">
                    Standard - ₹99 / 15 days
                </button>
                <button class="btn btn-primary btn-block" onclick="processRenewal('premium')">
                    Premium - ₹249 / 45 days ⭐
                </button>
            </div>
        </div>
    `);
}

function processRenewal(plan) {
    closeModal();
    const planDetails = {
        standard: { name: 'Standard Plan', price: 99, days: 15 },
        premium: { name: 'Premium Plan', price: 249, days: 45 }
    };

    currentUser.plan = planDetails[plan];
    currentUser.planType = plan;
    currentUser.subscriptionStart = new Date().toISOString();
    currentUser.subscriptionEnd = new Date(Date.now() + planDetails[plan].days * 24 * 60 * 60 * 1000).toISOString();

    document.getElementById('paymentPlanName').textContent = planDetails[plan].name;
    document.getElementById('paymentAmount').textContent = '₹' + planDetails[plan].price;
    document.getElementById('paymentDuration').textContent = planDetails[plan].days + ' days access';

    showPage('payment');
}

// ==================== DASHBOARD ====================

function loadDashboard() {
    if (!currentUser) {
        showPage('login');
        return;
    }

    // Check subscription
    checkSubscription();

    // Update header
    document.getElementById('dashName').textContent = currentUser.name.split(' ')[0];
    document.getElementById('dashCoins').textContent = currentUser.coins;
    document.getElementById('dashStreak').textContent = currentUser.streak;
    document.getElementById('dashLevel').textContent = currentUser.level;

    // Subscription card
    document.getElementById('dashPlan').textContent = currentUser.plan.name;
    const expiry = new Date(currentUser.subscriptionEnd);
    document.getElementById('dashExpiry').textContent = expiry.toLocaleDateString('en-IN', {
        day: 'numeric', month: 'short', year: 'numeric'
    });

    const now = new Date();
    const start = new Date(currentUser.subscriptionStart);
    const totalDays = currentUser.plan.days;
    const daysUsed = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    const daysLeft = Math.max(0, totalDays - daysUsed);
    const progress = Math.min(100, (daysUsed / totalDays) * 100);

    document.getElementById('subProgress').style.width = progress + '%';
    document.getElementById('subDaysLeft').textContent = daysLeft + ' days remaining';

    // Progress list
    const progressList = document.getElementById('progressList');
    const courseCategories = [
        { icon: '💻', name: 'Coding', progress: currentUser.courseProgress.coding || 0 },
        { icon: '📊', name: 'Accounting', progress: currentUser.courseProgress.accounting || 0 },
        { icon: '📐', name: 'Math', progress: currentUser.courseProgress.math || 0 },
        { icon: '🔬', name: 'Science', progress: currentUser.courseProgress.science || 0 },
        { icon: '📝', name: 'English', progress: currentUser.courseProgress.english || 0 }
    ];

    progressList.innerHTML = courseCategories.map(cat => `
        <div class="progress-item">
            <span class="progress-item-icon">${cat.icon}</span>
            <div class="progress-item-info">
                <h4>${cat.name}</h4>
                <div class="progress-bar">
                    <div class="progress-fill" style="width:${cat.progress}%"></div>
                </div>
            </div>
            <span class="progress-percent">${cat.progress}%</span>
        </div>
    `).join('');

    // Achievements
    const achievementsGrid = document.getElementById('achievementsGrid');
    achievementsGrid.innerHTML = currentUser.achievements.map(a => `
        <div class="achievement ${a.unlocked ? '' : 'locked'}" title="${a.name}">
            <span class="achievement-icon">${a.icon}</span>
            <span class="achievement-name">${a.name}</span>
        </div>
    `).join('');

    // Activity
    const activityList = document.getElementById('activityList');
    const activities = currentUser.activities.slice(0, 5);
    activityList.innerHTML = activities.map(a => `
        <div class="activity-item">
            <span class="activity-icon">${a.icon}</span>
            <div class="activity-info">
                <p>${a.text}</p>
                <span class="activity-time">${a.time}</span>
            </div>
        </div>
    `).join('');
}

function checkSubscription() {
    if (!currentUser) return;

    const now = new Date();
    const end = new Date(currentUser.subscriptionEnd);
    const daysLeft = Math.ceil((end - now) / (1000 * 60 * 60 * 24));

    const alert = document.getElementById('subscriptionAlert');

    if (daysLeft <= 0) {
        alert.style.display = 'flex';
        document.getElementById('subAlertText').textContent =
            '⚠️ Your subscription has expired! Renew to continue learning.';
    } else if (daysLeft <= 3) {
        alert.style.display = 'flex';
        document.getElementById('subAlertText').textContent =
            `⏰ Your subscription expires in ${daysLeft} day${daysLeft > 1 ? 's' : ''}! Renew now.`;
    } else {
        alert.style.display = 'none';
    }
}

function isSubscriptionActive() {
    if (!currentUser) return false;
    const now = new Date();
    const end = new Date(currentUser.subscriptionEnd);
    return now < end;
}

// ==================== COURSES ====================

function loadCourses(filter = 'all') {
    const grid = document.getElementById('coursesGrid');
    const filtered = filter === 'all' ? COURSES_DATA : COURSES_DATA.filter(c => c.category === filter);

    const categoryColors = {
        coding: '#6C5CE7',
        accounting: '#00B894',
        math: '#E17055',
        science: '#A29BFE',
        english: '#FDCB6E',
        design: '#FD79A8'
    };

    grid.innerHTML = filtered.map(course => `
        <div class="course-card" onclick="openCourse('${course.id}')">
            <div class="course-thumbnail" style="background: linear-gradient(135deg, ${course.color}22, ${course.color}44)">
                <span>${course.icon}</span>
                <span class="course-category-badge">${course.category}</span>
            </div>
            <div class="course-body">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span>📖 ${course.lessons} Lessons</span>
                    <span>🎮 ${course.games} Games</span>
                    <span>⭐ ${course.rating}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function filterCourses(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    loadCourses(category);
}

function openCourse(courseId) {
    const course = COURSES_DATA.find(c => c.id === courseId);
    if (!course) return;

    if (!currentUser) {
        showToast('Please login to access courses', '⚠️');
        showPage('login');
        return;
    }

    if (!isSubscriptionActive() && currentUser.planType === 'free') {
        // Allow limited access for free users
    }

    const detail = document.getElementById('courseDetail');
    detail.innerHTML = `
        <div class="course-detail-header">
            <span class="course-detail-icon">${course.icon}</span>
            <h1>${course.title}</h1>
            <p class="course-desc">${course.description}</p>
            <div style="display:flex;gap:20px;justify-content:center;flex-wrap:wrap;margin-bottom:20px">
                <span>📖 ${course.lessons} Lessons</span>
                <span>🎮 ${course.games} Games</span>
                <span>👥 ${course.students.toLocaleString()} Students</span>
                <span>⭐ ${course.rating} Rating</span>
            </div>
            <button class="btn btn-primary btn-lg" onclick="startCourseGame('${course.id}')">
                <i class="fas fa-play"></i> Start Learning
            </button>
        </div>
        <h2 style="margin:30px 0 15px">📋 Course Content</h2>
        <div class="lesson-list">
            ${course.topics.map((topic, i) => `
                <div class="lesson-item ${topic.completed ? 'completed' : ''}" onclick="startLessonGame('${course.id}', ${i})">
                    <div class="lesson-info">
                        <span class="lesson-number">${topic.completed ? '✓' : i + 1}</span>
                        <div>
                            <strong>${topic.name}</strong>
                            <span class="lesson-type">${topic.type}</span>
                        </div>
                    </div>
                    <i class="fas fa-chevron-right" style="color:var(--light-gray)"></i>
                </div>
            `).join('')}
        </div>
    `;

    showPage('course-detail');
}

function startCourseGame(courseId) {
    const course = COURSES_DATA.find(c => c.id === courseId);
    if (!course) return;

    // Launch a relevant game based on category
    const gameMap = {
        coding: 'code-quiz',
        accounting: 'account-match',
        math: 'math-race',
        science: 'science-trivia',
        english: 'word-scramble',
        design: 'color-mixer'
    };

    launchGame(gameMap[course.category] || 'code-quiz');
}

function startLessonGame(courseId, lessonIndex) {
    startCourseGame(courseId);
}

// ==================== GAMES HUB ====================

function loadGames() {
    const grid = document.getElementById('gamesGrid');
    grid.innerHTML = GAMES_DATA.map(game => `
        <div class="game-card" onclick="launchGame('${game.id}')">
            <span class="coins-reward">🪙 ${game.coins}</span>
            <span class="game-card-icon">${game.icon}</span>
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <span class="game-difficulty ${game.difficulty}">${game.difficulty}</span>
        </div>
    `).join('');
}

// ==================== GAME ENGINE ====================

function launchGame(gameId) {
    if (!currentUser) {
        showToast('Please login to play games', '⚠️');
        showPage('login');
        return;
    }

    if (!isSubscriptionActive()) {
        showToast('Your subscription has expired! Please renew.', '⚠️');
        renewSubscription();
        return;
    }

    const game = GAMES_DATA.find(g => g.id === gameId);
    if (!game) return;

    currentGame = game;
    gameState = {
        score: 0,
        lives: 3,
        timeLeft: 60,
        questionIndex: 0,
        correctAnswers: 0,
        totalQuestions: 0
    };

    document.getElementById('gameTitle').textContent = game.title;
    document.getElementById('gameScore').textContent = '0';
    document.getElementById('gameLives').textContent = '3';
    document.getElementById('gameTimer').textContent = '60';

    showPage('gameplay');

    switch (game.type) {
        case 'quiz':
            startQuizGame(gameId);
            break;
        case 'math':
            startMathGame(gameId);
            break;
        case 'word':
            startWordGame();
            break;
        case 'typing':
            startTypingGame();
            break;
        default:
            startQuizGame(gameId);
    }
}

function startGameTimer(seconds = 60) {
    gameState.timeLeft = seconds;
    updateTimerDisplay();

    if (gameTimer) clearInterval(gameTimer);
    gameTimer = setInterval(() => {
        gameState.timeLeft--;
        updateTimerDisplay();

        if (gameState.timeLeft <= 0) {
            clearInterval(gameTimer);
            endGame();
        }
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById('gameTimer').textContent = gameState.timeLeft;
}

function updateScoreDisplay() {
    document.getElementById('gameScore').textContent = gameState.score;
}

function updateLivesDisplay() {
    document.getElementById('gameLives').textContent = gameState.lives;
}

function exitGame() {
    if (gameTimer) clearInterval(gameTimer);
    showPage('games');
}

// ==================== QUIZ GAME ====================

function startQuizGame(gameId) {
    const questions = QUESTION_BANKS[gameId] || QUESTION_BANKS['code-quiz'];
    gameState.questions = shuffleArray([...questions]);
    gameState.questionIndex = 0;
    gameState.totalQuestions = Math.min(gameState.questions.length, 10);

    startGameTimer(90);
    showNextQuestion();
}

function showNextQuestion() {
    if (gameState.questionIndex >= gameState.totalQuestions || gameState.lives <= 0) {
        endGame();
        return;
    }

    const q = gameState.questions[gameState.questionIndex];
    const area = document.getElementById('gameArea');

    area.innerHTML = `
        <div class="quiz-question">
            <span class="question-category">Question ${gameState.questionIndex + 1} of ${gameState.totalQuestions}</span>
            <h2>${q.question}</h2>
        </div>
        <div class="quiz-options">
            ${q.options.map((opt, i) => `
                <button class="quiz-option" onclick="checkAnswer(${i}, ${q.correct})">
                    ${String.fromCharCode(65 + i)}. ${opt}
                </button>
            `).join('')}
        </div>
        <div id="quizExplanation"></div>
    `;
}

function checkAnswer(selected, correct) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, i) => {
        opt.classList.add('disabled');
        if (i === correct) opt.classList.add('correct');
        if (i === selected && i !== correct) opt.classList.add('wrong');
    });

    const q = gameState.questions[gameState.questionIndex];

    if (selected === correct) {
        gameState.score += 100;
        gameState.correctAnswers++;
        showToast('Correct! +100 points', '✅');
    } else {
        gameState.lives--;
        updateLivesDisplay();
        showToast('Wrong answer! -1 life', '❌');
    }

    updateScoreDisplay();

    // Show explanation
    document.getElementById('quizExplanation').innerHTML = `
        <div class="quiz-explanation">
            <h4>💡 Explanation</h4>
            <p>${q.explanation}</p>
        </div>
    `;

    gameState.questionIndex++;

    setTimeout(() => {
        showNextQuestion();
    }, 2500);
}

// ==================== MATH GAME ====================

function startMathGame(gameId) {
    gameState.questionIndex = 0;
    gameState.totalQuestions = 10;

    if (gameId === 'gst-calculator') {
        startGSTGame();
    } else if (gameId === 'algebra-solver') {
        startAlgebraGame();
    } else {
        startMathTimer();
    }
}

function startMathTimer() {
    startGameTimer(60);
    showMathProblem();
}

function showMathProblem() {
    if (gameState.questionIndex >= gameState.totalQuestions || gameState.lives <= 0) {
        endGame();
        return;
    }

    const ops = ['+', '-', '×', '÷'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let a, b, answer;

    switch (op) {
        case '+':
            a = Math.floor(Math.random() * 100) + 1;
            b = Math.floor(Math.random() * 100) + 1;
            answer = a + b;
            break;
        case '-':
            a = Math.floor(Math.random() * 100) + 50;
            b = Math.floor(Math.random() * 50) + 1;
            answer = a - b;
            break;
        case '×':
            a = Math.floor(Math.random() * 12) + 1;
            b = Math.floor(Math.random() * 12) + 1;
            answer = a * b;
            break;
        case '÷':
            b = Math.floor(Math.random() * 12) + 1;
            answer = Math.floor(Math.random() * 12) + 1;
            a = b * answer;
            break;
    }

    gameState.currentAnswer = answer;

    const area = document.getElementById('gameArea');
    area.innerHTML = `
        <div class="math-problem">
            <span class="question-category">Problem ${gameState.questionIndex + 1} of ${gameState.totalQuestions}</span>
            <div class="equation">${a} ${op} ${b} = ?</div>
        </div>
        <div class="math-input-area">
            <input type="number" id="mathAnswer" placeholder="?" autofocus onkeypress="if(event.key==='Enter')checkMathAnswer()">
            <button class="btn btn-primary" onclick="checkMathAnswer()">Submit</button>
        </div>
        <div id="mathFeedback"></div>
    `;

    document.getElementById('mathAnswer').focus();
}

function checkMathAnswer() {
    const input = document.getElementById('mathAnswer');
    const userAnswer = parseInt(input.value);

    if (isNaN(userAnswer)) {
        showToast('Please enter a number', '⚠️');
        return;
    }

    if (userAnswer === gameState.currentAnswer) {
        gameState.score += 100;
        gameState.correctAnswers++;
        showToast('Correct! +100', '✅');
        document.getElementById('mathFeedback').innerHTML =
            '<p style="color:var(--success);font-size:1.5rem;text-align:center;font-weight:700">✅ Correct!</p>';
    } else {
        gameState.lives--;
        updateLivesDisplay();
        showToast(`Wrong! Answer was ${gameState.currentAnswer}`, '❌');
        document.getElementById('mathFeedback').innerHTML =
            `<p style="color:var(--danger);font-size:1.2rem;text-align:center">❌ Wrong! The answer was <strong>${gameState.currentAnswer}</strong></p>`;
    }

    updateScoreDisplay();
    gameState.questionIndex++;

    setTimeout(() => {
        showMathProblem();
    }, 1500);
}

function startGSTGame() {
    startGameTimer(90);
    showGSTProblem();
}

function showGSTProblem() {
    if (gameState.questionIndex >= 10 || gameState.lives <= 0) {
        endGame();
        return;
    }

    const rates = [5, 12, 18, 28];
    const rate = rates[Math.floor(Math.random() * rates.length)];
    const base = Math.floor(Math.random() * 9 + 1) * 1000;
    const answer = Math.round(base * rate / 100);

    gameState.currentAnswer = answer;

    document.getElementById('gameArea').innerHTML = `
        <div class="math-problem">
            <span class="question-category">GST Problem ${gameState.questionIndex + 1} of 10</span>
            <h2>Calculate GST Amount</h2>
            <div class="equation" style="font-size:1.5rem">Base Price: ₹${base.toLocaleString()} | GST Rate: ${rate}%</div>
            <p style="color:var(--gray)">What is the GST amount?</p>
        </div>
        <div class="math-input-area">
            <input type="number" id="mathAnswer" placeholder="GST Amount in ₹" autofocus onkeypress="if(event.key==='Enter')checkMathAnswer()">
            <button class="btn btn-primary" onclick="checkMathAnswer()">Submit</button>
        </div>
        <div id="mathFeedback"></div>
    `;

    document.getElementById('mathAnswer').focus();
}

function startAlgebraGame() {
    startGameTimer(120);
    showAlgebraProblem();
}

function showAlgebraProblem() {
    if (gameState.questionIndex >= 10 || gameState.lives <= 0) {
        endGame();
        return;
    }

    const x = Math.floor(Math.random() * 20) - 10;
    const a = Math.floor(Math.random() * 5) + 1;
    const b = a * x + Math.floor(Math.random() * 20) - 10;
    const result = a * x + (b - a * x);

    gameState.currentAnswer = x;

    document.getElementById('gameArea').innerHTML = `
        <div class="math-problem">
            <span class="question-category">Algebra ${gameState.questionIndex + 1} of 10</span>
            <h2>Solve for x</h2>
            <div class="equation">${a}x + ${b - a * x} = ${b}</div>
        </div>
        <div class="math-input-area">
            <input type="number" id="mathAnswer" placeholder="x = ?" autofocus onkeypress="if(event.key==='Enter')checkMathAnswer()">
            <button class="btn btn-primary" onclick="checkMathAnswer()">Submit</button>
        </div>
        <div id="mathFeedback"></div>
    `;

    document.getElementById('mathAnswer').focus();
}

// ==================== WORD SCRAMBLE GAME ====================

function startWordGame() {
    gameState.questionIndex = 0;
    gameState.totalQuestions = 10;
    gameState.words = shuffleArray([...WORD_BANK]).slice(0, 10);

    startGameTimer(120);
    showWordProblem();
}

function showWordProblem() {
    if (gameState.questionIndex >= gameState.totalQuestions || gameState.lives <= 0) {
        endGame();
        return;
    }

    const wordObj = gameState.words[gameState.questionIndex];
    const scrambled = scrambleWord(wordObj.word);
    gameState.currentAnswer = wordObj.word;

    document.getElementById('gameArea').innerHTML = `
        <div class="word-display">
            <span class="question-category">Word ${gameState.questionIndex + 1} of ${gameState.totalQuestions}</span>
            <div class="scrambled-word">${scrambled}</div>
            <p class="word-hint">💡 Hint: ${wordObj.hint}</p>
        </div>
        <div class="word-input-area">
            <input type="text" id="wordAnswer" placeholder="Your answer" autofocus
                onkeypress="if(event.key==='Enter')checkWordAnswer()">
            <button class="btn btn-primary" onclick="checkWordAnswer()">Submit</button>
        </div>
        <div id="wordFeedback" style="text-align:center;margin-top:15px"></div>
    `;

    document.getElementById('wordAnswer').focus();
}

function checkWordAnswer() {
    const input = document.getElementById('wordAnswer');
    const userAnswer = input.value.trim().toUpperCase();

    if (!userAnswer) {
        showToast('Please enter your answer', '⚠️');
        return;
    }

    if (userAnswer === gameState.currentAnswer) {
        gameState.score += 100;
        gameState.correctAnswers++;
        showToast('Correct! +100', '✅');
        document.getElementById('wordFeedback').innerHTML =
            `<p style="color:var(--success);font-size:1.3rem;font-weight:700">✅ Correct! The word is ${gameState.currentAnswer}</p>`;
    } else {
        gameState.lives--;
        updateLivesDisplay();
        showToast('Wrong!', '❌');
        document.getElementById('wordFeedback').innerHTML =
            `<p style="color:var(--danger);font-size:1.2rem">❌ Wrong! The word was <strong>${gameState.currentAnswer}</strong></p>`;
    }

    updateScoreDisplay();
    gameState.questionIndex++;

    setTimeout(() => {
        showWordProblem();
    }, 2000);
}

function scrambleWord(word) {
    const arr = word.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    const scrambled = arr.join('');
    return scrambled === word ? scrambleWord(word) : scrambled;
}

// ==================== TYPING GAME ====================

function startTypingGame() {
    const text = TYPING_TEXTS[Math.floor(Math.random() * TYPING_TEXTS.length)];
    gameState.typingText = text;
    gameState.typedIndex = 0;
    gameState.errors = 0;
    gameState.startTime = null;
    gameState.totalQuestions = text.length;

    startGameTimer(60);

    const area = document.getElementById('gameArea');
    area.innerHTML = `
        <h3 style="text-align:center;margin-bottom:20px">Type the text below as fast as you can!</h3>
        <div class="typing-display" id="typingDisplay"></div>
        <input type="text" class="typing-input" id="typingInput" placeholder="Start typing here..."
            autofocus oninput="handleTyping(event)">
        <div class="typing-stats">
            <div class="typing-stat">
                <span class="typing-stat-value" id="wpmDisplay">0</span>
                <span class="typing-stat-label">WPM</span>
            </div>
            <div class="typing-stat">
                <span class="typing-stat-value" id="accuracyDisplay">100</span>
                <span class="typing-stat-label">% Accuracy</span>
            </div>
            <div class="typing-stat">
                <span class="typing-stat-value" id="errorsDisplay">0</span>
                <span class="typing-stat-label">Errors</span>
            </div>
        </div>
    `;

    updateTypingDisplay();
    document.getElementById('typingInput').focus();
}

function updateTypingDisplay() {
    const display = document.getElementById('typingDisplay');
    const text = gameState.typingText;
    let html = '';

    for (let i = 0; i < text.length; i++) {
        if (i < gameState.typedIndex) {
            html += `<span class="typed">${text[i]}</span>`;
        } else if (i === gameState.typedIndex) {
            html += `<span class="current">${text[i]}</span>`;
        } else {
            html += text[i];
        }
    }

    display.innerHTML = html;
}

function handleTyping(e) {
    const input = e.target;
    const typed = input.value;

    if (!gameState.startTime) {
        gameState.startTime = Date.now();
    }

    const expected = gameState.typingText.substring(0, typed.length);
    let correctChars = 0;
    let errors = 0;

    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === gameState.typingText[i]) {
            correctChars++;
        } else {
            errors++;
        }
    }

    gameState.typedIndex = typed.length;
    gameState.errors = errors;
    gameState.correctAnswers = correctChars;

    updateTypingDisplay();

    // Calculate WPM
    const elapsed = (Date.now() - gameState.startTime) / 1000 / 60;
    const words = correctChars / 5;
    const wpm = elapsed > 0 ? Math.round(words / elapsed) : 0;
    const accuracy = typed.length > 0 ? Math.round((correctChars / typed.length) * 100) : 100;

    document.getElementById('wpmDisplay').textContent = wpm;
    document.getElementById('accuracyDisplay').textContent = accuracy;
    document.getElementById('errorsDisplay').textContent = errors;

    gameState.score = wpm * 10;
    updateScoreDisplay();

    // Check if completed
    if (typed.length >= gameState.typingText.length) {
        clearInterval(gameTimer);
        endGame();
    }
}

// ==================== GAME END ====================

function endGame() {
    if (gameTimer) clearInterval(gameTimer);

    const coinsEarned = Math.floor(gameState.score / 10);

    // Update user stats
    currentUser.coins += coinsEarned;
    currentUser.totalScore += gameState.score;
    currentUser.gamesPlayed++;
    currentUser.xp += gameState.score;

    // Level up check
    const newLevel = Math.floor(currentUser.xp / 500) + 1;
    const leveledUp = newLevel > currentUser.level;
    currentUser.level = newLevel;

    // Update category progress
    if (currentGame) {
        const cat = currentGame.category;
        const currentProgress = currentUser.courseProgress[cat] || 0;
        const newProgress = Math.min(100, currentProgress + Math.floor(gameState.correctAnswers * 5));
        currentUser.courseProgress[cat] = newProgress;
    }

    // Update streak
    const today = new Date().toDateString();
    const lastActive = new Date(currentUser.lastActive).toDateString();
    if (today !== lastActive) {
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        currentUser.streak = lastActive === yesterday ? currentUser.streak + 1 : 1;
    }
    currentUser.lastActive = new Date().toISOString();

    // Unlock achievements
    if (currentUser.gamesPlayed >= 1) currentUser.achievements[0].unlocked = true;
    if (currentUser.streak >= 3) currentUser.achievements[1].unlocked = true;
    if (gameState.correctAnswers === gameState.totalQuestions && gameState.totalQuestions > 0) currentUser.achievements[2].unlocked = true;
    if (currentUser.gamesPlayed >= 10) currentUser.achievements[6].unlocked = true;
    if (currentUser.level >= 5) currentUser.achievements[7].unlocked = true;
    if (currentUser.coins >= 500) currentUser.achievements[8].unlocked = true;
    if (currentUser.level >= 10) currentUser.achievements[11].unlocked = true;

    // Add activity
    currentUser.activities.unshift({
        icon: '🎮',
        text: `Played ${currentGame ? currentGame.title : 'a game'} - Score: ${gameState.score}`,
        time: 'Just now'
    });

    // Keep only last 20 activities
    currentUser.activities = currentUser.activities.slice(0, 20);

    saveUser();

    // Show game over screen
    const area = document.getElementById('gameArea');
    const accuracy = gameState.totalQuestions > 0
        ? Math.round((gameState.correctAnswers / gameState.totalQuestions) * 100)
        : 0;

    area.innerHTML = `
        <div class="game-over">
            <div class="game-over-icon">${gameState.score > 500 ? '🏆' : gameState.score > 200 ? '⭐' : '👍'}</div>
            <h2>${gameState.score > 500 ? 'Outstanding!' : gameState.score > 200 ? 'Great Job!' : 'Good Try!'}</h2>
            <div class="final-score">${gameState.score} Points</div>
            <div class="coins-earned">🪙 +${coinsEarned} Coins Earned!</div>
            ${leveledUp ? `<p style="color:var(--secondary);font-weight:700;font-size:1.2rem">🎉 Level Up! You're now Level ${currentUser.level}!</p>` : ''}
            <div style="display:flex;justify-content:center;gap:30px;margin:20px 0">
                <div class="typing-stat">
                    <span class="typing-stat-value">${gameState.correctAnswers}</span>
                    <span class="typing-stat-label">Correct</span>
                </div>
                <div class="typing-stat">
                    <span class="typing-stat-value">${accuracy}%</span>
                    <span class="typing-stat-label">Accuracy</span>
                </div>
                <div class="typing-stat">
                    <span class="typing-stat-value">Lv.${currentUser.level}</span>
                    <span class="typing-stat-label">Level</span>
                </div>
            </div>
            <div class="game-over-actions">
                <button class="btn btn-primary btn-lg" onclick="launchGame('${currentGame ? currentGame.id : 'code-quiz'}')">
                    <i class="fas fa-redo"></i> Play Again
                </button>
                <button class="btn btn-outline btn-lg" onclick="showPage('games')">
                    <i class="fas fa-th"></i> More Games
                </button>
                <button class="btn btn-outline btn-lg" onclick="showPage('dashboard')">
                    <i class="fas fa-home"></i> Dashboard
                </button>
            </div>
        </div>
    `;
}

// ==================== LEADERBOARD ====================

function loadLeaderboard(category) {
    const data = LEADERBOARD_DATA[category] || LEADERBOARD_DATA.overall;
    const table = document.getElementById('leaderboardTable');

    // Add current user to leaderboard
    let entries = [...data];
    if (currentUser) {
        const userEntry = {
            name: currentUser.name,
            score: currentUser.totalScore,
            level: currentUser.level,
            avatar: currentUser.name.charAt(0),
            isCurrentUser: true
        };

        // Check if user already in list
        const exists = entries.find(e => e.name === currentUser.name);
        if (!exists) {
            entries.push(userEntry);
        }
    }

    // Sort by score
    entries.sort((a, b) => b.score - a.score);

    const rankEmojis = ['🥇', '🥈', '🥉'];

    table.innerHTML = entries.map((entry, i) => {
        const rank = i + 1;
        const topClass = rank <= 3 ? `top-${rank}` : '';
        const userClass = entry.isCurrentUser ? 'current-user' : '';

        return `
            <div class="lb-entry ${topClass} ${userClass}">
                <span class="lb-rank">${rank <= 3 ? rankEmojis[rank - 1] : rank}</span>
                <div class="lb-avatar">${entry.avatar}</div>
                <div class="lb-info">
                    <h4>${entry.name} ${entry.isCurrentUser ? '(You)' : ''}</h4>
                    <span>Level ${entry.level}</span>
                </div>
                <div class="lb-score">
                    <strong>${entry.score.toLocaleString()}</strong>
                    <span>points</span>
                </div>
            </div>
        `;
    }).join('');
}

function switchLeaderboard(category, btn) {
    document.querySelectorAll('.lb-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    loadLeaderboard(category);
}

// ==================== UTILITIES ====================

function showToast(message, icon = '✅') {
    const toast = document.getElementById('toast');
    document.getElementById('toastIcon').textContent = icon;
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function showModal(content) {
    const modal = document.getElementById('modal');
    document.getElementById('modalBody').innerHTML = content;
    modal.classList.add('show');
}

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Card number formatting
document.addEventListener('input', (e) => {
    if (e.target.id === 'cardNumber') {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(.{4})/g, '$1 ').trim();
        e.target.value = value;
    }
    if (e.target.id === 'cardExpiry') {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2);
        }
        e.target.value = value;
    }
});

// Close modal on outside click
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal')) {
        closeModal();
    }
});

// Keyboard shortcut
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

console.log('🎮 EduPlay loaded successfully!');
console.log('📚 Courses:', COURSES_DATA.length);
console.log('🎯 Games:', GAMES_DATA.length);    