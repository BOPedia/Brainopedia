import { ImageWithFallback } from '../../../figma/ImageWithFallback';

export function AcrossLifespan() {
  return (
    <div className="bg-[#f0f9ff] p-6 rounded-lg">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnosis Across the Lifespan</h2>
      
      <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
        <p className="text-sm">
          <strong>Key Fact:</strong> Current autism prevalence is approximately 1 in 36 children.<sup>[26]</sup> 
          Autism can be reliably diagnosed by age 2, but many individuals—especially girls, women, and those without 
          intellectual disability—are not diagnosed until adolescence or adulthood.
        </p>
      </div>

      {/* Early Childhood */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Early Childhood (Under 3 Years)</h3>
        
        <p className="text-sm mb-3">
          Autism can be reliably diagnosed by age 2, sometimes earlier:<sup>[22][23]</sup>
        </p>

        <div className="space-y-3">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Early Signs to Watch For</div>
            <div className="text-sm">
              <ul className="ml-4 space-y-1">
                <li>• Lack of pointing by 12 months</li>
                <li>• Reduced or unusual eye contact</li>
                <li>• Lack of response to name by 12 months</li>
                <li>• Loss of previously acquired skills (regression)</li>
                <li>• Lack of babbling or gesturing by 12 months</li>
                <li>• Limited social smiling or social engagement</li>
                <li>• Repetitive behaviors (hand flapping, spinning, lining up toys)</li>
              </ul>
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Challenges in Early Diagnosis</div>
            <div className="text-sm">
              Developmental variability in toddlers, overlap with other developmental delays, some traits emerge later 
              as social demands increase
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Why Early Diagnosis Matters</div>
            <div className="text-sm">
              Earlier diagnosis enables earlier intervention, which research shows can significantly improve outcomes. 
              Early Intervention services (birth-3) provide support during critical developmental period.<sup>[1]</sup>
            </div>
          </div>
        </div>
      </div>

      {/* School Age */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">School Age (3-18 Years)</h3>
        
        <p className="text-sm mb-3">
          Most autism diagnoses occur during this period:<sup>[24]</sup>
        </p>

        <div className="space-y-3">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Common Triggers for Evaluation</div>
            <div className="text-sm">
              <ul className="ml-4 space-y-1">
                <li>• Social difficulties at school (trouble making/keeping friends, playground struggles)</li>
                <li>• Academic challenges despite apparent intelligence</li>
                <li>• Behavioral concerns (meltdowns, rigidity, difficulty with transitions)</li>
                <li>• Teacher observations of "different" social interaction or play</li>
                <li>• Sensory sensitivities affecting school participation</li>
              </ul>
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Important Considerations</div>
            <div className="text-sm">
              Some children, particularly girls, may have developed coping strategies or "masking" that hide autistic 
              traits.<sup>[25]</sup> This can delay diagnosis despite genuine struggles. Burnout from masking often 
              becomes apparent in middle school or high school.
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">School-Based vs. Clinical Diagnosis</div>
            <div className="text-sm">
              Schools can identify students as "eligible for services under autism," but this is an educational 
              classification, not a medical diagnosis. Clinical diagnosis by qualified professional is recommended.
            </div>
          </div>
        </div>
      </div>

      {/* Adulthood */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Adulthood</h3>
        
        <div className="flex justify-center mb-4">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHVsdCUyMGFzc2Vzc21lbnQlMjBldmFsdWF0aW9uJTIwdGVzdGluZ3xlbnwxfHx8fDE3Njc0MTI5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Adult assessment and evaluation"
            className="w-full max-w-md h-auto rounded-md border border-gray-300"
          />
        </div>

        <p className="text-sm mb-3">
          Increasing numbers of adults seek autism diagnosis:<sup>[27]</sup>
        </p>

        <div className="space-y-3">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Barriers to Adult Diagnosis</div>
            <div className="text-sm">
              <ul className="ml-4 space-y-1">
                <li>• Fewer specialists trained in adult autism assessment<sup>[28]</sup></li>
                <li>• Lack of adult-specific diagnostic tools</li>
                <li>• Insurance coverage issues (some insurers don't cover adult autism evaluation)</li>
                <li>• Misconception that autism only affects children</li>
                <li>• Long wait lists (6-24+ months)</li>
              </ul>
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Challenges in Adult Assessment</div>
            <div className="text-sm">
              <ul className="ml-4 space-y-1">
                <li>• Retrospective developmental history (parents may not be available or remember details)</li>
                <li>• Learned compensation strategies mask traits<sup>[29]</sup></li>
                <li>• Co-occurring conditions (anxiety, depression) developed over years of struggling</li>
                <li>• Adult life demands differ from childhood contexts</li>
              </ul>
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Adapted Tools for Adults</div>
            <div className="text-sm">
              Some tools have been modified for adult populations. Clinical judgment by experienced professionals 
              is crucial.<sup>[30]</sup> ADOS-2 includes a module for adults. Self-report measures like the AQ 
              (Autism Quotient) can supplement assessment but don't replace comprehensive evaluation.
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Common Pathways to Adult Diagnosis</div>
            <div className="text-sm">
              <ul className="ml-4 space-y-1">
                <li>• Parent diagnosed after child receives autism diagnosis</li>
                <li>• Burnout from years of masking</li>
                <li>• Mental health treatment for anxiety/depression reveals underlying autism</li>
                <li>• Learning about autism and recognizing oneself</li>
                <li>• Seeking explanation for lifelong feelings of being "different"</li>
              </ul>
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Impact of Late Diagnosis</div>
            <div className="text-sm">
              Can provide profound clarity and relief, validation of lifelong struggles, access to accommodations 
              and services, connection to autistic community and identity, reframing of past experiences in neurodiversity-
              affirming way.<sup>[31]</sup>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
        <p className="text-sm">
          <strong>It's Never Too Late:</strong> Many autistic adults describe diagnosis as life-changing, even 
          in their 30s, 40s, 50s, or beyond. Understanding your neurology helps you advocate for your needs, find 
          community, and practice self-compassion. If you suspect you might be autistic, seeking evaluation is valid 
          at any age.
        </p>
      </div>
    </div>
  );
}
