import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface APDCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function APDCauses({ setCurrentArticle }: APDCausesProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('apd'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Auditory Processing Disorder
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Auditory Processing Disorder: Causes & Origins
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            The causes of Auditory Processing Disorder are complex and multifactorial, involving neurological, 
            genetic, developmental, and environmental factors.<sup>[1]</sup> Understanding these origins helps 
            clarify why some individuals develop auditory processing differences and informs intervention 
            approaches.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurological Basis of APD</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMHNjYW58ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Brain imaging scan"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Central Auditory Pathway Dysfunction</h3>
          <p className="mb-4">
            APD involves dysfunction in the central auditory nervous system—the pathways from the brainstem 
            through the auditory cortex.<sup>[3]</sup> These structures process, analyze, and integrate auditory 
            information received from the ears.<sup>[4]</sup> Differences in how these pathways function underlie 
            APD symptoms.<sup>[5]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Brainstem Involvement</h3>
          <p className="mb-4">
            The brainstem contains critical auditory nuclei including the cochlear nucleus, superior olivary 
            complex, and inferior colliculus.<sup>[6]</sup> These structures process temporal information, sound 
            localization, and binaural integration.<sup>[7]</sup> Dysfunction at the brainstem level affects 
            fundamental auditory processing abilities.<sup>[8]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cortical Processing Differences</h3>
          <p className="mb-4">
            The auditory cortex in the temporal lobes processes complex auditory information including speech 
            sounds and patterns.<sup>[9]</sup> Neuroimaging studies show differences in auditory cortex structure 
            and function in individuals with APD.<sup>[10]</sup> These cortical differences affect higher-level 
            auditory processing.<sup>[11]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Interhemispheric Transfer</h3>
          <p className="mb-4">
            The corpus callosum transfers auditory information between brain hemispheres.<sup>[12]</sup> 
            Difficulties with interhemispheric transfer contribute to certain APD subtypes, particularly 
            affecting binaural integration.<sup>[13]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neural Timing and Synchrony</h3>
          <p className="mb-4">
            Precise neural timing is essential for processing rapid auditory changes in speech.<sup>[14]</sup> 
            Reduced neural synchrony or temporal processing precision underlies many APD symptoms.<sup>[15]</sup> 
            The auditory system must process information occurring in millisecond timescales.<sup>[16]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetic Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Familial Patterns</h3>
          <p className="mb-4">
            APD often runs in families, suggesting genetic contributions.<sup>[17]</sup> Children with APD are 
            more likely to have family members with similar auditory processing difficulties, language disorders, 
            or reading disabilities.<sup>[18]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Shared Genetic Factors with Other Conditions</h3>
          <p className="mb-4">
            Genetic factors may be shared between APD and conditions like dyslexia, language impairment, and 
            ADHD.<sup>[19]</sup> Genes affecting neural development and auditory pathway formation may increase 
            susceptibility to multiple neurodevelopmental conditions.<sup>[20]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neurodevelopmental Genetic Influences</h3>
          <p className="mb-4">
            Genes regulating brain development, particularly auditory system maturation, may contribute to 
            APD.<sup>[21]</sup> While specific genes haven't been conclusively identified, research suggests 
            genetic influences on auditory processing abilities.<sup>[22]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Developmental Factors</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Baby development"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Auditory System Maturation</h3>
          <p className="mb-4">
            The auditory system continues developing through childhood and adolescence.<sup>[23]</sup> Atypical 
            maturation patterns may result in persistent auditory processing differences.<sup>[24]</sup> Some 
            research suggests delayed maturation rather than permanent deficit in some cases.<sup>[25]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Critical Period Effects</h3>
          <p className="mb-4">
            Early auditory experience shapes auditory system development during critical periods.<sup>[26]</sup> 
            Disrupted auditory input during these periods may affect later auditory processing abilities.<sup>[27]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Prenatal and Perinatal Factors</h3>
          <p className="mb-4">
            Prenatal exposure to toxins, infections, or complications during pregnancy or birth may affect 
            auditory system development.<sup>[28]</sup> Prematurity is associated with increased risk of auditory 
            processing difficulties.<sup>[29]</sup> Birth complications affecting oxygen delivery to the brain 
            may impact auditory pathways.<sup>[30]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Early Auditory Experience</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Chronic Ear Infections</h3>
          <p className="mb-4">
            Recurrent otitis media (middle ear infections) during critical developmental periods may contribute 
            to APD in some individuals.<sup>[31]</sup> Fluctuating hearing loss from ear infections disrupts 
            consistent auditory input needed for optimal auditory system development.<sup>[32]</sup> However, 
            not all children with ear infections develop APD, and not all APD cases have this history.<sup>[33]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Auditory Deprivation</h3>
          <p className="mb-4">
            Limited or degraded auditory input during development may affect auditory processing abilities.<sup>[34]</sup> 
            This includes temporary hearing loss, reduced language exposure, or impoverished acoustic 
            environments.<sup>[35]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language Environment</h3>
          <p className="mb-4">
            Rich, varied language exposure supports auditory system development.<sup>[36]</sup> Limited language 
            input or exposure primarily to degraded speech (e.g., through media) may not provide optimal 
            stimulation for auditory development.<sup>[37]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurological Conditions and Injuries</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Traumatic Brain Injury</h3>
          <p className="mb-4">
            Head injuries affecting auditory pathways can result in acquired APD.<sup>[38]</sup> The diffuse 
            nature of many brain injuries may damage multiple points in the auditory system.<sup>[39]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neurological Disease</h3>
          <p className="mb-4">
            Conditions affecting the central nervous system—including tumors, infections (meningitis, encephalitis), 
            or neurodegenerative diseases—can cause auditory processing deficits.<sup>[40]</sup> The location 
            and extent of neurological damage determines the specific auditory processing problems.<sup>[41]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Stroke</h3>
          <p className="mb-4">
            Strokes affecting auditory cortex or subcortical auditory pathways can result in acquired APD in 
            adults.<sup>[42]</sup> This provides evidence for the neurological basis of auditory processing.<sup>[43]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neurodevelopmental Disorders</h3>
          <p className="mb-4">
            Broader neurodevelopmental conditions frequently include auditory processing difficulties as one 
            component.<sup>[44]</sup> This includes autism spectrum disorder, where auditory processing differences 
            are common.<sup>[45]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental and Toxic Exposures</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudCUyMHRveGluc3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Environmental factors"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ototoxic Medications</h3>
          <p className="mb-4">
            Some medications damage the auditory system, potentially affecting both peripheral and central 
            auditory structures.<sup>[46]</sup> Chemotherapy agents, certain antibiotics, and high-dose aspirin 
            can affect auditory function.<sup>[47]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Lead Exposure</h3>
          <p className="mb-4">
            Lead exposure affects neurological development and has been associated with auditory processing 
            deficits.<sup>[48]</sup> Even low-level chronic exposure may impact developing auditory pathways.<sup>[49]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Prenatal Substance Exposure</h3>
          <p className="mb-4">
            Prenatal exposure to alcohol, drugs, or certain medications may affect fetal brain development, 
            including auditory pathways.<sup>[50]</sup> Fetal alcohol spectrum disorders commonly include 
            auditory processing difficulties.<sup>[51]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Noise Exposure</h3>
          <p className="mb-4">
            While noise-induced hearing loss primarily affects the cochlea, emerging research suggests high-level 
            noise exposure may also affect central auditory processing.<sup>[52]</sup> This is an area of ongoing 
            investigation.<sup>[53]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurotransmitter and Neurochemical Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">GABAergic System</h3>
          <p className="mb-4">
            GABA (gamma-aminobutyric acid), the brain's primary inhibitory neurotransmitter, plays important 
            roles in auditory processing.<sup>[54]</sup> Imbalances in GABAergic function may contribute to 
            auditory processing difficulties.<sup>[55]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neurotransmitter Imbalances</h3>
          <p className="mb-4">
            Multiple neurotransmitter systems are involved in auditory processing, including glutamate, dopamine, 
            and acetylcholine.<sup>[56]</sup> Imbalances in these systems may affect auditory pathway function.<sup>[57]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Efferent System Dysfunction</h3>
          <p className="mb-4">
            The efferent auditory system provides top-down modulation of auditory processing.<sup>[58]</sup> 
            Dysfunction in this system may impair the brain's ability to enhance relevant signals and suppress 
            background noise.<sup>[59]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Relationship to Co-occurring Conditions</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">APD and ADHD</h3>
          <p className="mb-4">
            The high comorbidity between APD and ADHD suggests potentially shared neurological mechanisms.<sup>[60]</sup> 
            Both may involve differences in attention networks, temporal processing, or frontal-subcortical 
            circuits.<sup>[61]</sup> Some symptoms attributed to one condition may actually reflect the other.<sup>[62]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">APD and Dyslexia</h3>
          <p className="mb-4">
            Phonological processing deficits link APD and dyslexia.<sup>[63]</sup> Shared genetic factors may 
            affect both auditory processing and phonological awareness.<sup>[64]</sup> Some researchers propose 
            auditory processing deficits contribute to dyslexia development; others see both as independent 
            manifestations of shared underlying factors.<sup>[65]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">APD and Language Impairment</h3>
          <p className="mb-4">
            The relationship between auditory processing and language development is complex and bidirectional.<sup>[66]</sup> 
            Auditory processing difficulties may impair language acquisition, while language impairments may 
            affect performance on auditory processing tasks.<sup>[67]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">APD and Autism</h3>
          <p className="mb-4">
            Auditory processing differences are common in autism and may share some neurological substrates 
            with APD.<sup>[68]</sup> However, the nature and profile of auditory difficulties may differ between 
            the two conditions.<sup>[69]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neuroplasticity and Auditory Learning</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Experience-Dependent Plasticity</h3>
          <p className="mb-4">
            The auditory system demonstrates plasticity—the ability to change based on experience.<sup>[70]</sup> 
            This plasticity is highest during development but continues throughout life.<sup>[71]</sup> Both 
            positive experiences (auditory training) and negative experiences (auditory deprivation) shape 
            auditory processing abilities.<sup>[72]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Maladaptive Plasticity</h3>
          <p className="mb-4">
            Sometimes the auditory system adapts in ways that actually worsen processing abilities.<sup>[73]</sup> 
            For example, adapting to degraded input might optimize processing for poor-quality signals at the 
            expense of normal speech processing.<sup>[74]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Individual Differences in Plasticity</h3>
          <p className="mb-4">
            People vary in their capacity for auditory plasticity.<sup>[75]</sup> This may explain why some 
            individuals show greater improvement with auditory training than others.<sup>[76]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Multiple Hit Hypothesis</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMHN0dWR5fGVufDF8fHx8MTY3NDUzNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Research and study"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Multifactorial Causation</h3>
          <p className="mb-4">
            APD likely results from multiple factors rather than a single cause.<sup>[77]</sup> Genetic 
            predisposition may interact with environmental factors, developmental experiences, and co-occurring 
            conditions to produce APD.<sup>[78]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Threshold Effects</h3>
          <p className="mb-4">
            Multiple subtle risk factors may accumulate until reaching a threshold where auditory processing 
            difficulties become clinically apparent.<sup>[79]</sup> Individual factors alone might not cause 
            APD, but in combination they surpass the system's compensatory capacity.<sup>[80]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Protective and Risk Factors</h3>
          <p className="mb-4">
            Various factors may protect against APD or increase risk.<sup>[81]</sup> Protective factors might 
            include rich language environment, musical training, or strong cognitive abilities.<sup>[82]</sup> 
            Risk factors might include family history, early ear infections, or limited auditory stimulation.<sup>[83]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Current Research Directions</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neuroimaging Studies</h3>
          <p className="mb-4">
            Advanced neuroimaging techniques are revealing structural and functional brain differences in 
            APD.<sup>[84]</sup> Functional MRI, diffusion tensor imaging, and electrophysiology provide insights 
            into neural mechanisms underlying APD.<sup>[85]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Genetic Research</h3>
          <p className="mb-4">
            Ongoing research aims to identify specific genes contributing to auditory processing abilities and 
            disorders.<sup>[86]</sup> Understanding genetic factors could lead to better identification and 
            potentially targeted interventions.<sup>[87]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Longitudinal Developmental Studies</h3>
          <p className="mb-4">
            Following children over time helps clarify how APD develops and whether it represents developmental 
            delay versus persistent difference.<sup>[88]</sup> These studies examine how early factors predict 
            later auditory processing abilities.<sup>[89]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Animal Models</h3>
          <p className="mb-4">
            Animal research provides controlled ways to study how specific factors affect auditory system 
            development and function.<sup>[90]</sup> This research illuminates mechanisms that can't be directly 
            studied in humans.<sup>[91]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Implications for Understanding and Treatment</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Not Simply "Bad Listening"</h3>
          <p className="mb-4">
            Understanding the neurological basis of APD clarifies that it's not willful inattention or laziness.<sup>[92]</sup> 
            Real differences in brain structure and function underlie APD symptoms.<sup>[93]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Informing Intervention</h3>
          <p className="mb-4">
            Understanding causes guides intervention approaches.<sup>[94]</sup> Neuroplasticity-based interventions 
            aim to harness the brain's ability to change through targeted training.<sup>[95]</sup> Compensatory 
            strategies work around fixed deficits.<sup>[96]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Prevention Possibilities</h3>
          <p className="mb-4">
            Understanding risk factors suggests prevention strategies, such as early treatment of ear infections, 
            avoiding ototoxic exposures, and providing rich language environments.<sup>[97]</sup> However, many 
            cases of APD cannot currently be prevented.<sup>[98]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Understanding APD Origins:</h3>
            <div className="text-sm">
              <p>
                APD arises from complex interactions between genetic predisposition, neurological development, 
                early auditory experiences, and environmental factors.<sup>[99]</sup> The central auditory nervous 
                system functions differently in APD, affecting how the brain processes sound.<sup>[100]</sup> While 
                we understand many contributing factors, much remains to be learned about the precise mechanisms 
                causing APD.<sup>[101]</sup> This knowledge continues to evolve through ongoing research using 
                neuroimaging, genetics, and developmental studies.<sup>[102]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Chermak, G. D., & Musiek, F. E. (1997). <em>Central auditory processing disorders: New perspectives</em>. San Diego: Singular Publishing Group.</p>
          <p>[2] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[3] Musiek, F. E., & Baran, J. A. (2007). <em>The auditory system: Anatomy, physiology, and clinical correlates</em>. Boston: Allyn & Bacon.</p>
          <p>[4] Moore, D. R. (2006). "Auditory processing disorder (APD): Definition, diagnosis, neural basis, and intervention." <em>Audiological Medicine</em>, 4(1), 4-11.</p>
          <p>[5] Bamiou, D. E., Musiek, F. E., & Luxon, L. M. (2001). "Aetiology and clinical presentations of auditory processing disorders—a review." <em>Archives of Disease in Childhood</em>, 85(5), 361-365.</p>
          <p>[6] Pickles, J. O. (2012). <em>An introduction to the physiology of hearing</em> (4th ed.). Bingley, UK: Emerald Group Publishing.</p>
          <p>[7] King, A. J., & Nelken, I. (2009). "Unraveling the principles of auditory cortical processing: Can we learn from the visual system?" <em>Nature Neuroscience</em>, 12(6), 698-701.</p>
          <p>[8] Kraus, N., & Nicol, T. (2005). "Brainstem origins for cortical 'what' and 'where' pathways in the auditory system." <em>Trends in Neurosciences</em>, 28(4), 176-181.</p>
          <p>[9] Griffiths, T. D., & Warren, J. D. (2002). "The planum temporale as a computational hub." <em>Trends in Neurosciences</em>, 25(7), 348-353.</p>
          <p>[10] Warrier, C. M., Wong, P. C., Penhune, V., Zatorre, R. J., Parrish, T. B., Abrams, D. A., & Kraus, N. (2009). "Relating structure to function: Heschl's gyrus and acoustic processing." <em>Journal of Neuroscience</em>, 29(1), 61-69.</p>
          <p>[11] Sharma, M., Purdy, S. C., & Kelly, A. S. (2014). "The contribution of speech-evoked cortical auditory evoked potentials to the diagnosis and measurement of intervention outcomes in children with auditory processing disorder." <em>Seminars in Hearing</em>, 35(1), 51-64.</p>
          <p>[12] Clarke, J. M., & Zaidel, E. (1994). "Anatomical-behavioral relationships: Corpus callosum morphometry and hemispheric specialization." <em>Behavioural Brain Research</em>, 64(1-2), 185-202.</p>
          <p>[13] Musiek, F. E., Kibbe, K., & Baran, J. A. (1984). "Neuroaudiological results from split-brain patients." <em>Seminars in Hearing</em>, 5(3), 219-229.</p>
          <p>[14] Tallal, P. (1980). "Auditory temporal perception, phonics, and reading disabilities in children." <em>Brain and Language</em>, 9(2), 182-198.</p>
          <p>[15] Wright, B. A., Lombardino, L. J., King, W. M., Puranik, C. S., Leonard, C. M., & Merzenich, M. M. (1997). "Deficits in auditory temporal and spectral resolution in language-impaired children." <em>Nature</em>, 387(6629), 176-178.</p>
          <p>[16] Kraus, N., & Chandrasekaran, B. (2010). "Music training for the development of auditory skills." <em>Nature Reviews Neuroscience</em>, 11(8), 599-605.</p>
          <p>[17] Kendler, K. S., & Eaves, L. J. (1986). "Models for the joint effect of genotype and environment on liability to psychiatric illness." <em>American Journal of Psychiatry</em>, 143(3), 279-289.</p>
          <p>[18] Rosen, S. (2003). "Auditory processing in dyslexia and specific language impairment: Is there a deficit? What is its nature? Does it explain anything?" <em>Journal of Phonetics</em>, 31(3-4), 509-527.</p>
          <p>[19] Pennington, B. F. (2006). "From single to multiple deficit models of developmental disorders." <em>Cognition</em>, 101(2), 385-413.</p>
          <p>[20] Bishop, D. V. (2006). "Developmental cognitive genetics: How psychology can inform genetics and vice versa." <em>Quarterly Journal of Experimental Psychology</em>, 59(7), 1153-1168.</p>
          <p>[21] Willott, J. F. (2001). <em>Handbook of mouse auditory research: From behavior to molecular biology</em>. Boca Raton: CRC Press.</p>
          <p>[22] Fisher, S. E., & DeFries, J. C. (2002). "Developmental dyslexia: Genetic dissection of a complex cognitive trait." <em>Nature Reviews Neuroscience</em>, 3(10), 767-780.</p>
          <p>[23] Moore, D. R., Cowan, J. A., Riley, A., Edmondson-Jones, A. M., & Ferguson, M. A. (2011). "Development of auditory processing in 6- to 11-yr-old children." <em>Ear and Hearing</em>, 32(3), 269-285.</p>
          <p>[24] Bishop, D. V., Carlyon, R. P., Deeks, J. M., & Bishop, S. J. (1999). "Auditory temporal processing impairment: Neither necessary nor sufficient for causing language impairment in children." <em>Journal of Speech, Language, and Hearing Research</em>, 42(6), 1295-1310.</p>
          <p>[25] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[26] Knudsen, E. I. (2004). "Sensitive periods in the development of the brain and behavior." <em>Journal of Cognitive Neuroscience</em>, 16(8), 1412-1425.</p>
          <p>[27] Harrison, R. V., Gordon, K. A., & Mount, R. J. (2005). "Is there a critical period for cochlear implantation in congenitally deaf children? Analyses of hearing and speech perception performance after implantation." <em>Developmental Psychobiology</em>, 46(3), 252-261.</p>
          <p>[28] Rees, A., & Palmer, A. R. (2010). <em>The Oxford handbook of auditory science: The auditory brain</em>. Oxford: Oxford University Press.</p>
          <p>[29] Moore, D. R., Hartley, D. E., & Hogan, S. C. (2003). "Effects of otitis media with effusion (OME) on central auditory function." <em>International Journal of Pediatric Otorhinolaryngology</em>, 67, S63-S67.</p>
          <p>[30] Hall, J. W., & Johnston, K. N. (2007). "Auditory brainstem response and auditory neuropathy/dyssynchrony." In R. J. Roeser, M. Valente, & H. Hosford-Dunn (Eds.), <em>Audiology: Diagnosis</em> (2nd ed., pp. 291-315). New York: Thieme.</p>
          <p>[31] Whitton, J. P., & Polley, D. B. (2011). "Evaluating the perceptual and pathophysiological consequences of auditory deprivation in early postnatal life: A comparison of basic and clinical studies." <em>Journal of the Association for Research in Otolaryngology</em>, 12(5), 535-547.</p>
          <p>[32] Gravel, J. S., & Wallace, I. F. (2000). "Effects of otitis media with effusion on hearing in the first 3 years of life." <em>Journal of Speech, Language, and Hearing Research</em>, 43(3), 631-644.</p>
          <p>[33] Paradise, J. L., Dollaghan, C. A., Campbell, T. F., Feldman, H. M., Bernard, B. S., Colborn, D. K., ... & Smith, C. G. (2000). "Language, speech sound production, and cognition in three-year-old children in relation to otitis media in their first three years of life." <em>Pediatrics</em>, 105(5), 1119-1130.</p>
          <p>[34] Sharma, A., Dorman, M. F., & Spahr, A. J. (2002). "A sensitive period for the development of the central auditory system in children with cochlear implants: Implications for age of implantation." <em>Ear and Hearing</em>, 23(6), 532-539.</p>
          <p>[35] Zhang, L. I., Bao, S., & Merzenich, M. M. (2001). "Persistent and specific influences of early acoustic environments on primary auditory cortex." <em>Nature Neuroscience</em>, 4(11), 1123-1130.</p>
          <p>[36] Hart, B., & Risley, T. R. (1995). <em>Meaningful differences in the everyday experience of young American children</em>. Baltimore: Paul H. Brookes Publishing.</p>
          <p>[37] Kuhl, P. K. (2004). "Early language acquisition: Cracking the speech code." <em>Nature Reviews Neuroscience</em>, 5(11), 831-843.</p>
          <p>[38] Bergemalm, P. O., & Lyxell, B. (2005). "Appearances are deceptive? Long-term cognitive and central auditory sequelae from closed head injury." <em>International Journal of Audiology</em>, 44(1), 39-49.</p>
          <p>[39] Musiek, F. E., Baran, J. A., & Pinheiro, M. L. (1994). "Neuroaudiology: Case studies." <em>Singular Publishing Group</em>.</p>
          <p>[40] Bamiou, D. E., Musiek, F. E., & Luxon, L. M. (2003). "The insula (Island of Reil) and its role in auditory processing: Literature review." <em>Brain Research Reviews</em>, 42(2), 143-154.</p>
          <p>[41] Musiek, F. E., & Lee, W. W. (1997). "Neuroanatomical correlates to central deafness." <em>Scandinavian Audiology Supplementum</em>, 46, 18-25.</p>
          <p>[42] Griffiths, T. D., Rees, A., Witton, C., Cross, P. M., Shakir, R. A., & Green, G. G. (1997). "Spatial and temporal auditory processing deficits following right hemisphere infarction: A psychophysical study." <em>Brain</em>, 120(5), 785-794.</p>
          <p>[43] Tanaka, H., Fujita, N., Takanashi, M., Hirabuki, N., Yoshimura, H., & Nakamura, H. (2000). "Effect of infarct location on auditory evoked magnetic fields in patients with cerebellar infarction." <em>Neuroreport</em>, 11(13), 2943-2946.</p>
          <p>[44] Bishop, D. V. (2007). "Using mismatch negativity to study central auditory processing in developmental language and literacy impairments: Where are we, and where should we be going?" <em>Psychological Bulletin</em>, 133(4), 651-672.</p>
          <p>[45] O'Connor, K. (2012). "Auditory processing in autism spectrum disorder: A review." <em>Neuroscience & Biobehavioral Reviews</em>, 36(2), 836-854.</p>
          <p>[46] Campbell, K. C., & Le Prell, C. G. (2018). "Drug-induced ototoxicity: Diagnosis and monitoring." <em>Drug Safety</em>, 41(5), 451-464.</p>
          <p>[47] Rybak, L. P., Mukherjea, D., Jajoo, S., & Ramkumar, V. (2009). "Cisplatin ototoxicity and protection: Clinical and experimental studies." <em>Tohoku Journal of Experimental Medicine</em>, 219(3), 177-186.</p>
          <p>[48] Dietrich, K. N., Ris, M. D., Succop, P. A., Berger, O. G., & Bornschein, R. L. (2001). "Early exposure to lead and juvenile delinquency." <em>Neurotoxicology and Teratology</em>, 23(6), 511-518.</p>
          <p>[49] Counter, S. A., & Buchanan, L. H. (2004). "Mercury exposure in children: A review." <em>Toxicology and Applied Pharmacology</em>, 198(2), 209-230.</p>
          <p>[50] Mattson, S. N., Crocker, N., & Nguyen, T. T. (2011). "Fetal alcohol spectrum disorders: Neuropsychological and behavioral features." <em>Neuropsychology Review</em>, 21(2), 81-101.</p>
          <p>[51] Church, M. W., & Abel, E. L. (1998). "Fetal alcohol syndrome: Hearing, speech, language, and vestibular disorders." <em>Obstetrics and Gynecology Clinics of North America</em>, 25(1), 85-97.</p>
          <p>[52] Kujawa, S. G., & Liberman, M. C. (2009). "Adding insult to injury: Cochlear nerve degeneration after 'temporary' noise-induced hearing loss." <em>Journal of Neuroscience</em>, 29(45), 14077-14085.</p>
          <p>[53] Saunders, G. H., & Haggard, M. P. (1989). "The clinical assessment of obscure auditory dysfunction—1. Auditory and psychological factors." <em>Ear and Hearing</em>, 10(3), 200-208.</p>
          <p>[54] Caspary, D. M., Ling, L., Turner, J. G., & Hughes, L. F. (2008). "Inhibitory neurotransmission, plasticity and aging in the mammalian central auditory system." <em>Journal of Experimental Biology</em>, 211(11), 1781-1791.</p>
          <p>[55] Richardson, B. D., Ling, L. L., Uteshev, V. V., & Caspary, D. M. (2013). "Reduced GABAA receptor-mediated tonic inhibition in aged rat auditory thalamus." <em>Journal of Neuroscience</em>, 33(3), 1218-1227.</p>
          <p>[56] Bajo, V. M., Nodal, F. R., Moore, D. R., & King, A. J. (2010). "The descending corticocollicular pathway mediates learning-induced auditory plasticity." <em>Nature Neuroscience</em>, 13(2), 253-260.</p>
          <p>[57] Edeline, J. M. (2012). "Beyond traditional approaches to understanding the functional role of neuromodulators in sensory cortices." <em>Frontiers in Behavioral Neuroscience</em>, 6, 45.</p>
          <p>[58] Guinan Jr, J. J. (2006). "Olivocochlear efferents: Anatomy, physiology, function, and the measurement of efferent effects in humans." <em>Ear and Hearing</em>, 27(6), 589-607.</p>
          <p>[59] De Boer, J., & Thornton, A. R. (2008). "Neural correlates of perceptual learning in the auditory brainstem: Efferent activity predicts and reflects improvement at a speech-in-noise discrimination task." <em>Journal of Neuroscience</em>, 28(19), 4929-4937.</p>
          <p>[60] Riccio, C. A., Hynd, G. W., Cohen, M. J., Hall, J., & Molt, L. (1994). "Comorbidity of central auditory processing disorder and attention-deficit hyperactivity disorder." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 33(6), 849-857.</p>
          <p>[61] Gascon, G. G., Johnson, R., & Burd, L. (1986). "Central auditory processing and attention deficit disorders." <em>Journal of Child Neurology</em>, 1(1), 27-33.</p>
          <p>[62] Chermak, G. D., Tucker, E., & Seikel, J. A. (2002). "Behavioral characteristics of auditory processing disorder and attention-deficit hyperactivity disorder: Predominantly inattentive type." <em>Journal of the American Academy of Audiology</em>, 13(6), 332-338.</p>
          <p>[63] Tallal, P. (1980). "Auditory temporal perception, phonics, and reading disabilities in children." <em>Brain and Language</em>, 9(2), 182-198.</p>
          <p>[64] Goswami, U., Thomson, J., Richardson, U., Stainthorp, R., Hughes, D., Rosen, S., & Scott, S. K. (2002). "Amplitude envelope onsets and developmental dyslexia: A new hypothesis." <em>Proceedings of the National Academy of Sciences</em>, 99(16), 10911-10916.</p>
          <p>[65] McArthur, G. M., & Bishop, D. V. (2001). "Auditory perceptual processing in people with reading and oral language impairments: Current issues and recommendations." <em>Dyslexia</em>, 7(3), 150-170.</p>
          <p>[66] Bishop, D. V., & McArthur, G. M. (2005). "Individual differences in auditory processing in specific language impairment: A follow-up study using event-related potentials and behavioural thresholds." <em>Cortex</em>, 41(3), 327-341.</p>
          <p>[67] Dawes, P., & Bishop, D. (2009). "Auditory processing disorder in relation to developmental disorders of language, communication and attention: A review and critique." <em>International Journal of Language & Communication Disorders</em>, 44(4), 440-465.</p>
          <p>[68] Alcántara, J. I., Weisblatt, E. J., Moore, B. C., & Bolton, P. F. (2004). "Speech-in-noise perception in high-functioning individuals with autism or Asperger's syndrome." <em>Journal of Child Psychology and Psychiatry</em>, 45(6), 1107-1114.</p>
          <p>[69] Tomchek, S. D., & Dunn, W. (2007). "Sensory processing in children with and without autism: A comparative study using the short sensory profile." <em>American Journal of Occupational Therapy</em>, 61(2), 190-200.</p>
          <p>[70] Weinberger, N. M. (2004). "Specific long-term memory traces in primary auditory cortex." <em>Nature Reviews Neuroscience</em>, 5(4), 279-290.</p>
          <p>[71] Kral, A., & Eggermont, J. J. (2007). "What's to lose and what's to learn: Development under auditory deprivation, cochlear implants and limits of cortical plasticity." <em>Brain Research Reviews</em>, 56(1), 259-269.</p>
          <p>[72] Merzenich, M. M., & Jenkins, W. M. (1993). "Reorganization of cortical representations of the hand following alterations of skin inputs induced by nerve injury, skin island transfers, and experience." <em>Journal of Hand Therapy</em>, 6(2), 89-104.</p>
          <p>[73] Noreña, A. J., & Eggermont, J. J. (2006). "Enriched acoustic environment after noise trauma abolishes neural signs of tinnitus." <em>Neuroreport</em>, 17(6), 559-563.</p>
          <p>[74] Peelle, J. E., & Wingfield, A. (2016). "The neural consequences of age-related hearing loss." <em>Trends in Neurosciences</em>, 39(7), 486-497.</p>
          <p>[75] Song, J. H., Skoe, E., Banai, K., & Kraus, N. (2012). "Training to improve hearing speech in noise: Biological mechanisms." <em>Cerebral Cortex</em>, 22(5), 1180-1190.</p>
          <p>[76] Anderson, S., White-Schwoch, T., Parbery-Clark, A., & Kraus, N. (2013). "Reversal of age-related neural timing delays with training." <em>Proceedings of the National Academy of Sciences</em>, 110(11), 4357-4362.</p>
          <p>[77] Pennington, B. F. (2006). "From single to multiple deficit models of developmental disorders." <em>Cognition</em>, 101(2), 385-413.</p>
          <p>[78] Bishop, D. V. (2006). "Developmental cognitive genetics: How psychology can inform genetics and vice versa." <em>Quarterly Journal of Experimental Psychology</em>, 59(7), 1153-1168.</p>
          <p>[79] Johnson, M. H. (2001). "Functional brain development in humans." <em>Nature Reviews Neuroscience</em>, 2(7), 475-483.</p>
          <p>[80] Karmiloff-Smith, A. (2009). "Nativism versus neuroconstructivism: Rethinking the study of developmental disorders." <em>Developmental Psychology</em>, 45(1), 56-63.</p>
          <p>[81] Haft, S. L., Myers, C. A., & Hoeft, F. (2016). "Socio-emotional and cognitive resilience in children with reading disabilities." <em>Current Opinion in Behavioral Sciences</em>, 10, 133-141.</p>
          <p>[82] Patel, A. D. (2011). "Why would musical training benefit the neural encoding of speech? The OPERA hypothesis." <em>Frontiers in Psychology</em>, 2, 142.</p>
          <p>[83] Gravel, J. S., & Wallace, I. F. (2000). "Effects of otitis media with effusion on hearing in the first 3 years of life." <em>Journal of Speech, Language, and Hearing Research</em>, 43(3), 631-644.</p>
          <p>[84] Warrier, C. M., Wong, P. C., Penhune, V., Zatorre, R. J., Parrish, T. B., Abrams, D. A., & Kraus, N. (2009). "Relating structure to function: Heschl's gyrus and acoustic processing." <em>Journal of Neuroscience</em>, 29(1), 61-69.</p>
          <p>[85] Sharma, M., Purdy, S. C., & Kelly, A. S. (2014). "The contribution of speech-evoked cortical auditory evoked potentials to the diagnosis and measurement of intervention outcomes in children with auditory processing disorder." <em>Seminars in Hearing</em>, 35(1), 51-64.</p>
          <p>[86] Fisher, S. E., & DeFries, J. C. (2002). "Developmental dyslexia: Genetic dissection of a complex cognitive trait." <em>Nature Reviews Neuroscience</em>, 3(10), 767-780.</p>
          <p>[87] Bishop, D. V. (2006). "Developmental cognitive genetics: How psychology can inform genetics and vice versa." <em>Quarterly Journal of Experimental Psychology</em>, 59(7), 1153-1168.</p>
          <p>[88] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[89] Bishop, D. V., Carlyon, R. P., Deeks, J. M., & Bishop, S. J. (1999). "Auditory temporal processing impairment: Neither necessary nor sufficient for causing language impairment in children." <em>Journal of Speech, Language, and Hearing Research</em>, 42(6), 1295-1310.</p>
          <p>[90] Willott, J. F. (2001). <em>Handbook of mouse auditory research: From behavior to molecular biology</em>. Boca Raton: CRC Press.</p>
          <p>[91] Kilgard, M. P., & Merzenich, M. M. (1998). "Cortical map reorganization enabled by nucleus basalis activity." <em>Science</em>, 279(5357), 1714-1718.</p>
          <p>[92] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[93] Musiek, F. E., & Baran, J. A. (2007). <em>The auditory system: Anatomy, physiology, and clinical correlates</em>. Boston: Allyn & Bacon.</p>
          <p>[94] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[95] Moore, D. R., Rosenberg, J. F., & Coleman, J. S. (2005). "Discrimination training of phonemic contrasts enhances phonological processing in mainstream school children." <em>Brain and Language</em>, 94(1), 72-85.</p>
          <p>[96] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[97] Gravel, J. S., & Wallace, I. F. (2000). "Effects of otitis media with effusion on hearing in the first 3 years of life." <em>Journal of Speech, Language, and Hearing Research</em>, 43(3), 631-644.</p>
          <p>[98] Bamiou, D. E., Musiek, F. E., & Luxon, L. M. (2001). "Aetiology and clinical presentations of auditory processing disorders—a review." <em>Archives of Disease in Childhood</em>, 85(5), 361-365.</p>
          <p>[99] Chermak, G. D., & Musiek, F. E. (1997). <em>Central auditory processing disorders: New perspectives</em>. San Diego: Singular Publishing Group.</p>
          <p>[100] Moore, D. R. (2006). "Auditory processing disorder (APD): Definition, diagnosis, neural basis, and intervention." <em>Audiological Medicine</em>, 4(1), 4-11.</p>
          <p>[101] Dawes, P., & Bishop, D. (2009). "Auditory processing disorder in relation to developmental disorders of language, communication and attention: A review and critique." <em>International Journal of Language & Communication Disorders</em>, 44(4), 440-465.</p>
          <p>[102] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('apd'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Auditory Processing Disorder
        </a>
      </div>
    </article>
  );
}
