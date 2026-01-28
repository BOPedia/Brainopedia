export function ADHDMyths() {
  return (
    <svg viewBox="0 0 400 320" className="w-full h-auto">
      <defs>
        <style>
          {`
            .myth-title { font-family: 'League Spartan', sans-serif; font-size: 20px; font-weight: 700; fill: #0c264d; }
            .myth-text { font-family: 'League Spartan', sans-serif; font-size: 14px; font-weight: 600; fill: #0c264d; }
            .myth-label { font-family: 'League Spartan', sans-serif; font-size: 11px; fill: #0c264d; }
          `}
        </style>
      </defs>
      
      {/* Background */}
      <rect width="400" height="320" fill="#f8f9fa" rx="8"/>
      
      {/* Title */}
      <text x="200" y="30" className="myth-title" textAnchor="middle">ADHD MYTHS DEBUNKED</text>
      
      {/* Red X symbols and myths */}
      
      {/* Myth 1 - Poor Parenting */}
      <g>
        <circle cx="60" cy="75" r="25" fill="#ef4444" opacity="0.2"/>
        <line x1="45" y1="60" x2="75" y2="90" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
        <line x1="75" y1="60" x2="45" y2="90" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
        <text x="100" y="80" className="myth-text">Poor Parenting</text>
      </g>
      
      {/* Myth 2 - Too Much Screen Time */}
      <g>
        <circle cx="60" cy="125" r="25" fill="#ef4444" opacity="0.2"/>
        <line x1="45" y1="110" x2="75" y2="140" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
        <line x1="75" y1="110" x2="45" y2="140" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
        <text x="100" y="130" className="myth-text">Too Much Screen Time</text>
      </g>
      
      {/* Myth 3 - Sugar */}
      <g>
        <circle cx="60" cy="175" r="25" fill="#ef4444" opacity="0.2"/>
        <line x1="45" y1="160" x2="75" y2="190" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
        <line x1="75" y1="160" x2="45" y2="190" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
        <text x="100" y="180" className="myth-text">Sugar Consumption</text>
      </g>
      
      {/* Myth 4 - Vaccines */}
      <g>
        <circle cx="60" cy="225" r="25" fill="#ef4444" opacity="0.2"/>
        <line x1="45" y1="210" x2="75" y2="240" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
        <line x1="75" y1="210" x2="45" y2="240" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
        <text x="100" y="230" className="myth-text">Vaccines</text>
      </g>
      
      {/* Myth 5 - Food Additives */}
      <g>
        <circle cx="60" cy="275" r="25" fill="#ef4444" opacity="0.2"/>
        <line x1="45" y1="260" x2="75" y2="290" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
        <line x1="75" y1="260" x2="45" y2="290" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
        <text x="100" y="280" className="myth-text">Food Additives</text>
      </g>
      
      {/* Truth Box */}
      <rect x="250" y="60" width="130" height="240" fill="#2abcd4" opacity="0.1" stroke="#2abcd4" strokeWidth="2" rx="6"/>
      
      {/* Checkmark */}
      <circle cx="315" cy="100" r="20" fill="#10b981" opacity="0.2"/>
      <polyline points="305,100 312,107 325,90" fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      
      <text x="315" y="135" className="myth-text" textAnchor="middle">THE TRUTH:</text>
      <text x="315" y="155" className="myth-label" textAnchor="middle">ADHD is caused by</text>
      <text x="315" y="170" className="myth-label" textAnchor="middle">genetic and</text>
      <text x="315" y="185" className="myth-label" textAnchor="middle">neurobiological</text>
      <text x="315" y="200" className="myth-label" textAnchor="middle">factors, not</text>
      <text x="315" y="215" className="myth-label" textAnchor="middle">lifestyle choices</text>
      <text x="315" y="230" className="myth-label" textAnchor="middle">or parenting.</text>
      
      {/* DNA Icon */}
      <g transform="translate(295, 240)">
        <circle cx="10" cy="5" r="3" fill="#ffd166"/>
        <circle cx="30" cy="5" r="3" fill="#ffd166"/>
        <circle cx="10" cy="20" r="3" fill="#ffd166"/>
        <circle cx="30" cy="20" r="3" fill="#ffd166"/>
        <line x1="10" y1="5" x2="30" y2="20" stroke="#2abcd4" strokeWidth="2"/>
        <line x1="30" y1="5" x2="10" y2="20" stroke="#2abcd4" strokeWidth="2"/>
      </g>
      
      {/* Bottom label */}
      <text x="200" y="310" className="myth-label" textAnchor="middle" fill="#666">Science-based evidence shows these do NOT cause ADHD</text>
    </svg>
  );
}
