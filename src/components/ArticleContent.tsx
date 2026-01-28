import React from 'react';
import { ArticleADHD } from './articles/ArticleADHD';
import { ArticleAutism } from './articles/ArticleAutism';
import { ArticleDyslexia } from './articles/ArticleDyslexia';
import { ArticleDyscalculia } from './articles/ArticleDyscalculia';
import { ArticleDyspraxia } from './articles/ArticleDyspraxia';
import { ArticleTourette } from './articles/ArticleTourette';
import { ArticleSynesthesia } from './articles/ArticleSynesthesia';
import { ArticleDysgraphia } from './articles/ArticleDysgraphia';
import { ArticleHyperlexia } from './articles/ArticleHyperlexia';
import { ArticleMisophonia } from './articles/ArticleMisophonia';
import { ArticleTwiceExceptional } from './articles/ArticleTwiceExceptional';
import { ArticleAbout } from './articles/ArticleAbout';
import { ArticleDonate } from './articles/ArticleDonate';
import { ArticleBlog } from './articles/ArticleBlog';
import { ArticleOCD } from './articles/ArticleOCD';
import { ArticleBipolar } from './articles/ArticleBipolar';
import { ArticleSchizophrenia } from './articles/ArticleSchizophrenia';
import { ArticleEpilepsy } from './articles/ArticleEpilepsy';
import { ArticleSPD } from './articles/ArticleSPD';
import { ArticleAPD } from './articles/ArticleAPD';
import { ArticleVisualProcessing } from './articles/ArticleVisualProcessing';
import { ArticleNVLD } from './articles/ArticleNVLD';
import { ArticleDLD } from './articles/ArticleDLD';
import { ArticleGiftedness } from './articles/ArticleGiftedness';
import { ArticleIntellectualDisability } from './articles/ArticleIntellectualDisability';
import { ArticleDownSyndrome } from './articles/ArticleDownSyndrome';
import { ArticleFASD } from './articles/ArticleFASD';
import { ArticleTBI } from './articles/ArticleTBI';
import { ArticleCTE } from './articles/ArticleCTE';
import { ArticlePANDAS } from './articles/ArticlePANDAS';
import { ADHDOverview } from './articles/adhd/ADHDOverview';
import { ADHDSymptoms } from './articles/adhd/ADHDSymptoms';
import { ADHDCauses } from './articles/adhd/ADHDCauses';
import { ADHDDiagnosis } from './articles/adhd/ADHDDiagnosis';
import { ADHDSupport } from './articles/adhd/ADHDSupport';
import { ADHDLiving } from './articles/adhd/ADHDLiving';
import { ASDOverview } from './articles/autism/ASDOverview_CLEANED';
import { ASDSymptoms } from './articles/autism/ASDSymptoms';
import { ASDCauses } from './articles/autism/ASDCauses_CLEANED';
import { ASDDiagnosis } from './articles/autism/ASDDiagnosis_CLEANED';
import { ASDSupport } from './articles/autism/ASDSupport_CLEANED';
import { ASDLiving } from './articles/autism/ASDLiving_CLEANED';
import { ASDSpeechTherapy } from './articles/autism/ASDSpeechTherapy';
import { ASDOccupationalTherapy } from './articles/autism/ASDOccupationalTherapy';
import { ASDABATherapy } from './articles/autism/ASDABATherapy';
import { ASDSocialSkills } from './articles/autism/ASDSocialSkills';
import { ASDMentalHealth } from './articles/autism/ASDMentalHealth';
import { DyslexiaOverview } from './articles/dyslexia/DyslexiaOverview';
import { DyslexiaSymptoms } from './articles/dyslexia/DyslexiaSymptoms';
import { DyslexiaCauses } from './articles/dyslexia/DyslexiaCauses';
import { DyslexiaDiagnosis } from './articles/dyslexia/DyslexiaDiagnosis';
import { DyslexiaSupport } from './articles/dyslexia/DyslexiaSupport';
import { DyslexiaLiving } from './articles/dyslexia/DyslexiaLiving';
import { DyscalculiaOverview } from './articles/dyscalculia/DyscalculiaOverview';
import { DyscalculiaSymptoms } from './articles/dyscalculia/DyscalculiaSymptoms';
import { DyscalculiaCauses } from './articles/dyscalculia/DyscalculiaCauses';
import { DyscalculiaDiagnosis } from './articles/dyscalculia/DyscalculiaDiagnosis';
import { DyscalculiaSupport } from './articles/dyscalculia/DyscalculiaSupport';
import { DyscalculiaLiving } from './articles/dyscalculia/DyscalculiaLiving';
import { DysgraphiaOverview } from './articles/dysgraphia/DysgraphiaOverview';
import { DysgraphiaSymptoms } from './articles/dysgraphia/DysgraphiaSymptoms';
import { DysgraphiaCauses } from './articles/dysgraphia/DysgraphiaCauses';
import { DysgraphiaDiagnosis } from './articles/dysgraphia/DysgraphiaDiagnosis';
import { DysgraphiaSupport } from './articles/dysgraphia/DysgraphiaSupport';
import { DysgraphiaLiving } from './articles/dysgraphia/DysgraphiaLiving';
import { NVLDOverview } from './articles/nvld/NVLDOverview';
import { NVLDSymptoms } from './articles/nvld/NVLDSymptoms';
import { NVLDCauses } from './articles/nvld/NVLDCauses';
import { NVLDDiagnosis } from './articles/nvld/NVLDDiagnosis';
import { NVLDSupport } from './articles/nvld/NVLDSupport';
import { NVLDLiving } from './articles/nvld/NVLDLiving';
import { DLDOverview } from './articles/dld/DLDOverview';
import { DLDSymptoms } from './articles/dld/DLDSymptoms';
import { DLDCauses } from './articles/dld/DLDCauses';
import { DLDDiagnosis } from './articles/dld/DLDDiagnosis';
import { DLDSupport } from './articles/dld/DLDSupport';
import { DLDLiving } from './articles/dld/DLDLiving';
import { HyperlexiaOverview } from './articles/hyperlexia/HyperlexiaOverview';
import { HyperlexiaSymptoms } from './articles/hyperlexia/HyperlexiaSymptoms';
import { HyperlexiaCauses } from './articles/hyperlexia/HyperlexiaCauses';
import { HyperlexiaDiagnosis } from './articles/hyperlexia/HyperlexiaDiagnosis';
import { HyperlexiaSupport } from './articles/hyperlexia/HyperlexiaSupport';
import { HyperlexiaLiving } from './articles/hyperlexia/HyperlexiaLiving';
import { GiftednessOverview } from './articles/giftedness/GiftednessOverview';
import { GiftednessSymptoms } from './articles/giftedness/GiftednessSymptoms';
import { GiftednessCauses } from './articles/giftedness/GiftednessCauses';
import { GiftednessDiagnosis } from './articles/giftedness/GiftednessDiagnosis';
import { GiftednessSupport } from './articles/giftedness/GiftednessSupport';
import { GiftednessLiving } from './articles/giftedness/GiftednessLiving';
import { TwiceExceptionalOverview } from './articles/twice-exceptional/TwiceExceptionalOverview';
import { TwiceExceptionalSymptoms } from './articles/twice-exceptional/TwiceExceptionalSymptoms';
import { TwiceExceptionalCauses } from './articles/twice-exceptional/TwiceExceptionalCauses';
import { TwiceExceptionalDiagnosis } from './articles/twice-exceptional/TwiceExceptionalDiagnosis';
import { TwiceExceptionalSupport } from './articles/twice-exceptional/TwiceExceptionalSupport';
import { TwiceExceptionalLiving } from './articles/twice-exceptional/TwiceExceptionalLiving';
import { APDOverview } from './articles/apd/APDOverview';
import { APDSymptoms } from './articles/apd/APDSymptoms';
import { APDCauses } from './articles/apd/APDCauses';
import { APDDiagnosis } from './articles/apd/APDDiagnosis';
import { APDSupport } from './articles/apd/APDSupport';
import { APDLiving } from './articles/apd/APDLiving';
import { VPDOverview } from './articles/visual-processing/VPDOverview';
import { VPDSymptoms } from './articles/visual-processing/VPDSymptoms';
import { VPDCauses } from './articles/visual-processing/VPDCauses';
import { VPDDiagnosis } from './articles/visual-processing/VPDDiagnosis';
import { VPDSupport } from './articles/visual-processing/VPDSupport';
import { VPDLiving } from './articles/visual-processing/VPDLiving';
import { SPDOverview } from './articles/spd/SPDOverview';
import { SPDSymptoms } from './articles/spd/SPDSymptoms';
import { SPDCauses } from './articles/spd/SPDCauses';
import { SPDDiagnosis } from './articles/spd/SPDDiagnosis';
import { SPDSupport } from './articles/spd/SPDSupport';
import { SPDLiving } from './articles/spd/SPDLiving';
import { SymptomWheelDemo } from './SymptomWheelDemo';
import ProjectStandards from './articles/ProjectStandards';

