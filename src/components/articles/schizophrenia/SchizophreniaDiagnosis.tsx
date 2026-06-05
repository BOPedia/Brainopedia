import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SchizophreniaDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function SchizophreniaDiagnosis({ setCurrentArticle }: SchizophreniaDiagnosisProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('schizophrenia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Schizophrenia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Testing & Diagnosing Schizophrenia</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Diagnosing schizophrenia is a clinical process that involves careful observation and the exclusion of other medical or psychiatric conditions. Because there is no simple blood test or scan, a thorough evaluation by a psychiatrist or psychologist is required.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Criteria (DSM-5)</h2>
          <p className="mb-4">To be diagnosed with schizophrenia, a person must exhibit at least two of the following for a significant portion of a month:<sup>[2]</sup></p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>Hallucinations (at least one of the top three must be present).</li>
            <li>Delusions.<sup>[3]</sup></li>
            <li>Disorganized speech.</li>
            <li>Grossly disorganized or catatonic behavior.</li>
            <li>Negative symptoms (e.g., lack of motivation or emotion).<sup>[4]</sup></li>
          </ul>
          <p className="mb-4">Additionally, there must be continuous signs of the disturbance for at least six months, and functioning in major areas like work or relationships must be significantly impaired.<sup>[5]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Evaluation Process</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1653130892581-7c0ae1f4e8e0?w=1080&q=80" alt="Psychiatric evaluation and diagnosis" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Psychiatric Interview</h3>
          <p className="mb-4">The core of diagnosis is a detailed interview about the person's thoughts, feelings, family history, and the timeline of their experiences.<sup>[6]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ruling Out Other Causes</h3>
          <p className="mb-4">Blood tests and brain scans (like CT or MRI) are used to ensure symptoms aren't caused by a brain tumor, epilepsy, thyroid issues, or drug use.<sup>[7]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neuropsychological Testing</h3>
          <p className="mb-4">Tests of memory, attention, and executive function can help identify the cognitive profile associated with schizophrenia and rule out other developmental conditions like autism or ADHD.<sup>[8]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Early Intervention</h2>
          <p className="mb-4">Research shows that the "prodromal phase" (the period before a first full psychotic episode) often involves subtle changes in mood, social interest, and concentration.<sup>[9]</sup> Identifying these signs early and starting <strong>Coordinated Specialty Care (CSC)</strong> can dramatically improve long-term outcomes.<sup>[10]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Common Misdiagnoses</h2>
          <p className="mb-4">Schizophrenia is sometimes confused with Bipolar Disorder (manic episodes can involve psychosis) or Schizoaffective Disorder (which combines features of both). In children and teens, it may be misidentified as severe ADHD or social anxiety.<sup>[11]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] World Health Organization. (2018). <em>ICD-11</em>.</p>
          <p>[2] American Psychiatric Association. (2013). <em>DSM-5</em>.</p>
          <p>[3] Tandon, R., et al. (2013). "Definition and description of schizophrenia in DSM-5." <em>Schizophrenia Research</em>.</p>
          <p>[4] Foussias, G., & Remington, G. (2010). "Negative symptoms in schizophrenia." <em>Schizophrenia Bulletin</em>.</p>
          <p>[5] Addington, J., et al. (2012). "North American Prodrome Longitudinal Study."</p>
          <p>[6] McGorry, P. D., & van Os, J. (2013). "Redeeming diagnosis in psychiatry." <em>The Lancet</em>.</p>
          <p>[7] Shenton, M. E., et al. (2001). "MRI findings." <em>Schizophrenia Research</em>.</p>
          <p>[8] Keefe, R. S., & Fenton, W. S. (2007). "Cognitive impairment in DSM-V."</p>
          <p>[9] Kane, J. M., et al. (2016). "Early treatment program." <em>American Journal of Psychiatry</em>.</p>
          <p>[10] NIMH. (2020). "RAISE Program."</p>
          <p>[11] Malaspina, D., et al. (2013). "Schizoaffective disorder in DSM-5."</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('schizophrenia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Schizophrenia</a>
      </div>
    </article>
  );
}
