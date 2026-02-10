import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ASDReferences } from './ASDReferences';

interface ASDOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function ASDOverview({ setCurrentArticle }: ASDOverviewProps) {
  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>

      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex items-center justify-between">
        <h1 className="text-3xl">
          Autism: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          All About Autism
        </button>
      </div>

      <div className="space-y-8">
        {/* Introduction Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">∞ What is Autism Spectrum Disorder?</h2>
          
          {/* Image removed - headTreeImage variable not defined */}
          {/* <img 
            src={headTreeImage} 
            alt="Head with tree representing neurodiversity and autism"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          /> */}
          
          <p className="mb-4">
            Autism spectrum disorder (ASD) is a neurodevelopmental condition characterized by differences in social communication and interaction, alongside restricted or repetitive patterns of behavior, interests, or activities. Autism is called a "spectrum" disorder because there is wide variation in the type and severity of symptoms people experience.
          </p>
          <p className="mb-4">
            ASD affects approximately 1 in 36 children in the United States according to 2023 CDC data,<sup>[3]</sup> representing a significant increase in diagnosis rates over the past two decades. This increase is largely attributed to improved awareness, expanded diagnostic criteria, and better identification rather than a true increase in prevalence.
          </p>
          
          {/* Nested: Key Facts */}
          <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Key Facts About Autism</h3>
            
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Lifelong Condition</div>
                  <div className="text-sm">Autism is a lifelong condition, though symptoms and support needs may change over time</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Neurological Difference</div>
                  <div className="text-sm">Not a disease or mental illness—it's a fundamental difference in how the brain develops and functions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Callout box */}
          <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
            <p className="text-sm">
              <strong>Important:</strong> Autism is not caused by poor parenting, vaccines, or other debunked myths. 
              It is a natural neurological variation that deserves understanding, acceptance, and appropriate support.
            </p>
          </div>
        </div>

        {/* The Spectrum Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Understanding "The Spectrum"</h2>
          
          {/* Image removed - spectrumInfinityImage variable not defined */}
          {/* <img 
            src={spectrumInfinityImage} 
            alt="Infinity symbol representing autism spectrum diversity"
            className="w-80 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          /> */}
          
          <p className="mb-6">
            The autism spectrum is not a linear scale from "mild" to "severe." Instead, it represents the diverse 
            ways autism can manifest across multiple dimensions. Each autistic person has a unique profile 
            of strengths and challenges across various domains.
          </p>

          {/* Nested: Spectrum Dimensions */}
          <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Dimensions of the Spectrum</h3>
            
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Social Communication</div>
                  <div className="text-sm">From nonspeaking to highly verbal, from difficulty with social cues to developing compensatory strategies</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Sensory Processing</div>
                  <div className="text-sm">Hyper-sensitivity or hypo-sensitivity to sensory input like sound, light, touch, taste, and smell</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Executive Functioning</div>
                  <div className="text-sm">Planning, organization, flexibility, and self-regulation abilities</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Restricted Interests</div>
                  <div className="text-sm">Depth and intensity of focused interests</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Repetitive Behaviors</div>
                  <div className="text-sm">Self-stimulatory behaviors (stimming), routines, and need for sameness</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Cognitive Abilities</div>
                  <div className="text-sm">From intellectual disability to giftedness</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Support Needs</div>
                  <div className="text-sm">From minimal to substantial across different life domains</div>
                </div>
              </div>
            </div>
          </div>

          {/* Callout box */}
          <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
            <p className="text-sm">
              <strong>∞ Infinity Symbol:</strong> The gold infinity symbol represents the diversity of the autism spectrum, 
              while the rainbow infinity symbol represents all of neurodiversity. Two autistic people can have 
              very different presentations and support needs, which is why the spectrum concept is so important.
            </p>
          </div>
        </div>

