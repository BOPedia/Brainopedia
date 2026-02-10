export function DSM5Criteria() {
  return (
    <div className="bg-[#f0f9ff] p-6 rounded-lg">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">DSM-5 Diagnostic Criteria</h2>
      
      <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
        <p className="text-sm">
          <strong>Important:</strong> There is no medical test for autism. Diagnosis is based on observation 
          and assessment of characteristics and behaviors using the DSM-5 criteria.<sup>[2][3]</sup>
        </p>
      </div>

      <p className="mb-6">
        The DSM-5 (Diagnostic and Statistical Manual of Mental Disorders, 5th edition) provides the standard 
        diagnostic criteria for autism spectrum disorder used by clinicians.<sup>[3]</sup> Autism is diagnosed 
        when all criteria are met across two main domains: social communication and restricted/repetitive behaviors.
      </p>

      {/* Criterion A */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Criterion A: Social Communication and Interaction</h3>
        <p className="text-sm mb-4">
          Persistent deficits in social communication and social interaction across multiple contexts, as manifested 
          by <strong>ALL of the following</strong>:<sup>[3]</sup>
        </p>
        
        <div className="space-y-3">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">1. Social-Emotional Reciprocity</div>
            <div className="text-sm">
              Deficits in back-and-forth conversation, sharing of interests/emotions, failure to initiate or 
              respond to social interactions
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">2. Nonverbal Communication</div>
            <div className="text-sm">
              Poorly integrated verbal and nonverbal communication, abnormalities in eye contact and body language, 
              deficits in understanding and use of gestures
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">3. Developing and Maintaining Relationships</div>
            <div className="text-sm">
              Difficulty adjusting behavior to suit different contexts, difficulty sharing imaginative play or 
              making friends, absence of interest in peers
            </div>
          </div>
        </div>
      </div>

      {/* Criterion B */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Criterion B: Restricted, Repetitive Behaviors</h3>
        <p className="text-sm mb-4">
          Restricted, repetitive patterns of behavior, interests, or activities, as manifested by <strong>AT LEAST 
          TWO of the following</strong>:<sup>[3]</sup>
        </p>
        
        <div className="space-y-3">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">1. Stereotyped or Repetitive Movements/Speech</div>
            <div className="text-sm">
              Simple motor stereotypies, lining up toys, echolalia (repeating words), idiosyncratic phrases
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">2. Insistence on Sameness</div>
            <div className="text-sm">
              Inflexible adherence to routines, ritualized patterns, extreme distress at small changes, difficulties 
              with transitions, rigid thinking patterns, need to take same route or eat same food every day
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">3. Highly Restricted, Fixated Interests</div>
            <div className="text-sm">
              Abnormal in intensity or focus—strong attachment to unusual objects, excessively circumscribed or 
              perseverative interests (e.g., deep focus on trains, maps, specific topics)
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">4. Hyper- or Hyporeactivity to Sensory Input</div>
            <div className="text-sm">
              Apparent indifference to pain/temperature, adverse response to specific sounds or textures, excessive 
              smelling or touching of objects, visual fascination with lights or movement
            </div>
          </div>
        </div>
      </div>

      {/* Additional Requirements */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Additional Requirements</h3>
        
        <div className="space-y-3">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Criterion C: Early Developmental Period</div>
            <div className="text-sm">
              Symptoms must be present in the early developmental period (though may not become fully manifest 
              until social demands exceed limited capacities, or may be masked by learned strategies)
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Criterion D: Clinically Significant Impairment</div>
            <div className="text-sm">
              Symptoms cause clinically significant impairment in social, occupational, or other important areas 
              of functioning
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Criterion E: Not Better Explained By Other Conditions</div>
            <div className="text-sm">
              Disturbances are not better explained by intellectual disability or global developmental delay (though 
              autism and intellectual disability can co-occur)
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
        <p className="text-sm">
          <strong>Understanding the Spectrum:</strong> Autism is a spectrum, meaning people can meet these criteria 
          in diverse ways with different levels of support needs. The diagnosis focuses on patterns, not checklists. 
          Two autistic people can present very differently while both meeting diagnostic criteria.
        </p>
      </div>
    </div>
  );
}
