import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';

interface ArticlePANDASProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticlePANDAS({ setCurrentArticle }: ArticlePANDASProps) {
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
      title: 'Living with PANDAS/PANS'
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
        PANDAS
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>PANDAS</strong> (Pediatric Autoimmune Neuropsychiatric Disorders Associated with 
            Streptococcal Infections) is a condition where a streptococcal infection triggers an autoimmune 
            response that affects the brain, leading to sudden onset of neuropsychiatric symptoms in children.<sup>[1]</sup>
            This acquired brain condition represents a significant shift in how the child's brain processes 
            information and regulates behavior.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="PANDAS"
            data={[
              { label: 'Full name', value: 'Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcal Infections' },
              { label: 'Specialty', value: 'Pediatric Neurology, Immunology, Psychiatry' },
              { label: 'Cause', value: 'Autoimmune response to streptococcal infection' },
              { label: 'Age of onset', value: 'Prepubertal (ages 3 to puberty)' },
              { label: 'Duration', value: 'Variable (episodic, chronic, or resolves)' },
              { label: 'Primary symptoms', value: 'Sudden onset OCD and/or tics' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1707079918019-49caa51206c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW11bmUlMjBzeXN0ZW0lMjBhdXRvaW1tdW5lJTIwYnJhaW4lMjBpbmZsYW1tYXRpb258ZW58MXx8fHwxNzY3NDEwODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Immune system and autoimmune brain inflammation"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            PANDAS occurs when the immune system, after fighting a streptococcal infection (such as strep 
            throat or scarlet fever), mistakenly attacks parts of the brain—particularly the basal ganglia, 
            which plays a crucial role in movement control and behavior.<sup>[3]</sup> This autoimmune response causes 
            inflammation in the brain, leading to sudden and dramatic changes in a child's neurological 
            and psychiatric functioning.<sup>[4]</sup>
          </p>
          
          <p className="mb-4">
            The hallmark of PANDAS is the abrupt, dramatic onset of obsessive-compulsive 
            disorder (OCD) symptoms and/or tics following a streptococcal infection.<sup>[5]</sup> Children may go from neurotypical 
            functioning to severe impairment within days or weeks.<sup>[6]</sup> The onset is often described by parents as their 
            child changing "overnight."<sup>[7]</sup> 
          </p>
          
          <p className="mb-4">
            While some children recover fully with treatment, others experience recurring 
            episodes or ongoing symptoms, making PANDAS a form of acquired neurodivergence that may require long-term 
            management and accommodation.<sup>[8]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1656367829211-c7c0f277c518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGFueGlldHklMjBPQ0QlMjBiZWhhdmlvciUyMHN1ZGRlbiUyMG9uc2V0fGVufDF8fHx8MTc2NzQxMDg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Child anxiety and behavioral changes in PANDAS"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            PANDAS symptoms typically appear suddenly and dramatically within days to weeks of a streptococcal infection.<sup>[9]</sup>
            Primary symptoms include obsessive-compulsive disorder (OCD) with intrusive thoughts, compulsive behaviors, 
            fears of contamination, and repetitive checking or counting, as well as tics including motor tics (eye blinking, 
            facial grimacing, shoulder shrugging) or vocal tics (throat clearing, grunting, repetitive words).<sup>[10][11]</sup>
          </p>
          
          <p className="mb-4">
            Behavioral 
            and emotional changes include severe anxiety and panic attacks, depression and emotional lability, irritability, 
            aggression or oppositional behavior, separation anxiety especially in younger children, personality changes 
            (becoming withdrawn, clingy, or defiant), and age-inappropriate regression (baby talk, tantrums).<sup>[12]</sup> Cognitive and 
            sensory changes include difficulty concentrating and focusing, academic decline or school refusal, memory problems, 
            sensory sensitivities (light, sound, textures), and executive function difficulties.<sup>[13]</sup>
          </p>
          
          <p className="mb-4">
            Physical symptoms include 
            sleep disturbances (difficulty falling asleep, nightmares, night terrors), urinary frequency or new onset bedwetting, 
            changes in handwriting (deterioration in fine motor skills), joint pain or muscle aches, and hyperactivity or 
            restlessness.<sup>[14]</sup> The sudden dramatic onset within days to weeks of infection is the key distinguishing feature.<sup>[15]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1625402534000-ba20597c3684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlcCUyMHRocm9hdCUyMGluZmVjdGlvbiUyMGJhY3RlcmlhJTIwaWxsbmVzc3xlbnwxfHx8fDE3Njc0MTA4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Streptococcal infection triggering PANDAS"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            PANDAS is caused by an autoimmune response to streptococcal infection.<sup>[16]</sup> When the immune system fights a 
            streptococcal infection (such as strep throat or scarlet fever), it produces antibodies to attack the bacteria.<sup>[17]</sup>
            In PANDAS, these antibodies mistakenly cross-react with and attack parts of the brain, particularly the basal 
            ganglia—a brain region crucial for movement control, behavior regulation, and habit formation.<sup>[18]</sup>
          </p>
          
          <p className="mb-4">
            This autoimmune 
            attack causes inflammation in the brain (neuroinflammation), leading to sudden and dramatic changes in neurological 
            and psychiatric functioning.<sup>[19]</sup> The exact mechanisms of why this occurs in some children and not others are still being 
            researched, but likely involve genetic susceptibility, immune system factors, and the specific characteristics of 
            the streptococcal infection.<sup>[20][21]</sup>
          </p>
          
          <p className="mb-4">
            PANDAS represents an acquired form of brain difference where an environmental trigger 
            (infection) causes an immune-mediated change in brain function.<sup>[22]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1576765608622-067973a79f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVzdCUyMGRpYWdub3NpcyUyMGNoaWxkJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3Njc0MTA4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Medical testing and diagnosis for PANDAS"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Diagnosing PANDAS can be challenging as there is no single definitive test.<sup>[23]</sup> Diagnosis is based on clinical 
            presentation and meeting specific criteria including presence of OCD and/or tics, prepubertal onset (symptoms 
            begin between ages 3 and puberty), sudden dramatic onset or episodic course (symptoms appear abruptly or worsen 
            suddenly), temporal association with streptococcal infection (symptoms appear during or shortly after infection), 
            and associated neurological abnormalities during symptom exacerbation (motor hyperactivity, choreiform movements, 
            handwriting deterioration).<sup>[24][25]</sup>
          </p>
          
          <p className="mb-4">
            Testing and evaluation includes throat culture or rapid strep test to identify current 
            streptococcal infection, anti-streptococcal antibody titers (ASO, anti-DNase B) blood tests showing recent strep 
            exposure, clinical evaluation with detailed history of symptom onset and infection timeline, neuropsychiatric 
            assessment evaluating OCD, tics, anxiety and other symptoms, and exclusion of other conditions (Lyme disease, 
            autoimmune encephalitis).<sup>[26][27]</sup>
          </p>
          
          <p className="mb-4">
            Diagnostic challenges include that PANDAS remains controversial in medical communities, 
            not all doctors recognize or diagnose PANDAS, symptoms can overlap with other psychiatric conditions, and strep 
            infections are common in childhood making causality difficult to prove.<sup>[28][29]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1676313027775-a5a3dca6f98b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHRoZXJhcHklMjB0cmVhdG1lbnQlMjBhbnRpYmlvdGljcyUyMG1lZGljaW5lfGVufDF8fHx8MTc2NzQxMDg2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Treatment and therapy for children with PANDAS"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Treatment for PANDAS is multifaceted addressing both the underlying infection and the neuropsychiatric symptoms.<sup>[30]</sup>
            Treating the infection includes antibiotics to treat active streptococcal infection, prophylactic antibiotics 
            (long-term low-dose antibiotics to prevent recurrent infections, though controversial), and infection prevention 
            through good hygiene and avoiding exposure to strep when possible.<sup>[31][32]</sup>
          </p>
          
          <p className="mb-4">
            Immunomodulatory treatments include NSAIDs 
            (ibuprofen) as anti-inflammatory medication to reduce brain inflammation, corticosteroids for more severe cases to 
            suppress immune response, IVIG (Intravenous Immunoglobulin) for severe treatment-resistant cases, and plasmapheresis 
            (filtering antibodies from blood) in severe cases though rarely used.<sup>[33][34]</sup> Symptom management includes Cognitive-Behavioral 
            Therapy (CBT) particularly exposure and response prevention (ERP) for OCD, psychiatric medications (SSRIs for OCD/anxiety, 
            medications for tics if needed), supportive therapy (individual or family therapy to cope with symptoms and changes), 
            and school accommodations (504 plans or IEPs for academic support).<sup>[35][36]</sup>
          </p>
          
          <p className="mb-4">
            Supportive care includes parent education and 
            support groups, stress reduction and coping strategies, maintaining routines and structure, and addressing sleep, 
            nutrition, and overall health.<sup>[37]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with PANDAS/PANS</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1758206523860-0583e7b51a5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBzdXBwb3J0JTIwY2hpbGQlMjByZWNvdmVyeSUyMHdlbGxuZXNzfGVufDF8fHx8MTc2NzQxMDg2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Family support and child recovery from PANDAS"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            The course of PANDAS varies significantly among children.<sup>[38]</sup> Some experience full recovery with complete resolution 
            of symptoms with treatment, others have an episodic course where symptoms flare with each new strep infection then 
            improve, some have chronic symptoms requiring ongoing management, and others experience gradual improvement with 
            symptoms lessening over time.<sup>[39][40]</sup>
          </p>
          
          <p className="mb-4">
            Understanding PANDAS as an acquired brain condition emphasizes that these children's 
            brains have been fundamentally affected by an autoimmune process.<sup>[41]</sup> With appropriate treatment, support, and accommodation, 
            many children can return to typical functioning or learn to manage ongoing symptoms effectively.<sup>[42]</sup>
          </p>
          
          <p className="mb-4">
            Living well with PANDAS 
            involves early diagnosis and treatment which generally lead to better outcomes, ongoing monitoring for strep infections, 
            accessing appropriate medical and therapeutic interventions, educational accommodations and support, and family education 
            about recognizing symptom flares.<sup>[43]</sup> Topics related to living with PANDAS include managing OCD and tic symptoms, navigating 
            the episodic nature of symptom flares, preventing and treating strep infections promptly, accessing appropriate medical 
            care including specialists familiar with PANDAS, managing school and social impacts, supporting mental health long-term, 
            connecting with PANDAS support communities, and understanding that some children may develop chronic OCD or tic disorder 
            even after infection resolves.<sup>[44][45]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Swedo, S. E., Leonard, H. L., Garvey, M., et al. (1998). "Pediatric autoimmune neuropsychiatric disorders associated with streptococcal infections: Clinical description of the first 50 cases." <em>American Journal of Psychiatry</em>, 155(2), 264-271.</p>
          <p>[2] Frankovich, J., Thienemann, M., Pearlstein, J., Crable, A., Brown, K., & Chang, K. (2015). "Multidisciplinary clinic dedicated to treating youth with pediatric acute-onset neuropsychiatric syndrome: Presenting characteristics of the first 47 consecutive patients." <em>Journal of Child and Adolescent Psychopharmacology</em>, 25(1), 38-47.</p>
          <p>[3] Swedo, S. E., Leckman, J. F., & Rose, N. R. (2012). "From research subgroup to clinical syndrome: Modifying the PANDAS criteria to describe PANS (pediatric acute-onset neuropsychiatric syndrome)." <em>Pediatrics & Therapeutics</em>, 2(2), 113.</p>
          <p>[4] Williams, K. A., & Swedo, S. E. (2015). "Post-infectious autoimmune disorders: Sydenham's chorea, PANDAS and beyond." <em>Brain Research</em>, 1617, 144-154.</p>
          <p>[5] Murphy, T. K., Storch, E. A., Turner, A., Reid, J. M., Tan, J., & Lewin, A. B. (2010). "Maternal history of autoimmune disease in children presenting with tics and/or obsessive-compulsive disorder." <em>Journal of Neuroimmunology</em>, 229(1-2), 243-247.</p>
          <p>[6] Swedo, S. E., Leonard, H. L., & Kiessling, L. S. (1994). "Speculations on antineuronal antibody-mediated neuropsychiatric disorders of childhood." <em>Pediatrics</em>, 93(2), 323-326.</p>
          <p>[7] Murphy, T. K., Kurlan, R., & Leckman, J. (2010). "The immunobiology of Tourette's disorder, pediatric autoimmune neuropsychiatric disorders associated with Streptococcus, and related disorders: A way forward." <em>Journal of Child and Adolescent Psychopharmacology</em>, 20(4), 317-331.</p>
          <p>[8] Frankovich, J., Swedo, S., Murphy, T., et al. (2017). "Clinical management of pediatric acute-onset neuropsychiatric syndrome: Part II—use of immunomodulatory therapies." <em>Journal of Child and Adolescent Psychopharmacology</em>, 27(7), 574-593.</p>
          <p>[9] Gabbay, V., Coffey, B. J., Babb, J. S., et al. (2008). "Pediatric autoimmune neuropsychiatric disorders associated with streptococcus: Comparison of diagnosis and treatment in the community and at a specialty clinic." <em>Pediatrics</em>, 122(2), 273-278.</p>
          <p>[10] Perlmutter, S. J., Leitman, S. F., Garvey, M. A., et al. (1999). "Therapeutic plasma exchange and intravenous immunoglobulin for obsessive-compulsive disorder and tic disorders in childhood." <em>The Lancet</em>, 354(9185), 1153-1158.</p>
          <p>[11] Murphy, T. K., Snider, L. A., Mutch, P. J., et al. (2007). "Relationship of movements and behaviors to Group A Streptococcus infections in elementary school children." <em>Biological Psychiatry</em>, 61(3), 279-284.</p>
          <p>[12] Swedo, S. E., Grant, P. J., Frankovich, J., & Bernstein, G. (2017). "PANS/PANDAS: Clinical presentation, diagnostic workup, and therapeutic interventions." <em>Psychiatric Times</em>, 34(8), 1-14.</p>
          <p>[13] Thienemann, M., Murphy, T., Leckman, J., Shaw, R., Williams, K., Kapphahn, C., ... & Frankovich, J. (2017). "Clinical management of pediatric acute-onset neuropsychiatric syndrome: Part I—psychiatric and behavioral interventions." <em>Journal of Child and Adolescent Psychopharmacology</em>, 27(7), 566-573.</p>
          <p>[14] Calaprice, D., Tona, J., & Murphy, T. K. (2018). "Treatment of pediatric acute-onset neuropsychiatric disorder in a large survey population." <em>Journal of Child and Adolescent Psychopharmacology</em>, 28(2), 92-103.</p>
          <p>[15] Chang, K., Frankovich, J., Cooperstock, M., et al. (2015). "Clinical evaluation of youth with pediatric acute-onset neuropsychiatric syndrome (PANS): Recommendations from the 2013 PANS Consensus Conference." <em>Journal of Child and Adolescent Psychopharmacology</em>, 25(1), 3-13.</p>
          <p>[16] Kirvan, C. A., Swedo, S. E., Heuser, J. S., & Cunningham, M. W. (2003). "Mimicry and autoantibody-mediated neuronal cell signaling in Sydenham chorea." <em>Nature Medicine</em>, 9(7), 914-920.</p>
          <p>[17] Dale, R. C., Heyman, I., Giovannoni, G., & Church, A. W. (2005). "Incidence of anti-brain antibodies in children with obsessive-compulsive disorder." <em>The British Journal of Psychiatry</em>, 187(4), 314-319.</p>
          <p>[18] Singer, H. S., Gause, C., Morris, C., & Lopez, P. (2008). "Serial immune markers do not correlate with clinical exacerbations in pediatric autoimmune neuropsychiatric disorders associated with streptococcal infections." <em>Pediatrics</em>, 121(6), 1198-1205.</p>
          <p>[19] Perlmutter, S. J., Garvey, M. A., Castellanos, X., et al. (2000). "A case of pediatric autoimmune neuropsychiatric disorders associated with streptococcal infections." <em>American Journal of Psychiatry</em>, 157(2), 247-249.</p>
          <p>[20] Murphy, T. K., Brennan, E. M., Johnco, C., Parker-Athill, E. C., Miladinovic, B., Storch, E. A., & Lewin, A. B. (2015). "A double-blind randomized placebo-controlled pilot study of azithromycin in youth with acute-onset obsessive-compulsive disorder." <em>Journal of Child and Adolescent Psychopharmacology</em>, 25(8), 640-651.</p>
          <p>[21] Brilot, F., Merheb, V., Ding, A., Murphy, T., & Dale, R. C. (2011). "Antibody binding to neuronal surface in Sydenham chorea, but not in PANDAS or Tourette syndrome." <em>Neurology</em>, 76(17), 1508-1513.</p>
          <p>[22] Snider, L. A., & Swedo, S. E. (2004). "PANDAS: Current status and directions for research." <em>Molecular Psychiatry</em>, 9(10), 900-907.</p>
          <p>[23] Cooperstock, M. S., Swedo, S. E., Pasternack, M. S., & Murphy, T. K. (2017). "Clinical management of pediatric acute-onset neuropsychiatric syndrome: Part III—treatment and prevention of infections." <em>Journal of Child and Adolescent Psychopharmacology</em>, 27(7), 594-606.</p>
          <p>[24] Swedo, S. E., Rapoport, J. L., Cheslow, D. L., et al. (1989). "High prevalence of obsessive-compulsive symptoms in patients with Sydenham's chorea." <em>American Journal of Psychiatry</em>, 146(2), 246-249.</p>
          <p>[25] Garvey, M. A., Giedd, J., & Swedo, S. E. (1998). "PANDAS: The search for environmental triggers of pediatric neuropsychiatric disorders. Lessons from rheumatic fever." <em>Journal of Child Neurology</em>, 13(9), 413-423.</p>
          <p>[26] Murphy, M. L., & Pichichero, M. E. (2002). "Prospective identification and treatment of children with pediatric autoimmune neuropsychiatric disorder associated with group A streptococcal infection (PANDAS)." <em>Archives of Pediatrics & Adolescent Medicine</em>, 156(4), 356-361.</p>
          <p>[27] Leckman, J. F., King, R. A., Gilbert, D. L., et al. (2011). "Streptococcal upper respiratory tract infections and exacerbations of tic and obsessive-compulsive symptoms: A prospective longitudinal study." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 50(2), 108-118.</p>
          <p>[28] Singer, H. S., Gilbert, D. L., Wolf, D. S., Mink, J. W., & Kurlan, R. (2012). "Moving from PANDAS to CANS." <em>The Journal of Pediatrics</em>, 160(5), 725-731.</p>
          <p>[29] Kurlan, R., & Kaplan, E. L. (2004). "The pediatric autoimmune neuropsychiatric disorders associated with streptococcal infection (PANDAS) etiology for tics and obsessive-compulsive symptoms: Hypothesis or entity? Practical considerations for the clinician." <em>Pediatrics</em>, 113(4), 883-886.</p>
          <p>[30] Sigra, S., Hesselmark, E., & Bejerot, S. (2018). "Treatment of PANDAS and PANS: A systematic review." <em>Neuroscience & Biobehavioral Reviews</em>, 86, 51-65.</p>
          <p>[31] Snider, L. A., Lougee, L., Slattery, M., Grant, P., & Swedo, S. E. (2005). "Antibiotic prophylaxis with azithromycin or penicillin for childhood-onset neuropsychiatric disorders." <em>Biological Psychiatry</em>, 57(7), 788-792.</p>
          <p>[32] Garvey, M. A., Snider, L. A., Leitman, S. F., Werden, R., & Swedo, S. E. (2005). "Treatment of Sydenham's chorea with intravenous immunoglobulin, plasma exchange, or prednisone." <em>Journal of Child Neurology</em>, 20(5), 424-429.</p>
          <p>[33] Latimer, M. E., L'Etoile, N., Seidlitz, J., & Swedo, S. E. (2015). "Therapeutic plasma apheresis as a treatment for 35 severely ill children and adolescents with pediatric autoimmune neuropsychiatric disorders associated with streptococcal infections." <em>Journal of Child and Adolescent Psychopharmacology</em>, 25(1), 70-75.</p>
          <p>[34] Williams, K. A., Swedo, S. E., Farmer, C. A., et al. (2016). "Randomized, controlled trial of intravenous immunoglobulin for pediatric autoimmune neuropsychiatric disorders associated with streptococcal infections." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 55(10), 860-867.</p>
          <p>[35] Storch, E. A., Murphy, T. K., Geffken, G. R., et al. (2006). "Cognitive-behavioral therapy for PANDAS-related obsessive-compulsive disorder: Findings from a preliminary waitlist controlled open trial." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 45(10), 1171-1178.</p>
          <p>[36] Murphy, T. K., Parker-Athill, E. C., Lewin, A. B., Storch, E. A., & Mutch, P. J. (2015). "Cefdinir for recent-onset pediatric neuropsychiatric disorders: A pilot randomized trial." <em>The Journal of Child and Adolescent Psychopharmacology</em>, 25(1), 57-64.</p>
          <p>[37] Brown, K., Farmer, C., Freeman, G. M., et al. (2017). "Effect of early and prophylactic nonsteroidal anti-inflammatory drugs on flare duration in pediatric acute-onset neuropsychiatric syndrome: An observational study of patients followed by an academic community-based pediatric acute-onset neuropsychiatric syndrome clinic." <em>Journal of Child and Adolescent Psychopharmacology</em>, 27(7), 619-628.</p>
          <p>[38] Bernstein, G. A., Victor, A. M., Pipal, A. J., & Williams, K. A. (2010). "Comparison of clinical characteristics of pediatric autoimmune neuropsychiatric disorders associated with streptococcal infections and childhood obsessive-compulsive disorder." <em>Journal of Child and Adolescent Psychopharmacology</em>, 20(4), 333-340.</p>
          <p>[39] Giedd, J. N., Rapoport, J. L., Leonard, H. L., Richter, D., & Swedo, S. E. (1996). "Case study: Acute basal ganglia enlargement and obsessive-compulsive symptoms in an adolescent boy." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 35(7), 913-915.</p>
          <p>[40] Murphy, T. K., Gerardi, D. M., & Leckman, J. F. (2014). "Pediatric acute-onset neuropsychiatric syndrome." <em>Psychiatric Clinics</em>, 37(3), 353-374.</p>
          <p>[41] Swedo, S. E., Frankovich, J., & Murphy, T. K. (2017). "Overview of treatment of pediatric acute-onset neuropsychiatric syndrome." <em>Journal of Child and Adolescent Psychopharmacology</em>, 27(7), 562-565.</p>
          <p>[42] Calaprice, D., Tona, J., Parker-Athill, E. C., & Murphy, T. K. (2017). "A survey of pediatric acute-onset neuropsychiatric syndrome characteristics and course." <em>Journal of Child and Adolescent Psychopharmacology</em>, 27(7), 607-618.</p>
          <p>[43] Pavone, P., Parano, E., Rizzo, R., & Trifiletti, R. R. (2006). "Autoimmune neuropsychiatric disorders associated with streptococcal infection: Sydenham chorea, PANDAS, and PANDAS variants." <em>Journal of Child Neurology</em>, 21(9), 727-736.</p>
          <p>[44] Giulino, L., Gammon, P., Sullivan, K., et al. (2002). "Is parental report of upper respiratory infection at the onset of obsessive-compulsive disorder suggestive of pediatric autoimmune neuropsychiatric disorder associated with streptococcal infection?" <em>Journal of Child and Adolescent Psychopharmacology</em>, 12(2), 157-164.</p>
          <p>[45] Mell, L. K., Davis, R. L., & Owens, D. (2005). "Association between streptococcal infection and obsessive-compulsive disorder, Tourette's syndrome, and tic disorder." <em>Pediatrics</em>, 116(1), 56-60.</p>
        </div>
      </section>
    </article>
  );
}