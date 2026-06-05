import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TouretteDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function TouretteDiagnosis({ setCurrentArticle }: TouretteDiagnosisProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tourette'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Tourette Syndrome</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Tourette Syndrome: Testing & Diagnosing</h1>

      <div className="space-y-8">
        <section>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1659353886114-9aa119aef5aa?w=1080&q=80"
            alt="Neurologist examination - diagnosing Tourette syndrome"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">Tourette syndrome is diagnosed clinically based on the presence of both motor and vocal tics lasting more than one year.<sup>[26]</sup> There is no blood test or imaging study that can diagnose TS.<sup>[27]</sup> The diagnostic criteria include both multiple motor tics and one or more vocal tics present at some point, tics occurring many times a day nearly every day or intermittently for more than one year, onset before age 18, and symptoms not caused by substance use or another medical condition.<sup>[28]</sup></p>
          <p className="mb-4">Diagnosis is typically made by a neurologist, psychiatrist, or developmental pediatrician.<sup>[29]</sup> The evaluation includes detailed history, neurological examination, and assessment for co-occurring conditions such as ADHD, OCD, anxiety, or learning differences.<sup>[30]</sup> Medical tests may be ordered to rule out other causes of tic-like movements.<sup>[31]</sup> The Yale Global Tic Severity Scale (YGTSS) is commonly used to assess tic severity and impact on functioning.<sup>[32]</sup></p>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[26] World Health Organization. (2018). <em>International classification of diseases for mortality and morbidity statistics</em> (11th ed.). Geneva: WHO.</p>
          <p>[27] Singer, H. S. (2005). "Tourette's syndrome: From behaviour to biology." <em>The Lancet Neurology</em>, 4(3), 149-159.</p>
          <p>[28] Roessner, V., Plessen, K. J., Rothenberger, A., et al. (2011). "European clinical guidelines for Tourette syndrome and other tic disorders. Part II: Pharmacological treatment." <em>European Child & Adolescent Psychiatry</em>, 20(4), 173-196.</p>
          <p>[29] Scahill, L., Specht, M., & Page, C. (2014). "The prevalence of tic disorders and clinical characteristics in children." <em>Journal of Obsessive-Compulsive and Related Disorders</em>, 3(4), 394-400.</p>
          <p>[30] Eddy, C. M., Rizzo, R., & Cavanna, A. E. (2009). "Neuropsychological aspects of Tourette syndrome: A review." <em>Journal of Psychosomatic Research</em>, 67(6), 503-513.</p>
          <p>[31] Müller-Vahl, K. R., Sambrani, T., & Jakubovski, E. (2019). "Tic disorders revisited: Introduction of the term 'tic spectrum disorders'." <em>European Child & Adolescent Psychiatry</em>, 28(8), 1129-1135.</p>
          <p>[32] Leckman, J. F., Riddle, M. A., Hardin, M. T., et al. (1989). "The Yale Global Tic Severity Scale: Initial testing of a clinician-rated scale of tic severity." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 28(4), 566-573.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tourette'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Tourette Syndrome</a>
      </div>
    </article>
  );
}
