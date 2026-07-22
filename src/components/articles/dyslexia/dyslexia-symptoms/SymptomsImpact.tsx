import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';

interface DyslexiaSymptomsImpactProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaSymptomsImpact({ setCurrentArticle }: DyslexiaSymptomsImpactProps) {
  return (
    <article className="max-w-full w-full">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          Dyslexia: Symptoms & Characteristics
        </h1>
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-lg">←</span>
          All About Dyslexia
        </button>
      </div>

      {/* Mobile Back Button */}
      <button 
        onClick={() => setCurrentArticle?.('dyslexia')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-lg">←</span>
        All About Dyslexia
      </button>
      
      <Tabs defaultValue="impact" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger 
            value="core" 
            onClick={() => setCurrentArticle?.('dyslexia-symptoms-core')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Core Characteristics
          </TabsTrigger>
          <TabsTrigger 
            value="strengths" 
            onClick={() => setCurrentArticle?.('dyslexia-symptoms-strengths')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Strengths
          </TabsTrigger>
          <TabsTrigger 
            value="impact" 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Impact
          </TabsTrigger>
        </TabsList>

        <TabsContent value="impact" className="animate-fadeIn">
          <p className="mb-8 text-slate-700 leading-relaxed">
            The impact of dyslexia extends beyond reading and spelling challenges. When unrecognized or unsupported, the condition can profoundly affect academic experiences, social interactions, and emotional well-being throughout the lifespan.<sup className="text-green-600 font-bold ml-0.5">1</sup>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-[#0c264d]">Academic & School Impact</h4>
              <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                <li><strong>Academic anxiety:</strong> Fear of being called on to read aloud or completing timed assignments.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
                <li><strong>Time constraints:</strong> Difficulty finishing tests or essays within typical timeframe requirements.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
                <li><strong>School refusal:</strong> Avoidance behaviors due to frustration or perceived lack of progress.</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-[#0c264d]">Social & Emotional Impact</h4>
              <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                <li><strong>Self-esteem:</strong> Struggle with academic performance may lead to negative self-perception.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
                <li><strong>Social interaction:</strong> Occasional difficulty with rapid-fire conversational responses or slang due to word retrieval challenges.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
                <li><strong>Stress and exhaustion:</strong> Significant cognitive energy spent on daily tasks often leads to mental fatigue.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 border-l-4 border-[#2abcd4] p-6 rounded-r-lg mb-8 shadow-sm">
            <h4 className="font-bold text-[#0c264d] mb-3">Long-term Implications</h4>
            <p className="text-sm text-slate-700">
              While these challenges are real, they are often exacerbated by the environment. With appropriate accommodations and a strengths-based approach, many individuals mitigate these impacts effectively.<sup className="text-green-600 font-bold ml-0.5">7</sup> Understanding the impact is the first step toward effective management and fostering resilience.
            </p>
          </div>

          <div className="flex justify-end my-8 clear-both">
            <button 
              onClick={() => setCurrentArticle?.('dyslexia')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
            >
              <span className="text-lg">←</span>
              All About Dyslexia
            </button>
          </div>

          {/* REFERENCES */}
          <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
          
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-3 border-b border-green-700 border-opacity-10 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
                <p>1. Grills-Taquechel, A. E., Fletcher, J. M., Vaughn, S. R., & Stuebing, K. K. (2012). "Anxiety and reading difficulties in early elementary school." <em>Child Psychiatry & Human Development</em>, 43(1), 35-47.</p>
                <p>2. Carroll, J. M., & Iles, J. E. (2006). "An assessment of anxiety levels in dyslexic students in higher education." <em>British Journal of Educational Psychology</em>, 76(3), 651-662.</p>
                <p>3. Lewandowski, L. J., et al. (2008). "Symptoms of ADHD and academic concerns in college students with and without ADHD diagnoses." <em>Journal of Attention Disorders</em>, 12(2), 156-161.</p>
                <p>4. Humphrey, N., & Mullins, P. M. (2002). "Self-concept and self-esteem in developmental dyslexia." <em>Journal of Research in Special Educational Needs</em>, 2(2).</p>
                <p>5. Boetsch, E. A., Green, P. A., & Pennington, B. F. (1996). "Psychosocial correlates of dyslexia across the life span." <em>Development and Psychopathology</em>, 8(3), 539-562.</p>
                <p>6. Meltzer, L. J. (2007). <em>Executive function in education: From theory to practice</em>. Guilford Press.</p>
                <p>7. Gerber, P. J. (2012). "The impact of learning disabilities on adulthood: A review." <em>Journal of Learning Disabilities</em>, 45(1), 31-46.</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}