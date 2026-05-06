import React, { lazy, Suspense } from 'react';

// This helper type tells TypeScript that articles MIGHT take setCurrentArticle
type ArticleProps = {
  setCurrentArticle?: (article: string) => void;
};

const articleMap: Record<string, React.ComponentType<ArticleProps>> = {
  'symptom-wheel-demo': lazy(() => import('./SymptomWheelDemo').then(m => ({ default: m.SymptomWheelDemo }))),
  'project-standards': lazy(() => import('./articles/ProjectStandards')),

  // MAIN CONDITIONS
  'adhd': lazy(() => import('./articles/ArticleADHD').then(m => ({ default: m.ArticleADHD }))),
  'autism': lazy(() => import('./articles/ArticleAutism').then(m => ({ default: m.ArticleAutism }))),
  'dyslexia': lazy(() => import('./articles/ArticleDyslexia').then(m => ({ default: m.ArticleDyslexia }))),
  'dyscalculia': lazy(() => import('./articles/ArticleDyscalculia').then(m => ({ default: m.ArticleDyscalculia }))),
  'dyspraxia': lazy(() => import('./articles/ArticleDyspraxia').then(m => ({ default: m.ArticleDyspraxia }))),
  'tourette': lazy(() => import('./articles/ArticleTourette').then(m => ({ default: m.ArticleTourette }))),
  'synesthesia': lazy(() => import('./articles/ArticleSynesthesia').then(m => ({ default: m.ArticleSynesthesia }))),
  'dysgraphia': lazy(() => import('./articles/ArticleDysgraphia').then(m => ({ default: m.ArticleDysgraphia }))),
  'hyperlexia': lazy(() => import('./articles/ArticleHyperlexia').then(m => ({ default: m.ArticleHyperlexia }))),
  'misophonia': lazy(() => import('./articles/ArticleMisophonia').then(m => ({ default: m.ArticleMisophonia }))),
  'twice-exceptional': lazy(() => import('./articles/ArticleTwiceExceptional').then(m => ({ default: m.ArticleTwiceExceptional }))),
  'ocd': lazy(() => import('./articles/ArticleOCD').then(m => ({ default: m.ArticleOCD }))),
  'bipolar': lazy(() => import('./articles/ArticleBipolar').then(m => ({ default: m.ArticleBipolar }))),
  'schizophrenia': lazy(() => import('./articles/ArticleSchizophrenia').then(m => ({ default: m.ArticleSchizophrenia }))),
  'epilepsy': lazy(() => import('./articles/ArticleEpilepsy').then(m => ({ default: m.ArticleEpilepsy }))),
  'spd': lazy(() => import('./articles/ArticleSPD').then(m => ({ default: m.ArticleSPD }))),
  'apd': lazy(() => import('./articles/ArticleAPD').then(m => ({ default: m.ArticleAPD }))),
  'visual-processing': lazy(() => import('./articles/ArticleVisualProcessing').then(m => ({ default: m.ArticleVisualProcessing }))),
  'nvld': lazy(() => import('./articles/ArticleNVLD').then(m => ({ default: m.ArticleNVLD }))),
  'dld': lazy(() => import('./articles/ArticleDLD').then(m => ({ default: m.ArticleDLD }))),
  'giftedness': lazy(() => import('./articles/ArticleGiftedness').then(m => ({ default: m.ArticleGiftedness }))),
  'intellectual-disability': lazy(() => import('./articles/ArticleIntellectualDisability').then(m => ({ default: m.ArticleIntellectualDisability }))),
  'down-syndrome': lazy(() => import('./articles/ArticleDownSyndrome').then(m => ({ default: m.ArticleDownSyndrome }))),
  'fasd': lazy(() => import('./articles/ArticleFASD').then(m => ({ default: m.ArticleFASD }))),
  'tbi': lazy(() => import('./articles/ArticleTBI').then(m => ({ default: m.ArticleTBI }))),
  'cte': lazy(() => import('./articles/ArticleCTE').then(m => ({ default: m.ArticleCTE }))),
  'pandas': lazy(() => import('./articles/ArticlePANDAS').then(m => ({ default: m.ArticlePANDAS }))),

  // ADHD SUB-PAGES
  'adhd-overview': lazy(() => import('./articles/adhd/ADHDOverview').then(m => ({ default: m.ADHDOverview }))),
  'adhd-symptoms': lazy(() => import('./articles/adhd/ADHDSymptoms').then(m => ({ default: m.ADHDSymptoms }))),
  'adhd-causes': lazy(() => import('./articles/adhd/ADHDCauses').then(m => ({ default: m.ADHDCauses }))),
  'adhd-diagnosis': lazy(() => import('./articles/adhd/ADHDDiagnosis').then(m => ({ default: m.ADHDDiagnosis }))),
  'adhd-support': lazy(() => import('./articles/adhd/ADHDSupport').then(m => ({ default: m.ADHDSupport }))),
  'adhd-living': lazy(() => import('./articles/adhd/ADHDLiving').then(m => ({ default: m.ADHDLiving }))),

  // AUTISM SUB-PAGES
  'autism-overview': lazy(() => import('./articles/autism/ASDOverview').then(m => ({ default: m.ASDOverview }))),
  'autism-symptoms': lazy(() => import('./articles/autism/asd-symptoms/ASDSymptoms').then(m => ({ default: m.ASDSymptoms }))),
  'autism-causes':   lazy(() => import('./articles/autism/asd-causes/ASDCauses').then(m => ({ default: m.ASDCauses }))),
  'autism-diagnosis': lazy(() => import('./articles/autism/asd-diagnosis/ASDDiagnosis').then(m => ({ default: m.ASDDiagnosis }))),
  'autism-living':    lazy(() => import('./articles/autism/asd-living/ASDLiving').then(m => ({ default: m.ASDLiving }))),
  'autism-support':   lazy(() => import('./articles/autism/asd-support/ASDSupport').then(m => ({ default: m.ASDSupport }))),
 
  // --- THE CHILDREN (Files inside the support tabs) ---
  'autism-early-intervention': lazy(() => import('./articles/autism/asd-support/EarlyInterventionContent').then(m => ({ default: m.EarlyInterventionContent }))),
  'autism-therapies': lazy(() => import('./articles/autism/asd-support/TherapiesContent').then(m => ({ default: m.TherapiesContent }))),
  'autism-educational': lazy(() => import('./articles/autism/asd-support/EducationalContent').then(m => ({ default: m.EducationalContent }))),
  'autism-medical': lazy(() => import('./articles/autism/asd-support/MedicalContent').then(m => ({ default: m.MedicalContent }))),
  'autism-environmental': lazy(() => import('./articles/autism/asd-support/EnvironmentalContent').then(m => ({ default: m.EnvironmentalContent }))),
  'autism-family': lazy(() => import('./articles/autism/asd-support/FamilyPrinciplesContent').then(m => ({ default: m.FamilyPrinciplesContent }))),

  // --- THE DEEP DIVES (The individual therapy pages) ---
  'autism-occupational-therapy': lazy(() => import('./articles/autism/asd-support/OccupationalTherapy').then(m => ({ default: m.OccupationalTherapy }))),
  'autism-speech-therapy': lazy(() => import('./articles/autism/asd-support/SpeechTherapy').then(m => ({ default: m.SpeechTherapy }))),
  'autism-aba-therapy': lazy(() => import('./articles/autism/asd-support/ABATherapy').then(m => ({ default: m.ABATherapy }))),
  'autism-social-skills': lazy(() => import('./articles/autism/asd-support/SocialSkills').then(m => ({ default: m.SocialSkills }))),
  'autism-mental-health': lazy(() => import('./articles/autism/asd-support/MentalHealth').then(m => ({ default: m.MentalHealth }))),
  'autism-physical-therapy': lazy(() => import('./articles/autism/asd-support/PhysicalTherapy').then(m => ({ default: m.PhysicalTherapy }))),
  'autism-epigenetics': lazy(() => import('./articles/autism/asd-causes/Epigenetics').then(m => ({ default: m.Epigenetics }))),

  
  // MISC
  'about': lazy(() => import('./articles/ArticleAbout').then(m => ({ default: m.ArticleAbout }))),
  'donate': lazy(() => import('./articles/ArticleDonate').then(m => ({ default: m.ArticleDonate }))),
  'blog': lazy(() => import('./articles/ArticleBlog').then(m => ({ default: m.ArticleBlog }))),
};

