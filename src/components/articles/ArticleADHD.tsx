import { TableOfContents } from '../TableOfContents';
import { InfoBox } from '../InfoBox';
import { ADHDReferences } from '../references/ADHDReferences';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleADHDProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleADHD({ setCurrentArticle }: ArticleADHDProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('adhd-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('adhd-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('adhd-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('adhd-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('adhd-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with ADHD',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('adhd-living');
      }
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
        <span className="md:hidden">ADHD</span>
        <span className="hidden md:block">Attention-Deficit/Hyperactivity Disorder (ADHD)</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Attention-deficit/hyperactivity disorder (ADHD)</strong> is a neurodevelopmental disorder 
            characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere 
            with functioning or development. It is one of the most common neurodevelopmental disorders of childhood, 
            though it often continues into adulthood.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          {/* Image: adhd-main.png - add to public/images/ to restore */}
          <InfoBox
            title="ADHD"
            image="/images/adhd/adhd-main-infobox.png"
            data={[
              { label: 'Other names', value: 'Attention deficit disorder (ADD), Hyperkinetic disorder' },
              { label: 'Specialty', value: 'Psychiatry, Pediatrics' },
              { label: 'Symptoms', value: 'Inattention, hyperactivity, impulsivity' },
              { label: 'Usual onset', value: 'Before age 12' },
              { label: 'Duration', value: 'Often lifelong' },
              { label: 'Frequency', value: '11.3% of children (ages 5-17, US), 3.1% of adults (US)' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-main-overview.png"
            alt="ADHD Overview"
            className="w-full max-w-md mx-auto mb-4 rounded"
          />
          
          <p className="mb-4">
            ADHD involves more severe and frequent inattention, hyperactivity, and impulsivity that disrupt daily life, relationships, and work or school.
          </p>
          
          <p className="mb-4">
            It is a persistent neurodevelopmental condition affecting 11.3% of children ages 5–17 in the United States, with prevalence higher in boys (14.5%) than girls (8.0%).<sup style={{color: '#10b981'}}>[1]</sup> Among adults, the prevalence is approximately 3.1%,<sup style={{color: '#10b981'}}>[2]</sup> often lifelong and needing ongoing support. ADHD impacts academics, work, and social relationships, with many individuals experiencing significant symptoms and functional impairment into adulthood. Viewing ADHD as neurodevelopmental helps reduce stigma and promotes evidence-based intervention.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('adhd-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-main-symptoms.png"
            alt="ADHD Symptoms"
            className="w-full max-w-md mx-auto mb-4 rounded"
          />
          
          <p className="mb-4">
            ADHD has three patterns: inattentive, hyperactive-impulsive, and combined. Inattentive symptoms: trouble sustaining attention, distractibility, forgetfulness, disorganization. Hyperactive-impulsive symptoms: restlessness, fidgeting, excessive talking, interrupting, impulsive actions. Many show both types, and presentation can evolve from childhood to adulthood. Executive function deficits (working memory, planning, organization, emotional regulation) are core features.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('adhd-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-main-causes.png"
            alt="ADHD Causes"
            className="w-full max-w-md mx-auto mb-4 rounded"
          />
          
          <p className="mb-4">
            ADHD likely results from a mix of genetic, neurological, and environmental factors. It has a strong hereditary component (heritability 70–80%).<sup style={{color: '#10b981'}}>[3]</sup> Brain imaging shows differences in regions for attention, impulse control, and executive function (notably prefrontal cortex) and in dopamine/norepinephrine systems; smaller overall brain volume and gray matter differences in the prefrontal cortex and basal ganglia have been observed. Environmental risks—premature birth, low birth weight, prenatal tobacco/alcohol exposure, and early adversity—contribute but explain less variance than genetics.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('adhd-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-main-diagnosis.png"
            alt="ADHD Diagnosis"
            className="w-full max-w-md mx-auto mb-4 rounded"
          />
          
          <p className="mb-4">
            ADHD diagnosis requires a comprehensive evaluation by a qualified professional. The process includes medical/developmental history, behavioral assessments and rating scales, observations across settings, and input from parents/teachers/partners. Symptoms start before age 12, occur in multiple settings, and impair functioning. Diagnosis can occur at any age. Evaluations typically include clinical interviews, standardized rating scales behavioral observations, and reviews of academic or occupational performance, with ruling out other conditions like anxiety, depression, learning disabilities, or sleep disorders.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('adhd-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-main-support.png"
            alt="ADHD Support"
            className="w-full max-w-md mx-auto mb-4 rounded"
          />
          
          <p className="mb-4">
            ADHD is managed with a multimodal, individualized plan. Options include behavioral interventions (CBT, coaching, and skills training for organization, time management, and emotional regulation), educational accommodations, organizational skills training, and lifestyle factors (exercise, sleep, routines). Medications are often helpful: stimulant medications are highly effective in reducing core ADHD symptoms and improving quality of life in 70-80% of children and adults;<sup style={{color: '#10b981'}}>[4]</sup> non-stimulants (atomoxetine, guanfacine, clonidine) are moderately effective alternatives, with atomoxetine showing benefit in approximately 50-60% of individuals.<sup style={{color: '#10b981'}}>[5]</sup> The aim is to develop strategies that fit brain differences, build strengths, and reduce daily impairment.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('adhd-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with ADHD</h2>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-main-living.png"
            alt="Living with ADHD"
            className="w-full max-w-md mx-auto mb-4 rounded"
          />
          
          <p className="mb-4">
            People with ADHD can lead full lives despite challenges, with strengths like creativity, energy, hyperfocus, and innovative problem-solving. Hyperfocus can drive productivity and expertise. Many successful people credit ADHD thinking with their achievements. Living well involves understanding symptoms, building personalized strategies, leveraging strengths, and connecting with supportive communities. Self-awareness, accommodations, supportive relationships, and sometimes medication help, while reducing stigma by viewing ADHD as a neurodevelopmental difference.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('adhd-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>
      </div>

      <ADHDReferences />
    </article>
  );
}