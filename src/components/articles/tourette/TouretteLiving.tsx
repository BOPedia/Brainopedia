import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TouretteLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function TouretteLiving({ setCurrentArticle }: TouretteLivingProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tourette'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Tourette Syndrome</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Tourette Syndrome: Living with Tourette Syndrome</h1>

      <div className="space-y-8">
        <section>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1604159342320-f7f24c260691?w=1080&q=80"
            alt="Living with Tourette syndrome - successful navigation"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">Individuals with Tourette syndrome lead successful and fulfilling lives across all areas of society.<sup>[40]</sup> For many individuals, tics improve significantly in late adolescence or early adulthood, though some continue to experience tics throughout life.<sup>[41]</sup> Living with TS involves navigating tics, premonitory urges, and often co-occurring conditions, while combating misconceptions and stigma.<sup>[42]</sup> With appropriate support and understanding, people with TS develop effective strategies for managing tics and thrive in education, careers, and relationships.<sup>[43]</sup></p>
          <p className="mb-4">Living well with Tourette syndrome involves understanding one's tic patterns and triggers, developing strategies for managing tics and premonitory urges, accessing appropriate accommodations in education and employment, addressing co-occurring conditions, and building self-advocacy skills.<sup>[44]</sup> Topics related to living with Tourette syndrome include managing tics in different environments, addressing stigma and misconceptions (particularly around coprolalia which only affects 10-15%), navigating school and workplace accommodations, managing co-occurring conditions like ADHD and OCD, building self-esteem and confidence, connecting with the Tourette community, educating others about the reality of TS beyond media portrayals, and understanding that tics often improve in adulthood.<sup>[45]</sup></p>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[40] Burd, L., Kerbeshian, P. J., Barth, A., Klug, M. G., Avery, P. K., & Benz, B. (2001). "Long-term follow-up of an epidemiologically defined cohort of patients with Tourette syndrome." <em>Journal of Child Neurology</em>, 16(6), 431-437.</p>
          <p>[41] Groth, C., Mol Debes, N., Rask, C. U., Lange, T., & Skov, L. (2017). "Course of Tourette syndrome and comorbidities in a large prospective clinical study." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 56(4), 304-312.</p>
          <p>[42] Conelea, C. A., Woods, D. W., Zinner, S. H., et al. (2011). "Exploring the impact of chronic tic disorders on youth: Results from the Tourette Syndrome Impact Survey." <em>Child Psychiatry & Human Development</em>, 42(2), 219-242.</p>
          <p>[43] Elstner, K., Selai, C. E., Trimble, M. R., & Robertson, M. M. (2001). "Quality of life (QOL) of patients with Gilles de la Tourette's syndrome." <em>Acta Psychiatrica Scandinavica</em>, 103(1), 52-59.</p>
          <p>[44] Storch, E. A., Murphy, T. K., Geffken, G. R., et al. (2005). "Reliability and validity of the Yale Global Tic Severity Scale." <em>Psychological Assessment</em>, 17(4), 486-491.</p>
          <p>[45] Cutler, D., Murphy, T., Gilmour, J., & Heyman, I. (2009). "The quality of life of young people with Tourette syndrome." <em>Child: Care, Health and Development</em>, 35(4), 496-504.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tourette'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Tourette Syndrome</a>
      </div>
    </article>
  );
}
