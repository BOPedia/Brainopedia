import { lazy } from 'react';
import { RouteMap } from './routeTypes';

export const movementMotorRoutes: RouteMap = {
  // ==========================================
  // DYSPRAXIA (DCD)
  // ==========================================
  'dyspraxia': lazy(() => import('../ArticleDyspraxia').then(m => ({ default: m.ArticleDyspraxia }))),
  'dyspraxia-overview': lazy(() => import('../dyspraxia/DyspraxiaOverview').then(m => ({ default: m.DyspraxiaOverview }))),
  'dyspraxia-symptoms': lazy(() => import('../dyspraxia/DyspraxiaSymptoms').then(m => ({ default: m.DyspraxiaSymptoms }))),
  'dyspraxia-causes': lazy(() => import('../dyspraxia/DyspraxiaCauses').then(m => ({ default: m.DyspraxiaCauses }))),
  'dyspraxia-diagnosis': lazy(() => import('../dyspraxia/DyspraxiaDiagnosis').then(m => ({ default: m.DyspraxiaDiagnosis }))),
  'dyspraxia-support': lazy(() => import('../dyspraxia/DyspraxiaSupport').then(m => ({ default: m.DyspraxiaSupport }))),
  'dyspraxia-living': lazy(() => import('../dyspraxia/DyspraxiaLiving').then(m => ({ default: m.DyspraxiaLiving }))),

  // ==========================================
  // TOURETTE SYNDROME
  // ==========================================
  'tourette': lazy(() => import('../ArticleTourette').then(m => ({ default: m.ArticleTourette }))),
  'tourette-overview': lazy(() => import('../tourette/TouretteOverview').then(m => ({ default: m.TouretteOverview }))),
  'tourette-symptoms': lazy(() => import('../tourette/TouretteSymptoms').then(m => ({ default: m.TouretteSymptoms }))),
  'tourette-causes': lazy(() => import('../tourette/TouretteCauses').then(m => ({ default: m.TouretteCauses }))),
  'tourette-diagnosis': lazy(() => import('../tourette/TouretteDiagnosis').then(m => ({ default: m.TouretteDiagnosis }))),
  'tourette-support': lazy(() => import('../tourette/TouretteSupport').then(m => ({ default: m.TouretteSupport }))),
  'tourette-living': lazy(() => import('../tourette/TouretteLiving').then(m => ({ default: m.TouretteLiving }))),
};