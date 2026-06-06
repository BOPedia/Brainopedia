import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useState } from 'react';

interface DyslexiaSupportProps {
  setCurrentArticle: (articleId: string) => void;
}

export function DyslexiaSupport({ setCurrentArticle }: DyslexiaSupportProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-6 mb-6">
      <h2 className="text-3xl font-bold mb-4 text-[#0c264d]">Support & Resources</h2>
      
      <div className="prose max-w-none">
        <p className="mb-4">
          Comprehensive support for individuals with dyslexia involves collaboration between educators, specialists, families, and the individual themselves. With appropriate interventions and accommodations, people with dyslexia can thrive academically and professionally.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d]">Educational Support</h3>
        
        <h4 className="text-xl font-bold mt-4 mb-2 text-[#0c264d]">Individualized Education Programs (IEPs)</h4>
        <p className="mb-4">
          Students with dyslexia may qualify for an IEP under the Individuals with Disabilities Education Act (IDEA), which provides:
        </p>
        
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>Specialized reading instruction tailored to individual needs</li>
          <li>Specific learning goals and objectives</li>
          <li>Progress monitoring and regular evaluations</li>
          <li>Accommodations and modifications in the classroom</li>
        </ul>

        <h4 className="text-xl font-bold mt-4 mb-2 text-[#0c264d]">504 Plans</h4>
        <p className="mb-4">
          Students who don't qualify for an IEP may receive accommodations through a 504 Plan, which can include:
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <ul className="list-disc ml-6 space-y-2">
            <li>Extended time on tests and assignments</li>
            <li>Audiobooks and text-to-speech software</li>
            <li>Note-taking support or access to class notes</li>
            <li>Reduced reading load or alternative assignments</li>
            <li>Preferential seating near the teacher</li>
            <li>Use of spell-checkers and grammar tools</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d]">Evidence-Based Interventions</h3>
        
        <h4 className="text-xl font-bold mt-4 mb-2 text-[#0c264d]">Structured Literacy Programs</h4>
        <p className="mb-4">
          Effective programs for dyslexia typically follow structured literacy approaches:
        </p>
        
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li><strong>Orton-Gillingham:</strong> Multi-sensory, phonics-based approach</li>
          <li><strong>Wilson Reading System:</strong> Structured program for severe dyslexia</li>
          <li><strong>Lindamood-Bell:</strong> Focus on phonemic awareness and visualization</li>
          <li><strong>Barton Reading & Spelling System:</strong> Parent-taught tutoring program</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d]">Technology & Assistive Tools</h3>
        <p className="mb-4">
          Technology can significantly support individuals with dyslexia:
        </p>

        <div className="bg-blue-50 border-l-4 border-[#2abcd4] p-4 mb-4">
          <h4 className="font-bold mb-2 text-[#0c264d]">Helpful Technologies:</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Text-to-Speech:</strong> Natural Reader, Voice Dream Reader, built-in screen readers</li>
            <li><strong>Speech-to-Text:</strong> Dragon NaturallySpeaking, Google Voice Typing</li>
            <li><strong>Reading Apps:</strong> Learning Ally, Bookshare, Audible</li>
            <li><strong>Writing Support:</strong> Grammarly, Ginger Software, Co:Writer</li>
            <li><strong>Organization Tools:</strong> Evernote, OneNote, MindMeister</li>
            <li><strong>Dyslexia-Friendly Fonts:</strong> OpenDyslexic, Dyslexie Font</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d]">Support for Families</h3>
        
        <h4 className="text-xl font-bold mt-4 mb-2 text-[#0c264d]">At-Home Strategies</h4>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>Read aloud together daily</li>
          <li>Focus on comprehension rather than perfect reading</li>
          <li>Celebrate effort and progress, not just outcomes</li>
          <li>Provide audiobooks alongside print books</li>
          <li>Use multi-sensory learning activities</li>
          <li>Maintain open communication with teachers</li>
        </ul>

        <h4 className="text-xl font-bold mt-4 mb-2 text-[#0c264d]">Emotional Support</h4>
        <p className="mb-4">
          It's essential to address the emotional impact of dyslexia:
        </p>
        
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>Build self-esteem by emphasizing strengths</li>
          <li>Connect with support groups and mentors</li>
          <li>Educate siblings and extended family about dyslexia</li>
          <li>Consider counseling if anxiety or depression develops</li>
          <li>Share success stories of famous people with dyslexia</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d]">Organizations & Resources</h3>
        
        <div className="bg-yellow-50 border-l-4 border-[#ffd166] p-4 mb-4">
          <h4 className="font-bold mb-2 text-[#0c264d]">Key Organizations:</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>International Dyslexia Association (IDA):</strong> Research, advocacy, and resources</li>
            <li><strong>Understood.org:</strong> Comprehensive support for learning differences</li>
            <li><strong>Learning Ally:</strong> Audiobook library for students with dyslexia</li>
            <li><strong>Bookshare:</strong> Accessible books for individuals with reading barriers</li>
            <li><strong>Decoding Dyslexia:</strong> State-level grassroots advocacy groups</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d]">Workplace Accommodations</h3>
        <p className="mb-4">
          Adults with dyslexia are protected under the Americans with Disabilities Act (ADA) and may receive:
        </p>
        
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>Assistive technology for reading and writing</li>
          <li>Additional time for reading-heavy tasks</li>
          <li>Written instructions in addition to verbal</li>
          <li>Recording meetings or presentations</li>
          <li>Modified training materials</li>
        </ul>

        <div className="bg-green-50 border-l-4 border-[#10b981] p-4 mt-6">
          <p className="font-semibold text-[#0c264d]">
            Remember: With proper support and accommodations, individuals with dyslexia can excel in any field. Many successful entrepreneurs, artists, scientists, and professionals have dyslexia and credit it with giving them unique perspectives and problem-solving abilities.
          </p>
        </div>
      </div>
    </div>
  );
}
