export interface MCQQuestion {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  marks: number;
  co: string;
  bloom: string;
}

export interface ShortQuestionSubPart {
  part: string;
  question: string;
  marks: number;
  answerKey: string;
  co: string;
  bloom: string;
}

export interface ShortQuestionGroup {
  id: string;
  questionNumber: number;
  subParts: ShortQuestionSubPart[];
}

export interface LongQuestionSubPart {
  part: string;
  question: string;
  marks: number;
  answerKey: string;
  co: string;
  bloom: string;
}

export interface LongQuestionGroup {
  id: string;
  questionNumber: number;
  title: string;
  subParts: LongQuestionSubPart[];
}

export interface HighYieldTopic {
  topic: string;
  frequency: number;
  recurringMarks: number;
  lastAppeared: string;
  recurrenceTag: string;
}

export interface PredictedExamPaper {
  id: string;
  subjectCode: string;
  subjectName: string;
  semester: number;
  branches: string[];
  totalMarks: number;
  timeHours: number;
  predictionConfidence: number;
  repetitionRate: string;
  archivedYears: number[];
  regulation: string;
  instructions: string[];
  coDistribution: { co: string; title: string; weightage: string }[];
  groupA: MCQQuestion[];
  groupB: ShortQuestionGroup[];
  groupC: LongQuestionGroup[];
  highYieldPYQs: HighYieldTopic[];
}

export const BRANCH_LIST = [
  { id: 'all', name: 'All Branches', icon: '🌐' },
  { id: 'cse', name: 'Computer Science (CSE)', icon: '💻' },
  { id: 'it', name: 'Information Tech (IT)', icon: '⚡' },
  { id: 'aiml', name: 'AI & Data Science', icon: '🤖' },
  { id: 'ece', name: 'Electronics & Comm (ECE)', icon: '📡' },
  { id: 'ee', name: 'Electrical Engg (EE)', icon: '🔌' },
  { id: 'me', name: 'Mechanical Engg (ME)', icon: '⚙️' },
  { id: 'ce', name: 'Civil Engg (CE)', icon: '🏗️' }
];

