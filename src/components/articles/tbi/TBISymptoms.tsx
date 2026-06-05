import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TBISymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function TBISymptoms({ setCurrentArticle }: TBISymptomsProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tbi'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to TBI</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Traumatic Brain Injury: Symptoms & Characteristics</h1>

      <div className="space-y-8">
        <section>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1740908900846-271f4f021b6a?w=1080&q=80"
            alt="Cognitive and memory challenges following TBI"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">TBI can affect any aspect of cognition depending on injury location and severity.<sup>[10]</sup> Attention and concentration difficulties include difficulty sustaining focus, being easily distracted, trouble dividing attention between multiple tasks, and mental fatigue with reduced stamina.<sup>[11]</sup> Memory challenges include short-term memory difficulties, challenges forming new memories, difficulty retrieving memories from before injury, forgetting conversations or appointments, and problems with prospective memory.<sup>[12]</sup></p>
          <p className="mb-4">Executive functioning difficulties include planning and organization challenges, difficulty with multi-step tasks, impaired problem-solving and reasoning, reduced cognitive flexibility, poor impulse control and judgment, and difficulty initiating tasks.<sup>[13]</sup> Processing speed changes include slowed information processing, needing more time to understand or respond, delayed reaction times, and fatigue from mental effort.<sup>[14]</sup></p>
          <p className="mb-4">Communication and language challenges include word-finding difficulties, trouble organizing thoughts into speech, challenges with social communication, and difficulty understanding complex or abstract language.<sup>[15]</sup> Sensory processing changes include sensitivity to light, sound or touch, difficulty filtering sensory information, visual processing changes, vestibular dysfunction, and changes to taste or smell.<sup>[16]</sup></p>
          <p className="mb-4">Emotional dysregulation includes mood swings and emotional lability, increased irritability anger or aggression, depression and anxiety, emotional blunting or apathy, and loss of emotional control.<sup>[17]</sup> Behavioral and personality changes include impulsivity and disinhibition, social inappropriateness, reduced empathy or self-awareness, rigidity and inflexibility, and loss of initiative.<sup>[18]</sup> Physical effects include chronic headaches and pain, fatigue and sleep disturbances, motor coordination difficulties, and hormonal changes.<sup>[19]</sup></p>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[10] McAllister, T. W., Flashman, L. A., McDonald, B. C., & Saykin, A. J. (2006). "Mechanisms of working memory dysfunction after mild and moderate TBI: Evidence from functional MRI and neurogenetics." <em>Journal of Neurotrauma</em>, 23(10), 1450-1467.</p>
          <p>[11] Azouvi, P., Arnaud, V., Dromer, E., & Vallat-Azouvi, C. (2017). "Neuropsychology of traumatic brain injury: An expert overview." <em>Revue Neurologique</em>, 173(7-8), 461-472.</p>
          <p>[12] Vakil, E. (2005). "The effect of moderate to severe traumatic brain injury (TBI) on different aspects of memory: A selective review." <em>Journal of Clinical and Experimental Neuropsychology</em>, 27(8), 977-1021.</p>
          <p>[13] McDonald, B. C., Flashman, L. A., & Saykin, A. J. (2002). "Executive dysfunction following traumatic brain injury: Neural substrates and treatment strategies." <em>NeuroRehabilitation</em>, 17(4), 333-344.</p>
          <p>[14] Dymowski, A. R., Owens, J. A., Ponsford, J. L., & Willmott, C. (2015). "Speed of processing and strategic control of attention after traumatic brain injury." <em>Journal of Clinical and Experimental Neuropsychology</em>, 37(10), 1024-1035.</p>
          <p>[15] MacDonald, S., & Johnson, C. J. (2005). "Assessment of subtle cognitive-communication deficits following acquired brain injury: A normative study of the Functional Assessment of Verbal Reasoning and Executive Strategies (FAVRES)." <em>Brain Injury</em>, 19(11), 895-902.</p>
          <p>[16] Greenwald, B. D., Kapoor, N., & Singh, A. D. (2012). "Visual impairments in the first year after traumatic brain injury." <em>Brain Injury</em>, 26(11), 1338-1359.</p>
          <p>[17] Osborn, A. J., Mathias, J. L., & Fairweather-Schmidt, A. K. (2014). "Depression following adult, non-penetrating traumatic brain injury: A meta-analysis examining methodological variables and sample characteristics." <em>Neuroscience & Biobehavioral Reviews</em>, 47, 1-15.</p>
          <p>[18] Ciurli, P., Formisano, R., Bivona, U., Cantagallo, A., & Angelelli, P. (2011). "Neuropsychiatric disorders in persons with severe traumatic brain injury: Prevalence, phenomenology, and relationship with demographic, clinical, and functional features." <em>The Journal of Head Trauma Rehabilitation</em>, 26(2), 116-126.</p>
          <p>[19] Nampiaparampil, D. E. (2008). "Prevalence of chronic pain after traumatic brain injury: A systematic review." <em>JAMA</em>, 300(6), 711-719.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tbi'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to TBI</a>
      </div>
    </article>
  );
}
