import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TouretteSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function TouretteSymptoms({ setCurrentArticle }: TouretteSymptomsProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tourette'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Tourette Syndrome</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Tourette Syndrome: Symptoms & Characteristics</h1>

      <div className="space-y-8">
        <section>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1727386245205-2112b722af99?w=1080&q=80"
            alt="Facial expressions and movements - characteristics of tics"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">Tourette syndrome is characterized by both motor and vocal tics.<sup>[10]</sup> Motor tics can be simple (eye blinking, head jerking, shoulder shrugging, facial grimacing, nose twitching, jaw movements) or complex (touching objects or people, jumping, hopping, twirling, spinning, making gestures, bending or gyrating).<sup>[11]</sup> Vocal (phonic) tics can also be simple (throat clearing, coughing, grunting, sniffing, barking, yelping, clicking sounds) or complex (repeating words or phrases echolalia, repeating one's own words palilalia, using socially inappropriate words coprolalia which affects only 10-15%, making animal sounds).<sup>[12][13]</sup></p>
          <p className="mb-4">Tics wax and wane in frequency and severity, can change type and location over time, may worsen with stress, excitement, or fatigue, often decrease during focused activities, can typically be temporarily suppressed with effort, and typically decrease during sleep.<sup>[14]</sup> Many individuals with TS also have co-occurring conditions such as ADHD (50-60%), OCD (30-40%), anxiety disorders, or learning differences, which often cause more functional impairment than the tics themselves.<sup>[15][16]</sup></p>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[10] Leckman, J. F., King, R. A., & Bloch, M. H. (2014). "Clinical features of Tourette syndrome and tic disorders." <em>Journal of Obsessive-Compulsive and Related Disorders</em>, 3(4), 372-379.</p>
          <p>[11] Jankovic, J., & Kurlan, R. (2011). "Tourette syndrome: Evolving concepts." <em>Movement Disorders</em>, 26(6), 1149-1156.</p>
          <p>[12] Robertson, M. M. (2000). "Tourette syndrome, associated conditions and the complexities of treatment." <em>Brain</em>, 123(3), 425-462.</p>
          <p>[13] Van Borsel, J., & Tetnowski, J. A. (2007). "Fluency disorders in genetic syndromes." <em>Journal of Fluency Disorders</em>, 32(4), 279-296.</p>
          <p>[14] Conelea, C. A., & Woods, D. W. (2008). "The influence of contextual factors on tic expression in Tourette's syndrome: A review." <em>Journal of Psychosomatic Research</em>, 65(5), 487-496.</p>
          <p>[15] Hirschtritt, M. E., Lee, P. C., Pauls, D. L., et al. (2015). "Lifetime prevalence, age of risk, and genetic relationships of comorbid psychiatric disorders in Tourette syndrome." <em>JAMA Psychiatry</em>, 72(4), 325-333.</p>
          <p>[16] Robertson, M. M., Eapen, V., & Cavanna, A. E. (2009). "The international prevalence, epidemiology, and clinical phenomenology of Tourette syndrome: A cross-cultural perspective." <em>Journal of Psychosomatic Research</em>, 67(6), 475-483.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tourette'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Tourette Syndrome</a>
      </div>
    </article>
  );
}
