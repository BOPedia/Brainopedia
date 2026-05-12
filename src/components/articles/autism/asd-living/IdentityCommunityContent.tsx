import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

/* ─── THE GUEST LIST (Interface) ─── */
interface IdentityCommunityContentProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function IdentityCommunityContent({ setCurrentArticle }: IdentityCommunityContentProps) {
  return (
    <div className="animate-fadeIn">
      <section className="mb-10">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b border-[#ffd166] pb-2 inline-block">
          Identity & Community
        </h2>

        <div className="space-y-8">
          {/* Identity Development Section */}
          <div>
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Journey of Identity</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Understanding oneself as autistic is often a lifelong process of reframing experiences through a neuro-affirming lens:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Late Diagnosis:</strong> For many adults, a diagnosis provides a "missing piece," replacing years of self-criticism with self-understanding.<sup>1</sup></li>
              <li><strong>Moving Beyond Shame:</strong> Shifting from a "disorder" mindset to seeing autism as a natural neurological variation.</li>
              <li><strong>Disclosure:</strong> Navigating when and how to share one's autistic identity with employers, friends, or the public.</li>
            </ul>
          </div>
     {/* --- CENTERED GRAPHIC SECTION --- */} 
        <div className="text-center w-full mb-8"> 
        <p className="text-[#0c264d] mb-4 italic"> 
        </p> 

        {/* The Wrapper: Centers the image and restricts its width */} 
        <div className="mx-auto w-48 md:w-64"> 
        <ImageWithFallback src="/images/autism/autism-living-ICtab-pastel-brain-infinity.png" alt="Brain with infinity symbol representing all neurodiversity"
        /> 
        </div> 
        </div>

          {/* Neurodiversity Movement Section */}
          <div className="bg-[#0c264d] text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-[#ffd166] font-bold mb-3 text-lg text-center uppercase tracking-wider">
              The Neurodiversity Perspective
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-center italic">
              "Autism is not a tragedy. The tragedy is the way society treats us."
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4">
              <li className="flex items-start gap-2">
                <span className="text-[#ffd166]">✓</span>
                <span>Focus on <strong>acceptance</strong> over "cures."</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ffd166]">✓</span>
                <span>Celebrating autistic communication styles.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ffd166]">✓</span>
                <span>Challenging deficit-based narratives in medicine.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ffd166]">✓</span>
                <span><strong>Nothing About Us Without Us:</strong> Centering autistic voices.<sup>2</sup></span>
              </li>
            </ul>
          </div>

          {/* Culture & Rights Section */}
          <div>
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Autistic Culture & Rights</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              A vibrant culture has emerged, characterized by shared communication styles, humor, and a focus on self-advocacy:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Community Spaces:</strong> Online forums and local meetups where "autistic-to-autistic" communication flourishes.</li>
              <li><strong>Legal Rights:</strong> Leveraging the ADA (Americans with Disabilities Act) and other protections to ensure equal access.</li>
              <li><strong>Self-Advocacy:</strong> Learning to speak up for specific sensory or cognitive needs in public and private spaces.<sup>3</sup></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />

      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
            <li>
              Singer, J. (2017). <i>NeuroDiversity: The Birth of an Idea</i>. Published independently.
            </li>
            <li>
              Kapp, S. K. (Ed.). (2020). <i>Autistic Community and the Neurodiversity Movement: Stories from the Frontline</i>. Palgrave Macmillan.
            </li>
            <li>
              Botha, M., Dibb, B., & Frost, D. M. (2020). "'Autism is me': an investigation of how autistic individuals make sense of autism and stigma." <i>Disability & Society</i>, 37(3), 427-453.
            </li>
          </ol>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed pl-2">
            <li>
              American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}