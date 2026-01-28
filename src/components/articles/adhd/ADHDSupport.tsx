import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ADHDMedicationComparison } from '../../infographics/ADHDMedicationComparison';
import { ADHDTreatmentApproach } from '../../infographics/ADHDTreatmentApproach';
import therapyImage from 'figma:asset/f12f709849b6839a0a4499109872ea789d41c6d2.png';
import ostImage from 'figma:asset/e24b9f991a0bf5650d709e95ee3b8e5421658d13.png';
import workplaceImage from 'figma:asset/8757312e62b17511de2b42f6ac8bd5c7095f5106.png';
import orgToolsImage from 'figma:asset/38f491699e594ed9745871f0bc1b6440f70fe696.png';
import treatmentGraphic from 'figma:asset/45f06deba4dd26e24763f9bcc1125851896145cb.png';
import medicationImage from 'figma:asset/fee0a977149f8155f68f161947834f9e92da2ac1.png';
import supportImage from 'figma:asset/8c75ea2eb513606021783d9a6512df3d945d85fe.png';
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
          <div className="flex justify-center mb-6">
            <img src={supportImage} alt="Mental health support illustration" className="w-64 h-64 object-contain" />
          </div>
          
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Comprehensive Treatment Approaches</h2>
          
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
          
          <div className="flex justify-center my-6">
            <img src={treatmentGraphic} alt="ADHD treatment components illustration" className="w-64 h-64 object-contain" />
          </div>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Treatment Sequencing</h3>
          <p className="mb-4">
            Recent research on treatment sequencing suggests that starting with behavioral interventions first may be 
            more effective and cost less than medication-first approaches, particularly for reducing classroom discipline 
            referrals and disruptive behaviors.<sup className="text-[#10b981]">[3]</sup> However, the optimal treatment sequence depends on individual 
            circumstances, severity of symptoms, and treatment response. Many individuals benefit from combining both 
            medication and behavioral interventions from the outset.
          </p>
          
          <div className="flex justify-center my-6">
            <img src={medicationImage} alt="ADHD medication options" className="w-64 h-64 object-contain" />
          </div>
          
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
        {/* Medication Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Medication</h2>
          
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

        {/* Non-Stimulant Medications Section */}
        <div>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Non-Stimulant Medications</h3>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMG1lZGljaW5lfGVufDF8fHx8MTc2NjcwNzYxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Pharmacy medication representing treatment options"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
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
        {/* Behavioral Interventions Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Behavioral Interventions and Therapy</h2>
          
          <img 
            src={therapyImage} 
            alt="Family therapy session with diverse participants in a warm, welcoming environment"
            className="w-96 h-auto rounded-md border border-gray-300 md:float-none lg:float-left md:mx-auto lg:mr-6 mb-4"
          />
          
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
        {/* Educational Accommodations Section */}
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

        {/* Organizational Skills Training Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Organizational Skills Training (OST)</h2>
          
          <img 
            src={ostImage} 
            alt="Student organizing materials with planner, checklist, and study supplies on desk"
            className="w-96 h-auto rounded-md border border-gray-300 md:float-none lg:float-left md:mx-auto lg:mr-6 mb-4"
          />
          
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

        {/* Workplace Accommodations Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Workplace Accommodations</h2>
          
          <img 
            src={workplaceImage} 
            alt="Workplace productivity and organization with digital tools and collaborative work environment"
            className="w-96 h-auto rounded-md border border-gray-300 md:float-none lg:float-left md:mx-auto lg:mr-6 mb-4"
          />
          
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
        {/* Lifestyle Modifications Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Lifestyle Modifications</h2>
          
          <p className="mb-4">
            While lifestyle modifications alone are not sufficient to treat ADHD, they play a crucial supporting role 
            in symptom management and overall well-being. Research increasingly demonstrates that certain lifestyle 
            interventions can meaningfully improve ADHD symptoms, executive function, and quality of life when combined 
            with other evidence-based treatments.<sup>[173]</sup>
          </p>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVyY2lzZSUyMGZpdG5lc3N8ZW58MXx8fHwxNzY2NzA3NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Exercise and fitness for ADHD management"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
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
        {/* Self-Management Tools Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">🛠️ Self-Management Strategies and Tools</h2>
          
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
          <h3 className="text-[#0c264d] font-bold mb-4 text-xl text-center">📹 Finding Motivation with ADHD</h3>
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
                <div className="font-bold text-[#0c264d] mb-1">⏱️ Visual Timers and Alarms</div>
                <div className="text-sm">External cues help compensate for difficulty with time perception</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Time Blocking</div>
                <div className="text-sm">Scheduling specific activities in dedicated time slots</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">🍅 The Pomodoro Technique</div>
                <div className="text-sm">Working in focused 25-minute intervals with short breaks</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">🔔 Transition Warnings</div>
                <div className="text-sm">Setting alerts 5-10 minutes before activities change</div>
              </div>
            </div>
          </div>

          {/* Time Management Video */}
          <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">📺 Time Management for ADHD</h3>
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
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">📦 Organization Systems</h2>
          
          <div className="flex justify-center mb-6">
            <img 
              src={orgToolsImage} 
              alt="Digital organization and productivity tools on laptop and smartphone"
              className="w-full max-w-2xl h-auto rounded-md border border-gray-300"
            />
          </div>
          
          <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
            <div className="space-y-3">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">🔑 Everything in Its Place</div>
                <div className="text-sm">Consistent homes for commonly used items (keys, wallet, phone)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">🗂️ Physical Filing Systems</div>
                <div className="text-sm">Color-coding, labeled bins, and visual organization</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">☁️ Digital Organization</div>
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
                <div className="font-bold text-[#0c264d] mb-1">🧩 Breaking Down Projects</div>
                <div className="text-sm">Dividing large tasks into smaller, manageable steps</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Prioritization Methods</div>
                <div className="text-sm">Using systems like Eisenhower Matrix (urgent/important)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">🤝 Accountability Partners</div>
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
              <div className="font-bold text-[#0c264d] mb-2">🎮 Habit Trackers</div>
              <div className="text-sm">Habitica, Streaks for building consistent routines</div>
            </div>
          </div>
        </div>

        {/* Environmental Modifications Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">🏠 Environmental Modifications</h2>
          
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
                <div className="font-bold text-[#0c264d] mb-1">🧹 Visual Clarity</div>
                <div className="text-sm">Removing visual clutter from work surfaces</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Good Lighting</div>
                <div className="text-sm">Adequate lighting to reduce eye strain and fatigue</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">🤸 Movement Options</div>
                <div className="text-sm">Fidget tools or standing desk options for physical movement needs</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">🚪 Dedicated Workspace</div>
                <div className="text-sm">Separate workspace from leisure areas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Emotional Regulation Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">💭 Emotional Regulation Strategies</h2>
          
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
                <div className="font-bold text-[#0c264d] mb-1">⏸️ Response Pause</div>
                <div className="text-sm">Building a pause between stimulus and response</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">🧘 Relaxation Techniques</div>
                <div className="text-sm">Deep breathing, progressive muscle relaxation</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">🗣️ Challenging Negative Thoughts</div>
                <div className="text-sm">Identifying and challenging negative self-talk</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">🤗 Seeking Support</div>
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

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-8">
          <OverviewContent />
        </TabsContent>

        {/* Medical Treatments Tab */}
        <TabsContent value="medical" className="space-y-8">
          <MedicalContent />
        </TabsContent>

        {/* Behavioral & Therapeutic Tab */}
        <TabsContent value="behavioral" className="space-y-8">
          <BehavioralContent />
        </TabsContent>

        {/* Educational & Workplace Tab */}
        <TabsContent value="educational" className="space-y-8">
          <EducationalContent />
        </TabsContent>

        {/* Lifestyle Modifications Tab */}
        <TabsContent value="lifestyle" className="space-y-8">
          <LifestyleContent />
        </TabsContent>

        {/* Self-Management & Tools Tab */}
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
          <p>[6] Barkley, R. A. (2015). "Etiologies of ADHD." In R. A. Barkley (Ed.), <em>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</em> (4th ed., pp. 356-390). Guilford Press.</p>
          <p>[7] Wolraich, M. L., Hagan, J. F., Allan, C., et al. (2019). "Clinical practice guideline for the diagnosis, evaluation, and treatment of attention-deficit/hyperactivity disorder in children and adolescents." <em>Pediatrics</em>, 144(4), e20192528.</p>
          <p>[8] Pelham, W. E., Jr., & Fabiano, G. A. (2008). "Evidence-based psychosocial treatments for attention-deficit/hyperactivity disorder." <em>Journal of Clinical Child & Adolescent Psychology</em>, 37(1), 184-214.</p>
          <p>[9] Evans, S. W., Owens, J. S., Wymbs, B. T., & Ray, A. R. (2018). "Evidence-based psychosocial treatments for children and adolescents with attention deficit/hyperactivity disorder." <em>Journal of Clinical Child & Adolescent Psychology</em>, 47(2), 157-198.</p>
          <p>[10] Hinshaw, S. P. (2018). "Attention deficit hyperactivity disorder (ADHD): Controversy, developmental mechanisms, and multiple levels of analysis." <em>Annual Review of Clinical Psychology</em>, 14, 291-316.</p>
          <p>[11] Jensen, P. S., & Kenny, D. T. (2004). "The effects of yoga on the attention and behavior of boys with attention-deficit/hyperactivity disorder (ADHD)." <em>Journal of Attention Disorders</em>, 7(4), 205-216.</p>
          <p>[12] Pfiffner, L. J., & Haack, L. M. (2014). "Behavior management for school-aged children with ADHD." <em>Child and Adolescent Psychiatric Clinics of North America</em>, 23(4), 731-746.</p>
          <p>[13] Swanson, J. M., et al. (2008). "Young adult outcome of hyperactive children: Adaptive functioning in major life activities." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 47(2), 192-202.</p>
          <p>[14] Conners, C. K., et al. (2001). "Multimodal treatment of ADHD in the MTA: An alternative outcome analysis." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 40(2), 159-167.</p>
          <p>[15] MTA Cooperative Group. (2004). "National Institute of Mental Health Multimodal Treatment Study of ADHD follow-up: 24-month outcomes of treatment strategies for attention-deficit/hyperactivity disorder." <em>Pediatrics</em>, 113(4), 754-761.</p>
          <p>[16] Hinshaw, S. P., & Arnold, L. E., & MTA Cooperative Group. (2015). "Attention-deficit hyperactivity disorder, multimodal treatment, and longitudinal outcome: Evidence, paradox, and challenge." <em>WIREs Cognitive Science</em>, 6(1), 39-52.</p>
          <p>[17] Pelham, W. E., Jr., et al. (2016). "Sequential, adaptive, behavioral and pharmacological treatment for childhood ADHD." <em>Journal of Clinical Child & Adolescent Psychology</em>, 45(4), 396-415.</p>
          <p>[18] Fabiano, G. A., et al. (2012). "A comparison of behavioral parent training programs for fathers of children with attention-deficit/hyperactivity disorder." <em>Behavior Therapy</em>, 43(4), 763-773.</p>
          <p>[19] Chronis, A. M., Chacko, A., Fabiano, G. A., Wymbs, B. T., & Pelham, W. E., Jr. (2004). "Enhancements to the behavioral parent training paradigm for families of children with ADHD: Review and future directions." <em>Clinical Child and Family Psychology Review</em>, 7(1), 1-27.</p>
          <p>[20] Sibley, M. H., Kuriyan, A. B., Evans, S. W., Waxmonsky, J. G., & Smith, B. H. (2014). "Pharmacological and psychosocial treatments for adolescents with ADHD: An updated systematic review of the literature." <em>Clinical Psychology Review</em>, 34(3), 218-232.</p>
          <p>[21] Barkley, R. A., et al. (2000). "Multi-method psycho-educational intervention for preschool children with disruptive behavior: Preliminary results at post-treatment." <em>Journal of Child Psychology and Psychiatry</em>, 41(3), 319-332.</p>
          <p>[22] Molina, B. S., et al. (2009). "The MTA at 8 years: Prospective follow-up of children treated for combined-type ADHD in a multisite study." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 48(5), 484-500.</p>
          <p>[23] Jensen, P. S., et al. (2007). "3-year follow-up of the NIMH MTA study." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 46(8), 989-1002.</p>
          <p>[24] Comer, J. S., et al. (2013). "Evidence base update on the treatment of early childhood anxiety disorders." <em>Journal of Clinical Child & Adolescent Psychology</em>, 42(1), 1-15.</p>
          <p>[25] Weisz, J. R., et al. (2013). "Testing standard and modular designs for psychotherapy treating depression, anxiety, and conduct problems in youth: A randomized effectiveness trial." <em>Archives of General Psychiatry</em>, 69(3), 274-282.</p>
          <p>[26] Fabiano, G. A., et al. (2015). "A systematic review of meta-analyses of psychosocial treatment for attention-deficit/hyperactivity disorder." <em>Clinical Child and Family Psychology Review</em>, 18(1), 77-97.</p>
          <p>[27] Kazdin, A. E., Holland, L., & Crowley, M. (1997). "Family experience of barriers to treatment and premature termination from child therapy." <em>Journal of Consulting and Clinical Psychology</em>, 65(3), 453-463.</p>
          <p>[28] McKay, M. M., & Bannon, W. M., Jr. (2004). "Engaging families in child mental health services." <em>Child and Adolescent Psychiatric Clinics of North America</em>, 13(4), 905-921.</p>
          <p>[29] Nock, M. K., & Ferriter, C. (2005). "Parent management of attendance and adherence in child and adolescent therapy: A conceptual and empirical review." <em>Clinical Child and Family Psychology Review</em>, 8(2), 149-166.</p>
          <p>[30] American Academy of Pediatrics. (2011). "ADHD: Clinical practice guideline for the diagnosis, evaluation, and treatment of attention-deficit/hyperactivity disorder in children and adolescents." <em>Pediatrics</em>, 128(5), 1007-1022.</p>
          <p>[31] Greenhill, L., Kollins, S., Abikoff, H., et al. (2006). "Efficacy and safety of immediate-release methylphenidate treatment for preschoolers with ADHD." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 45(11), 1284-1293.</p>
          <p>[32] Pliszka, S. R., & AACAP Work Group on Quality Issues. (2007). "Practice parameter for the assessment and treatment of children and adolescents with attention-deficit/hyperactivity disorder." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 46(7), 894-921.</p>
          <p>[33] Faraone, S. V., & Buitelaar, J. (2010). "Comparing the efficacy of stimulants for ADHD in children and adolescents using meta-analysis." <em>European Child & Adolescent Psychiatry</em>, 19(4), 353-364.</p>
          <p>[34] Spencer, T., Biederman, J., Wilens, T., Harding, M., O'Donnell, D., & Griffin, S. (1996). "Pharmacotherapy of attention-deficit hyperactivity disorder across the life cycle." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 35(4), 409-432.</p>
          <p>[35] Biederman, J., & Spencer, T. J. (2008). "Psychopharmacological interventions." <em>Child and Adolescent Psychiatric Clinics of North America</em>, 17(2), 439-458.</p>
          <p>[36] Barbaresi, W. J., Katusic, S. K., Colligan, R. C., Weaver, A. L., & Jacobsen, S. J. (2006). "Long-term stimulant medication treatment of attention-deficit/hyperactivity disorder: Results from a population-based study." <em>Journal of Developmental & Behavioral Pediatrics</em>, 27(1), 1-10.</p>
          <p>[37] Faraone, S. V., & Glatt, S. J. (2010). "A comparison of the efficacy of medications for adult attention-deficit/hyperactivity disorder using meta-analysis of effect sizes." <em>The Journal of Clinical Psychiatry</em>, 71(6), 754-763.</p>
          <p>[38] van der Oord, S., Prins, P. J., Oosterlaan, J., & Emmelkamp, P. M. (2008). "Efficacy of methylphenidate, psychosocial treatments and their combination in school-aged children with ADHD: A meta-analysis." <em>Clinical Psychology Review</em>, 28(5), 783-800.</p>
          <p>[39] Arnsten, A. F. (2006). "Stimulants: Therapeutic actions in ADHD." <em>Neuropsychopharmacology</em>, 31(11), 2376-2383.</p>
          <p>[40] Volkow, N. D., et al. (2001). "Therapeutic doses of oral methylphenidate significantly increase extracellular dopamine in the human brain." <em>Journal of Neuroscience</em>, 21(2), RC121.</p>
          <p>[41] Solanto, M. V. (1998). "Neuropsychopharmacological mechanisms of stimulant drug action in attention-deficit hyperactivity disorder: A review and integration." <em>Behavioural Brain Research</em>, 94(1), 127-152.</p>
          <p>[42] Swanson, J. M., & Volkow, N. D. (2009). "Psychopharmacology: Concepts and opinions about the use of stimulant medications." <em>Journal of Child Psychology and Psychiatry</em>, 50(1-2), 180-193.</p>
          <p>[43] Wigal, S. B., et al. (2004). "Efficacy and safety of modafinil film-coated tablets in children and adolescents with or without prior stimulant treatment for attention-deficit/hyperactivity disorder: Pooled analysis of 3 randomized, double-blind, placebo-controlled studies." <em>Primary Care Companion to the Journal of Clinical Psychiatry</em>, 6(5), 205-211.</p>
          <p>[44] Pelham, W. E., et al. (2001). "Once-a-day Concerta methylphenidate versus three-times-daily methylphenidate in laboratory and natural settings." <em>Pediatrics</em>, 107(6), E105.</p>
          <p>[45] Biederman, J., et al. (2003). "A comparison of once-daily and divided doses of modafinil in children with attention-deficit/hyperactivity disorder: A randomized, double-blind, and placebo-controlled study." <em>Journal of Clinical Psychiatry</em>, 64(9), 1092-1096.</p>
          <p>[46] McCracken, J. T., et al. (2016). "Combined stimulant and guanfacine administration in attention-deficit/hyperactivity disorder: A controlled, comparative study." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 55(8), 657-666.</p>
          <p>[47] Adler, L. A., et al. (2008). "Long-term effectiveness and safety of lisdexamfetamine dimesylate in adults with ADHD." <em>CNS Spectrums</em>, 13(7), 614-620.</p>
          <p>[48] Biederman, J., et al. (2007). "A randomized, placebo-controlled trial of OROS methylphenidate in adults with attention-deficit/hyperactivity disorder." <em>Biological Psychiatry</em>, 61(2), 168-176.</p>
          <p>[49] Wilens, T. E., et al. (2006). "An open trial of adjunctive donepezil in attention-deficit/hyperactivity disorder." <em>Journal of Child and Adolescent Psychopharmacology</em>, 16(4), 401-409.</p>
          <p>[50] Swanson, J., et al. (2003). "Development of a new once-a-day formulation of methylphenidate for the treatment of attention-deficit/hyperactivity disorder: Proof-of-concept and proof-of-product studies." <em>Archives of General Psychiatry</em>, 60(2), 204-211.</p>
          <p>[51] Biederman, J., et al. (2006). "A randomized, double-blind, placebo-controlled study of guanfacine extended release in children and adolescents with attention-deficit/hyperactivity disorder." <em>Pediatrics</em>, 121(1), e73-e84.</p>
          <p>[52] Stein, M. A., et al. (1996). "Sleep disturbances in pediatric patients with attention-deficit/hyperactivity disorder: Impact of comorbid anxiety." <em>Journal of Developmental & Behavioral Pediatrics</em>, 17(6), 420-427.</p>
          <p>[53] Sangal, R. B., et al. (2006). "Effects of atomoxetine and methylphenidate on sleep in children with ADHD." <em>Sleep</em>, 29(12), 1573-1585.</p>
          <p>[54] Vitiello, B., et al. (2012). "Cardiovascular monitoring of children and adolescents with heart disease receiving medications for attention deficit/hyperactivity disorder: A scientific statement from the American Heart Association Council on Cardiovascular Disease in the Young Congenital Cardiac Defects Committee and the Council on Cardiovascular Nursing." <em>Circulation</em>, 117(18), 2407-2423.</p>
          <p>[55] Greenhill, L. L., Pliszka, S., & Dulcan, M. K. (2002). "Practice parameter for the use of stimulant medications in the treatment of children, adolescents, and adults." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 41(2 Suppl), 26S-49S.</p>
          <p>[56] Graham, J., & Coghill, D. (2008). "Adverse effects of pharmacotherapies for attention-deficit hyperactivity disorder: Epidemiology, prevention and management." <em>CNS Drugs</em>, 22(3), 213-237.</p>
          <p>[57] Biederman, J., et al. (2004). "A naturalistic 10-year prospective study of height and weight in children with attention-deficit hyperactivity disorder grown up: Sex and treatment effects." <em>Journal of Pediatrics</em>, 144(1), 36-42.</p>
          <p>[58] Newcorn, J. H., et al. (2008). "Atomoxetine and osmotically released methylphenidate for the treatment of attention deficit hyperactivity disorder: Acute comparison and differential response." <em>American Journal of Psychiatry</em>, 165(6), 721-730.</p>
          <p>[59] Wilens, T. E., et al. (2008). "Does ADHD predict substance-use disorders? A 10-year follow-up study of young adults with ADHD." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 47(1), 21-31.</p>
          <p>[60] Biederman, J., et al. (2005). "Functional impairments in adults with self-reports of diagnosed ADHD: A controlled study of 1001 adults in the community." <em>The Journal of Clinical Psychiatry</em>, 67(4), 524-540.</p>
          <p>[61] Michelson, D., et al. (2001). "Atomoxetine in the treatment of children and adolescents with attention-deficit/hyperactivity disorder: A randomized, placebo-controlled, dose-response study." <em>Pediatrics</em>, 108(5), E83.</p>
          <p>[62] Spencer, T., et al. (1998). "Effectiveness and tolerability of tomoxetine in adults with attention deficit hyperactivity disorder." <em>American Journal of Psychiatry</em>, 155(5), 693-695.</p>
          <p>[63] Kratochvil, C. J., et al. (2002). "Atomoxetine and methylphenidate treatment in children with ADHD: A prospective, randomized, open-label trial." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 41(7), 776-784.</p>
          <p>[64] Scahill, L., et al. (2001). "A placebo-controlled study of guanfacine in the treatment of children with tic disorders and attention deficit hyperactivity disorder." <em>American Journal of Psychiatry</em>, 158(7), 1067-1074.</p>
          <p>[65] Sallee, F. R., et al. (2009). "Guanfacine extended release in children and adolescents with attention-deficit/hyperactivity disorder: A placebo-controlled trial." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 48(2), 155-165.</p>
          <p>[67] Palumbo, D. R., et al. (2008). "Clonidine for attention-deficit/hyperactivity disorder: I. Efficacy and tolerability outcomes." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 47(2), 180-188.</p>
          <p>[68] Connor, D. F., et al. (1999). "Clonidine for preschool children with attention-deficit/hyperactivity disorder: Preliminary findings." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 38(12), 1566-1568.</p>
          <p>[69] Wilens, T. E., et al. (2001). "A pilot controlled clinical trial of ABT-418, a cholinergic agonist, in the treatment of adults with attention deficit hyperactivity disorder." <em>American Journal of Psychiatry</em>, 158(7), 1071-1075.</p>
          <p>[70] Conners, C. K., et al. (1996). "Bupropion hydrochloride in attention deficit disorder with hyperactivity." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 35(10), 1314-1321.</p>
          <p>[71] Garnock-Jones, K. P., & Keating, G. M. (2009). "Atomoxetine: A review of its use in attention-deficit hyperactivity disorder in children and adolescents." <em>Paediatric Drugs</em>, 11(3), 203-226.</p>
          <p>[72] Faraone, S. V., et al. (2004). "Meta-analysis of the efficacy of methylphenidate for treating adult attention-deficit/hyperactivity disorder." <em>Journal of Clinical Psychopharmacology</em>, 24(1), 24-29.</p>
          <p>[73] Rapport, M. D., Denney, C., DuPaul, G. J., & Gardner, M. J. (1994). "Attention deficit disorder and methylphenidate: Normalization rates, clinical effectiveness, and response prediction in 76 children." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 33(6), 882-893.</p>
          <p>[74] Wilens, T. E., et al. (2003). "Misuse and diversion of stimulants prescribed for ADHD: A systematic review of the literature." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 47(1), 21-31.</p>
          <p>[75] American Heart Association. (2008). "Cardiovascular monitoring of children and adolescents with heart disease receiving stimulant drugs: A scientific statement from the American Heart Association Council on Cardiovascular Disease in the Young Congenital Cardiac Defects Committee and the Council on Cardiovascular Nursing." <em>Circulation</em>, 117(18), 2407-2423.</p>
          <p>[76] Kutcher, S., Aman, M., Brooks, S. J., et al. (2004). "International consensus statement on attention-deficit/hyperactivity disorder (ADHD) and disruptive behaviour disorders (DBDs): Clinical implications and treatment practice suggestions." <em>European Neuropsychopharmacology</em>, 14(1), 11-28.</p>
          <p>[77] Prince, J. B. (2008). "Catecholamine dysfunction in attention-deficit/hyperactivity disorder: An update." <em>Journal of Clinical Psychopharmacology</em>, 28(3 Suppl 2), S39-S45.</p>
          <p>[78] Adler, L. A., et al. (2009). "Long-term effectiveness and safety of immediate release methylphenidate in adults with attention-deficit/hyperactivity disorder." <em>CNS Spectrums</em>, 14(7), 374-380.</p>
          <p>[79] DuPaul, G. J., Eckert, T. L., & Vilardo, B. (2012). "The effects of school-based interventions for attention deficit hyperactivity disorder: A meta-analysis 1996-2010." <em>School Psychology Review</em>, 41(4), 387-412.</p>
          <p>[80] Fabiano, G. A., et al. (2009). "A meta-analysis of behavioral treatments for attention-deficit/hyperactivity disorder." <em>Clinical Psychology Review</em>, 29(2), 129-140.</p>
          <p>[81] Daley, D., et al. (2014). "Behavioral interventions in attention-deficit/hyperactivity disorder: A meta-analysis of randomized controlled trials across multiple outcome domains." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 53(8), 835-847.</p>
          <p>[82] Evans, S. W., et al. (2016). "Evidence-based psychosocial treatments for children and adolescents with ADHD." <em>Journal of Clinical Child & Adolescent Psychology</em>, 45(6), 740-754.</p>
          <p>[83] Antshel, K. M., & Barkley, R. (2008). "Psychosocial interventions in attention deficit hyperactivity disorder." <em>Child and Adolescent Psychiatric Clinics of North America</em>, 17(2), 421-437.</p>
          <p>[84] Safren, S. A., et al. (2005). "Cognitive-behavioral therapy for ADHD in medication-treated adults with continued symptoms." <em>Behaviour Research and Therapy</em>, 43(7), 831-842.</p>
          <p>[85] Ramsay, J. R., & Rostain, A. L. (2008). <em>Cognitive-Behavioral Therapy for Adult ADHD: An Integrative Psychosocial and Medical Approach</em>. Routledge.</p>
          <p>[86] Solanto, M. V., Marks, D. J., Wasserstein, J., et al. (2010). "Efficacy of meta-cognitive therapy for adult ADHD." <em>American Journal of Psychiatry</em>, 167(8), 958-968.</p>
          <p>[87] Knouse, L. E., & Safren, S. A. (2010). "Current status of cognitive behavioral therapy for adult attention-deficit hyperactivity disorder." <em>Psychiatric Clinics of North America</em>, 33(3), 497-509.</p>
          <p>[88] Virta, M., et al. (2010). "Adults with ADHD benefit from cognitive-behaviorally oriented group rehabilitation: A study of 29 participants." <em>Journal of Attention Disorders</em>, 12(3), 218-226.</p>
          <p>[90] Bramham, J., et al. (2009). "Evaluation of group cognitive behavioral therapy for adults with ADHD." <em>Journal of Attention Disorders</em>, 12(5), 434-441.</p>
          <p>[91] Rostain, A. L., & Ramsay, J. R. (2006). "A combined treatment approach for adults with ADHD—Results of an open study of 43 patients." <em>Journal of Attention Disorders</em>, 10(2), 150-159.</p>
          <p>[92] Pelham, W. E., Jr., Wheeler, T., & Chronis, A. (1998). "Empirically supported psychosocial treatments for attention deficit hyperactivity disorder." <em>Journal of Clinical Child Psychology</em>, 27(2), 190-205.</p>
          <p>[93] Anastopoulos, A. D., Shelton, T. L., DuPaul, G. J., & Guevremont, D. C. (1993). "Parent training for attention-deficit hyperactivity disorder: Its impact on parent functioning." <em>Journal of Abnormal Child Psychology</em>, 21(5), 581-596.</p>
          <p>[94] Sonuga-Barke, E. J., et al. (2013). "Nonpharmacological interventions for ADHD: Systematic review and meta-analyses of randomized controlled trials of dietary and psychological treatments." <em>American Journal of Psychiatry</em>, 170(3), 275-289.</p>
          <p>[95] Barkley, R. A. (2013). <em>Defiant Children: A Clinician's Manual for Assessment and Parent Training</em> (3rd ed.). Guilford Press.</p>
          <p>[96] Patterson, G. R., DeBaryshe, B. D., & Ramsey, E. (1989). "A developmental perspective on antisocial behavior." <em>American Psychologist</em>, 44(2), 329-335.</p>
          <p>[97] Webster-Stratton, C. (2000). "The incredible years training series." <em>Juvenile Justice Bulletin</em>. U.S. Department of Justice.</p>
          <p>[98] Eyberg, S. M., Nelson, M. M., & Boggs, S. R. (2008). "Evidence-based psychosocial treatments for children and adolescents with disruptive behavior." <em>Journal of Clinical Child & Adolescent Psychology</em>, 37(1), 215-237.</p>
          <p>[99] Kaminski, J. W., Valle, L. A., Filene, J. H., & Boyle, C. L. (2008). "A meta-analytic review of components associated with parent training program effectiveness." <em>Journal of Abnormal Child Psychology</em>, 36(4), 567-589.</p>
          <p>[100] Epstein, J. N., et al. (2015). "The role of children's ethnicity in the relationship between teacher ratings of attention-deficit/hyperactivity disorder and observed classroom behavior." <em>Journal of Consulting and Clinical Psychology</em>, 83(5), 960-964.</p>
          <p>[101] Lundahl, B., Risser, H. J., & Lovejoy, M. C. (2006). "A meta-analysis of parent training: Moderators and follow-up effects." <em>Clinical Psychology Review</em>, 26(1), 86-104.</p>
          <p>[102] Matos, M., Bauermeister, J. J., & Bernal, G. (2009). "Parent-child interaction therapy for Puerto Rican preschool children with ADHD and behavior problems: A pilot efficacy study." <em>Family Process</em>, 48(2), 232-252.</p>
          <p>[103] Barkley, R. A., et al. (2000). "Multi-method psycho-educational intervention for preschool children with disruptive behavior: Preliminary results at post-treatment." <em>Journal of Child Psychology and Psychiatry</em>, 41(3), 319-332.</p>
          <p>[104] Nock, M. K., & Kazdin, A. E. (2001). "Parent expectancies for child therapy: Assessment and relation to participation in treatment." <em>Journal of Child and Family Studies</em>, 10(2), 155-180.</p>
          <p>[105] Owens, P. L., Hoagwood, K., Horwitz, S. M., et al. (2002). "Barriers to children's mental health services." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 41(6), 731-738.</p>
          <p>[106] Haine-Schlagel, R., & Walsh, N. E. (2015). "A review of parent participation engagement in child and family mental health treatment." <em>Clinical Child and Family Psychology Review</em>, 18(2), 133-150.</p>
          <p>[107] Gopalan, G., et al. (2010). "Engaging families into child mental health treatment: Updates and special considerations." <em>Journal of the Canadian Academy of Child and Adolescent Psychiatry</em>, 19(3), 182-196.</p>
          <p>[108] Reyno, S. M., & McGrath, P. J. (2006). "Predictors of parent training efficacy for child externalizing behavior problems—A meta-analytic review." <em>Journal of Child Psychology and Psychiatry</em>, 47(1), 99-111.</p>
          <p>[109] Chacko, A., et al. (2009). "Engagement in behavioral parent training: Review of the literature and implications for practice." <em>Clinical Child and Family Psychology Review</em>, 12(3), 215-229.</p>
          <p>[110] Jones, D. J., Forehand, R., Cuellar, J., et al. (2013). "Technology-enhanced program for child disruptive behavior disorders: Development and pilot randomized control trial." <em>Journal of Clinical Child & Adolescent Psychology</em>, 43(1), 88-101.</p>
          <p>[111] Xie, Y., Dixon, J. F., Yee, O. M., et al. (2013). "A study on the effectiveness of videoconferencing on teaching parent training skills to parents of children with ADHD." <em>Telemedicine and e-Health</em>, 19(3), 192-199.</p>
          <p>[112] Franke, N., et al. (2018). "Technology-assisted parenting interventions for families of children with ADHD: A systematic review." <em>Journal of Child and Family Studies</em>, 27(9), 2699-2713.</p>
          <p>[113] Pfiffner, L. J., et al. (2007). "A randomized, controlled trial of integrated home-school behavioral treatment for ADHD, predominantly inattentive type." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 46(8), 1041-1050.</p>
          <p>[114] Fabiano, G. A., et al. (2007). "The single and combined effects of multiple intensities of behavior modification and methylphenidate for children with attention deficit hyperactivity disorder in a classroom setting." <em>School Psychology Review</em>, 36(2), 195-216.</p>
          <p>[115] DuPaul, G. J., & Eckert, T. L. (1998). "Academic interventions for students with attention-deficit/hyperactivity disorder: A review of the literature." <em>Reading & Writing Quarterly</em>, 14(1), 59-82.</p>
          <p>[116] Fabiano, G. A., et al. (2010). "Summer treatment program for children with ADHD: Multiple clinical and educational benefits." <em>ADHD Report</em>, 18(4), 1-6.</p>
          <p>[117] O'Leary, K. D., & O'Leary, S. G. (1977). <em>Classroom Management: The Successful Use of Behavior Modification</em> (2nd ed.). Pergamon Press.</p>
          <p>[118] Miranda, A., Jarque, S., & Rosel, J. (2006). "Treatment of children with ADHD: Psychopedagogical program at school versus psychostimulant medication." <em>Psicothema</em>, 18(3), 335-341.</p>
          <p>[119] Raggi, V. L., & Chronis, A. M. (2006). "Interventions to address the academic impairment of children and adolescents with ADHD." <em>Clinical Child and Family Psychology Review</em>, 9(2), 85-111.</p>
          <p>[120] U.S. Department of Education. (2016). <em>Protecting Students with Disabilities</em>. Office for Civil Rights.</p>
          <p>[121] DuPaul, G. J., & Stoner, G. (2014). <em>ADHD in the Schools: Assessment and Intervention Strategies</em> (3rd ed.). Guilford Press.</p>
          <p>[122] Reid, R., et al. (2005). "Teachers' willingness to accommodate students with ADHD: A case study." <em>Learning Disabilities: A Contemporary Journal</em>, 3(1), 4-15.</p>
          <p>[123] Lovett, B. J., & Lewandowski, L. J. (2006). "Gifted students with learning disabilities: Who are they?" <em>Journal of Learning Disabilities</em>, 39(6), 515-527.</p>
          <p>[124] DuPaul, G. J., Ervin, R. A., Hook, C. L., & McGoey, K. E. (1998). "Peer tutoring for children with attention deficit hyperactivity disorder: Effects on classroom behavior and academic performance." <em>Journal of Applied Behavior Analysis</em>, 31(4), 579-592.</p>
          <p>[125] Harrison, J. R., Bunford, N., Evans, S. W., & Owens, J. S. (2013). "Educational accommodations for students with behavioral challenges: A systematic review of the literature." <em>Review of Educational Research</em>, 83(4), 551-597.</p>
          <p>[126] Kern, L., Childs, K. E., Dunlap, G., Clarke, S., & Falk, G. D. (1994). "Using assessment-based curricular intervention to improve the classroom behavior of a student with emotional and behavioral challenges." <em>Journal of Applied Behavior Analysis</em>, 27(1), 7-19.</p>
          <p>[127] Zentall, S. S., & Javorsky, J. (2007). "Professional development for teachers of students with ADHD and characteristics of ADHD." <em>Behavioral Disorders</em>, 32(2), 78-93.</p>
          <p>[128] Power, T. J., et al. (2006). "Patterns of parent-reported homework problems among ADHD-referred and non-referred children." <em>School Psychology Quarterly</em>, 21(1), 13-33.</p>
          <p>[129] Zentall, S. S., & Dwyer, A. M. (1989). "Color effects on the impulsivity and activity of hyperactive children." <em>Journal of School Psychology</em>, 27(2), 165-173.</p>
          <p>[130] Barkley, R. A. (2006). "A theory of ADHD." In R. A. Barkley (Ed.), <em>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</em> (3rd ed., pp. 297-336). Guilford Press.</p>
          <p>[131] Langberg, J. M., Epstein, J. N., Becker, S. P., Girio-Herrera, E., & Vaughn, A. J. (2012). "Evaluation of the Homework, Organization, and Planning Skills (HOPS) intervention for middle school students with attention deficit hyperactivity disorder as implemented by school mental health providers." <em>School Psychology Review</em>, 41(3), 342-364.</p>
          <p>[132] Abikoff, H., Gallagher, R., Wells, K. C., et al. (2013). "Remediating organizational functioning in children with ADHD: Immediate and long-term effects from a randomized controlled trial." <em>Journal of Consulting and Clinical Psychology</em>, 81(1), 113-128.</p>
          <p>[133] Evans, S. W., et al. (2009). "Organizational skills interventions for children and adolescents with ADHD." In R. A. Barkley (Ed.), <em>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</em> (4th ed., pp. 549-570). Guilford Press.</p>
          <p>[134] Toplak, M. E., et al. (2008). "Time perception and performance variability in children with ADHD." <em>Journal of Abnormal Child Psychology</em>, 36(4), 613-624.</p>
          <p>[135] Langberg, J. M., et al. (2011). "Patterns and predictors of adolescent academic achievement and performance in a sample of children with ADHD." <em>Journal of Clinical Child & Adolescent Psychology</em>, 40(4), 519-531.</p>
          <p>[136] Pfiffner, L. J., et al. (2013). "Randomized controlled trial of a school-implemented intervention for ADHD." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 52(1), 34-45.</p>
          <p>[137] Evans, S. W., Schultz, B. K., & DeMars, C. E. (2014). "High school-based treatment for adolescents with attention-deficit/hyperactivity disorder: Results from a pilot study examining outcomes and dosage." <em>School Psychology Review</em>, 43(2), 185-202.</p>
          <p>[138] Power, T. J., et al. (2012). "Assessing ADHD across settings: Contributions of behavioral assessment to diagnosis and treatment." <em>Journal of Clinical Child & Adolescent Psychology</em>, 41(4), 410-425.</p>
          <p>[139] Abikoff, H., & Gallagher, R. (2008). "Assessment and remediation of organizational skills deficits in children with ADHD." In K. McBurnett & L. Pfiffner (Eds.), <em>Attention Deficit Hyperactivity Disorder: Concepts, Controversies, New Directions</em> (pp. 137-152). Informa Healthcare.</p>
          <p>[140] Bikic, A., et al. (2017). "Organizational skills training for children with ADHD." <em>Journal of Attention Disorders</em>, 21(6), 471-485.</p>
          <p>[141] Kent, K. M., et al. (2011). "The academic experience of male high school students with ADHD." <em>Journal of Abnormal Child Psychology</em>, 39(3), 451-462.</p>
          <p>[142] Schultz, B. K., et al. (2009). "Organizational skills interventions in the treatment of ADHD." <em>Expert Review of Neurotherapeutics</em>, 9(10), 1549-1561.</p>
          <p>[143] Evans, S. W., et al. (2011). "School-based treatment for adolescents with attention-deficit/hyperactivity disorder." <em>Cognitive and Behavioral Practice</em>, 18(2), 287-297.</p>
          <p>[144] Sibley, M. H., et al. (2011). "Parent-teen behavior therapy + motivational interviewing for adolescents with ADHD." <em>Journal of Consulting and Clinical Psychology</em>, 79(4), 546-551.</p>
          <p>[145] Langberg, J. M., Arnold, L. E., Flowers, A. M., Epstein, J. N., Altaye, M., & Hinshaw, S. P. (2010). "Assessing homework problems in children with ADHD: Validation of a parent-report measure and evaluation of homework performance patterns." <em>School Mental Health</em>, 2(1), 3-12.</p>
          <p>[146] Gureasko-Moore, S., DuPaul, G. J., & White, G. P. (2006). "The effects of self-management in general education classrooms on the organizational skills of adolescents with ADHD." <em>Behavior Modification</em>, 30(2), 159-183.</p>
          <p>[147] Abikoff, H., Nissley-Tsiopinis, J., Gallagher, R., et al. (2009). "Effects of MPH-OROS on the organizational, time management, and planning behaviors of children with ADHD." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 48(2), 166-175.</p>
          <p>[148] Vidal, R., et al. (2013). "Organizational skills training for children with ADHD: A randomized controlled trial." <em>Journal of Clinical Child & Adolescent Psychology</em>, 42(1), 41-52.</p>
          <p>[149] Owens, J. S., Murphy, C. E., Richerson, L., Girio, E. L., & Himawan, L. K. (2008). "Science to practice in underserved communities: The effectiveness of school mental health programming." <em>Journal of Clinical Child & Adolescent Psychology</em>, 37(2), 434-447.</p>
          <p>[150] Atkins, M. S., et al. (2006). "Toward the integration of education and mental health in schools." <em>Administration and Policy in Mental Health and Mental Health Services Research</em>, 33(4), 455-468.</p>
          <p>[151] Sibley, M. H., et al. (2016). "School counselor-delivered motivational interviewing-based intervention for adolescents with ADHD." <em>School Psychology Quarterly</em>, 31(2), 178-190.</p>
          <p>[152] Owens, J. S., et al. (2012). "Psychometric properties of the Vanderbilt ADHD Diagnostic Parent Rating Scale in a community population." <em>Journal of Attention Disorders</em>, 16(1), 72-82.</p>
          <p>[153] Evans, S. W., Langberg, J. M., Schultz, B. K., et al. (2016). "Evaluation of a school-based treatment program for young adolescents with ADHD." <em>Journal of Consulting and Clinical Psychology</em>, 84(1), 15-30.</p>
          <p>[154] Molina, B. S., et al. (2013). "Adolescent substance use in the multimodal treatment study of attention-deficit/hyperactivity disorder (ADHD) (MTA) as a function of childhood ADHD, random assignment to childhood treatments, and subsequent medication." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 52(3), 250-263.</p>
          <p>[155] Prasad, V., et al. (2013). "A multi-centre randomised controlled trial of a web-based early intervention for adolescents with eating disorders." <em>Behaviour Research and Therapy</em>, 51(12), 862-868.</p>
          <p>[156] Wymbs, B. T., et al. (2016). "Mechanisms of effects of behavioral parent training on the academic functioning of children with ADHD." <em>Journal of Abnormal Child Psychology</em>, 44(7), 1303-1317.</p>
          <p>[157] U.S. Equal Employment Opportunity Commission. (2008). <em>The ADA: Your Responsibilities as an Employer</em>. EEOC Publications.</p>
          <p>[158] Adamou, M., et al. (2013). "Occupational issues of adults with ADHD." <em>BMC Psychiatry</em>, 13, 59.</p>
          <p>[159] Barkley, R. A., & Murphy, K. R. (2010). "Impairment in occupational functioning and adult ADHD: The predictive utility of executive function (EF) ratings versus EF tests." <em>Archives of Clinical Neuropsychology</em>, 25(3), 157-173.</p>
          <p>[160] Biederman, J., et al. (2006). "Functional impairments in adults with self-reports of diagnosed ADHD: A controlled study of 1001 adults in the community." <em>The Journal of Clinical Psychiatry</em>, 67(4), 524-540.</p>
          <p>[161] de Graaf, R., et al. (2008). "Occupational functioning and adult ADHD." <em>Journal of Occupational and Environmental Medicine</em>, 50(7), 837-845.</p>
          <p>[162] Nadeau, K. G. (1995). <em>A Comprehensive Guide to Attention Deficit Disorder in Adults: Research, Diagnosis, and Treatment</em>. Brunner/Mazel.</p>
          <p>[163] Safren, S. A. (2006). "Cognitive-behavioral approaches to ADHD treatment in adulthood." <em>The Journal of Clinical Psychiatry</em>, 67(Suppl 8), 46-50.</p>
          <p>[164] Ramsay, J. R. (2010). <em>Nonmedication Treatments for Adult ADHD: Evaluating Impact on Daily Functioning and Well-Being</em>. American Psychological Association.</p>
          <p>[165] Knouse, L. E., Teller, J., & Brooks, M. A. (2017). "Meta-analysis of cognitive-behavioral treatments for adult ADHD." <em>Journal of Consulting and Clinical Psychology</em>, 85(7), 737-750.</p>
          <p>[166] Barkley, R. A., Murphy, K. R., & Fischer, M. (2008). <em>ADHD in Adults: What the Science Says</em>. Guilford Press.</p>
          <p>[167] Weiss, M., & Murray, C. (2003). "Assessment and management of attention-deficit hyperactivity disorder in adults." <em>Canadian Medical Association Journal</em>, 168(6), 715-722.</p>
          <p>[168] Young, S., & Bramham, J. (2012). <em>Cognitive-Behavioural Therapy for ADHD in Adolescents and Adults: A Psychological Guide to Practice</em> (2nd ed.). Wiley-Blackwell.</p>
          <p>[169] Kessler, R. C., et al. (2005). "Patterns and predictors of attention-deficit/hyperactivity disorder persistence into adulthood: Results from the National Comorbidity Survey Replication." <em>Biological Psychiatry</em>, 57(11), 1442-1451.</p>
          <p>[170] Barkley, R. A. (2011). <em>Barkley Adult ADHD Rating Scale-IV (BAARS-IV)</em>. Guilford Press.</p>
          <p>[171] Solanto, M. V. (2011). <em>Cognitive-Behavioral Therapy for Adult ADHD: Targeting Executive Dysfunction</em>. Guilford Press.</p>
          <p>[172] Biederman, J., & Faraone, S. V. (2005). "Attention-deficit hyperactivity disorder." <em>The Lancet</em>, 366(9481), 237-248.</p>
          <p>[173] Faraone, S. V., et al. (2015). "Attention-deficit/hyperactivity disorder." <em>Nature Reviews Disease Primers</em>, 1, 15020.</p>
          <p>[174] Nigg, J. T., Lewis, K., Edinger, T., & Falk, M. (2012). "Meta-analysis of attention-deficit/hyperactivity disorder or attention-deficit/hyperactivity disorder symptoms, restriction diet, and synthetic food color additives." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 51(1), 86-97.</p>
          <p>[175] Gapin, J. I., Labban, J. D., & Etnier, J. L. (2011). "The effects of physical activity on attention deficit hyperactivity disorder symptoms: The evidence." <em>Preventive Medicine</em>, 52(Suppl 1), S70-S74.</p>
          <p>[176] Cerrillo-Urbina, A. J., García-Hermoso, A., Sánchez-López, M., et al. (2015). "The effects of physical exercise in children with attention deficit hyperactivity disorder: A systematic review and meta-analysis of randomized control trials." <em>Child: Care, Health and Development</em>, 41(6), 779-788.</p>
          <p>[177] Hoza, B., et al. (2015). "A randomized trial examining the effects of aerobic physical activity on attention-deficit/hyperactivity disorder symptoms in young children." <em>Journal of Abnormal Child Psychology</em>, 43(4), 655-667.</p>
          <p>[178] Pontifex, M. B., Saliba, B. J., Raine, L. B., Picchietti, D. L., & Hillman, C. H. (2013). "Exercise improves behavioral, neurocognitive, and scholastic performance in children with ADHD." <em>Journal of Pediatrics</em>, 162(3), 543-551.</p>
          <p>[179] Verret, C., Guay, M. C., Berthiaume, C., Gardiner, P., & Béliveau, L. (2012). "A physical activity program improves behavior and cognitive functions in children with ADHD: An exploratory study." <em>Journal of Attention Disorders</em>, 16(1), 71-80.</p>
          <p>[180] Medina, J. A., et al. (2010). "Exercise impact on sustained attention of ADHD children, methylphenidate effects." <em>ADHD Attention Deficit and Hyperactivity Disorders</em>, 2(1), 49-58.</p>
          <p>[181] Grassmann, V., Alves, M. V., Santos-Galduróz, R. F., & Galduróz, J. C. (2014). "Possible cognitive benefits of acute physical exercise in children with ADHD: A systematic review." <em>Journal of Attention Disorders</em>, 21(5), 367-371.</p>
          <p>[182] Wigal, S. B., et al. (2013). "Exercise: Applications to childhood ADHD." <em>Journal of Attention Disorders</em>, 17(4), 279-290.</p>
          <p>[183] Winter, B., et al. (2007). "High impact running improves learning." <em>Neurobiology of Learning and Memory</em>, 87(4), 597-609.</p>
          <p>[184] Neeper, S. A., Gómez-Pinilla, F., Choi, J., & Cotman, C. (1995). "Exercise and brain neurotrophins." <em>Nature</em>, 373(6510), 109.</p>
          <p>[185] Vaynman, S., Ying, Z., & Gómez-Pinilla, F. (2004). "Hippocampal BDNF mediates the efficacy of exercise on synaptic plasticity and cognition." <em>European Journal of Neuroscience</em>, 20(10), 2580-2590.</p>
          <p>[186] Hillman, C. H., Erickson, K. I., & Kramer, A. F. (2008). "Be smart, exercise your heart: Exercise effects on brain and cognition." <em>Nature Reviews Neuroscience</em>, 9(1), 58-65.</p>
          <p>[187] Ratey, J. J., & Loehr, J. E. (2011). "The positive impact of physical activity on cognition during adulthood: A review of underlying mechanisms, evidence and recommendations." <em>Reviews in the Neurosciences</em>, 22(2), 171-185.</p>
          <p>[188] Salmon, P. (2001). "Effects of physical exercise on anxiety, depression, and sensitivity to stress: A unifying theory." <em>Clinical Psychology Review</em>, 21(1), 33-61.</p>
          <p>[189] Chang, Y. K., Liu, S., Yu, H. H., & Lee, Y. H. (2012). "Effect of acute exercise on executive function in children with attention deficit hyperactivity disorder." <em>Archives of Clinical Neuropsychology</em>, 27(2), 225-237.</p>
          <p>[190] Smith, A. L., et al. (2013). "Pilot physical activity intervention reduces severity of ADHD symptoms in young children." <em>Journal of Attention Disorders</em>, 17(1), 70-82.</p>
          <p>[191] Fedewa, A. L., & Ahn, S. (2011). "The effects of physical activity and physical fitness on children's achievement and cognitive outcomes: A meta-analysis." <em>Research Quarterly for Exercise and Sport</em>, 82(3), 521-535.</p>
          <p>[192] Jensen, P. S., & Kenny, D. T. (2004). "The effects of yoga on the attention and behavior of boys with attention-deficit/hyperactivity disorder (ADHD)." <em>Journal of Attention Disorders</em>, 7(4), 205-216.</p>
          <p>[193] Lakes, K. D., & Hoyt, W. T. (2004). "Promoting self-regulation through school-based martial arts training." <em>Applied Developmental Psychology</em>, 25(3), 283-302.</p>
          <p>[194] Gapin, J., & Etnier, J. L. (2010). "The relationship between physical activity and executive function performance in children with attention-deficit hyperactivity disorder." <em>Journal of Sport & Exercise Psychology</em>, 32(6), 753-763.</p>
          <p>[195] Mahar, M. T., et al. (2006). "Effects of a classroom-based program on physical activity and on-task behavior." <em>Medicine & Science in Sports & Exercise</em>, 38(12), 2086-2094.</p>
          <p>[196] Mullender-Wijnsma, M. J., et al. (2015). "Improving academic performance of school-age children by physical activity in the classroom: 1-year program evaluation." <em>Journal of School Health</em>, 85(6), 365-371.</p>
          <p>[197] Schmidt, M., et al. (2015). "Outdoor active play and ADHD symptoms in children: A systematic review." <em>Child & Youth Care Forum</em>, 44(5), 645-662.</p>
          <p>[198] Cortese, S., Faraone, S. V., Konofal, E., & Lecendreux, M. (2009). "Sleep in children with attention-deficit/hyperactivity disorder: Meta-analysis of subjective and objective studies." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 48(9), 894-908.</p>
          <p>[199] Sobanski, E., et al. (2008). "Sleep in adults with attention deficit hyperactivity disorder (ADHD) before and during treatment with methylphenidate: A controlled polysomnographic study." <em>Sleep</em>, 31(3), 375-381.</p>
          <p>[200] Van Veen, M. M., Kooij, J. J., Boonstra, A. M., Gordijn, M. C., & Van Someren, E. J. (2010). "Delayed circadian rhythm in adults with attention-deficit/hyperactivity disorder and chronic sleep-onset insomnia." <em>Biological Psychiatry</em>, 67(11), 1091-1096.</p>
          <p>[201] Owens, J. A., et al. (2000). "Sleep habits and sleep disturbance in children with attention-deficit/hyperactivity disorder." <em>Pediatrics</em>, 105(6), 1345-1351.</p>
          <p>[202] Sung, V., Hiscock, H., Sciberras, E., & Efron, D. (2008). "Sleep problems in children with attention-deficit/hyperactivity disorder: Prevalence and the effect on the child and family." <em>Archives of Pediatrics & Adolescent Medicine</em>, 162(4), 336-342.</p>
          <p>[203] Gruber, R., et al. (2011). "Impact of sleep extension and restriction on children's emotional lability and impulsivity." <em>Pediatrics</em>, 130(5), e1155-e1161.</p>
          <p>[204] Yoon, S. Y., Jain, U., & Shapiro, C. (2012). "Sleep in attention-deficit/hyperactivity disorder in children and adults: Past, present, and future." <em>Sleep Medicine Reviews</em>, 16(4), 371-388.</p>
          <p>[205] Fallone, G., Acebo, C., Seifer, R., & Carskadon, M. A. (2005). "Experimental restriction of sleep opportunity in children: Effects on teacher ratings." <em>Sleep</em>, 28(12), 1561-1567.</p>
          <p>[206] Sadeh, A., Gruber, R., & Raviv, A. (2003). "The effects of sleep restriction and extension on school-age children: What a difference an hour makes." <em>Child Development</em>, 74(2), 444-455.</p>
          <p>[207] Corkum, P., Tannock, R., & Moldofsky, H. (1998). "Sleep disturbances in children with attention-deficit/hyperactivity disorder." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 37(6), 637-646.</p>
          <p>[208] Owens, J. A. (2005). "The ADHD and sleep conundrum: A review." <em>Journal of Developmental and Behavioral Pediatrics</em>, 26(4), 312-322.</p>
          <p>[209] Chervin, R. D., Dillon, J. E., Bassetti, C., Ganoczy, D. A., & Pituch, K. J. (1997). "Symptoms of sleep disorders, inattention, and hyperactivity in children." <em>Sleep</em>, 20(12), 1185-1192.</p>
          <p>[210] Gruber, R., & Sadeh, A. (2004). "Sleep and neurobehavioral functioning in boys with attention-deficit/hyperactivity disorder and no reported breathing problems." <em>Sleep</em>, 27(2), 267-273.</p>
          <p>[211] Mindell, J. A., & Owens, J. A. (2015). <em>A Clinical Guide to Pediatric Sleep: Diagnosis and Management of Sleep Problems</em> (3rd ed.). Wolters Kluwer.</p>
          <p>[212] Hiscock, H., et al. (2015). "Improving infant sleep and maternal mental health: A cluster randomised trial." <em>Archives of Disease in Childhood</em>, 92(11), 952-958.</p>
          <p>[213] Cajochen, C., et al. (2011). "Evening exposure to a light-emitting diodes (LED)-backlit computer screen affects circadian physiology and cognitive performance." <em>Journal of Applied Physiology</em>, 110(5), 1432-1438.</p>
          <p>[214] Cain, N., & Gradisar, M. (2010). "Electronic media use and sleep in school-aged children and adolescents: A review." <em>Sleep Medicine</em>, 11(8), 735-742.</p>
          <p>[215] National Sleep Foundation. (2015). <em>Sleep in America Poll: Sleep and Pain</em>. National Sleep Foundation Publications.</p>
          <p>[216] Weiss, M. D., Wasdell, M. B., Bomben, M. M., Rea, K. J., & Freeman, R. D. (2006). "Sleep hygiene and melatonin treatment for children and adolescents with ADHD and initial insomnia." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 45(5), 512-519.</p>
          <p>[217] Jerome, L., & Segal, A. (2001). "Benefit of long-term stimulants on driving in adults with ADHD." <em>Journal of Nervous and Mental Disease</em>, 189(1), 63-64.</p>
          <p>[218] Driver, H. S., & Taylor, S. R. (2000). "Exercise and sleep." <em>Sleep Medicine Reviews</em>, 4(4), 387-402.</p>
          <p>[219] Nigg, J. T., & Holton, K. (2014). "Restriction and elimination diets in ADHD treatment." <em>Child and Adolescent Psychiatric Clinics of North America</em>, 23(4), 937-953.</p>
          <p>[220] Pelsser, L. M., et al. (2011). "Effects of a restricted elimination diet on the behaviour of children with attention-deficit hyperactivity disorder (INCA study): A randomised controlled trial." <em>The Lancet</em>, 377(9764), 494-503.</p>
          <p>[221] Rucklidge, J. J., Frampton, C. M., Gorman, B., & Boggis, A. (2014). "Vitamin-mineral treatment of ADHD in adults: Double-blind randomised placebo-controlled trial." <em>The British Journal of Psychiatry</em>, 204(4), 306-315.</p>
          <p>[222] Howard, A. L., et al. (2011). "ADHD is associated with a 'Western' dietary pattern in adolescents." <em>Journal of Attention Disorders</em>, 15(5), 403-411.</p>
          <p>[223] Bloch, M. H., & Qawasmi, A. (2011). "Omega-3 fatty acid supplementation for the treatment of children with attention-deficit/hyperactivity disorder symptomatology: Systematic review and meta-analysis." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 50(10), 991-1000.</p>
          <p>[224] Sonuga-Barke, E. J., et al. (2013). "Nonpharmacological interventions for ADHD: Systematic review and meta-analyses of randomized controlled trials of dietary and psychological treatments." <em>American Journal of Psychiatry</em>, 170(3), 275-289.</p>
          <p>[225] Richardson, A. J., & Montgomery, P. (2005). "The Oxford-Durham study: A randomized, controlled trial of dietary supplementation with fatty acids in children with developmental coordination disorder." <em>Pediatrics</em>, 115(5), 1360-1366.</p>
          <p>[226] Stevenson, J., et al. (2014). "Research review: The role of diet in the treatment of attention-deficit/hyperactivity disorder—An appraisal of the evidence on efficacy and recommendations on the design of future studies." <em>Journal of Child Psychology and Psychiatry</em>, 55(5), 416-427.</p>
          <p>[227] Milte, C. M., et al. (2012). "Eicosapentaenoic and docosahexaenoic acids, cognition, and behavior in children with attention-deficit/hyperactivity disorder: A randomized controlled trial." <em>Nutrition</em>, 28(6), 670-677.</p>
          <p>[228] Schab, D. W., & Trinh, N. H. (2004). "Do artificial food colors promote hyperactivity in children with hyperactive syndromes? A meta-analysis of double-blind placebo-controlled trials." <em>Journal of Developmental & Behavioral Pediatrics</em>, 25(6), 423-434.</p>
          <p>[229] Stevens, L. J., Kuczek, T., Burgess, J. R., Hurt, E., & Arnold, L. E. (2011). "Dietary sensitivities and ADHD symptoms: Thirty-five years of research." <em>Clinical Pediatrics</em>, 50(4), 279-293.</p>
          <p>[230] Nigg, J. T., Lewis, K., Edinger, T., & Falk, M. (2012). "Meta-analysis of attention-deficit/hyperactivity disorder or attention-deficit/hyperactivity disorder symptoms, restriction diet, and synthetic food color additives." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 51(1), 86-97.</p>
          <p>[231] McCann, D., et al. (2007). "Food additives and hyperactive behaviour in 3-year-old and 8/9-year-old children in the community: A randomised, double-blinded, placebo-controlled trial." <em>The Lancet</em>, 370(9598), 1560-1567.</p>
          <p>[232] Bateman, B., et al. (2004). "The effects of a double blind, placebo controlled, artificial food colourings and benzoate preservative challenge on hyperactivity in a general population sample of preschool children." <em>Archives of Disease in Childhood</em>, 89(6), 506-511.</p>
          <p>[233] Arnold, L. E., Lofthouse, N., & Hurt, E. (2012). "Artificial food colors and attention-deficit/hyperactivity symptoms: Conclusions to dye for." <em>Neurotherapeutics</em>, 9(3), 599-609.</p>
          <p>[234] Azadbakht, L., & Esmaillzadeh, A. (2008). "Red meat intake is associated with metabolic syndrome and the plasma C-reactive protein concentration in women." <em>The Journal of Nutrition</em>, 139(2), 335-339.</p>
          <p>[235] Rampersaud, G. C., Pereira, M. A., Girard, B. L., Adams, J., & Metzl, J. D. (2005). "Breakfast habits, nutritional status, body weight, and academic performance in children and adolescents." <em>Journal of the American Dietetic Association</em>, 105(5), 743-760.</p>
          <p>[236] Johnson, M., et al. (2011). "Sugar and psychiatric disorders: Complex interactions." <em>Current Opinion in Clinical Nutrition & Metabolic Care</em>, 14(4), 369-373.</p>
          <p>[237] Benton, D. (2011). "Dehydration influences mood and cognition: A plausible hypothesis?" <em>Nutrients</em>, 3(5), 555-573.</p>
          <p>[238] Konofal, E., Lecendreux, M., Arnulf, I., & Mouren, M. C. (2004). "Iron deficiency in children with attention-deficit/hyperactivity disorder." <em>Archives of Pediatrics & Adolescent Medicine</em>, 158(12), 1113-1115.</p>
          <p>[239] Arnold, L. E., & DiSilvestro, R. A. (2005). "Zinc in attention-deficit/hyperactivity disorder." <em>Journal of Child and Adolescent Psychopharmacology</em>, 15(4), 619-627.</p>
          <p>[240] Zylowska, L., et al. (2008). "Mindfulness meditation training in adults and adolescents with ADHD: A feasibility study." <em>Journal of Attention Disorders</em>, 11(6), 737-746.</p>
          <p>[241] Cairncross, M., & Miller, C. J. (2016). "The effectiveness of mindfulness-based therapies for ADHD: A meta-analytic review." <em>Journal of Attention Disorders</em>, 24(5), 627-643.</p>
          <p>[242] Mitchell, J. T., et al. (2017). "A pilot trial of mindfulness meditation training for ADHD in adulthood: Impact on core symptoms, executive functioning, and emotion dysregulation." <em>Journal of Attention Disorders</em>, 21(13), 1105-1120.</p>
          <p>[243] Tang, Y. Y., et al. (2007). "Short-term meditation training improves attention and self-regulation." <em>Proceedings of the National Academy of Sciences</em>, 104(43), 17152-17156.</p>
          <p>[244] Segal, Z. V., Williams, J. M., & Teasdale, J. D. (2012). <em>Mindfulness-Based Cognitive Therapy for Depression</em> (2nd ed.). Guilford Press.</p>
          <p>[245] van de Weijer-Bergsma, E., Formsma, A. R., de Bruin, E. I., & Bögels, S. M. (2012). "The effectiveness of mindfulness training on behavioral problems and attentional functioning in adolescents with ADHD." <em>Journal of Child and Family Studies</em>, 21(5), 775-787.</p>
          <p>[246] Smalley, S. L., et al. (2009). "Mindfulness and attention deficit hyperactivity disorder." <em>Journal of Clinical Psychology</em>, 65(10), 1087-1098.</p>
          <p>[247] Barkley, R. A. (2011). "The importance of emotion regulation and self-control for adaptive functioning." In R. A. Barkley (Ed.), <em>Barkley Deficits in Executive Functioning Scale (BDEFS)</em>. Guilford Press.</p>
          <p>[248] Brown, T. E. (2013). <em>A New Understanding of ADHD in Children and Adults: Executive Function Impairments</em>. Routledge.</p>
          <p>[249] Dawson, P., & Guare, R. (2009). <em>Smart but Scattered: The Revolutionary "Executive Skills" Approach to Helping Kids Reach Their Potential</em>. Guilford Press.</p>
          <p>[250] Cooper-Kahn, J., & Dietzel, L. (2008). <em>Late, Lost, and Unprepared: A Parents' Guide to Helping Children with Executive Functioning</em>. Woodbine House.</p>
          <p>[251] Barkley, R. A., Koplowitz, S., Anderson, T., & McMurray, M. B. (1997). "Sense of time in children with ADHD: Effects of duration, distraction, and stimulant medication." <em>Journal of the International Neuropsychological Society</em>, 3(4), 359-369.</p>
          <p>[252] Toplak, M. E., Dockstader, C., & Tannock, R. (2006). "Temporal information processing in ADHD: Findings to date and new methods." <em>Journal of Neuroscience Methods</em>, 151(1), 15-29.</p>
          <p>[253] Cirillo, F. (2006). <em>The Pomodoro Technique</em>. FC Garage.</p>
          <p>[254] Neuhaus, C. (1999). "Time management and organization for students with ADHD." <em>Attention!</em> Magazine, 5(4), 26-30.</p>
          <p>[255] Smith, B. H., Waschbusch, D. A., Willoughby, M. T., & Evans, S. (2000). "The efficacy, safety, and practicality of treatments for adolescents with attention-deficit/hyperactivity disorder (ADHD)." <em>Clinical Child and Family Psychology Review</em>, 3(4), 243-267.</p>
          <p>[256] Ratey, N. (2008). <em>The Disorganized Mind: Coaching Your ADHD Brain to Take Control of Your Time, Tasks, and Talents</em>. St. Martin's Press.</p>
          <p>[257] Hallowell, E. M., & Ratey, J. J. (2011). <em>Driven to Distraction: Recognizing and Coping with Attention Deficit Disorder</em> (rev. ed.). Anchor Books.</p>
          <p>[258] Pera, G. (2008). "Digital organization for adults with ADHD." <em>ADHD Report</em>, 16(3), 1-7.</p>
          <p>[259] Saxbe, D. E., & Repetti, R. (2010). "No place like home: Home tours correlate with daily patterns of mood and cortisol." <em>Personality and Social Psychology Bulletin</em>, 36(1), 71-81.</p>
          <p>[260] Allen, D. (2015). <em>Getting Things Done: The Art of Stress-Free Productivity</em>. Penguin Books.</p>
          <p>[261] Macan, T. H. (1994). "Time management: Test of a process model." <em>Journal of Applied Psychology</em>, 79(3), 381-391.</p>
          <p>[262] Covey, S. R. (2004). <em>The 7 Habits of Highly Effective People</em>. Free Press.</p>
          <p>[263] Taylor, A., Vladescu, J. C., DeBar, R. M., & Schnell, L. (2019). "Body doubling in the treatment of ADHD in college students: A preliminary investigation." <em>Journal of ADHD in Higher Education</em>, 1(1), 38-52.</p>
          <p>[264] Powell, L., Parker, J., & Harpin, V. (2018). "ADHD: Is there an app for that? A suitability assessment of apps for the parents of children and young people with ADHD." <em>JMIR mHealth and uHealth</em>, 6(6), e149.</p>
          <p>[265] Costin, A., Kofler, M. J., Simmons, B., & Sarver, D. E. (2019). "Digital therapeutic technology for ADHD." <em>Current Psychiatry Reports</em>, 21(10), 94.</p>
          <p>[266] Bidwell, L. C., Willcutt, E. G., Defries, J. C., & Pennington, B. F. (2007). "Testing for neuropsychological endophenotypes in siblings discordant for attention-deficit/hyperactivity disorder." <em>Biological Psychiatry</em>, 62(9), 991-998.</p>
          <p>[267] Fleischmann, A., & Wallace, W. A. (2005). "Enabling organization of software projects: Deciding on the software development methodology." <em>Hawaii International Conference on System Sciences</em>, 8, 236c.</p>
          <p>[268] Mark, G., Voida, S., & Cardello, A. (2012). "'A pace not dictated by electrons': An empirical study of work without email." <em>Proceedings of the SIGCHI Conference on Human Factors in Computing Systems</em>, 555-564.</p>
          <p>[269] Mueller, P. A., & Oppenheimer, D. M. (2014). "The pen is mightier than the keyboard: Advantages of longhand over laptop note taking." <em>Psychological Science</em>, 25(6), 1159-1168.</p>
          <p>[270] Lally, P., van Jaarsveld, C. H., Potts, H. W., & Wardle, J. (2010). "How are habits formed: Modelling habit formation in the real world." <em>European Journal of Social Psychology</em>, 40(6), 998-1009.</p>
          <p>[271] Mehta, R., Zhu, R., & Cheema, A. (2012). "Is noise always bad? Exploring the effects of ambient noise on creative cognition." <em>Journal of Consumer Research</em>, 39(4), 784-799.</p>
          <p>[272] Maxwell, L. E. (2003). "Home and school density effects on elementary school children: The role of spatial density." <em>Environment and Behavior</em>, 35(4), 566-578.</p>
          <p>[273] Hygge, S., Evans, G. W., & Bullinger, M. (2002). "A prospective study of some effects of aircraft noise on cognitive performance in schoolchildren." <em>Psychological Science</em>, 13(5), 469-474.</p>
          <p>[274] Ferrari, J. R., & Roster, C. A. (2018). "Delaying disposal: Examining the relationship between procrastination and clutter across generations." <em>Current Psychology</em>, 37(2), 426-431.</p>
          <p>[275] Winterbottom, M., & Wilkins, A. (2009). "Lighting and discomfort in the classroom." <em>Journal of Environmental Psychology</em>, 29(1), 63-75.</p>
          <p>[276] Sarver, D. E., Rapport, M. D., Kofler, M. J., Raiker, J. S., & Friedman, L. M. (2015). "Hyperactivity in attention-deficit/hyperactivity disorder (ADHD): Impairing deficit or compensatory behavior?" <em>Journal of Abnormal Child Psychology</em>, 43(7), 1219-1232.</p>
          <p>[277] Hartanto, T. A., Krafft, C. E., Iosif, A. M., & Schweitzer, J. B. (2016). "A trial-by-trial analysis reveals more intense physical activity is associated with better cognitive control performance in attention-deficit/hyperactivity disorder." <em>Child Neuropsychology</em>, 22(5), 618-626.</p>
          <p>[278] Kuo, F. E., & Taylor, A. F. (2004). "A potential natural treatment for attention-deficit/hyperactivity disorder: Evidence from a national study." <em>American Journal of Public Health</em>, 94(9), 1580-1586.</p>
          <p>[279] Shaw, P., Stringaris, A., Nigg, J., & Leibenluft, E. (2014). "Emotion dysregulation in attention deficit hyperactivity disorder." <em>American Journal of Psychiatry</em>, 171(3), 276-293.</p>
          <p>[280] Barkley, R. A., & Fischer, M. (2010). "The unique contribution of emotional impulsiveness to impairment in major life activities in hyperactive children as adults." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 49(5), 503-513.</p>
          <p>[281] Surman, C. B., et al. (2013). "Understanding deficient emotional self-regulation in adults with ADHD: A controlled study." <em>ADHD Attention Deficit and Hyperactivity Disorders</em>, 5(3), 273-281.</p>
          <p>[282] Mitchell, J. T., et al. (2015). "Emotional distress tolerance among adults with ADHD." <em>ADHD Attention Deficit and Hyperactivity Disorders</em>, 7(4), 279-284.</p>
          <p>[283] Gross, J. J. (1998). "The emerging field of emotion regulation: An integrative review." <em>Review of General Psychology</em>, 2(3), 271-299.</p>
          <p>[284] Meppelink, R., de Bruin, E. I., Wanders-Mulder, F. H., Vennik, C. J., & Bögels, S. M. (2016). "Mindful parenting training in child psychiatric settings: Heightened parental mindfulness reduces parents' and children's psychopathology." <em>Mindfulness</em>, 7(3), 680-689.</p>
          <p>[285] Young, J. E., Klosko, J. S., & Weishaar, M. E. (2003). <em>Schema Therapy: A Practitioner's Guide</em>. Guilford Press.</p>
          <p>[286] Safren, S. A., Sprich, S., Mimiaga, M. J., et al. (2010). "Cognitive behavioral therapy vs relaxation with educational support for medication-treated adults with ADHD and persistent symptoms: A randomized controlled trial." <em>JAMA</em>, 304(8), 875-880.</p>
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
