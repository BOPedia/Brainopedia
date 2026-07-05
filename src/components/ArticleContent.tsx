import React, { lazy, Suspense, useState, useEffect } from 'react';

// 1. Import from the articles/routes folder
import { RouteMap } from './articles/routes/routeTypes';
import { coreNeurodevelopmentalRoutes } from './articles/routes/coreNeurodevelopmentalRoutes';
import { learningDifferencesRoutes } from './articles/routes/learningDifferencesRoutes';
import { processingSensoryRoutes } from './articles/routes/processingSensoryRoutes';
import { movementMotorRoutes } from './articles/routes/movementMotorRoutes';
import { mentalHealthRoutes } from './articles/routes/mentalHealthRoutes';
import { geneticEnvironmentalRoutes } from './articles/routes/geneticEnvironmentalRoutes';
import { acquiredNeurodivergenceRoutes } from './articles/routes/acquiredNeurodivergenceRoutes';

// --- THE DELAYED LOADER ---
// A smart loader that waits 250ms before showing up!
const DelayedFallback = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Start a 250ms stopwatch
    const timer = setTimeout(() => setShow(true), 250);
    // If the page loads before 250ms, cancel the stopwatch
    return () => clearTimeout(timer);
  }, []);

  // Show absolutely nothing for the first fraction of a second
  if (!show) return null; 

  // If we are still waiting, show a clean, subtle spinner
  return (
    <div className="flex justify-center items-center py-20 opacity-0 animate-fadeIn">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#0c264d]"></div>
      <span className="ml-3 text-[#0c264d] font-spartan font-medium">Loading volume...</span>
    </div>
  );
};

// 2. The Master Map
const articleMap: RouteMap = {
  // All 7 Volumes seamlessly combined!
  ...coreNeurodevelopmentalRoutes,
  ...learningDifferencesRoutes,
  ...processingSensoryRoutes,
  ...movementMotorRoutes,
  ...mentalHealthRoutes,
  ...geneticEnvironmentalRoutes,
  ...acquiredNeurodivergenceRoutes,

  // --- Misc & Site Pages ---
  'home': lazy(() => import('./articles/Home').then(m => ({ default: m.Home }))),
  'symptom-wheel-demo': lazy(() => import('./SymptomWheelDemo').then(m => ({ default: m.SymptomWheelDemo }))),
  'project-standards': lazy(() => import('./articles/ProjectStandards')),
  'about': lazy(() => import('./articles/ArticleAbout').then(m => ({ default: m.ArticleAbout }))),
  'donate': lazy(() => import('./articles/ArticleDonate').then(m => ({ default: m.ArticleDonate }))),
  'blog': lazy(() => import('./articles/ArticleBlog').then(m => ({ default: m.ArticleBlog }))),
  
  // --- NEW ROUTE ADDED HERE ---
  // Ensure the path './articles/ADHDSymptomsTabRSD' matches your actual folder structure
 'rsd-deep-dive': lazy(() => import('./articles/adhd/ADHDSymptomsTabRSD').then(m => ({ default: m.ADHDSymptomsTabRSD }))),
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
          However, that exact ID does not exist in your <code>articleMap</code>. Check your subgroup routing files to make sure it was added!
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
      {/* CHANGED: Replaced the hardcoded div with our smart DelayedFallback */}
      <Suspense fallback={<DelayedFallback />}>
        <SelectedComponent setCurrentArticle={setCurrentArticle} />
      </Suspense>
    </div>
  );
}