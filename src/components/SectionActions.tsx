import React, { useState } from 'react';
import { Link, Mail, Printer, Check } from 'lucide-react';

interface SectionActionsProps {
  sectionId: string;
  sectionTitle: string;
}

export function SectionActions({ sectionId, sectionTitle }: SectionActionsProps) {
  const [copied, setCopied] = useState(false);

  // 1. Copy Link
  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  // 2. Email Logic (Using native <a> tag for better browser support)
  const mailtoSubject = encodeURIComponent(`Helpful resource: ${sectionTitle}`);
  const mailtoBody = encodeURIComponent(`I found this section on Brainopedia and thought it would be helpful for you:\n\n${window.location.origin}${window.location.pathname}#${sectionId}`);
  const mailtoUrl = `mailto:?subject=${mailtoSubject}&body=${mailtoBody}`;

  // 3. Smart Print Logic (The Clone Fix!)
  const handlePrint = () => {
    const printElement = document.getElementById(sectionId);
    if (!printElement) return;

    // Clone the section so we don't break React
    const clone = printElement.cloneNode(true) as HTMLElement;
    
    // Create a temporary container
    const printContainer = document.createElement('div');
    printContainer.id = 'temp-print-container';
    printContainer.className = 'print:block'; 
    printContainer.appendChild(clone);
    
    // Find the main app root and hide it completely so it takes up zero physical space
    const rootNode = document.getElementById('root') || document.body.firstElementChild;
    const originalDisplay = rootNode ? (rootNode as HTMLElement).style.display : '';
    if (rootNode) {
      (rootNode as HTMLElement).style.display = 'none';
    }
    
    // Append the clone, trigger the printer, and instantly clean up
    document.body.appendChild(printContainer);
    window.print();
    document.body.removeChild(printContainer);
    
    if (rootNode) {
      (rootNode as HTMLElement).style.display = originalDisplay;
    }
  };

  return (
    <div className="flex justify-center gap-3 mb-6 mt-2 print:hidden">
      <button 
        onClick={handleCopyLink}
        className="flex items-center gap-1.5 text-xs font-bold text-[#0A9DC4] hover:text-[#0c264d] transition-colors bg-white px-3 py-1.5 rounded border border-[#0A9DC4]/20 shadow-sm"
      >
        {copied ? <Check size={14} className="text-green-600" /> : <Link size={14} />}
        {copied ? 'Copied!' : 'Copy Link'}
      </button>

      {/* Changed to an <a> tag so it reliably opens native mail clients */}
      <a 
        href={mailtoUrl}
        className="flex items-center gap-1.5 text-xs font-bold text-[#0A9DC4] hover:text-[#0c264d] transition-colors bg-white px-3 py-1.5 rounded border border-[#0A9DC4]/20 shadow-sm"
      >
        <Mail size={14} />
        Email
      </a>

      <button 
        onClick={handlePrint}
        className="flex items-center gap-1.5 text-xs font-bold text-[#0A9DC4] hover:text-[#0c264d] transition-colors bg-white px-3 py-1.5 rounded border border-[#0A9DC4]/20 shadow-sm"
      >
        <Printer size={14} />
        Print
      </button>
    </div>
  );
}