import { ImageWithFallback } from "../../../figma/ImageWithFallback";

interface EnvironmentalContentProps {
  setCurrentArticle?: (article: string) => void;
}

export function EnvironmentalContent({ setCurrentArticle }: EnvironmentalContentProps) {
  return (
    <>
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental Modifications and Accommodations</h2>

        <p className="mb-6">
          Creating supportive environments reduces barriers and allows autistic individuals to thrive by addressing 
          sensory needs, providing clear communication, and establishing predictable structures.<sup>10</sup>
        </p>

        {/* Sensory Accommodations */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Sensory Accommodations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center justify-center mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Sound</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Noise-canceling headphones</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Quiet spaces available for breaks</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Sound-absorbing materials (rugs, acoustic panels)</span></li>
                <li className="flex items-start gap-2 text-red-700"><span className="mt-1">✗</span><span>Avoid unexpected loud alarms when possible</span></li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="flex items-center justify-center mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Lighting</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Natural lighting when possible</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Adjustable desk lamps</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Dimmer switches</span></li>
                <li className="flex items-start gap-2 text-red-700"><span className="mt-1">✗</span><span>Avoid flickering fluorescent lights</span></li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center justify-center mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Visual</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Muted, calming paint colors</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Organized, clutter-free spaces</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Visual boundaries (furniture arranging)</span></li>
                <li className="flex items-start gap-2 text-red-700"><span className="mt-1">✗</span><span>Avoid overly busy patterns on walls/floors</span></li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#0A9DC4] shadow-sm">
              <div className="flex items-center justify-center mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Smell & Tactile</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Fragrance-free policies</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Allowing comfortable/modified clothing</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Alternative seating (wobble stools, exercise balls)</span></li>
                <li className="flex items-start gap-2 text-red-700"><span className="mt-1">✗</span><span>Avoid forcing contact with aversive textures</span></li>
              </ul>
            </div>
          </div>
          
          <p className="mt-6 text-sm bg-white p-4 rounded border-2 border-[#2abcd4]">
            <strong>Note:</strong> Sensory needs are highly individualized. What is calming to one autistic person 
            (e.g., deep pressure) might be overwhelming to another. A personalized sensory profile is essential because 
            environmental modifications can significantly improve participation and well-being.<sup>2</sup>
          </p>
        </div>

        {/* Structure and Predictability */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Structure and Predictability</h3>
          
          <p className="mb-4 text-sm">
            Many autistic individuals experience less anxiety when the environment is predictable and expectations are clear. 
            Visual supports and structured routines help individuals understand expectations, navigate transitions, and manage anxiety.<sup>3</sup>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-2 text-center">Physical Space</h4>
              <ul className="space-y-1 text-sm">
                <li>• Clear zones for different activities</li>
                <li>• Visual labels on drawers/cabinets</li>
                <li>• Consistent seating arrangements</li>
                <li>• Minimizing unnecessary changes</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-2 text-center">Scheduling</h4>
              <ul className="space-y-1 text-sm">
                <li>• Flexible hours</li>
                <li>• Break schedule adjustments</li>
                <li>• Advance notice of changes</li>
                <li>• Written agendas provided</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-2 text-center">Communication</h4>
              <ul className="space-y-1 text-sm">
                <li>• Written instructions</li>
                <li>• Email over phone calls</li>
                <li>• Clear expectations stated</li>
                <li>• Regular check-ins</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#ffd166] border-2 border-[#0c264d] p-5 rounded-lg shadow-md">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg flex items-center gap-2">
            Key Principle
          </h3>
          <p className="text-sm">
            Environmental accommodations aren't "special treatment"—they're removing barriers so autistic 
            individuals can access the same opportunities as everyone else. The goal is to change the environment 
            to fit the person, not force the person to fit the environment.
          </p>
        </div>

        {/* ===== REFERENCES SECTION ===== */}
        <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />

        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
          <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
          
          {/* CITED STUDIES: GREEN */}
          <div className="mb-6">
            <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
              Cited Studies & Statistics
            </h4>
            <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
              <li>
                Martin, C. S. (2014). "Exploring the impact of the design of the physical environment on children with autism spectrum disorders." <i>Journal of Child and Family Studies</i>, 23(4), 746-754.
              </li>
              <li>
                Tomchek, S. D., & Dunn, W. (2007). "Sensory processing in children with and without autism: A comparative study using the short sensory profile." <i>The American Journal of Occupational Therapy</i>, 61(2), 190-200.
              </li>
              <li>
                Mesibov, G. B., & Shea, V. (2010). "The TEACCH program in the era of evidence-based practice." <i>Journal of Autism and Developmental Disorders</i>, 40(5), 570-579.
              </li>
            </ol>
          </div>
          
          {/* BACKGROUND SOURCES: CYAN */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed pl-2">
              <li>
                American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
}