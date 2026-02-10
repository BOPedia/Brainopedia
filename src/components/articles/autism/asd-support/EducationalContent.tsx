export function EducationalContent() {
  return (
    <>
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Support</h2>
        
        <p className="mb-6">
          Under the Individuals with Disabilities Education Act (IDEA), autistic students are entitled to 
          a free appropriate public education (FAPE) with services tailored to their unique needs.<sup>[28]</sup>
        </p>

        {/* Special Education Services */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Special Education Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">IEP (Individualized Education Program)</h4>
              </div>
              <p className="text-sm mb-3">
                Legally binding document outlining goals, services, and accommodations for students ages 3-21<sup>[29]</sup>
              </p>
              <ul className="space-y-1 text-xs">
                <li>• Annual goals and progress monitoring</li>
                <li>• Specialized instruction and services</li>
                <li>• Accommodations and modifications</li>
                <li>• Placement decisions</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">504 Plan</h4>
              </div>
              <p className="text-sm mb-3">
                Accommodations for students who don't need specialized instruction<sup>[30]</sup>
              </p>
              <ul className="space-y-1 text-xs">
                <li>• Covers K-12 and college</li>
                <li>• Focuses on access and barriers</li>
                <li>• Less intensive than IEP</li>
                <li>• Covers broader disabilities</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Least Restrictive Environment (LRE)</h4>
              </div>
              <p className="text-sm">
                Students should be educated with non-disabled peers to the maximum extent appropriate, 
                with supports provided as needed<sup>[31]</sup>
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Related Services</h4>
              </div>
              <p className="text-sm mb-2">
                Support services necessary for students to benefit from special education:
              </p>
              <ul className="space-y-1 text-xs">
                <li>• Speech-language therapy</li>
                <li>• Occupational therapy</li>
                <li>• Counseling services</li>
                <li>• Transportation</li>
                <li>• Assistive technology</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <h4 className="text-[#0c264d] font-bold text-lg">Transition Planning</h4>
            </div>
            <p className="text-sm">
              Beginning at age 14-16, IEPs must include transition planning for post-secondary education, 
              employment, and independent living<sup>[32]</sup>
            </p>
          </div>
        </div>

        {/* Educational Accommodations */}
        <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Educational Accommodations</h3>
          <p className="mb-6 text-sm">
            Common helpful accommodations that can support autistic students in accessing the curriculum:<sup>[33]</sup>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-3 text-center">Environmental</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Quiet workspace</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Noise-canceling headphones</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Sensory-friendly lighting</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Movement breaks</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Fidget tools allowed</span></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-3 text-center">Instructional</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Visual schedules</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Written instructions</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Advance notice of changes</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Reduced homework</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Modified assignments</span></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-3 text-center">Assessment</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Extended time on tests</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Alternative formats</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Quiet testing room</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Oral responses allowed</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Calculator/computer use</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <h4 className="text-[#0c264d] font-bold text-lg">Social Skills Support</h4>
            </div>
            <p className="text-sm">
              Social skills groups, lunch bunches, peer buddy systems, and structured recess support can 
              help autistic students navigate social situations at school.
            </p>
          </div>
        </div>

        {/* Educational Placement Options */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Educational Placement Options</h3>
          <p className="mb-6 text-sm">
            Placement should be determined by the student's individual needs, following the principle of 
            least restrictive environment:
          </p>

          <div className="space-y-4">
            {[
              { num: '1', bg: 'bg-[#10b981]', text: 'text-white', label: 'General Education with Supports', desc: 'Full inclusion in general education classroom with accommodations, modifications, and support services. Student participates in all typical classroom activities with appropriate supports.' },
              { num: '2', bg: 'bg-[#2abcd4]', text: 'text-white', label: 'Resource Room', desc: 'Part-time specialized instruction in a resource room for specific subjects or skills, with the rest of the day spent in general education. Often used for reading, math, or academic support.' },
              { num: '3', bg: 'bg-[#ffd166]', text: 'text-[#0c264d]', label: 'Special Education Classroom', desc: 'Self-contained classroom with smaller class size, specialized curriculum, and intensive support. May include opportunities for inclusion in general education for certain subjects or activities.' },
              { num: '4', bg: 'bg-[#0c264d]', text: 'text-white', label: 'Specialized School', desc: 'School specifically designed for students with disabilities, with specialized staff, programs, and therapeutic services on-site. May be public or private.' },
              { num: '5', bg: 'bg-[#10b981]', text: 'text-white', label: 'Homeschooling', desc: "Some families choose to homeschool with support from online programs, co-ops, therapists, and educational consultants. May still access some school services depending on state laws." },
            ].map((item) => (
              <div key={item.num} className="flex items-start gap-3">
                <div className={`${item.bg} ${item.text} rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold`}>{item.num}</div>
                <div className="flex-1">
                  <div className="font-bold text-[#0c264d] mb-1">{item.label}</div>
                  <div className="text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#ffd166] border-2 border-[#0c264d] p-5 rounded-lg shadow-md">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg flex items-center gap-2">
            Remember
          </h3>
          <p className="text-sm">
            Parents are equal members of the IEP team. You have the right to participate fully in educational 
            decisions, request evaluations, bring advocates, and if needed, pursue dispute resolution. Don't 
            hesitate to ask questions and advocate for your child's needs.
          </p>
        </div>
      </div>
    </>
  );
}
