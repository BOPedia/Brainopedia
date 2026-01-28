import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface APDLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function APDLiving({ setCurrentArticle }: APDLivingProps) {
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
        Living with Auditory Processing Disorder
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Living with Auditory Processing Disorder presents unique challenges across settings and life stages, 
            but with understanding, appropriate support, and effective strategies, individuals with APD can thrive.<sup>[1]</sup> 
            Success involves acknowledging both challenges and strengths while developing personalized approaches 
            for navigating an auditory world.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Daily Life Challenges</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlseSUyMGxpZmV8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Daily life activities"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Communication in Everyday Situations</h3>
          <p className="mb-4">
            Routine communication tasks others take for granted can be exhausting with APD.<sup>[3]</sup> Phone 
            conversations without visual cues are particularly challenging.<sup>[4]</sup> Drive-through ordering, 
            announcements in stores, and crowded social gatherings all present difficulties.<sup>[5]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Invisible Challenge</h3>
          <p className="mb-4">
            APD is invisible—there's no outward sign of difficulty.<sup>[6]</sup> People may misinterpret 
            challenges as rudeness ("Why aren't you listening?"), lack of intelligence, or willful inattention.<sup>[7]</sup> 
            Explaining the condition repeatedly becomes necessary but tiring.<sup>[8]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Listening Fatigue</h3>
          <p className="mb-4">
            The constant cognitive effort required to process auditory information leads to exhaustion.<sup>[9]</sup> 
            By day's end, individuals may have depleted capacity for listening or conversation.<sup>[10]</sup> 
            This isn't laziness—it's genuine neurological fatigue.<sup>[11]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Misunderstandings</h3>
          <p className="mb-4">
            Missing parts of conversations leads to confusion, inappropriate responses, or appearing disengaged.<sup>[12]</sup> 
            People may think someone with APD isn't interested or isn't paying attention when they're actually 
            working hard to process what's being said.<sup>[13]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">School Experiences</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Classroom Challenge</h3>
          <p className="mb-4">
            Traditional lecture-based classrooms are optimized for auditory learning—exactly what's difficult 
            with APD.<sup>[14]</sup> Background noise from classmates, HVAC systems, or hallways compounds 
            challenges.<sup>[15]</sup> By the time information is processed, the teacher has moved on.<sup>[16]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Academic Impacts</h3>
          <p className="mb-4">
            Students with APD often struggle with subjects requiring extensive listening—lectures, foreign 
            languages, or verbal problem-solving.<sup>[17]</sup> Reading and spelling difficulties may arise from 
            phonological processing deficits.<sup>[18]</sup> Test scores may underestimate actual knowledge when 
            tests rely on verbal instructions.<sup>[19]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Challenges at School</h3>
          <p className="mb-4">
            Cafeterias, playgrounds, and hallways are noisy environments where conversation is difficult.<sup>[20]</sup> 
            Missing jokes, misunderstanding social cues, or needing repetition can affect peer relationships.<sup>[21]</sup> 
            Some students withdraw from social situations that are too challenging.<sup>[22]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Self-Esteem and Confidence</h3>
          <p className="mb-4">
            Repeated struggles and misunderstandings can erode self-esteem.<sup>[23]</sup> Students may internalize 
            messages that they're "not trying hard enough" or "not smart enough."<sup>[24]</sup> Diagnosis and 
            understanding help, but emotional impacts may linger.<sup>[25]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Relationships and Social Life</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwdGFsa2luZ3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Friends talking"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Navigating Friendships</h3>
          <p className="mb-4">
            Building and maintaining friendships requires communication—an area of challenge with APD.<sup>[26]</sup> 
            Group conversations are particularly difficult as multiple voices overlap.<sup>[27]</sup> Close one-on-one 
            friendships in quiet settings may feel more comfortable than large social groups.<sup>[28]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Dating and Romantic Relationships</h3>
          <p className="mb-4">
            Dating often involves challenging listening situations—restaurants, movies, parties.<sup>[29]</sup> 
            Phone conversations and miscommunications can create difficulties.<sup>[30]</sup> Partners need to 
            understand APD and adapt communication accordingly.<sup>[31]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Family Dynamics</h3>
          <p className="mb-4">
            Family members may struggle to understand why someone "hears when they want to" or seems to ignore 
            them.<sup>[32]</sup> Education about APD helps families develop patience and appropriate communication 
            strategies.<sup>[33]</sup> Family support is crucial for positive outcomes.<sup>[34]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Activities and Events</h3>
          <p className="mb-4">
            Parties, concerts, sporting events, and other group activities present significant challenges.<sup>[35]</sup> 
            Individuals with APD may avoid these situations or find them exhausting.<sup>[36]</sup> Choosing 
            quieter social options isn't antisocial—it's practical accommodation.<sup>[37]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Work and Career Considerations</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Workplace Challenges</h3>
          <p className="mb-4">
            Open office environments with background noise and multiple conversations are particularly difficult.<sup>[38]</sup> 
            Meetings, especially large ones or those with poor acoustics, strain auditory processing.<sup>[39]</sup> 
            Phone conferences without visual cues compound challenges.<sup>[40]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Career Selection</h3>
          <p className="mb-4">
            Some careers are better suited to individuals with APD than others.<sup>[41]</sup> Jobs emphasizing 
            visual or hands-on skills, allowing quiet work environments, or minimizing auditory demands may be 
            good fits.<sup>[42]</sup> This doesn't mean capabilities are limited—it means playing to strengths.<sup>[43]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Workplace Accommodations</h3>
          <p className="mb-4">
            Reasonable accommodations can enable success: quiet workspaces, written communication when possible, 
            meeting agendas in advance, and permission to record meetings.<sup>[44]</sup> Remote work arrangements 
            may significantly improve functioning.<sup>[45]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Disclosure Decisions</h3>
          <p className="mb-4">
            Whether to disclose APD to employers is a personal decision.<sup>[46]</sup> Disclosure can secure 
            accommodations but may involve stigma concerns.<sup>[47]</sup> Some choose strategic partial disclosure; 
            others are fully open.<sup>[48]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Emotional and Psychological Impact</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Frustration and Anxiety</h3>
          <p className="mb-4">
            Constant communication challenges create frustration.<sup>[49]</sup> Anxiety about missing important 
            information, appearing incompetent, or social embarrassment is common.<sup>[50]</sup> Some individuals 
            develop anticipatory anxiety about challenging listening situations.<sup>[51]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Depression and Isolation</h3>
          <p className="mb-4">
            Chronic struggles and social difficulties can contribute to depression.<sup>[52]</sup> Some individuals 
            withdraw from social activities to avoid challenges, leading to isolation.<sup>[53]</sup> Mental health 
            support may be beneficial.<sup>[54]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Identity and Self-Concept</h3>
          <p className="mb-4">
            APD shapes identity and self-understanding.<sup>[55]</sup> Some embrace it as part of neurodiversity; 
            others view it primarily as a challenge to overcome.<sup>[56]</sup> Diagnosis often provides relief 
            and explanation for longstanding difficulties.<sup>[57]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Resilience and Coping</h3>
          <p className="mb-4">
            Many individuals with APD develop remarkable resilience and coping skills.<sup>[58]</sup> Learning 
            to advocate for needs, develop workarounds, and persist despite challenges builds strength.<sup>[59]</sup> 
            These skills serve well beyond managing APD.<sup>[60]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Practical Strategies for Daily Living</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFubmluZyUyMHN0cmF0ZWd5fGVufDF8fHx8MTY3NDUzNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Planning and strategy"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Communication Strategies</h3>
          <p className="mb-4">
            Advocating for needs is essential: asking people to face you when speaking, requesting quieter 
            conversation locations, or asking for information in writing.<sup>[61]</sup> Being direct about needs 
            prevents misunderstandings.<sup>[62]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Environmental Management</h3>
          <p className="mb-4">
            When possible, control the listening environment: choosing quiet restaurants, sitting away from 
            noise sources, or scheduling important conversations during quiet times.<sup>[63]</sup> Small 
            environmental adjustments make significant differences.<sup>[64]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Technology Use</h3>
          <p className="mb-4">
            Technology assists in many ways: captioning apps for conversations, noise-canceling headphones, 
            voice-to-text for phone conversations, and recording important information.<sup>[65]</sup> Email and 
            text messaging reduce reliance on phone conversations.<sup>[66]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Energy Management</h3>
          <p className="mb-4">
            Recognizing and managing listening fatigue is important.<sup>[67]</sup> Building in breaks, limiting 
            challenging listening situations, and prioritizing rest prevents burnout.<sup>[68]</sup> It's okay 
            to decline activities when depleted.<sup>[69]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Memory Supports</h3>
          <p className="mb-4">
            External memory aids compensate for auditory memory difficulties: written notes, phone reminders, 
            calendar systems, and to-do lists.<sup>[70]</sup> Don't rely on memory for important information—write 
            it down.<sup>[71]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Strengths and Abilities</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Processing Strengths</h3>
          <p className="mb-4">
            Many individuals with APD excel at visual processing.<sup>[72]</sup> Careers and activities emphasizing 
            visual skills—art, design, architecture, engineering, computer programming—may be strengths.<sup>[73]</sup> 
            Visual learning strategies support academic success.<sup>[74]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Detail Orientation and Focus</h3>
          <p className="mb-4">
            Some individuals with APD develop strong focus and attention to detail from constantly working to 
            process information accurately.<sup>[75]</sup> These skills transfer to many contexts.<sup>[76]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Problem-Solving and Creativity</h3>
          <p className="mb-4">
            Developing workarounds for auditory challenges often requires creative problem-solving.<sup>[77]</sup> 
            These skills benefit many areas of life.<sup>[78]</sup> Thinking differently about problems can lead 
            to innovative solutions.<sup>[79]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Empathy and Understanding</h3>
          <p className="mb-4">
            Experiencing challenges can build empathy for others facing difficulties.<sup>[80]</sup> Many 
            individuals with APD develop strong advocacy skills and sensitivity to accessibility needs.<sup>[81]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Life Across Different Ages</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Childhood</h3>
          <p className="mb-4">
            Young children with APD may struggle with following directions, learning songs, or understanding 
            stories read aloud.<sup>[82]</sup> Early intervention supports language and auditory skill development.<sup>[83]</sup> 
            Parent education helps families support their child effectively.<sup>[84]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School-Age Years</h3>
          <p className="mb-4">
            Academic and social demands increase during school years.<sup>[85]</sup> Appropriate accommodations 
            and support are crucial for success.<sup>[86]</sup> Developing self-advocacy skills empowers children 
            to communicate their needs.<sup>[87]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adolescence</h3>
          <p className="mb-4">
            Teenagers face complex social dynamics and increased academic rigor.<sup>[88]</sup> Identity development 
            includes integrating APD into self-concept.<sup>[89]</sup> Planning for post-secondary education or 
            careers requires considering APD's impacts.<sup>[90]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adulthood</h3>
          <p className="mb-4">
            Adults with APD continue experiencing challenges but often have developed effective compensation 
            strategies.<sup>[91]</sup> Career choices, relationships, and lifestyle can be structured to minimize 
            difficulties.<sup>[92]</sup> Self-advocacy and environmental control become more feasible.<sup>[93]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Older Adulthood</h3>
          <p className="mb-4">
            Age-related hearing changes may compound APD challenges.<sup>[94]</sup> However, a lifetime of 
            compensation strategies helps.<sup>[95]</sup> Maintaining social connections despite communication 
            challenges benefits cognitive and emotional health.<sup>[96]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Success Stories and Role Models</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwdGVhbXxlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Success and achievement"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Academic Success</h3>
          <p className="mb-4">
            Many individuals with APD succeed academically through appropriate accommodations and determination.<sup>[97]</sup> 
            College students with APD can thrive with disability services support.<sup>[98]</sup> Graduate degrees 
            and professional programs are achievable.<sup>[99]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Career Achievement</h3>
          <p className="mb-4">
            APD doesn't limit career potential when individuals find good matches between their abilities and 
            job requirements.<sup>[100]</sup> Success spans diverse fields including STEM, arts, trades, and 
            business.<sup>[101]</sup> Strategic career choices and accommodations enable achievement.<sup>[102]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Personal Fulfillment</h3>
          <p className="mb-4">
            Beyond academic and career success, individuals with APD lead fulfilling lives with meaningful 
            relationships, hobbies, and contributions.<sup>[103]</sup> APD is one aspect of identity, not its 
            totality.<sup>[104]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Advocacy and Support Communities</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Connecting with Others</h3>
          <p className="mb-4">
            Finding others with similar experiences reduces isolation and provides practical insights.<sup>[105]</sup> 
            Online communities, support groups, and advocacy organizations offer connection and resources.<sup>[106]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Self-Advocacy</h3>
          <p className="mb-4">
            Learning to advocate effectively for accommodations and needs is empowering.<sup>[107]</sup> This 
            includes understanding rights, communicating needs clearly, and knowing what helps.<sup>[108]</sup> 
            Self-advocacy skills develop over time with practice.<sup>[109]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Raising Awareness</h3>
          <p className="mb-4">
            Individuals with APD and families can help educate others about the condition.<sup>[110]</sup> Raising 
            awareness in schools, workplaces, and communities improves understanding and support.<sup>[111]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Looking Forward: Hope and Progress</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Improving Understanding</h3>
          <p className="mb-4">
            Research continues advancing understanding of APD's neurological basis and effective interventions.<sup>[112]</sup> 
            Better assessment tools and evidence-based treatments are emerging.<sup>[113]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Technology Advances</h3>
          <p className="mb-4">
            Improving assistive technology—better speech-to-text, noise-canceling devices, and remote microphone 
            systems—supports individuals with APD.<sup>[114]</sup> Future innovations will likely provide even 
            more helpful tools.<sup>[115]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Growing Awareness</h3>
          <p className="mb-4">
            Increasing awareness of APD in educational and medical communities improves access to diagnosis and 
            support.<sup>[116]</sup> More professionals are trained in APD assessment and management.<sup>[117]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Individual Growth</h3>
          <p className="mb-4">
            Individuals continue developing compensation strategies throughout life.<sup>[118]</sup> What's 
            challenging at one age may become more manageable with maturity, experience, and effective strategies.<sup>[119]</sup> 
            Growth and adaptation are ongoing.<sup>[120]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Living Well with APD:</h3>
            <div className="text-sm">
              <p>
                Living with APD involves real challenges—communication difficulties, listening fatigue, social 
                complexities, and academic or workplace obstacles.<sup>[121]</sup> However, with understanding, 
                appropriate support, effective strategies, and playing to strengths, individuals with APD can 
                and do thrive.<sup>[122]</sup> Success requires acknowledging both challenges and abilities, 
                developing personalized accommodations, and building resilience.<sup>[123]</sup> APD is part 
                of the diverse spectrum of human neurology—different, but not deficient.<sup>[124]</sup> With 
                the right support and self-understanding, individuals with APD can lead fulfilling, successful 
                lives while navigating an auditory world in their own way.<sup>[125]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[2] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[3] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[4] Smoski, W. J., Brunt, M. A., & Tannahill, J. C. (1998). "Children's Auditory Performance Scale." <em>Educational Audiology Association</em>.</p>
          <p>[5] Anderson, K. L., & Smaldino, J. J. (2000). "Children's home inventory for listening difficulties (CHILD)." <em>Educational Audiology Review</em>, 17(3), 3-4.</p>
          <p>[6] Hind, S. (2006). "Survey of care pathway for auditory processing disorder." <em>Audiological Medicine</em>, 4(1), 12-24.</p>
          <p>[7] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[8] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[9] Hornsby, B. W., Naylor, G., & Bess, F. H. (2016). "A taxonomy of fatigue concepts and their relation to hearing loss." <em>Ear and Hearing</em>, 37, 136S-144S.</p>
          <p>[10] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[11] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[12] Bellis, T. J., & Ferre, J. M. (1999). "Multidimensional approach to the differential diagnosis of central auditory processing disorders in children." <em>Journal of the American Academy of Audiology</em>, 10(6), 319-328.</p>
          <p>[13] Smoski, W. J., Brunt, M. A., & Tannahill, J. C. (1998). "Children's Auditory Performance Scale." <em>Educational Audiology Association</em>.</p>
          <p>[14] Sharma, M., Purdy, S. C., & Kelly, A. S. (2009). "Comorbidity of auditory processing, language, and reading disorders." <em>Journal of Speech, Language, and Hearing Research</em>, 52(3), 706-722.</p>
          <p>[15] Crandell, C. C., & Smaldino, J. J. (2000). "Classroom acoustics for children with normal hearing and with hearing impairment." <em>Language, Speech, and Hearing Services in Schools</em>, 31(4), 362-370.</p>
          <p>[16] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[17] Sharma, M., Purdy, S. C., & Kelly, A. S. (2009). "Comorbidity of auditory processing, language, and reading disorders." <em>Journal of Speech, Language, and Hearing Research</em>, 52(3), 706-722.</p>
          <p>[18] Tallal, P. (1980). "Auditory temporal perception, phonics, and reading disabilities in children." <em>Brain and Language</em>, 9(2), 182-198.</p>
          <p>[19] Keith, R. W. (2000). "Development and standardization of SCAN-C Test for Auditory Processing Disorders in Children." <em>Journal of the American Academy of Audiology</em>, 11(8), 438-445.</p>
          <p>[20] Anderson, K. L., & Smaldino, J. J. (2000). "Children's home inventory for listening difficulties (CHILD)." <em>Educational Audiology Review</em>, 17(3), 3-4.</p>
          <p>[21] Dawes, P., Bishop, D. V., Sirimanna, T., & Bamiou, D. E. (2008). "Profile and aetiology of children diagnosed with auditory processing disorder (APD)." <em>International Journal of Pediatric Otorhinolaryngology</em>, 72(4), 483-489.</p>
          <p>[22] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[23] Dawes, P., Bishop, D. V., Sirimanna, T., & Bamiou, D. E. (2008). "Profile and aetiology of children diagnosed with auditory processing disorder (APD)." <em>International Journal of Pediatric Otorhinolaryngology</em>, 72(4), 483-489.</p>
          <p>[24] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[25] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[26] Anderson, K. L., & Smaldino, J. J. (2000). "Children's home inventory for listening difficulties (CHILD)." <em>Educational Audiology Review</em>, 17(3), 3-4.</p>
          <p>[27] Moore, D. R., Cowan, J. A., Riley, A., Edmondson-Jones, A. M., & Ferguson, M. A. (2011). "Development of auditory processing in 6- to 11-yr-old children." <em>Ear and Hearing</em>, 32(3), 269-285.</p>
          <p>[28] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[29] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[30] Smoski, W. J., Brunt, M. A., & Tannahill, J. C. (1998). "Children's Auditory Performance Scale." <em>Educational Audiology Association</em>.</p>
          <p>[31] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[32] Hind, S. (2006). "Survey of care pathway for auditory processing disorder." <em>Audiological Medicine</em>, 4(1), 12-24.</p>
          <p>[33] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[34] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[35] Anderson, K. L., & Smaldino, J. J. (2000). "Children's home inventory for listening difficulties (CHILD)." <em>Educational Audiology Review</em>, 17(3), 3-4.</p>
          <p>[36] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[37] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[38] Job Accommodation Network. (2021). "Accommodation and compliance: Auditory processing disorder." <em>JAN</em>.</p>
          <p>[39] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[40] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[41] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[42] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[43] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[44] Job Accommodation Network. (2021). "Accommodation and compliance: Auditory processing disorder." <em>JAN</em>.</p>
          <p>[45] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[46] Job Accommodation Network. (2021). "Accommodation and compliance: Auditory processing disorder." <em>JAN</em>.</p>
          <p>[47] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[48] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[49] Dawes, P., Bishop, D. V., Sirimanna, T., & Bamiou, D. E. (2008). "Profile and aetiology of children diagnosed with auditory processing disorder (APD)." <em>International Journal of Pediatric Otorhinolaryngology</em>, 72(4), 483-489.</p>
          <p>[50] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[51] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[52] Dawes, P., Bishop, D. V., Sirimanna, T., & Bamiou, D. E. (2008). "Profile and aetiology of children diagnosed with auditory processing disorder (APD)." <em>International Journal of Pediatric Otorhinolaryngology</em>, 72(4), 483-489.</p>
          <p>[53] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[54] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[55] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[56] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[57] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[58] Haft, S. L., Myers, C. A., & Hoeft, F. (2016). "Socio-emotional and cognitive resilience in children with reading disabilities." <em>Current Opinion in Behavioral Sciences</em>, 10, 133-141.</p>
          <p>[59] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[60] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[61] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[62] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[63] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[64] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[65] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[66] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[67] Hornsby, B. W., Naylor, G., & Bess, F. H. (2016). "A taxonomy of fatigue concepts and their relation to hearing loss." <em>Ear and Hearing</em>, 37, 136S-144S.</p>
          <p>[68] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[69] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[70] Kiewra, K. A. (2002). "How classroom teachers can help students learn and teach them how to learn." <em>Theory Into Practice</em>, 41(2), 71-80.</p>
          <p>[71] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[72] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[73] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[74] Mayer, R. E. (2009). <em>Multimedia learning</em> (2nd ed.). New York: Cambridge University Press.</p>
          <p>[75] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[76] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[77] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[78] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[79] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[80] Haft, S. L., Myers, C. A., & Hoeft, F. (2016). "Socio-emotional and cognitive resilience in children with reading disabilities." <em>Current Opinion in Behavioral Sciences</em>, 10, 133-141.</p>
          <p>[81] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[82] Friel-Patti, S. (1999). "Clinical decision-making in the assessment and intervention of central auditory processing disorders." <em>Language, Speech, and Hearing Services in Schools</em>, 30(4), 345-352.</p>
          <p>[83] Chermak, G. D., & Musiek, F. E. (2002). "Auditory training: Principles and approaches for remediating and managing auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 297-308.</p>
          <p>[84] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[85] Sharma, M., Purdy, S. C., & Kelly, A. S. (2009). "Comorbidity of auditory processing, language, and reading disorders." <em>Journal of Speech, Language, and Hearing Research</em>, 52(3), 706-722.</p>
          <p>[86] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[87] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[88] DeBonis, D. A., & Moncrieff, D. (2008). "Dichotic listening in children: Age-related changes in direction and magnitude of ear advantage." <em>Brain and Cognition</em>, 67(2), 191-197.</p>
          <p>[89] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[90] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[91] Bamiou, D. E., Musiek, F. E., & Luxon, L. M. (2001). "Aetiology and clinical presentations of auditory processing disorders—a review." <em>Archives of Disease in Childhood</em>, 85(5), 361-365.</p>
          <p>[92] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[93] Job Accommodation Network. (2021). "Accommodation and compliance: Auditory processing disorder." <em>JAN</em>.</p>
          <p>[94] Fuente, A., & McPherson, B. (2006). "Organic solvents and hearing loss: The challenge for audiology." <em>International Journal of Audiology</em>, 45(7), 367-381.</p>
          <p>[95] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[96] Peelle, J. E., & Wingfield, A. (2016). "The neural consequences of age-related hearing loss." <em>Trends in Neurosciences</em>, 39(7), 486-497.</p>
          <p>[97] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[98] Sireci, S. G., Scarpati, S. E., & Li, S. (2005). "Test accommodations for students with disabilities: An analysis of the interaction hypothesis." <em>Review of Educational Research</em>, 75(4), 457-490.</p>
          <p>[99] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[100] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[101] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[102] Job Accommodation Network. (2021). "Accommodation and compliance: Auditory processing disorder." <em>JAN</em>.</p>
          <p>[103] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[104] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[105] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[106] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[107] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[108] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[109] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[110] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[111] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[112] Moore, D. R., & Hunter, L. L. (2013). "Auditory processing disorder (APD) in children: A marker of neurodevelopmental syndrome." <em>Hearing, Balance and Communication</em>, 11(3), 160-167.</p>
          <p>[113] Sharma, M., Purdy, S. C., & Kelly, A. S. (2014). "The contribution of speech-evoked cortical auditory evoked potentials to the diagnosis and measurement of intervention outcomes in children with auditory processing disorder." <em>Seminars in Hearing</em>, 35(1), 51-64.</p>
          <p>[114] Schafer, E. C., & Thibodeau, L. M. (2006). "Speech recognition in noise in children with cochlear implants while listening in bilateral, bimodal, and FM-system arrangements." <em>American Journal of Audiology</em>, 15(2), 114-126.</p>
          <p>[115] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[116] Emanuel, D. C., Ficca, K. N., & Korczak, P. (2011). "Survey of the diagnosis and management of auditory processing disorder." <em>American Journal of Audiology</em>, 20(1), 48-60.</p>
          <p>[117] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[118] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[119] DeBonis, D. A., & Moncrieff, D. (2008). "Dichotic listening in children: Age-related changes in direction and magnitude of ear advantage." <em>Brain and Cognition</em>, 67(2), 191-197.</p>
          <p>[120] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[121] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[122] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[123] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[124] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[125] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
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
