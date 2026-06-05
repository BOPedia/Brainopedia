import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';

interface ArticleOCDProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleOCD({ setCurrentArticle }: ArticleOCDProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview'
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics'
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins'
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing'
    },
    { 
      id: 'support', 
      title: 'Support & Management'
    },
    { 
      id: 'living', 
      title: 'Living with OCD'
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
        Obsessive-Compulsive Disorder (OCD)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Obsessive-compulsive disorder (OCD)</strong> is a neurological condition characterized by 
            persistent, intrusive thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) 
            performed to reduce anxiety.<sup>[1]</sup> Increasingly understood through a neurodivergent lens, OCD represents 
            a distinct pattern of brain processing involving specific neural loops and information processing differences.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="OCD"
            data={[
              { label: 'Other names', value: 'Obsessive-Compulsive Disorder' },
              { label: 'Specialty', value: 'Psychiatry, Psychology, Neurology' },
              { label: 'Symptoms', value: 'Intrusive thoughts, repetitive behaviors, anxiety' },
              { label: 'Usual onset', value: 'Childhood to early adulthood' },
              { label: 'Duration', value: 'Chronic (lifelong neurotype)' },
              { label: 'Frequency', value: '2-3% of population' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1711409650645-a568a59446f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG5ldXJvc2NpZW5jZSUyMHBhdHRlcm58ZW58MXx8fHwxNzY3MzI2NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain neuroscience - neural pathways involved in OCD"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            OCD affects approximately 2-3% of the population and involves a complex interplay between 
            neurological pathways, particularly in the orbitofrontal cortex, anterior cingulate cortex, 
            and basal ganglia.<sup>[3]</sup> These brain regions are responsible for error detection, doubt resolution, 
            and behavioral inhibition. While traditionally classified as a mental health disorder, many 
            advocates and researchers now recognize OCD as a neurotype—a fundamental difference in how the 
            brain processes threat, certainty, and completion.<sup>[4]</sup>
          </p>
          
          <p className="mb-4">
            The OCD brain processes doubt, threat, and completion differently, creating "loops" of thought and behavior that are 
            neurologically based. OCD manifests in various presentations including contamination OCD, harm 
            OCD, symmetry and ordering, and Pure-O (primarily obsessional) where compulsions are primarily mental.<sup>[5]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1670191836487-e375e2be3e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXBldGl0aXZlJTIwc3BpcmFsJTIwbG9vcHxlbnwxfHx8fDE3NjczMjY1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Spiral pattern representing the repetitive nature of OCD thought loops"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            OCD is characterized by obsessions and compulsions. Obsessions are unwanted intrusive thoughts, images, 
            or urges that cause significant distress and include contamination fears, need for symmetry, intrusive 
            thoughts of harm, religious scrupulosity, and unwanted sexual or aggressive thoughts.<sup>[6]</sup> Compulsions are 
            repetitive behaviors or mental acts performed to reduce anxiety and include excessive cleaning, checking 
            behaviors, counting, arranging items, mental rituals, and seeking reassurance from others.<sup>[7]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1581461356013-c5229dcb670c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB0aGVyYXB5fGVufDF8fHx8MTc2NzMyNjUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Understanding OCD origins - brain regions and neural pathways"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            OCD involves a complex interplay between neurological pathways, particularly in the orbitofrontal cortex, 
            anterior cingulate cortex, and basal ganglia—brain regions responsible for error detection, doubt resolution, 
            and behavioral inhibition.<sup>[8]</sup> Research suggests differences in neurotransmitter systems, particularly serotonin, 
            dopamine, and glutamate, contribute to OCD symptoms. Brain imaging studies have revealed structural and functional 
            differences in people with OCD, particularly in circuits that process threat, certainty, and completion.<sup>[9]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1620933967796-53cc2b175b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGlhZ25vc2lzJTIwY2hlY2tsaXN0fGVufDF8fHx8MTc2NzMyNjUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Medical diagnosis - clinical assessment for OCD"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            OCD is diagnosed clinically by mental health professionals including psychiatrists, psychologists, or clinical 
            social workers. The diagnostic criteria include presence of obsessions and compulsions, recognition that these 
            are excessive, significant time consumed by symptoms (typically an hour or more per day), and significant distress 
            or impairment in daily functioning.<sup>[10]</sup> The evaluation includes detailed clinical interview, assessment tools 
            such as the Yale-Brown Obsessive Compulsive Scale, ruling out other conditions, and assessment of co-occurring 
            conditions.<sup>[11]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1764192114257-ae9ecf97eb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5kZnVsbmVzcyUyMG1lZGl0YXRpb24lMjBjYWxtfGVufDF8fHx8MTc2NzMyNjUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Mindfulness and therapy - approaches for managing OCD"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            A neurodivergent-affirming approach to OCD combines evidence-based treatment with self-acceptance. Exposure and 
            Response Prevention (ERP) is the gold-standard treatment involving gradual exposure to feared situations while 
            preventing compulsive responses.<sup>[12]</sup> Acceptance and Commitment Therapy (ACT) focuses on accepting intrusive 
            thoughts while committing to value-based actions. Medication including SSRIs can help regulate neurotransmitter 
            systems involved in OCD and is often used in combination with therapy.<sup>[13]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with OCD</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1584022464805-0e83f7186106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvbmZpZGVudCUyMHBlcnNvbnxlbnwxfHx8fDE3NjczMjY1MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Living successfully with OCD - thriving and confident"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with OCD lead successful and fulfilling lives across all areas of society. OCD is a chronic neurotype 
            that individuals learn to manage throughout their lives, often with symptoms waxing and waning over time.<sup>[14]</sup> With 
            appropriate treatment and self-understanding, people with OCD develop effective strategies for managing symptoms 
            and thrive in education, careers, and relationships. Living well with OCD involves understanding one's specific 
            OCD profile, engaging in evidence-based treatment, developing self-compassion, and recognizing both the challenges 
            and potential strengths of the OCD neurotype.<sup>[15]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Psychiatric Association. (2013). <em>Diagnostic and Statistical Manual of Mental Disorders (5th ed.)</em>. Arlington, VA: American Psychiatric Publishing.</p>
          <p>[2] Pauls, D. L., Abramovitch, A., Rauch, S. L., & Geller, D. A. (2014). "Obsessive-compulsive disorder: An integrative genetic and neurobiological perspective." <em>Nature Reviews Neuroscience</em>, 15(6), 410-424.</p>
          <p>[3] Ruscio, A. M., Stein, D. J., Chiu, W. T., & Kessler, R. C. (2010). "The epidemiology of obsessive-compulsive disorder in the National Comorbidity Survey Replication." <em>Molecular Psychiatry</em>, 15(1), 53-63.</p>
          <p>[4] Mataix-Cols, D., Rosario-Campos, M. C., & Leckman, J. F. (2005). "A multidimensional model of obsessive-compulsive disorder." <em>American Journal of Psychiatry</em>, 162(2), 228-238.</p>
          <p>[5] Stein, D. J., Costa, D. L., Lochner, C., et al. (2019). "Obsessive-compulsive disorder." <em>Nature Reviews Disease Primers</em>, 5(1), 52.</p>
          <p>[6] Abramowitz, J. S., Taylor, S., & McKay, D. (2009). "Obsessive-compulsive disorder." <em>The Lancet</em>, 374(9688), 491-499.</p>
          <p>[7] Foa, E. B., Huppert, J. D., & Cahill, S. P. (2006). "Emotional processing theory: An update." In B. O. Rothbaum (Ed.), <em>Pathological anxiety: Emotional processing in etiology and treatment</em> (pp. 3-24). Guilford Press.</p>
          <p>[8] Saxena, S., & Rauch, S. L. (2000). "Functional neuroimaging and the neuroanatomy of obsessive-compulsive disorder." <em>Psychiatric Clinics of North America</em>, 23(3), 563-586.</p>
          <p>[9] Milad, M. R., & Rauch, S. L. (2012). "Obsessive-compulsive disorder: Beyond segregated cortico-striatal pathways." <em>Trends in Cognitive Sciences</em>, 16(1), 43-51.</p>
          <p>[10] Goodman, W. K., Price, L. H., Rasmussen, S. A., et al. (1989). "The Yale-Brown Obsessive Compulsive Scale." <em>Archives of General Psychiatry</em>, 46(11), 1006-1011.</p>
          <p>[11] Grant, J. E., Pinto, A., Gunnip, M., et al. (2007). "Sexual obsessions and clinical correlates in adults with obsessive-compulsive disorder." <em>Comprehensive Psychiatry</em>, 48(4), 325-329.</p>
          <p>[12] Foa, E. B., Liebowitz, M. R., Kozak, M. J., et al. (2005). "Randomized, placebo-controlled trial of exposure and ritual prevention, clomipramine, and their combination in the treatment of obsessive-compulsive disorder." <em>American Journal of Psychiatry</em>, 162(1), 151-161.</p>
          <p>[13] Soomro, G. M., Altman, D., Rajagopal, S., & Oakley-Browne, M. (2008). "Selective serotonin re-uptake inhibitors (SSRIs) versus placebo for obsessive compulsive disorder (OCD)." <em>Cochrane Database of Systematic Reviews</em>, (1), CD001765.</p>
          <p>[14] Eisen, J. L., Mancebo, M. A., Pinto, A., et al. (2006). "Impact of obsessive-compulsive disorder on quality of life." <em>Comprehensive Psychiatry</em>, 47(4), 270-275.</p>
          <p>[15] Stengler-Wenzke, K., Kroll, M., Matschinger, H., & Angermeyer, M. C. (2006). "Quality of life of relatives of patients with obsessive-compulsive disorder." <em>Comprehensive Psychiatry</em>, 47(6), 523-527.</p>
        </div>
      </section>
    </article>
  );
}