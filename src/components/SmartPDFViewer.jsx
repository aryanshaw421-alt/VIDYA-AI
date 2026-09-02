import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Sparkles, 
  Highlighter, 
  BookOpen, 
  ExternalLink, 
  Copy, 
  Check, 
  Brain, 
  Lightbulb, 
  Search,
  Download,
  FolderOpen
} from 'lucide-react';
import { toast } from 'sonner';

const MODULE_DOCS = [
  {
    id: 'doc1',
    title: 'MAKAUT CSE Module 3: Binary Trees, AVL & Heaps',
    stream: 'B.Tech CSE / IT',
    pages: '24 Pages',
    driveLink: 'https://drive.google.com/drive/folders/1O7WVpqd5f4pYk5AelpoKtF2f_d1jdWrj',
    previewContent: `1. Binary Search Trees (BST):
A binary tree where for each node X, all elements in left subtree < X and all elements in right subtree > X.
- In-order traversal of a BST always yields keys in ascending sorted order.
- Deletion in BST: 
  a) Node with no children: Simply remove node.
  b) Node with 1 child: Bypass node and link parent to child.
  c) Node with 2 children: Replace with In-order Successor (smallest in right subtree) and delete successor.

2. AVL Tree Height Balance:
An AVL tree is a self-balancing BST where for every node, Balance Factor = Height(Left) - Height(Right) ∈ {-1, 0, +1}.
- Insertions causing imbalance are resolved via:
  * LL Case: 1 Single Right Rotation
  * RR Case: 1 Single Left Rotation
  * LR Case: Left Rotation on left child, then Right Rotation on root
  * RL Case: Right Rotation on right child, then Left Rotation on root`
  },
  {
    id: 'doc2',
    title: 'GATE 2027: Linear Algebra & Calculus Master Notes',
    stream: 'GATE 2027 DA/CS',
    pages: '18 Pages',
    driveLink: 'https://drive.google.com/drive/folders/1O7WVpqd5f4pYk5AelpoKtF2f_d1jdWrj',
    previewContent: `1. Eigenvalues and Characteristic Equation:
For a square matrix A of order n:
- Characteristic equation: det(A - λI) = 0.
- Properties:
  * Sum of Eigenvalues = Trace of A (Sum of main diagonal elements).
  * Product of Eigenvalues = Determinant of A.
  * Eigenvalues of a triangular/diagonal matrix are its diagonal entries.
  * If A is symmetric, all eigenvalues are real.
  * If A is orthogonal, |λ| = 1.

2. Cayley-Hamilton Theorem:
Every square matrix satisfies its own characteristic equation:
If det(A - λI) = λⁿ + c₁λⁿ⁻¹ + ... + cₙ = 0, then Aⁿ + c₁Aⁿ⁻¹ + ... + cₙI = 0.
Use: Efficient computation of A⁻¹ and higher powers Aᵏ.`
  },
  {
    id: 'doc3',
    title: 'MAKAUT DBMS Module 4: Relational Normalization & ACID Properties',
    stream: 'B.Tech / BCA CSE',
    pages: '20 Pages',
    driveLink: 'https://drive.google.com/drive/folders/1O7WVpqd5f4pYk5AelpoKtF2f_d1jdWrj',
    previewContent: `1. Normalization Forms Hierarchy:
- 1NF: All attribute values must be atomic (no multi-valued or composite attributes).
- 2NF: In 1NF + No Partial Functional Dependency (Every non-prime attribute is fully dependent on the whole candidate key).
- 3NF: In 2NF + No Transitive Dependency (For every X -> Y, either X is a superkey or Y is a prime attribute).
- BCNF: Strict Boyce-Codd Normal Form. For every non-trivial FD X -> Y, X MUST be a Superkey.

2. ACID Properties of Database Transactions:
- Atomicity: "All or Nothing" execution (Managed by Recovery Manager via Write-Ahead Logging).
- Consistency: Preserves DB integrity constraints before and after transaction.
- Isolation: Concurrent transactions execute as if serial (Managed by Concurrency Control / 2PL Locks).
- Durability: Committed updates persist even after system crashes.`
  },
  {
    id: 'doc4',
    title: 'SSC CGL Master Reference: Quantitative Aptitude & Indian Polity',
    stream: 'SSC CGL / Govt',
    pages: '32 Pages',
    driveLink: 'https://ssc.gov.in/api/attachment/uploads/masterData/Syllabus/CGL-syllabus-169635-.pdf',
    previewContent: `1. Quantitative Aptitude Shortcuts:
- Successive Percentage Change: Net % = a + b + (ab / 100)%.
- Compound Interest (2 Years): CI - SI = P(R / 100)^2.
- Time & Work: Total Work = LCM of individual days. Efficiency = Total Work / Days.

2. Indian Constitution Core Articles:
- Article 14: Equality before Law.
- Article 21: Protection of Life and Personal Liberty.
- Article 32: Constitutional Remedies (Habeas Corpus, Mandamus, Prohibition, Quo-Warranto, Certiorari).
- Article 44: Uniform Civil Code (Directive Principles of State Policy).
- Article 368: Power of Parliament to amend the Constitution.`
  }
];

