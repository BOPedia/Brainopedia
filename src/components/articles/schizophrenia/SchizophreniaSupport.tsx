import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SchizophreniaSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function SchizophreniaSupport({ setCurrentArticle }: SchizophreniaSupportProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('schizophrenia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Schizophrenia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Support & Management of Schizophrenia</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Modern support for schizophrenia is moving away from purely "containing" symptoms and toward a <strong>Recovery Model</strong>—emphasizing collaboration, personal choice, and building a meaningful life regardless of the presence of hallucinations or delusions.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Medication (Pharmacotherapy)</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1763310225009-50214e3c99d9?w=1080&q=80" alt="Supportive healthcare and therapy" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Antipsychotic medications are a core part of management for many, as they help regulate the dopamine systems that drive psychosis:<sup>[2]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>First-Generation (Typical):</strong> Older drugs like haloperidol.</li>
            <li className="mb-2"><strong>Second-Generation (Atypical):</strong> Newer drugs like risperidone, quetiapine, or clozapine, which generally have fewer movement-related side effects.<sup>[3]</sup></li>
            <li className="mb-2"><strong>Collaborative Decision-Making:</strong> The goal is to find the lowest effective dose with the fewest side effects, prioritizing the individual's quality of life.<sup>[4]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Therapeutic Interventions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">CBT for Psychosis (CBTp)</h3>
              <p className="text-sm">Helps individuals understand their experiences and develop coping strategies to reduce the distress of voices or delusions.<sup>[5]</sup></p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">Cognitive Remediation</h3>
              <p className="text-sm">A set of exercises designed to improve attention, memory, and executive function.<sup>[6]</sup></p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">Family Psychoeducation</h3>
              <p className="text-sm">Providing families with the tools and information to create a low-stress, supportive home environment.<sup>[7]</sup></p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">Peer Support</h3>
              <p className="text-sm">Connecting with others who "hear voices" or have similar experiences to share practical survival tips.<sup>[8]</sup></p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Vocational & Educational Support</h2>
          <p className="mb-4">Programs like <strong>Individual Placement and Support (IPS)</strong> help individuals find and maintain competitive employment by providing rapid job search and ongoing coaching.<sup>[9]</sup> Similarly, supported education helps students return to or finish school with necessary accommodations.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Trauma-Informed Care</h2>
          <p className="mb-4">Many individuals with schizophrenia have significant histories of trauma. A trauma-informed approach recognizes that perceptual experiences (like voices) are often directly related to past life events and focuses on safety and healing.<sup>[10]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Davidson, L., et al. (2010). <em>The roots of the recovery movement</em>.</p>
          <p>[2] Leucht, S., et al. (2012). "Antipsychotic drugs versus placebo." <em>The Lancet</em>.</p>
          <p>[3] Lieberman, J. A., et al. (2005). "Effectiveness of antipsychotic drugs." <em>NEJM</em>.</p>
          <p>[4] Dixon, L. B., et al. (2010). "The 2009 PORT recommendations." <em>Schizophrenia Bulletin</em>.</p>
          <p>[5] Wykes, T., et al. (2008). "CBT for schizophrenia: Effect sizes." <em>Schizophrenia Bulletin</em>.</p>
          <p>[6] Medalia, A., & Saperstein, A. (2013). "The role of cognitive remediation." <em>Schizophrenia Bulletin</em>.</p>
          <p>[7] McFarlane, W. R., et al. (2003). "Family-aided assertive community treatment." <em>Archives of General Psychiatry</em>.</p>
          <p>[8] Mead, S., et al. (2001). "Peer support: A theoretical perspective."</p>
          <p>[9] Bond, G. R., et al. (2012). "Generalizability of the IPS model." <em>World Psychiatry</em>.</p>
          <p>[10] Read, J., et al. (2005). "Childhood trauma and schizophrenia." <em>Acta Psychiatrica Scandinavica</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('schizophrenia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Schizophrenia</a>
      </div>
    </article>
  );
}
