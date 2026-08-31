import React from 'react';
import { Microscope, ArrowRight, Layout, Palette, FileText, CheckCircle, ImageIcon, Smartphone, AlertTriangle, Type, Move, Heart } from 'lucide-react';

interface ProjectStandardsProps {
  setCurrentArticle?: (article: string) => void;
}

export default function ProjectStandards({ setCurrentArticle }: ProjectStandardsProps) {
  return (
   <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* Header */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10">
        <h1 className="text-4xl text-[#0c264d] font-normal mb-2">
          Brainopedia Project Standards & Design System
        </h1>
        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Last Updated: August 2026</p>
        <p className="mt-4 text-[#0c264d]">
          The definitive technical and editorial manual for the Brainopedia digital encyclopedia.
        </p>
      </div>

      {/* 1. FILE NAMING, IMAGE PLACEMENT & POSITIONING */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Move className="text-[#2abcd4]" /> FILE NAMING, IMAGE PLACEMENT & POSITIONING
        </h2>
        
        <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-5 mb-6 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-3 uppercase text-xs">File Naming Conventions:</h3>
          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-3 mb-2">
            <li>
              <strong>Component Naming:</strong> Never rename existing <code className="bg-white px-1 py-0.5 rounded border border-gray-200">.tsx</code> files given in the project. Always strictly adhere to the provided file names to prevent routing engine failures.
            </li>
            <li>
              <strong>Graphic Naming:</strong> All graphics must follow this exact naming structure to maintain consistency across the platform:
              <code className="text-sm font-bold bg-white text-[#2abcd4] p-2 mt-2 rounded border border-[#2abcd4] border-opacity-20 block w-full break-all">
                neurodivergence-section-tab-detail-about-pic.webp
              </code>
            </li>
          </ul>
        </div>

        <p className="text-sm mb-6 text-gray-600">All graphics must be implemented using the <code className="bg-gray-100 px-1 rounded">ImageWithFallback</code> component. Use these patterns for consistency:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">1. Graphic Density Rule</h3>
            <p className="text-xs mb-3 text-gray-600">While clean layouts are important, pages <strong>can feature more than two .webp graphics</strong> depending on what the specific content reflects and requires for maximum clarity.</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">2. The Main Page Insert</h3>
            <p className="text-xs mb-3 text-gray-600">For standard ImageWithFallback graphics on main overviews (centers on mobile, floats right on desktop).</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
              className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
            </code>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">3. The Inline Float</h3>
            <p className="text-xs mb-3 text-gray-600">Small icons or supporting graphics inside info-boxes.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
              className="w-64 h-auto rounded-md float-right ml-6 mb-4"
            </code>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">4. The Centered Block</h3>
            <p className="text-xs mb-3 text-gray-600">For centering standard medium-sized graphics without floating text around them.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6"
            </code>
          </div>
        </div>
      </section>

      {/* 2. CITATION SYSTEM */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <FileText className="text-[#2abcd4]" /> CITATION SYSTEM
        </h2>
        
        <div className="bg-[#ffd166] bg-opacity-20 border-l-4 border-[#ffd166] p-5 rounded-r-lg mb-6">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">The Self-Contained Reference Rule</h3>
          <p className="text-sm text-gray-800">
            <strong>There are no master reference lists on Brainopedia.</strong> Every single page and subpage must contain its own self-contained, context-specific reference section at the bottom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
           <div className="bg-[#ffd166] bg-opacity-20 border-l-4 border-[#ffd166] p-4 text-sm">
            <p className="font-bold mb-2 uppercase text-[#0c264d]">ONLY Use Inline Citations When:</p>
            <ul className="list-disc ml-4 space-y-2 text-slate-700">
              <li>The text explicitly cites research or statistics.</li>
              <li>These items go into the <strong>Cited Studies & Statistics</strong> reference list.</li>
            </ul>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 text-sm">
            <p className="font-bold mb-2 uppercase text-red-800">NEVER Use Inline Citations For:</p>
            <ul className="list-disc ml-4 space-y-2 text-slate-700">
              <li>General foundational knowledge or descriptive symptom lists.</li>
              <li>These belong in <strong>Background Sources</strong> with NO inline superscript.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CARD STYLING & CONTAINERS */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2 border-b pb-2">
          <Layout className="text-[#2abcd4]" /> CARD STYLING & CONTAINERS
        </h2>
        
        <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-[#0c264d] mb-3 uppercase text-xs">Standard Card Color Rules (NO GREEN CARDS)</h3>
          <p className="text-sm text-gray-700 mb-4">
            Content sections must be wrapped in pastel cards paired with a darker border of the same color family. Green/emerald cards are strictly prohibited.
          </p>
          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-3">
            <li><strong>Cyan Cards:</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">bg-cyan-50 border-2 border-[#2abcd4]</code></li>
            <li><strong>Yellow/Gold Cards:</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">bg-yellow-50 border-2 border-[#ffd166]</code></li>
            <li><strong>Navy/Slate Cards:</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">bg-slate-50 border-2 border-[#0c264d]</code></li>
            <li className="text-red-700 font-bold mt-4 pt-2 border-t border-gray-100"><strong>"DO NOT" / Warning Cards:</strong> <code className="bg-red-50 px-2 py-1 rounded border border-red-200 text-red-700 break-words">bg-white border-4 border-red-500</code></li>
          </ul>
        </div>

        <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-5 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">The Mini-Card Grid Layout for Lists</h3>
          <p className="text-sm text-gray-700">
            Heavy bullet point lists must be broken out into clean, side-by-side white mini-cards using CSS Grid (<code className="bg-white px-1 rounded">grid grid-cols-1 md:grid-cols-2</code>) to maintain scannability.
          </p>
        </div>
      </section>

      {/* 4. EDITORIAL TONE & FRAMEWORK */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Type className="text-[#2abcd4]" /> EDITORIAL TONE & FRAMEWORK
        </h2>
        <div className="bg-white border-2 border-[#2abcd4] p-5 rounded-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">The Two-Sentence Rule:</h3>
          <p className="text-sm text-gray-700">
            Every main article section must strictly be condensed into <strong>one single paragraph containing exactly two sentences</strong> to avoid dense walls of text.
          </p>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t-4 border-[#0c264d] pt-8 text-center">
        <p className="text-[#0c264d] font-bold text-lg italic">End of Official Brainopedia Standards</p>
      </div>

    </article>
  );
}