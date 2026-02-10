import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';

interface ArticleSynesthesiaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleSynesthesia({ setCurrentArticle }: ArticleSynesthesiaProps) {
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
      title: 'Living with Synesthesia'
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
        Synesthesia
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p>
            <strong>Synesthesia</strong> is a neurological phenomenon in which stimulation of one sensory or cognitive 
            pathway leads to involuntary experiences in a second sensory or cognitive pathway.<sup>[1]</sup> For example, a person 
            with synesthesia might see colors when hearing music, or taste flavors when reading words.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        <div className="w-full">
          <InfoBox
            title="Synesthesia"
            data={[
              { label: 'Other names', value: 'Synaesthesia' },
              { label: 'Specialty', value: 'Neurology, Psychology' },
              { label: 'Symptoms', value: 'Involuntary joining of sensory experiences' },
              { label: 'Usual onset', value: 'Present from birth, often recognized later' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: '2-4% of population (estimated)' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1765363674916-cb6d520fd8ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwc2Vuc29yeSUyMHBlcmNlcHRpb258ZW58MXx8fHwxNzY3NDA3OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Colorful abstract sensory perception - understanding synesthesia"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            The term "synesthesia" comes from the Greek words "syn" (together) and "aisthesis" (sensation), literally 
            meaning "joined sensation."<sup>[3]</sup> Synesthesia is a lifelong condition that people are typically born with, 
            though it may not be recognized until later in life.<sup>[4]</sup> It is estimated to occur in about 2-4% of the 
            population, though this may be higher as many people don't realize their experiences are unusual.<sup>[5]</sup>
          </p>
          
          <p className="mb-4">
            Unlike 
            sensory hallucinations, synesthetic perceptions are consistent, automatic, and involuntary.<sup>[6]</sup> The same 
            stimulus will always produce the same synesthetic experience. For instance, if the letter "A" appears 
            red to a synesthete, it will always appear red, and this association remains stable throughout their life.<sup>[7]</sup> 
            Synesthesia is not considered a disorder or disability. In fact, many synesthetes view it as a gift that 
            enriches their perception of the world, enhancing creativity and memory.<sup>[8][9]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1736176421274-546a4eaf57d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbG9ycyUyMHNvdW5kJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3Njc0MDc5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Music colors and sound visualization - chromesthesia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            There are many documented forms of synesthesia involving various combinations of senses and cognitive 
            processes.<sup>[10]</sup> Grapheme-color synesthesia (the most common form) occurs when letters and numbers are perceived 
            as inherently colored, with each synesthete having their own unique color associations.<sup>[11]</sup> Chromesthesia 
            (sound-to-color) involves perceiving colors when hearing sounds, music, or voices, with different pitches 
            or timbres evoking different colors.<sup>[12]</sup> Lexical-gustatory synesthesia occurs when words or phonemes evoke 
            specific taste sensations.<sup>[13]</sup>
          </p>
          
          <p className="mb-4">
            Spatial sequence synesthesia involves perceiving number sequences, months, or 
            days of the week as occupying specific locations in space.<sup>[14]</sup> Other forms include number-form (numbers visualized 
            in specific spatial arrangements), personification (letters, numbers, or days have distinct personalities), 
            mirror-touch (observing touch on another person triggers tactile sensations on one's own body), and auditory-tactile 
            (sounds produce tactile sensations).<sup>[15][16]</sup> Many synesthetes have multiple forms of synesthesia.<sup>[17]</sup> The experiences are 
            automatic, consistent, and involuntary, occurring throughout the person's life.<sup>[18]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1719550371336-7bb64b5cacfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG5ldXJhbCUyMGNvbm5lY3Rpb25zJTIwbmV0d29ya3xlbnwxfHx8fDE3Njc0MDc5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain neural connections - neurological basis of synesthesia"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Synesthesia has a strong genetic component and tends to run in families, though the specific genes involved 
            are still being researched.<sup>[19][20]</sup> Studies suggest that synesthesia results from increased connectivity or cross-activation 
            between brain regions that are normally separate.<sup>[21]</sup> The cross-activation theory suggests that synesthesia occurs 
            due to excess neural connections between adjacent brain areas (for example, between brain regions that process 
            letters/numbers and those that process color).<sup>[22]</sup>
          </p>
          
          <p className="mb-4">
            The disinhibited feedback theory proposes that while we all have 
            neural connections between different sensory areas, in most people these connections are inhibited, but in synesthetes 
            this inhibition is reduced, allowing feedback between sensory regions.<sup>[23]</sup> Brain imaging studies have shown differences 
            in brain structure and activation patterns in synesthetes, revealing increased gray matter in certain regions and 
            enhanced connectivity between sensory areas.<sup>[24][25]</sup> All infants may have synesthetic experiences due to incomplete neural 
            differentiation, and as the brain develops, most people lose these connections, but in synesthetes some remain 
            active throughout life.<sup>[26]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1664261836174-b419b196326c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaG9sb2dpY2FsJTIwdGVzdGluZyUyMHF1ZXN0aW9ubmFpcmV8ZW58MXx8fHwxNzY3NDA3OTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Psychological testing and questionnaire - identifying synesthesia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Synesthesia is typically identified through self-report and validated through consistency testing.<sup>[27]</sup> The identification 
            process includes detailed questionnaires about synesthetic experiences, consistency testing where the same stimuli 
            are presented at different times to verify that associations remain stable (true synesthetes will give the same 
            responses months apart), comparison of experiences to documented forms of synesthesia, ruling out other conditions 
            like hallucinations or sensory processing differences, and sometimes brain imaging studies for research purposes.<sup>[28][5]</sup>
          </p>
          
          <p className="mb-4">
            Key characteristics that distinguish true synesthesia include automaticity (experiences occur involuntarily without 
            conscious effort), consistency (the same stimulus always produces the same synesthetic experience), and lifelong 
            presence (synesthetic associations remain stable throughout life).<sup>[29][30]</sup> Many synesthetes don't realize their experiences 
            are unusual until adolescence or adulthood, often assuming everyone perceives the world the same way.<sup>[31]</sup> Online 
            tests such as the Synesthesia Battery have been developed to assess and verify synesthetic experiences.<sup>[32]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1664497967316-b2788db919b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydCUyMGV4cHJlc3Npb24lMjBtdWx0aSUyMHNlbnNvcnl8ZW58MXx8fHwxNzY3NDA3OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Creative art and multi-sensory expression - synesthetic experiences"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Synesthesia is not considered a disorder requiring treatment or "management" in the traditional sense.<sup>[33]</sup> Instead, 
            understanding and embracing synesthesia involves recognizing it as a unique way of perceiving the world.<sup>[34]</sup> Benefits 
            include enhanced memory abilities (using additional sensory cues), increased creativity and unique perspectives, 
            rich multi-sensory experience of the world, advantages in certain fields (music, art, mathematics), and strong 
            sense of identity and community with other synesthetes.<sup>[35][36][37]</sup>
          </p>
          
          <p className="mb-4">
            Some challenges may include sensory overload in stimulating 
            environments, difficulty explaining experiences to non-synesthetes, occasional confusion or distraction from synesthetic 
            perceptions, and in rare cases unpleasant associations.<sup>[38]</sup> Support involves education about synesthesia, connecting with 
            other synesthetes through communities and online forums, strategies for managing sensory overload when needed, using 
            synesthetic abilities to enhance learning and memory, and helping others (family, teachers, employers) understand the 
            experience.<sup>[39]</sup> Scientists are always interested in studying synesthesia through online tests and research studies.<sup>[40]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Synesthesia</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1765363674916-cb6d520fd8ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwc2Vuc29yeSUyMHBlcmNlcHRpb258ZW58MXx8fHwxNzY3NDA3OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Living with synesthesia - rich sensory experiences"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with synesthesia lead successful and fulfilling lives across all areas of society, with many notable 
            artists, musicians, and writers having synesthesia including Wassily Kandinsky, Franz Liszt, Duke Ellington, Billy 
            Joel, Pharrell Williams, and Vladimir Nabokov.<sup>[40][41]</sup> Living with synesthesia enriches perception of the world and can enhance 
            creativity, memory, and unique perspectives.<sup>[42]</sup> Living well with synesthesia involves understanding one's specific type(s) 
            of synesthetic experiences, recognizing synesthesia as a gift rather than a disorder, using synesthetic abilities to 
            enhance learning, memory, and creative pursuits, managing occasional sensory overload when needed, and connecting with 
            synesthete communities.<sup>[43]</sup>
          </p>
          
          <p className="mb-4">
            Topics related to living with synesthesia include leveraging enhanced memory and creativity, 
            pursuing careers in arts, music, or creative fields that benefit from unique perception, explaining synesthetic experiences 
            to others, managing sensory-rich environments, contributing to research that helps scientists understand perception and 
            consciousness, and celebrating the rich multi-sensory experience of the world.<sup>[44]</sup> When synesthetes discover that their 
            experiences are unique, it can be both surprising and validating.<sup>[45]</sup> The synesthesia community provides connection 
            and shared understanding among those with this unique way of perceiving the world.<sup>[46]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Cytowic, R. E., & Eagleman, D. M. (2009). <em>Wednesday is indigo blue: Discovering the brain of synesthesia</em>. Cambridge, MA: MIT Press.</p>
          <p>[2] Baron-Cohen, S., & Harrison, J. E. (1997). <em>Synaesthesia: Classic and contemporary readings</em>. Oxford: Blackwell Publishers.</p>
          <p>[3] Simner, J., & Hubbard, E. M. (2013). <em>The Oxford handbook of synesthesia</em>. Oxford: Oxford University Press.</p>
          <p>[4] Baron-Cohen, S., Burt, L., Smith-Laittan, F., Harrison, J., & Bolton, P. (1996). "Synaesthesia: Prevalence and familiality." <em>Perception</em>, 25(9), 1073-1079.</p>
          <p>[5] Simner, J., Mulvenna, C., Sagiv, N., et al. (2006). "Synaesthesia: The prevalence of atypical cross-modal experiences." <em>Perception</em>, 35(8), 1024-1033.</p>
          <p>[6] Cytowic, R. E. (1989). <em>Synesthesia: A union of the senses</em>. New York: Springer-Verlag.</p>
          <p>[7] Baron-Cohen, S., Wyke, M. A., & Binnie, C. (1987). "Hearing words and seeing colours: An experimental investigation of a case of synaesthesia." <em>Perception</em>, 16(6), 761-767.</p>
          <p>[8] Ward, J., Thompson-Lake, D., Ely, R., & Kaminski, F. (2008). "Synaesthesia, creativity and art: What is the link?" <em>British Journal of Psychology</em>, 99(1), 127-141.</p>
          <p>[9] Rothen, N., & Meier, B. (2010). "Higher prevalence of synaesthesia in art students." <em>Perception</em>, 39(5), 718-720.</p>
          <p>[10] Day, S. (2005). "Some demographic and socio-cultural aspects of synesthesia." In L. C. Robertson & N. Sagiv (Eds.), <em>Synesthesia: Perspectives from cognitive neuroscience</em> (pp. 11-33). New York: Oxford University Press.</p>
          <p>[11] Simner, J., & Ward, J. (2006). "The taste of words on the tip of the tongue." <em>Nature</em>, 444(7118), 438.</p>
          <p>[12] Ward, J., Huckstep, B., & Tsakanikos, E. (2006). "Sound-colour synaesthesia: To what extent does it use cross-modal mechanisms common to us all?" <em>Cortex</em>, 42(2), 264-280.</p>
          <p>[13] Ward, J., & Simner, J. (2003). "Lexical-gustatory synaesthesia: Linguistic and conceptual factors." <em>Cognition</em>, 89(3), 237-261.</p>
          <p>[14] Sagiv, N., Simner, J., Collins, J., Butterworth, B., & Ward, J. (2006). "What is the relationship between synaesthesia and visuo-spatial number forms?" <em>Cognition</em>, 101(1), 114-128.</p>
          <p>[15] Simner, J., & Holenstein, E. (2007). "Ordinal linguistic personification as a variant of synesthesia." <em>Journal of Cognitive Neuroscience</em>, 19(4), 694-703.</p>
          <p>[16] Banissy, M. J., & Ward, J. (2007). "Mirror-touch synesthesia is linked with empathy." <em>Nature Neuroscience</em>, 10(7), 815-816.</p>
          <p>[17] Novich, S., Cheng, S., & Eagleman, D. M. (2011). "Is synaesthesia one condition or many? A large-scale analysis reveals subgroups." <em>Journal of Neuropsychology</em>, 5(2), 353-371.</p>
          <p>[18] Asher, J. E., Lamb, J. A., Brocklebank, D., et al. (2009). "A whole-genome scan and fine-mapping linkage study of auditory-visual synesthesia reveals evidence of linkage to chromosomes 2q24, 5q33, 6p12, and 12p12." <em>American Journal of Human Genetics</em>, 84(2), 279-285.</p>
          <p>[19] Tomson, S. N., Avidan, N., Lee, K., et al. (2011). "The genetics of colored sequence synesthesia: Suggestive evidence of linkage to 16q and genetic heterogeneity for the condition." <em>Behavioural Brain Research</em>, 223(1), 48-52.</p>
          <p>[20] Tilot, A. K., Kucera, K. S., Vino, A., et al. (2018). "Rare variants in <em>axonogenesis genes</em> connect three families with sound-color synesthesia." <em>Proceedings of the National Academy of Sciences</em>, 115(12), 3168-3173.</p>
          <p>[21] Ramachandran, V. S., & Hubbard, E. M. (2001). "Synaesthesia—a window into perception, thought and language." <em>Journal of Consciousness Studies</em>, 8(12), 3-34.</p>
          <p>[22] Hubbard, E. M., Arman, A. C., Ramachandran, V. S., & Boynton, G. M. (2005). "Individual differences among grapheme-color synesthetes: Brain-behavior correlations." <em>Neuron</em>, 45(6), 975-985.</p>
          <p>[23] Grossenbacher, P. G., & Lovelace, C. T. (2001). "Mechanisms of synesthesia: Cognitive and physiological constraints." <em>Trends in Cognitive Sciences</em>, 5(1), 36-41.</p>
          <p>[24] Rouw, R., & Scholte, H. S. (2007). "Increased structural connectivity in grapheme-color synesthesia." <em>Nature Neuroscience</em>, 10(6), 792-797.</p>
          <p>[25] Jäncke, L., Beeli, G., Eulig, C., & Hänggi, J. (2009). "The neuroanatomy of grapheme-color synesthesia." <em>European Journal of Neuroscience</em>, 29(6), 1287-1293.</p>
          <p>[26] Maurer, D., & Mondloch, C. J. (2005). "Neonatal synesthesia: A re-evaluation." In L. C. Robertson & N. Sagiv (Eds.), <em>Synesthesia: Perspectives from cognitive neuroscience</em> (pp. 193-213). New York: Oxford University Press.</p>
          <p>[27] Eagleman, D. M., Kagan, A. D., Nelson, S. S., Sagaram, D., & Sarma, A. K. (2007). "A standardized test battery for the study of synesthesia." <em>Journal of Neuroscience Methods</em>, 159(1), 139-145.</p>
          <p>[28] Baron-Cohen, S., Harrison, J., Goldstein, L. H., & Wyke, M. (1993). "Coloured speech perception: Is synaesthesia what happens when modularity breaks down?" <em>Perception</em>, 22(4), 419-426.</p>
          <p>[29] Simner, J., & Logie, R. H. (2007). "Synaesthetic consistency spans decades in a lexical-gustatory synaesthete." <em>Neurocase</em>, 13(5), 358-365.</p>
          <p>[30] Rich, A. N., Bradshaw, J. L., & Mattingley, J. B. (2005). "A systematic, large-scale study of synaesthesia: Implications for the role of early experience in lexical-colour associations." <em>Cognition</em>, 98(1), 53-84.</p>
          <p>[31] Carmichael, D. A., Down, M. P., Shillcock, R. C., Eagleman, D. M., & Simner, J. (2015). "Validating a standardised test battery for synesthesia: Does the Synesthesia Battery reliably detect synesthesia?" <em>Consciousness and Cognition</em>, 33, 375-385.</p>
          <p>[32] Hochel, M., & Milán, E. G. (2008). "Synaesthesia: The existing state of affairs." <em>Cognitive Neuropsychology</em>, 25(1), 93-117.</p>
          <p>[33] Cytowic, R. E. (2002). <em>Synesthesia: A union of the senses</em> (2nd ed.). Cambridge, MA: MIT Press.</p>
          <p>[34] Yaro, C., & Ward, J. (2007). "Searching for Shereshevskii: What is superior about the memory of synaesthetes?" <em>Quarterly Journal of Experimental Psychology</em>, 60(5), 681-695.</p>
          <p>[35] Simner, J., Mayo, N., & Spiller, M. J. (2009). "A foundation for savantism? Visuo-spatial synaesthetes present with cognitive benefits." <em>Cortex</em>, 45(10), 1246-1260.</p>
          <p>[36] Chun, C. A., & Hupé, J. M. (2016). "Are synesthetes exceptional beyond their synesthetic associations? A systematic comparison of creativity, personality, cognition, and mental imagery in synesthetes and controls." <em>British Journal of Psychology</em>, 107(3), 397-418.</p>
          <p>[37] Cytowic, R. E. (1995). "Synesthesia: Phenomenology and neuropsychology. A review of current knowledge." <em>Psyche</em>, 2(10), 1-12.</p>
          <p>[38] Ward, J. (2013). "Synesthesia." <em>Annual Review of Psychology</em>, 64, 49-75.</p>
          <p>[39] Rothen, N., Seth, A. K., Witzel, C., & Ward, J. (2013). "Diagnosing synaesthesia with online colour pickers: Maximising sensitivity and specificity." <em>Journal of Neuroscience Methods</em>, 215(1), 156-160.</p>
          <p>[40] Galeyev, B., & Vanechkina, I. (2001). "Was Scriabin a synesthete?" <em>Leonardo</em>, 34(4), 357-361.</p>
          <p>[41] Mulvenna, C. M. (2007). "Synaesthesia, the arts and creativity: A neurological connection." In M. de Caro, F. Ferretti, & M. Marraffa (Eds.), <em>Cartographies of the mind: Philosophy and psychology in intersection</em> (pp. 61-78). Dordrecht: Springer.</p>
          <p>[42] Ramachandran, V. S., & Hubbard, E. M. (2003). "The phenomenology of synaesthesia." <em>Journal of Consciousness Studies</em>, 10(8), 49-57.</p>
          <p>[43] Ward, J., & Simner, J. (2020). "Synesthesia: The current state of the field." In A. K. Proulx, M. J. Proulx, & S. A. Brown (Eds.), <em>Multisensory perception: From laboratory to clinic</em> (pp. 283-300). Cambridge, MA: Academic Press.</p>
          <p>[44] Smilek, D., Dixon, M. J., Cudahy, C., & Merikle, P. M. (2001). "Synaesthetic photisms influence visual perception." <em>Journal of Cognitive Neuroscience</em>, 13(7), 930-936.</p>
          <p>[45] Cohen Kadosh, R., Henik, A., & Walsh, V. (2009). "Synaesthesia: Learned or lost?" <em>Developmental Science</em>, 12(3), 484-491.</p>
          <p>[46] Cytowic, R. E., & Wood, F. B. (1982). "Synesthesia: II. Psychophysical relations in the synesthesia of geometrically shaped taste and colored hearing." <em>Brain and Cognition</em>, 1(1), 36-49.</p>
        </div>
      </section>
    </article>
  );
}