import React, { useState } from 'react';
import { 
  X, 
  UploadCloud, 
  FileText, 
  Sparkles, 
  Check, 
  Layers, 
  BookOpen, 
  ArrowRight 
} from 'lucide-react';
import { useStudy } from '../../context/StudyContext';
import confetti from 'canvas-confetti';

interface SyllabusUploaderProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SyllabusUploader: React.FC<SyllabusUploaderProps> = ({ isOpen, onClose }) => {
  const { simulateCustomSyllabusUpload } = useStudy();
  const [syllabusTitle, setSyllabusTitle] = useState('B.Tech 4th Sem Design & Analysis of Algorithms');
  const [rawText, setRawText] = useState(
`Module 1: Divide and Conquer (Merge Sort, Quick Sort, Strassen Matrix)
Module 2: Greedy Method (Knapsack, Huffman Coding, Kruskal MST)
Module 3: Dynamic Programming (0/1 Knapsack, Matrix Chain, LCS, Floyd Warshall)
Module 4: Backtracking & Branch and Bound (N-Queens, Graph Coloring, Traveling Salesman)
Module 5: NP-Completeness (Cook's Theorem, 3-SAT, Vertex Cover, Clique)`
  );
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const chapters = rawText
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);

      simulateCustomSyllabusUpload(syllabusTitle, chapters);
      setIsProcessing(false);
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 }
      });
      onClose();
    }, 900);
  };

  const samplePresets = [
    {
      title: 'B.Tech 4th Sem DAA (Algorithm Design)',
      text: `Module 1: Divide & Conquer (Merge Sort, Strassen)\nModule 2: Greedy Method (Knapsack, Huffman, Prim MST)\nModule 3: Dynamic Programming (0/1 Knapsack, LCS, Matrix Chain)\nModule 4: Backtracking (N-Queens, Graph Coloring)\nModule 5: NP-Completeness (Cook Theorem, 3-SAT)`
    },
    {
      title: 'Class 12th Chemistry - Organic & Inorganic',
      text: `Chapter 1: Haloalkanes and Haloarenes (SN1/SN2 mechanisms)\nChapter 2: Alcohols, Phenols and Ethers\nChapter 3: Aldehydes, Ketones and Carboxylic Acids\nChapter 4: Amines & Diazonium Salts\nChapter 5: Coordination Compounds & VBT/CFT`
    },
    {
      title: 'SSC CGL Tier-1 Complete Mock Prep',
      text: `Section 1: Quantitative Aptitude (Number Systems & Algebra)\nSection 2: Arithmetic (Percentage, Profit-Loss, CI/SI)\nSection 3: Geometry, Mensuration & Trigonometry\nSection 4: Syllogism, Blood Relations & Reasoning Puzzles\nSection 5: English Spotting Errors & Reading Comprehension`
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0b1120] border border-slate-700 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
              <UploadCloud className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Upload / Custom Syllabus Parser</h3>
              <p className="text-xs text-slate-400">Authentix AI maps your modules into a daily study roadmap</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 space-y-5">
          
          {/* Preset Buttons */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Quick Presets:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {samplePresets.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSyllabusTitle(preset.title);
                    setRawText(preset.text);
                  }}
                  className="p-2.5 rounded-xl text-left bg-slate-900 border border-slate-800 hover:border-brand-500/50 text-xs text-slate-300 transition-all group"
                >
                  <div className="font-bold text-white group-hover:text-brand-300 truncate">{preset.title}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Click to load preset</div>
                </button>
              ))}
            </div>
          </div>

          {/* Exam / Subject Title */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Subject / Exam Name:
            </label>
            <input
              type="text"
              value={syllabusTitle}
              onChange={(e) => setSyllabusTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50"
              placeholder="e.g. B.Tech 5th Sem Computer Networks"
            />
          </div>

          {/* Raw Text Input */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Paste Syllabus Modules / Chapters (One per line):
            </label>
            <textarea
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              rows={6}
              className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-500/50 leading-relaxed"
              placeholder="Module 1: ...&#10;Module 2: ...&#10;Module 3: ..."
            />
          </div>

          {/* Drag & Drop Simulation Zone */}
          <div className="p-4 rounded-xl border border-dashed border-slate-700 bg-slate-900/50 flex flex-col items-center justify-center text-center cursor-pointer hover:border-brand-500/50 transition-colors">
            <UploadCloud className="w-8 h-8 text-brand-400 mb-1" />
            <p className="text-xs font-bold text-slate-200">Or drag & drop your University Syllabus PDF / Image</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Authentix OCR extracts chapters, marks weightage & structures daily schedule</p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
            >
              Cancel
            </button>
            <button
              onClick={handleGenerate}
              disabled={isProcessing || !syllabusTitle}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs shadow-glow-cyan flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {isProcessing ? (
                <span>Generating AI Roadmap...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Day-wise Roadmap</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
