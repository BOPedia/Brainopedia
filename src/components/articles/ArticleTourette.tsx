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
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Tourette Syndrome</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p>
            <strong>Tourette syndrome (TS)</strong> is a neurodevelopmental disorder characterized by repetitive, 
            involuntary movements and vocalizations called tics.<sup>[1]</sup> Tourette syndrome typically begins 
            in childhood and varies in severity from person to person.<sup>[2]</sup>
          </p>
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>
        <div className="w-full">
          <InfoBox title="Tourette Syndrome" data={[
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
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1604159342320-f7f24c260691?w=1080&q=80" alt="Child with neurological condition - understanding Tourette syndrome" className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Tourette syndrome affects approximately 1 in 160 children, with males being diagnosed more frequently.<sup>[3]</sup> The condition typically begins between ages 5 and 10.<sup>[4]</sup></p>
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

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1727386245205-2112b722af99?w=1080&q=80" alt="Facial expressions and movements - characteristics of tics" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Tourette syndrome is characterized by both motor and vocal tics.<sup>[10]</sup> Tics wax and wane in frequency and severity and can change over time.<sup>[14]</sup></p>
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

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1714939722610-9169e8883bf8?w=1080&q=80" alt="Brain basal ganglia - neurological basis of Tourette syndrome" className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Tourette syndrome has a strong genetic component.<sup>[17]</sup> Neurologically, it involves differences in brain circuits connecting the basal ganglia and frontal cortex.<sup>[20]</sup></p>
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

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1659353886114-9aa119aef5aa?w=1080&q=80" alt="Neurologist examination - diagnosing Tourette syndrome" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">TS is diagnosed clinically based on the presence of both motor and vocal tics lasting more than one year.<sup>[26]</sup> There is no specific blood test or imaging study for diagnosis.<sup>[27]</sup></p>
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

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1620924701256-1c6f1103ebdf?w=1080&q=80" alt="Behavioral therapy and support - managing Tourette syndrome" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Behavioral therapies like CBIT and HRT are effective for many.<sup>[35]</sup> Medication and environmental supports also play a role in management.<sup>[37]</sup></p>
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

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Tourette Syndrome</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1604159342320-f7f24c260691?w=1080&q=80" alt="Living with Tourette syndrome - successful navigation" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Individuals with TS lead successful and fulfilling lives.<sup>[40]</sup> Tics often improve in late adolescence or early adulthood.<sup>[41]</sup></p>
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

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Psychiatric Association. (2013). <em>DSM-5</em>.</p>
          <p>[2] Leckman, J. F. (2002). "Tourette's syndrome." <em>The Lancet</em>.</p>
          <p>[3] Knight, T., et al. (2012). "Prevalence of tic disorders." <em>Pediatric Neurology</em>.</p>
          <p>[10] Leckman, J. F., et al. (2014). "Clinical features of Tourette syndrome." <em>Journal of Obsessive-Compulsive and Related Disorders</em>.</p>
          <p>[17] O'Rourke, J. A., et al. (2009). "The genetics of Tourette syndrome." <em>Journal of Psychosomatic Research</em>.</p>
          <p>[26] World Health Organization. (2018). <em>ICD-11</em>.</p>
          <p>[35] Piacentini, J., et al. (2010). "Behavior therapy for children with Tourette disorder." <em>JAMA</em>.</p>
          <p>[40] Burd, L., et al. (2001). "Long-term follow-up of patients with Tourette syndrome." <em>Journal of Child Neurology</em>.</p>
        </div>
      </section>
    </article>
  );
}