interface ArticleContentProps {
  articleId: string;
  setCurrentArticle?: (article: string) => void;
}

export function ArticleContent({ articleId, setCurrentArticle }: ArticleContentProps) {
  const articles: Record<string, React.ReactNode> = {
    'symptom-wheel-demo': <SymptomWheelDemo />,
    'project-standards': <ProjectStandards setCurrentArticle={setCurrentArticle} />,
    adhd: <ArticleADHD setCurrentArticle={setCurrentArticle} />,
    'adhd-overview': <ADHDOverview setCurrentArticle={setCurrentArticle} />,
    'adhd-symptoms': <ADHDSymptoms setCurrentArticle={setCurrentArticle} />,
    'adhd-causes': <ADHDCauses setCurrentArticle={setCurrentArticle} />,
    'adhd-diagnosis': <ADHDDiagnosis setCurrentArticle={setCurrentArticle} />,
    'adhd-support': <ADHDSupport setCurrentArticle={setCurrentArticle} />,
    'adhd-living': <ADHDLiving setCurrentArticle={setCurrentArticle} />,
    autism: <ArticleAutism setCurrentArticle={setCurrentArticle} />,
    'autism-overview': <ASDOverview setCurrentArticle={setCurrentArticle} />,
    'autism-symptoms': <ASDSymptoms setCurrentArticle={setCurrentArticle} />,
    'autism-causes': <ASDCauses setCurrentArticle={setCurrentArticle} />,
    'autism-diagnosis': <ASDDiagnosis setCurrentArticle={setCurrentArticle} />,
    'autism-support': <ASDSupport setCurrentArticle={setCurrentArticle} />,
    'autism-support-therapies': <ASDSupport setCurrentArticle={setCurrentArticle} initialTab="therapies" />,
    'autism-living': <ASDLiving setCurrentArticle={setCurrentArticle} />,
    'autism-speech-therapy': <ASDSpeechTherapy setCurrentArticle={setCurrentArticle} />,
    'autism-occupational-therapy': <ASDOccupationalTherapy setCurrentArticle={setCurrentArticle} />,
    'autism-aba-therapy': <ASDABATherapy setCurrentArticle={setCurrentArticle} />,
    'autism-social-skills': <ASDSocialSkills setCurrentArticle={setCurrentArticle} />,
    'autism-mental-health': <ASDMentalHealth setCurrentArticle={setCurrentArticle} />,
    dyslexia: <ArticleDyslexia setCurrentArticle={setCurrentArticle} />,
    'dyslexia-overview': <DyslexiaOverview setCurrentArticle={setCurrentArticle} />,
    'dyslexia-symptoms': <DyslexiaSymptoms setCurrentArticle={setCurrentArticle} />,
    'dyslexia-causes': <DyslexiaCauses setCurrentArticle={setCurrentArticle} />,
    'dyslexia-diagnosis': <DyslexiaDiagnosis setCurrentArticle={setCurrentArticle} />,
    'dyslexia-support': <DyslexiaSupport setCurrentArticle={setCurrentArticle} />,
    'dyslexia-living': <DyslexiaLiving setCurrentArticle={setCurrentArticle} />,
    dyscalculia: <ArticleDyscalculia setCurrentArticle={setCurrentArticle} />,
    'dyscalculia-overview': <DyscalculiaOverview setCurrentArticle={setCurrentArticle} />,
    'dyscalculia-symptoms': <DyscalculiaSymptoms setCurrentArticle={setCurrentArticle} />,
    'dyscalculia-causes': <DyscalculiaCauses setCurrentArticle={setCurrentArticle} />,
    'dyscalculia-diagnosis': <DyscalculiaDiagnosis setCurrentArticle={setCurrentArticle} />,
    'dyscalculia-support': <DyscalculiaSupport setCurrentArticle={setCurrentArticle} />,
    'dyscalculia-living': <DyscalculiaLiving setCurrentArticle={setCurrentArticle} />,
    dysgraphia: <ArticleDysgraphia setCurrentArticle={setCurrentArticle} />,
    'dysgraphia-overview': <DysgraphiaOverview setCurrentArticle={setCurrentArticle} />,
    'dysgraphia-symptoms': <DysgraphiaSymptoms setCurrentArticle={setCurrentArticle} />,
    'dysgraphia-causes': <DysgraphiaCauses setCurrentArticle={setCurrentArticle} />,
    'dysgraphia-diagnosis': <DysgraphiaDiagnosis setCurrentArticle={setCurrentArticle} />,
    'dysgraphia-support': <DysgraphiaSupport setCurrentArticle={setCurrentArticle} />,
    'dysgraphia-living': <DysgraphiaLiving setCurrentArticle={setCurrentArticle} />,
    nvld: <ArticleNVLD setCurrentArticle={setCurrentArticle} />,
    'nvld-overview': <NVLDOverview setCurrentArticle={setCurrentArticle} />,
    'nvld-symptoms': <NVLDSymptoms setCurrentArticle={setCurrentArticle} />,
    'nvld-causes': <NVLDCauses setCurrentArticle={setCurrentArticle} />,
    'nvld-diagnosis': <NVLDDiagnosis setCurrentArticle={setCurrentArticle} />,
    'nvld-support': <NVLDSupport setCurrentArticle={setCurrentArticle} />,
    'nvld-living': <NVLDLiving setCurrentArticle={setCurrentArticle} />,
    dld: <ArticleDLD setCurrentArticle={setCurrentArticle} />,
    'dld-overview': <DLDOverview setCurrentArticle={setCurrentArticle} />,
    'dld-symptoms': <DLDSymptoms setCurrentArticle={setCurrentArticle} />,
    'dld-causes': <DLDCauses setCurrentArticle={setCurrentArticle} />,
    'dld-diagnosis': <DLDDiagnosis setCurrentArticle={setCurrentArticle} />,
    'dld-support': <DLDSupport setCurrentArticle={setCurrentArticle} />,
    'dld-living': <DLDLiving setCurrentArticle={setCurrentArticle} />,
    hyperlexia: <ArticleHyperlexia setCurrentArticle={setCurrentArticle} />,
    'hyperlexia-overview': <HyperlexiaOverview setCurrentArticle={setCurrentArticle} />,
    'hyperlexia-symptoms': <HyperlexiaSymptoms setCurrentArticle={setCurrentArticle} />,
    'hyperlexia-causes': <HyperlexiaCauses setCurrentArticle={setCurrentArticle} />,
    'hyperlexia-diagnosis': <HyperlexiaDiagnosis setCurrentArticle={setCurrentArticle} />,
    'hyperlexia-support': <HyperlexiaSupport setCurrentArticle={setCurrentArticle} />,
    'hyperlexia-living': <HyperlexiaLiving setCurrentArticle={setCurrentArticle} />,
    dyspraxia: <ArticleDyspraxia />,
    tourette: <ArticleTourette />,
    synesthesia: <ArticleSynesthesia />,
    misophonia: <ArticleMisophonia />,
    'twice-exceptional': <ArticleTwiceExceptional setCurrentArticle={setCurrentArticle} />,
    'twice-exceptional-overview': <TwiceExceptionalOverview setCurrentArticle={setCurrentArticle} />,
    'twice-exceptional-symptoms': <TwiceExceptionalSymptoms setCurrentArticle={setCurrentArticle} />,
    'twice-exceptional-causes': <TwiceExceptionalCauses setCurrentArticle={setCurrentArticle} />,
    'twice-exceptional-diagnosis': <TwiceExceptionalDiagnosis setCurrentArticle={setCurrentArticle} />,
    'twice-exceptional-support': <TwiceExceptionalSupport setCurrentArticle={setCurrentArticle} />,
    'twice-exceptional-living': <TwiceExceptionalLiving setCurrentArticle={setCurrentArticle} />,
    ocd: <ArticleOCD />,
    bipolar: <ArticleBipolar />,
    schizophrenia: <ArticleSchizophrenia />,
    epilepsy: <ArticleEpilepsy />,
    spd: <ArticleSPD setCurrentArticle={setCurrentArticle} />,
    'spd-overview': <SPDOverview setCurrentArticle={setCurrentArticle} />,
    'spd-symptoms': <SPDSymptoms setCurrentArticle={setCurrentArticle} />,
    'spd-causes': <SPDCauses setCurrentArticle={setCurrentArticle} />,
    'spd-diagnosis': <SPDDiagnosis setCurrentArticle={setCurrentArticle} />,
    'spd-support': <SPDSupport setCurrentArticle={setCurrentArticle} />,
    'spd-living': <SPDLiving setCurrentArticle={setCurrentArticle} />,
    apd: <ArticleAPD setCurrentArticle={setCurrentArticle} />,
    'apd-overview': <APDOverview setCurrentArticle={setCurrentArticle} />,
    'apd-symptoms': <APDSymptoms setCurrentArticle={setCurrentArticle} />,
    'apd-causes': <APDCauses setCurrentArticle={setCurrentArticle} />,
    'apd-diagnosis': <APDDiagnosis setCurrentArticle={setCurrentArticle} />,
    'apd-support': <APDSupport setCurrentArticle={setCurrentArticle} />,
    'apd-living': <APDLiving setCurrentArticle={setCurrentArticle} />,
    'visual-processing': <ArticleVisualProcessing setCurrentArticle={setCurrentArticle} />,
    'visual-processing-overview': <VPDOverview setCurrentArticle={setCurrentArticle} />,
    'visual-processing-symptoms': <VPDSymptoms setCurrentArticle={setCurrentArticle} />,
    'visual-processing-causes': <VPDCauses setCurrentArticle={setCurrentArticle} />,
    'visual-processing-diagnosis': <VPDDiagnosis setCurrentArticle={setCurrentArticle} />,
    'visual-processing-support': <VPDSupport setCurrentArticle={setCurrentArticle} />,
    'visual-processing-living': <VPDLiving setCurrentArticle={setCurrentArticle} />,
    giftedness: <ArticleGiftedness setCurrentArticle={setCurrentArticle} />,
    'giftedness-overview': <GiftednessOverview setCurrentArticle={setCurrentArticle} />,
    'giftedness-symptoms': <GiftednessSymptoms setCurrentArticle={setCurrentArticle} />,
    'giftedness-causes': <GiftednessCauses setCurrentArticle={setCurrentArticle} />,
    'giftedness-diagnosis': <GiftednessDiagnosis setCurrentArticle={setCurrentArticle} />,
    'giftedness-support': <GiftednessSupport setCurrentArticle={setCurrentArticle} />,
    'giftedness-living': <GiftednessLiving setCurrentArticle={setCurrentArticle} />,
    'intellectual-disability': <ArticleIntellectualDisability />,
    'down-syndrome': <ArticleDownSyndrome />,
    fasd: <ArticleFASD />,
    tbi: <ArticleTBI />,
    cte: <ArticleCTE />,
    pandas: <ArticlePANDAS />,
    about: <ArticleAbout setCurrentArticle={setCurrentArticle} />,
    donate: <ArticleDonate />,
    blog: <ArticleBlog setCurrentArticle={setCurrentArticle} />,
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      {articles[articleId] || articles.adhd}
    </div>
  );
}