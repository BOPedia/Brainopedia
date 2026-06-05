import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface PANDASLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function PANDASLiving({ setCurrentArticle }: PANDASLivingProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('pandas'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to PANDAS</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Living with PANDAS/PANS</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Living with PANDAS is often described as an emotional rollercoaster for both the child and the family. Because symptoms can disappear and then suddenly return with a new infection, life requires a high degree of flexibility, vigilance, and resilience.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Understanding the Course</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1758206523860-0583e7b51a5e?w=1080&q=80" alt="Family support and recovery illustration" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">The course of PANDAS varies significantly. Some children experience one or two episodes and then fully recover as they reach puberty.<sup>[2]</sup> Others have a more chronic course where the brain remains sensitive for years. Understanding this is key to long-term management:<sup>[3]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>The Flare:</strong> Recognizing the early signs of a flare (like increased irritability or a change in handwriting) allows for faster medical intervention.<sup>[4]</sup></li>
            <li className="mb-2"><strong>Healing Time:</strong> Even after the infection is cleared, it takes time for brain inflammation to subside. "Baseline" functioning may not return immediately.<sup>[5]</sup></li>
            <li className="mb-2"><strong>The Puberty Marker:</strong> In many cases, the autoimmune sensitivity resolves once the immune system and brain fully mature after puberty.<sup>[6]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Family Impact & Support</h2>
          <p className="mb-4">PANDAS is a "family diagnosis." The stress of an "overnight" change in a child is immense.<sup>[7]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Caregiver Fatigue:</strong> Parents must often become researchers and advocates to get their child correctly diagnosed.</li>
            <li className="mb-2"><strong>Sibling Support:</strong> Siblings may be confused or frightened by the sudden changes in their brother or sister.</li>
            <li className="mb-2"><strong>Community:</strong> Connecting with other PANDAS families through groups like the <strong>PANDAS Network</strong> or <strong>ASPIRE</strong> provides a vital sense of "not being alone."<sup>[8]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">School Navigation</h2>
          <p className="mb-4">Maintaining academic progress during flares is a challenge. Parents should work with schools to:<sup>[9]</sup></p>
          <div className="bg-[#f0f9fb] p-6 rounded-lg border border-[#2abcd4] mb-6">
            <ul className="space-y-3 text-sm">
              <li><strong>Educate the Staff:</strong> Explain that the child's behaviors are medical/neurological, not willful.<sup>[10]</sup></li>
              <li><strong>Flexible Attendance:</strong> Allowing for "rest days" or shorter school days during an active flare.</li>
              <li><strong>Reduced Workload:</strong> Modifying assignments to account for the cognitive fatigue of brain inflammation.</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Building Resilience</h2>
          <p className="mb-4">Living well with PANDAS involves celebrating the "good days" while maintaining a toolkit for the flares. Many children who recover from PANDAS develop incredible resilience and a deep understanding of their own health and boundaries.<sup>[11]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Calaprice, D., et al. (2017). "Survey of PANS characteristics and course." <em>JCAP</em>.</p>
          <p>[2] Swedo, S. E., et al. (2017). "Overview of treatment of PANS." <em>JCAP</em>.</p>
          <p>[3] Pavone, P., et al. (2006). "Autoimmune neuropsychiatric disorders." <em>Journal of Child Neurology</em>.</p>
          <p>[4] Bernstein, G. A., et al. (2010). "Comparison of PANDAS and childhood OCD." <em>JCAP</em>.</p>
          <p>[5] Frankovich, J., et al. (2015). "Multidisciplinary clinic for PANS."</p>
          <p>[6] Swedo, S. E., et al. (1998). "PANDAS: Clinical description."</p>
          <p>[7] PANDAS Network. (2020). "Parent Support Resources."</p>
          <p>[8] ASPIRE (Alliance for PANS/PANDAS Enlightenment). (2021). "Living with PANS."</p>
          <p>[9] Brandi, M. L., et al. (2012). "Deterioration of handwriting."</p>
          <p>[10] Thienemann, M., et al. (2017). "School interventions for PANS."</p>
          <p>[11] Petrenko, C. L. (2015). "Building resilience in individuals with neurodevelopmental disorders."</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('pandas'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to PANDAS</a>
      </div>
    </article>
  );
}
