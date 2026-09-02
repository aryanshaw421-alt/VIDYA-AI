import { ExamGoal, DayPlan, Chapter, ExamStream } from '../types';

export const INITIAL_GOALS: Record<ExamStream, ExamGoal> = {
  btech: {
    id: 'goal-btech-3rd-sem',
    stream: 'btech',
    title: 'B.Tech CSE 3rd Sem (MAKAUT / Autonomous)',
    subtitle: 'Data Structures, Operating Systems, DBMS & Discrete Math',
    targetExamDate: '2026-11-20',
    daysRemaining: 18,
    totalChapters: 16,
    syllabusCoveredPercentage: 42,
    currentStreak: 5,
    dailyHoursTarget: 3.5,
    iconName: 'Cpu',
    streamBadge: 'Engineering & College'
  },
  cbse12: {
    id: 'goal-cbse-12th',
    stream: 'cbse12',
    title: 'CBSE Class 12 Board (PCM)',
    subtitle: 'Physics (Optics & Electrodynamics) + Calculus & Organic Chem',
    targetExamDate: '2026-12-05',
    daysRemaining: 24,
    totalChapters: 14,
    syllabusCoveredPercentage: 58,
    currentStreak: 8,
    dailyHoursTarget: 4.0,
    iconName: 'GraduationCap',
    streamBadge: 'Class 12th Board'
  },
  ssc: {
    id: 'goal-ssc-cgl',
    stream: 'ssc',
    title: 'SSC CGL 2026 Tier-1 Mission',
    subtitle: 'Quantitative Aptitude, Logical Reasoning, GK & English',
    targetExamDate: '2026-10-15',
    daysRemaining: 30,
    totalChapters: 22,
    syllabusCoveredPercentage: 35,
    currentStreak: 4,
    dailyHoursTarget: 4.5,
    iconName: 'Target',
    streamBadge: 'Govt / Competitive'
  }
};

export const BTECH_CHAPTERS: Chapter[] = [
  {
    id: 'btech-dsa-trees',
    name: 'Trees, AVL & Binary Search Trees',
    subject: 'Data Structures & Algorithms',
    stream: 'btech',
    weightagePercentage: 22,
    priority: 'HIGH',
    estHours: 6,
    subtopics: ['BST Insert & Delete', 'AVL Rotations (LL, RR, LR, RL)', 'Tree Traversals (In/Pre/Post)', 'Threaded Binary Trees'],
    pyqOccurrenceCount: 9,
    passingImpactScore: 95
  },
  {
    id: 'btech-dsa-graphs',
    name: 'Graph Algorithms & Minimum Spanning Trees',
    subject: 'Data Structures & Algorithms',
    stream: 'btech',
    weightagePercentage: 18,
    priority: 'HIGH',
    estHours: 5,
    subtopics: ['BFS & DFS Traversals', "Dijkstra's Algorithm", "Prim's & Kruskal's MST", 'Topological Sort'],
    pyqOccurrenceCount: 8,
    passingImpactScore: 90
  },
  {
    id: 'btech-os-cpu-sched',
    name: 'CPU Scheduling & Deadlocks',
    subject: 'Operating Systems',
    stream: 'btech',
    weightagePercentage: 20,
    priority: 'HIGH',
    estHours: 5.5,
    subtopics: ['FCFS, SJF, Round Robin & Priority', "Banker's Algorithm for Deadlock Avoidance", 'Deadlock Detection & Recovery', 'Gantt Charts & Average Turnaround Time'],
    pyqOccurrenceCount: 11,
    passingImpactScore: 98
  },
  {
    id: 'btech-os-memory',
    name: 'Memory Management & Virtual Memory',
    subject: 'Operating Systems',
    stream: 'btech',
    weightagePercentage: 16,
    priority: 'MEDIUM',
    estHours: 4.5,
    subtopics: ['Paging and Segmentation', 'Page Replacement (FIFO, LRU, Optimal)', 'Thrashing & Working Set Model', 'TLB hit ratio numericals'],
    pyqOccurrenceCount: 7,
    passingImpactScore: 82
  },
  {
    id: 'btech-dbms-sql-norm',
    name: 'Normalization & SQL Relational Algebra',
    subject: 'DBMS',
    stream: 'btech',
    weightagePercentage: 15,
    priority: 'MEDIUM',
    estHours: 4,
    subtopics: ['1NF, 2NF, 3NF, BCNF Decomposition', 'Lossless Join & Dependency Preservation', 'Nested Subqueries & Joins', 'Relational Algebra Operators'],
    pyqOccurrenceCount: 7,
    passingImpactScore: 80
  },
  {
    id: 'btech-math-graph-theory',
    name: 'Recurrence Relations & Graph Isomorphism',
    subject: 'Discrete Mathematics',
    stream: 'btech',
    weightagePercentage: 14,
    priority: 'LOW',
    estHours: 3.5,
    subtopics: ['Master Theorem for Recurrences', 'Eulerian & Hamiltonian Circuits', 'Planar Graphs & Euler Formula', 'Generating Functions'],
    pyqOccurrenceCount: 5,
    passingImpactScore: 70
  }
];

