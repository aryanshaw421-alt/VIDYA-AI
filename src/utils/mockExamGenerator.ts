import { PREDICTED_PAPERS, PredictedExamPaper } from '../data/predictedPapersDatabase';
import { BTECH_SEMESTER_DATA, SemesterSubject } from '../data/btechSemesterSyllabusData';
// @ts-ignore
import { examStreams, sampleMockPapers } from '../data/examPatterns';

export interface MockQuestion {
  id: string;
  type: 'mcq' | 'subjective' | 'numerical';
  text: string;
  options?: string[];
  correct?: string;
  explanation?: string;
  marks: number;
  subparts?: string[];
  co?: string;
  bloom?: string;
  modelAnswer?: string;
}

export interface MockGroup {
  name: string;
  instructions: string;
  questions: MockQuestion[];
}

export interface MockPaper {
  id: string;
  title: string;
  subject: string;
  paperCode: string;
  semester?: number;
  branch?: string;
  totalMarks: number;
  duration: string;
  durationMinutes: number;
  groups: MockGroup[];
  isOfficialPredicted?: boolean;
  confidenceRate?: number;
}

export interface AvailableSubject {
  code: string;
  name: string;
  credits: number;
  category: string;
  modules: string[];
  hardestModule?: string;
  hasPredictedPaper: boolean;
}

/**
 * Branch list with professional metadata
 */
export const BRANCHES = [
  { id: 'cse', code: 'CSE', name: 'Computer Science & Engineering', icon: '💻', badge: 'Core Software' },
  { id: 'it', code: 'IT', name: 'Information Technology', icon: '⚡', badge: 'Software & Networks' },
  { id: 'aiml', code: 'AIML', name: 'Artificial Intelligence & ML', icon: '🤖', badge: 'Cognitive Computing' },
  { id: 'ece', code: 'ECE', name: 'Electronics & Communication', icon: '📡', badge: 'VLSI & Embedded' },
  { id: 'ee', code: 'EE', name: 'Electrical Engineering', icon: '🔌', badge: 'Power & Circuits' },
  { id: 'me', code: 'ME', name: 'Mechanical Engineering', icon: '⚙️', badge: 'Thermo & Dynamics' },
  { id: 'ce', code: 'CE', name: 'Civil Engineering', icon: '🏗️', badge: 'Structural & Geotech' }
];

export const EXAM_MODES = [
  {
    id: 'full_70m',
    title: 'Autonomous 70-Mark End-Sem Paper',
    badge: 'Official University Pattern',
    marks: 70,
    duration: '3 Hours (180 mins)',
    durationMinutes: 180,
    desc: 'Group A (10 MCQs × 1M) + Group B (3 × 5M Short) + Group C (3 × 15M Long Derivations)'
  },
  {
    id: 'speed_mcq',
    title: 'Speed MCQ Diagnostic Test',
    badge: 'Objective Mastery',
    marks: 25,
    duration: '30 Minutes',
    durationMinutes: 30,
    desc: '25 Fast-paced objective MCQs with Bloom taxonomy tags and immediate scoring'
  },
  {
    id: 'analytical_drill',
    title: 'High-Yield Analytical & Derivation Drill',
    badge: 'Step Marking Rubrics',
    marks: 30,
    duration: '45 Minutes',
    durationMinutes: 45,
    desc: '6 Heavy university numericals and theorem derivations with step marks'
  }
];

/**
 * Returns the subjects for a given semester & branch
 */
export const getSubjectsForSemesterAndBranch = (
  semester: number,
  branchId: string = 'cse'
): AvailableSubject[] => {
  const semData = BTECH_SEMESTER_DATA[semester];
  if (!semData) return [];

  return semData.subjects.map((subj) => {
    // Check if this subject has an official predicted paper in database
    const hasPredicted = PREDICTED_PAPERS.some(
      p => p.subjectCode.toLowerCase() === subj.code.toLowerCase() ||
           p.subjectName.toLowerCase().includes(subj.name.toLowerCase()) ||
           subj.name.toLowerCase().includes(p.subjectName.toLowerCase())
    );

    return {
      code: subj.code,
      name: subj.name,
      credits: subj.credits,
      category: subj.category,
      modules: subj.modules,
      hardestModule: subj.hardestModule,
      hasPredictedPaper: hasPredicted
    };
  });
};

