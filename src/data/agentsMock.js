export const agentsData = [
  {
    id: 'agent-diag',
    name: 'Diagnostic Agent',
    role: 'Root-Cause & Gap Identification',
    icon: 'Stethoscope',
    status: 'completed', // 'thinking' | 'running' | 'completed' | 'waiting' | 'warning'
    confidence: 96,
    executionTime: '240ms',
    lastAction: 'Identified prerequisite degradation on Eigenvalues (Node #c4).',
    activityLog: [
      'Parsed student practice test error signatures from Session #883.',
      'Correlated conceptual failure in PCA back to un-stabilized Eigenvector projection.',
      'Issued Diagnostic Blocker Ticket: BLK-01.'
    ]
  },
  {
    id: 'agent-twin',
    name: 'Digital Twin Modeler',
    role: 'Ebbinghaus Memory & Cognitive Load Tracking',
    icon: 'Brain',
    status: 'completed',
    confidence: 94,
    executionTime: '310ms',
    lastAction: 'Updated memory half-life decay constants for 143 graph vertices.',
    activityLog: [
      'Synchronized real-time time-to-forget intervals using spacing factor S=2.4.',
      'Cognitive readiness evaluated at 87% (Optimal learning window active).',
      'Calculated 72h retention probability drops to 64% without reinforcement.'
    ]
  },
  {
    id: 'agent-curr',
    name: 'Adaptive Curriculum Agent',
    role: 'Dynamic Topological Prerequisite Sequencing',
    icon: 'Compass',
    status: 'running',
    confidence: 91,
    executionTime: '480ms',
    lastAction: 'Synthesized 15-minute high-yield bridge path to unlock PCA & SVD.',
    activityLog: [
      'Re-ordered study queue: Pushed Linear Algebra reinforcement ahead of Deep Learning.',
      'Generated 3 targeted micro-tasks with interactive geometric matrix visualizations.',
      'Pacing recalibrated for 45 mins/day to avoid cognitive saturation.'
    ]
  },
  {
    id: 'agent-interv',
    name: 'Early Intervention Agent',
    role: 'Pre-Emptive Failure & At-Risk Prediction',
    icon: 'ShieldAlert',
    status: 'waiting',
    confidence: 98,
    executionTime: '150ms',
    lastAction: 'Dispatched automated educator radar advisory to Professor Rao.',
    activityLog: [
      'Evaluated class-wide risk matrix: Student is 8.2 days ahead of historical failure trigger.',
      'Early warning confidence score: 0.12 (Extremely safe trajectory post-rebalance).'
    ]
  },
  {
    id: 'agent-enrich',
    name: 'Public API Enricher',
    role: 'Semantic Research & Knowledge Grounding',
    icon: 'Globe',
    status: 'completed',
    confidence: 93,
    executionTime: '620ms',
    lastAction: 'Enriched Eigenvalue concept with arXiv:2308.0123 & MIT OpenCourseWare notes.',
    activityLog: [
      'Queried arXiv API for visual intuition on high-dimensional eigenspaces.',
      'Fetched 2 open-source Python NumPy interactive sandboxes from GitHub.',
      'Cached verified Open Library references into student workspace.'
    ]
  }
];

export const simulationWorkflowSteps = [
  { agentId: 'agent-diag', step: 1, action: 'Scanning conceptual error logs and test telemetry...', delay: 600 },
  { agentId: 'agent-twin', step: 2, action: 'Updating student memory decay parameters & cognitive load...', delay: 800 },
  { agentId: 'agent-curr', step: 3, action: 'Synthesizing customized topological learning path...', delay: 900 },
  { agentId: 'agent-interv', step: 4, action: 'Verifying early-warning thresholds and educator alerts...', delay: 700 },
  { agentId: 'agent-enrich', step: 5, action: 'Enriching curriculum with peer-reviewed open knowledge...', delay: 900 }
];
