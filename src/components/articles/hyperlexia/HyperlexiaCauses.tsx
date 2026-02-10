import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface HyperlexiaCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function HyperlexiaCauses({ setCurrentArticle }: HyperlexiaCausesProps) {
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
        Hyperlexia: Causes & Origins
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            The causes of hyperlexia are not fully understood, but research suggests neurobiological differences 
            affecting language processing and reading development.<sup>[1]</sup> Because hyperlexia is strongly 
            associated with autism, it may share some underlying mechanisms with autism spectrum disorder.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurological Basis</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG5ldXJvbG9neXxlbnwxfHx8fDE2NzQ1MzUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Brain neurology"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Brain Differences</h3>
          <p className="mb-4">
            Limited neuroimaging research suggests differences in brain processing:<sup>[3]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Reading pathways:</strong> Unusual activation of reading-related brain areas</li>
            <li className="mb-2"><strong>Visual processing:</strong> Enhanced visual processing abilities</li>
            <li className="mb-2"><strong>Language networks:</strong> Differences in language comprehension areas<sup>[4]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Hemispheric Differences</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Possible differences in left-right brain communication</li>
            <li className="mb-2">Enhanced left hemisphere visual-orthographic processing<sup>[5]</sup></li>
            <li className="mb-2">Right hemisphere language comprehension differences</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Cognitive Processing Differences</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Enhanced Visual Processing</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Visual strengths:</strong> Superior visual memory and processing<sup>[6]</sup></li>
            <li className="mb-2"><strong>Pattern recognition:</strong> Exceptional ability to recognize visual patterns</li>
            <li className="mb-2"><strong>Orthographic processing:</strong> Strong visual word form processing</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language Processing Atypicalities</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Discrepancy between decoding and comprehension pathways<sup>[7]</sup></li>
            <li className="mb-2">Difficulty integrating visual and semantic information</li>
            <li className="mb-2">Atypical semantic processing</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Auditory Processing</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">May have auditory processing difficulties<sup>[8]</sup></li>
            <li className="mb-2">Preference for visual over auditory modality</li>
            <li className="mb-2">Challenges with phonological processing of spoken language</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Relationship to Autism</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Shared Mechanisms with Autism</h3>
          <p className="mb-4">
            Since hyperlexia frequently co-occurs with autism, they may share causes:<sup>[9]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Genetic factors:</strong> May involve similar genetic vulnerabilities</li>
            <li className="mb-2"><strong>Brain development:</strong> Atypical neurodevelopmental pathways<sup>[10]</sup></li>
            <li className="mb-2"><strong>Processing style:</strong> Detail-focused, pattern-based processing</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Autism-Specific Features</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Reading as restricted/intense interest</li>
            <li className="mb-2">Repetitive behaviors around letters and reading<sup>[11]</sup></li>
            <li className="mb-2">Social communication challenges affecting comprehension</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetic Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Family Patterns</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Hyperlexia may run in families<sup>[12]</sup></li>
            <li className="mb-2">Family history of autism increases likelihood</li>
            <li className="mb-2">Limited genetic research specific to hyperlexia</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Genetic Research Needed</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">More research needed on genetic contributions</li>
            <li className="mb-2">Overlap with autism genetics likely<sup>[13]</sup></li>
            <li className="mb-2">Reading ability genes may be involved</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Developmental Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Brain Development</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Atypical brain development affecting language and reading<sup>[14]</sup></li>
            <li className="mb-2">Early overactivation of visual-orthographic pathways</li>
            <li className="mb-2">Underactivation of semantic comprehension pathways</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Critical Periods</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Atypical development during language-sensitive periods</li>
            <li className="mb-2">Early visual strengths may compensate for language weaknesses<sup>[15]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Theoretical Models</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxlYXJuaW5nfGVufDF8fHx8MTY3NDUzNTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Books learning"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Compensatory Mechanism Theory</h3>
          <p className="mb-4">
            One theory suggests hyperlexia is a compensation:<sup>[16]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Children with language difficulties turn to visual strengths</li>
            <li className="mb-2">Reading becomes a way to access language visually</li>
            <li className="mb-2">Visual route bypasses auditory language difficulties</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Savant Skill Theory</h3>
          <p className="mb-4">
            Another view sees hyperlexia as a savant-like ability:<sup>[17]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Exceptional ability in one domain (reading)</li>
            <li className="mb-2">Often occurs with autism or developmental differences</li>
            <li className="mb-2">Narrow, isolated skill development</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Modular Reading System</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Reading decoding system develops independently<sup>[18]</sup></li>
            <li className="mb-2">Not connected to comprehension systems</li>
            <li className="mb-2">Explains decoding-comprehension split</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Exposure</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Early exposure to print may interact with predisposition<sup>[19]</sup></li>
            <li className="mb-2">Not caused by environment alone</li>
            <li className="mb-2">Children self-select reading activities</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Not Caused By</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Too much reading instruction (self-taught)</li>
            <li className="mb-2">Pushing child to read early</li>
            <li className="mb-2">Environmental factors alone<sup>[20]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Current Research</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Limited Research Base</h3>
          <p className="mb-4">
            Research on hyperlexia is limited compared to other conditions:<sup>[21]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Small number of studies</li>
            <li className="mb-2">Often studied as part of autism research</li>
            <li className="mb-2">More research needed on causes</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Future Directions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Neuroimaging studies needed<sup>[22]</sup></li>
            <li className="mb-2">Genetic research</li>
            <li className="mb-2">Longitudinal studies tracking development</li>
            <li className="mb-2">Understanding different types and trajectories</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What Hyperlexia Is NOT Caused By</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Common Misconceptions:</h3>
            <p className="mb-4">
              Hyperlexia is NOT caused by:<sup>[23]</sup>
            </p>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li><strong>Teaching child to read early:</strong> Children are self-taught</li>
              <li><strong>Too many books:</strong> Environmental factors don't cause hyperlexia</li>
              <li><strong>Poor parenting:</strong> Not related to parenting practices</li>
              <li><strong>Vaccines:</strong> No connection to vaccines (like autism myths)</li>
              <li><strong>Screen time:</strong> Not caused by educational videos or apps<sup>[24]</sup></li>
              <li><strong>Being gifted alone:</strong> Different pattern from giftedness</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Nation, K. (1999). "Reading skills in hyperlexia: A developmental perspective." <em>Psychological Bulletin</em>, 125(3), 338-355.</p>
          <p>[2] Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). "Annotation: Hyperlexia: Disability or superability?" <em>Journal of Child Psychology and Psychiatry</em>, 44(8), 1079-1091.</p>
          <p>[3] Nation, K., Clarke, P., Wright, B., & Williams, C. (2006). "Patterns of reading ability in children with autism spectrum disorder." <em>Journal of Autism and Developmental Disorders</em>, 36(7), 911-919.</p>
          <p>[4] Treffert, D. A. (2011). "Hyperlexia III: Separating 'autistic-like' behaviors from autistic disorder." <em>Wisconsin Medical Society</em>.</p>
          <p>[5] Kupperman, P., Bligh, S., & Barouski, K. (2002). "Hyperlexia." In A. M. Wetherby & B. M. Prizant (Eds.), <em>Autism spectrum disorders</em> (pp. 357-376). Baltimore: Paul H. Brookes.</p>
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
