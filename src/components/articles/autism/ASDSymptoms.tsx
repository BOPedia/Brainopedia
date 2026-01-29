import React, { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import { ASDReferences } from './ASDReferences';

interface ASDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function ASDSymptoms({ setCurrentArticle }: ASDSymptomsProps) {
  const [activeTab, setActiveTab] = useState('core');

  const tabs = [
    { id: 'core', label: 'Core Symptoms', emoji: '' },
    { id: 'social', label: 'Social Communication', emoji: '' },
    { id: 'repetitive', label: 'Restricted/Repetitive Behaviors', emoji: '' },
    { id: 'additional', label: 'Additional Characteristics', emoji: '' },
    { id: 'strengths', label: 'Strengths & Abilities', emoji: '' },
  ];

  // Example data for interactive symptom radar chart
  const symptomData = [
    { category: 'Social Issues', value: 7, fullMark: 10 },
    { category: 'Communication', value: 6, fullMark: 10 },
    { category: 'Restricted Interests', value: 8, fullMark: 10 },
    { category: 'Sensory Processing', value: 9, fullMark: 10 },
    { category: 'Stimming', value: 5, fullMark: 10 },
    { category: 'Need for Routine', value: 8, fullMark: 10 },
    { category: 'Executive Function', value: 6, fullMark: 10 },
    { category: 'Motor Skills', value: 4, fullMark: 10 },
    { category: 'Anxiety', value: 7, fullMark: 10 },
    { category: 'Depression', value: 5, fullMark: 10 },
    { category: 'Dysregulation', value: 6, fullMark: 10 },
    { category: 'Posture Issues', value: 3, fullMark: 10 },
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
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex items-center justify-between">
        <h1 className="text-3xl">
          Autism: Symptoms & Characteristics
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
        {/* Core Symptoms Tab */}
        {activeTab === 'core' && (
          <div className="space-y-6">
            {/* Introduction */}
            <div className="bg-[#f0f9ff] p-6 rounded-lg">
              <p className="mb-4">
                The characteristics of autism spectrum disorder are highly variable, but they fall into two main 
                categories as defined by the DSM-5: persistent differences in social communication and interaction, 
                and restricted, repetitive patterns of behavior, interests, or activities.<sup>[1]</sup> Understanding 
                these characteristics is essential for recognition, diagnosis, and appropriate support.
              </p>
              
              <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
                <p className="text-sm">
                  <strong>∞ Remember:</strong> These characteristics exist on a spectrum with tremendous variation between individuals. 
                  No two autistic people present exactly the same way.
                </p>
              </div>
            </div>

            {/* DSM-5 Symptom Chart */}
            <div className="bg-[#f0f9ff] p-6 rounded-lg">
              <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">DSM-5 Diagnostic Categories</h2>
              <div className="flex justify-center mb-6">
                <img 
                  src={definingAutismImage} 
                  alt="Defining Autism - DSM-5 diagnostic criteria showing social communication and repetitive behaviors"
                  className="w-full max-w-3xl h-auto rounded-md border border-gray-300"
                />
              </div>
              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Two Core Diagnostic Domains</h3>
                <p className="text-sm mb-4">
                  According to the DSM-5, autism spectrum disorder is characterized by persistent deficits in two main areas:<sup>[1]</sup>
                </p>
                <div className="space-y-3">
                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">1. Social Communication and Social Interaction</div>
                    <div className="text-sm">Persistent differences across multiple contexts in social-emotional reciprocity, nonverbal communication, and developing/maintaining relationships</div>
                  </div>
                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">2. Restricted, Repetitive Patterns of Behavior, Interests, or Activities</div>
                    <div className="text-sm">At least two of: stereotyped/repetitive movements or speech, insistence on sameness, highly restricted interests, or hyper/hypo-reactivity to sensory input</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Variation Across the Spectrum */}
            <div className="bg-[#f0f9ff] p-6 rounded-lg">
              <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Variation Across the Spectrum</h2>
              
              <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mb-4">
                <h3 className="text-center text-[#0c264d] font-bold mb-4">Remember: No Two Autistic People Are Alike</h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p>• Some autistic people are nonspeaking; others are highly verbal</p>
                  <p>• Some have intellectual disabilities; others have average or above-average intelligence</p>
                  <p>• Some require 24/7 support; others live independently</p>
                  <p>• Some have obvious, visible characteristics; others appear "neurotypical"</p>
                  <p>• Characteristics can change over time and vary by context</p>
                  <p className="italic mt-4">"If you've met one person with autism, you've met one person with autism." — Dr. Stephen Shore</p>
                </div>
              </div>

              <p className="mb-4">
                The autism spectrum encompasses tremendous diversity. Characteristics vary in:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li className="mb-2"><strong>Presence:</strong> Not all autistic people have all characteristics</li>
                <li className="mb-2"><strong>Severity:</strong> Characteristics can be mild, moderate, or severe</li>
                <li className="mb-2"><strong>Context:</strong> Challenges may be more apparent in some situations than others</li>
                <li className="mb-2"><strong>Age:</strong> Presentation changes across development</li>
                <li className="mb-2"><strong>Support:</strong> Appropriate accommodations can dramatically reduce functional impact</li>
                <li className="mb-2"><strong>Masking:</strong> Some autistic people, especially women, mask or camouflage traits, which can hide difficulties</li>
              </ul>
            </div>
          </div>
        )}

        {/* Social Communication Tab */}
        {activeTab === 'social' && (
          <div className="space-y-6">
            <div className="bg-[#f0f9ff] p-6 rounded-lg">
              <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social Communication and Interaction Differences</h2>
              
              <p className="mb-6">
                Autistic individuals experience persistent differences across social-emotional reciprocity, nonverbal 
                communication, and developing and maintaining relationships. These differences are present 
                from early childhood and affect functioning across contexts.
              </p>
              
              <div className="flex justify-center mb-6">
                <ImageWithFallback 
                  src={socialEmotionalImage} 
                  alt="Social communication in autism"
                  className="w-80 h-auto rounded-md border border-gray-300"
                />
              </div>

              {/* Social-Emotional Reciprocity */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Social-Emotional Reciprocity</h3>
                <p className="mb-4 text-sm">
                  Social-emotional reciprocity refers to the back-and-forth flow of social interaction. Autistic people may experience challenges with:
                </p>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Conversation Flow</div>
                      <div className="text-sm">Difficulty with turn-taking in conversation, knowing when to speak or listen, or maintaining topic relevance</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Sharing Interests</div>
                      <div className="text-sm">Limited sharing of interests, emotions, or achievements with others</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Emotional Expression</div>
                      <div className="text-sm">Differences in expressing or responding to emotions; may have difficulty reading others' emotional states</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Social Initiation</div>
                      <div className="text-sm">Reduced initiation of social interactions; may appear uninterested in others or prefer solitary activities</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Response to Social Approaches</div>
                      <div className="text-sm">Unusual responses when others initiate interaction; may not respond to their name, ignore social bids, or respond in unexpected ways</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nonverbal Communication */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Nonverbal Communication Differences</h3>
                <p className="mb-4 text-sm">
                  Nonverbal communication includes all the unspoken aspects of interaction—body language, facial expressions, eye contact, and gestures.
                </p>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Eye Contact Differences</div>
                      <div className="text-sm">Reduced, fleeting, or atypical eye contact; some find eye contact uncomfortable or overwhelming</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Facial Expression</div>
                      <div className="text-sm">Limited facial expressions or expressions that don't match internal emotions</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Body Language</div>
                      <div className="text-sm">Unusual body postures, limited use of gestures, or difficulty interpreting others' body language</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Gesture Use</div>
                      <div className="text-sm">Reduced pointing, showing, or other communicative gestures</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Integration</div>
                      <div className="text-sm">Difficulty integrating verbal and nonverbal communication—what they say may not match their facial expression or tone</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Developing and Maintaining Relationships */}
              <div className="bg-white p-5 rounded-md border-2 border-[#0c264d] mb-4">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Developing and Maintaining Relationships</h3>
                <p className="mb-3 text-sm">
                  Many autistic people experience challenges in forming and sustaining relationships, though this varies widely across the spectrum:
                </p>
                
                <div className="space-y-2">
                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="text-sm"><strong>Friendship Formation:</strong> Difficulty making friends, understanding friendship "rules," or knowing how to approach peers</div>
                  </div>
                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="text-sm"><strong>Social Imagination:</strong> Challenges with imaginative or pretend play, especially cooperative pretend play with peers</div>
                  </div>
                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="text-sm"><strong>Adjusting Behavior:</strong> Difficulty adapting behavior to different social contexts (school vs. home, formal vs. casual)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Repetitive Behaviors Tab */}
        {activeTab === 'repetitive' && (
          <div className="space-y-6">
            <div className="bg-[#f0f9ff] p-6 rounded-lg">
              <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Restricted, Repetitive Patterns of Behavior, Interests, or Activities</h2>
              
              <p className="mb-6">
                Autistic individuals display at least two of the following types of restricted, repetitive patterns:<sup>[1]</sup>
              </p>
              
              <div className="flex justify-center mb-6">
                <ImageWithFallback 
                  src={repetitivePatternsImage} 
                  alt="Repetitive behaviors and patterns"
                  className="w-64 h-auto rounded-md border border-gray-300"
                />
              </div>

              {/* Stereotyped or Repetitive Movements, Speech, or Object Use */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Stereotyped or Repetitive Movements, Speech, or Object Use</h3>
                <p className="mb-4 text-sm">
                  These behaviors, often called "stimming" (self-stimulatory behaviors), serve various functions including 
                  self-regulation, expressing emotions, or responding to sensory input.
                </p>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Motor Stereotypies</div>
                      <div className="text-sm">Hand flapping, rocking, spinning, jumping, finger flicking</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Vocal Stereotypies</div>
                      <div className="text-sm">Echolalia (repeating words or phrases), scripting from movies/books, repetitive vocalizations or sounds</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Object Use</div>
                      <div className="text-sm">Lining up toys, spinning wheels repeatedly, flicking strings or objects in peripheral vision</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Simple Repetitive Movements</div>
                      <div className="text-sm">Body rocking, head banging, finger movements in front of eyes</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Note</div>
                      <div className="text-sm">Stimming often serves important regulatory functions and shouldn't automatically be suppressed unless it's harmful.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insistence on Sameness and Inflexible Adherence to Routines */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Insistence on Sameness and Inflexible Adherence to Routines</h3>
                <p className="mb-4 text-sm">
                  Many autistic individuals find comfort and security in predictability and sameness.
                </p>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Rigid Routines</div>
                      <div className="text-sm">Needing to follow the same sequence of activities; distress when routines are disrupted</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Ritualized Patterns</div>
                      <div className="text-sm">Specific ways of doing things (eating foods in certain order, taking exact same route)</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Difficulty with Transitions</div>
                      <div className="text-sm">Extreme distress when changing activities or moving to new environments</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Need for Sameness</div>
                      <div className="text-sm">Preference for same foods, clothes, environments; resistance to change or novelty</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Verbal Rituals</div>
                      <div className="text-sm">Needing to ask the same questions repeatedly or have conversations follow specific scripts</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highly Restricted, Fixated Interests */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Highly Restricted, Fixated Interests</h3>
                <p className="mb-4 text-sm">
                  Special interests are a hallmark feature of autism and can be a source of joy, expertise, and identity.
                </p>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Intensity</div>
                      <div className="text-sm">Passionate, all-consuming focus on specific topics with depth of knowledge exceeding typical interest</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Unusual Focus</div>
                      <div className="text-sm">Interests in topics, objects, or activities that are atypical for age or culture (train schedules, vacuum cleaners, specific historical periods)</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Persistence</div>
                      <div className="text-sm">Interests may last months, years, or a lifetime; talking about the interest extensively</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Collecting and Categorizing</div>
                      <div className="text-sm">Collecting objects related to interests, organizing and categorizing information</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Expertise</div>
                      <div className="text-sm">Development of exceptional knowledge or skills in area of interest</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Note</div>
                      <div className="text-sm">Special interests can be leveraged for learning, career development, social connection with like-minded individuals, and quality of life.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hyper- or Hyporeactivity to Sensory Input */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Hyper- or Hyporeactivity to Sensory Input</h3>
                <p className="mb-4 text-sm">
                  Sensory differences are extremely common in autism and can significantly impact daily functioning.
                </p>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Hypersensitivity (over-responsiveness)</div>
                      <div className="text-sm">Overwhelmed by loud sounds, bright lights, strong smells, or certain textures</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Pain Sensitivity</div>
                      <div className="text-sm">Pain sensitivity to sounds (auditory pain from everyday noises)</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Avoidance</div>
                      <div className="text-sm">Avoidance of touch, certain clothing fabrics, or food textures</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Difficulty in Busy Environments</div>
                      <div className="text-sm">Difficulty in busy, stimulating environments (stores, crowds)</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Sensory Overload</div>
                      <div className="text-sm">Sensory overload leading to meltdowns or shutdown</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Hyposensitivity (under-responsiveness)</div>
                      <div className="text-sm">Seeking intense sensory experiences (loud music, strong flavors, tight hugs)</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">High Pain Tolerance</div>
                      <div className="text-sm">High pain tolerance or not noticing injuries</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Seeking Movement</div>
                      <div className="text-sm">Seeking movement (spinning, jumping, crashing into things)</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Fascination with Lights</div>
                      <div className="text-sm">Fascination with lights, movement, or visual patterns</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Mouthing Objects</div>
                      <div className="text-sm">Mouthing objects or seeking oral input beyond typical age</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Unusual Sensory Interests</div>
                      <div className="text-sm">Fascination with specific textures, sounds, or visual stimuli</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Smelling Objects</div>
                      <div className="text-sm">Smelling objects or people excessively</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Staring at Lights</div>
                      <div className="text-sm">Staring at lights, fans, or spinning objects</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Seeking Tactile Sensations</div>
                      <div className="text-sm">Seeking specific tactile sensations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Additional Characteristics Tab */}
        {activeTab === 'additional' && (
          <div className="space-y-6">
            <div className="bg-[#f0f9ff] p-6 rounded-lg">
              <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Additional Common Characteristics</h2>
              
              <p className="mb-6">
                While not part of the core diagnostic criteria, many autistic individuals share additional characteristics:
              </p>
              
              <div className="flex justify-center mb-6">
                <img 
                  src={colorWheelImage} 
                  alt="Diverse spectrum of characteristics in autism"
                  className="w-64 h-auto rounded-md border border-gray-300"
                />
              </div>

              {/* Executive Function Differences */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Executive Function Differences</h3>
                <p className="mb-4 text-sm">
                  Challenges in planning, organization, cognitive flexibility, working memory, and initiation.
                </p>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Planning and Organization</div>
                      <div className="text-sm">Difficulty planning multi-step tasks, organizing materials, or managing time</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Cognitive Flexibility</div>
                      <div className="text-sm">Challenges with shifting attention, adapting to changes, or seeing alternative perspectives</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Working Memory</div>
                      <div className="text-sm">Difficulty holding and manipulating information in mind</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Initiation</div>
                      <div className="text-sm">Trouble starting tasks, especially open-ended or ambiguous ones</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Language and Communication Patterns */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Language and Communication Patterns</h3>
                <p className="mb-4 text-sm">
                  Challenges in literal interpretation, pragmatic language, monologuing, prosody, and echolalia.
                </p>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Literal Interpretation</div>
                      <div className="text-sm">Taking language literally, missing sarcasm, idioms, or implied meaning</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Pragmatic Language</div>
                      <div className="text-sm">Difficulty with the social use of language—knowing what to say when, to whom, and how</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Monologuing</div>
                      <div className="text-sm">Speaking at length about special interests without recognizing listener engagement</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Prosody Differences</div>
                      <div className="text-sm">Unusual rhythm, pitch, or intonation; may sound flat, robotic, or overly formal</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Echolalia</div>
                      <div className="text-sm">Repeating heard words or phrases, which can be immediate or delayed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emotional Regulation and Processing */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Emotional Regulation and Processing</h3>
                <p className="mb-4 text-sm">
                  Challenges in emotional intensity, alexithymia, meltdowns, and shutdowns.
                </p>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Emotional Intensity</div>
                      <div className="text-sm">Experiencing emotions very intensely</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Alexithymia</div>
                      <div className="text-sm">Difficulty identifying and describing one's own emotions (common in ~50% of autistic people)<sup>[50]</sup></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Meltdowns</div>
                      <div className="text-sm">Overwhelming emotional responses when capacity is exceeded, different from tantrums</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Shutdowns</div>
                      <div className="text-sm">Withdrawing and becoming nonverbal or nonresponsive when overwhelmed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Motor Skills and Coordination */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Motor Skills and Coordination</h3>
                <p className="mb-4 text-sm">
                  Challenges in motor coordination, motor planning, and unusual gait or movements.
                </p>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Motor Coordination</div>
                      <div className="text-sm">Challenges with gross or fine motor skills, handwriting, or coordination</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Motor Planning</div>
                      <div className="text-sm">Difficulty planning and executing physical movements (dyspraxia is common)</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Unusual Gait or Movements</div>
                      <div className="text-sm">Walking on toes, unusual postures, or movement patterns</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Understanding Individual Profiles */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Understanding Individual Profiles</h3>
                <p className="mb-4 text-sm">
                  Each autistic person has a unique profile of characteristics, and these can vary significantly in intensity. 
                  These visual representations show how different characteristics can be rated on a scale from 0 to 10, 
                  where 0 indicates the characteristic is not present or causes no difficulty, and 10 represents the maximum 
                  level of impact or challenge. This personalized approach helps in understanding individual support needs 
                  and recognizing the tremendous diversity within the autism spectrum.
                </p>
              </div>

              {/* Interactive Symptom Profile Chart */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mt-6">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Interactive Symptom Profile Chart</h3>
                
                <p className="mb-4 text-sm">
                  Below is an interactive visual example of one individual's symptom profile. Each person's chart will 
                  look different, reflecting their unique combination of characteristics and support needs.
                </p>

                <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
                  <p className="text-sm mb-2">
                    <strong>How to Read This Chart:</strong>
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Center (0):</strong> The characteristic is not present or causes no difficulty</li>
                    <li>• <strong>Outer edge (10):</strong> Maximum level of impact or challenge in that area</li>
                    <li>• <strong>Each spoke:</strong> Represents a different symptom category (12 total)</li>
                    <li>• <strong>The colored area:</strong> Shows an example individual's profile across all categories</li>
                    <li>• <strong>Hover over the chart:</strong> See exact values for each category</li>
                    <li>• <strong>Different patterns:</strong> Everyone's chart looks different—no two autistic people have the same profile!</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-2 border-[#2abcd4]">
                  <ResponsiveContainer width="100%" height={500}>
                    <RadarChart data={symptomData}>
                      <PolarGrid stroke="#2abcd4" strokeWidth={1.5} />
                      <PolarAngleAxis 
                        dataKey="category" 
                        tick={{ fill: '#0c264d', fontSize: 12, fontWeight: 'bold' }}
                      />
                      <PolarRadiusAxis 
                        angle={105} 
                        domain={[0, 10]} 
                        tick={{ fill: '#0c264d', fontSize: 11 }}
                        tickCount={6}
                      />
                      <Radar
                        name="Example Profile"
                        dataKey="value"
                        stroke="#2abcd4"
                        fill="#2abcd4"
                        fillOpacity={0.6}
                        strokeWidth={2}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#fff', 
                          border: '2px solid #2abcd4',
                          borderRadius: '8px',
                          padding: '10px'
                        }}
                        labelStyle={{ color: '#0c264d', fontWeight: 'bold' }}
                      />
                      <Legend 
                        wrapperStyle={{ paddingTop: '20px' }}
                        iconType="circle"
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-[#f0f9ff] p-4 rounded mt-6">
                  <p className="text-sm">
                    <strong>Why This Matters:</strong> Understanding that autism presents differently in every individual 
                    helps clinicians, educators, and families provide personalized support. This chart format is commonly 
                    used by professionals to visualize assessment results and track changes over time. The example shown 
                    demonstrates how one person might have significant sensory processing challenges (9/10) while having 
                    minimal posture issues (3/10)—highlighting the heterogeneity of the autism spectrum.
                  </p>
                </div>
              </div>

              {/* Static Symptom Wheel Image */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mt-6">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Symptom Profile Wheel</h3>
                <p className="mb-4 text-sm">
                  Here is another visual example of how an individual's symptom profile might look across different 
                  characteristic categories.
                </p>
                
                <div className="flex justify-center my-6">
                  <img 
                    src={symptomChartImage} 
                    alt="Autism symptom severity chart showing various characteristic categories on a 0-10 scale"
                    className="w-full max-w-3xl h-auto rounded-md border border-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Strengths & Abilities Tab */}
        {activeTab === 'strengths' && (
          <div className="space-y-6">
            <div className="bg-[#f0f9ff] p-6 rounded-lg">
              <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Autistic Strengths and Abilities</h2>
              
              <p className="mb-4">
                While autism is often framed through deficits, many autistic individuals possess notable strengths:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li className="mb-2"><strong>Attention to detail:</strong> Noticing patterns, details, and discrepancies others miss</li>
                <li className="mb-2"><strong>Systematic thinking:</strong> Ability to understand complex systems and logical patterns</li>
                <li className="mb-2"><strong>Deep focus:</strong> Hyperfocus on areas of interest leading to expertise</li>
                <li className="mb-2"><strong>Honesty and directness:</strong> Straightforward communication, genuine authenticity</li>
                <li className="mb-2"><strong>Visual thinking:</strong> Strong visual-spatial skills in many autistic individuals</li>
                <li className="mb-2"><strong>Memory:</strong> Exceptional memory for facts, patterns, or areas of interest</li>
                <li className="mb-2"><strong>Creative thinking:</strong> Unique perspectives and innovative problem-solving approaches</li>
                <li className="mb-2"><strong>Loyalty and consistency:</strong> Deep commitment to people, values, and interests</li>
              </ul>
              <p className="mb-4">
                Recognizing and cultivating strengths while providing support for challenges is essential for helping 
                autistic individuals thrive.
              </p>

              <div className="flex justify-center my-6">
                <img 
                  src={strengthsMandalaImage} 
                  alt="Mandala representing various strengths of autistic individuals"
                  className="w-96 h-auto rounded-md border border-gray-300"
                />
              </div>

              <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mt-6">
                <p className="text-sm">
                  <strong>∞ Important:</strong> Autism is a natural neurological variation, not a disease or defect. 
                  With appropriate support, understanding, and accommodations, autistic individuals can lead fulfilling, 
                  meaningful lives and make valuable contributions to society.
                </p>
              </div>
            </div>
          </div>
        )}
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