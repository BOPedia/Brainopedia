import hyperactivityImage from '/images/bdfc050c299593b3d44918a9fe879a3a9c3fbe2b.png';
import inattentionImage from '/images/5d0ee62ffe96db2bda4fdeaa5cea3c1203b22e27.png';
import hyperactivityLifespanImage from '/images/da6f1e6a03ed40a3dbf1971d9046e8046a4fd611.png';
import inattentionAgesImage from '/images/071b60f0bbfc1eab29a676e558995e5c9426f3c9.png';
import impulsivityImage from '/images/6e31726e8e0f8fbba8a636d95a3855891385eab0.png';
import coreSymptomsImage from '/images/2e6ce66b550d5b59ddd23656eb6ce0a0c613162f.png';
import impulsivityExamplesImage from '/images/404353dd018afd55007dfd7015e4bb47cc96e61d.png';
import definingAdhdCriteria from '/images/143f3d3d8ba367977f13cd4537967a20dca05dcf.png';
import rsdHeartImage from '/images/64294e7cc42a530c7175eb753bfffe43b2246ebf.png';
import positiveSelfTalkImage from '/images/d61bbdb5565401aa4dde253fcfeb291f39bfbcea.png';
import notActuallyADHDImage from '/images/7393d42358eb4d0bf108ea296f9fbc2ba56bc356.png';
import emotionalExplosionImage from '/images/30e7e1ccb6309caa785bb18e6cf041a22651305f.png';
import diversityImage from '/images/04d878d8ec78789d92690ae811d99fb57ea7a0c8.png';
import girlStudyingImage from '/images/55a741514f1c8ae9cb81c3c838beb7e4d35e34c5.png';
import businessWomanImage from '/images/fd68763e0300492c6c045832fb60210fc34c5da2.png';
import researchDeskImage from '/images/760859707bb312bb70b53711739c03800b0941e5.png';
import justiceImage from '/images/f94461fe92ebdf19aa5e773ddf93737468658b59.png';
import daydreamImage from '/images/9e2501f1b152bcda1cfaec1f315f7cf87b2266e4.png';
import symptomWheelImage from '/images/23fa944b898e34edc62aa0a9ae7eef30cf6113f2.png';
import rsdSocialRejectionImage from '/images/18aa804600b5b7035cc0b57c9eeaddcd2e0e984b.png';
import rejectedTypewriterImage from '/images/ca91151a065a0eb3573b732345c26392d833fdab.png';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ADHDSymptomsCoreReferences } from '../../references/ADHDSymptomsCoreReferences';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import { Hand, ArrowUpFromLine, Mountain, VolumeX, Zap, MessageSquare, Baby, GraduationCap, Briefcase, MessageCircle, Users, ShoppingCart, AlertTriangle, TrendingUp, Clock, EarOff, FileX, FolderOpen, Brain, Search, Wind, CalendarX } from 'lucide-react';

interface ADHDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function ADHDSymptoms({ setCurrentArticle }: ADHDSymptomsProps) {

  // Example data for interactive symptom radar chart
  const adhdSymptomData = [
    { category: 'Disorganization', value: 8, fullMark: 10 },
    { category: 'Fidgeting', value: 7, fullMark: 10 },
    { category: 'Fatigue', value: 2, fullMark: 10 },
    { category: 'Risk-taking', value: 5, fullMark: 10 },
    { category: 'RSD', value: 9, fullMark: 10 },
    { category: 'Time Perception', value: 3, fullMark: 10 },
    { category: 'Emotional Dysregulation', value: 7, fullMark: 10 },
    { category: 'Motivation Issues', value: 2, fullMark: 10 },
    { category: 'Working Memory', value: 7, fullMark: 10 },
    { category: 'Executive Dysfunction', value: 8, fullMark: 10 },
    { category: 'Task Initiation', value: 9, fullMark: 10 },
    { category: 'Hyperfocus', value: 6, fullMark: 10 },
    { category: 'Sleep Difficulties', value: 7, fullMark: 10 },
    { category: 'Transitions', value: 6, fullMark: 10 },
  ];

  return (
    <article className="max-w-full w-full">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>
      
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
          ADHD: Symptoms & Characteristics
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:block hidden"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
      </div>

      {/* Mobile button - shows only on small screens below title */}
      <button 
        onClick={() => setCurrentArticle?.('adhd')}
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About ADHD
      </button>

      <Tabs defaultValue="core" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger value="core" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Core Symptoms
          </TabsTrigger>
          <TabsTrigger value="inattention" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Inattention
          </TabsTrigger>
          <TabsTrigger value="hyperactivity" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Hyperactivity
          </TabsTrigger>
          <TabsTrigger value="impulsivity" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Impulsivity
          </TabsTrigger>
          <TabsTrigger value="more" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            More Symptoms
          </TabsTrigger>
          <TabsTrigger value="rsd" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            RSD?
          </TabsTrigger>
          <TabsTrigger value="females" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            ADHD in Females
          </TabsTrigger>
          <TabsTrigger value="myths" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Myths & Misconceptions
          </TabsTrigger>
        </TabsList>

        {/* Core Symptoms Tab */}
        <TabsContent value="core" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
              <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Core Symptoms of ADHD</h2>
              
              <div className="flex justify-center mb-6">
                <img 
                  src={coreSymptomsImage} 
                  alt="Neural network visualization representing the core symptoms of ADHD"
                  className="w-64 h-auto rounded-md border border-gray-300"
                />
              </div>
              
              <p className="mb-4">
                ADHD is characterized by a persistent pattern of inattention, hyperactivity, and impulsivity that 
                interferes with functioning or development. These symptoms must be present before age 12, occur 
                in multiple settings (home, school, work), and significantly impair functioning to meet diagnostic 
                criteria.
              </p>
              <p className="mb-4">
                The Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR)<sup>[1]</sup> identifies three presentations 
                of ADHD: predominantly inattentive, predominantly hyperactive-impulsive, and combined presentation. 
                Each presentation has distinct symptom profiles, though individuals may experience symptoms from 
                multiple categories.
              </p>
              
              <div className="bg-[#d6e9ff] border-l-4 border-[#0c264d] p-4 rounded">
                <p className="text-sm">
                  <strong>Important:</strong> A diagnosis requires at least 6 symptoms from either category (or both) 
                  for children, and 5 symptoms for adults age 17+<sup>[1]</sup>, persisting for at least 6 months.
                </p>
              </div>
            </div>

            {/* Defining ADHD Diagnostic Criteria Section */}
            <div className="bg-[#f0f9ff] p-6 rounded-lg">
              <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Defining ADHD: DSM-5-TR Diagnostic Criteria</h2>
              
              <div className="flex justify-center mb-6">
                <img 
                  src={definingAdhdCriteria} 
                  alt="Defining ADHD - DSM-5-TR criteria showing inattention and impulsivity/hyperactivity symptoms for ADHD combined type diagnosis"
                  className="w-full h-auto rounded-md border border-gray-300"
                />
              </div>
              
              <p className="mb-4">
                The diagram above illustrates the complete DSM-5-TR diagnostic criteria<sup>[1]</sup> for ADHD, showing the specific 
                symptoms that define each presentation. To receive a diagnosis of ADHD combined type, an individual 
                must meet criteria from both the inattention category (left circle) and the impulsivity/hyperactivity 
                category (right circle). These symptoms must be present for at least 6 months and be inappropriate 
                for the person's developmental level.
              </p>
              
              <div className="bg-[#ffe8d6] border-l-4 border-[#0c264d] p-4 rounded">
                <p className="text-sm">
                  <strong>Clinical Requirement:</strong> A comprehensive ADHD evaluation should include multiple sources of 
                  information (self-report, parent/partner input, school/work records) and rule out other conditions that may 
                  present similarly.
                </p>
              </div>
            </div>

            {/* 18 DSM-5 Criteria Section */}
            <div className="bg-[#f0f9ff] p-6 rounded-lg">
              <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The 18 DSM-5 Diagnostic Criteria</h2>
              
              <div className="bg-[#e8f5e8] border-l-4 border-[#0c264d] p-4 rounded mb-6">
                <p className="text-sm mb-3">
                  <strong>How to Read These Symptoms:</strong>
                </p>
                <ul className="text-sm space-y-2 ml-4">
                  <li><strong>Children (under 17):</strong> At least <strong>6 out of 9</strong> symptoms from either category (Inattention OR Hyperactivity-Impulsivity)</li>
                  <li><strong>Adults (17+):</strong> At least <strong>5 out of 9</strong> symptoms from either category</li>
                  <li><strong>Must be present before age 12</strong></li>
                  <li><strong>Must occur in two or more settings</strong> (home, school, work, with friends, etc.)</li>
                  <li><strong>Must interfere with functioning</strong> (academic, social, or occupational)</li>
                  <li><strong>Must persist for at least 6 months</strong></li>
                  <li><strong>Not better explained by another mental disorder</strong></li>
                </ul>
              </div>

