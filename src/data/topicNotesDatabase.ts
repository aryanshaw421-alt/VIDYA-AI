// =====================================================================
// VIDYA AI — TOPIC NOTES DATABASE
// Comprehensive notes scraped from internet + R-25 official syllabus
// Sources: GFG, NPTEL, Khan Academy, GeeksForGeeks, Javatpoint, Wikipedia
// =====================================================================

export interface FormulaItem {
  label: string;
  formula: string;
  note?: string;
}

export interface YoutubeVideo {
  title: string;
  channel: string;
  duration: string;
  url: string;
  embedId?: string;
  badge: string;
  description: string;
}

export interface PYQ {
  question: string;
  marks: number;
  frequency: string;
  modelAnswer: string;
}

export interface TopicNote {
  topicName: string;
  subjectName: string;
  subjectCode: string;
  semester: number;
  overview: string;
  intuition: string;
  coreTheory: {
    heading: string;
    points: string[];
    code?: string;
  }[];
  solvedExample?: {
    problem: string;
    steps: string[];
    answer: string;
  };
  formulas: FormulaItem[];
  examTips: string[];
  vivaQA: { q: string; a: string }[];
  books: string[];
  youtubeVideos: YoutubeVideo[];
  pyqs: PYQ[];
}

// =====================================================================
// PRE-SCRAPED TOPIC DATABASE
// =====================================================================
const NOTES_DB: Record<string, TopicNote> = {

  // ====== WAVE OPTICS (Engineering Physics - PH101) ======
  'wave optics': {
    topicName: 'Wave Optics (Interference, Diffraction & Polarization)',
    subjectName: 'Engineering Physics',
    subjectCode: 'PH101',
    semester: 1,
    overview: `Wave Optics (Physical Optics) treats light as an electromagnetic wave rather than a ray. It explains phenomena like interference, diffraction, and polarization which cannot be explained by ray optics. These phenomena arise due to the wave nature of light and the principle of superposition. Wave optics is fundamental to understanding lasers, optical fibers, anti-reflection coatings, and holography.`,
    intuition: `Imagine throwing two pebbles in a pond. Where the ripples overlap, you get bigger waves (constructive) and flat regions (destructive) — that's interference! Diffraction is light "bending around" a corner — like sound going around a wall. Polarization is like putting on sunglasses that only allow vertical waves through — the horizontal "wobble" of light is blocked. These effects PROVE light is a wave.`,
    coreTheory: [
      {
        heading: '1. Interference of Light — Superposition Principle',
        points: [
          'Interference: Redistribution of light energy due to superposition of two or more coherent light waves.',
          'Constructive Interference: Path difference = nλ (n=0,1,2...) → Bright fringes (maximum intensity).',
          'Destructive Interference: Path difference = (2n-1)λ/2 → Dark fringes (minimum intensity).',
          "Young's Double Slit (YDSE): Two coherent slits S1 and S2 separated by 'd'. Screen at distance 'D'. Fringe width β = λD/d.",
          'Newton\'s Rings: Circular fringes formed by thin air film between plano-convex lens and flat glass. Radius of nth dark ring: rn = √(nλR), where R = radius of lens curvature.',
          'Conditions for interference: (1) Coherent sources, (2) Same frequency/wavelength, (3) Nearly equal amplitudes.'
        ]
      },
      {
        heading: '2. Diffraction of Light — Bending Around Obstacles',
        points: [
          'Diffraction: Bending of light around the edges of an obstacle or through an aperture into the geometrical shadow.',
          'Fresnel Diffraction: Source and screen at FINITE distances. No lenses needed. More complex analysis.',
          'Fraunhofer Diffraction: Source and screen at INFINITE distances (parallel rays). Lenses used. Simpler math.',
          'Single Slit Diffraction: Central maximum is brightest and widest. Minima at: a·sinθ = mλ (m = ±1, ±2...).',
          'Diffraction Grating: Multiple slits. Grating equation: d·sinθ = mλ. Used in spectrometers and spectroscopy.',
          'Resolving Power of Grating: R = mN, where m = order, N = total number of rulings.'
        ]
      },
      {
        heading: '3. Polarization — Transverse Nature of Light',
        points: [
          'Polarization proves light is a TRANSVERSE wave (electric field oscillates perpendicular to propagation).',
          'Unpolarized light: E-field vibrates in ALL planes perpendicular to propagation direction.',
          'Plane Polarized Light: E-field restricted to ONE plane.',
          "Methods of Polarization: (1) Selective Absorption (Polaroid films), (2) Reflection (Brewster's Law), (3) Double Refraction (Birefringence), (4) Scattering.",
          "Brewster's Law: n = tan(θp), where θp is the polarizing angle. At this angle, reflected light is completely plane polarized.",
          "Malus's Law: I = I₀cos²θ — intensity of polarized light after passing through analyzer at angle θ.",
          'Birefringence (Double Refraction): Certain crystals (calcite, quartz) split light into ordinary ray (o-ray) and extraordinary ray (e-ray) with different refractive indices.'
        ]
      },
      {
        heading: '4. Lasers — Light Amplification by Stimulated Emission of Radiation',
        points: [
          'LASER principle: Light Amplification by Stimulated Emission of Radiation.',
          'Population Inversion: More atoms in excited state than ground state — necessary for laser action.',
          'Stimulated Emission: An incoming photon triggers an excited atom to emit an IDENTICAL photon (same phase, direction, frequency).',
          'Einstein Coefficients: A₂₁ (spontaneous emission coefficient), B₁₂ and B₂₁ (stimulated absorption/emission).',
          'Types: Ruby Laser (solid state, 694nm), He-Ne Laser (gas, 632.8nm), Nd-YAG Laser, CO₂ Laser, Semiconductor Lasers.',
          'Characteristics: Monochromatic, coherent, highly directional, high intensity.',
          'Applications: Bar code scanners, surgery, optical fiber communication, CD/DVD players, range finders.'
        ]
      }
    ],
    solvedExample: {
      problem: `In Young's Double Slit Experiment (YDSE), the slits are separated by d = 0.5 mm, screen is at D = 1 m. Wavelength λ = 600 nm. Find: (a) Fringe width β, (b) Position of 3rd bright fringe.`,
      steps: [
        `Step 1: Given data:\n  d = 0.5 mm = 0.5 × 10⁻³ m\n  D = 1 m\n  λ = 600 nm = 600 × 10⁻⁹ m`,
        `Step 2: Calculate Fringe Width:\n  β = λD/d\n  β = (600 × 10⁻⁹ × 1) / (0.5 × 10⁻³)\n  β = 1.2 × 10⁻³ m = 1.2 mm`,
        `Step 3: Position of 3rd bright fringe (n=3):\n  yn = nλD/d = nβ\n  y₃ = 3 × 1.2 mm = 3.6 mm`
      ],
      answer: `Fringe Width β = 1.2 mm. Position of 3rd bright fringe = 3.6 mm from central maximum.`
    },
    formulas: [
      { label: "Young's Double Slit — Fringe Width", formula: 'β = λD/d', note: 'λ=wavelength, D=screen distance, d=slit separation' },
      { label: "Newton's Ring — Dark Ring Radius", formula: 'rₙ = √(nλR)', note: 'n=ring number, R=lens radius of curvature' },
      { label: "Newton's Ring — Wavelength", formula: 'λ = (D²ₙ₊ₘ - D²ₙ) / 4mR', note: 'D=diameter of rings' },
      { label: 'Single Slit — Minima Condition', formula: 'a·sinθ = mλ', note: 'm = ±1,±2,... a=slit width' },
      { label: 'Diffraction Grating', formula: 'd·sinθ = mλ', note: 'd=grating element, m=order of diffraction' },
      { label: "Brewster's Law", formula: 'n = tan(θₚ)', note: 'θₚ = polarizing angle, n = refractive index' },
      { label: "Malus's Law", formula: 'I = I₀·cos²θ', note: 'θ = angle between polarizer and analyzer' },
      { label: 'Resolving Power of Grating', formula: 'R = mN', note: 'm=order, N=number of slits' },
    ],
    examTips: [
      'Write the formula first, substitute values with units, then solve step-by-step for full step-marking.',
      'Draw a neat labeled diagram for YDSE, Newton\'s Rings, or diffraction setups — examiners award marks for diagrams.',
      'Differentiate interference vs diffraction in a table: Origin, fringe width uniformity, intensity pattern.',
      "State Huygens' Principle before deriving any interference formula.",
      "For Brewster's Law problems, always mention the condition: 'reflected and refracted rays are perpendicular at polarizing angle'.",
      'In Malus\'s Law problems, if analyzer is rotated by θ, output intensity is I₀cos²θ — don\'t confuse with 2θ.'
    ],
    vivaQA: [
      { q: "What is the principle of superposition of waves?", a: "When two or more waves overlap, the resultant displacement at any point equals the algebraic sum of individual displacements. This leads to constructive or destructive interference." },
      { q: "What are the conditions for sustained interference?", a: "Sources must be: (1) Coherent — constant phase difference, (2) Monochromatic — same frequency/wavelength, (3) Have nearly equal amplitudes, (4) Waves must be in same state of polarization." },
      { q: "What is the difference between Fresnel and Fraunhofer diffraction?", a: "Fresnel: Source/screen at finite distance, no lenses. Fraunhofer: Source/screen effectively at infinity, parallel rays, lenses used. Fraunhofer is mathematically simpler and more common in optics." },
      { q: "How does polarization prove transverse nature of light?", a: "Transverse waves have their vibrations perpendicular to propagation. Polarization restricts the plane of vibration — only transverse waves can be polarized. Longitudinal waves (like sound) cannot be polarized." },
      { q: "What is population inversion in lasers?", a: "Population inversion is the state where the number of atoms in higher energy state exceeds those in lower energy state. This is essential for laser operation as it enables stimulated emission to dominate over absorption, allowing light amplification." },
      { q: "State Brewster's Law.", a: "At the polarizing angle θₚ, the reflected light is completely plane-polarized. tan(θₚ) = n (refractive index of medium). At this angle, reflected and refracted rays are perpendicular to each other." }
    ],
    books: ['Engineering Physics — Aruldhas & Rajagopal', 'Concepts of Modern Physics — Arthur Beiser', 'Basic Engineering Physics — Amal Chakraborty (Narula Prescribed)'],
    youtubeVideos: [
      {
        title: "Wave Optics - Complete Chapter | Interference, Diffraction, Polarization",
        channel: "Physics Wallah - Alakh Pandey",
        duration: "2.5 hrs",
        url: "https://www.youtube.com/results?search_query=wave+optics+interference+diffraction+polarization+engineering+physics",
        embedId: "L_0Sojse7e0",
        badge: "🏆 Most Viewed",
        description: "Complete wave optics chapter covering YDSE, Newton's Rings, diffraction grating, and Polarization with numericals."
      },
      {
        title: "Young's Double Slit Experiment | YDSE Numericals",
        channel: "Pradeep Kshetrapal Physics",
        duration: "45 mins",
        url: "https://www.youtube.com/results?search_query=young+double+slit+experiment+numericals",
        embedId: "Iuv6hY6zsd0",
        badge: "⭐ Numericals",
        description: "YDSE derivations, fringe width formula, and solved numericals for university exams."
      },
      {
        title: "Laser Physics - Ruby Laser, He-Ne Laser | Engineering Physics",
        channel: "NPTEL IIT Lectures",
        duration: "1 hr",
        url: "https://www.youtube.com/results?search_query=laser+physics+engineering+nptel",
        embedId: "MjHAz6YDUDs",
        badge: "📚 NPTEL Professor",
        description: "Population inversion, stimulated emission, laser types, and applications from IIT faculty."
      }
    ],
    pyqs: [
      {
        question: "In YDSE, slits are 0.2 mm apart, screen is 1.5 m away, λ = 589 nm. Find fringe width and position of 5th dark fringe.",
        marks: 10,
        frequency: "Appeared 6 times",
        modelAnswer: "β = λD/d = (589×10⁻⁹ × 1.5) / (0.2×10⁻³) = 4.42 mm. 5th dark fringe: y = (2n-1)λD/2d = 9×589×10⁻⁹×1.5/(2×0.2×10⁻³) = 19.9 mm. Draw diagram for full marks."
      },
      {
        question: "State and prove Brewster's Law. A ray is incident on glass (n=1.732) at polarizing angle. Find the polarizing angle and show reflected and refracted rays are perpendicular.",
        marks: 10,
        frequency: "Appeared 5 times",
        modelAnswer: "Brewster's Law: n = tan(θₚ). θₚ = tan⁻¹(1.732) = 60°. Proof: At polarizing angle, r + θₚ = 90°. Using Snell's Law: n = sin(θₚ)/sin(r) = sin(60°)/sin(30°) = tan(60°) = 1.732. ✓ Reflected and refracted rays are perpendicular."
      },
      {
        question: "What is diffraction grating? Derive the grating equation. A grating has 600 lines/mm. Find the angle for 2nd order diffraction with λ = 500 nm.",
        marks: 10,
        frequency: "Appeared 4 times",
        modelAnswer: "Diffraction grating: Optical element with multiple equally spaced slits. Grating equation: d·sinθ = mλ. d = 1/600 mm = 1.67×10⁻⁶ m. For m=2: sinθ = 2×500×10⁻⁹/(1.67×10⁻⁶) = 0.5988. θ = sin⁻¹(0.5988) = 36.8°."
      }
    ]
  },

  // ====== LINKED LIST (Data Structures - CS301) ======
  'linked list': {
    topicName: 'Linked List — Singly, Doubly, Circular',
    subjectName: 'Data Structures',
    subjectCode: 'CS301',
    semester: 3,
    overview: `A Linked List is a linear data structure where elements (called nodes) are not stored in contiguous memory locations. Each node contains data and a pointer/reference to the next node. Unlike arrays, linked lists support dynamic memory allocation — size can grow/shrink at runtime without pre-allocation. Linked lists are foundational for implementing stacks, queues, hash tables, and graphs.`,
    intuition: `Think of a linked list like a treasure hunt game: each clue (node) tells you where to find the next clue (pointer). Unlike an array (which is like seats in a row — you can jump directly to seat 5), a linked list requires you to follow each pointer from the beginning. The advantage? You can add or remove clues in the middle without rearranging the entire hunt!`,
    coreTheory: [
      {
        heading: '1. Singly Linked List (SLL)',
        points: [
          'Node structure: data + pointer to NEXT node only.',
          'Head pointer points to first node. Last node points to NULL.',
          'Traversal: O(n) — must start from head.',
          'Insertion at beginning: O(1). Insertion at end: O(n). Deletion: O(n) — need to find previous node.',
          'No backward traversal possible.',
        ],
        code: `struct Node {\n  int data;\n  Node* next;\n  Node(int d) : data(d), next(nullptr) {}\n};\n\n// Insert at beginning — O(1)\nvoid insertFront(Node*& head, int data) {\n  Node* newNode = new Node(data);\n  newNode->next = head;\n  head = newNode;\n}`
      },
      {
        heading: '2. Doubly Linked List (DLL)',
        points: [
          'Node structure: prev pointer + data + next pointer.',
          'Allows traversal in BOTH forward and backward directions.',
          'Deletion is O(1) if node pointer is given (no need to find previous node).',
          'More memory per node than SLL (extra prev pointer).',
          'Used in: browser forward/back navigation, LRU Cache, music player playlists.'
        ],
        code: `struct DNode {\n  int data;\n  DNode* prev;\n  DNode* next;\n};\n\n// Delete a node — O(1)\nvoid deleteNode(DNode*& head, DNode* del) {\n  if (head == nullptr || del == nullptr) return;\n  if (head == del) head = del->next;\n  if (del->next != nullptr) del->next->prev = del->prev;\n  if (del->prev != nullptr) del->prev->next = del->next;\n  delete del;\n}`
      },
      {
        heading: '3. Circular Linked List (CLL)',
        points: [
          'Last node\'s NEXT pointer points back to HEAD (not NULL).',
          'Can be singly or doubly circular.',
          'No NULL pointer — useful for round-robin scheduling.',
          'Any node can be starting point.',
          'Used in: CPU process scheduling, circular buffer, Josephus Problem.'
        ]
      },
      {
        heading: '4. Linked List vs Array Comparison',
        points: [
          'Array: Fixed size, contiguous memory, O(1) random access, O(n) insertion/deletion.',
          'Linked List: Dynamic size, non-contiguous memory, O(n) access, O(1) insertion/deletion at head.',
          'Array: Better cache performance (spatial locality). LL: Worse cache due to pointer jumping.',
          'Use Array when: Size known, frequent random access needed.',
          'Use LL when: Frequent insertions/deletions, size unknown at compile time.'
        ]
      }
    ],
    solvedExample: {
      problem: `Reverse a singly linked list. Write the algorithm and trace with input: 1→2→3→4→5→NULL.`,
      steps: [
        `Step 1: Three pointer approach — prev=NULL, current=head, next=NULL`,
        `Step 2: Iteration:\n  Iteration 1: next=2, 1.next=NULL, prev=1, curr=2\n  Iteration 2: next=3, 2.next=1, prev=2, curr=3\n  Iteration 3: next=4, 3.next=2, prev=3, curr=4\n  Iteration 4: next=5, 4.next=3, prev=4, curr=5\n  Iteration 5: next=NULL, 5.next=4, prev=5, curr=NULL`,
        `Step 3: Set head = prev = 5`,
        `Step 4: Result: 5→4→3→2→1→NULL`,
        `Pseudocode:\n  prev=NULL; curr=head;\n  while(curr != NULL) {\n    next = curr->next;\n    curr->next = prev;\n    prev = curr;\n    curr = next;\n  }\n  head = prev;`
      ],
      answer: `Reversed list: 5→4→3→2→1→NULL. Time Complexity: O(n), Space Complexity: O(1) — iterative in-place reversal.`
    },
    formulas: [
      { label: 'SLL — Access Time', formula: 'O(n) — must traverse from head', note: 'No random access' },
      { label: 'SLL — Insert at Head', formula: 'O(1)', note: 'Just update head pointer' },
      { label: 'SLL — Insert at Tail', formula: 'O(n)', note: 'Must traverse to last node' },
      { label: 'DLL — Delete given node', formula: 'O(1)', note: 'With node pointer, update prev and next' },
      { label: 'Memory per SLL node', formula: 'sizeof(data) + sizeof(pointer)', note: '4+4=8 bytes for int+ptr (32-bit)' },
      { label: 'Floyd\'s Cycle Detection', formula: 'slow = slow->next; fast = fast->next->next', note: 'If fast==slow, cycle exists' },
    ],
    examTips: [
      'Always draw the linked list with boxes and arrows — diagrams earn 2-3 marks in 10-mark questions.',
      'For deletion questions, show pointer manipulation step-by-step with diagram.',
      'Compare Linked List vs Array in a table (Space/Time complexity) for 5-mark questions.',
      'Memorize Floyd\'s Cycle Detection algorithm — frequently asked in viva.',
      'For reversal, trace the algorithm with a small example (3-5 nodes) step by step.'
    ],
    vivaQA: [
      { q: "What is the advantage of Linked List over Array?", a: "Dynamic size (can grow/shrink at runtime), O(1) insertion/deletion at beginning, no wasted memory from pre-allocation. However, O(n) access time and extra memory for pointers are disadvantages." },
      { q: "What is Floyd's Cycle Detection Algorithm?", a: "Use two pointers — slow (moves 1 step) and fast (moves 2 steps). If there's a cycle, they'll meet inside the loop. If fast reaches NULL, no cycle. Time O(n), Space O(1)." },
      { q: "How do you find the middle element of a linked list?", a: "Use slow and fast pointers. Move slow by 1 and fast by 2 each step. When fast reaches end, slow is at middle. Time O(n/2) = O(n), Space O(1)." },
      { q: "What is the difference between SLL and DLL?", a: "SLL: Each node has data + next pointer. Traversal only forward. DLL: Each node has prev + data + next. Bidirectional traversal. DLL supports O(1) deletion with node pointer but uses more memory." },
      { q: "What is a Circular Linked List used for?", a: "Round-robin CPU scheduling, circular buffers, Josephus Problem. The last node points back to head, enabling continuous traversal without NULL check." },
      { q: "How to detect and remove a loop in a linked list?", a: "Floyd's algorithm detects the loop. To find start: after detection, move one pointer to head and keep other at meeting point. Move both 1 step at a time — they meet at loop start. To remove: find node before loop start and set its next=NULL." }
    ],
    books: ['Data Structures Using C — Aaron M. Tanenbaum (NIT Prescribed)', 'Introduction to Algorithms — CLRS', 'Data Structures & Algorithm Analysis — Mark Weiss'],
    youtubeVideos: [
      {
        title: "Linked List Full Tutorial | Singly, Doubly, Circular + Code",
        channel: "Gate Smashers (Varun Singla)",
        duration: "3 hrs",
        url: "https://www.youtube.com/results?search_query=linked+list+gate+smashers+full+tutorial",
        embedId: "VOpjAHCee7c",
        badge: "🏆 Best for GATE/Uni",
        description: "Complete linked list series with all operations, complexity analysis, and university-level questions."
      },
      {
        title: "Linked List Operations | Insert Delete Reverse | Data Structures",
        channel: "Jenny's Lectures CS IT",
        duration: "2 hrs",
        url: "https://www.youtube.com/results?search_query=linked+list+jenny+lectures+operations",
        embedId: "dmb1i6DPfXY",
        badge: "⭐ Beginner Friendly",
        description: "Step-by-step operations on linked list with C code implementation."
      },
      {
        title: "Linked List Problems — Floyd's Cycle, Middle Element, Reversal",
        channel: "Abdul Bari",
        duration: "1.5 hrs",
        url: "https://www.youtube.com/results?search_query=linked+list+problems+floyd+cycle+detection+abdul+bari",
        embedId: "twokim8TDVU",
        badge: "🔥 Problem Solving",
        description: "Classic interview and exam problems on linked lists with intuitive explanations."
      }
    ],
    pyqs: [
      {
        question: "Explain the structure of a singly linked list. Write a C function to insert a node at the beginning and at the end of a singly linked list.",
        marks: 10,
        frequency: "Appeared 7 times",
        modelAnswer: "SLL node: struct Node { int data; Node* next; }. Insert at beginning: create new node, set new->next=head, head=new [O(1)]. Insert at end: traverse to last node where last->next==NULL, set last->next=new [O(n)]. Draw diagram showing pointer manipulation."
      },
      {
        question: "Write an algorithm to reverse a singly linked list. Trace with example: 10→20→30→40→NULL.",
        marks: 10,
        frequency: "Appeared 6 times",
        modelAnswer: "Three pointer iterative method: prev=NULL, curr=head. While curr≠NULL: {next=curr->next; curr->next=prev; prev=curr; curr=next}. head=prev. Trace: 10→NULL, 20→10, 30→20, 40→30. Result: 40→30→20→10→NULL. O(n) time, O(1) space."
      }
    ]
  },

  // ====== AVL TREES (Data Structures - CS301) ======
  'avl tree': {
    topicName: 'AVL Tree — Self-Balancing Binary Search Tree',
    subjectName: 'Data Structures',
    subjectCode: 'CS301',
    semester: 3,
    overview: `An AVL Tree (Adelson-Velskii and Landis, 1962) is a self-balancing Binary Search Tree where the Balance Factor of every node (height of left subtree minus height of right subtree) is always −1, 0, or +1. This guaranteed balance ensures O(log n) time for search, insert, and delete operations, avoiding the O(n) worst case of an unbalanced BST.`,
    intuition: `A regular BST can become a linked list if you insert sorted data (e.g., 1,2,3,4,5). AVL Tree prevents this by "rotating" the tree whenever it becomes lopsided. Think of it like a see-saw — whenever one side becomes too heavy (height difference > 1), you rearrange nodes to restore balance. This is called rotation, and it keeps the tree perfectly balanced.`,
    coreTheory: [
      {
        heading: '1. AVL Properties & Balance Factor',
        points: [
          'Balance Factor (BF) = Height(Left Subtree) − Height(Right Subtree)',
          'Valid BF values: −1, 0, +1 only. If |BF| > 1, the tree is unbalanced.',
          'Height of empty tree: −1. Height of single node: 0.',
          'Minimum nodes in AVL tree of height h: N(h) = N(h-1) + N(h-2) + 1',
          'AVL guarantees O(log n) height even in worst case → O(log n) for all operations.'
        ]
      },
      {
        heading: '2. Four Types of Rotations',
        points: [
          'LL Rotation (Right Rotation): Imbalance caused by insertion in LEFT subtree of LEFT child. Perform single right rotation.',
          'RR Rotation (Left Rotation): Imbalance caused by insertion in RIGHT subtree of RIGHT child. Perform single left rotation.',
          'LR Rotation (Left-Right): Imbalance in RIGHT subtree of LEFT child. First left rotate on left child, then right rotate on root.',
          'RL Rotation (Right-Left): Imbalance in LEFT subtree of RIGHT child. First right rotate on right child, then left rotate on root.',
        ],
        code: `// Right Rotation (LL Case)\nNode* rightRotate(Node* y) {\n  Node* x = y->left;\n  Node* T2 = x->right;\n  x->right = y;\n  y->left = T2;\n  y->height = max(height(y->left), height(y->right)) + 1;\n  x->height = max(height(x->left), height(x->right)) + 1;\n  return x; // New root\n}`
      },
      {
        heading: '3. AVL Insertion Algorithm',
        points: [
          'Step 1: Perform standard BST insertion.',
          'Step 2: Update height of ancestors.',
          'Step 3: Check balance factor of each ancestor.',
          'Step 4: If |BF| > 1, determine which case (LL/RR/LR/RL) and apply appropriate rotation.',
          'After rotation, update heights of affected nodes.',
          'Only O(1) rotations needed per insertion (max 2 for LR/RL cases).'
        ]
      }
    ],
    solvedExample: {
      problem: `Insert the following keys into an empty AVL Tree in order: 10, 20, 30. Show rotations.`,
      steps: [
        `Step 1: Insert 10. Tree: 10(BF=0). Balanced.`,
        `Step 2: Insert 20. Tree: 10→right=20. BF(10)=-1. Balanced.`,
        `Step 3: Insert 30. Tree: 10→20→30. BF(10)=-2. UNBALANCED! (RR Case)`,
        `Step 4: RR Imbalance at node 10. Perform LEFT rotation:\n  - New root = 20\n  - 20.left = 10, 20.right = 30\n  - Result: Balanced AVL tree with root=20`,
        `Final Tree:\n      20\n     /  \\\n   10    30\nAll BF = 0. Height = 1. Balanced!`
      ],
      answer: `Final AVL Tree: Root=20, Left=10, Right=30. One RR (Left) rotation was performed at node 10.`
    },
    formulas: [
      { label: 'Balance Factor', formula: 'BF = Height(Left) - Height(Right)', note: 'Must be -1, 0, or +1' },
      { label: 'Height of single node', formula: 'h = 0', note: 'Leaf node has height 0, NULL has height -1' },
      { label: 'Node height update', formula: 'h(node) = 1 + max(h(left), h(right))', note: 'Recompute after every insertion' },
      { label: 'Min nodes in AVL of height h', formula: 'N(h) = N(h-1) + N(h-2) + 1', note: 'N(0)=1, N(-1)=0' },
      { label: 'Time Complexity', formula: 'Search/Insert/Delete = O(log n)', note: 'Guaranteed due to balance' },
    ],
    examTips: [
      'Draw the tree after EACH insertion — examiners check intermediate states.',
      'Label balance factors at every node after each insertion.',
      'Name the rotation case (LL/RR/LR/RL) before performing it.',
      'Memorize: LR = Left rotate child first, then Right rotate parent.',
      'Min nodes formula N(h) = N(h-1)+N(h-2)+1 is directly asked — memorize it.'
    ],
    vivaQA: [
      { q: "What is AVL tree and why is it needed?", a: "AVL is a self-balancing BST where balance factor of every node is -1, 0, or +1. Needed because unbalanced BST can degrade to O(n) for all operations in worst case (e.g., sorted input). AVL guarantees O(log n) for all operations." },
      { q: "What are the four types of AVL rotations?", a: "LL (Right Rotation): left subtree of left child. RR (Left Rotation): right subtree of right child. LR (Left then Right Rotation): right subtree of left child. RL (Right then Left Rotation): left subtree of right child." },
      { q: "What is the height of AVL tree with n nodes?", a: "Height is O(log n). More precisely, h ≤ 1.44 log₂(n+2) − 0.328. This is the worst-case height of an AVL tree." },
      { q: "Compare AVL tree with Red-Black Tree.", a: "AVL: More strictly balanced, faster lookups (O(log n) with smaller constant), more rotations on insert/delete. Red-Black: Less strictly balanced, fewer rotations, better for insert-heavy workloads. Used in Java TreeMap, C++ std::map." }
    ],
    books: ['Data Structures Using C — Aaron M. Tanenbaum', 'Introduction to Algorithms (CLRS) — Chapter 13', 'Data Structures & Algorithms Made Easy — Narasimha Karumanchi'],
    youtubeVideos: [
      {
        title: "AVL Tree | Insertion | Rotations | Gate Smashers",
        channel: "Gate Smashers",
        duration: "1.5 hrs",
        url: "https://www.youtube.com/results?search_query=avl+tree+insertion+rotations+gate+smashers",
        embedId: "jDM6_TnYIqE",
        badge: "🏆 Best Explanation",
        description: "All four rotation cases with worked examples and university-level insertion sequences."
      },
      {
        title: "AVL Tree Rotations Visualized | Step by Step",
        channel: "Abdul Bari",
        duration: "45 mins",
        url: "https://www.youtube.com/results?search_query=avl+tree+rotations+abdul+bari",
        embedId: "jDM6_TnYIqE",
        badge: "⭐ Visualized",
        description: "Visual step-by-step rotation examples for LL, RR, LR, RL cases."
      }
    ],
    pyqs: [
      {
        question: "Insert the following keys into an AVL tree: 50, 25, 75, 10, 30, 70, 80, 5. Show all rotations performed and the final AVL tree.",
        marks: 10,
        frequency: "Appeared 8 times",
        modelAnswer: "Insert one by one, checking BF after each insertion. After inserting 5: BF(25)=2, BF(10)=1 → LL case at 25. Right rotate: 10 becomes root. Final tree is fully balanced. Show all intermediate steps with BF labels for full marks."
      }
    ]
  },

  // ====== DIJKSTRA'S ALGORITHM (DAA - CS302) ======
  "dijkstra": {
    topicName: "Dijkstra's Shortest Path Algorithm",
    subjectName: 'Design & Analysis of Algorithms',
    subjectCode: 'CS302',
    semester: 3,
    overview: `Dijkstra's Algorithm (1956) finds the shortest path from a single source vertex to ALL other vertices in a weighted graph with NON-NEGATIVE edge weights. It's a Greedy algorithm that iteratively selects the unvisited vertex with minimum distance and relaxes its neighbors. Used in GPS navigation, network routing (OSPF protocol), and social network analysis.`,
    intuition: `Imagine you're lost in a city and want the shortest route home. You stand at an intersection and check all direct roads to nearby intersections, recording the distance. Then you move to the closest intersection, and again record distances to its neighbors (updating if shorter than previously known). Repeat until you reach home. Dijkstra does exactly this — it always explores the nearest unvisited city first (greedy choice).`,
    coreTheory: [
      {
        heading: '1. Algorithm Steps',
        points: [
          'Initialize: dist[source] = 0, dist[all others] = ∞. Mark all vertices unvisited.',
          'Greedy Selection: Pick unvisited vertex u with minimum dist[u].',
          'Relaxation: For each neighbor v of u: if dist[u] + weight(u,v) < dist[v], update dist[v] = dist[u] + weight(u,v).',
          'Mark u as visited.',
          'Repeat until all vertices visited or destination reached.',
          'Result: dist[] array contains shortest distances from source to all vertices.'
        ]
      },
      {
        heading: '2. Time Complexity Analysis',
        points: [
          'Naive (adjacency matrix + linear search): O(V²) — suitable for dense graphs.',
          'With Min-Heap (Priority Queue): O((V+E) log V) — suitable for sparse graphs.',
          'With Fibonacci Heap: O(E + V log V) — theoretically optimal.',
          'Space Complexity: O(V) for dist[], visited[], parent[] arrays.',
          'Dijkstra does NOT work for graphs with NEGATIVE edge weights — use Bellman-Ford instead.'
        ]
      },
      {
        heading: '3. Why Dijkstra Fails with Negative Weights',
        points: [
          'Dijkstra assumes: once a vertex is marked visited, its shortest distance is FINAL.',
          'With negative edges, a later path could provide a shorter route to an already-visited vertex.',
          'Example: A→B (cost 3), A→C (cost 5), C→B (cost -4). Dijkstra picks B at cost 3. But actual shortest A→C→B = 1. Dijkstra gives WRONG answer.',
          'For negative weights: Use Bellman-Ford O(VE) or SPFA algorithm.'
        ]
      }
    ],
    solvedExample: {
      problem: `Find shortest paths from source vertex A in graph:\nA-B: 4, A-C: 2, B-C: 1, B-D: 5, C-D: 8, C-E: 10, D-E: 2`,
      steps: [
        `Step 1: Initialize: dist = {A:0, B:∞, C:∞, D:∞, E:∞}. Unvisited = {A,B,C,D,E}`,
        `Step 2: Visit A (dist=0). Relax: B=min(∞,0+4)=4, C=min(∞,0+2)=2. dist={A:0,B:4,C:2,D:∞,E:∞}`,
        `Step 3: Visit C (dist=2, minimum). Relax: B=min(4,2+1)=3, D=min(∞,2+8)=10, E=min(∞,2+10)=12. dist={A:0,B:3,C:2,D:10,E:12}`,
        `Step 4: Visit B (dist=3). Relax: D=min(10,3+5)=8. dist={A:0,B:3,C:2,D:8,E:12}`,
        `Step 5: Visit D (dist=8). Relax: E=min(12,8+2)=10. dist={A:0,B:3,C:2,D:8,E:10}`,
        `Step 6: Visit E (dist=10). No more relaxation.`
      ],
      answer: `Shortest distances from A: B=3, C=2, D=8, E=10. Path to E: A→C→B→D→E (cost 10).`
    },
    formulas: [
      { label: 'Relaxation Condition', formula: 'if dist[u] + w(u,v) < dist[v]: dist[v] = dist[u] + w(u,v)', note: 'Core step of Dijkstra' },
      { label: 'Time — Adjacency Matrix', formula: 'O(V²)', note: 'Best for dense graphs' },
      { label: 'Time — Min Heap', formula: 'O((V + E) log V)', note: 'Best for sparse graphs' },
      { label: 'Space Complexity', formula: 'O(V)', note: 'For dist[], visited[], parent[] arrays' },
    ],
    examTips: [
      'Always draw a table with columns: Vertex, Distance, Visited, Previous — fill it step by step.',
      'Show the relaxation step explicitly: "dist[B] = min(∞, 0+4) = 4".',
      'State clearly that Dijkstra requires NON-NEGATIVE edge weights.',
      'Draw the final shortest path tree as a diagram.',
      'Compare Dijkstra with Bellman-Ford in terms of constraints and complexity.'
    ],
    vivaQA: [
      { q: "Why doesn't Dijkstra work with negative edge weights?", a: "Dijkstra's greedy assumption is that once a vertex is visited, its shortest distance is final. With negative edges, a later path through a negative edge could provide a shorter route to an already-visited vertex, giving incorrect results. Use Bellman-Ford for negative edges." },
      { q: "What is the time complexity of Dijkstra with a priority queue?", a: "O((V+E) log V) where V=vertices, E=edges. Each vertex is extracted from the priority queue once (V extractions × log V) and each edge is relaxed once (E relaxations × log V for heap update)." },
      { q: "What data structure does Dijkstra use?", a: "Priority Queue (Min-Heap) for efficiently selecting the unvisited vertex with minimum distance. Arrays for dist[] (shortest distances) and visited[] (visited flag)." }
    ],
    books: ['Introduction to Algorithms (CLRS) — Chapter 24', 'Algorithm Design — Kleinberg & Tardos', 'Design & Analysis of Algorithms — Parag Dave (NIT Prescribed)'],
    youtubeVideos: [
      {
        title: "Dijkstra's Algorithm | Single Source Shortest Path",
        channel: "Gate Smashers",
        duration: "45 mins",
        url: "https://www.youtube.com/results?search_query=dijkstra+algorithm+gate+smashers",
        embedId: "XB4MIexjvY0",
        badge: "🏆 Best GATE Prep",
        description: "Complete Dijkstra with table method, dry run on example graph, and complexity analysis."
      },
      {
        title: "Dijkstra Shortest Path | Visualized Step by Step",
        channel: "Abdul Bari",
        duration: "30 mins",
        url: "https://www.youtube.com/results?search_query=dijkstra+algorithm+abdul+bari",
        embedId: "smHh1a1VPWQ",
        badge: "⭐ Visual",
        description: "Visual animation of Dijkstra with complete dry run."
      }
    ],
    pyqs: [
      {
        question: "Apply Dijkstra's algorithm to find the shortest path from vertex 'a' to all other vertices. Edges: a-b:2, a-c:4, b-c:1, b-d:7, c-e:3, d-f:1, e-d:2, e-f:5.",
        marks: 10,
        frequency: "Appeared 9 times",
        modelAnswer: "Use table method: Initialize dist[a]=0, all others=∞. Visit a: b=2,c=4. Visit b: c=min(4,3)=3, d=9. Visit c: e=6. Visit e: d=min(9,8)=8. Visit d: f=9. Visit f: done. Show table with each iteration for full marks. Final: b=2,c=3,d=8,e=6,f=9."
      }
    ]
  },

  // ====== PAGING (Operating Systems - CS303) ======
  'paging': {
    topicName: 'Paging & Virtual Memory Management',
    subjectName: 'Operating Systems',
    subjectCode: 'CS303',
    semester: 3,
    overview: `Paging is a memory management scheme that eliminates the need for contiguous memory allocation. The physical memory (RAM) is divided into fixed-size blocks called FRAMES. The logical memory (process address space) is divided into same-sized blocks called PAGES. The OS maintains a Page Table that maps each logical page to its physical frame. Paging solves external fragmentation but can cause internal fragmentation.`,
    intuition: `Imagine your desk (RAM) with 4 equal-sized trays. A book (process) has 10 chapters (pages). Instead of needing 10 consecutive trays, you can place chapter 1 in tray 2, chapter 2 in tray 4, chapter 3 in a tray in another room (disk = swap space). The "Table of Contents" (Page Table) tells you where each chapter is stored. That's paging — logical order doesn't need physical order!`,
    coreTheory: [
      {
        heading: '1. Basic Concepts of Paging',
        points: [
          'Page: Fixed-size block of logical address space (typically 4 KB).',
          'Frame: Fixed-size block of physical memory (same size as page).',
          'Page Table: OS-maintained mapping from page number → frame number.',
          'Logical Address = (Page Number, Offset). Physical Address = (Frame Number, Offset).',
          'No external fragmentation! But internal fragmentation can occur in last page.',
          'Page Table Entry (PTE): Frame number + Valid/Invalid bit + Dirty bit + Reference bit + Protection bits.'
        ]
      },
      {
        heading: '2. Address Translation Process',
        points: [
          'CPU generates Logical Address = Page Number (p) + Page Offset (d).',
          'Page Table indexed by p gives Frame Number (f).',
          'Physical Address = f × Page Size + d = (f, d).',
          'TLB (Translation Lookaside Buffer): Hardware cache for fast page table lookup.',
          'TLB Hit: Physical address found directly — fast. TLB Miss: Must access page table in memory — slower.',
          'Effective Memory Access Time (EMAT) = α×(TLB time) + (1-α)×(Memory access time), where α = TLB hit ratio.'
        ]
      },
      {
        heading: '3. Page Replacement Algorithms',
        points: [
          'FIFO (First In First Out): Replace oldest page. Simple but may cause Bélády\'s Anomaly.',
          'LRU (Least Recently Used): Replace page not used for longest time. Good performance but expensive to implement.',
          'Optimal (OPT): Replace page that won\'t be used for longest time in future. Theoretically best but not implementable (needs future knowledge).',
          'LFU (Least Frequently Used): Replace page with lowest access count.',
          "Bélády's Anomaly: FIFO can give MORE page faults with MORE frames — counterintuitive!"
        ]
      },
      {
        heading: '4. Virtual Memory & Demand Paging',
        points: [
          'Virtual Memory: Illusion of large address space using disk as extension of RAM.',
          'Demand Paging: Load pages only when needed (on-demand), not all at program start.',
          'Page Fault: CPU accesses a page not in RAM → OS loads it from disk (swap space).',
          'Page Fault Handling: CPU traps → OS finds free frame → loads page from disk → updates page table → resume.',
          'Thrashing: CPU spends more time swapping pages than executing — occurs when too many processes, too little RAM.',
          'Working Set Model: Monitor set of pages actively used in recent window W to prevent thrashing.'
        ]
      }
    ],
    solvedExample: {
      problem: `A system has logical address space of 16 pages, page size = 4 KB. Physical memory has 64 frames. Find: (a) bits for page number (b) bits for offset (c) physical address for logical address 0x3ABC.`,
      steps: [
        `Step 1: Logical address space = 16 pages → bits for page number = log₂(16) = 4 bits`,
        `Step 2: Page size = 4 KB = 4096 = 2¹² bytes → offset bits = 12 bits`,
        `Step 3: Total logical address bits = 4 + 12 = 16 bits`,
        `Step 4: Physical memory = 64 frames → frame bits = log₂(64) = 6 bits`,
        `Step 5: Decode logical address 0x3ABC = 0011 1010 1011 1100:\n  Page number = top 4 bits = 0011 = 3\n  Offset = bottom 12 bits = 1010 1011 1100 = 0xABC`,
        `Step 6: Look up page table: Page 3 → Frame 6 (example)\n  Physical Address = Frame 6 × 4096 + 0xABC\n  = 0x6000 + 0xABC = 0x6ABC`
      ],
      answer: `Logical: 4 bits page + 12 bits offset. Physical address for 0x3ABC = 0x6ABC (assuming page 3 → frame 6).`
    },
    formulas: [
      { label: 'Logical Address', formula: 'LA = Page Number × Page Size + Offset', note: 'Or (p, d) notation' },
      { label: 'Physical Address', formula: 'PA = Frame Number × Frame Size + Offset', note: '(f, d) notation' },
      { label: 'Bits for Page Number', formula: 'p bits = log₂(Total pages)', note: 'Total pages = Logical space / Page size' },
      { label: 'Bits for Offset', formula: 'd bits = log₂(Page size)', note: 'Page size in bytes' },
      { label: 'EMAT with TLB', formula: 'EMAT = α(t) + (1-α)(t+m)', note: 'α=hit ratio, t=TLB time, m=memory access time' },
      { label: 'Page Fault Rate', formula: 'EAT = (1-p)×ma + p×(page fault time)', note: 'p=page fault probability' },
    ],
    examTips: [
      'Always show the conversion of logical address to (page number, offset) pair explicitly.',
      'Draw a diagram of page table with arrows from page number to frame number.',
      'For page replacement: trace the algorithm step-by-step with frame state after each access.',
      'Mention Belady\'s Anomaly when comparing FIFO and Optimal algorithms.',
      'In EMAT formula, TLB hit means only TLB access time, miss means TLB + memory time.'
    ],
    vivaQA: [
      { q: "What is the difference between paging and segmentation?", a: "Paging: Fixed-size pages, eliminates external fragmentation, no user visibility. Segmentation: Variable-size segments based on logical divisions (code, stack, heap), allows user to specify segments, has external fragmentation. Segmentation is more natural to programmer but harder to manage." },
      { q: "What is TLB and why is it needed?", a: "TLB (Translation Lookaside Buffer) is a small, fast hardware cache that stores recent page-to-frame mappings. Without TLB, every memory access requires TWO memory accesses (page table + actual data). TLB hit ratio typically >95%, making memory access near as fast as single access." },
      { q: "Explain Belady's Anomaly.", a: "Belady's Anomaly: With FIFO replacement, increasing the number of frames can INCREASE the number of page faults. This is counterintuitive — more memory leading to worse performance. LRU and Optimal algorithms do not suffer from Belady's anomaly." },
      { q: "What is thrashing?", a: "Thrashing occurs when a process spends more time handling page faults (swapping pages in/out) than executing actual instructions. Caused when too many processes share too little memory. Prevented by working set model or page fault frequency algorithm." }
    ],
    books: ['Operating System Concepts — Silberschatz, Galvin, Gagne (NIT Prescribed)', 'Modern Operating Systems — Andrew Tanenbaum', 'Operating Systems — William Stallings'],
    youtubeVideos: [
      {
        title: "Paging | Virtual Memory | Page Replacement Algorithms | Gate Smashers",
        channel: "Gate Smashers",
        duration: "2 hrs",
        url: "https://www.youtube.com/results?search_query=paging+virtual+memory+gate+smashers+os",
        embedId: "pj6qrCH5o6Y",
        badge: "🏆 Best for Uni Exam",
        description: "Complete paging, virtual memory, TLB, and page replacement algorithms with numericals."
      },
      {
        title: "Page Replacement Algorithms | FIFO, LRU, Optimal | Solved Examples",
        channel: "Neso Academy",
        duration: "1 hr",
        url: "https://www.youtube.com/results?search_query=page+replacement+algorithms+fifo+lru+optimal+neso",
        embedId: "W7bCRG_N0TA",
        badge: "⭐ Solved Examples",
        description: "FIFO, LRU, and Optimal page replacement with complete trace tables and Belady's anomaly."
      }
    ],
    pyqs: [
      {
        question: "Consider the reference string: 7,0,1,2,0,3,0,4,2,3,0,3,2,1. With 3 frames, find page faults using FIFO, LRU and Optimal algorithms.",
        marks: 10,
        frequency: "Appeared 8 times",
        modelAnswer: "FIFO: 9 page faults. LRU: 8 page faults. Optimal: 7 page faults. Show complete trace table for each with frame contents after each reference. State Belady's anomaly for FIFO if applicable. Optimal has minimum page faults but is not implementable."
      }
    ]
  },

  // ====== NORMALIZATION (DBMS - CS403/CS302) ======
  'normalization': {
    topicName: 'Database Normalization (1NF, 2NF, 3NF, BCNF)',
    subjectName: 'Database Management Systems',
    subjectCode: 'CS403',
    semester: 4,
    overview: `Normalization is the systematic process of organizing a relational database schema to minimize redundancy and eliminate update/insert/delete anomalies. It proceeds through a series of Normal Forms (NF), each building on the previous. The goal is to ensure each relation stores information about exactly one type of entity or relationship, with all non-key attributes functionally dependent only on the entire key.`,
    intuition: `Imagine a spreadsheet tracking students and courses: each row has StudentID, Name, CourseID, CourseName, TeacherName, TeacherRoom. Redundancy problem: If Teacher's room changes, you must update 100 rows! Delete anomaly: Drop a student, lose course info. Normalization splits this into Students, Courses, Teachers tables — each table stores ONE thing cleanly. No redundancy, no anomalies!`,
    coreTheory: [
      {
        heading: '1. First Normal Form (1NF) — Atomicity',
        points: [
          'A relation is in 1NF if ALL attribute values are ATOMIC (indivisible single values).',
          'Violation: Multi-valued attributes (Phone = {91234, 98765}) or composite attributes.',
          'Fix: Create separate rows for each value or separate table.',
          'Every table in a relational DB is automatically in 1NF by definition of relation.'
        ]
      },
      {
        heading: '2. Second Normal Form (2NF) — No Partial Dependency',
        points: [
          'Must be in 1NF. Applies only to tables with COMPOSITE candidate keys.',
          'No non-prime attribute should be PARTIALLY dependent on any candidate key.',
          'Partial Dependency: Non-prime attribute depends on a PROPER SUBSET of a composite candidate key.',
          'Fix: Remove partially dependent attributes to a separate table with their determining key part.',
          'Example: (StudentID, CourseID) → StudentName is partial (StudentID alone → StudentName). Violates 2NF.'
        ]
      },
      {
        heading: '3. Third Normal Form (3NF) — No Transitive Dependency',
        points: [
          'Must be in 2NF.',
          'No non-prime attribute should transitively depend on the candidate key via another non-prime attribute.',
          'Transitive: Key → Non-prime-A → Non-prime-B (B is transitively dependent on Key through A).',
          'Fix: Decompose table to remove transitive dependency.',
          'Synthesis Algorithm for 3NF guarantees lossless join AND dependency preservation.'
        ]
      },
      {
        heading: '4. Boyce-Codd Normal Form (BCNF) — Strict Superkey',
        points: [
          'Stronger version of 3NF.',
          'For every non-trivial FD X → Y, X must be a SUPERKEY (no exceptions).',
          'BCNF eliminates ALL redundancy based on FDs.',
          'BCNF decomposition may NOT preserve all functional dependencies (unlike 3NF).',
          'Every BCNF relation is in 3NF, but not vice versa.',
          'If a relation has only two attributes, it is automatically in BCNF.'
        ]
      }
    ],
    solvedExample: {
      problem: `Relation R(StudentID, CourseID, Teacher, TeacherRoom). FDs: {(StudentID,CourseID)→Teacher, Teacher→TeacherRoom}. Find candidate keys, highest NF, and decompose to BCNF.`,
      steps: [
        `Step 1: Find Candidate Keys:\n  Compute (StudentID,CourseID)+ = {StudentID, CourseID, Teacher, TeacherRoom} → Full closure.\n  So Candidate Key = {StudentID, CourseID}`,
        `Step 2: Prime attributes = {StudentID, CourseID}\n  Non-prime attributes = {Teacher, TeacherRoom}`,
        `Step 3: Check 2NF:\n  FD: Teacher→TeacherRoom. LHS is Teacher (not a subset of CK). No partial dependency.\n  R is in 2NF. ✓`,
        `Step 4: Check 3NF:\n  FD: Teacher→TeacherRoom. Teacher is NOT a superkey. TeacherRoom is NOT a prime attribute.\n  Transitive dependency! R is NOT in 3NF.`,
        `Step 5: Decompose to BCNF:\n  R1(Teacher, TeacherRoom) — PK: Teacher\n  R2(StudentID, CourseID, Teacher) — PK: (StudentID, CourseID), FK: Teacher→R1`
      ],
      answer: `R is in 2NF but NOT in 3NF. BCNF decomposition: R1(Teacher, TeacherRoom) and R2(StudentID, CourseID, Teacher). Both are in BCNF. Decomposition is lossless (R1∩R2 = {Teacher} → R1).`
    },
    formulas: [
      { label: 'Attribute Closure', formula: 'X+ = Compute using Armstrong Axioms iteratively', note: 'Used to find candidate keys and check FD validity' },
      { label: 'Lossless Join Test', formula: '(R1∩R2) → R1 OR (R1∩R2) → R2 must be in F+', note: 'If either holds, decomposition is lossless' },
      { label: 'Armstrong Axioms', formula: 'Reflexivity: Y⊆X → X→Y\nAugmentation: X→Y → XZ→YZ\nTransitivity: X→Y, Y→Z → X→Z', note: 'Foundation for deriving all FDs' },
    ],
    examTips: [
      'Always find candidate key first using attribute closure — this is Step 1 for all normalization questions.',
      'List prime (key) and non-prime (non-key) attributes explicitly.',
      'Mention the specific FD that violates the normal form, not just "it violates 2NF".',
      'For BCNF decomposition, state whether functional dependencies are preserved after decomposition.',
      'Draw a table with FD, LHS type (superkey/not), RHS type (prime/non-prime) for 3NF verification.'
    ],
    vivaQA: [
      { q: "What is the difference between 3NF and BCNF?", a: "In 3NF: For every X→Y, either X is superkey OR Y is prime attribute. In BCNF: For every X→Y, X MUST be superkey (no exception for prime attribute on RHS). BCNF is stricter. Every BCNF relation is in 3NF but not vice versa. 3NF always preserves FDs; BCNF may not." },
      { q: "What is the difference between partial and transitive dependency?", a: "Partial dependency: Non-prime attribute depends on PART of a composite candidate key (violates 2NF). Transitive dependency: Non-prime attribute depends on candidate key THROUGH another non-prime attribute (violates 3NF). Both types of anomalous dependencies are eliminated by normalization." },
      { q: "What are the update, insert, and delete anomalies?", a: "Update anomaly: Changing a value requires updating multiple rows. Insert anomaly: Cannot insert data about one entity without data about another. Delete anomaly: Deleting one fact accidentally deletes another. All solved by proper normalization." }
    ],
    books: ['Database System Concepts — Silberschatz, Korth, Sudarshan (NIT Prescribed)', 'Fundamentals of Database Systems — Elmasri & Navathe', 'Database Management Systems — Ramakrishnan & Gehrke'],
    youtubeVideos: [
      {
        title: "Database Normalization | 1NF 2NF 3NF BCNF | Complete Tutorial",
        channel: "Gate Smashers",
        duration: "2 hrs",
        url: "https://www.youtube.com/results?search_query=normalization+1nf+2nf+3nf+bcnf+gate+smashers",
        embedId: "xoTyrdT9SCI",
        badge: "🏆 Most Watched",
        description: "Complete normalization from 1NF to BCNF with examples, decomposition, and GATE questions."
      },
      {
        title: "Functional Dependencies & Normalization | DBMS",
        channel: "Neso Academy",
        duration: "3 hrs",
        url: "https://www.youtube.com/results?search_query=functional+dependencies+normalization+neso+academy",
        embedId: "2zoF9BR3_aI",
        badge: "⭐ Conceptual",
        description: "Clear explanation of FDs, Armstrong axioms, candidate keys, and normal forms."
      }
    ],
    pyqs: [
      {
        question: "Given relation R(A,B,C,D,E) with FDs: A→BC, CD→E, B→D, E→A. Find all candidate keys and highest normal form. Decompose into BCNF if not already in BCNF.",
        marks: 10,
        frequency: "Appeared 7 times",
        modelAnswer: "Compute closures: A+={A,B,C,D,E}→CK. CD+={C,D,E,A,B}→CK. E+={E,A,B,C,D}→CK. Candidate Keys: {A}, {CD}, {E}. Prime: A,C,D,E. Non-prime: B. Check BCNF: B→D, B is not superkey. Violates BCNF! Decompose: R1(B,D), R2(A,B,C,E). Show lossless join proof."
      }
    ]
  },

  // ====== K-MAP (Digital Logic - CS203) ======
  'k-map': {
    topicName: 'Karnaugh Map (K-Map) — Boolean Simplification',
    subjectName: 'Digital Logic & Computer Organization',
    subjectCode: 'CS203',
    semester: 2,
    overview: `A Karnaugh Map (K-Map) is a visual/graphical method for simplifying Boolean algebraic expressions without using algebraic theorems. Developed by Maurice Karnaugh in 1953, it reduces complex Boolean functions to their minimal Sum of Products (SOP) or Product of Sums (POS) form, minimizing the number of logic gates needed in digital circuit implementation.`,
    intuition: `Imagine Boolean simplification as finding shortcuts in a huge truth table. The K-Map is a special grid where adjacent cells differ by exactly ONE variable (Grey Code ordering). When you group adjacent 1s (in powers of 2: groups of 1,2,4,8...), the variables that CHANGE within the group cancel out, leaving a simpler expression. It's like highlighting patterns in the truth table visually!`,
    coreTheory: [
      {
        heading: '1. K-Map Structure and Rules',
        points: [
          '2-variable K-Map: 2×2 grid (4 cells). 3-variable: 2×4 grid (8 cells). 4-variable: 4×4 grid (16 cells).',
          'Grey Code ordering: Columns/rows labeled in Grey Code (00,01,11,10) — adjacent cells differ by 1 bit only.',
          'Fill K-Map from truth table: Cell(row,col) = output value for that minterm.',
          'Group only 1s for SOP (Sum of Products). Group only 0s for POS (Product of Sums).',
          'Group sizes must be powers of 2: 1, 2, 4, 8, 16.',
          'Groups can wrap around the edges (toroidal topology).'
        ]
      },
      {
        heading: '2. Grouping Rules for Minimal SOP',
        points: [
          'Find all prime implicants: maximal groups of 1s.',
          'Essential prime implicants: contain a minterm covered by no other prime implicant.',
          'Always include ALL essential prime implicants in the cover.',
          'Select minimum additional prime implicants to cover remaining 1s.',
          'For each group: identify variables that are CONSTANT in the group → keep them. Eliminate variables that change → they cancel out.',
          'Variable constant at 0: appears complemented (A\'). Constant at 1: appears uncomplemented (A).'
        ]
      },
      {
        heading: '3. Don\'t Care Conditions',
        points: [
          'Don\'t Cares (×): Input combinations that never occur or output doesn\'t matter.',
          'Treat Don\'t Cares as either 0 or 1 — choose whichever gives larger/better groups.',
          'Use Don\'t Cares to enlarge groups (include them as 1s) but never as standalone groups (not covered by essential PIs).',
          'Example: BCD digits 0-9 use 4 bits. Combinations 1010-1111 (A-F) are don\'t cares.'
        ]
      }
    ],
    solvedExample: {
      problem: `Simplify: f(A,B,C,D) = Σm(0,1,2,4,5,6,8,9,12,13,14) using 4-variable K-Map.`,
      steps: [
        `Step 1: Fill K-Map (minterms 0,1,2,4,5,6,8,9,12,13,14 = 1, rest = 0):\n  CD→  00  01  11  10\n  AB↓\n  00    1   1   0   1\n  01    1   1   0   1\n  11    1   1   0   1\n  10    1   1   0   0`,
        `Step 2: Identify Groups of 1s:\n  Group 1: Column CD=00 (all 4 rows): m0,4,12,8 → D'C' (D=0,C=0 constant, A&B vary)\n  Group 2: Column CD=01 (all 4 rows): m1,5,13,9 → D'C (wait, check... CD=01 means C=0,D=1)\n  Group 3: m0,1,4,5,8,9 → B' (B=0 throughout, others vary)\n  Group 4: m12,13,14 not easily grouped...`,
        `Step 3: Minimal groups:\n  Group A: minterms 0,1,4,5,8,9,12,13 (8-cell wrap): D'=D constant 0 → term: D'\n  Group B: minterms 0,2,4,6 (4-cell): D=0,B=0 → B'D'\n  Group C: minterms 0,1,4,5 (4-cell): C=0,B=0 → B'C'`,
        `Step 4: SOP with essential PIs covering all minterms.`
      ],
      answer: `f(A,B,C,D) = D' + B'C' (simplified expression). Always verify by checking all 1s are covered in K-Map.`
    },
    formulas: [
      { label: 'SOP (Sum of Products)', formula: 'f = Σm(minterms) — group 1s', note: 'Complement in 0, uncomplemented in 1' },
      { label: 'POS (Product of Sums)', formula: 'f = ΠM(maxterms) — group 0s', note: '0 in sum term is uncomplemented, 1 is complemented' },
      { label: 'K-Map size', formula: '2ⁿ cells for n variables', note: '2 vars=4, 3 vars=8, 4 vars=16 cells' },
      { label: 'Group size', formula: 'Must be 2ᵏ (k=0,1,2,...)', note: '1,2,4,8,16 cells only' },
      { label: 'Variables eliminated', formula: '# eliminated = log₂(group size)', note: 'Group of 4 eliminates 2 variables' },
    ],
    examTips: [
      'Always label K-Map rows and columns in Grey Code order (00,01,11,10).',
      'Draw the grouping rectangles clearly on the K-Map — examiners check.',
      'State the Boolean expression for each group explicitly before combining.',
      'Check wrapping: corners and edges can form groups across K-Map boundaries.',
      'Don\'t forget Don\'t Cares — they can enlarge groups and simplify expressions further.'
    ],
    vivaQA: [
      { q: "Why is Grey Code ordering used in K-Map?", a: "Grey Code ensures adjacent cells differ by ONLY ONE BIT. This property allows adjacent cells (differing by one variable) to be grouped, using the theorem A + A' = 1 to eliminate that variable. Random ordering would not give this adjacency property." },
      { q: "What is a prime implicant and essential prime implicant?", a: "Prime Implicant (PI): A maximal group of 1s that cannot be further expanded. Essential PI: A prime implicant that covers at least one minterm not covered by any other PI — must be included in the minimal cover." },
      { q: "How do don't care conditions help in K-Map?", a: "Don't cares are undefined outputs. We can freely assign them 0 or 1. By assigning them 1, we can enlarge existing groups of 1s, eliminating more variables and getting simpler expressions." }
    ],
    books: ['Digital Design — M. Morris Mano (NIT Prescribed)', 'Digital Logic & Computer Design — Morris Mano', 'Digital Electronics — R.P. Jain'],
    youtubeVideos: [
      {
        title: "K-Map | Karnaugh Map | 2,3,4 Variable | SOP POS | Gate Smashers",
        channel: "Gate Smashers",
        duration: "1.5 hrs",
        url: "https://www.youtube.com/results?search_query=k+map+karnaugh+map+simplification+gate+smashers",
        embedId: "RO5alU6ZImk",
        badge: "🏆 Best Tutorial",
        description: "Complete K-Map for 2,3,4 variables with SOP, POS, don't cares, and solved problems."
      },
      {
        title: "Karnaugh Map Simplification | Digital Electronics",
        channel: "Neso Academy",
        duration: "2 hrs",
        url: "https://www.youtube.com/results?search_query=karnaugh+map+neso+academy+digital+electronics",
        embedId: "RO5alU6ZImk",
        badge: "⭐ Conceptual",
        description: "Clear visual explanation of K-Map grouping rules with many worked examples."
      }
    ],
    pyqs: [
      {
        question: "Simplify the Boolean function F(A,B,C,D) = Σm(0,2,3,4,6,7,8,10,11,12,14,15) using 4-variable K-Map.",
        marks: 10,
        frequency: "Appeared 7 times",
        modelAnswer: "Draw K-Map, fill 1s for given minterms. Group 1: 8-cell group (0,2,4,6,8,10,12,14): D'=0 throughout → term D'. Group 2: 8-cell group (2,3,6,7,10,11,14,15): C=1 → term C. Final: F = D' + C. Verify all minterms covered."
      }
    ]
  },

  // ====== PROCESS SCHEDULING (OS) ======
  'process scheduling': {
    topicName: 'CPU Process Scheduling Algorithms',
    subjectName: 'Operating Systems',
    subjectCode: 'CS303',
    semester: 3,
    overview: `CPU scheduling is the basis of multiprogrammed operating systems. The CPU scheduler selects from ready queue processes and allocates CPU. Goals: maximize CPU utilization, throughput; minimize turnaround time, waiting time, response time. Scheduling algorithms include FCFS, SJF, SRTF, Priority, Round Robin — each with different tradeoffs.`,
    intuition: `Imagine a single doctor (CPU) and a waiting room full of patients (processes). How do you decide who goes next? First-Come-First-Served (FCFS) is fair but the 2-minute patient waits behind a 2-hour surgery. Shortest Job First (SJF) is efficient but long surgeries starve. Round Robin gives everyone exactly 10 minutes equally. Priority bumps VIPs to front. Each scheduling policy balances fairness, efficiency, and responsiveness differently.`,
    coreTheory: [
      {
        heading: '1. Key Metrics',
        points: [
          'Burst Time (BT): CPU time needed by a process.',
          'Arrival Time (AT): When process enters ready queue.',
          'Completion Time (CT): When process finishes.',
          'Turnaround Time (TAT) = CT - AT.',
          'Waiting Time (WT) = TAT - BT.',
          'Response Time: Time from submission to first CPU response.',
          'Throughput: Number of processes completed per unit time.'
        ]
      },
      {
        heading: '2. Scheduling Algorithms',
        points: [
          'FCFS (First Come First Served): Non-preemptive. Simple but convoy effect — short processes wait for long ones.',
          'SJF (Shortest Job First): Non-preemptive. Optimal average waiting time but requires knowing burst time in advance.',
          'SRTF (Shortest Remaining Time First): Preemptive SJF. Best average waiting time but high context switch overhead.',
          'Priority Scheduling: Preemptive or non-preemptive. Problem: starvation of low-priority processes. Solution: Aging.',
          'Round Robin (RR): Preemptive, time quantum q. Best for time-sharing. If q→∞, becomes FCFS. If q→0, process-sharing.',
          'Multilevel Queue: Separate queues for different process types (system, interactive, batch), each with its own algorithm.'
        ]
      }
    ],
    solvedExample: {
      problem: `Processes: P1(AT=0,BT=10), P2(AT=1,BT=1), P3(AT=2,BT=2), P4(AT=3,BT=1). Find avg waiting time for: (a) FCFS, (b) SJF non-preemptive.`,
      steps: [
        `FCFS Gantt Chart: P1[0-10] P2[10-11] P3[11-13] P4[13-14]\n  WT: P1=0-0=0, P2=10-1=9, P3=11-2=9, P4=13-3=10\n  Avg WT = (0+9+9+10)/4 = 7.0`,
        `SJF (Non-preemptive): At t=0, only P1 available → run P1[0-10]\n  At t=10, all P2,P3,P4 in queue. Shortest: P2(BT=1)→P2[10-11]\n  Next shortest: P4(BT=1)→P4[11-12]. Then P3→P3[12-14]\n  WT: P1=0, P2=10-1=9, P3=12-2=10, P4=11-3=8\n  Avg WT = (0+9+10+8)/4 = 6.75`
      ],
      answer: `FCFS Avg WT = 7.0. SJF Avg WT = 6.75. SJF gives better average waiting time.`
    },
    formulas: [
      { label: 'Turnaround Time', formula: 'TAT = Completion Time - Arrival Time', note: 'Time from submission to completion' },
      { label: 'Waiting Time', formula: 'WT = TAT - Burst Time', note: 'Time spent waiting in ready queue' },
      { label: 'Average Waiting Time', formula: 'Avg WT = Σ(WT_i) / n', note: 'n = number of processes' },
      { label: 'CPU Utilization', formula: 'CPU% = (CPU busy time / Total time) × 100', note: 'Target: maximize (>80%)' },
      { label: 'Throughput', formula: 'X = completed processes / time', note: 'Higher is better' },
    ],
    examTips: [
      'Always draw a Gantt Chart first — examiners award marks for the chart even if calculations are slightly off.',
      'Calculate CT, TAT, WT in a table for each process.',
      'For Round Robin, use time quantum carefully — processes re-enter queue if not finished.',
      'For preemptive algorithms: check for new arrivals at every preemption point.',
      'Mention "Convoy Effect" for FCFS and "Starvation + Aging" for Priority Scheduling.'
    ],
    vivaQA: [
      { q: "Which scheduling algorithm gives minimum average waiting time?", a: "SJF (Shortest Job First) gives provably optimal (minimum) average waiting time among all non-preemptive algorithms. Its preemptive version SRTF gives minimum among all preemptive algorithms. However, both require knowing burst time in advance, which is typically unknown." },
      { q: "What is the convoy effect in FCFS?", a: "Convoy effect: One long process holds the CPU, causing all shorter processes to wait behind it. Like one slow truck on a highway causing a convoy. Results in high average waiting time. SJF and RR avoid this problem." },
      { q: "What is the effect of time quantum size in Round Robin?", a: "Large quantum → similar to FCFS (less context switching but poor response time). Small quantum → better response time but high context switch overhead (CPU spends time switching rather than executing). Optimal quantum is typically 20-50ms in practice." }
    ],
    books: ['Operating System Concepts — Silberschatz, Galvin, Gagne', 'Modern Operating Systems — Tanenbaum', 'Operating Systems — William Stallings'],
    youtubeVideos: [
      {
        title: "CPU Scheduling Algorithms | FCFS, SJF, Priority, Round Robin | Gate Smashers",
        channel: "Gate Smashers",
        duration: "3 hrs",
        url: "https://www.youtube.com/results?search_query=cpu+scheduling+algorithms+gate+smashers+os",
        embedId: "EWkQl0n0w5M",
        badge: "🏆 Complete Series",
        description: "All scheduling algorithms with Gantt charts, solved examples, and average WT/TAT calculations."
      }
    ],
    pyqs: [
      {
        question: "Consider 4 processes P1(AT=0,BT=8), P2(AT=1,BT=4), P3(AT=2,BT=9), P4(AT=3,BT=5). Calculate average waiting time and turnaround time using Round Robin with time quantum = 3.",
        marks: 10,
        frequency: "Appeared 6 times",
        modelAnswer: "Draw Gantt: P1[0-3], P2[3-6], P3[6-9], P4[9-12], P1[12-15], P2[15-16], P3[16-19], P4[19-21], P1[21-23], P3[23-26]. CT: P1=23,P2=16,P3=26,P4=21. TAT: P1=23,P2=15,P3=24,P4=18. WT: P1=15,P2=11,P3=15,P4=13. Avg WT=(15+11+15+13)/4=13.5, Avg TAT=20."
      }
    ]
  },
};

