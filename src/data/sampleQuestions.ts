import { TestQuestion, ExamStream } from '../types';

export const SAMPLE_QUESTIONS: Record<ExamStream, TestQuestion[]> = {
  btech: [
    {
      id: 'bt-q1',
      stream: 'btech',
      subject: 'Data Structures',
      topic: 'AVL Trees',
      question: 'In an AVL tree with root at height h, what is the balance factor defined as, and what is the valid range for every node in a balanced AVL tree?',
      options: [
        'Height(Left) - Height(Right) with allowed range {-1, 0, +1}',
        'Height(Left) + Height(Right) with allowed range {0, 1, 2}',
        'Number of left nodes - Number of right nodes with range {-2 to +2}',
        'Height(Right) / Height(Left) with allowed ratio {0.5 to 1.5}'
      ],
      correctOptionIndex: 0,
      marks: 2,
      negativeMarks: 0.5,
      difficulty: 'Medium',
      pyqTag: 'MAKAUT 2023 / Gate CSE',
      explanation: 'The balance factor of any node in an AVL tree is defined as the height of its left subtree minus the height of its right subtree (BF = H_left - H_right). For a strictly balanced AVL tree, BF must be in {-1, 0, +1}.',
      stepByStepSolution: [
        'Step 1: Understand AVL Property: AVL is a self-balancing binary search tree.',
        'Step 2: Balance Factor Formula: BF(node) = Height(left_subtree) - Height(right_subtree).',
        'Step 3: Allowed Set: {-1, 0, 1}. If BF becomes 2 or -2 after insertion/deletion, tree rebalancing rotations (LL, RR, LR, RL) are triggered.'
      ]
    },
    {
      id: 'bt-q2',
      stream: 'btech',
      subject: 'Operating Systems',
      topic: 'Deadlock & Banker Algorithm',
      question: 'Which of the following conditions is NOT one of Coffman’s four necessary conditions for a deadlock to occur?',
      options: [
        'Mutual Exclusion',
        'Hold and Wait',
        'Preemptive Resource Allocation',
        'Circular Wait'
      ],
      correctOptionIndex: 2,
      marks: 2,
      negativeMarks: 0.5,
      difficulty: 'Easy',
      pyqTag: 'MAKAUT 2022',
      explanation: 'The four necessary Coffman conditions for deadlock are: 1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption (resources cannot be forcibly taken away), and 4. Circular Wait. Preemption actually BREAKS deadlock, not causes it.',
      stepByStepSolution: [
        'Step 1: Recall the 4 Coffman conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.',
        'Step 2: "No Preemption" means once allocated, a resource is held until voluntary release.',
        'Step 3: Therefore, "Preemptive Resource Allocation" is not a condition for deadlock.'
      ]
    },
    {
      id: 'bt-q3',
      stream: 'btech',
      subject: 'Data Structures',
      topic: 'Graph Algorithms',
      question: "What is the worst-case time complexity of Dijkstra's single-source shortest path algorithm implemented using a Binary Min-Heap for a graph with V vertices and E edges?",
      codeSnippet: `// Dijkstra with Min-Heap
priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
// dist[v] = min(dist[v], dist[u] + weight(u,v))`,
      options: [
        'O(V^2)',
        'O((V + E) log V)',
        'O(V * E)',
        'O(E log E + V^2)'
      ],
      correctOptionIndex: 1,
      marks: 2,
      negativeMarks: 0.5,
      difficulty: 'Medium',
      pyqTag: 'Semester Exam 2024',
      explanation: 'With a Binary Min-Heap (or priority queue), extracting the minimum vertex takes O(V log V) and updating distances for all edges (decrease-key operations) takes O(E log V). Hence total complexity is O((V + E) log V).',
      stepByStepSolution: [
        'Heap insertion/extraction for V vertices: V * log V.',
        'Edge relaxation checks: E * log V.',
        'Combined Big-O: O((V + E) log V).'
      ]
    },
    {
      id: 'bt-q4',
      stream: 'btech',
      subject: 'Operating Systems',
      topic: 'Memory Management',
      question: 'If memory access time is 100 ns and access to the Translation Lookaside Buffer (TLB) takes 20 ns, what is the Effective Memory Access Time (EMAT) if the TLB hit ratio is 85% with single-level paging?',
      options: [
        '135 ns',
        '115 ns',
        '145 ns',
        '120 ns'
      ],
      correctOptionIndex: 0,
      marks: 3,
      negativeMarks: 0.75,
      difficulty: 'Hard',
      pyqTag: 'MAKAUT 2021 Numerical',
      explanation: 'EMAT = Hit_ratio * (TLB_time + Mem_time) + (1 - Hit_ratio) * (TLB_time + 2 * Mem_time).',
      stepByStepSolution: [
        'Formula: EMAT = h * (c + m) + (1 - h) * (c + 2m)',
        'Where h = 0.85, c (TLB search) = 20 ns, m (Main memory access) = 100 ns',
        'On TLB Hit: 20 + 100 = 120 ns',
        'On TLB Miss: 20 + 100 (read page table) + 100 (read physical memory frame) = 220 ns',
        'EMAT = 0.85 * 120 + 0.15 * 220 = 102 + 33 = 135 ns.'
      ]
    },
    {
      id: 'bt-q5',
      stream: 'btech',
      subject: 'DBMS',
      topic: 'Normalization',
      question: 'A relational schema R(A, B, C, D) with functional dependencies F = {A -> B, B -> C, C -> D} is decomposed into R1(A, B), R2(B, C), R3(C, D). This decomposition is:',
      options: [
        'Both Lossless Join and Dependency Preserving',
        'Lossless Join but NOT Dependency Preserving',
        'Dependency Preserving but NOT Lossless Join',
        'Neither Lossless Join nor Dependency Preserving'
      ],
      correctOptionIndex: 0,
      marks: 2,
      negativeMarks: 0.5,
      difficulty: 'Medium',
      pyqTag: 'Autonomous University 2023',
      explanation: 'All original dependencies A->B, B->C, C->D are preserved in their respective sub-relations. Common attribute in R1 and R2 is B (which is candidate key of R2). Common attribute between (R1 U R2) and R3 is C (candidate key of R3). Hence it is both lossless and dependency preserving.',
      stepByStepSolution: [
        'Dependency Preservation: F1={A->B}, F2={B->C}, F3={C->D}. Union of Fi covers all of F.',
        'Lossless Check: R1 ∩ R2 = B -> B is a superkey of R2(B,C). So R1 U R2 is lossless.',
        '(R1 U R2) ∩ R3 = C -> C is a superkey of R3(C,D). So decomposition is fully lossless.'
      ]
    }
  ],

  cbse12: [
    {
      id: 'cbse-q1',
      stream: 'cbse12',
      subject: 'Physics',
      topic: 'Ray Optics',
      question: 'A convex lens of focal length 20 cm made of glass (refractive index 1.5) is immersed in water (refractive index 4/3). Its new focal length in water will be:',
      options: [
        '80 cm',
        '40 cm',
        '20 cm',
        '10 cm'
      ],
      correctOptionIndex: 0,
      marks: 3,
      negativeMarks: 0.5,
      difficulty: 'Medium',
      pyqTag: 'CBSE Board 2023',
      explanation: "By Lens Maker's Formula: 1/f_air = (1.5 - 1)(1/R1 - 1/R2) = 0.5 * K. In water: 1/f_water = ((1.5/(4/3)) - 1) * K = (9/8 - 1) * K = 1/8 * K. So f_water / f_air = 0.5 / (1/8) = 4. f_water = 4 * 20 = 80 cm.",
      stepByStepSolution: [
        "Step 1: Write Lens Maker formula in air: 1/f_a = (μ_g - 1)(1/R1 - 1/R2).",
        "Step 2: In liquid: 1/f_l = (μ_g/μ_l - 1)(1/R1 - 1/R2).",
        "Step 3: Ratio f_l / f_a = (1.5 - 1) / ((1.5/(4/3)) - 1) = 0.5 / (0.125) = 4.",
        "Step 4: Focal length in water = 4 * 20 cm = 80 cm."
      ]
    },
    {
      id: 'cbse-q2',
      stream: 'cbse12',
      subject: 'Mathematics',
      topic: 'Definite Integrals',
      question: 'Evaluate the definite integral: I = ∫ [0 to π/2] (√sin x / (√sin x + √cos x)) dx',
      options: [
        'π/4',
        'π/2',
        '1',
        '0'
      ],
      correctOptionIndex: 0,
      marks: 2,
      negativeMarks: 0.25,
      difficulty: 'Easy',
      pyqTag: 'CBSE Board 2024 / NCERT Exemplar',
      explanation: 'Applying the King property ∫[0 to a] f(x) dx = ∫[0 to a] f(a-x) dx gives I = ∫[0 to π/2] (√cos x / (√cos x + √sin x)) dx. Adding the two equations: 2I = ∫[0 to π/2] 1 dx = π/2 => I = π/4.',
      stepByStepSolution: [
        'Step 1: Label original equation as I = ∫[0 to π/2] (√sin x) / (√sin x + √cos x) dx  --- (1)',
        'Step 2: Apply property f(π/2 - x). Since sin(π/2 - x) = cos x and cos(π/2 - x) = sin x:',
        'I = ∫[0 to π/2] (√cos x) / (√cos x + √sin x) dx  --- (2)',
        'Step 3: Add (1) and (2): 2I = ∫[0 to π/2] 1 dx = [x][0 to π/2] = π/2.',
        'Step 4: I = π/4.'
      ]
    },
    {
      id: 'cbse-q3',
      stream: 'cbse12',
      subject: 'Chemistry',
      topic: 'Organic Reactions',
      question: 'Which of the following compounds will undergo Cannizzaro reaction on treatment with concentrated 50% NaOH solution?',
      options: [
        'Formaldehyde (HCHO) and Benzaldehyde (C6H5CHO)',
        'Acetaldehyde (CH3CHO)',
        'Acetone (CH3COCH3)',
        'Propanal (CH3CH2CHO)'
      ],
      correctOptionIndex: 0,
      marks: 2,
      negativeMarks: 0.5,
      difficulty: 'Easy',
      pyqTag: 'CBSE 2022 All India',
      explanation: 'The Cannizzaro reaction is given only by aldehydes that DO NOT contain any α-hydrogen atoms (e.g., Formaldehyde, Benzaldehyde, Trimethylacetaldehyde). Acetaldehyde and Propanal undergo Aldol condensation because they possess α-hydrogens.',
      stepByStepSolution: [
        'Condition for Cannizzaro: Aldehyde with zero α-hydrogens.',
        'HCHO has no α-carbon -> 0 α-hydrogens.',
        'C6H5CHO has no hydrogen on the carbonyl-adjacent ring carbon -> 0 α-hydrogens.',
        'Under 50% NaOH, one molecule oxidizes to sodium carboxylate and another reduces to alcohol (disproportionation).'
      ]
    }
  ],

  ssc: [
    {
      id: 'ssc-q1',
      stream: 'ssc',
      subject: 'Quantitative Aptitude',
      topic: 'Time Speed Distance',
      question: 'A train 300 meters long is running at a speed of 72 km/h. How much time (in seconds) will it take to cross an electric pole and a 200m long platform respectively?',
      options: [
        '15 seconds and 25 seconds',
        '12 seconds and 20 seconds',
        '18 seconds and 30 seconds',
        '15 seconds and 20 seconds'
      ],
      correctOptionIndex: 0,
      marks: 2,
      negativeMarks: 0.5,
      difficulty: 'Easy',
      pyqTag: 'SSC CGL 2023 Tier-1 Shift 2',
      explanation: 'Speed = 72 * (5/18) = 20 m/s. Crossing pole: Time = Train length / Speed = 300 / 20 = 15 sec. Crossing platform: Time = (Train length + Platform) / Speed = (300 + 200) / 20 = 500 / 20 = 25 sec.',
      stepByStepSolution: [
        'Speed Conversion: 72 km/h = 72 * (5/18) = 20 m/s.',
        'Time to cross pole (point object): T1 = 300 m / 20 m/s = 15 seconds.',
        'Time to cross platform (length L): T2 = (300 + 200) / 20 = 500 / 20 = 25 seconds.'
      ]
    },
    {
      id: 'ssc-q2',
      stream: 'ssc',
      subject: 'Quantitative Aptitude',
      topic: 'Profit & Loss',
      question: 'A dishonest dealer professes to sell his goods at cost price, but uses a false weight of 900 grams for a 1 kg weight. What is his actual gain percentage?',
      options: [
        '11 (1/9) %',
        '10 %',
        '12.5 %',
        '9 (1/11) %'
      ],
      correctOptionIndex: 0,
      marks: 2,
      negativeMarks: 0.5,
      difficulty: 'Medium',
      pyqTag: 'SSC CGL 2022 Tier-1',
      explanation: 'Profit % = [ (Error) / (True Value - Error) ] * 100 = [ 100 / 900 ] * 100 = 100/9 = 11 (1/9)%.',
      stepByStepSolution: [
        'Cost to dealer = Cost of 900 gm.',
        'Selling price collected = Price of 1000 gm.',
        'Profit earned = 100 gm worth of price on an outlay of 900 gm.',
        'Gain % = (100 / 900) * 100 = 11.11% = 11 (1/9)%.'
      ]
    },
    {
      id: 'ssc-q3',
      stream: 'ssc',
      subject: 'General Intelligence',
      topic: 'Syllogism',
      question: 'Statements:\n1. Only a few Books are Pens.\n2. All Pens are Pencils.\nConclusions:\nI. Some Books are definitely not Pencils.\nII. Some Pens are Books.',
      options: [
        'Only Conclusion II follows',
        'Only Conclusion I follows',
        'Both Conclusions I and II follow',
        'Neither Conclusion I nor II follows'
      ],
      correctOptionIndex: 0,
      marks: 2,
      negativeMarks: 0.5,
      difficulty: 'Medium',
      pyqTag: 'SSC CGL Tier-1 2024 Model',
      explanation: '"Only a few Books are Pens" implies: 1. Some Books are Pens, and 2. Some Books are NOT Pens. Since "Some Books are Pens" is true, by conversion "Some Pens are Books" (Conclusion II) definitely follows. Conclusion I ("Some Books are definitely not Pencils") is not guaranteed because all books can still be pencils while satisfying the conditions.',
      stepByStepSolution: [
        'Decode "Only a few": Means Some are + Some are NOT.',
        'Check Conclusion II: "Some Pens are Books" is a direct valid conversion of "Some Books are Pens". (True)',
        'Check Conclusion I: Books that are not Pens could still be inside the larger Pencil circle. Hence cannot be definitely concluded.',
        'Result: Only Conclusion II follows.'
      ]
    },
    {
      id: 'ssc-q4',
      stream: 'ssc',
      subject: 'General Awareness',
      topic: 'Indian Polity',
      question: 'Which Constitutional Amendment Act is famously known as the "Mini-Constitution" of India and added the words "Socialist, Secular, and Integrity" to the Preamble?',
      options: [
        '42nd Constitutional Amendment Act, 1976',
        '44th Constitutional Amendment Act, 1978',
        '86th Constitutional Amendment Act, 2002',
        '73rd Constitutional Amendment Act, 1992'
      ],
      correctOptionIndex: 0,
      marks: 2,
      negativeMarks: 0.5,
      difficulty: 'Easy',
      pyqTag: 'SSC CGL Repeated PYQ',
      explanation: 'The 42nd Amendment Act of 1976 brought sweeping changes including Fundamental Duties (Part IVA, Art 51A), words "Socialist, Secular, Integrity" in Preamble, and is known as the Mini-Constitution.',
      stepByStepSolution: [
        'Year: 1976 under the Swaran Singh Committee recommendations.',
        'Preamble was amended for the first and only time.',
        'Inserted 3 words: Socialist, Secular, and Integrity.'
      ]
    }
  ]
};
