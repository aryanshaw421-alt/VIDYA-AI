import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Printer, 
  Sparkles, 
  Search, 
  Copy, 
  Check, 
  BookOpen, 
  Cpu, 
  Zap, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

const cheatSheetsData = [
  {
    id: 'dsa_matrix',
    title: 'DSA & Algorithms: Master Complexity & Recurrence Matrix',
    category: 'Computer Science (B.Tech / BCA / GATE)',
    color: 'border-blue-500',
    sections: [
      {
        heading: 'Master Theorem (Divide & Conquer)',
        content: `T(n) = aT(n/b) + f(n), where a >= 1, b > 1
• Case 1: If f(n) = O(n^(log_b(a) - ε)) => T(n) = Θ(n^log_b(a))
• Case 2: If f(n) = Θ(n^log_b(a) * log^k(n)) => T(n) = Θ(n^log_b(a) * log^(k+1)(n))
• Case 3: If f(n) = Ω(n^(log_b(a) + ε)) and af(n/b) <= cf(n) => T(n) = Θ(f(n))`
      },
      {
        heading: 'Sorting Algorithms Cheat Matrix',
        content: `• Quick Sort: Best/Avg: O(n log n), Worst: O(n^2), Space: O(log n), In-Place: Yes, Stable: No
• Merge Sort: Best/Avg/Worst: O(n log n), Space: O(n), In-Place: No, Stable: Yes
• Heap Sort: Best/Avg/Worst: O(n log n), Space: O(1), In-Place: Yes, Stable: No
• Counting Sort: Time: O(n + k), Space: O(k), Non-Comparison, Stable: Yes`
      },
      {
        heading: 'Graph & Tree Invariants',
        content: `• AVL Tree: Height <= 1.44 log2(N), Balance Factor BF ∈ {-1, 0, +1}
• Dijkstra: O((V + E) log V) with Min-Heap (Non-negative edges ONLY)
• Bellman-Ford: O(V * E) (Handles negative edges & detects negative cycles)
• Spanning Tree: V vertices, exactly V - 1 edges, no cycles`
      }
    ]
  },
  {
    id: 'calculus_matrix',
    title: 'Engineering Mathematics: Calculus & Linear Algebra Formula Sheet',
    category: 'Class 12 / B.Tech / GATE 2027',
    color: 'border-purple-500',
    sections: [
      {
        heading: 'Standard Integration Formulas',
        content: `• ∫ 1/√(a^2 - x^2) dx = sin^-1(x/a) + C
• ∫ √(a^2 - x^2) dx = (x/2)√(a^2 - x^2) + (a^2/2)sin^-1(x/a) + C
• ∫ 1/(x^2 + a^2) dx = (1/a)tan^-1(x/a) + C
• Integration by Parts: ∫ u v dx = u ∫ v dx - ∫ [u' * (∫ v dx)] dx`
      },
      {
        heading: 'Matrices & Eigenvalues',
        content: `• Characteristic Equation: det(A - λI) = 0
• Sum of Eigenvalues = Trace(A) (Sum of main diagonal elements)
• Product of Eigenvalues = det(A)
• Matrix Adjoint Property: A * adj(A) = |A| * I_n
• |adj A| = |A|^(n-1), |adj(adj A)| = |A|^((n-1)^2)`
      }
    ]
  },
  {
    id: 'dbms_matrix',
    title: 'DBMS: Normal Forms & SQL Query Optimization Sheet',
    category: 'BCA / B.Tech / University Semesters',
    color: 'border-emerald-500',
    sections: [
      {
        heading: 'Database Normalization Hierarchy',
        content: `• 1NF: Atomic attribute values only (no multi-valued or composite attributes)
• 2NF: 1NF + No partial dependency (non-prime attributes fully dependent on candidate key)
• 3NF: 2NF + No transitive dependency (X -> Y requires X is Superkey OR Y is Prime Attribute)
• BCNF: For every X -> Y, X MUST be a Superkey (Strict)`
      },
      {
        heading: 'ACID Properties & Transaction Isolation',
        content: `• Atomicity: All or nothing execution (WAL log)
• Consistency: Database invariants preserved
• Isolation: Serializability levels (Read Uncommitted < Read Committed < Repeatable Read < Serializable)
• Durability: Committed updates survive system crash`
      }
    ]
  }
];

