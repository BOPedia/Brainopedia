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
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">
            Identity & Community
          </h2>

          {/* Grid for the two main cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-8">
            
            {/* Identity Development Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">The Journey of Identity</h3>
              </div>
              
              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-ICtab-acceptance.webp" 
                    alt="Brain with infinity symbol representing all neurodiversity"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Understanding oneself as autistic is often a lifelong process of reframing experiences through a neuro-affirming lens:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
                <li><strong>Late Diagnosis:</strong> For many adults, a diagnosis provides a "missing piece," replacing years of self-criticism with self-understanding.<sup className="text-green-600 font-bold ml-0.5">1</sup></li>
                <li><strong>Moving Beyond Shame:</strong> Shifting from a "disorder" mindset to seeing autism as a natural neurological variation.</li>
                <li><strong>Disclosure:</strong> Navigating when and how to share one's autistic identity with employers, friends, or the public.</li>
              </ul>
            </div>

            {/* Culture & Rights Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Autistic Culture & Rights</h3>
              </div>
              
              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <video 
                    src="/images/autism/autism-living-ICtab-legal-rights-autism.mp4" 
                    poster="/images/autism/autism-living-ICtab-legal-rights-autism.webp"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-auto block"
                    aria-label="Scales representing legal rights for autism"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                A vibrant culture has emerged, characterized by shared communication styles, humor, and a focus on self-advocacy:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
                <li><strong>Community Spaces:</strong> Online forums and local meetups where "autistic-to-autistic" communication flourishes.</li>
                <li><strong>Legal Rights:</strong> Leveraging the ADA (Americans with Disabilities Act) and other protections to ensure equal access.</li>
                <li><strong>Self-Advocacy:</strong> Learning to speak up for specific sensory or cognitive needs in public and private spaces.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
              </ul>
            </div>
            
          </div>

          {/* Neurodiversity Movement Section (Full Width Banner) */}
          <div className="bg-[#0c264d] text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-[#ffd166] font-bold mb-3 text-lg text-center uppercase tracking-wider">
              The Neurodiversity Perspective
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-center italic">
              "Autism is not a tragedy. The tragedy is the way society treats us."
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4 max-w-3xl mx-auto">
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
                <span><strong>Nothing About Us Without Us:</strong> Centering autistic voices.<sup className="text-green-600 font-bold ml-0.5">2</sup></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />

      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Singer, J. (2017). <i>NeuroDiversity: The Birth of an Idea</i>. Published independently. https://www.amazon.com/NeuroDiversity-Birth-Idea-Judy-Singer/dp/064815470X</p>
            <p>2. Kapp, S. K. (Ed.). (2020). <i>Autistic Community and the Neurodiversity Movement: Stories from the Frontline</i>. Palgrave Macmillan. https://doi.org/10.1007/978-981-13-8437-0</p>
            <p>3. Botha, M., et al. (2020). "'Autism is me': an investigation of how autistic individuals make sense of autism and stigma." <i>Disability & Society</i>. https://doi.org/10.1080/09687599.2020.1822782</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing. https://doi.org/10.1176/appi.books.9780890425787</p>
          </div>
        </div>
      </div>
    </div>
  );
}