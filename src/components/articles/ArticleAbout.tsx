import React from 'react';
import { BookOpen, List, Users, FileText, Target } from 'lucide-react';
// IMPORT LOGIC: This assumes you created src/assets/ and put the mp4 there
import photoReel from '../../assets/photo-reel.mp4';

export function ArticleAbout() {
  return (
    <article className="bg-[#f0f9ff] -m-8 p-4 sm:p-8 rounded-lg font-spartan text-[#0c264d]">
      <h1 className="pb-4 border-b-2 border-[#0c264d] mb-12 text-3xl font-bold">
        About Brainopedia
      </h1>

      {/* APPROACH SECTION: Equal 50/50 Grid to eliminate white gaps */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#0c264d]">Our Approach</h2>
          <p className="leading-relaxed text-lg">
            Brainopedia is an innovative online encyclopedia dedicated to neurodivergent conditions. 
            The aim is to make learning about neurodivergence informative, respectful, and accessible to all.
          </p>
        </div>
        <div className="flex justify-center">
          <img 
            src="/images/home-brain-on-book.png" 
            alt="Brainopedia Concept"
            className="w-80 md:w-96 h-auto rounded-2xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </section>

      {/* POP-OUT CARDS: Staggered colors to keep yellows apart and replaced Navy with Dark Gold */}
      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        {/* Card 1: Cyan */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#2abcd4]">
          <FileText className="w-8 h-8 text-[#2abcd4] mb-4" />
          <h3 className="font-bold text-[#2abcd4] text-lg mb-2">Detailed Volumes</h3>
          <p className="text-sm text-gray-600">Referenced statistics and cited research throughout.</p>
        </div>

        {/* Card 2: Dark Gold (Replaced Navy) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#b8860b]">
          <BookOpen className="w-8 h-8 text-[#b8860b] mb-4" />
          <h3 className="font-bold text-[#b8860b] text-lg mb-2">Comprehensive Info</h3>
          <p className="text-sm text-gray-600">Coverage spanning symptoms, diagnosis, and treatment.</p>
        </div>

        {/* Card 3: Muted Gold */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#ffd166]">
          <List className="w-8 h-8 text-[#ffd166] mb-4" />
          <h3 className="font-bold text-[#ffd166] text-lg mb-2">Organized Categories</h3>
          <p className="text-sm text-gray-600">Six main topics organized by clear categories.</p>
        </div>

        {/* Card 4: Standard Gold */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#ffd700]">
          <Users className="w-8 h-8 text-[#ffd700] mb-4" />
          <h3 className="font-bold text-[#ffd700] text-lg mb-2">Respectful & Accessible</h3>
          <p className="text-sm text-gray-600">Emphasizing strengths alongside challenges.</p>
        </div>
      </div>

      {/* PORTRAIT VIDEO: Imported from assets for bulletproof rendering */}
      <div className="w-full flex justify-center mb-16 pt-4">
        <video
          src="/images/photo-reel.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-[360px] aspect-[9/16] object-cover rounded-2xl shadow-md border-2 border-[#b8860b] border-opacity-20"
        />
      </div>

      {/* MISSION SECTION */}
      <section className="py-12 border-t border-blue-200 text-center">
        <div className="max-w-3xl mx-auto">
          <Target className="w-10 h-10 text-[#2abcd4] mx-auto mb-4" />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl uppercase tracking-widest">Our Mission</h2>
          <p className="text-base leading-relaxed text-[#0c264d] italic">
            "To provide comprehensive, accessible, and respectful information about neurodivergent experiences, fostering understanding through well-organized, research-informed content."
          </p>
        </div>
      </section>
    </article>
  );
}