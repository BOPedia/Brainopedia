import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';

interface ArticleBipolarProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleBipolar({ setCurrentArticle }: ArticleBipolarProps) {
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
      title: 'Living with Bipolar Disorder'
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
        Bipolar Disorder
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Bipolar disorder</strong> is a neurological condition characterized by significant shifts 
            in mood, energy, and activity levels.<sup>[1]</sup> Increasingly viewed through a neurodivergent lens, bipolar 
            disorder represents a distinct pattern of energy cycles, creativity, and emotional intensity rooted 
            in brain chemistry and neural processing differences.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Bipolar Disorder"
            data={[
              { label: 'Other names', value: 'Manic-depressive illness' },
              { label: 'Specialty', value: 'Psychiatry, Psychology' },
              { label: 'Symptoms', value: 'Mood shifts, energy cycles, varying activity levels' },
              { label: 'Usual onset', value: 'Late teens to early adulthood' },
              { label: 'Duration', value: 'Lifelong neurotype' },
              { label: 'Frequency', value: '2.8% of adults' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1652772486279-b83a75cd8143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29kJTIwZW5lcmd5JTIwZW1vdGlvbnMlMjBtZW50YWwlMjBoZWFsdGh8ZW58MXx8fHwxNzY3NDA3NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Mood and energy cycles - understanding bipolar disorder"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Bipolar disorder affects approximately 2.8% of adults in the United States and involves 
            alterations in neurotransmitter systems, particularly dopamine, serotonin, and norepinephrine.<sup>[3]</sup> 
            Brain imaging studies show differences in areas responsible for emotion regulation, reward 
            processing, and energy management.<sup>[4]</sup> The neurodivergent perspective recognizes bipolar disorder 
            not just as an illness to be cured, but as a neurotype with both challenges and gifts.<sup>[5]</sup>
          </p>
          
          <p className="mb-4">
            Many 
            individuals with bipolar disorder experience periods of exceptional creativity, productivity, 
            and insight, alongside the difficulties of mood dysregulation.<sup>[6]</sup> There are several types including 
            Bipolar I (characterized by at least one manic episode), Bipolar II (involving major depressive 
            episodes and hypomanic episodes but no full manic episodes), and Cyclothymic Disorder (a milder 
            form with numerous periods of hypomanic and depressive symptoms).<sup>[7]</sup> Understanding bipolar disorder 
            as a neurodivergent condition emphasizes the neurological basis and the need for both management and 
            self-acceptance.<sup>[8]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1549185545-f5b8a1fc481a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2R1Y3Rpdml0eSUyMGFydCUyMGV4cHJlc3Npb258ZW58MXx8fHwxNzY3NDA3NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Creative expression and productivity - characteristics of bipolar"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Bipolar disorder involves cycles between different mood states.<sup>[9]</sup> Manic episodes include elevated 
            or irritable mood, increased energy and activity, decreased need for sleep, racing thoughts and 
            rapid speech, inflated self-esteem or grandiosity, impulsive or risky behaviors, and difficulty 
            focusing.<sup>[10]</sup> Hypomanic episodes are similar to mania but less severe and shorter duration, often 
            experienced as highly productive and creative periods though can still involve impulsivity and 
            sleep disruption.<sup>[11]</sup>
          </p>
          
          <p className="mb-4">
            Depressive episodes include persistent sad, empty, or hopeless mood, loss of 
            interest or pleasure, fatigue and low energy, sleep disturbances (insomnia or oversleeping), 
            difficulty concentrating or making decisions, changes in appetite or weight, and thoughts of death 
            or suicide.<sup>[12][13]</sup> Viewing bipolar as a neurotype acknowledges natural cycles of energy and creativity 
            that can be understood and worked with, periods of exceptional creative output and innovative thinking, 
            deep emotional experiences and heightened sensitivity fostering empathy and passion, productivity 
            patterns that can be strategically planned, and resilience developed through living with the condition.<sup>[14][15]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1709651669999-57741c9bf085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG5ldXJvdHJhbnNtaXR0ZXJzJTIwZG9wYW1pbmUlMjBzZXJvdG9uaW58ZW58MXx8fHwxNzY3NDA3NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain neurotransmitters - neurological basis of bipolar disorder"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Bipolar disorder involves alterations in neurotransmitter systems, particularly dopamine, serotonin, 
            and norepinephrine.<sup>[16]</sup> Brain imaging studies show differences in areas responsible for emotion regulation, 
            reward processing, and energy management including the prefrontal cortex, amygdala, and hippocampus.<sup>[17][18]</sup> 
            Research reveals structural and functional differences in brain circuits that regulate mood, energy, 
            and circadian rhythms.<sup>[19]</sup>
          </p>
          
          <p className="mb-4">
            Bipolar disorder has a strong genetic component with studies showing increased 
            risk in family members, though the genetics are complex involving multiple genes.<sup>[20][21]</sup> Environmental factors 
            including stress, trauma, and life disruptions can trigger or exacerbate episodes in those with genetic 
            vulnerability.<sup>[22]</sup> The condition represents a fundamental difference in how the brain regulates mood states, 
            energy cycles, and neurotransmitter systems, creating natural cycles of varying energy and emotional intensity.<sup>[23]</sup> 
            Research into circadian rhythm disruption also reveals connections between sleep-wake cycles and mood regulation 
            in bipolar disorder.<sup>[24]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1620147512372-9e00421556bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaGlhdHJpc3QlMjBtZW50YWwlMjBoZWFsdGglMjBhc3Nlc3NtZW50JTIwdGhlcmFweXxlbnwxfHx8fDE3Njc0MDc2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Mental health assessment - diagnosing bipolar disorder"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Bipolar disorder is diagnosed clinically by mental health professionals including psychiatrists, 
            psychologists, or clinical social workers.<sup>[25]</sup> The diagnostic criteria for Bipolar I include at least one 
            manic episode lasting at least one week (or requiring hospitalization) with significantly elevated mood, 
            energy, and activity levels.<sup>[26]</sup> Bipolar II requires at least one major depressive episode and at least one 
            hypomanic episode but no full manic episodes.<sup>[27]</sup>
          </p>
          
          <p className="mb-4">
            Cyclothymic Disorder involves numerous periods of hypomanic 
            and depressive symptoms lasting at least two years without meeting full episode criteria.<sup>[28]</sup> The evaluation 
            includes detailed clinical interview and history, assessment of mood episodes, their duration, and impact 
            on functioning, screening for other mental health conditions, medical evaluation to rule out other causes 
            of mood changes (thyroid issues, substance use), family history assessment, and mood tracking over time.<sup>[29][30]</sup> 
            Onset is typically in late teens to early adulthood though can occur at any age.<sup>[31]</sup> Accurate diagnosis can 
            take time as the pattern of episodes must be observed.<sup>[32]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1765222385397-6c2ea556086f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2F0aW9uJTIwdHJlYXRtZW50JTIwc3VwcG9ydCUyMHdlbGxuZXNzfGVufDF8fHx8MTc2NzQwNzYyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Medication and treatment support - managing bipolar disorder"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            A neurodivergent-affirming approach balances stability with acceptance.<sup>[33]</sup> Medication including mood 
            stabilizers, antipsychotics, and sometimes antidepressants helps regulate brain chemistry, with finding 
            the right medication being a collaborative process requiring patience and communication.<sup>[34][35]</sup> Therapy including 
            Cognitive-Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and psychoeducation helps develop 
            coping strategies, recognize patterns, and manage symptoms.<sup>[36]</sup>
          </p>
          
          <p className="mb-4">
            Lifestyle practices critical for mood stability 
            include consistent sleep schedule (critically important), regular exercise and physical activity, stress 
            management techniques, avoiding alcohol and recreational drugs, and tracking mood patterns and triggers.<sup>[37][38]</sup> 
            Community and connection through support groups, peer connections, and understanding relationships provide 
            validation and practical strategies.<sup>[39]</sup> Additional support includes crisis planning for severe episodes, 
            education for family and loved ones, workplace or academic accommodations, and developing self-awareness 
            about personal patterns and early warning signs.<sup>[40]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Bipolar Disorder</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1652772486279-b83a75cd8143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29kJTIwZW5lcmd5JTIwZW1vdGlvbnMlMjBtZW50YWwlMjBoZWFsdGh8ZW58MXx8fHwxNzY3NDA3NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Living with bipolar disorder - managing energy cycles"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with bipolar disorder lead successful and fulfilling lives across all areas of society.<sup>[41]</sup> 
            Bipolar disorder is a lifelong neurotype that individuals learn to manage and work with throughout their 
            lives.<sup>[42]</sup> Living with bipolar involves understanding and navigating energy cycles, mood states, and the challenges 
            and gifts of the condition.<sup>[43]</sup> With appropriate treatment, self-understanding, and support, people with bipolar 
            disorder develop effective strategies for managing symptoms and thrive in education, careers, and relationships.<sup>[44]</sup>
          </p>
          
          <p className="mb-4">
            Living well with bipolar involves understanding one's specific bipolar type and personal patterns, maintaining 
            consistent treatment including medication and therapy, developing strong self-awareness about mood cycles and 
            triggers, maintaining lifestyle practices that support stability (especially sleep), accessing appropriate 
            accommodations and support, and recognizing both the challenges and potential strengths of the neurotype.<sup>[45]</sup> Topics 
            related to living with bipolar include navigating mood cycles and energy patterns, leveraging creative and productive 
            periods, managing depressive and manic/hypomanic episodes, maintaining relationships and communication, balancing 
            stability needs with self-acceptance, connecting with the bipolar community, managing career and life planning around 
            energy cycles, understanding that bipolar is a neurological difference not a personal failing, and developing exceptional 
            self-awareness, coping skills, and resilience through the experience.<sup>[46]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
          <p>[2] Walker, N. (2021). "Neurodiversity: Some basic terms and definitions." <em>Neuroqueer Heresies: Notes on the Neurodiversity Paradigm, Autistic Empowerment, and Postnormal Possibilities</em>. Fort Worth, TX: Autonomous Press.</p>
          <p>[3] Merikangas, K. R., Jin, R., He, J. P., et al. (2011). "Prevalence and correlates of bipolar spectrum disorder in the World Mental Health Survey Initiative." <em>Archives of General Psychiatry</em>, 68(3), 241-251.</p>
          <p>[4] Strakowski, S. M., Adler, C. M., Almeida, J., et al. (2012). "The functional neuroanatomy of bipolar disorder: A consensus model." <em>Bipolar Disorders</em>, 14(4), 313-325.</p>
          <p>[5] Ghaemi, S. N. (2011). <em>A first-rate madness: Uncovering the links between leadership and mental illness</em>. New York: Penguin Press.</p>
          <p>[6] Jamison, K. R. (1993). <em>Touched with fire: Manic-depressive illness and the artistic temperament</em>. New York: Free Press.</p>
          <p>[7] Vieta, E., Berk, M., Schulze, T. G., et al. (2018). "Bipolar disorders." <em>Nature Reviews Disease Primers</em>, 4, 18008.</p>
          <p>[8] Murray, G., & Johnson, S. L. (2010). "The clinical significance of creativity in bipolar disorder." <em>Clinical Psychology Review</em>, 30(6), 721-732.</p>
          <p>[9] Goodwin, F. K., & Jamison, K. R. (2007). <em>Manic-depressive illness: Bipolar disorders and recurrent depression</em> (2nd ed.). New York: Oxford University Press.</p>
          <p>[10] Ketter, T. A., & Wang, P. W. (2010). "Predictors of treatment response in bipolar disorders: Evidence from clinical and brain imaging studies." <em>Journal of Clinical Psychiatry</em>, 71(Suppl 1), 14-20.</p>
          <p>[11] Akiskal, H. S., & Benazzi, F. (2005). "Atypical depression: A variant of bipolar II or a bridge between unipolar and bipolar II?" <em>Journal of Affective Disorders</em>, 84(2-3), 209-217.</p>
          <p>[12] Judd, L. L., Akiskal, H. S., Schettler, P. J., et al. (2002). "The long-term natural history of the weekly symptomatic status of bipolar I disorder." <em>Archives of General Psychiatry</em>, 59(6), 530-537.</p>
          <p>[13] Kupfer, D. J. (2005). "The increasing medical burden in bipolar disorder." <em>JAMA</em>, 293(20), 2528-2530.</p>
          <p>[14] Johnson, S. L., Murray, G., Fredrickson, B., et al. (2012). "Creativity and bipolar disorder: Touched by fire or burning with questions?" <em>Clinical Psychology Review</em>, 32(1), 1-12.</p>
          <p>[15] Kyaga, S., Lichtenstein, P., Boman, M., Hultman, C., Långström, N., & Landén, M. (2011). "Creativity and mental disorder: Family study of 300,000 people with severe mental disorder." <em>The British Journal of Psychiatry</em>, 199(5), 373-379.</p>
          <p>[16] Berk, M., Dodd, S., Kauer-Sant'anna, M., et al. (2007). "Dopamine dysregulation syndrome: Implications for a dopamine hypothesis of bipolar disorder." <em>Acta Psychiatrica Scandinavica</em>, 116(Suppl 434), 41-49.</p>
          <p>[17] Phillips, M. L., & Swartz, H. A. (2014). "A critical appraisal of neuroimaging studies of bipolar disorder: Toward a new conceptualization of underlying neural circuitry and a road map for future research." <em>American Journal of Psychiatry</em>, 171(8), 829-843.</p>
          <p>[18] Blond, B. N., Fredericks, C. A., & Blumberg, H. P. (2012). "Functional neuroanatomy of bipolar disorder: Structure, function, and connectivity in an amygdala-anterior paralimbic neural system." <em>Bipolar Disorders</em>, 14(4), 340-355.</p>
          <p>[19] Vargas, C., López-Jaramillo, C., & Vieta, E. (2013). "A systematic literature review of resting state network—functional MRI in bipolar disorder." <em>Journal of Affective Disorders</em>, 150(3), 727-735.</p>
          <p>[20] Smoller, J. W., & Finn, C. T. (2003). "Family, twin, and adoption studies of bipolar disorder." <em>American Journal of Medical Genetics Part C: Seminars in Medical Genetics</em>, 123C(1), 48-58.</p>
          <p>[21] Craddock, N., & Sklar, P. (2013). "Genetics of bipolar disorder." <em>The Lancet</em>, 381(9878), 1654-1662.</p>
          <p>[22] Post, R. M. (1992). "Transduction of psychosocial stress into the neurobiology of recurrent affective disorder." <em>American Journal of Psychiatry</em>, 149(8), 999-1010.</p>
          <p>[23] Bauer, M., & Pfennig, A. (2005). "Epidemiology of bipolar disorders." <em>Epilepsia</em>, 46(Suppl 4), 8-13.</p>
          <p>[24] Harvey, A. G. (2008). "Sleep and circadian rhythms in bipolar disorder: Seeking synchrony, harmony, and regulation." <em>American Journal of Psychiatry</em>, 165(7), 820-829.</p>
          <p>[25] Hirschfeld, R. M., Lewis, L., & Vornik, L. A. (2003). "Perceptions and impact of bipolar disorder: How far have we really come? Results of the national depressive and manic-depressive association 2000 survey of individuals with bipolar disorder." <em>Journal of Clinical Psychiatry</em>, 64(2), 161-174.</p>
          <p>[26] World Health Organization. (2018). <em>International classification of diseases for mortality and morbidity statistics</em> (11th ed.). Geneva: WHO.</p>
          <p>[27] Benazzi, F. (2007). "Bipolar II disorder: Epidemiology, diagnosis and management." <em>CNS Drugs</em>, 21(9), 727-740.</p>
          <p>[28] Van Meter, A. R., Youngstrom, E. A., & Findling, R. L. (2012). "Cyclothymic disorder: A critical review." <em>Clinical Psychology Review</em>, 32(4), 229-243.</p>
          <p>[29] Ghaemi, S. N., Boiman, E. E., & Goodwin, F. K. (2000). "Diagnosing bipolar disorder and the effect of antidepressants: A naturalistic study." <em>Journal of Clinical Psychiatry</em>, 61(10), 804-808.</p>
          <p>[30] Baldessarini, R. J., Tondo, L., Vázquez, G. H., et al. (2012). "Age at onset versus family history and clinical outcomes in 1,665 international bipolar-I disorder patients." <em>World Psychiatry</em>, 11(1), 40-46.</p>
          <p>[31] Perlis, R. H., Dennehy, E. B., Miklowitz, D. J., et al. (2009). "Retrospective age at onset of bipolar disorder and outcome during two-year follow-up: Results from the STEP-BD study." <em>Bipolar Disorders</em>, 11(4), 391-400.</p>
          <p>[32] Ghaemi, S. N., Sachs, G. S., Chiou, A. M., Pandurangi, A. K., & Goodwin, K. (1999). "Is bipolar disorder still underdiagnosed? Are antidepressants overutilized?" <em>Journal of Affective Disorders</em>, 52(1-3), 135-144.</p>
          <p>[33] Miklowitz, D. J. (2008). <em>Bipolar disorder: A family-focused treatment approach</em> (2nd ed.). New York: Guilford Press.</p>
          <p>[34] Geddes, J. R., & Miklowitz, D. J. (2013). "Treatment of bipolar disorder." <em>The Lancet</em>, 381(9878), 1672-1682.</p>
          <p>[35] Yatham, L. N., Kennedy, S. H., Parikh, S. V., et al. (2013). "Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) collaborative update of CANMAT guidelines for the management of patients with bipolar disorder: Update 2013." <em>Bipolar Disorders</em>, 15(1), 1-44.</p>
          <p>[36] Miklowitz, D. J., & Scott, J. (2009). "Psychosocial treatments for bipolar disorder: Cost-effectiveness, mediating mechanisms, and future directions." <em>Bipolar Disorders</em>, 11(Suppl 2), 110-122.</p>
          <p>[37] Frank, E., Kupfer, D. J., Thase, M. E., et al. (2005). "Two-year outcomes for interpersonal and social rhythm therapy in individuals with bipolar I disorder." <em>Archives of General Psychiatry</em>, 62(9), 996-1004.</p>
          <p>[38] Sylvia, L. G., Friedman, E. S., Kocsis, J. H., et al. (2013). "Association of exercise with quality of life and mood symptoms in a comparative effectiveness study of bipolar disorder." <em>Journal of Affective Disorders</em>, 151(2), 722-727.</p>
          <p>[39] Proudfoot, J., Parker, G., Manicavasagar, V., et al. (2009). "Effects of adjunctive peer support on perceptions of illness control and understanding in an online psychoeducation program for bipolar disorder: A randomised controlled trial." <em>Journal of Affective Disorders</em>, 142(1-3), 98-105.</p>
          <p>[40] Perry, A., Tarrier, N., Morriss, R., McCarthy, E., & Limb, K. (1999). "Randomised controlled trial of efficacy of teaching patients with bipolar disorder to identify early symptoms of relapse and obtain treatment." <em>BMJ</em>, 318(7177), 149-153.</p>
          <p>[41] Velligan, D. I., Weiden, P. J., Sajatovic, M., et al. (2009). "The expert consensus guideline series: Adherence problems in patients with serious and persistent mental illness." <em>Journal of Clinical Psychiatry</em>, 70(Suppl 4), 1-46.</p>
          <p>[42] Lam, D. H., Wright, K., & Smith, N. (2004). "Dysfunctional assumptions in bipolar disorder." <em>Journal of Affective Disorders</em>, 79(1-3), 193-199.</p>
          <p>[43] Michalak, E. E., Yatham, L. N., Maxwell, V., Hale, S., & Lam, R. W. (2007). "The impact of bipolar disorder upon work functioning: A qualitative analysis." <em>Bipolar Disorders</em>, 9(1-2), 126-143.</p>
          <p>[44] Dean, B. B., Gerner, D., & Gerner, R. H. (2004). "A systematic review evaluating health-related quality of life, work impairment, and healthcare costs and utilization in bipolar disorder." <em>Current Medical Research and Opinion</em>, 20(2), 139-154.</p>
          <p>[45] Sajatovic, M., Ignacio, R. V., West, J. A., et al. (2009). "Predictors of nonadherence among individuals with bipolar disorder receiving treatment in a community mental health clinic." <em>Comprehensive Psychiatry</em>, 50(2), 100-107.</p>
          <p>[46] Bauer, M. S., & McBride, L. (2003). <em>Structured group psychotherapy for bipolar disorder: The Life Goals Program</em> (2nd ed.). New York: Springer Publishing Company.</p>
        </div>
      </section>
    </article>
  );
}