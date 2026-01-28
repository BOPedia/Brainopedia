import React from 'react';

export function AuDHDVennDiagram() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white rounded-lg">
      <svg viewBox="0 0 800 500" className="w-full h-auto">
        {/* Left Circle (ADHD) - Gold with opacity */}
        <circle
          cx="280"
          cy="250"
          r="180"
          fill="#ffd166"
          fillOpacity="0.4"
          stroke="#ffd166"
          strokeWidth="3"
        />
        
        {/* Right Circle (ASD) - Cyan with opacity */}
        <circle
          cx="520"
          cy="250"
          r="180"
          fill="#2abcd4"
          fillOpacity="0.4"
          stroke="#2abcd4"
          strokeWidth="3"
        />

        {/* Left Circle Label */}
        <text
          x="210"
          y="100"
          fill="#0c264d"
          fontSize="24"
          fontWeight="bold"
          fontFamily="League Spartan, sans-serif"
        >
          ADHD only
        </text>

        {/* Right Circle Label */}
        <text
          x="555"
          y="100"
          fill="#0c264d"
          fontSize="24"
          fontWeight="bold"
          fontFamily="League Spartan, sans-serif"
        >
          ASD only
        </text>

        {/* Center Label */}
        <text
          x="330"
          y="150"
          fill="#0c264d"
          fontSize="20"
          fontWeight="bold"
          fontFamily="League Spartan, sans-serif"
        >
          Both ADHD + ASD
        </text>

        {/* ADHD Only Symptoms (Left side) */}
        <text x="150" y="200" fill="#0c264d" fontSize="16" fontFamily="League Spartan, sans-serif">• Hyperactivity</text>
        <text x="150" y="225" fill="#0c264d" fontSize="16" fontFamily="League Spartan, sans-serif">• Impulsivity</text>
        <text x="150" y="250" fill="#0c264d" fontSize="16" fontFamily="League Spartan, sans-serif">• Executive dysfunction</text>
        <text x="150" y="275" fill="#0c264d" fontSize="16" fontFamily="League Spartan, sans-serif">• Time blindness</text>
        <text x="150" y="300" fill="#0c264d" fontSize="16" fontFamily="League Spartan, sans-serif">• Rejection sensitive</text>
        <text x="160" y="320" fill="#0c264d" fontSize="16" fontFamily="League Spartan, sans-serif">dysphoria</text>

        {/* Both ADHD + ASD Symptoms (Center) */}
        <text x="310" y="200" fill="#0c264d" fontSize="15" fontFamily="League Spartan, sans-serif">• Attention</text>
        <text x="315" y="218" fill="#0c264d" fontSize="15" fontFamily="League Spartan, sans-serif">differences</text>
        <text x="310" y="243" fill="#0c264d" fontSize="15" fontFamily="League Spartan, sans-serif">• Emotional</text>
        <text x="315" y="261" fill="#0c264d" fontSize="15" fontFamily="League Spartan, sans-serif">regulation</text>
        <text x="315" y="279" fill="#0c264d" fontSize="15" fontFamily="League Spartan, sans-serif">challenges</text>
        <text x="310" y="304" fill="#0c264d" fontSize="15" fontFamily="League Spartan, sans-serif">• Information</text>
        <text x="315" y="322" fill="#0c264d" fontSize="15" fontFamily="League Spartan, sans-serif">processing</text>
        <text x="315" y="340" fill="#0c264d" fontSize="15" fontFamily="League Spartan, sans-serif">differences</text>
        <text x="310" y="365" fill="#0c264d" fontSize="15" fontFamily="League Spartan, sans-serif">• Masking</text>
        <text x="310" y="390" fill="#0c264d" fontSize="15" fontFamily="League Spartan, sans-serif">• Executive function</text>
        <text x="315" y="408" fill="#0c264d" fontSize="15" fontFamily="League Spartan, sans-serif">challenges</text>

        {/* ASD Only Symptoms (Right side) */}
        <text x="565" y="200" fill="#0c264d" fontSize="16" fontFamily="League Spartan, sans-serif">• Special interests</text>
        <text x="565" y="225" fill="#0c264d" fontSize="16" fontFamily="League Spartan, sans-serif">• Stimming</text>
        <text x="565" y="250" fill="#0c264d" fontSize="16" fontFamily="League Spartan, sans-serif">• Sensory sensitivities</text>
        <text x="565" y="275" fill="#0c264d" fontSize="16" fontFamily="League Spartan, sans-serif">• Social communication</text>
        <text x="575" y="295" fill="#0c264d" fontSize="16" fontFamily="League Spartan, sans-serif">differences</text>
        <text x="565" y="320" fill="#0c264d" fontSize="16" fontFamily="League Spartan, sans-serif">• Need for routine</text>
      </svg>
    </div>
  );
}
