import { ImageWithFallback } from '../../figma/ImageWithFallback';
import adolescenceImage from 'figma:asset/7b8f12582a64e7336231b13ccc86a167c22ce6a7.png';
import adulthoodImage from 'figma:asset/99afa978d0ef2983d4681a8a18f6b1b94f8434f0.png';
import schoolYearsImage from 'figma:asset/6ef664ecf563b7d9a43285334a1fcd6e4495861e.png';
import earlyChildhoodImage from 'figma:asset/f3bec727edb3e0a25f433b3258717dcc8a122bc4.png';
import { ASDReferences } from './ASDReferences';
import agingImage from 'figma:asset/77b31358099474f335cb85d9d7b29aecb11843bf.png';
import communicationImage from 'figma:asset/ef0ddce32edf3170db3e7ce5f6c3a64391699789.png';
import sensoryImage from 'figma:asset/53bb965a2afa7f2ef37311c115e3338c1b9da4a4.png';
import executiveFunctionImage from 'figma:asset/0819e4bf83f10eacd057e6ce89bbb9aefd13627a.png';
import burnoutImage from 'figma:asset/44835506237d59fed8b5d05e65859298ee65e0c5.png';
import friendshipsImage from 'figma:asset/4e5b66ebf538c219eb9e6c38317a2f3dc9d0e1b8.png';
import relationshipsImage from 'figma:asset/6a4f65bc184d366fb0f5f7e4217809aab1c9340d.png';
import resilienceImage from 'figma:asset/dfd267892b1727e5e09ae0a41a889f4349d4d0e8.png';
import wellbeingImage from 'figma:asset/d3f7b137616eedbf04d7e8014f5e3ccee110a122.png';
import { useState } from 'react';
import { ASDComorbidities } from '../../infographics/ASDComorbidities';

interface ASDLivingProps {
  setCurrentArticle?: (article: string) => void;
}

type TabType = 'lifespan' | 'daily-life' | 'relationships' | 'education-employment' | 'mental-health' | 'identity-community';

