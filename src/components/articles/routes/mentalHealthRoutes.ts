import { lazy } from 'react';
import { RouteMap } from './routeTypes';

export const mentalHealthRoutes: RouteMap = {
  // ==========================================
  // OBSESSIVE-COMPULSIVE DISORDER (OCD)
  // ==========================================
  'ocd': lazy(() => import('../ArticleOCD').then(m => ({ default: m.ArticleOCD }))),

  // Future OCD Tabs
  // 'ocd-overview': lazy(() => import('../ocd/OCDOverview').then(m => ({ default: m.OCDOverview }))),
  // 'ocd-symptoms': lazy(() => import('../ocd/OCDSymptoms').then(m => ({ default: m.OCDSymptoms }))),
  // 'ocd-causes': lazy(() => import('../ocd/OCDCauses').then(m => ({ default: m.OCDCauses }))),
  // 'ocd-diagnosis': lazy(() => import('../ocd/OCDDiagnosis').then(m => ({ default: m.OCDDiagnosis }))),
  // 'ocd-support': lazy(() => import('../ocd/OCDSupport').then(m => ({ default: m.OCDSupport }))),
  // 'ocd-living': lazy(() => import('../ocd/OCDLiving').then(m => ({ default: m.OCDLiving }))),

  // ==========================================
  // BIPOLAR DISORDER
  // ==========================================
  'bipolar': lazy(() => import('../ArticleBipolar').then(m => ({ default: m.ArticleBipolar }))),

  // Future Bipolar Tabs
  // 'bipolar-overview': lazy(() => import('../bipolar/BipolarOverview').then(m => ({ default: m.BipolarOverview }))),
  // 'bipolar-symptoms': lazy(() => import('../bipolar/BipolarSymptoms').then(m => ({ default: m.BipolarSymptoms }))),
  // 'bipolar-causes': lazy(() => import('../bipolar/BipolarCauses').then(m => ({ default: m.BipolarCauses }))),
  // 'bipolar-diagnosis': lazy(() => import('../bipolar/BipolarDiagnosis').then(m => ({ default: m.BipolarDiagnosis }))),
  // 'bipolar-support': lazy(() => import('../bipolar/BipolarSupport').then(m => ({ default: m.BipolarSupport }))),
  // 'bipolar-living': lazy(() => import('../bipolar/BipolarLiving').then(m => ({ default: m.BipolarLiving }))),

  // ==========================================
  // SCHIZOPHRENIA
  // ==========================================
  'schizophrenia': lazy(() => import('../ArticleSchizophrenia').then(m => ({ default: m.ArticleSchizophrenia }))),

  // Future Schizophrenia Tabs
  // 'schizophrenia-overview': lazy(() => import('../schizophrenia/SchizophreniaOverview').then(m => ({ default: m.SchizophreniaOverview }))),
  // 'schizophrenia-symptoms': lazy(() => import('../schizophrenia/SchizophreniaSymptoms').then(m => ({ default: m.SchizophreniaSymptoms }))),
  // 'schizophrenia-causes': lazy(() => import('../schizophrenia/SchizophreniaCauses').then(m => ({ default: m.SchizophreniaCauses }))),
  // 'schizophrenia-diagnosis': lazy(() => import('../schizophrenia/SchizophreniaDiagnosis').then(m => ({ default: m.SchizophreniaDiagnosis }))),
  // 'schizophrenia-support': lazy(() => import('../schizophrenia/SchizophreniaSupport').then(m => ({ default: m.SchizophreniaSupport }))),
  // 'schizophrenia-living': lazy(() => import('../schizophrenia/SchizophreniaLiving').then(m => ({ default: m.SchizophreniaLiving }))),
};