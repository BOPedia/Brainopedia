import React from 'react';
import { BookOpen, List, Users, FileText, Lightbulb, Target } from 'lucide-react';

export function ArticleAbout() {
  return (
    <article className="bg-[#f8fafc] -m-8 p-4 sm:p-8 rounded-lg font-spartan text-[#0c264d]">
      <h1 className="pb-4 border-b-2 border-[#0c264d] mb-8 text-3xl font-bold">
        About Brainopedia
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
          <p className="leading-relaxed mb-6">
            Brainopedia is an innovative online encyclopedia dedicated to neurodivergent conditions. 
            The aim is to make learning about neurodivergence informative, respectful, and accessible to all.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Lightbulb className="text-[#ffd166]" />
              <p className="text-sm font-bold">Accessible, encyclopedia-style structure</p>
            </div>
            <div className="flex items-center gap-3">
              <Lightbulb className="text-[#ffd166]" />
              <p className="text-sm font-bold">Strengths-based perspective</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img 
            src="/images/home-brain-on-book.png" 
            alt="Brainopedia Concept"
            className="w-full max-w-sm rounded-lg shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Grid of Standard Cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#ffd700]">
          <FileText className="w-8 h-8 text-[#ffd700] mb-4" />
          <h3 className="font-bold text-lg mb-2">Detailed Volumes</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Each condition has its own comprehensive volume with directly referenced statistics and cited research studies.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#ffd166]">
          <BookOpen className="w-8 h-8 text-[#ffd166] mb-4" />
          <h3 className="font-bold text-lg mb-2">Comprehensive Info</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            In-depth coverage spanning symptoms, diagnostic processes, neurological foundations, and treatment approaches.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#2abcd4]">
          <List className="w-8 h-8 text-[#2abcd4] mb-4" />
          <h3 className="font-bold text-lg mb-2">Organized Categories</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Information organized by clear categories: Overview, Characteristics, Origins, Diagnosis, and Support.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#0c264d]">
          <Users className="w-8 h-8 text-[#0c264d] mb-4" />
          <h3 className="font-bold text-lg mb-2">Respectful & Accessible</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Content presented with respect, emphasizing strengths alongside challenges using clear, accessible language.
          </p>
        </div>
      </div>
    </article>
  );
}