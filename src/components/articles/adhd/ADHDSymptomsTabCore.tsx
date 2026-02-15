import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ADHDSymptomsCoreReferences } from '../../references/ADHDSymptomsCoreReferences';

interface TabCoreProps {
  setCurrentArticle?: (article: string) => void;
}

export function ADHDSymptomsTabCore({ setCurrentArticle }: TabCoreProps) {
  return (
    <>
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
              <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Core Symptoms of ADHD</h2>
              <ImageWithFallback src="/images/adhd/adhd-core-symptoms-apple.png" alt="ADHD core symptoms illustration" className="w-full max-w-md mx-auto rounded-lg mb-4" />
              

              
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
              <ImageWithFallback src="/images/adhd/adhd-core-symptoms-venn.png" alt="DSM-5-TR ADHD diagnostic criteria Venn diagram" className="w-full max-w-md mx-auto rounded-lg mb-4" />
              

              
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
    </>
  );
}
