export function ASDComorbidities() {
  return (
    <svg width="500" height="620" viewBox="0 0 500 620" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="500" height="620" fill="#ffd166"/>
      
      {/* Title */}
      <text x="250" y="40" fontFamily="League Spartan, sans-serif" fontSize="24" fontWeight="bold" fill="#0c264d" textAnchor="middle">
        Autism Spectrum Disorder
      </text>
      <text x="250" y="65" fontFamily="League Spartan, sans-serif" fontSize="18" fill="#0c264d" textAnchor="middle">
        Co-occurring Mental Health Conditions
      </text>
      
      {/* Dividing Line */}
      <line x1="30" y1="85" x2="470" y2="85" stroke="#0c264d" strokeWidth="2"/>
      
      {/* Main Section - Comorbidities with percentages */}
      <rect x="40" y="110" width="420" height="340" fill="#2abcd4" rx="10"/>
      <text x="250" y="140" fontFamily="League Spartan, sans-serif" fontSize="20" fontWeight="bold" fill="#ffffff" textAnchor="middle">
        COMMON CO-OCCURRING CONDITIONS
      </text>
      
      {/* Comorbidities Grid */}
      <rect x="60" y="160" width="380" height="45" fill="#0c264d" rx="5"/>
      <text x="75" y="182" fontFamily="League Spartan, sans-serif" fontSize="14" fontWeight="bold" fill="#ffffff">
        Anxiety Disorders
      </text>
      <text x="75" y="198" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#ffffff">
        40-50% • Lugo-Marín et al., 2019; Hollocks et al., 2019
      </text>
      
      <rect x="60" y="215" width="380" height="45" fill="#0c264d" rx="5"/>
      <text x="75" y="237" fontFamily="League Spartan, sans-serif" fontSize="14" fontWeight="bold" fill="#ffffff">
        Depression
      </text>
      <text x="75" y="253" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#ffffff">
        20-37% • Hudson et al., 2019; Hollocks et al., 2019
      </text>
      
      <rect x="60" y="270" width="380" height="45" fill="#0c264d" rx="5"/>
      <text x="75" y="292" fontFamily="League Spartan, sans-serif" fontSize="14" fontWeight="bold" fill="#ffffff">
        ADHD
      </text>
      <text x="75" y="308" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#ffffff">
        30-60% • Leitner, 2014; Taurines et al., 2012
      </text>
      
      <rect x="60" y="325" width="380" height="45" fill="#0c264d" rx="5"/>
      <text x="75" y="347" fontFamily="League Spartan, sans-serif" fontSize="14" fontWeight="bold" fill="#ffffff">
        Obsessive-Compulsive Disorder
      </text>
      <text x="75" y="363" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#ffffff">
        17-37% • Meier et al., 2015; Postorino et al., 2017
      </text>
      
      <rect x="60" y="380" width="380" height="45" fill="#0c264d" rx="5"/>
      <text x="75" y="402" fontFamily="League Spartan, sans-serif" fontSize="14" fontWeight="bold" fill="#ffffff">
        Sleep Disorders
      </text>
      <text x="75" y="418" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#ffffff">
        40-83% • Schwichtenberg et al., 2022
      </text>
      
      {/* Bottom Stats Box */}
      <rect x="40" y="470" width="420" height="100" fill="#ffffff" stroke="#0c264d" strokeWidth="2" rx="10"/>
      
      {/* Central Statement */}
      <text x="250" y="495" fontFamily="League Spartan, sans-serif" fontSize="15" fontWeight="bold" fill="#0c264d" textAnchor="middle">
        Autistic individuals experience mental health
      </text>
      <text x="250" y="515" fontFamily="League Spartan, sans-serif" fontSize="15" fontWeight="bold" fill="#0c264d" textAnchor="middle">
        conditions at significantly higher rates than
      </text>
      <text x="250" y="535" fontFamily="League Spartan, sans-serif" fontSize="15" fontWeight="bold" fill="#0c264d" textAnchor="middle">
        the general population
      </text>
      <text x="250" y="555" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle" fontStyle="italic">
        Comprehensive mental health assessment is essential for wellbeing
      </text>
      
      {/* Footer */}
      <text x="250" y="595" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle" fontStyle="italic">
        Sources cited are representative studies; rates vary across research
      </text>
      
      {/* Branding */}
      <text x="250" y="610" fontFamily="League Spartan, sans-serif" fontSize="10" fill="#0c264d" textAnchor="middle">
        brainopedia.org
      </text>
    </svg>
  );
}