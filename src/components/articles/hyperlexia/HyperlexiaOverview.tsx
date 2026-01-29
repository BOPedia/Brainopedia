import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface HyperlexiaOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function HyperlexiaOverview({ setCurrentArticle }: HyperlexiaOverviewProps) {
  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>
      <div className="mb-6">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('hyperlexia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Hyperlexia
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Hyperlexia: Overview
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Hyperlexia is characterized by an advanced ability to read at an early age, well beyond what would be 
            expected based on the child's age, accompanied by significant difficulties with spoken language comprehension 
            and social communication.<sup>[1]</sup> The term was first coined in 1967 to describe children who could 
            read exceptionally well but struggled to understand what they read.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What is Hyperlexia?</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHJlYWRpbmd8ZW58MXx8fHwxNjc0NTM1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child reading"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Core Characteristics</h3>
          <p className="mb-4">
            Hyperlexia involves a unique pattern of abilities and difficulties:<sup>[3]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Precocious reading:</strong> Self-taught reading often before age 5</li>
            <li className="mb-2"><strong>Word recognition:</strong> Exceptional ability to decode written words<sup>[4]</sup></li>
            <li className="mb-2"><strong>Comprehension difficulties:</strong> Trouble understanding spoken and written language</li>
            <li className="mb-2"><strong>Language challenges:</strong> Delayed or disordered language development</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Reading-Comprehension Split</h3>
          <p className="mb-4">
            The hallmark of hyperlexia is the significant gap between decoding and comprehension:<sup>[5]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Can read words far beyond age level</li>
            <li className="mb-2">May not understand what they've read</li>
            <li className="mb-2">Reading is often mechanical or rote</li>
            <li className="mb-2">Fascination with letters, numbers, and symbols<sup>[6]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Types of Hyperlexia</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Three Types Framework</h3>
          <p className="mb-4">
            Dr. Darold Treffert and colleagues proposed three types of hyperlexia:<sup>[7]</sup>
          </p>

          <h4 className="font-bold mb-2">Type 1: Neurotypical Hyperlexia</h4>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Early precocious readers who are otherwise typically developing</li>
            <li className="mb-2">No underlying developmental concerns<sup>[8]</sup></li>
            <li className="mb-2">Reading comprehension catches up to decoding over time</li>
            <li className="mb-2">May be gifted or have high intellectual ability</li>
          </ul>

          <h4 className="font-bold mb-2">Type 2: Hyperlexia with Autism</h4>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Hyperlexic reading combined with autism spectrum disorder<sup>[9]</sup></li>
            <li className="mb-2">Most common type seen clinically</li>
            <li className="mb-2">Social communication difficulties persist</li>
            <li className="mb-2">Meets full criteria for autism diagnosis</li>
          </ul>

          <h4 className="font-bold mb-2">Type 3: Hyperlexia as Transient Phenomenon</h4>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Early autism-like symptoms that diminish over time<sup>[10]</sup></li>
            <li className="mb-2">Initially appear autistic but don't meet full autism criteria later</li>
            <li className="mb-2">Most controversial category</li>
            <li className="mb-2">Language and social skills improve significantly</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prevalence</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Common is Hyperlexia?</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Rare condition:</strong> Exact prevalence unknown<sup>[11]</sup></li>
            <li className="mb-2"><strong>Autism connection:</strong> 6-14% of autistic children show hyperlexia</li>
            <li className="mb-2"><strong>Underdiagnosed:</strong> May be overlooked due to reading ability<sup>[12]</sup></li>
            <li className="mb-2"><strong>Gender:</strong> More common in boys, similar to autism</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Relationship to Autism</h2>
          
          <ImageWithFallback 
            src={autismHyperlexiaConnectionImage} 
            alt="Books letters"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Strong Association</h3>
          <p className="mb-4">
            Hyperlexia is strongly associated with autism spectrum disorder:<sup>[13]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Many children with hyperlexia also have autism</li>
            <li className="mb-2">Shared features: restricted interests, language difficulties, social challenges<sup>[14]</sup></li>
            <li className="mb-2">Reading may serve as a special interest or perseveration</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Not All Hyperlexic Children Have Autism</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Hyperlexia can occur without autism (Type 1)<sup>[15]</sup></li>
            <li className="mb-2">Different trajectory and outcomes</li>
            <li className="mb-2">Comprehensive assessment needed to differentiate</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Early Signs of Hyperlexia</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading-Related Signs</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Fascination with letters/numbers:</strong> Intense interest before age 2<sup>[16]</sup></li>
            <li className="mb-2"><strong>Self-taught reading:</strong> Learning without formal instruction</li>
            <li className="mb-2"><strong>Letter recognition:</strong> Identifying letters very early</li>
            <li className="mb-2"><strong>Word memorization:</strong> Memorizing written words<sup>[17]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language and Communication Signs</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Delayed speech development</li>
            <li className="mb-2">Difficulty understanding spoken language<sup>[18]</sup></li>
            <li className="mb-2">Echolalia (repeating words or phrases)</li>
            <li className="mb-2">Difficulty with conversation</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Strengths in Hyperlexia</h2>
          
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Exceptional decoding:</strong> Reading accuracy far beyond age level<sup>[19]</sup></li>
            <li className="mb-2"><strong>Visual memory:</strong> Strong visual learning and memory</li>
            <li className="mb-2"><strong>Pattern recognition:</strong> Ability to recognize patterns and sequences</li>
            <li className="mb-2"><strong>Attention to detail:</strong> Noticing details in text<sup>[20]</sup></li>
            <li className="mb-2"><strong>Reading as comfort:</strong> Books and reading as calming activity</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Challenges Beyond Reading</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language Comprehension</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty understanding what they read<sup>[21]</sup></li>
            <li className="mb-2">Problems with spoken language comprehension</li>
            <li className="mb-2">Literal interpretation of language</li>
            <li className="mb-2">Trouble with abstract concepts</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Communication</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty with social interactions<sup>[22]</sup></li>
            <li className="mb-2">Challenges with pragmatic language</li>
            <li className="mb-2">May prefer books to people</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prognosis</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Variable Outcomes</h3>
          <p className="mb-4">
            Outcomes depend heavily on the type and associated conditions:<sup>[23]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Type 1:</strong> Excellent prognosis, comprehension catches up</li>
            <li className="mb-2"><strong>Type 2 (with autism):</strong> Outcomes similar to autism, varies widely</li>
            <li className="mb-2"><strong>Type 3:</strong> Significant improvement possible<sup>[24]</sup></li>
            <li className="mb-2"><strong>Reading advantage:</strong> Can be leveraged for learning</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Historical Context</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Recognition and Evolution</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>1967:</strong> Term "hyperlexia" first used by Silberberg and Silberberg<sup>[25]</sup></li>
            <li className="mb-2"><strong>Research growth:</strong> Increasing understanding of relationship to autism</li>
            <li className="mb-2"><strong>Not an official diagnosis:</strong> No DSM-5 or ICD-11 classification</li>
            <li className="mb-2"><strong>Clinical recognition:</strong> Widely recognized by clinicians<sup>[26]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Important Points</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Key Takeaways:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li><strong>Not just advanced reading:</strong> Pattern includes language/comprehension difficulties</li>
              <li><strong>Different from giftedness:</strong> Gifted readers typically have strong comprehension<sup>[27]</sup></li>
              <li><strong>Comprehensive evaluation needed:</strong> To understand full profile</li>
              <li><strong>Reading is a strength:</strong> Can be leveraged for intervention and learning</li>
              <li><strong>Early intervention important:</strong> Addressing language and social difficulties<sup>[28]</sup></li>
              <li><strong>Individualized approach:</strong> Needs vary based on type and co-occurring conditions</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Silberberg, N. E., & Silberberg, M. C. (1967). "Hyperlexia: Specific word recognition skills in young children." <em>Exceptional Children</em>, 34(1), 41-42.</p>
          <p>[2] Nation, K. (1999). "Reading skills in hyperlexia: A developmental perspective." <em>Psychological Bulletin</em>, 125(3), 338-355.</p>
          <p>[3] Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). "Annotation: Hyperlexia: Disability or superability?" <em>Journal of Child Psychology and Psychiatry</em>, 44(8), 1079-1091.</p>
          <p>[4] Treffert, D. A. (2011). "Hyperlexia III: Separating 'autistic-like' behaviors from autistic disorder; Assessing children who read early or speak late." <em>Wisconsin Medical Society</em>. Retrieved from www.wisconsinmedicalsociety.org</p>
          <p>[5] Nation, K., Clarke, P., Wright, B., & Williams, C. (2006). "Patterns of reading ability in children with autism spectrum disorder." <em>Journal of Autism and Developmental Disorders</em>, 36(7), 911-919.</p>
          <p>[6] Kupperman, P., Bligh, S., & Barouski, K. (2002). "Hyperlexia." In A. M. Wetherby & B. M. Prizant (Eds.), <em>Autism spectrum disorders: A developmental transactional perspective</em> (pp. 357-376). Baltimore: Paul H. Brookes.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('hyperlexia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Hyperlexia
        </a>
      </div>
    </article>
  );
}