import React from 'react';

interface DiagnosisEvaluationProps {
  setCurrentArticle?: (article: string) => void;
}

export function DiagnosisEvaluation({ setCurrentArticle }: DiagnosisEvaluationProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-6 mb-6">
      
      {/* Header and Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#0c264d] pb-4 mb-6 gap-4">
        <h2 className="text-3xl font-spartan text-[#0c264d]">Dyslexia: Diagnosis</h2>
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-2 px-6 rounded-lg font-bold transition-colors duration-200 flex items-center gap-2"
        >
          <span>←</span> All About Dyslexia
        </button>
      </div>
      
      <div className="prose max-w-none animate-fadeIn">
        {/* Intro Paragraph */}
        <p className="mb-6 text-slate-700 leading-relaxed">
          A comprehensive evaluation is essential to identify the underlying cognitive and academic profile characteristic of dyslexia. This process involves multiple domains of assessment to ensure an accurate diagnosis and targeted recommendations.<sup className="text-green-600 font-bold ml-0.5">1</sup>
        </p>

        {/* INTERACTIVE TABS */}
        <div className="flex flex-col md:flex-row gap-3 mb-8">
          <button 
            onClick={() => setCurrentArticle?.('dyslexia-diagnosis-overview')}
            className="py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80 shadow-sm"
          >
            Process & Criteria
          </button>
          
          <button 
            onClick={() => setCurrentArticle?.('dyslexia-diagnosis-evaluation')}
            className="py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto bg-[#0A9DC4] text-white shadow-md"
          >
            Comprehensive Evaluation
          </button>
          
          <button 
            onClick={() => setCurrentArticle?.('dyslexia-diagnosis-ages')}
            className="py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80 shadow-sm"
          >
            Ages & Next Steps
          </button>
        </div>

        {/* PAGE CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-4">
          <div>
            <h3 className="text-xl font-bold mb-3 text-[#0A9DC4] border-b border-gray-100 pb-2">Developmental & Educational History</h3>
            <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
              <li>Early language development milestones.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
              <li>Family history of reading or learning difficulties.</li>
              <li>Previous educational experiences and interventions.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
              <li>Current reading challenges and their impact.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-[#0A9DC4] border-b border-gray-100 pb-2">Cognitive Assessment</h3>
            <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
              <li><strong>Intelligence testing:</strong> WISC-V, WAIS-IV, or Stanford-Binet to assess overall cognitive ability.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
              <li><strong>Reasoning abilities:</strong> Verbal and nonverbal reasoning.</li>
              <li><strong>Memory assessment:</strong> Working memory and long-term memory.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
              <li><strong>Processing speed:</strong> Rate of cognitive processing.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-[#0A9DC4] border-b border-gray-100 pb-2">Reading & Academic Achievement</h3>
            <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
              <li><strong>Word reading:</strong> Real word reading accuracy (WIAT-III, KTEA-3).<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
              <li><strong>Pseudoword decoding:</strong> Nonsense word reading to assess phonetic decoding.<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
              <li><strong>Reading fluency:</strong> Speed and accuracy of reading connected text.<sup className="text-green-600 font-bold ml-0.5">8</sup></li>
              <li><strong>Reading comprehension:</strong> Understanding written passages.</li>
              <li><strong>Spelling:</strong> Written spelling of words.<sup className="text-green-600 font-bold ml-0.5">9</sup></li>
              <li><strong>Written expression:</strong> Quality and fluency of writing.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-[#0A9DC4] border-b border-gray-100 pb-2">Phonological Processing</h3>
            <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
              <li><strong>Phonological awareness:</strong> CTOPP-2, PAT-2 to assess sound manipulation skills.<sup className="text-green-600 font-bold ml-0.5">10</sup></li>
              <li><strong>Phonological memory:</strong> Ability to hold sound information in memory.</li>
              <li><strong>Rapid automatized naming (RAN):</strong> Speed of retrieving familiar verbal information.<sup className="text-green-600 font-bold ml-0.5">11</sup></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-3 text-[#0A9DC4] border-b border-gray-100 pb-2">Oral Language</h3>
            <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
              <li><strong>Vocabulary:</strong> Receptive and expressive vocabulary.<sup className="text-green-600 font-bold ml-0.5">12</sup></li>
              <li><strong>Listening comprehension:</strong> Understanding spoken language.</li>
              <li><strong>Morphological awareness:</strong> Understanding word structure.</li>
            </ul>
          </div>
        </div>

        {/* REFERENCES SECTION */}
        <div className="mt-12 pt-6 border-t-2 border-gray-100">
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-3 border-b border-green-700 border-opacity-10 pb-1">
                Cited Studies & Statistics
              </h4>
              <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
                <li>Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <em>Learning disabilities: From identification to intervention</em> (2nd ed.). Guilford Publications.</li>
                <li>Scarborough, H. S. (1998). "Early identification of children at risk for reading disabilities." In B. K. Shapiro, P. J. Accardo, & A. J. Capute (Eds.), <em>Specific reading disability: A view of the spectrum</em> (pp. 75-119). York Press.</li>
                <li>Shaywitz, S. E., Morris, R., & Shaywitz, B. A. (2008). "The education of dyslexic children from childhood to young adulthood." <em>Annual Review of Psychology</em>, 59, 451-475.</li>
                <li>Wechsler, D. (2014). <em>Wechsler Intelligence Scale for Children–Fifth Edition</em>. Pearson.</li>
                <li>Swanson, H. L., & Berninger, V. (1995). "The role of working memory in skilled and less skilled readers' comprehension." <em>Intelligence</em>, 21(1), 83-108.</li>
                <li>Pearson Education. (2020). <em>Wechsler Individual Achievement Test–Fourth Edition</em>. Author.</li>
                <li>Rack, J. P., Snowling, M. J., & Olson, R. K. (1992). "The nonword reading deficit in developmental dyslexia: A review." <em>Reading Research Quarterly</em>, 27(1), 29-53.</li>
                <li>Fuchs, L. S., Fuchs, D., Hosp, M. K., & Jenkins, J. R. (2001). "Oral reading fluency as an indicator of reading competence: A theoretical, empirical, and historical analysis." <em>Scientific Studies of Reading</em>, 5(3), 239-256.</li>
                <li>Ehri, L. C. (2000). "Learning to read and learning to spell: Two sides of a coin." <em>Topics in Language Disorders</em>, 20(3), 19-36.</li>
                <li>Wagner, R. K., Torgesen, J. K., Rashotte, C. A., & Pearson, N. A. (2013). <em>Comprehensive Test of Phonological Processing–Second Edition</em>. Pro-Ed.</li>
                <li>Norton, E. S., & Wolf, M. (2012). "Rapid automatized naming (RAN) and reading fluency: Implications for understanding and treatment of reading disabilities." <em>Annual Review of Psychology</em>, 63, 427-452.</li>
                <li>Perfetti, C. (2007). "Reading ability: Lexical quality to comprehension." <em>Scientific Studies of Reading</em>, 11(4), 357-383.</li>
              </ol>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-500 mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
                <li>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>.</li>
                <li>American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}