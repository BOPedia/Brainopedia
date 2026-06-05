import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleBipolarProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleBipolar({ setCurrentArticle }: ArticleBipolarProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('bipolar-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('bipolar-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('bipolar-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('bipolar-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('bipolar-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Bipolar Disorder',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('bipolar-living');
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
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1652772486279-b83a75cd8143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29kJTIwZW5lcmd5JTIwZW1vdGlvbnMlMjBtZW50YWwlMjBoZWFsdGh8ZW58MXx8fHwxNzY3NDA3NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mood and energy cycles - understanding bipolar disorder"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Bipolar disorder affects approximately 2.8% of adults in the United States and involves 
            alterations in neurotransmitter systems, particularly dopamine, serotonin, and norepinephrine.<sup>[3]</sup> 
            Brain imaging studies show differences in areas responsible for emotion regulation, reward 
            processing, and energy management.<sup>[4]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('bipolar-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1549185545-f5b8a1fc481a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2R1Y3Rpdml0eSUyMGFydCUyMGV4cHJlc3Npb258ZW58MXx8fHwxNzY3NDA3NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Creative expression and productivity - characteristics of bipolar"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Bipolar disorder involves cycles between different mood states.<sup>[9]</sup> Manic episodes include elevated 
            or irritable mood, increased energy and activity, while depressive episodes involve persistent sadness and low energy.<sup>[12]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('bipolar-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1709651669999-57741c9bf085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG5ldXJvdHJhbnNtaXR0ZXJzJTIwZG9wYW1pbmUlMjBzZXJvdG9uaW58ZW58MXx8fHwxNzY3NDA3NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Brain neurotransmitters - neurological basis of bipolar disorder"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Bipolar disorder involves alterations in neurotransmitter systems, particularly dopamine, serotonin, 
            and norepinephrine.<sup>[16]</sup> It has a strong genetic component, often triggered by environmental stress.<sup>[20]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('bipolar-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1620147512372-9e00421556bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaGlhdHJpc3QlMjBtZW50YWwlMjBoZWFsdGglMjBhc3Nlc3NtZW50JTIwdGhlcmFweXxlbnwxfHx8fDE3Njc0MDc2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mental health assessment - diagnosing bipolar disorder"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Bipolar disorder is diagnosed clinically by mental health professionals.<sup>[25]</sup> The process involves detailed clinical interviews, mood history review, and ruling out other medical causes.<sup>[29]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('bipolar-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1765222385397-6c2ea556086f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2F0aW9uJTIwdHJlYXRtZW50JTIwc3VwcG9ydCUyMHdlbGxuZXNzfGVufDF8fHx8MTc2NzQwNzYyOXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Medication and treatment support - managing bipolar disorder"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            A neurodivergent-affirming approach balances stability with acceptance.<sup>[33]</sup> Management often includes medication, therapy, and critical lifestyle practices like consistent sleep.<sup>[37]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('bipolar-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Bipolar Disorder</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1652772486279-b83a75cd8143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29kJTIwZW5lcmd5JTIwZW1vdGlvbnMlMjBtZW50YWwlMjBoZWFsdGh8ZW58MXx8fHwxNzY3NDA3NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Living with bipolar disorder - managing energy cycles"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with bipolar disorder lead successful and fulfilling lives.<sup>[41]</sup> Living well involves understanding one's specific type, personal patterns, and developing resilience.<sup>[45]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('bipolar-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Psychiatric Association. (2013). <em>DSM-5</em>. Arlington, VA: American Psychiatric Publishing.</p>
          <p>[3] Merikangas, K. R., et al. (2011). "Prevalence and correlates of bipolar spectrum disorder." <em>Archives of General Psychiatry</em>, 68(3), 241-251.</p>
          <p>[7] Vieta, E., et al. (2018). "Bipolar disorders." <em>Nature Reviews Disease Primers</em>, 4, 18008.</p>
          <p>[9] Goodwin, F. K., & Jamison, K. R. (2007). <em>Manic-depressive illness</em> (2nd ed.). New York: Oxford University Press.</p>
          <p>[16] Berk, M., et al. (2007). "Dopamine dysregulation syndrome." <em>Acta Psychiatrica Scandinavica</em>, 116(Suppl 434), 41-49.</p>
          <p>[20] Smoller, J. W., & Finn, C. T. (2003). "Family, twin, and adoption studies of bipolar disorder." <em>American Journal of Medical Genetics Part C</em>, 123C(1), 48-58.</p>
          <p>[33] Miklowitz, D. J. (2008). <em>Bipolar disorder: A family-focused treatment approach</em>. New York: Guilford Press.</p>
        </div>
      </section>
    </article>
  );
}
