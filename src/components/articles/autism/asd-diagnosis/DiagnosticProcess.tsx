export function DiagnosticProcess() {
  return (
    <div className="bg-[#f0f9ff] p-6 rounded-lg">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Process & Tools</h2>
      
      <p className="mb-6">
        Diagnosing autism involves comprehensive evaluation of developmental history, behavior patterns, and 
        current functioning.<sup>[1]</sup> Early diagnosis enables earlier access to support and services, which 
        can significantly impact outcomes.
      </p>

      {/* The Diagnostic Process */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">The Three-Stage Diagnostic Process</h3>
        
        <div className="space-y-4">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Stage 1: Initial Screening</div>
            <div className="text-sm mb-2">
              Developmental screening is recommended for all children:<sup>[5][6]</sup>
            </div>
            <ul className="text-sm ml-4 space-y-1">
              <li>• <strong>General developmental screening:</strong> At 9, 18, and 24 or 30 months</li>
              <li>• <strong>Autism-specific screening:</strong> At 18 and 24 months, or whenever concerns arise</li>
              <li>• <strong>Common screening tools:</strong> M-CHAT-R/F (Modified Checklist for Autism in Toddlers), 
              parental concerns questionnaires<sup>[7]</sup></li>
            </ul>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Stage 2: Developmental-Behavioral Evaluation</div>
            <div className="text-sm mb-2">
              If screening suggests concern, comprehensive evaluation follows:<sup>[8]</sup>
            </div>
            <ul className="text-sm ml-4 space-y-1">
              <li>• <strong>Developmental history:</strong> Detailed parent interview about milestones, behaviors, 
              and concerns<sup>[9]</sup></li>
              <li>• <strong>Observation:</strong> Direct observation of the child in various settings</li>
              <li>• <strong>Standardized assessments:</strong> Structured tools to evaluate autism-specific behaviors</li>
              <li>• <strong>Medical evaluation:</strong> Rule out other conditions, assess for co-occurring conditions<sup>[10]</sup></li>
            </ul>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Stage 3: Comprehensive Diagnostic Evaluation</div>
            <div className="text-sm mb-2">
              Full diagnostic assessment may include:<sup>[11]</sup>
            </div>
            <ul className="text-sm ml-4 space-y-1">
              <li>• <strong>Team approach:</strong> Developmental pediatrician, child psychologist, speech-language 
              pathologist, occupational therapist</li>
              <li>• <strong>Multiple settings:</strong> Observation in clinic, school, and home if possible</li>
              <li>• <strong>Collateral information:</strong> Input from parents, teachers, therapists</li>
              <li>• <strong>Longitudinal data:</strong> Patterns over time, not just single snapshot<sup>[12]</sup></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gold Standard Tools */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Gold Standard Diagnostic Instruments</h3>
        <p className="text-sm mb-4">
          These tools are considered the "gold standard" for autism diagnosis:<sup>[13]</sup>
        </p>
        
        <div className="space-y-3">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">ADOS-2 (Autism Diagnostic Observation Schedule)</div>
            <div className="text-sm">
              Structured observation and activities to elicit autism-related behaviors. Semi-structured play and 
              interaction tasks. Takes 40-60 minutes. Most widely used observational assessment.<sup>[14]</sup>
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">ADI-R (Autism Diagnostic Interview-Revised)</div>
            <div className="text-sm">
              Comprehensive parent interview covering developmental history and current behaviors. In-depth questions 
              about social development, communication, and repetitive behaviors. Takes 1.5-3 hours.<sup>[15]</sup>
            </div>
          </div>
        </div>
      </div>

      {/* Other Diagnostic Tools */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Other Diagnostic & Screening Tools</h3>
        
        <div className="space-y-3">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">CARS-2 (Childhood Autism Rating Scale)</div>
            <div className="text-sm">
              Brief rating scale based on observation. Rates 15 areas including relating to people, imitation, 
              emotional response, body/object use, and more.<sup>[16]</sup>
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">SCQ (Social Communication Questionnaire)</div>
            <div className="text-sm">
              Parent questionnaire screening tool. 40 yes/no questions covering social interaction, communication, 
              and repetitive behaviors.<sup>[17]</sup>
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">M-CHAT-R/F (Modified Checklist for Autism in Toddlers)</div>
            <div className="text-sm">
              Free screening tool for toddlers (16-30 months). Parent questionnaire with follow-up interview. 
              Widely used in pediatric practices.<sup>[7]</sup>
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Developmental Assessments</div>
            <div className="text-sm">
              Measure cognitive abilities, adaptive functioning, language skills. Examples: Bayley Scales, 
              Mullen Scales, Vineland Adaptive Behavior Scales.
            </div>
          </div>
        </div>
      </div>

      {/* Medical Testing */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Medical and Genetic Testing</h3>
        <p className="text-sm mb-4">
          While not required for diagnosis, testing may be recommended:<sup>[18]</sup>
        </p>
        
        <div className="space-y-3">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Genetic Testing</div>
            <div className="text-sm">
              Chromosomal microarray to identify genetic causes. Recommended for all with ASD diagnosis. Can identify 
              genetic variants in ~10-20% of cases.<sup>[19][20]</sup>
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Metabolic Screening</div>
            <div className="text-sm">
              If specific clinical features suggest metabolic disorder (regression, seizures, dysmorphic features).
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">EEG (Electroencephalogram)</div>
            <div className="text-sm">
              If seizures suspected or developmental regression occurred.<sup>[21]</sup>
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Hearing Test</div>
            <div className="text-sm">
              Essential to rule out hearing loss as cause of language delay or reduced response to name.
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Lead Screening</div>
            <div className="text-sm">
              If pica (eating non-food items) or environmental lead exposure is present.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
        <p className="text-sm">
          <strong>Bottom Line:</strong> Autism diagnosis is based on behavioral observation and developmental 
          history, not blood tests or brain scans. The gold standard is ADOS-2 + ADI-R + clinical judgment by 
          experienced professionals. Medical testing helps rule out other conditions and identify co-occurring issues.
        </p>
      </div>
    </div>
  );
}
