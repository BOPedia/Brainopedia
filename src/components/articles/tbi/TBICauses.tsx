import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TBICausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function TBICauses({ setCurrentArticle }: TBICausesProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tbi'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to TBI</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Traumatic Brain Injury: Causes & Origins</h1>

      <div className="space-y-8">
        <section>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758404958502-44f156617bae?w=1080&q=80"
            alt="Emergency trauma - causes of traumatic brain injury"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">TBI occurs when an external force injures the brain.<sup>[20]</sup> Classification by mechanism includes closed head injury (skull remains intact but brain is injured by impact, rapid acceleration/deceleration, or rotational forces), penetrating injury (object breaks through skull and enters brain tissue), and blast injury (pressure waves from explosions cause diffuse damage).<sup>[21]</sup></p>
          <p className="mb-4">TBI can result from falls, motor vehicle accidents, sports injuries, assaults, blast injuries in military, or any event causing the brain to move rapidly inside the skull.<sup>[22]</sup> Severity ranges from mild TBI or concussion (brief loss of consciousness or confusion with most recovering within days to weeks though 15-30% experience persistent post-concussive symptoms, often dismissed as "just a concussion" despite real cognitive changes), to moderate TBI (loss of consciousness for minutes to hours, confusion lasting days to weeks, significant cognitive physical and behavioral changes), to severe TBI (extended loss of consciousness or coma, profound cognitive and functional impairments, often resulting in permanent disability).<sup>[23][24]</sup></p>
          <p className="mb-4">Repeated mild TBIs in sports or military can cause cumulative damage.<sup>[25]</sup> The brain injury causes structural damage to neurons and neural pathways, disrupts neurotransmitter systems, causes inflammation and secondary injury processes, and fundamentally alters how the brain processes information creating acquired neurodivergence.<sup>[26][27]</sup></p>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[20] Ghajar, J. (2000). "Traumatic brain injury." <em>The Lancet</em>, 356(9233), 923-929.</p>
          <p>[21] Meaney, D. F., & Smith, D. H. (2011). "Biomechanics of concussion." <em>Clinics in Sports Medicine</em>, 30(1), 19-31.</p>
          <p>[22] Faul, M., Xu, L., Wald, M. M., & Coronado, V. G. (2010). <em>Traumatic brain injury in the United States: Emergency department visits, hospitalizations and deaths 2002-2006</em>. Atlanta, GA: Centers for Disease Control and Prevention.</p>
          <p>[23] McCrory, P., Meeuwisse, W., Dvorak, J., et al. (2017). "Consensus statement on concussion in sport—the 5th international conference on concussion in sport held in Berlin, October 2016." <em>British Journal of Sports Medicine</em>, 51(11), 838-847.</p>
          <p>[24] Stocchetti, N., & Zanier, E. R. (2016). "Chronic impact of traumatic brain injury on outcome and quality of life: A narrative review." <em>Critical Care</em>, 20(1), 148.</p>
          <p>[25] McKee, A. C., Cantu, R. C., Nowinski, C. J., et al. (2009). "Chronic traumatic encephalopathy in athletes: Progressive tauopathy after repetitive head injury." <em>Journal of Neuropathology & Experimental Neurology</em>, 68(7), 709-735.</p>
          <p>[26] Werner, C., & Engelhard, K. (2007). "Pathophysiology of traumatic brain injury." <em>British Journal of Anaesthesia</em>, 99(1), 4-9.</p>
          <p>[27] Xiong, Y., Mahmood, A., & Chopp, M. (2013). "Animal models of traumatic brain injury." <em>Nature Reviews Neuroscience</em>, 14(2), 128-142.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tbi'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to TBI</a>
      </div>
    </article>
  );
}
