import { lazy } from 'react';
import { RouteMap } from './routeTypes';

export const learningDifferencesRoutes: RouteMap = {
  // ==========================================
  // DYSLEXIA
  // ==========================================
  'dyslexia': lazy(() => import('../ArticleDyslexia').then(m => ({ default: m.ArticleDyslexia }))),
  'dyslexia-overview': lazy(() => import('../dyslexia/DyslexiaOverview').then(m => ({ default: m.DyslexiaOverview }))),
  'dyslexia-symptoms': lazy(() => import('../dyslexia/dyslexia-symptoms/DyslexiaSymptoms').then(m => ({ default: m.DyslexiaSymptoms }))),
  'dyslexia-causes': lazy(() => import('../dyslexia//DyslexiaCauses').then(m => ({ default: m.DyslexiaCauses }))),
  'dyslexia-diagnosis': lazy(() => import('../dyslexia/DyslexiaDiagnosis').then(m => ({ default: m.DyslexiaDiagnosis }))),
  'dyslexia-support': lazy(() => import('../dyslexia/DyslexiaSupport').then(m => ({ default: m.DyslexiaSupport }))),
  'dyslexia-living': lazy(() => import('../dyslexia/DyslexiaLiving').then(m => ({ default: m.DyslexiaLiving }))),

  // ==========================================
  // DYSCALCULIA
  // ==========================================
  'dyscalculia': lazy(() => import('../ArticleDyscalculia').then(m => ({ default: m.ArticleDyscalculia }))),
  'dyscalculia-overview': lazy(() => import('../dyscalculia/DyscalculiaOverview').then(m => ({ default: m.DyscalculiaOverview }))),
  'dyscalculia-symptoms': lazy(() => import('../dyscalculia/DyscalculiaSymptoms').then(m => ({ default: m.DyscalculiaSymptoms }))),
  'dyscalculia-causes': lazy(() => import('../dyscalculia/DyscalculiaCauses').then(m => ({ default: m.DyscalculiaCauses }))),
  'dyscalculia-diagnosis': lazy(() => import('../dyscalculia/DyscalculiaDiagnosis').then(m => ({ default: m.DyscalculiaDiagnosis }))),
  'dyscalculia-support': lazy(() => import('../dyscalculia/DyscalculiaSupport').then(m => ({ default: m.DyscalculiaSupport }))),
  'dyscalculia-living': lazy(() => import('../dyscalculia/DyscalculiaLiving').then(m => ({ default: m.DyscalculiaLiving }))),

  // ==========================================
  // DYSGRAPHIA
  // ==========================================
  'dysgraphia': lazy(() => import('../ArticleDysgraphia').then(m => ({ default: m.ArticleDysgraphia }))),
  'dysgraphia-overview': lazy(() => import('../dysgraphia/DysgraphiaOverview').then(m => ({ default: m.DysgraphiaOverview }))),
  'dysgraphia-symptoms': lazy(() => import('../dysgraphia/DysgraphiaSymptoms').then(m => ({ default: m.DysgraphiaSymptoms }))),
  'dysgraphia-causes': lazy(() => import('../dysgraphia/DysgraphiaCauses').then(m => ({ default: m.DysgraphiaCauses }))),
  'dysgraphia-diagnosis': lazy(() => import('../dysgraphia/DysgraphiaDiagnosis').then(m => ({ default: m.DysgraphiaDiagnosis }))),
  'dysgraphia-support': lazy(() => import('../dysgraphia/DysgraphiaSupport').then(m => ({ default: m.DysgraphiaSupport }))),
  'dysgraphia-living': lazy(() => import('../dysgraphia/DysgraphiaLiving').then(m => ({ default: m.DysgraphiaLiving }))),

  // ==========================================
  // NON-VERBAL LEARNING DISABILITY (NVLD)
  // ==========================================
  'nvld': lazy(() => import('../ArticleNVLD').then(m => ({ default: m.ArticleNVLD }))),
  'nvld-overview': lazy(() => import('../nvld/NVLDOverview').then(m => ({ default: m.NVLDOverview }))),
  'nvld-symptoms': lazy(() => import('../nvld/NVLDSymptoms').then(m => ({ default: m.NVLDSymptoms }))),
  'nvld-causes': lazy(() => import('../nvld/NVLDCauses').then(m => ({ default: m.NVLDCauses }))),
  'nvld-diagnosis': lazy(() => import('../nvld/NVLDDiagnosis').then(m => ({ default: m.NVLDDiagnosis }))),
  'nvld-support': lazy(() => import('../nvld/NVLDSupport').then(m => ({ default: m.NVLDSupport }))),
  'nvld-living': lazy(() => import('../nvld/NVLDLiving').then(m => ({ default: m.NVLDLiving }))),

  // ==========================================
  // DEVELOPMENTAL LANGUAGE DISORDER (DLD)
  // ==========================================
  'dld': lazy(() => import('../ArticleDLD').then(m => ({ default: m.ArticleDLD }))),
  'dld-overview': lazy(() => import('../dld/DLDOverview').then(m => ({ default: m.DLDOverview }))),
  'dld-symptoms': lazy(() => import('../dld/DLDSymptoms').then(m => ({ default: m.DLDSymptoms }))),
  'dld-causes': lazy(() => import('../dld/DLDCauses').then(m => ({ default: m.DLDCauses }))),
  'dld-diagnosis': lazy(() => import('../dld/DLDDiagnosis').then(m => ({ default: m.DLDDiagnosis }))),
  'dld-support': lazy(() => import('../dld/DLDSupport').then(m => ({ default: m.DLDSupport }))),
  'dld-living': lazy(() => import('../dld/DLDLiving').then(m => ({ default: m.DLDLiving }))),

  // ==========================================
  // HYPERLEXIA
  // ==========================================
  'hyperlexia': lazy(() => import('../ArticleHyperlexia').then(m => ({ default: m.ArticleHyperlexia }))),
  'hyperlexia-overview': lazy(() => import('../hyperlexia/HyperlexiaOverview').then(m => ({ default: m.HyperlexiaOverview }))),
  'hyperlexia-symptoms': lazy(() => import('../hyperlexia/HyperlexiaSymptoms').then(m => ({ default: m.HyperlexiaSymptoms }))),
  'hyperlexia-causes': lazy(() => import('../hyperlexia/HyperlexiaCauses').then(m => ({ default: m.HyperlexiaCauses }))),
  'hyperlexia-diagnosis': lazy(() => import('../hyperlexia/HyperlexiaDiagnosis').then(m => ({ default: m.HyperlexiaDiagnosis }))),
  'hyperlexia-support': lazy(() => import('../hyperlexia/HyperlexiaSupport').then(m => ({ default: m.HyperlexiaSupport }))),
  'hyperlexia-living': lazy(() => import('../hyperlexia/HyperlexiaLiving').then(m => ({ default: m.HyperlexiaLiving }))),

  // ==========================================
  // GIFTEDNESS
  // ==========================================
  'giftedness': lazy(() => import('../ArticleGiftedness').then(m => ({ default: m.ArticleGiftedness }))),
  'giftedness-overview': lazy(() => import('../giftedness/GiftednessOverview').then(m => ({ default: m.GiftednessOverview }))),
  'giftedness-symptoms': lazy(() => import('../giftedness/GiftednessSymptoms').then(m => ({ default: m.GiftednessSymptoms }))),
  'giftedness-causes': lazy(() => import('../giftedness/GiftednessCauses').then(m => ({ default: m.GiftednessCauses }))),
  'giftedness-diagnosis': lazy(() => import('../giftedness/GiftednessDiagnosis').then(m => ({ default: m.GiftednessDiagnosis }))),
  'giftedness-support': lazy(() => import('../giftedness/GiftednessSupport').then(m => ({ default: m.GiftednessSupport }))),
  'giftedness-living': lazy(() => import('../giftedness/GiftednessLiving').then(m => ({ default: m.GiftednessLiving }))),

  // ==========================================
  // TWICE EXCEPTIONAL (2E)
  // ==========================================
  'twice-exceptional': lazy(() => import('../ArticleTwiceExceptional').then(m => ({ default: m.ArticleTwiceExceptional }))),
  'twice-exceptional-overview': lazy(() => import('../twice-exceptional/TwiceExceptionalOverview').then(m => ({ default: m.TwiceExceptionalOverview }))),
  'twice-exceptional-symptoms': lazy(() => import('../twice-exceptional/TwiceExceptionalSymptoms').then(m => ({ default: m.TwiceExceptionalSymptoms }))),
  'twice-exceptional-causes': lazy(() => import('../twice-exceptional/TwiceExceptionalCauses').then(m => ({ default: m.TwiceExceptionalCauses }))),
  'twice-exceptional-diagnosis': lazy(() => import('../twice-exceptional/TwiceExceptionalDiagnosis').then(m => ({ default: m.TwiceExceptionalDiagnosis }))),
  'twice-exceptional-support': lazy(() => import('../twice-exceptional/TwiceExceptionalSupport').then(m => ({ default: m.TwiceExceptionalSupport }))),
  'twice-exceptional-living': lazy(() => import('../twice-exceptional/TwiceExceptionalLiving').then(m => ({ default: m.TwiceExceptionalLiving }))),
};