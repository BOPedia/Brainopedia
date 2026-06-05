import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface PANDASSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function PANDASSupport({ setCurrentArticle }: PANDASSupportProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('pandas'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to PANDAS</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Support & Management of PANDAS</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">The treatment of PANDAS is unique because it addresses both the immune system and the neuropsychiatric symptoms. A multi-pronged approach is usually necessary to help the child return to their baseline functioning.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Treating the Infection</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1676313027775-a5a3dca6f98b?w=1080&q=80" alt="Antibiotics and medical treatment" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">The first priority is removing the strep bacteria that triggered the immune response:<sup>[2]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Antibiotics:</strong> A full course of antibiotics (like penicillin or amoxicillin) is used to clear any active infection.<sup>[3]</sup></li>
            <li className="mb-2"><strong>Prophylaxis:</strong> In recurring cases, doctors may prescribe low-dose antibiotics long-term to prevent future strep infections from triggering a new flare.<sup>[4]</sup></li>
            <li className="mb-2"><strong>Family Screening:</strong> It is often recommended to test all family members for strep, even if they have no symptoms, as "asymptomatic carriers" can re-infect the child.<sup>[5]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Managing the Immune System</h2>
          <p className="mb-4">To reduce brain inflammation and stop the autoimmune attack, clinicians may use:<sup>[6]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>NSAIDs:</strong> Anti-inflammatories like ibuprofen can help reduce the severity of symptoms during a mild flare.<sup>[7]</sup></li>
            <li className="mb-2"><strong>Corticosteroids:</strong> A short burst of steroids (like prednisone) can dramatically reduce symptoms by suppressing the immune system.</li>
            <li className="mb-2"><strong>IVIG (Intravenous Immunoglobulin):</strong> For severe, treatment-resistant cases, IVIG provides healthy antibodies to "reset" the child's immune system.<sup>[8]</sup></li>
            <li className="mb-2"><strong>Plasmapheresis:</strong> Filtering the blood to remove the harmful anti-neuronal antibodies, reserved for the most extreme cases.<sup>[9]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Psychiatric & Behavioral Support</h2>
          <p className="mb-4">While the immune system heals, the child needs support for their symptoms:<sup>[10]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>CBT / ERP:</strong> Cognitive Behavioral Therapy with Exposure and Response Prevention remains effective for managing PANDAS-related OCD.<sup>[11]</sup></li>
            <li className="mb-2"><strong>Psychiatric Medications:</strong> Low-dose SSRIs may be used, though children with PANDAS are often more sensitive to these drugs and require very careful dosing.<sup>[12]</sup></li>
            <li className="mb-2"><strong>School Accommodations:</strong> 504 Plans or IEPs to support handwriting difficulties, separation anxiety, and academic decline during flares.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Home Environment</h2>
          <p className="mb-4">Maintaining a low-stress, highly predictable environment is vital during a flare. Parents are encouraged to use "external brain" supports—visual schedules and clear routines—to help children whose cognitive resources are being drained by brain inflammation.<sup>[13]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Sigra, S., et al. (2018). "Treatment of PANDAS and PANS: A systematic review." <em>Neuroscience & Biobehavioral Reviews</em>.</p>
          <p>[2] Cooperstock, M. S., et al. (2017). "Clinical management of PANS: Part III—treatment of infections." <em>JCAP</em>.</p>
          <p>[3] Murphy, T. K., et al. (2015). "A randomized placebo-controlled pilot study of azithromycin." <em>JCAP</em>.</p>
          <p>[4] Snider, L. A., et al. (2005). "Antibiotic prophylaxis with azithromycin." <em>Biological Psychiatry</em>.</p>
          <p>[5] Swedo, S. E., et al. (2017). "PANS/PANDAS: Clinical presentation."</p>
          <p>[6] Frankovich, J., et al. (2017). "Clinical management of PANS: Part II—immunomodulatory therapies." <em>JCAP</em>.</p>
          <p>[7] Brown, K., et al. (2017). "Effect of NSAIDs on flare duration in PANS." <em>JCAP</em>.</p>
          <p>[8] Williams, K. A., et al. (2016). "Randomized trial of IVIG for PANDAS." <em>JAACAP</em>.</p>
          <p>[9] Perlmutter, S. J., et al. (1999). "Therapeutic plasma exchange for OCD and tics." <em>The Lancet</em>.</p>
          <p>[10] Thienemann, M., et al. (2017). "Clinical management of PANS: Part I—psychiatric interventions."</p>
          <p>[11] Storch, E. A., et al. (2006). "CBT for PANDAS-related OCD." <em>JAACAP</em>.</p>
          <p>[12] Calaprice, D., et al. (2018). "Treatment in a large survey population."</p>
          <p>[13] PANDAS Network. (2021). "Supporting Your Child at Home."</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('pandas'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to PANDAS</a>
      </div>
    </article>
  );
}
