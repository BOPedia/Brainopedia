interface ASDSocialSkillsProps {
  setCurrentArticle?: (article: string) => void;
}

export function ASDSocialSkills({ setCurrentArticle }: ASDSocialSkillsProps) {
  return (
    <div className="max-w-4xl">
      {/* Header with back button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex items-center justify-between">
        <h1 className="text-[#0c264d] text-3xl">Social Skills Support for Autism</h1>

        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          Therapies & Treatment
        </button>
      </div>

      <div className="mb-8">
        <p className="text-lg mb-4">
          Social communication differences are a core feature of autism, but "teaching social skills" requires careful 
          consideration of whose social norms we're teaching and why.<sup className="text-[#10b981]">[1][2][3]</sup> This guide explores evidence-based 
          approaches to social support that respect autistic social differences while building meaningful connections.
        </p>
      </div>

      {/* SECTION: Understanding Autistic Social Communication */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Understanding Autistic Social Communication</h2>
        
        <p className="mb-6">
          Autistic individuals communicate and socialize differently, not deficiently.<sup className="text-[#10b981]">[4][5]</sup> Recent research on 
          the "double empathy problem" shows that communication breakdowns happen equally when autistic and non-autistic 
          people interact—it's a mutual misunderstanding, not a one-sided deficit.<sup className="text-[#10b981]">[6][7][8]</sup>
        </p>

        {/* The Double Empathy Problem - highlighted callout */}
        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-5 rounded mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Double Empathy Problem</h3>
          <p className="mb-3">
            Research by Damian Milton and others demonstrates:<sup className="text-[#10b981]">[9][10]</sup>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✓</span>
              <span className="text-sm">Autistic people communicate effectively with other autistic people<sup className="text-[#10b981]">[11][12]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✓</span>
              <span className="text-sm">Non-autistic people struggle to understand autistic communication<sup className="text-[#10b981]">[13]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✓</span>
              <span className="text-sm">The "empathy deficit" is bidirectional, not unique to autism<sup className="text-[#10b981]">[14][15]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✓</span>
              <span className="text-sm">Different neurotypes have different communication styles, both valid<sup className="text-[#10b981]">[16]</sup></span>
            </div>
          </div>
        </div>

        {/* Common Autistic Social Characteristics */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-4">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Common Autistic Social Characteristics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-2 border-[#0c264d] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Literal Communication<sup className="text-[#10b981]">[17]</sup></div>
              <div className="text-sm">Preferring direct, explicit language over hints and implications</div>
            </div>
            <div className="border-l-2 border-[#0c264d] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Deep Interests<sup className="text-[#10b981]">[18]</sup></div>
              <div className="text-sm">Wanting to discuss special interests in depth</div>
            </div>
            <div className="border-l-2 border-[#0c264d] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Reduced Small Talk<sup className="text-[#10b981]">[19]</sup></div>
              <div className="text-sm">Finding casual conversation less meaningful</div>
            </div>
            <div className="border-l-2 border-[#0c264d] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Different Nonverbal Communication<sup className="text-[#10b981]">[20][21]</sup></div>
              <div className="text-sm">Atypical body language, facial expressions, eye contact patterns</div>
            </div>
            <div className="border-l-2 border-[#0c264d] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Parallel Play/Activity<sup className="text-[#10b981]">[22]</sup></div>
              <div className="text-sm">Enjoying being near others without constant interaction</div>
            </div>
            <div className="border-l-2 border-[#0c264d] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Honest Communication<sup className="text-[#10b981]">[23]</sup></div>
              <div className="text-sm">Difficulty with white lies or social scripts</div>
            </div>
          </div>
        </div>

        <p className="text-sm italic">
          These differences are not inherently problematic—they become challenges primarily when navigating a predominantly 
          neurotypical social world.<sup className="text-[#10b981]">[24][25]</sup>
        </p>
      </div>

      {/* SECTION: Meaningful Goals */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Meaningful Goals for Social Support</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Neurodiversity-Affirming Goals */}
          <div className="bg-white p-5 rounded-md border-2 border-[#10b981] shadow-md">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg flex items-center gap-2">
              <span className="text-2xl">✓</span> Neurodiversity-Affirming Goals
            </h3>
            <p className="mb-3 text-sm">
              Social skills intervention should prioritize:<sup className="text-[#10b981]">[26][27]</sup>
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#10b981] font-bold">✓</span>
                <span className="text-sm"><strong>Safety and boundaries:</strong> Recognizing manipulation, understanding consent, protecting oneself<sup className="text-[#10b981]">[28][29]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#10b981] font-bold">✓</span>
                <span className="text-sm"><strong>Functional communication:</strong> Making wants and needs known effectively<sup className="text-[#10b981]">[30]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#10b981] font-bold">✓</span>
                <span className="text-sm"><strong>Friendship skills:</strong> Connecting with people who share interests<sup className="text-[#10b981]">[31]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#10b981] font-bold">✓</span>
                <span className="text-sm"><strong>Understanding neurotypical culture:</strong> Navigating the dominant culture when needed<sup className="text-[#10b981]">[32]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#10b981] font-bold">✓</span>
                <span className="text-sm"><strong>Self-advocacy:</strong> Communicating needs and requesting accommodations<sup className="text-[#10b981]">[33][34]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#10b981] font-bold">✓</span>
                <span className="text-sm"><strong>Perspective-taking:</strong> Understanding that others have different thoughts and feelings<sup className="text-[#10b981]">[35]</sup></span>
              </div>
            </div>
          </div>

          {/* Goals to Reconsider */}
          <div className="bg-white p-5 rounded-md border-2 border-[#0c264d] shadow-md">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg flex items-center gap-2">
              <span className="text-2xl">✗</span> Goals to Reconsider
            </h3>
            <p className="mb-3 text-sm">
              Avoid targeting behaviors that serve important functions:<sup className="text-[#10b981]">[36]</sup>
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#0c264d] font-bold">✗</span>
                <span className="text-sm">Forcing eye contact (uncomfortable and unnecessary for communication)<sup className="text-[#10b981]">[37][38]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0c264d] font-bold">✗</span>
                <span className="text-sm">Eliminating special interests (source of joy and potential career)<sup className="text-[#10b981]">[39]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0c264d] font-bold">✗</span>
                <span className="text-sm">Teaching masking (hiding autistic traits, associated with burnout and poor mental health)<sup className="text-[#10b981]">[40][41][42]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0c264d] font-bold">✗</span>
                <span className="text-sm">Enforcing neurotypical conversational norms without explaining why<sup className="text-[#10b981]">[43]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0c264d] font-bold">✗</span>
                <span className="text-sm">Preventing "inappropriate" friendships (age/developmental level match over chronological age)<sup className="text-[#10b981]">[44]</sup></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Evidence-Based Interventions */}
      <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Evidence-Based Social Interventions</h2>

        <p className="mb-6">
          Structured groups that teach social concepts and provide practice opportunities.<sup className="text-[#10b981]">[45][46]</sup>
        </p>

        {/* PEERS */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">PEERS® (Program for the Education and Enrichment of Relational Skills)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#f0f9ff] p-3 rounded">
              <div className="font-bold text-[#0c264d] mb-2 text-sm">Age Ranges</div>
              <div className="text-sm">Separate curricula for teens and young adults<sup className="text-[#10b981]">[47]</sup></div>
            </div>
            <div className="bg-[#f0f9ff] p-3 rounded">
              <div className="font-bold text-[#0c264d] mb-2 text-sm">Structure</div>
              <div className="text-sm">16-week group program with parent involvement<sup className="text-[#10b981]">[48]</sup></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="text-sm">
              <strong>Topics:</strong> Making friends, managing conflict, handling rejection, dating etiquette<sup className="text-[#10b981]">[49]</sup>
            </div>
            <div className="text-sm">
              <strong>Evidence:</strong> RCT-supported improvements in social skills knowledge and friendships<sup className="text-[#10b981]">[50][51][52]</sup>
            </div>
            <div className="text-sm">
              <strong>Homework:</strong> Real-world practice assignments between sessions<sup className="text-[#10b981]">[53]</sup>
            </div>
          </div>
        </div>

        {/* Social Thinking - with criticism callout */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Thinking® Curriculum</h3>
          
          <div className="mb-4">
            <p className="text-sm mb-2"><strong>Focus:</strong> Teaching "hidden social rules" and perspective-taking<sup className="text-[#10b981]">[54]</sup></p>
            <p className="text-sm"><strong>Concepts:</strong> Thinking about thinking, expected vs. unexpected behaviors, size of the problem<sup className="text-[#10b981]">[55]</sup></p>
          </div>
          
          <div className="bg-[#ffd166] p-3 rounded">
            <p className="text-sm mb-2"><strong>⚠️ Criticism:</strong> Some autistic advocates find it pathologizing and focused on neurotypical approval<sup className="text-[#10b981]">[56]</sup></p>
            <p className="text-sm"><strong>Evidence:</strong> Limited rigorous research support<sup className="text-[#10b981]">[57]</sup></p>
          </div>
        </div>

        {/* Peer-Mediated and Video Modeling side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Peer-Mediated Interventions</h3>
            <p className="text-sm mb-4">
              Training neurotypical peers to interact with and support autistic classmates.<sup className="text-[#10b981]">[58][59]</sup>
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Peer Networks:</strong> Small groups of peers who support inclusion<sup className="text-[#10b981]">[60]</sup></p>
              <p><strong>Buddy Systems:</strong> Pairing autistic students with trained peer partners<sup className="text-[#10b981]">[61]</sup></p>
              <p><strong>Circle of Friends:</strong> Creating a social support circle around an autistic student<sup className="text-[#10b981]">[62]</sup></p>
              <p><strong>Evidence:</strong> Increases social interaction and acceptance<sup className="text-[#10b981]">[63][64][65]</sup></p>
              <p className="italic">Benefit: Addresses double empathy by educating neurotypical peers<sup className="text-[#10b981]">[66]</sup></p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Video Modeling</h3>
            <p className="text-sm mb-4">
              Watching videos of social interactions to learn appropriate responses.<sup className="text-[#10b981]">[67][68]</sup>
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Types:</strong> Basic modeling, point-of-view modeling, video self-modeling<sup className="text-[#10b981]">[69]</sup></p>
              <p><strong>Skills Taught:</strong> Greetings, conversation, play skills, emotional recognition<sup className="text-[#10b981]">[70]</sup></p>
              <p><strong>Evidence:</strong> Moderate support for improving targeted skills<sup className="text-[#10b981]">[71][72]</sup></p>
              <p className="italic">Advantage: Can watch repeatedly, pause, replay without social pressure<sup className="text-[#10b981]">[73]</sup></p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Social Stories and Scripts */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social Stories™ and Social Scripts</h2>
        
        <div className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#0c264d] mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Stories</h3>
          <p className="mb-4">
            Short, personalized stories that describe social situations and appropriate responses, developed by Carol Gray.<sup className="text-[#10b981]">[74][75]</sup>
          </p>
          
          <div className="bg-white p-4 rounded mb-4">
            <h4 className="text-[#0c264d] font-bold mb-3">Components of Social Stories</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="text-sm">
                <strong>Descriptive sentences:</strong> Describe the situation objectively<sup className="text-[#10b981]">[76]</sup>
              </div>
              <div className="text-sm">
                <strong>Perspective sentences:</strong> Describe others' thoughts and feelings<sup className="text-[#10b981]">[77]</sup>
              </div>
              <div className="text-sm">
                <strong>Directive sentences:</strong> Suggest appropriate responses<sup className="text-[#10b981]">[78]</sup>
              </div>
              <div className="text-sm">
                <strong>Written from child's perspective:</strong> First-person, individualized<sup className="text-[#10b981]">[79]</sup>
              </div>
              <div className="text-sm">
                <strong>Positive tone:</strong> Focus on what to do, not just what not to do<sup className="text-[#10b981]">[80]</sup>
              </div>
            </div>
          </div>
          
          <p className="text-sm italic">
            <strong>Evidence:</strong> Widely used but limited rigorous research; small studies show promise for specific situations.<sup className="text-[#10b981]">[81][82][83]</sup>
          </p>
        </div>

        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Scripts</h3>
          <p className="mb-4 text-sm">
            Memorized phrases or sequences for specific social situations.<sup className="text-[#10b981]">[84]</sup>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm mb-2"><strong>Examples:</strong> Greeting someone new, asking to join play, ordering at a restaurant<sup className="text-[#10b981]">[85]</sup></p>
              <p className="text-sm"><strong>Practice:</strong> Role-play until automatic<sup className="text-[#10b981]">[86]</sup></p>
            </div>
            <div>
              <p className="text-sm mb-2"><strong>Limitation:</strong> May not generalize to novel situations<sup className="text-[#10b981]">[87]</sup></p>
              <p className="text-sm"><strong>Benefit:</strong> Reduces cognitive load in familiar situations<sup className="text-[#10b981]">[88]</sup></p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Emotion Recognition and Regulation */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Emotion Recognition and Regulation</h2>
        
        <p className="mb-6">
          Many autistic individuals experience alexithymia (difficulty identifying and describing emotions) and may express 
          emotions differently.<sup className="text-[#10b981]">[89][90][91]</sup>
        </p>

        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Teaching Emotional Awareness</h3>
          
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
              <div>
                <div className="font-bold text-[#0c264d]">Emotion Identification</div>
                <div className="text-sm">Labeling feelings in self and others<sup className="text-[#10b981]">[92]</sup></div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
              <div>
                <div className="font-bold text-[#0c264d]">Visual Supports</div>
                <div className="text-sm">Emotion charts, faces scales, zones of regulation<sup className="text-[#10b981]">[93][94]</sup></div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
              <div>
                <div className="font-bold text-[#0c264d]">Body Awareness</div>
                <div className="text-sm">Connecting physical sensations to emotional states<sup className="text-[#10b981]">[95]</sup></div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
              <div>
                <div className="font-bold text-[#0c264d]">Emotional Vocabulary</div>
                <div className="text-sm">Expanding beyond "happy," "sad," "mad," "scared"<sup className="text-[#10b981]">[96]</sup></div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">5</div>
              <div>
                <div className="font-bold text-[#0c264d]">Regulation Strategies</div>
                <div className="text-sm">Teaching coping skills individualized to the person<sup className="text-[#10b981]">[97]</sup></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Programs Addressing Emotional Skills</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Zones of Regulation:</strong> Categorizing feelings into colored zones and teaching regulation<sup className="text-[#10b981]">[98][99]</sup></p>
            <p><strong>Incredible 5-Point Scale:</strong> Breaking down behaviors and emotions into 5 levels<sup className="text-[#10b981]">[100]</sup></p>
            <p><strong>CBT Adaptations:</strong> Cognitive behavioral therapy modified for autism<sup className="text-[#10b981]">[101][102]</sup></p>
          </div>
        </div>
      </div>

      {/* SECTION: Autistic Peer Groups */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Autistic Peer Groups and Communities</h2>
        
        <p className="mb-6">
          One of the most powerful social supports is connection with other autistic people.<sup className="text-[#10b981]">[103][104]</sup>
        </p>

        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-5 rounded mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Benefits of Autistic Peer Connection</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✓</span>
              <span className="text-sm">Communication flows more easily between autistic peers<sup className="text-[#10b981]">[105][106]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✓</span>
              <span className="text-sm">Shared experiences reduce isolation<sup className="text-[#10b981]">[107]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✓</span>
              <span className="text-sm">Modeling from autistic role models<sup className="text-[#10b981]">[108]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✓</span>
              <span className="text-sm">Development of positive autistic identity<sup className="text-[#10b981]">[109][110]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✓</span>
              <span className="text-sm">Mutual understanding without constant explanation<sup className="text-[#10b981]">[111]</sup></span>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Finding Autistic Community</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="text-sm">
              <strong>Online Communities:</strong> Forums, social media groups, Discord servers<sup className="text-[#10b981]">[112]</sup>
            </div>
            <div className="text-sm">
              <strong>Local Autism Groups:</strong> Many areas have autistic-led social groups<sup className="text-[#10b981]">[113]</sup>
            </div>
            <div className="text-sm">
              <strong>Interest-Based Groups:</strong> Connect through shared special interests<sup className="text-[#10b981]">[114]</sup>
            </div>
            <div className="text-sm">
              <strong>Autism Conferences:</strong> Autistic-friendly events and gatherings<sup className="text-[#10b981]">[115]</sup>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: School-Based Social Support */}
      <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social Support in School Settings</h2>
        
        <div className="bg-white p-5 rounded-md shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">IEP Social Goals</h3>
          <p className="mb-3 text-sm">
            Appropriate social goals in IEPs might include:<sup className="text-[#10b981]">[116]</sup>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="text-sm">• Initiating interactions with peers<sup className="text-[#10b981]">[117]</sup></div>
            <div className="text-sm">• Responding to social bids from others<sup className="text-[#10b981]">[118]</sup></div>
            <div className="text-sm">• Maintaining conversation for [X] exchanges<sup className="text-[#10b981]">[119]</sup></div>
            <div className="text-sm">• Recognizing when help is needed and asking appropriately<sup className="text-[#10b981]">[120]</sup></div>
            <div className="text-sm">• Understanding and following classroom social expectations<sup className="text-[#10b981]">[121]</sup></div>
            <div className="text-sm">• Working cooperatively in group activities<sup className="text-[#10b981]">[122]</sup></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-md border-l-4 border-[#0c264d] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">Structured Recess</h3>
            <p className="text-sm">Organized games and activities<sup className="text-[#10b981]">[123]</sup></p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">Social Lunch Groups</h3>
            <p className="text-sm">Facilitated peer interaction during lunch<sup className="text-[#10b981]">[124]</sup></p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">Collaborative Learning</h3>
            <p className="text-sm">Structured group work with defined roles<sup className="text-[#10b981]">[125]</sup></p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">Autism Awareness Education</h3>
            <p className="text-sm">Teaching classmates about autism<sup className="text-[#10b981]">[126][127]</sup></p>
          </div>
        </div>
      </div>

      {/* SECTION: Supporting at Home */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Supporting Social Development at Home</h2>
        
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Family Strategies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Facilitate Friendships</div>
                  <div className="text-sm">Arrange one-on-one playdates in low-stress environments<sup className="text-[#10b981]">[128]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Interest-Based Activities</div>
                  <div className="text-sm">Clubs, classes, or groups centered on special interests<sup className="text-[#10b981]">[129]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Explicit Teaching</div>
                  <div className="text-sm">Explain unwritten social rules clearly<sup className="text-[#10b981]">[130]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Post-Event Processing</div>
                  <div className="text-sm">Discuss social situations after they occur<sup className="text-[#10b981]">[131]</sup></div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">5</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Model Friendships</div>
                  <div className="text-sm">Demonstrate healthy relationships<sup className="text-[#10b981]">[132]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">6</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Respect Social Limits</div>
                  <div className="text-sm">Don't force interaction beyond the child's capacity<sup className="text-[#10b981]">[133]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">7</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Validate Feelings</div>
                  <div className="text-sm">Acknowledge that navigating social expectations is exhausting<sup className="text-[#10b981]">[134]</sup></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Technology-Based Learning */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Technology-Based Social Learning</h2>
        
        <div className="bg-white p-5 rounded-md shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Social Skills Apps<sup className="text-[#10b981]">[135][136]</sup></div>
              <div className="text-sm">Interactive games teaching social concepts</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Virtual Reality<sup className="text-[#10b981]">[137][138]</sup></div>
              <div className="text-sm">Practice social situations in safe VR environments</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Video Self-Modeling<sup className="text-[#10b981]">[139]</sup></div>
              <div className="text-sm">Recording and reviewing own social interactions</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Online Friendships<sup className="text-[#10b981]">[140]</sup></div>
              <div className="text-sm">Text-based communication can be easier for some</div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Final Considerations */}
      <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Final Considerations</h2>
        
        <p className="mb-6">
          Social skills intervention should enhance the autistic person's life, not just make them more comfortable for 
          others.<sup className="text-[#10b981]">[141]</sup> The goal is connection, understanding, and mutual respect—not masking or conformity.<sup className="text-[#10b981]">[142][143]</sup>
        </p>

        <div className="bg-white p-5 rounded-md shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Remember</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <span className="text-[#10b981] font-bold">✓</span>
              <span className="text-sm">Quality of friendships matters more than quantity<sup className="text-[#10b981]">[144]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#10b981] font-bold">✓</span>
              <span className="text-sm">Autistic social preferences are valid<sup className="text-[#10b981]">[145]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#10b981] font-bold">✓</span>
              <span className="text-sm">Not everyone needs or wants the same social life<sup className="text-[#10b981]">[146]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#10b981] font-bold">✓</span>
              <span className="text-sm">Connection with other autistic people is valuable<sup className="text-[#10b981]">[147]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#10b981] font-bold">✓</span>
              <span className="text-sm">Teaching neurotypical people about autism is equally important<sup className="text-[#10b981]">[148]</sup></span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom back button - positioned to the right above References */}
      <div className="flex justify-end mt-8 mb-6">
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          Therapies & Treatment
        </button>
      </div>

      {/* References */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <ol className="list-decimal ml-6 space-y-2 text-sm">
          <li>Bottema-Beutel, K., Kapp, S. K., Lester, J. N., Sasson, N. J., & Hand, B. N. (2021). Avoiding ableist language: Suggestions for autism researchers. Autism in Adulthood, 3(1), 18-29.</li>
          <li>Milton, D. E. M. (2014). Autistic expertise: A critical reflection on the production of knowledge in autism studies. Autism, 18(7), 794-802.</li>
          <li>Chapman, R. (2020). The reality of autism: On the metaphysics of disorder and diversity. Philosophical Psychology, 33(6), 799-819.</li>
          <li>Kapp, S. K., Gillespie-Lynch, K., Sherman, L. E., & Hutman, T. (2013). Deficit, difference, or both? Autism and neurodiversity. Developmental Psychology, 49(1), 59-71.</li>
          <li>Cage, E., & Troxell-Whitman, Z. (2019). Understanding the reasons, contexts and costs of camouflaging for autistic adults. Journal of Autism and Developmental Disorders, 49(5), 1899-1911.</li>
          <li>Milton, D. E. M. (2012). On the ontological status of autism: The 'double empathy problem'. Disability & Society, 27(6), 883-887.</li>
          <li>Crompton, C. J., Ropar, D., Evans-Williams, C. V., Flynn, E. G., & Fletcher-Watson, S. (2020). Autistic peer-to-peer information transfer is highly effective. Autism, 24(7), 1704-1712.</li>
          <li>Mitchell, P., Sheppard, E., & Cassidy, S. (2021). Autism and the double empathy problem: Implications for development and mental health. British Journal of Developmental Psychology, 39(1), 1-18.</li>
          <li>Milton, D., Heasman, B., & Sheppard, E. (2018). Double empathy. In F. R. Volkmar (Ed.), Encyclopedia of autism spectrum disorders. Springer.</li>
          <li>Edey, R., Cook, J., Brewer, R., et al. (2016). Interaction takes two: Typical adults exhibit mind-blindness towards those with autism spectrum disorder. Journal of Abnormal Psychology, 125(7), 879-885.</li>
          <li>Crompton, C. J., Sharp, M., Axbey, H., et al. (2020). Neurotype-matching, but not being autistic, influences self and observer ratings of interpersonal rapport. Frontiers in Psychology, 11, 586171.</li>
          <li>Heasman, B., & Gillespie, A. (2019). Neurodivergent intersubjectivity: Distinctive features of how autistic people create shared understanding. Autism, 23(4), 910-921.</li>
          <li>Sasson, N. J., Faso, D. J., Nugent, J., et al. (2017). Neurotypical peers are less willing to interact with those with autism based on thin slice judgments. Scientific Reports, 7(1), 40700.</li>
          <li>Sheppard, E., Pillai, D., Wong, G. T., Ropar, D., & Mitchell, P. (2016). How easy is it to read the minds of people with autism spectrum disorder? Journal of Autism and Developmental Disorders, 46(4), 1247-1254.</li>
          <li>Gernsbacher, M. A., & Yergeau, M. (2019). Empirical failures of the claim that autistic people lack a theory of mind. Archives of Scientific Psychology, 7(1), 102-118.</li>
          <li>Jaswal, V. K., & Akhtar, N. (2019). Being versus appearing socially uninterested: Challenging assumptions about social motivation in autism. Behavioral and Brain Sciences, 42, e82.</li>
          <li>Happé, F. G. (1993). Communicative competence and theory of mind in autism: A test of relevance theory. Cognition, 48(2), 101-119.</li>
          <li>Grove, R., Hoekstra, R. A., Wierda, M., & Begeer, S. (2018). Special interests and subjective wellbeing in autistic adults. Autism Research, 11(5), 766-775.</li>
          <li>Chevallier, C., Kohls, G., Troiani, V., Brodkin, E. S., & Schultz, R. T. (2012). The social motivation theory of autism. Trends in Cognitive Sciences, 16(4), 231-239.</li>
          <li>Trevisan, D. A., Roberts, N., Lin, C., & Birmingham, E. (2017). How do adults and teens with self-declared autism spectrum disorder experience eye contact? A qualitative analysis of first-hand accounts. PLoS One, 12(11), e0188446.</li>
          <li>Morrison, K. E., DeBrabander, K. M., Faso, D. J., & Sasson, N. J. (2019). Variability in first impressions of autistic adults made by neurotypical raters is driven more by characteristics of the rater than by characteristics of autistic adults. Autism, 23(7), 1817-1829.</li>
          <li>Vivanti, G., Dissanayake, C., & The Victorian ASELCC Team. (2016). Outcome for children receiving the Early Start Denver Model before and after 48 months. Journal of Autism and Developmental Disorders, 46(7), 2441-2449.</li>
          <li>Cage, E., Di Monaco, J., & Newell, V. (2018). Experiences of autism acceptance and mental health in autistic adults. Journal of Autism and Developmental Disorders, 48(2), 473-484.</li>
          <li>Botha, M., & Frost, D. M. (2020). Extending the minority stress model to understand mental health problems experienced by the autistic population. Society and Mental Health, 10(1), 20-34.</li>
          <li>Pellicano, E., & den Houting, J. (2022). Annual research review: Shifting from 'normal science' to neurodiversity in autism science. Journal of Child Psychology and Psychiatry, 63(4), 381-396.</li>
          <li>Leadbitter, K., Buckle, K. L., Ellis, C., & Dekker, M. (2021). Autistic self-advocacy and the neurodiversity movement: Implications for autism early intervention research and practice. Frontiers in Psychology, 12, 635690.</li>
          <li>Nicolaidis, C., Raymaker, D., Kapp, S. K., et al. (2019). The AASPIRE practice-based guidelines for the inclusion of autistic adults in research as co-researchers and study participants. Autism, 23(8), 2007-2019.</li>
          <li>Brown, L. X. (2011). The significance of semantics: Person-first language: Why it matters. Autistic Self Advocacy Network.</li>
          <li>Kapp, S. K. (Ed.). (2019). Autistic community and the neurodiversity movement: Stories from the frontline. Palgrave Macmillan.</li>
          <li>Tager-Flusberg, H., & Kasari, C. (2013). Minimally verbal school-aged children with autism spectrum disorder: The neglected end of the spectrum. Autism Research, 6(6), 468-478.</li>
          <li>Bauminger, N., Solomon, M., Aviezer, A., et al. (2008). Children with autism and their friends: A multidimensional study of friendship in high-functioning autism spectrum disorder. Journal of Abnormal Child Psychology, 36(2), 135-150.</li>
          <li>Sasson, N. J., & Morrison, K. E. (2019). First impressions of adults with autism improve with diagnostic disclosure and increased autism knowledge of peers. Autism, 23(1), 50-59.</li>
          <li>Roux, A. M., Shattuck, P. T., Rast, J. E., Rava, J. A., & Anderson, K. A. (2015). National Autism Indicators Report: Transition into young adulthood. Life Course Outcomes Research Program, A.J. Drexel Autism Institute.</li>
          <li>Anderson, C., Butt, C., & Sarsony, C. (2021). Young adults on the autism spectrum and early employment-related experiences: Aspirations and obstacles. Journal of Autism and Developmental Disorders, 51(1), 88-105.</li>
          <li>Baron-Cohen, S., Leslie, A. M., & Frith, U. (1985). Does the autistic child have a "theory of mind"? Cognition, 21(1), 37-46.</li>
          <li>Robledo, J., Donnellan, A. M., & Strandt-Conroy, K. (2012). An exploration of sensory and movement differences from the perspective of individuals with autism. Frontiers in Integrative Neuroscience, 6, 107.</li>
          <li>Trevisan, D. A., Hoskyn, M., & Birmingham, E. (2018). Facial expression production in autism: A meta-analysis. Autism Research, 11(12), 1586-1601.</li>
          <li>Cuve, H. C., Gao, Y., & Fuse, A. (2018). Is it avoidance or hypoarousal? A systematic review of emotion recognition, eye-tracking, and psychophysiological studies in young adults with autism spectrum conditions. Research in Autism Spectrum Disorders, 55, 1-13.</li>
          <li>Winter-Messiers, M. A., Herr, C. M., Wood, C. E., et al. (2007). How far can Brian ride the Daylight 4449 Express? A strength-based model of Asperger syndrome based on special interest areas. Focus on Autism and Other Developmental Disabilities, 22(2), 67-79.</li>
          <li>Hull, L., Petrides, K. V., Allison, C., et al. (2017). "Putting on my best normal": Social camouflaging in adults with autism spectrum conditions. Journal of Autism and Developmental Disorders, 47(8), 2519-2534.</li>
          <li>Cassidy, S., Bradley, L., Shaw, R., & Baron-Cohen, S. (2018). Risk markers for suicidality in autistic adults. Molecular Autism, 9(1), 42.</li>
          <li>Pearson, A., & Rose, K. (2021). A conceptual analysis of autistic masking: Understanding the narrative of stigma and the illusion of choice. Autism in Adulthood, 3(1), 52-60.</li>
          <li>Ochs, E., Kremer-Sadlik, T., Sirota, K. G., & Solomon, O. (2004). Autism and the social world: An anthropological perspective. Discourse Studies, 6(2), 147-183.</li>
          <li>Sedgewick, F., Hill, V., Yates, R., Pickering, L., & Pellicano, E. (2016). Gender differences in the social motivation and friendship experiences of autistic and non-autistic adolescents. Journal of Autism and Developmental Disorders, 46(4), 1297-1306.</li>
          <li>Reichow, B., Steiner, A. M., & Volkmar, F. (2012). Social skills groups for people aged 6 to 21 with autism spectrum disorders (ASD). Cochrane Database of Systematic Reviews, 7, CD008511.</li>
          <li>Gates, J. A., Kang, E., & Lerner, M. D. (2017). Efficacy of group social skills interventions for youth with autism spectrum disorder: A systematic review and meta-analysis. Clinical Psychology Review, 52, 164-181.</li>
          <li>Laugeson, E. A., Frankel, F., Gantman, A., Dillon, A. R., & Mogil, C. (2012). Evidence-based social skills training for adolescents with autism spectrum disorders: The UCLA PEERS program. Journal of Autism and Developmental Disorders, 42(6), 1025-1036.</li>
          <li>Laugeson, E. A., & Frankel, F. (2010). Social skills for teenagers with developmental and autism spectrum disorders: The PEERS treatment manual. Routledge.</li>
          <li>Laugeson, E. A., Frankel, F., Mogil, C., & Dillon, A. R. (2009). Parent-assisted social skills training to improve friendships in teens with autism spectrum disorders. Journal of Autism and Developmental Disorders, 39(4), 596-606.</li>
          <li>Schohl, K. A., Van Hecke, A. V., Carson, A. M., et al. (2014). A replication and extension of the PEERS intervention: Examining effects on social skills and social anxiety in adolescents with autism spectrum disorders. Journal of Autism and Developmental Disorders, 44(3), 532-545.</li>
          <li>Gantman, A., Kapp, S. K., Orenski, K., & Laugeson, E. A. (2012). Social skills training for young adults with high-functioning autism spectrum disorders: A randomized controlled pilot study. Journal of Autism and Developmental Disorders, 42(6), 1094-1103.</li>
          <li>Yoo, H. J., Bahn, G., Cho, I. H., et al. (2014). A randomized controlled trial of the Korean version of the PEERS® parent-assisted social skills training program for teens with ASD. Autism Research, 7(1), 145-161.</li>
          <li>Laugeson, E. A., Ellingsen, R., Sanderson, J., Tucci, L., & Bates, S. (2014). The ABC's of teaching social skills to adolescents with autism spectrum disorder in the classroom: The UCLA PEERS® program. Journal of Autism and Developmental Disorders, 44(9), 2244-2256.</li>
          <li>Winner, M. G. (2007). Thinking about you thinking about me (2nd ed.). Think Social Publishing.</li>
          <li>Crooke, P. J., Hendrix, R. E., & Rachman, J. Y. (2008). Brief report: Measuring the effectiveness of teaching social thinking to children with Asperger syndrome (AS) and high functioning autism (HFA). Journal of Autism and Developmental Disorders, 38(3), 581-591.</li>
          <li>Wood, R. (2019). Autism, intense interests and support in school: From wasted efforts to shared understandings. Educational Review, 71(1), 34-49.</li>
          <li>Reichow, B., & Volkmar, F. R. (2010). Social skills interventions for individuals with autism: Evaluation for evidence-based practices within a best evidence synthesis framework. Journal of Autism and Developmental Disorders, 40(2), 149-166.</li>
          <li>Carter, E. W., Cushing, L. S., Clark, N. M., & Kennedy, C. H. (2005). Effects of peer support interventions on students' access to the general curriculum and social interactions. Research and Practice for Persons with Severe Disabilities, 30(1), 15-25.</li>
          <li>Watkins, L., O'Reilly, M., Kuhn, M., et al. (2015). A review of peer-mediated social interaction interventions for students with autism in inclusive settings. Journal of Autism and Developmental Disorders, 45(4), 1070-1083.</li>
          <li>Chan, J. M., Lang, R., Rispoli, M., et al. (2009). Use of peer-mediated interventions in the treatment of autism spectrum disorders: A systematic review. Research in Autism Spectrum Disorders, 3(4), 876-889.</li>
          <li>Haring, T. G., & Breen, C. G. (1992). A peer-mediated social network intervention to enhance the social integration of persons with moderate and severe disabilities. Journal of Applied Behavior Analysis, 25(2), 319-333.</li>
          <li>Whitaker, P., Barratt, P., Joy, H., Potter, M., & Thomas, G. (1998). Children with autism and peer group support: Using 'circles of friends'. British Journal of Special Education, 25(2), 60-64.</li>
          <li>Kasari, C., Rotheram-Fuller, E., Locke, J., & Gulsrud, A. (2012). Making the connection: Randomized controlled trial of social skills at school for children with autism spectrum disorders. Journal of Child Psychology and Psychiatry, 53(4), 431-439.</li>
          <li>Chang, Y. C., & Locke, J. (2016). A systematic review of peer-mediated interventions for children with autism spectrum disorder. Research in Autism Spectrum Disorders, 27, 1-10.</li>
          <li>Whalon, K. J., Conroy, M. A., Martinez, J. R., & Werch, B. L. (2015). School-based peer-related social competence interventions for children with autism spectrum disorder: A meta-analysis and descriptive review of single case research design studies. Journal of Autism and Developmental Disorders, 45(6), 1513-1531.</li>
          <li>Bottema-Beutel, K., Park, H., & Kim, S. Y. (2018). Commentary on social skills training curricula for individuals with ASD: Social interaction, authenticity, and stigma. Journal of Autism and Developmental Disorders, 48(3), 953-964.</li>
          <li>Bellini, S., & Akullian, J. (2007). A meta-analysis of video modeling and video self-modeling interventions for children and adolescents with autism spectrum disorders. Exceptional Children, 73(3), 264-287.</li>
          <li>Wang, S. Y., Cui, Y., & Parrila, R. (2011). Examining the effectiveness of peer-mediated and video-modeling social skills interventions for children with autism spectrum disorders: A meta-analysis in single-case research using HLM. Research in Autism Spectrum Disorders, 5(1), 562-569.</li>
          <li>Rayner, C., Denholm, C., & Sigafoos, J. (2009). Video-based intervention for individuals with autism: Key questions that remain unanswered. Research in Autism Spectrum Disorders, 3(2), 291-303.</li>
          <li>Mason, R. A., Ganz, J. B., Parker, R. I., Burke, M. D., & Camargo, S. P. (2012). Moderating factors of video-modeling with other as model: A meta-analysis of single-case studies. Research in Developmental Disabilities, 33(4), 1076-1086.</li>
          <li>McCoy, K., & Hermansen, E. (2007). Video modeling for individuals with autism: A review of model types and effects. Education and Treatment of Children, 30(4), 183-213.</li>
          <li>Wilson, K. P. (2013). Incorporating video modeling into a school-based intervention for students with autism spectrum disorders. Language, Speech, and Hearing Services in Schools, 44(1), 105-117.</li>
          <li>Buggey, T., Hoomes, G., Sherberger, M. E., & Williams, S. (2011). Facilitating social initiations of preschoolers with autism spectrum disorders using video self-modeling. Focus on Autism and Other Developmental Disabilities, 26(1), 25-36.</li>
          <li>Gray, C. A., & Garand, J. D. (1993). Social stories: Improving responses of students with autism with accurate social information. Focus on Autistic Behavior, 8(1), 1-10.</li>
          <li>Gray, C. (2010). The new social story book (10th anniversary ed.). Future Horizons.</li>
          <li>Crozier, S., & Tincani, M. J. (2005). Using a modified social story to decrease disruptive behavior of a child with autism. Focus on Autism and Other Developmental Disabilities, 20(3), 150-157.</li>
          <li>Reynhout, G., & Carter, M. (2006). Social Stories™ for children with disabilities. Journal of Autism and Developmental Disorders, 36(4), 445-469.</li>
          <li>Scattone, D., Wilczynski, S. M., Edwards, R. P., & Rabian, B. (2002). Decreasing disruptive behaviors of children with autism using social stories. Journal of Autism and Developmental Disorders, 32(6), 535-543.</li>
          <li>Sansosti, F. J., Powell-Smith, K. A., & Kincaid, D. (2004). A research synthesis of social story interventions for children with autism spectrum disorders. Focus on Autism and Other Developmental Disabilities, 19(4), 194-204.</li>
          <li>Quirmbach, L. M., Lincoln, A. J., Feinberg-Gizzo, M. J., Ingersoll, B. R., & Andrews, S. M. (2009). Social stories: Mechanisms of effectiveness in increasing game play skills in children diagnosed with autism spectrum disorder using a pretest posttest repeated measures randomized control group design. Journal of Autism and Developmental Disorders, 39(2), 299-321.</li>
          <li>Test, D. W., Richter, S., Knight, V., & Spooner, F. (2011). A comprehensive review and meta-analysis of the social stories literature. Focus on Autism and Other Developmental Disabilities, 26(1), 49-62.</li>
          <li>Kokina, A., & Kern, L. (2010). Social Story™ interventions for students with autism spectrum disorders: A meta-analysis. Journal of Autism and Developmental Disorders, 40(7), 812-826.</li>
          <li>Krantz, P. J., & McClannahan, L. E. (1993). Teaching children with autism to initiate to peers: Effects of a script-fading procedure. Journal of Applied Behavior Analysis, 26(1), 121-132.</li>
          <li>Ganz, J. B., & Flores, M. M. (2009). The effectiveness of direct verbal prompts and sequential siblings for teaching play skills to children with autism. Journal of Intellectual Disability Research, 53(11), 993-1011.</li>
          <li>Wichnick, A. M., Vener, S. M., Keating, C., & Poulson, C. L. (2010). The effect of a script-fading procedure on unscripted social initiations and novel utterances of children with autism. Research in Autism Spectrum Disorders, 4(1), 51-64.</li>
          <li>Goldstein, H., Lackey, K. C., & Schneider, N. J. (2014). A new framework for systematic reviews: Application to social skills interventions for preschoolers with autism. Exceptional Children, 80(3), 262-286.</li>
          <li>MacDonald, R., Anderson, J., Dube, W. V., et al. (2006). Behavioral assessment of joint attention: A methodological report. Research in Developmental Disabilities, 27(2), 138-150.</li>
          <li>Bird, G., & Cook, R. (2013). Mixed emotions: The contribution of alexithymia to the emotional symptoms of autism. Translational Psychiatry, 3(7), e285.</li>
          <li>Kinnaird, E., Stewart, C., & Tchanturia, K. (2019). Investigating alexithymia in autism: A systematic review and meta-analysis. European Psychiatry, 55, 80-89.</li>
          <li>Poquérusse, J., Pastore, L., Dellantonio, S., & Esposito, G. (2018). Alexithymia and autism spectrum disorder: A complex relationship. Frontiers in Psychology, 9, 1196.</li>
          <li>Izard, C. E., Schultz, D., Fine, S. E., Youngstrom, E., & Ackerman, B. P. (2001). Temperament, cognitive ability, emotion knowledge, and adaptive social behavior. Imagination, Cognition and Personality, 21(4), 299-319.</li>
          <li>Kuypers, L. M. (2011). The zones of regulation: A curriculum designed to foster self-regulation and emotional control. Social Thinking Publishing.</li>
          <li>Mazefsky, C. A., & White, S. W. (2014). Emotion regulation: Concepts & practice in autism spectrum disorder. Child and Adolescent Psychiatric Clinics, 23(1), 15-24.</li>
          <li>Mahler, K. (2015). Interoception: The eighth sensory system. AAPC Publishing.</li>
          <li>Rieffe, C., Meerum Terwogt, M., & Kotronopoulou, K. (2007). Awareness of single and multiple emotions in high-functioning children with autism. Journal of Autism and Developmental Disorders, 37(3), 455-465.</li>
          <li>Scarpa, A., & Reyes, N. M. (2011). Improving emotion regulation with CBT in young children with high functioning autism spectrum disorders: A pilot study. Behavioural and Cognitive Psychotherapy, 39(4), 495-500.</li>
          <li>Kuypers, L. M. (2011). The zones of regulation. Social Thinking Publishing.</li>
          <li>Gagnon, E. (2001). Power cards: Using special interests to motivate children and youth with Asperger syndrome and autism. AAPC Publishing.</li>
          <li>Buron, K. D., & Curtis, M. (2012). The incredible 5-point scale: The significantly improved and expanded second edition. AAPC Publishing.</li>
          <li>Wood, J. J., Drahota, A., Sze, K., et al. (2009). Cognitive behavioral therapy for anxiety in children with autism spectrum disorders: A randomized, controlled trial. Journal of Child Psychology and Psychiatry, 50(3), 224-234.</li>
          <li>Reaven, J., Blakeley-Smith, A., Culhane-Shelburne, K., & Hepburn, S. (2012). Group cognitive behavior therapy for children with high-functioning autism spectrum disorders and anxiety: A randomized trial. Journal of Child Psychology and Psychiatry, 53(4), 410-419.</li>
          <li>Crompton, C. J., Hallett, S., Ropar, D., Flynn, E., & Fletcher-Watson, S. (2020). 'I never realised everybody felt as happy as I do when I am around autistic people': A thematic analysis of autistic adults' relationships with autistic and neurotypical friends and family. Autism, 24(6), 1438-1448.</li>
          <li>Cage, E., & Troxell-Whitman, Z. (2020). Understanding the relationships between autistic identity, disclosure, and camouflaging. Autism in Adulthood, 2(4), 334-338.</li>
          <li>Crompton, C. J., Sharp, M., Axbey, H., et al. (2020). Neurotype-matching, but not being autistic, influences self and observer ratings of interpersonal rapport. Frontiers in Psychology, 11, 586171.</li>
          <li>DeBrabander, K. M., Morrison, K. E., Jones, D. R., Faso, D. J., & Sasson, N. J. (2019). Do first impressions of autistic adults differ between autistic and nonautistic observers? Autism in Adulthood, 1(4), 250-257.</li>
          <li>den Houting, J. (2019). Neurodiversity: An insider's perspective. Autism, 23(2), 271-273.</li>
          <li>Cooper, K., Smith, L. G., & Russell, A. J. (2018). Gender identity in autism: Sex differences in social affiliation with gender groups. Journal of Autism and Developmental Disorders, 48(12), 3995-4006.</li>
          <li>Milton, D., & Sims, T. (2016). How is a sense of well-being and belonging constructed in the accounts of autistic adults? Disability & Society, 31(4), 520-534.</li>
          <li>Fletcher-Watson, S., Adams, J., Brook, K., et al. (2019). Making the future together: Shaping autism research through meaningful participation. Autism, 23(4), 943-953.</li>
          <li>Hedley, D., Uljarević, M., Cameron, L., Halder, S., Richdale, A., & Dissanayake, C. (2017). Employment programmes and interventions targeting adults with autism spectrum disorder: A systematic review of the literature. Autism, 21(8), 929-941.</li>
          <li>Burke, M., Kraut, R., & Williams, D. (2010). Social use of computer-mediated communication by adults on the autism spectrum. In Proceedings of the 2010 ACM conference on Computer supported cooperative work (pp. 425-434).</li>
          <li>Jones, R. S., Zahl, A., & Huws, J. C. (2001). First-hand accounts of emotional experiences in autism: A qualitative analysis. Disability & Society, 16(3), 393-401.</li>
          <li>Grove, R., Hoekstra, R. A., Wierda, M., & Begeer, S. (2018). Special interests and subjective wellbeing in autistic adults. Autism Research, 11(5), 766-775.</li>
          <li>Steward, R., Crane, L., Mairi Roy, E., Remington, A., & Pellicano, E. (2018). "Life is much more difficult to manage during periods of change": Autistic experiences of change and uncertainty. Journal of Autism and Developmental Disorders, 48(12), 4123-4133.</li>
          <li>Ruble, L., McGrew, J., & Dalrymple, N. (2010). Examining the quality of IEPs for young children with autism. Journal of Autism and Developmental Disorders, 40, 1459-1470.</li>
          <li>Koegel, L. K., Koegel, R. L., Frea, W. D., & Fredeen, R. M. (2001). Identifying early intervention targets for children with autism in inclusive school settings. Behavior Modification, 25(5), 745-761.</li>
          <li>Koegel, L. K., Koegel, R. L., Harrower, J. K., & Carter, C. M. (1999). Pivotal response intervention I: Overview of approach. Journal of the Association for Persons with Severe Handicaps, 24(3), 174-185.</li>
          <li>Carr, E. G., & Durand, V. M. (1985). Reducing behavior problems through functional communication training. Journal of Applied Behavior Analysis, 18(2), 111-126.</li>
          <li>Koegel, R. L., Fredeen, R., Kim, S., Danial, J., Rubinstein, D., & Koegel, L. (2012). Using perseverative interests to improve interactions between adolescents with autism and their typical peers in school settings. Journal of Positive Behavior Interventions, 14(3), 133-141.</li>
          <li>Kern, P., & Wolery, M. (2001). Participation of a preschooler with peer disabilities on the playground: Effects of musical adaptations and staff development. Journal of Music Therapy, 38(2), 149-164.</li>
          <li>Kasari, C., Rotheram-Fuller, E., Locke, J., & Gulsrud, A. (2012). Making the connection: Randomized controlled trial of social skills at school for children with autism spectrum disorders. Journal of Child Psychology and Psychiatry, 53(4), 431-439.</li>
          <li>Banda, D. R., Hart, S. L., & Liu-Gitz, L. (2010). Impact of training peers and children with autism on social skills during center time activities in inclusive classrooms. Research in Autism Spectrum Disorders, 4(4), 619-625.</li>
          <li>Gillespie-Lynch, K., Brooks, P. J., Someki, F., et al. (2015). Changing college students' conceptions of autism: An online training to increase knowledge and decrease stigma. Journal of Autism and Developmental Disorders, 45(8), 2553-2566.</li>
          <li>White, D., Hillier, A., Frye, A., & Makrez, E. (2019). College students' knowledge and attitudes towards students on the autism spectrum. Journal of Autism and Developmental Disorders, 49(7), 2699-2705.</li>
          <li>Bauminger, N., & Kasari, C. (2000). Loneliness and friendship in high-functioning children with autism. Child Development, 71(2), 447-456.</li>
          <li>Jordan, C. J. (2010). Evolution of autism support and understanding via the World Wide Web. Intellectual and Developmental Disabilities, 48(3), 220-227.</li>
          <li>Frankel, F., Myatt, R., Sugar, C., Whitham, C., Gorospe, C. M., & Laugeson, E. (2010). A randomized controlled study of parent-assisted Children's Friendship Training with children having autism spectrum disorders. Journal of Autism and Developmental Disorders, 40(7), 827-842.</li>
          <li>Gray, C. (1995). Teaching children with autism to "read" social situations. In K. A. Quill (Ed.), Teaching children with autism: Strategies to enhance communication and socialization (pp. 219-241). Delmar.</li>
          <li>Orsmond, G. I., Krauss, M. W., & Seltzer, M. M. (2004). Peer relationships and social and recreational activities among adolescents and adults with autism. Journal of Autism and Developmental Disorders, 34(3), 245-256.</li>
          <li>Laugeson, E. A. (2014). The PEERS curriculum for school-based professionals: Social skills training for adolescents with autism spectrum disorder. Routledge.</li>
          <li>Crooke, P. J., Hendrix, R. E., & Rachman, J. Y. (2008). Brief report: Measuring the effectiveness of teaching social thinking to children with Asperger syndrome (AS) and high functioning autism (HFA). Journal of Autism and Developmental Disorders, 38(3), 581-591.</li>
          <li>Ramdoss, S., Machalicek, W., Rispoli, M., et al. (2012). Computer-based interventions to improve social and emotional skills in individuals with autism spectrum disorders: A systematic review. Developmental Neurorehabilitation, 15(2), 119-135.</li>
          <li>Fletcher-Watson, S., Petrou, A., Scott-Barrett, J., et al. (2016). A trial of an iPad™ intervention targeting social communication skills in children with autism. Autism, 20(7), 771-782.</li>
          <li>Didehbani, N., Allen, T., Kandalaft, M., Krawczyk, D., & Chapman, S. (2016). Virtual reality social cognition training for children with high functioning autism. Computers in Human Behavior, 62, 703-711.</li>
          <li>Lorenzo, G., Lledó, A., Pomares, J., & Roig, R. (2016). Design and application of an immersive virtual reality system to enhance emotional skills for children with autism spectrum disorders. Computers & Education, 98, 192-205.</li>
          <li>Hitchcock, C. H., Dowrick, P. W., & Prater, M. A. (2003). Video self-modeling intervention in school-based settings: A review. Remedial and Special Education, 24(1), 36-45.</li>
          <li>Mazurek, M. O. (2013). Social media use among adults with autism spectrum disorders. Computers in Human Behavior, 29(4), 1709-1714.</li>
          <li>Pellicano, E., Dinsmore, A., & Charman, T. (2014). What should autism research focus upon? Community views and priorities from the United Kingdom. Autism, 18(7), 756-770.</li>
          <li>Botha, M., Hanlon, J., & Williams, G. L. (2021). Does language matter? Identity-first versus person-first language use in autism research: A response to Vivanti. Journal of Autism and Developmental Disorders, 52, 870-878.</li>
          <li>Dwyer, P. (2022). The neurodiversity approach(es): What are they and what do they mean for researchers? Human Development, 66(2), 73-92.</li>
          <li>Bauminger, N., Shulman, C., & Agam, G. (2003). Peer interaction and loneliness in high-functioning children with autism. Journal of Autism and Developmental Disorders, 33(5), 489-507.</li>
          <li>Cage, E., Bird, G., & Pellicano, L. (2016). 'I am who I am': Reputation concerns in adolescents on the autism spectrum. Research in Autism Spectrum Disorders, 25, 12-23.</li>
          <li>Chambres, P., Auxiette, C., Vansingle, C., & Gil, S. (2008). Adult attitudes toward behaviors of a six-year-old boy with autism. Journal of Autism and Developmental Disorders, 38(7), 1320-1327.</li>
          <li>Crompton, C. J., Hallett, S., Axbey, H., et al. (2020). Autistic peer-to-peer information transfer is highly effective. Autism, 24(7), 1704-1712.</li>
          <li>Gillespie-Lynch, K., Kapp, S. K., Brooks, P. J., Pickens, J., & Schwartzman, B. (2017). Whose expertise is it? Evidence for autistic adults as critical autism experts. Frontiers in Psychology, 8, 438.</li>
        </ol>
      </div>
    </div>
  );
}
