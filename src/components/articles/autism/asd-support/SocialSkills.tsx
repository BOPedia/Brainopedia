import React from 'react';

export function SocialSkills({ setCurrentArticle }: { setCurrentArticle?: (article: string) => void }) {
  return (
    <div className="animate-fadeIn">
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6">
        <h1 className="text-[#0c264d] text-3xl font-bold">Social Connection & Navigation</h1>
      </div>

      <div className="mb-8">
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          Support in this area focuses on social navigation, building meaningful relationships, 
          and understanding social nuances in a way that respects the individual's autonomy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
          <h3 className="font-bold text-[#0c264d] mb-3">Support Strategies</h3>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>• <strong>Social Stories & Scripts:</strong> Tools for preparing for specific social interactions.</li>
            <li>• <strong>Peer-Mediated Support:</strong> Inclusive settings that foster natural connection.</li>
            <li>• <strong>Double Empathy Training:</strong> Helping both neurodivergent and neurotypical people understand each other.</li>
          </ul>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-3">Identity & Advocacy</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Support should prioritize the individual's comfort and self-advocacy skills, 
            ensuring they have the tools to communicate their boundaries in social settings.
          </p>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t-2 border-gray-200">
        <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Section References</h3>
        <ul className="list-none space-y-2 text-sm text-gray-600">
          <li>• Milton, D. E. (2012). The ‘double empathy problem’.</li>
          <li>• Reichow, B., et al. (2012). Social skills groups meta-analysis.</li>
        </ul>
      </div>
    </div>
  );
}