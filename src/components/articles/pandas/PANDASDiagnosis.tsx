import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface PANDASDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function PANDASDiagnosis({ setCurrentArticle }: PANDASDiagnosisProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('pandas'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to PANDAS</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Testing & Diagnosing PANDAS</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Diagnosing PANDAS is primarily a clinical process, meaning it is based on a doctor's observation of the child's symptoms and history. There is no single blood test that can "prove" a child has PANDAS, making a thorough evaluation by a specialist essential.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Five Diagnostic Criteria</h2>
          <p className="mb-4">To be diagnosed with PANDAS, a child must meet all five of the following criteria:<sup>[2]</sup></p>
          <ol className="list-decimal ml-6 mb-4 space-y-4">
            <li><strong>Presence of OCD and/or Tics:</strong> New or dramatically worsened symptoms.</li>
            <li><strong>Pediatric Onset:</strong> Symptoms must first appear between age 3 and puberty.<sup>[3]</sup></li>
            <li><strong>Sudden, Episodic Course:</strong> Symptoms appear "overnight" or flare up intensely with strep infections (a "sawtooth" pattern).<sup>[4]</sup></li>
            <li><strong>Link to Group A Strep:</strong> Confirmed by a positive throat culture or elevated blood antibodies (ASO or Anti-DNase B).<sup>[5]</sup></li>
            <li><strong>Neurological Abnormalities:</strong> Such as motor hyperactivity or deterioration in handwriting during a flare.<sup>[6]</sup></li>
          </ol>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Diagnostic Workup</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1576765608622-067973a79f53?w=1080&q=80" alt="Pediatrician examining a child" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Infection Testing</h3>
          <p className="mb-4">The doctor will look for evidence of a current or recent strep infection. This includes a rapid strep test, a 48-hour throat culture, or blood tests (titer levels) to see if the body has recently fought strep.<sup>[7]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Clinical Observation</h3>
          <p className="mb-4">Deterioration in handwriting (dysgraphia) is a common "soft sign" that doctors look for. Clinicians may also use the <strong>Cunningham Panel</strong>, a specialized set of tests that looks for specific anti-neuronal antibodies, though this test is still debated in some medical circles.<sup>[8]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ruling Out Other Conditions</h3>
          <p className="mb-4">A thorough workup must rule out other causes for sudden neuropsychiatric changes, such as Sydenham's chorea, Lyme disease, or acute-onset OCD that is not immune-related.<sup>[9]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Common Misdiagnoses</h2>
          <p className="mb-4">Because PANDAS is relatively rare and controversial in some medical communities, children are often initially misdiagnosed with standard OCD, Tourette's Syndrome, or oppositional defiant disorder (ODD).<sup>[10]</sup> The "overnight" nature of the symptoms is the most important clue that it may be PANDAS.</p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Chang, K., et al. (2015). "Clinical evaluation of youth with PANS." <em>JCAP</em>.</p>
          <p>[2] Swedo, S. E., et al. (1998). "PANDAS: First 50 cases." <em>American Journal of Psychiatry</em>.</p>
          <p>[3] Garvey, M. A., et al. (1998). "PANDAS: Lessons from rheumatic fever." <em>Journal of Child Neurology</em>.</p>
          <p>[4] Murphy, T. K., et al. (2010). "The immunobiology of Tourette's and PANDAS."</p>
          <p>[5] Murphy, M. L., & Pichichero, M. E. (2002). "Prospective identification of children with PANDAS." <em>Archives of Pediatrics</em>.</p>
          <p>[6] Leckman, J. F., et al. (2011). "Strep infections and exacerbations of tics." <em>JAACAP</em>.</p>
          <p>[7] Singer, H. S., et al. (2012). "Moving from PANDAS to CANS." <em>The Journal of Pediatrics</em>.</p>
          <p>[8] Shimasaki, C., et al. (2020). "Evaluation of the Cunningham Panel." <em>Journal of Neuroimmunology</em>.</p>
          <p>[9] Kurlan, R., & Kaplan, E. L. (2004). "The PANDAS etiology for tics: Hypothesis or entity?" <em>Pediatrics</em>.</p>
          <p>[10] Gabbay, V., et al. (2008). "PANDAS: Comparison of diagnosis in community vs. specialty clinics."</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('pandas'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to PANDAS</a>
      </div>
    </article>
  );
}
