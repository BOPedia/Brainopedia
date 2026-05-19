import React from 'react';
import { ImageWithFallback } from "../../../figma/ImageWithFallback";

interface OverviewContentProps {
  setCurrentArticle?: (article: string) => void;
}

export function OverviewContent({ setCurrentArticle }: OverviewContentProps) {
  return (
    <>
      {/* Introduction */}
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support Philosophy & Approach</h2>
        
        <p className="mb-4">
          Support for autistic individuals should be individualized, strengths-based, and centered on improving 
          quality of life rather than simply reducing autistic traits.<sup className="text-green-600 font-bold ml-0.5">1</sup> The goal is to help autistic 
          people thrive as themselves, not to make them "indistinguishable from their peers."<sup className="text-green-600 font-bold ml-0.5">1</sup> Effective 
          support respects neurodiversity while providing accommodations and skills to navigate a neurotypical world.
        </p>
   
      {/* --- CENTERED GRAPHIC SECTION 1 --- */} 
      <div className="text-center w-full mb-8"> 
        <p className="text-[#0c264d] mb-4 italic"></p> 
        {/* The Wrapper: Centers the image and restricts its width */} 
        <div className="mx-auto w-48 md:w-64"> 
          <ImageWithFallback 
            src="/images/autism/autism-support-Overvtab-philosph.png" 
            alt="abstract painting of philosophy and support"
          /> 
        </div> 
      </div>
      
        <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mb-4">
          <h3 className="text-[#0c264d] font-bold mb-3">Core Support Principles:</h3>
          <ul className="text-sm space-y-2">
            <li>✓ <strong>Presume competence:</strong> Assume understanding and potential even when not obvious<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
            <li>✓ <strong>Respect autonomy:</strong> Support choice-making and self-determination<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
            <li>✓ <strong>Focus on quality of life:</strong> Not just skill acquisition or behavior reduction</li>
            <li>✓ <strong>Build on strengths and interests:</strong> Leverage special interests for learning and engagement</li>
            <li>✓ <strong>Accept autistic ways of being:</strong> Don't target harmless behaviors like stimming</li>
            <li>✓ <strong>Listen to autistic voices:</strong> Center autistic perspectives in decisions<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
            <li>✓ <strong>Teach to the individual:</strong> One size does not fit all</li>
            <li>✓ <strong>Support communication:</strong> Provide access to communication methods that work</li>
            <li>✓ <strong>Create sensory-friendly environments:</strong> Reduce barriers rather than expecting constant adaptation</li>
            <li>✓ <strong>Promote inclusion:</strong> Support participation in community life<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
          </ul>
        </div>
      </div>
      
      {/* Unsupported Treatments */}
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Unsupported and Harmful "Treatments" to Avoid</h2>
        
        <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-4">
          <h3 className="text-center text-[#0c264d] font-bold mb-4">Treatments Lacking Evidence or Potentially Harmful</h3>
          <div className="text-sm space-y-3">
            <p><strong>Bleach/"MMS" protocols:</strong> Extremely dangerous; can cause serious harm or death<sup className="text-green-600 font-bold ml-0.5">5</sup></p>
            <p><strong>Chelation therapy:</strong> Not supported by evidence; has caused deaths<sup className="text-green-600 font-bold ml-0.5">6</sup></p>
            <p><strong>Hyperbaric oxygen chambers:</strong> Little evidence to prove effectiveness<sup className="text-green-600 font-bold ml-0.5">7</sup></p>
            <p><strong>Secretin:</strong> Thoroughly debunked<sup className="text-green-600 font-bold ml-0.5">8</sup></p>
            <p><strong>Facilitated communication/RPM:</strong> Discredited; shown to reflect facilitator's thoughts, not autistic person's<sup className="text-green-600 font-bold ml-0.5">9</sup></p>
            <p><strong>Conversion/compliance-focused interventions:</strong> Harmful to mental health and self-esteem<sup className="text-green-600 font-bold ml-0.5">10</sup></p>
            <p><strong>Restrictive diets without medical indication:</strong> Limited evidence; may cause nutritional deficiencies<sup className="text-green-600 font-bold ml-0.5">11</sup></p>
          </div>
        </div>

        <p className="mb-4">
          Always consult with qualified medical professionals and be skeptical of "miracle cures" or treatments 
          promising to eliminate autism.<sup className="text-green-600 font-bold ml-0.5">12</sup>
        </p>

    
      {/* --- CENTERED GRAPHIC SECTION 1 --- */} 
      <div className="text-center w-full mb-8"> 
        <p className="text-[#0c264d] mb-4 italic"></p> 
        {/* The Wrapper: Centers the image and restricts its width */} 
        <div className="mx-auto w-48 md:w-64"> 
          <ImageWithFallback 
            src="/images/autism/autism-support-Overvtab-harmful.png" 
            alt="doctor explaining approaches photo"
          /> 
        </div> 
      </div>
             
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
      
      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
            <li>
              Leadbitter, K., Buckle, K. L., Ellis, C., & Dekker, M. (2021). "Autistic Self-Advocacy and the Neurodiversity Movement: Implications for Autism Early Intervention and Research." <i>Frontiers in Psychology</i>, 12, 635690.
            </li>
            <li>
              Biklen, D., & Burke, J. (2006). "Presuming Competence." <i>Equity & Excellence in Education</i>, 39(2), 166-175.
            </li>
            <li>
              Wehmeyer, M. L., et al. (2010). "Self-Determination and Individuals with Severe Disabilities: Re-evaluating Meanings and Misinterpretations." <i>Research and Practice for Persons with Severe Disabilities</i>, 35(1-2).
            </li>
            <li>
              Fletcher-Watson, S., et al. (2019). "Making the future together: Shaping autism research through meaningful participation." <i>Autism</i>, 23(4), 943-953.
            </li>
            <li>
              U.S. Food and Drug Administration. (2019). "FDA warns consumers about the dangerous and potentially life threatening side effects of Miracle Mineral Solution." <i>FDA Safety Alert</i>.
            </li>
            <li>
              James, S., et al. (2015). "Chelation for autism spectrum disorder (ASD)." <i>Cochrane Database of Systematic Reviews</i>, (5).
            </li>
            <li>
              Xiong, T., et al. (2016). "Hyperbaric oxygen therapy for people with autism spectrum disorder (ASD)." <i>Cochrane Database of Systematic Reviews</i>, (10).
            </li>
            <li>
              Williams, K., et al. (2012). "Intravenous secretin for autism spectrum disorder (ASD)." <i>Cochrane Database of Systematic Reviews</i>, (4).
            </li>
            <li>
              Hemsley, B., et al. (2018). "Systematic review of facilitated communication 2014-2018 finds no new evidence that messages delivered using facilitated communication are authored by the person with disability." <i>Autism & Developmental Language Impairments</i>, 3.
            </li>
            <li>
              Kupferstein, H. (2018). "Evidence of increased PTSD symptoms in autistics exposed to applied behavior analysis." <i>Advances in Autism</i>, 4(1), 19-29.
            </li>
            <li>
              Piwowarczyk, A., et al. (2018). "Gluten- and casein-free diet and autism spectrum disorders in children: a systematic review." <i>European Journal of Nutrition</i>, 57(2), 433-440.
            </li>
            <li>
              Levy, S. E., & Hyman, S. L. (2015). "Complementary and Alternative Medicine Treatments for Children with Autism Spectrum Disorders." <i>Child and Adolescent Psychiatric Clinics of North America</i>, 24(1), 117-143.
            </li>
          </ol>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN (No Indentation) */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
            <li>
              Autistic Self Advocacy Network (ASAN). "Position Statements on Support and Treatments."
            </li>
            <li>
              AANE (Asperger/Autism Network). "Navigating Autism Therapies and Interventions."
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}