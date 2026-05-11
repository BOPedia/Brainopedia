import { ImageWithFallback } from '../../../figma/ImageWithFallback';

/* ─── THE GUEST LIST (Interface) ─── */
interface SocialCommunicationProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function SocialCommunication({ setCurrentArticle }: SocialCommunicationProps) {
  return (
    
    <div className="space-y-6">
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social Communication and Interaction Differences</h2>

        <ImageWithFallback
          src="/images/autism/autism-symptoms-SCtab-2facingfaces.png"
          alt="Two faces facing each other representing social communication"
          className="w-48 h-auto float-left mr-6 mb-4 rounded-md border border-gray-300"
        />

        <p className="mb-6">
          Autistic individuals experience persistent differences across social-emotional reciprocity, nonverbal 
          communication, and developing and maintaining relationships. These differences are present 
          from early childhood and affect functioning across contexts.
        </p>
        <div className="clear-both"></div>

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

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />

      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <p className="text-xs text-slate-600 italic pl-2">
            No inline citations for this tab.
          </p>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed pl-2">
            <li>
              American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.
            </li>
            <li>
              Chevallier, C., Kohls, G., Troiani, V., Brodkin, E. S., & Schultz, R. T. (2012). "The social motivation theory of autism." <i>Trends in Cognitive Sciences</i>, 16(4), 231-239.
            </li>
            <li>
              Milton, D. E. M. (2012). "On the ontological status of autism: The 'double empathy problem.'" <i>Disability & Society</i>, 27(6), 883-887.
            </li>
            <li>
              Scheeren, A. M., Koot, H. M., & Begeer, S. (2012). "Social interaction style of children and adolescents with high-functioning autism spectrum disorder." <i>Journal of Autism and Developmental Disorders</i>, 42(10), 2092-2107.
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}