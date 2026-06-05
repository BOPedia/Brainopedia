import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface MisophoniaDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function MisophoniaDiagnosis({ setCurrentArticle }: MisophoniaDiagnosisProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('misophonia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Misophonia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Testing & Diagnosing Misophonia</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Because misophonia is not yet officially listed in the DSM-5-TR, getting a formal diagnosis can be challenging. However, many clinicians use validated tools and clinical interviews to identify the condition and rule out other possibilities.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Diagnostic Challenge</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1713403857782-80a39b5af884?w=1080&q=80" alt="Clinician performing an assessment" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Misophonia is often misdiagnosed as an anxiety disorder, OCD, or ADHD because of the overlapping symptoms of irritability and avoidance.<sup>[2]</sup> A key part of diagnosis is differentiating misophonia from:<sup>[3]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Hyperacusis:</strong> Sensitivity to <em>loudness</em> (sounds are painful), whereas misophonia is about the <em>type</em> of sound.<sup>[4]</sup></li>
            <li className="mb-2"><strong>Phonophobia:</strong> Fear of sounds, whereas misophonia is characterized more by anger or disgust.</li>
            <li className="mb-2"><strong>Sensory Processing Disorder (SPD):</strong> A broader sensitivity to multiple sensory inputs.<sup>[5]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assessment Tools</h2>
          <p className="mb-4">Specialists often use several standardized questionnaires to assess the severity of misophonia:<sup>[6]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Amsterdam Misophonia Scale (A-MISO-S):</strong> Measures the impact on daily life and the intensity of reactions.<sup>[7]</sup></li>
            <li className="mb-2"><strong>Misophonia Questionnaire (MQ):</strong> A two-part scale assessing trigger sensitivity and emotional/behavioral responses.<sup>[8]</sup></li>
            <li className="mb-2"><strong>S-Five:</strong> A multi-dimensional scale measuring internalizing and externalizing responses.<sup>[9]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Clinical Interview</h2>
          <p className="mb-4">A thorough interview covers:<sup>[10]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li>What specific sounds (and visuals) are triggers?</li>
            <li>When did the symptoms first start (typically between ages 9–13)?<sup>[11]</sup></li>
            <li>What is the immediate feeling (anger, rage, or anxiety)?</li>
            <li>Does the reaction change based on who is making the sound?</li>
            <li>How does the person cope (e.g., earplugs, leaving the room)?</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Finding a Specialist</h2>
          <p className="mb-4">Audiologists and psychologists are often the best-equipped professionals to handle misophonia. Audiologists can rule out physical hearing issues, while psychologists can help with emotional regulation and coping strategies.<sup>[12]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Schröder, A., et al. (2013). "Misophonia: Diagnostic criteria." <em>PLOS ONE</em>.</p>
          <p>[2] Wu, M. S., et al. (2014). "Misophonia: Incidence and clinical correlates."</p>
          <p>[3] Jastreboff, P. J., & Jastreboff, M. M. (2001). "Decreased sound tolerance."</p>
          <p>[4] Tyler, R. S., et al. (2014). "A review of hyperacusis." <em>American Journal of Audiology</em>.</p>
          <p>[5] Brout, J. J., et al. (2018). "Investigating misophonia." <em>Frontiers in Neuroscience</em>.</p>
          <p>[6] Siepsiak, M., et al. (2020). "Development of MisoQuest." <em>IJERPH</em>.</p>
          <p>[7] Schröder, A., et al. (2013). "Amsterdam Misophonia Scale."</p>
          <p>[8] Wu, M. S., et al. (2014). "Misophonia Questionnaire."</p>
          <p>[9] Vitoratou, S., et al. (2021). "The S-Five scale." <em>Psych</em>.</p>
          <p>[10] Potgieter, I., et al. (2019). "Misophonia: A scoping review." <em>Journal of Clinical Psychology</em>.</p>
          <p>[11] Edelstein, M., et al. (2013). "Misophonia case descriptions."</p>
          <p>[12] Aazh, H., et al. (2019). "Audiological factors in misophonia." <em>Frontiers in Neuroscience</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('misophonia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Misophonia</a>
      </div>
    </article>
  );
}