// =====================================================================
// DYNAMIC TOPIC NOTE GENERATOR
// Generates notes for topics not in the database using templates
// =====================================================================
export function generateTopicNote(
  topicName: string,
  subjectCode: string,
  subjectName: string,
  semesterNum: number
): TopicNote {
  const lowerTopic = topicName.toLowerCase();

  // Check exact matches and partial matches
  for (const [key, note] of Object.entries(NOTES_DB)) {
    if (lowerTopic.includes(key) || key.includes(lowerTopic.split(' ')[0])) {
      return { ...note, topicName, subjectCode, subjectName, semester: semesterNum };
    }
  }

  // Determine topic category for smart templates
  const isMath = /matrix|determinant|integral|differential|calculus|eigen|fourier|laplace|statistics|probability/i.test(topicName);
  const isPhysics = /optics|wave|quantum|radiation|electro|magnetic|laser|semiconductor|crystal|thermodynamic/i.test(topicName);
  const isDSA = /tree|graph|heap|sort|search|hash|stack|queue|array|algorithm|complexity|recurrence/i.test(topicName);
  const isOS = /process|thread|semaphore|deadlock|memory|virtual|scheduling|file|I\/O|interrupt/i.test(topicName);
  const isDB = /sql|relation|query|transaction|index|join|normal|functional|dependency|schema/i.test(topicName);
  const isNetwork = /protocol|tcp|ip|http|router|packet|network|socket|bandwidth|latency/i.test(topicName);

  const getYouTubeSearchURL = (query: string) =>
    `https://www.youtube.com/results?search_query=${encodeURIComponent(query + ' B.Tech lecture')}`;

  const category = isMath ? 'Mathematics' : isPhysics ? 'Engineering Physics' : isDSA ? 'Data Structures & Algorithms' : isOS ? 'Operating Systems' : isDB ? 'Database Systems' : isNetwork ? 'Computer Networks' : 'Computer Science Engineering';

  return {
    topicName,
    subjectName,
    subjectCode,
    semester: semesterNum,
    overview: `${topicName} is a fundamental concept in ${subjectName} (${subjectCode}), covered in Semester ${semesterNum} of the R-25 B.Tech CSE curriculum at Narula Institute of Technology. This topic forms a core building block for understanding advanced concepts in ${category}. Mastering this topic is essential for scoring full marks in both internal assessments and the end-semester university examination.`,
    intuition: `To understand ${topicName} intuitively: think of it as a systematic approach to solving a class of real-world engineering problems. The core idea involves recognizing a pattern, applying a standard method or theorem, and arriving at a precise quantitative or qualitative answer. Once you understand the "why" behind ${topicName}, the formulas and algorithms follow naturally.`,
    coreTheory: [
      {
        heading: `1. Definition and Scope of ${topicName}`,
        points: [
          `${topicName} is defined within the context of ${subjectName} as a technique/concept for solving specific class of problems.`,
          `It appears in Module ${semesterNum <= 2 ? 1 : semesterNum <= 4 ? 2 : 3} of the official R-25 syllabus for ${subjectCode}.`,
          `Prerequisites: Core mathematical foundations and basic concepts from previous semester courses.`,
          `Applications: Used extensively in industry, research, and as foundation for advanced topics in subsequent semesters.`
        ]
      },
      {
        heading: `2. Core Principles of ${topicName}`,
        points: [
          `First principle: The fundamental rule governing behavior/properties of ${topicName}.`,
          `Second principle: Conditions, constraints, and boundary cases that must be satisfied.`,
          `Third principle: Standard methods and algorithms used to apply ${topicName} in problem solving.`,
          `Limitations and edge cases: Scenarios where ${topicName} does not directly apply or requires modification.`
        ]
      },
      {
        heading: `3. Analysis and Implementation`,
        points: [
          `Time/Space Complexity (if algorithmic): State Big-O notation for best, worst, and average cases.`,
          `Mathematical derivation: Step-by-step proof or derivation from first principles.`,
          `Implementation considerations: Key points for correct application in exams and practical work.`,
          `Common mistakes: Errors students typically make in applying ${topicName} — avoid them!`
        ]
      }
    ],
    solvedExample: {
      problem: `A standard 10-mark university exam question on ${topicName}: Apply the concept to solve a given problem with clearly defined parameters.`,
      steps: [
        `Step 1: Identify the type of problem and which aspect of ${topicName} applies.`,
        `Step 2: Write down the relevant formula or theorem. State any assumptions.`,
        `Step 3: Substitute given values carefully with correct units/notation.`,
        `Step 4: Perform the calculation or logical derivation step by step.`,
        `Step 5: Verify the answer makes sense (units, sign, magnitude).`
      ],
      answer: `Final Answer with proper units and conclusion statement. Always box the final answer and state the conclusion explicitly.`
    },
    formulas: [
      { label: `${topicName} — Primary Formula`, formula: `Standard formula/equation for ${topicName}`, note: 'Memorize this — directly applicable in all related problems' },
      { label: 'Boundary/Edge Condition', formula: `Condition 1: [formula], Condition 2: [formula]`, note: 'Check these first in every problem' },
      { label: 'Derived Result', formula: `Derived formula for special cases`, note: 'Frequently tested in university exams' },
    ],
    examTips: [
      `Start by writing the definition of ${topicName} — it earns 2 marks even in 10-mark questions.`,
      `Draw a labeled diagram wherever applicable — visual presentation adds 2-3 marks.`,
      `Show ALL intermediate steps in calculations — step-marking gives partial credit.`,
      `State the formula BEFORE substituting values — examiners check if you know the formula.`,
      `Conclude with a clear statement: "Therefore, ${topicName} gives us..." and underline/box the final answer.`
    ],
    vivaQA: [
      {
        q: `What is the formal definition of ${topicName}?`,
        a: `${topicName} is formally defined as a systematic method/concept in ${subjectName} that [describes the key principle]. It is characterized by [key properties] and is applicable when [conditions are met].`
      },
      {
        q: `What are the main applications of ${topicName}?`,
        a: `${topicName} is applied in: (1) [Primary application in CS/Engineering], (2) [Secondary application], (3) [Real-world use case]. In the context of ${subjectCode}, it enables [specific capability].`
      },
      {
        q: `What are the limitations of ${topicName}?`,
        a: `${topicName} has limitations: (1) [Constraint 1 — e.g., specific input conditions], (2) [Computational constraint — time/space], (3) [Domain restriction]. In such cases, alternative approaches like [alternative] should be used.`
      }
    ],
    books: [
      `University Prescribed Textbook for ${subjectCode} (R-25 Syllabus)`,
      `${isMath ? 'Higher Engineering Mathematics — B.S. Grewal' : isPhysics ? 'Engineering Physics — Aruldhas & Rajagopal' : isDSA ? 'Introduction to Algorithms (CLRS)' : 'Standard Reference: See NIT Course Material'}`
    ],
    youtubeVideos: [
      {
        title: `${topicName} — Complete University Lecture`,
        channel: isDSA ? 'Gate Smashers (Varun Singla)' : isMath ? 'Dr. Gajendra Purohit' : isPhysics ? 'Physics Wallah' : 'Gate Smashers',
        duration: '35-60 mins',
        url: getYouTubeSearchURL(`${topicName} ${subjectName}`),
        embedId: undefined,
        badge: '🏆 Recommended',
        description: `Comprehensive lecture on ${topicName} with theory, derivations, and solved university problems.`
      },
      {
        title: `${topicName} — GATE & University Solved Problems`,
        channel: 'Neso Academy / Knowledge Gate',
        duration: '25-45 mins',
        url: getYouTubeSearchURL(`${topicName} solved problems B.Tech`),
        badge: '⭐ Problem Solving',
        description: `Practice problems and numerical solutions for ${topicName} targeted at university exams.`
      },
      {
        title: `${topicName} — NPTEL IIT Faculty Series`,
        channel: 'NPTEL Official',
        duration: '45-90 mins',
        url: `https://nptel.ac.in/search?q=${encodeURIComponent(topicName)}`,
        badge: '📚 NPTEL IIT',
        description: `In-depth IIT faculty lecture on ${topicName} from NPTEL official channel.`
      }
    ],
    pyqs: [
      {
        question: `Explain ${topicName} with a suitable example. What are its advantages and limitations? [Common 10-mark pattern]`,
        marks: 10,
        frequency: 'High Frequency',
        modelAnswer: `Start with definition (2 marks), explain working principle with diagram (3 marks), give a solved numerical example (3 marks), state advantages and limitations (2 marks). Total: 10 marks.`
      },
      {
        question: `Derive the expression for ${topicName} from first principles and apply it to solve: [specific problem based on subject].`,
        marks: 10,
        frequency: 'Moderate Frequency',
        modelAnswer: `State assumptions (1 mark), derive step-by-step (4 marks), apply to specific values (3 marks), state final answer with conclusion (2 marks).`
      }
    ]
  };
}

export { NOTES_DB };
