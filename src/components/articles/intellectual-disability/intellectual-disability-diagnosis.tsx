import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface IDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function IDDiagnosis({ setCurrentArticle }: IDDiagnosisProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('intellectual-disability'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Intellectual Disability</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Testing & Diagnosing ID</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Diagnosing an intellectual disability involves a comprehensive evaluation of both cognitive abilities and daily life skills. The process is typically conducted by a multi-disciplinary team, including psychologists, pediatricians, and specialists.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Criteria</h2>
          <p className="mb-4">According to the DSM-5 and ICD-11, three criteria must be met for a diagnosis:<sup>[2]</sup></p>
          <ol className="list-decimal ml-6 mb-4 space-y-4">
            <li><strong>Deficits in Intellectual Functioning:</strong> Confirmed by clinical assessment and individualized standardized intelligence testing (typically an IQ score of 70 or below).<sup>[3]</sup></li>
            <li><strong>Deficits in Adaptive Functioning:</strong> Resulting in failure to meet developmental and sociocultural standards for personal independence and social responsibility.<sup>[4]</sup></li>
            <li><strong>Developmental Onset:</strong> Onset of intellectual and adaptive deficits during the developmental period.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Evaluation Process</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1560785496-321917f24016?w=1080&q=80" alt="Psychological assessment and testing" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Intellectual Testing</h3>
          <p className="mb-4">Standardized tests like the Wechsler Intelligence Scale for Children (WISC) or the Stanford-Binet are used to measure IQ. These tests assess verbal comprehension, perceptual reasoning, working memory, and processing speed.<sup>[5]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adaptive Behavior Assessment</h3>
          <p className="mb-4">Scales such as the Vineland Adaptive Behavior Scales or the ABAS-3 are used to collect information from parents, teachers, and caregivers about the person's skills in real-world settings.<sup>[6]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Medical & Developmental History</h3>
          <p className="mb-4">Reviewing prenatal and birth history, developmental milestones, and medical records to identify potential causes or co-occurring conditions.<sup>[7]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Early Identification</h2>
          <p className="mb-4">Early identification is crucial for accessing supports that can significantly improve outcomes. Parents or teachers may notice delays in language development, motor skills, or social interaction during the preschool years.<sup>[8]</sup> Developmental screening at well-child visits is a key part of this process.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">A Strengths-Based Approach</h2>
          <p className="mb-4">Modern diagnosis focuses not just on identifying deficits, but on understanding the person's unique profile of strengths and determining the levels of support needed to thrive.<sup>[9]</sup> The goal is to create a roadmap for services and accommodations.</p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Sattler, J. M. (2004). <em>Assessment of children</em>.</p>
          <p>[2] Salvador-Carulla, L., et al. (2011). "Intellectual developmental disorders." <em>World Psychiatry</em>.</p>
          <p>[3] American Psychiatric Association. (2013). <em>DSM-5</em>.</p>
          <p>[4] Tassé, M. J., et al. (2012). "The construct of adaptive behavior." <em>AJIDD</em>.</p>
          <p>[5] Sparrow, S. S., et al. (2016). <em>Vineland-3</em>.</p>
          <p>[6] Harrison, P. L., & Oakland, T. (2015). <em>ABAS-3</em>.</p>
          <p>[7] Shevell, M., et al. (2003). "Evaluation of the child with global developmental delay." <em>Neurology</em>.</p>
          <p>[8] CDC. (2020). "Developmental Monitoring and Screening."</p>
          <p>[9] Shogren, K. A., et al. (2006). "Application of positive psychology to intellectual disability." <em>Research and Practice for Persons with Severe Disabilities</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('intellectual-disability'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Intellectual Disability</a>
      </div>
    </article>
  );
}
