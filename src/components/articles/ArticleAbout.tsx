import React from 'react';
import { BookOpen, List, Users, FileText, Target } from 'lucide-react';

export function ArticleAbout() {
  return (
    <article className="bg-[#f0f9ff] -m-8 p-4 sm:p-8 rounded-lg font-spartan text-[#0c264d]">
      <h1 className="pb-4 border-b-2 border-[#0c264d] mb-12 text-3xl font-bold">
        About Brainopedia
      </h1>

      {/* APPROACH SECTION: Flexbox allows text to naturally hug the smaller image */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl font-bold text-[#0c264d]">Our Approach</h2>
          <p className="leading-relaxed text-lg">
            Brainopedia is an innovative online encyclopedia dedicated to neurodivergent conditions. 
            The aim is to make learning about neurodivergence informative, respectful, and accessible to all.
          </p>
        </div>
        <div className="shrink-0 flex justify-center mt-4 md:mt-0">
          <img 
            src="/images/home-brain-on-book.png" 
            alt="Brainopedia Concept"
            className="w-48 md:w-56 h-auto rounded-2xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </section>

      {/* POP-OUT CARDS: Staggered colors with Dark Gold */}
      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#2abcd4]">
          <FileText className="w-8 h-8 text-[#2abcd4] mb-4" />
          <h3 className="font-bold text-[#2abcd4] text-lg mb-2">Detailed Volumes</h3>
          <p className="text-sm text-gray-600">Referenced statistics and cited research throughout.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#b8860b]">
          <BookOpen className="w-8 h-8 text-[#b8860b] mb-4" />
          <h3 className="font-bold text-[#b8860b] text-lg mb-2">Comprehensive Info</h3>
          <p className="text-sm text-gray-600">Coverage spanning symptoms, diagnosis, and treatment.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#ffd166]">
          <List className="w-8 h-8 text-[#ffd166] mb-4" />
          <h3 className="font-bold text-[#ffd166] text-lg mb-2">Organized Categories</h3>
          <p className="text-sm text-gray-600">Six main topics organized by clear categories.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#ffd700]">
          <Users className="w-8 h-8 text-[#ffd700] mb-4" />
          <h3 className="font-bold text-[#ffd700] text-lg mb-2">Respectful & Accessible</h3>
          <p className="text-sm text-gray-600">Emphasizing strengths alongside challenges.</p>
        </div>
      </div>

      {/* PORTRAIT VIDEO */}
      <div className="w-full flex justify-center mb-16 pt-4">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-[360px] aspect-[9/16] object-cover rounded-2xl shadow-md border-2 border-[#b8860b] border-opacity-20"
        >
          <source src="/images/photo-reel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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