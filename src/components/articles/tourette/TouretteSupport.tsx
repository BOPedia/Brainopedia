import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TouretteSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function TouretteSupport({ setCurrentArticle }: TouretteSupportProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tourette'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Tourette Syndrome</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Tourette Syndrome: Support & Management</h1>

      <div className="space-y-8">
        <section>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1620924701256-1c6f1103ebdf?w=1080&q=80"
            alt="Behavioral therapy and support - managing Tourette syndrome"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">Many individuals with mild TS do not require treatment.<sup>[33]</sup> When intervention is needed, treatment decisions should be based on how much the tics interfere with daily functioning, not just their presence or severity.<sup>[34]</sup> Behavioral therapies include Comprehensive Behavioral Intervention for Tics (CBIT), Habit Reversal Training (HRT), Exposure and Response Prevention (ERP), psychoeducation about tics, and relaxation and stress management techniques.<sup>[35][36]</sup></p>
          <p className="mb-4">When behavioral approaches are insufficient, medication may be considered to help reduce tic severity, though all have potential side effects and treatment should be individualized and carefully monitored.<sup>[37]</sup> Supporting co-occurring conditions is crucial and includes treatment for ADHD if present, management of OCD symptoms, therapy for anxiety or mood disorders, and educational support and accommodations.<sup>[38]</sup> Environmental and social support involves education for family, teachers, and peers about TS, reducing stigma and misconceptions, school accommodations (extended time, quiet space for tic release), support groups and community connection, and advocacy and self-advocacy skills.<sup>[39]</sup></p>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[33] Pringsheim, T., Okun, M. S., Müller-Vahl, K., et al. (2019). "Practice guideline recommendations summary: Treatment of tics in people with Tourette syndrome and chronic tic disorders." <em>Neurology</em>, 92(19), 896-906.</p>
          <p>[34] Verdellen, C., van de Griendt, J., Hartmann, A., & Murphy, T. (2011). "European clinical guidelines for Tourette syndrome and other tic disorders. Part III: Behavioural and psychosocial interventions." <em>European Child & Adolescent Psychiatry</em>, 20(4), 197-207.</p>
          <p>[35] Piacentini, J., Woods, D. W., Scahill, L., et al. (2010). "Behavior therapy for children with Tourette disorder: A randomized controlled trial." <em>JAMA</em>, 303(19), 1929-1937.</p>
          <p>[36] Wilhelm, S., Peterson, A. L., Piacentini, J., et al. (2012). "Randomized trial of behavior therapy for adults with Tourette syndrome." <em>Archives of General Psychiatry</em>, 69(8), 795-803.</p>
          <p>[37] Pringsheim, T., Holler-Managan, Y., Okun, M. S., et al. (2019). "Comprehensive systematic review summary: Treatment of tics in people with Tourette syndrome and chronic tic disorders." <em>Neurology</em>, 92(19), 907-915.</p>
          <p>[38] Rizzo, R., Gulisano, M., Martino, D., & Robertson, M. M. (2017). "Gilles de la Tourette syndrome, depression, depressive illness, and correlates in a child and adolescent population." <em>Journal of Child and Adolescent Psychopharmacology</em>, 27(3), 243-249.</p>
          <p>[39] Conelea, C. A., Brandt, B. C., & Woods, D. W. (2011). "The impact of a stress induction task on tic frequencies in youth with Tourette syndrome." <em>Behaviour Research and Therapy</em>, 49(8), 492-497.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tourette'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Tourette Syndrome</a>
      </div>
    </article>
  );
}