export function ASDLiving({ setCurrentArticle }: ASDLivingProps) {
  const [activeTab, setActiveTab] = useState<TabType>('lifespan');

  const tabs = [
    { id: 'lifespan' as TabType, label: 'Across the Lifespan' },
    { id: 'daily-life' as TabType, label: 'Daily Life & Functioning' },
    { id: 'relationships' as TabType, label: 'Relationships & Social' },
    { id: 'education-employment' as TabType, label: 'Education & Employment' },
    { id: 'mental-health' as TabType, label: 'Mental Health & Wellbeing' },
    { id: 'identity-community' as TabType, label: 'Identity & Community' },
  ];

  function renderTabContent(tab: TabType) {
    switch (tab) {
      case 'lifespan':
        return <LifespanContent />;
      case 'daily-life':
        return <DailyLifeContent />;
      case 'relationships':
        return <RelationshipsContent />;
      case 'education-employment':
        return <EducationEmploymentContent />;
      case 'mental-health':
        return <MentalHealthContent />;
      case 'identity-community':
        return <IdentityCommunityContent />;
      default:
        return null;
    }
  }

  function LifespanContent() {
    return (
      <>
        <div>
          <p className="mb-4">
            Living with autism means experiencing the world differently—processing information, communicating, and 
            interacting in ways that diverge from neurotypical patterns. <strong>The autistic experience varies tremendously:</strong> some individuals develop effective coping strategies or master the art of masking, allowing them to perform 
            at their highest capacity while still facing internal struggles, while others with the highest support needs 
            require comprehensive assistance across their entire lifespan in areas such as communication, daily living, 
            and safety. While autism presents challenges, many autistic individuals lead fulfilling, meaningful lives 
            and contribute uniquely to their communities. Quality of life for autistic people depends not just on the 
            characteristics of autism itself, but on access to support, acceptance, and accommodation.
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Autism Across the Lifespan</h2>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Childhood</h3>
          <ImageWithFallback 
            src={earlyChildhoodImage} 
            alt="Early Childhood"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">
            The early years focus on development, learning, and accessing early intervention:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Communication development:</strong> Whether through speech, AAC, or other methods</li>
            <li className="mb-2"><strong>Play and social interaction:</strong> Learning to engage with others and the environment</li>
            <li className="mb-2"><strong>Daily living skills:</strong> Self-care, toileting, eating</li>
            <li className="mb-2"><strong>Sensory regulation:</strong> Understanding and managing sensory experiences</li>
            <li className="mb-2"><strong>Family adjustment:</strong> Families learning about autism and building support networks</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School Years</h3>
          <ImageWithFallback 
            src={schoolYearsImage} 
            alt="School Years"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">
            School presents both opportunities and challenges:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Academic learning:</strong> Autistic students may excel in areas of interest while struggling in others</li>
            <li className="mb-2"><strong>Social navigation:</strong> Making friends, understanding social hierarchies, dealing with bullying</li>
            <li className="mb-2"><strong>Sensory environments:</strong> Managing overwhelming school settings (noise, crowds, fluorescent lights)</li>
            <li className="mb-2"><strong>Executive function demands:</strong> Organizing materials, managing time, juggling multiple subjects</li>
            <li className="mb-2"><strong>Identity development:</strong> Understanding oneself as autistic, developing self-advocacy skills</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adolescence</h3>
          <p className="mb-4">
            Teenage years bring additional complexity:
          </p>
          <ImageWithFallback 
            src={adolescenceImage} 
            alt="Adolescence"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Identity formation:</strong> Figuring out who you are, including your autistic identity</li>
            <li className="mb-2"><strong>Increased social complexity:</strong> Navigating teenage social dynamics, dating, peer pressure</li>
            <li className="mb-2"><strong>Mental health:</strong> High rates of anxiety and depression emerge in adolescence</li>
            <li className="mb-2"><strong>Masking and camouflaging:</strong> Many teens mask autistic traits, which is exhausting and harmful to well-being</li>
            <li className="mb-2"><strong>Transition planning:</strong> Preparing for life after high school</li>
            <li className="mb-2"><strong>Self-advocacy:</strong> Learning to speak up for needs and accommodations</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adulthood</h3>
          <ImageWithFallback 
            src={adulthoodImage} 
            alt="Adulthood"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">
            Autistic adults face unique challenges and opportunities:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Education:</strong> Pursuing higher education with appropriate supports</li>
            <li className="mb-2"><strong>Employment:</strong> Finding and maintaining work that matches strengths and accommodates needs</li>
            <li className="mb-2"><strong>Independent living:</strong> Managing household, finances, healthcare independently or with support</li>
            <li className="mb-2"><strong>Relationships:</strong> Friendships, romantic relationships, family relationships</li>
            <li className="mb-2"><strong>Parenting:</strong> Many autistic adults have children (autistic and neurotypical)</li>
            <li className="mb-2"><strong>Self-understanding:</strong> Many adults diagnosed later in life experience profound self-discovery</li>
            <li className="mb-2"><strong>Community:</strong> Connecting with autistic community and culture</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Aging</h3>
          <p className="mb-4">
            Research on aging autistic adults is limited but growing:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Autism doesn't disappear with age; core characteristics persist</li>
            <li className="mb-2">Some find age brings acceptance and reduced pressure to conform</li>
            <li className="mb-2">Concerns about healthcare, long-term care, and aging support systems</li>
            <li className="mb-2">Need for age-appropriate services and autism-informed elder care</li>
          </ul>
        </div>
      </>
    );
  }

  function DailyLifeContent() {
    return (
      <>
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Daily Life and Practical Considerations</h2>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Communication in Daily Life</h3>
          <ImageWithFallback 
            src={communicationImage} 
            alt="Communication"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">
            Autistic people communicate in diverse ways:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Verbal communication:</strong> Many autistic people speak fluently but may struggle with pragmatics, initiation, or processing speed</li>
            <li className="mb-2"><strong>Selective mutism:</strong> Some speak in certain situations but not others</li>
            <li className="mb-2"><strong>Nonspeaking:</strong> About 25-30% of autistic people are nonspeaking or minimally speaking</li>
            <li className="mb-2"><strong>AAC users:</strong> Communication through typing, letter boards, speech devices, sign language</li>
            <li className="mb-2"><strong>Processing time:</strong> Many need more time to process language and formulate responses</li>
            <li className="mb-2"><strong>Written vs. spoken:</strong> Many find writing easier than speaking</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sensory Experiences</h3>
          <ImageWithFallback 
            src={sensoryImage} 
            alt="Sensory Environment"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">
            Sensory differences profoundly affect daily life:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Environmental management:</strong> Creating sensory-friendly home environments</li>
            <li className="mb-2"><strong>Accommodations:</strong> Noise-canceling headphones, sunglasses, comfortable clothing</li>
            <li className="mb-2"><strong>Sensory seeking:</strong> Engaging in activities that provide desired sensory input</li>
            <li className="mb-2"><strong>Avoiding overload:</strong> Recognizing and preventing sensory overload</li>
            <li className="mb-2"><strong>Recovery:</strong> Needing downtime after overwhelming sensory experiences</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Executive Function in Daily Life</h3>
          <p className="mb-4">
            Executive function challenges affect many daily activities:
          </p>
          <ImageWithFallback 
            src={executiveFunctionImage} 
            alt="Executive Function"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Routines and structure:</strong> Using consistent routines to reduce cognitive load</li>
            <li className="mb-2"><strong>Visual supports:</strong> Calendars, checklists, reminders, timers</li>
            <li className="mb-2"><strong>Task initiation:</strong> Strategies for getting started on tasks</li>
            <li className="mb-2"><strong>Organization systems:</strong> External organization to compensate for internal challenges</li>
            <li className="mb-2"><strong>Time management:</strong> Alarms, schedules, time-blocking</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Energy Management and Burnout</h3>
          <ImageWithFallback 
            src={burnoutImage} 
            alt="Burnout"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          <p className="mb-4">
            Autistic burnout is a significant concern:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>What it is:</strong> Chronic exhaustion, loss of skills, increased sensory sensitivities from prolonged stress</li>
            <li className="mb-2"><strong>Causes:</strong> Masking, sensory overload, social demands, lack of support, not accommodating autistic needs</li>
            <li className="mb-2"><strong>Recovery:</strong> Reducing demands, stopping masking, sensory retreat, reconnecting with special interests</li>
            <li className="mb-2"><strong>Prevention:</strong> Pacing, regular breaks, honoring limits, accommodations, authentic living</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Independent Living and Daily Functioning</h2>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Living Arrangements</h3>
          <p className="mb-4">
            Autistic adults have diverse living situations:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Independent living:</strong> Living alone or with roommates/partners</li>
            <li className="mb-2"><strong>With family:</strong> Many adults live with parents or family by choice or necessity</li>
            <li className="mb-2"><strong>Supported living:</strong> Independent apartment with visiting support staff</li>
            <li className="mb-2"><strong>Group homes:</strong> Shared living with 24-hour support</li>
            <li className="mb-2"><strong>Institutional settings:</strong> Unfortunately, some still live in restrictive settings</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Daily Living Skills</h3>
          <p className="mb-4">
            Skills needed for independent living vary among autistic adults:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Cooking and meal planning (sensory issues with food, executive function challenges)</li>
            <li className="mb-2">Household management (cleaning, laundry, organization)</li>
            <li className="mb-2">Financial management (budgeting, paying bills, banking)</li>
            <li className="mb-2">Healthcare self-management (appointments, medications, advocating for needs)</li>
            <li className="mb-2">Transportation (driving, public transit, ride services)</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Support Services</h3>
          <p className="mb-4">
            Various supports help autistic adults live independently:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Vocational rehabilitation services</li>
            <li className="mb-2">Personal care attendants for daily living support</li>
            <li className="mb-2">Case management and service coordination</li>
            <li className="mb-2">Medicaid waivers for home and community-based services</li>
            <li className="mb-2">Social Security disability benefits (SSI/SSDI)</li>
            <li className="mb-2">Supported decision-making (alternative to guardianship)</li>
          </ul>
        </div>
      </>
    );
  }

  function RelationshipsContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Relationships and Social Life</h2>

        <ImageWithFallback 
          src={relationshipsImage} 
          alt="Social connection and friendship"
          className="w-80 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
        />

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Friendships</h3>
        <p className="mb-4">
          Autistic people form meaningful friendships, though patterns may differ:
        </p>
        <ImageWithFallback 
          src={friendshipsImage} 
          alt="Friendships"
          className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Quality over quantity—may prefer one or two close friends</li>
          <li className="mb-2">Friendships based on shared interests rather than social proximity</li>
          <li className="mb-2">Online friendships can be meaningful and less demanding</li>
          <li className="mb-2">Autistic-autistic friendships often feel easier and more natural</li>
          <li className="mb-2">Challenges with maintaining friendships due to executive function or social energy</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Romantic Relationships</h3>
        <p className="mb-4">
          Many autistic people have fulfilling romantic relationships:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Desire for relationships is common, though experiences vary</li>
          <li className="mb-2">Direct communication can be strength in relationships</li>
          <li className="mb-2">Challenges with reading social cues, understanding unspoken expectations</li>
          <li className="mb-2">Sensory considerations in physical intimacy</li>
          <li className="mb-2"><strong>Autistic-autistic relationships may have unique understanding</strong></li>
          <li className="mb-2">Need for partners to understand autism and accommodate needs</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Family Relationships</h3>
        <p className="mb-4">
          Family dynamics vary widely:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Supportive families make tremendous difference in outcomes</li>
          <li className="mb-2">Family understanding and acceptance crucial for wellbeing</li>
          <li className="mb-2">Autism runs in families—often have autistic relatives</li>
          <li className="mb-2">Adult relationships with parents may need renegotiation around autonomy</li>
          <li className="mb-2">Many autistic adults are parents themselves</li>
        </ul>
      </div>
    );
  }

  function EducationEmploymentContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Education and Employment</h2>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Higher Education</h3>
        <p className="mb-4">
          Increasing numbers of autistic students attend college:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Strengths:</strong> Deep focus on interests, attention to detail, original thinking</li>
          <li className="mb-2"><strong>Challenges:</strong> Social demands, sensory environment, executive function (organizing, time management)</li>
          <li className="mb-2"><strong>Supports:</strong> Disability services offices, accommodations, peer support programs</li>
          <li className="mb-2"><strong>Success factors:</strong> Finding the right environment, accessing supports, studying areas of interest</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Employment</h3>
        <p className="mb-4">
          Employment outcomes for autistic adults remain challenging but improving:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Statistics:</strong> Unemployment and underemployment rates are high (50-90%), despite desire to work</li>
          <li className="mb-2"><strong>Barriers:</strong> Interview process, social demands, sensory environments, disclosure dilemmas</li>
          <li className="mb-2"><strong>Strengths:</strong> Attention to detail, pattern recognition, honesty, reliability, deep expertise in areas of interest</li>
          <li className="mb-2"><strong>Accommodations:</strong> Quiet workspace, flexible schedules, clear expectations, written communication, sensory modifications</li>
          <li className="mb-2"><strong>Supportive programs:</strong> Vocational rehabilitation, autism-specific employment programs, neurodiversity hiring initiatives</li>
          <li className="mb-2"><strong>Self-employment:</strong> Many find success working for themselves in areas of expertise</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Successful Career Paths</h3>
        <p className="mb-4">
          Autistic people succeed in diverse fields:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Technology and computer science</li>
          <li className="mb-2">Research and academia</li>
          <li className="mb-2">Arts and creative fields</li>
          <li className="mb-2">Skilled trades</li>
          <li className="mb-2">Animal care and veterinary work</li>
          <li className="mb-2">Library science and archiving</li>
          <li className="mb-2">Writing and editing</li>
          <li className="mb-2">Advocacy and peer support</li>
        </ul>
      </div>
    );
  }

  function MentalHealthContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Mental Health and Wellbeing</h2>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Co-occurring Mental Health Conditions</h3>
        <p className="mb-4">
          Autistic people have high rates of mental health conditions:
        </p>

        {/* Co-occurring Conditions Chart */}
        <div className="flex justify-center my-8">
          <ASDComorbidities />
        </div>

        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Anxiety disorders:</strong> 40-50% of autistic people; social anxiety, generalized anxiety, specific phobias</li>
          <li className="mb-2"><strong>Depression:</strong> 20-37%; higher rates in adolescence and adulthood</li>
          <li className="mb-2"><strong>OCD:</strong> Higher prevalence, though distinct from autism's repetitive behaviors</li>
          <li className="mb-2"><strong>Eating disorders:</strong> Higher risk, particularly in autistic females</li>
          <li className="mb-2"><strong>PTSD:</strong> Elevated rates due to trauma from bullying, abuse, and invalidating experiences</li>
          <li className="mb-2"><strong>Suicidality:</strong> Concerningly high rates of suicidal ideation and attempts</li>
        </ul>

        <div className="border-2 border-[#2abcd4] rounded-md p-4 mb-4 bg-white">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Factors Affecting Wellbeing</h3>
          
          <ImageWithFallback 
            src={wellbeingImage} 
            alt="Factors affecting wellbeing"
            className="w-60 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Quality of life for autistic people is influenced by:
          </p>
          <ul className="list-disc ml-6">
            <li className="mb-2"><strong>Acceptance:</strong> Self-acceptance and acceptance from others</li>
            <li className="mb-2"><strong>Support:</strong> Access to appropriate accommodations and assistance</li>
            <li className="mb-2"><strong>Masking:</strong> Less masking associated with better mental health</li>
            <li className="mb-2"><strong>Autonomy:</strong> Control over one's life and decisions</li>
            <li className="mb-2"><strong>Employment:</strong> Meaningful work in supportive environment</li>
            <li className="mb-2"><strong>Relationships:</strong> Satisfying social connections</li>
            <li className="mb-2"><strong>Community:</strong> Connection to autistic community</li>
          </ul>
          <div className="clear-both"></div>
        </div>

        <div className="border-2 border-[#2abcd4] rounded-md p-4 mb-4 bg-white">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Building Resilience and Wellbeing</h3>
          
          <ImageWithFallback 
            src={resilienceImage} 
            alt="Building resilience and wellbeing"
            className="w-60 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <ul className="list-disc ml-6">
            <li className="mb-2">Engaging with special interests for joy and regulation</li>
            <li className="mb-2">Connecting with autistic community and culture</li>
            <li className="mb-2">Reducing masking and living authentically</li>
            <li className="mb-2">Accessing autism-affirming therapy when needed</li>
            <li className="mb-2">Self-advocacy and boundary-setting</li>
            <li className="mb-2">Sensory self-care and regulation strategies</li>
            <li className="mb-2">Finding environments and people that accept you as you are</li>
          </ul>
          <div className="clear-both"></div>
        </div>
      </div>
    );
  }

  function IdentityCommunityContent() {
    return (
      <>
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Autistic Identity and Community</h2>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Autistic Culture and Community</h3>
          <p className="mb-4">
            A vibrant autistic culture and community has emerged:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Online communities:</strong> Forums, social media groups, blogs where autistic people connect</li>
            <li className="mb-2"><strong>In-person meetups:</strong> Local autistic groups, conferences, events</li>
            <li className="mb-2"><strong>Shared experiences:</strong> Understanding from others who "get it"</li>
            <li className="mb-2"><strong>Cultural elements:</strong> Inside jokes, shared references, communication styles</li>
            <li className="mb-2"><strong>Advocacy:</strong> Self-advocacy movement centered on autistic voices</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Identity Development</h3>
          <p className="mb-4">
            Understanding oneself as autistic is a process:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">For children: Age-appropriate disclosure and explanation of autism</li>
            <li className="mb-2">For those diagnosed young: Growing up with autistic identity</li>
            <li className="mb-2">For late-diagnosed adults: Reframing life experiences through autism lens</li>
            <li className="mb-2">Self-acceptance journey: From shame to pride</li>
            <li className="mb-2">Choosing how and when to disclose autism to others</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neurodiversity Movement</h3>
          <p className="mb-4">
            Many autistic people embrace neurodiversity perspective:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Autism as natural neurological variation, not disorder</li>
            <li className="mb-2">Focus on acceptance and accommodation rather than cure</li>
            <li className="mb-2">Celebration of autistic ways of thinking and being</li>
            <li className="mb-2">Challenging deficit-based narratives</li>
            <li className="mb-2">"Nothing About Us Without Us"—centering autistic voices in autism discourse</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Self-Advocacy and Rights</h2>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Legal Rights and Protections</h3>
          <p className="mb-4">
            Autistic people have legal rights in various domains:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Education:</strong> IDEA guarantees FAPE for students with disabilities</li>
            <li className="mb-2"><strong>Employment:</strong> ADA prohibits discrimination and requires reasonable accommodations</li>
            <li className="mb-2"><strong>Housing:</strong> Fair Housing Act protections</li>
            <li className="mb-2"><strong>Public accommodations:</strong> Right to access public spaces with accommodations</li>
            <li className="mb-2"><strong>Healthcare:</strong> Right to accessible, appropriate healthcare</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Self-Advocacy Skills</h3>
          <p className="mb-4">
            Speaking up for oneself is crucial:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Understanding your rights and entitlements</li>
            <li className="mb-2">Identifying your needs and communicating them</li>
            <li className="mb-2">Requesting accommodations at school, work, healthcare settings</li>
            <li className="mb-2">Setting boundaries and saying no</li>
            <li className="mb-2">Choosing when and how to disclose autism</li>
            <li className="mb-2">Finding allies and support</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Looking Forward: Hope and Possibility</h2>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mb-4">
            <h3 className="text-[#0c264d] font-bold mb-3">Key Messages:</h3>
            <ul className="text-sm space-y-2">
              <li>✓ Autism is a lifelong way of being, not a childhood disorder that needs to be overcome</li>
              <li>✓ Autistic people can lead fulfilling, meaningful lives</li>
              <li>✓ Quality of life depends on support, acceptance, and accommodation—not on being less autistic</li>
              <li>✓ The autistic community is diverse, vibrant, and growing</li>
              <li>✓ Self-acceptance and finding your people makes a tremendous difference</li>
              <li>✓ Autism brings both challenges and unique strengths</li>
              <li>✓ The goal is not to be "indistinguishable from peers" but to thrive as yourself</li>
              <li>✓ Society is slowly becoming more accepting and accommodating of neurodiversity</li>
            </ul>
          </div>

          <p className="mb-4">
            Living with autism means navigating a world designed for neurotypical brains. It involves challenges—sensory 
            overwhelm, social exhaustion, executive function struggles, and facing stigma. But it also involves strengths—
            unique perspectives, deep passions, attention to detail, and authentic ways of being.
          </p>

          <p className="mb-4">
            With the right supports, acceptance, and opportunities, autistic people contribute meaningfully to society, 
            form deep relationships, pursue passions, and live lives of purpose and joy. The future is brighter as 
            understanding grows, autistic voices are amplified, and society moves toward true inclusion and neurodiversity 
            acceptance.
          </p>
        </div>
      </>
    );
  }

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
          Autism: Living with Autism
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          All About Autism
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-md text-sm transition-colors ${
              activeTab === tab.id
                ? 'bg-[#0A9DC4] text-white'
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {renderTabContent(activeTab)}
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