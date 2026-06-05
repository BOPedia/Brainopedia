import { lazy } from 'react';
import { RouteMap } from './routeTypes';

export const geneticEnvironmentalRoutes: RouteMap = {
  // ==========================================
  // DOWN SYNDROME
  // ==========================================
  'down-syndrome': lazy(() => import('../ArticleDownSyndrome').then(m => ({ default: m.ArticleDownSyndrome }))),


  'down-syndrome-overview': lazy(() => import('../downsyndrome/DownSyndromeOverview').then(m => ({ default: m.DownSyndromeOverview }))),
  'down-syndrome-symptoms': lazy(() => import('../downsyndrome/DownSyndromeSymptoms').then(m => ({ default: m.DownSyndromeSymptoms }))),
  'down-syndrome-causes': lazy(() => import('../downsyndrome/DownSyndromeCauses').then(m => ({ default: m.DownSyndromeCauses }))),
  'down-syndrome-diagnosis': lazy(() => import('../downsyndrome/DownSyndromeDiagnosis').then(m => ({ default: m.DownSyndromeDiagnosis }))),
  'down-syndrome-support': lazy(() => import('../downsyndrome/DownSyndromeSupport').then(m => ({ default: m.DownSyndromeSupport }))),
  'down-syndrome-living': lazy(() => import('../downsyndrome/DownSyndromeLiving').then(m => ({ default: m.DownSyndromeLiving })))),

  // ==========================================
  // INTELLECTUAL DISABILITY (ID)
  // ==========================================
  'intellectual-disability': lazy(() => import('../ArticleIntellectualDisability').then(m => ({ default: m.ArticleIntellectualDisability }))),

  
  'intellectual-disability-overview': lazy(() => import('../intellectual-disability/IDOverview').then(m => ({ default: m.IDOverview }))),
  'intellectual-disability-symptoms': lazy(() => import('../intellectual-disability/IDSymptoms').then(m => ({ default: m.IDSymptoms }))),
  'intellectual-disability-causes': lazy(() => import('../intellectual-disability/IDCauses').then(m => ({ default: m.IDCauses }))),
  'intellectual-disability-diagnosis': lazy(() => import('../intellectual-disability/IDDiagnosis').then(m => ({ default: m.IDDiagnosis }))),
  'intellectual-disability-support': lazy(() => import('../intellectual-disability/IDSupport').then(m => ({ default: m.IDSupport }))),
  'intellectual-disability-living': lazy(() => import('../intellectual-disability/IDLiving').then(m => ({ default: m.IDLiving }))),

  // ==========================================
  // FETAL ALCOHOL SPECTRUM DISORDER (FASD)
  // ==========================================
  'fasd': lazy(() => import('../ArticleFASD').then(m => ({ default: m.ArticleFASD }))),


    'fasd-overview': lazy(() => import('../fasd/FASDOverview').then(m => ({ default: m.FASDOverview }))),
    'fasd-symptoms': lazy(() => import('../fasd/FASDSymptoms').then(m => ({ default: m.FASDSymptoms }))),
    'fasd-causes': lazy(() => import('../fasd/FASDCauses').then(m => ({ default: m.FASDCauses }))),
    'fasd-diagnosis': lazy(() => import('../fasd/FASDDiagnosis').then(m => ({ default: m.FASDDiagnosis }))),
    'fasd-support': lazy(() => import('../fasd/FASDSupport').then(m => ({ default: m.FASDSupport }))),
     'fasd-living': lazy(() => import('../fasd/FASDLiving').then(m => ({ default: m.FASDLiving }))),

  // ==========================================
  // EPILEPSY
  // ==========================================
  'epilepsy': lazy(() => import('../ArticleEpilepsy').then(m => ({ default: m.ArticleEpilepsy }))),

  'epilepsy-overview': lazy(() => import('../epilepsy/EpilepsyOverview').then(m => ({ default: m.EpilepsyOverview }))),
  'epilepsy-symptoms': lazy(() => import('../epilepsy/EpilepsySymptoms').then(m => ({ default: m.EpilepsySymptoms }))),
  'epilepsy-causes': lazy(() => import('../epilepsy/EpilepsyCauses').then(m => ({ default: m.EpilepsyCauses }))),
  'epilepsy-diagnosis': lazy(() => import('../epilepsy/EpilepsyDiagnosis').then(m => ({ default: m.EpilepsyDiagnosis }))),
  'epilepsy-support': lazy(() => import('../epilepsy/EpilepsySupport').then(m => ({ default: m.EpilepsySupport }))),
  'epilepsy-living': lazy(() => import('../epilepsy/EpilepsyLiving').then(m => ({ default: m.EpilepsyLiving }))),

};