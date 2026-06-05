import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SynesthesiaSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function SynesthesiaSymptoms({ setCurrentArticle }: SynesthesiaSymptomsProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('synesthesia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Synesthesia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Synesthesia: Symptoms & Characteristics</h1>

      <div className="space-y-8">
        <section>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1736176421274-546a4eaf57d6?w=1080&q=80"
            alt="Music colors and sound visualization - chromesthesia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            There are many documented forms of synesthesia involving various combinations of senses and cognitive 
            processes.<sup>[10]</sup> Grapheme-color synesthesia (the most common form) occurs when letters and numbers are perceived 
            as inherently colored, with each synesthete having their own unique color associations.<sup>[11]</sup> Chromesthesia 
            (sound-to-color) involves perceiving colors when hearing sounds, music, or voices, with different pitches 
            or timbres evoking different colors.<sup>[12]</sup> Lexical-gustatory synesthesia occurs when words or phonemes evoke 
            specific taste sensations.<sup>[13]</sup>
          </p>
          
          <p className="mb-4">
            Spatial sequence synesthesia involves perceiving number sequences, months, or 
            days of the week as occupying specific locations in space.<sup>[14]</sup> Other forms include number-form (numbers visualized 
            in specific spatial arrangements), personification (letters, numbers, or days have distinct personalities), 
            mirror-touch (observing touch on another person triggers tactile sensations on one's own body), and auditory-tactile 
            (sounds produce tactile sensations).<sup>[15][16]</sup> Many synesthetes have multiple forms of synesthesia.<sup>[17]</sup> The experiences are 
            automatic, consistent, and involuntary, occurring throughout the person's life.<sup>[18]</sup>
          </p>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[10] Day, S. (2005). "Some demographic and socio-cultural aspects of synesthesia." In L. C. Robertson & N. Sagiv (Eds.), <em>Synesthesia: Perspectives from cognitive neuroscience</em> (pp. 11-33). New York: Oxford University Press.</p>
          <p>[11] Simner, J., & Ward, J. (2006). "The taste of words on the tip of the tongue." <em>Nature</em>, 444(7118), 438.</p>
          <p>[12] Ward, J., Huckstep, B., & Tsakanikos, E. (2006). "Sound-colour synaesthesia: To what extent does it use cross-modal mechanisms common to us all?" <em>Cortex</em>, 42(2), 264-280.</p>
          <p>[13] Ward, J., & Simner, J. (2003). "Lexical-gustatory synaesthesia: Linguistic and conceptual factors." <em>Cognition</em>, 89(3), 237-261.</p>
          <p>[14] Sagiv, N., Simner, J., Collins, J., Butterworth, B., & Ward, J. (2006). "What is the relationship between synaesthesia and visuo-spatial number forms?" <em>Cognition</em>, 101(1), 114-128.</p>
          <p>[15] Simner, J., & Holenstein, E. (2007). "Ordinal linguistic personification as a variant of synesthesia." <em>Journal of Cognitive Neuroscience</em>, 19(4), 694-703.</p>
          <p>[16] Banissy, M. J., & Ward, J. (2007). "Mirror-touch synesthesia is linked with empathy." <em>Nature Neuroscience</em>, 10(7), 815-816.</p>
          <p>[17] Novich, S., Cheng, S., & Eagleman, D. M. (2011). "Is synaesthesia one condition or many? A large-scale analysis reveals subgroups." <em>Journal of Neuropsychology</em>, 5(2), 353-371.</p>
          <p>[18] Asher, J. E., Lamb, J. A., Brocklebank, D., et al. (2009). "A whole-genome scan and fine-mapping linkage study of auditory-visual synesthesia reveals evidence of linkage to chromosomes 2q24, 5q33, 6p12, and 12p12." <em>American Journal of Human Genetics</em>, 84(2), 279-285.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('synesthesia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Synesthesia</a>
      </div>
    </article>
  );
}
