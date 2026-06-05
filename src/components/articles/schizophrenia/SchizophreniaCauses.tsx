import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SchizophreniaCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function SchizophreniaCauses({ setCurrentArticle }: SchizophreniaCausesProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('schizophrenia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Schizophrenia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Causes & Origins of Schizophrenia</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Schizophrenia is not caused by "poor parenting" or character flaws. It is a highly biological condition involving differences in brain structure, chemistry, and genetics, often triggered by environmental stressors in vulnerable individuals.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetics</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1709651669999-57741c9bf085?w=1080&q=80" alt="DNA and brain neural network" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Schizophrenia has a strong hereditary component. If an identical twin has schizophrenia, the other twin has a 50% chance of developing it.<sup>[2]</sup> However, there is no single "schizophrenia gene." Instead, hundreds of small genetic variations interact to increase vulnerability.<sup>[3]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Brain Chemistry</h2>
          <p className="mb-4">Two primary neurotransmitters are implicated in the schizophrenia neurotype:<sup>[4]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Dopamine:</strong> The "dopamine hypothesis" suggests that overactivity of dopamine in certain brain regions leads to hallucinations and delusions.<sup>[5]</sup></li>
            <li className="mb-2"><strong>Glutamate:</strong> Newer research focuses on glutamate, the brain's primary excitatory chemical. Differences in glutamate receptors may explain the cognitive and negative symptoms of the condition.<sup>[6]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Brain Structure</h2>
          <p className="mb-4">MRI scans reveal that the brains of people with schizophrenia often look different:<sup>[7]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Enlarged <strong>ventricles</strong> (fluid-filled spaces in the brain).</li>
            <li className="mb-2">Reduced gray matter volume in the <strong>prefrontal cortex</strong> and <strong>hippocampus</strong> (involved in memory and planning).<sup>[8]</sup></li>
            <li className="mb-2">Atypical <strong>white matter connectivity</strong>, meaning different regions of the brain don't communicate with each other in a standard way.<sup>[9]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental Factors</h2>
          <p className="mb-4">For those with a genetic predisposition, certain factors can trigger the onset:<sup>[10]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Prenatal Stress:</strong> Maternal infections, malnutrition, or birth complications.</li>
            <li className="mb-2"><strong>Childhood Trauma:</strong> Early life adversity significantly increases risk.<sup>[11]</sup></li>
            <li className="mb-2"><strong>Substance Use:</strong> Particularly heavy cannabis use during adolescence has been linked to an increased risk of triggering a first psychotic episode.<sup>[12]</sup></li>
          </ul>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Howes, O. D., & Kapur, S. (2009). "The dopamine hypothesis." <em>Schizophrenia Bulletin</em>.</p>
          <p>[2] Sullivan, P. F., et al. (2003). "Schizophrenia as a complex trait." <em>Archives of General Psychiatry</em>.</p>
          <p>[3] Schizophrenia Working Group. (2014). "Loci associated with schizophrenia." <em>Nature</em>.</p>
          <p>[4] Ellison-Wright, I., & Bullmore, E. (2010). "Anatomy of schizophrenia." <em>Schizophrenia Research</em>.</p>
          <p>[5] Seeman, P. (2006). "Dopamine receptors and schizophrenia." <em>Scholarpedia</em>.</p>
          <p>[6] Moghaddam, B., & Javitt, D. (2012). "From glutamate to schizophrenia." <em>Schizophrenia Bulletin</em>.</p>
          <p>[7] Shenton, M. E., et al. (2001). "MRI findings in schizophrenia." <em>Schizophrenia Research</em>.</p>
          <p>[8] Friston, K. J., & Frith, C. D. (1995). "Schizophrenia: A disconnection syndrome?"</p>
          <p>[9] Karlsgodt, K. H., et al. (2010). "Structural brain abnormalities."</p>
          <p>[10] Brown, A. S. (2011). "The epidemiology of schizophrenia." <em>Psychiatric Clinics</em>.</p>
          <p>[11] Varese, F., et al. (2012). "Childhood adversities increase risk of psychosis." <em>Schizophrenia Bulletin</em>.</p>
          <p>[12] Marconi, A., et al. (2016). "Cannabis use and psychosis." <em>Schizophrenia Bulletin</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('schizophrenia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Schizophrenia</a>
      </div>
    </article>
  );
}
