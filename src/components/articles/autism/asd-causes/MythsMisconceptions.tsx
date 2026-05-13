import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

/* ─── THE GUEST LIST (Interface) ─── */
interface MythsContentProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function MythsContent({ setCurrentArticle }: MythsContentProps) {
  return (
    <div className="bg-[#e0f7fa] p-6 rounded-lg text-[#0c264d]">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Common Myths & Misconceptions</h2>
      
      <p className="mb-8 leading-relaxed text-[#0c264d]">
        Because autism was historically misunderstood by both the medical community and the media, several persistent myths continue to cause confusion. Clearing up these misconceptions is vital for creating a world that truly understands and supports autistic individuals.
      </p>

      <div className="space-y-6 mb-10">
        
        {/* MYTH 1: DIETS & GUT */}
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-400">
          <h3 className="font-bold mb-2 text-lg font-spartan text-[#0c264d]">
            <span className="text-red-500 mr-2">Myth:</span> Specific diets (like GFCF) can "cure" autism.
          </h3>
          <h4 className="font-bold text-green-600 mb-3 text-sm">
            <span className="mr-2">Fact:</span> Diets don't change neurology, but they can alleviate severe, hidden physical pain.
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            There is no diet that "cures" autism, but many parents report dramatic behavioral improvements when putting their child on a Gluten-Free/Casein-Free (GFCF) diet. Why? The answer lies in the gut. Research shows that autistic children are up to <strong>4 times more likely</strong> to experience chronic gastrointestinal (GI) issues, with 40% to 80% suffering from chronic abdominal pain or GI distress.<sup className="text-[#0c264d] font-extrabold ml-0.5">1</sup> 
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Many also experience what is colloquially called "leaky gut" (increased intestinal permeability), where the gut lining is inflamed.<sup className="text-[#0c264d] font-extrabold ml-0.5">2</sup> If a child with severe GI inflammation is non-speaking or struggles with interoception (feeling internal body signals), they cannot say, "My stomach cramps when I eat wheat." They express that pain through meltdowns, self-injury, or losing focus. When a specialized diet removes the inflammatory foods, the stomach stops hurting, and the distress behaviors vanish. The diet didn't cure the autism; it removed the physical pain.
          </p>
        </div>

        {/* MYTH 2: EMPATHY */}
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#2abcd4]">
          <h3 className="font-bold mb-2 text-lg font-spartan text-[#0c264d]">
            <span className="text-red-500 mr-2">Myth:</span> Autistic people lack empathy or emotion.
          </h3>
          <h4 className="font-bold text-green-600 mb-3 text-sm">
            <span className="mr-2">Fact:</span> Autistic people experience deep empathy, but express it differently.
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            This harmful myth stems from a misunderstanding of how autistic people communicate. Many autistic individuals actually experience <em>hyper-empathy</em>, feeling the emotions of others so intensely that it becomes overwhelming, causing them to shut down or withdraw. Researchers now recognize the <strong>"Double Empathy Problem."</strong><sup className="text-[#0c264d] font-extrabold ml-0.5">3</sup> It isn't that autistic people lack empathy for neurotypical people; rather, both groups struggle to read each other's unique social cues. Autistic people show profound empathy and seamless communication when interacting with other autistic individuals.
          </p>
        </div>

        {/* MYTH 3: BOYS ONLY */}
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#ffd166]">
          <h3 className="font-bold mb-2 text-lg font-spartan text-[#0c264d]">
            <span className="text-red-500 mr-2">Myth:</span> Autism is almost entirely a "boy's condition."
          </h3>
          <h4 className="font-bold text-green-600 mb-3 text-sm">
            <span className="mr-2">Fact:</span> Girls and women are vastly underdiagnosed due to "masking."
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            Historically, the diagnostic ratio was thought to be 4 boys for every 1 girl. However, modern research is proving that the diagnostic criteria were primarily based on how autism presents in young boys.<sup className="text-[#0c264d] font-extrabold ml-0.5">4</sup> Autistic girls often present differently—their special interests might be more socially acceptable (like literature or animals rather than trains), and societal pressure forces them to learn how to "mask" or mimic neurotypical social behaviors at a much earlier age. This leads to generations of women only receiving their autism diagnosis in their 20s or 30s after suffering severe autistic burnout.
          </p>
        </div>

        {/* MYTH 4: SAVANT */}
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-emerald-400">
          <h3 className="font-bold mb-2 text-lg font-spartan text-[#0c264d]">
            <span className="text-red-500 mr-2">Myth:</span> All autistic people have a "Rain Man" savant skill.
          </h3>
          <h4 className="font-bold text-green-600 mb-3 text-sm">
            <span className="mr-2">Fact:</span> Savant syndrome is incredibly rare.
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            Media representations often rely on the trope of the autistic genius who can instantly count dropped toothpicks or memorize phone books. In reality, "savant syndrome" is exceptionally rare, occurring in only about 10% of the autistic population.<sup className="text-[#0c264d] font-extrabold ml-0.5">5</sup> While many autistic individuals do possess "spiky profiles" with intense passions and deep, specialized knowledge, expecting every autistic child to have a superhuman academic skill places unfair expectations on them and invalidates the very real support needs they may have.
          </p>
        </div>

      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-20 my-8" />
      
      <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <ol className="list-decimal ml-5 text-xs space-y-3 text-[#0c264d] opacity-90 leading-relaxed">
            <li>
              McElhanon, B. O., McCracken, C., Karpen, S., & Sharp, W. G. (2014). "Gastrointestinal symptoms in autism spectrum disorder: a meta-analysis." <i>Pediatrics</i>, 133(5), 872-883.
            </li>
            <li>
              Fiorentino, M., Sapone, A., Senger, S., et al. (2016). "Blood-brain barrier and intestinal epithelial barrier alterations in autism spectrum disorders." <i>Molecular Autism</i>, 7(1), 59.
            </li>
            <li>
              Milton, D. E. (2012). "On the ontological status of autism: the 'double empathy problem'." <i>Disability & Society</i>, 27(6), 883-887.
            </li>
            <li>
              Loomes, R., Hull, L., & Mandy, W. P. L. (2017). "What is the male-to-female ratio in autism spectrum disorder? A systematic review and meta-analysis." <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>, 56(6), 466-474.
            </li>
            <li>
              Treffert, D. A. (2009). "The savant syndrome: an extraordinary condition. A synopsis: past, present, future." <i>Philosophical Transactions of the Royal Society B: Biological Sciences</i>, 364(1522), 1351-1357.
            </li>
          </ol>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-600 font-bold mb-3 border-b border-cyan-600 border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-[#0c264d] opacity-90 leading-relaxed pl-2">
            <li>
              Piwowarczyk, A., Horvath, A., Łukasik, J., Pisula, E., & Szajewska, H. (2018). "Gluten- and casein-free diet and autism spectrum disorders in children: a systematic review." <i>European Journal of Nutrition</i>, 57(2), 433-440.
            </li>
            <li>
              American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}