import { lazy } from 'react';
import { RouteMap } from './routeTypes';

export const coreNeurodevelopmentalRoutes: RouteMap = {
  // ==========================================
  // 1. ATTENTION-DEFICIT/HYPERACTIVITY DISORDER (ADHD)
  // ==========================================
  'adhd': lazy(() => import('../ArticleADHD').then(m => ({ default: m.ArticleADHD }))),
  
  // ADHD Sub-Pages
  'adhd-overview': lazy(() => import('../adhd/ADHDOverview').then(m => ({ default: m.ADHDOverview }))),
  'adhd-symptoms': lazy(() => import('../adhd/ADHDSymptoms').then(m => ({ default: m.ADHDSymptoms }))),
  'adhd-causes': lazy(() => import('../adhd/ADHDCauses').then(m => ({ default: m.ADHDCauses }))),
  'adhd-diagnosis': lazy(() => import('../adhd/ADHDDiagnosis').then(m => ({ default: m.ADHDDiagnosis }))),
  'adhd-support': lazy(() => import('../adhd/ADHDSupport').then(m => ({ default: m.ADHDSupport }))),
  'adhd-living': lazy(() => import('../adhd/ADHDLiving').then(m => ({ default: m.ADHDLiving }))),

  // ==========================================
  // 2. AUTISM SPECTRUM DISORDER (ASD)
  // ==========================================
  'autism': lazy(() => import('../ArticleAutism').then(m => ({ default: m.ArticleAutism }))),
  
  // Autism Sub-Pages
  'autism-overview': lazy(() => import('../autism/ASDOverview').then(m => ({ default: m.ASDOverview }))),
  'autism-symptoms': lazy(() => import('../autism/asd-symptoms/ASDSymptoms').then(m => ({ default: m.ASDSymptoms }))),
  'autism-causes':   lazy(() => import('../autism/asd-causes/ASDCauses').then(m => ({ default: m.ASDCauses }))),
  'autism-diagnosis': lazy(() => import('../autism/asd-diagnosis/ASDDiagnosis').then(m => ({ default: m.ASDDiagnosis }))),
  'autism-living':    lazy(() => import('../autism/asd-living/ASDLiving').then(m => ({ default: m.ASDLiving }))),
  'autism-support':   lazy(() => import('../autism/asd-support/ASDSupport').then(m => ({ default: m.ASDSupport }))),
 
  // Autism Support Deep Dives
  'autism-early-intervention': lazy(() => import('../autism/asd-support/EarlyInterventionContent').then(m => ({ default: m.EarlyInterventionContent }))),
  'autism-therapies': lazy(() => import('../autism/asd-support/TherapiesContent').then(m => ({ default: m.TherapiesContent }))),
  'autism-educational': lazy(() => import('../autism/asd-support/EducationalContent').then(m => ({ default: m.EducationalContent }))),
  'autism-medical': lazy(() => import('../autism/asd-support/MedicalContent').then(m => ({ default: m.MedicalContent }))),
  'autism-environmental': lazy(() => import('../autism/asd-support/EnvironmentalContent').then(m => ({ default: m.EnvironmentalContent }))),
  'autism-family': lazy(() => import('../autism/asd-support/FamilyPrinciplesContent').then(m => ({ default: m.FamilyPrinciplesContent }))),
  
  // Autism Specific Therapy Deep Dives
  'autism-occupational-therapy': lazy(() => import('../autism/asd-support/OccupationalTherapy').then(m => ({ default: m.OccupationalTherapy }))),
  'autism-speech-therapy': lazy(() => import('../autism/asd-support/SpeechTherapy').then(m => ({ default: m.SpeechTherapy }))),
  'autism-aba-therapy': lazy(() => import('../autism/asd-support/ABATherapy').then(m => ({ default: m.ABATherapy }))),
  'autism-social-skills': lazy(() => import('../autism/asd-support/SocialSkills').then(m => ({ default: m.SocialSkills }))),
  'autism-mental-health': lazy(() => import('../autism/asd-support/MentalHealth').then(m => ({ default: m.MentalHealth }))),
  'autism-physical-therapy': lazy(() => import('../autism/asd-support/PhysicalTherapy').then(m => ({ default: m.PhysicalTherapy }))),
  
  // Autism Causes Deep Dives
  'autism-epigenetics': lazy(() => import('../autism/asd-causes/Epigenetics').then(m => ({ default: m.Epigenetics }))),
}; 