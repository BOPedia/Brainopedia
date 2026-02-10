export function FamilyPrinciplesContent() {
  return (
    <>
      {/* Family Support Section */}
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Family Support</h2>

        <p className="mb-6">
          Supporting an autistic family member impacts the whole family. Families need support, resources, 
          and understanding to thrive alongside their autistic loved ones.<sup>[57]</sup>
        </p>

        <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Family Support Resources</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Parent Training Programs</h4>
              </div>
              <p className="text-sm">Evidence-based programs teaching strategies to support child development and behavior<sup>[58]</sup></p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Respite Care</h4>
              </div>
              <p className="text-sm">Temporary relief care allowing families necessary breaks to rest and recharge<sup>[59]</sup></p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Support Groups</h4>
              </div>
              <p className="text-sm">Connection with other autism families for shared experiences and mutual support</p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Sibling Support</h4>
              </div>
              <p className="text-sm">Programs and resources specifically for siblings of autistic children<sup>[60]</sup></p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Mental Health Support</h4>
              </div>
              <p className="text-sm">Therapy and counseling for family members experiencing stress, anxiety, or depression</p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Financial Assistance</h4>
              </div>
              <p className="text-sm">Understanding benefits like SSI, Medicaid waivers, tax deductions, and other financial resources</p>
            </div>
          </div>
        </div>

        {/* Advocacy Training */}
        <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-[#0c264d] font-bold text-lg">Advocacy Training</h3>
          </div>
          <p className="mb-4 text-sm">
            Learning to effectively advocate for your family member's needs across settings:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">School Advocacy</h4>
              <ul className="space-y-1 text-xs">
                <li>• IEP/504 meetings</li>
                <li>• Requesting evaluations</li>
                <li>• Understanding rights</li>
                <li>• Documenting concerns</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Medical Advocacy</h4>
              <ul className="space-y-1 text-xs">
                <li>• Communicating with doctors</li>
                <li>• Requesting accommodations</li>
                <li>• Getting referrals</li>
                <li>• Insurance navigation</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Community Advocacy</h4>
              <ul className="space-y-1 text-xs">
                <li>• Access to programs</li>
                <li>• Public accommodations</li>
                <li>• Legal protections</li>
                <li>• Awareness education</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Principles of Good Support */}
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Principles of Effective, Respectful Support</h2>

        <p className="mb-6">
          Quality autism support is grounded in neurodiversity-affirming principles that respect autistic 
          ways of being while providing meaningful assistance.
        </p>

        <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Core Principles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Presume Competence', sup: '[61]', desc: 'Assume understanding and potential even when not obvious' },
              { label: 'Respect Autonomy', sup: '[62]', desc: 'Support choice-making and self-determination' },
              { label: 'Focus on Quality of Life', sup: '', desc: 'Not just skill acquisition or behavior reduction' },
              { label: 'Build on Strengths', sup: '', desc: 'Leverage special interests for learning and engagement' },
              { label: 'Accept Autistic Ways of Being', sup: '', desc: "Don't target harmless behaviors like stimming" },
              { label: 'Listen to Autistic Voices', sup: '[63]', desc: 'Center autistic perspectives in decisions' },
              { label: 'Teach to the Individual', sup: '', desc: 'One size does not fit all' },
              { label: 'Support Communication', sup: '', desc: 'Provide access to communication methods that work' },
              { label: 'Create Sensory-Friendly Environments', sup: '', desc: 'Reduce barriers rather than expecting constant adaptation' },
              { label: 'Promote Inclusion', sup: '[64]', desc: 'Support participation in community life' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-1">{item.label}{item.sup && <sup>{item.sup}</sup>}</div>
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
            "Nothing about us without us" — autistic individuals should be included in decisions about 
            their own support, services, and lives. The best support respects autonomy, builds on strengths, 
            and centers the autistic person's own goals and preferences.
          </p>
        </div>
      </div>
    </>
  );
}
