import { lazy } from 'react';
import { RouteMap } from './routeTypes';

export const acquiredNeurodivergenceRoutes: RouteMap = {
  // ==========================================
  // TRAUMATIC BRAIN INJURY (TBI)
  // ==========================================
  'tbi': lazy(() => import('../ArticleTBI').then(m => ({ default: m.ArticleTBI }))),

  // Future TBI Tabs
  // 'tbi-overview': lazy(() => import('../tbi/TBIOverview').then(m => ({ default: m.TBIOverview }))),
  // 'tbi-symptoms': lazy(() => import('../tbi/TBISymptoms').then(m => ({ default: m.TBISymptoms }))),
  // 'tbi-causes': lazy(() => import('../tbi/TBICauses').then(m => ({ default: m.TBICauses }))),
  // 'tbi-diagnosis': lazy(() => import('../tbi/TBIDiagnosis').then(m => ({ default: m.TBIDiagnosis }))),
  // 'tbi-support': lazy(() => import('../tbi/TBISupport').then(m => ({ default: m.TBISupport }))),
  // 'tbi-living': lazy(() => import('../tbi/TBILiving').then(m => ({ default: m.TBILiving }))),

  // ==========================================
  // CHRONIC TRAUMATIC ENCEPHALOPATHY (CTE)
  // ==========================================
  'cte': lazy(() => import('../ArticleCTE').then(m => ({ default: m.ArticleCTE }))),

  // Future CTE Tabs
  // 'cte-overview': lazy(() => import('../cte/CTEOverview').then(m => ({ default: m.CTEOverview }))),
  // 'cte-symptoms': lazy(() => import('../cte/CTESymptoms').then(m => ({ default: m.CTESymptoms }))),
  // 'cte-causes': lazy(() => import('../cte/CTECauses').then(m => ({ default: m.CTECauses }))),
  // 'cte-diagnosis': lazy(() => import('../cte/CTEDiagnosis').then(m => ({ default: m.CTEDiagnosis }))),
  // 'cte-support': lazy(() => import('../cte/CTESupport').then(m => ({ default: m.CTESupport }))),
  // 'cte-living': lazy(() => import('../cte/CTELiving').then(m => ({ default: m.CTELiving }))),

  // ==========================================
  // PANDAS / PANS
  // ==========================================
  'pandas': lazy(() => import('../ArticlePANDAS').then(m => ({ default: m.ArticlePANDAS }))),

  // Future PANDAS Tabs
  // 'pandas-overview': lazy(() => import('../pandas/PANDASOverview').then(m => ({ default: m.PANDASOverview }))),
  // 'pandas-symptoms': lazy(() => import('../pandas/PANDASSymptoms').then(m => ({ default: m.PANDASSymptoms }))),
  // 'pandas-causes': lazy(() => import('../pandas/PANDASCauses').then(m => ({ default: m.PANDASCauses }))),
  // 'pandas-diagnosis': lazy(() => import('../pandas/PANDASDiagnosis').then(m => ({ default: m.PANDASDiagnosis }))),
  // 'pandas-support': lazy(() => import('../pandas/PANDASSupport').then(m => ({ default: m.PANDASSupport }))),
  // 'pandas-living': lazy(() => import('../pandas/PANDASLiving').then(m => ({ default: m.PANDASLiving }))),
};