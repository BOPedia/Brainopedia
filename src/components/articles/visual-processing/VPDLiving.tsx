import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface VPDLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function VPDLiving({ setCurrentArticle }: VPDLivingProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('visual-processing'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Visual Processing Disorder
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Living with Visual Processing Disorder
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Living with Visual Processing Disorder involves navigating a visually-oriented world with different 
            visual processing abilities.<sup>[1]</sup> While VPD presents challenges, understanding, appropriate 
            support, and effective strategies enable individuals to thrive academically, professionally, and 
            personally.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Daily Life with VPD</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlseSUyMGxpZmV8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Daily life activities"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Fatigue</h3>
          <p className="mb-4">
            Tasks requiring visual processing are mentally exhausting.<sup>[3]</sup> Reading, writing, navigating 
            visually complex environments, or detailed visual work depletes energy more quickly than for those 
            without VPD.<sup>[4]</sup> Managing energy and taking breaks prevents burnout.<sup>[5]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Navigation and Spatial Awareness</h3>
          <p className="mb-4">
            Visual-spatial processing challenges affect navigation—getting lost in familiar places, difficulty 
            following maps, or challenges with spatial relationships in parking or crowded spaces.<sup>[6]</sup> 
            Extra time, GPS assistance, and landmark-based navigation help.<sup>[7]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Organization</h3>
          <p className="mb-4">
            Keeping spaces visually organized is challenging when visual-spatial processing is affected.<sup>[8]</sup> 
            External organizational systems—labels, bins, consistent placement—compensate for internal visual 
            organization difficulties.<sup>[9]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual-Motor Tasks</h3>
          <p className="mb-4">
            Daily tasks requiring visual-motor coordination—buttoning, tying, cutting, assembling items—take 
            longer and require more effort.<sup>[10]</sup> Adaptive equipment, alternatives (Velcro instead 
            of buttons), or simply allowing extra time helps.<sup>[11]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">School Experiences</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Academic Challenges</h3>
          <p className="mb-4">
            School heavily emphasizes visual learning—reading textbooks, worksheets, copying from boards, 
            handwriting.<sup>[12]</sup> Students with VPD must work harder than peers for the same outcomes.<sup>[13]</sup> 
            This effort disparity is often invisible to others.<sup>[14]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Subject-Specific Impacts</h3>
          <p className="mb-4">
            Reading-heavy subjects, math (especially geometry), and classes requiring detailed visual work 
            are most affected.<sup>[15]</sup> Science diagrams, geography maps, and art classes may be 
            challenging.<sup>[16]</sup> However, verbal subjects and hands-on learning may be relative strengths.<sup>[17]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Homework Burden</h3>
          <p className="mb-4">
            Homework takes significantly longer due to visual processing demands.<sup>[18]</sup> Reading 
            assignments, written work, and visual projects extend homework time.<sup>[19]</sup> This reduces 
            time for rest, play, and other activities.<sup>[20]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Aspects</h3>
          <p className="mb-4">
            Visual-motor challenges may affect playground activities, sports, or crafts that peers enjoy.<sup>[21]</sup> 
            Being "bad at sports" or struggling with activities others find easy impacts social participation 
            and self-image.<sup>[22]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Self-Esteem and Identity</h3>
          <p className="mb-4">
            Repeated struggles despite effort affect self-esteem.<sup>[23]</sup> Labels like "lazy," "careless," 
            or "not trying" hurt when difficulties actually reflect neurological differences.<sup>[24]</sup> 
            Understanding VPD helps reframe struggles appropriately.<sup>[25]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Higher Education</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHN8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="College students studying"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">College and University</h3>
          <p className="mb-4">
            Higher education increases reading and writing demands.<sup>[26]</sup> However, more flexibility 
            in course selection, format, and scheduling allows students to work with their learning style.<sup>[27]</sup> 
            Disability services provide accommodations.<sup>[28]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Accessing Accommodations</h3>
          <p className="mb-4">
            Students must self-disclose to disability services and provide documentation.<sup>[29]</sup> 
            Accommodations might include extended time, alternative formats, note-taking services, or assistive 
            technology.<sup>[30]</sup> Self-advocacy is essential at this level.<sup>[31]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Major Selection</h3>
          <p className="mb-4">
            Field of study can leverage strengths or compound challenges.<sup>[32]</sup> Fields emphasizing 
            verbal, analytical, or hands-on skills may suit individuals with VPD better than visually-intensive 
            fields.<sup>[33]</sup> However, with appropriate accommodations, many paths are accessible.<sup>[34]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Technology Skills</h3>
          <p className="mb-4">
            Proficiency with assistive technology becomes increasingly important in higher education.<sup>[35]</sup> 
            Text-to-speech, speech-to-text, organizational apps, and digital note-taking support academic 
            success.<sup>[36]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Career and Work Life</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Career Selection</h3>
          <p className="mb-4">
            Career paths that emphasize verbal, analytical, interpersonal, or technical skills may be good 
            fits.<sup>[37]</sup> Fields like counseling, teaching (especially verbal subjects), technology, 
            trades, or business leverage different strengths.<sup>[38]</sup> Visually-intensive careers 
            (graphic design, architecture, surgery) may present more challenges though aren't impossible.<sup>[39]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Workplace Challenges</h3>
          <p className="mb-4">
            Reading and responding to emails, reviewing documents, navigating spreadsheets, or organizing 
            visual information are common workplace tasks that may be challenging.<sup>[40]</sup> Written 
            communication, detailed visual work, or multitasking with visual information requires extra 
            effort.<sup>[41]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Workplace Accommodations</h3>
          <p className="mb-4">
            Americans with Disabilities Act (ADA) protections may apply to VPD.<sup>[42]</sup> Reasonable 
            accommodations include assistive technology, modified formats, extended deadlines for complex 
            visual work, or task modifications.<sup>[43]</sup> Documentation supports accommodation requests.<sup>[44]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Professional Success</h3>
          <p className="mb-4">
            Many individuals with VPD have successful careers.<sup>[45]</sup> Playing to strengths, using 
            accommodations strategically, and choosing roles that fit abilities enables success.<sup>[46]</sup> 
            Determination, creativity in problem-solving, and good verbal skills often characterize successful 
            adults with VPD.<sup>[47]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Relationships and Social Life</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Explaining VPD to Others</h3>
          <p className="mb-4">
            Explaining an invisible condition is challenging.<sup>[48]</sup> People may not understand why 
            someone with "perfect vision" struggles with visual tasks.<sup>[49]</sup> Clear explanation helps: 
            "My eyes see fine, but my brain processes visual information differently."<sup>[50]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Romantic Relationships</h3>
          <p className="mb-4">
            Partners need to understand VPD's impacts—why navigation is challenging, why reading menus takes 
            longer, why organizing is difficult.<sup>[51]</sup> Understanding and patience from partners 
            support successful relationships.<sup>[52]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Parenting with VPD</h3>
          <p className="mb-4">
            Parents with VPD may find certain parenting tasks challenging—helping with homework, certain 
            play activities, or visual organization.<sup>[53]</sup> However, they bring unique perspectives 
            and strengths to parenting.<sup>[54]</sup> Partnering with others or using accommodations helps.<sup>[55]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Activities</h3>
          <p className="mb-4">
            Choosing social activities that don't heavily emphasize visual-motor skills makes participation 
            more enjoyable.<sup>[56]</sup> Conversation-based socializing, dining, music, or interest-based 
            groups may be more comfortable than sports or visually-intensive activities.<sup>[57]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Practical Life Skills</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlseSUyMHRhc2tzfGVufDF8fHx8MTY3NDUzNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Daily life tasks and skills"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Driving</h3>
          <p className="mb-4">
            Driving requires complex visual processing—spatial awareness, visual-motor coordination, processing 
            visual information quickly.<sup>[58]</sup> Some individuals with VPD find driving challenging; 
            others adapt successfully.<sup>[59]</sup> Extra practice, lessons, or alternative transportation 
            may be appropriate.<sup>[60]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Home Management</h3>
          <p className="mb-4">
            Organizing homes, following visual assembly instructions, certain cooking tasks, or home repairs 
            involving visual-spatial skills may be challenging.<sup>[61]</sup> Using organizational systems, 
            asking for help, or hiring services for particularly challenging tasks is reasonable.<sup>[62]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Financial Management</h3>
          <p className="mb-4">
            Visual organization of financial information, reading statements, or tracking visual details may 
            be affected.<sup>[63]</sup> Digital tools with text-to-speech, simplified formats, or professional 
            financial help can assist.<sup>[64]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Healthcare Navigation</h3>
          <p className="mb-4">
            Reading medical information, finding locations in large medical facilities, or managing visual 
            aspects of healthcare presents challenges.<sup>[65]</sup> Asking for verbal instructions, using 
            navigation apps, or having support persons helps.<sup>[66]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Emotional and Psychological Aspects</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Frustration and Stress</h3>
          <p className="mb-4">
            Chronic difficulty with tasks others find simple creates frustration.<sup>[67]</sup> The extra 
            effort required for visual tasks is stressful.<sup>[68]</sup> Acknowledging this frustration and 
            developing healthy coping strategies is important.<sup>[69]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Anxiety</h3>
          <p className="mb-4">
            Anticipatory anxiety about challenging visual situations is common.<sup>[70]</sup> Test anxiety, 
            anxiety about navigation or visual-motor tasks, or general anxiety may develop.<sup>[71]</sup> 
            Addressing anxiety through therapy, coping strategies, or accommodations helps.<sup>[72]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Depression</h3>
          <p className="mb-4">
            Persistent struggles, social isolation, or feeling "different" can contribute to depression.<sup>[73]</sup> 
            Professional mental health support addresses these impacts.<sup>[74]</sup> Understanding VPD's 
            neurological basis helps counter negative self-perceptions.<sup>[75]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Building Resilience</h3>
          <p className="mb-4">
            Many individuals with VPD develop remarkable resilience through overcoming challenges.<sup>[76]</sup> 
            Problem-solving skills, persistence, and creative thinking become strengths.<sup>[77]</sup> Reframing 
            VPD as a difference rather than purely a deficit supports positive identity.<sup>[78]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Advocacy and Self-Advocacy</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding Rights</h3>
          <p className="mb-4">
            Understanding legal protections—IDEA in schools, Section 504, ADA in workplaces—empowers 
            advocacy.<sup>[79]</sup> Knowing what accommodations are available and how to request them is 
            essential.<sup>[80]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Communicating Needs</h3>
          <p className="mb-4">
            Clearly articulating needs—what is difficult, what helps, what accommodations are needed—enables 
            others to provide appropriate support.<sup>[81]</sup> Specific requests work better than general 
            statements.<sup>[82]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Building Support Networks</h3>
          <p className="mb-4">
            Connecting with others who have VPD, learning disabilities, or related conditions provides support 
            and practical strategies.<sup>[83]</sup> Online communities, support groups, or advocacy organizations 
            offer connection.<sup>[84]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Educating Others</h3>
          <p className="mb-4">
            Individuals with VPD and families can help educate teachers, employers, and others about the 
            condition.<sup>[85]</sup> Increasing awareness improves understanding and support.<sup>[86]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Strengths and Positive Aspects</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Verbal and Auditory Strengths</h3>
          <p className="mb-4">
            Many individuals with VPD excel in verbal communication, listening comprehension, and auditory 
            learning.<sup>[87]</sup> These strengths support success in verbally-oriented fields and activities.<sup>[88]</sup> 
            Podcasts, audiobooks, and conversation-based learning suit this profile.<sup>[89]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Analytical Thinking</h3>
          <p className="mb-4">
            VPD doesn't affect intelligence or analytical abilities.<sup>[90]</sup> Many individuals excel 
            in logical reasoning, problem-solving, and conceptual thinking.<sup>[91]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Creativity and Innovation</h3>
          <p className="mb-4">
            Finding creative solutions to visual challenges builds innovative thinking.<sup>[92]</sup> Different 
            ways of processing information may lead to unique perspectives or creative approaches.<sup>[93]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Empathy and Understanding</h3>
          <p className="mb-4">
            Experiencing challenges often builds empathy and understanding for others' struggles.<sup>[94]</sup> 
            Many individuals with VPD develop strong advocacy skills and sensitivity to accessibility.<sup>[95]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Technology and Modern Life</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaGVscHxlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Technology assistance"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Digital Accessibility</h3>
          <p className="mb-4">
            Modern technology offers unprecedented accessibility.<sup>[96]</sup> Text-to-speech, speech-to-text, 
            adjustable text size and format, and digital organization tools assist significantly.<sup>[97]</sup> 
            Smartphones and tablets provide powerful accommodation tools.<sup>[98]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Audiobooks and Podcasts</h3>
          <p className="mb-4">
            The explosion of audio content provides access to information and entertainment without visual 
            processing demands.<sup>[99]</sup> Audiobooks, podcasts, and audio-based learning have never 
            been more available.<sup>[100]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">GPS and Navigation</h3>
          <p className="mb-4">
            GPS technology with voice directions compensates for spatial navigation challenges.<sup>[101]</sup> 
            This independence-enabling technology benefits individuals with visual-spatial difficulties.<sup>[102]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Remote Work and Learning</h3>
          <p className="mb-4">
            Increased remote options allow individuals to work and learn in controlled, accommodated environments.<sup>[103]</sup> 
            Digital formats are often more adaptable than physical materials.<sup>[104]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Life Across Different Stages</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Childhood</h3>
          <p className="mb-4">
            Early identification and intervention support development.<sup>[105]</sup> Understanding VPD helps 
            families and educators provide appropriate support rather than attributing struggles to laziness.<sup>[106]</sup> 
            Building skills and confidence early matters.<sup>[107]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adolescence</h3>
          <p className="mb-4">
            Teenagers develop self-advocacy skills and begin making educational and career decisions.<sup>[108]</sup> 
            Understanding their own VPD profile helps informed decision-making.<sup>[109]</sup> Identity 
            development includes integrating VPD into self-concept.<sup>[110]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Young Adulthood</h3>
          <p className="mb-4">
            Transition to independence, higher education, or careers requires applying accommodation knowledge 
            to new settings.<sup>[111]</sup> Self-advocacy becomes fully the individual's responsibility.<sup>[112]</sup> 
            Career choices reflect both interests and practical considerations.<sup>[113]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Middle and Later Adulthood</h3>
          <p className="mb-4">
            Adults typically have developed effective compensation strategies over time.<sup>[114]</sup> Career 
            paths and lifestyle choices reflect accumulated wisdom about what works.<sup>[115]</sup> Many 
            adults with VPD are successful, content, and well-adapted.<sup>[116]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Looking Forward with Hope</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Growing Understanding</h3>
          <p className="mb-4">
            Understanding of visual processing and effective interventions continues advancing.<sup>[117]</sup> 
            Better assessment tools, intervention programs, and accommodations emerge from ongoing research.<sup>[118]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Technological Advances</h3>
          <p className="mb-4">
            Technology continues evolving to support accessibility.<sup>[119]</sup> Artificial intelligence, 
            improved text-to-speech and speech-to-text, and new assistive tools provide increasing support.<sup>[120]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Increasing Awareness</h3>
          <p className="mb-4">
            Awareness of learning differences including VPD is growing.<sup>[121]</sup> Schools, workplaces, 
            and society increasingly recognize neurodiversity and provide accommodations.<sup>[122]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Individual Growth</h3>
          <p className="mb-4">
            Individuals continue learning, adapting, and developing throughout life.<sup>[123]</sup> What's 
            challenging at one point may become more manageable with strategies, accommodations, and experience.<sup>[124]</sup> 
            Growth and adaptation are ongoing possibilities.<sup>[125]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Thriving with VPD:</h3>
            <div className="text-sm">
              <p>
                Living with Visual Processing Disorder involves real challenges—visual fatigue, academic 
                struggles, coordination difficulties, and navigation challenges affect daily life.<sup>[126]</sup> 
                However, with understanding, appropriate accommodations, effective strategies, and focus on 
                strengths, individuals with VPD can and do thrive academically, professionally, and personally.<sup>[127]</sup> 
                Success involves accepting both challenges and abilities, using accommodations strategically, 
                and building on verbal, analytical, and other strengths.<sup>[128]</sup> VPD is one aspect 
                of diverse human neurology—different, but not limiting potential.<sup>[129]</sup> With support 
                and self-understanding, individuals with VPD lead fulfilling, successful lives navigating 
                visual demands in their own way.<sup>[130]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[2] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[3] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[4] Grisham, D., Sheppard, M. M., & Tran, W. U. (1993). "Visual symptoms and reading performance." <em>Optometry and Vision Science</em>, 70(5), 384-391.</p>
          <p>[5] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[6] Newcombe, F., & Ratcliff, G. (1989). "Disorders of visuospatial analysis." In F. Boller & J. Grafman (Eds.), <em>Handbook of neuropsychology</em> (Vol. 2, pp. 333-356). Amsterdam: Elsevier.</p>
          <p>[7] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[8] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[9] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[10] Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). <em>Beery-Buktenica Developmental Test of Visual-Motor Integration</em> (6th ed.). San Antonio: Pearson.</p>
          <p>[11] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[12] Kavale, K., & Forness, S. (2000). "Auditory and visual perception processes and reading ability: A quantitative reanalysis and historical reinterpretation." <em>Learning Disability Quarterly</em>, 23(4), 253-270.</p>
          <p>[13] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[14] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[15] Kulp, M. T., Earley, M. J., Mitchell, G. L., Timmerman, L. M., Frasco, C. S., & Geier, J. E. (2004). "Are visual perceptual skills related to mathematics ability in second through sixth grade children?" <em>Focus on Learning Problems in Mathematics</em>, 26(4), 44-51.</p>
          <p>[16] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[17] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[18] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[19] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[20] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[21] Wilson, P. H., & McKenzie, B. E. (1998). "Information processing deficits associated with developmental coordination disorder: A meta-analysis of research findings." <em>Journal of Child Psychology and Psychiatry</em>, 39(6), 829-840.</p>
          <p>[22] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[23] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[24] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[25] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[26] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[27] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria: ASCD.</p>
          <p>[28] Sireci, S. G., Scarpati, S. E., & Li, S. (2005). "Test accommodations for students with disabilities: An analysis of the interaction hypothesis." <em>Review of Educational Research</em>, 75(4), 457-490.</p>
          <p>[29] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[30] Thurlow, M. L., Lazarus, S. S., Thompson, S. J., & Morse, A. B. (2005). <em>State policies on assessment participation and accommodations for students with disabilities</em>. <em>Journal of Special Education</em>, 38(4), 232-240.</p>
          <p>[31] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[32] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[33] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[34] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[35] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria: ASCD.</p>
          <p>[36] Anderson-Inman, L., & Horney, M. A. (2007). "Supported eText: Assistive technology through text transformations." <em>Reading Research Quarterly</em>, 42(1), 153-160.</p>
          <p>[37] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[38] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[39] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[40] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[41] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[42] Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq.</p>
          <p>[43] Job Accommodation Network. (2021). "Accommodation and compliance series: Visual impairments." <em>JAN</em>.</p>
          <p>[44] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[45] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[46] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[47] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[48] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[49] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[50] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[51] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[52] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[53] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[54] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[55] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[56] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[57] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[58] Anstey, K. J., Wood, J., Lord, S., & Walker, J. G. (2005). "Cognitive, sensory and physical factors enabling driving safety in older adults." <em>Clinical Psychology Review</em>, 25(1), 45-65.</p>
          <p>[59] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[60] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[61] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[62] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[63] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[64] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria: ASCD.</p>
          <p>[65] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[66] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[67] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[68] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[69] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[70] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[71] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[72] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[73] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[74] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[75] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[76] Haft, S. L., Myers, C. A., & Hoeft, F. (2016). "Socio-emotional and cognitive resilience in children with reading disabilities." <em>Current Opinion in Behavioral Sciences</em>, 10, 133-141.</p>
          <p>[77] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[78] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[79] Yell, M. L. (2016). <em>The law and special education</em> (4th ed.). Boston: Pearson.</p>
          <p>[80] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[81] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[82] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[83] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[84] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[85] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[86] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[87] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[88] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[89] Esteves, K. J., & Whitten, E. (2011). "Assisted reading with digital audiobooks for students with reading disabilities." <em>Reading Horizons</em>, 51(1), 21-40.</p>
          <p>[90] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[91] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[92] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[93] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[94] Haft, S. L., Myers, C. A., & Hoeft, F. (2016). "Socio-emotional and cognitive resilience in children with reading disabilities." <em>Current Opinion in Behavioral Sciences</em>, 10, 133-141.</p>
          <p>[95] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[96] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria: ASCD.</p>
          <p>[97] Anderson-Inman, L., & Horney, M. A. (2007). "Supported eText: Assistive technology through text transformations." <em>Reading Research Quarterly</em>, 42(1), 153-160.</p>
          <p>[98] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria: ASCD.</p>
          <p>[99] Esteves, K. J., & Whitten, E. (2011). "Assisted reading with digital audiobooks for students with reading disabilities." <em>Reading Horizons</em>, 51(1), 21-40.</p>
          <p>[100] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria: ASCD.</p>
          <p>[101] Anstey, K. J., Wood, J., Lord, S., & Walker, J. G. (2005). "Cognitive, sensory and physical factors enabling driving safety in older adults." <em>Clinical Psychology Review</em>, 25(1), 45-65.</p>
          <p>[102] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[103] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria: ASCD.</p>
          <p>[104] Anderson-Inman, L., & Horney, M. A. (2007). "Supported eText: Assistive technology through text transformations." <em>Reading Research Quarterly</em>, 42(1), 153-160.</p>
          <p>[105] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[106] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[107] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[108] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[109] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[110] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[111] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria: ASCD.</p>
          <p>[112] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[113] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[114] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[115] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[116] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[117] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[118] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[119] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria: ASCD.</p>
          <p>[120] Anderson-Inman, L., & Horney, M. A. (2007). "Supported eText: Assistive technology through text transformations." <em>Reading Research Quarterly</em>, 42(1), 153-160.</p>
          <p>[121] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[122] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria: ASCD.</p>
          <p>[123] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[124] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[125] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[126] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[127] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[128] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[129] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[130] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('visual-processing'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Visual Processing Disorder
        </a>
      </div>
    </article>
  );
}
