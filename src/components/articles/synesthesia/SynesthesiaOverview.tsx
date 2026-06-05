import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SynesthesiaOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function SynesthesiaOverview({ setCurrentArticle }: SynesthesiaOverviewProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('synesthesia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Synesthesia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Synesthesia: Overview</h1>

      <div className="space-y-8">
        <section>
          <p className="mb-4">
            <strong>Synesthesia</strong> is a neurological phenomenon in which stimulation of one sensory or cognitive 
            pathway leads to involuntary experiences in a second sensory or cognitive pathway.<sup>[1]</sup> For example, a person 
            with synesthesia might see colors when hearing music, or taste flavors when reading words.<sup>[2]</sup>
          </p>
          
          <div className="mt-6">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1765363674916-cb6d520fd8ce?w=1080&q=80"
              alt="Colorful abstract sensory perception - understanding synesthesia"
              className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
            />
            
            <p className="mb-4">
              The term "synesthesia" comes from the Greek words "syn" (together) and "aisthesis" (sensation), literally 
              meaning "joined sensation."<sup>[3]</sup> Synesthesia is a lifelong condition that people are typically born with, 
              though it may not be recognized until later in life.<sup>[4]</sup> It is estimated to occur in about 2-4% of the 
              population, though this may be higher as many people don't realize their experiences are unusual.<sup>[5]</sup>
            </p>
            
            <p className="mb-4">
              Unlike 
              sensory hallucinations, synesthetic perceptions are consistent, automatic, and involuntary.<sup>[6]</sup> The same 
              stimulus will always produce the same synesthetic experience. For instance, if the letter "A" appears 
              red to a synesthete, it will always appear red, and this association remains stable throughout their life.<sup>[7]</sup> 
              Synesthesia is not considered a disorder or disability. In fact, many synesthetes view it as a gift that 
              enriches their perception of the world, enhancing creativity and memory.<sup>[8][9]</sup>
            </p>
          </div>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Cytowic, R. E., & Eagleman, D. M. (2009). <em>Wednesday is indigo blue: Discovering the brain of synesthesia</em>. Cambridge, MA: MIT Press.</p>
          <p>[2] Baron-Cohen, S., & Harrison, J. E. (1997). <em>Synaesthesia: Classic and contemporary readings</em>. Oxford: Blackwell Publishers.</p>
          <p>[3] Simner, J., & Hubbard, E. M. (2013). <em>The Oxford handbook of synesthesia</em>. Oxford: Oxford University Press.</p>
          <p>[4] Baron-Cohen, S., Burt, L., Smith-Laittan, F., Harrison, J., & Bolton, P. (1996). "Synaesthesia: Prevalence and familiality." <em>Perception</em>, 25(9), 1073-1079.</p>
          <p>[5] Simner, J., Mulvenna, C., Sagiv, N., et al. (2006). "Synaesthesia: The prevalence of atypical cross-modal experiences." <em>Perception</em>, 35(8), 1024-1033.</p>
          <p>[6] Cytowic, R. E. (1989). <em>Synesthesia: A union of the senses</em>. New York: Springer-Verlag.</p>
          <p>[7] Baron-Cohen, S., Wyke, M. A., & Binnie, C. (1987). "Hearing words and seeing colours: An experimental investigation of a case of synaesthesia." <em>Perception</em>, 16(6), 761-767.</p>
          <p>[8] Ward, J., Thompson-Lake, D., Ely, R., & Kaminski, F. (2008). "Synaesthesia, creativity and art: What is the link?" <em>British Journal of Psychology</em>, 99(1), 127-141.</p>
          <p>[9] Rothen, N., & Meier, B. (2010). "Higher prevalence of synaesthesia in art students." <em>Perception</em>, 39(5), 718-720.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('synesthesia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Synesthesia</a>
      </div>
    </article>
  );
}