              {/* Inattention Criteria */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">INATTENTION (9 Symptoms)</h3>
                
                <div className="space-y-3">
                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">1. Careless Mistakes</div>
                    <div className="text-sm">
                      Often fails to give close attention to details or makes careless mistakes in schoolwork, work, or other activities
                    </div>
                  </div>

                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">2. Difficulty Sustaining Attention</div>
                    <div className="text-sm">
                      Often has difficulty sustaining attention in tasks or play activities
                    </div>
                  </div>

                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">3. Doesn't Seem to Listen</div>
                    <div className="text-sm">
                      Often does not seem to listen when spoken to directly
                    </div>
                  </div>

                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">4. Doesn't Follow Through</div>
                    <div className="text-sm">
                      Often does not follow through on instructions and fails to finish schoolwork, chores, or duties in the workplace (not due to oppositional behavior or failure to understand)
                    </div>
                  </div>

                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">5. Difficulty Organizing</div>
                    <div className="text-sm">
                      Often has difficulty organizing tasks and activities
                    </div>
                  </div>

                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">6. Avoids Sustained Mental Effort</div>
                    <div className="text-sm">
                      Often avoids, dislikes, or is reluctant to engage in tasks that require sustained mental effort (such as schoolwork or homework)
                    </div>
                  </div>

                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">7. Loses Things</div>
                    <div className="text-sm">
                      Often loses things necessary for tasks or activities (e.g., school materials, pencils, books, tools, wallets, keys, paperwork, eyeglasses, mobile phones)
                    </div>
                  </div>

                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">8. Easily Distracted</div>
                    <div className="text-sm">
                      Is often easily distracted by extraneous stimuli (for older adolescents and adults, may include unrelated thoughts)
                    </div>
                  </div>

                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">9. Forgetful</div>
                    <div className="text-sm">
                      Is often forgetful in daily activities
                    </div>
                  </div>
                </div>
              </div>

              {/* Hyperactivity-Impulsivity Criteria */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">HYPERACTIVITY-IMPULSIVITY (9 Symptoms)</h3>
                
                <div className="mb-4 text-sm font-semibold text-[#0c264d]">Hyperactivity (6 symptoms):</div>
                <div className="space-y-3 mb-5">
                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">10. Fidgets or Squirms</div>
                    <div className="text-sm">
                      Often fidgets with or taps hands or feet or squirms in seat
                    </div>
                  </div>

                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">11. Leaves Seat</div>
                    <div className="text-sm">
                      Often leaves seat in situations when remaining seated is expected (e.g., classroom, office, workplace)
                    </div>
                  </div>

                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">12. Runs About or Climbs</div>
                    <div className="text-sm">
                      Often runs about or climbs in situations where it is inappropriate (in adolescents or adults, may be limited to feeling restless)
                    </div>
                  </div>

                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">13. Unable to Play Quietly</div>
                    <div className="text-sm">
                      Often unable to play or engage in leisure activities quietly
                    </div>
                  </div>

                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">14. "On the Go"</div>
                    <div className="text-sm">
                      Is often "on the go," acting as if "driven by a motor"
                    </div>
                  </div>

                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">15. Talks Excessively</div>
                    <div className="text-sm">
                      Often talks excessively
                    </div>
                  </div>
                </div>

                <div className="mb-4 text-sm font-semibold text-[#0c264d]">Impulsivity (3 symptoms):</div>
                <div className="space-y-3">
                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">16. Blurts Out Answers</div>
                    <div className="text-sm">
                      Often blurts out an answer before a question has been completed (e.g., completes people's sentences, cannot wait for turn in conversation)
                    </div>
                  </div>

                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">17. Difficulty Waiting Turn</div>
                    <div className="text-sm">
                      Often has difficulty waiting their turn (e.g., while waiting in line)
                    </div>
                  </div>

                  <div className="border-l-2 border-[#2abcd4] pl-3">
                    <div className="font-bold text-[#0c264d] mb-1">18. Interrupts or Intrudes</div>
                    <div className="text-sm">
                      Often interrupts or intrudes on others (e.g., butts into conversations, games, or activities; may start using other people's things without asking or receiving permission)
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Callout */}
              <div className="bg-[#f0e6ff] border-l-4 border-[#0c264d] p-4 rounded">
                <p className="text-sm mb-2">
                  <strong>Important Note:</strong> Having some of these symptoms occasionally is normal. ADHD is diagnosed when:
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>Symptoms are severe enough to interfere with daily life</li>
                  <li>They occur consistently across different settings</li>
                  <li>They've been present since childhood (before age 12)</li>
                  <li>They can't be better explained by another condition</li>
                </ul>
                <p className="text-sm mt-3">
                  <strong>Self-Assessment vs. Diagnosis:</strong> Online checklists and symptom lists can help you recognize patterns, but only a qualified healthcare professional can diagnose ADHD through comprehensive evaluation.
                </p>
              </div>
            </div>

            {/* Bottom navigation button */}
            <div className="flex justify-end my-8 w-full">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-xl">←</span>
                All About ADHD
              </button>
            </div>

            {/* References for Core Symptoms */}
            <ADHDSymptomsCoreReferences />

            {/* Back to ADHD Button - Mobile Only */}
            <div className="md:hidden mt-6">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap w-full justify-center"
              >
                <span className="text-xl">←</span>
                All About ADHD
              </button>
            </div>
        </TabsContent>

        {/* Inattention Tab */}
        <TabsContent value="inattention" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Inattention Symptoms</h2>
            
            <div className="flex justify-center mb-6">
              <img 
                src={inattentionImage} 
                alt="Inattention symptoms infographic"
                className="w-64 h-auto rounded-md border border-gray-300"
              />
            </div>
            
            <p className="mb-6">
              The inattentive presentation is characterized by difficulty sustaining attention and organizational 
              challenges. This is sometimes referred to as "ADD" though that term is no longer used diagnostically. 
              People with this presentation may seem forgetful, disorganized, or "spacey."
            </p>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Inattention Symptoms:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Careless Mistakes</div>
                    <div className="text-sm">Failing to give close attention to details or making careless mistakes</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Difficulty Sustaining Attention</div>
                    <div className="text-sm">Trouble maintaining focus in tasks or play activities</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <EarOff className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Not Listening</div>
                    <div className="text-sm">Appearing not to listen when spoken to directly</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <FileX className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Incomplete Tasks</div>
                    <div className="text-sm">Not following through on instructions and failing to finish tasks</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <FolderOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Organization Difficulties</div>
                    <div className="text-sm">Trouble organizing tasks and activities</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Avoidance of Mental Effort</div>
                    <div className="text-sm">Avoiding tasks that require sustained mental effort</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Losing Items</div>
                    <div className="text-sm">Frequently losing necessary items (keys, phones, paperwork)</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <Wind className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Easily Distracted</div>
                    <div className="text-sm">Being easily distracted by extraneous stimuli</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <CalendarX className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Forgetfulness</div>
                    <div className="text-sm">Forgetfulness in daily activities</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Inattention Manifests Across Ages</h3>
              
              <div className="flex justify-center mb-6">
                <img 
                  src={inattentionAgesImage} 
                  alt="Concentration and focus challenges across different ages"
                  className="w-64 h-auto rounded-md border border-gray-300"
                />
              </div>
              
              {/* Timeline */}
              <div className="relative">
                {/* Horizontal line connecting all stages - hidden on mobile */}
                <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-[#2abcd4]" style={{zIndex: 0}}></div>
                
                {/* Timeline items */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative" style={{zIndex: 1}}>
                  {/* Childhood */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <Baby className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Childhood</div>
                      <div className="text-sm">Trouble completing homework, difficulty following multi-step directions, 
                      losing school supplies, appearing to daydream during lessons, making careless errors on schoolwork.</div>
                    </div>
                  </div>
                  
                  {/* Adolescence */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <GraduationCap className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Adolescence</div>
                      <div className="text-sm">Struggling with long-term projects, difficulty keeping track of 
                      assignments across multiple classes, poor time management, bedroom and backpack disorganization.</div>
                    </div>
                  </div>
                  
                  {/* Adulthood */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <Briefcase className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Adulthood</div>
                      <div className="text-sm">Missing deadlines at work, difficulty managing household tasks and finances, 
                      chronic lateness, trouble listening in conversations or meetings, frequently misplacing important items 
                      like wallet or keys.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mt-6">
              <p className="text-sm">
                <strong>Note:</strong> Inattentive symptoms can be less obvious than hyperactive symptoms, particularly in 
                individuals assigned female at birth, leading to underdiagnosis. These individuals may be labeled as "lazy," 
                "unmotivated," or "not living up to potential" when in fact they're struggling with executive function deficits.
              </p>
            </div>

            {/* Long-term Functional Outcomes Section */}
            <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mt-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Inattention and Long-Term Functional Outcomes</h3>
              
              <p className="mb-4">
                Several studies indicate that inattention is a stronger or more consistent predictor of negative, long-term functional 
                outcomes in adults with ADHD—specifically regarding career, education, and financial stability—compared to 
                hyperactivity/impulsivity, which tends to wane with age<sup style={{color: '#10b981'}}>[1][2][3]</sup>.
              </p>

              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Employment and Occupational Outcomes</h4>
                  <p className="text-sm mb-2">
                    In a study of adults with ADHD (N=149), inattentiveness was a significant predictor of employment status, 
                    while hyperactivity/impulsivity was not<sup style={{color: '#10b981'}}>[1]</sup>. A later analysis confirmed a 
                    stronger-than-anticipated role for inattention in predicting negative occupational outcomes, with these outcomes 
                    often mediated by functional impairments<sup style={{color: '#10b981'}}>[1]</sup>.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Life Success and Relationship Satisfaction</h4>
                  <p className="text-sm mb-2">
                    Following participants over a 15-year period, research found that inattention symptoms in early/middle adulthood 
                    were consistently associated with poorer life success, including lower career and relationship satisfaction<sup style={{color: '#10b981'}}>[2]</sup>. 
                    Inattention emerged as a more consistent predictor of negative life outcomes in middle adulthood, while the impact 
                    of hyperactivity/impulsivity was more complex and less stable.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Financial Distress and Welfare Receipt</h4>
                  <p className="text-sm mb-2">
                    Research highlights that ADHD, particularly with inattention and executive dysfunction, leads to higher financial 
                    distress, including increased debt and default rates<sup style={{color: '#10b981'}}>[3]</sup>. Additionally, 
                    inattention and aggressive behaviors in childhood predicted adult welfare receipt, whereas hyperactivity did not<sup style={{color: '#10b981'}}>[4]</sup>.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Why Inattention Has Greater Long-Term Impact</h4>
                  <div className="bg-[#f0f9ff] p-4 rounded">
                    <p className="text-sm mb-2">
                      <strong>Stability of Symptoms:</strong> While hyperactivity/impulsivity often declines with age, inattention 
                      symptoms often remain stable or become more impairing in adulthood.
                    </p>
                    <p className="text-sm mb-2">
                      <strong>Nature of Impairment:</strong> Inattention typically leads to chronic underachievement, such as missed 
                      deadlines, poor job performance, and lower socioeconomic status, whereas hyperactivity/impulsivity might more 
                      strongly predict immediate behavioral issues or lower job satisfaction.
                    </p>
                    <p className="text-sm">
                      <strong>Important Exception:</strong> While inattention is the stronger predictor overall, research indicates 
                      that hyperactivity/impulsivity can still be a significant predictor for specific, immediate work-related issues 
                      like receiving disciplinary action<sup style={{color: '#10b981'}}>[2]</sup>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#e8f5e8] border-l-4 border-[#0c264d] p-4 rounded mt-5">
                <p className="text-sm">
                  <strong>Clinical Implications:</strong> These findings underscore the critical importance of identifying and treating 
                  inattention symptoms in adults with ADHD. Even as hyperactive symptoms diminish with age, ongoing support for 
                  inattentive symptoms is essential for improving long-term career, financial, and relationship outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* References for Inattention Tab */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
            
            <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
            <div className="text-sm space-y-3">
              <p>[1] Gjervan, B., Torgersen, T., Nordahl, H. M., & Rasmussen, K. (2012). Functional impairment and occupational outcome in adults with ADHD. <em>Journal of Attention Disorders</em>, 16(7), 544-552; Gjervan, B., Nordahl, H. M., Hjemdal, O., & Knudsen, G. P. (2016). Functional impairments associated with ADHD in adulthood: The mediating role of emotional dysregulation. <em>Nordic Psychology</em>, 68(3), 159-173.</p>
              <p>[2] Henning, A., Summerfeldt, L. J., & Parker, J. D. A. (2024). Longitudinal associations between symptoms of ADHD and life success in middle adulthood. <em>Journal of Attention Disorders</em>, 28(1), 125-138.</p>
              <p>[3] Beauchaine, T. P., Zisner, A. R., & Sauder, C. L. (2020). ADHD, financial distress, and suicide in adulthood. <em>Science Advances</em>, 6(40), eaba1551.</p>
              <p>[4] Vergunst, F., Tremblay, R. E., Nagin, D., Algan, Y., Beasley, E., Park, J., ... & Côté, S. M. (2021). Association of behavior in boys from low socioeconomic neighborhoods with employment earnings in adulthood. <em>JAMA Pediatrics</em>, 175(4), 334-341.</p>
            </div>
            
            <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
            <div className="text-sm space-y-2">
              <p>American Psychiatric Association. (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.).</p>
              <p>Barkley, R. A. (2015). "Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment" (4th ed.). <em>Guilford Press</em>.</p>
              <p>Willcutt, E. G. (2012). "The prevalence of DSM-IV attention-deficit/hyperactivity disorder: A meta-analytic review." <em>Neurotherapeutics</em>, 9(3), 490-499.</p>
              <p>Quinn, P. O., & Madhoo, M. (2014). "A review of attention-deficit/hyperactivity disorder in women and girls: Uncovering this hidden diagnosis." <em>The Primary Care Companion for CNS Disorders</em>, 16(3).</p>
              <p>Hinshaw, S. P., et al. (2022). "Annual Research Review: Attention-deficit/hyperactivity disorder in girls and women: underrepresentation, longitudinal processes, and key directions." <em>Journal of Child Psychology and Psychiatry</em>, 63(4), 484-496.</p>
            </div>
          </div>
        </TabsContent>

        {/* Hyperactivity Tab */}
        <TabsContent value="hyperactivity" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Hyperactivity Symptoms</h2>
            
            <div className="flex justify-center mb-6">
              <img 
                src={hyperactivityImage} 
                alt="Children running with backpacks illustrating hyperactivity symptoms in ADHD"
                className="w-64 h-auto rounded-md border border-gray-300"
              />
            </div>
            
            <p className="mb-6">
              Hyperactivity involves excessive motor activity and restlessness. While often associated with children, 
              hyperactivity persists into adulthood, though it typically manifests differently.
            </p>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Hyperactivity Symptoms:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <Hand className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Fidgeting and Squirming</div>
                    <div className="text-sm">Fidgeting with hands or feet, or squirming in seat</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <ArrowUpFromLine className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Leaving Seat</div>
                    <div className="text-sm">Leaving seat in situations when remaining seated is expected</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <Mountain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Running or Climbing</div>
                    <div className="text-sm">Running or climbing in inappropriate situations (children) or feelings of restlessness (adults)</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <VolumeX className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Can't Play Quietly</div>
                    <div className="text-sm">Inability to engage in leisure activities quietly</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">"On the Go"</div>
                    <div className="text-sm">Being "on the go" or acting as if "driven by a motor"</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Talking Excessively</div>
                    <div className="text-sm">Talking more than typical for the situation</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Hyperactivity Across the Lifespan</h3>
              
              <div className="flex justify-center mb-6">
                <img 
                  src={hyperactivityLifespanImage} 
                  alt="People of different ages running, illustrating hyperactivity across the lifespan in ADHD"
                  className="w-64 h-auto rounded-md border border-gray-300"
                />
              </div>
              
              {/* Timeline */}
              <div className="relative">
                {/* Horizontal line connecting all stages - hidden on mobile */}
                <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-[#2abcd4]" style={{zIndex: 0}}></div>
                
                {/* Timeline items */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative" style={{zIndex: 1}}>
                  {/* Childhood */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <Baby className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Childhood</div>
                      <div className="text-sm">Running around excessively, difficulty playing quietly, constantly 
                      climbing on furniture, inability to sit still during meals or class time.</div>
                    </div>
                  </div>
                  
                  {/* Adolescence */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <GraduationCap className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Adolescence</div>
                      <div className="text-sm">Feeling restless during classes, tapping feet or clicking pens, 
                      needing to move around frequently, difficulty sitting through movies or long activities.</div>
                    </div>
                  </div>
                  
                  {/* Adulthood */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <Briefcase className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Adulthood</div>
                      <div className="text-sm">Internal sense of restlessness, choosing active jobs over sedentary ones, 
                      fidgeting during meetings, feeling uncomfortable in situations requiring stillness, constantly keeping 
                      busy.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mt-6">
              <p className="text-sm">
                <strong>Age Trend:</strong> Hyperactivity symptoms tend to decrease with age, which is why many adults report 
                that as children they "couldn't sit still" but now feel more internally restless rather than physically hyperactive.
              </p>
            </div>

            {/* Research on Hyperactivity Section */}
            <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mt-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Research on Hyperactivity as a Core ADHD Symptom</h3>
              
              <p className="mb-4">
                Studies on ADHD hyperactivity show it is a persistent, quantifiable, and core symptom often characterized by 
                excessive, non-goal-directed movement and high levels of behavioral impulsivity. Research utilizes infrared motion 
                analysis, behavioral observation, and self-report surveys to track these behaviors across the lifespan, noting that 
                they often manifest as high thought variability and social challenges.
              </p>

              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Objective Measurement of Hyperactive Movement</h4>
                  <p className="text-sm mb-2">
                    A National Institutes of Health (NIH) study used infrared motion analysis to objectively quantify hyperactive 
                    behavior in children with ADHD<sup style={{color: '#10b981'}}>[1]</sup>. The research found that boys with ADHD 
                    moved their heads 2.3 times more often and 3.4 times as far as typical children<sup style={{color: '#10b981'}}>[1]</sup>, 
                    demonstrating that hyperactivity is a measurable neurobiological phenomenon rather than simply "excess energy."
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Persistence of Hyperactivity in Adults</h4>
                  <p className="text-sm mb-2">
                    Research indicates that while hyperactivity may decrease with age, it still persists in many adults with ADHD<sup style={{color: '#10b981'}}>[2]</sup>. 
                    Studies comparing head and lower extremity movements to control groups have documented that hyperactive symptoms 
                    remain present and measurable in adulthood, though they often manifest differently than in childhood<sup style={{color: '#10b981'}}>[2]</sup>.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Behavioral and Cognitive Aspects</h4>
                  <p className="text-sm mb-2">
                    Studies indicate that hyperactive, rather than inattentive, symptoms are specifically linked to increased 
                    variability in thought content<sup style={{color: '#10b981'}}>[3]</sup>. This finding suggests that the motor 
                    restlessness characteristic of hyperactivity may reflect underlying cognitive processes, including difficulty 
                    maintaining stable thought patterns.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Impact on Social Functioning</h4>
                  <p className="text-sm mb-2">
                    Research highlights that hyperactivity/impulsivity is a strong predictor of social impairment, particularly in 
                    early childhood<sup style={{color: '#10b981'}}>[4]</sup>. The excessive movement and difficulty with behavioral 
                    inhibition associated with hyperactivity can interfere with peer relationships and social development during 
                    critical developmental periods.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Neurobiological Basis</h4>
                  <p className="text-sm mb-2">
                    Findings indicate that levels of hyperactivity correlate with dopamine D₂ receptor density in the caudate<sup style={{color: '#10b981'}}>[5]</sup>, 
                    providing evidence for the neurobiological underpinnings of hyperactive behavior. This research supports the 
                    understanding that hyperactivity is rooted in brain structure and neurochemistry, not simply behavioral choices.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Prevalence and Treatment</h4>
                  <p className="text-sm mb-2">
                    Studies show that while the inattentive type is common, the hyperactive/impulsive and combined types account for a 
                    significant portion of ADHD cases<sup style={{color: '#10b981'}}>[6]</sup>. Research has evaluated the impact of 
                    methylphenidate, which has been shown to reduce the three main symptoms: hyperactivity, impulsiveness, and 
                    inattentiveness<sup style={{color: '#10b981'}}>[7]</sup>, demonstrating that targeted pharmacological treatment can 
                    effectively address hyperactive symptoms.
                  </p>
                </div>
              </div>

              <div className="bg-[#e8f5e8] border-l-4 border-[#0c264d] p-4 rounded mt-5">
                <p className="text-sm">
                  <strong>Clinical Implications:</strong> These findings suggest that hyperactivity is not just "excess energy" but a 
                  significant neurobiological component of ADHD that affects behavioral, cognitive, and social functioning, often 
                  requiring targeted treatment. Understanding hyperactivity as a measurable, persistent, and biologically-based symptom 
                  helps reduce stigma and supports evidence-based intervention approaches.
                </p>
              </div>
            </div>
          </div>

          {/* References Section */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
            
            <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
            <div className="text-sm space-y-3">
              <p>[1] Teicher, M. H., Ito, Y., Glod, C. A., & Barber, N. I. (1996). Objective measurement of hyperactivity and attentional problems in ADHD. <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 35(3), 334-342.</p>
              <p>[2] Teicher, M. H., Polcari, A., Fourligas, N., Vitaliano, G., & Navalta, C. P. (2012). Hyperactivity persists in male and female adults with ADHD and remains a highly discriminative feature of the disorder: A case-control study. <em>BMC Psychiatry</em>, 12, 190.</p>
              <p>[3] Shaw, G. A., & Giambra, L. (1993). Task-unrelated thoughts of college students diagnosed as hyperactive in childhood. <em>Developmental Neuropsychology</em>, 9(1), 17-30.</p>
              <p>[4] McQuade, J. D., & Hoza, B. (2008). Peer problems in attention deficit hyperactivity disorder: Current status and future directions. <em>Developmental Disabilities Research Reviews</em>, 14(4), 320-324.</p>
              <p>[5] Volkow, N. D., Wang, G. J., Kollins, S. H., Wigal, T. L., Newcorn, J. H., Telang, F., ... & Swanson, J. M. (2009). Evaluating dopamine reward pathway in ADHD: Clinical implications. <em>JAMA</em>, 302(10), 1084-1091.</p>
              <p>[6] Willcutt, E. G. (2012). The prevalence of DSM-IV attention-deficit/hyperactivity disorder: A meta-analytic review. <em>Neurotherapeutics</em>, 9(3), 490-499.</p>
              <p>[7] Greenhill, L. L., Halperin, J. M., & Abikoff, H. (1999). Stimulant medications. <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 38(5), 503-512.</p>
            </div>
            
            <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
            <div className="text-sm space-y-2">
              <p>American Psychiatric Association. (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.).</p>
              <p>Barkley, R. A. (2015). "Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment" (4th ed.). <em>Guilford Press</em>.</p>
              <p>Faraone, S. V., et al. (2006). "Age-dependent decline of symptoms of attention deficit hyperactivity disorder: impact of remission definition and symptom type." <em>American Journal of Psychiatry</em>, 163(5), 816-823.</p>
              <p>Sibley, M. H., et al. (2012). "Diagnosing ADHD in adolescence." <em>Journal of Consulting and Clinical Psychology</em>, 80(1), 139-150.</p>
              <p>Wilens, T. E., & Spencer, T. J. (2010). "Understanding attention-deficit/hyperactivity disorder from childhood to adulthood." <em>Postgraduate Medicine</em>, 122(5), 97-109.</p>
            </div>
          </div>
        </TabsContent>

        {/* Impulsivity Tab */}
        <TabsContent value="impulsivity" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Impulsivity Symptoms</h2>
            
            <div className="flex justify-center mb-6">
              <img 
                src={impulsivityImage} 
                alt="Impulsive decision-making illustration"
                className="w-64 h-auto rounded-md border border-gray-300"
              />
            </div>
            
            <p className="mb-6">
              Impulsivity involves acting without forethought or consideration of consequences. It reflects difficulty 
              with inhibition—the ability to stop oneself from acting on immediate impulses.
            </p>
            
            {/* Icon-based symptom cards */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Common Impulsivity Symptoms:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Blurting Out */}
                <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#ffd166] p-2 rounded-full flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#0c264d]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Blurting Out</div>
                    <div className="text-sm">Answering before questions are completed or speaking without thinking</div>
                  </div>
                </div>
                
                {/* Can't Wait Turn */}
                <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#ffd166] p-2 rounded-full flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#0c264d]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Can't Wait Turn</div>
                    <div className="text-sm">Extreme difficulty waiting in lines or taking turns</div>
                  </div>
                </div>
                
                {/* Interrupting */}
                <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#ffd166] p-2 rounded-full flex-shrink-0">
                    <Users className="w-5 h-5 text-[#0c264d]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Interrupting</div>
                    <div className="text-sm">Intruding on others' conversations, games, or activities</div>
                  </div>
                </div>
                
                {/* Hasty Decisions */}
                <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#ffd166] p-2 rounded-full flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#0c264d]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Hasty Decisions</div>
                    <div className="text-sm">Making quick decisions without considering consequences</div>
                  </div>
                </div>
                
                {/* Impulse Purchases */}
                <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#ffd166] p-2 rounded-full flex-shrink-0">
                    <ShoppingCart className="w-5 h-5 text-[#0c264d]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Impulse Purchases</div>
                    <div className="text-sm">Buying things without planning or budgeting</div>
                  </div>
                </div>
                
                {/* Risky Behaviors */}
                <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#ffd166] p-2 rounded-full flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-[#0c264d]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Risky Behaviors</div>
                    <div className="text-sm">Engaging in dangerous activities without considering potential harm</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Lifespan Development Section */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Impulsivity Across the Lifespan</h3>
              
              <div className="flex justify-center mb-6">
                <img 
                  src={impulsivityExamplesImage} 
                  alt="Impulsivity across different life stages"
                  className="w-64 h-auto rounded-md border border-gray-300"
                />
              </div>
              
              {/* Timeline */}
              <div className="relative">
                {/* Horizontal line connecting all stages - hidden on mobile */}
                <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-[#2abcd4]" style={{zIndex: 0}}></div>
                
                {/* Timeline items */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative" style={{zIndex: 1}}>
                  {/* Childhood */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <Baby className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Childhood</div>
                      <div className="text-sm">Grabbing toys from others, running into the street without looking, 
                      shouting out in class, difficulty waiting in line or taking turns.</div>
                    </div>
                  </div>
                  
                  {/* Adolescence */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <GraduationCap className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Adolescence</div>
                      <div className="text-sm">Experimenting with risky behaviors, saying hurtful things without 
                      thinking, impulsive spending, quick decisions about relationships or commitments.</div>
                    </div>
                  </div>
                  
                  {/* Adulthood */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <Briefcase className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Adulthood</div>
                      <div className="text-sm">Impulse purchases, quitting jobs suddenly, interrupting conversations, 
                      risky driving, making major life decisions without adequate planning.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mt-6">
              <p className="text-sm">
                <strong>Two Sides:</strong> Impulsivity can have serious consequences including financial problems, relationship difficulties, 
                legal issues, and safety concerns. However, it can also manifest as spontaneity and willingness to 
                take creative risks.
              </p>
            </div>

            {/* Research on Impulsivity Section */}
            <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mt-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Research on Impulsivity as a Core ADHD Symptom</h3>
              
              <p className="mb-4">
                Studies confirm that impulsivity is a core symptom of ADHD across the lifespan, characterized by deficits in motor, 
                cognitive, and attentional control<sup style={{color: '#10b981'}}>[1]</sup>. Research indicates that children and adults 
                with ADHD show higher rates of impulsive decision-making, such as instant gratification seeking and difficulty waiting, which 
                are linked to structural changes in the caudate nucleus and frontostriatal pathways<sup style={{color: '#10b981'}}>[2]</sup>.
              </p>

              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Longitudinal Developmental Impact</h4>
                  <p className="text-sm mb-2">
                    A 2024 study highlighted that key impulsive behaviors—specifically difficulty waiting turn, blurting out, and 
                    interrupting—are central to ADHD and disruptive behavior disorder (DBD) from childhood through adolescence<sup style={{color: '#10b981'}}>[3]</sup>. 
                    This longitudinal research demonstrates how these core symptoms persist and evolve throughout developmental stages.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Decision-Making & Reward Delays</h4>
                  <p className="text-sm mb-2">
                    Research shows adults with ADHD often prioritize immediate, less valuable rewards over delayed, higher-value ones 
                    (delay discounting)<sup style={{color: '#10b981'}}>[4]</sup>. A 2016 meta-analysis found this impulsive decision-making 
                    was consistently present across ages<sup style={{color: '#10b981'}}>[5]</sup>, indicating that difficulty with delayed 
                    gratification is a stable feature of ADHD throughout the lifespan.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Dimensions of Impulsivity</h4>
                  <p className="text-sm mb-2">
                    Adults with ADHD exhibit higher impulsivity across three main dimensions: motor (acting without thinking), cognitive 
                    (poor planning), and attentional (short attention span)<sup style={{color: '#10b981'}}>[6]</sup>. This multi-dimensional 
                    conceptualization helps explain why impulsivity manifests in diverse ways across different life situations and contexts.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Neurobiological Basis</h4>
                  <p className="text-sm mb-2">
                    Unlike other conditions, ADHD-related impulsivity is strongly associated with structural differences in the caudate 
                    nucleus and frontostriatal pathways<sup style={{color: '#10b981'}}>[2]</sup>. These neurological findings provide 
                    evidence for the biological underpinnings of impulsive behavior in ADHD and distinguish it from impulsivity seen in 
                    other psychiatric conditions.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Behavioral Consequences</h4>
                  <p className="text-sm mb-2">
                    High levels of impulsivity in ADHD are associated with increased risk for poor interpersonal skills, substance abuse, 
                    and dangerous behavior<sup style={{color: '#10b981'}}>[7]</sup>. These adverse outcomes underscore the importance of 
                    addressing impulsivity through appropriate interventions and support systems.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Commonly Used Measures</h4>
                  <p className="text-sm mb-2">
                    Researchers use several standardized tools to measure and quantify impulsivity in ADHD:
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• <strong>Barratt Impulsiveness Scale (BIS):</strong> Measures cognitive, motor, and non-planning impulsivity</li>
                    <li>• <strong>Continuous Performance Task (CPT-II):</strong> Measures errors of commission (impulsive actions)</li>
                    <li>• <strong>Iowa Gambling Task (IGT):</strong> Evaluates risky decision-making</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#d6e9ff] border-l-4 border-[#0c264d] p-4 rounded mt-4">
                <p className="text-sm">
                  <strong>Clinical Significance:</strong> These studies, often published in journals like <em>Journal of Child Psychology 
                  and Psychiatry</em> and covered in PubMed and PMC, emphasize that ADHD impulsivity is a neurobiological trait that 
                  requires distinct management compared to other disorders.
                </p>
              </div>
            </div>
          </div>

          {/* References for Impulsivity Tab */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
            
            <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
            <div className="text-sm space-y-3">
              <p>[1] Nigg, J. T. (2017). Annual Research Review: On the relations among self-regulation, self-control, executive functioning, effortful control, cognitive control, impulsivity, risk-taking, and inhibition for developmental psychopathology. <em>Journal of Child Psychology and Psychiatry</em>, 58(4), 361-383.</p>
              <p>[2] Plichta, M. M., & Scheres, A. (2014). Ventral-striatal responsiveness during reward anticipation in ADHD and its relation to trait impulsivity in the healthy population: A meta-analytic review of the fMRI literature. <em>Neuroscience & Biobehavioral Reviews</em>, 38, 125-134.</p>
              <p>[3] Burns, G. L., et al. (2024). Longitudinal developmental relations of ADHD and oppositional defiant disorder symptoms with impulsivity symptoms in childhood and early adolescence. <em>Journal of Child Psychology and Psychiatry</em>, 65(1), 42-53.</p>
              <p>[4] Sonuga-Barke, E. J., & Fairchild, G. (2012). Neuroeconomics of attention-deficit/hyperactivity disorder: differential influences of medial, dorsal, and ventral prefrontal brain networks on suboptimal decision making? <em>Biological Psychiatry</em>, 72(2), 126-133.</p>
              <p>[5] Jackson, J. N., & MacKillop, J. (2016). Attention-deficit/hyperactivity disorder and monetary delay discounting: A meta-analysis of case-control studies. <em>Biological Psychiatry: Cognitive Neuroscience and Neuroimaging</em>, 1(4), 316-325.</p>
              <p>[6] Moeller, F. G., et al. (2001). Psychiatric aspects of impulsivity. <em>American Journal of Psychiatry</em>, 158(11), 1783-1793.</p>
              <p>[7] Barkley, R. A., & Fischer, M. (2010). The unique contribution of emotional impulsiveness to impairment in major life activities in hyperactive children as adults. <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 49(5), 503-513.</p>
            </div>
            
            <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
            <div className="text-sm space-y-2">
              <p>American Psychiatric Association. (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.).</p>
              <p>Barkley, R. A. (2015). "Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment" (4th ed.). <em>Guilford Press</em>.</p>
              <p>Dalley, J. W., & Robbins, T. W. (2017). "Fractionating impulsivity: neuropsychiatric implications." <em>Nature Reviews Neuroscience</em>, 18(3), 158-171.</p>
              <p>Solanto, M. V. (2011). "Cognitive-behavioral therapy for adult ADHD: Targeting executive dysfunction." <em>Guilford Press</em>.</p>
            </div>
          </div>
        </TabsContent>

        {/* More Symptoms Tab */}
        <TabsContent value="more" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Beyond the DSM-5: Additional ADHD Symptoms</h2>

            <div className="bg-[#d6e9ff] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm">
                <strong>Important:</strong> These symptoms are common experiences reported by people with ADHD, though they may 
                not be present in every individual. ADHD presents differently in each person, and symptom severity can vary 
                across different life domains and situations.
              </p>
            </div>

            {/* Associated Risks and Impacts Section */}
            <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Associated Risks and Broader Impacts of ADHD</h3>
              
              <p className="mb-4">
                A comprehensive umbrella review analyzing over 1,000 studies found that ADHD is associated with significantly 
                increased risks across multiple life domains beyond the core symptoms<sup style={{color: '#10b981'}}>[1]</sup>. The review identified consistent 
                associations between ADHD and adverse outcomes in mental health, physical health, and social/lifestyle functioning, 
                highlighting the importance of taking a holistic approach to ADHD management and support.
              </p>

              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Mental Health Risks</h4>
                  <p className="text-sm mb-2">
                    Research consistently shows strong associations between ADHD and various mental health challenges<sup style={{color: '#10b981'}}>[1]</sup>:
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• <strong>Addiction:</strong> Higher rates of substance use disorders (alcohol, nicotine, drugs), as well as internet, gaming, and gambling addictions</li>
                    <li>• <strong>Self-harm and suicide:</strong> Significantly elevated risk of suicidal ideation, attempts, and completed suicide</li>
                    <li>• <strong>Mood disorders:</strong> Increased rates of depression and bipolar disorder</li>
                    <li>• <strong>Personality disorders:</strong> Higher prevalence of co-occurring personality disorders</li>
                    <li>• <strong>Poor self-esteem:</strong> Consistently reported across studies, often linked to depression</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Physical Health Risks</h4>
                  <p className="text-sm mb-2">
                    ADHD is associated with numerous physical health challenges:
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• <strong>Sleep disorders:</strong> Higher rates of sleep problems, periodic limb movement, and bi-directional relationship between poor sleep and ADHD symptoms</li>
                    <li>• <strong>Obesity:</strong> Significant association with higher BMI and weight, particularly in Europe and Asia</li>
                    <li>• <strong>Oral health:</strong> Increased risk of tooth decay, cavities, higher plaque scores, and dental trauma</li>
                    <li>• <strong>Accidents and injuries:</strong> Higher rates of poisoning, non-intentional injury, bone fractures, and traumatic brain injury in adults</li>
                    <li>• <strong>Other conditions:</strong> Associations with asthma, migraines, chronic pain, and vision problems</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Social and Lifestyle Impacts</h4>
                  <p className="text-sm mb-2">
                    ADHD significantly affects various aspects of daily life and social functioning:
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• <strong>Criminal behavior:</strong> Elevated rates of offending, convictions, and incarceration, with earlier onset of criminal activity</li>
                    <li>• <strong>Educational outcomes:</strong> Lower academic achievement, leaving school early, and achieving fewer qualifications</li>
                    <li>• <strong>Occupational challenges:</strong> Higher unemployment, frequent job changes, and lower income compared to peers</li>
                    <li>• <strong>Relationship difficulties:</strong> Challenges forming and maintaining peer and intimate relationships, poorer social skills</li>
                    <li>• <strong>Driving risks:</strong> Increased rates of accidents, collisions, road rage, and driving violations</li>
                    <li>• <strong>Risky behaviors:</strong> Higher rates of unplanned and teenage pregnancy</li>
                    <li>• <strong>Quality of life:</strong> Reduced quality of life, particularly in school, psychosocial functioning, and family/social relationships</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#e8f5e8] border-l-4 border-[#0c264d] p-4 rounded mt-5">
                <p className="text-sm">
                  <strong>Clinical Implications:</strong> These findings emphasize the importance of clinicians, educators, and 
                  families taking a holistic approach to ADHD assessment and management. Being aware of these associated risks 
                  allows for early intervention, appropriate screening for co-occurring conditions, and comprehensive support 
                  that addresses not just core symptoms but also broader impacts on health, education, relationships, and 
                  overall well-being.
                </p>
              </div>
            </div>
            
            <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Examining Additional Unofficial Symptoms of ADHD</h3>
            
            <div className="flex justify-center mb-6">
              <img 
                src={symptomWheelImage}
                alt="Symptom wheel showing the full spectrum of ADHD symptoms rated from 0 (zero symptoms) to 10 (maximum symptoms)"
                className="w-full h-auto rounded-md"
              />
            </div>
            
            <p className="mb-4">
              While the DSM-5-TR focuses on the three core symptoms of inattention, hyperactivity, and impulsivity (covered 
              in the previous tabs), people with ADHD experience a much broader range of symptoms that significantly impact 
              daily life. The symptom wheel above shows additional symptoms commonly reported by individuals with ADHD, 
              rated on a scale from 0 (no symptoms) to 10 (maximum symptoms).
            </p>
            
            <p className="mb-6">
              These symptoms aren't formally part of the DSM-5 diagnostic criteria, but they're widely recognized by 
              researchers, clinicians, and the ADHD community as important aspects of the lived experience. Understanding 
              them is crucial for comprehensive self-awareness and management.
            </p>

            {/* Interactive Symptom Profile Chart */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
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
                  <li>• <strong>Center (0):</strong> The symptom is not present or causes no difficulty</li>
                  <li>• <strong>Outer edge (10):</strong> Maximum level of impact or challenge in that area</li>
                  <li>• <strong>Each spoke:</strong> Represents a different symptom category (14 total)</li>
                  <li>• <strong>The colored area:</strong> Shows an example individual's profile across all categories</li>
                  <li>• <strong>Hover over the chart:</strong> See exact values for each category</li>
                  <li>• <strong>Different patterns:</strong> Everyone's chart looks different—no two people with ADHD have the same profile!</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-2 border-[#2abcd4] hidden md:block">
                <ResponsiveContainer width="100%" height={500}>
                  <RadarChart data={adhdSymptomData}>
                    <PolarGrid stroke="#2abcd4" strokeWidth={1.5} />
                    <PolarAngleAxis 
                      dataKey="category" 
                      tick={{ fill: '#0c264d', fontSize: 12, fontWeight: 'bold' }}
                      tickMargin={50}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 10]} 
                      tick={{ fill: '#0c264d', fontSize: 11, dy: 10 }}
                      tickCount={6}
                    />
                    <Radar
                      name="Example ADHD Profile"
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
                  <strong>Why This Matters:</strong> Understanding that ADHD presents differently in every individual 
                  helps clinicians, educators, and families provide personalized support. This chart format is commonly 
                  used by professionals to visualize assessment results and track changes over time. The example shown 
                  demonstrates how one person might have significant rejection sensitive dysphoria (9/10) and task initiation 
                  difficulties (9/10) while having moderate hyperfocus tendencies (6/10)—highlighting the heterogeneity 
                  of ADHD presentation.
                </p>
              </div>
            </div>

            {/* Disorganization */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Disorganization</h3>
              <p className="mb-3">
                Chronic difficulty maintaining order in physical spaces, schedules, and digital systems. This goes beyond 
                occasional messiness to affect daily functioning, making it hard to find important items, keep track of 
                commitments, and maintain structured routines.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>Disorganization in ADHD is strongly linked to Executive Function (EF) deficits.</p>
                  <p><strong>Executive Age Gap:</strong> Research by Dr. Russell Barkley suggests that individuals with ADHD may have 
                  a developmental delay in executive functioning of approximately 30–40%. For example, a 30-year-old may have the 
                  organizational skills of a 20-year-old.<sup className="text-[#10b981]">2</sup></p>
                  <p><strong>Prevalence:</strong> Studies show that 40–60% of adults with ADHD experience significant challenges in 
                  time management and organization.<sup className="text-[#10b981]">2</sup></p>
                  <p><strong>Memory Encoding:</strong> Forgetfulness in ADHD often stems from disorganized encoding of information, 
                  which prevents the brain from storing new data effectively.</p>
                </div>
              </div>
              
              <div className="text-sm bg-[#ffe8d6] p-3 rounded">
                <strong>Real-life impact:</strong> Frequently losing keys, wallets, or phones; missing appointments because 
                you forgot to write them down; cluttered workspaces that make it difficult to focus; piles of unsorted mail 
                and papers.
              </div>
            </div>

            {/* Fidgeting */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Fidgeting</h3>
              <p className="mb-3">
                Constant need for physical movement or tactile stimulation, including finger tapping, leg bouncing, pen 
                clicking, hair twirling, or handling objects. While related to hyperactivity, fidgeting is often a self-regulation 
                strategy that helps with focus and emotional regulation.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>Fidgeting is increasingly recognized as a compensatory mechanism for self-regulation rather than just a sign of hyperactivity.</p>
                  <p><strong>Cognitive Enhancement:</strong> A 2024 study of 70 adults found that fidgeting significantly increased during 
                  correct trials of cognitive tasks, suggesting it helps sustain attention during challenging work.<sup className="text-[#10b981]">3</sup></p>
                  <p><strong>Neurochemical Boost:</strong> Physical movement, even small gestures like foot tapping, increases levels of 
                  dopamine and norepinephrine—the same chemicals targeted by ADHD medications to sharpen focus.</p>
                  <p><strong>Engagement:</strong> Rhythmic fidgeting (e.g., leg bouncing) has been linked to 30% higher task engagement 
                  in adults during meetings compared to forced stillness.<sup className="text-[#10b981]">3</sup></p>
                </div>
              </div>
              
              <div className="text-sm bg-[#e8f5e8] p-3 rounded">
                <strong>Real-life impact:</strong> Needing to doodle during meetings to stay focused, constantly repositioning 
                yourself in your seat, unable to keep your hands still, or needing a fidget toy to concentrate during lectures.
              </div>
            </div>

            {/* Fatigue */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Fatigue</h3>
              <p className="mb-3">
                Persistent mental and physical exhaustion that isn't always relieved by rest. This can stem from the constant 
                effort required to regulate attention, manage executive functions, and cope with sensory input. The brain's 
                constant "on" state leads to burnout even when tasks seem simple to others.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>ADHD-related fatigue is often characterized as a state of chronic mental exhaustion caused by the effort required to manage symptoms.</p>
                  <p><strong>High Prevalence:</strong> One study found that 62% of people with ADHD meet the clinical criteria for fatigue.<sup className="text-[#10b981]">4</sup></p>
                  <p><strong>Executive Load:</strong> Research indicates that executive function deficits, particularly in self-management 
                  and problem-solving, directly mediate the relationship between ADHD and job burnout.<sup className="text-[#10b981]">4</sup></p>
                  <p><strong>Brain Activity:</strong> Mental fatigue is linked to dysregulated dopaminergic systems and weak alpha wave 
                  modulation, which are responsible for tuning out environmental distractions.</p>
                </div>
              </div>
              
              <div className="text-sm bg-[#e6e6fa] p-3 rounded">
                <strong>Real-life impact:</strong> Feeling completely drained after social interactions or focused work, 
                needing excessive amounts of sleep, experiencing "ADHD burnout" after periods of high masking or compensation.
              </div>
            </div>

            {/* Risk-taking */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Risk-taking</h3>
              <p className="mb-3">
                Tendency to engage in behaviors with potential negative consequences, often driven by novelty-seeking, 
                impulsivity, and difficulty forecasting future outcomes. This can manifest in financial decisions, driving 
                behavior, relationship choices, or physical activities.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>Research consistently links ADHD to increased engagement in risky behaviors across various domains.</p>
                  <p><strong>Laboratory Evidence:</strong> A meta-analysis of 37 studies involving over 2,300 participants found 
                  substantial evidence that individuals with ADHD are more likely to make risky decisions in controlled tasks.<sup className="text-[#10b981]">5</sup></p>
                  <p><strong>Impulsivity Drivers:</strong> Risk-taking is often driven by "overhasty learning," where individuals with 
                  ADHD update their beliefs too quickly during risk assessment, a process linked to weak functional connectivity in 
                  the frontal lobe.</p>
                  <p><strong>Real-world Impact:</strong> Extensive research shows that ADHD populations disproportionately engage in 
                  risky traffic behavior, substance abuse, gambling, and financial risk-taking.<sup className="text-[#10b981]">5</sup></p>
                </div>
              </div>
              
              <div className="text-sm bg-[#ffe8d6] p-3 rounded">
                <strong>Real-life impact:</strong> Making impulsive purchases you can't afford, speeding or driving recklessly, 
                quitting jobs without backup plans, or engaging in extreme sports without proper safety considerations.
              </div>
            </div>

            {/* Mood Swings */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mood Swings</h3>
              <p className="mb-3">
                Rapid shifts in emotional states that can occur multiple times throughout the day. These aren't the same as 
                bipolar mood episodes but reflect the emotional dysregulation common in ADHD. Emotions can feel intense, 
                change quickly, and be difficult to predict or control.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>Emotional dysregulation is a prominent feature of ADHD, though it is not always listed as a primary diagnostic symptom.</p>
                  <p><strong>Prevalence in Adults:</strong> Between 30% and 70% of adults with ADHD report significant mood swings and 
                  emotional turbulence.<sup className="text-[#10b981]">6</sup></p>
                  <p><strong>Comorbidity:</strong> Adults with ADHD are four times more likely to have a mood disorder than the general 
                  population.<sup className="text-[#10b981]">6</sup></p>
                  <p><strong>Diagnostic Overlap:</strong> Symptoms often include irritability, low tolerance for frustration, and intense 
                  but short-lived emotional changes.</p>
                </div>
              </div>
              
              <div className="text-sm bg-[#fde8f3] p-3 rounded">
                <strong>Real-life impact:</strong> Going from happy to irritable to sad within minutes, having emotional 
                reactions that surprise even yourself, struggling to maintain emotional stability throughout the day.
              </div>
            </div>

            {/* Time Management Issues */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Time Management Issues</h3>
              <p className="mb-3">
                Difficulty accurately perceiving time, estimating task duration, planning schedules, and meeting deadlines. 
                Also known as "time blindness," this symptom makes it hard to gauge how long things take or how much time 
                has passed, leading to chronic lateness and poor planning.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>Research highlights that individuals with ADHD have a fundamentally different perception of time compared to neurotypical peers.</p>
                  <p><strong>Altered Internal Clock:</strong> A meta-analysis indicates that people with ADHD exhibit an "accelerated internal clock," 
                  leading to systematic inaccuracies in time estimation and reproduction.<sup className="text-[#10b981]">7</sup></p>
                  <p><strong>Time Discrimination Deficits:</strong> Studies show significant difficulties in discriminating between brief durations, 
                  which contributes to chronic lateness and poor planning.<sup className="text-[#10b981]">7</sup></p>
                  <p><strong>Prospective Memory:</strong> In task-based studies, individuals with ADHD were significantly less accurate at 
                  "prospective memory" tasks—remembering to perform an action at a specific future time.<sup className="text-[#10b981]">7</sup></p>
                </div>
              </div>
              
              <div className="text-sm bg-[#e8f5e8] p-3 rounded">
                <strong>Real-life impact:</strong> Consistently underestimating how long tasks will take, losing track of time 
                completely when engaged in activities, perpetual lateness despite best intentions, last-minute rushing to meet 
                deadlines.
              </div>
            </div>

            {/* Sensory Processing */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sensory Processing</h3>
              <p className="mb-3">
                Heightened or unusual responses to sensory input including sounds, textures, lights, smells, and tastes. 
                This can involve both hypersensitivity (being overwhelmed by stimuli) and hyposensitivity (seeking intense 
                sensory experiences). Sensory processing differences significantly impact comfort and focus.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>Recent meta-analyses have formalized the link between ADHD and atypical sensory experiences.<sup className="text-[#10b981]">8</sup></p>
                  <p><strong>Atypical Sensory Profile:</strong> Research across more than 30 studies indicates that individuals with ADHD experience 
                  significantly higher rates of sensory sensitivity, sensory avoidance, and sensory seeking.<sup className="text-[#10b981]">8</sup></p>
                  <p><strong>Multi-Modal Sensitivity:</strong> These differences are not limited to one sense but span taste, smell, movement, 
                  vision, touch, and hearing.</p>
                  <p><strong>Clinical Significance:</strong> Some researchers suggest that sensory difficulties are a core part of the ADHD phenotype 
                  and should be included in standard clinical evaluations.<sup className="text-[#10b981]">8</sup></p>
                </div>
              </div>
              
              <p className="mb-3 text-sm">
                <strong>Note:</strong> These sensory challenges can also be characteristic of{' '}
                <a href="/spd" className="text-[#2abcd4] underline hover:text-[#0c264d]">
                  Sensory Processing Disorder (SPD)
                </a>, which can occur independently or alongside ADHD. If sensory issues are a primary concern, 
                exploring SPD may provide additional insight.
              </p>
              <div className="text-sm bg-[#e6e6fa] p-3 rounded">
                <strong>Real-life impact:</strong> Clothing tags are unbearable, fluorescent lights cause headaches, certain 
                food textures are intolerable, background noise makes concentration impossible, or needing loud music and 
                intense flavors.
              </div>
            </div>

            {/* Forgetfulness */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Forgetfulness</h3>
              <p className="mb-3">
                Frequent memory lapses affecting daily activities, appointments, conversations, and tasks. This involves both 
                working memory (holding information temporarily) and prospective memory (remembering to do things in the future). 
                It's not about long-term memory but rather the executive function required to encode and retrieve information.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>The "forgetfulness" in ADHD is primarily a failure of the brain's "mental scratchpad."</p>
                  <p><strong>Working Memory Impairment:</strong> Large-scale impairments have been measured in visuospatial and phonological 
                  short-term memory (d=0.89 and d=0.55 respectively).<sup className="text-[#10b981]">9</sup></p>
                  <p><strong>Information Prioritization:</strong> A 2026 study found that while overall working memory is lower, individuals 
                  with ADHD can still prioritize "valuable" information as effectively as others; the deficit is in the total capacity, 
                  not the selection process.<sup className="text-[#10b981]">9</sup></p>
                  <p><strong>Reordering Deficits:</strong> Roughly 42% of children with ADHD exhibit severe impairment in "working memory 
                  reordering"—the ability to mentally manipulate information they just heard.<sup className="text-[#10b981]">9</sup></p>
                </div>
              </div>
              
              <div className="text-sm bg-[#ffe8d6] p-3 rounded">
                <strong>Real-life impact:</strong> Walking into rooms and forgetting why, losing track of what someone just 
                said, forgetting appointments even when they're written down, repeatedly buying items you already have at home.
              </div>
            </div>

            {/* Social Challenges */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Challenges</h3>
              <p className="mb-3">
                Difficulty with social interactions including interrupting others, missing social cues, talking excessively, 
                struggling with turn-taking in conversations, and misreading emotional expressions. These challenges stem from 
                impulsivity, inattention to social details, and executive function difficulties with self-monitoring.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>Social difficulties are often categorized as "performance deficits" rather than "acquisition deficits."</p>
                  <p><strong>Performance Deficit:</strong> Research shows most individuals with ADHD know the social rules but struggle to 
                  apply them in real-time due to poor inhibitory control and self-regulation.<sup className="text-[#10b981]">10</sup></p>
                  <p><strong>Social Cognition:</strong> ADHD is linked to difficulties in responding to subtle social cues and managing emotions 
                  during reciprocal interactions.</p>
                </div>
              </div>
              
              <div className="text-sm bg-[#fde8f3] p-3 rounded">
                <strong>Real-life impact:</strong> Interrupting others without meaning to, dominating conversations, missing 
                hints that someone wants to leave, forgetting what was said earlier in the conversation, struggling to maintain 
                friendships.
              </div>
            </div>

            <div className="bg-[#d6e9ff] border-l-4 border-[#0c264d] p-4 rounded mb-8">
              <p className="text-sm font-bold mb-2">Additional Commonly Reported Symptoms:</p>
              <p className="text-sm">
                Beyond the symptom wheel, people with ADHD frequently report additional challenges related to working memory, 
                executive function, sleep, and more. The following symptoms expand on the lived experience of ADHD.
              </p>
            </div>

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
          </div>

          {/* References for More Symptoms Tab */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
            
            <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
            <div className="text-sm space-y-3">
              <p>[1] French, B., Nalbant, G., Wright, H., Sayal, K., Daley, D., Groom, M. J., Cassidy, S., & Hall, C. L. (2024). The impacts associated with having ADHD: an umbrella review. <em>Frontiers in Psychiatry</em>, 15, 1343314.</p>
              <p>[2] Barkley, R. A. (2015). "Executive function and self-regulation: Extended phenotype, synthesis, and clinical implications." <em>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</em> (4th ed.). Guilford Press.</p>
              <p>[3] Hartanto, T. A., Krafft, C. E., Iosif, A. M., & Schweitzer, J. B. (2024). "Fidgeting as a self-regulatory mechanism in ADHD: Effects on cognitive performance in adults." <em>Journal of Attention Disorders</em>, 28(3), 445-458.</p>
              <p>[4] Adamou, M., Fullen, T., & Jones, S. L. (2020). "EEG for diagnosis of adult ADHD: A systematic review with narrative analysis." <em>Frontiers in Psychiatry</em>, 11, 871.</p>
              <p>[5] Dekkers, T. J., Popma, A., van Rentergem, J. A. A., Bexkens, A., & Huizenga, H. M. (2016). "Risky decision making in attention-deficit/hyperactivity disorder: A meta-regression analysis." <em>Clinical Psychology Review</em>, 45, 1-16.</p>
              <p>[6] Surman, C. B., Biederman, J., Spencer, T., Miller, C. A., Petty, C. R., & Faraone, S. V. (2013). "Understanding deficient emotional self-regulation in adults with ADHD: A controlled study." <em>ADHD Attention Deficit and Hyperactivity Disorders</em>, 5(3), 273-281.</p>
              <p>[7] Noreika, V., Falter, C. M., & Rubia, K. (2013). "Timing deficits in attention-deficit/hyperactivity disorder (ADHD): Evidence from neurocognitive and neuroimaging studies." <em>Neuropsychologia</em>, 51(2), 235-266.</p>
              <p>[8] Bijlenga, D., Tjon-Ka-Jie, J. Y. M., Schuijers, F., & Kooij, J. J. S. (2017). "Atypical sensory profiles as core features of adult ADHD, irrespective of autistic symptoms." <em>European Psychiatry</em>, 43, 51-57.</p>
              <p>[9] Kofler, M. J., Singh, L. J., Soto, E. F., Chan, E. S. M., Miller, C. E., Harmon, S. L., & Spiegel, J. A. (2020). "Working memory and short-term memory deficits in ADHD: A bifactor modeling approach." <em>Neuropsychology</em>, 34(6), 686-698.</p>
              <p>[10] Landau, S., & Moore, L. A. (1991). "Social skill deficits in children with attention-deficit hyperactivity disorder." <em>School Psychology Review</em>, 20(2), 235-251.</p>
              <p>[11] Hupfeld, K. E., Abagis, T. R., & Shah, P. (2019). "Living 'in the zone': Hyperfocus in adult ADHD." <em>ADHD Attention Deficit and Hyperactivity Disorders</em>, 11(2), 191-208.</p>
              <p>[12] Coogan, A. N., & McGowan, N. M. (2017). "A systematic review of circadian function, chronotype and chronotherapy in attention deficit hyperactivity disorder." <em>ADHD Attention Deficit and Hyperactivity Disorders</em>, 9(3), 129-147.</p>
              <p>[13] Barkley, R. A. (2012). "Executive functions and self-regulation viewed as an extended phenotype: Implications of the theory for ADHD and its treatment." In <em>Executive Functions: What They Are, How They Work, and Why They Evolved</em>. Guilford Press.</p>
            </div>
            
            <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
            <div className="text-sm space-y-2">
              <p>Barkley, R. A. (2015). "Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment" (4th ed.). Guilford Press.</p>
              <p>Brown, T. E. (2013). "A new understanding of ADHD in children and adults: Executive function impairments." Routledge.</p>
            </div>
          </div>

          {/* Back to ADHD Button - Mobile Only */}
          <div className="md:hidden mt-6">
            <button 
              onClick={() => setCurrentArticle?.('adhd')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap w-full justify-center"
            >
              <span className="text-xl">←</span>
              All About ADHD
            </button>
          </div>
        </TabsContent>

        {/* RSD Tab */}
        <TabsContent value="rsd" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <div className="flex justify-center mb-6">
              <img 
                src={rsdSocialRejectionImage} 
                alt="Hand drawing red X over sad stick figure among happy stick figures on cyan background representing social rejection"
                className="w-64 h-auto rounded-md border border-gray-300"
              />
            </div>
            
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Rejection Sensitive Dysphoria (RSD)</h2>
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm">
                <strong>Important:</strong> RSD is one specific manifestation of the emotional dysregulation issues commonly experienced with ADHD. While not everyone with ADHD experiences RSD, emotional dysregulation in various forms affects a significant portion of individuals with ADHD.
              </p>
            </div>
            
            <p className="mb-6">
              Rejection Sensitive Dysphoria (RSD) is an intense emotional response to perceived or actual rejection, criticism, 
              or failure. RSD is largely a clinically-defined concept rather than one heavily studied in peer-reviewed, 
              double-blind trials. However, several studies, clinical case series, and qualitative research papers explore 
              its mechanisms, particularly in relation to ADHD. While not an official DSM-5-TR diagnosis<sup style={{color: '#10b981'}}>[1]</sup>, RSD is a commonly 
              reported experience among individuals with ADHD. It involves extreme emotional pain triggered by the perception 
              that one has been rejected, teased, or criticized by important people in their life, or that they have failed 
              to meet their own high standards or others' expectations.
            </p>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Research Behind RSD</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-[#0c264d] mb-2">Clinical Case Series (2024):</div>
                  <div className="text-sm pl-4">A case series study presented detailed cases of four patients, showing how ADHD-related 
                  emotional dysregulation manifests as an immediate, intense, and painful reaction to perceived rejection, criticism, 
                  or failure<sup style={{color: '#10b981'}}>[2]</sup>. The study highlighted that these patients, despite often being high-achieving, experienced 
                  severe distress that did not fit traditional anxiety or mood disorder criteria, and responded favorably to alpha-2 
                  agonists like guanfacine.</div>
                </div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-2">Lived Experience Research (2025):</div>
                  <div className="text-sm pl-4">A qualitative study explored the personal understandings of RSD within the neurodivergent 
                  community<sup style={{color: '#10b981'}}>[3]</sup>. This research addressed a gap in the literature regarding the subjective experience of the 
                  phenomenon, noting that it often presents as a "predisposition to expect, sense, and react strongly to rejection."</div>
                </div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-2">Virtual Feedback Study (2019):</div>
                  <div className="text-sm pl-4">Research on emotional regulation in ADHD found that individuals with ADHD displayed 
                  significantly higher levels of emotional sensitivity when receiving feedback in a virtual game compared to neurotypical 
                  controls<sup style={{color: '#10b981'}}>[4]</sup>.</div>
                </div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-2">Rejection Sensitivity in Adolescents (2009):</div>
                  <div className="text-sm pl-4">A study examining adolescents with ADHD found that high attachment-related anxiety and 
                  avoidance correlated with higher levels of sensitivity to peer rejection<sup style={{color: '#10b981'}}>[5]</sup>.</div>
                </div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-2">Clinical Observations:</div>
                  <div className="text-sm pl-4">Dr. William Dodson, who coined the term RSD in the context of ADHD, has published 
                  clinical observations stating that nearly 99% of adults with ADHD experience RSD to some degree, with 30% reporting 
                  it as their most impairing symptom<sup style={{color: '#10b981'}}>[6]</sup>. Researchers often point back to Dr. Paul Wender's observations in the 
                  1960s, which identified high levels of emotional dysregulation and "atypical depression" in ADHD patients, aligning 
                  with modern understandings of RSD<sup style={{color: '#10b981'}}>[7]</sup>.</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mb-6">
              <img 
                src={rsdHeartImage} 
                alt="Heart with a face illustration representing rejection sensitive dysphoria in ADHD"
                className="w-64 h-auto rounded-md border border-gray-300"
              />
            </div>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">What RSD Looks Like</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Extreme Emotional Pain</div>
                  <div className="text-sm">Sudden, intense emotional distress in response to perceived rejection or criticism. 
                  Studies frequently note that individuals describe the feeling of rejection as a physical "stab" or "punch" to the chest, 
                  making it feel physically painful and overwhelming.</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Hypersensitivity to Criticism</div>
                  <div className="text-sm">Taking criticism very personally, even constructive feedback feels like a personal attack</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Immediate, Intense Reactions</div>
                  <div className="text-sm">Emotional response happens instantly and can feel uncontrollable, often disproportionate 
                  to the triggering event</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Rumination and Overthinking</div>
                  <div className="text-sm">Replaying perceived rejections or criticisms repeatedly, unable to let go of the experience</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Rage or Withdrawal</div>
                  <div className="text-sm">Responding with sudden anger, emotional outbursts, or complete withdrawal and isolation</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Avoidance Behaviors</div>
                  <div className="text-sm">Avoiding situations where rejection or criticism might occur, even at significant personal cost. 
                  This is strongly linked to high-achieving perfectionism or, conversely, complete avoidance of situations where failure 
                  is possible.</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mb-6">
              <img 
                src={rejectedTypewriterImage} 
                alt="Typewriter with the word 'Rejected' typed on yellow-bordered paper"
                className="w-64 h-auto rounded-md border border-gray-300"
              />
            </div>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Why RSD Happens with ADHD</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-[#0c264d] mb-2">Neurological Factors:</div>
                  <div className="text-sm pl-4">Research suggests that for those with ADHD, the brain processes rejection differently, 
                  creating a "hyperalert" state to social rejection. RSD is related to differences in emotional regulation in ADHD brains. 
                  The same executive function deficits that affect attention and impulse control also impact emotional control. 
                  People with ADHD may experience all emotions more intensely, and negative emotions related to perceived rejection 
                  can be particularly overwhelming.</div>
                </div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-2">Lifetime of Negative Feedback:</div>
                  <div className="text-sm pl-4">Many people with ADHD have experienced years of criticism, correction, and negative 
                  feedback about ADHD-related behaviors (being "too much," "not trying hard enough," "careless," "irresponsible"). 
                  This history can create a heightened sensitivity to any perceived criticism or rejection.</div>
                </div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-2">Perfectionism and Compensation:</div>
                  <div className="text-sm pl-4">Many people with ADHD develop perfectionist tendencies as a way to compensate for 
                  their difficulties and avoid criticism. This makes any perceived failure particularly painful.</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mb-6">
              <img 
                src={emotionalExplosionImage} 
                alt="Artistic representation of emotional explosion with person silhouette and vibrant colors symbolizing intense RSD emotions"
                className="w-64 h-auto rounded-md border border-gray-300"
              />
            </div>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common RSD Triggers</h3>
              <ul className="list-disc ml-6 space-y-2 text-sm">
                <li>Being criticized at work or in relationships</li>
                <li>Not receiving a response to a text message or email</li>
                <li>Making a mistake in front of others</li>
                <li>Not being invited to a social event</li>
                <li>Perceiving disappointment in someone's tone or facial expression</li>
                <li>Receiving constructive feedback, even when delivered kindly</li>
                <li>Comparing oneself to others and feeling "less than"</li>
                <li>Failing to meet self-imposed standards or goals</li>
                <li>Social awkwardness or perceived social mistakes</li>
              </ul>
            </div>
            
            <div className="flex justify-center mb-6">
              <img 
                src={positiveSelfTalkImage} 
                alt="Positive self-talk colorful graphic with flowers and hearts on yellow background"
                className="w-64 h-auto rounded-md border border-gray-300"
              />
            </div>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Coping Strategies for RSD</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-[#0c264d] mb-2">In-the-Moment Strategies:</div>
                  <ul className="list-disc ml-6 space-y-1 text-sm pl-4">
                    <li>Practice grounding techniques (5-4-3-2-1 sensory awareness)</li>
                    <li>Take a break before responding to perceived criticism</li>
                    <li>Use self-compassion phrases: "This feeling will pass," "I'm doing my best"</li>
                    <li>Physical movement to release emotional intensity (walk, stretch)</li>
                    <li>Reach out to a trusted person who understands RSD</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-2">Long-Term Strategies:</div>
                  <ul className="list-disc ml-6 space-y-1 text-sm pl-4">
                    <li>Work with a therapist trained in ADHD and emotional regulation</li>
                    <li>Learn to distinguish between actual rejection and RSD perception</li>
                    <li>Build a support network of people who understand ADHD and RSD</li>
                    <li>Practice self-compassion and challenge negative self-talk</li>
                    <li>Consider medication adjustments (ADHD medications may help with RSD)</li>
                    <li>Develop emotional regulation skills through DBT or CBT</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-2">Communication Strategies:</div>
                  <ul className="list-disc ml-6 space-y-1 text-sm pl-4">
                    <li>Educate close friends, family, and partners about RSD</li>
                    <li>Request specific types of feedback delivery (written vs. verbal)</li>
                    <li>Ask for "feedback sandwiches" (positive-constructive-positive)</li>
                    <li>Communicate your needs: "I need time to process this feedback"</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* YouTube Video for RSD */}
            <div className="mt-6 mb-6 max-w-2xl mx-auto">
              <h4 className="text-[#0c264d] font-bold mb-4 text-center">Understanding Rejection Sensitive Dysphoria</h4>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/jM3azhiOy5E"
                  title="Understanding Rejection Sensitive Dysphoria"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm mb-3">
                <strong>Clinical Note:</strong> While RSD is not in the DSM-5, it is widely recognized by ADHD specialists 
                and researchers as a significant aspect of the ADHD experience. If RSD is severely impacting your quality of 
                life, discuss it with your healthcare provider. Treatment for ADHD (medication and therapy) can help reduce 
                RSD symptoms.
              </p>
              <p className="text-sm">
                <strong>Remember:</strong> RSD is not your fault, and you're not "too sensitive." It's a real neurological 
                experience that many people with ADHD share. With the right support and strategies, RSD can become more 
                manageable.
              </p>
            </div>
          </div>

          {/* References for RSD Tab */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
            
            <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
            <div className="text-sm space-y-2">
              <p>[1] American Psychiatric Association. (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.).</p>
              <p>[2] Rejection Sensitivity Dysphoria in Attention-Deficit/Hyperactivity Disorder: A Case Series. (2024). <em>Acta Scientific Neurological Sciences</em>.</p>
              <p>[3] Neurodivergent Experiences of Rejection Sensitive Dysphoria. (2025). <em>Journal of Neural Engineering</em>.</p>
              <p>[4] Renton, T. (2022). Research on emotional regulation in ADHD examining virtual feedback responses.</p>
              <p>[5] Adolescents' ADHD symptoms and adjustment: The role of attachment and rejection sensitivity. (2009). <em>Journal of Clinical Child & Adolescent Psychology</em>.</p>
              <p>[6] Dodson, W. (Clinical observations). Nearly 99% of adults with ADHD experience RSD to some degree, with 30% reporting it as their most impairing symptom. Published in ADDitude Magazine.</p>
              <p>[7] Wender, P. (1960s). Historical observations on emotional dysregulation and "atypical depression" in ADHD patients.</p>
            </div>
            
            <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
            <div className="text-sm space-y-2">
              <p>Barkley, R. A. (2015). "Emotional dysregulation is a core component of ADHD." In R. A. Barkley (Ed.), <em>Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment</em> (4th ed.). Guilford Press.</p>
              <p>Shaw, P., et al. (2014). "Emotion dysregulation in attention deficit hyperactivity disorder." <em>American Journal of Psychiatry</em>, 171(3), 276-293.</p>
              <p>Surman, C. B., et al. (2013). "Understanding deficient emotional self-regulation in adults with ADHD: A controlled study." <em>ADHD Attention Deficit and Hyperactivity Disorders</em>, 5(3), 273-281.</p>
              <p>Ramsay, J. R. (2017). "'I feel like I'm constantly treading water': Persistent affective problems in adults with ADHD." <em>ADHD Report</em>, 25(6), 1-7.</p>
            </div>
          </div>
        </TabsContent>

        {/* ADHD in Females Tab */}
        <TabsContent value="females" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">ADHD in Females</h2>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <p className="text-sm mb-3">
                <strong>Note on Gender and Research:</strong> Much of the research on ADHD has historically focused on individuals 
                assigned male at birth, leading to an understanding of symptoms that may not fully capture the experiences of those 
                assigned female at birth or those who identify as women and girls. While this section uses the terms "girls" and "women" 
                based on the language used in clinical research, we acknowledge that gender exists on a spectrum and that ADHD affects 
                people of all gender identities. The symptom patterns described here are relevant to anyone assigned female at birth and 
                may also resonate with individuals across the gender spectrum.
              </p>
              
              <div className="flex justify-center mt-4">
                <img 
                  src={diversityImage} 
                  alt="Artistic representation of diverse people across the gender spectrum"
                  className="w-64 h-auto rounded-md border border-gray-300"
                />
              </div>
            </div>
            
            <p className="mb-6">
              ADHD in individuals assigned female at birth is significantly underdiagnosed and undertreated. Research 
              suggests that girls and women with ADHD often present differently than boys and men, leading to missed or delayed 
              diagnoses. The inattentive presentation is more common in females, and symptoms may be less externally 
              disruptive, causing them to be overlooked.
            </p>
            
            {/* Key Research Findings Section */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Key Research Findings</h3>
              
              <div className="mb-4">
                <div className="font-bold text-[#0c264d] mb-2">Symptom Presentation & Comorbidity:</div>
                <div className="text-sm space-y-2 pl-4">
                  <p>Women with ADHD are more likely to have the combined type, experience greater emotional dysregulation, 
                  and report higher levels of anxiety and depression compared to men.<sup className="text-[#10b981]">1</sup></p>
                  <p>Research indicates a significant association between adult female ADHD and higher rates of insomnia, 
                  substance abuse, chronic pain, and histories of childhood abuse.<sup className="text-[#10b981]">2</sup></p>
                  <p>Women often exhibit inattentive symptoms, making them less likely to be diagnosed in childhood, often 
                  waiting until they recognize similar symptoms in their own children.</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="font-bold text-[#0c264d] mb-2">Persistence Into Adulthood:</div>
                <div className="text-sm space-y-2 pl-4">
                  <p>Research suggests that while 60% of women have symptoms lasting into adulthood, they are less likely to 
                  "outgrow" the condition than men (30%).<sup className="text-[#10b981]">3</sup></p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="font-bold text-[#0c264d] mb-2">Social & Personal Impact:</div>
                <div className="text-sm space-y-2 pl-4">
                  <p>Women with ADHD face greater difficulties with peer relationships, social behavior, and sustaining stable 
                  relationships compared to women without ADHD.<sup className="text-[#10b981]">4</sup></p>
                  <p>A qualitative study found that women with late-diagnosed ADHD experienced severe, long-term consequences, 
                  including low self-esteem, intense guilt, shame, and a sense of grieving over the life they could have led 
                  if diagnosed earlier.<sup className="text-[#10b981]">5</sup></p>
                </div>
              </div>
              
              <div>
                <div className="font-bold text-[#0c264d] mb-2">Medical & Diagnostic Bias:</div>
                <div className="text-sm space-y-2 pl-4">
                  <p>Studies demonstrate a "missed diagnosis" phenomenon where professionals mislabel ADHD in women as only 
                  anxiety or depression.<sup className="text-[#10b981]">6</sup></p>
                  <p>Female adolescents (over 13) may experience more frequent and different adverse events from stimulant 
                  medications compared to males.<sup className="text-[#10b981]">7</sup></p>
                </div>
              </div>
            </div>
            
            {/* Girls Section */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">ADHD in Girls</h3>
              
              <div className="mb-4">
                <div className="font-bold text-[#0c264d] mb-2">Presentation Differences:</div>
                <div className="text-sm space-y-2 pl-4">
                  <p>Girls with ADHD are more likely to present with the inattentive type rather than hyperactive-impulsive type. 
                  They may appear dreamy, spacey, or lost in thought rather than disruptive or hyperactive.</p>
                  <p>Hyperactivity in girls may manifest as excessive talking, social chattiness, or emotional reactivity rather 
                  than physical restlessness.</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="font-bold text-[#0c264d] mb-2">Academic Challenges:</div>
                <div className="text-sm space-y-2 pl-4">
                  <p>Girls with ADHD often work harder to compensate for their difficulties, masking symptoms through extra effort. 
                  They may maintain acceptable grades in elementary school but struggle as academic demands increase.</p>
                  <p>Common challenges include difficulty with organization, time management, completing homework, and test-taking 
                  despite understanding the material.</p>
                </div>
              </div>
              
              <div className="flex justify-center my-4">
                <img 
                  src={girlStudyingImage} 
                  alt="Girl studying and taking notes at desk with laptop"
                  className="w-64 h-auto rounded-md border border-gray-300"
                />
              </div>
              
              <div className="mb-4">
                <div className="font-bold text-[#0c264d] mb-2">Social and Emotional Aspects:</div>
                <div className="text-sm space-y-2 pl-4">
                  <p>Girls with ADHD often experience more internalizing symptoms such as anxiety, depression, and low self-esteem 
                  compared to boys with ADHD. They may be more aware of their social difficulties and internalize 
                  negative feedback.</p>
                  <p>Social challenges may include difficulty maintaining friendships, missing social cues, talking excessively, 
                  or being perceived as "too much" or "too sensitive."</p>
                  <p>Many girls develop coping strategies such as people-pleasing, excessive social accommodation, or withdrawal to 
                  hide their struggles.</p>
                </div>
              </div>
              
              <div>
                <div className="font-bold text-[#0c264d] mb-2">Diagnostic Challenges:</div>
                <div className="text-sm space-y-2 pl-4">
                  <p>Girls are often diagnosed later than boys, sometimes not until adolescence or adulthood when coping mechanisms 
                  break down under increased demands.</p>
                  <p>Teachers and parents may attribute symptoms to personality traits ("she's just a daydreamer," "she's shy") 
                  rather than recognizing ADHD.</p>
                  <p>Girls are more likely to receive misdiagnoses of anxiety or depression before ADHD is identified, as these 
                  conditions frequently co-occur and may be more visible.</p>
                </div>
              </div>
            </div>
            
            {/* Women Section */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">ADHD in Women</h3>
              
              <div className="mb-4">
                <div className="font-bold text-[#0c264d] mb-2">Adult Presentation:</div>
                <div className="text-sm space-y-2 pl-4">
                  <p>Women with ADHD often describe feeling overwhelmed by daily life demands, struggling to manage multiple 
                  responsibilities (work, household, family, social obligations).</p>
                  <p>Common challenges include chronic disorganization, difficulty with time management, forgetting appointments, 
                  losing items, struggling to complete tasks, and feeling constantly behind.</p>
                  <p>Many women develop elaborate compensatory strategies (excessive list-making, over-scheduling, hyper-focus on 
                  organization systems) that work until life stressors increase.</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="font-bold text-[#0c264d] mb-2">Hormonal Influences:</div>
                <div className="text-sm space-y-2 pl-4">
                  <p>ADHD symptoms in women can fluctuate with hormonal changes across the menstrual cycle, pregnancy, postpartum 
                  period, and menopause. Many women report worsening symptoms during low-estrogen phases of their cycle 
                  and during perimenopause.</p>
                  <p>Some women are first diagnosed with ADHD during or after pregnancy when the demands of parenting exceed their 
                  coping capacity.</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="font-bold text-[#0c264d] mb-2">Career and Relationships:</div>
                <div className="text-sm space-y-2 pl-4">
                  <p>Women with ADHD may struggle with career advancement due to difficulties with organization, time management, 
                  and executive function demands. They may underperform relative to their intelligence and education.</p>
                  <p>Relationship challenges are common, including difficulty with household management, emotional regulation, 
                  communication, and feeling misunderstood by partners.</p>
                  <p>Many women with ADHD report taking on excessive responsibility in relationships to compensate for perceived 
                  deficits, leading to burnout.</p>
                </div>
              </div>
              
              <div className="flex justify-center my-4">
                <img 
                  src={businessWomanImage} 
                  alt="Professional woman working at desk with laptop and phone"
                  className="w-64 h-auto rounded-md border border-gray-300"
                />
              </div>
              
              <div className="mb-4">
                <div className="font-bold text-[#0c264d] mb-2">Mental Health Considerations:</div>
                <div className="text-sm space-y-2 pl-4">
                  <p>Women with ADHD have higher rates of anxiety, depression, eating disorders, and trauma compared to women 
                  without ADHD. The chronic stress of managing untreated ADHD contributes to these conditions.</p>
                  <p>Self-esteem issues are common, often stemming from years of feeling "different," underachieving, or receiving 
                  criticism for ADHD-related behaviors.</p>
                  <p>Women with ADHD are at increased risk for self-harm and suicidal ideation, particularly when ADHD is undiagnosed 
                  or untreated.</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="font-bold text-[#0c264d] mb-2">Late Diagnosis:</div>
                <div className="text-sm space-y-2 pl-4">
                  <p>Many women are not diagnosed until adulthood, often in their 30s, 40s, or later. Diagnosis often 
                  occurs when seeking evaluation for their own child, recognizing similar struggles, or when life demands exceed 
                  coping abilities.</p>
                  <p>Late diagnosis can be both validating (finally having an explanation for lifelong struggles) and grief-inducing 
                  (mourning what might have been with earlier support).</p>
                </div>
              </div>
              
              {/* YouTube Video for Women with ADHD */}
              <div className="mt-6 max-w-2xl mx-auto">
                <h4 className="text-[#0c264d] font-bold mb-4 text-center">ADHD in Women</h4>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-md"
                    src="https://www.youtube.com/embed/EMpt40zNK-w"
                    title="ADHD in Women"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm">
                <strong>Advocacy Note:</strong> Increased awareness of how ADHD presents in individuals assigned female at birth 
                is crucial for improving diagnosis and treatment. Healthcare providers, educators, and the general public need better 
                education about the diverse presentations of ADHD across gender identities to ensure everyone receives appropriate 
                support and care.
              </p>
            </div>
          </div>

          {/* References for ADHD in Females Tab */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
            
            <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
            <div className="text-sm space-y-2 mb-4">
              <p>[1] Rucklidge, J. J. (2008). "Gender differences in 2 clinical trials of adults with attention-deficit/hyperactivity disorder: A retrospective data analysis." <em>Journal of Clinical Psychiatry</em>, 69(2), 213-221. PubMed.</p>
              <p>[2] Young, J. L., et al. (2023). "Miss. Diagnosis: A Systematic Review of ADHD in Adult Women." <em>Journal of Attention Disorders</em>. Sage Journals.</p>
              <p>[3] Rucklidge, J. J. (2008). "Gender differences in 2 clinical trials of adults with attention-deficit/hyperactivity disorder: A retrospective data analysis." <em>Journal of Clinical Psychiatry</em>, 69(2), 213-221. PubMed.</p>
              <p>[4] Dorani, F., et al. (2025). "Research advances and future directions in female ADHD." <em>Frontiers in Psychiatry</em>. Frontiers.</p>
              <p>[5] Smith, A., et al. (2025). "Adverse experiences of women with undiagnosed ADHD and the consequences of late diagnosis." <em>Nature Scientific Reports</em>. Nature.</p>
              <p>[6] Young, J. L., et al. (2023). "Miss. Diagnosis: A Systematic Review of ADHD in Adult Women." <em>Journal of Attention Disorders</em>. Sage Journals.</p>
              <p>[7] Rucklidge, J. J. (2008). "Gender differences in 2 clinical trials of adults with attention-deficit/hyperactivity disorder: A retrospective data analysis." <em>Journal of Clinical Psychiatry</em>, 69(2), 213-221. PubMed.</p>
            </div>
            
            <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
            <div className="text-sm space-y-2">
              <p>Quinn, P. O., & Madhoo, M. (2014). "A review of attention-deficit/hyperactivity disorder in women and girls: Uncovering this hidden diagnosis." <em>The Primary Care Companion for CNS Disorders</em>, 16(3).</p>
              <p>Hinshaw, S. P., et al. (2012). "Prospective follow-up of girls with attention-deficit/hyperactivity disorder into early adulthood: Continuing impairment includes elevated risk for suicide attempts and self-injury." <em>Journal of Consulting and Clinical Psychology</em>, 80(6), 1041-1051.</p>
              <p>Nadeau, K. G., Littman, E. B., & Quinn, P. O. (2015). <em>Understanding girls with ADHD: How they feel and why they do what they do</em> (Updated ed.). Advantage Books.</p>
              <p>Young, S., Adamo, N., Ásgeirsdóttir, B. B., et al. (2020). "Females with ADHD: An expert consensus statement taking a lifespan approach providing guidance for the identification and treatment of attention-deficit/hyperactivity disorder in girls and women." <em>BMC Psychiatry</em>, 20, 404.</p>
              <p>Skogli, E. W., et al. (2013). "ADHD in girls and boys—gender differences in co-existing symptoms and executive function measures." <em>BMC Psychiatry</em>, 13, 298.</p>
              <p>Dorani, F., et al. (2021). "Prevalence of hormone-related mood disorder symptoms in women with ADHD." <em>Journal of Psychiatric Research</em>, 133, 10-15.</p>
            </div>
          </div>
        </TabsContent>

        {/* Myths & Misconceptions Tab */}
        <TabsContent value="myths" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Myths & Misconceptions About ADHD</h2>
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm">
                <strong>Important:</strong> Social media has created a lot of confusion about what is and isn't ADHD. 
                While awareness is wonderful, misinformation can lead to self-misdiagnosis, trivializing real struggles, 
                or missing other conditions that need treatment. This section addresses commonly claimed "ADHD symptoms" 
                that are either not actually ADHD, need much more research, or are misunderstood.
              </p>
            </div>

            <img 
              src={notActuallyADHDImage} 
              alt="Social media engagement - representing ADHD misinformation online"
              className="w-64 mx-auto rounded-md border border-gray-300 mb-6"
            />

            {/* NOT Actually ADHD */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">NOT Actually ADHD (or Not Diagnostic Criteria)</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">"Object Permanence Issues"</div>
                  <div className="text-sm">
                    This term is completely misused on social media. Object permanence is a developmental milestone 
                    that infants achieve (knowing things exist when you can't see them). What people actually mean is 
                    <strong> working memory issues</strong> ("out of sight, out of mind"), which IS real in ADHD, 
                    but the term "object permanence" is scientifically incorrect in this context.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">"Rejection Sensitive Dysphoria (RSD)"</div>
                  <div className="text-sm">
                    This is controversial. It was coined by ONE researcher (Dr. William Dodson) and is NOT in the 
                    DSM-5 or ICD-11. It's not recognized as an official symptom by most ADHD experts. Emotional 
                    dysregulation IS real in ADHD (~70% experience it)<sup style={{color: '#10b981'}}>[1]</sup>, but "RSD" as a specific construct lacks 
                    scientific validation and peer-reviewed research.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Face Blindness (Prosopagnosia)</div>
                  <div className="text-sm">
                    No established link to ADHD. This is a separate neurological condition affecting facial recognition.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Aphantasia (Inability to Visualize)</div>
                  <div className="text-sm">
                    No research linking this to ADHD specifically. Aphantasia is a separate phenomenon where people 
                    cannot form mental images.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Synesthesia</div>
                  <div className="text-sm">
                    Not related to ADHD; it's a separate neurological phenomenon where one sense triggers another 
                    (like seeing colors when hearing music).
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Being "Gifted"</div>
                  <div className="text-sm">
                    While twice-exceptional people exist (ADHD + giftedness), ADHD doesn't cause giftedness or vice versa. 
                    They can co-occur but are separate traits.
                  </div>
                </div>
              </div>
            </div>

            {/* Needs More Research */}
            <div className="flex justify-center my-4">
              <img 
                src={researchDeskImage} 
                alt="Person studying with laptop and books on desk"
                className="w-64 h-auto rounded-md border border-gray-300"
              />
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Needs MUCH More Research / Overstated</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">"Time Blindness"</div>
                  <div className="text-sm">
                    While ADHD involves time perception difficulties, "time blindness" is not a clinical term and is 
                    often overgeneralized on social media. The actual symptom is difficulty with time estimation and 
                    time management, not literally being "blind" to time.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <img 
                    src={daydreamImage} 
                    alt="Person daydreaming"
                    className="w-64 h-auto rounded mb-2"
                  />
                  <div className="font-bold text-[#0c264d] mb-1">Maladaptive Daydreaming</div>
                  <div className="text-sm">
                    This is being studied as a separate condition, not specifically an ADHD symptom. While people with 
                    ADHD can daydream, maladaptive daydreaming is its own phenomenon.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Sensory Processing Issues</div>
                  <div className="text-sm">
                    These are MUCH more strongly associated with autism spectrum disorder. While there may be some 
                    sensory differences in ADHD (mostly related to distractibility), claiming Sensory Processing 
                    Disorder (SPD) is an ADHD trait is misleading and confuses two distinct conditions.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">"Doom Piles" / "Doom Boxes"</div>
                  <div className="text-sm">
                    These are symptoms of executive dysfunction and organizational difficulties, which ARE real in ADHD. 
                    However, the cutesy social media terms can trivialize real struggles and aren't clinical terminology.
                  </div>
                </div>
              </div>
            </div>

            {/* Misattributed or Over-Romanticized */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Misattributed or Over-Romanticized</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Every Instance of Procrastination</div>
                  <div className="text-sm">
                    Not all procrastination is ADHD. Everyone procrastinates sometimes. ADHD procrastination is 
                    chronic, severe, and related to executive dysfunction—not laziness or poor time management skills.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Being Quirky/Creative</div>
                  <div className="text-sm">
                    Creativity isn't a symptom of ADHD. ADHD is a neurodevelopmental disability, not a personality 
                    type or quirky trait. While some people with ADHD are creative, many aren't—and many creative 
                    people don't have ADHD.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">"ADHD Makes You More Empathetic"</div>
                  <div className="text-sm">
                    No evidence supports this. Some people with ADHD are highly empathetic, some aren't. Empathy 
                    levels vary across all humans regardless of neurology.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <img 
                    src={justiceImage} 
                    alt="Lady Justice statue"
                    className="w-64 h-auto rounded mb-2"
                  />
                  <div className="font-bold text-[#0c264d] mb-1">"Strong Sense of Justice"</div>
                  <div className="text-sm">
                    While many people with ADHD report experiencing intense reactions to perceived injustice, this 
                    isn't an inherent ADHD trait. More likely explanations include: <strong>emotional dysregulation</strong>{' '}
                    (intense emotional reactions to anything perceived as unfair), <strong>black-and-white thinking</strong>{' '}
                    (difficulty with nuance due to executive dysfunction), <strong>personal experiences</strong> (many with 
                    ADHD have been misunderstood or treated unfairly, increasing sensitivity), and <strong>low frustration 
                    tolerance</strong> (quick emotional reactions when things don't seem right). If social justice becomes a 
                    special interest, hyperfocus can also play a role. The "justice sensitivity" narrative is appealing 
                    because it frames ADHD traits positively, but it's an oversimplification of complex emotional and 
                    cognitive processes.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">"ADHD Tax"</div>
                  <div className="text-sm">
                    This is a social media term for the financial consequences of ADHD symptoms (late fees, replacing 
                    lost items, impulse purchases), not an actual symptom. While the consequences are real, it's 
                    important to distinguish between symptoms and their effects.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">"Neurospicy"</div>
                  <div className="text-sm">
                    Cutesy language that many actually disabled people find infantilizing and dismissive of real struggles. 
                    ADHD is a disability recognized by the ADA, not a fun personality quirk.
                  </div>
                </div>
              </div>
            </div>

            {/* Real but Overstated */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Real But Overstated/Oversimplified</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Emotional Dysregulation</div>
                  <div className="text-sm">
                    This IS common in ADHD (~70% experience it)<sup style={{color: '#10b981'}}>[1]</sup> but it's NOT one of the 18 DSM-5 diagnostic criteria<sup style={{color: '#10b981'}}>[2]</sup>. 
                    Social media often presents it as the main feature of ADHD when it's actually an associated feature, 
                    not a core diagnostic symptom.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Executive Dysfunction</div>
                  <div className="text-sm">
                    Real and core to ADHD. However, "ADHD paralysis" is an oversimplification of complex executive 
                    function challenges. It's not literal paralysis—it's task initiation difficulty, decision fatigue, 
                    or overwhelm from executive demands.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Hyperfocus</div>
                  <div className="text-sm">
                    Real in ADHD but often romanticized. Hyperfocus can be problematic (forgetting to eat, ignoring 
                    responsibilities) and is better understood as difficulty regulating attention—not a superpower.
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Banner */}
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm mb-2">
                <strong>The Bottom Line:</strong> ADHD is a real neurodevelopmental disorder with specific 
                diagnostic criteria in the DSM-5. While social media has increased awareness (which is great!), 
                it has also spread misinformation that can:
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>Lead to self-misdiagnosis</li>
                <li>Trivialize the real struggles of people with ADHD</li>
                <li>Confuse ADHD with other conditions (especially autism)</li>
                <li>Make it harder for people to get accurate diagnoses</li>
                <li>Create unrealistic expectations about symptoms</li>
              </ul>
              <p className="text-sm mt-3">
                <strong>If you think you have ADHD:</strong> See a qualified healthcare provider for proper 
                evaluation. Don't rely on social media for diagnosis. ADHD is complex and requires professional 
                assessment.
              </p>
            </div>
          </div>

          {/* References for Myths & Misconceptions Tab */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
            
            <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
            <div className="text-sm space-y-2">
              <p>[1] Shaw, P., Stringaris, A., Nigg, J., & Leibenluft, E. (2014). "Emotion dysregulation in attention deficit hyperactivity disorder." <em>American Journal of Psychiatry</em>, 171(3), 276-293.</p>
              <p>[2] American Psychiatric Association. (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.).</p>
            </div>
            
            <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
            <div className="text-sm space-y-2">
              <p>Barkley, R. A. (2015). <em>Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment</em> (4th ed.). Guilford Press.</p>
              <p>Nigg, J. T., et al. (2020). "Annual Research Review: On the relations among self-regulation, self-control, executive functioning, effortful control, cognitive control, impulsivity, risk-taking, and inhibition for developmental psychopathology." <em>Journal of Child Psychology and Psychiatry</em>, 61(3), 356-384.</p>
              <p>Faraone, S. V., et al. (2021). "The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder." <em>Neuroscience & Biobehavioral Reviews</em>, 128, 789-818.</p>
              <p>Sedgwick, J. A., et al. (2019). "Social cognition in attention-deficit hyperactivity disorder (ADHD)." <em>Neuroscience & Biobehavioral Reviews</em>, 100, 252-271.</p>
            </div>
          </div>
        </TabsContent>

      </Tabs>

    </article>
  );
}


