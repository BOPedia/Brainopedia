import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';

interface ArticleDyspraxiaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleDyspraxia({ setCurrentArticle }: ArticleDyspraxiaProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview'
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics'
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins'
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing'
    },
    { 
      id: 'support', 
      title: 'Support & Management'
    },
    { 
      id: 'living', 
      title: 'Living with Dyspraxia'
    },
  ];

  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Dyspraxia (Developmental Coordination Disorder)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Dyspraxia</strong>, also known as <strong>Developmental Coordination Disorder (DCD)</strong>, 
            is a neurological condition that affects physical coordination and movement.<sup>[1]</sup> Individuals with dyspraxia 
            may appear clumsy or have difficulty with tasks requiring motor planning and coordination.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Dyspraxia (DCD)"
            data={[
              { label: 'Other names', value: 'Developmental Coordination Disorder (DCD), Motor Learning Difficulties' },
              { label: 'Specialty', value: 'Occupational therapy, Neurology, Pediatrics' },
              { label: 'Symptoms', value: 'Poor coordination, motor planning difficulties, clumsiness' },
              { label: 'Usual onset', value: 'Present from birth, noticed in early childhood' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: '5-6% of children' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1760530675678-4221135a2bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMG1vdG9yJTIwc2tpbGxzJTIwY29vcmRpbmF0aW9ufGVufDF8fHx8MTc2NzQwNzE3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Child developing motor skills and coordination"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Dyspraxia affects approximately 5-6% of children, with males being more commonly diagnosed than females, 
            though this may reflect diagnostic bias.<sup>[3]</sup> The condition involves difficulties with motor planning—the 
            process of planning and executing coordinated movements.<sup>[4]</sup> This affects not only physical activities but 
            can also impact speech, organization, and thought processes.<sup>[5]</sup>
          </p>
          
          <p className="mb-4">
            The term "dyspraxia" comes from the Greek 
            "dys" (difficulty) and "praxis" (action or movement).<sup>[6]</sup> The condition is present from birth and persists 
            throughout life, though individuals often develop coping strategies and their symptoms may become less 
            apparent over time.<sup>[7]</sup> Dyspraxia often co-occurs with other neurodevelopmental conditions such as ADHD, 
            dyslexia, and autism spectrum disorder.<sup>[8]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1763468839619-45036f744d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwbW90b3IlMjBza2lsbHMlMjBoYW5kd3JpdGluZ3xlbnwxfHx8fDE3Njc0MDcxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fine motor skills and handwriting challenges"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Dyspraxia is characterized by motor coordination difficulties including poor balance and coordination, 
            difficulty with activities like catching a ball, riding a bike, or tying shoelaces, awkward or unusual gait, 
            difficulty with fine motor tasks (handwriting, using utensils, buttoning), poor body awareness and spatial 
            orientation, and tendency to bump into things or drop objects.<sup>[9][10]</sup>
          </p>
          
          <p className="mb-4">
            Some individuals also experience verbal dyspraxia 
            (apraxia of speech), which causes difficulty coordinating movements needed for speech.<sup>[11]</sup> Cognitive and perceptual 
            differences may include challenges with organization and planning, time management, short-term memory, following 
            multi-step instructions, and visual-spatial perception.<sup>[12][13]</sup> Many individuals with dyspraxia demonstrate strengths in 
            verbal skills, creativity, empathy, and strategic thinking.<sup>[14]</sup> Additional characteristics can include sensitivity to 
            sensory input, fatigue from the extra effort required for motor tasks, and emotional impacts such as frustration 
            or lowered self-esteem.<sup>[15]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1714939722610-9169e8883bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG1vdG9yJTIwY29ydGV4JTIwY2VyZWJlbGx1bXxlbnwxfHx8fDE3Njc0MDcxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain motor cortex and cerebellum - neurological basis of dyspraxia"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Research suggests that dyspraxia results from differences in how the brain processes information required 
            for movement planning and coordination.<sup>[16]</sup> Brain imaging studies have shown differences in areas involved in 
            motor control, including the cerebellum, basal ganglia, and motor cortex.<sup>[17][18]</sup> These neurological differences 
            affect the brain's ability to plan and execute coordinated movements effectively.<sup>[19]</sup>
          </p>
          
          <p className="mb-4">
            While the exact causes are 
            not fully understood, dyspraxia is thought to have a neurological basis that is present from birth, with 
            possible genetic and developmental factors contributing to its development.<sup>[20]</sup> Research suggests disruptions 
            in neural pathways during brain development may affect the maturation of motor control systems.<sup>[21]</sup> The condition 
            appears to run in families, suggesting a genetic component, though no specific genes have been definitively 
            identified.<sup>[22]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1709127347884-a106974ef58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2N1cGF0aW9uYWwlMjB0aGVyYXB5JTIwYXNzZXNzbWVudCUyMGNoaWxkfGVufDF8fHx8MTc2NzQwNzE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Occupational therapy assessment for dyspraxia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Dyspraxia is diagnosed through comprehensive assessment by healthcare professionals such as occupational 
            therapists, physiotherapists, or developmental pediatricians.<sup>[23]</sup> The evaluation includes detailed developmental 
            and medical history, standardized motor assessment tests, observation of movement and coordination, fine and 
            gross motor skills evaluation, assessment of sensory processing, cognitive and perceptual testing, and screening 
            for co-occurring conditions.<sup>[24][25]</sup>
          </p>
          
          <p className="mb-4">
            For a diagnosis of DCD, motor coordination difficulties must significantly interfere 
            with daily activities or academic performance, and cannot be better explained by another medical condition or 
            intellectual disability.<sup>[26]</sup> Dyspraxia is often identified in early childhood, though some individuals may not receive 
            a diagnosis until later.<sup>[27]</sup> Common assessment tools include the Movement Assessment Battery for Children (MABC-2), 
            Bruininks-Oseretsky Test of Motor Proficiency (BOT-2), and clinical observations of functional motor skills.<sup>[28]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1561577732-4aaa488cd807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxhbmNlJTIwY29vcmRpbmF0aW9uJTIwZXhlcmNpc2UlMjB0aGVyYXB5fGVufDF8fHx8MTc2NzQwNzE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Balance and coordination therapy exercises"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Support for dyspraxia includes occupational and physical therapy with motor skills training, balance and 
            coordination exercises, fine motor activities, sensory integration therapy, and task-specific training for 
            daily activities.<sup>[29][30]</sup> Educational support includes extra time for written work, use of computers or tablets for 
            writing, modified physical education activities, organizational supports (visual schedules, checklists), and 
            simplified instructions.<sup>[31]</sup>
          </p>
          
          <p className="mb-4">
            Daily living strategies include using Velcro or elastic laces, organizing spaces to 
            reduce clutter and obstacles, breaking tasks into smaller steps, regular exercise to improve coordination, and 
            activities that build confidence such as swimming or martial arts.<sup>[32]</sup> Emotional and social support includes building 
            self-esteem through areas of strength, counseling when needed, and education about dyspraxia for family and peers.<sup>[33]</sup> 
            Technology aids such as speech-to-text software, typing instead of handwriting, and organizational apps can also 
            provide significant support.<sup>[34]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Dyspraxia</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1760530675678-4221135a2bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMG1vdG9yJTIwc2tpbGxzJTIwY29vcmRpbmF0aW9ufGVufDF8fHx8MTc2NzQwNzE3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Living with dyspraxia - developing coordination skills"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with dyspraxia lead successful and fulfilling lives across all areas of society.<sup>[35]</sup> With appropriate 
            support and accommodations, people with dyspraxia can be successful in education, careers, and personal life.<sup>[36]</sup> 
            Many individuals with dyspraxia demonstrate strengths in verbal skills, creativity, empathy, and strategic thinking 
            that contribute to success in various fields.<sup>[37]</sup>
          </p>
          
          <p className="mb-4">
            Living well with dyspraxia involves understanding one's motor profile, 
            developing personalized strategies and compensatory techniques, accessing appropriate accommodations in education 
            and employment, and building confidence through areas of strength.<sup>[38]</sup> Topics related to living with dyspraxia include 
            recognizing strengths beyond physical coordination, navigating academic and professional environments, developing 
            self-advocacy skills, connecting with support groups and communities, and understanding legal protections for 
            educational and workplace accommodations.<sup>[39]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
          <p>[2] Blank, R., Barnett, A. L., Cairney, J., et al. (2019). "International clinical practice recommendations on the definition, diagnosis, assessment, intervention, and psychosocial aspects of developmental coordination disorder." <em>Developmental Medicine & Child Neurology</em>, 61(3), 242-285.</p>
          <p>[3] Lingam, R., Hunt, L., Golding, J., Jongmans, M., & Emond, A. (2009). "Prevalence of developmental coordination disorder using the DSM-IV at 7 years of age: A UK population-based study." <em>Pediatrics</em>, 123(4), e693-e700.</p>
          <p>[4] Wilson, P. H., Ruddock, S., Smits-Engelsman, B., Polatajko, H., & Blank, R. (2013). "Understanding performance deficits in developmental coordination disorder: A meta-analysis of recent research." <em>Developmental Medicine & Child Neurology</em>, 55(3), 217-228.</p>
          <p>[5] Kirby, A., Sugden, D., Beveridge, S., & Edwards, L. (2008). "Developmental co-ordination disorder (DCD) in adolescents and adults in further and higher education." <em>Journal of Research in Special Educational Needs</em>, 8(3), 120-131.</p>
          <p>[6] Missiuna, C., Rivard, L., & Pollock, N. (2011). "Developmental coordination disorder." <em>Handbook of DSM-5 Disorders in Children and Adolescents</em>, 299-316.</p>
          <p>[7] Cantell, M. H., Smyth, M. M., & Ahonen, T. P. (2003). "Two distinct pathways for developmental coordination disorder: Persistence and resolution." <em>Human Movement Science</em>, 22(4-5), 413-431.</p>
          <p>[8] Kaplan, B. J., Wilson, B. N., Dewey, D., & Crawford, S. G. (1998). "DCD may not be a discrete disorder." <em>Human Movement Science</em>, 17(4-5), 471-490.</p>
          <p>[9] Wilmut, K., Wann, J. P., & Brown, J. H. (2006). "Problems in the coupling of eye and hand in the sequential movements of children with Developmental Coordination Disorder." <em>Child: Care, Health and Development</em>, 32(6), 665-678.</p>
          <p>[10] Zwicker, J. G., Missiuna, C., Harris, S. R., & Boyd, L. A. (2012). "Developmental coordination disorder: A review and update." <em>European Journal of Paediatric Neurology</em>, 16(6), 573-581.</p>
          <p>[11] Stackhouse, J., & Wells, B. (1997). <em>Children's speech and literacy difficulties: A psycholinguistic framework</em>. London: Whurr Publishers.</p>
          <p>[12] Alloway, T. P. (2007). "Working memory, reading, and mathematical skills in children with developmental coordination disorder." <em>Journal of Experimental Child Psychology</em>, 96(1), 20-36.</p>
          <p>[13] Piek, J. P., Dyck, M. J., Francis, M., & Conwell, A. (2007). "Working memory, processing speed, and set-shifting in children with developmental coordination disorder and attention-deficit-hyperactivity disorder." <em>Developmental Medicine & Child Neurology</em>, 49(9), 678-683.</p>
          <p>[14] Kirby, A., Edwards, L., & Sugden, D. (2011). "Emerging adulthood in developmental co-ordination disorder: Parent and young adult perspectives." <em>Research in Developmental Disabilities</em>, 32(4), 1351-1360.</p>
          <p>[15] Barnett, A. L. (2008). "Motor assessment in developmental coordination disorder: From identification to intervention." <em>International Journal of Disability, Development and Education</em>, 55(2), 113-129.</p>
          <p>[16] Zwicker, J. G., Missiuna, C., Harris, S. R., & Boyd, L. A. (2011). "Brain activation of children with developmental coordination disorder is different than peers." <em>Pediatrics</em>, 126(3), e678-e686.</p>
          <p>[17] Langevin, L. M., MacMaster, F. P., Crawford, S., Lebel, C., & Dewey, D. (2014). "Common white matter microstructure alterations in pediatric motor and attention disorders." <em>Journal of Pediatrics</em>, 164(5), 1157-1164.</p>
          <p>[18] Debrabant, J., Gheysen, F., Caeyenberghs, K., Van Waelvelde, H., & Vingerhoets, G. (2013). "Neural underpinnings of impaired predictive motor timing in children with Developmental Coordination Disorder." <em>Research in Developmental Disabilities</em>, 34(5), 1478-1487.</p>
          <p>[19] Biotteau, M., Chaix, Y., & Albaret, J. M. (2016). "What do we really know about motor learning in children with developmental coordination disorder?" <em>Current Developmental Disorders Reports</em>, 3(2), 152-160.</p>
          <p>[20] Visser, J. (2003). "Developmental coordination disorder: A review of research on subtypes and comorbidities." <em>Human Movement Science</em>, 22(4-5), 479-493.</p>
          <p>[21] Licari, M. K., Billington, J., Reid, S. L., et al. (2015). "Cortical functioning in children with developmental coordination disorder: A motor overflow study." <em>Experimental Brain Research</em>, 233(6), 1703-1710.</p>
          <p>[22] Martin, N. C., Piek, J. P., & Hay, D. (2006). "DCD and ADHD: A genetic study of their shared aetiology." <em>Human Movement Science</em>, 25(1), 110-124.</p>
          <p>[23] Henderson, S. E., Sugden, D. A., & Barnett, A. L. (2007). <em>Movement Assessment Battery for Children-2 (MABC-2)</em>. London: Pearson.</p>
          <p>[24] Bruininks, R. H., & Bruininks, B. D. (2005). <em>Bruininks-Oseretsky Test of Motor Proficiency</em> (2nd ed.). Minneapolis, MN: Pearson Assessment.</p>
          <p>[25] Crawford, S. G., Wilson, B. N., & Dewey, D. (2001). "Identifying developmental coordination disorder: Consistency between tests." <em>Physical & Occupational Therapy in Pediatrics</em>, 20(2-3), 29-50.</p>
          <p>[26] World Health Organization. (2018). <em>International classification of diseases for mortality and morbidity statistics</em> (11th ed.). Geneva: WHO.</p>
          <p>[27] Cousins, M., & Smyth, M. M. (2003). "Developmental coordination impairments in adulthood." <em>Human Movement Science</em>, 22(4-5), 433-459.</p>
          <p>[28] Smits-Engelsman, B. C., Fiers, M. J., Henderson, S. E., & Henderson, L. (2008). "Interrater reliability of the Movement Assessment Battery for Children." <em>Physical Therapy</em>, 88(2), 286-294.</p>
          <p>[29] Sugden, D. A., & Chambers, M. E. (2005). "Intervention in children with developmental coordination disorder: The role of parents and teachers." <em>British Journal of Educational Psychology</em>, 75(2), 281-300.</p>
          <p>[30] Smits-Engelsman, B. C., Blank, R., van der Kaay, A. C., et al. (2013). "Efficacy of interventions to improve motor performance in children with developmental coordination disorder: A combined systematic review and meta-analysis." <em>Developmental Medicine & Child Neurology</em>, 55(3), 229-237.</p>
          <p>[31] Polatajko, H. J., & Cantin, N. (2005). "Developmental coordination disorder (dyspraxia): An overview of the state of the art." <em>Seminars in Pediatric Neurology</em>, 12(4), 250-258.</p>
          <p>[32] Miyahara, M., & Register, C. (2000). "Perceptions of three terms to describe physical awkwardness in children." <em>Research in Developmental Disabilities</em>, 21(5), 367-376.</p>
          <p>[33] Piek, J. P., Barrett, N. C., Smith, L. M., Rigoli, D., & Gasson, N. (2010). "Do motor skills in infancy and early childhood predict anxious and depressive symptomatology at school age?" <em>Human Movement Science</em>, 29(5), 777-786.</p>
          <p>[34] Feder, K. P., & Majnemer, A. (2007). "Handwriting development, competency, and intervention." <em>Developmental Medicine & Child Neurology</em>, 49(4), 312-317.</p>
          <p>[35] Kirby, A., Williams, N., Thomas, M., & Hill, E. L. (2013). "Self-reported mood, general health, wellbeing and employment status in adults with suspected DCD." <em>Research in Developmental Disabilities</em>, 34(4), 1357-1364.</p>
          <p>[36] Tal-Saban, M., Ornoy, A., & Parush, S. (2014). "Young adults with developmental coordination disorder: A longitudinal study." <em>American Journal of Occupational Therapy</em>, 68(3), 307-316.</p>
          <p>[37] Hill, E. L., & Brown, D. (2013). "Mood impairments in adults previously diagnosed with developmental coordination disorder." <em>Journal of Mental Health</em>, 22(4), 334-340.</p>
          <p>[38] Missiuna, C., Moll, S., King, S., King, G., & Law, M. (2007). "A trajectory of troubles: Parents' impressions of the impact of developmental coordination disorder." <em>Physical & Occupational Therapy in Pediatrics</em>, 27(1), 81-101.</p>
          <p>[39] Summers, J., Larkin, D., & Dewey, D. (2008). "Activities of daily living in children with developmental coordination disorder: Dressing, personal hygiene, and eating skills." <em>Human Movement Science</em>, 27(2), 215-229.</p>
        </div>
      </section>
    </article>
  );
}