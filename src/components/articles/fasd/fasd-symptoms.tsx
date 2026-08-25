import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface FASDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function FASDSymptoms({ setCurrentArticle }: FASDSymptomsProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('fasd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to FASD</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">FASD: Symptoms &amp; Characteristics</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">FASD presents with a wide range of physical, cognitive, and behavioral characteristics. The "invisible disability" nature of FASD — most affected individuals look typical — contributes to misunderstanding, underdiagnosis, and unmet needs.<sup>[1]</sup> Understanding the full picture of FASD helps caregivers, educators, and clinicians provide appropriate support.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Facial Features (FAS)</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1080&q=80" alt="Child development and health assessment" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">The three characteristic facial features of Fetal Alcohol Syndrome are present only when alcohol exposure occurs during weeks 6–10 of pregnancy:<sup>[2]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Smooth philtrum:</strong> The ridged area between the nose and upper lip is flattened or absent (ranked on a 5-point Lip-Philtrum Guide)</li>
            <li className="mb-2"><strong>Thin vermilion border:</strong> The upper lip is thin</li>
            <li className="mb-2"><strong>Small palpebral fissures:</strong> The horizontal width of the eye opening is small</li>
          </ul>
          <p className="mb-4">These features may become less prominent with age and are absent in pFAS, ARND, and most FASD cases. The absence of facial features does not mean absence of brain effects.<sup>[3]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Growth Deficits</h2>
          <p className="mb-4">Growth deficiency — below the 10th percentile for height and/or weight — is a component of FAS diagnosis.<sup>[4]</sup> Prenatal growth restriction may be followed by failure to "catch up" postnatally. Microcephaly (small head circumference) may also be present, reflecting reduced brain growth.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Cognitive and Learning Profile</h2>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Intellectual Functioning</h3>
          <p className="mb-4">IQ in FASD ranges broadly — from intellectual disability to average and above-average intelligence.<sup>[5]</sup> The mean IQ in FAS is approximately 70, but many individuals with ARND have average IQ scores. IQ scores often overestimate functional ability because they do not capture the adaptive skill deficits that are central to FASD.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Memory</h3>
          <p className="mb-4">A hallmark of FASD is impaired working memory and encoding of new information.<sup>[6]</sup> Individuals may remember something one day but not the next — sometimes called "swiss cheese memory." Rote memory (memorizing lists) may be relatively preserved, while applied, contextual use of that information is impaired.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Executive Function</h3>
          <p className="mb-4">Significant deficits in executive function are nearly universal in FASD:<sup>[7]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Planning and organization difficulties</li>
            <li className="mb-2">Impaired impulse control</li>
            <li className="mb-2">Difficulty shifting between tasks or mental sets</li>
            <li className="mb-2">Poor judgment and difficulty anticipating consequences</li>
            <li className="mb-2">Difficulty linking cause and effect</li>
          </ul>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language</h3>
          <p className="mb-4">Receptive language (understanding what is said) is often significantly weaker than expressive language (what a person says).<sup>[8]</sup> A person with FASD may appear to understand more than they do — they learn to mimic language socially without full comprehension. Abstract language, idioms, and figurative speech are particularly challenging.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Behavioral Characteristics</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=1080&q=80" alt="Behavioral support and child development" className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Attention and Hyperactivity</h3>
          <p className="mb-4">Attention difficulties are present in the vast majority of individuals with FASD — often meeting criteria for ADHD.<sup>[9]</sup> Hyperactivity may decrease with age, while inattention typically persists. The underlying neurological basis differs from idiopathic ADHD, which affects treatment response.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Skills</h3>
          <p className="mb-4">Social naivety is a hallmark feature of FASD.<sup>[10]</sup> Affected individuals often:</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Are overly friendly with strangers, lacking appropriate caution</li>
            <li className="mb-2">Struggle to read social cues and body language</li>
            <li className="mb-2">Have difficulty understanding others' perspectives (theory of mind)</li>
            <li className="mb-2">Are easily influenced and manipulated by peers</li>
            <li className="mb-2">Seek friendships with younger children (social age lags behind chronological age)</li>
          </ul>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Emotional Regulation</h3>
          <p className="mb-4">Difficulty regulating emotions is common — not defiance, but a neurological inability to modulate emotional responses.<sup>[11]</sup> This manifests as:</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Emotional outbursts disproportionate to the trigger</li>
            <li className="mb-2">Rapid mood shifts</li>
            <li className="mb-2">Difficulty calming down after being upset</li>
            <li className="mb-2">Low frustration tolerance</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Sensory Processing</h2>
          <p className="mb-4">Many individuals with FASD experience sensory processing differences — over- or under-sensitivity to sensory input:<sup>[12]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Hypersensitivity to touch, textures of clothing, tags, seams</li>
            <li className="mb-2">Over-sensitivity to sound, light, or smells in busy environments</li>
            <li className="mb-2">Under-sensitivity to pain — may not register injuries</li>
            <li className="mb-2">Poor proprioception — difficulty knowing where their body is in space</li>
            <li className="mb-2">Sensory overload leading to behavioral dysregulation</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Adaptive Functioning</h2>
          <p className="mb-4">Perhaps the most clinically significant aspect of FASD is the gap between intellectual capacity and real-world adaptive functioning.<sup>[13]</sup> An individual may score in the average range on IQ testing but be unable to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Manage money or understand that spending depletes a bank account</li>
            <li className="mb-2">Follow multi-step instructions</li>
            <li className="mb-2">Maintain employment without support</li>
            <li className="mb-2">Manage time and appointments independently</li>
            <li className="mb-2">Generalize learned skills to new situations</li>
          </ul>
          <p className="mb-4">This disconnect often leads to unrealistic expectations — and consequent repeated failure, frustration, and secondary conditions like depression.<sup>[14]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Secondary Conditions</h2>
          <p className="mb-4">Secondary conditions are problems that are not caused directly by FASD but develop because needs are not met:<sup>[15]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Mental health problems:</strong> Depression, anxiety, PTSD (~90% by adulthood without support)</li>
            <li className="mb-2"><strong>Disrupted school experience:</strong> Suspension, expulsion, dropping out</li>
            <li className="mb-2"><strong>Trouble with the law:</strong> ~60% have contact with the criminal justice system<sup>[16]</sup></li>
            <li className="mb-2"><strong>Alcohol/drug problems:</strong> Higher risk; self-medication is common</li>
            <li className="mb-2"><strong>Dependent living:</strong> Difficulty living independently as adults</li>
            <li className="mb-2"><strong>Employment difficulties:</strong> Difficulty keeping jobs without support</li>
          </ul>
          <p className="mb-4">Secondary conditions are largely preventable with early diagnosis, appropriate support, and informed caregiving.<sup>[17]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Mukherjee, R. A., Hollins, S., & Turk, J. (2006). "Fetal alcohol spectrum disorder: An overview." <em>Journal of the Royal Society of Medicine</em>, 99(6), 298–302.</p>
          <p>[2] Astley, S. J., & Clarren, S. K. (2001). "Measuring the facial phenotype of individuals with prenatal alcohol exposure." <em>Alcohol and Alcoholism</em>, 36(2), 147–159.</p>
          <p>[3] Clarren, S. K., & Smith, D. W. (1978). "The fetal alcohol syndrome." <em>New England Journal of Medicine</em>, 298(19), 1063–1067.</p>
          <p>[4] Hoyme, H. E., Kalberg, W. O., Elliott, A. J., et al. (2016). "Updated clinical guidelines for diagnosing fetal alcohol spectrum disorders." <em>Pediatrics</em>, 138(2), e20154256.</p>
          <p>[5] Mattson, S. N., & Riley, E. P. (1998). "A review of the neurobehavioral deficits in children with fetal alcohol syndrome or prenatal exposure to alcohol." <em>Alcoholism: Clinical and Experimental Research</em>, 22(2), 279–294.</p>
          <p>[6] Mattson, S. N., Crocker, N., & Nguyen, T. T. (2011). "Fetal alcohol spectrum disorders: Neuropsychological and behavioral features." <em>Neuropsychology Review</em>, 21(2), 81–101.</p>
          <p>[7] Rasmussen, C. (2005). "Executive functioning and working memory in fetal alcohol spectrum disorder." <em>Alcoholism: Clinical and Experimental Research</em>, 29(8), 1359–1367.</p>
          <p>[8] Becker, M., Warr-Leeper, G. A., & Leeper, H. A. Jr. (1990). "Fetal alcohol syndrome: A description of oral motor, articulatory, short-term memory, grammatical, and semantic abilities." <em>Journal of Communication Disorders</em>, 23(2), 97–124.</p>
          <p>[9] O'Malley, K. D., & Nanson, J. (2002). "Clinical implications of a link between fetal alcohol spectrum disorder and attention-deficit hyperactivity disorder." <em>Canadian Journal of Psychiatry</em>, 47(4), 349–354.</p>
          <p>[10] Kully-Martens, K., Denys, K., Treit, S., Tamana, S., & Rasmussen, C. (2012). "A review of social skills deficits in individuals with fetal alcohol spectrum disorders." <em>Alcoholism: Clinical and Experimental Research</em>, 36(4), 568–576.</p>
          <p>[11] Greenbaum, R., Stevens, S. A., Nash, K., Koren, G., & Rovet, J. (2009). "Social cognitive and emotion processing abilities of children with fetal alcohol spectrum disorders." <em>Alcoholism: Clinical and Experimental Research</em>, 33(10), 1656–1667.</p>
          <p>[12] Franklin, L., Deitz, J., Jirikowic, T., & Astley, S. (2008). "Children with fetal alcohol spectrum disorders: Problem behaviors and sensory processing." <em>American Journal of Occupational Therapy</em>, 62(3), 265–273.</p>
          <p>[13] Crocker, N., Vaurio, L., Riley, E. P., & Mattson, S. N. (2009). "Comparison of adaptive behavior in children with heavy prenatal alcohol exposure or attention-deficit/hyperactivity disorder." <em>Alcoholism: Clinical and Experimental Research</em>, 33(11), 2015–2023.</p>
          <p>[14] Streissguth, A. P., Barr, H. M., Kogan, J., & Bookstein, F. L. (1996). <em>Understanding the occurrence of secondary disabilities in clients with fetal alcohol syndrome and fetal alcohol effects</em>. Seattle: University of Washington.</p>
          <p>[15] Streissguth, A. P., Bookstein, F. L., Barr, H. M., et al. (2004). "Risk factors for adverse life outcomes in fetal alcohol syndrome." <em>Journal of Developmental and Behavioral Pediatrics</em>, 25(4), 228–238.</p>
          <p>[16] Fast, D. K., Conry, J., & Loock, C. A. (1999). "Identifying fetal alcohol syndrome among youth in the criminal justice system." <em>Journal of Developmental and Behavioral Pediatrics</em>, 20(5), 370–372.</p>
          <p>[17] Paley, B., & O'Connor, M. J. (2011). "Behavioral interventions for children and adolescents with fetal alcohol spectrum disorders." <em>Alcohol Research and Health</em>, 34(1), 64–75.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('fasd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to FASD</a>
      </div>
    </article>
  );
}