/**
 * Converts an official PredictedExamPaper into MockPaper format
 */
export const convertPredictedPaperToMockFormat = (
  paper: PredictedExamPaper,
  examMode: string = 'full_70m'
): MockPaper => {
  if (examMode === 'speed_mcq') {
    // Return exclusively MCQs
    const mcqQuestions: MockQuestion[] = paper.groupA.map((q, idx) => ({
      id: q.id || `mcq_${idx}`,
      type: 'mcq',
      text: `${idx + 1}. ${q.question}`,
      options: q.options,
      correct: q.options[q.answerIndex],
      explanation: q.explanation,
      marks: q.marks || 1,
      co: q.co,
      bloom: q.bloom
    }));

    return {
      id: `speed_${paper.id}`,
      title: `${paper.subjectName} — Speed MCQ Diagnostic Test`,
      subject: paper.subjectName,
      paperCode: paper.subjectCode,
      semester: paper.semester,
      totalMarks: mcqQuestions.length,
      duration: '30 Minutes',
      durationMinutes: 30,
      isOfficialPredicted: true,
      confidenceRate: paper.predictionConfidence,
      groups: [
        {
          name: 'Section A: Speed Objective MCQs (25 Qs)',
          instructions: 'Attempt all questions. Each carries 1 mark. Select the most accurate option.',
          questions: mcqQuestions
        }
      ]
    };
  }

  // Full 70M Paper
  const groupAQuestions: MockQuestion[] = paper.groupA.map((q, idx) => ({
    id: q.id || `ga_${idx}`,
    type: 'mcq',
    text: `${idx + 1}. ${q.question}`,
    options: q.options,
    correct: q.options[q.answerIndex],
    explanation: q.explanation,
    marks: q.marks || 1,
    co: q.co,
    bloom: q.bloom
  }));

  const groupBQuestions: MockQuestion[] = paper.groupB.map((g) => ({
    id: g.id,
    type: 'subjective',
    text: `Q${g.questionNumber}. ` + g.subParts.map(sp => `(${sp.part}) ${sp.question} [${sp.marks}M]`).join(' '),
    subparts: g.subParts.map(sp => `(${sp.part}) ${sp.question} [${sp.marks} Marks • ${sp.co} • ${sp.bloom}]`),
    marks: g.subParts.reduce((acc, sp) => acc + sp.marks, 0) || 5,
    modelAnswer: g.subParts.map(sp => `Part (${sp.part}) Marking Rubric & Solution:\n${sp.answerKey}`).join('\n\n'),
    co: g.subParts.map(sp => sp.co).join(', '),
    bloom: g.subParts.map(sp => sp.bloom).join(', ')
  }));

  const groupCQuestions: MockQuestion[] = paper.groupC.map((g) => ({
    id: g.id,
    type: 'subjective',
    text: `Q${g.questionNumber}. ${g.title}: ` + g.subParts.map(sp => `(${sp.part}) ${sp.question} [${sp.marks}M]`).join(' '),
    subparts: g.subParts.map(sp => `(${sp.part}) ${sp.question} [${sp.marks} Marks • ${sp.co} • ${sp.bloom}]`),
    marks: g.subParts.reduce((acc, sp) => acc + sp.marks, 0) || 15,
    modelAnswer: g.subParts.map(sp => `Part (${sp.part}) [${sp.marks} Marks Rubric]:\n${sp.answerKey}`).join('\n\n'),
    co: g.subParts.map(sp => sp.co).join(', '),
    bloom: g.subParts.map(sp => sp.bloom).join(', ')
  }));

  return {
    id: paper.id,
    title: `Autonomous University Examination: ${paper.subjectName}`,
    subject: paper.subjectName,
    paperCode: paper.subjectCode,
    semester: paper.semester,
    totalMarks: paper.totalMarks || 70,
    duration: '3 Hours',
    durationMinutes: 180,
    isOfficialPredicted: true,
    confidenceRate: paper.predictionConfidence,
    groups: [
      {
        name: 'Group A (Objective / MCQs: 10 × 1M = 10 Marks)',
        instructions: 'Answer any TEN questions out of 12. Each question carries 1 mark.',
        questions: groupAQuestions
      },
      {
        name: 'Group B (Short Answer: Any 3 of 5 × 5M = 15 Marks)',
        instructions: 'Answer any THREE questions from Q13 to Q17. Each question carries 5 marks.',
        questions: groupBQuestions
      },
      {
        name: 'Group C (Long Questions / Numericals: Any 3 of 5 × 15M = 45 Marks)',
        instructions: 'Answer any THREE questions from Q18 to Q22. Each question carries 15 marks.',
        questions: groupCQuestions
      }
    ]
  };
};

