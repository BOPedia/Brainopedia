export function CoreSymptoms() {
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <p className="mb-4">
          The characteristics of autism spectrum disorder are highly variable, but they fall into two main 
          categories as defined by the DSM-5: persistent differences in social communication and interaction, 
          and restricted, repetitive patterns of behavior, interests, or activities.<sup>[1]</sup> Understanding 
          these characteristics is essential for recognition, diagnosis, and appropriate support.
        </p>
        
        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
          <p className="text-sm">
            <strong>∞ Remember:</strong> These characteristics exist on a spectrum with tremendous variation between individuals. 
            No two autistic people present exactly the same way.
          </p>
        </div>
      </div>

      {/* DSM-5 Symptom Chart */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">DSM-5 Diagnostic Categories</h2>
        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Two Core Diagnostic Domains</h3>
          <p className="text-sm mb-4">
            According to the DSM-5, autism spectrum disorder is characterized by persistent deficits in two main areas:<sup>[1]</sup>
          </p>
          <div className="space-y-3">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">1. Social Communication and Social Interaction</div>
              <div className="text-sm">Persistent differences across multiple contexts in social-emotional reciprocity, nonverbal communication, and developing/maintaining relationships</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">2. Restricted, Repetitive Patterns of Behavior, Interests, or Activities</div>
              <div className="text-sm">At least two of: stereotyped/repetitive movements or speech, insistence on sameness, highly restricted interests, or hyper/hypo-reactivity to sensory input</div>
            </div>
          </div>
        </div>
      </div>

      {/* Variation Across the Spectrum */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Variation Across the Spectrum</h2>
        
        <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mb-4">
          <h3 className="text-center text-[#0c264d] font-bold mb-4">Remember: No Two Autistic People Are Alike</h3>
          <div className="text-sm text-gray-700 space-y-2">
            <p>• Some autistic people are nonspeaking; others are highly verbal</p>
            <p>• Some have intellectual disabilities; others have average or above-average intelligence</p>
            <p>• Some require 24/7 support; others live independently</p>
            <p>• Some have obvious, visible characteristics; others appear "neurotypical"</p>
            <p>• Characteristics can change over time and vary by context</p>
            <p className="italic mt-4">"If you've met one person with autism, you've met one person with autism." — Dr. Stephen Shore</p>
          </div>
        </div>

        <p className="mb-4">
          The autism spectrum encompasses tremendous diversity. Characteristics vary in:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Presence:</strong> Not all autistic people have all characteristics</li>
          <li className="mb-2"><strong>Severity:</strong> Characteristics can be mild, moderate, or severe</li>
          <li className="mb-2"><strong>Context:</strong> Challenges may be more apparent in some situations than others</li>
          <li className="mb-2"><strong>Age:</strong> Presentation changes across development</li>
          <li className="mb-2"><strong>Support:</strong> Appropriate accommodations can dramatically reduce functional impact</li>
          <li className="mb-2"><strong>Masking:</strong> Some autistic people, especially women, mask or camouflage traits, which can hide difficulties</li>
        </ul>
      </div>
    </div>
  );
}