        {/* Neurodiversity Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Neurodiversity Paradigm</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1672952419591-3c0bc803175d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyb2RpdmVyc2l0eSUyMGJyYWluJTIwZGl2ZXJzaXR5JTIwc3BlY3RydW18ZW58MXx8fHwxNzY3NDExODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Brain diversity and neurodiversity concept"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-6">
            Many autistic individuals and advocates embrace the neurodiversity paradigm, which views autism as a natural variation in human neurology rather than a disorder or deficit that needs to be "cured." This perspective, pioneered by autistic sociologist Judy Singer in the 1990s, has fundamentally changed how many people understand autism.
          </p>
          
          {/* Nested: Neurodiversity Principles */}
          <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Core Principles of Neurodiversity</h3>
            
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Natural Variation</div>
                  <div className="text-sm">Autism as a natural neurological difference, not a disease</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Acceptance</div>
                  <div className="text-sm">Acceptance and celebration of autistic ways of being</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Accommodation</div>
                  <div className="text-sm">Providing accommodations and support rather than trying to "fix" autistic people</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Amplifying Voices</div>
                  <div className="text-sm">Centering autistic perspectives in research, policy, and support</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Balanced Perspective</div>
                  <div className="text-sm">Recognizing both challenges and strengths associated with autism</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Removing Barriers</div>
                  <div className="text-sm">Understanding that disability often arises from societal barriers, not inherent deficits</div>
                </div>
              </div>
            </div>
          </div>

          {/* Callout box */}
          <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
            <p className="text-sm">
              <strong>Important Note:</strong> The neurodiversity paradigm doesn't deny that autism comes with genuine challenges
              or that many autistic people need significant support. Rather, it advocates for supporting autistic
              people in ways that respect their neurological differences rather than trying to make them "normal."
            </p>
          </div>
        </div>

        {/* YouTube Video Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h3 className="text-[#0c264d] font-bold mb-4 text-xl text-center">Learn More About Autism</h3>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src="https://www.youtube.com/embed/MTW7H5UQ8Ts"
              title="YouTube video about autism"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Core Features Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Core Features of Autism</h2>
          
          {/* Image removed - definingAutismImage variable not defined */}
          {/* <img 
            src={definingAutismImage} 
            alt="Defining characteristics of autism spectrum disorder"
            className="w-96 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          /> */}
          
          <p className="mb-4">
            According to the DSM-5, autism is defined by two main categories of characteristics that must be present from early childhood:
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">1. Persistent Differences in Social Communication and Social Interaction</h3>
          <p className="mb-4">
            This includes challenges across multiple contexts in:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Social-emotional reciprocity:</strong> Back-and-forth conversation, sharing interests and emotions, responding to social interactions</li>
            <li className="mb-2"><strong>Nonverbal communication:</strong> Eye contact, body language, facial expressions, gestures</li>
            <li className="mb-2"><strong>Developing and maintaining relationships:</strong> Making friends, understanding social expectations, adjusting behavior to different contexts</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">2. Restricted, Repetitive Patterns of Behavior, Interests, or Activities</h3>
          <p className="mb-4">
            Including at least two of the following:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Repetitive movements, speech, or use of objects:</strong> Hand flapping, echolalia, lining up toys</li>
            <li className="mb-2"><strong>Insistence on sameness and routines:</strong> Distress at changes, rigid thinking patterns, ritualized behaviors</li>
            <li className="mb-2"><strong>Highly restricted, fixated interests:</strong> Intense focus on specific topics or objects</li>
            <li className="mb-2"><strong>Sensory sensitivities:</strong> Hyper- or hypo-reactivity to sensory input, unusual sensory interests</li>
          </ul>

          <p className="mb-4">
            These features must cause clinically significant impairment in social, occupational, or other important 
            areas of functioning, and are not better explained by intellectual disability or global developmental 
            delay.
          </p>
        </div>