interface ArticleContentProps {
  articleId: string;
  setCurrentArticle?: (article: string) => void;
}

export function ArticleContent({ articleId, setCurrentArticle }: ArticleContentProps) {
  // Try to find the component
  const SelectedComponent = articleMap[articleId];

  // IF THE LINK IS BROKEN OR MISSING: Show a helpful error instead of ADHD
  if (!SelectedComponent) {
    return (
      <div className="bg-red-50 rounded-lg shadow-sm border border-red-200 p-8 text-center">
        <h2 className="text-red-700 font-bold text-2xl mb-4">Link Error (Developer Debug)</h2>
        <p className="text-slate-700 mb-2">
          A button just tried to load the article ID: <strong className="bg-white px-2 py-1 rounded text-red-600 border border-red-200">"{articleId}"</strong>
        </p>
        <p className="text-slate-700 mb-6">
          However, that exact ID does not exist in your <code>articleMap</code> in <strong>ArticleContent.tsx</strong>. 
          Check the button you just clicked and make sure it matches the keys in your map exactly!
        </p>
        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-red-100 hover:bg-red-200 text-red-800 font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Reset to Home/ADHD
        </button>
      </div>
    );
  }

  // IF THE LINK IS GOOD: Load the component normally
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
          <p className="mt-4 text-blue-900 font-medium">Loading content...</p>
        </div>
      }>
        <SelectedComponent setCurrentArticle={setCurrentArticle} />
      </Suspense>
    </div>
  );
}