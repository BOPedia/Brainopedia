import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TouretteOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function TouretteOverview({ setCurrentArticle }: TouretteOverviewProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tourette'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Tourette Syndrome</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Tourette Syndrome: Overview</h1>

      <div className="space-y-8">
        <section>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1604159342320-f7f24c260691?w=1080&q=80"
            alt="Child with neurological condition - understanding Tourette syndrome"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">Tourette syndrome affects approximately 1 in 160 children, with males being diagnosed about 3-4 times more frequently than females.<sup>[3]</sup> The condition is part of a spectrum of tic disorders and typically begins between ages 5 and 10, with tics often peaking in severity during early adolescence.<sup>[4]</sup> Tics are sudden, rapid, recurrent movements or vocalizations.<sup>[5]</sup></p>
          <p className="mb-4">While individuals with TS have some degree of control over their tics, suppressing them requires effort and can cause discomfort or a feeling of tension that is only relieved when the tic is performed.<sup>[6]</sup> Many people describe a premonitory urge—an uncomfortable sensation that precedes the tic.<sup>[7]</sup> It's important to note that the common media portrayal of TS focusing on coprolalia (involuntary swearing) is misleading—only about 10-15% of people with TS experience this symptom.<sup>[8]</sup> Most individuals with TS have much more subtle tics that may go unnoticed by others.<sup>[9]</sup></p>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[3] Knight, T., Steeves, T., Day, L., Lowerison, M., Jette, N., & Pringsheim, T. (2012). "Prevalence of tic disorders: A systematic review and meta-analysis." <em>Pediatric Neurology</em>, 47(2), 77-90.</p>
          <p>[4] Bloch, M. H., & Leckman, J. F. (2009). "Clinical course of Tourette syndrome." <em>Journal of Psychosomatic Research</em>, 67(6), 497-501.</p>
          <p>[5] Jankovic, J. (2001). "Tourette's syndrome." <em>New England Journal of Medicine</em>, 345(16), 1184-1192.</p>
          <p>[6] Leckman, J. F., Walker, D. E., & Cohen, D. J. (1993). "Premonitory urges in Tourette's syndrome." <em>American Journal of Psychiatry</em>, 150(1), 98-102.</p>
          <p>[7] Kwak, C., Dat Vuong, K., & Jankovic, J. (2003). "Premonitory sensory phenomenon in Tourette's syndrome." <em>Movement Disorders</em>, 18(12), 1530-1533.</p>
          <p>[8] Freeman, R. D., Fast, D. K., Burd, L., Kerbeshian, J., Robertson, M. M., & Sandor, P. (2000). "An international perspective on Tourette syndrome: Selected findings from 3,500 individuals in 22 countries." <em>Developmental Medicine & Child Neurology</em>, 42(7), 436-447.</p>
          <p>[9] Cath, D. C., Hedderly, T., Ludolph, A. G., et al. (2011). "European clinical guidelines for Tourette syndrome and other tic disorders. Part I: Assessment." <em>European Child & Adolescent Psychiatry</em>, 20(4), 155-171.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tourette'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Tourette Syndrome</a>
      </div>
    </article>
  );
}