export const CheatSheetGenerator = () => {
  const [selectedSheetId, setSelectedSheetId] = useState('dsa_matrix');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedSection, setCopiedSection] = useState(null);

  const activeSheet = cheatSheetsData.find(s => s.id === selectedSheetId) || cheatSheetsData[0];

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(idx);
    toast.success('Formulas copied to clipboard!');
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const handlePrintPDF = () => {
    toast.info(`Preparing 1-Page Printable PDF for ${activeSheet.title}...`);
    
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      toast.error('Please allow popups to download PDF!');
      return;
    }

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${activeSheet.title} - VIDYA AI 1-Page Cheat Sheet</title>
        <style>
          @page { size: A4; margin: 15mm; }
          body { font-family: 'Helvetica Neue', Arial, sans-serif; color: #111; line-height: 1.4; padding: 10px; }
          .header { text-align: center; border-bottom: 2px solid #2563eb; padding-bottom: 8px; margin-bottom: 12px; }
          .title { font-size: 18px; font-weight: bold; margin: 0; color: #1e3a8a; }
          .category { font-size: 11px; color: #64748b; font-weight: 600; text-transform: uppercase; margin-top: 2px; }
          .grid { display: grid; grid-template-columns: 1fr; gap: 10px; }
          .card { border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 12px; background: #f8fafc; page-break-inside: avoid; }
          .card-title { font-size: 13px; font-weight: bold; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 6px; }
          pre { font-family: 'Courier New', monospace; font-size: 11px; margin: 0; white-space: pre-wrap; color: #0f172a; }
          .footer { font-size: 9px; color: #94a3b8; text-align: center; margin-top: 15px; border-top: 1px solid #e2e8f0; padding-top: 6px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="title">${activeSheet.title}</h1>
          <div class="category">${activeSheet.category} • VIDYA AI 1-Page High-Yield Formula Matrix</div>
        </div>

        <div class="grid">
          ${activeSheet.sections.map(sec => `
            <div class="card">
              <div class="card-title">${sec.heading}</div>
              <pre>${sec.content}</pre>
            </div>
          `).join('')}
        </div>

        <div class="footer">Generated via VIDYA AI Cognitive Study Suite • Printable 1-Page Exam Revision Matrix</div>

        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 400);
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();

    confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 } });
    toast.success('1-Page Cheat Sheet PDF Ready!');
  };

  return (
    <div className="w-full fluid-container py-6 sm:py-10 animate-fade-in space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 text-xs font-bold mb-2">
            <FileText className="w-3.5 h-3.5 text-purple-500" />
            <span>High-Yield 1-Page Formula & Revision Sheets</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
            1-Page AI Revision Cheat-Sheet Generator
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Condensed, printable 1-page formula summaries, time-complexity matrices, and theorem proofs for last-minute exam revision.
          </p>
        </div>

        <button
          onClick={handlePrintPDF}
          className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md flex items-center gap-2"
        >
          <Printer className="w-4 h-4" />
          <span>Download Printable PDF</span>
        </button>
      </div>

      {/* Sheet Tabs */}
      <div className="p-2 rounded-2xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-wrap gap-2">
        {cheatSheetsData.map((sheet) => (
          <button
            key={sheet.id}
            onClick={() => setSelectedSheetId(sheet.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              selectedSheetId === sheet.id
                ? 'bg-purple-600 text-white shadow-md scale-[1.02]'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {sheet.title.split(':')[0]}
          </button>
        ))}
      </div>

      {/* Active Cheat Sheet Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-6">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="text-[11px] font-mono text-purple-600 dark:text-purple-400 font-bold uppercase">{activeSheet.category}</div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">{activeSheet.title}</h2>
          </div>

          <button
            onClick={handlePrintPDF}
            className="px-4 py-2 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 hover:bg-purple-100 text-xs font-bold transition-all flex items-center gap-1.5 border border-purple-200 dark:border-purple-900/50"
          >
            <Download className="w-3.5 h-3.5 text-purple-600" />
            <span>Export 1-Page PDF</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeSheet.sections.map((sec, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <span>{sec.heading}</span>
                </h3>

                <button
                  onClick={() => handleCopy(sec.content, idx)}
                  className="p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-purple-600 transition-all text-xs flex items-center gap-1"
                >
                  {copiedSection === idx ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                  <span className="text-[10px]">{copiedSection === idx ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <pre className="text-xs text-slate-700 dark:text-slate-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                {sec.content}
              </pre>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
