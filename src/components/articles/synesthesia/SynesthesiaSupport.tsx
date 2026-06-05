import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SynesthesiaSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function SynesthesiaSupport({ setCurrentArticle }: SynesthesiaSupportProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('synesthesia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Synesthesia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Synesthesia: Support & Management</h1>

      <div className="space-y-8">
        <section>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1664497967316-b2788db919b5?w=1080&q=80"
            alt="Creative art and multi-sensory expression - synesthetic experiences"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Synesthesia is not considered a disorder requiring treatment or "management" in the traditional sense.<sup>[33]</sup> Instead, 
            understanding and embracing synesthesia involves recognizing it as a unique way of perceiving the world.<sup>[34]</sup> Benefits 
            include enhanced memory abilities (using additional sensory cues), increased creativity and unique perspectives, 
            rich multi-sensory experience of the world, advantages in certain fields (music, art, mathematics), and strong 
            sense of identity and community with other synesthetes.<sup>[35][36][37]</sup>
          </p>
          
          <p className="mb-4">
            Some challenges may include sensory overload in stimulating 
            environments, difficulty explaining experiences to non-synesthetes, occasional confusion or distraction from synesthetic 
            perceptions, and in rare cases unpleasant associations.<sup>[38]</sup> Support involves education about synesthesia, connecting with 
            other synesthetes through communities and online forums, strategies for managing sensory overload when needed, using 
            synesthetic abilities to enhance learning and memory, and helping others (family, teachers, employers) understand the 
            experience.<sup>[39]</sup> Scientists are always interested in studying synesthesia through online tests and research studies.<sup>[40]</sup>
          </p>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[33] Cytowic, R. E. (2002). <em>Synesthesia: A union of the senses</em> (2nd ed.). Cambridge, MA: MIT Press.</p>
          <p>[34] Yaro, C., & Ward, J. (2007). "Searching for Shereshevskii: What is superior about the memory of synaesthetes?" <em>Quarterly Journal of Experimental Psychology</em>, 60(5), 681-695.</p>
          <p>[35] Simner, J., Mayo, N., & Spiller, M. J. (2009). "A foundation for savantism? Visuo-spatial synaesthetes present with cognitive benefits." <em>Cortex</em>, 45(10), 1246-1260.</p>
          <p>[36] Chun, C. A., & Hupé, J. M. (2016). "Are synesthetes exceptional beyond their synesthetic associations? A systematic comparison of creativity, personality, cognition, and mental imagery in synesthetes and controls." <em>British Journal of Psychology</em>, 107(3), 397-418.</p>
          <p>[37] Cytowic, R. E. (1995). "Synesthesia: Phenomenology and neuropsychology. A review of current knowledge." <em>Psyche</em>, 2(10), 1-12.</p>
          <p>[38] Ward, J. (2013). "Synesthesia." <em>Annual Review of Psychology</em>, 64, 49-75.</p>
          <p>[39] Rothen, N., Seth, A. K., Witzel, C., & Ward, J. (2013). "Diagnosing synaesthesia with online colour pickers: Maximising sensitivity and specificity." <em>Journal of Neuroscience Methods</em>, 215(1), 156-160.</p>
          <p>[40] Galeyev, B., & Vanechkina, I. (2001). "Was Scriabin a synesthete?" <em>Leonardo</em>, 34(4), 357-361.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('synesthesia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Synesthesia</a>
      </div>
    </article>
  );
}
