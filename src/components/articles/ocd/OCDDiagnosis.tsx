import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface OCDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function OCDDiagnosis({ setCurrentArticle }: OCDDiagnosisProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('ocd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to OCD</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Testing & Diagnosing OCD</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Diagnosing OCD involves a detailed clinical assessment by a mental health professional. Because many symptoms are internal (thoughts) and people often feel shame about them, a thorough and compassionate evaluation is essential.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Criteria</h2>
          <p className="mb-4">To be diagnosed with OCD according to the DSM-5, a person must meet the following criteria:<sup>[2]</sup></p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>Presence of obsessions, compulsions, or both.</li>
            <li>The obsessions or compulsions are time-consuming (e.g., take more than 1 hour per day) or cause clinically significant distress or impairment.<sup>[3]</sup></li>
            <li>The symptoms are not due to a substance or another medical condition.</li>
            <li>The disturbance is not better explained by another mental disorder (e.g., anxiety or an eating disorder).</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Evaluation Process</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1620933967796-53cc2b175b6c?w=1080&q=80" alt="Clinical interview and diagnosis" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Clinical Interview</h3>
          <p className="mb-4">The primary tool for diagnosis is a detailed interview. The clinician will ask about the nature of intrusive thoughts, the specific rituals performed to manage them, and the impact on daily life.<sup>[4]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Assessment Tools</h3>
          <p className="mb-4">Standardized scales like the <strong>Yale-Brown Obsessive Compulsive Scale (Y-BOCS)</strong> are often used to measure the severity of symptoms.<sup>[5]</sup> This scale assesses how much time is spent on symptoms, the distress caused, and the ability to resist compulsions.<sup>[6]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ruling Out Other Conditions</h3>
          <p className="mb-4">OCD often co-occurs with other conditions like anxiety, depression, or ADHD. A thorough diagnosis must differentiate between OCD and "OCD-related disorders" such as body dysmorphic disorder, hoarding disorder, or trichotillomania (hair-pulling).<sup>[7]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Insight Levels</h2>
          <p className="mb-4">The diagnosis also includes specifying the person's level of insight—how much they recognize that their beliefs are definitely or probably not true.<sup>[8]</sup> Insight can range from "good/fair insight" to "absent insight/delusional beliefs."</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Importance of Specialist Knowledge</h2>
          <p className="mb-4">Because OCD can manifest in unusual ways (like Pure-O or harm obsessions), it is often misdiagnosed as generalized anxiety or even psychosis. Seeing a specialist who understands the breadth of the OCD spectrum is critical for an accurate diagnosis.<sup>[9]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Abramowitz, J. S., et al. (2009). "Obsessive-compulsive disorder." <em>The Lancet</em>.</p>
          <p>[2] American Psychiatric Association. (2013). <em>DSM-5</em>.</p>
          <p>[3] Stein, D. J., et al. (2019). "Obsessive-compulsive disorder." <em>Nature Reviews Disease Primers</em>.</p>
          <p>[4] Goodman, W. K., et al. (1989). "The Yale-Brown Obsessive Compulsive Scale." <em>Archives of General Psychiatry</em>.</p>
          <p>[5] Storch, E. A., et al. (2005). "Reliability and validity of the Y-BOCS." <em>Journal of Anxiety Disorders</em>.</p>
          <p>[6] Pinto, A., et al. (2007). "Insight in OCD." <em>Journal of Clinical Psychiatry</em>.</p>
          <p>[7] Mataix-Cols, D., et al. (2010). "The OCD spectrum." <em>Current Psychiatry Reports</em>.</p>
          <p>[8] Eisen, J. L., et al. (2001). "Insight in obsessive-compulsive disorder." <em>American Journal of Psychiatry</em>.</p>
          <p>[9] Chasnoff, I. J., et al. (2015). "Misdiagnosis and missed diagnoses." <em>Pediatrics</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('ocd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to OCD</a>
      </div>
    </article>
  );
}