export const SmartPDFViewer = () => {
  const [activeDoc, setActiveDoc] = useState(MODULE_DOCS[0]);
  const [selectedSnippet, setSelectedSnippet] = useState('An AVL tree is a self-balancing BST where for every node, Balance Factor = Height(Left) - Height(Right) ∈ {-1, 0, +1}.');
  const [aiAnnotation, setAiAnnotation] = useState(null);
  const [isAnnotating, setIsAnnotating] = useState(false);

  const handleExplain = () => {
    setIsAnnotating(true);
    setTimeout(() => {
      setAiAnnotation({
        concept: 'AVL Balance Factor & O(log N) Guarantee',
        explanation: 'By strictly bounding the height difference between subtrees to at most 1, the maximum tree height is strictly locked to ≈ 1.44 log₂(N). This completely prevents the worst-case O(N) skew of regular BSTs.',
        examTip: 'In university and GATE questions, if an AVL tree has N nodes, minimum height is ⌊log₂ N⌋ and maximum height is 1.44 log₂ N.'
      });
      setIsAnnotating(false);
      toast.success('AI Annotation Generated!');
    }, 400);
  };

  return (
    <div className="w-full fluid-container py-6 sm:py-10 animate-fade-in space-y-8">
      
      {/* Header Banner */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-xl shadow-blue-500/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Smart In-App PDF Reader & AI Annotator</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
            Read semester notes with instant AI explanations.
          </h1>
          <p className="text-sm text-blue-100 leading-relaxed">
            Connected to your Google Drive Study Vault. Highlight any formula to get instant Socratic breakdowns.
          </p>
        </div>

        <a
          href="https://drive.google.com/drive/folders/1O7WVpqd5f4pYk5AelpoKtF2f_d1jdWrj"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-2xl bg-white text-blue-700 font-bold text-xs shadow-lg hover:bg-blue-50 transition-all flex items-center gap-2 shrink-0"
        >
          <FolderOpen className="w-4 h-4 text-blue-700" />
          <span>Open Full Drive Vault</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Document Selector Pills */}
      <div className="flex flex-wrap items-center gap-3">
        {MODULE_DOCS.map((doc) => (
          <button
            key={doc.id}
            onClick={() => {
              setActiveDoc(doc);
              setAiAnnotation(null);
            }}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeDoc.id === doc.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{doc.title}</span>
            <span className="px-1.5 py-0.5 rounded bg-black/10 text-[10px] font-mono">{doc.pages}</span>
          </button>
        ))}
      </div>

      {/* Main 2-Column Reader Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 7 cols: Document Content Viewer */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-white font-display">
              {activeDoc.title}
            </h2>
            <span className="text-xs text-blue-600 dark:text-blue-400 font-mono font-bold">● Drive Synced</span>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D1326] border border-blue-200/80 dark:border-slate-800 shadow-sm font-mono text-xs leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-wrap select-text">
            {activeDoc.previewContent}
          </div>
        </div>

        {/* Right 5 cols: AI Annotation Studio */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
              <Highlighter className="w-4 h-4 text-blue-600" />
              <span>AI Socratic Annotator</span>
            </h2>
            <span className="text-xs text-slate-400">Select text & explain</span>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Selected Formula / Text Snippet:</label>
              <textarea
                value={selectedSnippet}
                onChange={(e) => setSelectedSnippet(e.target.value)}
                rows={3}
                className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 font-mono"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleExplain}
              disabled={isAnnotating}
              className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isAnnotating ? 'Generating Explanation...' : 'Explain with AI Socratic Tutor'}</span>
            </motion.button>

            {/* AI Annotation Output */}
            {aiAnnotation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-blue-900 dark:text-blue-200 font-mono">
                  <Lightbulb className="w-4 h-4 text-blue-600" />
                  <span>{aiAnnotation.concept}</span>
                </div>
                <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed font-sans">
                  {aiAnnotation.explanation}
                </p>
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-blue-200/50 dark:border-blue-900/60 text-[11px] text-amber-700 dark:text-amber-400 font-mono">
                  💡 <strong>Exam Insight:</strong> {aiAnnotation.examTip}
                </div>
              </motion.div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
