import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DownSyndromeCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function DownSyndromeCauses({ setCurrentArticle }: DownSyndromeCausesProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="mb-4">
            Down syndrome results from having an extra copy of chromosome 21.<sup>[19]</sup> There are three genetic variations that cause this extra chromosomal material to be present.
          </p>
          <p className="mb-4">
            It is a naturally occurring genetic variation. While advanced maternal age increases the likelihood, babies with Down syndrome are born to mothers of all ages.<sup>[22]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1654540288895-3eefdd293c1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbW9zb21lcyUyMGdlbmV0aWNzJTIwRE5BJTIwYmlvbG9neXxlbnwxfHx8fDE3Njc0MDg2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Chromosome 21 - genetic basis of Down syndrome"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="bg-[#f0fdf4] border border-[#bbf7d0] p-4 rounded-lg">
          <h3 className="font-bold text-[#166534] mb-2">Trisomy 21</h3>
          <p className="text-xs">95% of cases. Every cell has three copies of chromosome 21. It occurs randomly during cell division.</p>
        </div>
        <div className="bg-[#f0f9ff] border border-[#bae6fd] p-4 rounded-lg">
          <h3 className="font-bold text-[#075985] mb-2">Translocation</h3>
          <p className="text-xs">3-4% of cases. Part of chromosome 21 attaches to another chromosome. Can be inherited from a carrier parent.</p>
        </div>
        <div className="bg-[#fdf2f8] border border-[#fbcfe8] p-4 rounded-lg">
          <h3 className="font-bold text-[#9d174d] mb-2">Mosaicism</h3>
          <p className="text-xs">1-2% of cases. Only some cells have the extra chromosome 21, while others have the typical number.</p>
        </div>
      </div>

      <p className="text-sm text-gray-600 italic">
        The extra genetic material affects development throughout the body, particularly influencing brain structure and connectivity.<sup>[24]</sup>
      </p>
    </div>
  );
}