        {/* Support Levels Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support Levels</h2>
          
          <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 float-right ml-6 mb-4 w-[420px]">
            <h3 className="text-center text-[#0c264d] font-bold mb-6 text-lg">DSM-5 Support Levels</h3>
            
            <div className="space-y-4">
              <div className="border-2 border-[#2abcd4] rounded-lg p-4">
                <div className="font-bold text-[#0c264d] mb-2">Level 1: Requiring Support</div>
                <div className="text-sm text-gray-700">
                  Without support, social communication difficulties cause noticeable impairments. Difficulty initiating 
                  social interactions. Inflexibility causing significant interference with functioning.
                </div>
              </div>
              
              <div className="border-2 border-[#ffd166] rounded-lg p-4">
                <div className="font-bold text-[#0c264d] mb-2">Level 2: Requiring Substantial Support</div>
                <div className="text-sm text-gray-700">
                  Marked difficulties in verbal and nonverbal social communication. Limited initiation of social 
                  interactions. Inflexibility, difficulty coping with change, restricted/repetitive behaviors 
                  appear frequently and interfere with functioning.
                </div>
              </div>
              
              <div className="border-2 border-[#ff6b6b] rounded-lg p-4">
                <div className="font-bold text-[#0c264d] mb-2">Level 3: Requiring Very Substantial Support</div>
                <div className="text-sm text-gray-700">
                  Severe difficulties in social communication. Very limited initiation of social interactions. 
                  Inflexibility, extreme difficulty coping with change, repetitive behaviors markedly interfere 
                  with functioning in all areas.
                </div>
              </div>
            </div>
          </div>
          
          <p className="mb-4">
            The DSM-5 specifies three support levels based on the amount of support needed:
          </p>
          <p className="mb-4">
            Important note: Support needs can vary across different domains (social vs. behavioral) and can change 
            over time or in different contexts. These levels are descriptive, not rigid categories.
          </p>
        </div>

        {/* Challenges and Strengths Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Challenges and Strengths</h2>
          
          <p className="mb-4">
            Autism involves both real challenges and notable strengths, though the balance varies greatly among 
            individuals:
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Navigating social situations and understanding unspoken social rules</li>
            <li className="mb-2">Sensory overload in everyday environments</li>
            <li className="mb-2">Executive function difficulties (organization, planning, task switching)</li>
            <li className="mb-2">Anxiety and mental health challenges</li>
            <li className="mb-2">Communication differences that can lead to misunderstandings</li>
            <li className="mb-2">Facing stigma, bullying, and social rejection</li>
            <li className="mb-2">Barriers to education, employment, and independence</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Strengths</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Attention to detail and pattern recognition</li>
            <li className="mb-2">Deep knowledge and expertise in areas of interest</li>
            <li className="mb-2">Logical, systematic thinking</li>
            <li className="mb-2">Honesty and direct communication</li>
            <li className="mb-2">Strong sense of justice and fairness</li>
            <li className="mb-2">Creativity and unique perspectives</li>
            <li className="mb-2">Ability to hyperfocus on tasks</li>
            <li className="mb-2">Reliability and consistency</li>
          </ul>

          <p className="mb-4">
            The double empathy problem suggests that communication difficulties between autistic and non-autistic people go both ways—neurotypical people also struggle to understand autistic communication styles.
          </p>
        </div>

        {/* Quote from Autism in Heels */}
        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-6 rounded-lg mb-8">
          <div className="flex items-start gap-3">
            <div className="text-3xl">👠</div>
            <div>
              <p className="mb-3 italic">
                "It is now our charge to explain that regardless of how obvious our autism is to others, it is equally 
                present to the person living it. It is our job to correct those who reject some for being too 
                "high-functioning" or forget those who are more visibly challenged. It is our privilege to speak aloud 
                for those who can't and to have compassion for those who can. To the research community, educators, 
                scientists, psychologists, and - most important - to regular folks like you and me... the best answer 
                isn't that we're Aspie or that we're autistic.
              </p>
              <p className="mb-3 italic">
                The best answer is...
              </p>
              <p className="mb-3 italic">
                ...we aren't any one word.
              </p>
              <p className="mb-4 italic">
                We are the spectrum."
              </p>
              <p className="text-sm font-bold text-[#0c264d]">
                — Jennifer Cook O'Toole, <em>Autism in Heels</em>
              </p>
            </div>
          </div>
        </div>

        {/* Prevalence Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prevalence and Demographics</h2>
          
          <p className="mb-6">
            Understanding who is diagnosed with autism and how often helps contextualize the condition:
          </p>

          {/* Nested: Current Stats */}
          <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Current Prevalence</h3>
            
            <p className="mb-3">
              As of 2023, the CDC estimates autism affects approximately <strong>1 in 36 children (2.8%)</strong> in the United States.<sup>[3]</sup> This represents a substantial increase from 1 in 150 in 2000.
            </p>
            
            <div className="bg-[#ffd166] p-3 rounded-md mt-3">
              <p className="text-sm font-bold">
                This increase is largely attributed to improved awareness, expanded diagnostic criteria, and better 
                identification rather than a true increase in prevalence.
              </p>
            </div>
          </div>

          {/* Gender Differences */}
          <div className="bg-white p-5 rounded-md border-2 border-[#0c264d] mb-6">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gender Differences</h3>
            <p className="mb-3">
              Autism is diagnosed more frequently in males than females, with ratios typically reported around <strong>3-4:1</strong>.<sup>[80]</sup> 
              However, research suggests this reflects diagnostic bias—females may be underdiagnosed because they often 
              present differently, "camouflage" symptoms more effectively, and don't match stereotypical autism presentations.
            </p>
          </div>

