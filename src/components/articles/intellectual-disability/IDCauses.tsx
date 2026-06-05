import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface IDCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function IDCauses({ setCurrentArticle }: IDCausesProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('intellectual-disability'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Intellectual Disability</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Causes & Origins of ID</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">The causes of intellectual disability are diverse and can occur at any time during the developmental period. In many cases, a specific cause is not identified, but research highlights several key categories.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetic Factors</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1655555086913-8e8e6b242005?w=1080&q=80" alt="DNA and genetic research illustration" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Genetic conditions are the most common known causes of ID. These include:<sup>[2]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Chromosomal Abnormalities:</strong> Such as Down syndrome (Trisomy 21) or Fragile X syndrome.<sup>[3]</sup></li>
            <li className="mb-2"><strong>Single Gene Disorders:</strong> Like Rett syndrome or Phenylketonuria (PKU).</li>
            <li className="mb-2"><strong>Inherited Traits:</strong> ID can run in families, suggesting a complex interplay of many genes.<sup>[4]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prenatal Complications</h2>
          <p className="mb-4">Factors that affect fetal development during pregnancy:<sup>[5]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Prenatal Alcohol Exposure:</strong> Can lead to Fetal Alcohol Spectrum Disorder (FASD).<sup>[6]</sup></li>
            <li className="mb-2"><strong>Maternal Infections:</strong> Such as rubella, syphilis, or cytomegalovirus.</li>
            <li className="mb-2"><strong>Environmental Toxins:</strong> Exposure to lead, mercury, or certain medications.</li>
            <li className="mb-2"><strong>Malnutrition:</strong> Severe lack of essential nutrients during pregnancy.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Perinatal and Postnatal Factors</h2>
          <p className="mb-4">Issues occurring during birth or early childhood:<sup>[7]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Oxygen Deprivation:</strong> Lack of oxygen (hypoxia) during labor or birth.<sup>[8]</sup></li>
            <li className="mb-2"><strong>Extreme Prematurity:</strong> Birth before the brain is fully developed.</li>
            <li className="mb-2"><strong>Early Childhood Illnesses:</strong> Meningitis, encephalitis, or severe whooping cough.</li>
            <li className="mb-2"><strong>Traumatic Brain Injury (TBI):</strong> Severe head injuries during early development.<sup>[9]</sup></li>
            <li className="mb-2"><strong>Environmental Deprivation:</strong> Lack of social, emotional, and cognitive stimulation in early life.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Unknown Etiology</h2>
          <p className="mb-4">In approximately 30–50% of cases, the exact cause of an intellectual disability remains unknown, even with advanced testing.<sup>[10]</sup> This underscores the complexity of human brain development.</p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Boat, T. F., & Wu, J. T. (2015). <em>Mental disorders and disabilities among low-income children</em>.</p>
          <p>[2] Rauch, A., et al. (2006). "Diagnostic yield of various genetic approaches." <em>American Journal of Medical Genetics</em>.</p>
          <p>[3] Vissers, L. E., et al. (2016). "Genetic studies in intellectual disability." <em>Nature Reviews Genetics</em>.</p>
          <p>[4] Dykens, E. M. (2015). "Family adjustment in neurodevelopmental disorders." <em>Current Opinion in Psychiatry</em>.</p>
          <p>[5] Popova, S., et al. (2017). "Prevalence of alcohol use during pregnancy." <em>The Lancet Global Health</em>.</p>
          <p>[6] Hoyme, H. E., et al. (2016). "Clinical guidelines for diagnosing FASD." <em>Pediatrics</em>.</p>
          <p>[7] Graham, E. M., et al. (2008). "Intrapartum hypoxia-ischemia in the causation of neonatal encephalopathy." <em>AJOG</em>.</p>
          <p>[8] Nelson, K. B. (2008). "Perinatal causes of cerebral palsy." <em>Pediatrics</em>.</p>
          <p>[9] CDC. (2015). "Traumatic Brain Injury in the United States."</p>
          <p>[10] Moeschler, J. B., et al. (2014). "Evaluation of the child with intellectual disability." <em>Pediatrics</em>, 134(3), e903-e918.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('intellectual-disability'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Intellectual Disability</a>
      </div>
    </article>
  );
}
