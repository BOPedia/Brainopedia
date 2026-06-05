import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SynesthesiaCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function SynesthesiaCauses({ setCurrentArticle }: SynesthesiaCausesProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('synesthesia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Synesthesia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Synesthesia: Causes & Origins</h1>

      <div className="space-y-8">
        <section>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1719550371336-7bb64b5cacfa?w=1080&q=80"
            alt="Brain neural connections - neurological basis of synesthesia"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Synesthesia has a strong genetic component and tends to run in families, though the specific genes involved 
            are still being researched.<sup>[19][20]</sup> Studies suggest that synesthesia results from increased connectivity or cross-activation 
            between brain regions that are normally separate.<sup>[21]</sup> The cross-activation theory suggests that synesthesia occurs 
            due to excess neural connections between adjacent brain areas (for example, between brain regions that process 
            letters/numbers and those that process color).<sup>[22]</sup>
          </p>
          
          <p className="mb-4">
            The disinhibited feedback theory proposes that while we all have 
            neural connections between different sensory areas, in most people these connections are inhibited, but in synesthetes 
            this inhibition is reduced, allowing feedback between sensory regions.<sup>[23]</sup> Brain imaging studies have shown differences 
            in brain structure and activation patterns in synesthetes, revealing increased gray matter in certain regions and 
            enhanced connectivity between sensory areas.<sup>[24][25]</sup> All infants may have synesthetic experiences due to incomplete neural 
            differentiation, and as the brain develops, most people lose these connections, but in synesthetes some remain 
            active throughout life.<sup>[26]</sup>
          </p>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[19] Tomson, S. N., Avidan, N., Lee, K., et al. (2011). "The genetics of colored sequence synesthesia: Suggestive evidence of linkage to 16q and genetic heterogeneity for the condition." <em>Behavioural Brain Research</em>, 223(1), 48-52.</p>
          <p>[20] Tilot, A. K., Kucera, K. S., Vino, A., et al. (2018). "Rare variants in <em>axonogenesis genes</em> connect three families with sound-color synesthesia." <em>Proceedings of the National Academy of Sciences</em>, 115(12), 3168-3173.</p>
          <p>[21] Ramachandran, V. S., & Hubbard, E. M. (2001). "Synaesthesia—a window into perception, thought and language." <em>Journal of Consciousness Studies</em>, 8(12), 3-34.</p>
          <p>[22] Hubbard, E. M., Arman, A. C., Ramachandran, V. S., & Boynton, G. M. (2005). "Individual differences among grapheme-color synesthetes: Brain-behavior correlations." <em>Neuron</em>, 45(6), 975-985.</p>
          <p>[23] Grossenbacher, P. G., & Lovelace, C. T. (2001). "Mechanisms of synesthesia: Cognitive and physiological constraints." <em>Trends in Cognitive Sciences</em>, 5(1), 36-41.</p>
          <p>[24] Rouw, R., & Scholte, H. S. (2007). "Increased structural connectivity in grapheme-color synesthesia." <em>Nature Neuroscience</em>, 10(6), 792-797.</p>
          <p>[25] Jäncke, L., Beeli, G., Eulig, C., & Hänggi, J. (2009). "The neuroanatomy of grapheme-color synesthesia." <em>European Journal of Neuroscience</em>, 29(6), 1287-1293.</p>
          <p>[26] Maurer, D., & Mondloch, C. J. (2005). "Neonatal synesthesia: A re-evaluation." In L. C. Robertson & N. Sagiv (Eds.), <em>Synesthesia: Perspectives from cognitive neuroscience</em> (pp. 193-213). New York: Oxford University Press.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('synesthesia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Synesthesia</a>
      </div>
    </article>
  );
}
