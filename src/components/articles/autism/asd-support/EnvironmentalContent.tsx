export function EnvironmentalContent() {
  return (
    <>
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental Modifications and Accommodations</h2>

        <p className="mb-6">
          Creating supportive environments reduces barriers and allows autistic individuals to thrive by addressing 
          sensory needs, providing clear communication, and establishing predictable structures.<sup>[47]</sup>
        </p>

        {/* Sensory Accommodations */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Sensory Accommodations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Sound</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Noise-canceling headphones</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>White noise machines</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Quiet spaces for breaks</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Warning before loud noises</span></li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Light</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Dimmer switches for control</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Natural lighting when possible</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Avoid fluorescent lights</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Sunglasses option available</span></li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">✋</span>
                <h4 className="text-[#0c264d] font-bold text-lg">Touch</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Seamless, tag-free clothing</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Weighted blankets</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Compression garments</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Fidget tools available</span></li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Movement</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Regular sensory breaks</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Movement opportunities</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Wobble stools, standing desks</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Alternative seating options</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <h4 className="text-[#0c264d] font-bold text-lg">Calm Spaces</h4>
            </div>
            <p className="text-sm">
              Designated quiet areas for sensory regulation and emotional reset. Should include low lighting, 
              comfortable seating, and calming sensory items.
            </p>
          </div>
        </div>

        {/* Visual Supports */}
        <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Visual Supports</h3>
          <p className="mb-6 text-sm">
            Visual supports make abstract concepts concrete, reduce language processing demands, and provide 
            permanent reference points.<sup>[48]</sup>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Visual Schedules', desc: 'Pictures or words showing daily routines and transitions', border: 'border-[#0c264d]' },
              { label: 'Social Stories', desc: 'Visual explanations of social situations', border: 'border-[#2abcd4]' },
              { label: 'First-Then Boards', desc: 'Showing order of activities', border: 'border-[#ffd166]' },
              { label: 'Choice Boards', desc: 'Visual presentation of options', border: 'border-[#ffd166]' },
              { label: 'Visual Timers', desc: 'Showing passage of time concretely', border: 'border-[#2abcd4]' },
              { label: 'Visual Labels', desc: 'Labels on storage, locations, and materials', border: 'border-[#0c264d]' },
            ].map((item) => (
              <div key={item.label} className={`bg-white p-4 rounded-md shadow-sm border-l-4 ${item.border}`}>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-[#0c264d] font-bold">{item.label}</h4>
                </div>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Structure and Predictability */}
        <div className="mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Structure and Predictability</h3>
          
          <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
            <p className="mb-4 text-sm">
              Predictable environments reduce anxiety and allow autistic individuals to focus energy on learning 
              and engagement rather than constant environmental monitoring.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { num: '1', label: 'Consistent Routines', desc: 'Maintain predictable daily schedules and sequences' },
                { num: '2', label: 'Advance Warnings', desc: 'Provide notice before transitions or changes' },
                { num: '3', label: 'Clear Expectations', desc: 'Explicitly state rules and behavioral expectations' },
                { num: '4', label: 'Organized Spaces', desc: 'Keep environment organization consistent and logical' },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-3">
                  <div className="bg-[#2abcd4] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">{item.num}</div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">{item.label}</div>
                    <div className="text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Communication Accommodations */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Communication Accommodations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold">Explicit Language</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Use direct, literal language</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Avoid idioms and sarcasm</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Say exactly what you mean</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Allow processing time</span></li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold">AAC & Alternative Communication</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Speech-generating devices</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Picture exchange systems (PECS)</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Written communication</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Sign language or gestures</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Workplace/School Accommodations */}
        <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Workplace & School Accommodations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-2 text-center">Physical Space</h4>
              <ul className="space-y-1 text-sm">
                <li>• Quiet workspace option</li>
                <li>• Natural lighting preference</li>
                <li>• Temperature control</li>
                <li>• Minimal visual distractions</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <div className="text-center mb-3"><span className="text-4xl">⏰</span></div>
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
      </div>
    </>
  );
}
