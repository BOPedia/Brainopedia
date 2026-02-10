export function ChallengesDisparities() {
  return (
    <div className="bg-[#f0f9ff] p-6 rounded-lg">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Challenges & Disparities</h2>
      
      {/* Gender Differences */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Gender Differences and Bias</h3>
        
        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-3 rounded mb-4">
          <p className="text-sm">
            <strong>The Ratio:</strong> Approximately 3-4 males are diagnosed for every 1 female.<sup>[80]</sup> 
            However, this likely reflects diagnostic bias rather than true prevalence differences.
          </p>
        </div>

        <div className="space-y-3">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Camouflaging in Girls and Women</div>
            <div className="text-sm">
              Girls and women often mask or camouflage autistic traits more effectively than boys, leading to missed 
              or delayed diagnosis.<sup>[34][35]</sup> This masking is exhausting and can lead to burnout, anxiety, 
              and depression.
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Different Presentation</div>
            <div className="text-sm">
              Autistic girls may show:<sup>[36][37]</sup>
              <ul className="ml-4 mt-1 space-y-1">
                <li>• More subtle social difficulties (may have friends but relationships feel exhausting or confusing)</li>
                <li>• Better superficial social skills (learned through observation and mimicry)</li>
                <li>• Interests that appear more "typical" (animals, books, celebrities vs. trains or numbers)</li>
                <li>• More internalizing behaviors (anxiety, depression) vs. externalizing</li>
                <li>• Less obvious repetitive behaviors</li>
              </ul>
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Later Diagnosis in Females</div>
            <div className="text-sm">
              Women are often diagnosed later than men, sometimes not until adulthood. Many are misdiagnosed with 
              anxiety, depression, eating disorders, or personality disorders before autism is recognized.
            </div>
          </div>
        </div>
      </div>

      {/* Racial and Ethnic Disparities */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Racial and Ethnic Disparities</h3>
        
        <p className="text-sm mb-4">
          Significant disparities exist in autism diagnosis:<sup>[38][39]</sup>
        </p>

        <div className="space-y-3">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Later Diagnosis for Minority Children</div>
            <div className="text-sm">
              Black and Hispanic children are diagnosed on average 1-3 years later than white children.<sup>[39]</sup> 
              This delay means missed opportunities for early intervention during critical developmental periods.
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Underdiagnosis and Misdiagnosis</div>
            <div className="text-sm">
              Minority children are more likely to be misdiagnosed with conduct disorder, ODD, or ADHD when autism 
              is the actual diagnosis.<sup>[40][41]</sup> They're also more likely to go undiagnosed entirely.
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Access Barriers</div>
            <div className="text-sm">
              <ul className="ml-4 space-y-1">
                <li>• Limited access to specialists (fewer providers in minority communities)</li>
                <li>• Language barriers</li>
                <li>• Cultural mistrust of healthcare system due to historical discrimination</li>
                <li>• Lack of culturally responsive diagnostic tools</li>
                <li>• Insurance and financial barriers</li>
              </ul>
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Cultural Differences in Behavior Interpretation</div>
            <div className="text-sm">
              Cultural norms around eye contact, social interaction, emotional expression, and child-rearing practices 
              differ. Clinicians must be culturally competent to avoid misinterpreting culturally normative behaviors 
              as autism (or vice versa).<sup>[42]</sup>
            </div>
          </div>
        </div>
      </div>

      {/* Socioeconomic Factors */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Socioeconomic Factors</h3>
        
        <div className="space-y-3">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Access to Diagnostic Services</div>
            <div className="text-sm">
              Lower-income families have less access to specialist diagnostic services.<sup>[38]</sup> Private 
              evaluations are expensive ($2,000-$5,000+), and public options have long wait lists.
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Insurance Barriers</div>
            <div className="text-sm">
              Not all insurance plans cover autism evaluation. Medicaid coverage varies by state. Families may need 
              to travel long distances to find providers who accept their insurance.
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Educational Advocacy</div>
            <div className="text-sm">
              Resource-limited schools may be less likely to identify autism or refer for evaluation. Families with 
              less knowledge of special education rights may not advocate effectively.
            </div>
          </div>
        </div>
      </div>

      {/* Misdiagnosis and Missed Diagnosis */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Misdiagnosis and Missed Diagnosis</h3>
        
        <div className="space-y-4">
          <div>
            <div className="font-bold text-[#0c264d] mb-2">Common Misdiagnoses:</div>
            <div className="grid md:grid-cols-2 gap-2">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="text-sm">ADHD (inattention, hyperactivity)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="text-sm">Anxiety disorders</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="text-sm">OCD (repetitive behaviors)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="text-sm">Selective mutism</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="text-sm">Oppositional defiant disorder</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="text-sm">Personality disorders (adults)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="text-sm">Schizophrenia (in adults)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="text-sm">Language disorders</div>
              </div>
            </div>
          </div>

          <div>
            <div className="font-bold text-[#0c264d] mb-2">Why Diagnosis is Missed:</div>
            <div className="space-y-2">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="text-sm">
                  <strong>Masking/camouflaging:</strong> Learned strategies to hide autistic traits
                </div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="text-sm">
                  <strong>High intelligence:</strong> Cognitive strengths compensating for social challenges
                </div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="text-sm">
                  <strong>Co-occurring conditions:</strong> Other diagnoses obscuring autism
                </div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="text-sm">
                  <strong>Limited clinician knowledge:</strong> Especially for adults, women, people of color
                </div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="text-sm">
                  <strong>Atypical presentation:</strong> Not matching stereotypical "autism" image
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Differential Diagnosis */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Differential Diagnosis: Conditions to Rule Out</h3>
        <p className="text-sm mb-4">
          Several conditions share features with autism and must be considered:<sup>[32]</sup>
        </p>
        
        <div className="grid md:grid-cols-2 gap-3">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Intellectual Disability</div>
            <div className="text-sm">Can co-occur; distinguish social deficits beyond cognitive level</div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Language Disorders</div>
            <div className="text-sm">Specific language impairment without broader autism features</div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Social Communication Disorder</div>
            <div className="text-sm">Social deficits without restricted/repetitive behaviors</div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">ADHD</div>
            <div className="text-sm">Inattention may appear as social disengagement</div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Anxiety Disorders</div>
            <div className="text-sm">Social avoidance from anxiety vs. social communication deficits</div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Attachment Disorders</div>
            <div className="text-sm">Distinguish from autism-related social differences</div>
          </div>
        </div>
      </div>

      {/* Co-occurring Conditions */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Common Co-occurring Conditions</h3>
        <p className="text-sm mb-4">
          Many autistic individuals have additional diagnoses:<sup>[22][43][44]</sup>
        </p>
        
        <div className="grid md:grid-cols-2 gap-3">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d]">ADHD</div>
            <div className="text-sm">30-60% co-occurrence</div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d]">Anxiety Disorders</div>
            <div className="text-sm">Up to 40%</div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d]">Depression</div>
            <div className="text-sm">Common in adolescents/adults</div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d]">Intellectual Disability</div>
            <div className="text-sm">~30%</div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d]">Epilepsy</div>
            <div className="text-sm">20-30%</div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d]">Sleep Disorders</div>
            <div className="text-sm">50-80%</div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d]">GI Issues</div>
            <div className="text-sm">Common (constipation, reflux)</div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d]">Eating Disorders</div>
            <div className="text-sm">Higher in autistic females</div>
          </div>
        </div>
      </div>

      <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
        <p className="text-sm">
          <strong>Why This Matters:</strong> Diagnostic disparities mean that many autistic people—particularly 
          girls, women, people of color, and those without intellectual disability—are not diagnosed or are diagnosed 
          late. This delays access to support, accommodations, and community. We need better clinician training, 
          culturally responsive tools, and awareness that autism looks different across different people.
        </p>
      </div>
    </div>
  );
}
