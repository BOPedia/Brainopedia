import React from 'react';
import { Microscope, ArrowRight, Layout, Palette, FileText, CheckCircle, ImageIcon, Smartphone, AlertTriangle, Type } from 'lucide-react';

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
            This document serves as the single source of truth for all design patterns, component styles, and editorial rules used throughout Brainopedia.
          </p>
        </div>

        {/* 1. COLOR PALETTE */}
        <section className="mb-12">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
            <Palette className="text-[#2abcd4]" /> COLOR PALETTE
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded shadow-sm border" style={{backgroundColor: '#ffd166'}}></div>
                <p className="text-sm"><strong>Yellow (#ffd166):</strong> Tabs, Buttons, Highlights</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded shadow-sm border" style={{backgroundColor: '#0A9DC4'}}></div>
                <p className="text-sm"><strong>Dark Cyan (#0A9DC4):</strong> Active Tab States (Mandatory)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded shadow-sm border" style={{backgroundColor: '#10b981'}}></div>
                <p className="text-sm"><strong>Green (#10b981):</strong> ONLY for naked citation superscripts</p>
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 text-xs">
              <p className="font-bold text-red-800 mb-2 uppercase">Color Usage Rules:</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-800">
                <li><strong>NEVER</strong> use the old cyan (#2abcd4) for active tabs.</li>
                <li>Button hover: Yellow → Dark Navy (#0c264d).</li>
                <li>Tab active: Dark Cyan (#0A9DC4) with white text.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. TYPOGRAPHY */}
        <section className="mb-12">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
            <Type className="text-[#2abcd4]" /> TYPOGRAPHY
          </h2>
          <ul className="list-disc ml-8 space-y-2 text-sm text-gray-800">
            <li><strong>Primary Font:</strong> League Spartan - Used for ALL body text throughout the site.</li>
            <li><strong>Constraint:</strong> DO NOT use Tailwind font size/weight classes (text-xl, font-bold) unless specifically requested.</li>
            <li><strong>Standard Size:</strong> <code className="bg-gray-100 px-1 rounded">text-sm</code> (14px) is the global standard for all tab content.</li>
          </ul>
        </section>

        {/* 3. CITATION SYSTEM */}
        <section className="mb-12">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
            <FileText className="text-[#2abcd4]" /> CITATION SYSTEM
          </h2>
          <div className="bg-[#ffd166] bg-opacity-20 border-l-4 border-[#ffd166] p-5 mb-6 text-sm">
            <p className="font-bold mb-2 uppercase text-[#0c264d]">Strict Citation Criteria:</p>
            <p>ONLY cite when research/studies are mentioned or numerical statistics are presented. Otherwise, use <strong>Background Sources</strong>.</p>
          </div>
          <div className="bg-gray-900 text-green-400 p-6 rounded-xl shadow-inner">
            <h3 className="text-white font-bold mb-4">The "Naked" Superscript Standard</h3>
            <code className="block bg-black p-3 rounded">
              {`Statistics show 10%<sup className="text-green-600 font-bold ml-0.5">1</sup>`}
            </code>
          </div>
        </section>

        {/* 4. UI TABS (THE "FULL-WIDTH" STANDARD) */}
        <section className="mb-12">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
            <Layout className="text-[#2abcd4]" /> TAB COMPONENTS
          </h2>
          <div className="bg-blue-50 border-l-4 border-[#0A9DC4] p-5 mb-4 text-sm">
            <p className="font-bold text-[#0c264d] mb-2 uppercase">Official Layout Policy:</p>
            <p>To avoid awkward spacing and visual gaps, <strong>all tab lists must be a single full-width column</strong> (stacked) rather than a multi-column grid.</p>
          </div>
          <pre className="bg-gray-900 text-green-400 p-5 rounded-xl text-xs overflow-x-auto shadow-inner">
{`<TabsList className="flex flex-col w-full gap-3 mb-12 bg-transparent h-auto p-0">
  <TabsTrigger value="tab1" className="w-full bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 text-sm !h-auto shadow-sm">
    Full Width Tab Label
  </TabsTrigger>
</TabsList>`}
          </pre>
        </section>

        {/* 5. REFERENCE SECTION MANDATORY CODE */}
        <section className="mb-12">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
            <CheckCircle className="text-[#2abcd4]" /> REFERENCE SECTION CODE
          </h2>
          <div className="bg-red-100 border-4 border-red-600 p-6 rounded-xl">
            <pre className="bg-white p-4 rounded text-xs overflow-x-auto border border-red-200">
{`<h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
<div className="text-sm space-y-2 ml-4">
  <p>[1] Author. (Year). "Title." <em>Journal</em>, vol(issue), pages.</p>
</div>

<h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
<div className="text-sm space-y-2">
  <p>Source (NO BULLET POINTS, NO NUMBERS, NO INDENTATION)</p>
</div>`}
            </pre>
          </div>
        </section>

        {/* 6. IMAGE & SYMBOL POLICIES */}
        <section className="mb-12">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
            <ImageIcon className="text-[#2abcd4]" /> IMAGE STANDARDS
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-[#2abcd4] p-5 rounded-xl">
              <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Autism Representation:</h3>
              <p className="text-sm"><strong>ALWAYS:</strong> Gold infinity symbol (∞)</p>
              <p className="text-sm text-red-600 font-bold">NEVER: Puzzle piece symbols</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-5">
              <h3 className="font-bold text-red-800 mb-2 uppercase text-xs">Emoji Policy:</h3>
              <p className="text-sm text-gray-800">Maintain professional tone. DO NOT use emojis in article headings, body text, or tab content.</p>
            </div>
          </div>
        </section>

        {/* CRITICAL ALERTS */}
        <section className="mb-12">
          <div className="bg-red-600 text-white p-6 rounded-2xl flex items-start gap-4 shadow-xl">
            <AlertTriangle size={48} className="shrink-0" />
            <div>
              <h2 className="text-xl font-bold mb-2 uppercase">Graphic Integrity Rule</h2>
              <p className="text-sm opacity-90 leading-relaxed">
                When updating text or citations, ALWAYS preserve imported graphics and images. Do NOT remove figma:asset imports or change image placements unless explicitly requested.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t-4 border-[#0c264d] pt-8 text-center">
          <p className="text-[#0c264d] font-bold text-lg font-spartan">End of Official Brainopedia Standards</p>
          <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest italic">A living document for Neurodiverse Endeavors</p>
        </div>

      </article>
    </div>
  );
}