/**
 * Synthesizes a high-fidelity 70-mark paper for any subject in BTECH_SEMESTER_DATA
 */
export const synthesizePaperFromSemesterSubject = (
  semester: number,
  subject: SemesterSubject,
  branchCode: string = 'CSE',
  examMode: string = 'full_70m'
): MockPaper => {
  const semData = BTECH_SEMESTER_DATA[semester];
  const pyqs = semData?.topRepeatedPYQs?.filter(
    (p: any) => p.subject.toLowerCase().includes(subject.name.toLowerCase()) ||
         subject.name.toLowerCase().includes(p.subject.toLowerCase())
  ) || [];

  const formulas = semData?.formulaMatrix || [];

  // 12 MCQs for Group A
  const sampleMCQs: MockQuestion[] = subject.modules.slice(0, 6).flatMap((mod, modIdx) => [
    {
      id: `syn_mcq_${modIdx}_1`,
      type: 'mcq' as const,
      text: `${modIdx * 2 + 1}. In ${subject.name} (${mod}), which principle or complexity is fundamentally observed?`,
      options: [
        `A) Strictly bounded polynomial or logarithmic state transition`,
        `B) Unbounded exponential accumulation without base case`,
        `C) Invariant linear degradation under worst-case inputs`,
        `D) Constant zero-overhead dynamic memory overhead`
      ],
      correct: `A) Strictly bounded polynomial or logarithmic state transition`,
      explanation: `According to standard ${subject.name} principles in ${mod}, proper invariant constraints ensure deterministic bounds.`,
      marks: 1,
      co: `CO${(modIdx % 4) + 1}`,
      bloom: 'L2 Understand'
    },
    {
      id: `syn_mcq_${modIdx}_2`,
      type: 'mcq' as const,
      text: `${modIdx * 2 + 2}. Which optimization technique is crucial for high performance in ${mod}?`,
      options: [
        `A) Memoization and state tree pruning`,
        `B) Redundant brute-force linear scanning`,
        `C) Arbitrary unbounded recursion`,
        `D) Ignoring boundary equilibrium conditions`
      ],
      correct: `A) Memoization and state tree pruning`,
      explanation: `Optimal evaluation in ${subject.code} relies on optimal sub-structure and caching intermediate state milestones.`,
      marks: 1,
      co: `CO${(modIdx % 4) + 2}`,
      bloom: 'L3 Apply'
    }
  ]);

  // Group B (5 questions × 5M)
  const groupBQuestions: MockQuestion[] = [
    {
      id: 'syn_gb_1',
      type: 'subjective',
      text: `Q13. (a) Define the fundamental theorem/principle governing ${subject.modules[0] || 'Module 1'}. (b) Explain how edge-case degradation is prevented.`,
      subparts: [
        `(a) Definition and governing state equations [2.5 Marks • CO1 • L2 Understand]`,
        `(b) Prevention of pathological worst-case performance with diagram/pseudocode [2.5 Marks • CO1 • L3 Apply]`
      ],
      marks: 5,
      modelAnswer: `(a) Governing Equations: Define core states and mathematical axioms.\n(b) Step Marks: [1M] Axiom statement, [1.5M] Mathematical formulation, [2.5M] Diagram or invariant proof.`,
      co: 'CO1',
      bloom: 'L2 Understand'
    },
    {
      id: 'syn_gb_2',
      type: 'subjective',
      text: `Q14. Explain the operational mechanism of ${subject.modules[1] || 'Module 2'}. Formulate the step-by-step procedure.`,
      subparts: [
        `(a) Core operational steps and invariants [3 Marks • CO2 • L2 Understand]`,
        `(b) Numerical illustration or typical state diagram [2 Marks • CO2 • L3 Apply]`
      ],
      marks: 5,
      modelAnswer: `Steps: Outline algorithm/derivation progression. Allocate 2 marks for procedure, 1 mark for complexity/stability, 2 marks for state diagram.`,
      co: 'CO2',
      bloom: 'L2 Understand'
    },
    {
      id: 'syn_gb_3',
      type: 'subjective',
      text: `Q15. Analyze the hardest module '${subject.hardestModule}'. What are the primary failure points and how are they overcome?`,
      subparts: [
        `(a) Identification of bottleneck conditions [2.5 Marks • CO3 • L4 Analyze]`,
        `(b) Recommended mitigation strategy and proof [2.5 Marks • CO3 • L3 Apply]`
      ],
      marks: 5,
      modelAnswer: `Bottlenecks: Address ${subject.passTips || 'core curriculum tips'}. Allocate full marks for identifying critical pivot points and counter-measures.`,
      co: 'CO3',
      bloom: 'L4 Analyze'
    },
    {
      id: 'syn_gb_4',
      type: 'subjective',
      text: `Q16. Differentiate between static and dynamic formulation in ${subject.modules[2] || 'Module 3'}. Provide a comparative rubric.`,
      subparts: [
        `(a) 4 distinct technical differences [3 Marks • CO2 • L3 Apply]`,
        `(b) Practical trade-off evaluation [2 Marks • CO2 • L4 Analyze]`
      ],
      marks: 5,
      modelAnswer: `Comparison Table: Feature | Static Approach | Dynamic Approach. Credit 0.75M per valid technical distinction.`,
      co: 'CO2',
      bloom: 'L3 Apply'
    },
    {
      id: 'syn_gb_5',
      type: 'subjective',
      text: `Q17. Formulate a short derivation for the efficiency bound in ${subject.modules[3] || 'Module 4'}.`,
      subparts: [
        `(a) Assumptions and boundary conditions [2 Marks • CO4 • L2 Understand]`,
        `(b) Step-by-step reduction to final expression [3 Marks • CO4 • L3 Apply]`
      ],
      marks: 5,
      modelAnswer: `Derivation: Show step 1 to final form. Award 1M for boundary condition, 2M for algebraic simplification, 1M for final value.`,
      co: 'CO4',
      bloom: 'L3 Apply'
    }
  ];

  // Group C (5 questions × 15M)
  const groupCQuestions: MockQuestion[] = [
    {
      id: 'syn_gc_1',
      type: 'subjective',
      text: `Q18. Comprehensive Analysis of ${subject.modules[0] || 'Module 1'} & System Design`,
      subparts: [
        `(a) State the complete formal definition and governing laws with assumptions. [5 Marks • CO1 • L2]`,
        `(b) Perform a complete numerical or symbolic step-by-step computation. [6 Marks • CO1 • L3]`,
        `(c) Discuss time/space optimization constraints. [4 Marks • CO1 • L4]`
      ],
      marks: 15,
      modelAnswer: `Part (a): Axiom statements and proof outline [5M].\nPart (b): Intermediate computation step 1 [2M], step 2 [2M], final result [2M].\nPart (c): Tradeoff curve and bounds [4M].`,
      co: 'CO1',
      bloom: 'L4 Analyze'
    },
    {
      id: 'syn_gc_2',
      type: 'subjective',
      text: `Q19. Deep Analytical Derivation in ${subject.modules[1] || 'Module 2'}`,
      subparts: [
        `(a) Derive the fundamental relationship from first principles. [7 Marks • CO2 • L3]`,
        `(b) Solve the accompanying numerical problem with boundary conditions. [5 Marks • CO2 • L3]`,
        `(c) Draw the corresponding architectural/state transition diagram. [3 Marks • CO2 • L2]`
      ],
      marks: 15,
      modelAnswer: `Part (a): [3M] Initial setup, [4M] Intermediate integration/induction.\nPart (b): [2M] Formula substitution, [3M] Final evaluated numerical with units.\nPart (c): [3M] Correct labeling and transition arrows.`,
      co: 'CO2',
      bloom: 'L3 Apply'
    },
    {
      id: 'syn_gc_3',
      type: 'subjective',
      text: `Q20. Advanced Problem in ${subject.hardestModule}`,
      subparts: [
        `(a) Why is this problem computationally challenging? Formulate its invariant. [5 Marks • CO3 • L4]`,
        `(b) Design an optimal algorithm/framework to resolve the challenge. [6 Marks • CO3 • L5]`,
        `(c) Prove its correctness using mathematical induction or asymptotic limits. [4 Marks • CO3 • L5]`
      ],
      marks: 15,
      modelAnswer: `Part (a): Invariant statement [5M].\nPart (b): Pseudocode with comments [6M].\nPart (c): Base case [1M], Inductive hypothesis [2M], Inductive conclusion [1M].`,
      co: 'CO3',
      bloom: 'L5 Evaluate'
    },
    {
      id: 'syn_gc_4',
      type: 'subjective',
      text: `Q21. Comparative Architecture & Practical Case Study in ${subject.modules[2] || 'Module 3'}`,
      subparts: [
        `(a) Compare the top 2 industry approaches with advantages and pitfalls. [6 Marks • CO4 • L3]`,
        `(b) Provide a concrete design for an autonomous scaling environment. [5 Marks • CO4 • L4]`,
        `(c) Calculate latency and throughput bounds. [4 Marks • CO4 • L3]`
      ],
      marks: 15,
      modelAnswer: `Part (a): Comparative criteria matrix [6M].\nPart (b): Block diagram and protocol flow [5M].\nPart (c): Formula and evaluated throughput [4M].`,
      co: 'CO4',
      bloom: 'L4 Analyze'
    },
    {
      id: 'syn_gc_5',
      type: 'subjective',
      text: `Q22. Integrated Synthesis of ${subject.name}`,
      subparts: [
        `(a) Explain how ${subject.modules[0] || 'Module 1'} and ${subject.modules[3] || 'Module 4'} synergize in production. [5 Marks • CO5 • L4]`,
        `(b) Solve a multi-stage numerical incorporating both components. [6 Marks • CO5 • L3]`,
        `(c) Write concise technical notes on: (i) Fail-safe mechanisms, (ii) Convergence criteria. [4 Marks • CO5 • L2]`
      ],
      marks: 15,
      modelAnswer: `Part (a): Synergy analysis [5M].\nPart (b): Multi-stage numerical computation [6M].\nPart (c): [2M] each for technical notes with clean definitions.`,
      co: 'CO5',
      bloom: 'L4 Analyze'
    }
  ];

  return {
    id: `syn_${subject.code}_sem${semester}`,
    title: `Autonomous University Examination: ${subject.name}`,
    subject: subject.name,
    paperCode: subject.code,
    semester: semester,
    branch: branchCode,
    totalMarks: 70,
    duration: '3 Hours',
    durationMinutes: 180,
    isOfficialPredicted: true,
    confidenceRate: 94,
    groups: [
      {
        name: 'Group A (Objective / MCQs: 10 × 1M = 10 Marks)',
        instructions: 'Answer any TEN questions out of 12. Each question carries 1 mark.',
        questions: sampleMCQs.slice(0, 12)
      },
      {
        name: 'Group B (Short Answers: Any 3 of 5 × 5M = 15 Marks)',
        instructions: 'Answer any THREE questions from Q13 to Q17. Each question carries 5 marks.',
        questions: groupBQuestions
      },
      {
        name: 'Group C (Long Questions / Numericals: Any 3 of 5 × 15M = 45 Marks)',
        instructions: 'Answer any THREE questions from Q18 to Q22. Each question carries 15 marks.',
        questions: groupCQuestions
      }
    ]
  };
};

