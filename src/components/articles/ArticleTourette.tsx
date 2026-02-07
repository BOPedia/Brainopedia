import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';

interface ArticleTouretteProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleTourette({ setCurrentArticle }: ArticleTouretteProps) {
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
      title: 'Living with Tourette Syndrome'
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
        Tourette Syndrome
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Tourette syndrome (TS)</strong> is a neurodevelopmental disorder characterized by repetitive, 
            involuntary movements and vocalizations called tics.<sup>[1]</sup> Named after French physician Georges Gilles de 
            la Tourette who first described the condition in 1885, Tourette syndrome typically begins in childhood 
            and varies in severity from person to person.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Tourette Syndrome"
            data={[
              { label: 'Other names', value: 'Tourette disorder, TS, Gilles de la Tourette syndrome' },
              { label: 'Specialty', value: 'Neurology, Psychiatry' },
              { label: 'Symptoms', value: 'Motor and vocal tics' },
              { label: 'Usual onset', value: 'Ages 5-10' },
              { label: 'Duration', value: 'Often lifelong, may improve in adulthood' },
              { label: 'Frequency', value: '1 in 160 children' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1604159342320-f7f24c260691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMG5ldXJvbG9naWNhbCUyMG1vdmVtZW50JTIwdGljc3xlbnwxfHx8fDE3Njc0MDc0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Child with neurological condition - understanding Tourette syndrome"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Tourette syndrome affects approximately 1 in 160 children, with males being diagnosed about 3-4 times 
            more frequently than females.<sup>[3]</sup> The condition is part of a spectrum of tic disorders and typically begins 
            between ages 5 and 10, with tics often peaking in severity during early adolescence.<sup>[4]</sup> Tics are sudden, 
            rapid, recurrent movements or vocalizations.<sup>[5]</sup>
          </p>
          
          <p className="mb-4">
            While individuals with TS have some degree of control over 
            their tics, suppressing them requires effort and can cause discomfort or a feeling of tension that is 
            only relieved when the tic is performed.<sup>[6]</sup> Many people describe a premonitory urge—an uncomfortable 
            sensation that precedes the tic.<sup>[7]</sup> It's important to note that the common media portrayal of TS focusing 
            on coprolalia (involuntary swearing) is misleading—only about 10-15% of people with TS experience this 
            symptom.<sup>[8]</sup> Most individuals with TS have much more subtle tics that may go unnoticed by others.<sup>[9]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1727386245205-2112b722af99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjBleHByZXNzaW9uJTIwaW52b2x1bnRhcnklMjBtb3ZlbWVudHxlbnwxfHx8fDE3Njc0MDc0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Facial expressions and movements - characteristics of tics"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Tourette syndrome is characterized by both motor and vocal tics.<sup>[10]</sup> Motor tics can be simple (eye blinking, 
            head jerking, shoulder shrugging, facial grimacing, nose twitching, jaw movements) or complex (touching 
            objects or people, jumping, hopping, twirling, spinning, making gestures, bending or gyrating).<sup>[11]</sup> Vocal 
            (phonic) tics can also be simple (throat clearing, coughing, grunting, sniffing, barking, yelping, 
            clicking sounds) or complex (repeating words or phrases echolalia, repeating one's own words palilalia, 
            using socially inappropriate words coprolalia which affects only 10-15%, making animal sounds).<sup>[12][13]</sup>
          </p>
          
          <p className="mb-4">
            Tics wax 
            and wane in frequency and severity, can change type and location over time, may worsen with stress, 
            excitement, or fatigue, often decrease during focused activities, can typically be temporarily suppressed 
            with effort, and typically decrease during sleep.<sup>[14]</sup> Many individuals with TS also have co-occurring conditions 
            such as ADHD (50-60%), OCD (30-40%), anxiety disorders, or learning differences, which often cause more 
            functional impairment than the tics themselves.<sup>[15][16]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1714939722610-9169e8883bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMGJhc2FsJTIwZ2FuZ2xpYSUyMG1vdG9yJTIwY29udHJvbHxlbnwxfHx8fDE3Njc0MDc0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain basal ganglia - neurological basis of Tourette syndrome"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Tourette syndrome has a strong genetic component, with studies showing increased risk in family members of 
            individuals with TS.<sup>[17][18]</sup> However, the genetics are complex, likely involving multiple genes interacting with 
            environmental factors.<sup>[19]</sup> Neurologically, TS involves differences in brain circuits connecting the basal ganglia, 
            thalamus, and frontal cortex—areas involved in movement control and habit formation.<sup>[20]</sup>
          </p>
          
          <p className="mb-4">
            Research suggests 
            differences in neurotransmitter systems, particularly dopamine, serotonin, and GABA.<sup>[21][22]</sup> Brain imaging studies 
            have revealed structural and functional differences in people with TS, particularly in the circuits that regulate 
            voluntary movements and inhibit unwanted actions.<sup>[23]</sup> These neurological differences help explain why individuals 
            with TS experience difficulty suppressing tics and experience premonitory urges.<sup>[24]</sup> Environmental factors such 
            as prenatal complications and autoimmune responses may also contribute to tic expression.<sup>[25]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1659353886114-9aa119aef5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyb2xvZ2lzdCUyMGRvY3RvciUyMGV4YW1pbmF0aW9uJTIwYXNzZXNzbWVudHxlbnwxfHx8fDE3Njc0MDc0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Neurologist examination - diagnosing Tourette syndrome"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Tourette syndrome is diagnosed clinically based on the presence of both motor and vocal tics lasting more than 
            one year.<sup>[26]</sup> There is no blood test or imaging study that can diagnose TS.<sup>[27]</sup> The diagnostic criteria include both 
            multiple motor tics and one or more vocal tics present at some point, tics occurring many times a day nearly 
            every day or intermittently for more than one year, onset before age 18, and symptoms not caused by substance 
            use or another medical condition.<sup>[28]</sup>
          </p>
          
          <p className="mb-4">
            Diagnosis is typically made by a neurologist, psychiatrist, or developmental 
            pediatrician.<sup>[29]</sup> The evaluation includes detailed history, neurological examination, and assessment for co-occurring 
            conditions such as ADHD, OCD, anxiety, or learning differences.<sup>[30]</sup> Medical tests may be ordered to rule out other 
            causes of tic-like movements.<sup>[31]</sup> The Yale Global Tic Severity Scale (YGTSS) is commonly used to assess tic 
            severity and impact on functioning.<sup>[32]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1620924701256-1c6f1103ebdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwYmVoYXZpb3JhbCUyMGludGVydmVudGlvbiUyMHN1cHBvcnR8ZW58MXx8fHwxNzY3NDA3NDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Behavioral therapy and support - managing Tourette syndrome"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Many individuals with mild TS do not require treatment.<sup>[33]</sup> When intervention is needed, treatment decisions should 
            be based on how much the tics interfere with daily functioning, not just their presence or severity.<sup>[34]</sup> Behavioral 
            therapies include Comprehensive Behavioral Intervention for Tics (CBIT), Habit Reversal Training (HRT), Exposure 
            and Response Prevention (ERP), psychoeducation about tics, and relaxation and stress management techniques.<sup>[35][36]</sup>
          </p>
          
          <p className="mb-4">
            When 
            behavioral approaches are insufficient, medication may be considered to help reduce tic severity, though all have 
            potential side effects and treatment should be individualized and carefully monitored.<sup>[37]</sup> Supporting co-occurring 
            conditions is crucial and includes treatment for ADHD if present, management of OCD symptoms, therapy for anxiety 
            or mood disorders, and educational support and accommodations.<sup>[38]</sup> Environmental and social support involves education 
            for family, teachers, and peers about TS, reducing stigma and misconceptions, school accommodations (extended time, 
            quiet space for tic release), support groups and community connection, and advocacy and self-advocacy skills.<sup>[39]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Tourette Syndrome</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1604159342320-f7f24c260691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMG5ldXJvbG9naWNhbCUyMG1vdmVtZW50JTIwdGljc3xlbnwxfHx8fDE3Njc0MDc0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Living with Tourette syndrome - successful navigation"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with Tourette syndrome lead successful and fulfilling lives across all areas of society.<sup>[40]</sup> For many 
            individuals, tics improve significantly in late adolescence or early adulthood, though some continue to experience 
            tics throughout life.<sup>[41]</sup> Living with TS involves navigating tics, premonitory urges, and often co-occurring conditions, 
            while combating misconceptions and stigma.<sup>[42]</sup> With appropriate support and understanding, people with TS develop effective 
            strategies for managing tics and thrive in education, careers, and relationships.<sup>[43]</sup>
          </p>
          
          <p className="mb-4">
            Living well with Tourette syndrome 
            involves understanding one's tic patterns and triggers, developing strategies for managing tics and premonitory urges, 
            accessing appropriate accommodations in education and employment, addressing co-occurring conditions, and building 
            self-advocacy skills.<sup>[44]</sup> Topics related to living with Tourette syndrome include managing tics in different environments, 
            addressing stigma and misconceptions (particularly around coprolalia which only affects 10-15%), navigating school and 
            workplace accommodations, managing co-occurring conditions like ADHD and OCD, building self-esteem and confidence, 
            connecting with the Tourette community, educating others about the reality of TS beyond media portrayals, and 
            understanding that tics often improve in adulthood.<sup>[45]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
          <p>[2] Leckman, J. F. (2002). "Tourette's syndrome." <em>The Lancet</em>, 360(9345), 1577-1586.</p>
          <p>[3] Knight, T., Steeves, T., Day, L., Lowerison, M., Jette, N., & Pringsheim, T. (2012). "Prevalence of tic disorders: A systematic review and meta-analysis." <em>Pediatric Neurology</em>, 47(2), 77-90.</p>
          <p>[4] Bloch, M. H., & Leckman, J. F. (2009). "Clinical course of Tourette syndrome." <em>Journal of Psychosomatic Research</em>, 67(6), 497-501.</p>
          <p>[5] Jankovic, J. (2001). "Tourette's syndrome." <em>New England Journal of Medicine</em>, 345(16), 1184-1192.</p>
          <p>[6] Leckman, J. F., Walker, D. E., & Cohen, D. J. (1993). "Premonitory urges in Tourette's syndrome." <em>American Journal of Psychiatry</em>, 150(1), 98-102.</p>
          <p>[7] Kwak, C., Dat Vuong, K., & Jankovic, J. (2003). "Premonitory sensory phenomenon in Tourette's syndrome." <em>Movement Disorders</em>, 18(12), 1530-1533.</p>
          <p>[8] Freeman, R. D., Fast, D. K., Burd, L., Kerbeshian, J., Robertson, M. M., & Sandor, P. (2000). "An international perspective on Tourette syndrome: Selected findings from 3,500 individuals in 22 countries." <em>Developmental Medicine & Child Neurology</em>, 42(7), 436-447.</p>
          <p>[9] Cath, D. C., Hedderly, T., Ludolph, A. G., et al. (2011). "European clinical guidelines for Tourette syndrome and other tic disorders. Part I: Assessment." <em>European Child & Adolescent Psychiatry</em>, 20(4), 155-171.</p>
          <p>[10] Leckman, J. F., King, R. A., & Bloch, M. H. (2014). "Clinical features of Tourette syndrome and tic disorders." <em>Journal of Obsessive-Compulsive and Related Disorders</em>, 3(4), 372-379.</p>
          <p>[11] Jankovic, J., & Kurlan, R. (2011). "Tourette syndrome: Evolving concepts." <em>Movement Disorders</em>, 26(6), 1149-1156.</p>
          <p>[12] Robertson, M. M. (2000). "Tourette syndrome, associated conditions and the complexities of treatment." <em>Brain</em>, 123(3), 425-462.</p>
          <p>[13] Van Borsel, J., & Tetnowski, J. A. (2007). "Fluency disorders in genetic syndromes." <em>Journal of Fluency Disorders</em>, 32(4), 279-296.</p>
          <p>[14] Conelea, C. A., & Woods, D. W. (2008). "The influence of contextual factors on tic expression in Tourette's syndrome: A review." <em>Journal of Psychosomatic Research</em>, 65(5), 487-496.</p>
          <p>[15] Hirschtritt, M. E., Lee, P. C., Pauls, D. L., et al. (2015). "Lifetime prevalence, age of risk, and genetic relationships of comorbid psychiatric disorders in Tourette syndrome." <em>JAMA Psychiatry</em>, 72(4), 325-333.</p>
          <p>[16] Robertson, M. M., Eapen, V., & Cavanna, A. E. (2009). "The international prevalence, epidemiology, and clinical phenomenology of Tourette syndrome: A cross-cultural perspective." <em>Journal of Psychosomatic Research</em>, 67(6), 475-483.</p>
          <p>[17] O'Rourke, J. A., Scharf, J. M., Yu, D., & Pauls, D. L. (2009). "The genetics of Tourette syndrome: A review." <em>Journal of Psychosomatic Research</em>, 67(6), 533-545.</p>
          <p>[18] Pauls, D. L., Fernandez, T. V., Mathews, C. A., State, M. W., & Scharf, J. M. (2014). "The inheritance of Tourette disorder: A review." <em>Journal of Obsessive-Compulsive and Related Disorders</em>, 3(4), 380-385.</p>
          <p>[19] Mataix-Cols, D., Isomura, K., Pérez-Vigil, A., et al. (2015). "Familial risks of Tourette syndrome and chronic tic disorders: A population-based cohort study." <em>JAMA Psychiatry</em>, 72(8), 787-793.</p>
          <p>[20] Mink, J. W. (2001). "Basal ganglia dysfunction in Tourette's syndrome: A new hypothesis." <em>Pediatric Neurology</em>, 25(3), 190-198.</p>
          <p>[21] Singer, H. S., & Minzer, K. (2003). "Neurobiology of Tourette's syndrome: Concepts of neuroanatomic localization and neurochemical abnormalities." <em>Brain and Development</em>, 25, S70-S84.</p>
          <p>[22] Buse, J., Schoenefeld, K., Münchau, A., & Roessner, V. (2013). "Neuromodulation in Tourette syndrome: Dopamine and beyond." <em>Neuroscience & Biobehavioral Reviews</em>, 37(6), 1069-1084.</p>
          <p>[23] Peterson, B. S., Thomas, P., Kane, M. J., et al. (2003). "Basal ganglia volumes in patients with Gilles de la Tourette syndrome." <em>Archives of General Psychiatry</em>, 60(4), 415-424.</p>
          <p>[24] Jackson, G. M., Draper, A., Dyke, K., Pépés, S. E., & Jackson, S. R. (2015). "Inhibition, disinhibition, and the control of action in Tourette syndrome." <em>Trends in Cognitive Sciences</em>, 19(11), 655-665.</p>
          <p>[25] Martino, D., Zis, P., & Buttiglione, M. (2015). "The role of immune mechanisms in Tourette syndrome." <em>Brain Research</em>, 1617, 126-143.</p>
          <p>[26] World Health Organization. (2018). <em>International classification of diseases for mortality and morbidity statistics</em> (11th ed.). Geneva: WHO.</p>
          <p>[27] Singer, H. S. (2005). "Tourette's syndrome: From behaviour to biology." <em>The Lancet Neurology</em>, 4(3), 149-159.</p>
          <p>[28] Roessner, V., Plessen, K. J., Rothenberger, A., et al. (2011). "European clinical guidelines for Tourette syndrome and other tic disorders. Part II: Pharmacological treatment." <em>European Child & Adolescent Psychiatry</em>, 20(4), 173-196.</p>
          <p>[29] Scahill, L., Specht, M., & Page, C. (2014). "The prevalence of tic disorders and clinical characteristics in children." <em>Journal of Obsessive-Compulsive and Related Disorders</em>, 3(4), 394-400.</p>
          <p>[30] Eddy, C. M., Rizzo, R., & Cavanna, A. E. (2009). "Neuropsychological aspects of Tourette syndrome: A review." <em>Journal of Psychosomatic Research</em>, 67(6), 503-513.</p>
          <p>[31] Müller-Vahl, K. R., Sambrani, T., & Jakubovski, E. (2019). "Tic disorders revisited: Introduction of the term 'tic spectrum disorders'." <em>European Child & Adolescent Psychiatry</em>, 28(8), 1129-1135.</p>
          <p>[32] Leckman, J. F., Riddle, M. A., Hardin, M. T., et al. (1989). "The Yale Global Tic Severity Scale: Initial testing of a clinician-rated scale of tic severity." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 28(4), 566-573.</p>
          <p>[33] Pringsheim, T., Okun, M. S., Müller-Vahl, K., et al. (2019). "Practice guideline recommendations summary: Treatment of tics in people with Tourette syndrome and chronic tic disorders." <em>Neurology</em>, 92(19), 896-906.</p>
          <p>[34] Verdellen, C., van de Griendt, J., Hartmann, A., & Murphy, T. (2011). "European clinical guidelines for Tourette syndrome and other tic disorders. Part III: Behavioural and psychosocial interventions." <em>European Child & Adolescent Psychiatry</em>, 20(4), 197-207.</p>
          <p>[35] Piacentini, J., Woods, D. W., Scahill, L., et al. (2010). "Behavior therapy for children with Tourette disorder: A randomized controlled trial." <em>JAMA</em>, 303(19), 1929-1937.</p>
          <p>[36] Wilhelm, S., Peterson, A. L., Piacentini, J., et al. (2012). "Randomized trial of behavior therapy for adults with Tourette syndrome." <em>Archives of General Psychiatry</em>, 69(8), 795-803.</p>
          <p>[37] Pringsheim, T., Holler-Managan, Y., Okun, M. S., et al. (2019). "Comprehensive systematic review summary: Treatment of tics in people with Tourette syndrome and chronic tic disorders." <em>Neurology</em>, 92(19), 907-915.</p>
          <p>[38] Rizzo, R., Gulisano, M., Martino, D., & Robertson, M. M. (2017). "Gilles de la Tourette syndrome, depression, depressive illness, and correlates in a child and adolescent population." <em>Journal of Child and Adolescent Psychopharmacology</em>, 27(3), 243-249.</p>
          <p>[39] Conelea, C. A., Brandt, B. C., & Woods, D. W. (2011). "The impact of a stress induction task on tic frequencies in youth with Tourette syndrome." <em>Behaviour Research and Therapy</em>, 49(8), 492-497.</p>
          <p>[40] Burd, L., Kerbeshian, P. J., Barth, A., Klug, M. G., Avery, P. K., & Benz, B. (2001). "Long-term follow-up of an epidemiologically defined cohort of patients with Tourette syndrome." <em>Journal of Child Neurology</em>, 16(6), 431-437.</p>
          <p>[41] Groth, C., Mol Debes, N., Rask, C. U., Lange, T., & Skov, L. (2017). "Course of Tourette syndrome and comorbidities in a large prospective clinical study." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 56(4), 304-312.</p>
          <p>[42] Conelea, C. A., Woods, D. W., Zinner, S. H., et al. (2011). "Exploring the impact of chronic tic disorders on youth: Results from the Tourette Syndrome Impact Survey." <em>Child Psychiatry & Human Development</em>, 42(2), 219-242.</p>
          <p>[43] Elstner, K., Selai, C. E., Trimble, M. R., & Robertson, M. M. (2001). "Quality of life (QOL) of patients with Gilles de la Tourette's syndrome." <em>Acta Psychiatrica Scandinavica</em>, 103(1), 52-59.</p>
          <p>[44] Storch, E. A., Murphy, T. K., Geffken, G. R., et al. (2005). "Reliability and validity of the Yale Global Tic Severity Scale." <em>Psychological Assessment</em>, 17(4), 486-491.</p>
          <p>[45] Cutler, D., Murphy, T., Gilmour, J., & Heyman, I. (2009). "The quality of life of young people with Tourette syndrome." <em>Child: Care, Health and Development</em>, 35(4), 496-504.</p>
        </div>
      </section>
    </article>
  );
}