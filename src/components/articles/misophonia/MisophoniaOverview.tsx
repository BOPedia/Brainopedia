import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface MisophoniaOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function MisophoniaOverview({ setCurrentArticle }: MisophoniaOverviewProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('misophonia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Misophonia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Misophonia: Overview</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Misophonia, meaning "hatred of sound," is a neurosensory condition characterized by strong negative emotional and physiological reactions to specific sounds, typically those produced by other people.<sup>[1]</sup> These trigger sounds, often related to eating, breathing, or repetitive noises, can provoke intense feelings of anger, anxiety, disgust, or panic.<sup>[2]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What Is Misophonia?</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1618382521478-a0bfaf1a7604?w=1080&q=80" alt="Person covering ears from noise" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Misophonia is estimated to affect approximately 6–20% of the population to some degree.<sup>[3]</sup> It typically begins in late childhood or early adolescence, often between ages 9–13.<sup>[4]</sup> Unlike general noise sensitivity or hyperacusis (sensitivity to loud sounds), misophonia involves specific "trigger" sounds that are typically at normal volume levels.<sup>[5]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Common Trigger Sounds</h2>
          <p className="mb-4">The response is not about the loudness of the sound but rather the specific type and context. Common triggers include:<sup>[6]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Eating sounds:</strong> Chewing, slurping, swallowing, crunching.</li>
            <li className="mb-2"><strong>Breathing sounds:</strong> Heavy breathing, sniffing, throat clearing.<sup>[7]</sup></li>
            <li className="mb-2"><strong>Repetitive noises:</strong> Pen clicking, keyboard typing, foot tapping.</li>
            <li className="mb-2"><strong>Visual triggers:</strong> Seeing someone chew gum or bounce their leg (sometimes called misokinesia).<sup>[8]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Misophonia Response</h2>
          <p className="mb-4">For an individual with misophonia, a trigger sound is not just "annoying." It triggers a fight-or-flight response. The brain's salience network over-prioritizes the sound, leading to an immediate and intense emotional reaction that is involuntary and difficult to regulate.<sup>[9]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Jastreboff, P. J., & Jastreboff, M. M. (2001). "Decreased sound tolerance."</p>
          <p>[2] Schröder, A., et al. (2013). "Misophonia: Diagnostic criteria for a new disorder." <em>PLOS ONE</em>.</p>
          <p>[3] Wu, M. S., et al. (2014). "Misophonia: Incidence and clinical correlates." <em>Journal of Clinical Psychology</em>.</p>
          <p>[4] Edelstein, M., et al. (2013). "Misophonia: Physiological investigations." <em>Frontiers in Human Neuroscience</em>.</p>
          <p>[5] Tyler, R. S., et al. (2014). "A review of hyperacusis." <em>American Journal of Audiology</em>.</p>
          <p>[6] Kumar, S., et al. (2017). "The brain basis for misophonia." <em>Current Biology</em>.</p>
          <p>[7] Rouw, R., & Erfanian, M. (2018). "A large-scale study of misophonia." <em>Journal of Clinical Psychology</em>.</p>
          <p>[8] Swedo, S. E., et al. (2022). "Consensus definition of misophonia." <em>Frontiers in Neuroscience</em>.</p>
          <p>[9] Schröder, A., et al. (2019). "Misophonia and the salience network." <em>Scientific Reports</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('misophonia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Misophonia</a>
      </div>
    </article>
  );
}
