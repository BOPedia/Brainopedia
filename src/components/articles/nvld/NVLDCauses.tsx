import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface NVLDCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function NVLDCauses({ setCurrentArticle }: NVLDCausesProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('nvld'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to NVLD
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        NVLD: Causes & Origins
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            The causes of Nonverbal Learning Disability are not fully understood, but research points to neurological 
            differences, particularly involving the right hemisphere of the brain and white matter pathways.<sup>[1]</sup> 
            Unlike some learning disabilities, NVLD appears to have strong neurobiological underpinnings.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurological Basis</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMHNjYW58ZW58MXx8fHwxNjc0NTM1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Brain scan"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Right Hemisphere Dysfunction</h3>
          <p className="mb-4">
            Rourke's model proposes that NVLD results from dysfunction in the right cerebral hemisphere:<sup>[3]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Right hemisphere functions:</strong> Visual-spatial processing, nonverbal perception, social cues</li>
            <li className="mb-2"><strong>Deficit pattern:</strong> Impairments align with right hemisphere specializations<sup>[4]</sup></li>
            <li className="mb-2"><strong>Preserved left hemisphere:</strong> Verbal abilities typically intact or advanced</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">White Matter Hypothesis</h3>
          <p className="mb-4">
            Rourke's white matter model suggests NVLD stems from dysfunction in cerebral white matter:<sup>[5]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>White matter:</strong> Neural pathways connecting different brain regions</li>
            <li className="mb-2"><strong>Right hemisphere white matter:</strong> Particularly vulnerable in NVLD</li>
            <li className="mb-2"><strong>Long connections:</strong> Longer white matter pathways more affected<sup>[6]</sup></li>
            <li className="mb-2"><strong>Integration problems:</strong> Difficulty integrating information across brain regions</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Brain Imaging Findings</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Neuroimaging studies show white matter abnormalities<sup>[7]</sup></li>
            <li className="mb-2">Reduced white matter volume in some studies</li>
            <li className="mb-2">Differences in corpus callosum (connects brain hemispheres)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetic Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Familial Patterns</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">NVLD appears to run in families<sup>[8]</sup></li>
            <li className="mb-2">Genetic research is limited compared to other conditions</li>
            <li className="mb-2">May share genetic factors with autism spectrum disorder</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Medical Conditions Associated with NVLD</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Congenital and Acquired Conditions</h3>
          <p className="mb-4">
            NVLD-like symptoms can result from various medical conditions:<sup>[9]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Hydrocephalus:</strong> Fluid accumulation affecting white matter</li>
            <li className="mb-2"><strong>Agenesis of corpus callosum:</strong> Absence of structure connecting hemispheres<sup>[10]</sup></li>
            <li className="mb-2"><strong>Traumatic brain injury:</strong> Particularly right hemisphere damage</li>
            <li className="mb-2"><strong>Brain tumors:</strong> Affecting right hemisphere or white matter</li>
            <li className="mb-2"><strong>Multiple sclerosis:</strong> White matter disease</li>
            <li className="mb-2"><strong>Congenital heart disease:</strong> Associated with white matter changes<sup>[11]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Developmental Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neurodevelopmental Origins</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">NVLD appears to be neurodevelopmental in origin<sup>[12]</sup></li>
            <li className="mb-2">Present from birth, though may not be apparent until later</li>
            <li className="mb-2">Symptoms become more evident as demands increase</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Developmental Trajectory</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Right hemisphere develops later than left hemisphere<sup>[13]</sup></li>
            <li className="mb-2">Early verbal strengths may mask other difficulties</li>
            <li className="mb-2">Academic and social demands reveal deficits over time</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Risk Factors</h2>
          
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Premature birth:</strong> Associated with white matter damage</li>
            <li className="mb-2"><strong>Low birth weight:</strong> Increased risk of neurodevelopmental differences</li>
            <li className="mb-2"><strong>Perinatal complications:</strong> Issues during pregnancy or birth<sup>[14]</sup></li>
            <li className="mb-2"><strong>Family history:</strong> Learning disabilities or related conditions in family</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Relationship to Other Conditions</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY29ubmVjdGlvbnN8ZW58MXx8fHwxNjc0NTM1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Network connections"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Autism Spectrum Disorder</h3>
          <p className="mb-4">
            Significant overlap exists between NVLD and ASD:<sup>[15]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Shared social and nonverbal communication difficulties</li>
            <li className="mb-2">May have common neurological underpinnings<sup>[16]</sup></li>
            <li className="mb-2">Some researchers view NVLD as related to autism spectrum</li>
            <li className="mb-2">Distinction based on restricted interests and repetitive behaviors</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Developmental Coordination Disorder</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Both involve motor coordination difficulties</li>
            <li className="mb-2">NVLD includes broader visual-spatial and social deficits<sup>[17]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What NVLD Is NOT Caused By</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <p className="mb-4">
              NVLD is a neurologically-based condition, NOT caused by:<sup>[18]</sup>
            </p>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li>Poor parenting or home environment</li>
              <li>Laziness or lack of effort</li>
              <li>Low intelligence (verbal abilities often advanced)</li>
              <li>Inadequate education or instruction</li>
              <li>Lack of motivation</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Current Research</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ongoing Studies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Neuroimaging research examining brain structure and function</li>
            <li className="mb-2">Genetic studies exploring hereditary factors<sup>[19]</sup></li>
            <li className="mb-2">Longitudinal studies tracking development over time</li>
            <li className="mb-2">Research on overlap with autism spectrum disorder</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Future Directions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Better understanding of neurobiological mechanisms<sup>[20]</sup></li>
            <li className="mb-2">Identifying biomarkers for early diagnosis</li>
            <li className="mb-2">Determining optimal classification and diagnostic criteria</li>
            <li className="mb-2">Developing targeted interventions based on underlying causes</li>
          </ul>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Rourke, B. P. (1989). <em>Nonverbal learning disabilities: The syndrome and the model</em>. New York: Guilford Press.</p>
          <p>[2] Rourke, B. P. (1995). "Syndrome of nonverbal learning disabilities: Neurodevelopmental manifestations." <em>Clinical Child and Family Psychology Review</em>, 1(4), 209-234.</p>
          <p>[3] Semrud-Clikeman, M., & Hynd, G. W. (1990). "Right hemispheric dysfunction in nonverbal learning disabilities: Social, academic, and adaptive functioning in adults and children." <em>Psychological Bulletin</em>, 107(2), 196-209.</p>
          <p>[4] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[5] Rourke, B. P. (1987). "Syndrome of nonverbal learning disabilities: The final common pathway of white-matter disease/dysfunction?" <em>The Clinical Neuropsychologist</em>, 1(3), 209-234.</p>
          <p>[6] Rourke, B. P. (1987). "Syndrome of nonverbal learning disabilities." <em>The Clinical Neuropsychologist</em>, 1(3), 209-234.</p>
          <p>[7] Fine, J. G., Semrud-Clikeman, M., Bledsoe, J. C., & Musielak, K. A. (2013). "A critical review of the literature on NLD as a developmental disorder." <em>Child Neuropsychology</em>, 19(2), 190-223.</p>
          <p>[8] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[9] Rourke, B. P. (1995). "Syndrome of nonverbal learning disabilities." <em>Clinical Child and Family Psychology Review</em>, 1(4), 209-234.</p>
          <p>[10] Drummond, C. R., Ahmad, S. A., & Rourke, B. P. (2005). "Rules for the classification of younger children with nonverbal learning disabilities." <em>Archives of Clinical Neuropsychology</em>, 20(2), 171-182.</p>
          <p>[11] Bellinger, D. C., Wypij, D., duPlessis, A. J., Rappaport, L. A., Jonas, R. A., Wernovsky, G., & Newburger, J. W. (2003). "Neurodevelopmental status at eight years in children with dextro-transposition of the great arteries." <em>The Journal of Thoracic and Cardiovascular Surgery</em>, 126(5), 1385-1396.</p>
          <p>[12] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[13] Semrud-Clikeman, M., & Hynd, G. W. (1990). "Right hemispheric dysfunction in nonverbal learning disabilities." <em>Psychological Bulletin</em>, 107(2), 196-209.</p>
          <p>[14] Rourke, B. P. (2000). "Neuropsychological and psychosocial subtyping: A review of investigations within the University of Windsor laboratory." <em>Canadian Psychology</em>, 41(1), 34-51.</p>
          <p>[15] Klin, A., Volkmar, F. R., Sparrow, S. S., Cicchetti, D. V., & Rourke, B. P. (1995). "Validity and neuropsychological characterization of Asperger syndrome: Convergence with nonverbal learning disabilities syndrome." <em>Journal of Child Psychology and Psychiatry</em>, 36(7), 1127-1140.</p>
          <p>[16] Rourke, B. P., & Tsatsanis, K. D. (2000). "Nonverbal learning disabilities and Asperger syndrome." In A. Klin, F. R. Volkmar, & S. S. Sparrow (Eds.), <em>Asperger syndrome</em> (pp. 231-253). New York: Guilford Press.</p>
          <p>[17] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[18] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[19] Fine, J. G., Semrud-Clikeman, M., Bledsoe, J. C., & Musielak, K. A. (2013). "A critical review of the literature on NLD as a developmental disorder." <em>Child Neuropsychology</em>, 19(2), 190-223.</p>
          <p>[20] Mammarella, I. C., & Cornoldi, C. (2014). "An analysis of the criteria used to diagnose children with nonverbal learning disability (NLD)." <em>Child Neuropsychology</em>, 20(3), 255-280.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('nvld'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to NVLD
        </a>
      </div>
    </article>
  );
}
