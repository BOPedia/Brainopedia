import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TBIOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function TBIOverview({ setCurrentArticle }: TBIOverviewProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tbi'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to TBI</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Traumatic Brain Injury: Overview</h1>

      <div className="space-y-8">
        <section>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758691463110-697a814b2033?w=1080&q=80"
            alt="Brain imaging showing traumatic brain injury"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">
            Approximately 2.8 million TBIs occur annually in the United States alone, with an estimated 5.3 million Americans currently living with TBI-related disabilities.<sup>[3]</sup> TBI can result from falls, motor vehicle accidents, sports injuries, assaults, blast injuries, or any event causing the brain to move rapidly inside the skull or be penetrated by an object.<sup>[4]</sup>
          </p>
          <p className="mb-4">
            The effects of TBI are highly variable, depending on which areas of the brain are damaged, the severity of injury, and individual factors.<sup>[5]</sup> Some individuals make significant recovery, while others experience permanent changes requiring lifelong accommodation.<sup>[6]</sup> TBI is often called an "invisible disability" because cognitive and emotional changes may not be outwardly apparent, leading to misunderstanding and lack of support.<sup>[7]</sup>
          </p>
          <p className="mb-4">
            Importantly, a TBI doesn't erase who someone was—it creates a new neurological reality.<sup>[8]</sup> Understanding TBI as acquired neurodivergence validates this experience and emphasizes the need for ongoing support and accommodation.<sup>[9]</sup>
          </p>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[3] Taylor, C. A., Bell, J. M., Breiding, M. J., & Xu, L. (2017). "Traumatic brain injury-related emergency department visits, hospitalizations, and deaths—United States, 2007 and 2013." <em>MMWR Surveillance Summaries</em>, 66(9), 1-16.</p>
          <p>[4] Langlois, J. A., Rutland-Brown, W., & Wald, M. M. (2006). "The epidemiology and impact of traumatic brain injury: A brief overview." <em>The Journal of Head Trauma Rehabilitation</em>, 21(5), 375-378.</p>
          <p>[5] Dikmen, S. S., Corrigan, J. D., Levin, H. S., Machamer, J., Stiers, W., & Weisskopf, M. G. (2009). "Cognitive outcome following traumatic brain injury." <em>The Journal of Head Trauma Rehabilitation</em>, 24(6), 430-438.</p>
          <p>[6] Zaloshnja, E., Miller, T., Langlois, J. A., & Selassie, A. W. (2008). "Prevalence of long-term disability from traumatic brain injury in the civilian population of the United States, 2005." <em>The Journal of Head Trauma Rehabilitation</em>, 23(6), 394-400.</p>
          <p>[7] Rao, V., & Lyketsos, C. (2000). "Neuropsychiatric sequelae of traumatic brain injury." <em>Psychosomatics</em>, 41(2), 95-103.</p>
          <p>[8] Nochi, M. (1998). "'Loss of self' in the narratives of people with traumatic brain injuries: A qualitative analysis." <em>Social Science & Medicine</em>, 46(7), 869-878.</p>
          <p>[9] Velikonja, D., Tate, R., Ponsford, J., et al. (2014). "INCOG recommendations for management of cognition following traumatic brain injury, part V: Memory." <em>The Journal of Head Trauma Rehabilitation</em>, 29(4), 369-386.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tbi'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to TBI</a>
      </div>
    </article>
  );
}
