import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface OCDSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function OCDSupport({ setCurrentArticle }: OCDSupportProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('ocd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to OCD</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Support & Management of OCD</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">The management of OCD has advanced significantly, with evidence-based therapies and medications helping many people achieve significant symptom reduction. A neurodivergent-affirming approach focuses on managing distress while maintaining self-acceptance.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Exposure and Response Prevention (ERP)</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1764192114257-ae9ecf97eb6f?w=1080&q=80" alt="Mindfulness and therapeutic support" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">ERP is the gold-standard behavioral therapy for OCD.<sup>[2]</sup> It involves two components:</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Exposure:</strong> Gradually and systematically facing the thoughts, images, or situations that trigger anxiety.</li>
            <li className="mb-2"><strong>Response Prevention:</strong> Making a choice to not perform the compulsive ritual after exposure.<sup>[3]</sup></li>
          </ul>
          <p className="mb-4">Over time, through a process called <strong>habituation</strong> or inhibitory learning, the brain learns that the anxiety will eventually decrease on its own without the ritual, and the feared outcome is unlikely to happen.<sup>[4]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Acceptance and Commitment Therapy (ACT)</h2>
          <p className="mb-4">ACT is a newer approach that focuses on accepting intrusive thoughts rather than fighting them.<sup>[5]</sup> It teaches individuals to see thoughts as "just thoughts" and to commit to actions that align with their personal values, even in the presence of anxiety.<sup>[6]</sup> This is particularly helpful for Pure-O presentations.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Medication</h2>
          <p className="mb-4">Pharmacological treatments can be highly effective, often used alongside therapy:<sup>[7]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>SSRIs (Selective Serotonin Reuptake Inhibitors):</strong> Help regulate serotonin levels. Higher doses are often needed for OCD than for depression.<sup>[8]</sup></li>
            <li className="mb-2"><strong>Clomipramine:</strong> A tricyclic antidepressant that is specifically effective for OCD but may have more side effects than SSRIs.</li>
            <li className="mb-2"><strong>Augmentation:</strong> In some cases, small doses of other medications are added to boost the effect of the primary treatment.<sup>[9]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Lifestyle & Self-Care</h2>
          <p className="mb-4">Supportive strategies include:<sup>[10]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>Support Groups:</strong> Connecting with others who share the OCD experience reduces shame and provides practical tips.</li>
            <li><strong>Mindfulness:</strong> Learning to observe intrusive thoughts without judgment.<sup>[11]</sup></li>
            <li><strong>Sleep & Nutrition:</strong> Maintaining a healthy foundation to manage overall stress and anxiety.</li>
            <li><strong>Stress Management:</strong> Identifying triggers and developing healthy coping mechanisms.</li>
          </ul>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Abramowitz, J. S., et al. (2009). "Obsessive-compulsive disorder." <em>The Lancet</em>.</p>
          <p>[2] Foa, E. B., et al. (2005). "Randomized trial of ERP and clomipramine." <em>American Journal of Psychiatry</em>.</p>
          <p>[3] Abramowitz, J. S. (2006). "The psychological treatment of OCD." <em>Canadian Journal of Psychiatry</em>.</p>
          <p>[4] Craske, M. G., et al. (2014). "Maximizing exposure therapy." <em>Behaviour Research and Therapy</em>.</p>
          <p>[5] Twohig, M. P., et al. (2010). "ACT for OCD." <em>Journal of Consulting and Clinical Psychology</em>.</p>
          <p>[6] Hayes, S. C., et al. (2006). "Acceptance and Commitment Therapy." <em>Behaviour Research and Therapy</em>.</p>
          <p>[7] Soomro, G. M., et al. (2008). "SSRIs versus placebo for OCD." <em>Cochrane Database</em>.</p>
          <p>[8] Pigott, T. A., & Seay, S. M. (1999). "Review of pharmacotherapy for OCD." <em>Journal of Clinical Psychiatry</em>.</p>
          <p>[9] Bloch, M. H., et al. (2006). "Antipsychotic augmentation in OCD." <em>American Journal of Psychiatry</em>.</p>
          <p>[10] International OCD Foundation (IOCDF). (2020). "Living with OCD."</p>
          <p>[11] Hertenstein, E., et al. (2012). "Mindfulness-based cognitive therapy in OCD." <em>Psychotherapy and Psychosomatics</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('ocd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to OCD</a>
      </div>
    </article>
  );
}
