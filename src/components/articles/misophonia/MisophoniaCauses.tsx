import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface MisophoniaCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function MisophoniaCauses({ setCurrentArticle }: MisophoniaCausesProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('misophonia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Misophonia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Causes & Origins of Misophonia</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">While the exact cause of misophonia is still being researched, brain imaging and physiological studies have provided significant clues. It is increasingly viewed as a neurological condition rather than a purely psychological one.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Hyper-Connectivity</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1762281429350-4c9bf2844c1e?w=1080&q=80" alt="Brain mapping illustration" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Research suggests that misophonia is caused by <strong>hyper-connectivity</strong> between the brain's auditory system and the limbic system (the emotional center).<sup>[2]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Anterior Insular Cortex (AIC):</strong> This part of the brain, which processes emotions and internal body states, is significantly more active in people with misophonia when they hear trigger sounds.<sup>[3]</sup></li>
            <li className="mb-2"><strong>Salience Network:</strong> The brain's "salience network" incorrectly identifies trigger sounds as highly important or threatening, leading to a massive emotional response.<sup>[4]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Motor Basis</h2>
          <p className="mb-4">A groundbreaking 2021 study suggested that misophonia might be related to <strong>hyper-mirroring</strong>.<sup>[5]</sup> The part of the brain that controls movements (the premotor cortex) is activated when hearing someone else make a sound (like chewing), even though the person with misophonia isn't chewing themselves. This suggests it may be a "motor" response as much as an auditory one.<sup>[6]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetics & Onset</h2>
          <p className="mb-4">Misophonia often runs in families, suggesting a genetic component.<sup>[7]</sup> It typically emerges during the "pruning" phase of brain development in late childhood or early adolescence, suggesting it may be a byproduct of how neural connections are reorganized during this period.<sup>[8]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Selective Context</h2>
          <p className="mb-4">A key mystery of misophonia is why the reaction is often limited to sounds made by <em>people</em> (and often specific people, like family members).<sup>[9]</sup> This suggests that the brain's social processing pathways are also involved, and that the emotional meaning of the sound is crucial to the trigger response.<sup>[10]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Brout, J. J., et al. (2018). "Investigating misophonia." <em>Frontiers in Neuroscience</em>.</p>
          <p>[2] Kumar, S., et al. (2017). "The brain basis for misophonia." <em>Current Biology</em>, 27(4), 527-533.</p>
          <p>[3] Schröder, A., et al. (2019). "Misophonia and the insular cortex." <em>Scientific Reports</em>.</p>
          <p>[4] Palumbo, D. B., et al. (2018). "Mechanisms of misophonia." <em>Frontiers in Psychology</em>.</p>
          <p>[5] Kumar, S., et al. (2021). "The motor basis for misophonia." <em>Journal of Neuroscience</em>.</p>
          <p>[6] Rouw, R., & Erfanian, M. (2018). "A large-scale study." <em>Journal of Clinical Psychology</em>.</p>
          <p>[7] Sanchez, T. G., & Silva, F. E. (2018). "Familial misophonia." <em>Brazilian Journal of Otorhinolaryngology</em>.</p>
          <p>[8] Wu, M. S., et al. (2014). "Misophonia: Incidence and clinical correlates."</p>
          <p>[9] Edelstein, M., et al. (2013). "Misophonia: Physiological investigations."</p>
          <p>[10] Jager, I., et al. (2020). "Misophonia: Phenomenology and demographics."</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('misophonia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Misophonia</a>
      </div>
    </article>
  );
}
