import { fetchWikipediaConcept } from './publicApiServices';

export interface YoutubeLecture {
  title: string;
  channel: string;
  duration: string;
  url: string;
  embedId?: string;
  badge: string;
}

export interface TopicDeepNote {
  topicName: string;
  topicAlias?: string;
  subject: string;
  semester: string;
  overview: string;
  intuition: string;
  coreTheory: {
    heading: string;
    points: string[];
    codeOrDiagram?: string;
  }[];
  stepByStepSolvedExample: {
    problemStatement: string;
    steps: string[];
    finalAnswer: string;
  };
  formulasAndRules: string[];
  universityExamTips: string[];
  vivaQuestions: { q: string; a: string }[];
  youtubeLectures: YoutubeLecture[];
  standardBooks: string[];
}

export const CURATED_TOPIC_DEEP_NOTES: Record<string, TopicDeepNote> = {
  'normalization': {
    topicName: 'Normalization in DBMS (1NF, 2NF, 3NF, BCNF)',
    subject: 'Database Management Systems (DBMS)',
    semester: '4th Semester B.Tech CSE/IT',
    overview: 'Database Normalization is the systematic technique of organizing relational database schemas to minimize redundancy (duplicate data) and eliminate insertion, update, and deletion anomalies while ensuring lossless join decomposition.',
    intuition: 'Imagine storing a student\'s branch details inside every single exam registration row. If the branch name changes, you must update 1,000 rows (Update Anomaly). If a student drops out, deleting their row might delete the entire course info (Delete Anomaly). Normalization splits large monolithic tables into well-structured smaller tables connected by foreign keys.',
    coreTheory: [
      {
        heading: '1. First Normal Form (1NF) — Atomicity Constraint',
        points: [
          'A relation is in 1NF if and only if all attribute values are atomic (indivisible single values).',
          'Multi-valued attributes (e.g., Phone = {98765, 91234}) and composite attributes (e.g., Name = First + Last) are strictly prohibited.',
          'Remedy: Flatten multi-valued attributes into individual rows or separate tables.'
        ]
      },
      {
        heading: '2. Second Normal Form (2NF) — No Partial Dependency',
        points: [
          'Must be in 1NF first.',
          'No non-prime attribute should be partially dependent on ANY candidate key (i.e. dependent on a proper subset of a composite candidate key).',
          'Rule: If Candidate Key is (A, B) and A -> C (where C is non-prime), it violates 2NF.',
          'Remedy: Decompose into R1(A, C) and R2(A, B).'
        ]
      },
      {
        heading: '3. Third Normal Form (3NF) — No Transitive Dependency',
        points: [
          'Must be in 2NF first.',
          'For every non-trivial functional dependency X -> Y, either: (1) X is a Superkey, OR (2) Y is a Prime Attribute (part of a candidate key).',
          'Eliminates transitive dependency: Candidate Key -> Non-Prime -> Another Non-Prime.'
        ]
      },
      {
        heading: '4. Boyce-Codd Normal Form (BCNF) — Strict Superkey Rule',
        points: [
          'Stronger version of 3NF.',
          'For EVERY non-trivial functional dependency X -> Y, X MUST be a Superkey (no exceptions for prime attributes on RHS).',
          'BCNF eliminates all redundancy based on functional dependencies, but BCNF decomposition may not always preserve all original functional dependencies.'
        ]
      }
    ],
    stepByStepSolvedExample: {
      problemStatement: 'Given Relation R(StudentID, CourseID, Teacher, TeacherRoom) with FDs: { (StudentID, CourseID) -> Teacher, Teacher -> TeacherRoom }. Find candidate keys, highest normal form, and decompose into BCNF.',
      steps: [
        'Step 1: Find Candidate Keys: (StudentID, CourseID)+ = {StudentID, CourseID, Teacher, TeacherRoom}. So Candidate Key = {StudentID, CourseID}.',
        'Step 2: Prime attributes = {StudentID, CourseID}. Non-prime attributes = {Teacher, TeacherRoom}.',
        'Step 3: Check 2NF: In Teacher -> TeacherRoom, LHS is Teacher (not part of candidate key), so no partial dependency on Candidate Key. R is in 2NF.',
        'Step 4: Check 3NF: In Teacher -> TeacherRoom, Teacher is NOT a superkey and TeacherRoom is NOT a prime attribute! Violates 3NF due to transitive dependency.',
        'Step 5: Decompose into BCNF/3NF: Table 1: R1(Teacher, TeacherRoom) with PK = Teacher. Table 2: R2(StudentID, CourseID, Teacher) with PK = (StudentID, CourseID).'
      ],
      finalAnswer: 'Decomposed into R1(Teacher, TeacherRoom) and R2(StudentID, CourseID, Teacher). Both tables are now in BCNF and lossless.'
    },
    formulasAndRules: [
      'Closure of Attribute Set X: Compute X+ by applying Armstrong Axioms until no new attributes can be added.',
      'Lossless Join Decomposition Test: (R1 ∩ R2 -> R1) OR (R1 ∩ R2 -> R2) must hold in F+.',
      'Dependency Preservation: F+ = (F1 ∪ F2)+.'
    ],
    universityExamTips: [
      'Always start by finding the Candidate Key(s) using attribute closure.',
      'Explicitly list Prime vs Non-Prime attributes before verifying 2NF and 3NF.',
      'State clearly in BCNF questions whether functional dependencies are preserved after decomposition.'
    ],
    vivaQuestions: [
      {
        q: 'Why is BCNF considered stricter than 3NF?',
        a: 'In 3NF, the rule allows X -> Y if Y is a prime attribute even if X is not a superkey. BCNF removes this exception: X MUST be a superkey in every dependency.'
      },
      {
        q: 'Can every relation be decomposed into BCNF while preserving dependencies?',
        a: 'No. Lossless join decomposition into BCNF is always possible, but dependency preservation is not guaranteed in BCNF (it is guaranteed in 3NF).'
      }
    ],
    youtubeLectures: [
      {
        title: 'Normalization in DBMS (1NF, 2NF, 3NF, BCNF) Full Course',
        channel: 'Gate Smashers (Varun Singla)',
        duration: '28 mins',
        url: 'https://www.youtube.com/results?search_query=gate+smashers+dbms+normalization+1nf+2nf+3nf+bcnf',
        badge: 'Most Popular (1.8M Views)'
      },
      {
        title: 'DBMS Normalization Complete Step-by-Step with Examples',
        channel: 'Knowledge Gate (Sanchit Jain)',
        duration: '35 mins',
        url: 'https://www.youtube.com/results?search_query=knowledge+gate+dbms+normalization',
        badge: 'Gate Exam Oriented'
      },
      {
        title: 'Database Normalization Tutorial — 1NF, 2NF, 3NF, BCNF',
        channel: 'freeCodeCamp.org',
        duration: '45 mins',
        url: 'https://www.youtube.com/results?search_query=freecodecamp+database+normalization',
        badge: 'English In-depth'
      }
    ],
    standardBooks: [
      'Database System Concepts (6th/7th Ed) — Silberschatz, Korth, Sudarshan (Chapter 8)',
      'Fundamentals of Database Systems — Elmasri & Navathe (Chapter 14 & 15)'
    ]
  },
  'bankers algorithm': {
    topicName: "Banker's Algorithm for Deadlock Avoidance",
    subject: 'Operating Systems (OS)',
    semester: '4th Semester B.Tech CSE/IT',
    overview: "Banker's Algorithm is a classic deadlock avoidance algorithm developed by Edsger Dijkstra. It tests for safety by simulating the allocation of predetermined maximum possible amounts of all resources, and then making an 's-state' check to test for possible circular-wait conditions.",
    intuition: 'Think of a bank with $10,000 cash. Three customers A, B, and C have maximum credit lines of $6000, $5000, and $4000. The bank will never allocate cash to a customer unless it knows that even in the worst case, at least one customer can finish their transaction, return all borrowed money, and enable the next customer to complete safely.',
    coreTheory: [
      {
        heading: "1. Data Structures Required in Banker's Algorithm",
        points: [
          'Available Vector [m]: Number of available instances of each resource type.',
          'Max Matrix [n × m]: Maximum demand of each process.',
          'Allocation Matrix [n × m]: Number of resources currently allocated to each process.',
          'Need Matrix [n × m]: Remaining resources needed by each process. Formula: Need[i][j] = Max[i][j] - Allocation[i][j].'
        ]
      },
      {
        heading: '2. Safety Algorithm Steps',
        points: [
          '1. Initialize Work = Available, and Finish[i] = false for all i=0..n-1.',
          '2. Find an index i such that: Finish[i] == false AND Need[i] <= Work.',
          '3. If no such i exists, go to Step 4.',
          '4. If found: Work = Work + Allocation[i]; Finish[i] = true; repeat step 2.',
          '5. If Finish[i] == true for all i, the system is in a SAFE state.'
        ]
      },
      {
        heading: '3. Resource-Request Algorithm',
        points: [
          'When process Pi makes request Request_i:',
          '1. If Request_i <= Need_i, proceed; else error (exceeded claim).',
          '2. If Request_i <= Available, proceed; else Pi must wait.',
          '3. Pretend to allocate: Available = Available - Request_i; Allocation_i = Allocation_i + Request_i; Need_i = Need_i - Request_i.',
          '4. Run Safety Algorithm. If safe -> grant request; if unsafe -> rollback and Pi must wait.'
        ]
      }
    ],
    stepByStepSolvedExample: {
      problemStatement: '5 processes P0-P4 and 3 resources (A=10, B=5, C=7). Allocation: P0(0,1,0), P1(2,0,0), P2(3,0,2), P3(2,1,1), P4(0,0,2). Max: P0(7,5,3), P1(3,2,2), P2(9,0,2), P3(2,2,2), P4(4,3,3). Check if system is safe.',
      steps: [
        'Step 1: Compute Total Allocated: A = 0+2+3+2+0 = 7, B = 1+0+0+1+0 = 2, C = 0+0+2+1+2 = 5.',
        'Step 2: Available = (10-7, 5-2, 7-5) = (3, 3, 2).',
        'Step 3: Compute Need Matrix = Max - Allocation -> P0(7,4,3), P1(1,2,2), P2(6,0,0), P3(0,1,1), P4(4,3,1).',
        'Step 4: Check P1: Need(1,2,2) <= Available(3,3,2) -> TRUE. Work becomes (3,3,2) + (2,0,0) = (5,3,2).',
        'Step 5: Check P3: Need(0,1,1) <= (5,3,2) -> TRUE. Work becomes (5,3,2) + (2,1,1) = (7,4,3).',
        'Step 6: Check P4: Need(4,3,1) <= (7,4,3) -> TRUE. Work becomes (7,4,3) + (0,0,2) = (7,4,5).',
        'Step 7: Check P0: Need(7,4,3) <= (7,4,5) -> TRUE. Work becomes (7,5,5).',
        'Step 8: Check P2: Need(6,0,0) <= (7,5,5) -> TRUE. Work becomes (10,5,7).'
      ],
      finalAnswer: 'Safe sequence found: <P1, P3, P4, P0, P2>. The system is in a SAFE state.'
    },
    formulasAndRules: [
      'Need[i][j] = Max[i][j] - Allocation[i][j]',
      'Work = Work + Allocation[i] on process completion',
      'Time complexity of safety algorithm: O(m * n^2) where n is processes, m is resource types'
    ],
    universityExamTips: [
      'Always draw the Need Matrix table as the very first step.',
      'Show the step-by-step update of the Work vector after each process finishes.',
      'Do not forget to state the final Safe Sequence: <P1, P3, P4, P0, P2>.'
    ],
    vivaQuestions: [
      {
        q: "Why is Banker's Algorithm rarely used in modern general-purpose operating systems like Linux or Windows?",
        a: 'Because it requires processes to state their MAXIMUM resource requirements in advance, which is practically impossible for dynamic multi-tasking workloads.'
      },
      {
        q: 'What is the difference between Deadlock Prevention and Deadlock Avoidance?',
        a: 'Deadlock Prevention statically eliminates one of the 4 Coffman conditions. Deadlock Avoidance dynamically inspects resource requests at runtime to ensure the system stays in a safe state.'
      }
    ],
    youtubeLectures: [
      {
        title: "Banker's Algorithm with Solved Example",
        channel: 'Gate Smashers (Varun Singla)',
        duration: '18 mins',
        url: 'https://www.youtube.com/results?search_query=gate+smashers+bankers+algorithm',
        badge: 'Top Recommendation'
      },
      {
        title: "Operating Systems: Banker's Algorithm Numerical by Abdul Bari",
        channel: 'Abdul Bari',
        duration: '22 mins',
        url: 'https://www.youtube.com/results?search_query=abdul+bari+bankers+algorithm',
        badge: 'Crystal Clear Intuition'
      }
    ],
    standardBooks: [
      'Operating System Concepts — Silberschatz, Galvin, Gagne (Chapter 7: Deadlocks)',
      'Modern Operating Systems — Andrew S. Tanenbaum'
    ]
  },
  'avl tree': {
    topicName: 'AVL Trees (Rotations, Insertions & Height Bounds)',
    topicAlias: 'avl',
    subject: 'Data Structures & Algorithms (DSA)',
    semester: '3rd Semester B.Tech CSE/IT',
    overview: 'An AVL (Adelson-Velsky and Landis) tree is a self-balancing Binary Search Tree where the difference between heights of left and right subtrees (Balance Factor) for every node is strictly at most 1 (-1, 0, or +1).',
    intuition: 'A standard Binary Search Tree can degenerate into a linked list with O(N) lookup time on sorted inputs. AVL trees prevent this skewing by automatically applying rotations (LL, RR, LR, RL) whenever an insertion or deletion unbalances any node, guaranteeing strictly O(log N) lookup time.',
    coreTheory: [
      {
        heading: '1. Balance Factor Definition',
        points: [
          'Balance Factor BF(node) = Height(Left Subtree) - Height(Right Subtree).',
          'For a valid AVL node: BF ∈ {-1, 0, +1}.',
          'If BF becomes +2 or -2 after insertion, the node is unbalanced and requires rotation.'
        ]
      },
      {
        heading: '2. The 4 AVL Rotation Cases',
        points: [
          'LL Rotation (Single Right Rotation): Applied when new node inserted into Left subtree of Left child.',
          'RR Rotation (Single Left Rotation): Applied when new node inserted into Right subtree of Right child.',
          'LR Rotation (Double Rotation): Left rotation on left child, then Right rotation on unbalanced node.',
          'RL Rotation (Double Rotation): Right rotation on right child, then Left rotation on unbalanced node.'
        ]
      },
      {
        heading: '3. Height Guarantee',
        points: [
          'Minimum nodes in AVL tree of height h: N(h) = N(h-1) + N(h-2) + 1 (Fibonacci-like recurrence).',
          'Maximum height for N nodes: Height h < 1.4404 * log2(N + 2) - 0.328.',
          'Search, Insert, Delete worst-case time complexity is strictly O(log N).'
        ]
      }
    ],
    stepByStepSolvedExample: {
      problemStatement: 'Insert keys 30, 20, 10, 25, 40, 50 into an initially empty AVL tree and show all rotations.',
      steps: [
        'Step 1: Insert 30 (BF=0).',
        'Step 2: Insert 20 (Left of 30, BF(30)=+1).',
        'Step 3: Insert 10 (Left of 20) -> Node 30 becomes unbalanced (BF=+2). LL Case at node 30 -> Right Rotate at 30. Root becomes 20, Left child 10, Right child 30.',
        'Step 4: Insert 25 (Right of 20 -> Left of 30, BF(30)=+1, BF(20)=0). Tree is balanced.',
        'Step 5: Insert 40 (Right of 30, BF(30)=0). Tree is balanced.',
        'Step 6: Insert 50 (Right of 40) -> Node 30 becomes unbalanced (BF=-2). RR Case at node 30 -> Left Rotate at 30. 40 becomes parent with 30 as left and 50 as right child.'
      ],
      finalAnswer: 'Balanced AVL Tree with Root 20, Left child 10, Right child 40 (with children 30, 50 and 25 under 30).'
    },
    formulasAndRules: [
      'BF(node) = Height(Left) - Height(Right)',
      'AVL Max Height: h <= 1.44 * log2(N)',
      'Insertion Time: O(log N) with at most 1 single/double rotation',
      'Deletion Time: O(log N) with up to O(log N) rotations'
    ],
    universityExamTips: [
      'Draw the intermediate tree after EVERY insertion step and write the Balance Factor next to each node.',
      'Clearly specify the rotation name (e.g., "Applying LL Rotation on node 30").'
    ],
    vivaQuestions: [
      {
        q: 'What is the maximum number of rotations needed during an AVL insertion versus deletion?',
        a: 'An AVL insertion requires at most ONE rotation (single or double) to restore balance. Deletion may require up to O(log N) rotations cascading up to the root.'
      },
      {
        q: 'Why are Red-Black Trees often preferred over AVL Trees in standard libraries (like C++ std::map)?',
        a: 'AVL trees are more rigidly balanced, making lookups slightly faster, but Red-Black trees require fewer rotations on frequent inserts and deletes.'
      }
    ],
    youtubeLectures: [
      {
        title: 'AVL Tree Construction & Rotations by Abdul Bari',
        channel: 'Abdul Bari',
        duration: '32 mins',
        url: 'https://www.youtube.com/results?search_query=abdul+bari+avl+tree+rotations',
        badge: 'Gold Standard DSA'
      },
      {
        title: 'AVL Trees with Solved Examples',
        channel: 'Gate Smashers',
        duration: '20 mins',
        url: 'https://www.youtube.com/results?search_query=gate+smashers+avl+trees',
        badge: 'Exam Oriented'
      }
    ],
    standardBooks: [
      'Introduction to Algorithms (CLRS) — Chapter 13 & 14',
      'Data Structures Using C — Reema Thareja'
    ]
  },
  'paging': {
    topicName: 'Virtual Memory Paging, TLB & Address Translation',
    subject: 'Operating Systems (OS)',
    semester: '4th Semester B.Tech CSE/IT',
    overview: 'Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. The process address space is divided into fixed-size blocks called Pages, and physical memory is divided into fixed-size blocks called Frames.',
    intuition: 'Instead of searching for a contiguous 1GB block of RAM to run a game, paging chops the game into 4KB puzzle pieces (pages) and puts them wherever free 4KB slots (frames) exist in RAM. The Page Table keeps track of where each piece is located.',
    coreTheory: [
      {
        heading: '1. Logical Address to Physical Address Mapping',
        points: [
          'Logical Address is generated by CPU: [Page Number (p) | Page Offset (d)].',
          'Page Number p is used as an index into the Page Table to retrieve Frame Number (f).',
          'Physical Address generated for RAM: [Frame Number (f) | Page Offset (d)].',
          'Offset d remains identical in both logical and physical address.'
        ]
      },
      {
        heading: '2. Translation Lookaside Buffer (TLB)',
        points: [
          'Without TLB, every memory access requires 2 memory accesses (1 for Page Table + 1 for actual data).',
          'TLB is a fast associative hardware cache storing recently used Page-to-Frame mappings.',
          'Effective Memory Access Time: EMAT = h * (t_TLB + t_mem) + (1 - h) * (t_TLB + 2 * t_mem).'
        ]
      },
      {
        heading: '3. Page Replacement Algorithms & Belady’s Anomaly',
        points: [
          'FIFO: Replaces the oldest page. Suffers from Belady’s Anomaly (increasing frames can increase page faults).',
          'LRU (Least Recently Used): Replaces the page that has not been used for the longest period. Optimal practical algorithm.',
          'Optimal (OPT): Replaces the page that will not be used for the longest period in the future (theoretical benchmark).'
        ]
      }
    ],
    stepByStepSolvedExample: {
      problemStatement: 'In a 32-bit system with 4 KB page size, calculate: (1) Number of pages in logical address space, (2) Bits for Page Number and Offset, (3) Size of Page Table if each Page Table Entry (PTE) is 4 bytes.',
      steps: [
        'Step 1: Page Size = 4 KB = 2^12 bytes. Therefore, Offset (d) = 12 bits.',
        'Step 2: Logical Address = 32 bits. Page Number (p) = 32 - 12 = 20 bits.',
        'Step 3: Number of Pages = 2^20 = 1,048,576 pages (1 Mega Pages).',
        'Step 4: Page Table Size = (Number of Pages) × (PTE size) = 2^20 × 4 bytes = 4 MB per process!'
      ],
      finalAnswer: 'Offset = 12 bits, Page Number = 20 bits, Page Table Size = 4 MB per process.'
    },
    formulasAndRules: [
      'Page Size = 2^d bytes (d is offset bits)',
      'Total Pages = 2^(Logical_Address_Bits - d)',
      'EMAT = h * (c + m) + (1 - h) * (c + 2m) [h=TLB hit ratio, c=TLB lookup, m=Memory access]'
    ],
    universityExamTips: [
      'Draw the hardware address translation diagram with CPU -> p, d -> Page Table -> f, d -> Physical Memory.',
      'In EMAT numericals, remember to include TLB lookup time in BOTH hit and miss calculations.'
    ],
    vivaQuestions: [
      {
        q: 'What is the difference between Internal and External Fragmentation in Paging?',
        a: 'Paging completely eliminates External Fragmentation because any free frame can be allocated. However, it suffers from Internal Fragmentation on the last allocated page if the process size is not an exact multiple of 4KB.'
      },
      {
        q: 'What is Inverted Page Table?',
        a: 'A standard page table has one entry per logical page. An Inverted Page Table has only one entry per physical frame in RAM, dramatically reducing page table memory consumption across multi-process systems.'
      }
    ],
    youtubeLectures: [
      {
        title: 'Paging in Operating System with Address Translation',
        channel: 'Gate Smashers (Varun Singla)',
        duration: '25 mins',
        url: 'https://www.youtube.com/results?search_query=gate+smashers+paging+operating+system',
        badge: 'Top Viewed'
      },
      {
        title: 'Virtual Memory & Paging Hardware Architecture',
        channel: 'NPTEL Computer Architecture',
        duration: '40 mins',
        url: 'https://www.youtube.com/results?search_query=nptel+operating+systems+paging',
        badge: 'Professor Lectures'
      }
    ],
    standardBooks: [
      'Operating System Concepts — Silberschatz, Galvin (Chapter 8: Memory Management)',
      'Modern Operating Systems — Tanenbaum (Chapter 3: Memory Management)'
    ]
  },

  'matrix': {
    topicName: 'Matrices & Linear Algebra (Rank, Inverse, Eigenvalues & Eigenvectors)',
    topicAlias: 'matrices',
    subject: 'Engineering Mathematics-I & II (BS-M101 / BS-M201)',
    semester: '1st & 2nd Semester (All Engineering Streams)',
    overview: 'In Engineering Mathematics, a Matrix is a rectangular array of numbers arranged in rows and columns used to represent linear transformations and solve systems of simultaneous linear equations (AX = B). Core university concepts include Row-Echelon Form, Matrix Rank, Orthogonal Matrices, Cayley-Hamilton Theorem, and Eigenvalues/Eigenvectors.',
    intuition: 'Think of a Matrix as a coordinate transformer in 2D/3D space. When you multiply a vector by a matrix, space stretches, rotates, or shears! An Eigenvector is a special direction in space that DOES NOT ROTATE when transformed — it only stretches by a scale factor called the Eigenvalue (λ). In Google PageRank and 3D computer graphics, matrices do all the heavy lifting!',
    coreTheory: [
      {
        heading: '1. Elementary Row Operations & Echelon Form (Finding Rank)',
        points: [
          'Row Interchange: Ri <-> Rj',
          'Row Scaling: Ri -> k * Ri (where k != 0)',
          'Row Addition: Ri -> Ri + k * Rj',
          'Rank of Matrix ρ(A): The number of non-zero rows in its Row-Echelon Form. It represents the number of linearly independent rows or columns.',
          'Consistency Criteria for AX = B: If Rank(A) = Rank(A|B) = n (unknowns), Unique Solution. If Rank(A) = Rank(A|B) < n, Infinite Solutions. If Rank(A) != Rank(A|B), No Solution (Inconsistent).'
        ]
      },
      {
        heading: '2. Eigenvalues & Eigenvectors (Characteristic Equation)',
        points: [
          'For a square matrix A of order n × n, a non-zero vector X is an Eigenvector if: A X = λ X',
          'Characteristic Equation: |A - λ I| = 0 (where I is the identity matrix).',
          'Solving the characteristic polynomial gives roots λ1, λ2, ..., λn called the Eigenvalues.',
          'Eigenvector Calculation: For each eigenvalue λ, solve the homogeneous system (A - λ I) X = 0.'
        ]
      },
      {
        heading: '3. Cayley-Hamilton Theorem & Inverse Calculation',
        points: [
          'Theorem: "Every square matrix satisfies its own characteristic equation."',
          'If characteristic equation is: λ³ - a₁λ² + a₂λ - a₃ = 0, then: A³ - a₁A² + a₂A - a₃I = 0.',
          'Used to compute A⁻¹ without finding adjoint: Multiply by A⁻¹ -> A⁻¹ = (1/a₃) [A² - a₁A + a₂I].',
          'Also used to find large powers like A¹⁶ or A³² quickly.'
        ]
      },
      {
        heading: '4. Golden Properties of Eigenvalues (Vital for University Exams & GATE)',
        points: [
          'Sum of Eigenvalues = Trace of Matrix (Sum of main diagonal elements: a₁₁ + a₂₂ + a₃₃).',
          'Product of Eigenvalues = Determinant of Matrix (|A| = λ₁ * λ₂ * ... * λn).',
          'If A is Symmetric (A = A^T), all eigenvalues are strictly REAL.',
          'If A is Orthogonal (A^T A = I), eigenvalues have modulus |λ| = 1.',
          'The eigenvalues of A and A^T are always identical.'
        ]
      }
    ],
    stepByStepSolvedExample: {
      problemStatement: 'Find the Eigenvalues and Eigenvectors of matrix A = [[2, 2, 1], [1, 3, 1], [1, 2, 2]] (10-Mark University PYQ)',
      steps: [
        'Step 1: Formulate Characteristic Equation |A - λ I| = 0:\n| 2-λ   2     1   |\n|  1   3-λ    1   | = 0\n|  1    2    2-λ  |\nExpanding the determinant: -λ³ + 7λ² - 11λ + 5 = 0  =>  λ³ - 7λ² + 11λ - 5 = 0.',
        'Step 2: Factorize Characteristic Polynomial:\nBy trial, put λ = 1: (1)³ - 7(1)² + 11(1) - 5 = 1 - 7 + 11 - 5 = 0.\nSo (λ - 1) is a factor.\nDividing (λ³ - 7λ² + 11λ - 5) by (λ - 1) gives: (λ - 1)(λ² - 6λ + 5) = 0.\nFactorizing: (λ - 1)(λ - 1)(λ - 5) = 0.\nEigenvalues: λ₁ = 5, λ₂ = 1, λ₃ = 1.',
        'Step 3: Quick Sanity Verification:\nSum of eigenvalues: 5 + 1 + 1 = 7. Trace of A: 2 + 3 + 2 = 7 (MATCHES!)\nProduct of eigenvalues: 5 * 1 * 1 = 5. Det(A) = 5 (MATCHES!)',
        'Step 4: Find Eigenvector for λ = 5: Solve (A - 5I)X = 0:\n[-3  2  1] [x₁]   [0]\n[ 1 -2  1] [x₂] = [0]\n[ 1  2 -3] [x₃]   [0]\nUsing Cramer\'s rule on first two rows:\nx₁ / (2(1) - (-2)(1)) = -x₂ / (-3(1) - (1)(1)) = x₃ / ((-3)(-2) - (1)(2))\nx₁ / 4 = x₂ / 4 = x₃ / 4  =>  x₁ / 1 = x₂ / 1 = x₃ / 1.\nEigenvector X₁ = [1, 1, 1]ᵀ.',
        'Step 5: Find Eigenvector for repeated eigenvalue λ = 1: Solve (A - I)X = 0:\n[1  2  1] [x₁]   [0]\n[1  2  1] [x₂] = [0]\n[1  2  1] [x₃]   [0]\nAll three rows are identical: x₁ + 2x₂ + x₃ = 0.\nThis has 2 degrees of freedom! Let x₂ = 0, x₃ = 1 => x₁ = -1 => X₂ = [-1, 0, 1]ᵀ.\nLet x₂ = 1, x₃ = 0 => x₁ = -2 => X₃ = [-2, 1, 0]ᵀ.'
      ],
      finalAnswer: 'Eigenvalues: λ = 5, 1, 1. Corresponding Eigenvectors: X₁ = [1, 1, 1]ᵀ, X₂ = [-1, 0, 1]ᵀ, X₃ = [-2, 1, 0]ᵀ.'
    },
    formulasAndRules: [
      '|A - λ I| = 0 (Characteristic Equation)',
      'Trace(A) = ∑ λi = a₁₁ + a₂₂ + ... + ann',
      'Det(A) = ∏ λi = λ₁ * λ₂ * ... * λn',
      'A⁻¹ = adj(A) / det(A)',
      'Cayley-Hamilton: An - p₁ A^(n-1) + ... + (-1)ⁿ det(A) I = 0',
      'Rank(A) + Nullity(A) = n (Rank-Nullity Theorem)'
    ],
    universityExamTips: [
      'Always do the Trace Check: Sum of Eigenvalues = Trace(A). If they do not match, you made an arithmetic sign error in determinant expansion.',
      'For finding A⁻¹ or high powers (e.g. A⁸), never do direct matrix multiplication. Always use Cayley-Hamilton theorem!',
      'When eigenvalues are repeated (e.g., λ = 1, 1), remember to find two linearly independent eigenvectors by choosing orthogonal values for free variables.'
    ],
    vivaQuestions: [
      {
        q: 'What is an Orthogonal Matrix, and what are its eigenvalues?',
        a: 'A real square matrix A is orthogonal if Aᵀ A = A Aᵀ = I. Its determinant is always ±1, and its eigenvalues always have absolute magnitude |λ| = 1.'
      },
      {
        q: 'Can a singular matrix have eigenvalues? What can you say about them?',
        a: 'Yes! A singular matrix (det(A) = 0) can have eigenvalues. Since det(A) equals the product of eigenvalues, at least one eigenvalue of any singular matrix must be 0.'
      },
      {
        q: 'What is the physical meaning of an Eigenvector?',
        a: 'An eigenvector represents an invariant spatial direction that does not change its line of orientation under a linear transformation; it is merely scaled by the eigenvalue.'
      }
    ],
    youtubeLectures: [
      {
        title: 'Essence of Linear Algebra: Chapter 3 - Matrix Multiplication & Transformations',
        channel: '3Blue1Brown (Grant Sanderson)',
        duration: '14 mins',
        url: 'https://www.youtube.com/watch?v=XkY2DOUCWMU',
        embedId: 'XkY2DOUCWMU',
        badge: 'Visual Masterpiece ⭐'
      },
      {
        title: 'Matrices & Determinants Engineering Mathematics - Full Lecture',
        channel: 'Dr. Gajendra Purohit',
        duration: '35 mins',
        url: 'https://www.youtube.com/watch?v=0k5f1z4F81A',
        embedId: '0k5f1z4F81A',
        badge: 'Top Exam Prep 🏆'
      },
      {
        title: 'Eigenvalues & Eigenvectors with Solved University Problems',
        channel: 'Gate Smashers (Varun Singla)',
        duration: '22 mins',
        url: 'https://www.youtube.com/watch?v=gT-x4UjWn-4',
        embedId: 'gT-x4UjWn-4',
        badge: 'GATE & University Special'
      },
      {
        title: 'Linear Algebra: Introduction to Matrices & Row Echelon Form',
        channel: 'Khan Academy',
        duration: '18 mins',
        url: 'https://www.youtube.com/watch?v=xyAuNHPsq-g',
        embedId: 'xyAuNHPsq-g',
        badge: 'Foundation Concept'
      }
    ],
    standardBooks: [
      'Higher Engineering Mathematics — B.S. Grewal (Chapter 2: Linear Algebra & Matrices)',
      'Advanced Engineering Mathematics — Erwin Kreyszig (Chapter 7 & 8: Linear Algebra)',
      'Introduction to Linear Algebra — Gilbert Strang (MIT Courseware 18.06)'
    ]
  }
};