          {/* Underdiagnosis */}
          <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Underdiagnosis in Certain Groups</h3>
            <p className="mb-3">Significant disparities exist in autism diagnosis:</p>
            
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Women and Girls</div>
                  <div className="text-sm">Often diagnosed later or missed entirely</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Racial Disparities</div>
                  <div className="text-sm">Black and Hispanic children diagnosed on average 1-3 years later than white children</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Socioeconomic Barriers</div>
                  <div className="text-sm">Children from lower socioeconomic backgrounds have less access to diagnostic services</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Adults</div>
                  <div className="text-sm">Especially those without intellectual disability, often remain undiagnosed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Causes Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What Causes Autism?</h2>
          
          {/* Image removed - geneticsAutismImage variable not defined */}
          {/* <img 
            src={geneticsAutismImage} 
            alt="Genetics in Autism - chromosomes illustration"
            className="w-80 h-auto rounded-md float-right ml-6 mb-4"
          /> */}
          
          <p className="mb-6">
            Autism is a complex neurodevelopmental condition with multiple contributing factors. Current evidence 
            indicates genetics plays a major role, with environmental factors also contributing.
          </p>

          {/* What We Know */}
          <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">What We Know</h3>
            
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Highly Heritable</div>
                  <div className="text-sm">Genetic factors contribute significantly</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Multiple Genes</div>
                  <div className="text-sm">Many genes are involved, each contributing small effects</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Early Brain Development</div>
                  <div className="text-sm">Brain development differences are present from early in development</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Runs in Families</div>
                  <div className="text-sm">Autism often runs in families</div>
                </div>
              </div>
            </div>
          </div>

          {/* What Does NOT Cause Autism */}
          <div className="bg-white rounded-md border-2 border-[#0c264d] p-5 mb-4">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">What Does NOT Cause Autism</h3>
            <p className="font-bold mb-3 text-red-600">Important: These DO NOT cause autism:</p>
            <div className="space-y-2">
              <div className="border-l-2 border-red-500 pl-3">
                <div className="text-sm"><strong>✗ Vaccines</strong> — This has been thoroughly debunked by extensive research<sup>[72]</sup></div>
              </div>
              <div className="border-l-2 border-red-500 pl-3">
                <div className="text-sm"><strong>✗ Parenting Style</strong> — The "refrigerator mother" theory has been completely discredited</div>
              </div>
              <div className="border-l-2 border-red-500 pl-3">
                <div className="text-sm"><strong>✗ Trauma</strong> — Adverse childhood experiences do not cause autism</div>
              </div>
              <div className="border-l-2 border-red-500 pl-3">
                <div className="text-sm"><strong>✗ Diet or Nutrition</strong> — Though these may affect symptoms</div>
              </div>
            </div>
          </div>

          {/* Callout box */}
          <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
            <p className="text-sm">
              <strong>Key Insight:</strong> The increase in autism diagnosis is primarily due to better awareness, expanded 
              diagnostic criteria, and improved identification, not environmental toxins or vaccines.
            </p>
          </div>
        </div>

        {/* Historical Perspective Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Historical Perspective</h2>
          
          <p className="mb-6">
            Understanding autism's history helps contextualize current knowledge and approaches:
          </p>

          {/* Historical Timeline */}
          <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Key Historical Milestones</h3>
            
            <div className="space-y-4">
              <div className="border-l-2 border-[#2abcd4] pl-4">
                <div className="font-bold text-[#0c264d]">1943</div>
                <div className="text-sm">Leo Kanner published the first description of "early infantile autism"<sup>[23]</sup></div>
              </div>
              
              <div className="border-l-2 border-[#2abcd4] pl-4">
                <div className="font-bold text-[#0c264d]">1944</div>
                <div className="text-sm">Hans Asperger described "autistic psychopathy" in children (now known as Asperger syndrome)<sup>[24]</sup></div>
              </div>
              
              <div className="border-l-2 border-red-500 pl-4">
                <div className="font-bold text-[#0c264d]">1960s-1980s</div>
                <div className="text-sm">Harmful "refrigerator mother" theory blamed parents<sup>[25]</sup></div>
              </div>
              
              <div className="border-l-2 border-[#2abcd4] pl-4">
                <div className="font-bold text-[#0c264d]">1980</div>
                <div className="text-sm">Autism officially recognized as separate from schizophrenia in DSM-III</div>
              </div>
              
              <div className="border-l-2 border-[#2abcd4] pl-4">
                <div className="font-bold text-[#0c264d]">1994</div>
                <div className="text-sm">Asperger syndrome added to DSM-IV</div>
              </div>
              
