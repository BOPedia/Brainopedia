import React from 'react';

export function LifespanContent() {
  return (
    <div className="animate-fadeIn">
      <section>
        <p className="mb-4 text-gray-800 leading-relaxed">
          Living with autism means experiencing the world differently—processing information, communicating, and 
          interacting in ways that diverge from neurotypical patterns. <strong>The autistic experience varies tremendously:</strong> some individuals develop effective coping strategies or master the art of masking, allowing them to perform 
          at their highest capacity while still facing internal struggles, while others with the highest support needs 
          require comprehensive assistance across their entire lifespan in areas such as communication, daily living, 
          and safety.
        </p>
        <p className="mb-8 text-gray-800 leading-relaxed">
          While autism presents challenges, many autistic individuals lead fulfilling, meaningful lives 
          and contribute uniquely to their communities. Quality of life for autistic people depends not just on the 
          characteristics of autism itself, but on access to support, acceptance, and accommodation.
        </p>
      </section>

      <section className="space-y-8">
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">
            Autism Across the Lifespan
          </h2>

          <div className="mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Childhood</h3>
            <p className="mb-4 text-gray-700">
              The early years focus on development, learning, and accessing early intervention:
            </p>
            <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Communication development:</strong> Whether through speech, AAC, or other methods</li>
              <li><strong>Play and social interaction:</strong> Learning to engage with others and the environment</li>
              <li><strong>Daily living skills:</strong> Self-care, toileting, eating</li>
              <li><strong>Sensory regulation:</strong> Understanding and managing sensory experiences</li>
              <li><strong>Family adjustment:</strong> Families learning about autism and building support networks</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School Years</h3>
            <p className="mb-4 text-gray-700">
              School presents both opportunities and challenges:
            </p>
            <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Academic learning:</strong> Autistic students may excel in areas of interest while struggling in others</li>
              <li><strong>Social navigation:</strong> Making friends, understanding social hierarchies, dealing with bullying</li>
              <li><strong>Sensory environments:</strong> Managing overwhelming school settings</li>
              <li><strong>Executive function demands:</strong> Organizing materials, managing time, juggling multiple subjects</li>
              <li><strong>Identity development:</strong> Understanding oneself as autistic, developing self-advocacy skills</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adolescence</h3>
            <p className="mb-4 text-gray-700">
              Teenage years bring additional complexity:
            </p>
            <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Identity formation:</strong> Figuring out who you are, including your autistic identity</li>
              <li><strong>Increased social complexity:</strong> Navigating teenage social dynamics, dating, peer pressure</li>
              <li><strong>Mental health:</strong> High rates of anxiety and depression often emerge here</li>
              <li><strong>Masking and camouflaging:</strong> Many teens mask autistic traits, which can be exhausting</li>
              <li><strong>Transition planning:</strong> Preparing for life after high school</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adulthood</h3>
            <p className="mb-4 text-gray-700">
              Autistic adults face unique challenges and opportunities:
            </p>
            <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Education & Employment:</strong> Pursuing higher ed or work that matches strengths</li>
              <li><strong>Independent living:</strong> Managing household and finances independently or with support</li>
              <li><strong>Relationships:</strong> Friendships, romantic partnerships, and family dynamics</li>
              <li><strong>Self-understanding:</strong> Late diagnosis often leads to profound self-discovery</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Aging</h3>
            <p className="mb-4 text-gray-700">
              Research on aging autistic adults is limited but growing:
            </p>
            <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-700">
              <li>Autism doesn't disappear; core characteristics persist throughout life</li>
              <li>Acceptance and reduced pressure to conform often come with age</li>
              <li>Need for autism-informed elder care and support systems</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- TAB-SPECIFIC REFERENCES --- */}
      <section className="mt-12 pt-6 border-t-2 border-gray-200">
        <h3 className="text-[#0c264d] font-bold mb-4 text-xl">References</h3>
        <ol className="list-decimal ml-5 space-y-3 text-sm text-gray-600">
          {/* Future brain: Paste your Lifespan-specific citations here! */}
          <li>Howlin, P. (2021). Outcomes in Adult Life for Autistic People.</li>
          <li>National Institute of Mental Health. (2023). Autism Spectrum Disorder Throughout the Life Course.</li>
        </ol>
      </section>
    </div>
  );
}