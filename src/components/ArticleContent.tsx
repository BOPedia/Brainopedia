import React from 'react';
// ... other imports ...

// --- REVISED AUTISM IMPORTS ---
// We removed the "_CLEANED" suffixes and updated the path for ASDCauses
import { ASDOverview } from './articles/autism/ASDOverview'; // Removed _CLEANED
import { ASDSymptoms } from './articles/autism/ASDSymptoms';
import { ASDCauses } from './articles/autism/asd-causes/ASDCauses'; // Updated Path
import { ASDDiagnosis } from './articles/autism/ASDDiagnosis'; // Removed _CLEANED
import { ASDSupport } from './articles/autism/ASDSupport'; // Removed _CLEANED
import { ASDLiving } from './articles/autism/ASDLiving'; // Removed _CLEANED
import { ASDSpeechTherapy } from './articles/autism/ASDSpeechTherapy';
import { ASDOccupationalTherapy } from './articles/autism/ASDOccupationalTherapy';
import { ASDABATherapy } from './articles/autism/ASDABATherapy';
import { ASDSocialSkills } from './articles/autism/ASDSocialSkills';
import { ASDMentalHealth } from './articles/autism/ASDMentalHealth';

// ... rest of your imports (ADHD, Dyslexia, etc.) ...

interface ArticleContentProps {
  articleId: string;
  setCurrentArticle?: (article: string) => void;
  tabId?: string;
}

export function ArticleContent({ articleId, setCurrentArticle, tabId }: ArticleContentProps) {
  const articles: Record<string, React.ReactNode> = {
    // ... other mappings ...
    
    // --- AUTISM MAPPING ---
    autism: <ArticleAutism setCurrentArticle={setCurrentArticle} />,
    'autism-overview': <ASDOverview setCurrentArticle={setCurrentArticle} />,
    'autism-symptoms': <ASDSymptoms setCurrentArticle={setCurrentArticle} initialTab={tabId} />,
    'autism-causes': <ASDCauses setCurrentArticle={setCurrentArticle} initialTab={tabId} />,
    'autism-diagnosis': <ASDDiagnosis setCurrentArticle={setCurrentArticle} initialTab={tabId} />,
    'autism-support': <ASDSupport setCurrentArticle={setCurrentArticle} initialTab={tabId} />,
    'autism-support-therapies': <ASDSupport setCurrentArticle={setCurrentArticle} initialTab="therapies" />,
    'autism-living': <ASDLiving setCurrentArticle={setCurrentArticle} initialTab={tabId} />,
    'autism-speech-therapy': <ASDSpeechTherapy setCurrentArticle={setCurrentArticle} />,
    'autism-occupational-therapy': <ASDOccupationalTherapy setCurrentArticle={setCurrentArticle} />,
    'autism-aba-therapy': <ASDABATherapy setCurrentArticle={setCurrentArticle} />,
    'autism-social-skills': <ASDSocialSkills setCurrentArticle={setCurrentArticle} />,
    'autism-mental-health': <ASDMentalHealth setCurrentArticle={setCurrentArticle} />,

    // ... rest of the mapping ...
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      {articles[articleId] || articles.adhd}
    </div>
  );
}