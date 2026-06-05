import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface PANDASOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function PANDASOverview({ setCurrentArticle }: PANDASOverviewProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('pandas'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to PANDAS</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">PANDAS: Overview</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">PANDAS (Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcal Infections) is a condition where a streptococcal infection triggers an autoimmune response that affects the brain.<sup>[1]</sup> This leads to the sudden onset of neuropsychiatric symptoms, most notably OCD and tics, in children.<sup>[2]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What Is PANDAS?</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1707079918019-49caa51206c3?w=1080&q=80" alt="Autoimmune brain inflammation illustration" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">PANDAS occurs when the immune system, after fighting a strep infection (like strep throat or scarlet fever), mistakenly attacks the basal ganglia in the brain.<sup>[3]</sup> This region is responsible for movement, habits, and emotional regulation. The resulting neuroinflammation causes a dramatic shift in the child's personality and behavior, often described by parents as occurring "overnight."<sup>[4]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The PANDAS vs. PANS Distinction</h2>
          <p className="mb-4">While PANDAS is specifically linked to <strong>Streptococcus</strong>, a broader category called <strong>PANS</strong> (Pediatric Acute-onset Neuropsychiatric Syndrome) includes cases triggered by other infections (like Lyme disease, flu, or mycoplasma) or even environmental factors.<sup>[5]</sup> PANDAS is a subset of PANS.<sup>[6]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Key Characteristics</h2>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Sudden Onset:</strong> Symptoms appear "out of the blue" or worsen dramatically in a very short period.</li>
            <li className="mb-2"><strong>Pediatric Focus:</strong> Typically affects children between age 3 and puberty.<sup>[7]</sup></li>
            <li className="mb-2"><strong>Infection Link:</strong> A clear temporal connection to a recent strep infection.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prevalence</h2>
          <p className="mb-4">PANDAS is considered a rare condition, though some experts believe it is underdiagnosed. It is estimated to affect 1 in 200 children.<sup>[8]</sup> Awareness among pediatricians and neurologists has increased significantly in recent years, leading to more accurate identifications.</p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Swedo, S. E., et al. (1998). "PANDAS: Clinical description of the first 50 cases." <em>American Journal of Psychiatry</em>.</p>
          <p>[2] Frankovich, J., et al. (2015). "Youth with PANS: Presenting characteristics." <em>JCAP</em>.</p>
          <p>[3] Williams, K. A., & Swedo, S. E. (2015). "Post-infectious autoimmune disorders." <em>Brain Research</em>.</p>
          <p>[4] Murphy, T. K., et al. (2010). "The immunobiology of Tourette's and PANDAS." <em>JCAP</em>.</p>
          <p>[5] Swedo, S. E., et al. (2012). "From PANDAS to PANS." <em>Pediatrics & Therapeutics</em>.</p>
          <p>[6] Chang, K., et al. (2015). "Clinical evaluation of youth with PANS." <em>JCAP</em>.</p>
          <p>[7] Gabbay, V., et al. (2008). "PANDAS: Comparison of diagnosis and treatment." <em>Pediatrics</em>.</p>
          <p>[8] PANDAS Network. (2020). "Statistics and Awareness."</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('pandas'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to PANDAS</a>
      </div>
    </article>
  );
}
