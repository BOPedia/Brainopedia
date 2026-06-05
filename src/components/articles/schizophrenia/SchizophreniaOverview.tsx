import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SchizophreniaOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function SchizophreniaOverview({ setCurrentArticle }: SchizophreniaOverviewProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('schizophrenia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Schizophrenia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Schizophrenia: Overview</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Schizophrenia is a complex neurological condition that affects how a person perceives reality, thinks, and experiences the world.<sup>[1]</sup> Increasingly understood through a neurodivergent lens, many advocates recognize schizophrenia as representing a distinct neurotype—a fundamentally different way of processing information and experiencing consciousness.<sup>[2]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What Is Schizophrenia?</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1687367168095-844e7908b0f2?w=1080&q=80" alt="Perception and reality illustration" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Schizophrenia affects approximately 1% of the global population and involves differences in brain structure, neurotransmitter function (particularly dopamine and glutamate), and neural connectivity.<sup>[3]</sup> Research shows variations in brain regions responsible for perception, thought organization, and reality testing.<sup>[4]</sup></p>
          <p className="mb-4">The neurodivergent perspective acknowledges that individuals with schizophrenia experience reality through a different perceptual lens.<sup>[5]</sup> While this can create significant challenges, it also represents a unique form of consciousness that deserves understanding and respect.<sup>[6]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Key Concepts</h2>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Neurotype Perspective:</strong> Viewing schizophrenia not as a "broken brain" but as a natural (though often disabling) variation in human neurology.<sup>[7]</sup></li>
            <li className="mb-2"><strong>The Spectrum:</strong> Schizophrenia exists on a spectrum of related conditions, including schizoaffective disorder and brief psychotic disorder.</li>
            <li className="mb-2"><strong>Subjective Reality:</strong> Honoring that hallucinations and delusions represent real neurological experiences for the individual, even if not shared by others.<sup>[8]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prevalence</h2>
          <p className="mb-4">Schizophrenia is found in all cultures and socioeconomic groups. It is estimated that 24 million people worldwide live with the condition.<sup>[9]</sup> Onset typically occurs in late adolescence or early adulthood (late teens to early 30s), though it can occur earlier or later in life.<sup>[10]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Psychiatric Association. (2013). <em>DSM-5</em>.</p>
          <p>[2] Geekie, J., et al. (2012). <em>Experiencing psychosis: Personal and professional perspectives</em>.</p>
          <p>[3] Saha, S., et al. (2005). "Prevalence of schizophrenia." <em>PLoS Medicine</em>.</p>
          <p>[4] Karlsgodt, K. H., et al. (2010). "Structural brain abnormalities in schizophrenia." <em>Current Directions in Psychological Science</em>.</p>
          <p>[5] Longden, E., et al. (2012). "Voice hearing in a biographical context." <em>Psychosis</em>.</p>
          <p>[6] McCarthy-Jones, S., et al. (2013). "Philosophical perspectives on hallucinations." <em>Frontiers in Human Neuroscience</em>.</p>
          <p>[7] Deegan, P. E. (1988). "Recovery: The lived experience." <em>Psychosocial Rehabilitation Journal</em>.</p>
          <p>[8] Romme, M., & Escher, S. (2000). <em>Making sense of voices</em>.</p>
          <p>[9] WHO. (2022). "Schizophrenia Facts."</p>
          <p>[10] Ochoa, S., et al. (2012). "Gender differences in schizophrenia." <em>Schizophrenia Research and Treatment</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('schizophrenia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Schizophrenia</a>
      </div>
    </article>
  );
}