export const CBSE_CHAPTERS: Chapter[] = [
  {
    id: 'cbse-phy-electro',
    name: 'Electric Charges, Fields & Gauss Law',
    subject: 'Physics',
    stream: 'cbse12',
    weightagePercentage: 20,
    priority: 'HIGH',
    estHours: 5,
    subtopics: ["Gauss's Theorem Applications", 'Electric Dipole in Uniform Field', 'Capacitors with Dielectrics', 'Equipotential Surfaces & Numericals'],
    pyqOccurrenceCount: 12,
    passingImpactScore: 94
  },
  {
    id: 'cbse-phy-optics',
    name: 'Ray & Wave Optics',
    subject: 'Physics',
    stream: 'cbse12',
    weightagePercentage: 22,
    priority: 'HIGH',
    estHours: 6.5,
    subtopics: ["Lens Maker's Formula Derivation", 'Compound Microscope & Telescope Ray Diagrams', "Young's Double Slit Interference Derivation", "Huygens' Principle Reflection & Refraction Proof"],
    pyqOccurrenceCount: 14,
    passingImpactScore: 98
  },
  {
    id: 'cbse-math-calculus',
    name: 'Definite Integrals & Differential Equations',
    subject: 'Mathematics',
    stream: 'cbse12',
    weightagePercentage: 25,
    priority: 'HIGH',
    estHours: 7,
    subtopics: ['Properties of Definite Integrals', 'Area Under Curves (Parabola & Line)', 'Linear Differential Equations with IF', 'Homogeneous Equations'],
    pyqOccurrenceCount: 15,
    passingImpactScore: 99
  },
  {
    id: 'cbse-chem-organic',
    name: 'Aldehydes, Ketones & Carboxylic Acids',
    subject: 'Chemistry',
    stream: 'cbse12',
    weightagePercentage: 18,
    priority: 'MEDIUM',
    estHours: 4.5,
    subtopics: ['Aldol Condensation & Cannizzaro Reaction', 'Rosenmund & Stephen Reduction', 'Tests to distinguish Aldehydes (Tollens & Fehling)', 'Acidic strength comparison of halo-acids'],
    pyqOccurrenceCount: 10,
    passingImpactScore: 88
  },
  {
    id: 'cbse-math-vectors3d',
    name: '3D Geometry & Vectors',
    subject: 'Mathematics',
    stream: 'cbse12',
    weightagePercentage: 15,
    priority: 'MEDIUM',
    estHours: 4,
    subtopics: ['Shortest Distance between Skew Lines', 'Equation of Plane & Line Intersections', 'Dot & Cross Product Proofs', 'Direction Cosines & Ratios'],
    pyqOccurrenceCount: 8,
    passingImpactScore: 84
  }
];

