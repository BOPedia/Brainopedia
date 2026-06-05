import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface PANDASCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function PANDASCauses({ setCurrentArticle }: PANDASCausesProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('pandas'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to PANDAS</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Causes & Origins of PANDAS</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">PANDAS is a post-infectious autoimmune condition. It is not caused by the strep bacteria directly infecting the brain, but rather by the immune system's response to that infection.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Molecular Mimicry</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1625402534000-ba20597c3684?w=1080&q=80" alt="Bacteria and immune response illustration" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">The core mechanism of PANDAS is called <strong>molecular mimicry</strong>.<sup>[2]</sup> The Group A Streptococcus bacteria have proteins on their surface that look very similar to proteins in the human body—specifically those in the basal ganglia of the brain.<sup>[3]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>The Error:</strong> When the immune system creates antibodies to fight the strep infection, those antibodies get "confused."<sup>[4]</sup></li>
            <li className="mb-2"><strong>The Attack:</strong> Instead of only attacking the bacteria, the antibodies cross the blood-brain barrier and attack the child's own brain cells.<sup>[5]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Basal Ganglia</h2>
          <p className="mb-4">The antibodies target the <strong>basal ganglia</strong>, a cluster of structures deep in the brain.<sup>[6]</sup> This area acts as a "gatekeeper" for movements and thoughts. When it becomes inflamed (neuroinflammation), the gate stays open, allowing repetitive thoughts (OCD) and movements (tics) to flood through.<sup>[7]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetic Susceptibility</h2>
          <p className="mb-4">Not every child who gets strep throat develops PANDAS. Researchers believe there is a genetic predisposition that makes some children's immune systems more likely to "misidentify" the brain as an enemy.<sup>[8]</sup> Studies have found higher rates of autoimmune conditions in the families of children with PANDAS.<sup>[9]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental Triggers</h2>
          <p className="mb-4">While the initial trigger is Group A Strep, once the immune system has been "primed," other stressors or infections can trigger a flare-up of symptoms. This is why some children with PANDAS react to subsequent non-strep illnesses (like a cold or the flu).<sup>[10]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Kirvan, C. A., et al. (2003). "Mimicry and autoantibody-mediated neuronal cell signaling." <em>Nature Medicine</em>.</p>
          <p>[2] Dale, R. C., et al. (2005). "Incidence of anti-brain antibodies in children with OCD." <em>BJPsych</em>.</p>
          <p>[3] Williams, K. A., & Swedo, S. E. (2015). "Post-infectious autoimmune disorders." <em>Brain Research</em>.</p>
          <p>[4] Swedo, S. E., et al. (1994). "Speculations on antineuronal antibody-mediated neuropsychiatric disorders." <em>Pediatrics</em>.</p>
          <p>[5] Cunningham, M. W. (2000). "Pathogenesis of Group A Streptococcal Infections." <em>Clinical Microbiology Reviews</em>.</p>
          <p>[6] Giedd, J. N., et al. (1996). "Case study: Acute basal ganglia enlargement." <em>JAACAP</em>.</p>
          <p>[7] Singer, H. S. (2011). "The immunobiology of Tourette's disorder and PANDAS." <em>JCAP</em>.</p>
          <p>[8] Murphy, T. K., et al. (2010). "Maternal history of autoimmune disease in PANDAS." <em>Journal of Neuroimmunology</em>.</p>
          <p>[9] Swedo, S. E., et al. (2012). "From research subgroup to clinical syndrome."</p>
          <p>[10] Snider, L. A., & Swedo, S. E. (2004). "PANDAS: Current status and directions." <em>Molecular Psychiatry</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('pandas'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to PANDAS</a>
      </div>
    </article>
  );
}
