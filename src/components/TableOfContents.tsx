import React from 'react';

interface Section {
  id: string;
  title: string;
  onClick?: (e: React.MouseEvent) => void;
}

interface TableOfContentsProps {
  sections: Section[];
  subtitle?: string;
  variant?: 'default' | 'navy';
}

export function TableOfContents({ sections, subtitle, variant = 'default' }: TableOfContentsProps) {
  const isNavy = variant === 'navy';
  
  return (
    <div className={`${isNavy ? 'bg-[#0c264d]' : 'bg-[#f8f9fa]'} border ${isNavy ? 'border-[#0c264d]' : 'border-gray-300'} rounded-md p-4 mb-8`}>
      <h2 className={`mb-1 ${isNavy ? 'text-white' : 'text-[#0c264d]'}`}>Contents</h2>
      {subtitle && <p className={`text-sm ${isNavy ? 'text-[#ffd166]' : 'text-[#2abcd4]'} mb-3 font-semibold`}>{subtitle}</p>}
      <ol className="space-y-2">
        {sections.map((section, index) => (
          <li key={section.id} className="ml-4">
            <a 
              href={section.onClick ? '#' : `#${section.id}`}
              onClick={section.onClick}
              className={`${isNavy ? 'text-white hover:text-[#ffd166]' : 'text-[#2abcd4]'} hover:underline cursor-pointer`}
            >
              {index + 1}. {section.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}