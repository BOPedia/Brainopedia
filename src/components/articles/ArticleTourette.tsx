import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleTouretteProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleTourette({ setCurrentArticle }: ArticleTouretteProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tourette-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tourette-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tourette-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tourette-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tourette-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Tourette Syndrome',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tourette-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl animate-fadeIn">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Tourette Syndrome
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p>
            <strong>Tourette syndrome (TS)</strong> is a neurodevelopmental disorder characterized by repetitive, 
            involuntary movements and vocalizations called tics. Named after French physician Georges Gilles de 
            la Tourette who first described the condition in 1885, Tourette syndrome typically begins in childhood 
            and varies in severity from person to person.
          </p>
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>
        <div className="w-full">
          <InfoBox title="Tourette Syndrome" 
          image="/images/tourette/tourette-main-infobox.png"
          data={[
            { label: 'Other names', value: 'Tourette disorder, TS, Gilles de la Tourette syndrome' },
            { label: 'Specialty', value: 'Neurology, Psychiatry' },
            { label: 'Symptoms', value: 'Motor and vocal tics' },
            { label: 'Usual onset', value: 'Ages 5-10' },
            { label: 'Duration', value: 'Often lifelong, may improve in adulthood' },
            { label: 'Frequency', value: '1 in 160 children' },
          ]} />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        
        {/* OVERVIEW SECTION */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/tourette/tourette-main-overview.png"
            alt="Overview of Tourette syndrome"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4">
            Tourette syndrome affects approximately 1 in 160 children, with males being diagnosed about 3-4 times more frequently than females.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> The condition is part of a spectrum of tic disorders and typically begins between ages 5 and 10, with tics often peaking in severity during early adolescence. Tics are sudden, rapid, recurrent movements or vocalizations that individuals have some degree of control over, though suppressing them requires effort. 
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tourette-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* CHARACTERISTICS SECTION */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/tourette/tourette-main-characteristics.png"
            alt="Tourette Symptoms and Characteristics"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4">
            Tourette syndrome is characterized by both motor and vocal tics that wax and wane in frequency and severity, often changing type and location over time. Motor tics can be simple (eye blinking, head jerking) or complex (touching objects, jumping, twirling), while vocal tics range from simple throat clearing and sniffing to complex repeated phrases. These tics may worsen with stress or fatigue, decrease during focused activities, and typically subside during sleep. 
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tourette-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* CAUSES SECTION */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/tourette/tourette-main-causes.png"
            alt="Tourette Causes and Origins"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4">
            Tourette syndrome has a strong but complex genetic component, likely involving multiple genes interacting with environmental factors to influence brain development. Neurologically, TS involves differences in brain circuits connecting the basal ganglia, thalamus, and frontal cortex—areas crucial for movement control and habit formation. Research also suggests variations in neurotransmitter systems, particularly dopamine, serotonin, and GABA, which help explain why individuals with TS experience premonitory urges and face difficulty suppressing involuntary movements.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tourette-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* DIAGNOSIS SECTION */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/tourette/tourette-main-diagnosis.png"
            alt="Tourette Testing and Diagnosis"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4">
            Tourette syndrome is diagnosed clinically based on the presence of both multiple motor tics and one or more vocal tics lasting for more than one year, with onset before age 18. Because there is no blood test or brain scan that can diagnose TS, the process relies on a comprehensive evaluation by a neurologist, psychiatrist, or developmental pediatrician. This assessment includes a detailed developmental history, neurological examination, and screening for co-occurring conditions like ADHD or OCD, often utilizing tools like the Yale Global Tic Severity Scale (YGTSS) to measure tic severity and its impact on daily functioning.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tourette-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SUPPORT SECTION */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/tourette/tourette-main-support.png"
            alt="Tourette Support and Management"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4">
            While many individuals with mild TS do not require treatment, those who do often benefit from a highly individualized management plan based on how much the tics interfere with daily functioning. Behavioral therapies—such as Comprehensive Behavioral Intervention for Tics (CBIT), Habit Reversal Training (HRT), and Exposure and Response Prevention (ERP)—are considered first-line treatments for building management strategies. When behavioral approaches are insufficient, medication may be considered to help reduce tic severity, though comprehensive support must also prioritize managing co-occurring conditions, educating peers to reduce stigma, and securing appropriate school or workplace accommodations.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tourette-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* LIVING SECTION */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/tourette/tourette-main-living.png"
            alt="Living with Tourette Syndrome"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Tourette Syndrome</h2>
          
          <p className="mb-4">
            Individuals with Tourette syndrome lead successful, fulfilling lives across all areas of society, and for many, tics improve significantly in late adolescence or early adulthood. Living well with TS involves understanding one's unique tic patterns and triggers, developing effective strategies for managing premonitory urges, and addressing any co-occurring conditions. By securing appropriate academic or workplace accommodations, building robust self-advocacy skills, and connecting with the Tourette community, individuals can effectively combat misconceptions and thrive in their personal and professional endeavors.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tourette-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
      
      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner mb-10 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Knight, T., et al. (2012). "Prevalence of tic disorders: A systematic review and meta-analysis." <i>Pediatric Neurology</i>. https://doi.org/10.1016/j.pediatrneurol.2012.05.002</p>
            <p>2. Freeman, R. D., et al. (2000). "An international perspective on Tourette syndrome: Selected findings from 3,500 individuals in 22 countries." <i>Developmental Medicine & Child Neurology</i>. https://doi.org/10.1017/s0012162200000857</p>
            <p>3. Hirschtritt, M. E., et al. (2015). "Lifetime prevalence, age of risk, and genetic relationships of comorbid psychiatric disorders in Tourette syndrome." <i>JAMA Psychiatry</i>. https://doi.org/10.1001/jamapsychiatry.2014.2650</p>
            <p>4. Robertson, M. M., et al. (2009). "The international prevalence, epidemiology, and clinical phenomenology of Tourette syndrome: A cross-cultural perspective." <i>Journal of Psychosomatic Research</i>. https://doi.org/10.1016/j.jpsychores.2009.08.005</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing. https://doi.org/10.1176/appi.books.9780890425787</p>
            <p>Jankovic, J. (2001). "Tourette's syndrome." <i>New England Journal of Medicine</i>. https://doi.org/10.1056/NEJMra011279</p>
            <p>Leckman, J. F. (2002). "Tourette's syndrome." <i>The Lancet</i>. https://doi.org/10.1016/S0140-6736(02)11526-1</p>
            <p>Mink, J. W. (2001). "Basal ganglia dysfunction in Tourette's syndrome: A new hypothesis." <i>Pediatric Neurology</i>. https://doi.org/10.1016/S0887-8994(01)00262-4</p>
            <p>Pringsheim, T., et al. (2019). "Practice guideline recommendations summary: Treatment of tics in people with Tourette syndrome and chronic tic disorders." <i>Neurology</i>. https://doi.org/10.1212/WNL.0000000000007466</p>
            <p>Roessner, V., et al. (2011). "European clinical guidelines for Tourette syndrome and other tic disorders. Part II: Pharmacological treatment." <i>European Child & Adolescent Psychiatry</i>. https://doi.org/10.1007/s00787-011-0163-5</p>
            <p>Singer, H. S. (2005). "Tourette's syndrome: From behaviour to biology." <i>The Lancet Neurology</i>. https://doi.org/10.1016/S1474-4422(05)01012-4</p>
            <p>World Health Organization. (2018). <i>International classification of diseases for mortality and morbidity statistics</i> (11th ed.). Geneva: WHO. https://icd.who.int/</p>
          </div>
        </div>
      </div>
    </article>
  );
}