import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface OCDCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function OCDCauses({ setCurrentArticle }: OCDCausesProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('ocd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to OCD</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Causes & Origins of OCD</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">The development of OCD is believed to be the result of a complex interaction between genetic, biological, and environmental factors. Research has identified specific brain structures and chemical messengers that play a key role in the condition.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The CSTC Circuit</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1080&q=80" alt="Brain neural pathways illustration" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">OCD involves differences in the <strong>Cortico-Striato-Thalamo-Cortical (CSTC)</strong> circuit.<sup>[2]</sup> This circuit connects the front of the brain (responsible for complex planning and error detection) with deeper structures involved in movement and habit formation. In the OCD brain, this circuit may be "hyperactive," causing thoughts to get stuck in a repetitive loop.<sup>[3]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Orbitofrontal Cortex:</strong> Involved in decision-making and detecting errors.<sup>[4]</sup></li>
            <li className="mb-2"><strong>Anterior Cingulate Cortex:</strong> Involved in the emotional response to errors and uncertainty.</li>
            <li className="mb-2"><strong>Basal Ganglia:</strong> Involved in the initiation and stopping of thoughts and movements.<sup>[5]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetics</h2>
          <p className="mb-4">Genetic studies show that OCD has a strong hereditary component. If a parent or sibling has OCD, the risk for other family members is significantly higher.<sup>[6]</sup> While no single "OCD gene" has been found, researchers believe it involves multiple genes that influence brain development and neurotransmitter function.<sup>[7]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurotransmitters</h2>
          <p className="mb-4">Chemical messengers in the brain, particularly <strong>serotonin</strong>, <strong>dopamine</strong>, and <strong>glutamate</strong>, are believed to be imbalanced in individuals with OCD.<sup>[8]</sup> This is why medications that target serotonin (like SSRIs) are often effective in reducing symptoms.<sup>[9]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental Factors</h2>
          <p className="mb-4">Stressful life events, childhood trauma, and early adversity can trigger the onset of OCD symptoms in individuals who are genetically predisposed.<sup>[10]</sup> In some rare cases, a sudden onset of OCD in children can follow a strep infection, a condition known as PANDAS (Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcal infections).<sup>[11]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Pauls, D. L., et al. (2014). "OCD: An integrative perspective." <em>Nature Reviews Neuroscience</em>.</p>
          <p>[2] Saxena, S., & Rauch, S. L. (2000). "Functional neuroimaging and the neuroanatomy of OCD." <em>Psychiatric Clinics of North America</em>.</p>
          <p>[3] Milad, M. R., & Rauch, S. L. (2012). "OCD: Beyond segregated cortico-striatal pathways." <em>Trends in Cognitive Sciences</em>.</p>
          <p>[4] Mataix-Cols, D., et al. (2005). "A multidimensional model of OCD." <em>American Journal of Psychiatry</em>.</p>
          <p>[5] Stein, D. J., et al. (2019). "Obsessive-compulsive disorder." <em>Nature Reviews Disease Primers</em>.</p>
          <p>[6] Nestadt, G., et al. (2000). "A family study of OCD." <em>Archives of General Psychiatry</em>.</p>
          <p>[7] Taylor, S. (2011). "Molecular genetics of OCD." <em>Molecular Psychiatry</em>.</p>
          <p>[8] Pittenger, C., et al. (2011). "The glutamate hypothesis of OCD." <em>CNS Spectrums</em>.</p>
          <p>[9] Soomro, G. M., et al. (2008). "SSRIs versus placebo for OCD." <em>Cochrane Database of Systematic Reviews</em>.</p>
          <p>[10] Sasson, Y., et al. (1997). "Epidemiology of OCD." <em>Israel Journal of Psychiatry and Related Sciences</em>.</p>
          <p>[11] Swedo, S. E., et al. (1998). "PANDAS." <em>American Journal of Psychiatry</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('ocd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to OCD</a>
      </div>
    </article>
  );
}
