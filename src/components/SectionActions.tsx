import React, { useState } from 'react';
import { Link, Mail, Printer, Check } from 'lucide-react';

interface SectionActionsProps {
  sectionId: string;
  sectionTitle: string;
}

export function SectionActions({ sectionId, sectionTitle }: SectionActionsProps) {
  const [copied, setCopied] = useState(false);

  // 1. Copy Link Logic
  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  // 2. Email Logic
  const handleEmail = () => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    const subject = encodeURIComponent(`Helpful resource: ${sectionTitle}`);
    const body = encodeURIComponent(`I found this section on Brainopedia and thought it would be helpful for you:\n\n${url}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  // 3. Smart Print Logic (Isolates the section!)
  const handlePrint = () => {
    // Create a temporary stylesheet just for printing
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        /* Hide absolutely everything on the page */
        body * {
          visibility: hidden;
        }
        /* Make only our specific section and its contents visible */
        #${sectionId}, #${sectionId} * {
          visibility: visible;
        }
        /* Move our section to the very top left of the physical paper */
        #${sectionId} {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          margin: 0;
          padding: 0;
        }
      }
    `;
    
    // Attach the temporary rules to the page
    document.head.appendChild(style);
    
    // Trigger the print dialog
    window.print();
    
    // Clean up our temporary rules immediately after
    document.head.removeChild(style);
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

      <button 
        onClick={handleEmail}
        className="flex items-center gap-1.5 text-xs font-bold text-[#0A9DC4] hover:text-[#0c264d] transition-colors bg-white px-3 py-1.5 rounded border border-[#0A9DC4]/20 shadow-sm"
      >
        <Mail size={14} />
        Email
      </button>

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