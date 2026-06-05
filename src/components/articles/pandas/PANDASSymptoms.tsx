import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface PANDASSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function PANDASSymptoms({ setCurrentArticle }: PANDASSymptomsProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('pandas'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to PANDAS</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Symptoms & Characteristics of PANDAS</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">The hallmark of PANDAS is the sudden, dramatic "explosion" of neuropsychiatric symptoms. A child who was previously functioning typically may suddenly exhibit severe anxiety, OCD, or tics.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Primary Symptoms</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1656367829211-c7c0f277c518?w=1080&q=80" alt="Anxious child illustration" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">To meet the PANDAS criteria, a child must exhibit at least one of the following:<sup>[2]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Sudden Onset OCD:</strong> Intensive intrusive thoughts and repetitive rituals that weren't there before.<sup>[3]</sup></li>
            <li className="mb-2"><strong>Sudden Onset Tics:</strong> New motor tics (blinking, twitching) or vocal tics (grunting, repeating sounds) that appear abruptly.<sup>[4]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Associated Symptoms</h2>
          <p className="mb-4">Most children with PANDAS also experience a range of other symptoms:<sup>[5]</sup></p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">Emotional Lability</h3>
              <p className="text-sm">Severe mood swings, sudden crying, or extreme irritability and aggression.<sup>[6]</sup></p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">Separation Anxiety</h3>
              <p className="text-sm">Suddenly being unable to be away from a parent, even in familiar settings.<sup>[7]</sup></p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">Sleep Disturbance</h3>
              <p className="text-sm">Difficulty falling asleep, frequent nightmares, or night terrors.</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">Cognitive Decline</h3>
              <p className="text-sm">Sudden deterioration in school performance or handwriting (dysgraphia).<sup>[8]</sup></p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Physical Signs</h2>
          <p className="mb-4">Parents often notice specific physical changes during a PANDAS flare:<sup>[9]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Urinary Frequency:</strong> Sudden, frequent need to use the bathroom (not related to a UTI).</li>
            <li className="mb-2"><strong>Dilated Pupils:</strong> Pupils that remain large regardless of light levels.<sup>[10]</sup></li>
            <li className="mb-2"><strong>Joint Pain:</strong> Unexplained aches in the knees or wrists.</li>
            <li className="mb-2"><strong>Sensory Sensitivity:</strong> Sudden intolerance to tags on clothing, loud noises, or certain lights.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The "Sawtooth" Pattern</h2>
          <p className="mb-4">Symptoms often follow a "sawtooth" pattern: they flare up intensely during or after an infection, then gradually decrease, only to flare up again with the next exposure to strep.<sup>[11]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Swedo, S. E., et al. (1998). "PANDAS: First 50 cases." <em>American Journal of Psychiatry</em>.</p>
          <p>[2] Chang, K., et al. (2015). "Clinical evaluation of youth with PANS." <em>JCAP</em>.</p>
          <p>[3] Murphy, T. K., et al. (2010). "Immunobiology of Tourette's and PANDAS."</p>
          <p>[4] Perlmutter, S. J., et al. (1999). "Therapeutic plasma exchange for OCD and tics." <em>The Lancet</em>.</p>
          <p>[5] Swedo, S. E., et al. (2017). "PANS/PANDAS: Clinical presentation." <em>Psychiatric Times</em>.</p>
          <p>[6] Thienemann, M., et al. (2017). "Clinical management of PANS: Part I." <em>JCAP</em>.</p>
          <p>[7] Calaprice, D., et al. (2018). "Treatment of PANDAS in a large survey population." <em>JCAP</em>.</p>
          <p>[8] Brandi, M. L., et al. (2012). "Deterioration of handwriting in PANDAS."</p>
          <p>[9] Frankovich, J., et al. (2015). "Multidisciplinary clinic for PANS." <em>JCAP</em>.</p>
          <p>[10] NIMH. (2019). "Information about PANDAS/PANS."</p>
          <p>[11] Murphy, T. K., et al. (2007). "Relationship of behaviors to Group A Strep." <em>Biological Psychiatry</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('pandas'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to PANDAS</a>
      </div>
    </article>
  );
}
