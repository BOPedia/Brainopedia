import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TBISupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function TBISupport({ setCurrentArticle }: TBISupportProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tbi'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to TBI</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Traumatic Brain Injury: Support & Management</h1>

      <div className="space-y-8">
        <section>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1764314138160-5f04f4a50dae?w=1080&q=80"
            alt="Rehabilitation and therapeutic support for TBI recovery"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">Recovery and adaptation following TBI require comprehensive, individualized, and often long-term support.<sup>[35]</sup> Rehabilitation services include cognitive rehabilitation therapy, speech-language therapy for communication and cognition, occupational therapy for daily living skills, physical therapy for motor function, neuropsychological assessment and treatment planning, and vocational rehabilitation.<sup>[36]</sup></p>
          <p className="mb-4">Cognitive accommodations include external memory aids (notebooks, apps, alarms), environmental modifications (reduced distractions, organization systems), task simplification and breaking down complex activities, extended time for processing and task completion, written instructions and checklists, and reduced work or academic load.<sup>[37]</sup> Emotional and mental health support includes individual therapy adapted for cognitive changes, support groups with other TBI survivors, family education and counseling, psychiatric medication management when appropriate, and grief counseling for identity and loss.<sup>[38]</sup></p>
          <p className="mb-4">Lifestyle management includes pacing activities to prevent cognitive fatigue, prioritizing sleep and rest, managing sensory environments, avoiding alcohol and substance use, and regular exercise adapted to abilities.<sup>[39]</sup> Education and advocacy includes educating family, friends and employers about TBI, self-advocacy for needed accommodations, understanding TBI as acquired neurodivergence, and connecting with disability community and resources.<sup>[40]</sup> Long-term considerations include that recovery can continue for years through neuroplasticity, some changes may be permanent requiring acceptance and adaptation, and there is increased risk of dementia and neurological conditions later in life.<sup>[41]</sup></p>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[35] Cicerone, K. D., Langenbahn, D. M., Braden, C., et al. (2011). "Evidence-based cognitive rehabilitation: Updated review of the literature from 2003 through 2008." <em>Archives of Physical Medicine and Rehabilitation</em>, 92(4), 519-530.</p>
          <p>[36] Turner-Stokes, L., Pick, A., Nair, A., Disler, P. B., & Wade, D. T. (2015). "Multi-disciplinary rehabilitation for acquired brain injury in adults of working age." <em>Cochrane Database of Systematic Reviews</em>, (12), CD004170.</p>
          <p>[37] Sohlberg, M. M., & Mateer, C. A. (2001). <em>Cognitive rehabilitation: An integrative neuropsychological approach</em>. New York: Guilford Press.</p>
          <p>[38] Bryant, R. A., O'Donnell, M. L., Creamer, M., McFarlane, A. C., Clark, C. R., & Silove, D. (2010). "The psychiatric sequelae of traumatic injury." <em>American Journal of Psychiatry</em>, 167(3), 312-320.</p>
          <p>[39] Ponsford, J. L., Ziino, C., Parcell, D. L., et al. (2012). "Fatigue and sleep disturbance following traumatic brain injury—their nature, causes, and potential treatments." <em>The Journal of Head Trauma Rehabilitation</em>, 27(3), 224-233.</p>
          <p>[40] Lefebvre, H., Pelchat, D., Swaine, B., Gélinas, I., & Levert, M. J. (2005). "The experiences of individuals with a traumatic brain injury, families, physicians and health professionals regarding care provided throughout the continuum." <em>Brain Injury</em>, 19(8), 585-597.</p>
          <p>[41] Nordström, P., Michaëlsson, K., Gustafson, Y., & Nordström, A. (2014). "Traumatic brain injury and young onset dementia: A nationwide cohort study." <em>Annals of Neurology</em>, 75(3), 374-381.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tbi'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to TBI</a>
      </div>
    </article>
  );
}