export const SSC_CHAPTERS: Chapter[] = [
  {
    id: 'ssc-quant-arithmetic',
    name: 'Percentage, Profit-Loss & Simple/Compound Interest',
    subject: 'Quantitative Aptitude',
    stream: 'ssc',
    weightagePercentage: 24,
    priority: 'HIGH',
    estHours: 6,
    subtopics: ['Successive Percentage & Discount Tricks', 'CI vs SI difference formula', 'Dishonest Shopkeeper problems', 'Installments calculations'],
    pyqOccurrenceCount: 18,
    passingImpactScore: 96
  },
  {
    id: 'ssc-quant-speed-time',
    name: 'Time, Speed, Distance & Boats/Streams',
    subject: 'Quantitative Aptitude',
    stream: 'ssc',
    weightagePercentage: 18,
    priority: 'HIGH',
    estHours: 4.5,
    subtopics: ['Relative Speed & Train Crossing', 'Upstream/Downstream average speed', 'Circular Track race problems', 'Late vs Early time offset formulas'],
    pyqOccurrenceCount: 14,
    passingImpactScore: 90
  },
  {
    id: 'ssc-reasoning-syllogism',
    name: 'Syllogism, Coding-Decoding & Analogy',
    subject: 'General Intelligence',
    stream: 'ssc',
    weightagePercentage: 22,
    priority: 'HIGH',
    estHours: 4,
    subtopics: ['Only / A few Possibility cases in Syllogism', 'Alphabet pattern shift matrices', 'Blood Relations coded puzzles', 'Matrix & Direction tests'],
    pyqOccurrenceCount: 16,
    passingImpactScore: 92
  },
  {
    id: 'ssc-english-grammar',
    name: 'Spotting Errors, Cloze Test & Idioms',
    subject: 'English Comprehension',
    stream: 'ssc',
    weightagePercentage: 20,
    priority: 'HIGH',
    estHours: 4,
    subtopics: ['Subject-Verb Agreement Golden Rules', 'Active-Passive voice transformations', 'Direct-Indirect Narration', '100 Most Repeated SSC Idioms'],
    pyqOccurrenceCount: 15,
    passingImpactScore: 89
  },
  {
    id: 'ssc-gk-polity',
    name: 'Indian Polity & Articles of Constitution',
    subject: 'General Awareness',
    stream: 'ssc',
    weightagePercentage: 16,
    priority: 'MEDIUM',
    estHours: 3.5,
    subtopics: ['Fundamental Rights (Art 12-35)', 'Preamble & Amendments (42nd/44th/105th)', 'President & Governor ordinance powers', 'Writs under Article 32 & 226'],
    pyqOccurrenceCount: 11,
    passingImpactScore: 78
  }
];

