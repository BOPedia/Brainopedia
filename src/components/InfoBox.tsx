import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InfoBoxProps {
  title: string;
  image?: string | any;
  data: Array<{ label: string; value: string }>;
}

export function InfoBox({ title, image, data }: InfoBoxProps) {
  return (
    <div className="bg-[#f8f9fa] border border-gray-300 rounded-md overflow-hidden">
      <div className="bg-[#0c264d] text-white px-3 sm:px-4 py-2 text-center">
        <h3>{title}</h3>
      </div>
      
      {image && (
        <ImageWithFallback 
          src={image} 
          alt={`${title} illustration`}
          className="w-full h-auto object-contain"
        />
      )}
      
      <div className="p-3 sm:p-4 bg-[#ffd166]">
        <table className="w-full text-sm">
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 last:border-b-0">
                <td className="py-2 pr-2 align-top text-gray-600">{item.label}</td>
                <td className="py-2 align-top">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}