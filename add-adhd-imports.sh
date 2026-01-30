#!/bin/bash

# ADHDOverview.tsx - Add 3 imports after line 1
sed -i '' '1a\
import { ADHDOverviewReferences } from '\''../../references/ADHDOverviewReferences'\'';\
import adhdOverviewImage from '\''/images/adhd-overview.png'\'';\
import definingAdhdDiagram from '\''/images/adhd-venn.png'\'';\
import executiveFunctionImage from '\''/images/adhd-executive-function.png'\'';
' src/components/articles/adhd/ADHDOverview.tsx

# ADHDSymptoms.tsx - Add 17 imports after line 1
sed -i '' '1a\
import { ADHDSymptomsCoreReferences } from '\''../../references/ADHDSymptomsCoreReferences'\'';\
import { Tabs, TabsContent, TabsList, TabsTrigger } from '\''../../ui/tabs'\'';\
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from '\''recharts'\'';\
import { Hand, ArrowUpFromLine, Mountain, VolumeX, Zap, MessageSquare, Baby, GraduationCap, Briefcase, MessageCircle, Users, ShoppingCart, AlertTriangle, TrendingUp, Clock, EarOff, FileX, FolderOpen, Brain, Search, Wind, CalendarX } from '\''lucide-react'\'';\
import coreSymptomsImage from '\''/images/adhd-core-symptoms.png'\'';\
import inattentionImage from '\''/images/adhd-inattention.png'\'';\
import inattentionAgesImage from '\''/images/adhd-inattention-ages.png'\'';\
import hyperactivityImage from '\''/images/adhd-hyperactivity.png'\'';\
import hyperactivityLifespanImage from '\''/images/adhd-hyperactivity-lifespan.png'\'';\
import impulsivityImage from '\''/images/adhd-impulsivity.png'\'';\
import impulsivityExamplesImage from '\''/images/adhd-impulsivity-examples.png'\'';\
import symptomWheelImage from '\''/images/adhd-symptom-wheel.png'\'';\
import rsdSocialRejectionImage from '\''/images/adhd-rsd-social-rejection.png'\'';\
import rsdHeartImage from '\''/images/adhd-rsd-heart.png'\'';\
import rejectedTypewriterImage from '\''/images/adhd-rejected-typewriter.png'\'';\
import emotionalExplosionImage from '\''/images/adhd-emotional-explosion.png'\'';\
import positiveSelfTalkImage from '\''/images/adhd-positive-self-talk.png'\'';\
import diversityImage from '\''/images/adhd-diversity.png'\'';\
import girlStudyingImage from '\''/images/adhd-girl-studying.png'\'';
' src/components/articles/adhd/ADHDSymptoms.tsx

# ADHDCauses.tsx - Add 9 imports after line 1
sed -i '' '1a\
import { ADHDMyths } from '\''../../infographics/ADHDMyths'\'';\
import { Tabs, TabsContent, TabsList, TabsTrigger } from '\''../../ui/tabs'\'';\
import dnaImage from '\''/images/adhd-dna.png'\'';\
import geneEnvironmentImage from '\''/images/adhd-gene-environment.png'\'';\
import geneticsTreeImage from '\''/images/adhd-genetics-tree.png'\'';\
import brainAnatomyImage from '\''/images/adhd-brain-anatomy.png'\'';\
import neuronImage from '\''/images/adhd-neuron.png'\'';\
import environmentalImage from '\''/images/adhd-environmental.png'\'';\
import prenatalFactorsImage from '\''/images/adhd-prenatal-factors.png'\'';\
import earlyLifeImage from '\''/images/adhd-early-life.png'\'';\
import riskCausationImage from '\''/images/adhd-risk-causation.png'\'';
' src/components/articles/adhd/ADHDCauses.tsx

# ADHDDiagnosis.tsx - Add 9 imports after line 1
sed -i '' '1a\
import { ADHDComorbidities } from '\''../../infographics/ADHDComorbidities'\'';\
import { ADHDDiagnosticProfessionals } from '\''../../infographics/ADHDDiagnosticProfessionals'\'';\
import { Tabs, TabsContent, TabsList, TabsTrigger } from '\''../../ui/tabs'\'';\
import diagnosticImage from '\''/images/adhd-diagnostic.png'\'';\
import adultDiagnosisImage from '\''/images/adhd-adult-diagnosis.png'\'';\
import diagnosticChallengesImage from '\''/images/adhd-diagnostic-challenges.png'\'';\
import treatmentRoadmapImage from '\''/images/adhd-treatment-roadmap.png'\'';\
import audhdAbstractArtImage from '\''/images/audh-abstract-art.png'\'';\
import audhdLightningInfinityImage from '\''/images/audh-lightning-infinity.png'\'';\
import audhdSplitFaceImage from '\''/images/audh-split-face.png'\'';\
import audhdRainbowBrainImage from '\''/images/audh-rainbow-brain.png'\'';
' src/components/articles/adhd/ADHDDiagnosis.tsx

# ADHDLiving.tsx - Add 10 imports after line 1
sed -i '' '1a\
import { Tabs, TabsContent, TabsList, TabsTrigger } from '\''../../ui/tabs'\'';\
import pathwayImage from '\''/images/adhd-pathway.png'\'';\
import strengthsImage from '\''/images/adhd-strengths.png'\'';\
import routinesImage from '\''/images/adhd-routines.png'\'';\
import financesImage from '\''/images/adhd-finances.png'\'';\
import relationshipsImage from '\''/images/adhd-relationships.png'\'';\
import parentingImage from '\''/images/adhd-parenting.png'\'';\
import careerImage from '\''/images/adhd-career.png'\'';\
import stigmaImage from '\''/images/adhd-stigma.png'\'';\
import mentalHealthImage from '\''/images/adhd-mental-health.png'\'';\
import futureImage from '\''/images/adhd-future.png'\'';
' src/components/articles/adhd/ADHDLiving.tsx

# ADHDSupport.tsx - Add 7 imports after line 1
sed -i '' '1a\
import { ADHDMedicationComparison } from '\''../../infographics/ADHDMedicationComparison'\'';\
import { ADHDTreatmentApproach } from '\''../../infographics/ADHDTreatmentApproach'\'';\
import { Tabs, TabsContent, TabsList, TabsTrigger } from '\''../../ui/tabs'\'';\
import { Pill, BrainCircuit, GraduationCap, Heart, Users, Settings } from '\''lucide-react'\'';\
import supportImage from '\''/images/adhd-support-main.png'\'';\
import medicationImage from '\''/images/adhd-medication.png'\'';\
import therapyImage from '\''/images/adhd-therapy.png'\'';\
import ostImage from '\''/images/adhd-organizational-skills-training.png'\'';\
import workplaceImage from '\''/images/adhd-workplace.png'\'';\
import orgToolsImage from '\''/images/adhd-organizational-tools.png'\'';
' src/components/articles/adhd/ADHDSupport.tsx

echo "✅ All ADHD imports added successfully!"
