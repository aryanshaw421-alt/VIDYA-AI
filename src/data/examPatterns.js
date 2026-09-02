export const examStreams = [
  {
    id: 'btech_makaut',
    name: 'B.Tech (MAKAUT / University)',
    category: 'Engineering & College',
    standard: 'B.Tech 1st - 4th Year',
    boardLogo: '🎓',
    patternName: 'MAKAUT 70-Mark End-Sem Pattern',
    totalMarks: 70,
    durationMinutes: 180,
    structure: [
      { name: 'Group A (Compulsory 10 × 1m)', count: '10 Questions', marks: '10 Marks', desc: '10 Compulsory MCQs / 1-mark definitions (10 × 1m)' },
      { name: 'Group B (Any 3 of 5 × 5m)', count: '5 Questions', marks: '15 Marks', desc: 'Short answer questions & proofs (3 × 5m)' },
      { name: 'Group C (Any 3 of 5 × 15m)', count: '5 Questions', marks: '45 Marks', desc: 'Long numericals, code & circuit designs (3 × 15m)' }
    ],
    subjects: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Discrete Mathematics', 'Computer Networks', 'AI & Machine Learning']
  },
  {
    id: 'gate_2027',
    name: 'GATE 2027 (IIT Madras Official)',
    category: 'M.Tech, PSU & Direct PhD',
    standard: 'IIT Madras 32-Paper National Test',
    boardLogo: '🏛️',
    patternName: 'GATE 2027 IIT Madras Official 100-Mark Pattern',
    totalMarks: 100,
    durationMinutes: 180,
    structure: [
      { name: 'General Aptitude (GA)', count: '10 Qs (5×1m + 5×2m)', marks: '15 Marks', desc: 'Verbal, Numerical & Spatial Aptitude (-0.33 & -0.66 negative on MCQs)' },
      { name: 'Engineering Mathematics', count: '10 Qs', marks: '13 Marks', desc: 'Linear Algebra, Calculus, Probability & Discrete Math' },
      { name: 'Core Subject Engineering', count: '45 Qs', marks: '72 Marks', desc: 'MCQs (-1/3, -2/3), MSQs (No negative), NAT Numericals (No negative)' }
    ],
    papersList: ['CS (Computer Science & IT)', 'DA (Data Science & AI)', 'RA (Robotics & Automation - NEW)', 'EC (Electronics & Comm)', 'EE (Electrical)', 'ME (Mechanical)', 'CE (Civil)'],
    subjects: ['CS: Data Structures & Algorithms', 'CS: Operating Systems & DBMS', 'CS: Theory of Computation & Compiler', 'DA: Machine Learning & AI', 'RA: Robotics Kinematics & Part A', 'Engineering Mathematics & Aptitude']
  },
  {
    id: 'ssc_cgl',
    name: 'SSC CGL (Staff Selection Commission)',
    category: 'Govt & Administrative Exam',
    standard: 'Graduate Level National Exam',
    boardLogo: '🏛️',
    patternName: 'SSC CGL Official Tier-1 200-Mark Pattern',
    totalMarks: 200,
    durationMinutes: 60,
    structure: [
      { name: 'Section 1: Quantitative Aptitude', count: '25 Qs', marks: '50 Marks', desc: 'Maths, Algebra, Geometry, Arithmetic (25 × 2m, -0.50 negative)' },
      { name: 'Section 2: Reasoning & Intelligence', count: '25 Qs', marks: '50 Marks', desc: 'Logic, Analogies, Series, Syllogism (25 × 2m, -0.50 negative)' },
      { name: 'Section 3: English Comprehension', count: '25 Qs', marks: '50 Marks', desc: 'Grammar, Vocab, Error Spotting, Cloze Test (25 × 2m, -0.50)' },
      { name: 'Section 4: General Awareness', count: '25 Qs', marks: '50 Marks', desc: 'History, Polity, Economy, Science & Current Affairs (25 × 2m)' }
    ],
    subjects: ['Quantitative Aptitude', 'General Intelligence & Reasoning', 'English Comprehension', 'General Awareness (GK & Current Affairs)']
  },
  {
    id: 'cbse_12',
    name: 'Class 12 (CBSE / ISC / State Board)',
    category: 'Senior Secondary',
    standard: 'Class 12 Science / Commerce',
    boardLogo: '🏫',
    patternName: 'CBSE 80-Mark Official Board Pattern',
    totalMarks: 80,
    durationMinutes: 180,
    structure: [
      { name: 'Section A (20 MCQs)', count: '20 MCQs', marks: '20 Marks', desc: '18 Direct MCQs + 2 Assertion-Reasoning (20 × 1m)' },
      { name: 'Section B (5 VSA)', count: '5 Questions', marks: '10 Marks', desc: 'Very short answer questions (5 × 2m)' },
      { name: 'Section C (6 SA)', count: '6 Questions', marks: '18 Marks', desc: 'Short conceptual answer questions (6 × 3m)' },
      { name: 'Section D (4 LA)', count: '4 Questions', marks: '20 Marks', desc: 'Long derivations & step-marked numericals (4 × 5m)' },
      { name: 'Section E (3 Case Studies)', count: '3 Case Studies', marks: '12 Marks', desc: 'Passage/application real-world case studies (3 × 4m)' }
    ],
    subjects: ['Mathematics (Calculus & Vectors)', 'Physics (Optics & Electromagnetism)', 'Chemistry (Organic & Physical)', 'Computer Science (Python & SQL)', 'Biology']
  },
  {
    id: 'cbse_10',
    name: 'Class 10 (CBSE / ICSE / State Board)',
    category: 'Secondary School',
    standard: 'Class 10 Board Exam',
    boardLogo: '🎒',
    patternName: 'CBSE / ICSE 80-Mark Board Pattern',
    totalMarks: 80,
    durationMinutes: 180,
    structure: [
      { name: 'Section A (20 MCQs)', count: '20 MCQs', marks: '20 Marks', desc: '16 Objective MCQs + 4 Assertion-Reason (20 × 1m)' },
      { name: 'Section B (5 VSA)', count: '5 Questions', marks: '10 Marks', desc: 'Very short answers & definitions (5 × 2m)' },
      { name: 'Section C (6 SA)', count: '6 Questions', marks: '18 Marks', desc: 'Short answer proofs & derivations (6 × 3m)' },
      { name: 'Section D (4 LA)', count: '4 Questions', marks: '20 Marks', desc: 'Long answers & full theorem proofs (4 × 5m)' },
      { name: 'Section E (3 Case Studies)', count: '3 Questions', marks: '12 Marks', desc: 'Case study context-based questions (3 × 4m)' }
    ],
    subjects: ['Mathematics (Standard / Basic)', 'Science (Physics, Chemistry, Biology)', 'Social Science', 'English Language & Literature']
  },
  {
    id: 'jee_main',
    name: 'NTA JEE Main (Engineering Entrance)',
    category: 'NTA National Entrance',
    standard: 'B.Tech / BE All India Entrance',
    boardLogo: '⚡',
    patternName: 'NTA Official JEE Main 300-Mark CBT Pattern',
    totalMarks: 300,
    durationMinutes: 180,
    structure: [
      { name: 'Physics (Sec A: 20 MCQs + Sec B: 5 NAT)', count: '25 Qs', marks: '100 Marks', desc: '+4 for correct, -1 for incorrect (MCQ & Numerical NAT)' },
      { name: 'Chemistry (Sec A: 20 MCQs + Sec B: 5 NAT)', count: '25 Qs', marks: '100 Marks', desc: '+4 for correct, -1 for incorrect' },
      { name: 'Mathematics (Sec A: 20 MCQs + Sec B: 5 NAT)', count: '25 Qs', marks: '100 Marks', desc: '+4 for correct, -1 for incorrect' }
    ],
    subjects: ['Physics (Mechanics, Optics, Modern Physics)', 'Chemistry (Physical, Organic, Inorganic)', 'Mathematics (Calculus, Coordinate Geometry, Vectors)']
  },
  {
    id: 'bca_college',
    name: 'BCA / MCA (College Semester)',
    category: 'Computer Applications',
    standard: 'BCA / BSc CS / MCA',
    boardLogo: '💻',
    patternName: 'BCA University 70-Mark Pattern',
    totalMarks: 70,
    durationMinutes: 180,
    structure: [
      { name: 'Part A (10 MCQs)', count: '10 MCQs', marks: '10 Marks', desc: 'Syntax, output predictions & fundamentals (10 × 1m)' },
      { name: 'Part B (4 of 6 Logic)', count: '6 Questions', marks: '20 Marks', desc: 'Core programming logic & algorithms (4 × 5m)' },
      { name: 'Part C (4 of 6 Programs)', count: '6 Questions', marks: '40 Marks', desc: 'Full program code, database schema & design (4 × 10m)' }
    ],
    subjects: ['Python Programming', 'Java & OOPs', 'Database Management (SQL)', 'Web Development', 'C / C++ Programming', 'Software Engineering']
  }
];