export const PREDICTED_PAPERS: PredictedExamPaper[] = [
  // ==========================================
  // 1. DATA STRUCTURES & ALGORITHMS (PCC-CS301)
  // ==========================================
  {
    id: 'paper-cs301',
    subjectCode: 'PCC-CS301',
    subjectName: 'Data Structures & Algorithms',
    semester: 3,
    branches: ['cse', 'it', 'aiml'],
    totalMarks: 70,
    timeHours: 3.0,
    predictionConfidence: 96,
    repetitionRate: '94% PYQ Recurrence',
    archivedYears: [2018, 2019, 2021, 2022, 2023, 2024, 2025],
    regulation: 'R-25 Autonomous / MAKAUT Model',
    instructions: [
      'Group A is compulsory. Answer any 10 questions (10 × 1 = 10 Marks).',
      'In Group B, answer any 3 questions out of 5 (3 × 5 = 15 Marks).',
      'In Group C, answer any 3 questions out of 5 (3 × 15 = 45 Marks).',
      'Assume suitable data if missing. Graphs and tree diagrams must be cleanly drawn.'
    ],
    coDistribution: [
      { co: 'CO1', title: 'Asymptotic Analysis & Complexities', weightage: '12%' },
      { co: 'CO2', title: 'Linear Structures (Stacks, Queues, Linked Lists)', weightage: '22%' },
      { co: 'CO3', title: 'Non-linear Trees & Balanced Indexing (AVL, Heap, B-Tree)', weightage: '30%' },
      { co: 'CO4', title: 'Sorting & Divide-and-Conquer Recurrences', weightage: '16%' },
      { co: 'CO5', title: 'Graph Algorithms & Shortest Paths (Dijkstra, MST)', weightage: '20%' }
    ],
    groupA: [
      {
        id: 'q1',
        question: 'What is the tightest worst-case time complexity of searching an element in a self-balancing AVL tree with n nodes?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
        answerIndex: 1,
        explanation: 'The height of an AVL tree with n nodes is strictly bounded by 1.44 log2(n). Hence, lookup, insert, and delete are strictly O(log n).',
        marks: 1,
        co: 'CO3',
        bloom: 'BL1'
      },
      {
        id: 'q2',
        question: 'In a circular queue of size N using array indices 0 to N-1, what is the exact condition for Queue Full?',
        options: ['front == rear', '(rear + 1) % N == front', 'rear == N - 1', 'front == 0'],
        answerIndex: 1,
        explanation: '(rear + 1) % N == front preserves one empty slot to distinguish between completely full and completely empty queues.',
        marks: 1,
        co: 'CO2',
        bloom: 'BL2'
      },
      {
        id: 'q3',
        question: 'Which of the following tree traversals yields the elements of a Binary Search Tree (BST) in strictly ascending sorted order?',
        options: ['Pre-order', 'In-order', 'Post-order', 'Level-order'],
        answerIndex: 1,
        explanation: 'In-order traversal visits (Left, Root, Right). Since Left < Root < Right in a BST, it outputs keys in non-decreasing sorted order.',
        marks: 1,
        co: 'CO3',
        bloom: 'BL1'
      },
      {
        id: 'q4',
        question: 'The minimum number of single-ended queue data structures required to simulate a Last-In-First-Out (LIFO) stack is:',
        options: ['1', '2', '3', 'Impossible with queues'],
        answerIndex: 1,
        explanation: 'Two queues are required. Push inserts into q1; Pop rotates elements between q1 and q2 or vice-versa.',
        marks: 1,
        co: 'CO2',
        bloom: 'BL2'
      },
      {
        id: 'q5',
        question: 'For an undirected connected graph with V vertices and E edges, any spanning tree contains exactly:',
        options: ['V edges', 'V - 1 edges', 'E - 1 edges', 'V + 1 edges'],
        answerIndex: 1,
        explanation: 'A tree on V vertices is an acyclic connected graph having exactly V - 1 edges.',
        marks: 1,
        co: 'CO5',
        bloom: 'BL1'
      },
      {
        id: 'q6',
        question: 'Which sorting algorithm has a worst-case time complexity of O(n²) but average-case time complexity of O(n log n)?',
        options: ['Merge Sort', 'Quick Sort', 'Heap Sort', 'Radix Sort'],
        answerIndex: 1,
        explanation: 'Quick Sort exhibits O(n²) when the pivot chosen is always the minimum or maximum (already sorted array with first element as pivot).',
        marks: 1,
        co: 'CO4',
        bloom: 'BL2'
      },
      {
        id: 'q7',
        question: 'What is the balance factor of any valid node in an admissible AVL tree?',
        options: ['Only 0', '{-1, 0, +1}', '{-2, -1, 0, +1, +2}', 'Greater than 1'],
        answerIndex: 1,
        explanation: 'Balance Factor = Height(Left) - Height(Right). An AVL node must strictly satisfy Balance Factor in {-1, 0, +1}.',
        marks: 1,
        co: 'CO3',
        bloom: 'BL1'
      },
      {
        id: 'q8',
        question: 'The recurrence relation governing the Divide-and-Conquer algorithm for standard Merge Sort is:',
        options: ['T(n) = 2T(n/2) + O(n)', 'T(n) = T(n-1) + O(1)', 'T(n) = 2T(n/2) + O(1)', 'T(n) = T(n/2) + O(n)'],
        answerIndex: 0,
        explanation: 'Merge sort splits the array into two halves (2T(n/2)) and merges them in linear time O(n).',
        marks: 1,
        co: 'CO4',
        bloom: 'BL2'
      },
      {
        id: 'q9',
        question: 'Given an array A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1], it represents which data structure?',
        options: ['Min-Heap', 'Max-Heap', 'Binary Search Tree', 'Fibonacci Tree'],
        answerIndex: 1,
        explanation: 'Every parent node at index i satisfies A[i] >= A[2i+1] and A[i] >= A[2i+2] (0-indexed).',
        marks: 1,
        co: 'CO3',
        bloom: 'BL2'
      },
      {
        id: 'q10',
        question: 'In open-address hashing with linear probing, the primary clustering problem occurs because:',
        options: ['Keys hash to negative values', 'Collisions create long contiguous occupied blocks of slots', 'Table size is prime', 'Double hashing is not used'],
        answerIndex: 1,
        explanation: 'Linear probing searches adjacent cells (+1, +2...). Consecutive collisions clump together into contiguous clusters.',
        marks: 1,
        co: 'CO5',
        bloom: 'BL2'
      },
      {
        id: 'q11',
        question: 'An undirected graph has an Euler circuit if and only if:',
        options: ['All vertices have even degree and graph is connected', 'Exactly two vertices have odd degree', 'The graph is complete', 'It contains a Hamiltonian cycle'],
        answerIndex: 0,
        explanation: 'Euler proved that a graph has an Eulerian circuit iff every vertex has an even degree and all non-zero degree vertices belong to a single component.',
        marks: 1,
        co: 'CO5',
        bloom: 'BL2'
      },
      {
        id: 'q12',
        question: 'What is the maximum number of nodes possible at level k of a binary tree (root at level 0)?',
        options: ['2^k', '2^(k+1)', '2^k - 1', '2^(k-1)'],
        answerIndex: 0,
        explanation: 'Level 0 has 2^0 = 1, level 1 has 2^1 = 2, level 2 has 2^2 = 4, and level k has 2^k nodes.',
        marks: 1,
        co: 'CO3',
        bloom: 'BL1'
      }
    ],
    groupB: [
      {
        id: 'gb-1',
        questionNumber: 2,
        subParts: [
          {
            part: '(a)',
            question: 'Write an algorithm or C function to reverse a singly linked list in a single traversal using O(1) auxiliary space.',
            marks: 3,
            answerKey: 'Use 3 pointers: prev = NULL, curr = head, next = NULL. In loop: next = curr->next; curr->next = prev; prev = curr; curr = next. Set head = prev. Time: O(N), Space: O(1).',
            co: 'CO2',
            bloom: 'BL3'
          },
          {
            part: '(b)',
            question: 'State two key advantages of a doubly circular linked list over a standard singly linked list.',
            marks: 2,
            answerKey: '1. Bidirectional traversal (forward and backward) in O(1). 2. Direct O(1) deletion given the pointer to the node without needing a predecessor pointer search.',
            co: 'CO2',
            bloom: 'BL2'
          }
        ]
      },
      {
        id: 'gb-2',
        questionNumber: 3,
        subParts: [
          {
            part: '(a)',
            question: 'Convert the following infix expression into postfix using an operator stack trace: ((A + B) * C - (D - E)) ^ (F + G). Show intermediate stack states.',
            marks: 5,
            answerKey: 'Final Postfix: A B + C * D E - - F G + ^. Intermediate stack handles operators (+, *, -, ^) according to precedence and left-associativity.',
            co: 'CO2',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'gb-3',
        questionNumber: 4,
        subParts: [
          {
            part: '(a)',
            question: 'Prove that in any non-empty binary tree with n0 leaf nodes and n2 nodes of degree 2, the identity n0 = n2 + 1 holds.',
            marks: 3,
            answerKey: 'Total nodes n = n0 + n1 + n2. Total edges e = n - 1 = n0 + n1 + n2 - 1. Also edges by degrees e = 0*n0 + 1*n1 + 2*n2 = n1 + 2n2. Equating: n0 + n1 + n2 - 1 = n1 + 2n2 => n0 = n2 + 1.',
            co: 'CO3',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'Define complete binary tree and strictly binary tree.',
            marks: 2,
            answerKey: 'Complete Binary Tree: All levels fully filled except possibly the last, which is filled from left to right. Strictly Binary Tree: Every node has either 0 or 2 children.',
            co: 'CO3',
            bloom: 'BL2'
          }
        ]
      },
      {
        id: 'gb-4',
        questionNumber: 5,
        subParts: [
          {
            part: '(a)',
            question: 'Execute Kruskal’s Algorithm on a graph with vertices {A, B, C, D, E} and edges: (A,B,1), (C,D,2), (A,C,3), (B,D,3), (B,C,4), (C,E,5), (D,E,7). Find MST total weight.',
            marks: 5,
            answerKey: 'Sorted edges: (A,B,1), (C,D,2), (A,C,3), (B,D,3), (B,C,4), (C,E,5), (D,E,7). Select (A,B,1), (C,D,2), (B,D,3), (C,E,5). Discard (A,C) & (B,C) as cycles. Total MST weight = 1 + 2 + 3 + 5 = 11.',
            co: 'CO5',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'gb-5',
        questionNumber: 6,
        subParts: [
          {
            part: '(a)',
            question: 'Explain Quadratic Probing for collision resolution with its mathematical formula.',
            marks: 3,
            answerKey: 'Formula: h(k, i) = (h\'(k) + c1*i + c2*i²) mod m. Eliminates primary clustering by jumping across quadratic intervals rather than consecutive slots.',
            co: 'CO5',
            bloom: 'BL2'
          },
          {
            part: '(b)',
            question: 'Insert keys {23, 43, 13, 27, 39} into a hash table of size m = 10 using h(k) = k mod 10 and linear probing.',
            marks: 2,
            answerKey: '23 -> 3; 43 -> collides at 3, goes to 4; 13 -> collides at 3 & 4, goes to 5; 27 -> 7; 39 -> 9. Final table: slot 3: 23, slot 4: 43, slot 5: 13, slot 7: 27, slot 9: 39.',
            co: 'CO5',
            bloom: 'BL3'
          }
        ]
      }
    ],
    groupC: [
      {
        id: 'gc-1',
        questionNumber: 7,
        title: 'Balanced Binary Search Trees & Heaps',
        subParts: [
          {
            part: '(a)',
            question: 'Insert the following keys into an initially empty AVL tree: 50, 25, 10, 5, 20, 30, 40, 70, 60, 65. Show intermediate trees after each rotation and name the rotation type (LL, RR, LR, RL).',
            marks: 8,
            answerKey: 'Insert 50, 25, 10 -> LL rotation at 50 -> root 25. Insert 5, 20 -> LR rotation at 25. Insert 30, 40 -> RR rotation at 20. Insert 70, 60, 65 -> RL rotation. Final tree height <= 4 with all balance factors in {-1, 0, +1}.',
            co: 'CO3',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'Explain Max-Heapify. Construct a Max-Heap from [16, 4, 10, 14, 7, 9, 3, 2, 8, 1] using the bottom-up O(n) Build-Max-Heap algorithm. Show the deletion of root.',
            marks: 7,
            answerKey: 'Start from floor(n/2) down to 1. After Max-Heapify: [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]. To delete root: swap 16 with 1, shrink size, Max-Heapify(1) -> root becomes 14.',
            co: 'CO3',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'gc-2',
        questionNumber: 8,
        title: 'Graph Traversal & Shortest Path Protocols',
        subParts: [
          {
            part: '(a)',
            question: 'Apply Dijkstra’s algorithm to find the shortest path from source S to all vertices: (S,A,10), (S,C,5), (A,B,1), (A,C,2), (C,A,3), (C,B,9), (C,D,2), (B,D,4), (D,B,6). Show distance vector iteration table.',
            marks: 8,
            answerKey: 'Iteration: Step 0: Dist[S]=0, others inf. Step 1: visit C (dist 5), relax A (dist 8), D (dist 7). Step 2: visit D (dist 7), relax B (dist 11). Step 3: visit A (dist 8), relax B (dist 9). Final: Dist[S]=0, Dist[C]=5, Dist[D]=7, Dist[A]=8, Dist[B]=9.',
            co: 'CO5',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'Compare DFS and BFS with respect to auxiliary data structures (Stack vs Queue), edge classification (Tree, Back, Cross), and cycle detection. Write recursive pseudocode for DFS.',
            marks: 7,
            answerKey: 'DFS uses Stack/Recursion, discovers Back Edges (cycles in directed graphs). BFS uses Queue, discovers Cross/Back edges, guarantees shortest unweighted paths.',
            co: 'CO5',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'gc-3',
        questionNumber: 9,
        title: 'Sorting Algorithms & Recurrence Master Theorem',
        subParts: [
          {
            part: '(a)',
            question: 'Write Partition subroutine for QuickSort. Trace it on array [38, 27, 43, 3, 9, 82, 10]. Derive the recurrence relation for worst-case time complexity when array is sorted.',
            marks: 8,
            answerKey: 'Partition picks pivot, reorders elements <= pivot left and > pivot right. Worst case recurrence: T(n) = T(n-1) + T(0) + cn = T(n-1) + cn = O(n²).',
            co: 'CO4',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'State Master Theorem for T(n) = aT(n/b) + f(n). Solve: (i) T(n) = 4T(n/2) + n; (ii) T(n) = 2T(n/2) + n log n; (iii) T(n) = 8T(n/2) + n³.',
            marks: 7,
            answerKey: '(i) a=4, b=2, log2(4)=2. f(n)=n = O(n^(2-e)) => Case 1 => Theta(n²). (ii) a=2, b=2, log2(2)=1. f(n)=n log n => Extended Case 2 => Theta(n log² n). (iii) a=8, b=2, log2(8)=3. f(n)=n³ => Case 2 => Theta(n³ log n).',
            co: 'CO4',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'gc-4',
        questionNumber: 10,
        title: 'B-Trees & Advanced Hashing Strategies',
        subParts: [
          {
            part: '(a)',
            question: 'Construct a B-Tree of Order 3 by inserting keys: 10, 20, 5, 6, 12, 30, 7, 17. Show all node splits. Contrast B-Tree vs B+ Tree for range query scans.',
            marks: 8,
            answerKey: 'Order 3 means max 2 keys per node. [10, 20] -> insert 5 -> split on 10 -> root [10], children [5] and [20]. Subsequent inserts trigger splits at [5,6,7] and [12,17,30]. B+ Tree links leaves as linked list for O(k) range scan.',
            co: 'CO3',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'A hash table with m = 1000 slots stores n = 2000 elements. What is load factor alpha? Calculate average probes for successful and unsuccessful search under Uniform Hashing.',
            marks: 7,
            answerKey: 'Load factor alpha = n/m = 2000/1000 = 2.0. Unsuccessful search probes = 1 + alpha = 1 + 2 = 3 probes. Successful search probes = 1 + alpha/2 = 1 + 1 = 2 probes.',
            co: 'CO5',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'gc-5',
        questionNumber: 11,
        title: 'Binary Tree Reconstruction & Threading',
        subParts: [
          {
            part: '(a)',
            question: 'Reconstruct the unique Binary Tree given: In-order: D, B, H, E, I, A, F, C, G and Pre-order: A, B, D, E, H, I, C, F, G. Provide its Post-order traversal.',
            marks: 7,
            answerKey: 'Root is A. Left subtree in-order: {D,B,H,E,I}, right subtree: {F,C,G}. B is left child, C is right child. Post-order traversal: D, H, I, E, B, F, G, C, A.',
            co: 'CO3',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'Describe Threaded Binary Tree structure. How are NULL leaf pointers replaced by in-order predecessor and successor links?',
            marks: 5,
            answerKey: 'Right NULL pointers store in-order successor; left NULL pointers store in-order predecessor. Enables non-recursive in-order traversal with O(1) space without stack.',
            co: 'CO3',
            bloom: 'BL2'
          },
          {
            part: '(c)',
            question: 'Explain polynomial addition P1(x) + P2(x) using linked list nodes with coeff, exp, and next pointers.',
            marks: 3,
            answerKey: 'Traverse both lists simultaneously. If exp1 == exp2, add coeffs. If exp1 > exp2, copy P1 term and advance P1. If exp2 > exp1, copy P2 term and advance P2. Append remaining nodes.',
            co: 'CO2',
            bloom: 'BL3'
          }
        ]
      }
    ],
    highYieldPYQs: [
      { topic: 'AVL Tree Insertions & Rotations (LL, RR, LR, RL)', frequency: 96, recurringMarks: 12, lastAppeared: '2024 Sem 3', recurrenceTag: 'Appeared in 6 of last 7 years' },
      { topic: 'Dijkstra Shortest Path Matrix Execution', frequency: 92, recurringMarks: 8, lastAppeared: '2024 Sem 3', recurrenceTag: 'Mandatory Module 5 Question' },
      { topic: 'Infix to Postfix Stack Evaluation Table', frequency: 89, recurringMarks: 5, lastAppeared: '2023 Sem 3', recurrenceTag: 'Appeared in Group B 5 times' },
      { topic: 'QuickSort Partition & Recurrence Worst-case', frequency: 88, recurringMarks: 8, lastAppeared: '2024 Sem 3', recurrenceTag: 'High-Yield Theoretical Proof' },
      { topic: 'B-Tree Order-3 / Order-4 Insertion & Split', frequency: 85, recurringMarks: 8, lastAppeared: '2023 Sem 3', recurrenceTag: 'Recurring Group C Topic' }
    ]
  },

  // ==========================================
  // 2. ENGINEERING CHEMISTRY (BS-CH101)
  // ==========================================
  {
    id: 'paper-ch101',
    subjectCode: 'BS-CH101',
    subjectName: 'Engineering Chemistry',
    semester: 1,
    branches: ['cse', 'it', 'ece', 'ee', 'me', 'ce', 'aiml'],
    totalMarks: 70,
    timeHours: 3.0,
    predictionConfidence: 98,
    repetitionRate: '92% PYQ Recurrence',
    archivedYears: [2018, 2019, 2021, 2022, 2023, 2024, 2025],
    regulation: 'R-25 Autonomous / MAKAUT Model',
    instructions: [
      'Group A is compulsory. Answer any 10 questions (10 × 1 = 10 Marks).',
      'In Group B, answer any 3 questions out of 5 (3 × 5 = 15 Marks).',
      'In Group C, answer any 3 questions out of 5 (3 × 15 = 45 Marks).',
      'Universal constants: R = 8.314 J/(mol·K), F = 96,500 C/mol, h = 6.626 × 10⁻³⁴ J·s.'
    ],
    coDistribution: [
      { co: 'CO1', title: 'Atomic & Molecular Structure & CFT', weightage: '18%' },
      { co: 'CO2', title: 'Spectroscopy (UV-Vis, IR, Rotational)', weightage: '20%' },
      { co: 'CO3', title: 'Chemical Thermodynamics & Electrochemistry', weightage: '24%' },
      { co: 'CO4', title: 'Stereochemistry & Organic Reaction Mechanisms', weightage: '20%' },
      { co: 'CO5', title: 'Water Technology & Polymer Science', weightage: '18%' }
    ],
    groupA: [
      {
        id: 'ch-q1',
        question: 'Which of the following diatomic species has a bond order of zero and does not exist?',
        options: ['He2+', 'Be2', 'C2', 'B2'],
        answerIndex: 1,
        explanation: 'Be2 has 8 electrons: sigma1s² sigma*1s² sigma2s² sigma*2s². Bond order = (4 - 4) / 2 = 0.',
        marks: 1,
        co: 'CO1',
        bloom: 'BL2'
      },
      {
        id: 'ch-q2',
        question: 'For a spontaneous chemical process at constant temperature and pressure, the criterion is:',
        options: ['Delta G > 0 and Delta S_total < 0', 'Delta H < 0 only', 'Delta G < 0 and Delta S_total > 0', 'Delta G = 0'],
        answerIndex: 2,
        explanation: 'Second Law states spontaneous processes minimize Gibbs free energy (Delta G < 0) and maximize total entropy.',
        marks: 1,
        co: 'CO3',
        bloom: 'BL1'
      },
      {
        id: 'ch-q3',
        question: 'The standard Calomel electrode is reversible with respect to which ion?',
        options: ['Hg2²⁺', 'K⁺', 'Cl⁻', 'H⁺'],
        answerIndex: 2,
        explanation: 'Calomel electrode reaction is Hg2Cl2(s) + 2e⁻ <=> 2Hg(l) + 2Cl⁻. Its potential depends directly on [Cl⁻].',
        marks: 1,
        co: 'CO3',
        bloom: 'BL1'
      },
      {
        id: 'ch-q4',
        question: 'In UV-Visible spectroscopy, an auxochrome is defined as a functional group that:',
        options: ['Directly absorbs UV radiation', 'Does not itself absorb radiation but shifts absorption to longer wavelength and increases intensity', 'Shifts absorption to shorter wavelengths', 'Decreases extinction coefficient'],
        answerIndex: 1,
        explanation: 'Auxochromes (e.g. -OH, -NH2) contain lone pairs that extend conjugation with chromophores, causing bathochromic and hyperchromic shifts.',
        marks: 1,
        co: 'CO2',
        bloom: 'BL2'
      },
      {
        id: 'ch-q5',
        question: 'The number of vibrational degrees of freedom for a non-linear molecule containing N atoms is:',
        options: ['3N - 5', '3N - 6', '3N', '2N - 1'],
        answerIndex: 1,
        explanation: 'Total degrees of freedom = 3N. Translation = 3, Rotation = 3 (non-linear). Vibrational = 3N - 6.',
        marks: 1,
        co: 'CO2',
        bloom: 'BL1'
      },
      {
        id: 'ch-q6',
        question: 'In the alkaline solvolysis of tert-butyl chloride in aqueous medium, the rate-determining step involves:',
        options: ['Attack of OH⁻ on substrate', 'Formation of planar carbocation intermediate', 'Backside displacement of chloride', 'Inversion of configuration'],
        answerIndex: 1,
        explanation: 'SN1 reaction is unimolecular: the C-Cl bond breaks heterolytically in the slow step to generate a stable 3° carbocation.',
        marks: 1,
        co: 'CO4',
        bloom: 'BL2'
      },
      {
        id: 'ch-q7',
        question: 'Conducting polymers such as polyacetylene exhibit electrical conductivity primarily due to:',
        options: ['Localized sigma bonds', 'Extensive conjugated pi-backbone with polaron/soliton charge carrier doping', 'High molecular weight', 'Hydrogen bonding'],
        answerIndex: 1,
        explanation: 'Alternating double and single carbon bonds allow delocalized pi electrons to conduct current when doped (p-type or n-type).',
        marks: 1,
        co: 'CO5',
        bloom: 'BL2'
      },
      {
        id: 'ch-q8',
        question: 'In EDTA titration for water hardness estimation, Eriochrome Black T (EBT) indicator shows what color change at endpoint?',
        options: ['Blue to Wine-red', 'Wine-red to Steel Blue', 'Yellow to Colorless', 'Pink to Blue'],
        answerIndex: 1,
        explanation: 'The unstable wine-red Ca²⁺/Mg²⁺-EBT complex releases free EBT at endpoint, turning clear steel blue.',
        marks: 1,
        co: 'CO5',
        bloom: 'BL2'
      },
      {
        id: 'ch-q9',
        question: 'Calculate the EMF of Daniel cell at 298 K with [Zn²⁺] = 1.0 M and [Cu²⁺] = 0.01 M, given E°cell = 1.10 V:',
        options: ['1.159 V', '1.100 V', '1.041 V', '1.070 V'],
        answerIndex: 2,
        explanation: 'E = 1.10 - (0.0591/2) * log(1.0 / 0.01) = 1.10 - 0.02955 * 2 = 1.10 - 0.0591 = 1.041 V.',
        marks: 1,
        co: 'CO3',
        bloom: 'BL3'
      },
      {
        id: 'ch-q10',
        question: 'Temporary hardness of water is caused by the presence of:',
        options: ['Sulfates of Ca and Mg', 'Chlorides of Ca and Mg', 'Bicarbonates of Calcium and Magnesium', 'Silicates of Sodium'],
        answerIndex: 2,
        explanation: 'Ca(HCO3)2 and Mg(HCO3)2 decompose on boiling to form insoluble carbonates/hydroxides, hence termed temporary hardness.',
        marks: 1,
        co: 'CO5',
        bloom: 'BL1'
      },
      {
        id: 'ch-q11',
        question: 'According to Beer-Lambert Law, if the cell path length is doubled while concentration is halved, absorbance will:',
        options: ['Double', 'Halve', 'Remain unchanged', 'Quadruple'],
        answerIndex: 2,
        explanation: 'A = epsilon * c * l. Since c is halved and l is doubled, the product c * l is identical, so A is constant.',
        marks: 1,
        co: 'CO2',
        bloom: 'BL3'
      },
      {
        id: 'ch-q12',
        question: 'Which of the following compounds exhibits optical enantiomerism due to an asymmetric carbon center?',
        options: ['2-Chloropropane', 'Lactic Acid (CH3CH(OH)COOH)', 'Propanoic Acid', 'Ethanol'],
        answerIndex: 1,
        explanation: 'In lactic acid, the central carbon is bonded to 4 distinct groups: -H, -OH, -CH3, and -COOH.',
        marks: 1,
        co: 'CO4',
        bloom: 'BL2'
      }
    ],
    groupB: [
      {
        id: 'ch-gb-1',
        questionNumber: 2,
        subParts: [
          {
            part: '(a)',
            question: 'Construct MO diagram for O2 molecule. State electronic configuration, calculate bond order, and explain paramagnetism.',
            marks: 5,
            answerKey: 'Total electrons = 16. MO: sigma1s² sigma*1s² sigma2s² sigma*2s² sigma2pz² (pi2px²=pi2py²) (pi*2px¹=pi*2py¹). Bond Order = (10-6)/2 = 2.0. Two unpaired electrons in degenerate antibonding pi* orbitals cause paramagnetism.',
            co: 'CO1',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'ch-gb-2',
        questionNumber: 3,
        subParts: [
          {
            part: '(a)',
            question: 'A zinc electrode is dipped in 0.05 M ZnSO4 solution at 25°C. Calculate single electrode potential. (Given E°_Zn²⁺/Zn = -0.763 V).',
            marks: 5,
            answerKey: 'Nernst Eq: E = E° - (0.0591/2) * log(1/[Zn²⁺]) = -0.763 - 0.02955 * log(1/0.05) = -0.763 - 0.02955 * 1.301 = -0.8014 V.',
            co: 'CO3',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'ch-gb-3',
        questionNumber: 4,
        subParts: [
          {
            part: '(a)',
            question: 'Differentiate SN1 and SN2 mechanisms based on substrate reactivity order and stereochemical outcome. Why does benzyl chloride undergo fast SN1 hydrolysis?',
            marks: 5,
            answerKey: 'SN1: 3° > 2° > 1°, racemization via carbocation. SN2: 1° > 2° > 3°, 100% Walden inversion via concerted backside attack. Benzyl carbocation is resonance-stabilized across the aromatic ring, favoring SN1.',
            co: 'CO4',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'ch-gb-4',
        questionNumber: 5,
        subParts: [
          {
            part: '(a)',
            question: 'Calculate temporary and permanent hardness in ppm of CaCO3 equivalent for water containing: Ca(HCO3)2 = 16.2 mg/L, Mg(HCO3)2 = 14.6 mg/L, CaCl2 = 11.1 mg/L, MgSO4 = 12.0 mg/L.',
            marks: 5,
            answerKey: 'Equivalent CaCO3: Ca(HCO3)2 = 16.2*(100/162)=10 ppm; Mg(HCO3)2 = 14.6*(100/146)=10 ppm. Temporary = 20 ppm. CaCl2 = 11.1*(100/111)=10 ppm; MgSO4 = 12.0*(100/120)=10 ppm. Permanent = 20 ppm. Total = 40 ppm.',
            co: 'CO5',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'ch-gb-5',
        questionNumber: 6,
        subParts: [
          {
            part: '(a)',
            question: 'State the selection rules for IR and rotational spectroscopy. Why does HCl exhibit an IR spectrum while N2 does not?',
            marks: 5,
            answerKey: 'IR selection rule: Molecule must undergo change in dipole moment during vibration (d mu / dq != 0). HCl has a permanent dipole moment that oscillates during vibration; homonuclear N2 has zero dipole moment throughout vibration.',
            co: 'CO2',
            bloom: 'BL3'
          }
        ]
      }
    ],
    groupC: [
      {
        id: 'ch-gc-1',
        questionNumber: 7,
        title: 'Molecular Spectroscopy & Diatomic Models',
        subParts: [
          {
            part: '(a)',
            question: 'Derive expression for rotational energy levels of rigid rotator: E_J = B*J(J+1) cm⁻¹. Define B and moment of inertia I.',
            marks: 7,
            answerKey: 'E_J = (h_bar² / 2I) * J(J+1). Dividing by hc: epsilon_J = (h / 8 pi² I c) * J(J+1) = B * J(J+1) cm⁻¹. I = mu * r_0².',
            co: 'CO2',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'The fundamental vibrational frequency of H³⁵Cl is at nu_bar = 2886 cm⁻¹. Calculate force constant k in N/m. (mu = 1.627 × 10⁻²⁷ kg, c = 3 × 10¹⁰ cm/s).',
            marks: 8,
            answerKey: 'k = 4 pi² c² nu_bar² mu = 4 * (3.1416)² * (3*10¹⁰)² * (2886)² * (1.627*10⁻²⁷ kg) = 480.9 N/m.',
            co: 'CO2',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'ch-gc-2',
        questionNumber: 8,
        title: 'Thermodynamics & Electrochemical Cells',
        subParts: [
          {
            part: '(a)',
            question: 'Prove Gibbs-Helmholtz equation: [d(Delta G / T) / dT]_P = -Delta H / T².',
            marks: 7,
            answerKey: 'Start with G = H - TS. dG = VdP - SdT. At const P, dG/dT = -S. Substitute S = (H - G)/T into d(G/T)/dT to yield -H/T².',
            co: 'CO3',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'For cell Pt | H2(g, 1 atm) | HCl(0.1M) || AgNO3(0.01M) | Ag(s): write cell reactions, calculate E_cell at 298 K, and find standard Delta G°. (E°_Ag⁺/Ag = +0.799 V).',
            marks: 8,
            answerKey: 'E°cell = 0.799 - 0.0 = 0.799 V. Overall: 1/2 H2 + Ag⁺ -> H⁺ + Ag. Q = [H⁺]/[Ag⁺] = 0.1 / 0.01 = 10. E_cell = 0.799 - 0.0591 * log(10) = 0.7399 V. Delta G° = -nFE° = -1 * 96500 * 0.799 = -77.1 kJ/mol.',
            co: 'CO3',
            bloom: 'BL4'
          }
        ]
      },
      {
        id: 'ch-gc-3',
        questionNumber: 9,
        title: 'Stereochemistry & Organic Synthesis',
        subParts: [
          {
            part: '(a)',
            question: 'Using 3D representations, deduce the mechanism and stereochemical outcome for alkaline hydrolysis of (R)-2-bromooctane and 2-bromo-2-methylpropane.',
            marks: 8,
            answerKey: '(R)-2-bromooctane undergoes SN2 via backside attack leading to 100% Walden inversion to (S)-2-octanol. 2-bromo-2-methylpropane undergoes SN1 via planar carbocation giving racemization.',
            co: 'CO4',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'Assign R/S configuration to chiral centers in Glyceraldehyde and Alanine using CIP priority rules. Outline chemical synthesis of Paracetamol from 4-aminophenol.',
            marks: 7,
            answerKey: 'Glyceraldehyde: -OH(1), -CHO(2), -CH2OH(3), -H(4). Clockwise with H horizontal = (S) or vertical = (R). Paracetamol: 4-aminophenol + acetic anhydride -> N-(4-hydroxyphenyl)acetamide (Paracetamol).',
            co: 'CO4',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'ch-gc-4',
        questionNumber: 10,
        title: 'Water Demineralization & Zeolite Regeneration',
        subParts: [
          {
            part: '(a)',
            question: 'Describe the Ion-Exchange Demineralization process: flow diagram, cation/anion resin exchange reactions, and acid/base regeneration cycles.',
            marks: 8,
            answerKey: 'Cation exchanger: 2R-H + Ca²⁺ -> R2Ca + 2H⁺. Anion exchanger: R\'-OH + Cl⁻ -> R\'Cl + OH⁻. H⁺ + OH⁻ -> H2O. Regeneration: R2Ca + 2HCl -> 2R-H + CaCl2; R\'Cl + NaOH -> R\'-OH + NaCl.',
            co: 'CO5',
            bloom: 'BL3'
          },
          {
            part: '(b)',
            question: 'A zeolite bed was regenerated using 150 L of 15 g/L NaCl solution. If water hardness is 360 ppm, calculate total volume of water softened.',
            marks: 7,
            answerKey: 'Total NaCl = 150 L * 15 g/L = 2250 g. Equivalent CaCO3 = 2250 * (50/58.5) = 1923.08 g = 1,923,080 mg. Volume softened = 1,923,080 mg / 360 mg/L = 5341.89 Liters.',
            co: 'CO5',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'ch-gc-5',
        questionNumber: 11,
        title: 'Crystal Field Theory & Periodic Trends',
        subParts: [
          {
            part: '(a)',
            question: 'Draw d-orbital splitting diagram under octahedral field. Calculate CFSE in terms of Delta_o and P for d⁴ high-spin, d⁴ low-spin, and d⁷ low-spin complexes.',
            marks: 8,
            answerKey: 't2g lowered by -0.4 Delta_o; eg raised by +0.6 Delta_o. d⁴ HS (t2g³ eg¹): CFSE = 3(-0.4) + 1(+0.6) = -0.6 Delta_o. d⁴ LS (t2g⁴ eg⁰): CFSE = 4(-0.4) + 1P = -1.6 Delta_o + P. d⁷ LS (t2g⁶ eg¹): CFSE = 6(-0.4) + 1(+0.6) + P = -1.8 Delta_o + P.',
            co: 'CO1',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'Explain why Nitrogen has a higher first ionization enthalpy (1402 kJ/mol) than Oxygen (1314 kJ/mol). Apply HSAB principle to justify AgI stability over AgF.',
            marks: 7,
            answerKey: 'N has half-filled 2p³ configuration with extra exchange energy stability; O has 2p⁴ with inter-electronic repulsion in paired orbital. Ag⁺ is soft acid; I⁻ is soft base. Soft-soft interaction makes AgI stable, whereas F⁻ is hard base.',
            co: 'CO1',
            bloom: 'BL3'
          }
        ]
      }
    ],
    highYieldPYQs: [
      { topic: 'Nernst Equation & Daniel Cell EMF Calculations', frequency: 98, recurringMarks: 8, lastAppeared: '2024 Sem 1', recurrenceTag: 'Repeated Every Year' },
      { topic: 'Ion-Exchange Demineralization vs Zeolite Process', frequency: 94, recurringMarks: 8, lastAppeared: '2024 Sem 1', recurrenceTag: 'Mandatory 10-Mark Core Water Question' },
      { topic: 'Crystal Field Splitting & CFSE (Octahedral d4/d7)', frequency: 91, recurringMarks: 8, lastAppeared: '2023 Sem 1', recurrenceTag: 'High-Yield Theoretical Invariant' },
      { topic: 'Rotational Spectroscopy & Force Constant Derivation', frequency: 87, recurringMarks: 7, lastAppeared: '2024 Sem 1', recurrenceTag: 'Recurring Group C Numerical' },
      { topic: 'SN1 vs SN2 Mechanisms with Stereochemical Inversion', frequency: 86, recurringMarks: 5, lastAppeared: '2023 Sem 1', recurrenceTag: 'Appeared in Group B 4 times' }
    ]
  },

  // ==========================================
  // 3. OPERATING SYSTEMS (PCC-CS401)
  // ==========================================
  {
    id: 'paper-cs401',
    subjectCode: 'PCC-CS401',
    subjectName: 'Operating Systems',
    semester: 4,
    branches: ['cse', 'it', 'aiml'],
    totalMarks: 70,
    timeHours: 3.0,
    predictionConfidence: 95,
    repetitionRate: '96% PYQ Recurrence',
    archivedYears: [2018, 2019, 2021, 2022, 2023, 2024, 2025],
    regulation: 'R-25 Autonomous / MAKAUT Model',
    instructions: [
      'Group A: 10 MCQs × 1 = 10 Marks.',
      'Group B: Answer any 3 questions out of 5 (3 × 5 = 15 Marks).',
      'Group C: Answer any 3 questions out of 5 (3 × 15 = 45 Marks).'
    ],
    coDistribution: [
      { co: 'CO1', title: 'OS Architectures & System Calls', weightage: '12%' },
      { co: 'CO2', title: 'Process Scheduling & Synchronization', weightage: '28%' },
      { co: 'CO3', title: 'Deadlocks (Banker’s Algorithm & Prevention)', weightage: '20%' },
      { co: 'CO4', title: 'Memory Management & Paging / Virtual Memory', weightage: '22%' },
      { co: 'CO5', title: 'File Systems & Disk Scheduling (SSTF, SCAN)', weightage: '18%' }
    ],
    groupA: [
      {
        id: 'os-q1',
        question: 'Belady’s anomaly occurs in which page replacement algorithm?',
        options: ['LRU', 'FIFO', 'Optimal', 'Clock'],
        answerIndex: 1,
        explanation: 'FIFO can suffer from Belady’s anomaly, where increasing page frames leads to more page faults.',
        marks: 1,
        co: 'CO4',
        bloom: 'BL1'
      },
      {
        id: 'os-q2',
        question: 'Which condition is NOT strictly necessary for a deadlock to occur?',
        options: ['Mutual Exclusion', 'Hold and Wait', 'Preemption', 'Circular Wait'],
        answerIndex: 2,
        explanation: 'The four Coffman conditions are Mutual Exclusion, Hold & Wait, NO preemption, and Circular Wait.',
        marks: 1,
        co: 'CO3',
        bloom: 'BL2'
      },
      {
        id: 'os-q3',
        question: 'In a 32-bit virtual address space with 4 KB page size, how many entries are in a single-level page table?',
        options: ['2^10', '2^20', '2^12', '2^16'],
        answerIndex: 1,
        explanation: 'Page offset = log2(4096) = 12 bits. Remaining page number bits = 32 - 12 = 20 bits => 2^20 entries (1,048,576).',
        marks: 1,
        co: 'CO4',
        bloom: 'BL3'
      },
      {
        id: 'os-q4',
        question: 'The fork() system call returns which value to the newly created child process?',
        options: ['Child PID', 'Parent PID', '0', '-1 on success'],
        answerIndex: 2,
        explanation: 'fork() returns the child’s PID to parent and 0 to child process to differentiate identity.',
        marks: 1,
        co: 'CO1',
        bloom: 'BL1'
      },
      {
        id: 'os-q5',
        question: 'A counting semaphore S is initialized to 10. 6 wait(P) operations and 4 signal(V) operations are executed. Final value is:',
        options: ['8', '12', '4', '14'],
        answerIndex: 0,
        explanation: 'Value = 10 - 6 + 4 = 8.',
        marks: 1,
        co: 'CO2',
        bloom: 'BL3'
      },
      {
        id: 'os-q6',
        question: 'Which scheduling algorithm is provably optimal in terms of minimizing average waiting time?',
        options: ['Round Robin', 'FCFS', 'Shortest Job First (SJF)', 'Priority Preemptive'],
        answerIndex: 2,
        explanation: 'SJF minimizes waiting time because moving short jobs ahead reduces average queue wait.',
        marks: 1,
        co: 'CO2',
        bloom: 'BL2'
      },
      {
        id: 'os-q7',
        question: 'Thrashing occurs when:',
        options: ['CPU utilization is 100%', 'A process spends more time paging than executing', 'Deadlock occurs in all processes', 'Disk is full'],
        answerIndex: 1,
        explanation: 'When total working set size exceeds physical memory, pages are continuously swapped out and in, killing CPU throughput.',
        marks: 1,
        co: 'CO4',
        bloom: 'BL2'
      },
      {
        id: 'os-q8',
        question: 'Which disk scheduling algorithm moves the arm only in one direction servicing requests and jumps back to start without service?',
        options: ['SCAN', 'C-SCAN', 'LOOK', 'SSTF'],
        answerIndex: 1,
        explanation: 'Circular SCAN (C-SCAN) provides a more uniform waiting time by servicing in one direction only.',
        marks: 1,
        co: 'CO5',
        bloom: 'BL1'
      },
      {
        id: 'os-q9',
        question: 'The Translation Lookaside Buffer (TLB) is used to:',
        options: ['Cache disk sectors', 'Cache recent virtual-to-physical page table translations', 'Store process control blocks', 'Manage cache memory'],
        answerIndex: 1,
        explanation: 'TLB is high-speed associative hardware memory caching PTEs to avoid 2-memory access penalties.',
        marks: 1,
        co: 'CO4',
        bloom: 'BL1'
      },
      {
        id: 'os-q10',
        question: 'What is the purpose of the dirty (modify) bit in page table entries?',
        options: ['Detect invalid memory', 'Avoid writing unmodified pages back to disk on eviction', 'Track page aging', 'Protect from execution'],
        answerIndex: 1,
        explanation: 'If dirty bit is 0, the page on disk is identical to memory, so disk write on page replacement is skipped.',
        marks: 1,
        co: 'CO4',
        bloom: 'BL2'
      },
      {
        id: 'os-q11',
        question: 'Which IPC mechanism allows unrelated processes on the same Unix machine to communicate via a named file?',
        options: ['Anonymous Pipe', 'FIFO (Named Pipe)', 'Shared memory only', 'Signals'],
        answerIndex: 1,
        explanation: 'Named pipes (FIFOs created via mkfifo) exist in the file system namespace and can connect unrelated processes.',
        marks: 1,
        co: 'CO1',
        bloom: 'BL2'
      },
      {
        id: 'os-q12',
        question: 'In Banker’s algorithm, the system is in a safe state if:',
        options: ['No deadlocks currently exist', 'There exists at least one sequence of process execution that allows all processes to finish without deadlock', 'Available resources equal Maximum demand', 'All processes are allocated resources'],
        answerIndex: 1,
        explanation: 'A state is safe if there exists a safe sequence <P1, P2... Pn> such that for each Pi, Need_i <= Available + sum(Allocation_j).',
        marks: 1,
        co: 'CO3',
        bloom: 'BL2'
      }
    ],
    groupB: [
      {
        id: 'os-gb-1',
        questionNumber: 2,
        subParts: [
          {
            part: '(a)',
            question: 'Solve Producer-Consumer bounded-buffer synchronization problem using mutex and counting semaphores (empty, full). Provide C pseudocode.',
            marks: 5,
            answerKey: 'Semaphores: mutex=1, empty=N, full=0. Producer: wait(empty); wait(mutex); add_item(); signal(mutex); signal(full). Consumer: wait(full); wait(mutex); remove_item(); signal(mutex); signal(empty).',
            co: 'CO2',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'os-gb-2',
        questionNumber: 3,
        subParts: [
          {
            part: '(a)',
            question: 'A system has 4 processes and 3 resources (A:10, B:5, C:7). Given Allocation & Max matrices, determine if the system is in a safe state and compute the safe sequence.',
            marks: 5,
            answerKey: 'Calculate Need = Max - Allocation. Check Need <= Available iteratively. If safe sequence exists (e.g. <P1, P3, P0, P2>), system is safe; otherwise unsafe.',
            co: 'CO3',
            bloom: 'BL4'
          }
        ]
      },
      {
        id: 'os-gb-3',
        questionNumber: 4,
        subParts: [
          {
            part: '(a)',
            question: 'Calculate page faults for reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1 with 3 frames using LRU and FIFO.',
            marks: 5,
            answerKey: 'FIFO: 15 page faults. LRU: 12 page faults. Show frame slots after each memory reference.',
            co: 'CO4',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'os-gb-4',
        questionNumber: 5,
        subParts: [
          {
            part: '(a)',
            question: 'Explain the difference between internal and external fragmentation with diagrams. How does paging eliminate external fragmentation?',
            marks: 5,
            answerKey: 'Internal: allocated block larger than needed; leftover within partition. External: total free memory exists but non-contiguous. Paging allocates fixed-size frames, eliminating external fragmentation.',
            co: 'CO4',
            bloom: 'BL2'
          }
        ]
      },
      {
        id: 'os-gb-5',
        questionNumber: 6,
        subParts: [
          {
            part: '(a)',
            question: 'Compare SCAN and SSTF disk scheduling on requests: 98, 183, 37, 122, 14, 124, 65, 67 with initial head at 53. Find total head movements.',
            marks: 5,
            answerKey: 'SSTF moves to closest request (total head movement = 236 cylinders). SCAN moves in one direction towards 0 or 199 before reversing (total movement = 208 cylinders).',
            co: 'CO5',
            bloom: 'BL3'
          }
        ]
      }
    ],
    groupC: [
      {
        id: 'os-gc-1',
        questionNumber: 7,
        title: 'CPU Scheduling Analytics & Gantt Charts',
        subParts: [
          {
            part: '(a)',
            question: 'Given processes P1 (AT=0, BT=8), P2 (AT=1, BT=4), P3 (AT=2, BT=9), P4 (AT=3, BT=5). Draw Gantt charts and compute average waiting time and turnaround time for: (i) Non-preemptive SJF, (ii) Preemptive Round Robin (Time Quantum = 4).',
            marks: 8,
            answerKey: 'Draw Gantt charts. Calculate Completion Time (CT), Turnaround Time (TAT = CT - AT), Waiting Time (WT = TAT - BT). Output exact average TAT and WT.',
            co: 'CO2',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'Explain Multi-Level Feedback Queue (MLFQ) scheduling: priority aging, time quantum allotment per level, and starvation prevention mechanisms.',
            marks: 7,
            answerKey: 'I/O-bound jobs stay in higher priority queues with small quanta; CPU-bound jobs drop to lower queues with larger quanta. Periodic priority boost prevents starvation.',
            co: 'CO2',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'os-gc-2',
        questionNumber: 8,
        title: 'Virtual Memory & Multi-Level Inverted Paging',
        subParts: [
          {
            part: '(a)',
            question: 'In a 2-level paging system with 32-bit virtual addresses, 4 KB page size, and 4-byte PTEs: (i) Find memory saved by 2-level paging for a 16 MB process, (ii) Calculate effective access time if memory access time is 100 ns and TLB hit ratio is 95% with 20 ns TLB lookup.',
            marks: 8,
            answerKey: 'EAT = Hit_ratio * (TLB_time + Mem_time) + (1 - Hit_ratio) * (TLB_time + 2*Mem_time + Mem_time) = 0.95*(20+100) + 0.05*(20+200+100) = 0.95*120 + 0.05*320 = 114 + 16 = 130 ns.',
            co: 'CO4',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'Explain Inverted Page Tables. How does hashing combined with PID address the inverted table lookup overhead?',
            marks: 7,
            answerKey: 'Inverted page table has 1 entry per physical frame instead of per virtual page, drastically shrinking memory overhead. Hash table on (PID, Page#) provides O(1) lookup.',
            co: 'CO4',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'os-gc-3',
        questionNumber: 9,
        title: 'Process Synchronization & Classical Concurrency',
        subParts: [
          {
            part: '(a)',
            question: 'Solve the Readers-Writers problem with writer-preference. State why naive reader-preference leads to writer starvation.',
            marks: 8,
            answerKey: 'Writer-preference uses writecount and readcount with mutexes (wmutex, rmutex) and priority lock. If writers keep waiting while readers arrive, writer starves in reader-priority.',
            co: 'CO2',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'Describe Peterson’s algorithm for two processes. Prove that it satisfies Mutual Exclusion, Progress, and Bounded Waiting.',
            marks: 7,
            answerKey: 'Variables: flag[2] (boolean) and turn (int). Prove: If both enter, flag[0]=flag[1]=true and turn must be 0 and 1 simultaneously, impossible => Mutual Exclusion holds.',
            co: 'CO2',
            bloom: 'BL4'
          }
        ]
      },
      {
        id: 'os-gc-4',
        questionNumber: 10,
        title: 'Deadlock Avoidance & Resource Graphs',
        subParts: [
          {
            part: '(a)',
            question: 'State and prove safety algorithm of Banker’s algorithm. If a process P1 requests (1, 0, 2) and current available is (3, 3, 2), demonstrate the safety verification steps.',
            marks: 8,
            answerKey: 'Check Request <= Need and Request <= Available. Pretend allocation: Available = Available - Request, Allocation = Allocation + Request, Need = Need - Request. Run Safety algorithm. If safe, grant; else roll back.',
            co: 'CO3',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'Discuss Deadlock Detection with wait-for graphs. Differentiate deadlock prevention (breaking Coffman conditions) vs deadlock avoidance.',
            marks: 7,
            answerKey: 'Prevention imposes static rules (e.g. strict resource ordering). Avoidance dynamically evaluates states before granting requests using Banker’s check.',
            co: 'CO3',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'os-gc-5',
        questionNumber: 11,
        title: 'File System Architecture & Inode Structures',
        subParts: [
          {
            part: '(a)',
            question: 'Explain the UNIX Inode structure with direct (12), single-indirect, double-indirect, and triple-indirect disk block pointers. Calculate maximum file size supported with 4 KB blocks and 4-byte block addresses.',
            marks: 8,
            answerKey: 'Direct: 12 * 4KB = 48 KB. Single: 1024 * 4KB = 4 MB. Double: 1024² * 4KB = 4 GB. Triple: 1024³ * 4KB = 4 TB. Total file size ~ 4.004 TB.',
            co: 'CO5',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'Compare Contiguous, Linked, and Indexed file allocation strategies in terms of sequential access speed, direct random access, and external fragmentation.',
            marks: 7,
            answerKey: 'Contiguous: fast I/O, supports random access, suffers external fragmentation. Linked: no external fragmentation, poor random access (O(N)). Indexed: supports random access via index block, overhead for small files.',
            co: 'CO5',
            bloom: 'BL3'
          }
        ]
      }
    ],
    highYieldPYQs: [
      { topic: "Banker's Algorithm Safety & Resource Allocation", frequency: 98, recurringMarks: 10, lastAppeared: '2024 Sem 4', recurrenceTag: 'Mandatory 10-Mark Core OS Problem' },
      { topic: 'CPU Scheduling Gantt Chart (Round Robin + SJF)', frequency: 95, recurringMarks: 12, lastAppeared: '2024 Sem 4', recurrenceTag: 'Repeated Every Single Year' },
      { topic: 'Page Replacement Algorithms (LRU, FIFO, Belady Anomaly)', frequency: 92, recurringMarks: 8, lastAppeared: '2023 Sem 4', recurrenceTag: 'High-Yield Numerical Problem' },
      { topic: 'Effective Access Time (EAT) with Multi-level Paging & TLB', frequency: 89, recurringMarks: 8, lastAppeared: '2024 Sem 4', recurrenceTag: 'Recurring Group C Numerical' },
      { topic: 'Classical Synchronization (Producer-Consumer & Readers-Writers)', frequency: 87, recurringMarks: 8, lastAppeared: '2023 Sem 4', recurrenceTag: 'Appeared in Group C 5 times' }
    ]
  },

  // ==========================================
  // 4. ENGINEERING MATHEMATICS - I (BS-M101)
  // ==========================================
  {
    id: 'paper-m101',
    subjectCode: 'BS-M101',
    subjectName: 'Engineering Mathematics - I',
    semester: 1,
    branches: ['cse', 'it', 'ece', 'ee', 'me', 'ce', 'aiml'],
    totalMarks: 70,
    timeHours: 3.0,
    predictionConfidence: 97,
    repetitionRate: '95% PYQ Recurrence',
    archivedYears: [2018, 2019, 2021, 2022, 2023, 2024, 2025],
    regulation: 'R-25 Autonomous / MAKAUT Model',
    instructions: [
      'Group A is compulsory. Answer any 10 questions (10 × 1 = 10 Marks).',
      'In Group B, answer any 3 questions out of 5 (3 × 5 = 15 Marks).',
      'In Group C, answer any 3 questions out of 5 (3 × 15 = 45 Marks).'
    ],
    coDistribution: [
      { co: 'CO1', title: 'Differential Calculus & Mean Value Theorems', weightage: '24%' },
      { co: 'CO2', title: 'Matrices, Eigenvalues & Cayley-Hamilton', weightage: '26%' },
      { co: 'CO3', title: 'Multiple Integrals (Double & Triple Integrals)', weightage: '20%' },
      { co: 'CO4', title: 'Vector Calculus (Green, Stokes, Gauss)', weightage: '18%' },
      { co: 'CO5', title: 'Sequences & Series Convergence', weightage: '12%' }
    ],
    groupA: [
      {
        id: 'm1-q1',
        question: 'If A is an n x n orthogonal matrix, then the determinant of A is strictly equal to:',
        options: ['0', '+1 or -1', 'n', 'Infinity'],
        answerIndex: 1,
        explanation: 'For orthogonal matrix A^T * A = I => det(A^T) * det(A) = (det(A))² = 1 => det(A) = ±1.',
        marks: 1,
        co: 'CO2',
        bloom: 'BL1'
      },
      {
        id: 'm1-q2',
        question: 'Rolle’s theorem is applicable to f(x) = |x| in the closed interval [-1, 1] because:',
        options: ['f(x) is continuous and differentiable everywhere', 'It is not applicable as f(x) is not differentiable at x = 0', 'f(-1) != f(1)', 'f(x) has no real root'],
        answerIndex: 1,
        explanation: 'f(x) = |x| has a sharp corner at x = 0, where left and right derivatives differ (-1 vs +1). Hence not differentiable on (-1, 1).',
        marks: 1,
        co: 'CO1',
        bloom: 'BL2'
      },
      {
        id: 'm1-q3',
        question: 'The product of all eigenvalues of an invertible square matrix A is always equal to:',
        options: ['Trace of A', 'det(A)', 'Rank of A', 'Sum of diagonal elements'],
        answerIndex: 1,
        explanation: 'By standard matrix theory, prod(lambda_i) = det(A) and sum(lambda_i) = Trace(A).',
        marks: 1,
        co: 'CO2',
        bloom: 'BL1'
      },
      {
        id: 'm1-q4',
        question: 'The series sum(1 / n^p) converges if and only if:',
        options: ['p >= 1', 'p > 1', 'p < 1', 'p <= 1'],
        answerIndex: 1,
        explanation: 'By the p-series (Riemann zeta) test, sum(1/n^p) converges strictly for p > 1 and diverges for p <= 1.',
        marks: 1,
        co: 'CO5',
        bloom: 'BL1'
      },
      {
        id: 'm1-q5',
        question: 'If u = x² - y² and v = 2xy, then the Jacobian J = d(u, v) / d(x, y) is:',
        options: ['4(x² + y²)', '2(x² - y²)', '4xy', '0'],
        answerIndex: 0,
        explanation: 'du/dx = 2x, du/dy = -2y, dv/dx = 2y, dv/dy = 2x. Determinant = (2x)(2x) - (-2y)(2y) = 4x² + 4y² = 4(x² + y²).',
        marks: 1,
        co: 'CO1',
        bloom: 'BL3'
      },
      {
        id: 'm1-q6',
        question: 'A vector field F is conservative (irrotational) if and only if:',
        options: ['div F = 0', 'curl F = 0', 'grad F = 0', 'div(curl F) != 0'],
        answerIndex: 1,
        explanation: 'Conservative field F = grad(phi) implies curl F = curl(grad phi) = 0 everywhere.',
        marks: 1,
        co: 'CO4',
        bloom: 'BL1'
      },
      {
        id: 'm1-q7',
        question: 'The value of Gamma(1/2) is exactly:',
        options: ['sqrt(pi)', 'pi / 2', '1', '2 sqrt(pi)'],
        answerIndex: 0,
        explanation: 'By definition of the Euler Gamma function, Gamma(1/2) = integral_0^inf e^(-t) t^(-1/2) dt = sqrt(pi).',
        marks: 1,
        co: 'CO3',
        bloom: 'BL1'
      },
      {
        id: 'm1-q8',
        question: 'The rank of an n x n non-singular matrix is:',
        options: ['0', 'n', 'n - 1', '1'],
        answerIndex: 1,
        explanation: 'Non-singular matrix has det(A) != 0, so all n column vectors are linearly independent => Rank = n.',
        marks: 1,
        co: 'CO2',
        bloom: 'BL1'
      },
      {
        id: 'm1-q9',
        question: 'Green’s theorem in a plane transforms:',
        options: ['Line integral into surface/double integral', 'Surface integral into volume integral', 'Line integral into triple integral', 'Volume into surface integral'],
        answerIndex: 0,
        explanation: 'Green’s Theorem states oint (M dx + N dy) = iint (dN/dx - dM/dy) dx dy, transforming a closed line integral into a double integral.',
        marks: 1,
        co: 'CO4',
        bloom: 'BL2'
      },
      {
        id: 'm1-q10',
        question: 'For the function f(x, y) = x³ + y³ - 3axy, the stationary point (a, a) represents a local minimum if:',
        options: ['a > 0', 'a < 0', 'a = 0', 'for all real a'],
        answerIndex: 0,
        explanation: 'At (a, a), rt - s² = (6a)(6a) - (-3a)² = 36a² - 9a² = 27a² > 0. For minimum, r = 6a > 0 => a > 0.',
        marks: 1,
        co: 'CO1',
        bloom: 'BL3'
      },
      {
        id: 'm1-q11',
        question: 'According to Cayley-Hamilton theorem, every square matrix satisfies its own:',
        options: ['Diagonal matrix', 'Characteristic equation', 'Eigenvector equation', 'Transpose equation'],
        answerIndex: 1,
        explanation: 'If p(lambda) = det(A - lambda*I) = 0 is characteristic equation, then p(A) = 0 (null matrix).',
        marks: 1,
        co: 'CO2',
        bloom: 'BL1'
      },
      {
        id: 'm1-q12',
        question: 'The radius of convergence of the power series sum((x - 2)^n / n!) is:',
        options: ['0', '1', '2', 'Infinity'],
        answerIndex: 3,
        explanation: 'By ratio test: lim |a_n / a_(n+1)| = lim (n+1)! / n! = lim (n+1) = inf. Thus converges for all real x.',
        marks: 1,
        co: 'CO5',
        bloom: 'BL2'
      }
    ],
    groupB: [
      {
        id: 'm1-gb-1',
        questionNumber: 2,
        subParts: [
          {
            part: '(a)',
            question: 'Verify Cayley-Hamilton theorem for matrix A = [[2, 1], [1, 2]] and hence compute A⁻¹ and A⁴.',
            marks: 5,
            answerKey: 'Char eq: det(A - lambda*I) = lambda² - 4*lambda + 3 = 0. Verify A² - 4A + 3I = 0. Multiply by A⁻¹: A⁻¹ = (4I - A)/3 = [[2/3, -1/3], [-1/3, 2/3]]. A⁴ computed via polynomial reduction.',
            co: 'CO2',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'm1-gb-2',
        questionNumber: 3,
        subParts: [
          {
            part: '(a)',
            question: 'Find the maximum and minimum distances from origin to the surface z² = xy + 1 using Lagrange’s multipliers.',
            marks: 5,
            answerKey: 'Objective: f(x,y,z) = x² + y² + z² subject to g(x,y,z) = z² - xy - 1 = 0. Form Lagrangian L = x² + y² + z² - lambda(z² - xy - 1). Critical point yields minimum distance d = 1 at (0, 0, ±1).',
            co: 'CO1',
            bloom: 'BL4'
          }
        ]
      },
      {
        id: 'm1-gb-3',
        questionNumber: 4,
        subParts: [
          {
            part: '(a)',
            question: 'Change the order of integration and evaluate: integral_0^1 integral_x^1 sin(y²) dy dx.',
            marks: 5,
            answerKey: 'Region: 0 <= x <= 1, x <= y <= 1 => 0 <= y <= 1, 0 <= x <= y. New integral: integral_0^1 (integral_0^y dx) sin(y²) dy = integral_0^1 y sin(y²) dy = [-cos(y²)/2]_0^1 = (1 - cos(1))/2.',
            co: 'CO3',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'm1-gb-4',
        questionNumber: 5,
        subParts: [
          {
            part: '(a)',
            question: 'Verify Green’s Theorem in plane for oint_C [(xy + y²) dx + x² dy] where C is bounded by y = x and y = x².',
            marks: 5,
            answerKey: 'Line integral around closed curve C = 1/20. Double integral: iint (dN/dx - dM/dy) dx dy = iint (2x - (x + 2y)) dx dy = integral_0^1 integral_{x²}^x (x - 2y) dy dx = 1/20. Both match.',
            co: 'CO4',
            bloom: 'BL4'
          }
        ]
      },
      {
        id: 'm1-gb-5',
        questionNumber: 6,
        subParts: [
          {
            part: '(a)',
            question: 'Test the convergence of the series: sum_{n=1}^inf (sqrt(n+1) - sqrt(n-1)) / n.',
            marks: 5,
            answerKey: 'Rationalize numerator: u_n = 2 / [n * (sqrt(n+1) + sqrt(n-1))]. For large n, u_n ~ 1 / n^(3/2). Compare with v_n = 1 / n^(3/2) (p = 3/2 > 1). By Limit Comparison Test, series converges.',
            co: 'CO5',
            bloom: 'BL3'
          }
        ]
      }
    ],
    groupC: [
      {
        id: 'm1-gc-1',
        questionNumber: 7,
        title: 'Eigenvalues, Diagonalization & Quadratic Forms',
        subParts: [
          {
            part: '(a)',
            question: 'Find eigenvalues and eigenvectors of matrix A = [[1, 2, 3], [0, 2, 3], [0, 0, 2]]. Is matrix A diagonalizable? Justify.',
            marks: 8,
            answerKey: 'Upper triangular matrix has eigenvalues on diagonal: lambda = 1, 2, 2. For repeated eigenvalue 2, rank(A - 2I) = 2 => Geometric multiplicity = 3 - 2 = 1 < Algebraic multiplicity (2). Hence A is NOT diagonalizable.',
            co: 'CO2',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'Reduce the quadratic form Q = 3x² + 5y² + 3z² - 2yz + 2zx - 2xy into canonical form by orthogonal transformation and find its rank, index, and signature.',
            marks: 7,
            answerKey: 'Symmetric matrix A = [[3, -1, 1], [-1, 5, -1], [1, -1, 3]]. Eigenvalues = 2, 3, 6. Canonical form: 2X² + 3Y² + 6Z². All eigenvalues positive => Positive definite, Rank = 3, Index = 3, Signature = 3.',
            co: 'CO2',
            bloom: 'BL4'
          }
        ]
      },
      {
        id: 'm1-gc-2',
        questionNumber: 8,
        title: 'Differential Calculus & Mean Value Theorems',
        subParts: [
          {
            part: '(a)',
            question: 'If y = (sin⁻¹ x)², prove that (1 - x²) y_{n+2} - (2n + 1) x y_{n+1} - n² y_n = 0 using Leibniz’s theorem.',
            marks: 8,
            answerKey: 'y1 = 2 sin⁻¹ x / sqrt(1 - x²) => (1 - x²) y1² = 4y. Differentiating: (1 - x²) 2 y1 y2 - 2x y1² = 4 y1 => (1 - x²) y2 - x y1 - 2 = 0. Apply Leibniz rule n times to obtain identity.',
            co: 'CO1',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'State Taylor’s theorem with Cauchy’s and Lagrange’s form of remainders. Expand e^x cos(y) in powers of x and y up to second-degree terms.',
            marks: 7,
            answerKey: 'Taylor expansion around (0,0): f(x,y) = f(0,0) + [x f_x + y f_y] + (1/2!) [x² f_xx + 2xy f_xy + y² f_yy] + ... Result: 1 + x + (1/2)(x² - y²).',
            co: 'CO1',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'm1-gc-3',
        questionNumber: 9,
        title: 'Multiple Integrals & Applications',
        subParts: [
          {
            part: '(a)',
            question: 'Evaluate iint_R (x + y)² dx dy over the region bounded by x + y = 1, x + y = 2, 2x - y = 1, and 2x - y = 3 by transformation of variables.',
            marks: 8,
            answerKey: 'Substitute u = x + y, v = 2x - y. Jacobian J = d(x,y)/d(u,v) = 1 / |d(u,v)/d(x,y)| = 1 / |-3| = 1/3. Integral = integral_1^3 dv integral_1^2 u² (1/3) du = (2) * (1/3) * [u³/3]_1^2 = (2/3) * (7/3) = 14/9.',
            co: 'CO3',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'Find the volume of the ellipsoid x²/a² + y²/b² + z²/c² <= 1 using Dirichlet’s triple integral theorem.',
            marks: 7,
            answerKey: 'Substitute x = a u^(1/2), y = b v^(1/2), z = c w^(1/2). Dirichlet integral gives Volume = (4/3) pi a b c.',
            co: 'CO3',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'm1-gc-4',
        questionNumber: 10,
        title: 'Vector Integral Theorems (Gauss & Stokes)',
        subParts: [
          {
            part: '(a)',
            question: 'Verify Gauss Divergence Theorem for F = 4x i - 2y² j + z² k taken over the region bounded by cylinder x² + y² = 4 and planes z = 0 and z = 3.',
            marks: 8,
            answerKey: 'div F = d(4x)/dx + d(-2y²)/dy + d(z²)/dz = 4 - 4y + 2z. Volume integral = iiint (4 - 4y + 2z) dV in cylindrical coords: r from 0 to 2, theta from 0 to 2pi, z from 0 to 3 = 84 pi. Surface integral across top, bottom, and curved mantle also equals 84 pi.',
            co: 'CO4',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'Evaluate oint_C [(e^x dx + 2y dy - dz)] by Stokes’ theorem where C is the boundary curve of triangle with vertices (2,0,0), (0,3,0), and (0,0,6).',
            marks: 7,
            answerKey: 'curl F = det([i, j, k], [d/dx, d/dy, d/dz], [e^x, 2y, -1]) = 0. Since curl F = 0 everywhere, oint_C F · dr = iint (curl F · n) dS = 0.',
            co: 'CO4',
            bloom: 'BL3'
          }
        ]
      },
      {
        id: 'm1-gc-5',
        questionNumber: 11,
        title: 'Fourier Series & Partial Differential Foundations',
        subParts: [
          {
            part: '(a)',
            question: 'Obtain the Fourier series expansion of f(x) = x² in the interval -pi <= x <= pi. Hence deduce that: 1/1² - 1/2² + 1/3² - 1/4² + ... = pi² / 12.',
            marks: 8,
            answerKey: 'Even function => b_n = 0. a_0 = (2/pi) integral_0^pi x² dx = 2 pi² / 3. a_n = (2/pi) integral_0^pi x² cos(nx) dx = 4 (-1)^n / n². Series: x² = pi²/3 + 4 sum (-1)^n cos(nx) / n². At x = 0: 0 = pi²/3 - 4(1 - 1/4 + 1/9...) => sum = pi²/12.',
            co: 'CO5',
            bloom: 'BL4'
          },
          {
            part: '(b)',
            question: 'If u = f(y - z, z - x, x - y), prove that du/dx + du/dy + du/dz = 0.',
            marks: 7,
            answerKey: 'Let r = y - z, s = z - x, t = x - y. Apply chain rule: du/dx = f_s(-1) + f_t(1). du/dy = f_r(1) + f_t(-1). du/dz = f_r(-1) + f_s(1). Summing: du/dx + du/dy + du/dz = 0.',
            co: 'CO1',
            bloom: 'BL3'
          }
        ]
      }
    ],
    highYieldPYQs: [
      { topic: 'Cayley-Hamilton Theorem & Inverse Matrix Proof', frequency: 99, recurringMarks: 8, lastAppeared: '2024 Sem 1', recurrenceTag: 'Appeared Every Single Year' },
      { topic: 'Gauss Divergence Theorem & Surface Integrals', frequency: 93, recurringMarks: 8, lastAppeared: '2024 Sem 1', recurrenceTag: 'Mandatory Vector Calculus Problem' },
      { topic: 'Change of Order of Integration with Double Integrals', frequency: 90, recurringMarks: 5, lastAppeared: '2023 Sem 1', recurrenceTag: 'Group B Guaranteed Question' },
      { topic: 'Leibniz Rule for nth Derivative of (sin⁻¹ x)²', frequency: 88, recurringMarks: 8, lastAppeared: '2024 Sem 1', recurrenceTag: 'High-Yield Theoretical Proof' },
      { topic: 'Fourier Series of x or x² & Value Deductions', frequency: 86, recurringMarks: 8, lastAppeared: '2023 Sem 1', recurrenceTag: 'Recurring Group C Invariant' }
    ]
  }
];
