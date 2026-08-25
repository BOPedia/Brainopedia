import { lazy } from 'react';
import { RouteMap } from './routeTypes';

export const geneticEnvironmentalRoutes: RouteMap = {
  // ==========================================
  // DOWN SYNDROME
  // ==========================================
  // Matches file: Articledownsyndrome.tsx | Component: Articledownsyndrome
  'downsyndrome': lazy(() => import('../Articledownsyndrome').then(m => ({ default: m.Articledownsyndrome }))),

  'downsyndrome-overview': lazy(() => import('../downsyndrome/downsyndrome-overview').then(m => ({ default: m.DownSyndromeOverview }))),
  'downsyndrome-symptoms': lazy(() => import('../downsyndrome/downsyndrome-symptoms').then(m => ({ default: m.DownSyndromeSymptoms }))),
  'downsyndrome-causes': lazy(() => import('../downsyndrome/downsyndrome-causes').then(m => ({ default: m.DownSyndromeCauses }))),
  'downsyndrome-diagnosis': lazy(() => import('../downsyndrome/downsyndrome-diagnosis').then(m => ({ default: m.DownSyndromeDiagnosis }))),
  'downsyndrome-support': lazy(() => import('../downsyndrome/downsyndrome-support').then(m => ({ default: m.DownSyndromeSupport }))),
  'downsyndrome-living': lazy(() => import('../downsyndrome/downsyndrome-living').then(m => ({ default: m.DownSyndromeLiving }))),

  // ==========================================
  // INTELLECTUAL DISABILITY (ID)
  // ==========================================
  // Matches file: Articleintellectual-disability.tsx | Component: ArticleIntellectualDisability
  'intellectual-disability': lazy(() => import('../Articleintellectual-disability').then(m => ({ default: m.ArticleIntellectualDisability }))),
  
  'intellectual-disability-overview': lazy(() => import('../intellectual-disability/intellectual-disability-overview').then(m => ({ default: m.IDOverview }))),
  'intellectual-disability-symptoms': lazy(() => import('../intellectual-disability/intellectual-disability-symptoms').then(m => ({ default: m.IDSymptoms }))),
  'intellectual-disability-causes': lazy(() => import('../intellectual-disability/intellectual-disability-causes').then(m => ({ default: m.IDCauses }))),
  'intellectual-disability-diagnosis': lazy(() => import('../intellectual-disability/intellectual-disability-diagnosis').then(m => ({ default: m.IDDiagnosis }))),
  'intellectual-disability-support': lazy(() => import('../intellectual-disability/intellectual-disability-support').then(m => ({ default: m.IDSupport }))),
  'intellectual-disability-living': lazy(() => import('../intellectual-disability/intellectual-disability-living').then(m => ({ default: m.IDLiving }))),

  // ==========================================
  // FETAL ALCOHOL SPECTRUM DISORDER (FASD)
  // ==========================================
  // Matches file: ArticleFASD.tsx | Component: ArticleFASD
  'fasd': lazy(() => import('../ArticleFASD').then(m => ({ default: m.ArticleFASD }))),

  'fasd-overview': lazy(() => import('../fasd/fasd-overview').then(m => ({ default: m.FASDOverview }))),
  'fasd-symptoms': lazy(() => import('../fasd/fasd-symptoms').then(m => ({ default: m.FASDSymptoms }))),
  'fasd-causes': lazy(() => import('../fasd/fasd-causes').then(m => ({ default: m.FASDCauses }))),
  'fasd-diagnosis': lazy(() => import('../fasd/fasd-diagnosis').then(m => ({ default: m.FASDDiagnosis }))),
  'fasd-support': lazy(() => import('../fasd/fasd-support').then(m => ({ default: m.FASDSupport }))),
  'fasd-living': lazy(() => import('../fasd/fasd-living').then(m => ({ default: m.FASDLiving }))),

  // ==========================================
  // EPILEPSY
  // ==========================================
  // Matches file: ArticleEpilepsy.tsx | Component: ArticleEpilepsy
  'epilepsy': lazy(() => import('../ArticleEpilepsy').then(m => ({ default: m.ArticleEpilepsy }))),

  'epilepsy-overview': lazy(() => import('../epilepsy/EpilepsyOverview').then(m => ({ default: m.EpilepsyOverview }))),
  'epilepsy-symptoms': lazy(() => import('../epilepsy/EpilepsySymptoms').then(m => ({ default: m.EpilepsySymptoms }))),
  'epilepsy-causes': lazy(() => import('../epilepsy/EpilepsyCauses').then(m => ({ default: m.EpilepsyCauses }))),
  'epilepsy-diagnosis': lazy(() => import('../epilepsy/EpilepsyDiagnosis').then(m => ({ default: m.EpilepsyDiagnosis }))),
  'epilepsy-support': lazy(() => import('../epilepsy/EpilepsySupport').then(m => ({ default: m.EpilepsySupport }))),
  'epilepsy-living': lazy(() => import('../epilepsy/EpilepsyLiving').then(m => ({ default: m.EpilepsyLiving }))),
};