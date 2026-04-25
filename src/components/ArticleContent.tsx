import React from 'react';
// ... other imports ...

// --- REVISED AUTISM IMPORTS ---
import { ASDOverview } from './articles/autism/asd-symptoms/ASDOverview'; // Path updated to asd-symptoms
import { ASDSymptoms } from './articles/autism/asd-symptoms/ASDSymptoms';
import { ASDCauses } from './articles/autism/asd-causes/ASDCauses'; 
import { ASDDiagnosis } from './articles/autism/asd-diagnosis/ASDDiagnosis'; // Path updated to asd-diagnosis
import { ASDSupport } from './articles/autism/asd-support/ASDSupport'; 
import { ASDLiving } from './articles/autism/asd-living/ASDLiving'; // Path updated to asd-living

// Updated names and paths for the new modular files in asd-support
import { SpeechTherapy } from './articles/autism/asd-support/SpeechTherapy';
import { OccupationalTherapy } from './articles/autism/asd-support/OccupationalTherapy';
import { ABATherapy } from './articles/autism/asd-support/ABATherapy';
import { SocialSkills } from './articles/autism/asd-support/SocialSkills';
import { MentalHealth } from './articles/autism/asd-support/MentalHealth';

interface ArticleContentProps {
  articleId: string;
  setCurrentArticle?: (article: string) => void;
  tabId?: string;
}

export function ArticleContent({ articleId, setCurrentArticle, tabId }: ArticleContentProps) {
  const articles: Record<string, React.ReactNode> = {
    // ... other mappings ...
    
// --- AUTISM MAPPING ---
// Change these lines to remove the "ASD" prefix from the components
'autism-speech-therapy': <SpeechTherapy setCurrentArticle={setCurrentArticle} />,
'autism-occupational-therapy': <OccupationalTherapy setCurrentArticle={setCurrentArticle} />,
'autism-aba-therapy': <ABATherapy setCurrentArticle={setCurrentArticle} />,
'autism-social-skills': <SocialSkills setCurrentArticle={setCurrentArticle} />,
'autism-mental-health': <MentalHealth setCurrentArticle={setCurrentArticle} />,

    // ... rest of the mapping ...
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      {articles[articleId] || articles.adhd}
    </div>
  );
}