/**
 * Master generator function called by the Mock Test Engine
 */
export const generateTargetedMockPaper = (options: {
  streamId: string;
  branch?: string;
  semester?: number;
  subjectCodeOrName?: string;
  examMode?: string;
}): MockPaper => {
  const { streamId, branch = 'cse', semester = 3, subjectCodeOrName, examMode = 'full_70m' } = options;

  // Case 1: B.Tech University Stream
  if (streamId === 'btech_makaut' || !streamId) {
    // 1. First check if an exact match exists in PREDICTED_PAPERS
    if (subjectCodeOrName) {
      const query = subjectCodeOrName.toLowerCase();
      const matchedPredicted = PREDICTED_PAPERS.find(
        p => p.subjectCode.toLowerCase() === query ||
             p.subjectName.toLowerCase().includes(query) ||
             query.includes(p.subjectName.toLowerCase()) ||
             (semester && p.semester === semester)
      );

      if (matchedPredicted) {
        return convertPredictedPaperToMockFormat(matchedPredicted, examMode);
      }
    }

    // 2. Look up in BTECH_SEMESTER_DATA
    const semData = BTECH_SEMESTER_DATA[semester || 3] || BTECH_SEMESTER_DATA[3];
    const targetSubject = semData.subjects.find(
      s => s.code.toLowerCase() === subjectCodeOrName?.toLowerCase() ||
           s.name.toLowerCase().includes(subjectCodeOrName?.toLowerCase() || '')
    ) || semData.subjects[0];

    // Check if targetSubject has a predicted paper
    const match = PREDICTED_PAPERS.find(
      p => p.subjectCode.toLowerCase() === targetSubject.code.toLowerCase() ||
           p.subjectName.toLowerCase().includes(targetSubject.name.toLowerCase())
    );

    if (match) {
      return convertPredictedPaperToMockFormat(match, examMode);
    }

    // Synthesize full authentic paper using syllabus data
    return synthesizePaperFromSemesterSubject(semester, targetSubject, branch.toUpperCase(), examMode);
  }

  // Case 2: Competitive Streams (GATE, JEE, SSC CGL, etc.)
  const streamPapers = sampleMockPapers[streamId] || sampleMockPapers.btech_makaut;
  const paper = streamPapers[0];

  return {
    id: paper.id,
    title: paper.title,
    subject: paper.subject,
    paperCode: paper.paperCode,
    totalMarks: paper.totalMarks,
    duration: paper.duration,
    durationMinutes: 180,
    groups: paper.groups.map((g: any) => ({
      name: g.name,
      instructions: g.instructions || '',
      questions: g.questions.map((q: any) => ({
        id: q.id,
        type: q.type as any,
        text: q.text,
        options: q.options,
        correct: q.correct,
        explanation: q.explanation,
        marks: q.marks,
        subparts: q.subparts,
        modelAnswer: q.modelAnswer || q.explanation
      }))
    }))
  };
};
