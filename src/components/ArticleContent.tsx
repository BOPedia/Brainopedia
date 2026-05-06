import React, { lazy, Suspense } from 'react';

// --- IMPORT YOUR SUBGROUPS HERE ---
// (We only import RouteMap once using the correct articles path)
import { RouteMap } from './articles/routes/routeTypes';
import { coreNeurodevelopmentalRoutes } from './articles/routes/coreNeurodevelopmentalRoutes';

// --- THE MASTER MAP ---
const articleMap: RouteMap = {
  // 1. Pour all the Core Neurodevelopmental routes in here instantly!
  ...coreNeurodevelopmentalRoutes,

  // 2. We will keep these here temporarily until you build the other group files.
  // We have commented out the ones you haven't built yet to prevent Vite crashes!
  
  // --- Learning Differences & Profiles ---
  'dyscalculia': lazy(() => import('./articles/ArticleDyscalculia').then(m => ({ default: m.ArticleDyscalculia }))),
  'dyscalculia-support': lazy(() => import('./articles/dyscalculia/DyscalculiaSupport').then(m => ({ default: m.DyscalculiaSupport }))),
  'dyslexia': lazy(() => import('./articles/ArticleDyslexia').then(m => ({ default: m.ArticleDyslexia }))),
  'dysgraphia': lazy(() => import('./articles/ArticleDysgraphia').then(m => ({ default: m.ArticleDysgraphia }))),
  'nvld': lazy(() => import('./articles/ArticleNVLD').then(m => ({ default: m.ArticleNVLD }))),
  'dld': lazy(() => import('./articles/ArticleDLD').then(m => ({ default: m.ArticleDLD }))),
  'hyperlexia': lazy(() => import('./articles/ArticleHyperlexia').then(m => ({ default: m.ArticleHyperlexia }))),
  'giftedness': lazy(() => import('./articles/ArticleGiftedness').then(m => ({ default: m.ArticleGiftedness }))),
  'twice-exceptional': lazy(() => import('./articles/ArticleTwiceExceptional').then(m => ({ default: m.ArticleTwiceExceptional }))),

  // --- Processing & Sensory ---
  'apd': lazy(() => import('./articles/ArticleAPD').then(m => ({ default: m.ArticleAPD }))),
  'visual-processing': lazy(() => import('./articles/ArticleVisualProcessing').then(m => ({ default: m.ArticleVisualProcessing }))),
  'spd': lazy(() => import('./articles/ArticleSPD').then(m => ({ default: m.ArticleSPD }))),
  'misophonia': lazy(() => import('./articles/ArticleMisophonia').then(m => ({ default: m.ArticleMisophonia }))),
  'synesthesia': lazy(() => import('./articles/ArticleSynesthesia').then(m => ({ default: m.ArticleSynesthesia }))),

  // --- Movement & Motor ---
  'dyspraxia': lazy(() => import('./articles/ArticleDyspraxia').then(m => ({ default: m.ArticleDyspraxia }))),
  'tourette': lazy(() => import('./articles/ArticleTourette').then(m => ({ default: m.ArticleTourette }))),

  // --- Mental Health Crossovers ---
  'ocd': lazy(() => import('./articles/ArticleOCD').then(m => ({ default: m.ArticleOCD }))),
  'bipolar': lazy(() => import('./articles/ArticleBipolar').then(m => ({ default: m.ArticleBipolar }))),
  'schizophrenia': lazy(() => import('./articles/ArticleSchizophrenia').then(m => ({ default: m.ArticleSchizophrenia }))),

  // --- Genetic or Environmental ---
  'down-syndrome': lazy(() => import('./articles/ArticleDownSyndrome').then(m => ({ default: m.ArticleDownSyndrome }))),
  'intellectual-disability': lazy(() => import('./articles/ArticleIntellectualDisability').then(m => ({ default: m.ArticleIntellectualDisability }))),
  'fasd': lazy(() => import('./articles/ArticleFASD').then(m => ({ default: m.ArticleFASD }))),
  'epilepsy': lazy(() => import('./articles/ArticleEpilepsy').then(m => ({ default: m.ArticleEpilepsy }))),
  'tbi': lazy(() => import('./articles/ArticleTBI').then(m => ({ default: m.ArticleTBI }))),
  'cte': lazy(() => import('./articles/ArticleCTE').then(m => ({ default: m.ArticleCTE }))),
  'pandas': lazy(() => import('./articles/ArticlePANDAS').then(m => ({ default: m.ArticlePANDAS }))),

  // --- Misc & Site Pages ---
  'symptom-wheel-demo': lazy(() => import('./SymptomWheelDemo').then(m => ({ default: m.SymptomWheelDemo }))),
  'project-standards': lazy(() => import('./articles/ProjectStandards')),
  'about': lazy(() => import('./articles/ArticleAbout').then(m => ({ default: m.ArticleAbout }))),
  'donate': lazy(() => import('./articles/ArticleDonate').then(m => ({ default: m.ArticleDonate }))),
  'blog': lazy(() => import('./articles/ArticleBlog').then(m => ({ default: m.ArticleBlog }))),
};

interface ArticleContentProps {
  articleId: string;
  setCurrentArticle?: (article: string) => void;
}

export function ArticleContent({ articleId, setCurrentArticle }: ArticleContentProps) {
  const SelectedComponent = articleMap[articleId];

  // IF THE LINK IS BROKEN OR MISSING
  if (!SelectedComponent) {
    return (
      <div className="bg-red-50 rounded-lg shadow-sm border border-red-200 p-8 text-center">
        <h2 className="text-red-700 font-bold text-2xl mb-4">Link Error (Developer Debug)</h2>
        <p className="text-slate-700 mb-2">
          A button just tried to load the article ID: <strong className="bg-white px-2 py-1 rounded text-red-600 border border-red-200">"{articleId}"</strong>
        </p>
        <p className="text-slate-700 mb-6">
          However, that exact ID does not exist in your <code>articleMap</code>. Check your subgroup routing files (like coreNeurodevelopmentalRoutes.ts) to make sure it was added!
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

  // IF THE LINK IS GOOD
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