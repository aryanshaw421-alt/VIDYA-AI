/**
 * VIDYA AI - Comprehensive B.Tech Regulation-25 (R-25) Syllabus & Exam Intelligence Master Database
 * 
 * Official Curriculum for Bachelor of Technology (B.Tech.) in Computer Science & Engineering (CSE)
 * Department of Computer Science & Engineering, Narula Institute of Technology (Autonomous under MAKAUT)
 * Effective From 2025-2026 Admission Batch (NEP 2020 Aligned)
 * 
 * 100% Accurate & Full Coverage of All 8 Semesters (160 Credits Total)
 */

import { R25_COURSES, R25_CREDIT_DISTRIBUTION, queryR25Syllabus, R25Course } from './r25CurriculumDatabase';
export { R25_COURSES, R25_CREDIT_DISTRIBUTION, queryR25Syllabus };
export type { R25Course };

export interface SemesterSubject {
  id: string;
  code: string;
  name: string;
  credits: number;
  category: string;
  modules: string[];
  hardestModule: string;
  passTips: string;
}

export interface RepeatedPYQ {
  id: string;
  subject: string;
  question: string;
  marks: number;
  frequency: string;
  expectedAnswerFormat: string;
}

export interface FormulaItem {
  topic: string;
  formula: string;
}

export interface PassStrategyStep {
  week: string;
  focus: string;
}

export interface LabVivaItem {
  id: string;
  subject: string;
  experiment: string;
  question: string;
  answer: string;
}

export interface SemesterData {
  semesterNumber: number;
  title: string;
  academicYear: string;
  totalCredits: number;
  totalSubjects: number;
  difficultyRating: string;
  passingThreshold: string;
  summary: string;
  subjects: SemesterSubject[];
  topRepeatedPYQs: RepeatedPYQ[];
  formulaMatrix: FormulaItem[];
  thirtyDayPassStrategy: PassStrategyStep[];
  labVivaBank: LabVivaItem[];
}

