import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SynesthesiaDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function SynesthesiaDiagnosis({ setCurrentArticle }: SynesthesiaDiagnosisProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('synesthesia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Synesthesia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Synesthesia: Testing & Diagnosing</h1>

      <div className="space-y-8">
        <section>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1664261836174-b419b196326c?w=1080&q=80"
            alt="Psychological testing and questionnaire - identifying synesthesia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Synesthesia is typically identified through self-report and validated through consistency testing.<sup>[27]</sup> The identification 
            process includes detailed questionnaires about synesthetic experiences, consistency testing where the same stimuli 
            are presented at different times to verify that associations remain stable (true synesthetes will give the same 
            responses months apart), comparison of experiences to documented forms of synesthesia, ruling out other conditions 
            like hallucinations or sensory processing differences, and sometimes brain imaging studies for research purposes.<sup>[28][5]</sup>
          </p>
          
          <p className="mb-4">
            Key characteristics that distinguish true synesthesia include automaticity (experiences occur involuntarily without 
            conscious effort), consistency (the same stimulus always produces the same synesthetic experience), and lifelong 
            presence (synesthetic associations remain stable throughout life).<sup>[29][30]</sup> Many synesthetes don't realize their experiences 
            are unusual until adolescence or adulthood, often assuming everyone perceives the world the same way.<sup>[31]</sup> Online 
            tests such as the Synesthesia Battery have been developed to assess and verify synesthetic experiences.<sup>[32]</sup>
          </p>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[5] Simner, J., Mulvenna, C., Sagiv, N., et al. (2006). "Synaesthesia: The prevalence of atypical cross-modal experiences." <em>Perception</em>, 35(8), 1024-1033.</p>
          <p>[27] Eagleman, D. M., Kagan, A. D., Nelson, S. S., Sagaram, D., & Sarma, A. K. (2007). "A standardized test battery for the study of synesthesia." <em>Journal of Neuroscience Methods</em>, 159(1), 139-145.</p>
          <p>[28] Baron-Cohen, S., Harrison, J., Goldstein, L. H., & Wyke, M. (1993). "Coloured speech perception: Is synaesthesia what happens when modularity breaks down?" <em>Perception</em>, 22(4), 419-426.</p>
          <p>[29] Simner, J., & Logie, R. H. (2007). "Synaesthetic consistency spans decades in a lexical-gustatory synaesthete." <em>Neurocase</em>, 13(5), 358-365.</p>
          <p>[30] Rich, A. N., Bradshaw, J. L., & Mattingley, J. B. (2005). "A systematic, large-scale study of synaesthesia: Implications for the role of early experience in lexical-colour associations." <em>Cognition</em>, 98(1), 53-84.</p>
          <p>[31] Carmichael, D. A., Down, M. P., Shillcock, R. C., Eagleman, D. M., & Simner, J. (2015). "Validating a standardised test battery for synesthesia: Does the Synesthesia Battery reliably detect synesthesia?" <em>Consciousness and Cognition</em>, 33, 375-385.</p>
          <p>[32] Hochel, M., & Milán, E. G. (2008). "Synaesthesia: The existing state of affairs." <em>Cognitive Neuropsychology</em>, 25(1), 93-117.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('synesthesia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Synesthesia</a>
      </div>
    </article>
  );
}
