import React from 'react';
import brainLogo from 'figma:asset/ce1a0a7ac18baefc58bab97613f60d741aaa593d.png';

export function ADHDTreatmentApproach() {
  return (
    <svg width="600" height="367" viewBox="0 0 900 550" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="900" height="550" fill="#ffffff"/>
      
      {/* Title Section */}
      <rect x="0" y="0" width="900" height="70" fill="#0c264d"/>
      <text x="450" y="30" fontFamily="League Spartan, sans-serif" fontSize="28" fontWeight="bold" fill="#ffd166" textAnchor="middle">
        Comprehensive ADHD Treatment Approach
      </text>
      <text x="450" y="55" fontFamily="League Spartan, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle">
        The most effective treatment plans combine multiple strategies
      </text>
      
      {/* Component 1: Medication */}
      <g>
        <rect x="325" y="85" width="150" height="160" fill="#ffd166" rx="12"/>
        
        {/* Capsule icon - smaller */}
        <g transform="rotate(45 400 130)">
          {/* Left half of capsule */}
          <rect x="382" y="121" width="18" height="18" fill="#0c264d"/>
          <circle cx="382" cy="130" r="9" fill="#0c264d"/>
          
          {/* Right half of capsule */}
          <rect x="400" y="121" width="18" height="18" fill="#2abcd4"/>
          <circle cx="418" cy="130" r="9" fill="#2abcd4"/>
        </g>
        
        {/* Text */}
        <text x="400" y="170" fontFamily="League Spartan, sans-serif" fontSize="16" fontWeight="bold" fill="#0c264d" textAnchor="middle">
          MEDICATION
        </text>
        <text x="400" y="190" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle">
          Stimulant &amp;
        </text>
        <text x="400" y="205" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle">
          non-stimulant
        </text>
        <text x="400" y="220" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle">
          options to improve
        </text>
        <text x="400" y="235" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle">
          focus &amp; symptoms
        </text>
      </g>
      
      {/* Component 2: Behavioral Interventions */}
      <g>
        <rect x="575" y="140" width="150" height="160" fill="#2abcd4" rx="12"/>
        
        {/* Brain/thought bubble icon */}
        <circle cx="650" cy="185" r="18" fill="#0c264d"/>
        <circle cx="640" cy="175" r="12" fill="#0c264d"/>
        <circle cx="660" cy="175" r="12" fill="#0c264d"/>
        <ellipse cx="650" cy="195" rx="8" ry="6" fill="#ffd166"/>
        <path d="M 642 195 Q 650 205 658 195" stroke="#ffd166" strokeWidth="2" fill="none"/>
        
        {/* Text */}
        <text x="650" y="225" fontFamily="League Spartan, sans-serif" fontSize="16" fontWeight="bold" fill="#0c264d" textAnchor="middle">
          BEHAVIORAL
        </text>
        <text x="650" y="242" fontFamily="League Spartan, sans-serif" fontSize="16" fontWeight="bold" fill="#0c264d" textAnchor="middle">
          INTERVENTIONS
        </text>
        <text x="650" y="260" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle">
          Therapy, CBT,
        </text>
        <text x="650" y="275" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle">
          coaching, &amp; skill
        </text>
        <text x="650" y="290" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle">
          development
        </text>
      </g>
      
      {/* Component 3: Educational & Workplace */}
      <g>
        <rect x="525" y="330" width="150" height="160" fill="#ffd166" rx="12"/>
        
        {/* Building/workplace icon */}
        <rect x="585" y="360" width="30" height="35" fill="#0c264d"/>
        <polygon points="570,360 600,345 630,360" fill="#0c264d"/>
        <rect x="590" y="368" width="6" height="8" fill="#2abcd4"/>
        <rect x="604" y="368" width="6" height="8" fill="#2abcd4"/>
        <rect x="590" y="380" width="6" height="8" fill="#2abcd4"/>
        <rect x="604" y="380" width="6" height="8" fill="#2abcd4"/>
        
        {/* Text */}
        <text x="600" y="415" fontFamily="League Spartan, sans-serif" fontSize="16" fontWeight="bold" fill="#0c264d" textAnchor="middle">
          EDUCATIONAL
        </text>
        <text x="600" y="432" fontFamily="League Spartan, sans-serif" fontSize="16" fontWeight="bold" fill="#0c264d" textAnchor="middle">
          &amp; WORKPLACE
        </text>
        <text x="600" y="450" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle">
          IEP/504 plans,
        </text>
        <text x="600" y="465" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle">
          reasonable
        </text>
        <text x="600" y="480" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle">
          accommodations
        </text>
      </g>
      
      {/* Component 4: Lifestyle Modifications */}
      <g>
        <rect x="125" y="330" width="150" height="160" fill="#2abcd4" rx="12"/>
        
        {/* Heart/health icon - smaller */}
        <path d="M 193 360 C 193 356 196 354 199 354 C 201 354 202 355 203 356 C 204 355 205 354 207 354 C 210 354 213 356 213 360 C 213 364 203 372 203 372 C 203 372 193 364 193 360 Z" fill="#0c264d"/>
        
        {/* Running person stick figure - smaller */}
        <circle cx="225" cy="362" r="4" fill="#0c264d"/>
        <line x1="225" y1="366" x2="225" y2="377" stroke="#0c264d" strokeWidth="1.5"/>
        <line x1="225" y1="370" x2="219" y2="374" stroke="#0c264d" strokeWidth="1.5"/>
        <line x1="225" y1="370" x2="231" y2="368" stroke="#0c264d" strokeWidth="1.5"/>
        <line x1="225" y1="377" x2="221" y2="385" stroke="#0c264d" strokeWidth="1.5"/>
        <line x1="225" y1="377" x2="229" y2="384" stroke="#0c264d" strokeWidth="1.5"/>
        
        {/* Apple icon - smaller */}
        <circle cx="240" cy="365" r="6" fill="#0c264d"/>
        <rect x="239.5" y="359" width="1.5" height="5" fill="#0c264d"/>
        <ellipse cx="242" cy="361" rx="2.5" ry="1.5" fill="#0c264d" transform="rotate(-20 242 361)"/>
        
        {/* Text */}
        <text x="200" y="405" fontFamily="League Spartan, sans-serif" fontSize="16" fontWeight="bold" fill="#0c264d" textAnchor="middle">
          LIFESTYLE
        </text>
        <text x="200" y="422" fontFamily="League Spartan, sans-serif" fontSize="16" fontWeight="bold" fill="#0c264d" textAnchor="middle">
          MODIFICATIONS
        </text>
        <text x="200" y="440" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle">
          Exercise, sleep,
        </text>
        <text x="200" y="455" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle">
          nutrition, mindfulness
        </text>
        <text x="200" y="470" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle">
          &amp; stress management
        </text>
      </g>
      
      {/* Component 5: Support Systems */}
      <g>
        <rect x="75" y="140" width="150" height="160" fill="#ffd166" rx="12"/>
        
        {/* People/community icon */}
        <circle cx="130" cy="180" r="8" fill="#0c264d"/>
        <circle cx="150" cy="180" r="8" fill="#0c264d"/>
        <circle cx="170" cy="180" r="8" fill="#0c264d"/>
        <path d="M 122 188 Q 130 198 138 188" fill="#0c264d"/>
        <path d="M 142 188 Q 150 198 158 188" fill="#0c264d"/>
        <path d="M 162 188 Q 170 198 178 188" fill="#0c264d"/>
        
        {/* Connecting lines */}
        <line x1="138" y1="185" x2="142" y2="185" stroke="#2abcd4" strokeWidth="3"/>
        <line x1="158" y1="185" x2="162" y2="185" stroke="#2abcd4" strokeWidth="3"/>
        
        {/* Text */}
        <text x="150" y="225" fontFamily="League Spartan, sans-serif" fontSize="16" fontWeight="bold" fill="#0c264d" textAnchor="middle">
          SUPPORT
        </text>
        <text x="150" y="242" fontFamily="League Spartan, sans-serif" fontSize="16" fontWeight="bold" fill="#0c264d" textAnchor="middle">
          SYSTEMS
        </text>
        <text x="150" y="260" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle">
          Family, friends,
        </text>
        <text x="150" y="275" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle">
          support groups,
        </text>
        <text x="150" y="290" fontFamily="League Spartan, sans-serif" fontSize="11" fill="#0c264d" textAnchor="middle">
          community resources
        </text>
      </g>
      
      {/* Central connecting element - hub */}
      <circle cx="400" cy="305" r="40" fill="#0c264d"/>
      <text x="400" y="298" fontFamily="League Spartan, sans-serif" fontSize="16" fontWeight="bold" fill="#ffd166" textAnchor="middle">
        MULTI-
      </text>
      <text x="400" y="316" fontFamily="League Spartan, sans-serif" fontSize="16" fontWeight="bold" fill="#ffd166" textAnchor="middle">
        MODAL
      </text>
      
      {/* Brainopedia Logo */}
      <image href={brainLogo} x="360" y="355" width="80" height="80"/>
      
      {/* Connection lines from boxes to center */}
      <line x1="400" y1="245" x2="400" y2="265" stroke="#0c264d" strokeWidth="2" strokeDasharray="5,5" opacity="0.3"/>
      <line x1="575" y1="220" x2="435" y2="280" stroke="#0c264d" strokeWidth="2" strokeDasharray="5,5" opacity="0.3"/>
      <line x1="525" y1="370" x2="430" y2="330" stroke="#0c264d" strokeWidth="2" strokeDasharray="5,5" opacity="0.3"/>
      <line x1="275" y1="370" x2="370" y2="330" stroke="#0c264d" strokeWidth="2" strokeDasharray="5,5" opacity="0.3"/>
      <line x1="225" y1="220" x2="365" y2="280" stroke="#0c264d" strokeWidth="2" strokeDasharray="5,5" opacity="0.3"/>
      
      {/* Bottom note */}
      <rect x="50" y="500" width="800" height="35" fill="#0c264d" rx="6"/>
      <text x="450" y="522" fontFamily="League Spartan, sans-serif" fontSize="13" fill="#ffffff" textAnchor="middle">
        💡 Research shows combination treatments are more effective than any single intervention alone
      </text>
      
      {/* Branding */}
      <text x="450" y="545" fontFamily="League Spartan, sans-serif" fontSize="12" fill="#0c264d" textAnchor="middle">
        brainopedia.org
      </text>
    </svg>
  );
}