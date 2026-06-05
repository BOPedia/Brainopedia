import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface CTECausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function CTECauses({ setCurrentArticle }: CTECausesProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins of CTE</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="mb-4">
            The primary cause of CTE is repeated head impacts over time.<sup>[21]</sup> These can include multiple concussions over time, 
            subconcussive hits (hits that don't cause obvious symptoms but still impact the brain), blast exposure (common 
            in military combat), and physical abuse involving repeated head trauma.<sup>[22][23]</sup>
          </p>
          
          <p className="mb-4">
            Risk factors include duration of exposure 
            (longer careers in contact sports increase risk) and age of first exposure. Starting contact sports at younger ages 
            may increase vulnerability because the brain is still developing.<sup>[24][25]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1508355588587-46f3cdb5da07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHNwb3J0cyUyMGhlYWQlMjBpbXBhY3QlMjBjb25jdXNzaW9ufGVufDF8fHx8MTc2NzQxMDYyMHww"
            alt="Contact sports and repeated head impacts causing CTE"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="bg-[#fff7ed] border-l-4 border-[#f97316] p-4 my-6">
        <h3 className="font-bold text-[#9a3412] mb-2">Populations at Highest Risk</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <li>• American Football players</li>
          <li>• Boxers & MMA fighters</li>
          <li>• Ice Hockey players</li>
          <li>• Military personnel (blast injuries)</li>
          <li>• Victims of domestic abuse</li>
          <li>• Individuals with severe epilepsy</li>
        </ul>
      </div>

      <p className="mb-4">
        Certain genetic factors, such as the APOE4 gene, may also increase susceptibility to the disease after head trauma.<sup>[26]</sup> The repeated impacts cause abnormal tau protein accumulation, creating a progressive neurodegenerative process.<sup>[29]</sup>
      </p>
    </div>
  );
}
