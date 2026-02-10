import React from 'react';

interface ProjectStandardsProps {
  setCurrentArticle?: (article: string) => void;
}

export default function ProjectStandards({ setCurrentArticle }: ProjectStandardsProps) {
  return (
    <div className="min-h-screen bg-[#f0f9ff] py-8 px-4">
      <article className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        
        {/* Header */}
        <div className="pb-4 border-b-2 border-[#0c264d] mb-8">
          <h1 className="text-4xl text-[#0c264d] mb-2">
            Brainopedia Project Standards & Design System
          </h1>
          <p className="text-sm text-gray-600">Last Updated: January 15, 2026</p>
          <p className="mt-2 text-[#0c264d]">
            This document serves as the single source of truth for all design patterns, component styles, and editorial rules used throughout Brainopedia.
          </p>
        </div>

        {/* COLOR PALETTE */}
        <section className="mb-10">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2">
            COLOR PALETTE
          </h2>
          
          <h3 className="text-[#0c264d] font-semibold text-lg mb-3">Primary Colors</h3>
          <div className="space-y-2 mb-4 ml-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded border-2 border-gray-300" style={{backgroundColor: '#ffd166'}}></div>
              <p><strong>Yellow (Primary):</strong> <code className="bg-gray-100 px-2 py-1 rounded">#ffd166</code> - Used for buttons, tab backgrounds, highlights</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded border-2 border-gray-300" style={{backgroundColor: '#2abcd4'}}></div>
              <p><strong>Cyan (Accent):</strong> <code className="bg-gray-100 px-2 py-1 rounded">#2abcd4</code> - Used for borders, links, decorative elements</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded border-2 border-gray-300" style={{backgroundColor: '#0A9DC4'}}></div>
              <p><strong>Dark Cyan (Professional):</strong> <code className="bg-gray-100 px-2 py-1 rounded">#0A9DC4</code> - Used for active tab states, hover states (introduced Dec 2025)</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded border-2 border-gray-300" style={{backgroundColor: '#0c264d'}}></div>
              <p><strong>Dark Navy Blue (Text/Headers):</strong> <code className="bg-gray-100 px-2 py-1 rounded">#0c264d</code> - Primary text color, headers, borders</p>
            </div>
          </div>

          <h3 className="text-[#0c264d] font-semibold text-lg mb-3 mt-6">Secondary Colors</h3>
          <div className="space-y-2 mb-4 ml-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded border-2 border-gray-300" style={{backgroundColor: '#10b981'}}></div>
              <p><strong>Bright Green (Citations):</strong> <code className="bg-gray-100 px-2 py-1 rounded">#10b981</code> - ONLY for citation superscript numbers</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded border-2 border-gray-300" style={{backgroundColor: '#ffffff'}}></div>
              <p><strong>White:</strong> <code className="bg-gray-100 px-2 py-1 rounded">#ffffff</code> - Card backgrounds, content areas</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded border-2 border-gray-300" style={{backgroundColor: '#f0f9ff'}}></div>
              <p><strong>Light Blue Background:</strong> <code className="bg-gray-100 px-2 py-1 rounded">#f0f9ff</code> - Alternate section backgrounds</p>
            </div>
          </div>

          <h3 className="text-[#0c264d] font-semibold text-lg mb-3 mt-6">Color Usage Rules</h3>
          <ul className="list-disc ml-8 space-y-2">
            <li><strong>Never</strong> use the old cyan <code className="bg-gray-100 px-2 py-1 rounded">#2abcd4</code> for active tab states - always use <code className="bg-gray-100 px-2 py-1 rounded">#0A9DC4</code></li>
            <li>Citation numbers must ALWAYS be <code className="bg-gray-100 px-2 py-1 rounded">#10b981</code> (bright green)</li>
            <li>Button hover states: Yellow buttons hover to dark navy (<code className="bg-gray-100 px-2 py-1 rounded">#0c264d</code>)</li>
            <li>Tab active states: Always <code className="bg-gray-100 px-2 py-1 rounded">#0A9DC4</code> with white text</li>
          </ul>
        </section>

        {/* TYPOGRAPHY */}
        <section className="mb-10">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2">
            TYPOGRAPHY
          </h2>
          
          <h3 className="text-[#0c264d] font-semibold text-lg mb-3">Font Family</h3>
          <ul className="list-disc ml-8 space-y-2 mb-4">
            <li><strong>Primary Font:</strong> League Spartan - Used for ALL body text throughout the site</li>
            <li><strong>Fallback:</strong> system-ui, sans-serif</li>
          </ul>

          <h3 className="text-[#0c264d] font-semibold text-lg mb-3">Font Sizes</h3>
          <ul className="list-disc ml-8 space-y-2 mb-4">
            <li><strong>DO NOT</strong> use Tailwind font size classes (text-xl, text-2xl, etc.) unless specifically requested</li>
            <li><strong>DO NOT</strong> use Tailwind font weight classes (font-bold, font-semibold, etc.) unless specifically requested</li>
            <li><strong>Exception:</strong> <code className="bg-gray-100 px-2 py-1 rounded">text-sm</code> is standardized for ALL tabs across all subpages (14px)</li>
            <li>Default body text relies on globals.css styling</li>
          </ul>

          <h3 className="text-[#0c264d] font-semibold text-lg mb-3">Headers</h3>
          <ul className="list-disc ml-8 space-y-2">
            <li><code className="bg-gray-100 px-2 py-1 rounded">&lt;h1&gt;</code> - Page titles (styled in globals.css)</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">&lt;h2&gt;</code> - Section headers (styled in globals.css)</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">&lt;h3&gt;</code> - Subsection headers (styled in globals.css)</li>
            <li>Custom font sizes/weights only when user explicitly requests them</li>
          </ul>
        </section>

        {/* CITATION SYSTEM */}
        <section className="mb-10">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2">
            CITATION SYSTEM
          </h2>
          
          <h3 className="text-[#0c264d] font-semibold text-lg mb-3">Strict Citation Criteria</h3>
          <div className="bg-[#ffd166] bg-opacity-20 border-l-4 border-[#ffd166] p-4 mb-4">
            <p className="font-semibold mb-2">ONLY cite when:</p>
            <ol className="list-decimal ml-6 space-y-1">
              <li>Text specifically mentions research/studies as the source (e.g., "research indicates," "studies show," "according to research")</li>
              <li>Text presents statistics or numerical data</li>
              <li>Text directly references social or medical science manuals (e.g., DSM-5-TR, ICD-11, clinical practice guidelines)</li>
            </ol>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="font-semibold mb-2">NEVER cite:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>General knowledge statements</li>
              <li>Descriptive information</li>
              <li>Lists of symptoms/characteristics</li>
              <li>Definition explanations</li>
              <li>Historical context without specific data</li>
            </ul>
            <p className="mt-3 text-sm italic">
              <strong>Important:</strong> This "NEVER cite" rule applies to <strong>numbered inline citations only</strong>. ALL sources used to build the page content—including those for descriptive information, symptom lists, and general knowledge—should still be listed in the Background Sources section.
            </p>
          </div>

          <h3 className="text-[#0c264d] font-semibold text-lg mb-3">The "Strict Criteria" - Full Reference System</h3>
          
          <h4 className="text-[#0c264d] font-semibold mb-2">Inline Citations (Green Numbers):</h4>
          <p className="mb-2">Use green-colored numbered superscripts ONLY for:</p>
          <ul className="list-disc ml-8 space-y-2 mb-4">
            <li>References to <strong>actual studies or research</strong> stated in the text</li>
            <li>NOT for researchers themselves, but the <strong>studies</strong> they conducted</li>
            <li>Sometimes referred to in text as "research" or "studies show"</li>
            <li>Statistical data or numerical findings</li>
          </ul>

          <h4 className="text-[#0c264d] font-semibold mb-2">Reference Verification:</h4>
          <ul className="list-disc ml-8 space-y-2 mb-4">
            <li>ALL references must be verified as actual studies found on Google at minimum</li>
            <li>Every citation must be traceable to a real academic source</li>
            <li>This allows for page-by-page source review when needed</li>
          </ul>

          <h4 className="text-[#0c264d] font-semibold mb-2">Independent Numbering Per Page:</h4>
          <ul className="list-disc ml-8 space-y-2 mb-4">
            <li>EVERY page (main pages, subpages, sub-subpages) has its OWN independent reference list</li>
            <li>Each page starts numbering at [1] regardless of other pages</li>
            <li>Do NOT share reference lists across pages</li>
            <li>Do NOT question this system or offer alternative numbering schemes</li>
            <li>This structure has been established and is final</li>
          </ul>

          <h4 className="text-[#0c264d] font-semibold mb-2">References for Sections and Tabs:</h4>
          <div className="bg-[#ffd166] bg-opacity-20 border-l-4 border-[#ffd166] p-4 mb-4">
            <p className="font-semibold mb-2">KEY PRINCIPLE: Every Section AND Every Tab Has Its Own Reference List</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Every section</strong> of the 6 core categories (Overview, Symptoms, Causes, Diagnosis, Treatment/Support, Living/Research) has its own independent reference list</li>
              <li><strong>Every tab</strong> within a section also has its own independent reference list</li>
              <li>Example: ADHD Symptoms subpage has 5 tabs (Core Symptoms, Inattention, Hyperactivity, Impulsivity, Combined Presentation) - each tab gets its own References section</li>
              <li><strong>Numbering restarts at [1]</strong> for each section and each tab</li>
            </ul>
          </div>

          <h4 className="text-[#0c264d] font-semibold mb-2">Inline Citations vs. Background Sources:</h4>
          <ul className="list-disc ml-8 space-y-2 mb-4">
            <li><strong>Inline citations may not always be present:</strong> Some tabs/sections may have NO inline citations if the content doesn't explicitly mention research/studies or present statistics</li>
            <li><strong>Background sources should almost always be present:</strong> It would be unusual for a tab/section to have NO background sources, as all content is informed by authoritative sources</li>
            <li><strong>If no inline citations exist:</strong> The References section should explicitly state "No inline citations for this section" or "No inline citations for this tab" before listing Background Sources</li>
            <li><strong>Vice versa is possible:</strong> Rarely, a tab might have inline citations but minimal background sources (though this is uncommon)</li>
            <li><strong>Both types are valid:</strong> A tab can have inline citations only, background sources only, both, or (very rarely) neither</li>
          </ul>

          <h4 className="text-[#0c264d] font-semibold mb-2">CRITICAL: Preserve Graphics When Formatting:</h4>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <p className="font-semibold mb-2">When updating citations or making any formatting changes to a page:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>ALWAYS preserve all imported graphics and images</strong></li>
              <li>Do NOT remove or modify image imports (figma:asset imports, local file imports, etc.)</li>
              <li>Do NOT remove or change image placements in the content</li>
              <li>Graphics are an integral part of the page design and must remain unchanged</li>
              <li>Only modify citations, reference sections, or text content as requested</li>
            </ul>
          </div>

          <h4 className="text-[#0c264d] font-semibold mb-2">Citation Format Example:</h4>
          <div className="bg-gray-50 p-4 rounded border border-gray-300 text-sm">
            <p className="mb-2">Inline citation: Research shows that ADHD affects 11.3% of children ages 5-17<sup style={{color: '#10b981'}}>[1]</sup>.</p>
            <p className="mt-4 font-semibold">References Section:</p>
            <p className="font-semibold mt-2">Cited Studies or Statistics</p>
            <p className="ml-4">[1] Smith, J. et al. (2023). "ADHD Prevalence Study." <em>Journal of Child Psychology</em>, 45(2), 123-145.</p>
            <p className="font-semibold mt-3">Background Sources</p>
            <p>Centers for Disease Control. (2024). "Understanding ADHD." Retrieved from cdc.gov</p>
          </div>

          <h4 className="text-[#0c264d] font-semibold mb-2 mt-6">MANDATORY FORMAT - REFERENCES SECTION CODE TEMPLATE:</h4>
          <div className="bg-red-100 border-4 border-red-600 p-6 mb-4">
            <p className="font-bold text-red-900 mb-4 text-lg">ASSISTANT: READ THIS BEFORE CREATING ANY REFERENCE SECTION</p>
            
            <div className="bg-white p-4 rounded mb-4">
              <p className="font-semibold mb-2 text-red-900">CORRECT FORMAT (copy this exactly!):</p>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`<div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
  <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
  
  <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
  <div className="text-sm space-y-2 ml-4">
    <p>[1] Author. (Year). "Title." <em>Journal</em>, vol(issue), pages.</p>
    <p>[2] Another citation...</p>
  </div>
  
  <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
  <div className="text-sm space-y-2">
    <p>Source 1 (NO BULLET POINTS, NO NUMBERS, NO INDENTATION)</p>
    <p>Source 2 (NO BULLET POINTS, NO NUMBERS, NO INDENTATION)</p>
  </div>
</div>`}
              </pre>
            </div>

            <div className="bg-white p-4 rounded mb-4">
              <p className="font-semibold mb-2 text-red-900">IF NO INLINE CITATIONS EXIST:</p>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`<div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
  <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
  
  <p className="text-sm mb-2"><em>No inline citations for this tab.</em></p>
  
  <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
  <div className="text-sm space-y-2">
    <p>Source 1 (NO BULLET POINTS, NO NUMBERS, NO INDENTATION)</p>
    <p>Source 2 (NO BULLET POINTS, NO NUMBERS, NO INDENTATION)</p>
  </div>
</div>`}
              </pre>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-600 p-3 rounded">
              <p className="font-bold text-yellow-900">KEY RULES:</p>
              <ul className="list-disc ml-6 text-sm space-y-1 text-yellow-900">
                <li>Background Sources = NO BULLET POINTS, NO NUMBERS, NO INDENTATION</li>
                <li>Cited Studies = NUMBERS [1], [2], [3] with ml-4 indentation</li>
                <li>Always have TWO headings (even if one section is empty)</li>
                <li>NEVER number background sources</li>
                <li>NEVER use [1], [2] for background sources</li>
                <li>NEVER indent background sources (no ml-4)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TAB COMPONENTS */}
        <section className="mb-10">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2">
            TAB COMPONENTS
          </h2>
          
          <div className="bg-[#ffd166] bg-opacity-30 border-l-4 border-[#ffd166] p-4 mb-6">
            <p className="font-bold text-[#0c264d] mb-2">OFFICIAL STANDARD - ALL TABS MUST USE THIS FORMAT:</p>
            <p className="font-semibold mb-2">Pattern 2: UI Tabs Component (MANDATORY FOR ALL SUBPAGES)</p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>All tabs across the entire site must use the UI Tabs Component from <code className="bg-white px-1 rounded">../../ui/tabs</code></li>
              <li><strong>Mobile:</strong> 1 tab per row (<code className="bg-white px-1 rounded">grid-cols-1</code>)</li>
              <li><strong>iPad/Tablet + Desktop:</strong> 2 tabs per row (<code className="bg-white px-1 rounded">md:grid-cols-2</code>)</li>
              <li>This ensures consistency across all 27 neurodivergent condition pages</li>
            </ul>
          </div>
          
          <h3 className="text-[#0c264d] font-semibold text-lg mb-3">UI Tabs Component - Standard Implementation</h3>
          <div className="bg-gray-50 p-4 rounded border border-gray-300 mb-4">
            <p className="font-semibold mb-2">Required Standards:</p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>Import: <code className="bg-gray-100 px-1 rounded">{"import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';"}</code></li>
              <li>Always include <code className="bg-gray-100 px-1 rounded">text-sm</code> class on TabsTrigger</li>
              <li>Active state via data attribute: <code className="bg-gray-100 px-1 rounded">data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white</code></li>
              <li>Inactive state: <code className="bg-gray-100 px-1 rounded">bg-[#ffd166]</code></li>
              <li>Tab layout grid: <code className="bg-gray-100 px-1 rounded">grid-cols-1 md:grid-cols-2</code> (1 column on mobile, 2 columns on iPad/tablet/desktop)</li>
              <li>Tab padding: <code className="bg-gray-100 px-1 rounded">py-3 md:py-2</code> (taller on mobile, shorter on iPad and larger)</li>
              <li>TabsList classes: <code className="bg-gray-100 px-1 rounded">grid w-full grid-cols-1 md:grid-cols-2 gap-3 mb-12 bg-transparent h-auto p-0</code></li>
              <li>TabsTrigger classes: <code className="bg-gray-100 px-1 rounded">{"bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto"}</code></li>
            </ul>
          </div>

          <h3 className="text-[#0c264d] font-semibold text-lg mb-3 mt-6">Code Template</h3>
          <div className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto mb-4">
            <pre>{`<Tabs defaultValue="overview" className="w-full">
  <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 gap-3 mb-12 bg-transparent h-auto p-0">
    <TabsTrigger value="overview" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
      Overview
    </TabsTrigger>
    <TabsTrigger value="tab2" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
      Second Tab
    </TabsTrigger>
  </TabsList>
  
  <TabsContent value="overview" className="space-y-8">
    {/* Tab content here */}
  </TabsContent>
  
  <TabsContent value="tab2" className="space-y-8">
    {/* Tab content here */}
  </TabsContent>
</Tabs>`}</pre>
          </div>
        </section>

        {/* BUTTON COMPONENTS */}
        <section className="mb-10">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2">
            BUTTON COMPONENTS
          </h2>
          
          <h3 className="text-[#0c264d] font-semibold text-lg mb-3">Primary Navigation Button (Back to Main Page)</h3>
          <div className="mb-4">
            <button className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap">
              <span className="text-xl">←</span>
              All About [Condition Name]
            </button>
          </div>
          <ul className="list-disc ml-8 space-y-2 text-sm mb-4">
            <li><strong>Container class:</strong> <code className="bg-gray-100 px-1 rounded">flex justify-end my-8 w-full</code></li>
            <li><strong>Purpose of w-full:</strong> Ensures button stays far right regardless of nearby graphics or elements</li>
            <li>Button background: Yellow (<code className="bg-gray-100 px-1 rounded">#ffd166</code>)</li>
            <li>Hover: Background becomes Dark Navy Blue, text becomes white</li>
            <li>Include left arrow (<code className="bg-gray-100 px-1 rounded">←</code>) before text</li>
          </ul>

          <h3 className="text-[#0c264d] font-semibold text-lg mb-3 mt-6">"Read more →" Link Buttons</h3>
          <div className="mb-4">
            <button className="px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold">
              Read more →
            </button>
          </div>
          <ul className="list-disc ml-8 space-y-2 text-sm">
            <li><strong>MUST appear in EVERY card</strong> on neurodivergence subpages</li>
            <li>Background: Yellow (<code className="bg-gray-100 px-1 rounded">#ffd166</code>)</li>
            <li>Text color: Dark Navy Blue (<code className="bg-gray-100 px-1 rounded">#0c264d</code>)</li>
            <li>Hover: Background becomes Dark Navy Blue, text becomes white</li>
            <li>Include transition for smooth color change</li>
            <li>Standard format: <code className="bg-gray-100 px-1 rounded">{"className=\"px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold\""}</code></li>
          </ul>
        </section>

        {/* CARD SECTIONS */}
        <section className="mb-10">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2">
            CARD SECTIONS (Main Condition Pages)
          </h2>
          
          <h3 className="text-[#0c264d] font-semibold text-lg mb-3">Standard Category Card</h3>
          <ul className="list-disc ml-8 space-y-2">
            <li>Cyan border (<code className="bg-gray-100 px-2 py-1 rounded">border-2 border-[#2abcd4]</code>)</li>
            <li>White background</li>
            <li>Floating graphic/image (right on desktop)</li>
            <li>Brief paragraph blurb</li>
            <li>"Read more →" link to dedicated subpage</li>
          </ul>
        </section>

        {/* EMOJI POLICY */}
        <section className="mb-10">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2">
            EMOJI POLICY
          </h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <p className="font-semibold mb-2">DO NOT USE EMOJIS in content:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Emojis should not appear in article headings, body text, or content sections</li>
              <li>Maintain professional, academic tone throughout all pages</li>
              <li>Use clear, descriptive text instead of decorative emojis</li>
              <li>Exception: Emojis may appear in this standards document for visual organization only</li>
            </ul>
          </div>
        </section>

        {/* IMAGE STANDARDS */}
        <section className="mb-10">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2">
            IMAGE STANDARDS
          </h2>
          
          <h3 className="text-[#0c264d] font-semibold text-lg mb-3">Autism Symbol</h3>
          <div className="bg-[#ffd166] bg-opacity-20 border-l-4 border-[#ffd166] p-4 mb-4">
            <p><strong>ALWAYS use:</strong> Gold infinity symbol (&#8734;)</p>
            <p><strong>NEVER use:</strong> Puzzle piece (controversial in autistic community)</p>
          </div>
        </section>

        {/* CONTENT STRUCTURE */}
        <section className="mb-10">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2">
            CONTENT STRUCTURE
          </h2>
          
          <h3 className="text-[#0c264d] font-semibold text-lg mb-3">Standard 6 Categories for All Conditions</h3>
          <p className="mb-3">Every neurodivergent condition page must have these 6 categories:</p>
          <ol className="list-decimal ml-8 space-y-2">
            <li><strong>Overview</strong> - General introduction and definition</li>
            <li><strong>Symptoms</strong> - Signs and characteristics</li>
            <li><strong>Causes</strong> - Origins and risk factors</li>
            <li><strong>Diagnosis</strong> - Testing and evaluation</li>
            <li><strong>Treatment/Support</strong> - Interventions and management</li>
            <li><strong>Living/Research</strong> - Daily life and current research</li>
          </ol>
        </section>

        {/* NAVIGATION & ROUTING */}
        <section className="mb-10">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2">
            NAVIGATION & ROUTING
          </h2>
          
          <h3 className="text-[#0c264d] font-semibold text-lg mb-3">Article Slug Naming Convention</h3>
          <ul className="list-disc ml-8 space-y-2">
            <li>Main pages: <code className="bg-gray-100 px-2 py-1 rounded">'adhd'</code>, <code className="bg-gray-100 px-2 py-1 rounded">'dyslexia'</code>, <code className="bg-gray-100 px-2 py-1 rounded">'autism'</code></li>
            <li>Subpages: <code className="bg-gray-100 px-2 py-1 rounded">'adhd-symptoms'</code>, <code className="bg-gray-100 px-2 py-1 rounded">'dyslexia-causes'</code>, <code className="bg-gray-100 px-2 py-1 rounded">'autism-diagnosis'</code></li>
            <li>Always lowercase, hyphen-separated</li>
          </ul>
        </section>

        {/* RESPONSIVE DESIGN */}
        <section className="mb-10">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2">
            RESPONSIVE DESIGN
          </h2>
          
          <h3 className="text-[#0c264d] font-semibold text-lg mb-3">Breakpoints</h3>
          <ul className="list-disc ml-8 space-y-2">
            <li><strong>sm:</strong> 640px - 2 columns</li>
            <li><strong>md:</strong> 768px - 3 columns, show/hide patterns</li>
            <li><strong>lg:</strong> 1024px - 4 columns</li>
          </ul>
        </section>

        {/* CRITICAL RULES */}
        <section className="mb-10">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2">
            CRITICAL RULES
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="text-[#0c264d] font-semibold mb-3">Never Do:</h3>
              <ol className="list-decimal ml-6 space-y-2 text-sm">
                <li>Use old cyan <code className="bg-gray-100 px-1 rounded">#2abcd4</code> for active tab states (use <code className="bg-gray-100 px-1 rounded">#0A9DC4</code>)</li>
                <li>Forget <code className="bg-gray-100 px-1 rounded">text-sm</code> on tabs</li>
                <li>Over-cite content (only research mentions & statistics)</li>
                <li>Use puzzle piece for Autism (use gold infinity symbol)</li>
                <li>Add emojis in article content (maintain professional tone)</li>
                <li>Add font size/weight classes without user request</li>
                <li>Create files without checking this standard first</li>
              </ol>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-[#0c264d] font-semibold mb-3">Always Do:</h3>
              <ol className="list-decimal ml-6 space-y-2 text-sm">
                <li>Check this document before creating new components</li>
                <li>Use exact color hex codes (no variations)</li>
                <li>Include citation styling in articles</li>
                <li>Follow strict citation criteria</li>
                <li>Use responsive patterns for mobile/desktop</li>
                <li>Match existing tab patterns exactly</li>
              </ol>
            </div>
          </div>
        </section>

        {/* COMPLETED WORK LOG */}
        <section className="mb-10">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2">
            COMPLETED WORK LOG
          </h2>
          
          <h3 className="text-[#0c264d] font-semibold text-lg mb-3">Major Standardizations Completed:</h3>
          <ul className="space-y-2 ml-4">
            <li>All 27 neurodivergent condition pages updated with 6 core categories</li>
            <li>Strict citation criteria implemented across all pages</li>
            <li>Tabs implemented on all 6 Dyslexia subpages</li>
            <li>Tabs implemented on all 6 ADHD subpages (converted to beautiful Tabs component)</li>
            <li>Tabs implemented on all 6 Autism subpages</li>
            <li>"Read more →" buttons added to ADHD, Dyslexia, and Autism main pages</li>
            <li>Responsive layout implemented for ADHD, Dyslexia, and Autism subpages</li>
            <li>Updated all ADHD pages to use darker professional cyan (#0A9DC4)</li>
            <li>Standardized ALL tabs to use <code className="bg-gray-100 px-2 py-1 rounded">text-sm</code> (14px) across ADHD, Dyslexia, and Autism (Jan 15, 2026)</li>
          </ul>

          <h3 className="text-[#0c264d] font-semibold text-lg mb-3 mt-6">Current Status:</h3>
          <ul className="list-disc ml-8 space-y-2">
            <li><strong>Total Conditions:</strong> 27</li>
            <li><strong>Main Pages with 6 Categories:</strong> 27/27</li>
            <li><strong>Subpages with Tabs:</strong> ADHD (6/6), Dyslexia (6/6), Autism (6/6)</li>
            <li><strong>Citation System:</strong> Implemented with strict criteria</li>
            <li><strong>Design System:</strong> Fully standardized</li>
          </ul>
        </section>

        {/* WORKFLOW */}
        <section className="mb-10">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2">
            WORKFLOW FOR NEW FEATURES
          </h2>
          
          <p className="mb-3">When adding new components or pages:</p>
          <ol className="list-decimal ml-8 space-y-2">
            <li><strong>Check this document first</strong> - Does a pattern already exist?</li>
            <li><strong>Use existing patterns</strong> - Don't create new variations</li>
            <li><strong>Match exact colors</strong> - Use the hex codes listed</li>
            <li><strong>Follow tab standards</strong> - Use Pattern 1 or Pattern 2 exactly</li>
            <li><strong>Apply citation rules</strong> - Only cite research mentions & stats</li>
            <li><strong>Test responsiveness</strong> - Mobile → Tablet → Desktop</li>
            <li><strong>Update this document</strong> - If adding new standards</li>
          </ol>
        </section>

        {/* QUICK REFERENCE */}
        <section className="mb-10">
          <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2">
            QUICK REFERENCE
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded border border-gray-300">
              <h3 className="font-semibold mb-2 text-[#0c264d]">Tab Button (Active)</h3>
              <button className="bg-[#0A9DC4] text-white px-6 py-3 rounded-md text-sm w-full">
                Active Tab
              </button>
            </div>

            <div className="bg-gray-50 p-4 rounded border border-gray-300">
              <h3 className="font-semibold mb-2 text-[#0c264d]">Tab Button (Inactive)</h3>
              <button className="bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80 px-6 py-3 rounded-md text-sm w-full">
                Inactive Tab
              </button>
            </div>

            <div className="bg-gray-50 p-4 rounded border border-gray-300">
              <h3 className="font-semibold mb-2 text-[#0c264d]">Back Button</h3>
              <button className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap">
                <span className="text-xl">←</span>
                Back
              </button>
            </div>

            <div className="bg-gray-50 p-4 rounded border border-gray-300">
              <h3 className="font-semibold mb-2 text-[#0c264d]">Read More Link</h3>
              <button className="px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold">
                Read more →
              </button>
            </div>

            <div className="bg-gray-50 p-4 rounded border border-gray-300">
              <h3 className="font-semibold mb-2 text-[#0c264d]">Citation Superscript</h3>
              <p>Example text with citation<sup style={{color: '#10b981'}}>[1]</sup></p>
            </div>

            <div className="bg-gray-50 p-4 rounded border border-gray-300">
              <h3 className="font-semibold mb-2 text-[#0c264d]">Card Border</h3>
              <div className="bg-white p-4 rounded-md border-2 border-[#2abcd4]">
                Card content
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t-2 border-gray-300 pt-6 mt-10">
          <p className="text-center text-[#0c264d] font-semibold">End of Standards Document</p>
          <p className="text-center text-sm text-gray-600 mt-2">
            <em>This is a living document. Update it whenever new patterns are established or standards change.</em>
          </p>
        </div>

      </article>
    </div>
  );
}