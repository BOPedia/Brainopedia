import React from 'react';
import { Microscope, ArrowRight, Layout, Palette, FileText, CheckCircle, ImageIcon, Smartphone, AlertTriangle, Type, Move } from 'lucide-react';

interface ProjectStandardsProps {
  setCurrentArticle?: (article: string) => void;
}

export default function ProjectStandards({ setCurrentArticle }: ProjectStandardsProps) {
  return (
    <div className="min-h-screen bg-[#f0f9ff] py-8 px-4 font-spartan">
      <article className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        
        {/* Header */}
        <div className="pb-6 border-b-4 border-[#0c264d] mb-10">
          <h1 className="text-4xl text-[#0c264d] font-bold mb-2">
            Brainopedia Project Standards & Design System
          </h1>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Last Updated: May 13, 2026</p>
          <p className="mt-4 text-[#0c264d]">
            The definitive technical and editorial manual for the Brainopedia digital encyclopedia.
          </p>
        </div>

        {/* 1. IMAGE PLACEMENT & CLEARING STANDARDS */}
        <section className="mb-12">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
            <Move className="text-[#2abcd4]" /> IMAGE PLACEMENT & POSITIONING
          </h2>
          <p className="text-sm mb-6 text-gray-600">All graphics must be implemented using the <code className="bg-gray-100 px-1 rounded">ImageWithFallback</code> component. Use these three patterns for consistency:</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-bold text-[#0c264d] text-sm mb-2">1. The Centered Hero</h3>
              <p className="text-xs mb-3 text-gray-600">For large diagrams (DNA, Brains) between text blocks.</p>
              <code className="text-[10px] block bg-gray-900 text-green-400 p-2 rounded">
                className="w-full max-w-md mx-auto mb-8 rounded-xl shadow-md"
              </code>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-bold text-[#0c264d] text-sm mb-2">2. The Inline Float</h3>
              <p className="text-xs mb-3 text-gray-600">Small icons or supporting graphics inside info-boxes.</p>
              <code className="text-[10px] block bg-gray-900 text-green-400 p-2 rounded">
                className="w-full max-w-sm mx-auto mb-6 rounded-lg"
              </code>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-bold text-[#0c264d] text-sm mb-2">3. The Clearing Rule</h3>
              <p className="text-xs mb-3 text-gray-600">Always use <code className="bg-white px-1">clear-both</code> or <code className="bg-white px-1">w-full</code> on buttons below images.</p>
              <code className="text-[10px] block bg-gray-900 text-green-400 p-2 rounded">
                className="flex justify-end my-8 w-full clear-both"
              </code>
            </div>
          </div>
        </section>

        {/* 2. CITATION SYSTEM */}
        <section className="mb-12">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
            <FileText className="text-[#2abcd4]" /> CITATION SYSTEM
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
             <div className="bg-[#ffd166] bg-opacity-20 border-l-4 border-[#ffd166] p-4 text-xs">
              <p className="font-bold mb-1 uppercase">ONLY cite when:</p>
              <ul className="list-disc ml-4 space-y-1">
                <li>Text mentions research/studies directly.</li>
                <li>Text presents statistics or numerical data.</li>
              </ul>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 text-xs">
              <p className="font-bold mb-1 uppercase">NEVER cite:</p>
              <p>General knowledge or descriptive symptom lists. (Use Background Sources instead).</p>
            </div>
          </div>
          <div className="bg-gray-900 text-green-400 p-6 rounded-xl shadow-inner">
            <h3 className="text-white font-bold mb-2 text-sm">The "Naked" Superscript Standard</h3>
            <code className="block bg-black p-3 rounded text-xs">
              {`Statistics show 10%<sup className="text-green-600 font-bold ml-0.5">1</sup>`}
            </code>
          </div>
        </section>

        {/* 3. REFERENCE SECTION MANDATORY CODE */}
        <section className="mb-12">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
            <CheckCircle className="text-[#2abcd4]" /> REFERENCE SECTION CODE
          </h2>
          <div className="bg-red-100 border-4 border-red-600 p-6 rounded-xl">
            <pre className="bg-white p-4 rounded text-xs overflow-x-auto border border-red-200">
{`<h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>

{/* CITED STUDIES: GREEN */}
<div className="mb-6">
  <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
    Cited Studies & Statistics
  </h4>
  <div className="text-xs space-y-3 text-slate-600 leading-relaxed">
    <p>1. Author. (Year). "Title." <em>Journal</em>, vol(issue), pages.</p>
  </div>
</div>

{/* BACKGROUND SOURCES: CYAN */}
<div>
  <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
    Background Sources
  </h4>
  <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
    <li>Source (NO BULLET POINTS, NO NUMBERS, NO INDENTATION)</li>
  </ul>
</div>`}
            </pre>
          </div>
        </section>

        {/* 4. TAB COMPONENTS (THE "STACKED" STANDARD) */}
        <section className="mb-12">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
            <Layout className="text-[#2abcd4]" /> UI TABS
          </h2>
          <p className="text-sm mb-4"><strong>Full-Width Stack:</strong> To avoid awkward spacing, all tab triggers must be 100% width.</p>
          <pre className="bg-gray-900 text-green-400 p-5 rounded-xl text-xs overflow-x-auto">
{`<TabsList className="flex flex-col w-full gap-3 mb-12 bg-transparent h-auto p-0">
  <TabsTrigger value="tab1" className="w-full bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 text-sm !h-auto">
    Full Width Tab Label
  </TabsTrigger>
</TabsList>`}
          </pre>
        </section>

        {/* 5. IMAGE & SYMBOL POLICIES */}
        <section className="mb-12">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
            <ImageIcon className="text-[#2abcd4]" /> SYMBOLS & EMOJIS
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-[#2abcd4] p-5 rounded-xl">
              <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Autism Representation:</h3>
              <p className="text-sm"><strong>ALWAYS:</strong> Gold infinity symbol (∞)</p>
              <p className="text-sm text-red-600 font-bold">NEVER: Puzzle piece symbols</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-5">
              <h3 className="font-bold text-red-800 mb-2 uppercase text-xs">Emoji Policy:</h3>
              <p className="text-sm text-gray-800">DO NOT use emojis in headings or body text. Maintain professional tone.</p>
            </div>
          </div>
        </section>

        {/* CRITICAL ALERTS */}
        <section className="mb-12">
          <div className="bg-red-600 text-white p-6 rounded-2xl flex items-start gap-4 shadow-xl">
            <AlertTriangle size={48} className="shrink-0" />
            <div>
              <h2 className="text-xl font-bold mb-2 uppercase text-white">Graphic Integrity Rule</h2>
              <p className="text-sm opacity-90 leading-relaxed text-white">
                When updating text or citations, ALWAYS preserve imported graphics. Do NOT remove <code className="bg-black bg-opacity-30 px-1 rounded text-white">ImageWithFallback</code> components or change image placements unless explicitly requested.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t-4 border-[#0c264d] pt-8 text-center">
          <p className="text-[#0c264d] font-bold text-lg font-spartan italic">End of Official Brainopedia Standards</p>
        </div>

      </article>
    </div>
  );
}