import React from 'react';

interface HomeProps {
  setCurrentArticle?: (article: string) => void;
}

export function Home({ setCurrentArticle }: HomeProps) {
  return (
    <article className="bg-[#fffbf0] -m-8 p-4 sm:p-8 rounded-lg font-spartan text-[#0c264d]">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl font-bold">
        Welcome to Brainopedia
      </h1>

      <div className="space-y-12">
        {/* Banner */}
        <div className="mb-8">
          <img 
            src="/images/brainopedia-banner.png" 
            alt="Brainopedia Banner"
            className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
          />
        </div>

        {/* Introduction */}
        <section className="max-w-4xl">
          <p className="text-xl leading-relaxed">
            Explore our comprehensive volumes on neurodevelopmental, processing, and motor differences. 
          </p>
        </section>

        {/* Volumes Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-8">Encyclopedia Volumes</h2>

          {/* Pattern: Graphic on left, Text + Buttons Stacked on Right */}
          {[
            {
              id: 'core',
              title: 'Core Neurodevelopmental',
              img: '/images/home-apple-core-neurodev.png',
              color: '#2abcd4',
              desc: 'Fundamental conditions affecting brain development, social communication, and attention from early childhood.',
              links: [{id: 'adhd', label: 'ADHD'}, {id: 'autism', label: 'Autism'}]
            },
            {
              id: 'learning',
              title: 'Learning Differences & Profiles',
              img: '/images/home-learning-diff.png',
              color: '#ffd166',
              desc: 'Distinct cognitive profiles affecting reading, writing, and mathematics, highlighting unique ways brains process information.',
              links: [{id: 'dyslexia', label: 'Dyslexia'}, {id: 'dyscalculia', label: 'Dyscalculia'}, {id: 'nvld', label: 'NVLD'}, {id: 'giftedness', label: 'Giftedness'}]
            },
            {
              id: 'sensory',
              title: 'Processing & Sensory',
              img: '/images/home-math-sensory-brain.png',
              color: '#ec4899',
              desc: 'Differences in receiving and interpreting sensory inputs from the environment, leading to unique perceptual experiences.',
              links: [{id: 'apd', label: 'APD'}, {id: 'spd', label: 'SPD'}, {id: 'synesthesia', label: 'Synesthesia'}]
            }
            // ... Add remaining 4 categories following this exact div structure
          ].map((cat) => (
            <div key={cat.id} className="bg-white p-6 rounded-2xl border-2 shadow-sm flex flex-col md:flex-row gap-6" style={{ borderColor: cat.color }}>
              <img src={cat.img} alt={cat.title} className="w-32 h-32 rounded-lg shadow-md object-cover self-start" />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                <p className="text-base leading-relaxed mb-6 text-gray-700">
                  {cat.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.links.map(link => (
                    <button 
                      key={link.id}
                      onClick={() => setCurrentArticle?.(link.id)}
                      className="px-4 py-2 bg-white border-2 rounded-full text-sm hover:text-white transition-all font-bold"
                      style={{ borderColor: cat.color, color: '#0c264d' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = cat.color}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </article>
  );
}