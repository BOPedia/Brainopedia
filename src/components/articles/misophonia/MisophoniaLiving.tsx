import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface MisophoniaLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function MisophoniaLiving({ setCurrentArticle }: MisophoniaLivingProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('misophonia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Misophonia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Living with Misophonia</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Living with misophonia requires constant navigation of the auditory environment. While it can be a deeply isolating condition, building a self-affirming perspective and a practical toolkit allows many individuals to lead rich, connected lives.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Self-Compassion & Reframing</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1080&q=80" alt="Person relaxing in a quiet space" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">The most significant internal hurdle in misophonia is the shame that follows an intense reaction. Living well involves:<sup>[2]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>"It's My Brain, Not My Character":</strong> Recognizing that the rage or disgust is a neurological "glitch" in the salience network, not a reflection of your feelings toward a person.<sup>[3]</sup></li>
            <li className="mb-2"><strong>Accepting Limitations:</strong> Understanding that on some days, your tolerance will be lower, and it's okay to step away or prioritize quiet.</li>
            <li className="mb-2"><strong>Differentiating "Annoyance" from "Trigger":</strong> Learning to identify when a sound is just annoying versus when it's triggering a survival response.<sup>[4]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social Navigation</h2>
          <p className="mb-4">Socializing with misophonia requires planning and clear communication:<sup>[5]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>The "Dine-and-Dash" Alternative:</strong> Choosing social activities that don't center on food, or eating beforehand so you can focus on conversation.</li>
            <li className="mb-2"><strong>Transparent Communication:</strong> Telling friends, "I have a sensory condition that makes certain sounds very distressing; I might need to step away or use headphones sometimes."<sup>[6]</sup></li>
            <li className="mb-2"><strong>Identifying "Safe" People:</strong> Finding friends who understand and don't take it personally if you need to leave or react.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Daily Strategy: The Layered Approach</h2>
          <p className="mb-4">Many successful individuals use multiple layers of protection:<sup>[7]</sup></p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">Passive Protection</h3>
              <p className="text-sm">High-fidelity earplugs that lower volume without blocking out all speech.<sup>[8]</sup></p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">Active Protection</h3>
              <p className="text-sm">Noise-canceling headphones with a favorite playlist or brown noise.<sup>[9]</sup></p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Building a "Quiet Reserve"</h2>
          <p className="mb-4">Living with misophonia is mentally exhausting because the brain is constantly scanning for threats. Creating a "quiet reserve"—dedicated times of the day with zero trigger sounds—is essential for recharging and lowering baseline irritability.<sup>[10]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Power of Advocacy</h2>
          <p className="mb-4">Connecting with organizations like the <strong>Misophonia Association</strong> or <strong>soquiet.org</strong> provides resources and a sense of community. Advocating for misophonia awareness helps reduce the stigma and "invisible" nature of the condition.<sup>[11]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Rouw, R., & Erfanian, M. (2018). "A large-scale study of misophonia." <em>Journal of Clinical Psychology</em>.</p>
          <p>[2] Germer, C. K. (2009). <em>The Mindful Path to Self-Compassion</em>.</p>
          <p>[3] Kumar, S., et al. (2017). "The brain basis for misophonia." <em>Current Biology</em>.</p>
          <p>[4] Schröder, A., et al. (2013). "Misophonia: Diagnostic criteria."</p>
          <p>[5] Edelstein, M., et al. (2013). "Misophonia: Physiological investigations."</p>
          <p>[6] soquiet.org. "Communication tips for misophonia."</p>
          <p>[7] Brout, J. J. (2018). "The Misophonia Provider Network."</p>
          <p>[8] Reid, A. M., et al. (2016). "CBT for misophonia."</p>
          <p>[9] Dozier, T. H. (2015). "Counterconditioning treatment."</p>
          <p>[10] Potgieter, I., et al. (2019). "Scoping review of research."</p>
          <p>[11] Misophonia Association. (2020). "Resources and Advocacy."</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('misophonia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Misophonia</a>
      </div>
    </article>
  );
}
