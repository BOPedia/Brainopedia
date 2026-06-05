import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface IDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function IDSymptoms({ setCurrentArticle }: IDSymptomsProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('intellectual-disability'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Intellectual Disability</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Symptoms & Characteristics of ID</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Intellectual disability is defined by limitations in two main areas: intellectual functioning and adaptive behavior. These limitations appear during the developmental period and affect how a person learns and interacts with the world.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Intellectual Functioning</h2>
          <p className="mb-4">This refers to general mental capacity, which includes:<sup>[2]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Reasoning:</strong> Difficulty with logical thinking and understanding complex concepts.</li>
            <li className="mb-2"><strong>Problem-solving:</strong> Finding it hard to solve everyday problems or plan for the future.</li>
            <li className="mb-2"><strong>Learning:</strong> Taking longer to learn new information or skills compared to peers.<sup>[3]</sup></li>
            <li className="mb-2"><strong>Abstract thinking:</strong> Difficulty understanding metaphors, idioms, or non-literal language.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Adaptive Behavior</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1638699532230-1c7676c2a708?w=1080&q=80" alt="Adaptive skills and daily living" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Adaptive behavior involves the practical skills needed for daily life. These are categorized into three domains:<sup>[4]</sup></p>
          <div className="space-y-4">
            <div className="bg-[#f8fafc] p-4 rounded-md border-l-4 border-[#2abcd4]">
              <h3 className="text-[#0c264d] font-bold mb-2">Conceptual Skills</h3>
              <p className="text-sm">Language, reading, writing, math, reasoning, memory, and knowledge about the world.<sup>[5]</sup></p>
            </div>
            <div className="bg-[#f8fafc] p-4 rounded-md border-l-4 border-[#2abcd4]">
              <h3 className="text-[#0c264d] font-bold mb-2">Social Skills</h3>
              <p className="text-sm">Interpersonal communication, empathy, social judgment, friendship skills, and the ability to follow social rules.<sup>[6]</sup></p>
            </div>
            <div className="bg-[#f8fafc] p-4 rounded-md border-l-4 border-[#2abcd4]">
              <h3 className="text-[#0c264d] font-bold mb-2">Practical Skills</h3>
              <p className="text-sm">Personal care (eating, dressing, hygiene), job responsibilities, money management, recreation, and organizing school and work tasks.<sup>[7]</sup></p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Levels of Severity</h2>
          <p className="mb-4">ID is categorized into four levels based on the level of support required:<sup>[8]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Mild:</strong> Most common level (85%). May need some support with complex tasks but often live and work independently.</li>
            <li className="mb-2"><strong>Moderate:</strong> Benefit from vocational training and support with self-care.</li>
            <li className="mb-2"><strong>Severe:</strong> Require significant support and supervision for daily activities.<sup>[9]</sup></li>
            <li className="mb-2"><strong>Profound:</strong> Require pervasive, lifelong support and 24-hour care.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Strengths</h2>
          <p className="mb-4">It is vital to recognize that individuals with ID have unique strengths. They may have strong social intuition, a genuine and direct way of communicating, notable persistence, and specific talents in art, music, or physical activities.<sup>[10]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Psychiatric Association. (2013). <em>DSM-5</em>.</p>
          <p>[2] AAIDD. (2010). <em>Intellectual Disability: Definition, Classification, and Systems of Supports</em>.</p>
          <p>[3] Greenspan, S., & Woods, G. W. (2014). "Intellectual disability as a disorder of reasoning." <em>Current Opinion in Psychiatry</em>.</p>
          <p>[4] Tassé, M. J., et al. (2012). "The construct of adaptive behavior." <em>AJIDD</em>.</p>
          <p>[5] Harrison, P. L., & Oakland, T. (2015). <em>ABAS-3</em>.</p>
          <p>[6] Leffert, J. S., et al. (2010). "Social perception in children with ID." <em>Journal of Intellectual Disability Research</em>.</p>
          <p>[7] Sparrow, S. S., et al. (2016). <em>Vineland-3</em>.</p>
          <p>[8] Salvador-Carulla, L., et al. (2011). "Intellectual developmental disorders." <em>World Psychiatry</em>.</p>
          <p>[9] WHO. (2018). <em>ICD-11</em>.</p>
          <p>[10] Gilmore, L., et al. (2003). "Developmental expectations and personality stereotypes." <em>International Journal of Disability</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('intellectual-disability'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Intellectual Disability</a>
      </div>
    </article>
  );
}
