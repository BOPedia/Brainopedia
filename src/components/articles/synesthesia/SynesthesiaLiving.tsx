import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SynesthesiaLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function SynesthesiaLiving({ setCurrentArticle }: SynesthesiaLivingProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('synesthesia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Synesthesia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Synesthesia: Living with Synesthesia</h1>

      <div className="space-y-8">
        <section>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1765363674916-cb6d520fd8ce?w=1080&q=80"
            alt="Living with synesthesia - rich sensory experiences"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with synesthesia lead successful and fulfilling lives across all areas of society, with many notable 
            artists, musicians, and writers having synesthesia including Wassily Kandinsky, Franz Liszt, Duke Ellington, Billy 
            Joel, Pharrell Williams, and Vladimir Nabokov.<sup>[40][41]</sup> Living with synesthesia enriches perception of the world and can enhance 
            creativity, memory, and unique perspectives.<sup>[42]</sup> Living well with synesthesia involves understanding one's specific type(s) 
            of synesthetic experiences, recognizing synesthesia as a gift rather than a disorder, using synesthetic abilities to 
            enhance learning, memory, and creative pursuits, managing occasional sensory overload when needed, and connecting with 
            synesthete communities.<sup>[43]</sup>
          </p>
          
          <p className="mb-4">
            Topics related to living with synesthesia include leveraging enhanced memory and creativity, 
            pursuing careers in arts, music, or creative fields that benefit from unique perception, explaining synesthetic experiences 
            to others, managing sensory-rich environments, contributing to research that helps scientists understand perception and 
            consciousness, and celebrating the rich multi-sensory experience of the world.<sup>[44]</sup> When synesthetes discover that their 
            experiences are unique, it can be both surprising and validating.<sup>[45]</sup> The synesthesia community provides connection 
            and shared understanding among those with this unique way of perceiving the world.<sup>[46]</sup>
          </p>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[40] Galeyev, B., & Vanechkina, I. (2001). "Was Scriabin a synesthete?" <em>Leonardo</em>, 34(4), 357-361.</p>
          <p>[41] Mulvenna, C. M. (2007). "Synaesthesia, the arts and creativity: A neurological connection." In M. de Caro, F. Ferretti, & M. Marraffa (Eds.), <em>Cartographies of the mind: Philosophy and psychology in intersection</em> (pp. 61-78). Dordrecht: Springer.</p>
          <p>[42] Ramachandran, V. S., & Hubbard, E. M. (2003). "The phenomenology of synaesthesia." <em>Journal of Consciousness Studies</em>, 10(8), 49-57.</p>
          <p>[43] Ward, J., & Simner, J. (2020). "Synesthesia: The current state of the field." In A. K. Proulx, M. J. Proulx, & S. A. Brown (Eds.), <em>Multisensory perception: From laboratory to clinic</em> (pp. 283-300). Cambridge, MA: Academic Press.</p>
          <p>[44] Smilek, D., Dixon, M. J., Cudahy, C., & Merikle, P. M. (2001). "Synaesthetic photisms influence visual perception." <em>Journal of Cognitive Neuroscience</em>, 13(7), 930-936.</p>
          <p>[45] Cohen Kadosh, R., Henik, A., & Walsh, V. (2009). "Synaesthesia: Learned or lost?" <em>Developmental Science</em>, 12(3), 484-491.</p>
          <p>[46] Cytowic, R. E., & Wood, F. B. (1982). "Synesthesia: II. Psychophysical relations in the synesthesia of geometrically shaped taste and colored hearing." <em>Brain and Cognition</em>, 1(1), 36-49.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('synesthesia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Synesthesia</a>
      </div>
    </article>
  );
}
