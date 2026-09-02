import { LabVivaItem, PyqHeatmapItem, EmergencyCramItem } from '../types';

export const LAB_VIVA_QUESTIONS: LabVivaItem[] = [
  {
    id: 'viva-1',
    subject: 'Data Structures Lab',
    topic: 'Trees & Heaps',
    question: 'Why is an AVL tree preferred over a regular Binary Search Tree for dictionary lookups, and what is its maximum height guarantee?',
    modelAnswer: 'A regular BST can degenerate into a skewed linked list in the worst case (e.g. sorted inputs) giving O(N) lookup. An AVL tree strictly enforces that the balance factor (|H_L - H_R|) <= 1 at every node, guaranteeing height is bounded by ~1.44 log2(N). This guarantees strictly O(log N) search, insertion, and deletion times.',
    keywordsExpected: ['Degenerate O(N) BST', 'Balance Factor <= 1', 'Height bound ~1.44 log N', 'Guaranteed O(log N) worst case'],
    examinerFollowUp: 'What are the 4 types of AVL rotations and when do you use double rotation?',
    difficulty: 'Standard Viva'
  },
  {
    id: 'viva-2',
    subject: 'Operating Systems Lab',
    topic: 'Process Synchronization',
    question: 'Explain the difference between a Mutex and a Counting Semaphore with a real-life producer-consumer scenario.',
    modelAnswer: 'A Mutex (Mutual Exclusion object) is a locking mechanism owned by a single thread at a time (binary 0 or 1). Only the thread that locked it can unlock it. A Semaphore is a signaling mechanism with an integer counter used to track available instances of a shared pool (e.g. buffer slots in Producer-Consumer). Any thread can signal or wait on it.',
    keywordsExpected: ['Ownership constraint in Mutex', 'Signaling vs Locking', 'Integer counter in Semaphore', 'Empty and Full buffer counts'],
    examinerFollowUp: 'What happens if a thread forgets to release a mutex lock or dies while holding it?',
    difficulty: 'Standard Viva'
  },
  {
    id: 'viva-3',
    subject: 'DBMS Lab',
    topic: 'Indexing & B+ Trees',
    question: 'Why do relational databases use B+ Trees instead of B-Trees for disk-based table indexes?',
    modelAnswer: 'In a B+ Tree, all data records/pointers are stored ONLY in the leaf nodes, while internal nodes store only search keys. This allows internal nodes to fit more keys per disk block (higher fanout, shallower tree depth, fewer disk I/Os). Furthermore, leaf nodes are linked sequentially as a doubly-linked list, allowing blazing-fast range queries (e.g., WHERE age BETWEEN 20 AND 30).',
    keywordsExpected: ['High fanout', 'Fewer disk I/O reads', 'Data only in leaf nodes', 'Sequential leaf pointers for range scan'],
    examinerFollowUp: 'What is the fanout of a B+ tree node with 4KB block size and 8-byte keys?',
    difficulty: 'Tough / Distinction'
  },
  {
    id: 'viva-4',
    subject: 'Computer Networks Lab',
    topic: 'Socket Programming',
    question: 'In TCP socket programming, why is the listen() and accept() system call needed on the server side?',
    modelAnswer: 'listen() transitions the socket into a passive listening state and defines the backlog queue length for incoming connection requests. accept() extracts the first connection from the queue, creates a brand new connected socket dedicated to communication with that specific client, and leaves the original listening socket free to accept new incoming clients.',
    keywordsExpected: ['Passive socket mode', 'Backlog connection queue', 'New dedicated client socket descriptor', 'Original socket remains listening'],
    examinerFollowUp: 'What is the three-way handshake sequence executed during connect() and accept()?',
    difficulty: 'Basic Viva'
  }
];

