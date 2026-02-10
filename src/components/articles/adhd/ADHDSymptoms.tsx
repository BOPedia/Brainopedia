import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { ADHDSymptomsTabCore } from './ADHDSymptomsTabCore';
import { ADHDSymptomsTabInattention } from './ADHDSymptomsTabInattention';
import { ADHDSymptomsTabHyperactivity } from './ADHDSymptomsTabHyperactivity';
import { ADHDSymptomsTabImpulsivity } from './ADHDSymptomsTabImpulsivity';
import { ADHDSymptomsTabMoreA } from './ADHDSymptomsTabMoreA';
import { ADHDSymptomsTabMoreB } from './ADHDSymptomsTabMoreB';
import { ADHDSymptomsTabRSD } from './ADHDSymptomsTabRSD';
import { ADHDSymptomsTabFemales } from './ADHDSymptomsTabFemales';
import { ADHDSymptomsTabMyths } from './ADHDSymptomsTabMyths';

interface ADHDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function ADHDSymptoms({ setCurrentArticle }: ADHDSymptomsProps) {
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
          <ADHDSymptomsTabCore setCurrentArticle={setCurrentArticle} />
        </TabsContent>

        {/* Inattention Tab */}
        <TabsContent value="inattention" className="space-y-8">
          <ADHDSymptomsTabInattention />
        </TabsContent>

        {/* Hyperactivity Tab */}
        <TabsContent value="hyperactivity" className="space-y-8">
          <ADHDSymptomsTabHyperactivity />
        </TabsContent>

        {/* Impulsivity Tab */}
        <TabsContent value="impulsivity" className="space-y-8">
          <ADHDSymptomsTabImpulsivity />
        </TabsContent>

        {/* More Symptoms Tab */}
        <TabsContent value="more" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <ADHDSymptomsTabMoreA />
            <ADHDSymptomsTabMoreB />
          </div>

          {/* References for More Symptoms Tab - outside blue wrapper */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4]">
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
          <div className="md:hidden">
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
          <ADHDSymptomsTabRSD />
        </TabsContent>

        {/* ADHD in Females Tab */}
        <TabsContent value="females" className="space-y-8">
          <ADHDSymptomsTabFemales />
        </TabsContent>

        {/* Myths & Misconceptions Tab */}
        <TabsContent value="myths" className="space-y-8">
          <ADHDSymptomsTabMyths />
        </TabsContent>

      </Tabs>

    </article>
  );
}