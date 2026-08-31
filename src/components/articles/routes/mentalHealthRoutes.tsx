import { lazy } from 'react';
import { RouteMap } from './routeTypes';

export const mentalHealthRoutes: RouteMap = {
  // ==========================================
  // ANXIETY & STRESS
  // ==========================================
  // Matches file: AnxietyStress.tsx | Component: AnxietyStress
  'anxiety-stress': lazy(() => import('../AnxietyStress').then(m => ({ default: m.AnxietyStress }))),

  // ==========================================
  // MOOD & EMOTIONS
  // ==========================================
  // Matches file: MoodEmotions.tsx | Component: MoodEmotions
  'mood-emotions': lazy(() => import('../MoodEmotions').then(m => ({ default: m.MoodEmotions }))),

  // ==========================================
  // TRAUMA & BURNOUT
  // ==========================================
  // Matches file: TraumaBurnout.tsx | Component: TraumaBurnout
  'trauma-burnout': lazy(() => import('../TraumaBurnout').then(m => ({ default: m.TraumaBurnout }))),

  // ==========================================
  // COMPULSIONS & COPING
  // ==========================================
  // Matches file: CompulsionsCoping.tsx | Component: CompulsionsCoping
  'compulsions-coping': lazy(() => import('../CompulsionsCoping').then(m => ({ default: m.CompulsionsCoping }))),
};