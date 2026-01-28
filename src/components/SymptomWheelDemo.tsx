import React, { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from 'recharts';

export function SymptomWheelDemo() {
  const [showExample, setShowExample] = useState(true);

  // Example data - these could be customized per individual
  const symptomData = [
    { category: 'Social Issues', value: 7, fullMark: 10 },
    { category: 'Communication', value: 6, fullMark: 10 },
    { category: 'Restricted Interests', value: 8, fullMark: 10 },
    { category: 'Sensory Processing', value: 9, fullMark: 10 },
    { category: 'Stimming', value: 5, fullMark: 10 },
    { category: 'Need for Routine', value: 8, fullMark: 10 },
    { category: 'Executive Function', value: 6, fullMark: 10 },
    { category: 'Motor Skills', value: 4, fullMark: 10 },
    { category: 'Anxiety', value: 7, fullMark: 10 },
    { category: 'Depression', value: 5, fullMark: 10 },
    { category: 'Dysregulation', value: 6, fullMark: 10 },
    { category: 'Posture Issues', value: 3, fullMark: 10 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl text-center">
          📊 Interactive Symptom Profile Chart
        </h2>
        <p className="text-sm text-center mb-4">
          This is a code-based radar chart showing symptom categories rated 0-10. 
          Unlike a static image, this is interactive and can be dynamically updated!
        </p>

        <div className="bg-white p-6 rounded-lg border-2 border-[#2abcd4] mb-6">
          <ResponsiveContainer width="100%" height={500}>
            <RadarChart data={symptomData}>
              <PolarGrid stroke="#2abcd4" />
              <PolarAngleAxis 
                dataKey="category" 
                tick={{ fill: '#0c264d', fontSize: 12, fontWeight: 'bold' }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 10]} 
                tick={{ fill: '#0c264d' }}
              />
              <Radar
                name="Symptom Intensity"
                dataKey="value"
                stroke="#2abcd4"
                fill="#2abcd4"
                fillOpacity={0.6}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '2px solid #2abcd4',
                  borderRadius: '8px'
                }}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
          <p className="text-sm">
            <strong>✨ Benefits of Code-Based Charts:</strong>
          </p>
          <ul className="text-sm mt-2 space-y-1">
            <li>• <strong>Interactive:</strong> Hover over points to see exact values</li>
            <li>• <strong>Dynamic:</strong> Can be updated in real-time with user input</li>
            <li>• <strong>Responsive:</strong> Automatically adjusts to screen size</li>
            <li>• <strong>Customizable:</strong> Colors, labels, and data can be easily changed</li>
            <li>• <strong>Multiple Profiles:</strong> Can overlay multiple people's profiles for comparison</li>
          </ul>
        </div>
      </div>

      {/* Comparison Example */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h3 className="text-[#0c264d] font-bold mb-4 text-xl text-center">
          🔄 Multi-Profile Comparison Example
        </h3>
        <p className="text-sm text-center mb-4">
          This shows how you could compare different profiles (e.g., different individuals, before/after support, etc.)
        </p>

        <div className="bg-white p-6 rounded-lg border-2 border-[#2abcd4]">
          <ResponsiveContainer width="100%" height={500}>
            <RadarChart data={symptomData}>
              <PolarGrid stroke="#2abcd4" />
              <PolarAngleAxis 
                dataKey="category" 
                tick={{ fill: '#0c264d', fontSize: 11, fontWeight: 'bold' }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 10]} 
                tick={{ fill: '#0c264d' }}
              />
              <Radar
                name="Profile A"
                dataKey="value"
                stroke="#2abcd4"
                fill="#2abcd4"
                fillOpacity={0.5}
              />
              <Radar
                name="Profile B"
                data={symptomData.map(item => ({
                  ...item,
                  value: Math.max(0, Math.min(10, item.value + Math.floor(Math.random() * 4 - 2)))
                }))}
                stroke="#ffd166"
                fill="#ffd166"
                fillOpacity={0.5}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '2px solid #2abcd4',
                  borderRadius: '8px'
                }}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white border-l-4 border-[#2abcd4] p-4 rounded mt-6">
          <p className="text-sm">
            <strong>💡 Use Cases:</strong> Compare before/after intervention, show variation between individuals, 
            demonstrate how support needs differ, or allow users to create their own personalized profile.
          </p>
        </div>
      </div>
    </div>
  );
}