export const BTECH_SEMESTER_DATA: Record<number, SemesterData> = {
  // ==========================================
  // SEMESTER 1 (Total Credits: 18)
  // ==========================================
  1: {
    semesterNumber: 1,
    title: '1st Year 1st Semester (CSE & Allied - Gr A)',
    academicYear: '1st Year — Computing Foundations & Basic Sciences',
    totalCredits: 18,
    totalSubjects: 9,
    difficultyRating: 'Foundational (3.5/5)',
    passingThreshold: '40% in Theory & Lab (Continuous Assessment + End-Sem)',
    summary: 'Foundational semester introducing C programming, modern wave & quantum physics, linear algebra, environmental systems, Indian knowledge system, and CAD modeling.',
    subjects: [
      {
        id: 'cs101',
        code: 'CS101',
        name: 'Introduction to Programming and Problem Solving (CSE & Allied)',
        credits: 3,
        category: 'Major Theory (3-0-0)',
        modules: [
          'Module 1 (7L): Basics of Computing, Number systems conversions, 1s & 2s complement, IEEE 754 floating point, ASCII',
          'Module 2 (7L): Problem Solving, Flowcharts, C data types, operators, endianness, operator precedence, I/O (scanf/printf)',
          'Module 3 (7L): Control Structures (if/else, switch), Loops (for/while/do-while), Functions, Storage classes, Preprocessors',
          'Module 4 (8L): Arrays (1D & 2D), Pointers & pointer arithmetic, Strings, Dynamic memory allocation (malloc, calloc, realloc, free)',
          'Module 5 (7L): Structures, Unions, enum, typedef, bit fields, File I/O (fopen, fclose, fprintf, fscanf), Command line args'
        ],
        hardestModule: 'Module 4: Pointers arithmetic, dynamic memory allocation & pointer-to-arrays',
        passTips: 'Pointers with arrays + Structure file I/O operations carry guaranteed passing marks in university exam.'
      },
      {
        id: 'ph101',
        code: 'PH101',
        name: 'Engineering Physics',
        credits: 3,
        category: 'Multi Disciplinary Theory (3-0-0)',
        modules: [
          'Module 1 (11L): Modern Optics - Laser (Einstein coefficients, Ruby/He-Ne), Optical Fibres (NA, Acceptance angle), Holography',
          'Module 2 (5L): Solid State Physics - Bravais lattices, Miller indices, APF, Bragg equation, Semiconductors (p-n junction)',
          'Module 3 (14L): Quantum & Statistical Mechanics - de Broglie, Davisson-Germer, Wavefunction normalization, Schrödinger equation, MB/BE/FD statistics',
          'Module 4 (4L): Physics of Nanomaterials - Quantum wells, wires, dots, Carbon allotropes (CNT, graphene)',
          'Module 5 (2L): Storage & Display Devices - Magnetic storage, CRT, CRO, LED, and OLED'
        ],
        hardestModule: 'Module 3: Quantum wave equation normalization & Fermi-Dirac statistical distribution',
        passTips: 'Einstein A/B relation derivation + Miller indices and Bragg Law numericals carry 25+ marks.'
      },
      {
        id: 'm101',
        code: 'M101',
        name: 'Engineering Mathematics-I',
        credits: 3,
        category: 'Multi Disciplinary Theory (3-0-0)',
        modules: [
          'Module 1 (11L): Linear Algebra - Echelon & Normal canonical form, Rank, System of equations, Eigenvalues/Eigenvectors, Cayley-Hamilton',
          'Module 2 (5L): Single Variable Calculus - Rolle, Mean Value Theorems, Taylor and Maclaurin expansions',
          'Module 3 (13L): Multivariable Differentiation - Partial derivatives, Total derivative, Euler theorem on homogeneous functions, Jacobian, Maxima/Minima',
          'Module 4 (7L): Multivariable Integration - Double & Triple Integrals, Change of order, Line/Surface/Volume integrals'
        ],
        hardestModule: 'Module 1: Cayley-Hamilton Theorem & Matrix Diagonalization',
        passTips: 'Euler theorem on homogeneous functions + Cayley-Hamilton inverse calculation appear every year.'
      },
      {
        id: 'hu101',
        code: 'HU101',
        name: 'Environmental Science',
        credits: 2,
        category: 'Value Added Theory (2-0-0)',
        modules: [
          'Module 1 (6L): Resources & Ecosystem - Human resource, Logistic growth curve, Maximum Sustainable Yield, Ecosystem types',
          'Module 2 (10L): Environmental Degradation - Air pollution, Smog, Global warming, Water BOD rate equation, Heavy metals, Noise dB',
          'Module 3 (6L): Environmental Management - EIA, Indian environmental laws, GRIHA norms, Water treatment, Waste disposal',
          'Module 4 (2L): Disaster Management - Disaster cycle, Earthquake, Cyclones, Forest fires'
        ],
        hardestModule: 'Module 2: Water Pollution BOD Rate Equations & Hardness Numericals',
        passTips: 'BOD calculation numericals + EIA GRIHA norms are high-scoring topics.'
      },
      {
        id: 'hu102',
        code: 'HU102',
        name: 'Indian Knowledge System (IKS)',
        credits: 1,
        category: 'Value Added Theory (1-0-0)',
        modules: [
          'Module 1 (3L): Overview of IKS, Vedas, Vedangas, Indian philosophical systems (Orthodox/Unorthodox)',
          'Module 2 (3L): Salient features of Indian Numeral System, Discovery of zero, Ancient Indian mathematicians',
          'Module 3 (3L): Indian Science & Tech Heritage, Metals, Mining, Ancient structural engineering, Shipbuilding',
          'Module 4 (3L): Traditional Knowledge in Agriculture, Medicine, Surgery (Sushruta), Art forms'
        ],
        hardestModule: 'Module 2: Ancient mathematical treatises and zero/decimal development',
        passTips: 'Contributions of Aryabhata and Brahmagupta + Vedic life structure ensure full marks.'
      },
      {
        id: 'cs191',
        code: 'CS191',
        name: 'Introduction to Programming and Problem-Solving Lab',
        credits: 1.5,
        category: 'Major Practical (0-0-3)',
        modules: [
          '12 Lab Sessions: C basics, Conditionals, Loops, Pattern printing, Recursion, Arrays (1D/2D), Strings, Pointers, malloc/free, Structures, File I/O, Mini Project'
        ],
        hardestModule: 'Dynamic Memory Allocation & Struct-based File I/O Mini Project',
        passTips: 'Practice file pointer fopen/fclose and pointer swapping algorithms for lab evaluation.'
      },
      {
        id: 'ph191',
        code: 'PH191',
        name: 'Engineering Physics Lab',
        credits: 1.5,
        category: 'Skill Enhancement Lab (0-0-3)',
        modules: [
          'Experiments: Slide calipers/Screw gauge, Torsional pendulum, Young’s modulus, Rigidity modulus, Newton’s rings, Laser diffraction, Optical fibre NA, Planck’s constant'
        ],
        hardestModule: 'Newton’s Rings diameter measurement & wavelength calculation',
        passTips: 'Take multiple microscope micrometer readings for ring diameters to minimize error percentage.'
      },
      {
        id: 'me194',
        code: 'ME194',
        name: 'Engineering Graphics & Computer Aided Design Lab',
        credits: 1.5,
        category: 'Skill Enhancement Lab (0-0-3)',
        modules: [
          'Basic Graphics, Conics, Scales, Orthographic & Isometric Projections, Section of Solids, CAD Software, 2D/3D Modeling'
        ],
        hardestModule: 'Isometric Projection of cut solids and auxiliary views',
        passTips: 'Always maintain correct line types (construction vs visible outline vs hidden dashed).'
      },
      {
        id: 'hu191',
        code: 'HU191',
        name: 'Communication & Presentation Skill Lab',
        credits: 1.5,
        category: 'Ability Enhancement Lab (0-0-3)',
        modules: [
          'Theories of Communication, Active Listening, Public Speaking, JAM sessions, Group Discussion, Video Resume & PowerPoint Presentations'
        ],
        hardestModule: 'Extempore JAM (Just A Minute) & Group Discussion speaking',
        passTips: 'Focus on clear tone, eye contact, structured introduction-body-conclusion format.'
      }
    ],
    topRepeatedPYQs: [
      {
        id: 'pyq-s1-1',
        subject: 'Introduction to Programming (CS101)',
        question: 'Differentiate between pass by value and pass by reference in C with an example. Write a program to swap two numbers using pointers.',
        marks: 10,
        frequency: 'Repeated 9 times',
        expectedAnswerFormat: 'Explain memory stack allocation differences. Provide working C code with `void swap(int *a, int *b)` and explain deference operator `*`.'
      },
      {
        id: 'pyq-s1-2',
        subject: 'Engineering Mathematics-I (M101)',
        question: 'State Cayley-Hamilton theorem. Verify it for matrix A = [[1, 2], [3, 4]] and hence calculate its inverse A⁻¹.',
        marks: 10,
        frequency: 'Repeated 8 times',
        expectedAnswerFormat: 'State theorem: Every square matrix satisfies its own characteristic equation |A - λI| = 0. Find polynomial, substitute A, and compute A⁻¹ = -1/2 * (A - 5I).'
      },
      {
        id: 'pyq-s1-3',
        subject: 'Engineering Physics (PH101)',
        question: 'Derive the expression for the diameter of the nth dark ring in Newton’s Ring experiment. Why is the central ring dark?',
        marks: 10,
        frequency: 'Repeated 7 times',
        expectedAnswerFormat: 'Draw ray diagram. Path difference Δ = 2μt cos r + λ/2. At center t=0, Δ = λ/2 (destructive interference -> dark). Derive D_n² = 4nλR.'
      }
    ],
    formulaMatrix: [
      { topic: 'Newton Rings Diameter', formula: 'D_n² = 4 · n · λ · R  (Dark rings)' },
      { topic: 'Optical Fiber NA', formula: 'NA = √(n₁² - n₂²) = sin(θ_acceptance)' },
      { topic: 'Euler Theorem (Homogeneous)', formula: 'x · (∂u/∂x) + y · (∂u/∂y) = n · u' },
      { topic: 'Cayley-Hamilton Theorem', formula: '|A - λI| = 0  ⟹  Aⁿ + c₁Aⁿ⁻¹ + ... + cₙI = 0' }
    ],
    thirtyDayPassStrategy: [
      { week: 'Week 1', focus: 'CS101 C Arrays, Pointers, Structures & Storage classes' },
      { week: 'Week 2', focus: 'M101 Matrices, Echelon form, Rank, Eigenvalues & Cayley-Hamilton' },
      { week: 'Week 3', focus: 'PH101 Laser, Optical Fiber NA & de Broglie/Schrödinger equations' },
      { week: 'Week 4', focus: 'M101 Multivariable Calculus (Euler Theorem) + HU101/HU102 high-yield units' }
    ],
    labVivaBank: [
      { id: 'v1-1', subject: 'C Programming Lab (CS191)', experiment: 'Dynamic Memory Allocation', question: 'What is the key difference between malloc() and calloc()?', answer: 'malloc() allocates contiguous uninitialized bytes (containing garbage values), while calloc() initializes all allocated memory cells to zero.' },
      { id: 'v1-2', subject: 'Physics Lab (PH191)', experiment: 'Newton’s Rings', question: 'Why is an extended monochromatic light source used in Newton’s rings?', answer: 'An extended source provides uniform illumination over the whole lens-plate system, ensuring clear and sharp circular interference fringes.' }
    ]
  },

  // ==========================================
  // SEMESTER 2 (Total Credits: 22)
  // ==========================================
  2: {
    semesterNumber: 2,
    title: '1st Year 2nd Semester (Gr-A)',
    academicYear: '1st Year — Core Computing, AI Foundations & Digital Systems',
    totalCredits: 22,
    totalSubjects: 12,
    difficultyRating: 'Rigorous (4.0/5)',
    passingThreshold: '40% in Theory & Practical (Total 1st Year: 40 Credits)',
    summary: 'The crucial gateway semester featuring Data Structures & Algorithms, Introduction to AI, Digital Logic & Computer Organization, Chemistry, Engineering Math-II, and IDEA Lab Workshop.',
    subjects: [
      {
        id: 'cs201',
        code: 'CS201',
        name: 'Data structure & Algorithms',
        credits: 3,
        category: 'Major Theory (3-0-0)',
        modules: [
          'Module 1 (4L): Abstract Data Types, Primitive/Non-primitive, Big-O, Omega, Theta asymptotic analysis',
          'Module 2 (9L): Linear Lists, Array polynomial representation, Sparse matrix, Singly/Doubly/Circular Linked Lists',
          'Module 3 (6L): Stacks (infix to postfix conversion, evaluation), Tail recursion, Queues (Linear, Circular, Deque)',
          'Module 4 (9L): Binary Tree traversals, Threaded binary tree, BST (search/insert/delete), AVL trees, B/B+ trees, Heaps, Graph DFS/BFS',
          'Module 5 (8L): Sorting (Bubble, Insertion, Selection, Quick, Merge, Radix) & Searching (Binary, Interpolation, Hashing)'
        ],
        hardestModule: 'Module 4: AVL Tree Rotations (LL, RR, LR, RL) & Heapify Operations',
        passTips: 'Infix to postfix conversion + BST deletion + Quick Sort recurrence analysis give 30+ marks.'
      },
      {
        id: 'cs202',
        code: 'CS202',
        name: 'Introduction to Artificial Intelligence',
        credits: 2,
        category: 'Minor Theory (2-0-0)',
        modules: [
          'Module 1 (3L): Definition, Goals, Evolution, Narrow/General/Super AI, AI for social good',
          'Module 2 (8L): Intelligent Agents & Logic-Based Thinking: Agents/environments, Propositional Logic, First Order Predicate Logic',
          'Module 3 (8L): Overview of AI Branches: ML, Deep Learning, NLP, Computer Vision, Expert Systems, Fuzzy Logic',
          'Module 4 (6L): Basics of Machine Learning: Supervised/Unsupervised, Dataset/Features/Labels, Decision Trees concept',
          'Module 5 (5L): Applications and Ethics of AI: Industry 4.0, Healthcare, Bias, Fairness, Privacy'
        ],
        hardestModule: 'Module 2: First Order Predicate Logic & Inference Answer Extraction',
        passTips: 'Agent environment types + Predicate logic conversion questions appear in every mid-term and semester.'
      },
      {
        id: 'cs203',
        code: 'CS203',
        name: 'Digital Logic and Computer Organization',
        credits: 3,
        category: 'Major Theory (3-0-0)',
        modules: [
          'Module 1 (6L): Number Systems, Gray Code, Boolean Laws, Minterms/Maxterms, 4-variable K-Maps',
          'Module 2 (6L): Combinational Circuits: Adders/Subtractors, Carry Lookahead Adder (CLA), MUX, DEMUX, Encoders, Decoders',
          'Module 3 (6L): Sequential Circuits: Flip-Flops (SR, JK, Master-Slave, D, T), Counters (Ring, Johnson, Mod-N), Shift Registers',
          'Module 4 (5L): Data Representation: Booth’s Multiplication Algorithm, Restoring/Non-Restoring Division, Addressing Modes',
          'Module 5 (6L): CPU Organization: RTL, ALU design, Hardwired vs Microprogrammed Control Unit, Instruction Pipeline',
          'Module 6 (7L): Memory & I/O: Cache mapping (Direct, Associative, Set-Associative), Virtual memory paging, DMA'
        ],
        hardestModule: 'Module 4 & 5: Booth’s Algorithm for Negative Multiplicands & Control Unit Microprogramming',
        passTips: 'K-Map simplification + Booth’s multiplication table step-by-step carries 15 marks guaranteed.'
      },
      {
        id: 'ch201',
        code: 'CH201',
        name: 'Engineering Chemistry',
        credits: 2,
        category: 'Multi Disciplinary Theory (2-0-0)',
        modules: [
          'Module 1 (6L): Quantum Properties of Atoms, Slater rules, Semiconductor Memory Materials (Si & Ge)',
          'Module 2 (7L): Chemical Thermodynamics, Carnot Engine, Entropy, Nernst equation, Lithium-ion batteries',
          'Module 3 (6L): Polymers (Bakelite, Nylon 6,6, HDPE/LDPE), Corrosion control, Fuel calorific value',
          'Module 4 (5L): Organic Reactions, Synthesis of Paracetamol & Aspirin, UV-VIS & IR Spectroscopy'
        ],
        hardestModule: 'Module 2: Nernst Equation cell EMF calculations & Carnot derivation',
        passTips: 'Lithium-ion battery mechanism + Synthesis of Paracetamol & Bakelite are guaranteed questions.'
      },
      {
        id: 'm201',
        code: 'M201',
        name: 'Engineering Mathematics - II',
        credits: 3,
        category: 'Multi Disciplinary Theory (3-0-0)',
        modules: [
          'Module 1 (9L): First Order ODE - Exact, Integrating Factors, Bernoulli, Clairaut equation',
          'Module 2 (8L): Second Order ODE with constant coefficients - Complementary Function & Particular Integral, Variation of parameters',
          'Module 3 (12L): Laplace Transform (LT) - Shifting theorems, Derivatives/Integrals of LT, Convolution theorem, Initial value ODE problems',
          'Module 4 (7L): Numerical Methods - Newton forward/backward, Lagrange interpolation, Trapezoidal, Simpson 1/3, RK-4th order'
        ],
        hardestModule: 'Module 3: Inverse Laplace Transform via Convolution Theorem & ODE solving',
        passTips: 'Second Order ODE Particular Integral shortcuts + Simpson 1/3 numerical rule carry 25 marks.'
      },
      {
        id: 'hu202',
        code: 'HU202',
        name: 'Constitution of India & Professional Ethics',
        credits: 1,
        category: 'Value Added Theory (1-0-0)',
        modules: [
          'Module 1 (2L): Preamble, Fundamental Rights & Duties, DPSP, Parliament',
          'Module 2 (3L): Ethics, Work ethics, Values for professional success',
          'Module 3 (4L): Engineering Ethics, Whistleblowing, Bhopal Gas Tragedy & Chernobyl Case Studies',
          'Module 4 (3L): Business ethics, IPR, Plagiarism and Academic Misconduct'
        ],
        hardestModule: 'Module 3: Ethical theories (Utilitarianism vs Deontology) & Whistleblower laws',
        passTips: 'Bhopal Gas Tragedy engineering lapses + Fundamental Rights are standard 10-mark questions.'
      },
      {
        id: 'hu203',
        code: 'HU203',
        name: 'Design Thinking & Innovation',
        credits: 1,
        category: 'Ability Enhancement (1-0-0)',
        modules: [
          'Modules 1-8 (30 hrs): Basics, Empathize (5 Whys, Empathy Map), Define, Ideate, Prototype (MVP), Test, TRIZ, SCAMPER, 17 SDGs'
        ],
        hardestModule: 'Module 2: Empathy Map creation & SCAMPER ideation framework',
        passTips: 'List the 5 stages of Design Thinking (Empathize, Define, Ideate, Prototype, Test) with diagrams.'
      },
      {
        id: 'cs291',
        code: 'CS291',
        name: 'Data structure & Algorithms Lab',
        credits: 1.5,
        category: 'Major Practical (0-0-3)',
        modules: ['12 Labs: Linked lists (Singly, Doubly, Circular), Stack applications, Queues, BST traversals, Sorting algorithms, Hashing'],
        hardestModule: 'Lab 9: Binary Search Tree Insertion, Deletion & Height calculation',
        passTips: 'Write clean recursive routines for In-order, Pre-order, Post-order traversals.'
      },
      {
        id: 'cs292',
        code: 'CS292',
        name: 'Artificial Intelligence Lab',
        credits: 1.5,
        category: 'Minor Practical (0-0-3)',
        modules: ['Modules 1-7: PROLOG IDE, Recursive definitions, Knowledge base for family relationships, Logic rules, List operations, Expert system simulation'],
        hardestModule: 'Module 5: PROLOG List concatenation & membership predicate rules',
        passTips: 'Understand base-case and recursive-step syntax in PROLOG `member(X, [X|T]). member(X, [H|T]) :- member(X, T)`.'
      },
      {
        id: 'cs293',
        code: 'CS293',
        name: 'Digital Logic and Computer Organization Lab',
        credits: 1.5,
        category: 'Major Practical (0-0-3)',
        modules: ['12 Labs: Gates truth tables, K-Map simplification, Adders/Subtractors, Code converters, MUX/DEMUX, Counters, Shift Registers, HDL ALU & Mini Project'],
        hardestModule: 'Lab 10: Booth’s Multiplier modeling in Verilog/VHDL',
        passTips: 'Verify IC pinouts (7408 AND, 7432 OR, 7404 NOT, 7486 XOR) before breadboard connections.'
      },
      {
        id: 'ch291',
        code: 'CH291',
        name: 'Engineering Chemistry Lab',
        credits: 1,
        category: 'Skill Enhancement Lab (0-0-2)',
        modules: ['10 Experiments: Permanganometry, Stalagmometer surface tension, Ostwald viscometer, Water hardness (EDTA), pH-metric titration, Bakelite synthesis'],
        hardestModule: 'EDTA Complexometric titration for temporary & permanent hardness',
        passTips: 'Note exact color transition from wine-red to steel-blue at the equivalence point.'
      },
      {
        id: 'me293',
        code: 'ME293',
        name: 'IDEA LAB Workshop',
        credits: 1.5,
        category: 'Skill Enhancement Lab (0-0-3)',
        modules: ['5 Labs: Eagle CAD PCB design, 3D printing (FDM/SLA), 3-axis CNC routing, Laser cutting, Arduino/Raspberry Pi sensor integration, Capstone build'],
        hardestModule: 'Lab 1: PCB schematic design, trace routing & Gerber file generation in Eagle CAD',
        passTips: 'Ensure proper clearance between power rails and ground planes when exporting Gerbers.'
      }
    ],
    topRepeatedPYQs: [
      {
        id: 'pyq-s2-1',
        subject: 'Data structure & Algorithms (CS201)',
        question: 'Explain the working of Quick Sort algorithm with an example. Derive its best-case, average-case, and worst-case time complexities.',
        marks: 10,
        frequency: 'Repeated 9 times',
        expectedAnswerFormat: 'Partition algorithm logic. Recurrence relations: Best T(n)=2T(n/2)+O(n) -> O(n log n). Worst T(n)=T(n-1)+O(n) -> O(n²).'
      },
      {
        id: 'pyq-s2-2',
        subject: 'Digital Logic & Computer Organization (CS203)',
        question: 'Multiply (+7) by (-5) using Booth’s multiplication algorithm. Show all intermediate register states (A, Q, Q₋₁, Count).',
        marks: 10,
        frequency: 'Repeated 9 times',
        expectedAnswerFormat: 'Convert 7 to 00111 and -5 to 2s complement 11011. Tabulate 5 cycles with arithmetic right shift (ARS) and additions/subtractions based on (Q₀, Q₋₁).'
      },
      {
        id: 'pyq-s2-3',
        subject: 'Engineering Mathematics-II (M201)',
        question: 'Using Laplace Transform, solve the differential equation: y\'\' + 4y\' + 4y = e⁻ᵗ, with initial conditions y(0) = 0 and y\'(0) = 1.',
        marks: 10,
        frequency: 'Repeated 8 times',
        expectedAnswerFormat: 'Apply L{y\'\'} = s²Y - sy(0) - y\'(0). Substitute values: Y(s) * (s+2)² = 1 + 1/(s+1). Resolve into partial fractions and compute inverse Laplace.'
      }
    ],
    formulaMatrix: [
      { topic: 'Booth Arithmetic Right Shift', formula: 'A = A ± M, then [A, Q, Q₋₁] >> 1 (preserving sign bit of A)' },
      { topic: 'Laplace of First Derivative', formula: 'L{ f\'(t) } = s · F(s) - f(0)' },
      { topic: 'Simpson’s 1/3 Rule', formula: '∫ f(x)dx = (h/3) · [ (y₀ + yₙ) + 4(y₁ + y₃ + ...) + 2(y₂ + y₄ + ...) ]' },
      { topic: 'AVL Tree Balance Factor', formula: 'BF(Node) = Height(Left Subtree) - Height(Right Subtree) ∈ {-1, 0, +1}' }
    ],
    thirtyDayPassStrategy: [
      { week: 'Week 1', focus: 'CS201 Linear lists, Infix to Postfix conversion, Stack & Queue code' },
      { week: 'Week 2', focus: 'CS203 K-Maps, Combinational Adders, Booth’s Multiplier & Cache mapping' },
      { week: 'Week 3', focus: 'M201 Laplace transforms, Second-order ODE Particular Integrals & RK-4' },
      { week: 'Week 4', focus: 'CS202 AI Agents & Logic + CH201 Batteries/Polymers & HU202 Ethics case studies' }
    ],
    labVivaBank: [
      { id: 'v2-1', subject: 'DSA Lab (CS291)', experiment: 'Binary Search Tree', question: 'Why does an in-order traversal of a BST always yield sorted keys?', answer: 'Because in a BST, for every node, all left descendants are strictly smaller and all right descendants are strictly greater. Visiting Left -> Root -> Right naturally orders elements in ascending sequence.' },
      { id: 'v2-2', subject: 'Digital Logic Lab (CS293)', experiment: 'Flip-Flops', question: 'What causes the race-around condition in a JK Flip-Flop and how is it eliminated?', answer: 'When J=1, K=1 and clock pulse width tp > propagation delay td, the output toggles continuously during the clock high period. It is solved using a Master-Slave JK flip-flop or edge-triggering.' }
    ]
  },

  // ==========================================
  // SEMESTER 3 (Total Credits: 28)
  // ==========================================
  3: {
    semesterNumber: 3,
    title: '2nd Year 3rd Semester (Core CS)',
    academicYear: '2nd Year — Computer Systems Architecture, Algorithms & OS',
    totalCredits: 28,
    totalSubjects: 12,
    difficultyRating: 'Highest Rigor (4.8/5)',
    passingThreshold: '40% in Theory & Lab (Massive 28-Credit Semester)',
    summary: 'The heaviest and most fundamental core semester in B.Tech CSE: Computer Architecture, DAA, Operating Systems, Advanced AI, IoT, and Discrete Mathematics with intensive laboratory practice.',
    subjects: [
      {
        id: 'cs301',
        code: 'CS301',
        name: 'Computer Architecture',
        credits: 3,
        category: 'Major Theory (3-0-0)',
        modules: [
          'Module 1 (8L): CPU & ALU, Addressing modes, Booth multiplication, Restoring/Non-restoring division, IEEE 754 floating point',
          'Module 2 (7L): Von Neumann vs Harvard, RISC vs CISC, Amdahl’s law, MIPS, MFLOPS, CPI, Microprogrammed vs Hardwired control',
          'Module 3 (8L): Memory Hierarchy, Cache Mapping (Direct, Full Associative, Set Associative), Virtual memory, Page replacement',
          'Module 4 (9L): Pipelining: Data/Control/Structural Hazards, ILP, Superscalar, Superpipelined, VLIW, Vector processors',
          'Module 5 (4L): Multiprocessors: Flynn’s taxonomy, Shared memory synchronization, Interconnection networks (Omega, Butterfly, Crossbar)'
        ],
        hardestModule: 'Module 4: Pipeline Hazard Detection & Handling (Forwarding, Stalling, Branch Prediction)',
        passTips: 'Amdahl’s law numerical + Cache direct vs set-associative mapping address calculation guarantee 20 marks.'
      },
      {
        id: 'cs302',
        code: 'CS302',
        name: 'Design and Analysis of Algorithms',
        credits: 3,
        category: 'Major Theory (3-0-0)',
        modules: [
          'Module 1 (6L): Complexity analysis, Asymptotic notations, Master Theorem, Recurrence tree method',
          'Module 2 (12L): Strassen matrix multiplication, Fractional Knapsack, Job Sequencing, Prim/Kruskal MST, Huffman coding, 0/1 Knapsack, MCM, TSP, N-Queens',
          'Module 3 (3L): String matching: Naive algorithm, KMP algorithm with prefix table',
          'Module 4 (5L): Graph algorithms: Dijkstra, Bellman-Ford, Floyd-Warshall, Ford-Fulkerson maximum flow',
          'Module 5 (10L): Complexity Classes: P, NP, NP-Completeness, SAT, 3-SAT, Vertex Cover, Clique'
        ],
        hardestModule: 'Module 2 & 5: Matrix Chain Multiplication (MCM) DP Table & NP-Complete Reduction proofs',
        passTips: 'Master Theorem statement & 3 cases + Dijkstra step-table + Prim/Kruskal MST are 100% recurring questions.'
      },
      {
        id: 'cs303',
        code: 'CS303',
        name: 'Operating Systems',
        credits: 3,
        category: 'Major Theory (3-0-0)',
        modules: [
          'Module 1 (4L): OS concepts, evolution, structure, and services',
          'Module 2 (8L): Processes, PCB, Threads, CPU Scheduling (FCFS, SJF, SRTF, RR, Multilevel Feedback, Real-time RM/EDF)',
          'Module 3 (8L): IPC, Critical section, Peterson’s solution, Semaphores, Reader-Writer, Dining Philosophers, Monitors',
          'Module 4 (4L): Deadlocks: 4 necessary conditions, Prevention, Banker’s Avoidance algorithm, Detection & Recovery',
          'Module 5 (6L): Memory management: Contiguous allocation, Paging, Segmentation, TLB, Virtual memory, Page replacement (FIFO, LRU, Optimal)',
          'Module 6 (6L): I/O Hardware, DMA, Disk scheduling (FCFS, SSTF, SCAN, C-SCAN, LOOK), File system allocation methods'
        ],
        hardestModule: 'Module 3 & 4: Semaphore Implementation of Dining Philosophers & Banker’s Safety Algorithm',
        passTips: 'Banker’s Algorithm safety matrix problem + Page replacement numericals (FIFO vs LRU) give 25+ marks.'
      },
      {
        id: 'cs304',
        code: 'CS304',
        name: 'Advanced Artificial Intelligence',
        credits: 3,
        category: 'Major Theory (3-0-0)',
        modules: [
          'Module 1 (6L): AI Problems, Tic-Tac-Toe, Intelligent agents, Learning decision trees, Neural net & genetic learning',
          'Module 2 (14L): State space search, BFS, DFS, Heuristic search (Greedy Best-First, A* search, Hill climbing, Simulated Annealing), Minimax & Alpha-Beta pruning',
          'Module 3 (12L): Knowledge & Reasoning: Predicate logic, Resolution, Natural deduction, Bayesian networks, Dempster-Shafer, Fuzzy sets',
          'Module 4 (4L): NLP pipeline, Expert systems shells, Python in AI'
        ],
        hardestModule: 'Module 2: A* Search Admissibility proofs & Alpha-Beta Pruning game tree evaluations',
        passTips: 'Alpha-Beta pruning game tree evaluation + Resolution refutation in predicate logic are standard 10-mark questions.'
      },
      {
        id: 'ec_cs301',
        code: 'EC(CS)301',
        name: 'Internet of Things',
        credits: 3,
        category: 'Minor Theory (3-0-0)',
        modules: [
          'Module 1 (7L): IoT fundamentals, convergence, architecture, design/security challenges',
          'Module 2 (6L): Wireless Sensor Networks (WSN), MAC protocols, routing, sensor deployment, data aggregation',
          'Module 3 (7L): M2M to IoT architectural overview, value chains, standards',
          'Module 4 (7L): IoT Reference Architecture: Functional, Information, Deployment views',
          'Module 5 (5L): IoT applications: Arduino, Raspberry Pi, Cloud/Fog computing, Smart cities, Healthcare',
          'Module 6 (4L): IoT privacy, security, trust platforms, Smartie approach'
        ],
        hardestModule: 'Module 4: IoT Reference Architecture Model (ARM) & WSN MAC protocol contention',
        passTips: 'IoT 4-layer architecture + MQTT vs CoAP comparison are repeated every year.'
      },
      {
        id: 'm_cs301',
        code: 'M(CS)301',
        name: 'Discrete Mathematics',
        credits: 3,
        category: 'Minor Theory (3-0-0)',
        modules: [
          'Module 1 (11L): Posets, Lattices, Inclusion-Exclusion, Pigeonhole Principle, Generating functions, Recurrence relations',
          'Module 2 (5L): Propositional logic, Truth tables, Tautology, DNF and CNF normal forms',
          'Module 3 (4L): Number theory: Well-ordering, Divisibility, GCD, Euclidean algorithm, Congruence, Residue classes',
          'Module 4 (8L): Groups, Subgroups, Cyclic groups, Cosets, Lagrange’s Theorem, Permutation groups, Rings & Fields',
          'Module 5 (8L): Graph Theory: Digraphs, Bipartite graphs, Dijkstra, Spanning trees, Kruskal & Prim algorithms'
        ],
        hardestModule: 'Module 4: Lagrange’s Theorem on Coset Cardinality & Normal Subgroup proofs',
        passTips: 'Pigeonhole principle applications + Lagrange theorem proof + Generating function recurrence solving ensure passing.'
      },
      {
        id: 'cs391',
        code: 'CS391',
        name: 'Computer Architecture Lab',
        credits: 1.5,
        category: 'Major Practical (0-0-3)',
        modules: ['12 Experiments: Gate simulations, Adders/Subtractors, MUX/DEMUX, Encoders/Decoders, Flip-Flops, Shift registers, ALU, RAM chip'],
        hardestModule: 'ALU and RAM memory address decoder simulation',
        passTips: 'Verify truth tables systematically and be ready to explain the multiplexer control lines.'
      },
      {
        id: 'cs392',
        code: 'CS392',
        name: 'Design and Analysis of Algorithms Lab',
        credits: 1.5,
        category: 'Major Practical (0-0-3)',
        modules: ['Experiments A to H: Strassen Matrix Multiplication, MCM, TSP, Branch & Bound, N-Queens, Knapsack, KMP String Matching, Dijkstra'],
        hardestModule: 'KMP String Matching failure function table implementation',
        passTips: 'Master the recursive N-Queens backtracking code in C or Python.'
      },
      {
        id: 'cs393',
        code: 'CS393',
        name: 'Operating Systems Lab',
        credits: 1.5,
        category: 'Major Practical (0-0-3)',
        modules: ['5 Modules: Essential Linux Commands (9P), Shell Programming (9P), Process fork/exec (6P), Semaphores (6P), POSIX Threads pthread (6P)'],
        hardestModule: 'POSIX thread synchronization using mutex locks and semaphores',
        passTips: 'Practice shell scripts for palindrome checking, prime generation, and file permission filters.'
      },
      {
        id: 'cs394',
        code: 'CS394',
        name: 'Advanced Artificial Intelligence Lab',
        credits: 2.5,
        category: 'Major Practical (0-0-3)',
        modules: ['5 Modules: Python for AI, BFS/DFS/A* search, N-Queens CSP, ML with Scikit-learn (Regression, Decision Trees, K-Means), NLP tokenization/sentiment'],
        hardestModule: 'A* search algorithm pathfinding implementation in Python',
        passTips: 'Ensure your heuristic function h(n) never overestimates the true cost (admissibility).'
      },
      {
        id: 'cs395',
        code: 'CS395',
        name: 'Python Programming Lab',
        credits: 2.5,
        category: 'Skill Enhancement Lab (0-1-3)',
        modules: ['11 Topics: Python syntax, loops, functions, lists, dictionaries, sets, file handling, modules, NumPy array ops, Pandas DataFrame wrangling'],
        hardestModule: 'NumPy array broadcasting and Pandas multi-conditional filtering',
        passTips: 'Memorize list comprehension, dict comprehension, and Pandas .groupby() syntax.'
      },
      {
        id: 'ec_cs391',
        code: 'EC(CS)391',
        name: 'Internet of Things Lab',
        credits: 1.5,
        category: 'Minor Practical (0-0-3)',
        modules: ['6 Modules: Arduino IDE, Sensor interfacing (LM35, PIR, Ultrasonic), Actuators & Relays, NodeMCU + ThingSpeak, Smart irrigation, Capstone IoT demo'],
        hardestModule: 'NodeMCU ESP8266 Wi-Fi connectivity and REST API data push to ThingSpeak',
        passTips: 'Check Wi-Fi baud rate (115200) and API Key strings carefully in Arduino C++ code.'
      }
    ],
    topRepeatedPYQs: [
      {
        id: 'pyq-s3-1',
        subject: 'Operating Systems (CS303)',
        question: 'Explain Banker’s Algorithm for deadlock avoidance. Given Allocation, Max, and Available matrices for 5 processes and 3 resources, find if the system is in a safe state.',
        marks: 10,
        frequency: 'Repeated 9 times',
        expectedAnswerFormat: 'Compute Need = Max - Allocation. Execute Safety Algorithm step-by-step. Provide the complete safe sequence <P1, P3, P4, P0, P2>.'
      },
      {
        id: 'pyq-s3-2',
        subject: 'Design & Analysis of Algorithms (CS302)',
        question: 'Solve the Matrix Chain Multiplication problem for dimensions <5, 10, 3, 12, 5, 50>. Find the minimum scalar multiplications and optimal parenthesization.',
        marks: 10,
        frequency: 'Repeated 9 times',
        expectedAnswerFormat: 'Derive DP recurrence m[i,j] = min(m[i,k] + m[k+1,j] + p_{i-1}p_k p_j). Construct the cost table m and split table s. Write full parenthesization.'
      },
      {
        id: 'pyq-s3-3',
        subject: 'Computer Architecture (CS301)',
        question: 'Explain 2-way and 4-way set-associative cache mapping. A system has a 64KB cache with 32-byte blocks and a 32-bit physical address. Calculate the Tag, Set, and Word Offset field sizes for 4-way set-associative cache.',
        marks: 10,
        frequency: 'Repeated 8 times',
        expectedAnswerFormat: 'Total cache blocks = 64KB / 32B = 2048. For 4-way, number of sets = 2048 / 4 = 512 = 2⁹ (Set Index = 9 bits). Word offset = log₂(32) = 5 bits. Tag = 32 - 9 - 5 = 18 bits.'
      }
    ],
    formulaMatrix: [
      { topic: 'Amdahl’s Law Speedup', formula: 'S(p) = 1 / [ (1 - f) + (f / p) ]  (where f = parallel fraction)' },
      { topic: 'Master Theorem', formula: 'T(n) = aT(n/b) + Θ(nᵈ): if d < log_b(a) ⟹ Θ(n^{log_b a}); if d = log_b a ⟹ Θ(nᵈ log n)' },
      { topic: 'Lagrange’s Theorem', formula: '|G| = [G : H] · |H|  (Order of subgroup divides order of group)' },
      { topic: 'Cache Memory Fields (32-bit)', formula: 'Address = [ Tag: (32 - S - W) | Set Index: S | Word Offset: W ]' }
    ],
    thirtyDayPassStrategy: [
      { week: 'Week 1', focus: 'CS302 DAA Master theorem, Prim/Kruskal MST, Dijkstra & Dynamic Programming (MCM)' },
      { week: 'Week 2', focus: 'CS303 OS CPU scheduling algorithms, Banker’s deadlock avoidance & LRU paging' },
      { week: 'Week 3', focus: 'CS301 Amdahl’s law, Pipeline hazards & Cache set-associative address bits' },
      { week: 'Week 4', focus: 'M(CS)301 Generating functions, Lagrange cosets + CS304 Alpha-Beta pruning & A*' }
    ],
    labVivaBank: [
      { id: 'v3-1', subject: 'Operating Systems Lab (CS393)', experiment: 'Semaphores', question: 'What is the purpose of wait() and signal() operations on a semaphore?', answer: 'wait() (or sem_wait / P) decrements the semaphore value; if negative, the calling process blocks. signal() (or sem_post / V) increments the semaphore value and wakes up a blocked process.' },
      { id: 'v3-2', subject: 'DAA Lab (CS392)', experiment: 'KMP Algorithm', question: 'Why does the KMP algorithm avoid backtracking the main text pointer?', answer: 'It precomputes the Longest Prefix which is also Suffix (LPS) array. On mismatch, it shifts the pattern pointer to LPS[j-1] without moving the text pointer backwards, guaranteeing O(n+m) linear time.' }
    ]
  },

  // ==========================================
  // SEMESTER 4 (Total Credits: 22.5)
  // ==========================================
  4: {
    semesterNumber: 4,
    title: '2nd Year 4th Semester',
    academicYear: '2nd Year — Data Management, Networking, ML & Theoretical CS',
    totalCredits: 22.5,
    totalSubjects: 11,
    difficultyRating: 'Hard (4.4/5)',
    passingThreshold: '40% in Theory & Lab (Total 2nd Year: 50.5 Credits)',
    summary: 'Core computing pillars: Database Management Systems, Computer Networks, Machine Learning, Formal Language & Automata Theory, and Probability & Statistics.',
    subjects: [
      {
        id: 'cs401',
        code: 'CS401',
        name: 'Database Management Systems',
        credits: 3,
        category: 'Major Theory (3-0-0)',
        modules: [
          'Module 1 (3L): DBMS overview, Data models, Three-schema architecture, DBA',
          'Module 2 (9L): E-R Diagram, Relational Model, Relational Algebra, Relational Calculus, Views',
          'Module 3 (6L): SQL (DDL, DML, DCL), Aggregate functions, Joins, Triggers, Stored Procedures',
          'Module 4 (6L): Relational Database Design: Functional dependencies, Normalization (1NF, 2NF, 3NF, BCNF, 4NF, 5NF), Decomposition',
          'Module 5 (6L): RDBMS Internals: Query optimization, ACID properties, Serializability, Two-Phase Locking (2PL), Deadlock',
          'Module 6 (6L): File Organization: Primary, Secondary, Clustering & Multilevel B/B+ Tree indexes'
        ],
        hardestModule: 'Module 4 & 5: Lossless Join & Dependency Preserving BCNF Decomposition & Conflict Serializability',
        passTips: 'Find candidate keys from functional dependencies + Relational algebra queries carry 25 marks.'
      },
      {
        id: 'cs402',
        code: 'CS402',
        name: 'Computer Networks',
        credits: 3,
        category: 'Major Theory (3-0-0)',
        modules: [
          'Module 1 (7L): OSI & TCP/IP models, Guided/Unguided media, Circuit switching, TDM bus',
          'Module 2 (10L): Data Link Layer: Framing, CRC, Sliding Window (Go-Back-N, Selective Repeat), CSMA/CD, Ethernet, Wi-Fi',
          'Module 3 (10L): Network Layer: IPv4 & IPv6 addressing, Subnetting, CIDR, ARP, ICMP, Routing: Dijkstra, Distance Vector, Link State, OSPF, BGP',
          'Module 4 (5L): Transport Layer: TCP 3-way handshake, UDP, Congestion control, Leaky/Token Bucket',
          'Module 5 (4L): Application Layer: DNS, SMTP, FTP, HTTP, Cryptography, Firewalls'
        ],
        hardestModule: 'Module 3: IPv4 Subnetting, Supernetting & Distance Vector Count-to-Infinity Problem',
        passTips: 'Subnet mask & host range numerical + CRC polynomial division carry 20 marks.'
      },
      {
        id: 'cs403',
        code: 'CS403',
        name: 'Machine Learning',
        credits: 3,
        category: 'Major Theory (3-0-0)',
        modules: [
          'Module 1 (8L): Supervised learning basics, ML workflow pipeline, Feature engineering, Train-test split, Regularization (L1/L2)',
          'Module 2 (5L): Clustering: K-means algorithm, Hierarchical clustering, PCA dimensionality reduction, Anomaly detection',
          'Module 3 (4L): Model evaluation: Cross-validation, Confusion matrix, ROC curve, Bias-variance trade-off',
          'Module 4 (7L): Neural Networks: Perceptron, Activation functions, Feed-forward networks, Deep learning overview, Transfer learning',
          'Module 5 (7L): Scalable ML: Online learning, Distributed computing, Semi-supervised, Reinforcement learning introduction',
          'Module 6 (4L): Recent trends: Federated learning, AutoML, Hyperparameter tuning, Ethical AI'
        ],
        hardestModule: 'Module 3 & 4: Bias-Variance Mathematical Decomposition & Backpropagation Gradient Derivation',
        passTips: 'K-Means clustering numerical + Confusion matrix (Precision, Recall, F1) are guaranteed.'
      },
      {
        id: 'cs404',
        code: 'CS404',
        name: 'Formal Language and Automata Theory',
        credits: 3,
        category: 'Major Theory (3-0-0)',
        modules: [
          'Module 1 (9L): Finite State Automata: DFA, NFA, epsilon-NFA, NFA to DFA conversion, DFA minimization, Myhill-Nerode',
          'Module 2 (7L): Mealy & Moore machines, Inter-conversion, Incompletely specified machines',
          'Module 3 (5L): Regular sets, Regular expressions, Arden’s Theorem statement and proof, Pumping Lemma for Regular Languages',
          'Module 4 (9L): Context Free Grammars: Ambiguity, CNF & GNF normal forms, Pumping Lemma for CFL, Pushdown Automata (DPDA, NPDA)',
          'Module 5 (5L): Turing Machines: Design of TM, Church’s hypothesis, Universal TM, Halting Problem'
        ],
        hardestModule: 'Module 3 & 5: Pumping Lemma Contradiction Proofs & Turing Machine State Transition Tables',
        passTips: 'Arden’s Theorem proof + DFA minimization table method + CFG to CNF conversion give 30 marks.'
      },
      {
        id: 'm_cs401',
        code: 'M(CS)401',
        name: 'Probability and Statistics',
        credits: 3,
        category: 'Minor Theory (3-0-0)',
        modules: [
          'Module 1 (10L): Random variables (Discrete & Continuous), PMF, PDF, CDF, Expectation, MGF, Binomial, Poisson, Normal distributions',
          'Module 2 (9L): Two-Dimensional RVs: Joint distributions, Covariance, Correlation, Linear regression, Central Limit Theorem',
          'Module 3 (10L): Sampling Theory: Sampling distributions (t, F, Chi-square), MLE parameter estimation, Confidence intervals',
          'Module 4 (7L): Hypothesis Testing: Type I/II errors, t-test, Z-test, Chi-square test for goodness of fit'
        ],
        hardestModule: 'Module 4: Chi-square Goodness of Fit & 2-Sample Hypothesis Testing',
        passTips: 'Normal distribution z-score calculations + Linear regression line equations are standard.'
      },
      {
        id: 'hu_cs401',
        code: 'HU(CS)401',
        name: 'Principles of Management',
        credits: 3,
        category: 'Minor Theory (3-0-0)',
        modules: [
          'Module 1 (6L): Management concepts, Taylor, Fayol, Mayo, Maslow, McGregor',
          'Module 2 (6L): Planning, MBO, SWOT, McKinsey 7S, Organizational structure',
          'Module 3 (6L): Group dynamics, Leadership styles and theories',
          'Module 4 (6L): Work study, Time study, Allowances, Standard time calculation',
          'Module 5 (4L): Marketing management 4Ps, Product planning',
          'Module 6 (8L): Quality control, Control charts (X-bar, R, p, c), Six Sigma, ISO 9000, TQM'
        ],
        hardestModule: 'Module 4 & 6: Time Study Standard Time calculations & Statistical Control Charts (X-bar, R-charts)',
        passTips: 'Fayol’s 14 Principles of Management + SWOT analysis matrix are guaranteed questions.'
      },
      {
        id: 'cs491',
        code: 'CS491',
        name: 'Database Management Systems Lab',
        credits: 1.5,
        category: 'Major Practical (0-0-3)',
        modules: ['7 Modules: ER design, Table creation, Primary/Foreign keys, DML, Nested subqueries & Joins, Triggers & Views, PL/SQL Cursors & Procedures'],
        hardestModule: 'Module 6 & 7: Trigger creation for audit logging & PL/SQL Cursor loops',
        passTips: 'Know the syntax for BEFORE/AFTER INSERT OR UPDATE triggers and row-level variables (:NEW, :OLD).'
      },
      {
        id: 'cs492',
        code: 'CS492',
        name: 'Computer Networks Lab',
        credits: 1.5,
        category: 'Major Practical (0-0-3)',
        modules: ['5 Modules: Linux network commands & RJ45 crimping, Socket programming (TCP & UDP), Routing (RIP/OSPF), Packet Tracer, Web server setup'],
        hardestModule: 'Socket Programming in C: TCP client-server iterative echo connection',
        passTips: 'Remember socket(), bind(), listen(), accept() sequence for server, and socket(), connect() for client.'
      },
      {
        id: 'cs493',
        code: 'CS493',
        name: 'Machine Learning Lab',
        credits: 1.5,
        category: 'Major Practical (0-0-3)',
        modules: ['12 Experiments: FIND-S, Candidate-Elimination, ID3 Decision Tree, Backpropagation ANN, Naive Bayes, Bayesian Network, EM vs K-Means, k-NN, LWR, Logistic Regression ROC, PCA'],
        hardestModule: 'Experiment 2 & 4: Candidate-Elimination algorithm & Backpropagation Neural Network',
        passTips: 'For Candidate-Elimination, maintain specific boundary S and general boundary G consistently.'
      },
      {
        id: 'm_cs491',
        code: 'M(CS)491',
        name: 'Introduction to R Programming',
        credits: 1.5,
        category: 'Minor Practical (0-0-3)',
        modules: ['Weeks 1-12: R syntax, vectors, matrices, data frames, dplyr cleaning, Base R & ggplot2 plotting, statistical tests (t-test, ANOVA), ML with caret'],
        hardestModule: 'Week 8 & 11: Multi-layered ggplot2 faceted visualizations & Caret ML pipelines',
        passTips: 'Master the pipe operator `%>%` with dplyr `filter()`, `select()`, and `summarise()`.'
      },
      {
        id: 'hu_cs491',
        code: 'HU(CS)491',
        name: 'Soft Skill & Aptitude',
        credits: 1.5,
        category: 'Ability Enhancement (0-0-3)',
        modules: ['Modules 1-5: Corporate communication, Quantitative aptitude (Time & Work, Percentages), Logical puzzles, Stress management, ATS resume & LinkedIn audit'],
        hardestModule: 'Module 2: High-speed Quantitative Aptitude & Data Interpretation drills',
        passTips: 'Use LCM method for time & work questions; keep LinkedIn headline keyword-optimized.'
      }
    ],
    topRepeatedPYQs: [
      {
        id: 'pyq-s4-1',
        subject: 'Automata Theory (CS404)',
        question: 'State and prove Arden’s Theorem. Using Arden’s Theorem, find the regular expression corresponding to a given 3-state transition system.',
        marks: 10,
        frequency: 'Repeated 9 times',
        expectedAnswerFormat: 'Statement: If P and Q are two regular expressions over Σ and P does not contain ε, then R = Q + RP has a unique solution R = QP*. Provide algebraic substitution proof.'
      },
      {
        id: 'pyq-s4-2',
        subject: 'Database Management Systems (CS401)',
        question: 'Given relation R(A, B, C, D, E) with FDs: {A -> BC, CD -> E, B -> D, E -> A}. Find all candidate keys of R. What is the highest normal form of R? Decompose into BCNF.',
        marks: 10,
        frequency: 'Repeated 9 times',
        expectedAnswerFormat: 'Compute attribute closures: (A)⁺ = ABCDE -> A is key. (E)⁺ = EABCDE -> E is key. (CD)⁺ = CDEAB -> CD is key. (BC)⁺ = BCDE A -> BC is key. Check each FD for superkey condition and perform BCNF decomposition.'
      },
      {
        id: 'pyq-s4-3',
        subject: 'Computer Networks (CS402)',
        question: 'An organization is granted the block 192.168.1.0/24. The admin needs to create 4 subnets with at least 30 hosts each. Find the new subnet mask, subnet addresses, and usable host IP ranges.',
        marks: 10,
        frequency: 'Repeated 8 times',
        expectedAnswerFormat: 'Borrow 2 bits: 2² = 4 subnets. New mask = /26 (255.255.255.192). Subnet increment = 64. List Subnets 192.168.1.0/26, .64/26, .128/26, .192/26 with usable ranges (.1-.62, .65-.126, etc.).'
      }
    ],
    formulaMatrix: [
      { topic: 'Arden’s Theorem', formula: 'R = Q + R · P  ⟹  R = Q · P*  (where ε ∉ P)' },
      { topic: 'Subnet Host Formula', formula: 'Usable Hosts = 2^(32 - Prefix) - 2' },
      { topic: 'Sliding Window Efficiency (GBN)', formula: 'η = N / (1 + 2a),  where a = T_prop / T_trans, N = window size' },
      { topic: 'Bayes Theorem (ML)', formula: 'P(c|x) = [ P(x|c) · P(c) ] / P(x)' }
    ],
    thirtyDayPassStrategy: [
      { week: 'Week 1', focus: 'CS401 Normalization (1NF to BCNF) & SQL Joins/Triggers' },
      { week: 'Week 2', focus: 'CS404 NFA to DFA conversion, Arden’s theorem & DFA minimization' },
      { week: 'Week 3', focus: 'CS402 Subnetting / CIDR numericals & TCP sliding window protocols' },
      { week: 'Week 4', focus: 'CS403 Decision Trees & K-Means + M(CS)401 Hypothesis testing' }
    ],
    labVivaBank: [
      { id: 'v4-1', subject: 'DBMS Lab (CS491)', experiment: 'Indexing', question: 'Why is a B+ Tree preferred over a binary search tree for database indexing?', answer: 'B+ trees have a high fan-out leading to very low tree height (typically 3-4 levels for millions of records), which drastically minimizes costly disk I/O operations. Also, leaf nodes are linked sequentially for fast range queries.' },
      { id: 'v4-2', subject: 'Machine Learning Lab (CS493)', experiment: 'Decision Trees', question: 'What is Information Gain and how is it used in the ID3 algorithm?', answer: 'Information Gain measures the reduction in Entropy after splitting a dataset on an attribute: Gain(S, A) = Entropy(S) - ∑ (|Sv|/|S|) * Entropy(Sv). ID3 selects the attribute with the highest Information Gain at each node.' }
    ]
  },

  // ==========================================
  // SEMESTER 5 (Total Credits: 22)
  // ==========================================
  5: {
    semesterNumber: 5,
    title: '3rd Year 5th Semester',
    academicYear: '3rd Year — Advanced Software Engineering, Java, Electives & Project-I',
    totalCredits: 22,
    totalSubjects: 10,
    difficultyRating: 'Hard (4.3/5)',
    passingThreshold: '40% in Theory & Lab',
    summary: 'Professional phase covering Software Engineering, Object-Oriented Java, Elective-I (Compiler / Cryptography / Graphics / Data Handling), Soft Computing, Project Management & Finance, and Capstone Project-I.',
    subjects: [
      {
        id: 'cs501',
        code: 'CS501',
        name: 'Software Engineering',
        credits: 3,
        category: 'Major Theory (3-0-0)',
        modules: [
          'Module 1 (6L): Introduction, Feasibility analysis, Cost-Benefit, COCOMO model (Basic, Intermediate, Complete)',
          'Module 2 (6L): SDLC models (Waterfall, Spiral, Prototyping), Functional/Non-functional requirements, SRS',
          'Module 3 (8L): Software Design: Modularity, Cohesion, Coupling, DFD, Structure charts, UML modeling, Coding standards',
          'Module 4 (7L): Software Testing: White-box, Black-box, Test coverage, Mutation testing, Reliability growth',
          'Module 5 (9L): Project Management: PERT, GANTT, CMMI, Six Sigma, Software maintenance, CASE tools'
        ],
        hardestModule: 'Module 1 & 4: COCOMO Estimation Formulas & Cyclomatic Complexity White-Box Test Cases',
        passTips: 'Cyclomatic complexity calculation V(G) = E - N + 2P + COCOMO effort equation are guaranteed.'
      },
      {
        id: 'cs502',
        code: 'CS502',
        name: 'Object Oriented Programming using Java',
        credits: 3,
        category: 'Major Theory (3-0-0)',
        modules: [
          'Module 1 (2L): OOA & OOD concepts, Generalization, Aggregation, Differences between Java and C++',
          'Module 2 (10L): Bytecode, JVM, Data types, Constructors, Overloading, this keyword, Garbage collection',
          'Module 3 (5L): String & StringBuffer, Command line args, Scanner and BufferedReader I/O',
          'Module 4 (8L): Inheritance, super keyword, Method overriding, Dynamic dispatch, Abstract classes, Interfaces, Packages',
          'Module 5 (11L): Exception handling (checked/unchecked), Custom exceptions, Multithreading, Thread sync, Applets'
        ],
        hardestModule: 'Module 5: Multithreading Synchronization & Inter-thread Communication (wait, notify, deadlocks)',
        passTips: 'Interface vs Abstract class + Exception handling try-catch-finally code structure ensure 25+ marks.'
      },
      {
        id: 'cs503',
        code: 'CS503A / B / C / D',
        name: 'Professional Elective - I (Compiler / Cryptography / Graphics / Data Handling)',
        credits: 3,
        category: 'Major Elective Theory (3-0-0)',
        modules: [
          'CS503A Compiler Design: Lexical analysis (Lex), Syntax parsing (LL, LR, YACC), SDD, 3-address code, Code optimization',
          'CS503B Cryptography & Network Security: DES, AES, RSA, Diffie-Hellman, SHA-256, Firewalls, IPSec, SSL/TLS',
          'CS503C Computer Graphics: Bresenham lines/circles, 2D/3D transformations, Cohen-Sutherland clipping, Z-buffer',
          'CS503D Data Handling & Visualization: Pandas Series/DataFrames, Wrangling, Seaborn plotting, Time series'
        ],
        hardestModule: 'CS503A: LR(0)/SLR(1) Parsing Table Construction | CS503B: RSA Cryptosystem & Modular Arithmetic',
        passTips: 'For Compiler: FIRST & FOLLOW computation. For Crypto: RSA encryption/decryption numerical. For Graphics: Bresenham line algorithm.'
      },
      {
        id: 'cs504',
        code: 'CS504',
        name: 'Soft Computing',
        credits: 3,
        category: 'Major Theory (3-0-0)',
        modules: [
          'Module 1 (8L): Soft Computing vs Hard Computing, Evolution from AI to Computational Intelligence',
          'Module 2 (7L): Fuzzy sets vs Crisp sets, Operations, Membership functions, Fuzzy relations, Fuzzy controllers',
          'Module 3 (9L): Artificial Neural Networks: Perceptron, Backpropagation, MLP convergence, SOM, Hopfield',
          'Module 4 (7L): Genetic Algorithms: Operators (Selection, Crossover, Mutation), Schema theorem, Simulated annealing',
          'Module 5 (5L): Hybrid Systems: Neuro-fuzzy, Genetic-neural networks, Applications'
        ],
        hardestModule: 'Module 3: Backpropagation Delta Rule Mathematical Derivation',
        passTips: 'Fuzzy set union/intersection/complement calculations + Genetic Algorithm crossover/mutation step diagrams.'
      },
      {
        id: 'hu_cs501',
        code: 'HU(CS)501',
        name: 'Project Management & Finance',
        credits: 2,
        category: 'Minor Theory (2-0-0)',
        modules: [
          'Unit 1-4 (12L): Project life cycle, Feasibility studies, WBS, Scheduling: Gantt charts, PERT & CPM network',
          'Unit 5-7 (16L): Financial management, Balance sheet, Capital budgeting (PBP, ARR, NPV vs IRR), Break-even analysis'
        ],
        hardestModule: 'Unit 4 & 6: CPM Network Critical Path, Total Float & NPV vs IRR Calculations',
        passTips: 'Calculate critical path, ES, EF, LS, LF in network diagram + Break-even point (BEP) formula.'
      },
      {
        id: 'cs591',
        code: 'CS591',
        name: 'Software Engineering Lab',
        credits: 1.5,
        category: 'Major Practical (0-0-3)',
        modules: ['SRS document preparation, DFD, Function Point calculation, UML diagrams in Rational Rose, Test case execution'],
        hardestModule: 'Sequence and Activity diagrams modeling for complete system',
        passTips: 'Clearly distinguish actors from system use-case boundaries.'
      },
      {
        id: 'cs592',
        code: 'CS592',
        name: 'Java Programming Lab',
        credits: 1.5,
        category: 'Major Practical (0-0-3)',
        modules: ['12 Programs: Basic Java, Constructors, Overloading, Inheritance, Packages, Exception handling, Multi-threads, Applets'],
        hardestModule: 'Program 11: 3-Thread synchronization displaying messages at 1s, 2s, and 3s intervals',
        passTips: 'Implement Runnable interface or extend Thread class with synchronized blocks.'
      },
      {
        id: 'cs593',
        code: 'CS593A / B / C / D',
        name: 'Professional Elective - I Lab',
        credits: 1.5,
        category: 'Major Practical (0-0-3)',
        modules: [
          'CS593A: LEX & YACC parser | CS593B: Wireshark, OpenSSL, RSA, Snort | CS593C: OpenGL/C Bresenham & Transformations | CS593D: Pandas, Matplotlib, Seaborn'
        ],
        hardestModule: 'YACC grammar file configuration or OpenSSL certificate generation',
        passTips: 'Follow command line compile steps accurately: `flex file.l && yacc -d file.y && gcc lex.yy.c y.tab.c`.'
      },
      {
        id: 'cs594',
        code: 'CS594',
        name: 'Soft Computing Lab',
        credits: 1.5,
        category: 'Major Practical (0-0-3)',
        modules: ['9 Python Programs: Fuzzy union/intersect, De Morgan law, Membership functions, Perceptron, Backpropagation XOR, Genetic algorithm'],
        hardestModule: 'Program 5: XOR classification using Backpropagation Neural Network',
        passTips: 'Remember that single layer perceptrons cannot solve non-linear XOR; a hidden layer is mandatory.'
      },
      {
        id: 'cs582',
        code: 'CS582',
        name: 'Project-I',
        credits: 2,
        category: 'Project (0-0-4)',
        modules: ['Problem formulation, literature review, requirement specification, initial system architecture design'],
        hardestModule: 'Literature survey & novelty justification',
        passTips: 'Have a clear problem statement and architectural block diagram ready for review.'
      }
    ],
    topRepeatedPYQs: [
      {
        id: 'pyq-s5-1',
        subject: 'Software Engineering (CS501)',
        question: 'Explain COCOMO model. For an organic software project estimated at 40 KLOC, calculate the Effort, Development Time, and Average Staff size.',
        marks: 10,
        frequency: 'Repeated 9 times',
        expectedAnswerFormat: 'Formulas for Organic mode: Effort E = 2.4 * (KLOC)^1.05 person-months. Development Time D = 2.5 * (E)^0.38 months. Average Staff = E / D. Compute numerical values.'
      },
      {
        id: 'pyq-s5-2',
        subject: 'Cryptography (CS503B)',
        question: 'In an RSA cryptosystem, given prime numbers p = 7 and q = 11. Choose encryption key e = 13. Encrypt the plaintext message M = 9 and then decrypt to recover M.',
        marks: 10,
        frequency: 'Repeated 9 times',
        expectedAnswerFormat: 'n = p * q = 77. φ(n) = (p-1)(q-1) = 60. Find d such that (d * 13) ≡ 1 mod 60 -> d = 37. Ciphertext C = 9¹³ mod 77. Plaintext M = C³⁷ mod 77 = 9.'
      },
      {
        id: 'pyq-s5-3',
        subject: 'Java Programming (CS502)',
        question: 'What is Dynamic Method Dispatch in Java? How is run-time polymorphism achieved using interfaces? Illustrate with a code example.',
        marks: 10,
        frequency: 'Repeated 8 times',
        expectedAnswerFormat: 'Explain that superclass/interface reference can point to subclass object, resolving method calls dynamically at runtime. Write clean code demonstrating interface Shape with draw() method.'
      }
    ],
    formulaMatrix: [
      { topic: 'Basic COCOMO (Organic)', formula: 'Effort E = 2.4 · (KLOC)¹·⁰⁵ PM,  Time T_dev = 2.5 · (E)⁰·³⁸ Months' },
      { topic: 'Cyclomatic Complexity', formula: 'V(G) = E - N + 2P  =  Predicate Nodes + 1' },
      { topic: 'RSA Key Generation', formula: 'n = p · q,  φ(n) = (p - 1)(q - 1),  e · d ≡ 1 (mod φ(n))' },
      { topic: 'Break-Even Point (Units)', formula: 'BEP = Fixed Cost / (Selling Price per Unit - Variable Cost per Unit)' }
    ],
    thirtyDayPassStrategy: [
      { week: 'Week 1', focus: 'CS501 COCOMO estimation, SDLC models, DFD & Testing techniques' },
      { week: 'Week 2', focus: 'CS502 Java OOP, Interfaces, Multithreading & Exception handling' },
      { week: 'Week 3', focus: 'CS503 Elective (RSA / LR parsing / Bresenham) + HU(CS)501 CPM/PERT' },
      { week: 'Week 4', focus: 'CS504 Fuzzy logic operations & ANN Backpropagation derivation' }
    ],
    labVivaBank: [
      { id: 'v5-1', subject: 'Java Lab (CS592)', experiment: 'Multithreading', question: 'What is the difference between synchronized method and synchronized block?', answer: 'A synchronized method locks the entire object for the duration of the method call. A synchronized block locks only the critical section on a specific monitor object, offering finer granularity and better concurrency.' },
      { id: 'v5-2', subject: 'Compiler Lab (CS593A)', experiment: 'LEX & YACC', question: 'What is the role of y.tab.h generated by YACC?', answer: 'y.tab.h contains token definitions (enums/defines) generated by YACC from grammar declarations, which are imported by LEX (lex.yy.c) so both components share identical token IDs.' }
    ]
  },

  // ==========================================
  // SEMESTER 6 (Total Credits: 23.5)
  // ==========================================
  6: {
    semesterNumber: 6,
    title: '3rd Year 6th Semester',
    academicYear: '3rd Year — Deep Learning, Web Technologies & Industry Electives',
    totalCredits: 23.5,
    totalSubjects: 10,
    difficultyRating: 'Rigorous (4.5/5)',
    passingThreshold: '40% in Theory & Lab (Total 3rd Year: 45.5 Credits)',
    summary: 'Cutting-edge semester featuring Web & Internet Technology, Deep Learning, Elective-II (Image Processing / Cloud / Big Data / NLP), Elective-III (Mobile / HCI / E-Commerce / Quantum), Cyber Law & Ethics, and Project-II.',
    subjects: [
      {
        id: 'cs601',
        code: 'CS601',
        name: 'Web and Internet Technology',
        credits: 3,
        category: 'Major Theory (3-0-0)',
        modules: [
          'Module 1 (5L): WWW, HTTP request/response, Browsers, Dynamic IP, Client-Server architecture',
          'Module 2 (12L): HTML5, CSS3, DOM, XML, DTD, XML Tree, XML Schema',
          'Module 3 (9L): JavaScript (DOM events, functions), CGI, PHP (syntax, control statements, arrays, form handling)',
          'Module 4 (11L): JSP architecture, scriptlets, implicit objects, JavaBeans, JDBC, Servlets lifecycle, sessions, cookies'
        ],
        hardestModule: 'Module 4: JSP Lifecycle, Session Tracking & JDBC Prepared/Callable Statements',
        passTips: 'JSP vs Servlet comparison + PHP form handling code + CSS box model carry 25 marks.'
      },
      {
        id: 'cs602',
        code: 'CS602',
        name: 'Deep Learning',
        credits: 3,
        category: 'Major Theory (3-0-0)',
        modules: [
          'Module 1 (8L): Neural Network fundamentals, Logistic regression, Gradient descent, Vectorization',
          'Module 2 (7L): Shallow & Deep Networks, Activation functions (ReLU, Sigmoid, Softmax), Backpropagation, Hyperparameters',
          'Module 3 (6L): Computer Vision: Convolutions, Pooling, ResNet, Inception, MobileNet, Transfer learning, YOLO',
          'Module 4 (7L): Sequence Models: RNN, Vanishing gradients, LSTM, GRU, Word2Vec, Attention Mechanism, Transformers',
          'Module 5 (8L): Autoencoders (Sparse, Denoising), Generative Adversarial Networks (GANs), Keras/PyTorch'
        ],
        hardestModule: 'Module 3 & 4: Vanishing Gradient Problem in RNNs & Transformer Self-Attention Derivation',
        passTips: 'Draw LSTM cell architecture with 3 gates (Forget, Input, Output) + CNN pooling calculation.'
      },
      {
        id: 'cs603',
        code: 'CS603A / B / C / D',
        name: 'Professional Elective - II (Image Processing / Cloud / Big Data / NLP)',
        credits: 3,
        category: 'Major Elective Theory (3-0-0)',
        modules: [
          'CS603A Image Processing: Sampling, 2D Fourier transform, Histogram equalization, Canny edge detection, JPEG',
          'CS603B Cloud Computing: NIST model, IaaS/PaaS/SaaS, Virtualization, AWS/Azure, Docker, Cloud security, Live migration',
          'CS603C Big Data Analytics: 6-phase lifecycle, K-means, Apriori, ARIMA time series, MapReduce, Hadoop, Pig, Hive',
          'CS603D NLP: Morphology, POS tagging (HMM, CRF), Word2Vec, Text classification, Transformers, BERT'
        ],
        hardestModule: 'CS603B: Live Virtual Machine Migration & CS603C: MapReduce Distributed Data Flow',
        passTips: 'For Cloud: SaaS vs PaaS vs IaaS matrix. For Big Data: MapReduce word count trace. For Image Processing: Histogram equalization.'
      },
      {
        id: 'cs604',
        code: 'CS604A / B / C / D',
        name: 'Professional Elective - III (Mobile / HCI / E-Commerce / Quantum)',
        credits: 3,
        category: 'Major Elective Theory (3-0-0)',
        modules: [
          'CS604A Mobile Computing: Cellular networks, 1G-5G, Handoff, Mobile IP, 802.11, DSR/AODV',
          'CS604B Human Computer Interaction: Usability, GOMS, User-centered design, Prototyping (Figma), A/B testing',
          'CS604C E-Commerce: Business models (B2B, B2C), Payment gateways, UPI, SSL, SEO, IT Act 2000',
          'CS604D Quantum Computing: Qubits, Superposition, Entanglement, Quantum gates (H, CNOT), Grover & Shor algorithms'
        ],
        hardestModule: 'CS604D: Quantum Circuit Superposition & Grover Search Amplitude Amplification',
        passTips: 'For Mobile: Mobile IP tunneling. For HCI: 5 usability heuristics. For Quantum: Hadamard + CNOT Bell state creation.'
      },
      {
        id: 'cs605',
        code: 'CS605',
        name: 'Cyber Law and Ethics',
        credits: 3,
        category: 'Minor Theory (3-0-0)',
        modules: [
          'Module 1 (5L): Cybercrime types: Hacking, Forgery, Software piracy, Stalking, Passive vs Active attacks',
          'Module 2 (8L): Mobile device security, Viruses, Bluetooth exploits, Laptop malware',
          'Module 3 (7L): Cybercrime tools: Proxies, Trojans, DoS/DDoS, SQL Injection, Buffer overflow',
          'Module 4 (6L): Cybersecurity laws: IT Act 2000, PKI, Digital signatures, UNCITRAL model law',
          'Module 5 (5L): Cyber Ethics: Information society ethics, AI ethics, Blockchain ethics'
        ],
        hardestModule: 'Module 4: IT Act 2000 Sections 65-67 Penalties & Digital Signature PKI Validity',
        passTips: 'SQL Injection mechanism & countermeasures + IT Act 2000 salient features carry 20 marks.'
      },
      {
        id: 'cs691',
        code: 'CS691',
        name: 'Web and Internet Technology Lab',
        credits: 1.5,
        category: 'Major Practical (0-0-3)',
        modules: ['HTML5/CSS3 responsive site, JavaScript validation, XML/DTD, PHP MySQL CRUD, JSP & Servlet JDBC portal'],
        hardestModule: 'Session management with cookies and URL rewriting in Servlets',
        passTips: 'Ensure SQL connection string and MySQL driver jar are properly loaded in Tomcat.'
      },
      {
        id: 'cs692',
        code: 'CS692',
        name: 'Deep Learning Lab',
        credits: 1.5,
        category: 'Major Practical (0-0-3)',
        modules: ['12 Experiments: Keras MNIST, Regression, CNN for CIFAR-10, Transfer Learning (VGG16/ResNet50), Keras Tuner, RNN/LSTM sentiment, GANs, Transformers'],
        hardestModule: 'Experiment 5 & 10: Transfer Learning fine-tuning & GAN discriminator/generator loss optimization',
        passTips: 'Freeze convolutional base (`layer.trainable = False`) when performing transfer learning on small datasets.'
      },
      {
        id: 'cs693',
        code: 'CS693A / B / C / D',
        name: 'Professional Elective - II Lab',
        credits: 1.5,
        category: 'Major Practical (0-0-3)',
        modules: [
          'CS693A Image Processing (MATLAB) | CS693B Cloud Lab (AWS/Docker) | CS693C Big Data (Hadoop/Pig/Hive) | CS693D NLP (NLTK/SpaCy)'
        ],
        hardestModule: 'Cloud Docker load balancing or Hadoop MapReduce cluster job execution',
        passTips: 'Know the core commands (e.g., `docker run -p 80:80`, `hadoop jar`, `nltk.word_tokenize`).'
      },
      {
        id: 'cs681',
        code: 'CS681',
        name: 'Project-II',
        credits: 4,
        category: 'Project (0-0-8)',
        modules: ['Prototype implementation, core algorithm development, database integration, mid-term progress demo'],
        hardestModule: 'System integration and automated testing of modules',
        passTips: 'Show live working demo of core modules rather than pure slide presentations.'
      }
    ],
    topRepeatedPYQs: [
      {
        id: 'pyq-s6-1',
        subject: 'Deep Learning (CS602)',
        question: 'Explain why the Vanishing Gradient problem occurs in deep neural networks with Sigmoid activation. How do ReLU activation, Batch Normalization, and Residual connections solve it?',
        marks: 10,
        frequency: 'Repeated 9 times',
        expectedAnswerFormat: 'Sigmoid derivative max is 0.25; chaining fractions across L layers causes gradient -> 0. ReLU derivative is 1 for z>0. ResNet skips connections F(x) + x ensuring gradient flows backward.'
      },
      {
        id: 'pyq-s6-2',
        subject: 'Web & Internet Technology (CS601)',
        question: 'Explain the Servlet Life Cycle with a diagram. Differentiate between doGet() and doPost() methods in HttpServlet.',
        marks: 10,
        frequency: 'Repeated 8 times',
        expectedAnswerFormat: 'Three methods: init(), service(), destroy(). Diagram showing loading, instantiation, init, multi-threaded request processing via service(), and destroy(). Table comparing doGet vs doPost.'
      },
      {
        id: 'pyq-s6-3',
        subject: 'Cyber Law and Ethics (CS605)',
        question: 'What is SQL Injection? Explain In-band, Inferential (Blind), and Out-of-band SQL Injection with attack scenarios. How can prepared statements prevent it?',
        marks: 10,
        frequency: 'Repeated 8 times',
        expectedAnswerFormat: 'Explain arbitrary SQL execution via unvalidated input `\' OR 1=1 --`. Explain parameterized queries where database treats parameters strictly as data values, preventing syntax injection.'
      }
    ],
    formulaMatrix: [
      { topic: 'CNN Output Feature Map Dimension', formula: 'Output Size = ⌊ (W - F + 2P) / S ⌋ + 1' },
      { topic: 'Self-Attention (Transformer)', formula: 'Attention(Q, K, V) = softmax( (Q · Kᵀ) / √dₖ ) · V' },
      { topic: 'LSTM Forget Gate', formula: 'f_t = σ( W_f · [h_{t-1}, x_t] + b_f )' },
      { topic: 'Hadamard Quantum Gate', formula: 'H|0⟩ = (|0⟩ + |1⟩)/√2,   H|1⟩ = (|0⟩ - |1⟩)/√2' }
    ],
    thirtyDayPassStrategy: [
      { week: 'Week 1', focus: 'CS602 Deep Learning: CNN layers, pooling, backprop & LSTM cell architecture' },
      { week: 'Week 2', focus: 'CS601 Web Tech: Servlet lifecycle, JSP implicit objects & PHP MySQL' },
      { week: 'Week 3', focus: 'CS605 Cyber Law: IT Act 2000, SQL Injection, DDoS & Digital Signatures' },
      { week: 'Week 4', focus: 'CS603/CS604 Elective topics + Project-II code preparation' }
    ],
    labVivaBank: [
      { id: 'v6-1', subject: 'Deep Learning Lab (CS692)', experiment: 'CNN Architecture', question: 'What is the purpose of Max Pooling in Convolutional Neural Networks?', answer: 'Max pooling downsamples spatial dimensions, reducing computational parameters and memory overhead while providing spatial translation invariance.' },
      { id: 'v6-2', subject: 'Web Tech Lab (CS691)', experiment: 'Servlets', question: 'How do cookies differ from HTTP sessions in web state management?', answer: 'Cookies are text files stored client-side on the user browser with size limits (~4KB). Sessions store state server-side under a unique JSESSIONID, making them more secure for sensitive data.' }
    ]
  },

  // ==========================================
  // SEMESTER 7 (Total Credits: 16)
  // ==========================================
  7: {
    semesterNumber: 7,
    title: '4th Year 7th Semester',
    academicYear: '4th Year — Specialization Electives, Research, IPR & Project-III',
    totalCredits: 16,
    totalSubjects: 6,
    difficultyRating: 'Professional / Research (4.2/5)',
    passingThreshold: '40% in Theory & Project Defense',
    summary: 'Senior engineering year focusing on Elective-IV (Blockchain / Optimization / Bioinformatics / Robotics), HRD & Organizational Behavior, Research Methodology & IPR, Project-III, Internship, and Rapid Prototyping.',
    subjects: [
      {
        id: 'cs701',
        code: 'CS701A / B / C / D',
        name: 'Professional Elective - IV (Blockchain / Optimization / Bioinformatics / Robotics)',
        credits: 3,
        category: 'Major Elective Theory (3-0-0)',
        modules: [
          'CS701A Blockchain Technology: Merkle trees, PoW, PoS, Bitcoin script, Ethereum EVM, Smart contracts, Solidity, zk-SNARKs',
          'CS701B Optimization Techniques: Simplex & Big-M, Transportation, Game theory, PERT/CPM, Queuing (M/M/1), EOQ',
          'CS701C Bioinformatics: Central dogma, GenBank, BLAST, FASTA, DNA microarrays, Chou-Fasman, HMM gene finding',
          'CS701D Robotics: D-H parameters, Forward/Inverse kinematics, Jacobians, Trajectory planning, Wheeled mobile robots'
        ],
        hardestModule: 'CS701A: Ethereum EVM Gas & Smart Contract Reentrancy | CS701D: Manipulator Jacobians & Singularities',
        passTips: 'For Blockchain: Bitcoin block header + Merkle tree proof. For Optimization: Simplex tableau calculation.'
      },
      {
        id: 'hu_cs701',
        code: 'HU(CS)701',
        name: 'Human Resource Development and Organizational Behavior',
        credits: 2,
        category: 'Minor Theory (2-0-0)',
        modules: [
          'Module 1 (4L): HRM functions, Job analysis, Recruitment, Selection process',
          'Module 2 (6L): Training methods, Performance appraisal, Job evaluation, Wage administration',
          'Module 3 (4L): Organizational Behavior: Motivation (Maslow, Herzberg, McGregor), Leadership styles',
          'Module 4 (5L): Organizational Conflict & Negotiation, Change management',
          'Module 5 (5L): Organizational culture, Diversity, Gender issues in management'
        ],
        hardestModule: 'Module 3 & 4: Herzberg Two-Factor Theory vs Maslow Hierarchy in IT retention',
        passTips: 'Explain performance appraisal methods (360-degree feedback) + conflict resolution styles.'
      },
      {
        id: 'hu702',
        code: 'HU702',
        name: 'Research Methodology and Intellectual Property Rights',
        credits: 1,
        category: 'Value Added Theory (1-0-0)',
        modules: [
          'Module 1 (2L): Research definition, process, literature review, research gaps',
          'Module 2 (2L): Research ethics, Plagiarism detection, Citation practices',
          'Module 3 (2L): Report writing structure, Academic referencing, Bibliography',
          'Module 4 (6L): IPR: Patents (Novelty, Inventive step), Trademarks, Copyrights, Geographical Indications'
        ],
        hardestModule: 'Module 4: Patentability criteria (Novelty, Non-obviousness, Industrial applicability) & Claims drafting',
        passTips: '3 criteria for patent grant + difference between Copyright and Patent.'
      },
      {
        id: 'cs793',
        code: 'CS793',
        name: 'Project-III',
        credits: 6,
        category: 'Project (0-0-12)',
        modules: ['Full software/hardware prototype build, automated testing, benchmarking, user testing, comprehensive thesis report'],
        hardestModule: 'System validation, performance benchmarking & external examiner defense',
        passTips: 'Ensure project architecture, test suite pass rate, and deployed URL are ready.'
      },
      {
        id: 'cs781',
        code: 'CS781',
        name: 'Internship (Minimum 1 Month)',
        credits: 2,
        category: 'Internship (0-0-0)',
        modules: ['Industrial training, corporate deliverables, technical report submission, mentor evaluation certificate'],
        hardestModule: 'Industrial certification & technical report submission',
        passTips: 'Have company certificate, signed attendance log, and project summary report verified.'
      },
      {
        id: 'pr792',
        code: 'PR792',
        name: 'Rapid Prototyping Lab',
        credits: 2,
        category: 'Skill Enhancement Lab (0-0-4)',
        modules: ['10 Lab Tasks: Figma/Balsamiq UI, CRUD web app, Mobile app (Flutter/React Native), REST API consumption, MVP in a Day, Usability testing'],
        hardestModule: 'Task 8 & 10: Building a full MVP in a day with database and frontend',
        passTips: 'Leverage modern frameworks (Vite, React, Tailwind, Supabase) for rapid build delivery.'
      }
    ],
    topRepeatedPYQs: [
      {
        id: 'pyq-s7-1',
        subject: 'Blockchain Technology (CS701A)',
        question: 'Explain how Proof of Work (PoW) consensus prevents Double Spending in Bitcoin. What is the 51% attack and what are its practical limitations?',
        marks: 10,
        frequency: 'Repeated 8 times',
        expectedAnswerFormat: 'Explain nonce discovery satisfying target difficulty. Longest chain rule ensures confirmation depth. 51% attack requires majority hashrate to rewrite recent blocks, which is economically prohibitive.'
      },
      {
        id: 'pyq-s7-2',
        subject: 'Optimization Techniques (CS701B)',
        question: 'Solve the LPP using Simplex Method: Maximize Z = 3x₁ + 5x₂, subject to x₁ + 2x₂ ≤ 20, 3x₁ + x₂ ≤ 30, x₁, x₂ ≥ 0.',
        marks: 10,
        frequency: 'Repeated 8 times',
        expectedAnswerFormat: 'Add slack variables s₁, s₂. Build initial simplex tableau. Compute (Cj - Zj). Identify key column, key row, pivot element. Iterate until all Cj - Zj ≤ 0. Give optimal Z = 55 at (x₁=4, x₂=8).'
      },
      {
        id: 'pyq-s7-3',
        subject: 'Research Methodology & IPR (HU702)',
        question: 'What constitutes Patentable Subject Matter? Explain the three cardinal requirements: Novelty, Non-obviousness, and Industrial Applicability with examples.',
        marks: 10,
        frequency: 'Repeated 8 times',
        expectedAnswerFormat: 'Define Novelty (no prior art publication worldwide), Non-obviousness (inventive step not trivial to person skilled in art), Industrial Applicability (useful physical embodiment). Give software patent guidelines in India.'
      }
    ],
    formulaMatrix: [
      { topic: 'Simplex Pivot Transformation', formula: 'New Row = Old Row - (Pivot Column Entry) · (New Pivot Row)' },
      { topic: 'Bitcoin Block Hash Condition', formula: 'SHA256( SHA256( Block Header ) ) < Target Difficulty' },
      { topic: 'Economic Order Quantity (EOQ)', formula: 'EOQ = √[ (2 · D · S) / H ]  (D=Demand, S=Order Cost, H=Holding Cost)' },
      { topic: 'M/M/1 Queue Length', formula: 'L = ρ / (1 - ρ),  where traffic intensity ρ = λ / μ < 1' }
    ],
    thirtyDayPassStrategy: [
      { week: 'Week 1', focus: 'CS701 Elective theory (Blockchain consensus / Simplex LPP / D-H parameters)' },
      { week: 'Week 2', focus: 'HU702 IPR: Patents, Copyrights, Trademarks & Research ethics' },
      { week: 'Week 3', focus: 'HU(CS)701 HRD: Recruitment, Performance appraisal & Maslow/Herzberg models' },
      { week: 'Week 4', focus: 'Project-III thesis report binding & final viva slide preparation' }
    ],
    labVivaBank: [
      { id: 'v7-1', subject: 'Rapid Prototyping Lab (PR792)', experiment: 'MVP Development', question: 'What is a Minimum Viable Product (MVP) and why is it essential?', answer: 'An MVP is the simplest version of a product that can be released to early adopters to validate core hypotheses and gather maximum feedback with minimal engineering effort.' },
      { id: 'v7-2', subject: 'Project-III (CS793)', experiment: 'Dissertation Defense', question: 'How did you evaluate the performance of your machine learning / software architecture?', answer: 'Explain specific evaluation metrics (Accuracy, Precision, Recall, F1, Latency, Throughput) tested against benchmark datasets or load test scenarios.' }
    ]
  },

  // ==========================================
  // SEMESTER 8 (Total Credits: 8)
  // ==========================================
  8: {
    semesterNumber: 8,
    title: '4th Year 8th Semester',
    academicYear: '4th Year — Capstone Industry Internship & University Grand Viva',
    totalCredits: 8,
    totalSubjects: 2,
    difficultyRating: 'Culmination (4.0/5)',
    passingThreshold: '40% in Grand Viva & Internship Evaluation (Total Degree: 160 Credits)',
    summary: 'The final graduating semester devoted entirely to full-time Industry Internship / Entrepreneurship (CS881) and the University Grand Viva Voce (CS882) covering all 4 years of CSE curricula.',
    subjects: [
      {
        id: 'cs881',
        code: 'CS881',
        name: 'Internship / Entrepreneurship',
        credits: 6,
        category: 'Project Practical (0-0-12, 72 hrs)',
        modules: [
          'Full-time industrial placement or startup incubation',
          'Production-grade code contributions, software release pipelines, agile sprints',
          'Industry mentor appraisal, project technical report, corporate viva'
        ],
        hardestModule: 'Corporate Production Deployment & Final Industry Mentor Evaluation',
        passTips: 'Keep a weekly sprint diary, git commit history, and written recommendation letter from company guide.'
      },
      {
        id: 'cs882',
        code: 'CS882',
        name: 'Grand Viva',
        credits: 2,
        category: 'Grand Viva Practical (0-0-0)',
        modules: [
          'Comprehensive viva voce before university appointed external board covering:',
          '1. Programming & Data Structures (C, Python, Java, Trees, Graphs)',
          '2. Core Systems (Operating Systems, Computer Architecture, Computer Networks, DBMS)',
          '3. Theory & Algorithms (DAA, Automata / FLAT, Compiler Design)',
          '4. Advanced AI, Machine Learning, Cloud & Blockchain Technologies',
          '5. Final year Capstone Project and Industrial Internship defense'
        ],
        hardestModule: 'Core Systems Defense (OS Virtual Memory + Network Subnetting + Automata Pumping Lemma)',
        passTips: 'Revise fundamental definitions, time complexities, ACID properties, and OSI layers thoroughly.'
      }
    ],
    topRepeatedPYQs: [
      {
        id: 'pyq-s8-1',
        subject: 'Grand Viva Core (CS882)',
        question: 'What is the exact sequence of events when you type a URL (e.g. www.google.com) into a web browser and press Enter?',
        marks: 10,
        frequency: 'Universal Grand Viva Question',
        expectedAnswerFormat: 'Browser cache check -> OS DNS resolution -> ARP request for default gateway -> TCP 3-way handshake -> TLS negotiation -> HTTP GET request -> Server processing -> HTTP 200 response -> DOM rendering.'
      },
      {
        id: 'pyq-s8-2',
        subject: 'Grand Viva Core (CS882)',
        question: 'Compare Process vs Thread, and explain how the operating system achieves Context Switching.',
        marks: 10,
        frequency: 'Universal Grand Viva Question',
        expectedAnswerFormat: 'Process has independent virtual address space; threads share address space within same process. Context switch saves CPU registers and PC into PCB/TCB and restores next state.'
      },
      {
        id: 'pyq-s8-3',
        subject: 'Grand Viva Core (CS882)',
        question: 'Explain the difference between P, NP, NP-Complete, and NP-Hard complexity classes with standard examples.',
        marks: 10,
        frequency: 'Universal Grand Viva Question',
        expectedAnswerFormat: 'P: solvable in polynomial time. NP: verifiable in polynomial time. NP-Hard: at least as hard as any problem in NP. NP-Complete: in NP and NP-Hard (e.g. 3-SAT, Traveling Salesman Problem).'
      }
    ],
    formulaMatrix: [
      { topic: 'Total B.Tech Degree Credits', formula: 'Total R-25 Credits = 18 + 22 + 28 + 22.5 + 22 + 23.5 + 16 + 8 = 160.0 Credits' },
      { topic: 'SGPA Calculation', formula: 'SGPA = ∑(Credit_i · GradePoint_i) / ∑(Credit_i)' },
      { topic: 'Cumulative CGPA', formula: 'CGPA = ∑(SGPA_j · TotalCredits_j) / 160' }
    ],
    thirtyDayPassStrategy: [
      { week: 'Week 1', focus: 'Revise Core Fundamentals: Data Structures, C/Java, Operating Systems & DBMS' },
      { week: 'Week 2', focus: 'Revise Networking: OSI layers, Subnetting, TCP/IP & Socket programming' },
      { week: 'Week 3', focus: 'Prepare Internship / Capstone Project presentation slides and architecture diagrams' },
      { week: 'Week 4', focus: 'Conduct mock technical viva drills with peers on AI/ML and DAA complexities' }
    ],
    labVivaBank: [
      { id: 'v8-1', subject: 'Grand Viva (CS882)', experiment: 'Comprehensive Viva', question: 'What is the Halting Problem and why is it undecidable?', answer: 'The Halting Problem proves that no general algorithm can determine whether an arbitrary program will eventually halt or run forever on a given input, as proven by Alan Turing using diagonalization.' },
      { id: 'v8-2', subject: 'Internship Viva (CS881)', experiment: 'Industry Appraisal', question: 'What were the key architectural trade-offs you encountered during your internship development?', answer: 'Discuss concrete engineering decisions, such as SQL vs NoSQL selection, synchronous REST vs asynchronous message queues, or client-side vs server-side rendering.' }
    ]
  }
};

/**
 * Intelligent Analyzer Function:
 * Analyzes any semester input (number or string like "4th sem", "Sem 6", "7th semester")
 * and returns the finalized, structured academic blueprint from R-25 curriculum.
 */
export const analyzeSemesterSyllabus = (input?: number | string): SemesterData => {
  if (!input) return BTECH_SEMESTER_DATA[3];

  let semNum = 3;
  if (typeof input === 'number') {
    semNum = Math.min(8, Math.max(1, input));
  } else if (typeof input === 'string') {
    const match = input.match(/[1-8]/);
    if (match) {
      semNum = parseInt(match[0], 10);
    }
  }

  return BTECH_SEMESTER_DATA[semNum] || BTECH_SEMESTER_DATA[3];
};