export const sampleMockPapers = {
  btech_makaut: [
    {
      id: 'makaut-dsa-full-2026',
      title: 'MAKAUT Official End-Semester Examination: Data Structures & Algorithms',
      subject: 'Data Structures & Algorithms',
      paperCode: 'PCC-CS301',
      totalMarks: 70,
      duration: '3 Hours',
      groups: [
        {
          name: 'Group A (Compulsory 10 × 1m = 10 Marks)',
          instructions: 'Answer ALL ten questions. Each question carries 1 mark.',
          questions: [
            {
              id: 'm_q1',
              type: 'mcq',
              text: '1. What is the worst-case time complexity of searching an element in an AVL Tree with N nodes?',
              options: ['A) O(1)', 'B) O(log N)', 'C) O(N)', 'D) O(N log N)'],
              correct: 'B) O(log N)',
              explanation: 'Because AVL trees are strictly height-balanced with balance factor between -1 and +1, the height is strictly bounded by 1.44 log2(N), guaranteeing O(log N) search.',
              marks: 1
            },
            {
              id: 'm_q2',
              type: 'mcq',
              text: '2. Which data structure is primarily used to implement Breadth-First Search (BFS) on a graph?',
              options: ['A) Stack', 'B) Queue', 'C) Priority Queue', 'D) Binary Search Tree'],
              correct: 'B) Queue',
              explanation: 'BFS explores vertices level by level using FIFO (First-In-First-Out) ordering maintained by a Queue.',
              marks: 1
            },
            {
              id: 'm_q3',
              type: 'mcq',
              text: '3. What is the recurrence relation for the Merge Sort algorithm on an array of size N?',
              options: ['A) T(N) = 2T(N/2) + O(N)', 'B) T(N) = T(N-1) + O(N)', 'C) T(N) = 2T(N/2) + O(1)', 'D) T(N) = T(N/2) + O(N)'],
              correct: 'A) T(N) = 2T(N/2) + O(N)',
              explanation: 'Merge sort divides the problem into 2 subproblems of size N/2 and merges them in linear time O(N), yielding T(N) = 2T(N/2) + O(N) = O(N log N).',
              marks: 1
            },
            {
              id: 'm_q4',
              type: 'mcq',
              text: '4. The postfix expression corresponding to the infix expression `(A + B) * (C - D)` is:',
              options: ['A) AB+CD-*', 'B) +AB*-CD', 'C) ABCD+-*', 'D) AB+*CD-'],
              correct: 'A) AB+CD-*',
              explanation: '(A + B) becomes AB+, (C - D) becomes CD-. Multiplying both results in AB+CD-*.',
              marks: 1
            },
            {
              id: 'm_q5',
              type: 'mcq',
              text: '5. What is the maximum number of nodes at level `L` of a binary tree (root at level 0)?',
              options: ['A) 2^L', 'B) 2^(L+1) - 1', 'C) 2^(L-1)', 'D) 2L'],
              correct: 'A) 2^L',
              explanation: 'At level 0 (root) = 2^0 = 1 node. At level 1 = 2^1 = 2 nodes. At level L = 2^L nodes.',
              marks: 1
            },
            {
              id: 'm_q6',
              type: 'mcq',
              text: '6. In a min-heap with N elements, where is the second smallest element guaranteed to be located?',
              options: ['A) At the root', 'B) Either at index 1 or index 2 (children of root)', 'C) At any leaf node', 'D) At index N-1'],
              correct: 'B) Either at index 1 or index 2 (children of root)',
              explanation: 'The root holds the smallest element (index 0). The second smallest must be one of the immediate children of the root (index 1 or 2).',
              marks: 1
            },
            {
              id: 'm_q7',
              type: 'mcq',
              text: '7. Which collision resolution technique stores all colliding keys in an external linked list at each bucket?',
              options: ['A) Linear Probing', 'B) Quadratic Probing', 'C) Separate Chaining', 'D) Double Hashing'],
              correct: 'C) Separate Chaining',
              explanation: 'Separate Chaining attaches a linked list to each hash table slot to store all collided elements.',
              marks: 1
            },
            {
              id: 'm_q8',
              type: 'mcq',
              text: '8. How many edges does a connected spanning tree of a graph with `V` vertices contain?',
              options: ['A) V', 'B) V - 1', 'C) V + 1', 'D) V(V-1)/2'],
              correct: 'B) V - 1',
              explanation: 'A tree with V vertices always contains exactly V - 1 edges and no cycles.',
              marks: 1
            },
            {
              id: 'm_q9',
              type: 'mcq',
              text: '9. Which sorting algorithm has the best average-case performance and is typically used in C qsort?',
              options: ['A) Bubble Sort', 'B) Insertion Sort', 'C) Quick Sort', 'D) Selection Sort'],
              correct: 'C) Quick Sort',
              explanation: 'Quick Sort has an average case of O(N log N) with excellent cache locality and in-place partitioning.',
              marks: 1
            },
            {
              id: 'm_q10',
              type: 'mcq',
              text: '10. What is the time complexity of deleting a node given a pointer to it in a doubly linked list?',
              options: ['A) O(1)', 'B) O(N)', 'C) O(log N)', 'D) O(N^2)'],
              correct: 'A) O(1)',
              explanation: 'Because previous and next pointers are accessible directly (node->prev and node->next), node removal takes O(1) pointer updates.',
              marks: 1
            }
          ]
        },
        {
          name: 'Group B (Answer any THREE: 3 × 5m = 15 Marks)',
          instructions: 'Answer any THREE questions. Each question carries 5 marks with step-marking.',
          questions: [
            {
              id: 'm_b1',
              type: 'subjective',
              text: 'Question 2: Explain the four AVL Tree rotation techniques (LL, RR, LR, RL) with neat step-by-step diagrams.',
              subparts: ['Explain single LL & RR rotations with balance factor criteria', 'Explain double LR & RL rotations using an example insertion of [10, 20, 30, 25]'],
              modelAnswer: 'Step 1 (2m): Define balance factor BF = Height(Left) - Height(Right). When |BF| > 1, tree is unbalanced.\nStep 2 (1.5m): LL rotation performs a single right rotation around node with BF=+2. RR performs a single left rotation around node with BF=-2.\nStep 3 (1.5m): LR rotation performs Left rotation on Left child followed by Right rotation on root.',
              marks: 5
            },
            {
              id: 'm_b2',
              type: 'subjective',
              text: 'Question 3: Write a C function to delete the node containing the minimum key from a non-empty Binary Search Tree.',
              subparts: ['Provide C struct node definition', 'Provide recursive or iterative deleteMin(struct node* root) function'],
              modelAnswer: 'struct node* deleteMin(struct node* root) {\n    if (root->left == NULL) {\n        struct node* temp = root->right;\n        free(root);\n        return temp;\n    }\n    root->left = deleteMin(root->left);\n    return root;\n}',
              marks: 5
            },
            {
              id: 'm_b3',
              type: 'subjective',
              text: 'Question 4: Convert the following Infix expression to Postfix using the Stack algorithm: `A + B * (C ^ D - E) ^ (F + G * H) - I`',
              subparts: ['Show stack operator table at each token scan', 'Write the final postfix output string'],
              modelAnswer: 'Step-by-step stack simulation: Operators ^ has highest precedence and right-associativity, * has next, + has lowest.\nFinal Postfix: `A B C D ^ E - F G H * + ^ * + I -`',
              marks: 5
            },
            {
              id: 'm_b4',
              type: 'subjective',
              text: 'Question 5: Differentiate between BFS (Breadth First Search) and DFS (Depth First Search) with respect to data structure, time complexity, and cycle detection.',
              subparts: ['Comparison table with 4 parameters', 'Applications of BFS vs DFS'],
              modelAnswer: '1. Data Structure: BFS uses Queue (FIFO), DFS uses Stack / Recursion (LIFO).\n2. Time Complexity: Both are O(V + E).\n3. Space Complexity: BFS is O(V) (width of graph), DFS is O(V) (depth of tree).\n4. Application: BFS finds shortest path in unweighted graphs; DFS finds strongly connected components & topological sorting.',
              marks: 5
            },
            {
              id: 'm_b5',
              type: 'subjective',
              text: 'Question 6: What is a Threaded Binary Tree? Explain the difference between One-Way (Single) and Two-Way (Double) Threaded Binary Trees.',
              subparts: ['Definition of threads (using NULL pointers for inorder predecessor/successor)', 'Memory and traversal advantages'],
              modelAnswer: 'In standard binary trees, 50% of child pointers are NULL. A Threaded Binary Tree stores Inorder Predecessor in left NULL pointers and Inorder Successor in right NULL pointers, enabling stack-less Inorder traversal in O(1) space.',
              marks: 5
            }
          ]
        },
        {
          name: 'Group C (Answer any THREE: 3 × 15m = 45 Marks)',
          instructions: 'Answer any THREE questions. Each question carries 15 marks with detailed subparts.',
          questions: [
            {
              id: 'm_c1',
              type: 'subjective',
              text: 'Question 7 (15 Marks):\na) Explain Dijkstra\'s Single Source Shortest Path Algorithm. Write its pseudocode. (8m)\nb) Apply Dijkstra\'s algorithm to find shortest paths from Source node A on the graph with vertices {A, B, C, D, E}. Show distance table update at each step. (7m)',
              subparts: ['Algorithm pseudocode & complexity analysis O(V^2) or O((V+E) log V)', 'Step-by-step distance table update table for all 5 iterations'],
              modelAnswer: 'Part (a) [8m]: Maintain dist[] array initialized to infinity, visited[] array. Repeatedly pick unvisited vertex u with min dist[u], mark visited, relax edges (u,v): dist[v] = min(dist[v], dist[u] + w(u,v)).\nPart (b) [7m]: Iteration 1: visit A, dist[B]=4, dist[C]=2. Iteration 2: visit C, dist[D]=5. Iteration 3: visit B, dist[E]=6.',
              marks: 15
            },
            {
              id: 'm_c2',
              type: 'subjective',
              text: 'Question 8 (15 Marks):\na) What is a B-Tree of order `m`? State all its formal properties. (6m)\nb) Construct a B-Tree of order 5 (max 4 keys, max 5 children) by inserting the following sequence of keys: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100. Show node splitting clearly. (9m)',
              subparts: ['Formal mathematical properties of B-Tree (root has min 2 children, internal nodes have ceil(m/2) children)', 'Step-by-step tree drawings showing middle key promotion on overflow'],
              modelAnswer: 'Part (a) [6m]: B-Tree of order m: every node has at most m children, every non-leaf node (except root) has at least ⌈m/2⌉ children, all leaves are at the same depth.\nPart (b) [9m]: Inserting 10, 20, 30, 40, 50 causes overflow at 5 keys. 30 promotes to root. Children: [10, 20] and [40, 50]. Continuing insertions promotes 70 to root next.',
              marks: 15
            },
            {
              id: 'm_c3',
              type: 'subjective',
              text: 'Question 9 (15 Marks):\na) Explain the Quick Sort algorithm. Show how the Partition function works with an example array [38, 27, 43, 3, 9, 82, 10]. (8m)\nb) Derive the Best-Case O(N log N) and Worst-Case O(N^2) time complexities using recurrence relations. (7m)',
              subparts: ['Partition trace with pivot selection', 'Recurrence solving: T(N) = 2T(N/2) + O(N) vs T(N) = T(N-1) + O(N)'],
              modelAnswer: 'Part (a) [8m]: Pivot chosen as last element 10. Elements < 10 moved left [3, 9, 10, ...], elements > 10 moved right [38, 27, 43, 82].\nPart (b) [7m]: Best Case recurrence T(N) = 2T(N/2) + cN -> O(N log N) by Master Theorem. Worst Case T(N) = T(N-1) + cN -> c(N + N-1 + ... + 1) = O(N^2).',
              marks: 15
            }
          ]
        }
      ]
    }
  ],

  gate_2027: [
    {
      id: 'gate-2027-full-cbt',
      title: 'GATE 2027 (IIT Madras Official 65-Question CBT Exam: CS / DA / RA)',
      subject: 'Computer Science & Engineering Mathematics',
      paperCode: 'GATE-2027-IITM-CS',
      totalMarks: 100,
      duration: '3 Hours',
      groups: [
        {
          name: 'General Aptitude (10 Qs = 15 Marks)',
          instructions: 'Q1-Q5 carry 1 mark each (-0.33 negative). Q6-Q10 carry 2 marks each (-0.66 negative).',
          questions: [
            {
              id: 'g_ga1',
              type: 'mcq',
              text: '1. The driver was arrested for rash driving because an accident ________ occurred due to his negligence.',
              options: ['A) had', 'B) have', 'C) having', 'D) has'],
              correct: 'A) had',
              explanation: 'Past perfect tense "had" is required as the event occurred before the arrest.',
              marks: 1
            },
            {
              id: 'g_ga2',
              type: 'mcq',
              text: '2. If p : q = 3 : 4 and q : r = 8 : 9, then what is the ratio p : r?',
              options: ['A) 1 : 2', 'B) 2 : 3', 'C) 3 : 2', 'D) 4 : 5'],
              correct: 'B) 2 : 3',
              explanation: 'p/r = (p/q) * (q/r) = (3/4) * (8/9) = 24/36 = 2/3.',
              marks: 1
            },
            {
              id: 'g_ga3',
              type: 'mcq',
              text: '3. Choose the grammatically correct sentence:',
              options: ['A) Neither of the candidates were selected.', 'B) Neither of the candidates was selected.', 'C) Neither candidates was selected.', 'D) Neither of candidate were selected.'],
              correct: 'B) Neither of the candidates was selected.',
              explanation: '"Neither" takes a singular verb "was".',
              marks: 1
            },
            {
              id: 'g_ga4',
              type: 'mcq',
              text: '4. Find the missing number in the sequence: 2, 6, 12, 20, 30, ?',
              options: ['A) 40', 'B) 42', 'C) 44', 'D) 46'],
              correct: 'B) 42',
              explanation: 'Differences are +4, +6, +8, +10, +12. 30 + 12 = 42. (Or n^2 + n: 1^2+1=2, 2^2+2=6... 6^2+6=42).',
              marks: 1
            },
            {
              id: 'g_ga5',
              type: 'mcq',
              text: '5. A train running at 72 km/h crosses a 200m long platform in 22 seconds. What is the length of the train?',
              options: ['A) 240 m', 'B) 200 m', 'C) 220 m', 'D) 260 m'],
              correct: 'A) 240 m',
              explanation: 'Speed = 72 * (5/18) = 20 m/s. Total distance = 20 * 22 = 440 m. Train length = 440 - 200 = 240 m.',
              marks: 1
            }
          ]
        },
        {
          name: 'Engineering Mathematics (8 Qs = 13 Marks)',
          instructions: 'Linear Algebra, Calculus, Discrete Mathematics & Probability.',
          questions: [
            {
              id: 'g_em1',
              type: 'mcq',
              text: '6. Let M be an n × n real symmetric matrix with eigenvalues λ1, λ2, ..., λn. If M is positive definite, which of the following MUST be true?',
              options: ['A) All eigenvalues λi > 0', 'B) det(M) can be negative', 'C) Trace(M) = 0', 'D) M has complex eigenvalues'],
              correct: 'A) All eigenvalues λi > 0',
              explanation: 'A real symmetric matrix is positive definite if and only if all its eigenvalues are strictly positive (λi > 0).',
              marks: 2
            },
            {
              id: 'g_em2',
              type: 'mcq',
              text: '7. What is the rank of the matrix A = [[1, 2, 3], [2, 4, 6], [3, 6, 9]]?',
              options: ['A) 1', 'B) 2', 'C) 3', 'D) 0'],
              correct: 'A) 1',
              explanation: 'Rows R2 = 2*R1 and R3 = 3*R1. Row reduced echelon form has only 1 non-zero row. Rank is 1.',
              marks: 2
            },
            {
              id: 'g_em3',
              type: 'mcq',
              text: '8. If a random variable X follows Poisson distribution such that P(X = 1) = P(X = 2), what is the mean of the distribution λ?',
              options: ['A) 1', 'B) 2', 'C) 3', 'D) 4'],
              correct: 'B) 2',
              explanation: 'P(X=k) = (e^-λ * λ^k) / k!. Setting k=1 and k=2 gives e^-λ * λ = e^-λ * λ^2 / 2 => λ = λ^2 / 2 => λ = 2.',
              marks: 2
            }
          ]
        },
        {
          name: 'Core Technical: CS, DA & RA (72 Marks)',
          instructions: 'Mastery questions across Algorithms, Operating Systems, DBMS & Machine Learning.',
          questions: [
            {
              id: 'g_cs1',
              type: 'mcq',
              text: '9. Consider the recurrence relation: T(n) = 2T(n/2) + n log n, with T(1) = 1. What is the asymptotic time complexity of T(n)?',
              options: ['A) Θ(n log^2 n)', 'B) Θ(n log n)', 'C) Θ(n^2)', 'D) Θ(n)'],
              correct: 'A) Θ(n log^2 n)',
              explanation: 'Master Theorem Case 2: a=2, b=2, n^(log2 2) = n^1. f(n) = n log n = n^1 * log^1 n. Solution: T(n) = Θ(n log^(1+1) n) = Θ(n log^2 n).',
              marks: 2
            },
            {
              id: 'g_cs2',
              type: 'mcq',
              text: '10. In a paging system with 32-bit virtual addresses, 4 KB page size, and 4 bytes per page table entry, what is the size of a single-level page table?',
              options: ['A) 4 MB', 'B) 2 MB', 'C) 1 MB', 'D) 8 MB'],
              correct: 'A) 4 MB',
              explanation: 'Page size = 4 KB = 2^12 bytes. Number of pages = 2^32 / 2^12 = 2^20 pages. Page table size = 2^20 entries * 4 bytes = 4 * 2^20 bytes = 4 MB.',
              marks: 2
            },
            {
              id: 'g_cs3',
              type: 'mcq',
              text: '11. Which of the following scheduling algorithms is provably optimal for minimizing average waiting time for a set of stationary processes?',
              options: ['A) Shortest Job First (SJF)', 'B) First-Come First-Served (FCFS)', 'C) Round Robin (RR)', 'D) Priority Scheduling'],
              correct: 'A) Shortest Job First (SJF)',
              explanation: 'SJF gives minimum average waiting time because moving a short process before a long one decreases the wait time of the short process more than it increases the wait time of the long process.',
              marks: 2
            },
            {
              id: 'g_cs4',
              type: 'mcq',
              text: '12. In a relational database, if a relation R(A, B, C, D) has functional dependencies {A -> B, B -> C, C -> D}, what is the highest normal form of R?',
              options: ['A) 1NF', 'B) 2NF', 'C) 3NF', 'D) BCNF'],
              correct: 'B) 2NF',
              explanation: 'Candidate key is A. In B -> C, B is neither a superkey nor is C a prime attribute. Thus R violates 3NF due to transitive dependency, but satisfies 2NF (no partial dependency).',
              marks: 2
            }
          ]
        }
      ]
    }
  ],

  ssc_cgl: [
    {
      id: 'ssc-cgl-tier1-full-paper',
      title: 'SSC CGL Official Tier-1 Full Mock Paper (100 Questions / 200 Marks / 60 Mins)',
      subject: 'Quantitative Aptitude, Reasoning, English & GK',
      paperCode: 'SSC-CGL-T1-2026',
      totalMarks: 200,
      duration: '60 Minutes',
      groups: [
        {
          name: 'Section 1: Quantitative Aptitude (25 Qs × 2m = 50 Marks)',
          instructions: 'Negative marking: -0.50 marks for every wrong answer.',
          questions: [
            {
              id: 's_q1',
              type: 'mcq',
              text: '1. A shopkeeper marks an article 40% above the cost price and allows a discount of 25% on the marked price. If his profit is ₹150, what is the cost price of the article?',
              options: ['A) ₹3,000', 'B) ₹2,500', 'C) ₹2,000', 'D) ₹3,500'],
              correct: 'A) ₹3,000',
              explanation: 'Let CP = 100x. MP = 140x. SP = 140x * 0.75 = 105x. Profit = 105x - 100x = 5x = ₹150 => x = 30 => CP = 100 * 30 = ₹3,000.',
              marks: 2
            },
            {
              id: 's_q2',
              type: 'mcq',
              text: '2. In triangle ABC, AD is the angle bisector of ∠A. If AB = 8 cm, AC = 12 cm, and BC = 10 cm, find the length of BD.',
              options: ['A) 4 cm', 'B) 5 cm', 'C) 6 cm', 'D) 3.5 cm'],
              correct: 'A) 4 cm',
              explanation: 'By Angle Bisector Theorem, BD/DC = AB/AC = 8/12 = 2/3. Since BC = 10 cm, BD = (2/5) * 10 = 4 cm.',
              marks: 2
            },
            {
              id: 's_q3',
              type: 'mcq',
              text: '3. If x + 1/x = 5, then what is the value of x^3 + 1/x^3?',
              options: ['A) 110', 'B) 125', 'C) 140', 'D) 115'],
              correct: 'A) 110',
              explanation: 'Formula: x^3 + 1/x^3 = k^3 - 3k = 5^3 - 3(5) = 125 - 15 = 110.',
              marks: 2
            },
            {
              id: 's_q4',
              type: 'mcq',
              text: '4. Two pipes A and B can fill a tank in 12 hours and 15 hours respectively. If both pipes are opened together, in how many hours will the tank be full?',
              options: ['A) 6 hours 40 mins', 'B) 7 hours', 'C) 6 hours', 'D) 7 hours 30 mins'],
              correct: 'A) 6 hours 40 mins',
              explanation: 'Total capacity = LCM(12, 15) = 60 units. Efficiency of A = 5, B = 4. Combined = 9 units/hr. Time = 60/9 = 20/3 hours = 6 hours 40 minutes.',
              marks: 2
            },
            {
              id: 's_q5',
              type: 'mcq',
              text: '5. The simple interest on a sum of money for 3 years at 8% per annum is ₹2,400. What would be the compound interest on the same sum for 2 years at 10% per annum?',
              options: ['A) ₹2,100', 'B) ₹2,000', 'C) ₹2,200', 'D) ₹2,050'],
              correct: 'A) ₹2,100',
              explanation: 'Principal P = (SI * 100) / (R * T) = (2400 * 100) / (8 * 3) = ₹10,000. CI for 2 yrs at 10% = 10000 * [(1.10)^2 - 1] = 10000 * 0.21 = ₹2,100.',
              marks: 2
            }
          ]
        },
        {
          name: 'Section 2: Reasoning & General Intelligence (25 Qs = 50 Marks)',
          instructions: 'Negative marking: -0.50 marks for wrong answer.',
          questions: [
            {
              id: 's_r1',
              type: 'mcq',
              text: '6. Select the related number from the given alternatives: 12 : 144 :: 18 : ?',
              options: ['A) 324', 'B) 288', 'C) 360', 'D) 256'],
              correct: 'A) 324',
              explanation: 'Pattern: n : n^2. 12^2 = 144, 18^2 = 324.',
              marks: 2
            },
            {
              id: 's_r2',
              type: 'mcq',
              text: '7. Statements: All Books are Pens. All Pens are Papers.\nConclusions: I. All Books are Papers. II. Some Papers are Books.',
              options: ['A) Both conclusion I and II follow', 'B) Only I follows', 'C) Only II follows', 'D) Neither follows'],
              correct: 'A) Both conclusion I and II follow',
              explanation: 'Since Books ⊂ Pens ⊂ Papers, all Books are Papers and some Papers are Books.',
              marks: 2
            }
          ]
        },
        {
          name: 'Section 3: English Comprehension (25 Qs = 50 Marks)',
          instructions: 'Vocabulary, Grammar, Idioms and Cloze Test.',
          questions: [
            {
              id: 's_e1',
              type: 'mcq',
              text: '8. Select the most appropriate SYNONYM of the given word: "CANDID"',
              options: ['A) Frank / Honest', 'B) Deceitful', 'C) Secretive', 'D) Arrogant'],
              correct: 'A) Frank / Honest',
              explanation: '"Candid" means truthful and straightforward; frank.',
              marks: 2
            },
            {
              id: 's_e2',
              type: 'mcq',
              text: '9. Select the meaning of the idiom: "Bite the bullet"',
              options: ['A) Face a difficult situation with courage', 'B) Start a fight', 'C) To eat fast', 'D) Avoid responsibility'],
              correct: 'A) Face a difficult situation with courage',
              explanation: '"Bite the bullet" means to endure a painful or difficult situation with resilience.',
              marks: 2
            }
          ]
        },
        {
          name: 'Section 4: General Awareness (25 Qs = 50 Marks)',
          instructions: 'History, Polity, Economy, Science and Current Affairs.',
          questions: [
            {
              id: 's_g1',
              type: 'mcq',
              text: '10. Which Article of the Indian Constitution provides for the "Right to Constitutional Remedies"?',
              options: ['A) Article 32', 'B) Article 19', 'C) Article 21', 'D) Article 14'],
              correct: 'A) Article 32',
              explanation: 'Article 32 is called the "Heart and Soul of the Constitution" by Dr. B.R. Ambedkar, empowering citizens to approach the Supreme Court for enforcement of Fundamental Rights.',
              marks: 2
            }
          ]
        }
      ]
    }
  ],

  cbse_12: [
    {
      id: 'cbse-math-12-full',
      title: 'CBSE Official Board Model Paper: Class 12 Mathematics (Calculus, Vectors & Probability)',
      subject: 'Mathematics',
      paperCode: '041/1/2026',
      totalMarks: 80,
      duration: '3 Hours',
      groups: [
        {
          name: 'Section A (20 MCQs × 1m = 20 Marks)',
          instructions: 'Questions 1 to 20 carry 1 mark each. Questions 19 & 20 are Assertion-Reason based.',
          questions: [
            {
              id: 'c12_1',
              type: 'mcq',
              text: '1. If A is a square matrix of order 3 and |A| = 5, then what is the value of |adj A|?',
              options: ['A) 5', 'B) 25', 'C) 125', 'D) 1/5'],
              correct: 'B) 25',
              explanation: 'Property: |adj A| = |A|^(n-1). For n = 3, |adj A| = 5^(3-1) = 5^2 = 25.',
              marks: 1
            },
            {
              id: 'c12_2',
              type: 'mcq',
              text: '2. What is the value of ∫ [sec^2(log x) / x] dx?',
              options: ['A) tan(log x) + C', 'B) cot(log x) + C', 'C) sec(log x) + C', 'D) log(tan x) + C'],
              correct: 'A) tan(log x) + C',
              explanation: 'Let u = log x, du = (1/x) dx. The integral becomes ∫ sec^2(u) du = tan(u) + C = tan(log x) + C.',
              marks: 1
            },
            {
              id: 'c12_3',
              type: 'mcq',
              text: '3. What is the order and degree of the differential equation: (d^2y/dx^2)^3 + (dy/dx)^4 + y = 0?',
              options: ['A) Order 2, Degree 3', 'B) Order 3, Degree 2', 'C) Order 2, Degree 4', 'D) Order 4, Degree 2'],
              correct: 'A) Order 2, Degree 3',
              explanation: 'The highest derivative is d^2y/dx^2 (Order = 2). The power of the highest derivative is 3 (Degree = 3).',
              marks: 1
            },
            {
              id: 'c12_4',
              type: 'mcq',
              text: '4. If vectors a and b are perpendicular to each other, what is the value of a · b?',
              options: ['A) 0', 'B) 1', 'C) |a||b|', 'D) -1'],
              correct: 'A) 0',
              explanation: 'a · b = |a||b| cos(90°) = 0.',
              marks: 1
            },
            {
              id: 'c12_5',
              type: 'mcq',
              text: '5. Assertion (A): The function f(x) = |x - 3| is continuous at x = 3 but not differentiable at x = 3.\nReason (R): Left hand derivative at x=3 is -1 and Right hand derivative is +1.',
              options: ['A) Both A and R are true and R is correct explanation of A', 'B) Both A and R are true but R is not correct explanation', 'C) A is true, R is false', 'D) A is false, R is true'],
              correct: 'A) Both A and R are true and R is correct explanation of A',
              explanation: 'LHD = -1 and RHD = +1. Since LHD != RHD, derivative does not exist.',
              marks: 1
            }
          ]
        },
        {
          name: 'Section D (Long Answer Questions × 5m = 20 Marks)',
          instructions: 'Detailed derivations and step-marked solutions.',
          questions: [
            {
              id: 'c12_d1',
              type: 'subjective',
              text: '6. Find the area of the region bounded by the ellipse x^2/16 + y^2/9 = 1 using the method of definite integration.',
              subparts: ['State symmetry properties across 4 quadrants', 'Evaluate integral using standard formula ∫√(a^2 - x^2) dx', 'Calculate final area in sq units'],
              modelAnswer: 'Area = 4 * ∫[0 to 4] (3/4)√(16 - x^2) dx.\nUsing ∫√(a^2 - x^2) dx = (x/2)√(a^2-x^2) + (a^2/2)sin^-1(x/a).\nArea = 4 * (3/4) * [ 0 + (16/2)*sin^-1(1) ] = 3 * 8 * (π/2) = 12π sq. units.',
              marks: 5
            }
          ]
        }
      ]
    }
  ],

  jee_main: [
    {
      id: 'jee-main-full-mock-2026',
      title: 'NTA JEE Main Official CBT Mock: Physics, Chemistry & Mathematics',
      subject: 'NTA Engineering CBT Entrance',
      paperCode: 'NTA-JEE-2026-SET-A',
      totalMarks: 300,
      duration: '3 Hours',
      groups: [
        {
          name: 'Section A: Physics (20 MCQs = 80 Marks)',
          instructions: '+4 for correct, -1 for incorrect. Official NTA marking.',
          questions: [
            {
              id: 'jee_p1',
              type: 'mcq',
              text: '1. A particle moves in a circular path of radius R with constant speed v. What is the magnitude of average acceleration during a time interval in which it turns through an angle of 60°?',
              options: ['A) 3v^2 / (πR)', 'B) 2v^2 / (πR)', 'C) v^2 / R', 'D) 6v^2 / (πR)'],
              correct: 'A) 3v^2 / (πR)',
              explanation: 'Change in velocity Δv = 2v sin(θ/2) = 2v sin(30°) = v. Time taken Δt = (R * θ) / v = (R * π/3) / v = πR / (3v). Average acceleration = |Δv| / Δt = v / (πR / 3v) = 3v^2 / (πR).',
              marks: 4
            },
            {
              id: 'jee_p2',
              type: 'mcq',
              text: '2. In a Young’s double slit experiment, if the distance between the slits is halved and distance from screen is doubled, the fringe width will:',
              options: ['A) Become 4 times', 'B) Become 2 times', 'C) Halve', 'D) Remain unchanged'],
              correct: 'A) Become 4 times',
              explanation: 'Fringe width β = λD/d. New fringe width β\' = λ(2D)/(d/2) = 4(λD/d) = 4β.',
              marks: 4
            },
            {
              id: 'jee_p3',
              type: 'mcq',
              text: '3. What is the de Broglie wavelength of an electron accelerated through a potential difference of 100 V?',
              options: ['A) 1.227 Å', 'B) 0.1227 Å', 'C) 12.27 Å', 'D) 0.0123 Å'],
              correct: 'A) 1.227 Å',
              explanation: 'λ = 12.27 / √V Å = 12.27 / √100 = 1.227 Å.',
              marks: 4
            }
          ]
        },
        {
          name: 'Section B: Chemistry (20 MCQs = 80 Marks)',
          instructions: '+4 for correct, -1 for incorrect.',
          questions: [
            {
              id: 'jee_c1',
              type: 'mcq',
              text: '4. Which among the following molecules exhibits the highest dipole moment?',
              options: ['A) NH3', 'B) NF3', 'C) BF3', 'D) CCl4'],
              correct: 'A) NH3',
              explanation: 'In NH3, the individual N-H bond dipoles and the lone pair dipole reinforce each other in the same direction, whereas in NF3, the highly electronegative Fluorines pull electron density in opposition to the lone pair.',
              marks: 4
            },
            {
              id: 'jee_c2',
              type: 'mcq',
              text: '5. The oxidation state of Chromium in CrO5 (Chromium peroxide) is:',
              options: ['A) +6', 'B) +10', 'C) +4', 'D) +3'],
              correct: 'A) +6',
              explanation: 'CrO5 possesses a butterfly structure containing two peroxy bonds (-O-O- where O has -1 state) and one oxo bond (=O with -2 state). x + 4(-1) + 1(-2) = 0 => x = +6.',
              marks: 4
            }
          ]
        },
        {
          name: 'Section C: Mathematics (20 MCQs = 80 Marks)',
          instructions: '+4 for correct, -1 for incorrect.',
          questions: [
            {
              id: 'jee_m1',
              type: 'mcq',
              text: '6. What is the value of lim(x → 0) [(e^x - e^(-x) - 2x) / (x - sin x)]?',
              options: ['A) 2', 'B) 1', 'C) 0', 'D) 4'],
              correct: 'A) 2',
              explanation: 'Using Taylor series expansions: e^x - e^(-x) - 2x = 2(x^3/3!) + ... = x^3/3. x - sin x = x^3/6. Limit = (x^3/3) / (x^3/6) = 6/3 = 2.',
              marks: 4
            },
            {
              id: 'jee_m2',
              type: 'mcq',
              text: '7. If α and β are roots of x^2 - 6x - 2 = 0 with a_n = α^n - β^n, what is the value of (a_10 - 2a_8) / (2a_9)?',
              options: ['A) 3', 'B) 2', 'C) 1', 'D) 6'],
              correct: 'A) 3',
              explanation: 'By Newton’s Sums: α^2 - 6α - 2 = 0 => α^10 - 6α^9 - 2α^8 = 0. Similarly for β. Subtracting gives a_10 - 2a_8 = 6a_9. Hence (a_10 - 2a_8)/(2a_9) = 6a_9 / 2a_9 = 3.',
              marks: 4
            }
          ]
        }
      ]
    }
  ],

  cbse_10: [
    {
      id: 'cbse-class10-science-math',
      title: 'CBSE Class 10 Official Board Model Paper: Science & Mathematics',
      subject: 'Science (Physics, Chemistry, Biology)',
      paperCode: 'CBSE-10-SCI-2026',
      totalMarks: 80,
      duration: '3 Hours',
      groups: [
        {
          name: 'Section A (20 MCQs × 1m = 20 Marks)',
          instructions: 'Questions 1 to 20 carry 1 mark each.',
          questions: [
            {
              id: 'c10_1',
              type: 'mcq',
              text: '1. What happens when dilute hydrochloric acid is added to iron filings?',
              options: ['A) Hydrogen gas and iron chloride are produced', 'B) Chlorine gas and iron hydroxide are produced', 'C) No reaction takes place', 'D) Iron salt and water are produced'],
              correct: 'A) Hydrogen gas and iron chloride are produced',
              explanation: 'Fe + 2HCl → FeCl2 + H2 ↑. Hydrogen gas evolves with a pop sound and ferrous chloride is formed.',
              marks: 1
            },
            {
              id: 'c10_2',
              type: 'mcq',
              text: '2. The focal length of a spherical mirror is +20 cm. What is the nature and radius of curvature of the mirror?',
              options: ['A) Convex, R = 40 cm', 'B) Concave, R = 40 cm', 'C) Convex, R = 10 cm', 'D) Concave, R = 10 cm'],
              correct: 'A) Convex, R = 40 cm',
              explanation: 'A positive focal length (+20 cm) denotes a Convex mirror. Radius of curvature R = 2f = 2 × 20 = 40 cm.',
              marks: 1
            },
            {
              id: 'c10_3',
              type: 'mcq',
              text: '3. In human kidneys, the structural and functional filtration unit is called:',
              options: ['A) Nephron', 'B) Neuron', 'C) Alveoli', 'D) Ureter'],
              correct: 'A) Nephron',
              explanation: 'Each kidney contains roughly 1 million Nephrons which filter blood and form urine via Bowman’s capsule and tubules.',
              marks: 1
            }
          ]
        },
        {
          name: 'Section D (Long Answer Questions × 5m = 20 Marks)',
          instructions: 'Step-marked derivations and proofs.',
          questions: [
            {
              id: 'c10_d1',
              type: 'subjective',
              text: '4. State Ohm’s Law. Derive the equivalent resistance for three resistors R1, R2, and R3 connected in parallel combination with a circuit diagram.',
              subparts: ['State Ohm’s Law statement (V = IR at constant temperature)', 'Derive 1/Rp = 1/R1 + 1/R2 + 1/R3 using total current I = I1 + I2 + I3', 'State two advantages of parallel connection in domestic wiring'],
              modelAnswer: 'Total Current I = I1 + I2 + I3.\nBy Ohm\'s law, I = V / Rp, I1 = V / R1, I2 = V / R2, I3 = V / R3.\nV / Rp = V(1/R1 + 1/R2 + 1/R3) => 1/Rp = 1/R1 + 1/R2 + 1/R3.\nAdvantages: If one appliance fails, others continue working; each receives full voltage (220V).',
              marks: 5
            }
          ]
        }
      ]
    }
  ],

  bca_college: [
    {
      id: 'bca-python-dbms-2026',
      title: 'BCA University Official Examination: Python Programming & Relational DBMS',
      subject: 'Python & Database Management',
      paperCode: 'BCA-301-PY-DB',
      totalMarks: 70,
      duration: '3 Hours',
      groups: [
        {
          name: 'Part A (10 Objective MCQs × 1m = 10 Marks)',
          instructions: 'Answer all 10 MCQs.',
          questions: [
            {
              id: 'bca_1',
              type: 'mcq',
              text: '1. What is the output of the Python expression: `print(type(5 / 2))`?',
              options: ['A) <class \'float\'>', 'B) <class \'int\'>', 'C) <class \'double\'>', 'D) <class \'number\'>'],
              correct: 'A) <class \'float\'>',
              explanation: 'In Python 3, the `/` operator always performs true division and returns a float (2.5). `//` performs floor division.',
              marks: 1
            },
            {
              id: 'bca_2',
              type: 'mcq',
              text: '2. Which SQL clause is used to filter groups created by the `GROUP BY` clause?',
              options: ['A) HAVING', 'B) WHERE', 'C) ORDER BY', 'D) FILTER'],
              correct: 'A) HAVING',
              explanation: '`WHERE` filters individual rows before grouping, while `HAVING` filters aggregated groups after `GROUP BY`.',
              marks: 1
            },
            {
              id: 'bca_3',
              type: 'mcq',
              text: '3. In Python, which method is called automatically when an object of a class is created?',
              options: ['A) __init__()', 'B) __str__()', 'C) __new__()', 'D) __create__()'],
              correct: 'A) __init__()',
              explanation: '`__init__()` is the constructor method in Python OOPs invoked upon object instantiation.',
              marks: 1
            }
          ]
        },
        {
          name: 'Part C (Programming & SQL Schemas × 10m = 40 Marks)',
          instructions: 'Write full executable Python code and SQL queries.',
          questions: [
            {
              id: 'bca_c1',
              type: 'subjective',
              text: '4. (a) Write a Python program to read a text file, count frequency of each word, and display top 5 most frequent words using a dictionary.\n(b) Write an SQL query to find the second highest salary from an Employee table without using `LIMIT`.',
              subparts: ['Python file handling + dictionary counting code', 'SQL correlated subquery for 2nd highest salary: SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee)'],
              modelAnswer: 'Python:\nwith open("sample.txt") as f:\n    words = f.read().lower().split()\nfreq = {}\nfor w in words:\n    freq[w] = freq.get(w, 0) + 1\ntop5 = sorted(freq.items(), key=lambda x: x[1], reverse=True)[:5]\nprint(top5)\n\nSQL:\nSELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);',
              marks: 10
            }
          ]
        }
      ]
    }
  ]
};
