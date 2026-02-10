interface TherapiesContentProps {
  setCurrentArticle?: (article: string) => void;
}

export function TherapiesContent({ setCurrentArticle }: TherapiesContentProps) {
  return (
    <>
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Therapeutic Interventions</h2>
        
        <p className="mb-6">
          Various therapeutic interventions can support autistic individuals across the lifespan. The most beneficial 
          approach is highly individualized and should be based on the person's specific strengths, challenges, and 
          goals—not on trying to make someone appear less autistic.<sup>[11]</sup>
        </p>

        <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Speech and Language Therapy</h3>
          <p className="mb-4">
            Speech-language pathologists (SLPs) help with all forms of communication—verbal, nonverbal, and alternative.<sup>[12]</sup> They work on expressive and receptive language, pragmatic (social) language skills, and may provide AAC systems for nonspeaking individuals or address feeding difficulties related to sensory processing.
          </p>
          <button onClick={() => setCurrentArticle?.('autism-speech-therapy')} className="text-[#10b981] hover:underline font-semibold">
            Read more about Speech and Language Therapy →
          </button>
        </div>

        <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Occupational Therapy (OT)</h3>
          <p className="mb-4">
            Occupational therapists help with sensory processing, motor coordination, self-care skills, and participation in daily activities.<sup>[13]</sup> They may work on sensory integration, fine and gross motor skills, executive functioning strategies, and identifying helpful accommodations like sensory tools or environmental modifications.
          </p>
          <button onClick={() => setCurrentArticle?.('autism-occupational-therapy')} className="text-[#10b981] hover:underline font-semibold">
            Read more about Occupational Therapy →
          </button>
        </div>

        <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Applied Behavior Analysis (ABA)</h3>
          <p className="mb-4">
            ABA uses behavioral principles to teach skills and is one of the most researched autism interventions.<sup>[14][15][16]</sup> However, it's also controversial—many autistic adults report trauma from compliance-focused ABA that targeted harmless autistic behaviors.<sup>[17]</sup> Modern approaches emphasize naturalistic, play-based methods that respect autonomy and neurodiversity.<sup>[18]</sup>
          </p>
          <button onClick={() => setCurrentArticle?.('autism-aba-therapy')} className="text-[#10b981] hover:underline font-semibold">
            Read more about ABA Therapy →
          </button>
        </div>

        <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Skills Support</h3>
          <p className="mb-4">
            Social skills interventions teach interaction strategies while respecting autistic communication styles.<sup>[19]</sup> This includes social skills groups, peer-mediated interventions, social stories, and video modeling.<sup>[20][21][22]</sup> Neurodiversity-informed approaches recognize the "double empathy problem"—that social challenges are bidirectional between autistic and non-autistic people.<sup>[23]</sup>
          </p>
          <button onClick={() => setCurrentArticle?.('autism-social-skills')} className="text-[#10b981] hover:underline font-semibold">
            Read more about Social Skills Support →
          </button>
        </div>

        <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mental Health Support</h3>
          <p className="mb-4">
            Autistic individuals have elevated rates of anxiety, depression, and other mental health conditions.<sup>[24]</sup> Autism-informed therapists adapt evidence-based approaches like CBT, ACT, and DBT for autistic thinking styles and sensory needs.<sup>[25][26][27]</sup> Trauma-informed care is especially important, as many autistic people have experienced bullying, abuse, or invalidating experiences.
          </p>
          <button onClick={() => setCurrentArticle?.('autism-mental-health')} className="text-[#10b981] hover:underline font-semibold">
            Read more about Mental Health Support →
          </button>
        </div>

        {/* Choosing the Right Approach */}
        <div className="mt-8 mb-8">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Choosing the Right Approach</h2>
          
          <p className="mb-6">
            Not every autistic person needs every type of therapy. The right combination depends on individual needs, goals, 
            and priorities.<sup>[28]</sup>
          </p>

          <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Decision-Making Framework</h3>
            <p className="mb-6 text-sm">
              Choosing therapeutic approaches requires thoughtful consideration of individual needs, preferences, and 
              circumstances. A person-centered framework prioritizes autonomy, quality of life, and respect for 
              neurodivergent ways of being.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Start with Priorities</h4>
                </div>
                <p className="text-sm">
                  What skills or supports would most improve quality of life right now? Focus on meaningful goals 
                  rather than conformity.
                </p>
              </div>

              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Listen to Autistic Voices</h4>
                </div>
                <p className="text-sm">
                  If the individual can communicate their preferences, center their input. Their lived experience 
                  is invaluable.
                </p>
              </div>

              <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Consider Intensity</h4>
                </div>
                <p className="text-sm">
                  More hours isn't always better. Balance therapy with rest, play, and family time to avoid 
                  burnout and overwhelm.
                </p>
              </div>

              <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">♾️</span>
                  <h4 className="text-[#0c264d] font-bold text-lg">Affirming Providers</h4>
                </div>
                <p className="text-sm">
                  Seek therapists who respect autistic neurology and don't pathologize harmless differences like 
                  stimming or special interests.
                </p>
              </div>

              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Monitor for Harm</h4>
                </div>
                <p className="text-sm">
                  Watch for increased anxiety, shutdowns, loss of skills, or resistance to therapy. These are 
                  signs something isn't working.
                </p>
              </div>

              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">You Can Change Course</h4>
                </div>
                <p className="text-sm">
                  Starting one approach doesn't mean you're locked in forever. Flexibility and adjustment are 
                  part of the process.
                </p>
              </div>
            </div>
          </div>

          {/* Red Flags in Therapy */}
          <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Red Flags to Watch For</h3>
            
            <p className="mb-6 text-sm">
              Some therapy goals and methods can be harmful. Be cautious of approaches that prioritize appearance 
              over well-being, or compliance over autonomy.<sup>[29]</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-center mb-3">
                </div>
                <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Masking & Conformity</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Making person appear "less autistic"</li>
                  <li>• "Indistinguishable from peers" goals</li>
                  <li>• Targeting harmless stims or interests</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-center mb-3">
                </div>
                <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Forced Discomfort</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Forcing eye contact</li>
                  <li>• Forcing physical touch</li>
                  <li>• Ignoring sensory boundaries</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-center mb-3">
                </div>
                <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Punishment & Aversives</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Using punishment methods</li>
                  <li>• Withholding necessities</li>
                  <li>• Aversive conditioning</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-center mb-3">
                </div>
                <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Dismissing Autonomy</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Prioritizing compliance over communication</li>
                  <li>• Dismissing distress as "behavior"</li>
                  <li>• Excluding individual from goal-setting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
