import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SchizophreniaSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function SchizophreniaSymptoms({ setCurrentArticle }: SchizophreniaSymptomsProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('schizophrenia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Schizophrenia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Symptoms & Characteristics of Schizophrenia</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Schizophrenia involves a range of experiences that are traditionally categorized into "positive," "negative," and "cognitive" symptoms. A neurodivergent-affirming view recognizes these as genuine neurological phenomena.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Positive Symptoms (Additions to Experience)</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1723283207299-aa59d7b17275?w=1080&q=80" alt="Abstract thought patterns illustration" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">These represent thoughts or sensory experiences that are added to a person's life:<sup>[2]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Hallucinations:</strong> Perceiving things that others don't. Auditory (voices) are most common, but can also be visual, tactile, or olfactory.<sup>[3]</sup></li>
            <li className="mb-2"><strong>Delusions:</strong> Fixed, strong beliefs that differ from shared reality (e.g., believing one has special powers).<sup>[4]</sup></li>
            <li className="mb-2"><strong>Disorganized Thinking:</strong> Difficulty organizing thoughts into a conventional flow, sometimes manifesting as "word salad."</li>
            <li className="mb-2"><strong>Unusual Movements:</strong> Agitated body movements or catatonia (lack of movement/responsiveness).<sup>[5]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Negative Symptoms (Reductions in Experience)</h2>
          <p className="mb-4">These represent a decrease in normal functioning or expression:<sup>[6]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Avolition:</strong> A significant decrease in the motivation to initiate or stay with activities.</li>
            <li className="mb-2"><strong>Flat Affect:</strong> Reduced emotional expression in the face or voice.<sup>[7]</sup></li>
            <li className="mb-2"><strong>Alogia:</strong> Reduced speech or difficulty generating conversation.</li>
            <li className="mb-2"><strong>Anhedonia:</strong> Difficulty experiencing pleasure in activities once enjoyed.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Cognitive Symptoms</h2>
          <p className="mb-4">These affect the brain's information-processing capabilities:<sup>[8]</sup></p>
          <div className="bg-[#f0f9fb] p-6 rounded-lg border border-[#2abcd4] mb-6">
            <ul className="space-y-3 text-sm">
              <li><strong>Working Memory:</strong> Difficulty holding and using information in the short term.</li>
              <li><strong>Executive Function:</strong> Challenges with planning, prioritizing, and decision-making.<sup>[9]</sup></li>
              <li><strong>Attention:</strong> Difficulty focusing or sustaining attention on tasks.</li>
              <li><strong>Processing Speed:</strong> Taking longer to process auditory or visual information.</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurodivergent Strengths</h2>
          <p className="mb-4">Many individuals with schizophrenia demonstrate exceptional creativity, unique philosophical insights, and the ability to see patterns that others miss.<sup>[10]</sup> The cognitive effort required to navigate a world that doesn't match one's perception often leads to incredible resilience.<sup>[11]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Tandon, R., et al. (2009). "Schizophrenia clinical features." <em>Schizophrenia Research</em>.</p>
          <p>[2] American Psychiatric Association. (2013). <em>DSM-5</em>.</p>
          <p>[3] Waters, F., et al. (2014). "Visual hallucinations in the psychosis spectrum." <em>Schizophrenia Bulletin</em>.</p>
          <p>[4] Corlett, P. R., et al. (2010). "Toward a neurobiology of delusions." <em>Progress in Neurobiology</em>.</p>
          <p>[5] Tandon, R., et al. (2013). "Definition and description in DSM-5." <em>Schizophrenia Research</em>.</p>
          <p>[6] Foussias, G., & Remington, G. (2010). "Negative symptoms in schizophrenia." <em>Schizophrenia Bulletin</em>.</p>
          <p>[7] Messinger, J. W., et al. (2011). "Affective and social deficits." <em>Schizophrenia Bulletin</em>.</p>
          <p>[8] Green, M. F., et al. (2004). "Longitudinal studies of cognition." <em>Schizophrenia Research</em>.</p>
          <p>[9] Keefe, R. S., & Fenton, W. S. (2007). "Cognitive impairment in DSM-V." <em>Schizophrenia Bulletin</em>.</p>
          <p>[10] Jamison, K. R. (2017). "Schizophrenia and creativity." <em>Scientific American Mind</em>.</p>
          <p>[11] Harding, C. M., et al. (1987). "The Vermont longitudinal study." <em>American Journal of Psychiatry</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('schizophrenia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Schizophrenia</a>
      </div>
    </article>
  );
}