export const INITIAL_ROADMAPS: Record<ExamStream, DayPlan[]> = {
  btech: [
    {
      dayNumber: 1,
      dateStr: 'Day 1 (Completed)',
      status: 'completed',
      title: 'AVL Rotations & BST Balancing',
      subject: 'Data Structures',
      chapterId: 'btech-dsa-trees',
      chapterName: 'Trees & Search Trees',
      durationMinutes: 120,
      type: 'theory',
      priority: 'HIGH',
      weightageScore: 22,
      topics: [
        { id: 't1', name: 'Understand Left-Left (LL) and Right-Right (RR) Rotations', completed: true },
        { id: 't2', name: 'Solve LR & RL Double Rotations by Hand', completed: true },
        { id: 't3', name: 'Practice MAKAUT 2022 10-Mark AVL Insertion Question', completed: true }
      ],
      notes: 'Mastered balance factors (-1, 0, 1) and pivot node determination.'
    },
    {
      dayNumber: 2,
      dateStr: 'Day 2 (Completed)',
      status: 'completed',
      title: 'Graph Traversals (BFS & DFS) + Prim/Kruskal',
      subject: 'Data Structures',
      chapterId: 'btech-dsa-graphs',
      chapterName: 'Graph Algorithms',
      durationMinutes: 110,
      type: 'numerical',
      priority: 'HIGH',
      weightageScore: 18,
      topics: [
        { id: 't4', name: 'Trace BFS with Queue & DFS with Stack/Recursion', completed: true },
        { id: 't5', name: "Kruskal's Disjoint Set Union (DSU) Cycle Check", completed: true },
        { id: 't6', name: "Prim's Algorithm table tracing for 6-node weighted graph", completed: true }
      ],
      notes: 'Remember: Prim grows a tree, Kruskal picks globally smallest valid edges.'
    },
    {
      dayNumber: 3,
      dateStr: 'Day 3 (Today)',
      status: 'in_progress',
      title: 'CPU Scheduling Algorithms + Gantt Charts',
      subject: 'Operating Systems',
      chapterId: 'btech-os-cpu-sched',
      chapterName: 'CPU Scheduling & Deadlocks',
      durationMinutes: 140,
      type: 'numerical',
      priority: 'HIGH',
      weightageScore: 20,
      topics: [
        { id: 't7', name: 'Round Robin (Time Quantum = 2ms) Turnaround & Waiting Time', completed: true },
        { id: 't8', name: 'Shortest Job First (SJF) Preemptive / SRTF Edge Cases', completed: false },
        { id: 't9', name: 'Priority Inversion Problem & Priority Inheritance Solution', completed: false },
        { id: 't10', name: 'Solve 3 previous year 5-mark calculation questions', completed: false }
      ],
      notes: 'High yield! At least one 10-mark Gantt chart problem comes every single semester.'
    },
    {
      dayNumber: 4,
      dateStr: 'Day 4 (Tomorrow)',
      status: 'upcoming',
      title: "Banker's Algorithm & Deadlock Avoidance",
      subject: 'Operating Systems',
      chapterId: 'btech-os-cpu-sched',
      chapterName: 'CPU Scheduling & Deadlocks',
      durationMinutes: 100,
      type: 'numerical',
      priority: 'HIGH',
      weightageScore: 15,
      topics: [
        { id: 't11', name: 'Calculate Need Matrix = Max - Allocation', completed: false },
        { id: 't12', name: 'Execute Safety Algorithm Step-by-Step for Safe State', completed: false },
        { id: 't13', name: 'Resource-Request algorithm grant test scenario', completed: false }
      ],
      notes: 'Focus on matrix arithmetic accuracy.'
    },
    {
      dayNumber: 5,
      dateStr: 'Day 5',
      status: 'upcoming',
      title: 'Paging, TLB Numerical & Page Fault Replacement (LRU / FIFO)',
      subject: 'Operating Systems',
      chapterId: 'btech-os-memory',
      chapterName: 'Memory Management',
      durationMinutes: 110,
      type: 'practice',
      priority: 'MEDIUM',
      weightageScore: 16,
      topics: [
        { id: 't14', name: 'Effective Memory Access Time (EMAT) formula with TLB Hit %', completed: false },
        { id: 't15', name: 'Trace LRU and Optimal Page Replacement for 3 & 4 frames', completed: false },
        { id: 't16', name: "Belady's Anomaly proof in FIFO page replacement", completed: false }
      ]
    },
    {
      dayNumber: 6,
      dateStr: 'Day 6',
      status: 'upcoming',
      title: 'DBMS Normalization (1NF to BCNF) & Dependency Preservation',
      subject: 'DBMS',
      chapterId: 'btech-dbms-sql-norm',
      chapterName: 'Normalization',
      durationMinutes: 120,
      type: 'theory',
      priority: 'MEDIUM',
      weightageScore: 15,
      topics: [
        { id: 't17', name: 'Closure of Functional Dependencies & Candidate Key Finding', completed: false },
        { id: 't18', name: '3NF vs BCNF definition differences (Superkey in LHS)', completed: false },
        { id: 't19', name: 'Lossless join decomposition validation test', completed: false }
      ]
    },
    {
      dayNumber: 7,
      dateStr: 'Day 7',
      status: 'upcoming',
      title: 'Mid-Syllabus Mock Test & Viva Rapid Fire',
      subject: 'Combined Revision',
      chapterId: 'btech-dsa-trees',
      chapterName: 'All Modules 1-3',
      durationMinutes: 90,
      type: 'mock_test',
      priority: 'HIGH',
      weightageScore: 25,
      topics: [
        { id: 't20', name: 'Attempt 20 Timed Technical MCQs (Negative marking enabled)', completed: false },
        { id: 't21', name: 'Self-evaluate 2 Long-form theory derivations', completed: false },
        { id: 't22', name: 'AI Weak Area Analysis & Dynamic Schedule Recalculation', completed: false }
      ]
    }
  ],

  cbse12: [
    {
      dayNumber: 1,
      dateStr: 'Day 1 (Completed)',
      status: 'completed',
      title: "Gauss's Law Applications & Electric Dipole",
      subject: 'Physics',
      chapterId: 'cbse-phy-electro',
      chapterName: 'Electrostatics',
      durationMinutes: 130,
      type: 'theory',
      priority: 'HIGH',
      weightageScore: 20,
      topics: [
        { id: 'c1', name: 'Field due to infinitely long charged wire using Gauss law', completed: true },
        { id: 'c2', name: 'Field due to uniformly charged infinite sheet', completed: true },
        { id: 'c3', name: 'Torque and Potential Energy of dipole in uniform field', completed: true }
      ]
    },
    {
      dayNumber: 2,
      dateStr: 'Day 2 (Completed)',
      status: 'completed',
      title: "Lens Maker's Formula & Optical Instruments",
      subject: 'Physics',
      chapterId: 'cbse-phy-optics',
      chapterName: 'Ray Optics',
      durationMinutes: 120,
      type: 'numerical',
      priority: 'HIGH',
      weightageScore: 22,
      topics: [
        { id: 'c4', name: "Lens Maker's Formula Derivation with sign convention", completed: true },
        { id: 'c5', name: 'Compound Microscope ray diagram for normal & near point', completed: true },
        { id: 'c6', name: 'Astronomical Telescope magnifying power derivations', completed: true }
      ]
    },
    {
      dayNumber: 3,
      dateStr: 'Day 3 (Today)',
      status: 'in_progress',
      title: 'Definite Integrals Properties & King Rule',
      subject: 'Mathematics',
      chapterId: 'cbse-math-calculus',
      chapterName: 'Calculus',
      durationMinutes: 150,
      type: 'numerical',
      priority: 'HIGH',
      weightageScore: 25,
      topics: [
        { id: 'c7', name: 'Integration Property: ∫ f(x)dx = ∫ f(a+b-x)dx (King Rule)', completed: true },
        { id: 'c8', name: 'Solve ∫ (0 to π/2) log(sin x) dx standard 6-mark proof', completed: false },
        { id: 'c9', name: 'Area between standard Parabola and intersecting Line', completed: false }
      ]
    },
    {
      dayNumber: 4,
      dateStr: 'Day 4 (Tomorrow)',
      status: 'upcoming',
      title: 'Aldehydes & Ketones Named Reactions (Aldol, Cannizzaro, Clemmensen)',
      subject: 'Chemistry',
      chapterId: 'cbse-chem-organic',
      chapterName: 'Organic Chemistry',
      durationMinutes: 120,
      type: 'theory',
      priority: 'MEDIUM',
      weightageScore: 18,
      topics: [
        { id: 'c10', name: 'Aldol Condensation & Cross-Aldol reaction mechanisms', completed: false },
        { id: 'c11', name: 'Cannizzaro disproportionation reaction criteria', completed: false },
        { id: 'c12', name: 'Tollens and Fehlings test distinctions', completed: false }
      ]
    },
    {
      dayNumber: 5,
      dateStr: 'Day 5',
      status: 'upcoming',
      title: '3D Geometry: Shortest Distance Between Skew Lines',
      subject: 'Mathematics',
      chapterId: 'cbse-math-vectors3d',
      chapterName: '3D Geometry',
      durationMinutes: 100,
      type: 'numerical',
      priority: 'MEDIUM',
      weightageScore: 15,
      topics: [
        { id: 'c13', name: 'Vector form: d = |(a2 - a1) . (b1 × b2)| / |b1 × b2|', completed: false },
        { id: 'c14', name: 'Cartesian determinant formula for shortest distance', completed: false },
        { id: 'c15', name: 'Solve 4 previous board questions (2020-2024)', completed: false }
      ]
    }
  ],

  ssc: [
    {
      dayNumber: 1,
      dateStr: 'Day 1 (Completed)',
      status: 'completed',
      title: 'Percentage Fractions & Successive Discount Speed Hacks',
      subject: 'Quantitative Aptitude',
      chapterId: 'ssc-quant-arithmetic',
      chapterName: 'Arithmetic Mastery',
      durationMinutes: 120,
      type: 'practice',
      priority: 'HIGH',
      weightageScore: 24,
      topics: [
        { id: 's1', name: 'Fraction to percentage memory table (1/2 to 1/20)', completed: true },
        { id: 's2', name: 'a + b + ab/100 successive change shortcuts', completed: true },
        { id: 's3', name: 'Dishonest dealer false weight multiplier tricks', completed: true }
      ]
    },
    {
      dayNumber: 2,
      dateStr: 'Day 2 (Completed)',
      status: 'completed',
      title: 'Syllogism: Only a Few & Possibility Cases',
      subject: 'Logical Reasoning',
      chapterId: 'ssc-reasoning-syllogism',
      chapterName: 'Reasoning Puzzles',
      durationMinutes: 100,
      type: 'practice',
      priority: 'HIGH',
      weightageScore: 22,
      topics: [
        { id: 's4', name: 'Difference between "Only A are B" vs "Some A are B"', completed: true },
        { id: 's5', name: 'Negative conclusions & Venn Diagram cross verification', completed: true },
        { id: 's6', name: 'Solve 25 rapid-fire questions in 15 minutes', completed: true }
      ]
    },
    {
      dayNumber: 3,
      dateStr: 'Day 3 (Today)',
      status: 'in_progress',
      title: 'Time-Speed-Distance & Relative Speed in Trains',
      subject: 'Quantitative Aptitude',
      chapterId: 'ssc-quant-speed-time',
      chapterName: 'Speed & Distance',
      durationMinutes: 130,
      type: 'practice',
      priority: 'HIGH',
      weightageScore: 18,
      topics: [
        { id: 's7', name: 'km/h to m/s conversion multiplying factor (5/18)', completed: true },
        { id: 's8', name: 'Two trains moving in same vs opposite directions (L1+L2)/(S1±S2)', completed: false },
        { id: 's9', name: 'Average speed formula 2xy/(x+y) for equal distance', completed: false },
        { id: 's10', name: 'Late vs early arrival time offset equation shortcuts', completed: false }
      ]
    },
    {
      dayNumber: 4,
      dateStr: 'Day 4 (Tomorrow)',
      status: 'upcoming',
      title: 'English Grammar Golden Rules & Spotting Error Blitz',
      subject: 'English Comprehension',
      chapterId: 'ssc-english-grammar',
      chapterName: 'English Section',
      durationMinutes: 110,
      type: 'practice',
      priority: 'HIGH',
      weightageScore: 20,
      topics: [
        { id: 's11', name: 'Rule of "Neither.. nor", "Either.. or" & Subject proximity', completed: false },
        { id: 's12', name: 'Inversion rules with "Scarcely / Hardly / No sooner"', completed: false },
        { id: 's13', name: '50 most repeated SSC one-word substitutions and idioms', completed: false }
      ]
    },
    {
      dayNumber: 5,
      dateStr: 'Day 5',
      status: 'upcoming',
      title: 'Indian Polity: Fundamental Rights & Supreme Court Writs',
      subject: 'General Awareness',
      chapterId: 'ssc-gk-polity',
      chapterName: 'General Awareness',
      durationMinutes: 90,
      type: 'theory',
      priority: 'MEDIUM',
      weightageScore: 16,
      topics: [
        { id: 's14', name: 'Article 14-18 Right to Equality articles checklist', completed: false },
        { id: 's15', name: '5 Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto', completed: false },
        { id: 's16', name: 'Article 32 vs Article 226 constitutional differences', completed: false }
      ]
    }
  ]
};
