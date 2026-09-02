import { DoubtCase } from '../types';

export const SAMPLE_DOUBTS: DoubtCase[] = [
  {
    id: 'doubt-btech-1',
    stream: 'btech',
    subject: 'Data Structures & Algorithms',
    title: 'AVL Tree Double Rotation (LR Case) on inserting 15',
    tag: 'Tree Rebalancing',
    problemStatement: 'Given an AVL tree with root 20, left child 10. We insert 15. The tree becomes unbalanced at node 20 with Balance Factor = +2. Show the step-by-step Left-Right (LR) double rotation to restore the AVL invariant.',
    codeOrMath: `Initial State:
      20 (BF = +2)
     /
    10 (BF = -1)
     \\
      15 (Inserted Node)`,
    aiExplanation: {
      coreConcept: 'Left-Right (LR) Imbalance occurs when a node is inserted into the RIGHT subtree of the LEFT child of an unbalanced ancestor.',
      keyFormulaOrRule: 'Solution = Left Rotate on Left Child (10), followed by Right Rotate on Grandparent (20).',
      stepByStep: [
        {
          stepNumber: 1,
          label: 'Diagnose Balance Factors',
          text: 'At root (20): Height(Left)=2, Height(Right)=0 -> BF = 2 - 0 = +2 (Unbalanced!). At Left Child (10): Height(Left)=0, Height(Right)=1 -> BF = 0 - 1 = -1. Because signs are (+2, -1), this is a classic LR Imbalance.',
          subDetail: 'Direct single rotation cannot fix alternating zig-zag shapes.'
        },
        {
          stepNumber: 2,
          label: 'Perform Step 1: Left Rotate at Child (Node 10)',
          text: 'Rotate 10 to the left around node 15. Node 15 becomes the left child of 20, and 10 becomes the left child of 15.',
          subDetail: 'Tree now becomes Left-Left (LL) aligned: 20 -> 15 -> 10.'
        },
        {
          stepNumber: 3,
          label: 'Perform Step 2: Right Rotate at Root (Node 20)',
          text: 'Rotate 20 to the right around node 15. Node 15 becomes the NEW ROOT. 10 is left child, 20 is right child.',
          subDetail: 'Final Balanced Tree: Root=15 (BF=0), Left=10 (BF=0), Right=20 (BF=0).'
        }
      ],
      commonMistakeToAvoid: 'Never perform a single Right rotation on an LR case; that produces a non-BST skewed structure.',
      proExamTip: 'In university exams, always draw the intermediate tree after the first left rotation to secure full 5/5 marks!'
    }
  },
  {
    id: 'doubt-btech-2',
    stream: 'btech',
    subject: 'Operating Systems',
    title: 'Banker’s Algorithm Safety State Verification',
    tag: 'Deadlock Avoidance',
    problemStatement: '5 processes (P0-P4) and 3 resource types (A=10, B=5, C=7). Allocation and Max matrices are given. Available vector is [3, 3, 2]. Is the system currently in a Safe State? If yes, find the Safe Sequence.',
    codeOrMath: `Need Matrix = Max - Allocation
P0 Need: [7, 4, 3] | Alloc: [0, 1, 0]
P1 Need: [1, 2, 2] | Alloc: [2, 0, 0]
P2 Need: [6, 0, 0] | Alloc: [3, 0, 2]
P3 Need: [0, 1, 1] | Alloc: [2, 1, 1]
P4 Need: [4, 3, 1] | Alloc: [0, 0, 2]
Available: [3, 3, 2]`,
    aiExplanation: {
      coreConcept: "Safety Algorithm checks if there exists at least one execution order where every process can acquire its max needs, finish, and return its resources.",
      keyFormulaOrRule: 'Condition to execute process Pi: Need[i] <= Available. After finish: Available_new = Available + Allocation[i].',
      stepByStep: [
        {
          stepNumber: 1,
          label: 'Test Process P0 & P1',
          text: 'P0 Need [7,4,3] <= [3,3,2]? NO. Skip P0. P1 Need [1,2,2] <= [3,3,2]? YES. Execute P1! Available becomes [3,3,2] + [2,0,0] = [5,3,2].'
        },
        {
          stepNumber: 2,
          label: 'Test Process P3',
          text: 'P3 Need [0,1,1] <= [5,3,2]? YES. Execute P3! Available becomes [5,3,2] + [2,1,1] = [7,4,3].'
        },
        {
          stepNumber: 3,
          label: 'Test Remaining (P4, P0, P2)',
          text: 'P4 Need [4,3,1] <= [7,4,3]? YES. Available = [7,4,5]. Next P0 Need [7,4,3] <= [7,4,5]? YES. Available = [7,5,5]. Finally P2 Need [6,0,0] <= [7,5,5]? YES. Available = [10,5,7].'
        }
      ],
      commonMistakeToAvoid: 'Forgetting to add the Allocation back to the Available vector after a process finishes.',
      proExamTip: 'Safe Sequence: < P1, P3, P4, P0, P2 >. The system is provably safe and deadlock-free.'
    }
  },
  {
    id: 'doubt-cbse-1',
    stream: 'cbse12',
    subject: 'Physics',
    title: "Young's Double Slit Experiment (YDSE) with Slab",
    tag: 'Wave Optics',
    problemStatement: 'In a standard YDSE setup, a thin transparent glass plate of thickness t and refractive index μ is placed in front of one of the slits. What is the optical path difference introduced and how much does the central fringe shift?',
    codeOrMath: `Optical Path Difference Δx = (μ - 1) * t
Fringe Shift y_0 = [ D / d ] * (μ - 1) * t = [ (μ - 1) * t * β ] / λ`,
    aiExplanation: {
      coreConcept: 'Light travels slower inside a dielectric medium of refractive index μ. The effective optical path in air is replaced by μ*t.',
      keyFormulaOrRule: 'Total Path Difference: Δx_net = (S2P - S1P) - (μ - 1)t. Fringe shift direction is always TOWARDS the covered slit.',
      stepByStep: [
        {
          stepNumber: 1,
          label: 'Calculate Extra Time & Optical Path',
          text: 'Time to cross glass slab: Δt = t / v = μ*t / c. In the same time in air, light travels distance c*Δt = μ*t. Extra optical distance = μ*t - t = (μ - 1)t.'
        },
        {
          stepNumber: 2,
          label: 'Condition for Central Bright Fringe',
          text: 'For zero net path difference at point P on screen: d*(y/D) - (μ - 1)t = 0.'
        },
        {
          stepNumber: 3,
          label: 'Derive Linear Shift Expression',
          text: 'Shift y_0 = (D/d) * (μ - 1)t. In terms of fringe width β = (λD/d): Shift = [ (μ - 1)t / λ ] * β.'
        }
      ],
      commonMistakeToAvoid: 'Assuming the fringe width β changes. Note that fringe width β = λD/d remains UNCHANGED; only the entire pattern shifts laterally.',
      proExamTip: 'State clearly in the conclusion: "Fringe pattern shifts towards the slit with the slab without any change in fringe width".'
    }
  },
  {
    id: 'doubt-ssc-1',
    stream: 'ssc',
    subject: 'Quantitative Aptitude',
    title: 'Two Trains Moving Towards Each Other with Unequal Departure Times',
    tag: 'Relative Speed',
    problemStatement: 'Station A and B are 450 km apart. Train 1 leaves A at 8:00 AM towards B at 60 km/h. Train 2 leaves B at 9:00 AM towards A at 70 km/h. At what exact time and distance from A will they cross each other?',
    codeOrMath: `Distance = 450 km
T1 start: 8:00 AM @ 60 km/h
T2 start: 9:00 AM @ 70 km/h`,
    aiExplanation: {
      coreConcept: 'Relative speed formula can only be applied after both trains are in simultaneous motion (align starting times).',
      keyFormulaOrRule: 'T_meet = (Remaining Distance at 9:00 AM) / (Speed 1 + Speed 2).',
      stepByStep: [
        {
          stepNumber: 1,
          label: 'Calculate Lead Distance covered by Train 1',
          text: 'Between 8:00 AM and 9:00 AM (1 hour), Train 1 travels = 60 km/h * 1 hr = 60 km.'
        },
        {
          stepNumber: 2,
          label: 'Find Remaining Distance & Combined Relative Speed',
          text: 'Remaining Distance at 9:00 AM = 450 - 60 = 390 km. Since they move in OPPOSITE directions, Relative Speed = 60 + 70 = 130 km/h.'
        },
        {
          stepNumber: 3,
          label: 'Time to Meet & Crossing Point',
          text: 'Time required = 390 km / 130 km/h = 3 hours after 9:00 AM. Crossing Time = 9:00 AM + 3 hours = 12:00 PM Noon. Total Distance from Station A = 60 km + (60 km/h * 3 hrs) = 60 + 180 = 240 km.'
        }
      ],
      commonMistakeToAvoid: 'Dividing the entire 450 km by (60 + 70). You must subtract the 1-hour lead distance first!',
      proExamTip: 'Time taken = 12:00 PM Sharp; Distance from A = 240 km.'
    }
  }
];
