export interface SubjectModule {
  moduleNumber: number;
  title: string;
  keyTopics: string[];
  summary: string;
  importantFormulasOrTheorems?: string[];
  examTips: string;
}

export interface SolvedPyq {
  id: string;
  question: string;
  marks: number;
  frequency: string;
  repeatedInYears: string[];
  solution: string;
  diagramOrCode?: string;
  examinerNotes: string;
}

export interface BtechSubjectMaterial {
  id: string;
  subjectCode: string;
  name: string;
  semester: string;
  category: 'Core Computer Science' | 'Systems & Hardware' | 'Theory & Mathematics' | 'AI & Emerging';
  icon: string;
  color: string;
  recommendedBooks: string[];
  syllabusOverview: string;
  totalModules: number;
  modules: SubjectModule[];
  topSolvedPyqs: SolvedPyq[];
  cheatSheetHighlights: string[];
  labVivaFocusTopics: string[];
}

export const BTECH_STUDY_MATERIALS: BtechSubjectMaterial[] = [
  {
    id: 'dsa',
    subjectCode: 'PCC-CS301',
    name: 'Data Structures & Algorithms (DSA)',
    semester: '3rd / 4th Semester',
    category: 'Core Computer Science',
    icon: 'Binary',
    color: 'from-blue-600 to-cyan-500',
    recommendedBooks: [
      'Introduction to Algorithms (CLRS) — Cormen, Leiserson, Rivest, Stein',
      'Data Structures Using C — Reema Thareja / Tenenbaum',
      'Algorithms in C++ — Robert Sedgewick'
    ],
    syllabusOverview: 'Complete university curriculum covering linear and non-linear data structures, asymptotic notation, tree balancing, graph traversals, shortest path algorithms, and dynamic programming invariants.',
    totalModules: 5,
    modules: [
      {
        moduleNumber: 1,
        title: 'Linear Structures & Asymptotic Analysis',
        keyTopics: ['Big-O, Big-Omega, Big-Theta Definitions', 'Array representations & Row/Column Major Address Calculation', 'Linked Lists (Singly, Doubly, Circular, XOR List)', 'Stack Applications (Infix to Postfix, Postfix Evaluation, Balanced Parentheses)', 'Circular Queue & Double-Ended Queue (Deque)'],
        summary: 'Focuses on memory representations and operational complexity. Address calculation in 2D arrays: Row Major: Loc(A[i][j]) = Base + W * [(i - LBR)*N + (j - LBC)], Column Major: Loc(A[i][j]) = Base + W * [(j - LBC)*M + (i - LBR)].',
        importantFormulasOrTheorems: [
          'Stack: Infix to Postfix precedence: ^ > (*, /) > (+, -)',
          'Circular Queue: Front = (Front + 1) % MAX, Rear = (Rear + 1) % MAX',
          'Master Theorem: T(n) = aT(n/b) + f(n)'
        ],
        examTips: 'Always write full C/C++ struct definitions (e.g. Node { int data; struct Node* next; }) before writing algorithm steps in 10-mark questions.'
      },
      {
        moduleNumber: 2,
        title: 'Trees & Advanced Balanced Trees',
        keyTopics: ['Binary Tree Properties (Max nodes at level i = 2^i, Full vs Complete vs Strict)', 'Tree Traversals (Recursive & Non-Recursive Stack versions)', 'Binary Search Tree (BST) Insert, Search & Deletion Cases', 'AVL Trees (LL, RR, LR, RL Rotations with Balance Factor)', 'B-Trees & B+ Trees (Order m, Split & Merge rules)'],
        summary: 'AVL trees strictly enforce |h_L - h_R| <= 1. Height is bounded by 1.44 log2(N). BST deletion requires checking: (1) Leaf node: delete directly, (2) One child: link parent to child, (3) Two children: replace with Inorder Successor or Inorder Predecessor.',
        importantFormulasOrTheorems: [
          'Balance Factor BF(N) = Height(LeftSubtree) - Height(RightSubtree)',
          'AVL Max Height: H < 1.4404 * log2(N + 2) - 0.328',
          'Internal nodes in full binary tree of N leaves = N - 1'
        ],
        examTips: 'Draw intermediate AVL trees after EVERY single insertion step. Examiners check step-by-step balance factors.'
      },
      {
        moduleNumber: 3,
        title: 'Graph Algorithms & Minimum Spanning Trees',
        keyTopics: ['Graph Representations (Adjacency Matrix vs Adjacency List)', 'BFS (Queue based) & DFS (Recursion/Stack based) with Time Complexities', 'Kruskal Algorithm (Disjoint Set Union-Find)', 'Prim Algorithm (Greedy Priority Queue)', 'Dijkstra Single-Source Shortest Path', 'Bellman-Ford Algorithm (Negative Edge weights & Negative Cycle Detection)'],
        summary: 'Kruskal sorts all edges (E log E) and adds non-cyclical edges. Prim grows a single tree starting from a source vertex. Dijkstra fails on negative edge weights; Bellman-Ford runs in O(V * E) by relaxing all edges V-1 times.',
        importantFormulasOrTheorems: [
          'BFS & DFS Complexity: O(V + E) with Adjacency List, O(V^2) with Matrix',
          'Kruskal Complexity: O(E log E)',
          'Prim Complexity: O(E log V) with Min-Heap',
          'Handshaking Lemma: Sum of degrees of all vertices = 2 * |E|'
        ],
        examTips: 'For Dijkstra questions, draw the distance table column-by-column for each step.'
      },
      {
        moduleNumber: 4,
        title: 'Sorting, Searching & Hashing',
        keyTopics: ['QuickSort (Hoare vs Lomuto Partitioning, Best/Worst Cases)', 'MergeSort (Divide & Conquer, Recurrence & Space Overhead)', 'HeapSort (Build-Heap in O(N), Sift-Down)', 'Hashing & Collision Resolution (Chaining vs Open Addressing: Linear Probing, Quadratic Probing, Double Hashing)'],
        summary: 'QuickSort is in-place with O(N log N) average and O(N^2) worst case on sorted array without random pivot. MergeSort is stable O(N log N) but requires O(N) auxiliary space. Build-heap runs in O(N) because sum of (h / 2^h) converges.',
        importantFormulasOrTheorems: [
          'Load Factor α = n / m (n elements, m slots)',
          'Linear Probing: h(k, i) = (h\'(k) + i) % m',
          'Double Hashing: h(k, i) = (h1(k) + i * h2(k)) % m'
        ],
        examTips: 'Know the proof of why comparison-based sorting has a lower bound of Ω(N log N) using decision tree height.'
      },
      {
        moduleNumber: 5,
        title: 'Dynamic Programming & Greedy Design',
        keyTopics: ['0/1 Knapsack Problem (DP table formulation vs Fractional Greedy)', 'Longest Common Subsequence (LCS) with Backtracking Matrix', 'Matrix Chain Multiplication (Parenthesization cost)', 'Huffman Coding (Prefix-free codes & Tree construction)'],
        summary: 'Greedy works when optimal substructure and greedy-choice property hold. DP works when overlapping subproblems and optimal substructure exist. 0/1 Knapsack uses DP: dp[i][w] = max(dp[i-1][w], val[i-1] + dp[i-1][w-wt[i-1]]).',
        importantFormulasOrTheorems: [
          'LCS Recurrence: if (X[i-1] == Y[j-1]) c[i,j] = c[i-1,j-1] + 1; else max(c[i-1,j], c[i,j-1])',
          'MCM Cost: m[i,j] = min_{i<=k<j} { m[i,k] + m[k+1,j] + p_{i-1} * p_k * p_j }'
        ],
        examTips: 'Always draw the 2D DP matrix table filled with numbers and draw the trace-back arrow path.'
      }
    ],
    topSolvedPyqs: [
      {
        id: 'dsa-pyq-1',
        question: 'Explain AVL tree rotations with diagrams. Insert the following keys into an initially empty AVL tree: 40, 20, 10, 25, 30, 22, 50.',
        marks: 10,
        frequency: 'Repeated Every Year (98% Probability)',
        repeatedInYears: ['2024', '2023', '2022', '2021', '2019'],
        solution: 'Step 1: Insert 40 (BF=0). Step 2: Insert 20 (Left child of 40, BF(40)=+1). Step 3: Insert 10 (Left child of 20) -> Node 40 becomes unbalanced (BF=+2). LL Rotation at 40 -> 20 becomes root with 10 as left and 40 as right child. Step 4: Insert 25 (Right of 20, Left of 40). Step 5: Insert 30 (Right of 25) -> Unbalance at 40 (BF=2). RL Rotation at 40: Right rotate 25-30 then Left rotate at 40. Step 6: Insert 22 and 50 and balance.',
        diagramOrCode: '       25\n     /    \\\n   20      40\n  /  \\    /  \\\n 10  22  30   50',
        examinerNotes: 'Write the Balance Factor (BF = Height(L) - Height(R)) next to each node at every step.'
      },
      {
        id: 'dsa-pyq-2',
        question: 'Write Dijkstra\'s Single Source Shortest Path algorithm in C/C++. Explain its time complexity with both Adjacency Matrix and Min-Heap implementations.',
        marks: 10,
        frequency: 'High Frequency (90% Probability)',
        repeatedInYears: ['2024', '2022', '2020', '2018'],
        solution: 'Dijkstra maintains a set of visited vertices and an array dist[] initialized to infinity. At each step, it selects the unvisited vertex u with min dist[u], marks u as visited, and relaxes all neighbors v: if dist[u] + weight(u,v) < dist[v] then dist[v] = dist[u] + weight(u,v).',
        diagramOrCode: 'void dijkstra(int graph[V][V], int src) {\n  int dist[V]; bool visited[V];\n  for(int i=0; i<V; i++) dist[i]=INT_MAX, visited[i]=false;\n  dist[src]=0;\n  for(int count=0; count<V-1; count++) {\n    int u = minDistance(dist, visited);\n    visited[u] = true;\n    for(int v=0; v<V; v++)\n      if(!visited[v] && graph[u][v] && dist[u]!=INT_MAX && dist[u]+graph[u][v] < dist[v])\n        dist[v] = dist[u] + graph[u][v];\n  }\n}',
        examinerNotes: 'Specify that Dijkstra fails on negative edge weights and state that Bellman-Ford must be used instead.'
      }
    ],
    cheatSheetHighlights: [
      'Array Address 2D: Base + W * [i * cols + j] (Row Major)',
      'BST Inorder Traversal ALWAYS produces strictly sorted ascending order',
      'Min-Heap Property: Parent <= Children. Root is always the minimum element',
      'Hash Table Open Addressing: h(k, i) = (h\'(k) + c1*i + c2*i^2) % m',
      'Worst case QuickSort occurs when pivot is consistently smallest or largest element'
    ],
    labVivaFocusTopics: [
      'Differences between Array vs Linked List memory caching (Locality of Reference)',
      'Why Stack is used for function call execution and recursion recursion frames',
      'Time complexity of searching in balanced AVL tree vs skewed BST',
      'Difference between Prim\'s and Kruskal\'s MST greedy strategy'
    ]
  },
  {
    id: 'os',
    subjectCode: 'PCC-CS401',
    name: 'Operating Systems (OS)',
    semester: '4th Semester',
    category: 'Systems & Hardware',
    icon: 'Cpu',
    color: 'from-purple-600 to-indigo-500',
    recommendedBooks: [
      'Operating System Concepts (Dinosaur Book) — Silberschatz, Galvin, Gagne',
      'Modern Operating Systems — Andrew S. Tanenbaum',
      'Operating Systems: Internals and Design Principles — William Stallings'
    ],
    syllabusOverview: 'Process management, multi-threading, CPU scheduling algorithms, inter-process communication, semaphores, deadlock prevention and avoidance (Banker’s algorithm), virtual memory paging, segmentation, and disk scheduling.',
    totalModules: 5,
    modules: [
      {
        moduleNumber: 1,
        title: 'Processes, Threads & CPU Scheduling',
        keyTopics: ['Process Control Block (PCB) Structure & Context Switching', 'Process States (New, Ready, Running, Waiting, Terminated)', 'User-level vs Kernel-level Threads', 'Scheduling Algorithms: FCFS, SJF (Non-preemptive & SRTF Preemptive), Priority, Round Robin with Time Quantum q', 'Convoy Effect & Starvation'],
        summary: 'A Process is a program in execution containing Text, Data, Heap, and Stack. Context switching overhead is pure CPU wasted time. SJF is provably optimal for minimizing Average Waiting Time. Round Robin with very small quantum causes excessive context switching; large quantum degrades to FCFS.',
        importantFormulasOrTheorems: [
          'Turnaround Time (TAT) = Completion Time (CT) - Arrival Time (AT)',
          'Waiting Time (WT) = Turnaround Time (TAT) - Burst Time (BT)',
          'Response Time (RT) = Time at which CPU first allocated - Arrival Time'
        ],
        examTips: 'In scheduling numericals, draw the GANTT chart with absolute clarity starting strictly at time t=0. Show the CT, TAT, and WT calculation table.'
      },
      {
        moduleNumber: 2,
        title: 'Process Synchronization & Classical IPC',
        keyTopics: ['Critical Section Problem & 3 Requirements (Mutual Exclusion, Progress, Bounded Waiting)', 'Peterson Solution for 2 Processes', 'Hardware Synchronization (TestAndSet, Swap)', 'Mutex Locks vs Counting Semaphores (Wait/P and Signal/V operations)', 'Classical Problems: Producer-Consumer (Bounded Buffer), Readers-Writers, Dining Philosophers'],
        summary: 'A Semaphore S is an integer variable accessed only via wait(S) [atomic decrement: while(S<=0); S--] and signal(S) [atomic increment: S++]. Binary semaphore acts as a mutex lock. In Readers-Writers, mutex protects read_count.',
        importantFormulasOrTheorems: [
          'wait(S): S--; if (S < 0) { add this process to S.queue; block(); }',
          'signal(S): S++; if (S <= 0) { remove process P from S.queue; wakeup(P); }',
          'Dining Philosophers deadlock prevention: pick left fork then right fork, except odd philosopher picks right first'
        ],
        examTips: 'Memorize the C code for Producer-Consumer with full semaphore initialization: sem_t mutex=1, empty=N, full=0.'
      },
      {
        moduleNumber: 3,
        title: 'Deadlocks: Detection, Prevention & Avoidance',
        keyTopics: ['4 Coffman Conditions for Deadlock (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait)', 'Resource Allocation Graph (RAG) & Cycle Detection Rule', 'Deadlock Prevention (Breaking any 1 of 4 conditions)', 'Deadlock Avoidance: Banker\'s Algorithm (Safety Algorithm & Resource-Request Algorithm)'],
        summary: 'Deadlock avoidance requires advance knowledge of maximum resource claims. Banker\'s Algorithm calculates Need Matrix = Max - Allocation. If Available >= Need[i], process i can finish, releasing its allocated resources: Available = Available + Allocation[i].',
        importantFormulasOrTheorems: [
          'Need Matrix: Need[i][j] = Max[i][j] - Allocation[i][j]',
          'Safety Condition: If a sequence <P1, P2, ... Pn> exists such that Need[i] <= Available, the state is SAFE.',
          'Deadlock Free condition for m resources and n processes each needing at most k: m >= n*(k-1) + 1'
        ],
        examTips: 'Always calculate Need Matrix first in Banker\'s Algorithm numericals, then show step-by-step update of Work/Available vector.'
      },
      {
        moduleNumber: 4,
        title: 'Memory Management & Virtual Memory',
        keyTopics: ['Logical vs Physical Address Space & MMU Relocation', 'Contiguous Allocation (First Fit, Best Fit, Worst Fit)', 'Paging Hardware: Page Table Base Register (PTBR), TLB (Translation Lookaside Buffer)', 'Effective Memory Access Time (EMAT)', 'Page Replacement Algorithms: FIFO, Belady Anomaly, LRU, Optimal (OPT/MIN)', 'Thrashing & Working Set Model'],
        summary: 'Paging eliminates external fragmentation but introduces internal fragmentation. TLB is an associative cache. Effective memory access time: EMAT = h * (t_TLB + t_mem) + (1 - h) * (t_TLB + 2 * t_mem). Thrashing occurs when CPU spends more time paging than executing.',
        importantFormulasOrTheorems: [
          'EMAT with 1-level page table = h * (c + m) + (1 - h) * (c + 2m) [h=hit ratio, c=TLB access, m=main memory access]',
          'Belady\'s Anomaly: In FIFO page replacement, increasing page frames can increase page faults!'
        ],
        examTips: 'For Page Replacement numericals (e.g. Reference string: 7, 0, 1, 2, 0, 3, 0, 4...), make a grid table and mark Page Faults with an asterisk (*).'
      },
      {
        moduleNumber: 5,
        title: 'File Systems & Disk Scheduling',
        keyTopics: ['File Allocation Methods (Contiguous, Linked, Indexed / Inode structure)', 'Free Space Management (Bit vector, Linked list)', 'Disk Scheduling Algorithms: FCFS, SSTF, SCAN (Elevator), C-SCAN, LOOK, C-LOOK'],
        summary: 'Unix Inode uses direct block pointers (e.g. 12), single indirect, double indirect, and triple indirect pointers. Disk scheduling reduces seek time. SSTF suffers from starvation. SCAN moves in one direction to the end and reverses; C-SCAN returns directly to beginning.',
        importantFormulasOrTheorems: [
          'Total Head Movement = Sum of absolute differences between consecutive track requests |track_{i} - track_{i-1}|',
          'Max Unix File Size = (Direct + Single_Ind*Ptrs + Double_Ind*Ptrs^2 + Triple_Ind*Ptrs^3) * Block_Size'
        ],
        examTips: 'Draw the horizontal cylinder track timeline graph showing head motion arrow trajectories.'
      }
    ],
    topSolvedPyqs: [
      {
        id: 'os-pyq-1',
        question: 'Solve Banker\'s Algorithm for the following system with 5 processes (P0-P4) and 3 resource types (A=10, B=5, C=7). Allocation: P0(0,1,0), P1(2,0,0), P2(3,0,2), P3(2,1,1), P4(0,0,2). Max: P0(7,5,3), P1(3,2,2), P2(9,0,2), P3(2,2,2), P4(4,3,3). Determine if the system is in a safe state. Find the safe sequence.',
        marks: 10,
        frequency: 'Repeated Every Year (99% Probability)',
        repeatedInYears: ['2024', '2023', '2022', '2020', '2019'],
        solution: 'Total Allocated = A: 0+2+3+2+0=7, B: 1+0+0+1+0=2, C: 0+0+2+1+2=5. Available = Total - Allocated = (10-7, 5-2, 7-5) = (3, 3, 2). Need Matrix = Max - Allocation: P0(7,4,3), P1(1,2,2), P2(6,0,0), P3(0,1,1), P4(4,3,1). Step 1: Check P1: Need(1,2,2) <= Available(3,3,2) -> TRUE. P1 completes. Available becomes (3,3,2) + (2,0,0) = (5,3,2). Step 2: Check P3: Need(0,1,1) <= (5,3,2) -> TRUE. Available becomes (5,3,2) + (2,1,1) = (7,4,3). Step 3: Check P4: Need(4,3,1) <= (7,4,3) -> TRUE. Available becomes (7,4,3) + (0,0,2) = (7,4,5). Step 4: Check P0: Need(7,4,3) <= (7,4,5) -> TRUE. Available becomes (7,5,5). Step 5: Check P2: Need(6,0,0) <= (7,5,5) -> TRUE. Safe Sequence: <P1, P3, P4, P0, P2>. System is in a SAFE state.',
        diagramOrCode: 'Need Matrix Table:\nP0: [7, 4, 3]\nP1: [1, 2, 2] -> Executed first\nP2: [6, 0, 0]\nP3: [0, 1, 1] -> Executed second\nP4: [4, 3, 1] -> Executed third',
        examinerNotes: 'State clearly: "Since a safe execution sequence exists where all processes finish without deadlock, the system state is SAFE."'
      }
    ],
    cheatSheetHighlights: [
      'Banker\'s Algorithm: Need[i][j] = Max[i][j] - Allocation[i][j]',
      'SJF gives minimum average waiting time among all scheduling algorithms',
      'Belady\'s Anomaly is possible ONLY in FIFO, never in LRU or Optimal',
      'Mutual exclusion, hold & wait, no preemption, circular wait = Deadlock conditions',
      'In a 32-bit system with 4KB pages: 20-bit VPN (Page Number) and 12-bit Offset'
    ],
    labVivaFocusTopics: [
      'Difference between fork() and exec() system calls in Linux',
      'What is a Zombie process vs Orphan process and how are they handled by init/systemd',
      'Difference between Mutex and Semaphore in POSIX pthread library',
      'Explain TLB Hit vs TLB Miss handling'
    ]
  },
  {
    id: 'dbms',
    subjectCode: 'PCC-CS402',
    name: 'Database Management Systems (DBMS)',
    semester: '4th Semester',
    category: 'Core Computer Science',
    icon: 'Database',
    color: 'from-emerald-600 to-teal-500',
    recommendedBooks: [
      'Database System Concepts — Silberschatz, Korth, Sudarshan',
      'Fundamentals of Database Systems — Elmasri & Navathe',
      'Database Management Systems — Raghu Ramakrishnan'
    ],
    syllabusOverview: 'Relational data model, relational algebra, SQL queries & triggers, ER to relational schema mapping, Functional Dependencies, Normalization up to BCNF, ACID transactions, serializability testing, and concurrency control protocols.',
    totalModules: 5,
    modules: [
      {
        moduleNumber: 1,
        title: 'ER Modeling & Relational Algebra',
        keyTopics: ['Entity-Relationship (ER) Diagrams: Strong vs Weak Entities, Cardinality Ratios (1:1, 1:N, M:N)', 'Extended ER: Specialization, Generalization, Aggregation', 'ER-to-Relational Table Conversion Rules', 'Relational Algebra Operators: Select (σ), Project (π), Cartesian Product (×), Natural Join (⨝), Division (÷), Set Difference (-)'],
        summary: 'Weak entity has no primary key of its own and depends on an identifying relationship with a strong entity (represented by double rectangle and double diamond). In 1:N, the primary key of the 1-side is placed as a foreign key on the N-side.',
        importantFormulasOrTheorems: [
          'Relational Division (R ÷ S): Finds tuples in R that match ALL tuples in S (e.g. find students enrolled in ALL courses)',
          'Natural Join (R ⨝ S) = π_{attributes} (σ_{R.A = S.A} (R × S))'
        ],
        examTips: 'When converting M:N relationship to tables, remember to create a separate junction table containing the primary keys of both participating entities.'
      },
      {
        moduleNumber: 2,
        title: 'Functional Dependencies & Normalization',
        keyTopics: ['Closure of Attribute Set (X+)', 'Armstrong Axioms (Reflexivity, Augmentation, Transitivity)', 'Candidate Key Determination Algorithm', 'Canonical Cover / Minimal Cover', 'Normal Forms: 1NF (Atomic attributes), 2NF (No partial dependency), 3NF (No transitive dependency), BCNF (LHS must be a superkey)', 'Lossless Join & Dependency Preservation Properties'],
        summary: 'Candidate Key is a minimal superkey whose closure contains all attributes of R. 2NF: No non-prime attribute is partially dependent on any candidate key. 3NF: For every X->Y, either X is a superkey OR Y is a prime attribute. BCNF: For every X->Y, X MUST be a superkey.',
        importantFormulasOrTheorems: [
          'Lossless Join Test for R decomposed into R1 and R2: (R1 ∩ R2 -> R1) OR (R1 ∩ R2 -> R2) must hold in F+',
          '3NF allows dependency preservation ALWAYS; BCNF decomposition may not preserve all functional dependencies.'
        ],
        examTips: 'Always calculate all Candidate Keys first by checking which attributes NEVER appear on the RHS of any functional dependency.'
      },
      {
        moduleNumber: 3,
        title: 'Transactions & Concurrency Control',
        keyTopics: ['ACID Properties (Atomicity, Consistency, Isolation, Durability)', 'Transaction States (Active, Partially Committed, Committed, Failed, Aborted)', 'Schedules: Serial vs Concurrent', 'Conflict Serializability (Precedence Graph / Serialization Graph)', 'View Serializability & Blind Writes', 'Recoverable vs Cascadeless vs Strict Schedules'],
        summary: 'Conflict Serializability is tested via Precedence Graph: draw directed edge Ti -> Tj if Ti executes write(X) before Tj reads(X), or Ti reads(X) before Tj writes(X), or Ti writes(X) before Tj writes(X). If graph has NO cycle, schedule is conflict serializable.',
        importantFormulasOrTheorems: [
          'Conflict operations: Two operations on the same data item by different transactions, where at least one is a WRITE.',
          'Strict Schedule: A transaction can neither read nor write an item X until the previous transaction that wrote X has committed or aborted.'
        ],
        examTips: 'In serializability questions, list all pairs of conflicting operations, draw the directed graph nodes, and state whether a topological sort order exists.'
      },
      {
        moduleNumber: 4,
        title: 'Locking Protocols & Crash Recovery',
        keyTopics: ['Two-Phase Locking (2PL): Growing Phase (Acquire locks) vs Shrinking Phase (Release locks)', 'Strict 2PL & Rigorous 2PL (Prevents cascading aborts)', 'Deadlock Handling in DBMS (Wait-Die vs Wound-Wait timestamp schemes)', 'Log-Based Recovery: Write-Ahead Logging (WAL)', 'Checkpoints & UNDO/REDO algorithms during recovery'],
        summary: 'Basic 2PL guarantees Conflict Serializability but does NOT prevent deadlocks or cascading aborts. Strict 2PL holds exclusive locks until commit/abort. WAL rule: log record must be flushed to disk BEFORE the corresponding dirty database buffer page is written to disk.',
        importantFormulasOrTheorems: [
          'Wait-Die (Non-preemptive): If older Ti requests lock held by younger Tj, Ti WAITS; else if Ti is younger, Ti DIES.',
          'Wound-Wait (Preemptive): If older Ti requests lock held by younger Tj, Ti WOUNDS (aborts) Tj; else younger Ti WAITS.'
        ],
        examTips: 'Explain the UNDO list (transactions active at crash) and REDO list (transactions committed between checkpoint and crash).'
      },
      {
        moduleNumber: 5,
        title: 'Advanced SQL & Indexing Structures',
        keyTopics: ['Complex Nested Queries & Correlated Subqueries (EXISTS, NOT EXISTS, IN)', 'Aggregate Functions with GROUP BY & HAVING clause', 'Triggers & Stored Procedures', 'Indexing: Dense vs Sparse Index, Primary vs Secondary Index, Multilevel Indexing', 'B-Tree vs B+ Tree Node Capacity & Search/Insert Cost'],
        summary: 'Correlated subquery executes once for each candidate row evaluated by the outer query. B+ Tree stores all data pointers only in leaf nodes, which are linked together in a doubly-linked list for fast range traversal.',
        importantFormulasOrTheorems: [
          'Order m B+ tree: Leaf node holds between ceil((m-1)/2) and m-1 keys.',
          'Index record size = Search_Key_Size + Block_Pointer_Size'
        ],
        examTips: 'Remember that WHERE filters individual rows before grouping, whereas HAVING filters aggregated groups.'
      }
    ],
    topSolvedPyqs: [
      {
        id: 'dbms-pyq-1',
        question: 'Given relation R(A, B, C, D, E) with Functional Dependencies F = { A -> BC, CD -> E, B -> D, E -> A }. (i) Find all Candidate Keys. (ii) Determine the highest Normal Form of R. (iii) Decompose into 3NF if not in 3NF.',
        marks: 10,
        frequency: 'Repeated Every Year (97% Probability)',
        repeatedInYears: ['2024', '2023', '2021', '2020', '2019'],
        solution: 'Step 1: Check attribute appearances: A, B, C, D, E all appear on RHS, so any attribute can be candidate key. Let us find closure of A: A+ = {A, B, C, D, E} since A->BC, B->D, CD->E. So A is a Candidate Key. Let us find closure of E: E+ = {E, A, B, C, D} since E->A. So E is a Candidate Key. Let us find closure of (B, C): (BC)+ = {B, C, D, E, A} since B->D, CD->E, E->A. So BC is a Candidate Key. Let us find closure of (C, D): (CD)+ = {C, D, E, A, B} since CD->E, E->A, A->BC. So CD is a Candidate Key. Candidate Keys: {A}, {E}, {BC}, {CD}. Prime attributes: {A, B, C, D, E}. Non-prime attributes: None (Empty set!). Step 2: Highest Normal Form: Since all attributes are prime, R is trivially in 3NF! However, for B -> D, B is NOT a superkey (B+ = {B,D} != R), so R violates BCNF. Therefore, the highest Normal Form is 3NF.',
        examinerNotes: 'Highlight that when there are no non-prime attributes, partial dependencies and transitive dependencies cannot exist, automatically satisfying 3NF.'
      }
    ],
    cheatSheetHighlights: [
      'Prime Attribute = Any attribute that is part of ANY candidate key',
      '3NF Rule: For X -> Y, either X is Superkey OR Y is Prime Attribute',
      'BCNF Rule: For X -> Y, X MUST be a Superkey',
      'ACID: Atomicity (Recovery Mgr), Consistency (Integrity Constraints), Isolation (Concurrency Control), Durability (Log Mgr)',
      'Precedence Graph cycle indicates schedule is NOT Conflict Serializable'
    ],
    labVivaFocusTopics: [
      'Difference between TRUNCATE, DELETE and DROP in SQL',
      'Difference between Clustered Index and Non-Clustered Index in MySQL/Postgres',
      'Why Primary Key cannot contain NULL whereas UNIQUE key can',
      'Explain 2-Phase Locking growing vs shrinking phase rules'
    ]
  },
  {
    id: 'cn',
    subjectCode: 'PCC-CS501',
    name: 'Computer Networks (CN)',
    semester: '5th Semester',
    category: 'Core Computer Science',
    icon: 'Network',
    color: 'from-amber-500 to-orange-500',
    recommendedBooks: [
      'Computer Networks (5th/6th Edition) — Andrew S. Tanenbaum & David Wetherall',
      'Computer Networking: A Top-Down Approach — Kurose & Ross',
      'Data Communications and Networking — Behrouz A. Forouzan'
    ],
    syllabusOverview: '7-Layer OSI and 4-Layer TCP/IP models, Data Link framing, CRC error detection, Hamming error correction, Sliding window flow control (Go-Back-N, Selective Repeat), CSMA/CD, IPv4 subnetting & CIDR, Routing protocols (Distance Vector / RIP, Link State / OSPF, BGP), TCP 3-way handshake and congestion control (AIMD), DNS, HTTP/HTTPS, and SSL/TLS.',
    totalModules: 5,
    modules: [
      {
        moduleNumber: 1,
        title: 'Network Models, Physical & Data Link Layer',
        keyTopics: ['OSI 7-Layer vs TCP/IP 4-Layer comparison & encapsulation', 'Framing methods (Bit stuffing, Byte stuffing)', 'Error Detection: CRC (Cyclic Redundancy Check) polynomial division, Checksum', 'Error Correction: Hamming Code redundancy bits formula (2^r >= m + r + 1)'],
        summary: 'OSI Reference Model: Physical, Data Link, Network, Transport, Session, Presentation, Application. In CRC, if generator polynomial is of degree k, append k zeros to data bitstream and divide by modulo-2.',
        importantFormulasOrTheorems: [
          'Hamming Code Redundancy Bits: 2^r >= m + r + 1 (m data bits, r parity bits)',
          'Bit Stuffing rule: Insert a 0 after every five consecutive 1s to avoid false flag sequence 01111110'
        ],
        examTips: 'Practice polynomial binary division for CRC step-by-step; show the remainder as the transmitted CRC checksum bits.'
      },
      {
        moduleNumber: 2,
        title: 'Flow Control & Medium Access Control (MAC)',
        keyTopics: ['Stop-and-Wait ARQ Efficiency & Bandwidth-Delay Product', 'Sliding Window Protocols: Go-Back-N (GBN) vs Selective Repeat (SR)', 'Channel Allocation: Pure ALOHA (18.4%) vs Slotted ALOHA (36.8%) throughput', 'CSMA/CD (Collision Detection) & Minimum Frame Size Condition', 'Exponential Backoff Algorithm'],
        summary: 'Efficiency of Stop-and-Wait: η = 1 / (1 + 2a), where a = T_prop / T_trans. In GBN, sender window = 2^k - 1 and receiver window = 1. In SR, sender window = receiver window = 2^(k-1). For CSMA/CD, Minimum Frame Size L_min = 2 * T_prop * Bandwidth.',
        importantFormulasOrTheorems: [
          'Propagation Delay T_prop = Distance / Speed_of_Signal',
          'Transmission Delay T_trans = Frame_Size_L / Bandwidth_B',
          'CSMA/CD Condition: T_trans >= 2 * T_prop => L >= 2 * T_prop * B'
        ],
        examTips: 'Always remember that GBN requires cumulative ACKs, whereas Selective Repeat uses independent individual ACKs and selective retransmission buffers.'
      },
      {
        moduleNumber: 3,
        title: 'Network Layer: IPv4, Subnetting & Routing',
        keyTopics: ['IPv4 Header Fields (TTL, Fragmentation Offset, Flags)', 'Classful IP Addressing (Classes A, B, C, D, E) & Classless CIDR Subnetting', 'Subnet Mask calculation, Network ID, First Usable Host, Broadcast Address', 'Routing Algorithms: Distance Vector (Bellman-Ford & Count-to-Infinity problem) vs Link State (Dijkstra / OSPF)'],
        summary: 'Subnetting borrows host bits for network bits. Subnet size with /n prefix = 2^(32-n) addresses, with 2^(32-n) - 2 usable host addresses (minus Network ID and Direct Broadcast Address). Distance Vector sends full routing table to neighbors; Link State floods link status to all routers.',
        importantFormulasOrTheorems: [
          'Fragment Offset = (Byte_Number) / 8',
          'Number of subnets = 2^(borrowed_bits), Number of usable hosts per subnet = 2^(remaining_host_bits) - 2'
        ],
        examTips: 'In subnetting questions, clearly write the Subnet Mask, Network Address (bitwise AND of IP and Mask), and Broadcast Address.'
      },
      {
        moduleNumber: 4,
        title: 'Transport Layer: TCP, UDP & Congestion Control',
        keyTopics: ['TCP vs UDP Header Comparison & Features', 'TCP 3-Way Handshake Connection Establishment & 4-Way Termination', 'TCP Sliding Window Flow Control & Silly Window Syndrome', 'TCP Congestion Control: Slow Start (Exponential), Congestion Avoidance (Additive Increase), Fast Retransmit & Fast Recovery (Multiplicative Decrease)'],
        summary: 'TCP is connection-oriented, reliable, and byte-stream based. UDP is connectionless, unreliable datagram protocol. TCP Congestion Window (cwnd): In Slow Start, cwnd doubles every RTT until ssthresh. In Congestion Avoidance, cwnd increases by 1 MSS per RTT (AIMD). On 3 duplicate ACKs, ssthresh = cwnd / 2 and cwnd = ssthresh + 3 MSS (Fast Recovery). On Timeout, ssthresh = cwnd / 2 and cwnd drops to 1 MSS.',
        importantFormulasOrTheorems: [
          'TCP Effective Window = min(Congestion_Window_cwnd, Receiver_Advertised_Window_rwnd)',
          'AIMD: Additive Increase / Multiplicative Decrease'
        ],
        examTips: 'Draw the classic TCP Congestion Window (cwnd) vs Transmission Round (RTT) graph showing Slow Start exponential curve and sawtooth AIMD pattern.'
      },
      {
        moduleNumber: 5,
        title: 'Application Layer & Network Security',
        keyTopics: ['DNS Hierarchy, Iterative vs Recursive DNS Resolution, Port 53', 'HTTP 1.1 Persistent Connections vs HTTP/2 Multiplexing, HTTP Status Codes', 'Email Protocols: SMTP (Port 25), POP3 (Port 110), IMAP (Port 143)', 'Symmetric (AES, DES) vs Asymmetric Cryptography (RSA Algorithm)', 'Digital Signatures, Certificates, and SSL/TLS Handshake'],
        summary: 'DNS maps human domain names to IP addresses. RSA is based on the prime factorization hardness of large integers: compute n = p*q, phi(n) = (p-1)(q-1), choose public key e such that gcd(e, phi(n)) = 1, compute private key d = e^(-1) mod phi(n). Ciphertext C = M^e mod n, Plaintext M = C^d mod n.',
        importantFormulasOrTheorems: [
          'RSA Encryption: C = M^e mod n',
          'RSA Decryption: M = C^d mod n (where e * d ≡ 1 mod (p-1)(q-1))'
        ],
        examTips: 'Show step-by-step calculation of e and d using Extended Euclidean Algorithm for RSA numericals.'
      }
    ],
    topSolvedPyqs: [
      {
        id: 'cn-pyq-1',
        question: 'An organization is granted the block 200.10.20.0/24. The administrator wants to create 4 equal-sized subnets. (i) Find the new subnet mask. (ii) For each subnet, find the Subnet Address, First Usable Host IP, Last Usable Host IP, and Direct Broadcast Address. (iii) How many usable hosts are available per subnet?',
        marks: 10,
        frequency: 'Repeated Every Year (96% Probability)',
        repeatedInYears: ['2024', '2023', '2022', '2021', '2018'],
        solution: 'Step 1: To create 4 subnets, we need 2^k >= 4 => k = 2 borrowed bits. New prefix length = 24 + 2 = /26. New Subnet Mask = 255.255.255.192 (since 128 + 64 = 192). Step 2: Block size = 256 / 4 = 64 addresses per subnet. Subnet 1: Subnet ID = 200.10.20.0, Usable Hosts = 200.10.20.1 to 200.10.20.62, Broadcast Address = 200.10.20.63. Subnet 2: Subnet ID = 200.10.20.64, Usable Hosts = 200.10.20.65 to 200.10.20.126, Broadcast Address = 200.10.20.127. Subnet 3: Subnet ID = 200.10.20.128, Usable Hosts = 200.10.20.129 to 200.10.20.190, Broadcast Address = 200.10.20.191. Subnet 4: Subnet ID = 200.10.20.192, Usable Hosts = 200.10.20.193 to 200.10.20.254, Broadcast Address = 200.10.20.255. Step 3: Usable hosts per subnet = 2^(32-26) - 2 = 64 - 2 = 62 hosts.',
        examinerNotes: 'Always state why 2 addresses are deducted: 1 for Subnet Network Address and 1 for Direct Broadcast Address.'
      }
    ],
    cheatSheetHighlights: [
      'CSMA/CD Minimum Frame Size: L >= 2 * T_prop * Bandwidth',
      'Go-Back-N Window Size: Sender = 2^k - 1, Receiver = 1',
      'Selective Repeat Window Size: Sender = Receiver = 2^(k-1)',
      'Subnet Usable Hosts = 2^(32 - prefix) - 2',
      'TCP 3-Way Handshake: SYN -> SYN+ACK -> ACK'
    ],
    labVivaFocusTopics: [
      'Difference between Hub (Layer 1), Switch (Layer 2) and Router (Layer 3)',
      'What is ARP (Address Resolution Protocol) and how does it map IP to MAC',
      'Why TCP uses 3-way handshake instead of 2-way handshake',
      'Explain ping and traceroute commands using ICMP packets'
    ]
  },
  {
    id: 'coa',
    subjectCode: 'PCC-CS302',
    name: 'Computer Organization & Architecture (COA)',
    semester: '3rd / 4th Semester',
    category: 'Systems & Hardware',
    icon: 'Cpu',
    color: 'from-rose-600 to-pink-500',
    recommendedBooks: [
      'Computer Organization and Architecture — William Stallings',
      'Computer System Architecture — M. Morris Mano',
      'Computer Architecture: A Quantitative Approach — Hennessy & Patterson'
    ],
    syllabusOverview: 'Instruction set architecture, addressing modes, arithmetic logic unit (ALU), Booth’s multiplication algorithm, IEEE 754 floating-point standards, 5-stage instruction pipelining, pipeline hazards, memory hierarchy, cache mapping techniques (Direct, Fully Associative, Set-Associative), and DMA controller.',
    totalModules: 5,
    modules: [
      {
        moduleNumber: 1,
        title: 'Data Representation & Computer Arithmetic',
        keyTopics: ['Fixed-point 2\'s complement representation', 'Booth Multiplication Algorithm for signed integers with flow chart', 'Restoring & Non-Restoring Division Algorithms', 'IEEE 754 Floating-Point Standard (Single Precision 32-bit: 1 sign, 8 exponent with bias 127, 23 mantissa; Double Precision 64-bit: 1 sign, 11 exponent with bias 1023, 52 mantissa)'],
        summary: 'Booth Algorithm handles positive and negative binary multipliers uniformly by examining bits (Q0, Q-1). If 10 -> Subtract M from A (A = A - M), then arithmetic right shift; if 01 -> Add M to A (A = A + M), then arithmetic right shift; if 00 or 11 -> Only arithmetic right shift [A, Q, Q-1].',
        importantFormulasOrTheorems: [
          'IEEE 754 Single Precision: Value = (-1)^S * (1.M) * 2^(E - 127)',
          'IEEE 754 Double Precision: Value = (-1)^S * (1.M) * 2^(E - 1023)'
        ],
        examTips: 'In Booth Algorithm tabular calculations, draw columns for Step, Operation, A (Accumulator), Q (Multiplier), Q-1, and Count.'
      },
      {
        moduleNumber: 2,
        title: 'Instruction Set Architecture & Addressing Modes',
        keyTopics: ['Instruction Cycle: Fetch, Decode, Execute, Store', 'Instruction Formats: Zero-address (Stack), One-address (Accumulator), Two-address, Three-address', 'Addressing Modes: Immediate, Direct, Indirect, Register Direct, Register Indirect, Relative (PC + offset), Indexed (Index Register + offset), Base Register'],
        summary: 'Addressing mode specifies how the effective address (EA) of an operand is calculated. Relative addressing mode uses EA = PC + Address_Field, making code position-independent.',
        importantFormulasOrTheorems: [
          'Effective Address (Direct): EA = Address_Field',
          'Effective Address (Indirect): EA = Memory[Address_Field]',
          'Effective Address (Relative): EA = PC + Offset'
        ],
        examTips: 'Be prepared to convert a high-level equation like X = (A + B) * (C + D) into 0-address, 1-address, 2-address, and 3-address assembly instructions.'
      },
      {
        moduleNumber: 3,
        title: 'Control Unit & Pipelining',
        keyTopics: ['Hardwired Control Unit (Fast, inflexible RISC) vs Microprogrammed Control Unit (Flexible, micro-instructions, CISC)', 'Horizontal vs Vertical Microprogramming', '5-Stage Instruction Pipeline (IF, ID, EX, MEM, WB)', 'Pipeline Hazards: Structural Hazards, Data Hazards (RAW, WAR, WAW) & Data Forwarding, Control/Branch Hazards & Branch Prediction', 'Speedup, Efficiency & Throughput of Pipelining'],
        summary: 'Pipelining overlaps instruction execution phases. Ideal Speedup S = k (number of pipeline stages). Under stalls/hazards: Speedup S = (k * n) / (k + n - 1 + Stalls) * (Non-pipeline clock / Pipeline clock). RAW hazard is resolved using Operand Forwarding (bypassing ALU output directly to next instruction\'s execution stage).',
        importantFormulasOrTheorems: [
          'Speedup S = Non-pipelined Time / Pipelined Time = (n * k * t_p) / ((k + n - 1) * t_p) -> k as n -> infinity',
          'Efficiency η = Speedup / k'
        ],
        examTips: 'Draw the space-time diagram (Stages vs Clock cycles) showing pipeline stalls and bubbles.'
      },
      {
        moduleNumber: 4,
        title: 'Memory Hierarchy & Cache Memory Mapping',
        keyTopics: ['Memory Hierarchy (Registers, L1/L2/L3 Cache, Main Memory, Secondary Disk)', 'Locality of Reference: Temporal Locality vs Spatial Locality', 'Cache Mapping: Direct Mapping, Fully Associative Mapping, K-Way Set Associative Mapping', 'Cache Write Policies: Write-Through vs Write-Back (Dirty bit)', 'Average Memory Access Time (AMAT)'],
        summary: 'In Direct Mapping, Cache Line = (Block Address) % (Total Cache Lines). In K-way Set Associative, Set Number = (Block Address) % (Total Sets). Physical address is split into: [TAG | SET/LINE INDEX | BLOCK OFFSET / BYTE OFFSET].',
        importantFormulasOrTheorems: [
          'AMAT = Hit_Time + Miss_Rate * Miss_Penalty',
          'Direct Mapped Address Bits: [Tag Bits | Line Number Bits | Word Offset Bits]',
          'K-Way Set Associative Address Bits: [Tag Bits | Set Number Bits | Word Offset Bits]'
        ],
        examTips: 'Practice bit-split calculation for physical addresses given Main Memory size, Cache size, Block size, and Associativity.'
      },
      {
        moduleNumber: 5,
        title: 'Input/Output Organization & DMA',
        keyTopics: ['Programmed I/O vs Interrupt-Driven I/O', 'Interrupt Handling: Daisy Chaining Priority Interrupt, Vectored Interrupts', 'Direct Memory Access (DMA): DMA Controller Architecture, Cycle Stealing vs Burst Mode / Block Transfer', 'Bus Arbitration: Centralized vs Distributed'],
        summary: 'DMA allows high-speed I/O devices (like disk controllers) to transfer data directly to/from main memory without constant CPU intervention. The CPU yields the system bus to the DMA controller during Cycle Stealing or Burst mode.',
        importantFormulasOrTheorems: [
          'Cycle Stealing: DMA transfers one word at a time, stealing clock cycles from CPU.',
          'Burst Mode: DMA holds the bus and transfers the entire block of data before releasing the bus back to CPU.'
        ],
        examTips: 'Draw the block diagram of a DMA Controller showing Bus Grant (BG), Bus Request (BR), Address Register, Word Count Register, and Control Register.'
      }
    ],
    topSolvedPyqs: [
      {
        id: 'coa-pyq-1',
        question: 'A 4-way set-associative cache memory has a total size of 64 KB with a block size of 16 bytes. The main memory size is 4 GB with byte addressability. (i) How many bits are there in the physical address? (ii) Find the number of bits in the Tag, Set Index, and Word Offset fields. (iii) Draw the address division format.',
        marks: 10,
        frequency: 'Repeated Every Year (99% Probability)',
        repeatedInYears: ['2024', '2023', '2022', '2021', '2019'],
        solution: 'Step 1: Main Memory Size = 4 GB = 2^32 bytes. Therefore, Physical Address = 32 bits. Step 2: Block Size = 16 bytes = 2^4 bytes. Therefore, Word Offset = 4 bits. Step 3: Total Cache Size = 64 KB = 2^16 bytes. Number of lines in Cache = Cache Size / Block Size = 64 KB / 16 B = 4096 lines = 2^12 lines. Step 4: Number of sets in 4-Way Set Associative Cache = Total Lines / 4 = 4096 / 4 = 1024 sets = 2^10 sets. Therefore, Set Index = 10 bits. Step 5: Tag Bits = Physical Address - Set Index - Word Offset = 32 - 10 - 4 = 18 bits. Address Format: [Tag: 18 bits | Set Index: 10 bits | Word Offset: 4 bits] = Total 32 bits.',
        diagramOrCode: '+------------------+-------------------+------------------+\n|   Tag (18 bits)  | Set Index (10 bits)| Word Offset (4b) |\n+------------------+-------------------+------------------+',
        examinerNotes: 'Clearly state: 4 GB = 2^32 bytes, Set Count = Cache Lines / Associativity (4), and Tag = 32 - (10 + 4) = 18.'
      }
    ],
    cheatSheetHighlights: [
      'Physical Address bits = log2(Main Memory Size in bytes)',
      'Word Offset bits = log2(Block Size in bytes)',
      'Set Index bits = log2(Total Sets)',
      'Booth Algorithm: 10 = Subtract & Shift, 01 = Add & Shift, 00/11 = Shift only',
      'AMAT = Hit Time + Miss Rate * Miss Penalty'
    ],
    labVivaFocusTopics: [
      'Difference between RISC and CISC architectures',
      'What is the function of the Program Counter (PC) and Instruction Register (IR)',
      'Explain Cache Hit vs Cache Miss and Dirty Bit in Write-Back policy',
      'What are Pipeline Hazards and how does Data Forwarding resolve RAW hazard'
    ]
  },
  {
    id: 'toc',
    subjectCode: 'PCC-CS502',
    name: 'Theory of Computation & Automata (TOC)',
    semester: '5th Semester',
    category: 'Theory & Mathematics',
    icon: 'Brain',
    color: 'from-violet-600 to-purple-600',
    recommendedBooks: [
      'Introduction to Automata Theory, Languages, and Computation — Hopcroft, Motwani, Ullman',
      'Introduction to the Theory of Computation — Michael Sipser',
      'Elements of the Theory of Computation — Lewis & Papadimitriou'
    ],
    syllabusOverview: 'Chomsky hierarchy of languages, Deterministic & Non-Deterministic Finite Automata (DFA, NFA), ε-NFA to DFA conversion, Regular Expressions, Pumping Lemma for regular and context-free languages, Context-Free Grammars (CFG), CNF/GNF forms, Pushdown Automata (PDA), Turing Machines (TM), Halting Problem, and Decidability.',
    totalModules: 4,
    modules: [
      {
        moduleNumber: 1,
        title: 'Finite Automata & Regular Expressions',
        keyTopics: ['DFA formal definition (5-tuple: Q, Σ, δ, q0, F)', 'NFA formal definition and power equivalence to DFA', 'Conversion of ε-NFA to DFA using Subset Construction', 'Minimization of DFA using Myhill-Nerode Table-Filling Method', 'Regular Expressions & Arden Theorem (R = Q + RP => R = QP*)'],
        summary: 'Finite Automata recognize Type-3 Regular Languages. DFA has exactly one transition for each input symbol from every state. Subset construction converts NFA with 2^Q possible states into an equivalent DFA. Arden\'s Theorem solves state equations to find regular expressions.',
        importantFormulasOrTheorems: [
          'Arden\'s Theorem: If P and Q are regular expressions over Σ, and P does not contain ε, then R = Q + RP has a UNIQUE solution: R = QP*',
          'DFA 5-tuple: M = (Q, Σ, δ, q0, F) where δ: Q × Σ -> Q'
        ],
        examTips: 'Draw the transition table alongside the state transition diagram for full marks in DFA design questions.'
      },
      {
        moduleNumber: 2,
        title: 'Pumping Lemma & Regular Language Properties',
        keyTopics: ['Pumping Lemma for Regular Languages (xyz decomposition where |xy| <= p, |y| >= 1, xy^i z ∈ L for all i >= 0)', 'Proving languages non-regular (e.g. L = {a^n b^n | n >= 0}, L = {a^p | p is prime})', 'Closure Properties of Regular Languages (Closed under Union, Intersection, Complement, Concatenation, Kleene Star, Difference)'],
        summary: 'Pumping Lemma is used strictly as an adversary game to PROVE that a language is NOT regular. Choose a string w ∈ L with |w| >= p, split into xyz with |xy| <= p and |y| >= 1, pump y with i=0 or i=2, and show the resulting string is NOT in L (contradiction).',
        importantFormulasOrTheorems: [
          'Pumping Lemma for Regular: For any regular L, exists p such that ∀ w ∈ L with |w| >= p: w = xyz, |xy| <= p, |y| >= 1, and ∀ i >= 0: xy^i z ∈ L.'
        ],
        examTips: 'Clearly state: "Assume L is regular. Let p be the pumping length. Choose string s = a^p b^p ∈ L..."'
      },
      {
        moduleNumber: 3,
        title: 'Context-Free Grammars & Pushdown Automata',
        keyTopics: ['CFG Definition (4-tuple: V, T, P, S) & Derivation Trees (Leftmost vs Rightmost)', 'Ambiguous Grammars & Removing Ambiguity', 'Simplification of CFG: Eliminating Null (ε) productions, Unit productions, and Useless symbols', 'Chomsky Normal Form (CNF: A -> BC or A -> a) & GNF', 'Pushdown Automata (PDA: 7-tuple) by Final State & Empty Stack acceptance'],
        summary: 'Context-Free Languages (Type-2) are recognized by Non-Deterministic Pushdown Automata (NPDA). PDA adds a single infinite stack memory to finite automata. In CNF, all production rules are strictly in the form A -> BC (two non-terminals) or A -> a (single terminal).',
        importantFormulasOrTheorems: [
          'PDA 7-tuple: M = (Q, Σ, Γ, δ, q0, Z0, F) where δ: Q × (Σ ∪ {ε}) × Γ -> P(Q × Γ*)',
          'CNF Derivation length for string of length n = 2n - 1 steps'
        ],
        examTips: 'In PDA design, show the instantaneous description (ID) trace step-by-step for a sample input string.'
      },
      {
        moduleNumber: 4,
        title: 'Turing Machines, Decidability & Halting Problem',
        keyTopics: ['Turing Machine (7-tuple: Q, Σ, Γ, δ, q0, B, F) with infinite read/write tape and head movement (L/R)', 'Design of TM for standard languages: {a^n b^n c^n}, {w w^R palindromes}, unary multiplication', 'Church-Turing Thesis', 'Chomsky Hierarchy Summary (Regular ⊂ CFL ⊂ CSL ⊂ Recursive ⊂ Recursively Enumerable)', 'Universal Turing Machine & Halting Problem Un-decidability proof via Diagonalization'],
        summary: 'Turing Machine is the ultimate mathematical model of computation. Recursive languages are decided by a TM that halts on ALL inputs (Halting TM). Recursively Enumerable (RE) languages are recognized by a TM that may loop forever on strings not in L. The Halting Problem is un-decidable.',
        importantFormulasOrTheorems: [
          'Chomsky Hierarchy: Type 3 (Regular / Finite Automata) ⊂ Type 2 (CFL / PDA) ⊂ Type 1 (CSL / LBA) ⊂ Type 0 (Unrestricted / TM)',
          'Halting Problem: No general algorithm exists to determine whether an arbitrary program P with input I will halt or run forever.'
        ],
        examTips: 'Draw the 4-level concentric Chomsky Hierarchy Venn diagram with language types and corresponding automata machines.'
      }
    ],
    topSolvedPyqs: [
      {
        id: 'toc-pyq-1',
        question: 'Prove that the language L = {a^n b^n | n >= 0} is NOT regular using the Pumping Lemma.',
        marks: 10,
        frequency: 'Repeated Every Year (98% Probability)',
        repeatedInYears: ['2024', '2023', '2022', '2020', '2018'],
        solution: 'Proof by Contradiction: Step 1: Assume L is a regular language. Step 2: By Pumping Lemma, there exists a pumping length p >= 1. Step 3: Choose a string w = a^p b^p. Clearly w ∈ L and |w| = 2p >= p. Step 4: According to Pumping Lemma, w can be split into w = xyz such that (1) |xy| <= p, (2) |y| >= 1, (3) xy^i z ∈ L for all i >= 0. Step 5: Since |xy| <= p, the substring xy must consist entirely of \'a\'s. Thus, y = a^k for some k >= 1 (since |y| >= 1). Step 6: Let us pump with i = 2: w\' = x y^2 z = a^(p + k) b^p. Since k >= 1, the number of \'a\'s in w\' is (p + k), which is strictly greater than p (the number of \'b\'s). Therefore, w\' has unequal numbers of \'a\'s and \'b\'s => w\' ∉ L. Step 7: This directly contradicts the Pumping Lemma requirement that xy^2 z ∈ L. Hence, our initial assumption that L is regular is false. Therefore, L = {a^n b^n | n >= 0} is NOT regular. (Q.E.D.)',
        examinerNotes: 'Do not choose a specific integer for p (e.g. p=5). Always write the proof with symbolic variable p.'
      }
    ],
    cheatSheetHighlights: [
      'Chomsky: Type 3 (DFA/NFA) -> Type 2 (PDA) -> Type 1 (LBA) -> Type 0 (Turing Machine)',
      'Closure: Regular languages are closed under ALL operations (Union, Intersect, Complement, Star, Reverse)',
      'CFL is closed under Union, Concatenation, Star, but NOT closed under Intersection or Complement',
      'Arden\'s Theorem: R = Q + RP => R = QP*',
      'Halting Problem of Turing Machine is UNDECIDABLE'
    ],
    labVivaFocusTopics: [
      'Difference between DFA and NFA (Determinism vs Non-deterministic branching)',
      'Why Finite Automata cannot count arbitrarily high numbers like a^n b^n (lack of memory stack)',
      'Explain the difference between Decidable language vs Undecidable language',
      'What is a Universal Turing Machine'
    ]
  }
];
