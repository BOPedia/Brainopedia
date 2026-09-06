import React from 'react';
import { Microscope, ArrowRight, Code, Layout, Palette, FileText, CheckCircle, ImageIcon, Smartphone, AlertTriangle, Type, Move, Heart } from 'lucide-react';

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
{/* EXPORTS, IMPORTS & ROUTING */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Code className="text-[#2abcd4]" /> EXPORTS, IMPORTS & ROUTING
        </h2>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-5 mb-6 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-red-800 mb-2 uppercase text-xs">The Router Crash Rule (No Default Exports)</h3>
          <p className="text-sm text-slate-700">
            Brainopedia's routing engine strictly requires <strong>Named Exports</strong>. Using <code className="bg-white px-1 text-red-700 rounded border border-red-200">export default function</code> will instantly crash the app and cause a blank beige screen.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm text-slate-700 space-y-2">
            <li><strong>DO USE:</strong> <code className="bg-white px-1 text-green-700 rounded border border-gray-200">export function ArticleName()</code></li>
            <li><strong>NEVER USE:</strong> <code className="bg-white px-1 text-red-700 rounded border border-red-200">export default function ArticleName()</code></li>
          </ul>
        </div>

        <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-5 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Modern React Imports</h3>
          <p className="text-sm text-slate-700">
            Because we use modern React (17+), importing React just to write JSX is obsolete and will trigger VS Code warnings (yellow squiggles). Only import specific hooks when needed.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm text-slate-700 space-y-2">
            <li><strong>DO USE:</strong> <code className="bg-white px-1 text-green-700 rounded border border-gray-200">import &#123; useState &#125; from 'react';</code></li>
            <li><strong>REMOVE:</strong> <code className="bg-white px-1 text-red-700 rounded border border-red-200">import React from 'react';</code></li>
          </ul>
        </div>
      </section>
      {/* 1. IMAGE PLACEMENT and CLEARING STANDARDS */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Move className="text-[#2abcd4]" /> IMAGE PLACEMENT & POSITIONING
        </h2>
        


        <p className="text-sm mb-6 text-gray-600">All graphics must be implemented using the <code className="bg-gray-100 px-1 rounded">ImageWithFallback</code> component. Use these patterns for consistency:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">1. The Centered Hero</h3>
            <p className="text-xs mb-3 text-gray-600">For large diagrams (DNA, Brains) between text blocks.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
              className="block mx-auto w-full max-w-3xl mb-8 rounded-lg shadow-sm"
            </code>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">2. The Inline Float</h3>
            <p className="text-xs mb-3 text-gray-600">Small icons or supporting graphics inside info-boxes.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
              className="w-64 h-auto rounded-md float-right ml-6 mb-4"
            </code>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">3. The Centered Block</h3>
            <p className="text-xs mb-3 text-gray-600">For centering standard medium-sized graphics without floating text around them.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6"
            </code>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">4. The Clearing Rule</h3>
            <p className="text-xs mb-3 text-gray-600">Always use <code className="bg-white px-1 border border-gray-200 text-[#0c264d]">clear-both</code> on containers or buttons below floated images.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
              className="clear-both pt-8 pb-4"
            </code>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-6">
          <h3 className="font-bold text-[#0c264d] text-sm mb-2">5. Centered Image Headings</h3>
          <p className="text-xs mb-3 text-gray-600">When placing an H2 above a centered.WEBP, it must be centered and clear any previous floats.</p>
          <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
            className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center"
          </code>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-6">
          <h3 className="font-bold text-[#0c264d] text-sm mb-2">6. The Full-Width Span</h3>
          <p className="text-xs mb-3 text-gray-600">For diagrams or graphics that need to stretch to 100% of their container's width (overriding the standard max-width).</p>
          <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
            className="w-full h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
          </code>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-6 border-l-4 border-l-[#ffd166]">
          <h3 className="font-bold text-[#0c264d] text-sm mb-2">7. The Main Page Insert</h3>
          <p className="text-xs mb-3 text-gray-600">For standard ImageWithFallback graphics on the main neurodivergence overview pages (centers on mobile screens, floats right on desktop layouts).</p>
          <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
          </code>
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
            <strong>There are no master reference lists on Brainopedia.</strong> Every single page and subpage must contain its own self-contained, context-specific reference section at the bottom. Do not omit the reference section assuming it exists elsewhere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
           <div className="bg-[#ffd166] bg-opacity-20 border-l-4 border-[#ffd166] p-4 text-sm">
            <p className="font-bold mb-2 uppercase text-[#0c264d]">ONLY Use Inline Citations When:</p>
            <ul className="list-disc ml-4 space-y-2 text-slate-700">
              <li>The text explicitly says "research shows," "studies indicate," or similar phrasing.</li>
              <li>A specific statistic, percentage, or numerical data point is mentioned.</li>
              <li>These items go into the <strong>Cited Studies & Statistics</strong> reference list.</li>
            </ul>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 text-sm">
            <p className="font-bold mb-2 uppercase text-red-800">NEVER Use Inline Citations For:</p>
            <ul className="list-disc ml-4 space-y-2 text-slate-700">
              <li>General foundational knowledge.</li>
              <li>Standard definitions of teaching methods or conditions.</li>
              <li>Descriptive symptom lists.</li>
              <li>These items must be placed directly into the <strong>Background Sources</strong> list with NO inline superscript.</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 text-green-400 p-6 rounded-xl shadow-inner mb-6">
          <h3 className="text-white font-bold mb-2 text-sm">The "Naked" Superscript Standard</h3>
          <p className="text-xs text-gray-400 mb-3">All inline citations must be flush with the text, using strictly this class string:</p>
          <code className="block bg-black p-3 rounded text-xs break-words whitespace-pre-wrap">
            {`Statistics show 10%<sup className="text-[#10b981] font-bold ml-0.5">1</sup>`}
          </code>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Web-Adapted Citation Formatting</h3>
          <p className="text-sm text-gray-700 mb-2">We use a "Digital-First" APA 7th style for references. <strong>Do not use archaic print-publishing artifacts.</strong></p>
          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
            <li><strong>REMOVE:</strong> Journal volume numbers, issue numbers, and page ranges.</li>
            <li><strong>KEEP:</strong> Author, Year, Article Title, Journal Title, and the direct DOI or URL.</li>
          </ul>
        </div>
      </section>

      {/* 3. REFERENCE SECTION MANDATORY CODE */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <CheckCircle className="text-[#2abcd4]" /> REFERENCE SECTION CODE
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 text-sm text-gray-800">
          <strong>Mandatory Layout Rule:</strong> References must <strong>NOT</strong> be contained within a box, card, or styled background container. They sit flush on the page. Always use <code className="bg-white px-1 rounded text-xs break-words">{`<div className="clear-both mt-16 font-spartan">`}</code> as the main wrapper to clear floated images and provide exactly 64px of top margin spacing.
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 text-sm text-gray-800">
          <strong>Mandatory Header Styling:</strong> Reference sub-headers must always include the subtle bottom border line using the exact classes: <code className="bg-white px-1 rounded text-xs break-words">border-b border-green-700 border-opacity-10 pb-1</code> (or cyan for Background Sources).
        </div>

        <div className="bg-red-100 border-4 border-red-600 p-6 rounded-xl overflow-hidden min-w-0">
          <pre className="bg-white p-4 rounded text-xs overflow-x-auto border border-red-200 block break-words whitespace-pre-wrap">
{`{/* ===== REFERENCES SECTION ===== */}
<div className="clear-both mt-16 font-spartan">
  <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
  
  {/* CITED STUDIES: GREEN */}
  <div className="mb-6">
    <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
      Cited Studies & Statistics
    </h4>
    <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
      <p>1. Author. (Year). "Title." <i>Journal</i>. https://doi.org/10.xxxx/xxxxx</p>
    </div>
  </div>
  
  {/* BACKGROUND SOURCES: CYAN */}
  <div>
    <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
      Background Sources
    </h4>
    <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
      <li>Source Book/Manual (NO BULLET POINTS, NO NUMBERS)</li>
    </ul>
  </div>
</div>`}
          </pre>
        </div>
      </section>

      {/* 4. EDITORIAL TONE & FRAMEWORK */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Type className="text-[#2abcd4]" /> EDITORIAL TONE & FRAMEWORK
        </h2>
        <div className="bg-white border-2 border-green-500 p-5 rounded-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Strengths-Based Approach:</h3>
          <p className="text-sm text-gray-700">
            All content, definitions, and articles must be presented through a strengths-based model. We prioritize highlighting character-driven excellence, capabilities, and holistic understanding, rather than relying strictly on deficit-based clinical language.
          </p>
        </div>

        <div className="bg-white border-2 border-[#2abcd4] p-5 rounded-xl shadow-sm mt-6">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">The Two-Sentence Rule:</h3>
          <p className="text-sm text-gray-700">
            To maintain highly scannable, digestible content, every main article section (Overview, Symptoms, Causes, Diagnosis, Support, Living) must strictly be condensed into <strong>one single paragraph containing exactly two sentences</strong>. Avoid massive walls of text or dense medical jargon.
          </p>
        </div>
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

      {/* COLOR PALETTE */}
      <section className="mb-10">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2">
          COLOR PALETTE
        </h2>
        
        <h3 className="text-[#0c264d] font-bold text-lg mb-3">Primary Colors</h3>
        <div className="space-y-2 mb-4 ml-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#ffd166'}}></div>
            <p><strong>Yellow (Primary):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#ffd166</code> - Used for buttons, tab backgrounds, highlights</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#2abcd4'}}></div>
            <p><strong>Cyan (Accent):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#2abcd4</code> - Used for borders, links, decorative elements</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#0A9DC4'}}></div>
            <p><strong>Dark Cyan (Professional):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#0A9DC4</code> - Used for active tab states, background colors</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#0c264d'}}></div>
            <p><strong>Dark Navy Blue (Text/Headers):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#0c264d</code> - Primary text color, headers, hover states</p>
          </div>
        </div>

        <h3 className="text-[#0c264d] font-bold text-lg mb-3 mt-6">Secondary Colors</h3>
        <div className="space-y-2 mb-4 ml-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#10b981'}}></div>
            <p><strong>Bright Green (Citations):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#10b981</code> - ONLY for citation superscript numbers</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#ffffff'}}></div>
            <p><strong>White:</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#ffffff</code> - Card backgrounds, content areas</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#f0f9ff'}}></div>
            <p><strong>Light Blue Background:</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#f0f9ff</code> - Alternate section backgrounds</p>
          </div>
        </div>

        <h3 className="text-[#0c264d] font-bold text-lg mb-3 mt-6">Color Usage Rules</h3>
        <ul className="list-disc ml-8 space-y-2">
          <li>Citation numbers must ALWAYS be <code className="bg-gray-100 px-2 py-1 rounded break-words">#10b981</code> (bright green)</li>
          <li>Tab active states: Always Dark Cyan (<code className="bg-gray-100 px-2 py-1 rounded break-words">#0A9DC4</code>) with white text</li>
          <li>Tab/Button hover states: Always Navy (<code className="bg-gray-100 px-2 py-1 rounded break-words">#0c264d</code>) with white text</li>
          <li>Tab resting states: Always Yellow (<code className="bg-gray-100 px-2 py-1 rounded break-words">#ffd166</code>) with Navy text</li>
        </ul>
      </section>

      {/* CARD STYLING & CONTAINERS */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2 border-b pb-2">
          <Layout className="text-[#2abcd4]" /> CARD STYLING & CONTAINERS
        </h2>
        
        <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-[#0c264d] mb-3 uppercase text-xs">Standard Card Color Rules</h3>
          <p className="text-sm text-gray-700 mb-4">
            To break up dense text, content sections should be wrapped in colorful, styled cards. Card backgrounds must <strong>always</strong> be a lightened/pastel version of our core colors, paired with a darker, thicker border of the same color family. Use these exact combinations unless otherwise specified:
          </p>
          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-3">
            <li><strong>Cyan Cards:</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">bg-cyan-50 border-2 border-[#2abcd4]</code></li>
            <li><strong>Yellow/Gold Cards:</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">bg-yellow-50 border-2 border-[#ffd166]</code></li>
            <li><strong>Navy/Gray Cards:</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">bg-slate-50 border-2 border-[#0c264d]</code> (Navy border) or <code className="bg-gray-100 px-2 py-1 rounded break-words">border-slate-200</code> (Gray border)</li>
            
            <li className="text-red-700 font-bold mt-4 pt-2 border-t border-gray-100"><strong>"DO NOT" / Warning Cards:</strong> <code className="bg-red-50 px-2 py-1 rounded border border-red-200 text-red-700 break-words">bg-white border-4 border-red-500</code></li>
          </ul>
        
        </div>
{/* TYPOGRAPHY SIZING RULE */}
        <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-5 mb-6 rounded-r-xl shadow-sm mb-6">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Typography Sizing: Paragraphs vs. Mini-Card Lists</h3>
          <p className="text-sm text-slate-700 mb-6">
            To maintain a clean, breathable design hierarchy, strict font sizing rules apply to separate standard reading text from dense bulleted information.
          </p>
          <ul className="list-disc ml-5 text-sm text-slate-700 space-y-3">
            <li>
              <strong>Intro & Hero Paragraphs (<code className="bg-white px-1 text-green-700 rounded border border-gray-200">text-sm</code>):</strong> Any standard paragraph text—whether it is floating next to an image, or centered directly below a hero graphic—must remain at the standard <code className="bg-white px-1 text-green-700 rounded border border-gray-200">text-sm</code> size to ensure maximum readability.
            </li>
            <li>
              <strong>Mini-Card Bulleted Lists (<code className="bg-white px-1 text-green-700 rounded border border-gray-200">text-xs</code>):</strong> To prevent text from feeling cramped, bulleted lists placed inside smaller grid cards (especially in dense 3-column or 4-column layouts) must be scaled down.
            </li>
            <li>
              <strong>Implementation:</strong> <code className="bg-white px-1 text-[#0c264d] rounded border border-gray-200 break-all">&lt;ul className="list-disc ml-5 text-xs text-slate-700 space-y-2"&gt;</code>
            </li>
          </ul>
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section className="mb-10">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2">
          TYPOGRAPHY
        </h2>
        
        <h3 className="text-[#0c264d] font-bold text-lg mb-3">Font Family</h3>
        <ul className="list-disc ml-8 space-y-2 mb-4">
          <li><strong>Primary Font:</strong> League Spartan - Used for ALL body text throughout the site</li>
          <li><strong>Fallback:</strong> system-ui, sans-serif</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold text-lg mb-3">Font Sizes & Weights</h3>
        <ul className="list-disc ml-8 space-y-2 mb-4">
          <li><strong>DO NOT</strong> use Tailwind font size classes (text-xl, text-2xl, etc.) unless specifically requested</li>
          <li><strong>DO NOT</strong> use Tailwind font weight classes (font-bold, font-semibold, etc.) unless specifically requested</li>
          <li><strong>Exception:</strong> Except for the cards that have bulleted lists inside them -- as mentioned under mini-card bulleted lists above, where those are text-xs -- <code className="bg-gray-100 px-2 py-1 rounded break-words">text-sm</code> is standardized for ALL tabs across all subpages (14px)</li>
          <li>Default body text relies on globals.css styling</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold text-lg mb-3">Headers</h3>
        <ul className="list-disc ml-8 space-y-2">
          <li className="text-red-600 font-bold">STRICT RULE: <code className="bg-red-50 px-1 rounded break-words">&lt;h1&gt;</code> tags MUST NEVER be bolded. Use <code className="bg-red-50 px-1 rounded break-words">font-normal</code>.</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded break-words">&lt;h2&gt;</code> and <code className="bg-gray-100 px-2 py-1 rounded break-words">&lt;h3&gt;</code> tags MUST ALWAYS be bolded (<code className="bg-gray-100 px-2 py-1 rounded break-words">font-bold</code>).</li>
          <li>Custom font sizes/weights only when user explicitly requests them</li>
        </ul>
      </section>



      {/* 7. TABS & NAVIGATION BUTTONS */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Palette className="text-[#2abcd4]" /> TABS & NAVIGATION BUTTONS
        </h2>
        
       <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-[#0c264d] mb-4 uppercase text-xs">Font Rules & Styling</h3>
          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-2 mb-4">
            <li><strong>Weight:</strong> Normal (<code className="bg-gray-100 px-1 rounded break-words">font-normal</code>).</li>
            <li className="text-red-600 font-bold">STRICT RULE: NO bolding (<code className="bg-red-50 px-1 rounded break-words">font-bold</code> or <code className="bg-red-50 px-1 rounded break-words">font-semibold</code>) is allowed on tabs, standard navigation buttons, or "About" buttons. Text must be <code className="bg-red-50 px-1 rounded break-words">font-normal</code>.</li>
            <li><strong>Exception:</strong> "Read more →" buttons at the bottom of main overview sections <strong>MUST</strong> use <code className="bg-gray-100 px-1 rounded break-words">font-bold</code> styling.</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">Resting State</h3>
            <p className="text-xs mb-3 text-gray-600">Yellow background with Navy text.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded break-words whitespace-pre-wrap">
              bg-[#ffd166] text-[#0c264d]
            </code>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">Hover State</h3>
            <p className="text-xs mb-3 text-gray-600">Navy background with White text.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded break-words whitespace-pre-wrap">
              hover:bg-[#0c264d] hover:text-white
            </code>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">Active / Highlighted</h3>
            <p className="text-xs mb-3 text-gray-600">Darker Cyan background with White text.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded break-words whitespace-pre-wrap">
              bg-[#0A9DC4] text-white
            </code>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Standard "Read More" Button Class</h3>
          <code className="text-sm font-bold bg-white text-blue-600 p-3 rounded border border-blue-200 block w-full break-all whitespace-pre-wrap">
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          </code>
        </div>
      </section>

        {/*  INFORMATION ARCHITECTURE & TAB ORDERING */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Layout className="text-[#2abcd4]" /> INFORMATION ARCHITECTURE
        </h2>
        <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-5 mb-6 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">File Naming Convention:</h3>
          <p className="text-sm text-gray-700 mb-2">All graphics must follow this exact naming structure to maintain consistency across the platform:</p>
          <code className="text-sm font-bold bg-white text-[#2abcd4] p-3 rounded border border-[#2abcd4] border-opacity-20 block w-full break-all">
            neurodivergence-section-tab-detail-about-pic.webp
          </code>
        </div>
        <div className="bg-[#ffd166] bg-opacity-20 border-l-4 border-[#ffd166] p-5 rounded-r-lg">
          <h3 className="font-bold text-[#0c264d] mb-2">Graphic Naming Integrity</h3>
          <p className="text-sm text-gray-800">If a graphic's file name no longer matches its tab location due to restructuring (e.g., an "overview" graphic is moved into the "genetics" tab), <strong>maintain the original file name</strong>. Do not rename the file, as this prevents broken links across the platform.</p>
        </div>
      </section>

    {/* CRITICAL ALERTS */}
      <section className="mb-12">
        <div className="bg-red-200 text-[#0c264d] p-6 rounded-2xl flex items-start gap-4 shadow-xl mb-6">
          <AlertTriangle size={48} className="shrink-0 text-red-600" />
          <div className="min-w-0">
            <h2 className="text-xl font-bold mb-2 uppercase text-[#0c264d]">Graphic Integrity Rule</h2>
            <p className="text-sm leading-relaxed font-medium text-[#0c264d]">
              When updating text or citations, ALWAYS preserve imported graphics. Do NOT remove <code className="bg-white px-1 rounded text-[#0c264d] break-words">ImageWithFallback</code> components or change image placements unless explicitly requested.
            </p>
          </div>
          
        </div>
        <div className="bg-yellow-200 border-l-4 border-[#2abcd4] p-5 mb-6 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Image Component Imports</h3>
          <p className="text-sm text-slate-700">
            All images must utilize the custom fallback component. Ensure the relative import path is correct based on the file's depth in the directory structure. The following example is the correct one to use in almost all cases. 
          </p>
          <code className="bg-white px-2 py-1 text-[#0c264d] rounded border border-gray-200 mt-2 block w-full text-xs">
            import &#123; ImageWithFallback &#125; from '../../figma/ImageWithFallback';
          </code>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t-4 border-[#0c264d] pt-8 text-center">
        <p className="text-[#0c264d] font-bold text-lg italic">End of Official Brainopedia Standards</p>
      </div>

    </article>
  );
}