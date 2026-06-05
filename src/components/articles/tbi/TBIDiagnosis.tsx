import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TBIDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function TBIDiagnosis({ setCurrentArticle }: TBIDiagnosisProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tbi'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to TBI</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Traumatic Brain Injury: Testing & Diagnosing</h1>

      <div className="space-y-8">
        <section>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1549925245-f20a1bac6454?w=1080&q=80"
            alt="Brain imaging and neurological testing for TBI diagnosis"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">TBI is diagnosed by emergency medicine physicians, neurologists, or rehabilitation specialists based on injury history and clinical presentation.<sup>[28]</sup> Initial assessment includes Glasgow Coma Scale to assess level of consciousness, neurological examination, brain imaging (CT scan for acute injury to detect bleeding or skull fractures, MRI for detailed assessment of brain tissue), and assessment of injury mechanism and severity.<sup>[29][30]</sup></p>
          <p className="mb-4">For ongoing effects, comprehensive evaluation includes neuropsychological testing to assess cognitive functioning across multiple domains, functional assessment of daily living skills and adaptive behavior, assessment of emotional and behavioral changes, screening for co-occurring conditions (depression, anxiety, PTSD), physical and occupational therapy assessments, and tracking symptoms over time to distinguish recovering from persistent effects.<sup>[31][32]</sup></p>
          <p className="mb-4">Diagnosis of severity includes mild, moderate, or severe based on duration of loss of consciousness, post-traumatic amnesia, and Glasgow Coma Scale scores.<sup>[33]</sup> Many individuals with mild TBI are under-diagnosed or dismissed despite experiencing persistent post-concussive symptoms requiring recognition of TBI as acquired neurodivergence when effects persist.<sup>[34]</sup></p>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[28] Teasdale, G., & Jennett, B. (1974). "Assessment of coma and impaired consciousness: A practical scale." <em>The Lancet</em>, 304(7872), 81-84.</p>
          <p>[29] Jagoda, A. S., Cantrill, S. V., Wears, R. L., et al. (2002). "Clinical policy: Neuroimaging and decision making in adult mild traumatic brain injury in the acute setting." <em>Annals of Emergency Medicine</em>, 40(2), 231-249.</p>
          <p>[30] Lee, H., Wintermark, M., Gean, A. D., Ghajar, J., Manley, G. T., & Mukherjee, P. (2008). "Focal lesions in acute mild traumatic brain injury and neurocognitive outcome: CT versus 3T MRI." <em>Journal of Neurotrauma</em>, 25(9), 1049-1056.</p>
          <p>[31] Lezak, M. D., Howieson, D. B., Bigler, E. D., & Tranel, D. (2012). <em>Neuropsychological assessment</em> (5th ed.). New York: Oxford University Press.</p>
          <p>[32] Ponsford, J., Draper, K., & Schönberger, M. (2008). "Functional outcome 10 years after traumatic brain injury: Its relationship with demographic, injury severity, and cognitive and emotional status." <em>Journal of the International Neuropsychological Society</em>, 14(2), 233-242.</p>
          <p>[33] Stein, S. C., & Spettell, C. (1995). "The Head Injury Severity Scale (HISS): A practical classification of closed-head injury." <em>Brain Injury</em>, 9(5), 437-444.</p>
          <p>[34] Iverson, G. L. (2005). "Outcome from mild traumatic brain injury." <em>Current Opinion in Psychiatry</em>, 18(3), 301-317.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tbi'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to TBI</a>
      </div>
    </article>
  );
}
