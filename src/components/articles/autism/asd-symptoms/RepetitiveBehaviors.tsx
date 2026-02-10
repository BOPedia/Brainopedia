export function RepetitiveBehaviors() {
  return (
    <div className="space-y-6">
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Restricted, Repetitive Patterns of Behavior, Interests, or Activities</h2>
        
        <p className="mb-6">
          Autistic individuals display at least two of the following types of restricted, repetitive patterns:<sup>[1]</sup>
        </p>

        {/* Stereotyped or Repetitive Movements, Speech, or Object Use */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Stereotyped or Repetitive Movements, Speech, or Object Use</h3>
          <p className="mb-4 text-sm">
            These behaviors, often called "stimming" (self-stimulatory behaviors), serve various functions including 
            self-regulation, expressing emotions, or responding to sensory input.
          </p>
          
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Motor Stereotypies</div>
                <div className="text-sm">Hand flapping, rocking, spinning, jumping, finger flicking</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Vocal Stereotypies</div>
                <div className="text-sm">Echolalia (repeating words or phrases), scripting from movies/books, repetitive vocalizations or sounds</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Object Use</div>
                <div className="text-sm">Lining up toys, spinning wheels repeatedly, flicking strings or objects in peripheral vision</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Simple Repetitive Movements</div>
                <div className="text-sm">Body rocking, head banging, finger movements in front of eyes</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Note</div>
                <div className="text-sm">Stimming often serves important regulatory functions and shouldn't automatically be suppressed unless it's harmful.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Insistence on Sameness */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Insistence on Sameness and Inflexible Adherence to Routines</h3>
          <p className="mb-4 text-sm">
            Many autistic individuals find comfort and security in predictability and sameness.
          </p>
          
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Rigid Routines</div>
                <div className="text-sm">Needing to follow the same sequence of activities; distress when routines are disrupted</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Ritualized Patterns</div>
                <div className="text-sm">Specific ways of doing things (eating foods in certain order, taking exact same route)</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Difficulty with Transitions</div>
                <div className="text-sm">Extreme distress when changing activities or moving to new environments</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Need for Sameness</div>
                <div className="text-sm">Preference for same foods, clothes, environments; resistance to change or novelty</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Verbal Rituals</div>
                <div className="text-sm">Needing to ask the same questions repeatedly or have conversations follow specific scripts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highly Restricted, Fixated Interests */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Highly Restricted, Fixated Interests</h3>
          <p className="mb-4 text-sm">
            Special interests are a hallmark feature of autism and can be a source of joy, expertise, and identity.
          </p>
          
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Intensity</div>
                <div className="text-sm">Passionate, all-consuming focus on specific topics with depth of knowledge exceeding typical interest</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Unusual Focus</div>
                <div className="text-sm">Interests in topics, objects, or activities that are atypical for age or culture (train schedules, vacuum cleaners, specific historical periods)</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Persistence</div>
                <div className="text-sm">Interests may last months, years, or a lifetime; talking about the interest extensively</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Collecting and Categorizing</div>
                <div className="text-sm">Collecting objects related to interests, organizing and categorizing information</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Expertise</div>
                <div className="text-sm">Development of exceptional knowledge or skills in area of interest</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Note</div>
                <div className="text-sm">Special interests can be leveraged for learning, career development, social connection with like-minded individuals, and quality of life.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hyper- or Hyporeactivity to Sensory Input */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Hyper- or Hyporeactivity to Sensory Input</h3>
          <p className="mb-4 text-sm">
            Sensory differences are extremely common in autism and can significantly impact daily functioning.
          </p>
          
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Hypersensitivity (over-responsiveness)</div>
                <div className="text-sm">Overwhelmed by loud sounds, bright lights, strong smells, or certain textures</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Pain Sensitivity</div>
                <div className="text-sm">Pain sensitivity to sounds (auditory pain from everyday noises)</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Avoidance</div>
                <div className="text-sm">Avoidance of touch, certain clothing fabrics, or food textures</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Difficulty in Busy Environments</div>
                <div className="text-sm">Difficulty in busy, stimulating environments (stores, crowds)</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Sensory Overload</div>
                <div className="text-sm">Sensory overload leading to meltdowns or shutdown</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Hyposensitivity (under-responsiveness)</div>
                <div className="text-sm">Seeking intense sensory experiences (loud music, strong flavors, tight hugs)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">High Pain Tolerance</div>
                <div className="text-sm">High pain tolerance or not noticing injuries</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Seeking Movement</div>
                <div className="text-sm">Seeking movement (spinning, jumping, crashing into things)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Fascination with Lights</div>
                <div className="text-sm">Fascination with lights, movement, or visual patterns</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Mouthing Objects</div>
                <div className="text-sm">Mouthing objects or seeking oral input beyond typical age</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Unusual Sensory Interests</div>
                <div className="text-sm">Fascination with specific textures, sounds, or visual stimuli</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Smelling Objects</div>
                <div className="text-sm">Smelling objects or people excessively</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Staring at Lights</div>
                <div className="text-sm">Staring at lights, fans, or spinning objects</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Seeking Tactile Sensations</div>
                <div className="text-sm">Seeking specific tactile sensations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
