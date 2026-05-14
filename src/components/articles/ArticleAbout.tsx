import React from 'react';
import { BookOpen, List, Users, FileText, Lightbulb } from 'lucide-react';

export function ArticleAbout() {
  return (
    /* The -m-8 and p-8 ensures the blue background fills the entire content area */
    <article className="bg-[#f0f9ff] -m-8 p-4 sm:p-8 rounded-lg font-spartan text-[#0c264d]">
      <h1 className="pb-4 border-b-2 border-[#0c264d] mb-8 text-3xl font-bold">
        About Brainopedia
      </h1>

      {/* Top Section: Approach */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
          <p className="leading-relaxed mb-6 text-lg">
            Brainopedia is an innovative online encyclopedia dedicated to neurodivergent conditions. 
            The aim is to make learning about neurodivergence informative, respectful, and accessible to all.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#ffd166] p-2 rounded-full">
                <Lightbulb className="w-5 h-5 text-[#0c264d]" />
              </div>
              <p className="font-bold">Accessible, encyclopedia-style structure</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#ffd166] p-2 rounded-full">
                <Lightbulb className="w-5 h-5 text-[#0c264d]" />
              </div>
              <p className="font-bold">Strengths-based perspective</p>
            </div>
          </div>
        </div>

        {/* The Brain on Book Graphic - STRICTLY max-w-lg now */}
        <div className="flex justify-center">
          <img 
            src="/images/home-brain-on-book.png" 
            alt="Brainopedia Concept"
            className="w-full max-w-lg rounded-lg shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Grid of White Cards - They will pop against the #f0f9ff blue background */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#ffd700] hover:shadow-md transition-shadow">
          <FileText className="w-8 h-8 text-[#ffd700] mb-4" />
          <h3 className="font-bold text-lg mb-2">Detailed Volumes</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Each condition has its own comprehensive volume with directly referenced statistics and cited research studies.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#ffd166] hover:shadow-md transition-shadow">
          <BookOpen className="w-8 h-8 text-[#ffd166] mb-4" />
          <h3 className="font-bold text-lg mb-2">Comprehensive Info</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            In-depth coverage spanning symptoms, diagnostic processes, neurological foundations, and treatment approaches.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#2abcd4] hover:shadow-md transition-shadow">
          <List className="w-8 h-8 text-[#2abcd4] mb-4" />
          <h3 className="font-bold text-lg mb-2">Organized Categories</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Information organized by clear categories: Overview, Characteristics, Origins, Diagnosis, and Support.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#0c264d] hover:shadow-md transition-shadow">
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