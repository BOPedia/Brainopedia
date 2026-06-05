import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface IDSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function IDSupport({ setCurrentArticle }: IDSupportProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('intellectual-disability'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Intellectual Disability</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Support & Management of ID</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">The goal of support for individuals with intellectual disability is to enhance their functioning, promote independence, and improve their quality of life. Support is most effective when it is individualized, person-centered, and consistent across environments.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Support</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1653212883728-f4cc35b19c4a?w=1080&q=80" alt="Inclusive classroom and educational support" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Individualized Education Program (IEP):</strong> A tailored plan that outlines specific goals, accommodations, and services for students with ID in the school system.<sup>[2]</sup></li>
            <li className="mb-2"><strong>Functional Life Skills:</strong> Teaching practical skills like money management, telling time, and self-care.</li>
            <li className="mb-2"><strong>Assistive Technology:</strong> Use of devices and software to support communication, learning, and organization.<sup>[3]</sup></li>
            <li className="mb-2"><strong>Inclusive Education:</strong> Providing opportunities for students with ID to learn alongside their neurotypical peers whenever possible.<sup>[4]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Therapeutic Interventions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">Speech-Language Therapy</h3>
              <p className="text-sm">Supports communication, expressive and receptive language, and social interaction.<sup>[5]</sup></p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">Occupational Therapy</h3>
              <p className="text-sm">Helps develop the fine motor and self-care skills needed for daily living tasks.<sup>[6]</sup></p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">Physical Therapy</h3>
              <p className="text-sm">Focuses on gross motor skills, balance, and physical mobility.</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">Behavioral Support</h3>
              <p className="text-sm">Positive behavior support (PBS) to help manage challenging behaviors and teach replacement skills.<sup>[7]</sup></p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Vocational & Employment Support</h2>
          <p className="mb-4">Transitioning to adulthood involves finding meaningful work and community involvement:<sup>[8]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Supported Employment:</strong> Job coaching and ongoing support to help individuals find and keep competitive jobs.<sup>[9]</sup></li>
            <li className="mb-2"><strong>Vocational Rehabilitation:</strong> Services that provide training and resources for employment.</li>
            <li className="mb-2"><strong>Community Participation:</strong> Engaging in volunteer work, recreation, and social clubs to build a sense of belonging.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Person-Centered Planning</h2>
          <p className="mb-4">The core of modern support is person-centered planning, where the individual's preferences, goals, and dreams drive the support plan.<sup>[10]</sup> It respects the person's right to make choices (supported decision-making) and focus on what they can do, rather than what they can't.</p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Thompson, J. R., et al. (2009). "Conceptualizing supports." <em>Intellectual and Developmental Disabilities</em>.</p>
          <p>[2] Kleinert, H. L., et al. (2015). "Where students with the most significant cognitive disabilities are taught." <em>Exceptional Children</em>.</p>
          <p>[3] Browder, D. M., et al. (2008). "Teaching mathematics to students with significant cognitive disabilities." <em>Exceptional Children</em>.</p>
          <p>[4] Shogren, K. A., et al. (2014). "The definition of 'context' in intellectual disability."</p>
          <p>[5] AAIDD. (2020). "Communication Support."</p>
          <p>[6] American Occupational Therapy Association. (2014). "OT with people with intellectual disabilities."</p>
          <p>[7] Carr, E. G., et al. (2002). "Positive behavior support." <em>Journal of Positive Behavior Interventions</em>.</p>
          <p>[8] Wehman, P., et al. (2014). "Competitive employment for youth with autism and ID." <em>JADD</em>.</p>
          <p>[9] Stancliffe, R. J., et al. (2011). "Adults with intellectual disabilities who use services." <em>AJIDD</em>.</p>
          <p>[10] Claes, C., et al. (2010). "Person-centered planning: Analysis of research." <em>IDD</em>, 48(6), 432-453.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('intellectual-disability'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Intellectual Disability</a>
      </div>
    </article>
  );
}
