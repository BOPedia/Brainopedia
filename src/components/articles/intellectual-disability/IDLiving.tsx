import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface IDLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function IDLiving({ setCurrentArticle }: IDLivingProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('intellectual-disability'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Intellectual Disability</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Living with Intellectual Disability</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Living with an intellectual disability involves navigating a world that often underestimates the potential of neurodivergent individuals. However, with appropriate supports, community inclusion, and a focus on self-determination, people with ID lead rich, fulfilling, and purposeful lives.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Independence & Self-Determination</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1761069234509-8205bf45a445?w=1080&q=80" alt="Self-advocacy and community participation" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Self-determination is the ability of an individual to make choices and decisions about their own life. This is a crucial aspect of living well with ID:<sup>[2]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Choice-Making:</strong> Having the power to decide what to eat, wear, and how to spend leisure time.</li>
            <li className="mb-2"><strong>Supported Decision-Making:</strong> Using a trusted network of people to help understand choices and make decisions, rather than having a guardian make them.<sup>[3]</sup></li>
            <li className="mb-2"><strong>Self-Advocacy:</strong> Learning to speak up for oneself and understand one's rights. The self-advocacy movement, led by groups like "SART" (Self-Advocates Becoming Empowered), has been vital for progress.<sup>[4]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Community & Relationships</h2>
          <p className="mb-4">Meaningful connections are essential for well-being. People with ID often have deep networks of family, friends, and romantic partners.<sup>[5]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Inclusive Communities:</strong> Being part of a neighborhood where you are known and valued.</li>
            <li className="mb-2"><strong>Social Inclusion:</strong> Participating in clubs, religious groups, or community events alongside people without disabilities.<sup>[6]</sup></li>
            <li className="mb-2"><strong>Authentic Connections:</strong> Many individuals with ID are known for their genuine and straightforward social styles, which can lead to very strong, loyal friendships.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living Arrangements</h2>
          <p className="mb-4">Where a person lives should be a matter of choice and support needs:<sup>[7]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>Independent Living:</strong> With minimal community support for tasks like bills or grocery shopping.</li>
            <li><strong>Supported Living:</strong> Living in one's own home or apartment with more intensive staff support.<sup>[8]</sup></li>
            <li><strong>Shared Living:</strong> Living with a family or roommates who provide support.</li>
            <li><strong>Family Home:</strong> Remaining in the family home with community resources and respite care.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Quality of Life</h2>
          <p className="mb-4">Quality of life for people with ID is measured by the same standards as everyone else: personal development, self-determination, social inclusion, and physical and emotional well-being.<sup>[9]</sup> When barriers are removed and supports are provided, people with ID contribute unique perspectives and talents to the world.<sup>[10]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Nota, L., et al. (2007). "Self-determination and quality of life." <em>Journal of Intellectual Disability Research</em>.</p>
          <p>[2] Wehmeyer, M. L., & Abery, B. H. (2013). "Self-determination and choice." <em>IDD</em>.</p>
          <p>[3] Blanck, P., & Martinis, J. G. (2015). "'The right to make choices': Supported decision-making." <em>Inclusion</em>.</p>
          <p>[4] Caldwell, J. (2011). "Disability identity of leaders in self-advocacy." <em>IDD</em>.</p>
          <p>[5] Brown, I., & Brown, R. I. (2003). <em>Quality of life and disability</em>.</p>
          <p>[6] Carter, E. W., et al. (2009). "Self-determination skills and opportunities." <em>AJIDD</em>.</p>
          <p>[7] Stancliffe, R. J., et al. (2011). "Adults with ID who use services." <em>AJIDD</em>.</p>
          <p>[8] Lachapelle, Y., et al. (2005). "Relationship between quality of life and self-determination." <em>Journal of Intellectual Disability Research</em>.</p>
          <p>[9] Schalock, R. L., et al. (2005). "Cross-cultural study of quality of life indicators." <em>American Journal on Mental Retardation</em>.</p>
          <p>[10] Walker, N. (2021). <em>Neuroqueer Heresies</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('intellectual-disability'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Intellectual Disability</a>
      </div>
    </article>
  );
}
