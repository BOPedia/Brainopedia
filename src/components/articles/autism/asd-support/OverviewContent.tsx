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
            src="/images/autism/autism-support-Overvtab-philosph.webp" 
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
            src="/images/autism/autism-support-Overvtab-harmful.webp" 
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
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Leadbitter, K., et al. (2021). "Autistic Self-Advocacy and the Neurodiversity Movement: Implications for Autism Early Intervention Research and Practice." <i>Frontiers in Psychology</i>. https://doi.org/10.3389/fpsyg.2021.635690</p>
            <p>2. Biklen, D., & Burke, J. (2006). "Presuming Competence." <i>Equity & Excellence in Education</i>. https://doi.org/10.1080/10665680600592536</p>
            <p>3. Wehmeyer, M. L., et al. (2010). "Self-Determination and Individuals with Severe Disabilities: Re-evaluating Meanings and Misinterpretations." <i>Research and Practice for Persons with Severe Disabilities</i>. https://doi.org/10.2511/rpsd.35.1-2.29</p>
            <p>4. Fletcher-Watson, S., et al. (2019). "Making the future together: Shaping autism research through meaningful participation." <i>Autism</i>. https://doi.org/10.1177/1362361318786721</p>
            <p>5. U.S. Food and Drug Administration. (2019). "FDA warns consumers about the dangerous and potentially life threatening side effects of Miracle Mineral Solution." <i>FDA Safety Alert</i>. https://www.fda.gov/news-events/press-announcements/fda-warns-consumers-about-dangerous-and-potentially-life-threatening-side-effects-miracle-mineral</p>
            <p>6. James, S., et al. (2015). "Chelation for autism spectrum disorder (ASD)." <i>Cochrane Database of Systematic Reviews</i>. https://doi.org/10.1002/14651858.CD005398.pub3</p>
            <p>7. Xiong, T., et al. (2016). "Hyperbaric oxygen therapy for people with autism spectrum disorder (ASD)." <i>Cochrane Database of Systematic Reviews</i>. https://doi.org/10.1002/14651858.CD010922.pub2</p>
            <p>8. Williams, K., et al. (2012). "Intravenous secretin for autism spectrum disorder (ASD)." <i>Cochrane Database of Systematic Reviews</i>. https://doi.org/10.1002/14651858.CD003495.pub3</p>
            <p>9. Hemsley, B., et al. (2018). "Systematic review of facilitated communication 2014-2018 finds no new evidence that messages delivered using facilitated communication are authored by the person with disability." <i>Autism & Developmental Language Impairments</i>. https://doi.org/10.1177/2396941518821570</p>
            <p>10. Kupferstein, H. (2018). "Evidence of increased PTSD symptoms in autistics exposed to applied behavior analysis." <i>Advances in Autism</i>. https://doi.org/10.1108/AIA-08-2017-0016</p>
            <p>11. Piwowarczyk, A., et al. (2018). "Gluten- and casein-free diet and autism spectrum disorders in children: a systematic review." <i>European Journal of Nutrition</i>. https://doi.org/10.1007/s00394-017-1483-2</p>
            <p>12. Levy, S. E., & Hyman, S. L. (2015). "Complementary and Alternative Medicine Treatments for Children with Autism Spectrum Disorders." <i>Child and Adolescent Psychiatric Clinics of North America</i>. https://doi.org/10.1016/j.chc.2014.09.004</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Autistic Self Advocacy Network (ASAN). "Position Statements on Support and Treatments." https://autisticadvocacy.org/policy/briefs/interventions/</p>
            <p>AANE (Asperger/Autism Network). "Navigating Autism Therapies and Interventions." https://www.aane.org/resources/therapies-interventions/</p>
          </div>
        </div>
      </div>
    </>
  );
}