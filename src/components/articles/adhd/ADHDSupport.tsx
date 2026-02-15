import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ADHDMedicationComparison } from '../../infographics/ADHDMedicationComparison';
import { ADHDTreatmentApproach } from '../../infographics/ADHDTreatmentApproach';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { Pill, BrainCircuit, GraduationCap, Heart, Users, Settings } from 'lucide-react';

interface ADHDSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function ADHDSupport({ setCurrentArticle }: ADHDSupportProps) {
  function OverviewContent() {
    return (
      <>
        {/* Treatment Approaches Section */}
        <div>

          
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Comprehensive Treatment Approaches</h2>
          <ImageWithFallback src="/images/adhd/adhd-support-overview-charts-running.png" alt="Charts and running figure representing comprehensive ADHD treatment" className="w-full max-w-md mx-auto rounded-lg mb-4" />
          
          <p className="mb-4">
            ADHD is now understood as a chronic, life-course persistent disorder requiring ongoing, integrated treatment 
            across development. Effective ADHD management typically involves a multimodal approach combining 
            several treatment strategies. There is no one-size-fits-all solution; the best treatment plan is individualized 
            based on age, symptom severity, co-occurring conditions, personal preferences, and life circumstances.
          </p>
          <p className="mb-4">
            The most effective treatment plans often include medication, behavioral interventions, educational or 
            workplace accommodations, lifestyle modifications, and support systems. Research consistently shows that 
            combination treatments are more effective than any single intervention alone. The landmark MTA study demonstrated that combined medication and behavioral treatment produced the best outcomes for children with ADHD.<sup className="text-[#10b981]">[1][2]</sup>
          </p>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Treatment Sequencing</h3>
          <p className="mb-4">
            Recent research on treatment sequencing suggests that starting with behavioral interventions first may be 
            more effective and cost less than medication-first approaches, particularly for reducing classroom discipline 
            referrals and disruptive behaviors.<sup className="text-[#10b981]">[3]</sup> However, the optimal treatment sequence depends on individual 
            circumstances, severity of symptoms, and treatment response. Many individuals benefit from combining both 
            medication and behavioral interventions from the outset.
          </p>
          

          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Access to Evidence-Based Treatment</h3>
          <p className="mb-4">
            Despite strong evidence supporting psychosocial interventions, there is a significant gap between research 
            and practice. Recent data indicates that only 31% of families of children with ADHD receive behavioral parent 
            training, and just 32% receive behavioral classroom management interventions.<sup className="text-[#10b981]">[4][5]</sup> Barriers include 
            workforce shortages, lack of available providers trained in evidence-based approaches, and practical challenges 
            such as transportation, childcare, and scheduling conflicts.
          </p>
        </div>
        
        {/* Multimodal Treatment Components */}
        <div className="my-8">
          <div className="bg-[#0c264d] text-center py-4 rounded-t-lg">
            <h3 className="text-[#ffd166] font-bold text-xl">Multimodal ADHD Treatment Approach</h3>
            <p className="text-white text-sm mt-1">Research shows combination treatments are more effective than any single intervention alone</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {/* Medication Card */}
            <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Pill className="w-6 h-6 text-[#2abcd4]" />
                <h4 className="text-[#0c264d] font-bold text-lg">Medication</h4>
              </div>
              <p className="text-sm mb-2">
                Stimulant and non-stimulant options to improve focus and reduce ADHD symptoms
              </p>
              <ul className="text-xs space-y-1 ml-4 list-disc text-gray-700">
                <li>First-line treatment for moderate to severe symptoms</li>
                <li>Multiple medication options available</li>
                <li>Individualized dosing and monitoring</li>
              </ul>
            </div>

            {/* Behavioral Interventions Card */}
            <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <BrainCircuit className="w-6 h-6 text-[#2abcd4]" />
                <h4 className="text-[#0c264d] font-bold text-lg">Behavioral Interventions</h4>
              </div>
              <p className="text-sm mb-2">
                Therapy, CBT, coaching, and skill development strategies
              </p>
              <ul className="text-xs space-y-1 ml-4 list-disc text-gray-700">
                <li>Cognitive Behavioral Therapy (CBT)</li>
                <li>Parent training and behavior management</li>
                <li>Executive function coaching</li>
              </ul>
            </div>

            {/* Educational & Workplace Card */}
            <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="w-6 h-6 text-[#2abcd4]" />
                <h4 className="text-[#0c264d] font-bold text-lg">Educational & Workplace</h4>
              </div>
              <p className="text-sm mb-2">
                IEP/504 plans and reasonable workplace accommodations
              </p>
              <ul className="text-xs space-y-1 ml-4 list-disc text-gray-700">
                <li>School-based accommodations and support</li>
                <li>Workplace modifications</li>
                <li>Environmental adaptations</li>
              </ul>
            </div>

            {/* Lifestyle Modifications Card */}
            <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-[#2abcd4]" />
                <h4 className="text-[#0c264d] font-bold text-lg">Lifestyle Modifications</h4>
              </div>
              <p className="text-sm mb-2">
                Exercise, sleep, nutrition, mindfulness, and stress management
              </p>
              <ul className="text-xs space-y-1 ml-4 list-disc text-gray-700">
                <li>Regular physical exercise</li>
                <li>Consistent sleep hygiene</li>
                <li>Balanced nutrition and hydration</li>
              </ul>
            </div>

            {/* Support Systems Card */}
            <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-[#2abcd4]" />
                <h4 className="text-[#0c264d] font-bold text-lg">Support Systems</h4>
              </div>
              <p className="text-sm mb-2">
                Family, friends, support groups, and community resources
              </p>
              <ul className="text-xs space-y-1 ml-4 list-disc text-gray-700">
                <li>Family education and involvement</li>
                <li>Peer support groups</li>
                <li>Community resources and advocacy</li>
              </ul>
            </div>

            {/* Self-Management Tools Card */}
            <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Settings className="w-6 h-6 text-[#2abcd4]" />
                <h4 className="text-[#0c264d] font-bold text-lg">Self-Management Tools</h4>
              </div>
              <p className="text-sm mb-2">
                Organizational systems, time management, and productivity strategies
              </p>
              <ul className="text-xs space-y-1 ml-4 list-disc text-gray-700">
                <li>Digital and physical planning tools</li>
                <li>Routine and structure building</li>
                <li>Environmental modifications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* References Section */}
        <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
          
          <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
          <div className="text-sm space-y-2 ml-4">
            <p>[1] MTA Cooperative Group. (1999). "A 14-month randomized clinical trial of treatment strategies for attention-deficit/hyperactivity disorder." <em>Archives of General Psychiatry</em>, 56(12), 1073-1086.</p>
            <p>[2] Cortese, S., Adamo, N., Del Giovane, C., et al. (2018). "Comparative efficacy and tolerability of medications for attention-deficit hyperactivity disorder in children, adolescents, and adults: a systematic review and network meta-analysis." <em>The Lancet Psychiatry</em>, 5(9), 727-738.</p>
            <p>[3] Pelham, W. E., Jr., et al. (2016). "Sequential, adaptive, behavioral and pharmacological treatment for childhood ADHD." <em>Journal of Clinical Child & Adolescent Psychology</em>, 45(4), 396-415.</p>
            <p>[4] Chacko, A., Merrill, B. M., Kofler, M. J., & Jensen, P. S. (2024). "Improving the efficacy and effectiveness of evidence-based psychosocial interventions for attention-deficit/hyperactivity disorder (ADHD) in children and adolescents: Embracing the complexity and living up to our potential." <em>Translational Psychiatry</em>, 14, 244.</p>
            <p>[5] Fabiano, G. A., et al. (2015). "A systematic review of meta-analyses of psychosocial treatment for attention-deficit/hyperactivity disorder." <em>Clinical Child and Family Psychology Review</em>, 18(1), 77-97.</p>
          </div>
          
          <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
          <div className="text-sm space-y-2">
            <p>American Academy of Pediatrics. (2011). "ADHD: Clinical practice guideline for the diagnosis, evaluation, and treatment of attention-deficit/hyperactivity disorder in children and adolescents." <em>Pediatrics</em>, 128(5), 1007-1022.</p>
            <p>Barkley, R. A. (2015). <em>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</em> (4th ed.). Guilford Press.</p>
            <p>National Institute of Mental Health. (2024). "Attention-Deficit/Hyperactivity Disorder." Retrieved from nimh.nih.gov</p>
            <p>Wolraich, M. L., Hagan, J. F., Allan, C., et al. (2019). "Clinical practice guideline for the diagnosis, evaluation, and treatment of attention-deficit/hyperactivity disorder in children and adolescents." <em>Pediatrics</em>, 144(4), e20192528.</p>
          </div>
        </div>
      </>
    );
  }

  function MedicalContent() {
    return (
      <>
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Medication</h2>
          <ImageWithFallback src="/images/adhd/adhd-support-overview-pills-scattered.png" alt="Scattered pills representing ADHD medication options" className="w-full max-w-md mx-auto rounded-lg mb-4" />
          
          <div className="bg-[#0c264d] border-l-4 border-gray-700 p-4 rounded mb-6">
            <p className="text-white text-sm">
              <strong>Important:</strong> All prescription and over-the-counter medications should only be used under the guidance and recommendations of a qualified medical professional. This information is for educational purposes only and does not replace professional medical advice.
            </p>
          </div>
          
          <p className="mb-4">
            Medication is often the first-line treatment for ADHD, particularly for moderate to severe symptoms. 
            Stimulant medications are highly effective for about 70-80% of people with ADHD,<sup>[33][34]</sup> with improvements 
            typically seen in attention, impulse control, and hyperactivity. Meta-analyses consistently demonstrate large effect sizes for stimulant medications across multiple outcome domains.<sup>[2][37]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Stimulant Medications</h3>
          <p className="mb-4">
            Despite the name, stimulants have a paradoxically calming effect for people with ADHD by increasing 
            dopamine and norepinephrine in the brain. Two main categories exist:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Methylphenidate-based:</strong> Ritalin, Concerta, Focalin, Daytrana patch. Available in short-acting (3-6 hours) and long-acting (8-12 hours) formulations<sup>[44][45]</sup></li>
            <li className="mb-2"><strong>Amphetamine-based:</strong> Adderall, Vyvanse, Dexedrine. Also available in various durations of action</li>
          </ul>
          <p className="mb-4">
            Common side effects include decreased appetite, difficulty sleeping, increased heart rate, and mild headaches. 
            Most side effects are mild and diminish over time or with dosage adjustment.
          </p>
        </div>

        <div>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Non-Stimulant Medications</h3>
          
          <p className="mb-4">
            Alternative options for those who don't respond to or can't tolerate stimulants:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Atomoxetine (Strattera):</strong> A norepinephrine reuptake inhibitor that takes several weeks to reach full effect</li>
            <li className="mb-2"><strong>Guanfacine (Intuniv):</strong> An alpha-2 adrenergic agonist, helpful for hyperactivity and impulsivity</li>
            <li className="mb-2"><strong>Clonidine (Kapvay):</strong> Another alpha-2 agonist, sometimes used in combination with stimulants</li>
            <li className="mb-2"><strong>Bupropion (Wellbutrin):</strong> Off-label use, particularly helpful if depression is also present</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Medication Considerations</h3>
          <ImageWithFallback src="/images/adhd/adhd-medical-pills-packaged.png" alt="Packaged medication representing medication considerations" className="w-full max-w-md mx-auto rounded-lg mb-4" />
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Finding the right medication and dosage may take time and adjustment</li>
            <li className="mb-2">Side effects are usually mild and often diminish over time</li>
            <li className="mb-2">Regular monitoring by a healthcare provider is important for safety and effectiveness</li>
            <li className="mb-2">Medication effectiveness can be influenced by sleep, nutrition, and stress levels</li>
          </ul>

          <div className="bg-[#0c264d] border-l-4 border-gray-700 p-4 rounded mb-6">
            <p className="text-white text-sm">
              <strong>Important:</strong> All prescription and over-the-counter medications should only be used under the guidance and recommendations of a qualified medical professional. This information is for educational purposes only and does not replace professional medical advice.
            </p>
          </div>

          <div className="flex justify-center my-8 clear-both">
            <ADHDMedicationComparison />
          </div>
        </div>
      </>
    );
  }

  function BehavioralContent() {
    return (
      <>
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Behavioral Interventions and Therapy</h2>
          <ImageWithFallback src="/images/adhd/adhd-support-overview-gray-happy-sad-brain.png" alt="Brain illustration showing emotional states in behavioral therapy" className="w-full max-w-md mx-auto rounded-lg mb-4" />
          
          <p className="mb-4">
            Evidence-based psychosocial interventions play a critical role in ADHD treatment, particularly for children 
            and adolescents. Recent research continues to refine these approaches to improve their efficacy and 
            effectiveness in real-world settings.<sup>[3][9]</sup>
          </p>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cognitive Behavioral Therapy (CBT)</h3>
          <p className="mb-4">
            CBT for ADHD helps individuals develop practical skills for managing symptoms and addressing negative 
            thought patterns. It focuses on organization, time management, planning, and challenging unhelpful beliefs 
            about oneself. Studies show that CBT is effective for adults with ADHD, with significant reductions in ADHD symptoms and improvements in executive functioning.<sup>[84][85][86]</sup>
          </p>
          
          <p className="mb-4">
            Modern CBT approaches for ADHD incorporate skills training modules targeting specific executive function deficits. These include cognitive restructuring to address negative self-perceptions that often develop after years of ADHD-related challenges, mindfulness techniques to improve sustained attention and reduce impulsivity, and practical problem-solving strategies for everyday situations. Group CBT formats have shown particular promise, offering peer support while being more cost-effective than individual therapy.<sup>[88][90]</sup>
          </p>
          
          <p className="mb-4">
            Recent developments in CBT delivery include digital therapeutics and smartphone-based interventions that provide real-time support and skill practice. These technology-enhanced approaches show promising results in improving treatment accessibility and engagement, particularly for young adults who may prefer app-based support over traditional therapy sessions.<sup>[112]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Behavioral Parent Training</h3>
          <ImageWithFallback src="/images/adhd/adhd-behavioral-family-therapy.png" alt="Family in therapy representing behavioral parent training" className="w-full max-w-md mx-auto rounded-lg mb-4" />
          <p className="mb-4">
            Behavioral Parent Training (BPT) is the most well-studied psychosocial intervention for ADHD and serves as 
            a first-line intervention for younger children with ADHD. BPT is based on operant conditioning and social 
            learning theories, teaching caregivers strategies for managing challenging behaviors, improving communication, 
            establishing routines, and providing consistent positive reinforcement.
          </p>
          <p className="mb-4">
            BPT focuses on both antecedents (effective instructions, clear rules) and consequences (active ignoring, 
            time-out from positive reinforcement, rewards for positive behaviors). Research shows statistically significant 
            improvements with small-to-medium effect sizes on child ADHD symptoms, parenting behaviors, parenting sense of 
            competence, and parental mental health, with benefits sustained over the course of a year.<sup>[8][26][80]</sup>
          </p>
          
          <h4 className="text-[#0c264d] font-semibold mb-2">Modern Adaptations and Digital Delivery</h4>
          <p className="mb-4">
            To address access barriers, researchers have developed innovative delivery formats including self-directed online programs, videoconference-based sessions, and brief intervention models that can be delivered in pediatric primary care settings. These adaptations show comparable effectiveness to traditional in-person formats while significantly improving accessibility for families facing transportation, work schedule, or geographic challenges.<sup>[110][111][112]</sup>
          </p>
          
          <p className="mb-4">
            Recent programs also incorporate cultural adaptations to better serve diverse families, recognizing that parenting practices and family structures vary across cultures. Tailored approaches that respect cultural values while teaching core behavioral principles have demonstrated improved engagement and outcomes in underserved communities.<sup>[100][102]</sup>
          </p>
          
          <h4 className="text-[#0c264d] font-semibold mb-2">Engagement and Access Challenges</h4>
          <p className="mb-4">
            Despite its effectiveness, many families who could benefit from BPT never receive it. Common barriers include 
            practical challenges (transportation, childcare, inflexible appointment times), perceptual barriers (expectations 
            about treatment), and cultural factors. Some families who enroll in BPT drop out before completion. Research continues to develop more accessible and engaging formats, including digital delivery and brief interventions that can be implemented in primary care settings.
          </p>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Behavioral Classroom Management</h3>
          <p className="mb-4">
            School-based behavioral interventions modify the classroom environment to support children with ADHD. Effective strategies include token economy systems, daily report cards that communicate between teachers and parents, preferential seating, and clear classroom rules with consistent consequences. These interventions directly target academic and social functioning in the setting where impairment is most pronounced.
          </p>
          
          <p className="mb-4">
            Contemporary classroom interventions emphasize positive reinforcement systems and proactive environmental modifications rather than punitive approaches. Teachers are trained to provide frequent, specific feedback and to break tasks into manageable segments. Daily behavior report cards allow for home-school collaboration, enabling parents to reinforce classroom successes at home.
          </p>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mindfulness-Based Interventions</h3>
          <p className="mb-4">
            Mindfulness training has emerged as a complementary approach to traditional behavioral interventions. Mindfulness-based programs teach present-moment awareness and non-judgmental acceptance of thoughts and feelings. For individuals with ADHD, these practices can improve attention regulation, reduce impulsivity, and enhance emotional control.
          </p>
          
          <p className="mb-4">
            Adaptations designed specifically for ADHD incorporate shorter meditation periods, more movement-based practices, and concrete skill-building exercises. Family-based mindfulness programs that teach both parents and children have shown benefits for reducing parental stress while improving child behavior regulation.<sup>[240][241][242]</sup> While still an emerging area, mindfulness appears most effective when combined with other evidence-based treatments rather than used in isolation.
          </p>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">ADHD Coaching</h3>
          <p className="mb-4">
            ADHD coaching is a collaborative partnership between coach and client focused on developing practical strategies and systems for managing daily life challenges. Unlike therapy, coaching is action-oriented and future-focused, helping individuals identify goals, create accountability structures, and develop personalized organizational systems.
          </p>
          
          <p className="mb-4">
            Coaches work with clients on time management, project planning, workplace productivity, academic success strategies, and relationship skills. Sessions typically occur weekly via phone or video call, with check-ins throughout the week. While research on ADHD coaching is still developing, preliminary studies suggest improvements in executive functioning, time management, and quality of life, particularly when coaching supplements medication or therapy.<sup>[163][164]</sup>
          </p>
        </div>
      </>
    );
  }

  function EducationalContent() {
    return (
      <>
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Accommodations and Support</h2>
          
          <p className="mb-4">
            Students with ADHD are entitled to accommodations under Section 504 of the Rehabilitation Act or through an Individualized Education Program (IEP) under the Individuals with Disabilities Education Act (IDEA).
          </p>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Academic Accommodations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Extended time on tests and assignments</li>
            <li className="mb-2">Preferential seating near the teacher, away from distractions</li>
            <li className="mb-2">Breaking long assignments into smaller chunks</li>
            <li className="mb-2">Providing written and verbal instructions</li>
            <li className="mb-2">Use of assistive technology (computer for writing, calculators)</li>
            <li className="mb-2">Modified homework load</li>
            <li className="mb-2">Frequent breaks during work periods</li>
            <li className="mb-2">Note-taking assistance or access to teacher notes</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Organizational Skills Training (OST)</h2>
          
          <p className="mb-4">
            Children and adolescents with ADHD have impaired organization, time management, and planning skills that 
            undermine their academic abilities and potential. Homework management and organizational skills predict 
            concurrent GPA and later academic outcomes.<sup>[135]</sup> Organizational Skills Training (OST) utilizes behavioral 
            methods to directly teach these skills to students with ADHD.
          </p>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">What OST Includes</h3>
          <p className="mb-4">
            OST programs focus on materials organization (organizing binders, backpacks, lockers), understanding time 
            and time management (estimating task duration, using planners), and planning larger assignments (breaking 
            projects into steps). Behavioral management procedures administered by counselors, parents, or teachers 
            reinforce skill use and progress in treatment.
          </p>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Age Groups and Effectiveness</h3>
          <p className="mb-4">
            OST has been primarily developed for middle school to early high school students (ages 10-14), though 
            recent work has adapted programs for high school students. Research demonstrates improvements in organizational 
            skills, planner use, homework performance, and reduced adolescent impairment.<sup>[146][148]</sup> Multicomponent 
            OST packages lead to meaningful improvements across multiple domains of academic functioning.<sup>[148]</sup>
          </p>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School-Based Implementation</h3>
          <p className="mb-4">
            Embedding OST in schools is key to enhancing reach and sustainability. Current work trains school counselors 
            to implement OST with students with ADHD. Studies show that OST delivered by school staff leads to improvements 
            in organization, time management, and planning skills—even when school counselors receive only minimal 
            training (about 2 hours) with no ongoing supervision.<sup>[153]</sup> Online tools are also being developed 
            to assist school staff with low-cost OST implementation.
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Workplace Accommodations</h2>
          <ImageWithFallback src="/images/adhd/adhd-work-overhead-organized.png" alt="Overhead view of organized workspace for workplace accommodations" className="w-full max-w-md mx-auto rounded-lg mb-4" />
          
          <p className="mb-4">
            Under the Americans with Disabilities Act (ADA), adults with ADHD may request reasonable accommodations:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Quiet workspace or noise-canceling headphones</li>
            <li className="mb-2">Flexible scheduling or work-from-home options</li>
            <li className="mb-2">Written instructions for complex tasks</li>
            <li className="mb-2">Regular check-ins with supervisors</li>
            <li className="mb-2">Task prioritization assistance</li>
            <li className="mb-2">Technology tools (apps, reminders, timers)</li>
          </ul>
          <p className="mb-4">
            Disclosure of ADHD to employers is a personal choice. Some find that disclosure allows them to access 
            helpful accommodations, while others prefer to implement unofficial strategies independently.
          </p>
        </div>
      </>
    );
  }

  function LifestyleContent() {
    return (
      <>
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Lifestyle Modifications</h2>
          
          <p className="mb-4">
            While lifestyle modifications alone are not sufficient to treat ADHD, they play a crucial supporting role 
            in symptom management and overall well-being. Research increasingly demonstrates that certain lifestyle 
            interventions can meaningfully improve ADHD symptoms, executive function, and quality of life when combined 
            with other evidence-based treatments.<sup>[173]</sup>
          </p>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Physical Exercise</h3>
          <p className="mb-4">
            Physical exercise has emerged as one of the most promising lifestyle interventions for ADHD management.<sup>[176]</sup> 
            A comprehensive meta-analysis of 14 studies found that acute and regular physical exercise significantly 
            improved attention, hyperactivity, impulsivity, anxiety, executive function, and social disorders in 
            children with ADHD.<sup>[176]</sup> The benefits appear to be most pronounced with moderate-to-vigorous 
            intensity aerobic exercise.<sup>[180]</sup>
          </p>
          
          <h4 className="text-[#0c264d] font-semibold mb-2">Neurobiological Mechanisms</h4>
          <p className="mb-4">
            Exercise benefits ADHD through multiple mechanisms: it increases dopamine and norepinephrine levels in 
            the brain (the same neurotransmitters targeted by ADHD medications),<sup>[182]</sup> enhances brain-derived neurotrophic 
            factor (BDNF) which supports neuroplasticity,<sup>[184]</sup> improves blood flow to the prefrontal cortex,<sup>[186]</sup> and reduces 
            overall stress and anxiety.<sup>[187]</sup> These neurochemical changes can improve attention, executive 
            function, and behavioral regulation.<sup>[189]</sup>
          </p>
          
          <h4 className="text-[#0c264d] font-semibold mb-2">Practical Recommendations</h4>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Duration and intensity:</strong> Aim for at least 30-60 minutes of moderate-to-vigorous 
            physical activity most days of the week<sup>[191]</sup></li>
            <li className="mb-2"><strong>Types of exercise:</strong> Aerobic activities (running, swimming, cycling), team sports, 
            martial arts, dance, and activities requiring coordination show particular benefits</li>
            <li className="mb-2"><strong>Timing:</strong> Morning exercise may be especially helpful for improving focus throughout 
            the school or work day</li>
            <li className="mb-2"><strong>Movement breaks:</strong> Even brief 5-10 minute activity breaks can improve immediate 
            attention and reduce restlessness<sup>[195]</sup></li>
            <li className="mb-2"><strong>Enjoyment matters:</strong> Choose activities that are engaging and fun to promote 
            consistency and adherence</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sleep Hygiene and Sleep Interventions</h3>
          <p className="mb-4">
            Sleep problems are highly prevalent in individuals with ADHD, affecting 25-55% of children and up to 80% 
            of adults with the condition.<sup>[198][199]</sup> Common sleep difficulties include delayed sleep onset, insomnia, 
            restless sleep, difficulty waking, and daytime sleepiness. Poor sleep significantly exacerbates ADHD symptoms, 
            creating a problematic cycle where ADHD interferes with sleep, and inadequate sleep worsens ADHD symptoms.<sup>[203]</sup>
          </p>
          
          <h4 className="text-[#0c264d] font-semibold mb-2">Sleep and ADHD Symptoms</h4>
          <p className="mb-4">
            Research demonstrates that sleep deprivation in typically developing children produces behaviors remarkably 
            similar to ADHD symptoms—including inattention, hyperactivity, and impulsivity.<sup>[205]</sup> For individuals with ADHD, 
            sleep problems compound existing difficulties with attention, emotional regulation, and executive function.<sup>[207]</sup> 
            Some researchers have proposed that sleep problems may contribute to the development or maintenance of ADHD 
            symptoms in certain individuals.<sup>[209]</sup>
          </p>
          
          <h4 className="text-[#0c264d] font-semibold mb-2">Evidence-Based Sleep Strategies</h4>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Consistent sleep schedule:</strong> Going to bed and waking up at the same time every day, 
            even on weekends, helps regulate the body's circadian rhythm</li>
            <li className="mb-2"><strong>Bedtime routine:</strong> A predictable 30-60 minute wind-down routine signals the body 
            to prepare for sleep (e.g., dim lights, calming activities, hygiene routine)</li>
            <li className="mb-2"><strong>Screen time limits:</strong> Avoid screens 1-2 hours before bed, as blue light suppresses 
            melatonin production. Use blue light filters if screens are necessary<sup>[213]</sup></li>
            <li className="mb-2"><strong>Sleep environment:</strong> Keep the bedroom cool (65-68°F), dark, and quiet. Consider 
            blackout curtains, white noise machines, or weighted blankets</li>
            <li className="mb-2"><strong>Avoid stimulants late in day:</strong> Monitor caffeine intake and medication timing, 
            as stimulant medications can interfere with sleep onset</li>
            <li className="mb-2"><strong>Physical activity:</strong> Regular exercise improves sleep quality, but avoid vigorous 
            exercise close to bedtime</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Nutrition and Diet</h3>
          <p className="mb-4">
            The relationship between diet and ADHD symptoms is complex and an area of ongoing research. While no single 
            dietary intervention has been shown to be universally effective for ADHD, certain nutritional considerations may 
            be helpful for some individuals.
          </p>
          
          <h4 className="text-[#0c264d] font-semibold mb-2">Omega-3 Fatty Acids</h4>
          <p className="mb-4">
            Some research suggests that omega-3 fatty acid supplementation (particularly EPA and DHA) may produce modest 
            improvements in ADHD symptoms, especially inattention.<sup>[223]</sup> While the effect sizes are generally small compared 
            to medication, omega-3s are well-tolerated and may provide complementary benefits.
          </p>
          
          <h4 className="text-[#0c264d] font-semibold mb-2">Artificial Food Colorings and Additives</h4>
          <p className="mb-4">
            Research on artificial food colorings and preservatives shows mixed results. Some meta-analyses find small 
            but statistically significant effects of eliminating artificial additives on hyperactivity in children.<sup>[230]</sup> While 
            not all children with ADHD are sensitive to these substances, a small subset may benefit from dietary 
            restriction.
          </p>
          
          <h4 className="text-[#0c264d] font-semibold mb-2">General Nutritional Recommendations</h4>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Balanced, regular meals to maintain stable blood sugar</li>
            <li className="mb-2">Adequate protein intake, especially at breakfast</li>
            <li className="mb-2">Limiting refined sugar and processed foods</li>
            <li className="mb-2">Ensuring adequate hydration throughout the day</li>
            <li className="mb-2">Considering iron and zinc supplementation if deficiencies are present</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mindfulness and Meditation</h3>
          <p className="mb-4">
            Mindfulness-based interventions show promise for individuals with ADHD, with research demonstrating improvements 
            in attention, executive functioning, and emotional regulation.<sup>[241]</sup> Mindfulness meditation training helps 
            individuals develop meta-awareness of their internal experiences and build skills for redirecting attention. 
            While mindfulness practice can be challenging for individuals with ADHD, adapted programs with shorter sessions 
            and more structure have shown positive results.<sup>[245]</sup>
          </p>
        </div>
      </>
    );
  }

  function SelfManagementContent() {
    return (
      <>
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Self-Management Strategies and Tools</h2>
          <ImageWithFallback src="/images/adhd/adhd-tools-organizing-at-work.png" alt="Organizing tools at work representing self-management strategies" className="w-full max-w-md mx-auto rounded-lg mb-4" />
          
          <p className="mb-6">
            Individuals with ADHD benefit from developing personalized systems and tools to compensate for executive function 
            challenges. Effective self-management involves creating external supports to reduce cognitive load and 
            build consistent routines.
          </p>
          
          <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
            <p className="text-sm">
              <strong>Key Insight:</strong> The goal isn't to work harder, but to work smarter by building systems that compensate 
              for ADHD-related executive function challenges.
            </p>
          </div>
        </div>

        {/* YouTube Video Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h3 className="text-[#0c264d] font-bold mb-4 text-xl text-center">Finding Motivation with ADHD</h3>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src="https://www.youtube.com/embed/OM0Xv0eVGtY"
              title="Video about finding motivation for those with ADHD"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Time Management Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Time Management Strategies</h2>
          
          <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
            <div className="space-y-3">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Visual Timers and Alarms</div>
                <div className="text-sm">External cues help compensate for difficulty with time perception</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Time Blocking</div>
                <div className="text-sm">Scheduling specific activities in dedicated time slots</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">The Pomodoro Technique</div>
                <div className="text-sm">Working in focused 25-minute intervals with short breaks</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Transition Warnings</div>
                <div className="text-sm">Setting alerts 5-10 minutes before activities change</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Time Management for ADHD</h3>
            <div className="flex justify-center max-w-2xl mx-auto">
              <iframe
                className="w-full aspect-video rounded-md"
                src="https://www.youtube.com/embed/YLkOZhROvA4"
                title="Time Management Strategies for ADHD"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Organization Systems Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Organization Systems</h2>
          
          <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
            <div className="space-y-3">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Everything in Its Place</div>
                <div className="text-sm">Consistent homes for commonly used items (keys, wallet, phone)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Physical Filing Systems</div>
                <div className="text-sm">Color-coding, labeled bins, and visual organization</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Digital Organization</div>
                <div className="text-sm">Cloud storage, naming conventions, and folder structures</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Minimal Clutter</div>
                <div className="text-sm">Reducing visual distractions and decision fatigue</div>
              </div>
            </div>
          </div>
        </div>

        {/* Task Management Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Task Management</h2>
          
          <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
            <div className="space-y-3">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">To-Do Lists</div>
                <div className="text-sm">External memory aids to track commitments and responsibilities</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Breaking Down Projects</div>
                <div className="text-sm">Dividing large tasks into smaller, manageable steps</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Prioritization Methods</div>
                <div className="text-sm">Using systems like Eisenhower Matrix (urgent/important)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Accountability Partners</div>
                <div className="text-sm">Body doubling or check-ins with others for motivation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology and Apps Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Technology and Apps</h2>
          
          <p className="mb-6">
            Digital tools can provide structure and reminders for individuals with ADHD:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="font-bold text-[#0c264d] mb-2">Task Management Apps</div>
              <div className="text-sm">Todoist, Things, TickTick for tracking responsibilities</div>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="font-bold text-[#0c264d] mb-2">Calendar Apps</div>
              <div className="text-sm">Google Calendar, Fantastical with multiple reminders</div>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="font-bold text-[#0c264d] mb-2">Focus Apps</div>
              <div className="text-sm">Forest, Freedom, Cold Turkey to block distractions</div>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="font-bold text-[#0c264d] mb-2">Note-Taking Apps</div>
              <div className="text-sm">Notion, Evernote, OneNote for capturing ideas</div>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="font-bold text-[#0c264d] mb-2">Habit Trackers</div>
              <div className="text-sm">Habitica, Streaks for building consistent routines</div>
            </div>
          </div>
        </div>

        {/* Environmental Modifications Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental Modifications</h2>
          
          <p className="mb-6">
            Optimizing the physical environment can significantly reduce distractions and support focus:
          </p>
          
          <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
            <div className="space-y-3">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Noise Management</div>
                <div className="text-sm">Noise-canceling headphones or white noise for auditory distractions</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Visual Clarity</div>
                <div className="text-sm">Removing visual clutter from work surfaces</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Good Lighting</div>
                <div className="text-sm">Adequate lighting to reduce eye strain and fatigue</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Movement Options</div>
                <div className="text-sm">Fidget tools or standing desk options for physical movement needs</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Dedicated Workspace</div>
                <div className="text-sm">Separate workspace from leisure areas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Emotional Regulation Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Emotional Regulation Strategies</h2>
          
          <p className="mb-6">
            Managing emotional dysregulation is often a key challenge for individuals with ADHD:<sup>[279]</sup>
          </p>
          
          <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
            <div className="space-y-3">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Awareness Building</div>
                <div className="text-sm">Developing awareness of emotional triggers and patterns</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Response Pause</div>
                <div className="text-sm">Building a pause between stimulus and response</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Relaxation Techniques</div>
                <div className="text-sm">Deep breathing, progressive muscle relaxation</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Challenging Negative Thoughts</div>
                <div className="text-sm">Identifying and challenging negative self-talk</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Seeking Support</div>
                <div className="text-sm">Reaching out to friends, family, or therapist when overwhelmed</div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
            <p className="text-sm">
              <strong>Remember:</strong> Self-management strategies work best when tailored to your unique needs and consistently 
              practiced. Be patient with yourself as you develop new habits and systems.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <article className="max-w-full w-full">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>
      
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
          ADHD: Support & Management
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger value="overview" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Overview & Approach
          </TabsTrigger>
          <TabsTrigger value="medical" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Medical Treatments
          </TabsTrigger>
          <TabsTrigger value="behavioral" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Behavioral & Therapeutic
          </TabsTrigger>
          <TabsTrigger value="educational" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Educational & Workplace
          </TabsTrigger>
          <TabsTrigger value="lifestyle" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Lifestyle Modifications
          </TabsTrigger>
          <TabsTrigger value="self-management" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Self-Management & Tools
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <OverviewContent />
        </TabsContent>

        <TabsContent value="medical" className="space-y-8">
          <MedicalContent />
        </TabsContent>

        <TabsContent value="behavioral" className="space-y-8">
          <BehavioralContent />
        </TabsContent>

        <TabsContent value="educational" className="space-y-8">
          <EducationalContent />
        </TabsContent>

        <TabsContent value="lifestyle" className="space-y-8">
          <LifestyleContent />
        </TabsContent>

        <TabsContent value="self-management" className="space-y-8">
          <SelfManagementContent />
        </TabsContent>
      </Tabs>

      <div className="flex justify-end my-8">
        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
      </div>

      <section className="mt-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] MTA Cooperative Group. (1999). "A 14-month randomized clinical trial of treatment strategies for attention-deficit/hyperactivity disorder." <em>Archives of General Psychiatry</em>, 56(12), 1073-1086.</p>
          <p>[2] Cortese, S., Adamo, N., Del Giovane, C., et al. (2018). "Comparative efficacy and tolerability of medications for attention-deficit hyperactivity disorder in children, adolescents, and adults: a systematic review and network meta-analysis." <em>The Lancet Psychiatry</em>, 5(9), 727-738.</p>
          <p>[3] Chacko, A., Merrill, B. M., Kofler, M. J., & Jensen, P. S. (2024). "Improving the efficacy and effectiveness of evidence-based psychosocial interventions for attention-deficit/hyperactivity disorder (ADHD) in children and adolescents: Embracing the complexity and living up to our potential." <em>Translational Psychiatry</em>, 14, 244.</p>
          <p>[4] Faraone, S. V., Biederman, J., & Mick, E. (2006). "The age-dependent decline of attention deficit hyperactivity disorder: A meta-analysis of follow-up studies." <em>Psychological Medicine</em>, 36(2), 159-165.</p>
          <p>[5] Biederman, J., Petty, C. R., Evans, M., Small, J., & Faraone, S. V. (2010). "How persistent is ADHD? A controlled 10-year follow-up study of boys with ADHD." <em>Psychiatry Research</em>, 177(3), 299-304.</p>
          <p>[8] Pelham, W. E., Jr., & Fabiano, G. A. (2008). "Evidence-based psychosocial treatments for attention-deficit/hyperactivity disorder." <em>Journal of Clinical Child & Adolescent Psychology</em>, 37(1), 184-214.</p>
          <p>[9] Evans, S. W., Owens, J. S., Wymbs, B. T., & Ray, A. R. (2018). "Evidence-based psychosocial treatments for children and adolescents with attention deficit/hyperactivity disorder." <em>Journal of Clinical Child & Adolescent Psychology</em>, 47(2), 157-198.</p>
          <p>[26] Fabiano, G. A., et al. (2015). "A systematic review of meta-analyses of psychosocial treatment for attention-deficit/hyperactivity disorder." <em>Clinical Child and Family Psychology Review</em>, 18(1), 77-97.</p>
          <p>[33] Faraone, S. V., & Buitelaar, J. (2010). "Comparing the efficacy of stimulants for ADHD in children and adolescents using meta-analysis." <em>European Child & Adolescent Psychiatry</em>, 19(4), 353-364.</p>
          <p>[34] Spencer, T., Biederman, J., Wilens, T., et al. (1996). "Pharmacotherapy of attention-deficit hyperactivity disorder across the life cycle." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 35(4), 409-432.</p>
          <p>[37] Faraone, S. V., & Glatt, S. J. (2010). "A comparison of the efficacy of medications for adult attention-deficit/hyperactivity disorder using meta-analysis of effect sizes." <em>The Journal of Clinical Psychiatry</em>, 71(6), 754-763.</p>
          <p>[44] Pelham, W. E., et al. (2001). "Once-a-day Concerta methylphenidate versus three-times-daily methylphenidate in laboratory and natural settings." <em>Pediatrics</em>, 107(6), E105.</p>
          <p>[45] Biederman, J., et al. (2003). "A comparison of once-daily and divided doses of modafinil in children with attention-deficit/hyperactivity disorder." <em>Journal of Clinical Psychiatry</em>, 64(9), 1092-1096.</p>
          <p>[80] Fabiano, G. A., et al. (2009). "A meta-analysis of behavioral treatments for attention-deficit/hyperactivity disorder." <em>Clinical Psychology Review</em>, 29(2), 129-140.</p>
          <p>[84] Safren, S. A., et al. (2005). "Cognitive-behavioral therapy for ADHD in medication-treated adults with continued symptoms." <em>Behaviour Research and Therapy</em>, 43(7), 831-842.</p>
          <p>[85] Ramsay, J. R., & Rostain, A. L. (2008). <em>Cognitive-Behavioral Therapy for Adult ADHD: An Integrative Psychosocial and Medical Approach</em>. Routledge.</p>
          <p>[86] Solanto, M. V., Marks, D. J., Wasserstein, J., et al. (2010). "Efficacy of meta-cognitive therapy for adult ADHD." <em>American Journal of Psychiatry</em>, 167(8), 958-968.</p>
          <p>[88] Virta, M., et al. (2010). "Adults with ADHD benefit from cognitive-behaviorally oriented group rehabilitation." <em>Journal of Attention Disorders</em>, 12(3), 218-226.</p>
          <p>[90] Bramham, J., et al. (2009). "Evaluation of group cognitive behavioral therapy for adults with ADHD." <em>Journal of Attention Disorders</em>, 12(5), 434-441.</p>
          <p>[100] Epstein, J. N., et al. (2015). "The role of children's ethnicity in the relationship between teacher ratings of ADHD and observed classroom behavior." <em>Journal of Consulting and Clinical Psychology</em>, 83(5), 960-964.</p>
          <p>[102] Matos, M., Bauermeister, J. J., & Bernal, G. (2009). "Parent-child interaction therapy for Puerto Rican preschool children with ADHD and behavior problems." <em>Family Process</em>, 48(2), 232-252.</p>
          <p>[110] Jones, D. J., et al. (2013). "Technology-enhanced program for child disruptive behavior disorders." <em>Journal of Clinical Child & Adolescent Psychology</em>, 43(1), 88-101.</p>
          <p>[111] Xie, Y., et al. (2013). "Effectiveness of videoconferencing on teaching parent training skills to parents of children with ADHD." <em>Telemedicine and e-Health</em>, 19(3), 192-199.</p>
          <p>[112] Franke, N., et al. (2018). "Technology-assisted parenting interventions for families of children with ADHD." <em>Journal of Child and Family Studies</em>, 27(9), 2699-2713.</p>
          <p>[135] Langberg, J. M., et al. (2011). "Patterns and predictors of adolescent academic achievement and performance in a sample of children with ADHD." <em>Journal of Clinical Child & Adolescent Psychology</em>, 40(4), 519-531.</p>
          <p>[146] Gureasko-Moore, S., DuPaul, G. J., & White, G. P. (2006). "The effects of self-management in general education classrooms on the organizational skills of adolescents with ADHD." <em>Behavior Modification</em>, 30(2), 159-183.</p>
          <p>[148] Vidal, R., et al. (2013). "Organizational skills training for children with ADHD: A randomized controlled trial." <em>Journal of Clinical Child & Adolescent Psychology</em>, 42(1), 41-52.</p>
          <p>[153] Evans, S. W., Langberg, J. M., Schultz, B. K., et al. (2016). "Evaluation of a school-based treatment program for young adolescents with ADHD." <em>Journal of Consulting and Clinical Psychology</em>, 84(1), 15-30.</p>
          <p>[163] Safren, S. A. (2006). "Cognitive-behavioral approaches to ADHD treatment in adulthood." <em>The Journal of Clinical Psychiatry</em>, 67(Suppl 8), 46-50.</p>
          <p>[164] Ramsay, J. R. (2010). <em>Nonmedication Treatments for Adult ADHD</em>. American Psychological Association.</p>
          <p>[173] Faraone, S. V., et al. (2015). "Attention-deficit/hyperactivity disorder." <em>Nature Reviews Disease Primers</em>, 1, 15020.</p>
          <p>[176] Cerrillo-Urbina, A. J., et al. (2015). "The effects of physical exercise in children with ADHD: A systematic review and meta-analysis." <em>Child: Care, Health and Development</em>, 41(6), 779-788.</p>
          <p>[180] Medina, J. A., et al. (2010). "Exercise impact on sustained attention of ADHD children, methylphenidate effects." <em>ADHD Attention Deficit and Hyperactivity Disorders</em>, 2(1), 49-58.</p>
          <p>[182] Wigal, S. B., et al. (2013). "Exercise: Applications to childhood ADHD." <em>Journal of Attention Disorders</em>, 17(4), 279-290.</p>
          <p>[184] Neeper, S. A., et al. (1995). "Exercise and brain neurotrophins." <em>Nature</em>, 373(6510), 109.</p>
          <p>[186] Hillman, C. H., Erickson, K. I., & Kramer, A. F. (2008). "Be smart, exercise your heart: Exercise effects on brain and cognition." <em>Nature Reviews Neuroscience</em>, 9(1), 58-65.</p>
          <p>[187] Ratey, J. J., & Loehr, J. E. (2011). "The positive impact of physical activity on cognition during adulthood." <em>Reviews in the Neurosciences</em>, 22(2), 171-185.</p>
          <p>[189] Chang, Y. K., et al. (2012). "Effect of acute exercise on executive function in children with ADHD." <em>Archives of Clinical Neuropsychology</em>, 27(2), 225-237.</p>
          <p>[191] Fedewa, A. L., & Ahn, S. (2011). "The effects of physical activity and physical fitness on children's achievement and cognitive outcomes." <em>Research Quarterly for Exercise and Sport</em>, 82(3), 521-535.</p>
          <p>[195] Mahar, M. T., et al. (2006). "Effects of a classroom-based program on physical activity and on-task behavior." <em>Medicine & Science in Sports & Exercise</em>, 38(12), 2086-2094.</p>
          <p>[198] Cortese, S., et al. (2009). "Sleep in children with ADHD: Meta-analysis of subjective and objective studies." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 48(9), 894-908.</p>
          <p>[199] Sobanski, E., et al. (2008). "Sleep in adults with ADHD before and during treatment with methylphenidate." <em>Sleep</em>, 31(3), 375-381.</p>
          <p>[203] Gruber, R., et al. (2011). "Impact of sleep extension and restriction on children's emotional lability and impulsivity." <em>Pediatrics</em>, 130(5), e1155-e1161.</p>
          <p>[205] Fallone, G., et al. (2005). "Experimental restriction of sleep opportunity in children: Effects on teacher ratings." <em>Sleep</em>, 28(12), 1561-1567.</p>
          <p>[207] Corkum, P., Tannock, R., & Moldofsky, H. (1998). "Sleep disturbances in children with ADHD." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 37(6), 637-646.</p>
          <p>[209] Chervin, R. D., et al. (1997). "Symptoms of sleep disorders, inattention, and hyperactivity in children." <em>Sleep</em>, 20(12), 1185-1192.</p>
          <p>[213] Cajochen, C., et al. (2011). "Evening exposure to LED-backlit computer screen affects circadian physiology and cognitive performance." <em>Journal of Applied Physiology</em>, 110(5), 1432-1438.</p>
          <p>[223] Bloch, M. H., & Qawasmi, A. (2011). "Omega-3 fatty acid supplementation for the treatment of children with ADHD symptomatology." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 50(10), 991-1000.</p>
          <p>[230] Nigg, J. T., et al. (2012). "Meta-analysis of ADHD symptoms, restriction diet, and synthetic food color additives." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 51(1), 86-97.</p>
          <p>[240] Zylowska, L., et al. (2008). "Mindfulness meditation training in adults and adolescents with ADHD." <em>Journal of Attention Disorders</em>, 11(6), 737-746.</p>
          <p>[241] Cairncross, M., & Miller, C. J. (2016). "The effectiveness of mindfulness-based therapies for ADHD." <em>Journal of Attention Disorders</em>, 24(5), 627-643.</p>
          <p>[242] Mitchell, J. T., et al. (2017). "A pilot trial of mindfulness meditation training for ADHD in adulthood." <em>Journal of Attention Disorders</em>, 21(13), 1105-1120.</p>
          <p>[245] van de Weijer-Bergsma, E., et al. (2012). "The effectiveness of mindfulness training on behavioral problems and attentional functioning in adolescents with ADHD." <em>Journal of Child and Family Studies</em>, 21(5), 775-787.</p>
          <p>[279] Shaw, P., Stringaris, A., Nigg, J., & Leibenluft, E. (2014). "Emotion dysregulation in attention deficit hyperactivity disorder." <em>American Journal of Psychiatry</em>, 171(3), 276-293.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('adhd'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to ADHD
        </a>
      </div>
    </article>
  );
}