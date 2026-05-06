import { lazy } from 'react';
import { RouteMap } from './routeTypes';

export const processingSensoryRoutes: RouteMap = {
  // ==========================================
  // AUDITORY PROCESSING DISORDER (APD)
  // ==========================================
  'apd': lazy(() => import('../ArticleAPD').then(m => ({ default: m.ArticleAPD }))),
  'apd-overview': lazy(() => import('../apd/APDOverview').then(m => ({ default: m.APDOverview }))),
  'apd-symptoms': lazy(() => import('../apd/APDSymptoms').then(m => ({ default: m.APDSymptoms }))),
  'apd-causes': lazy(() => import('../apd/APDCauses').then(m => ({ default: m.APDCauses }))),
  'apd-diagnosis': lazy(() => import('../apd/APDDiagnosis').then(m => ({ default: m.APDDiagnosis }))),
  'apd-support': lazy(() => import('../apd/APDSupport').then(m => ({ default: m.APDSupport }))),
  'apd-living': lazy(() => import('../apd/APDLiving').then(m => ({ default: m.APDLiving }))),

  // ==========================================
  // VISUAL PROCESSING DISORDER
  // ==========================================
  'visual-processing': lazy(() => import('../ArticleVisualProcessing').then(m => ({ default: m.ArticleVisualProcessing }))),
  'visual-processing-overview': lazy(() => import('../visual-processing/VisualProcessingOverview').then(m => ({ default: m.VisualProcessingOverview }))),
  'visual-processing-symptoms': lazy(() => import('../visual-processing/VisualProcessingSymptoms').then(m => ({ default: m.VisualProcessingSymptoms }))),
  'visual-processing-causes': lazy(() => import('../visual-processing/VisualProcessingCauses').then(m => ({ default: m.VisualProcessingCauses }))),
  'visual-processing-diagnosis': lazy(() => import('../visual-processing/VisualProcessingDiagnosis').then(m => ({ default: m.VisualProcessingDiagnosis }))),
  'visual-processing-support': lazy(() => import('../visual-processing/VisualProcessingSupport').then(m => ({ default: m.VisualProcessingSupport }))),
  'visual-processing-living': lazy(() => import('../visual-processing/VisualProcessingLiving').then(m => ({ default: m.VisualProcessingLiving }))),

  // ==========================================
  // SENSORY PROCESSING DISORDER (SPD)
  // ==========================================
  'spd': lazy(() => import('../ArticleSPD').then(m => ({ default: m.ArticleSPD }))),
  'spd-overview': lazy(() => import('../spd/SPDOverview').then(m => ({ default: m.SPDOverview }))),
  'spd-symptoms': lazy(() => import('../spd/SPDSymptoms').then(m => ({ default: m.SPDSymptoms }))),
  'spd-causes': lazy(() => import('../spd/SPDCauses').then(m => ({ default: m.SPDCauses }))),
  'spd-diagnosis': lazy(() => import('../spd/SPDDiagnosis').then(m => ({ default: m.SPDDiagnosis }))),
  'spd-support': lazy(() => import('../spd/SPDSupport').then(m => ({ default: m.SPDSupport }))),
  'spd-living': lazy(() => import('../spd/SPDLiving').then(m => ({ default: m.SPDLiving }))),

  // ==========================================
  // MISOPHONIA
  // ==========================================
  'misophonia': lazy(() => import('../ArticleMisophonia').then(m => ({ default: m.ArticleMisophonia }))),
  'misophonia-overview': lazy(() => import('../misophonia/MisophoniaOverview').then(m => ({ default: m.MisophoniaOverview }))),
  'misophonia-symptoms': lazy(() => import('../misophonia/MisophoniaSymptoms').then(m => ({ default: m.MisophoniaSymptoms }))),
  'misophonia-causes': lazy(() => import('../misophonia/MisophoniaCauses').then(m => ({ default: m.MisophoniaCauses }))),
  'misophonia-diagnosis': lazy(() => import('../misophonia/MisophoniaDiagnosis').then(m => ({ default: m.MisophoniaDiagnosis }))),
  'misophonia-support': lazy(() => import('../misophonia/MisophoniaSupport').then(m => ({ default: m.MisophoniaSupport }))),
  'misophonia-living': lazy(() => import('../misophonia/MisophoniaLiving').then(m => ({ default: m.MisophoniaLiving }))),

  // ==========================================
  // SYNESTHESIA
  // ==========================================
  'synesthesia': lazy(() => import('../ArticleSynesthesia').then(m => ({ default: m.ArticleSynesthesia }))),
  'synesthesia-overview': lazy(() => import('../synesthesia/SynesthesiaOverview').then(m => ({ default: m.SynesthesiaOverview }))),
  'synesthesia-symptoms': lazy(() => import('../synesthesia/SynesthesiaSymptoms').then(m => ({ default: m.SynesthesiaSymptoms }))),
  'synesthesia-causes': lazy(() => import('../synesthesia/SynesthesiaCauses').then(m => ({ default: m.SynesthesiaCauses }))),
  'synesthesia-diagnosis': lazy(() => import('../synesthesia/SynesthesiaDiagnosis').then(m => ({ default: m.SynesthesiaDiagnosis }))),
  'synesthesia-support': lazy(() => import('../synesthesia/SynesthesiaSupport').then(m => ({ default: m.SynesthesiaSupport }))),
  'synesthesia-living': lazy(() => import('../synesthesia/SynesthesiaLiving').then(m => ({ default: m.SynesthesiaLiving }))),
};