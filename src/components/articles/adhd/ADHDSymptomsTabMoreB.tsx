interface TabMoreBProps {
  setCurrentArticle?: (article: string) => void;
}

export function ADHDSymptomsTabMoreB() {
  return (
    <>
            {/* Working Memory Challenges */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Working Memory Challenges</h3>
              <p className="mb-3">
                Working memory is your brain's ability to temporarily hold and manipulate information—like a mental workspace 
                or scratchpad. In ADHD, working memory deficits make it difficult to keep multiple pieces of information "active" 
                in your mind simultaneously, follow multi-step instructions, or mentally manipulate information (like doing math 
                in your head or reversing a sequence).
              </p>
              <p className="mb-3">
                This is distinct from long-term memory. People with ADHD often have excellent long-term memory for topics of 
                interest, but struggle with the temporary "holding space" needed for active tasks. Working memory challenges 
                affect everything from following conversations to completing complex tasks to learning new skills.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p><strong>Working Memory Impairment:</strong> Large-scale impairments have been measured in visuospatial and phonological 
                  short-term memory (d=0.89 and d=0.55 respectively).<sup className="text-[#10b981]">9</sup></p>
                  <p><strong>Capacity vs. Selection:</strong> While overall working memory capacity is lower in ADHD, individuals can still 
                  prioritize "valuable" information as effectively as others—the deficit is in total capacity, not the selection process.</p>
                  <p><strong>Manipulation Deficits:</strong> Roughly 42% of children with ADHD exhibit severe impairment in "working memory 
                  reordering"—the ability to mentally manipulate information they just heard.<sup className="text-[#10b981]">9</sup></p>
                </div>
              </div>
              
              <div className="text-sm bg-[#e6e6fa] p-3 rounded">
                <strong>Real-life impact:</strong> Losing your train of thought mid-sentence, forgetting what you were doing 
                when interrupted, struggling to follow verbal directions with multiple steps, difficulty doing mental math, 
                re-reading the same paragraph multiple times because the information doesn't "stick," or forgetting the beginning 
                of a sentence by the time you reach the end.
              </div>
            </div>

            {/* Executive Dysfunction */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Executive Dysfunction</h3>
              <p className="mb-3">
                Executive functions are the brain's management system—a set of mental processes that help you plan, organize, 
                initiate tasks, regulate emotions, monitor your behavior, and adapt to changing situations. In ADHD, executive 
                dysfunction affects these core processes, creating a ripple effect across many areas of life.
              </p>
              <p className="mb-3">
                This is the underlying mechanism behind many ADHD symptoms. Poor executive function explains why someone might 
                know exactly what they need to do but can't get started, or why they struggle to shift between tasks, or why 
                they have difficulty planning ahead and anticipating consequences.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p><strong>The "30% Rule":</strong> Clinical research suggests that the "executive age" of an adult with ADHD is often 
                  30–40% behind their chronological age (e.g., a 30-year-old having the executive skills of a 20-year-old).<sup className="text-[#10b981]">2</sup></p>
                  <p><strong>Task Breakdown:</strong> Executive dysfunction disrupts the brain's ability to break down complex tasks, 
                  leading to the "paralysis" felt when starting new projects.</p>
                </div>
              </div>
              
              <div className="text-sm bg-[#e8f5e8] p-3 rounded">
                <strong>Real-life impact:</strong> Knowing you need to start a project but feeling paralyzed, difficulty breaking 
                large tasks into manageable steps, struggling to prioritize when everything feels equally urgent, poor self-monitoring 
                (not noticing when you're off-track), and challenges adapting plans when circumstances change.
              </div>
            </div>

            {/* Task Initiation & Analysis Paralysis */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Task Initiation & Analysis Paralysis</h3>
              <p className="mb-3">
                Task initiation difficulty is the struggle to begin tasks even when you're motivated and have time. This isn't 
                procrastination in the traditional sense—you genuinely want to start, but your brain won't cooperate. Analysis 
                paralysis occurs when facing too many options or steps, leading to complete overwhelm and inability to choose 
                or begin.
              </p>
              <p className="mb-3">
                The ADHD brain often needs extra stimulation or pressure to activate the "start" mechanism. Without external 
                deadlines, novel situations, or high interest, the initiation system doesn't engage, leaving you stuck in a 
                frustrating state of knowing what to do but being unable to do it.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p><strong>Analysis Paralysis:</strong> Executive dysfunction disrupts the brain's ability to break down complex tasks, 
                  leading to the "paralysis" felt when starting new projects.</p>
                </div>
              </div>
              
              <div className="text-sm bg-[#fde8f3] p-3 rounded">
                <strong>Real-life impact:</strong> Staring at a blank document for hours, spending all day "getting ready" to 
                work without actually starting, becoming overwhelmed by choices (even simple ones like what to eat), over-planning 
                as a substitute for doing, or needing the panic of a deadline to finally begin.
              </div>
            </div>

            {/* Hyperfocus */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Hyperfocus</h3>
              <p className="mb-3">
                Hyperfocus is intense, sustained concentration on tasks of high interest or stimulation, often to the point of 
                losing awareness of time, surroundings, and basic needs. While it might seem contradictory to ADHD's attention 
                difficulties, hyperfocus actually reflects the same core issue: difficulty regulating attention rather than a 
                simple lack of it.
              </p>
              <p className="mb-3">
                When the ADHD brain finds something sufficiently stimulating, it can lock onto that activity with laser-like 
                intensity. The problem is that you can't control when this happens or easily disengage from it. Hyperfocus can 
                be productive (finishing a project in one marathon session) or problematic (losing hours to a video game when 
                you have responsibilities).
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p><strong>Regulatory Failure:</strong> Rather than a "lack" of attention, hyperfocus is the inability to disengage from 
                  a high-stimulation task once the brain's reward system (dopamine) is locked in.</p>
                </div>
              </div>
              
              <div className="text-sm bg-[#ffe8d6] p-3 rounded">
                <strong>Real-life impact:</strong> Working or gaming for 8+ hours without eating, drinking, or using the bathroom; 
                missing appointments because you were absorbed in an activity; inability to "pull yourself away" even when you 
                know you should stop; finishing passion projects in record time but unable to focus on boring necessities.
              </div>
            </div>

            {/* Sleep Difficulties */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sleep Difficulties</h3>
              <p className="mb-3">
                Sleep problems are extremely common in ADHD and often include delayed sleep phase syndrome (natural tendency to 
                stay up late and sleep in), difficulty falling asleep due to racing thoughts, trouble waking up despite multiple 
                alarms, and non-restorative sleep. The ADHD brain's dysregulation extends to the sleep-wake cycle.
              </p>
              <p className="mb-3">
                Many people with ADHD describe feeling most alert and focused late at night, making it nearly impossible to fall 
                asleep at "normal" times. Morning awakening is equally challenging—sleep inertia can be extreme, with intense 
                grogginess lasting well into the day. Poor sleep then exacerbates ADHD symptoms, creating a difficult cycle.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p><strong>Delayed Sleep Phase:</strong> ADHD is heavily linked to a natural tendency to stay awake late, often driven 
                  by racing thoughts or a "second wind" of alertness at night.</p>
                </div>
              </div>
              
              <div className="text-sm bg-[#e6e6fa] p-3 rounded">
                <strong>Real-life impact:</strong> Naturally staying awake until 2-4 AM regardless of when you need to wake up, 
                lying in bed with racing thoughts for hours, needing 5+ alarms and still struggling to get up, feeling like you 
                didn't sleep even after 8+ hours, functioning better at night than during the day.
              </div>
            </div>

            {/* Difficulty with Transitions */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Difficulty with Transitions</h3>
              <p className="mb-3">
                Transitions—shifting between activities, locations, mental states, or tasks—require significant executive function. 
                You must disengage from what you're doing, shift your mental set, and initiate something new. For people with ADHD, 
                this process is exhausting and often triggers frustration, anxiety, or resistance.
              </p>
              <p className="mb-3">
                This difficulty applies to both physical transitions (leaving the house, moving between locations) and mental ones 
                (switching from work mode to relaxation, changing tasks). The "in-between" state feels uncomfortable and 
                disorganizing, so there's often procrastination around transitions or irritability when they're required.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p><strong>Transition Exhaustion:</strong> Shifting between mental states requires significant executive effort; the 
                  "in-between" state of a transition is often where people with ADHD lose the most time and emotional regulation.</p>
                </div>
              </div>
              
              <div className="text-sm bg-[#e8f5e8] p-3 rounded">
                <strong>Real-life impact:</strong> Feeling irrationally angry when interrupted, procrastinating leaving the house 
                even for enjoyable activities, needing extensive "decompression time" between work and home, struggling to switch 
                between different types of tasks, or staying in uncomfortable situations because transitioning out feels too hard.
              </div>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm mb-2">
                <strong>About the Symptom Wheel:</strong> The wheel rates each symptom from 0 to 10 based on severity of 
                impact. Each person with ADHD experiences these symptoms differently—some may rate high on certain symptoms 
                and low on others. There's no "correct" pattern, and your individual symptom profile is valid.
              </p>
              <p className="text-sm mt-3">
                <strong>Why These Aren't in the DSM-5:</strong> Diagnostic criteria focus on core features that distinguish 
                ADHD from other conditions. These additional symptoms are widely recognized by researchers and clinicians as 
                important aspects of the ADHD experience that deserve attention in treatment planning, even though they're 
                not part of the formal diagnostic criteria.
              </p>
            </div>
    </>
  );
}