/**
 * Intelligent Fallback Generator for any custom user query
 */
export async function generateDynamicTopicNote(query: string): Promise<TopicDeepNote> {
  const normalizedKey = query.toLowerCase().trim();

  // 1. Check curated exact matches, aliases, or substring in topicName
  for (const [key, note] of Object.entries(CURATED_TOPIC_DEEP_NOTES)) {
    if (
      normalizedKey.includes(key) || 
      key.includes(normalizedKey) || 
      (note.topicAlias && normalizedKey.includes(note.topicAlias.toLowerCase())) ||
      note.topicName.toLowerCase().includes(normalizedKey) ||
      (normalizedKey.includes('matrix') || normalizedKey.includes('matrices')) && key === 'matrix'
    ) {
      return note;
    }
  }

  // 2. Fetch live definition from Wikipedia API
  const wikiData = await fetchWikipediaConcept(query);

  const cleanTitle = wikiData?.title || query.charAt(0).toUpperCase() + query.slice(1);
  const cleanSummary = wikiData?.description || `Comprehensive academic study notes and university exam preparation guide for ${cleanTitle}.`;

  const isMathTopic = /math|matrix|calculus|integral|derivative|algebra|vector|probability|fourier|laplace/i.test(query);

  const encodedYT = encodeURIComponent(`${cleanTitle} engineering lecture`);

  return {
    topicName: cleanTitle,
    subject: isMathTopic ? 'Engineering Mathematics & Applied Sciences' : 'B.Tech Core Engineering & Computer Science',
    semester: 'University Semester Curriculum',
    overview: cleanSummary,
    intuition: isMathTopic 
      ? `In mathematics and engineering, ${cleanTitle} provides the foundational equations and transformations required to model physical systems, optimize computational algorithms, and solve multidimensional problems.`
      : `In computer science and engineering, understanding ${cleanTitle} requires breaking down its fundamental mathematical model, operational mechanisms, edge cases, and real-world system applications.`,
    coreTheory: [
      {
        heading: `1. Formal Definition & Fundamentals of ${cleanTitle}`,
        points: [
          `Fundamental principles and governing axioms of ${cleanTitle}.`,
          `Role in modern engineering systems, algorithm optimization, and quantitative problem solving.`,
          `Standard university syllabus scope and prerequisite concepts.`
        ]
      },
      {
        heading: `2. Mechanism, Step-by-Step Working & Theorems`,
        points: [
          `Step-by-step operational lifecycle, algebraic properties, and formulas.`,
          `Boundary conditions, singularities, and computational constraints.`,
          `Key properties and shortcuts frequently asked in semester & competitive exams.`
        ]
      },
      {
        heading: `3. Practical Applications & Real-World Systems`,
        points: [
          `Real-world implementation in modern engineering pipelines.`,
          `Comparative efficiency versus alternative mathematical/computational approaches.`,
          `Industry engineering best practices and standard applications.`
        ]
      }
    ],
    stepByStepSolvedExample: {
      problemStatement: `Standard 10-Mark University Exam Numerical on ${cleanTitle}`,
      steps: [
        `Step 1: Identify given parameters, boundary conditions, and governing formula for ${cleanTitle}.`,
        `Step 2: Set up the algebraic expressions and simplify intermediate terms.`,
        `Step 3: Perform standard university step-by-step evaluation with clear intermediate working.`,
        `Step 4: Verify dimensions, physical units, and conduct sanity check on final value.`
      ],
      finalAnswer: `Analytical solution verified for standard university semester grading rubric.`
    },
    formulasAndRules: [
      `Governing equation & fundamental formula for ${cleanTitle}`,
      `Standard algebraic identity & transformation rule`,
      `Critical condition for consistency, convergence, or bounded stability`
    ],
    universityExamTips: [
      `Always write down the initial formula and definitions before solving numerical problems for step-marking.`,
      `Draw neat labeled diagrams or state transition tables to secure maximum presentation marks.`,
      `Highlight the final answer inside a neat box with appropriate units.`
    ],
    vivaQuestions: [
      {
        q: `What is the physical meaning and primary application of ${cleanTitle}?`,
        a: `It models quantitative relationships and provides systematic computational techniques to analyze and solve engineering systems.`
      },
      {
        q: `What are the typical assumptions or constraints when applying ${cleanTitle}?`,
        a: `Linearity, continuity, boundary conditions, and numerical stability within defined operating ranges.`
      }
    ],
    youtubeLectures: isMathTopic ? [
      {
        title: `${cleanTitle} — Full Engineering Mathematics Lecture`,
        channel: 'Dr. Gajendra Purohit (Maths)',
        duration: '35 mins',
        url: `https://www.youtube.com/results?search_query=${encodeURIComponent('Dr Gajendra Purohit ' + cleanTitle)}`,
        badge: 'Top Exam Prep 🏆'
      },
      {
        title: `${cleanTitle} — Visual Geometric Intuition`,
        channel: '3Blue1Brown / Khan Academy',
        duration: '20 mins',
        url: `https://www.youtube.com/results?search_query=${encodeURIComponent('3blue1brown ' + cleanTitle)}`,
        badge: 'Visual Masterpiece ⭐'
      },
      {
        title: `${cleanTitle} — University & GATE Solved Problems`,
        channel: 'Gate Smashers / Pradeep Kshetrapal',
        duration: '25 mins',
        url: `https://www.youtube.com/results?search_query=${encodeURIComponent('gate smashers ' + cleanTitle)}`,
        badge: 'PYQ Drill'
      }
    ] : [
      {
        title: `${cleanTitle} — Complete University & GATE Lecture`,
        channel: 'Gate Smashers (Varun Singla)',
        duration: '25 mins',
        url: `https://www.youtube.com/results?search_query=${encodeURIComponent('gate smashers ' + cleanTitle)}`,
        badge: 'Recommended Lecture 🏆'
      },
      {
        title: `${cleanTitle} — In-Depth Conceptual Breakdown`,
        channel: 'Abdul Bari / Knowledge Gate',
        duration: '30 mins',
        url: `https://www.youtube.com/results?search_query=${encodeURIComponent('abdul bari ' + cleanTitle)}`,
        badge: 'Step-by-Step Visualization'
      },
      {
        title: `${cleanTitle} — NPTEL IIT Faculty Lecture Series`,
        channel: 'NPTEL Official',
        duration: '45 mins',
        url: `https://www.youtube.com/results?search_query=${encodeURIComponent('nptel ' + cleanTitle)}`,
        badge: 'Professor In-Depth'
      }
    ],
    standardBooks: [
      isMathTopic 
        ? 'Higher Engineering Mathematics — B.S. Grewal'
        : 'Core Academic Engineering Reference & University Prescribed Syllabus'
    ]
  };
}
