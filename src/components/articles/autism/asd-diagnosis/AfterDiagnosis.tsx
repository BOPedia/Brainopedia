import { ImageWithFallback } from "../../../figma/ImageWithFallback";

/* ─── THE GUEST LIST (Interface) ─── */
interface AfterDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function AfterDiagnosis({ setCurrentArticle }: AfterDiagnosisProps) {
  return (
    <div className="bg-[#f0f9ff] p-6 rounded-lg">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">After Receiving a Diagnosis</h2>
      
      <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
        <p className="text-sm">
          <strong>Important:</strong> A diagnosis is a beginning, not an ending. It's a doorway 
          to understanding, support, community, and self-advocacy.
        </p>
      </div>
      
      <p className="mb-6">
        Receiving an autism diagnosis can bring a mix of emotions—relief, grief, confusion, hope, or all of the above. 
        Whatever you're feeling is valid. Here's what typically comes next:
      </p>

      {/* Benefits of Diagnosis */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Benefits of Diagnosis</h3>
        
        <div className="space-y-3">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Understanding and Clarity</div>
            <div className="text-sm">
              Diagnosis provides an explanation for differences and challenges. "Now I understand why..."
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Access to Services and Support</div>
            <div className="text-sm">
              Eligibility for therapies, educational services, workplace accommodations, disability benefits (if needed)
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Self-Advocacy Framework</div>
            <div className="text-sm">
              Understanding your needs and requesting appropriate accommodations becomes clearer
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Community Connection</div>
            <div className="text-sm">
              Access to autistic community and identity. You're not alone—there's a whole community of people like you!
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Better Support Strategies</div>
            <div className="text-sm">
              Tailored strategies that work FOR autistic thinking and sensing, not against it
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Reduced Self-Blame</div>
            <div className="text-sm">
              Understanding that struggles stem from neurology, not character flaws or "not trying hard enough"
            </div>
          </div>
        </div>
      </div>

      {/* --- CENTERED GRAPHIC SECTION 1 --- */} 
      <div className="text-center w-full mb-8"> 
        <p className="text-[#0c264d] mb-4 italic"></p> 
        {/* The Wrapper: Centers the image and restricts its width */} 
        <div className="mx-auto w-48 md:w-64"> 
          <ImageWithFallback 
            src="/images/autism/autism-diagnosis-AfterDxtab-GoldInfinity-LightBulb.png" 
            alt="lightbulb with gold infinity in it symbolizing autism"
          /> 
        </div> 
      </div>
       
      {/* Next Steps */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <div className="space-y-4">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">1. Learn About Autism</div>
            <div className="text-sm">
              <strong>From autistic voices, not just medical model.</strong> Read books by autistic authors, follow 
              autistic advocates on social media, explore neurodiversity-affirming resources. Understand that autism 
              is a different way of being, not a disease.
            </div>
          </div>
          
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">2. Connect with Community</div>
            <div className="text-sm">
              Online and local autism communities (especially those run BY autistic people). Finding "your people" 
              can be incredibly validating.
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">3. Evaluate Support Needs</div>
            <div className="text-sm">
              What services or accommodations would help? Not everyone needs the same supports. 
              Think about: speech therapy, occupational therapy, social skills support (if desired), mental health 
              support, sensory accommodations, etc.
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">4. School or Workplace Planning</div>
            <div className="text-sm">
              <ul className="ml-4 mt-1 space-y-1">
                <li>• <strong>Students K-12:</strong> Develop IEP (Individualized Education Program) or 504 Plan</li>
                <li>• <strong>College students:</strong> Register with Disability Services office</li>
                <li>• <strong>Workers:</strong> Request ADA accommodations through HR (quiet workspace, written instructions, 
                flexible schedule, etc.)</li>
              </ul>
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">5. Address Co-occurring Conditions</div>
            <div className="text-sm">
              Treat anxiety, ADHD, sleep issues, GI problems, etc. Many autistic people's quality of life improves 
              significantly when co-occurring conditions are addressed.
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">6. Process Emotions</div>
            <div className="text-sm">
              Diagnosis can bring relief, grief, anger, hope, confusion, or all of these at once. Give yourself 
              permission to feel whatever comes up. Consider therapy with an autism-affirming therapist.
            </div>
          </div>
        </div>
      </div>

      {/* --- CENTERED GRAPHIC SECTION 2 --- */} 
      <div className="text-center w-full mb-8"> 
        <p className="text-[#0c264d] mb-4 italic"></p> 
        {/* The Wrapper: Centers the image and restricts its width */} 
        <div className="mx-auto w-48 md:w-64"> 
          <ImageWithFallback 
            src="/images/autism/autism-diagnosis-AfterDxtab-EducPlan.png" 
            alt="kid frustrated by schoolwork" 
          /> 
        </div> 
      </div>
       
      {/* Educational Planning for Children */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Educational Planning (for Children)</h3>
        <p className="text-sm mb-4">
          For children, diagnosis often triggers educational planning:
        </p>
        
        <div className="space-y-2">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Develop IEP or 504 Plan:</strong> Outlines accommodations, services, and goals
            </div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Identify Needed Services:</strong> Speech, OT, social support, academic support
            </div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Plan Transition Services:</strong> For older students (14+), planning for post-high school
            </div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Advocate for Appropriate Placement:</strong> Consider: mainstream with support, specialized program, 
              homeschooling, etc.
            </div>
          </div>
        </div>
      </div>

      {/* Ongoing Research */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Ongoing Diagnostic Research</h3>
        <p className="text-sm mb-4">
          Research continues to improve diagnostic methods:
        </p>
        
        <div className="space-y-2">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Earlier identification:</strong> Tools to reliably diagnose under 18 months
            </div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Biomarkers:</strong> Exploring eye-tracking, brain imaging, genetic markers (not yet clinically validated)
            </div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Subtyping:</strong> Identifying autism subgroups based on biology, not just behavior
            </div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Better adult tools:</strong> Instruments designed for adult presentation
            </div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Cultural adaptation:</strong> Culturally responsive diagnostic approaches
            </div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Dimensional approaches:</strong> Measuring autistic traits dimensionally rather than categorically
            </div>
          </div>
        </div>

        <p className="text-sm mt-4">
          Future diagnostic approaches should incorporate autistic perspectives and focus on supporting flourishing, 
          not just identifying deficits.
        </p>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />

      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <p className="text-xs text-slate-600 italic pl-2">
            No inline citations for this tab.
          </p>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0"> 
            <li>
              Kapp, S. K. (Ed.). (2020). <i>Autistic community and the neurodiversity movement: Stories from the frontline</i>. Palgrave Macmillan.
            </li>
            <li>
              Pellicano, E., & den Houting, J. (2022). "Annual research review: Shifting from 'normal science' to neurodiversity in autism science." <i>Journal of Child Psychology and Psychiatry</i>, 63(4), 381-396.
            </li>
            <li>
              Lord, C., Elsabbagh, M., Baird, G., & Veenstra-Vanderweele, J. (2018). "Autism spectrum disorder." <i>The Lancet</i>, 392(10146), 508-520.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}