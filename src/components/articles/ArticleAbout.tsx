import React from 'react';
import { BookOpen, List, Users, Target, Lightbulb, FileText } from 'lucide-react';

interface ArticleAboutProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleAbout({ setCurrentArticle }: ArticleAboutProps) {
  return (
    <article className="bg-[#fffbf0] -m-8 p-4 sm:p-8 rounded-lg">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
        About Brainopedia
      </h1>

      <div className="space-y-8">
        {/* Banner Image */}
        <div className="mb-6">
          <img 
            src="/images/brainopedia-banner.png" 
            alt="Brainopedia - Your encyclopedic platform about neurodivergent minds"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* What We Provide */}
        <section>
          <h2 className="text-[#0c264d] font-bold mb-3 text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>What We Provide</h2>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div className="bg-[#ffd700]/25 p-4 sm:p-5 rounded-lg border-2 border-[#ffd700]">
              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-[#0d4f8c] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-[#0c264d] font-bold mb-2 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Detailed Volumes</h3>
                  <p className="leading-relaxed text-base">
                    Each neurodivergent condition has its own comprehensive volume with both directly referenced statistics, and cited research studies throughout.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#ffd166]/50 p-4 sm:p-5 rounded-lg border-2 border-[#ffd166]">
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-[#0d4f8c] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-[#0c264d] font-bold mb-2 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Comprehensive Info</h3>
                  <p className="leading-relaxed text-base">
                    In-depth coverage spanning symptoms and characteristics, diagnostic processes, neurological foundations, treatment approaches, and real-world experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#2abcd4]/25 p-4 sm:p-5 rounded-lg border-2 border-[#2abcd4]">
              <div className="flex items-start gap-3">
                <List className="w-6 h-6 text-[#0d4f8c] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-[#0c264d] font-bold mb-2 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Organized Categories</h3>
                  <p className="leading-relaxed text-base">
                    Six main topics of information organized by clear categories (Overview, Characteristics, Origins, Diagnosis, Support and Living with each neurodivergence).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0d4f8c]/25 p-4 sm:p-5 rounded-lg border-2 border-[#0d4f8c]">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-[#0d4f8c] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-[#0c264d] font-bold mb-2 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Respectful & Accessible</h3>
                  <p className="leading-relaxed text-base">
                    Content presented with respect for neurodivergent individuals, emphasizing strengths 
                    alongside challenges, with accessible design and clear language.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section>
          <h2 className="text-[#0c264d] font-bold mb-3 text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Approach</h2>
          
          <div className="mb-6">
            <img 
              src="/images/home-magnify-glass-brain.png" 
              alt="Brain with magnifying glass and book illustration representing detailed neurodivergence research"
              className="float-right ml-6 mb-4 w-64 h-64 rounded-lg shadow-lg object-cover"
            />
            
            <p className="mb-4 leading-relaxed text-base">
              Brainopedia provides accessible, encyclopedia-style, well-structured information with easy navigation. 
              The aim is to make learning about neurodivergence informative, respectful, and accessible to all.
            </p>

            <p className="mb-4 leading-relaxed text-base">
              Understanding neurodivergence is a journey that invites exploration. Visitors can:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-4 text-base">
              <li>Learn about multiple conditions in one location</li>
              <li>Understand each condition's characteristics and strengths</li>
              <li>Navigate topics via a sidebar and table of contents</li>
            </ul>
          </div>
        </section>

        {/* Current Coverage */}
        <section>
          <h2 className="text-[#0c264d] font-bold mb-3 text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>Encyclopedia Coverage</h2>
          <p className="mb-4 leading-relaxed text-base">
            Browse our volumes by category:
          </p>
          
          {/* Categories with Volumes - Full Width Cards */}
          <div className="space-y-4">
            {/* Core Neurodevelopmental */}
            <div className="bg-gradient-to-br from-[#2abcd4]/20 to-[#2abcd4]/5 p-6 rounded-xl border-2 border-[#2abcd4] shadow-sm hover:shadow-md transition-shadow min-h-[280px]">
              <h3 className="text-[#0c264d] text-base font-bold mb-3">
                Core Neurodevelopmental
              </h3>
              
              <img 
                src="/images/home-apple-core-neurodev.png" 
                alt="Neural network apple illustration"
                className="w-28 h-auto rounded-lg shadow-md float-left mr-4 mb-4"
              />
              
              <p className="mb-4 text-sm leading-relaxed">
                These are fundamental neurodevelopmental conditions that affect how the brain develops and functions from early childhood. 
                They influence attention, executive function, social communication, and sensory processing in distinctive ways that shape 
                how individuals experience and interact with the world.
              </p>
              
              <div className="flex flex-wrap gap-2 clear-left">
                <button 
                  onClick={() => setCurrentArticle?.('adhd')}
                  className="px-4 py-2 bg-white border-2 border-[#2abcd4] rounded-full text-sm hover:bg-[#2abcd4] hover:text-white transition-all font-medium"
                >
                  ADHD
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('autism')}
                  className="px-4 py-2 bg-white border-2 border-[#2abcd4] rounded-full text-sm hover:bg-[#2abcd4] hover:text-white transition-all font-medium"
                >
                  Autism or "ASD"
                </button>
              </div>
            </div>

            {/* Learning Differences & Profiles */}
            <div className="bg-gradient-to-br from-[#ffd166]/30 to-[#ffd166]/5 p-4 rounded-xl border-2 border-[#ffd166] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[#0c264d] text-base font-bold mb-3">
                Learning Differences & Profiles
              </h3>
              
              <img 
                src="/images/home-learning-diff.png" 
                alt="Brain with gears and cognitive processing illustration"
                className="w-28 h-auto rounded-lg shadow-md float-left mr-4 mb-4"
              />
              
              <p className="mb-4 text-sm leading-relaxed">
                These conditions affect how individuals process, retain, and express information across different domains 
                like reading, writing, mathematics, and spatial reasoning. Learning differences represent distinct cognitive 
                profiles that can include both exceptional abilities and specific challenges, highlighting the diverse ways 
                brains process and organize information.
              </p>
              
              <div className="flex flex-wrap gap-2 clear-left">
                <button 
                  onClick={() => setCurrentArticle?.('dyslexia')}
                  className="px-4 py-2 bg-white border-2 border-[#ffd166] rounded-full text-sm hover:bg-[#ffd166] hover:text-[#0c264d] transition-all font-medium"
                >
                  Dyslexia
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('dyscalculia')}
                  className="px-4 py-2 bg-white border-2 border-[#ffd166] rounded-full text-sm hover:bg-[#ffd166] hover:text-[#0c264d] transition-all font-medium"
                >
                  Dyscalculia
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('dysgraphia')}
                  className="px-4 py-2 bg-white border-2 border-[#ffd166] rounded-full text-sm hover:bg-[#ffd166] hover:text-[#0c264d] transition-all font-medium"
                >
                  Dysgraphia
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('nvld')}
                  className="px-4 py-2 bg-white border-2 border-[#ffd166] rounded-full text-sm hover:bg-[#ffd166] hover:text-[#0c264d] transition-all font-medium"
                >
                  Non-Verbal Learning Disability
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('dld')}
                  className="px-4 py-2 bg-white border-2 border-[#ffd166] rounded-full text-sm hover:bg-[#ffd166] hover:text-[#0c264d] transition-all font-medium"
                >
                  Developmental Learning Disorder
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('hyperlexia')}
                  className="px-4 py-2 bg-white border-2 border-[#ffd166] rounded-full text-sm hover:bg-[#ffd166] hover:text-[#0c264d] transition-all font-medium"
                >
                  Hyperlexia
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('giftedness')}
                  className="px-4 py-2 bg-white border-2 border-[#ffd166] rounded-full text-sm hover:bg-[#ffd166] hover:text-[#0c264d] transition-all font-medium"
                >
                  Giftedness
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('twice-exceptional')}
                  className="px-4 py-2 bg-white border-2 border-[#ffd166] rounded-full text-sm hover:bg-[#ffd166] hover:text-[#0c264d] transition-all font-medium"
                >
                  Twice Exceptional or "2E"
                </button>
              </div>
            </div>

            {/* Processing & Sensory */}
            <div className="bg-gradient-to-br from-[#ec4899]/20 to-[#ec4899]/5 p-4 rounded-xl border-2 border-[#ec4899] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[#0c264d] text-base font-bold mb-3">
                Processing & Sensory
              </h3>
              
              <img 
                src="/images/home-math-sensory-brain.png" 
                alt="Brain split between logical mathematics and colorful artistic sensory processing"
                className="w-28 h-auto rounded-lg shadow-md float-left mr-4 mb-4"
              />
              
              <p className="mb-4 text-sm leading-relaxed">
                These conditions involve atypical ways of receiving, interpreting, and responding to sensory information 
                from the environment. Processing differences can affect how the brain handles auditory, visual, tactile, 
                and other sensory inputs, leading to unique perceptual experiences that may include heightened sensitivities, 
                difficulties filtering stimuli, or remarkable cross-sensory connections.
              </p>
              
              <div className="flex flex-wrap gap-2 clear-left">
                <button 
                  onClick={() => setCurrentArticle?.('apd')}
                  className="px-4 py-2 bg-white border-2 border-[#ec4899] rounded-full text-sm hover:bg-[#ec4899] hover:text-white transition-all font-medium"
                >
                  Auditory Processing Disorder or "APD"
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('visual-processing')}
                  className="px-4 py-2 bg-white border-2 border-[#ec4899] rounded-full text-sm hover:bg-[#ec4899] hover:text-white transition-all font-medium"
                >
                  Visual Processing
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('spd')}
                  className="px-4 py-2 bg-white border-2 border-[#ec4899] rounded-full text-sm hover:bg-[#ec4899] hover:text-white transition-all font-medium"
                >
                  Sensory Processing Disorder or "SPD"
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('misophonia')}
                  className="px-4 py-2 bg-white border-2 border-[#ec4899] rounded-full text-sm hover:bg-[#ec4899] hover:text-white transition-all font-medium"
                >
                  Misophonia
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('synesthesia')}
                  className="px-4 py-2 bg-white border-2 border-[#ec4899] rounded-full text-sm hover:bg-[#ec4899] hover:text-white transition-all font-medium"
                >
                  Synesthesia
                </button>
              </div>
            </div>

            {/* Movement & Motor */}
            <div className="bg-gradient-to-br from-[#ffd700]/30 to-[#ffd700]/5 p-4 rounded-xl border-2 border-[#ffd700] shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <h3 className="text-[#0c264d] text-base font-bold mb-3">
                Movement & Motor
              </h3>
              
              <img 
                src="/images/home-movement-motor.png" 
                alt="Mechanical motor with blue and gold gears representing movement and motor coordination"
                className="w-28 h-auto rounded-lg shadow-md float-left mr-4 mb-4"
              />
              
              <p className="mb-4 text-sm leading-relaxed">
                These conditions affect the brain's ability to plan, coordinate, and execute physical movements. 
                Movement and motor differences can impact fine motor skills, gross motor coordination, and voluntary 
                control over movements, including both intentional actions and involuntary tics or movements that may 
                occur due to neurological variations.
              </p>
              
              <div className="flex flex-wrap gap-2 clear-left">
                <button 
                  onClick={() => setCurrentArticle?.('dyspraxia')}
                  className="px-4 py-2 bg-white border-2 border-[#ffd700] rounded-full text-sm hover:bg-[#ffd700] hover:text-[#0c264d] transition-all font-medium"
                >
                  Dyspraxia or "DCD"
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('tourette')}
                  className="px-4 py-2 bg-white border-2 border-[#ffd700] rounded-full text-sm hover:bg-[#ffd700] hover:text-[#0c264d] transition-all font-medium"
                >
                  Tourette Syndrome
                </button>
              </div>
            </div>

            {/* Mental Health Crossovers */}
            <div className="bg-gradient-to-br from-[#0a9dc4]/20 to-[#0a9dc4]/5 p-4 rounded-xl border-2 border-[#0a9dc4] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[#0c264d] text-base font-bold mb-3">
                Mental Health Crossovers
              </h3>
              
              <img 
                src="/images/home-mental-health-fire-brain-bright.png" 
                alt="Digital brain with colorful neural activity representing mental health and neurodivergence"
                className="w-28 h-auto rounded-lg shadow-md float-left mr-4 mb-4"
              />
              
              <p className="mb-4 text-sm leading-relaxed">
                These conditions occupy an important intersection between neurodivergence and mental health. 
                While traditionally classified as psychiatric disorders, they involve distinctive neurological 
                patterns and often share features with other neurodivergent conditions, particularly in how they 
                affect cognition, perception, and emotional processing. Many individuals with these conditions 
                identify with the neurodivergent community.
              </p>
              
              <div className="flex flex-wrap gap-2 clear-left">
                <button 
                  onClick={() => setCurrentArticle?.('ocd')}
                  className="px-4 py-2 bg-white border-2 border-[#0a9dc4] rounded-full text-sm hover:bg-[#0a9dc4] hover:text-white transition-all font-medium"
                >
                  Obsessive-Compulsive Disorder or "OCD"
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('bipolar')}
                  className="px-4 py-2 bg-white border-2 border-[#0a9dc4] rounded-full text-sm hover:bg-[#0a9dc4] hover:text-white transition-all font-medium"
                >
                  Bipolar Disorder
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('schizophrenia')}
                  className="px-4 py-2 bg-white border-2 border-[#0a9dc4] rounded-full text-sm hover:bg-[#0a9dc4] hover:text-white transition-all font-medium"
                >
                  Schizophrenia
                </button>
              </div>
            </div>

            {/* Genetic or Environmental */}
            <div className="bg-gradient-to-br from-[#8b5cf6]/20 to-[#8b5cf6]/5 p-4 rounded-xl border-2 border-[#8b5cf6] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[#0c264d] text-base font-bold mb-3">
                Genetic or Environmental
              </h3>
              
              <img 
                src="/images/home-genetics-or-enviro.png" 
                alt="DNA helix with neural networks representing genetic and environmental neurodivergence"
                className="w-28 h-auto rounded-lg shadow-md float-left mr-4 mb-4"
              />
              
              <p className="mb-4 text-sm leading-relaxed">
                These conditions arise from genetic variations or environmental factors during prenatal development 
                and early life. They include chromosomal differences, inherited genetic conditions, exposure to 
                substances during pregnancy, and neurological conditions that affect brain function. These conditions 
                demonstrate how both genetic inheritance and environmental influences can shape neurodivergent 
                development in significant and lasting ways.
              </p>
              
              <div className="flex flex-wrap gap-2 clear-left">
                <button 
                  onClick={() => setCurrentArticle?.('down-syndrome')}
                  className="px-4 py-2 bg-white border-2 border-[#8b5cf6] rounded-full text-sm hover:bg-[#8b5cf6] hover:text-white transition-all font-medium"
                >
                  Down Syndrome
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('intellectual-disability')}
                  className="px-4 py-2 bg-white border-2 border-[#8b5cf6] rounded-full text-sm hover:bg-[#8b5cf6] hover:text-white transition-all font-medium"
                >
                  Intellectual Disability
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('fasd')}
                  className="px-4 py-2 bg-white border-2 border-[#8b5cf6] rounded-full text-sm hover:bg-[#8b5cf6] hover:text-white transition-all font-medium"
                >
                  Fetal Alcohol Spectrum Disorder or "FASD"
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('epilepsy')}
                  className="px-4 py-2 bg-white border-2 border-[#8b5cf6] rounded-full text-sm hover:bg-[#8b5cf6] hover:text-white transition-all font-medium"
                >
                  Epilepsy
                </button>
              </div>
            </div>

            {/* Acquired Neurodivergence */}
            <div className="bg-gradient-to-br from-[#ffcc00]/25 to-[#ffcc00]/5 p-4 rounded-xl border-2 border-[#ffcc00] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[#0c264d] text-base font-bold mb-3">
                Acquired Neurodivergence
              </h3>
              
              <img 
                src="/images/home-acquired-brain.png" 
                alt="Brain scan showing injury or trauma areas representing acquired neurodivergence"
                className="w-28 h-auto rounded-lg shadow-md float-left mr-4 mb-4"
              />
              
              <p className="mb-4 text-sm leading-relaxed">
                These are neurodivergent conditions that develop after birth due to injury, illness, or environmental 
                factors affecting the brain. Unlike developmental conditions, acquired neurodivergence results from 
                traumatic brain injuries, strokes, infections, chemical exposure, or other events that alter brain 
                structure and function. These changes can significantly impact cognition, behavior, and sensory processing 
                in ways that create lasting neurological differences.
              </p>
              
              <div className="flex flex-wrap gap-2 clear-left">
                <button 
                  onClick={() => setCurrentArticle?.('tbi')}
                  className="px-4 py-2 bg-white border-2 border-[#ffcc00] rounded-full text-sm hover:bg-[#ffcc00] hover:text-[#0c264d] transition-all font-medium"
                >
                  TBI
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('cte')}
                  className="px-4 py-2 bg-white border-2 border-[#ffcc00] rounded-full text-sm hover:bg-[#ffcc00] hover:text-[#0c264d] transition-all font-medium"
                >
                  CTE
                </button>
                <button 
                  onClick={() => setCurrentArticle?.('pandas')}
                  className="px-4 py-2 bg-white border-2 border-[#ffcc00] rounded-full text-sm hover:bg-[#ffcc00] hover:text-[#0c264d] transition-all font-medium"
                >
                  PANDAS
                </button>
                <div className="px-4 py-2 text-gray-400 italic text-sm">
                  Strokes • Oxygen-Loss (Coming soon)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-gradient-to-r from-[#2abcd4]/10 to-[#ffd166]/20 border-l-4 border-[#2abcd4] p-4 sm:p-6 rounded-r-lg">
          <div className="flex items-start gap-3 sm:gap-4">
            <Target className="w-6 h-6 sm:w-8 sm:h-8 text-[#2abcd4] mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-[#0c264d] font-bold mb-3 text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Mission</h2>
              <p className="leading-relaxed text-base">
                Brainopedia is an innovative online encyclopedia dedicated to neurodivergent conditions. 
                Our mission is to provide comprehensive, accessible, and respectful information about various 
                neurodivergent experiences in a well-organized, easy-to-navigate format. Like volumes in a comprehensive 
                encyclopedia set, each entry provides detailed insights into different conditions, their characteristics, 
                diagnosis, and support strategies.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}