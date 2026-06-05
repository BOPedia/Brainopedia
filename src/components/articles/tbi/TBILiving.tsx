import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TBILivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function TBILiving({ setCurrentArticle }: TBILivingProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tbi'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to TBI</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Traumatic Brain Injury: Living with TBI</h1>

      <div className="space-y-8">
        <section>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1695370993551-8ac683cd6134?w=1080&q=80"
            alt="Adaptation and quality of life after TBI"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">Living with TBI means navigating a changed neurological reality.<sup>[42]</sup> With understanding, appropriate support, and accommodation, individuals can adapt, find new paths forward, and experience quality of life.<sup>[43]</sup> Recognizing TBI as acquired neurodivergence validates the experience of living with a fundamentally altered brain while honoring the person's continued identity and potential.<sup>[44]</sup></p>
          <p className="mb-4">Many individuals with TBI describe feeling like themselves but also fundamentally changed, navigating a world that no longer matches their pre-injury brain.<sup>[45]</sup> Mental health impacts include increased risk of depression, anxiety, PTSD, grief over loss of pre-injury self, identity challenges and adjustment difficulties, social isolation, and increased suicide risk requiring comprehensive support.<sup>[46]</sup></p>
          <p className="mb-4">Living well with TBI involves accessing comprehensive rehabilitation services, implementing cognitive accommodations and environmental modifications, developing new strategies for memory, organization and cognitive demands, accessing emotional and mental health support, educating others about the invisible nature of TBI, building self-advocacy skills, and connecting with the TBI survivor community.<sup>[47]</sup> Topics related to living with TBI include adapting to cognitive changes, managing cognitive fatigue and pacing activities, navigating emotional and personality changes, rebuilding identity after acquired brain injury, accessing appropriate accommodations and supports, managing relationships and social connections, understanding TBI as acquired neurodivergence not personal failing, and recognizing that recovery is an ongoing process with potential for continued adaptation and quality of life.<sup>[48]</sup></p>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[42] Cantor, J. B., Ashman, T., Gordon, W., et al. (2008). "Fatigue after traumatic brain injury and its impact on participation and quality of life." <em>The Journal of Head Trauma Rehabilitation</em>, 23(1), 41-51.</p>
          <p>[43] Cappa, K. A., Conger, J. C., & Conger, A. J. (2011). "Injury severity and outcome: A meta-analysis of prospective studies on TBI outcome." <em>Health Psychology</em>, 30(4), 542-560.</p>
          <p>[44] Gracey, F., Palmer, S., Rous, B., et al. (2008). "'Feeling part of things': Personal construction of self after brain injury." <em>Neuropsychological Rehabilitation</em>, 18(5-6), 627-650.</p>
          <p>[45] Levack, W. M., Kayes, N. M., & Fadyl, J. K. (2010). "Experience of recovery and outcome following traumatic brain injury: A metasynthesis of qualitative research." <em>Disability and Rehabilitation</em>, 32(12), 986-999.</p>
          <p>[46] Simpson, G., & Tate, R. (2007). "Suicidality in people surviving a traumatic brain injury: Prevalence, risk factors and implications for clinical management." <em>Brain Injury</em>, 21(13-14), 1335-1351.</p>
          <p>[47] Sander, A. M., Maestas, K. L., Sherer, M., Malec, J. F., & Nakase-Richardson, R. (2012). "Relationship of caregiver and family functioning to participation outcomes after postacute rehabilitation for traumatic brain injury: A multicenter investigation." <em>Archives of Physical Medicine and Rehabilitation</em>, 93(5), 842-848.</p>
          <p>[48] Gan, C., Campbell, K. A., Gemeinhardt, M., & McFadden, G. T. (2006). "Predictors of family system functioning after brain injury." <em>Brain Injury</em>, 20(6), 587-600.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tbi'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to TBI</a>
      </div>
    </article>
  );
}
