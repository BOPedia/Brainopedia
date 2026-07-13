import React from 'react';
import { MessageSquare, Repeat, MonitorSmartphone, HandMetal, Eye, Volume2, LayoutGrid, Users } from 'lucide-react';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

/* ─── INTERFACE ─── */
interface SpeechTherapyProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function SpeechTherapy({ setCurrentArticle }: SpeechTherapyProps) {
  
  // Responsive image class that is larger than w-64 but safe for mobile
  const responsiveImageClass = "w-full sm:w-96 md:w-[28rem] h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm";
  
  return (
    <div className="space-y-6 text-[#0c264d] font-spartan animate-in fade-in duration-300">
      
      {/* Header with Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-bold">
          Speech and Language Therapy
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shrink-0"
        >
          <span className="text-xl">&larr;</span>
          Back to Therapies
        </button>
      </div>

      {/* Introduction (Floated Image) */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 mb-8 flow-root">
        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-speech-intro.png"
          alt="Speech Therapy Intro"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm"
        />
        <p className="text-sm leading-relaxed mb-4">
          After an autism diagnosis, selecting communication strategies is a crucial step to empower the individual. Approaches range from high-tech AAC devices and structured language programs to naturalistic, everyday strategies that integrate seamlessly into a person's life.
        </p>
        <p className="text-sm leading-relaxed">
          Modern, neurodiversity-affirming speech therapy has shifted away from compliance-based models or trying to make autistic individuals sound "indistinguishable from their peers." Instead, the focus is on fostering <strong>autonomous communication</strong>—giving an individual the ability to say what they want, to whom they want, when they want—and honoring their unique voice and needs.
        </p>
      </div>

      {/* ===== THE COMMUNICATION ENVIRONMENT ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Users className="text-[#0A9DC4]" size={24} /> 
          Setting Up the Communication Environment
        </h2>
        
        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-speech-comm-enviro.png"
          alt="Communication Environment"
          className={responsiveImageClass}
        />

        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          Communication isn't just about the tools an individual uses; it is heavily dependent on how we set up the physical space and how we act as communication partners.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Wait Time</div>
            <div className="text-sm text-gray-700">After asking a question or making a statement, wait at least 10-15 seconds. Processing language and formulating a response can take much longer for autistic individuals.</div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Reduce Verbal Demands</div>
            <div className="text-sm text-gray-700">Avoid firing rapid questions. Use more declarative comments (e.g., <em>"I see you're looking at the car"</em>) rather than constant demands (e.g., <em>"What is that?"</em>).</div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Accept All Communication</div>
            <div className="text-sm text-gray-700">Treat any attempt to communicate—a gesture, a sound, leading you by the hand, or looking at an object—as entirely valid and respond to it naturally.</div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Model the Tools</div>
            <div className="text-sm text-gray-700">Use the person's AAC system yourself to show them how it works without demanding they use it (e.g., press "I want drink" on their board when offering them water).</div>
          </div>
        </div>
      </div>

      {/* ===== VISUAL SUPPORTS ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Eye className="text-[#2abcd4]" size={24} /> 
          Visual Support Strategies
        </h2>
        
        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-speech-visuals.png"
          alt="Visual Supports"
          className={responsiveImageClass}
        />

        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          Visuals make language concrete, reduce anxiety, and aid in processing information. They are an essential foundation for communication.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <div className="font-bold text-[#0c264d] mb-1">Visual Schedules</div>
            <p className="text-sm text-gray-700">Using pictures or words to outline the day's sequence. This drastically reduces anxiety about "what's next."</p>
          </div>
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <div className="font-bold text-[#0c264d] mb-1">First-Then Boards</div>
            <p className="text-sm text-gray-700">A simple two-step visual (e.g., "FIRST: clean up, THEN: iPad") to clarify immediate expectations and provide motivation.</p>
          </div>
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <div className="font-bold text-[#0c264d] mb-1">Emotion Cards & Scales</div>
            <p className="text-sm text-gray-700">Visual tools (like a 1-5 frustration scale) to help someone identify and communicate their internal emotional state.</p>
          </div>
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <div className="font-bold text-[#0c264d] mb-1">Social Stories™</div>
            <p className="text-sm text-gray-700">Short, personalized stories that explain upcoming social situations and expected behaviors using pictures and clear text.</p>
          </div>
        </div>
      </div>

      {/* ===== AAC (Augmentative and Alternative Communication) ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <MonitorSmartphone className="text-[#d97706]" size={24} /> 
          AAC: Augmentative & Alternative Communication
        </h2>
        
        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          AAC methods supplement or replace speech. It is critical to understand that <strong>AAC does not hinder verbal speech development</strong>. The golden rule of AAC is to presume competence and provide a robust vocabulary so the individual can complain, tell jokes, and express complex feelings, not just request items.
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-[#0c264d] mb-3 flex items-center gap-2 border-b border-[#ffd166]/50 pb-1">
              <HandMetal className="text-[#d97706]" size={18} /> No-Tech / Low-Tech AAC
            </h4>
            <div className="grid md:grid-cols-3 gap-3 mb-4">
              <div className="bg-[#fff9e6] p-3 rounded border border-[#ffd166]/30">
                <div className="font-bold text-[#0c264d] text-sm mb-1">Core Boards</div>
                <div className="text-xs text-gray-700">Printed binders or boards with categorized vocabulary that the user points to.</div>
              </div>
              <div className="bg-[#fff9e6] p-3 rounded border border-[#ffd166]/30">
                <div className="font-bold text-[#0c264d] text-sm mb-1">Choice Boards</div>
                <div className="text-xs text-gray-700">Simple boards displaying 2-4 options to empower immediate decision-making.</div>
              </div>
              <div className="bg-[#fff9e6] p-3 rounded border border-[#ffd166]/30">
                <div className="font-bold text-[#0c264d] text-sm mb-1">PECS</div>
                <div className="text-xs text-gray-700">A structured exchange system where the user hands a picture to a partner to communicate.</div>
              </div>
            </div>
            
            <ImageWithFallback 
              src="/images/autism/autism-support-TTtab-speech-lo-tech-choices.png"
              alt="Low-Tech AAC Examples"
              className={responsiveImageClass}
            />
          </div>

          <div>
            <h4 className="font-bold text-[#0c264d] mb-3 flex items-center gap-2 border-b border-[#ffd166]/50 pb-1">
              <LayoutGrid className="text-[#d97706]" size={18} /> High-Tech AAC & Devices
            </h4>
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              <div className="bg-[#fff9e6] p-3 rounded border border-[#ffd166]/30">
                <div className="font-bold text-[#0c264d] text-sm mb-1">Robust iOS Apps</div>
                <div className="text-sm text-gray-700">Apps like <em>ProLoQuo2Go, TouchChat</em>, and <em>LAMP Words for Life</em> allow users to build complete sentences via symbols on a tablet.</div>
              </div>
              <div className="bg-[#fff9e6] p-3 rounded border border-[#ffd166]/30">
                <div className="font-bold text-[#0c264d] text-sm mb-1">Dedicated Devices</div>
                <div className="text-sm text-gray-700">Medical-grade speech-generating devices (from companies like Tobii Dynavox or PRC), often featuring eye-gaze technology for limited motor skills.</div>
              </div>
            </div>
            
            <ImageWithFallback 
              src="/images/autism/autism-support-TTtab-speech-hi-tech-choices.png"
              alt="High-Tech AAC Examples"
              className={responsiveImageClass}
            />
          </div>

          <div>
            <h4 className="font-bold text-[#0c264d] mb-3 flex items-center gap-2 border-b border-[#ffd166]/50 pb-1">
              <Volume2 className="text-[#d97706]" size={18} /> Technology-Assisted Tools
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-[#fff9e6] p-3 rounded border border-[#ffd166]/30">
                <div className="font-bold text-[#0c264d] text-sm mb-1">Text-to-Speech</div>
                <div className="text-sm text-gray-700">For individuals who can spell, apps like <em>Predictable</em> (or simple Notes apps) offer powerful on-the-fly communication.</div>
              </div>
              <div className="bg-[#fff9e6] p-3 rounded border border-[#ffd166]/30">
                <div className="font-bold text-[#0c264d] text-sm mb-1">Voice Banking</div>
                <div className="text-sm text-gray-700">A proactive process of recording an individual's natural voice for future use in a high-tech device if speech loss is anticipated.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== ECHOLALIA & SCRIPTING ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Repeat className="text-[#0A9DC4]" size={24} /> 
          Echolalia
        </h2>

        <div className="space-y-4 mb-6">
          <div className="border-l-2 border-[#2abcd4] pl-4">
            <div className="font-bold text-[#0c264d] mb-1">Immediate Echolalia</div>
            <p className="text-sm text-gray-700">Repeating words or phrases right after hearing them. (e.g., You ask, <em>"Let's go outside?"</em> and they immediately respond, <em>"Let's go outside."</em>)</p>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-4">
            <div className="font-bold text-[#0c264d] mb-1">Delayed Echolalia</div>
            <p className="text-sm text-gray-700">Repeating phrases after a delay, which can include recalling lines from movies, books, or conversations heard days or even months earlier in a completely different context.</p>
          </div>
        </div>

        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-speech-echolalia.png"
          alt="Children Echolalia"
          className={responsiveImageClass}
        />

        <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
          <h4 className="font-bold text-[#0c264d] mb-3 text-center border-b border-[#0A9DC4]/20 pb-2">10 Strategies for Supporting Echolalia</h4>
          <div className="grid md:grid-cols-2 gap-x-4 gap-y-3 text-sm text-gray-700">
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">1.</span> <span><strong>Understand Purpose:</strong> Determine if it is for communication, self-regulation, or comfort.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">2.</span> <span><strong>Model Responses:</strong> Demonstrate back-and-forth communication.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">3.</span> <span><strong>Encourage Context:</strong> Help identify when quoting media is suitable.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">4.</span> <span><strong>Introduce Language:</strong> Gently expand on their phrases to build flexibility.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">5.</span> <span><strong>Use Visuals:</strong> Bridge echolalic speech with functional language using pictures.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">6.</span> <span><strong>Promote Regulation:</strong> Teach deep breathing or use fidgets if scripting to self-soothe.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">7.</span> <span><strong>Social Opportunities:</strong> Create structured settings to practice interactions.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">8.</span> <span><strong>Be Patient:</strong> Do not abruptly interrupt; validate their communication style.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">9.</span> <span><strong>Involve Professionals:</strong> Collaborate with an SLP for targeted strategies.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">10.</span> <span><strong>Reflect Connection:</strong> Discuss the emotional meaning behind their specific scripts.</span></div>
          </div>
        </div>
      </div>

      {/* SCRIPTING BLOCK */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Repeat className="text-[#0A9DC4]" size={24} /> 
          Scripting
        </h2>
       
        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-speech-scripting-understand-children.png"
          alt="Scripting"
          className="w-full h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
        />
        
        <div className="border-l-2 border-[#2abcd4] pl-4 mb-6">
            <div className="font-bold text-[#0c264d] mb-1">Scripting</div>
            <p className="text-sm text-gray-700">Using memorized phrases or sequences intentionally to navigate social situations. It reflects a purposeful behavior where familiar, internalized lines are adapted to fit a current context.</p>
        </div>

        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-speech-scripting-support-children.png"
          alt="Scripting"
          className="w-full h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
        />

      </div>

      {/* GESTALT LANGUAGE PROCESSING BLOCK */}
      <div className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <HandMetal className="text-[#0c264d]" size={24} /> 
          Gestalt Language Processing
        </h2>              
        
        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-speech-gestalt-children.png"
          alt="Children Gestalt Language Processing"
          className={responsiveImageClass}
        />

        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          Many autistic individuals are <strong>Gestalt Language Processors (GLP)</strong>. They acquire language "top-down," understanding and using language as whole units or phrases (often learned from movies or conversations) rather than breaking down individual words or grammar.<sup>1</sup> This approach emphasizes the emotional and relational aspects of communication.
        </p>

        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-speech-gestalt-adults.png"
          alt="Adult Gestalt Language Processing"
          className={responsiveImageClass}
        />
      </div>

      {/* ===== SPEECH CHARACTERISTICS ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <MessageSquare className="text-[#2abcd4]" size={24} /> 
          Speech Differences & Characteristics
        </h2>
        
        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-speech-diff-charcteristics.png"
          alt="Speech Differences"
          className={responsiveImageClass}
        />

        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          Some autistic individuals may struggle to modulate their tone or volume, leading to speech patterns that sound unique. Therapy can help individuals self-monitor these traits if desired.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Prosody & Fluency</div>
            <div className="text-sm text-gray-700">The tone, pitch, smoothness, and rhythm of speech.</div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Uptalk</div>
            <div className="text-sm text-gray-700">A speech pattern where statements are delivered with an upward inflection, making them sound like questions.</div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Unique Vocalizations</div>
            <div className="text-sm text-gray-700">Producing sounds or words that serve as vocal stims or unique communication patterns.</div>
          </div>
        </div>
      </div>

      {/* ===== PRIORITIZING SELF-ADVOCACY ===== */}
      <div className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <HandMetal className="text-[#0c264d]" size={24} /> 
          Prioritizing Self-Advocacy
        </h2>
        
        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-speech-self-advo.png"
          alt="Prioritizing Self Advocacy"
          className={responsiveImageClass}
        />

        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          In neuro-affirming speech therapy, the highest priority is not teaching an individual to request items (like juice or a toy), but teaching them how to advocate for their bodily autonomy and sensory needs. Communication tools must first and foremost allow a person to safely navigate their environment.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded border border-[#0A9DC4]/20 shadow-sm">
            <div className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">The Power of "No"</div>
            <div className="text-sm text-gray-700">Validating refusals is critical. If a child uses AAC or a gesture to say "No," "Stop," or "Don't want," honoring that communication teaches them that their voice has power and protects them from compliance-based abuse.</div>
          </div>
          <div className="bg-white p-4 rounded border border-[#0A9DC4]/20 shadow-sm">
            <div className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">Requesting Breaks</div>
            <div className="text-sm text-gray-700">Ensuring the individual always has access to a visual or auditory way to say, <em>"I need a break,"</em> <em>"It's too loud,"</em> or <em>"I need to leave."</em></div>
          </div>
          <div className="bg-white p-4 rounded border border-[#0A9DC4]/20 shadow-sm">
            <div className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">Pain & Sickness</div>
            <div className="text-sm text-gray-700">Equipping individuals with the vocabulary to explain where their body hurts or if they feel unwell, which is often difficult to articulate during sensory overload.</div>
          </div>
        </div>
      </div>

      {/* ===== ALEXITHYMIA & PRAGMATICS ===== */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        
        {/* Alexithymia */}
        <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
          <h2 className="text-[#0c264d] font-bold mb-3 text-xl text-center">
            Alexithymia & Interoception
          </h2>
          
          <ImageWithFallback 
            src="/images/autism/autism-support-TTtab-speech-alex-intero.png"
            alt="Alexithymia and Interoception"
            className={responsiveImageClass}
          />
          
          <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-grow">
            <strong>Alexithymia</strong> is the difficulty in identifying and describing one's own emotions. This is closely tied to <strong>Interoception</strong>, the hidden sense that allows us to feel our internal body signals (like hunger, heart rate, or a full bladder). 
          </p>
          <p className="text-sm text-gray-700 leading-relaxed bg-[#f0f9ff] p-3 rounded border border-[#0A9DC4]/20">
            A speech therapist cannot simply ask, <em>"How do you feel?"</em> if the individual cannot interpret their body's signals. Therapy often involves bridging this gap—using body mapping and visual scales to connect physical sensations (e.g., a tight chest) to vocabulary (e.g., anxiety).
          </p>
        </div>

        {/* Social Pragmatics */}
        <div className="bg-white p-5 rounded-md border-t-4 border-[#ffd166] shadow-sm flex flex-col">
          <h2 className="text-[#0c264d] font-bold mb-3 text-xl text-center">
            Social Pragmatics
          </h2>
          
          <ImageWithFallback 
            src="/images/autism/autism-support-TTtab-speech-double-empath.png"
            alt="Social Pragmatics and Double Empathy"
            className={responsiveImageClass}
          />
          
          <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-grow">
            Historically, "social skills training" forced autistic individuals to mimic neurotypical behaviors (like forcing eye contact), which leads to exhausting masking. Modern therapy focuses on the <strong>Double Empathy Problem</strong>—the idea that communication breakdowns happen because autistic and neurotypical people have different, equally valid social languages.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed bg-[#fff9e6] p-3 rounded border border-[#ffd166]/30">
            Affirming pragmatics helps individuals understand neurotypical expectations without forcing them to change who they are, while simultaneously teaching self-advocacy (e.g., <em>"I am listening to you, but making eye contact hurts my brain."</em>).
          </p>
        </div>

      </div>

      {/* Back Button Bottom */}
      <div className="flex justify-end mt-8 mb-6">
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">&larr;</span>
          Back to Therapies
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />

      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Blanc, M. (2012). <i>Natural Language Acquisition on the Autism Spectrum: The Journey from Echolalia to Self-Generated Language</i>. Communication Development Center.</p>
            <p>2. Prizant, B. M. (1983). "Language acquisition and communicative behavior in autism: Toward an understanding of the 'whole' of it." <i>Journal of Speech and Hearing Disorders</i>, 48(3), 296-307.</p>
            <p>3. Stiegler, L. N. (2015). "Examining the echolalia literature: Where do we go from here?" <i>American Journal of Speech-Language Pathology</i>, 24(4), 726-738.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Beukelman, D. R., & Light, J. C. (2020). <i>Augmentative & Alternative Communication: Supporting Children and Adults with Complex Communication Needs</i> (5th ed.). Brookes Publishing.</p>
            <p>Zisk, A. H., & Dalton, E. (2019). "Augmentative and Alternative Communication for Speaking Autistic Adults: Overview and Recommendations." <i>Autism in Adulthood</i>, 1(2), 93-100.</p>
          </div>
        </div>
      </div>

    </div>
  );
}