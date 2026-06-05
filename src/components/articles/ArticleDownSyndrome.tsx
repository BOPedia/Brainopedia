import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleDownSyndromeProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleDownSyndrome({ setCurrentArticle }: ArticleDownSyndromeProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('down-syndrome-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('down-syndrome-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('down-syndrome-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('down-syndrome-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('down-syndrome-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Down Syndrome',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('down-syndrome-living');
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
        Down Syndrome
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Down syndrome</strong> (also known as Trisomy 21) is a genetic condition caused by the 
            presence of an extra copy of chromosome 21.<sup>[1]</sup> This chromosomal difference results in a distinct 
            neurocognitive profile, characteristic physical features, and specific health considerations.<sup>[2]</sup> 
            Down syndrome represents a natural variation in human genetics and is one of the most common 
            chromosomal conditions.<sup>[3]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Down Syndrome"
            data={[
              { label: 'Other names', value: 'Trisomy 21' },
              { label: 'Specialty', value: 'Medical Genetics, Developmental Medicine' },
              { label: 'Cause', value: 'Extra copy of chromosome 21' },
              { label: 'Identified', value: 'Prenatal testing or at birth' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: 'Approximately 1 in 700 births' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1654540288895-3eefdd293c1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbW9zb21lcyUyMGdlbmV0aWNzJTIwRE5BJTIwYmlvbG9neXxlbnwxfHx8fDE3Njc0MDg2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Chromosomes and genetics - understanding Down syndrome"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Down syndrome affects approximately 1 in 700 babies born in the United States, making it the 
            most common chromosomal condition.<sup>[4]</sup> The condition represents a natural genetic variation where every cell (typically) has three copies of chromosome 21.<sup>[5]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('down-syndrome-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1763831488402-107bb1824471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXN1YWwlMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3Njc0MDg2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Visual learning and education - cognitive strengths in Down syndrome"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Down syndrome creates a distinct pattern of cognitive strengths and challenges.<sup>[10]</sup> Cognitive strengths 
            include visual learning and visual-spatial processing, social awareness, and emotional intelligence.<sup>[11]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('down-syndrome-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1654540288895-3eefdd293c1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbW9zb21lcyUyMGdlbmV0aWNzJTIwRE5BJTIwYmlvbG9neXxlbnwxfHx8fDE3Njc0MDg2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Chromosome 21 - genetic basis of Down syndrome"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Down syndrome results from having an extra copy of chromosome 21.<sup>[19]</sup> There are three genetic variations: 
            Trisomy 21 (95% of cases), Translocation (3-4%), and Mosaic Down Syndrome (1-2%).<sup>[20]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('down-syndrome-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5ldGljJTIwdGVzdGluZyUyMG1lZGljYWwlMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2NzQwODYyOHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Genetic testing - diagnosing Down syndrome"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Down syndrome is identified through prenatal testing or at birth.<sup>[25]</sup> At birth, Down syndrome is typically identified by physical 
            characteristics and confirmed through chromosomal analysis.<sup>[28]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('down-syndrome-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758205308106-5760d0227cc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcGVkaWF0cmljJTIwd2VsbG5lc3MlMjBjaGlsZHJlbnxlbnwxfHx8fDE3Njc0MDg2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Healthcare and wellness - supporting individuals with Down syndrome"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Comprehensive, early, and ongoing support enables individuals with Down syndrome to reach their full potential.<sup>[32]</sup> 
            Early intervention services from birth include physical, occupational, and speech therapy.<sup>[33]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('down-syndrome-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Down Syndrome</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1767274094403-8bb7bd097e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmNsdXNpb24lMjBjb21tdW5pdHklMjBwYXJ0aWNpcGF0aW9uJTIwcGVvcGxlfGVufDF8fHx8MTc2NzQwODYyOXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Community inclusion - living with Down syndrome"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            People with Down syndrome lead fulfilling and meaningful lives across all areas of society.<sup>[40]</sup> Many adults pursue careers, 
            live independently, and enjoy rich fulfilling lives with appropriate supports.<sup>[41]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('down-syndrome-living');
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
          <p>[1] Lejeune, J., et al. (1959). "Study of somatic chromosomes from 9 mongoloid children." <em>Comptes Rendus</em>, 248(11), 1721-1722.</p>
          <p>[2] Antonarakis, S. E., et al. (2004). "Chromosome 21 and Down syndrome: From genomics to pathophysiology." <em>Nature Reviews Genetics</em>, 5(10), 725-738.</p>
          <p>[4] Mai, C. T., et al. (2019). "National population-based estimates for major birth defects, 2010-2014." <em>Birth Defects Research</em>, 111(18), 1420-1435.</p>
          <p>[10] Silverman, W. (2007). "Down syndrome: Cognitive phenotype." <em>MRDD Research Reviews</em>, 13(3), 228-236.</p>
          <p>[15] Bull, M. J. (2011). "Health supervision for children with Down syndrome." <em>Pediatrics</em>, 128(2), 393-406.</p>
          <p>[32] Dunst, C. J., et al. (2006). "Everyday activity settings, natural learning environments, and early intervention practices." <em>JPPI Disabilities</em>, 3(1), 3-10.</p>
          <p>[40] Skorji, V. M., & Saleh, M. N. (2021). "Quality of life in adults with Down syndrome: A systematic review." <em>JAR Intellectual Disabilities</em>, 34(4), 1041-1053.</p>
        </div>
      </section>
    </article>
  );
}