export const PYQ_HEATMAPS: PyqHeatmapItem[] = [
  {
    topic: 'AVL Rotations & Insertion Algorithm',
    subject: 'Data Structures',
    stream: 'btech',
    frequency: 95,
    averageMarks: 12,
    recurrenceTag: 'Repeated Every Year',
    expectedQuestionTypes: ['10-mark Step-by-step Insertion problem', '2-mark Balance factor definition', 'Proof of max height']
  },
  {
    topic: 'CPU Scheduling Gantt Charts (RR + SJF + Priority)',
    subject: 'Operating Systems',
    stream: 'btech',
    frequency: 98,
    averageMarks: 15,
    recurrenceTag: 'Repeated Every Year',
    expectedQuestionTypes: ['10-mark Gantt Chart table calculation', 'Turnaround time & Waiting time computation', 'Preemptive vs Non-preemptive analysis']
  },
  {
    topic: "Banker's Algorithm Safety State Matrix",
    subject: 'Operating Systems',
    stream: 'btech',
    frequency: 88,
    averageMarks: 10,
    recurrenceTag: 'High Frequency',
    expectedQuestionTypes: ['Need Matrix calculation', 'Find Safe sequence', 'Resource request grant test']
  },
  {
    topic: 'Lens Maker Formula & Optical Instruments',
    subject: 'Physics',
    stream: 'cbse12',
    frequency: 92,
    averageMarks: 8,
    recurrenceTag: 'Repeated Every Year',
    expectedQuestionTypes: ['5-mark Derivation with ray diagram', 'Compound microscope magnification numerical']
  },
  {
    topic: 'Definite Integrals King Property Proofs',
    subject: 'Mathematics',
    stream: 'cbse12',
    frequency: 94,
    averageMarks: 6,
    recurrenceTag: 'Repeated Every Year',
    expectedQuestionTypes: ['Standard proof ∫[0 to π/2] log(sin x) dx = -π/2 log 2', 'Area under curves bounded by parabola & straight line']
  },
  {
    topic: 'Relative Speed & Train Crossing Problems',
    subject: 'Quantitative Aptitude',
    stream: 'ssc',
    frequency: 90,
    averageMarks: 6,
    recurrenceTag: 'High Frequency',
    expectedQuestionTypes: ['Opposite / Same direction relative speed', 'Bridge/Platform crossing time arithmetic']
  }
];

export const EMERGENCY_CRAM_ITEMS: EmergencyCramItem[] = [
  {
    id: 'cram-1',
    subject: 'Data Structures & Algorithms',
    topic: 'AVL Tree Rotations & Prim’s MST',
    hoursNeeded: 1.5,
    assuredMarks: 18,
    summaryCheatSheet: '• LL Imbalance -> Single Right Rotate\n• RR Imbalance -> Single Left Rotate\n• LR Imbalance -> Left rotate child, then Right rotate root\n• RL Imbalance -> Right rotate child, then Left rotate root\n• Prim MST: Start from arbitrary node, always pick lowest weight edge connecting visited to unvisited.',
    top3Pyqs: ['Insert {14, 15, 4, 9, 7, 18, 3} into empty AVL', "Trace Prim's algorithm on 6-vertex graph", 'Write C struct for AVL tree node with height field']
  },
  {
    id: 'cram-2',
    subject: 'Operating Systems',
    topic: 'CPU Scheduling & Banker’s Safety Matrix',
    hoursNeeded: 2.0,
    assuredMarks: 24,
    summaryCheatSheet: "• Turnaround Time = Completion Time - Arrival Time\n• Waiting Time = Turnaround Time - Burst Time\n• Banker Need = Max - Allocation\n• If Need <= Available, execute and Available += Allocation\n• 4 Coffman Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.",
    top3Pyqs: ['Solve 5-process Gantt chart with Round Robin (Quantum=2ms)', 'Compute Safe Sequence for given 3-resource matrix', 'Explain Thrashing and Page Fault Frequency']
  },
  {
    id: 'cram-3',
    subject: 'DBMS',
    topic: 'Normalization BCNF / 3NF & SQL Group By / Having',
    hoursNeeded: 1.5,
    assuredMarks: 16,
    summaryCheatSheet: '• 1NF: Atomic values only, no multivalued attributes.\n• 2NF: 1NF + No Partial Dependency (Every non-prime depends on full candidate key).\n• 3NF: 2NF + No Transitive Dependency (X->Y where X is superkey or Y is prime).\n• BCNF: For every FD X->Y, X MUST be a Super Key.',
    top3Pyqs: ['Test if R(A,B,C,D) with F={AB->C, C->D, D->A} is in 3NF or BCNF', 'Difference between WHERE and HAVING clause in SQL', 'Write Relational Algebra for natural join and division']
  }
];
