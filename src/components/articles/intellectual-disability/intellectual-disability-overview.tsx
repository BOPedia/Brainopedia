import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface IDOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function IDOverview({ setCurrentArticle }: IDOverviewProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('intellectual-disability'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Intellectual Disability</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Intellectual Disability: Overview</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Intellectual Disability (ID), also known as intellectual developmental disorder, is a neurodevelopmental condition characterized by significant limitations in both intellectual functioning and adaptive behavior.<sup>[1]</sup> ID represents a diverse spectrum of cognitive functioning and is a distinct neurotype with unique support needs and strengths.<sup>[2]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What Is Intellectual Disability?</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1761208663763-c4d30657c910?w=1080&q=80" alt="Learning and cognitive development" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Intellectual disability affects approximately 1-3% of the global population, making it one of the most common developmental conditions.<sup>[3]</sup> ID begins during the developmental period (before age 18) and is characterized by cognitive functioning that is significantly below average, along with limitations in adaptive functioning across multiple life domains.<sup>[4]</sup></p>
          <p className="mb-4">Modern understanding of ID emphasizes a social model perspective: disability results not solely from individual limitations, but from the interaction between the person and environmental barriers.<sup>[5]</sup> With appropriate supports and inclusion, individuals with ID lead fulfilling, self-determined lives.<sup>[6]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Key Characteristics</h2>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Intellectual Functioning:</strong> Refers to general mental capacity, such as learning, reasoning, and problem-solving.</li>
            <li className="mb-2"><strong>Adaptive Behavior:</strong> The collection of conceptual, social, and practical skills that are learned and performed by people in their everyday lives.<sup>[7]</sup></li>
            <li className="mb-2"><strong>Developmental Onset:</strong> Limitations must appear during the developmental period (before age 18).<sup>[8]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prevalence</h2>
          <p className="mb-4">Prevalence rates vary by country and study, but it is generally estimated that 1% to 3% of the population has an intellectual disability.<sup>[9]</sup> In many low- and middle-income countries, the prevalence is higher due to factors like malnutrition and less access to healthcare.<sup>[10]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurodiversity Perspective</h2>
          <p className="mb-4">The neurodiversity movement views intellectual disability as a natural part of human diversity.<sup>[11]</sup> While acknowledging the need for support, this perspective emphasizes the inherent value and rights of individuals with ID. It challenges the "tragedy" narrative and focuses on building inclusive environments that accommodate diverse cognitive styles.<sup>[12]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Psychiatric Association. (2013). <em>DSM-5</em>. Arlington, VA: APA.</p>
          <p>[2] Schalock, R. L., et al. (2010). <em>Intellectual disability: Definition, classification, and systems of supports</em>. AAIDD.</p>
          <p>[3] Maulik, P. K., et al. (2011). "Prevalence of intellectual disability: A meta-analysis." <em>Research in Developmental Disabilities</em>, 32(2), 419-436.</p>
          <p>[4] Schalock, R. L., et al. (2007). "The renaming of mental retardation." <em>Intellectual and Developmental Disabilities</em>, 45(2), 116-124.</p>
          <p>[5] Shakespeare, T. (2006). "The social model of disability."</p>
          <p>[6] Shogren, K. A., et al. (2014). "The definition of 'context' in intellectual disability." <em>Journal of Policy and Practice in Intellectual Disabilities</em>.</p>
          <p>[7] Tassé, M. J., et al. (2012). "The construct of adaptive behavior." <em>AJIDD</em>, 117(4), 291-303.</p>
          <p>[8] Harris, J. C. (2013). "New terminology for mental retardation in DSM-5 and ICD-11." <em>Current Opinion in Psychiatry</em>.</p>
          <p>[9] CDC. (2020). "Facts about Intellectual Disability."</p>
          <p>[10] WHO. (2021). "Disability and health."</p>
          <p>[11] Walker, N. (2021). <em>Neuroqueer Heresies</em>. Autonomous Press.</p>
          <p>[12] Armstrong, T. (2011). <em>The Power of Neurodiversity</em>. Da Capo Lifelong Books.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('intellectual-disability'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Intellectual Disability</a>
      </div>
    </article>
  );
}
