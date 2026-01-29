import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useState } from 'react';

interface DyslexiaCausesProps {
  setCurrentArticle: (articleId: string) => void;
}

export function DyslexiaCauses({ setCurrentArticle }: DyslexiaCausesProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-6 mb-6">
      <h2 className="text-3xl font-bold mb-4 text-[#0c264d]">Causes & Risk Factors</h2>
      
      <div className="prose max-w-none">
        <p className="mb-4">
          Dyslexia is primarily caused by differences in brain structure and function, particularly in areas responsible for reading and language processing. Research has identified several key factors that contribute to the development of dyslexia.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d]">Genetic Factors</h3>
        <p className="mb-4">
          Dyslexia has a strong genetic component and often runs in families. Studies show that children with a parent or sibling with dyslexia have a significantly higher risk of developing the condition themselves.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h4 className="font-bold mb-2 text-[#0c264d]">Genetic Research Findings:</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>Multiple genes have been associated with dyslexia risk</li>
            <li>Heritability estimates range from 40-60%</li>
            <li>Gene variants affect brain development and neural connections</li>
            <li>Family history is one of the strongest predictors</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d]">Brain Differences</h3>
        <p className="mb-4">
          Neuroimaging studies have revealed distinct differences in the brains of individuals with dyslexia:
        </p>

        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>Reduced activity in the left hemisphere reading networks</li>
          <li>Differences in white matter connectivity between language areas</li>
          <li>Variations in brain structure in regions processing phonological information</li>
          <li>Altered patterns of neural activation during reading tasks</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d]">Phonological Processing Deficit</h3>
        <p className="mb-4">
          The most widely accepted explanation for dyslexia is a deficit in phonological processing—the ability to recognize and manipulate the sound structure of language. This core deficit affects:
        </p>

        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>Sound-letter correspondence (phonics)</li>
          <li>Breaking words into component sounds</li>
          <li>Recognizing rhyming patterns</li>
          <li>Rapid naming of letters and objects</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d]">Environmental Risk Factors</h3>
        <p className="mb-4">
          While dyslexia is primarily neurobiological, certain environmental factors may increase risk or severity:
        </p>

        <div className="bg-yellow-50 border-l-4 border-[#ffd166] p-4 mb-4">
          <h4 className="font-bold mb-2 text-[#0c264d]">Potential Risk Factors:</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>Premature birth or low birth weight</li>
            <li>Exposure to toxins during pregnancy (nicotine, alcohol, drugs)</li>
            <li>Limited early literacy exposure</li>
            <li>Chronic ear infections affecting hearing development</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d]">Important Notes</h3>
        <p className="mb-4">
          It's crucial to understand that:
        </p>

        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>Dyslexia is not caused by lack of intelligence or poor teaching</li>
          <li>Vision problems do not cause dyslexia, though they may coexist</li>
          <li>The condition is present from birth but may not be apparent until school age</li>
          <li>Early intervention can significantly improve outcomes regardless of cause</li>
        </ul>
      </div>
    </div>
  );
}
