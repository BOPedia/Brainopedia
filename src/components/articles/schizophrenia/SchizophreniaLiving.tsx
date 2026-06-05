import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SchizophreniaLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function SchizophreniaLiving({ setCurrentArticle }: SchizophreniaLivingProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('schizophrenia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Schizophrenia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Living with Schizophrenia</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Living with schizophrenia is a lifelong journey of navigating a unique perceptual world. While the condition brings significant hurdles, many individuals lead rich, connected, and purposeful lives by developing deep self-understanding and building a supportive community.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Recovery Perspective</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1687367168095-844e7908b0f2?w=1080&q=80" alt="Person navigating a complex perceptual world" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">"Recovery" in schizophrenia doesn't necessarily mean the total absence of symptoms. It means living a life of one's own choosing, with meaning and dignity:<sup>[2]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Redefining Success:</strong> Celebrating personal milestones, whether that's holding a job, finishing an art piece, or maintaining a key relationship.<sup>[3]</sup></li>
            <li className="mb-2"><strong>The Hearing Voices Movement:</strong> Many people find power in the "Hearing Voices Network," which teaches that voices don't always have to be eliminated—they can be understood and navigated.<sup>[4]</sup></li>
            <li className="mb-2"><strong>Combating Stigma:</strong> Moving from a "broken" identity to a "neurodivergent" identity reduces the toxic shame that often accompanies the diagnosis.<sup>[5]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Daily Strategies</h2>
          <p className="mb-4">Managing the day-to-day involves a proactive toolkit:<sup>[6]</sup></p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-md border-2 border-[#2abcd4] p-4">
              <h3 className="text-[#0c264d] font-bold mb-2">Reality Testing</h3>
              <p className="text-sm">Having a "reality check partner"—a trusted person you can ask, "Did you hear that voice too?" to help distinguish internal from external stimuli.<sup>[7]</sup></p>
            </div>
            <div className="bg-white rounded-md border-2 border-[#2abcd4] p-4">
              <h3 className="text-[#0c264d] font-bold mb-2">Cognitive Offloading</h3>
              <p className="text-sm">Using apps, lists, and alarms to compensate for working memory challenges and executive function gaps.<sup>[8]</sup></p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Relationships & Connection</h2>
          <p className="mb-4">Social isolation is a major risk in schizophrenia. Living well involves:<sup>[9]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Community Engagement:</strong> Finding social spaces (like "Clubhouses") designed specifically for people with mental health challenges.</li>
            <li className="mb-2"><strong>Clear Boundaries:</strong> Communicating to loved ones when you are feeling overstimulated or need a "quiet day" to manage internal noise.</li>
            <li className="mb-2"><strong>Dating & Disclosure:</strong> Learning how and when to share your neurotype with partners in a way that prioritizes safety and understanding.<sup>[10]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Power of Creativity</h2>
          <p className="mb-4">History and research show a deep link between the schizophrenia neurotype and exceptional creativity in art, music, and philosophy.<sup>[11]</sup> Engaging in creative pursuits is often a vital outlet for processing unique perceptual experiences and contributing a one-of-a-kind perspective to the world.<sup>[12]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Bellack, A. S. (2006). "Scientific and consumer models of recovery." <em>Schizophrenia Bulletin</em>.</p>
          <p>[2] Anthony, W. A. (1993). "Recovery from mental illness." <em>Psychosocial Rehabilitation Journal</em>.</p>
          <p>[3] Liberman, R. P., & Kopelowicz, A. (2005). "Recovery from schizophrenia." <em>Psychiatric Services</em>.</p>
          <p>[4] Corstens, D., et al. (2014). "The Hearing Voices Movement." <em>Schizophrenia Bulletin</em>.</p>
          <p>[5] Slade, M., et al. (2014). "Uses and abuses of recovery." <em>World Psychiatry</em>.</p>
          <p>[6] Tew, J., et al. (2012). "Social factors and recovery." <em>British Journal of Social Work</em>.</p>
          <p>[7] Longden, E. (2013). <em>Learning from the Voices in My Head</em>. TED Books.</p>
          <p>[8] Medalia, A., & Saperstein, A. (2013). "The role of cognitive remediation."</p>
          <p>[9] Messinger, J. W., et al. (2011). "Social deficits in schizophrenia."</p>
          <p>[10] ADA.gov. "Rights of individuals with mental health conditions."</p>
          <p>[11] Jamison, K. R. (2017). "Schizophrenia and creativity."</p>
          <p>[12] Susser, E. (2011). "Creativity and mental health." <em>Science</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('schizophrenia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Schizophrenia</a>
      </div>
    </article>
  );
}
