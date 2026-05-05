import React from 'react';

export function AssessmentsOrTests() {
  return (
    <div className="bg-[#f0f9ff] p-6 rounded-lg">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assessments, Tests & Screenings</h2>
      
      <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-8 shadow-sm">
        <p className="text-sm text-[#0c264d]">
          <strong>Important Distinction:</strong> There is no blood test, brain scan, or genetic test that can independently diagnose autism. Diagnosis relies on behavioral observation, clinical interviews, and standardized testing evaluated against established clinical frameworks.
        </p>
      </div>

      {/* --- FRAMEWORKS (DSM-5) --- */}
      <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Diagnostic Frameworks (The "Rulebooks")</h3>
        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          Before administering specific tests, clinicians use standardized diagnostic manuals to determine what constitutes autism. These are not "tests" you take, but rather the criteria that the test results are compared against.
        </p>
        
        <div className="space-y-4 mt-4">
          <div className="border-l-2 border-[#2abcd4] pl-4">
            <div className="font-bold text-[#0c264d] mb-1">DSM-5-TR</div>
            <p className="text-sm text-gray-700">
              The primary manual used in the United States. To meet criteria, an individual must show persistent deficits in <strong>social communication</strong> and exhibit <strong>restricted/repetitive behaviors</strong> that began in early development and cause clinically significant impairment<sup className="text-green-700 font-bold ml-0.5 cursor-help" title="American Psychiatric Association (2022)">[1]</sup>.
            </p>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-4">
            <div className="font-bold text-[#0c264d] mb-1">ICD-11</div>
            <p className="text-sm text-gray-700">
              The World Health Organization's manual, used globally. It closely aligns with the DSM-5 but places a slightly higher emphasis on the impact of co-occurring intellectual development disorders and language impairment.
            </p>
          </div>
        </div>
      </div>

      {/* --- GOLD STANDARDS --- */}
      <div className="bg-white p-6 rounded-md border-l-4 border-yellow-400 shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The "Gold Standard" Diagnostic Tools</h3>
        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          When people refer to the "gold standard" of autism assessment, they are usually talking about the combination of these two clinical tools used together to get a comprehensive picture of an individual's neurodevelopment.
        </p>
        
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded border border-slate-100">
            <div className="font-bold text-[#0c264d] mb-1">ADOS-2 (Autism Diagnostic Observation Schedule)</div>
            <p className="text-sm text-gray-700">
              A semi-structured, standardized assessment involving play, activities, or interviews (depending on age and language level). The clinician observes how the individual communicates, socially interacts, and uses imagination<sup className="text-green-700 font-bold ml-0.5 cursor-help" title="Lord et al. (2012)">[2]</sup>.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded border border-slate-100">
            <div className="font-bold text-[#0c264d] mb-1">ADI-R (Autism Diagnostic Interview-Revised)</div>
            <p className="text-sm text-gray-700">
              A comprehensive interview conducted with parents or primary caregivers. It focuses on the individual's full developmental history, capturing early childhood behaviors that may no longer be as visible<sup className="text-green-700 font-bold ml-0.5 cursor-help" title="Rutter et al. (2003)">[3]</sup>.
            </p>
          </div>
        </div>
      </div>

      {/* --- SCREENINGS & OTHER TOOLS --- */}
      <div className="bg-white p-6 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Screening Tools & Specialized Assessments</h3>
        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          Screening tools do not diagnose autism; they simply indicate whether a full evaluation is necessary. Other tools are used to cater to specific age groups or to build a neurodiversity-affirming profile.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-[#0c264d] text-sm mb-2 border-b pb-1">Childhood Screenings</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><strong>M-CHAT-R/F:</strong> A widely used parent questionnaire to screen toddlers between 16 and 30 months of age<sup className="text-green-700 font-bold ml-0.5 cursor-help" title="Robins et al. (2014)">[4]</sup>.</li>
              <li><strong>CARS-2:</strong> The Childhood Autism Rating Scale helps distinguish autism from other developmental delays based on observation.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[#0c264d] text-sm mb-2 border-b pb-1">Adult & Self-Report Tools</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><strong>MIGDAS-2:</strong> A newer, highly respected sensory-based interview that focuses on the individual's lived experience rather than deficits.</li>
              <li><strong>RAADS-R & AQ:</strong> Popular self-report questionnaires often used by adults to screen themselves before seeking formal assessment.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- REFERENCES SECTION --- */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-10" />

      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES OR STATISTICS: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Diagnostic Tools & Manuals
          </h4>
          <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
            <li>American Psychiatric Association. (2022). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed., text rev.). https://doi.org/10.1176/appi.books.9780890425787</li>
            <li>Lord, C., Rutter, M., DiLavore, P. C., Risi, S., Gotham, K., & Bishop, S. (2012). <i>Autism diagnostic observation schedule, second edition (ADOS-2) manual</i>. Western Psychological Services.</li>
            <li>Rutter, M., Le Couteur, A., & Lord, C. (2003). <i>Autism diagnostic interview-revised (ADI-R)</i>. Western Psychological Services.</li>
            <li>Robins, D. L., Casagrande, K., Barton, M., Chen, C. M., Dumont-Mathieu, T., & Fein, D. (2014). Validation of the modified checklist for autism in toddlers, revised with follow-up (M-CHAT-R/F). <i>Pediatrics</i>, 133(1), 37-45. https://doi.org/10.1542/peds.2013-1813</li>
          </ol>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed">
            <li>World Health Organization. (2019). <i>International statistical classification of diseases and related health problems</i> (11th ed.). https://icd.who.int/</li>
            <li>Monteiro, V. (2018). <i>MIGDAS-2: Monteiro interview guidelines for diagnosing the autism spectrum, second edition</i>. Western Psychological Services.</li>
            <li>Jones, R. M., & Lord, C. (2013). Diagnosing autism in neurobiological research studies. <i>Behavioural Brain Research</i>, 251, 113-124. https://doi.org/10.1016/j.bbr.2013.03.045</li>
          </ul>
        </div>
      </div>
    </div>
  );
}