              <div className="border-l-2 border-[#ffd166] pl-4 bg-[#fffbf0]">
                <div className="font-bold text-[#0c264d]">1990s</div>
                <div className="text-sm">Neurodiversity movement emerges, led by autistic advocates</div>
              </div>
              
              <div className="border-l-2 border-[#2abcd4] pl-4">
                <div className="font-bold text-[#0c264d]">2013</div>
                <div className="text-sm">DSM-5 consolidates autism diagnoses under single "autism spectrum disorder"</div>
              </div>
            </div>
          </div>

          {/* Callout box */}
          <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
            <p className="text-sm">
              <strong>Progress:</strong> The field has moved from viewing autism as a childhood psychiatric disorder to 
              understanding it as a lifelong neurological difference.
            </p>
          </div>
        </div>

        {/* Language and Terminology Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Language and Terminology</h2>
          
          {/* Image removed - neurodivergentLabelsImage variable not defined */}
          {/* <img 
            src={neurodivergentLabelsImage} 
            alt="Neurodivergent Labels tag graphic"
            className="w-80 h-auto rounded-md float-right ml-6 mb-4"
          /> */}
          
          <p className="mb-6">
            How we talk about autism matters. Language preferences vary within the autistic community:
          </p>

          {/* Identity-First vs Person-First */}
          <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Identity-First vs. Person-First Language</h3>
            
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-2 border-[#2abcd4] pl-3 bg-[#f0f9ff]">
                  <div className="font-bold text-[#0c264d] mb-1">✓ Identity-First</div>
                  <div className="text-sm">"Autistic person" — Preferred by most autistic individuals</div>
                </div>
                <div className="border-l-2 border-gray-400 pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Person-First</div>
                  <div className="text-sm">"Person with autism" — Traditionally preferred in medical/educational settings</div>
                </div>
              </div>
            </div>
            
            <p className="mt-4 text-sm">
              Many autistic people prefer identity-first language because autism is an inseparable part of who they are, 
              not an add-on. When possible, ask individuals their preference.
            </p>
          </div>

          {/* Terms to Avoid */}
          <div className="bg-white rounded-md border-2 border-[#0c264d] p-5 mb-6">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Terms to Avoid</h3>
            
            <div className="space-y-2">
              <div className="border-l-2 border-red-500 pl-3">
                <div className="text-sm"><strong>✗ "Suffers from autism"</strong> or "victim of autism" — Implies tragic narrative</div>
              </div>
              <div className="border-l-2 border-red-500 pl-3">
                <div className="text-sm"><strong>✗ "High-functioning" / "Low-functioning"</strong> — Oversimplifies and can be harmful</div>
              </div>
              <div className="border-l-2 border-red-500 pl-3">
                <div className="text-sm"><strong>✗ "Asperger's"</strong> — Term being phased out due to Hans Asperger's Nazi affiliations</div>
              </div>
              <div className="border-l-2 border-red-500 pl-3">
                <div className="text-sm"><strong>✗ "On the spectrum"</strong> to refer to mild quirks in non-autistic people — Minimizes autism</div>
              </div>
            </div>
          </div>

          {/* Important Concepts */}
          <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Important Concepts</h3>
            
            <div className="space-y-3">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">"Nothing About Us Without Us"</div>
                <div className="text-sm">Autistic people should be included in decisions affecting them</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Neurodiversity-Affirming</div>
                <div className="text-sm">Approach that respects and supports autistic ways of being</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Ableism</div>
                <div className="text-sm">Discrimination against disabled people, including autistic individuals</div>
              </div>
            </div>
          </div>
        </div>

        {/* Looking Forward Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Looking Forward</h2>
          
          <p className="mb-4">
            Understanding of autism continues to evolve, driven increasingly by autistic voices and neurodiversity 
            perspectives. The focus is shifting from "fixing" autism to supporting autistic people to thrive as themselves.
          </p>

          <div className="bg-white p-5 rounded-md border-2 border-[#0c264d] mb-4">
            <p className="mb-0">
              This overview provides a foundation for understanding autism spectrum disorder. Explore the other sections 
              of Brainopedia for detailed information on symptoms, causes, diagnosis, support approaches, and living 
              with autism across the lifespan.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom back button - positioned to the right above References */}
      <div className="flex justify-end mt-8 mb-6">
        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          All About Autism
        </button>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <ASDReferences />
        </div>
      </section>

    </article>
  );
}
