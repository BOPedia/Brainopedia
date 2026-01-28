import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0c264d] text-white">
      <header className="bg-[#0c264d] border-b-4 border-[#2abcd4] py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#ffd166]">
            Welcome to Brainopedia
          </h1>
          <p className="text-[#2abcd4] mt-2">
            A comprehensive encyclopedia of neurodivergent conditions
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white text-[#0c264d] rounded-lg p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
          <p className="mb-4">
            This is your Brainopedia home page. You'll configure routing in App.tsx
            to navigate to all 27 condition pages.
          </p>
          <p className="text-sm text-gray-600">
            All your condition pages are in the components folder and ready to deploy!
          </p>
        </div>
      </main>
    </div>
  );
}
