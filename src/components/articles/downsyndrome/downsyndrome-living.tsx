import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DownSyndromeLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function DownSyndromeLiving({ setCurrentArticle }: DownSyndromeLivingProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Down Syndrome</h2>
      
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <div className="flex-1">
          <p className="mb-4">
            People with Down syndrome lead fulfilling and meaningful lives across all areas of society.<sup>[40]</sup> Many adults pursue careers, form deep relationships, and live independently or semi-independently.
          </p>
          <p className="mb-4">
            With inclusion, respect, and appropriate supports, individuals contribute to their families and communities in profound ways, living lives of purpose and dignity.<sup>[42]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1767274094403-8bb7bd097e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmNsdXNpb24lMjBjb21tdW5pdHklMjBwYXJ0aWNpcGF0aW9uJTIwcGVvcGxlfGVufDF8fHx8MTc2NzQwODYyOXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Community inclusion - living with Down syndrome"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm my-8">
        <h3 className="font-bold text-[#0c264d] mb-4 text-xl">Key Pillars for a Full Life</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-100 rounded bg-gray-50">
            <h4 className="font-semibold mb-1">Inclusion</h4>
            <p className="text-xs text-gray-600">Active participation in mainstream school, work, and social environments.</p>
          </div>
          <div className="p-4 border border-gray-100 rounded bg-gray-50">
            <h4 className="font-semibold mb-1">Independence</h4>
            <p className="text-xs text-gray-600">Developing self-care and decision-making skills with supported living options when needed.</p>
          </div>
          <div className="p-4 border border-gray-100 rounded bg-gray-50">
            <h4 className="font-semibold mb-1">Employment</h4>
            <p className="text-xs text-gray-600">Access to competitive integrated employment and vocational coaching.</p>
          </div>
          <div className="p-4 border border-gray-100 rounded bg-gray-50">
            <h4 className="font-semibold mb-1">Self-Advocacy</h4>
            <p className="text-xs text-gray-600">Empowering individuals to speak for themselves and exercise their civil rights.<sup>[38]</sup></p>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600">
        The Down syndrome advocacy movement continues to advance inclusion, rights, and opportunities, moving society toward a model of presumption of competence and respect for all neurotypes.<sup>[46]</sup>
      </p>
    </div>
  );
}
