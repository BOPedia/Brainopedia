import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from 'recharts';

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

export function AdditionalCharacteristics() {
  return (
    <div className="space-y-6">
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Additional Common Characteristics</h2>
        
        <p className="mb-6">
          While not part of the core diagnostic criteria, many autistic individuals share additional characteristics:
        </p>

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
        </div>
      </div>
    </div>
  );
}
