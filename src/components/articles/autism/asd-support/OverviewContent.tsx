export function OverviewContent() {
  return (
    <>
      {/* Introduction */}
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support Philosophy & Approach</h2>
        
        <p className="mb-4">
          Support for autistic individuals should be individualized, strengths-based, and centered on improving 
          quality of life rather than simply reducing autistic traits.<sup className="text-[#10b981]">[1]</sup> The goal is to help autistic 
          people thrive as themselves, not to make them "indistinguishable from their peers."<sup className="text-[#10b981]">[2]</sup> Effective 
          support respects neurodiversity while providing accommodations and skills to navigate a neurotypical world.
        </p>

        <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mb-4">
          <h3 className="text-[#0c264d] font-bold mb-3">Core Support Principles:</h3>
          <ul className="text-sm space-y-2">
            <li>✓ <strong>Presume competence:</strong> Assume understanding and potential even when not obvious<sup className="text-[#10b981]">[56]</sup></li>
            <li>✓ <strong>Respect autonomy:</strong> Support choice-making and self-determination<sup className="text-[#10b981]">[57]</sup></li>
            <li>✓ <strong>Focus on quality of life:</strong> Not just skill acquisition or behavior reduction</li>
            <li>✓ <strong>Build on strengths and interests:</strong> Leverage special interests for learning and engagement</li>
            <li>✓ <strong>Accept autistic ways of being:</strong> Don't target harmless behaviors like stimming</li>
            <li>✓ <strong>Listen to autistic voices:</strong> Center autistic perspectives in decisions<sup className="text-[#10b981]">[58]</sup></li>
            <li>✓ <strong>Teach to the individual:</strong> One size does not fit all</li>
            <li>✓ <strong>Support communication:</strong> Provide access to communication methods that work</li>
            <li>✓ <strong>Create sensory-friendly environments:</strong> Reduce barriers rather than expecting constant adaptation</li>
            <li>✓ <strong>Promote inclusion:</strong> Support participation in community life<sup className="text-[#10b981]">[59]</sup></li>
          </ul>
        </div>
      </div>

      {/* Unsupported Treatments */}
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Unsupported and Harmful "Treatments" to Avoid</h2>
        
        <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-4">
          <h3 className="text-center text-[#0c264d] font-bold mb-4">Treatments Lacking Evidence or Potentially Harmful</h3>
          <div className="text-sm space-y-3">
            <p><strong>Bleach/"MMS" protocols:</strong> Extremely dangerous; can cause serious harm or death<sup>[49]</sup></p>
            <p><strong>Chelation therapy:</strong> Not supported by evidence; has caused deaths<sup>[50]</sup></p>
            <p><strong>Hyperbaric oxygen chambers:</strong> Little evidence to prove effectiveness<sup>[51]</sup></p>
            <p><strong>Secretin:</strong> Thoroughly debunked<sup>[52]</sup></p>
            <p><strong>Facilitated communication/RPM:</strong> Discredited; shown to reflect facilitator's thoughts, not autistic person's<sup>[53]</sup></p>
            <p><strong>Conversion/compliance-focused interventions:</strong> Harmful to mental health and self-esteem<sup>[54]</sup></p>
            <p><strong>Restrictive diets without medical indication:</strong> Limited evidence; may cause nutritional deficiencies<sup>[55]</sup></p>
          </div>
        </div>

        <p className="mb-4">
          Always consult with qualified medical professionals and be skeptical of "miracle cures" or treatments 
          promising to eliminate autism.<sup>[56]</sup>
        </p>
      </div>
    </>
  );
}
