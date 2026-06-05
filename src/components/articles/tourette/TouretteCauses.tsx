import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TouretteCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function TouretteCauses({ setCurrentArticle }: TouretteCausesProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tourette'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Tourette Syndrome</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Tourette Syndrome: Causes & Origins</h1>

      <div className="space-y-8">
        <section>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1714939722610-9169e8883bf8?w=1080&q=80"
            alt="Brain basal ganglia - neurological basis of Tourette syndrome"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">Tourette syndrome has a strong genetic component, with studies showing increased risk in family members of individuals with TS.<sup>[17][18]</sup> However, the genetics are complex, likely involving multiple genes interacting with environmental factors.<sup>[19]</sup> Neurologically, TS involves differences in brain circuits connecting the basal ganglia, thalamus, and frontal cortex—areas involved in movement control and habit formation.<sup>[20]</sup></p>
          <p className="mb-4">Research suggests differences in neurotransmitter systems, particularly dopamine, serotonin, and GABA.<sup>[21][22]</sup> Brain imaging studies have revealed structural and functional differences in people with TS, particularly in the circuits that regulate voluntary movements and inhibit unwanted actions.<sup>[23]</sup> These neurological differences help explain why individuals with TS experience difficulty suppressing tics and experience premonitory urges.<sup>[24]</sup> Environmental factors such as prenatal complications and autoimmune responses may also contribute to tic expression.<sup>[25]</sup></p>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[17] O'Rourke, J. A., Scharf, J. M., Yu, D., & Pauls, D. L. (2009). "The genetics of Tourette syndrome: A review." <em>Journal of Psychosomatic Research</em>, 67(6), 533-545.</p>
          <p>[18] Pauls, D. L., Fernandez, T. V., Mathews, C. A., State, M. W., & Scharf, J. M. (2014). "The inheritance of Tourette disorder: A review." <em>Journal of Obsessive-Compulsive and Related Disorders</em>, 3(4), 380-385.</p>
          <p>[19] Mataix-Cols, D., Isomura, K., Pérez-Vigil, A., et al. (2015). "Familial risks of Tourette syndrome and chronic tic disorders: A population-based cohort study." <em>JAMA Psychiatry</em>, 72(8), 787-793.</p>
          <p>[20] Mink, J. W. (2001). "Basal ganglia dysfunction in Tourette's syndrome: A new hypothesis." <em>Pediatric Neurology</em>, 25(3), 190-198.</p>
          <p>[21] Singer, H. S., & Minzer, K. (2003). "Neurobiology of Tourette's syndrome: Concepts of neuroanatomic localization and neurochemical abnormalities." <em>Brain and Development</em>, 25, S70-S84.</p>
          <p>[22] Buse, J., Schoenefeld, K., Münchau, A., & Roessner, V. (2013). "Neuromodulation in Tourette syndrome: Dopamine and beyond." <em>Neuroscience & Biobehavioral Reviews</em>, 37(6), 1069-1084.</p>
          <p>[23] Peterson, B. S., Thomas, P., Kane, M. J., et al. (2003). "Basal ganglia volumes in patients with Gilles de la Tourette syndrome." <em>Archives of General Psychiatry</em>, 60(4), 415-424.</p>
          <p>[24] Jackson, G. M., Draper, A., Dyke, K., Pépés, S. E., & Jackson, S. R. (2015). "Inhibition, disinhibition, and the control of action in Tourette syndrome." <em>Trends in Cognitive Sciences</em>, 19(11), 655-665.</p>
          <p>[25] Martino, D., Zis, P., & Buttiglione, M. (2015). "The role of immune mechanisms in Tourette syndrome." <em>Brain Research</em>, 1617, 126-143.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tourette'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Tourette Syndrome</a>
      </div>
    </article>
  );
}
