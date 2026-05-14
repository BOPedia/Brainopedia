import React from 'react';
import { BookOpen, List, Users, FileText, Target } from 'lucide-react';

export function ArticleAbout() {
  return (
    <article className="bg-[#f0f9ff] -m-8 p-4 sm:p-8 rounded-lg font-spartan text-[#0c264d]">
      <h1 className="pb-4 border-b-2 border-[#0c264d] mb-8 text-3xl font-bold">
        About Brainopedia
      </h1>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
          <p className="leading-relaxed mb-6 text-lg">
            Brainopedia is an innovative online encyclopedia dedicated to neurodivergent conditions. 
            The aim is to make learning about neurodivergence informative, respectful, and accessible to all.
          </p>
        </div>
        <div className="flex justify-center">
          <img 
            src="/images/home-brain-on-book.png" 
            alt="Brainopedia Concept"
            className="w-full max-w-lg rounded-2xl shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Pop-out White Cards */}
      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#ffd700]">
          <FileText className="w-8 h-8 text-[#ffd700] mb-4" />
          <h3 className="font-bold text-lg mb-2">Detailed Volumes</h3>
          <p className="text-sm text-gray-600">Referenced statistics and cited research throughout.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#ffd166]">
          <BookOpen className="w-8 h-8 text-[#ffd166] mb-4" />
          <h3 className="font-bold text-lg mb-2">Comprehensive Info</h3>
          <p className="text-sm text-gray-600">Coverage spanning symptoms, diagnosis, and treatment.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#2abcd4]">
          <List className="w-8 h-8 text-[#2abcd4] mb-4" />
          <h3 className="font-bold text-lg mb-2">Organized Categories</h3>
          <p className="text-sm text-gray-600">Six main topics organized by clear categories.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#0c264d]">
          <Users className="w-8 h-8 text-[#0c264d] mb-4" />
          <h3 className="font-bold text-lg mb-2">Respectful & Accessible</h3>
          <p className="text-sm text-gray-600">Emphasizing strengths alongside challenges.</p>
        </div>
      </div>

      {/* Mission Footer Section */}
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