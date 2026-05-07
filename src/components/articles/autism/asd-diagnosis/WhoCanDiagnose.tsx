import { ImageWithFallback } from '../../../figma/ImageWithFallback';
import { Stethoscope, MessageSquare, Hand, BookOpen, XCircle } from 'lucide-react';
import React from 'react';

export function WhoCanDiagnose() {
  // 1. ALL DATA LIVES HERE (Before the return statement)
  const professionals = [
    {
      credential: 'MD',
      title: 'Developmental Pediatricians',
      color: 'bg-[#0c264d]',
      textColor: 'text-white',
      badgeBg: 'bg-[#2abcd4]',
      titleColor: 'text-[#ffd166]',
      description:
        'Pediatricians with specialized training in developmental and behavioral disorders. Often lead autism diagnostic teams. Can prescribe medication and coordinate care.',
      bullets: ['Most commonly first stop for children', 'Can diagnose and manage ongoing care'],
    },
    {
      credential: 'PhD',
      title: 'Child Psychologists',
      color: 'bg-[#2abcd4]',
      textColor: 'text-[#0c264d]',
      badgeBg: 'bg-[#0c264d]',
      titleColor: 'text-[#0c264d]',
      description:
        'Doctoral-level professionals (Ph.D. or Psy.D.) trained in psychological assessment and child development. Can administer ADOS-2 and ADI-R.',
      bullets: ['Comprehensive testing and evaluation', 'Cannot prescribe medication (most states)'],
    },
    {
      credential: 'MD',
      title: 'Child Psychiatrists',
      color: 'bg-[#0c264d]',
      textColor: 'text-white',
      badgeBg: 'bg-[#2abcd4]',
      titleColor: 'text-[#ffd166]',
      description:
        'Medical doctors (M.D. or D.O.) specializing in child and adolescent mental health. Can diagnose autism, prescribe medication, and treat co-occurring conditions.',
      bullets: ['Can prescribe and manage medications', 'Treat co-occurring anxiety, ADHD, etc.'],
    },
    {
      credential: 'MD',
      title: 'Child Neurologists',
      color: 'bg-[#2abcd4]',
      textColor: 'text-[#0c264d]',
      badgeBg: 'bg-[#0c264d]',
      titleColor: 'text-[#0c264d]',
      description:
        'Medical doctors specializing in nervous system disorders in children. Often diagnose autism, particularly when seizures, regression, or neurological issues are present.',
      bullets: ['Key when neurological concerns exist', 'Can rule out other neurological conditions'],
    },
    {
      credential: 'PhD',
      title: 'Neuropsychologists',
      color: 'bg-[#0c264d]',
      textColor: 'text-white',
      badgeBg: 'bg-[#2abcd4]',
      titleColor: 'text-[#ffd166]',
      description:
        'Psychologists specializing in brain-behavior relationships. Conduct comprehensive testing of cognitive, language, social, and adaptive functions.',
      bullets: ['Best for complex diagnostic cases', 'Detailed cognitive profile and report'],
    },
    {
      credential: 'MD',
      title: 'Pediatricians (with training)',
      color: 'bg-[#2abcd4]',
      textColor: 'text-[#0c264d]',
      badgeBg: 'bg-[#0c264d]',
      titleColor: 'text-[#0c264d]',
      description:
        'General pediatricians CAN diagnose autism if they have appropriate training and experience. May refer to specialists for complex cases or comprehensive testing.',
      bullets: ['Often first point of contact for families', 'May refer to specialists for full eval'],
    },
  ];

  const teamMembers = [
    {
      role: 'Developmental Pediatrician or Psychologist',
      duty: 'Leads the evaluation, conducts ADOS-2/ADI-R assessments, makes the diagnosis',
      icon: Stethoscope,
    },
    {
      role: 'Speech-Language Pathologist',
      duty: 'Evaluates communication skills, language development, pragmatic (social) language',
      icon: MessageSquare,
    },
    {
      role: 'Occupational Therapist',
      duty: 'Assesses sensory processing, fine motor skills, adaptive daily living skills',
      icon: Hand,
    },
    {
      role: 'Educational Psychologist or Special Educator',
      duty: 'Evaluates learning profile, academic skills, educational needs',
      icon: BookOpen,
    },
  ];

  const cannotDiagnose = [
    { label: 'Teachers or School Counselors', note: 'Can recommend evaluation but cannot diagnose' },
    {
      label: 'Speech-Language Pathologists or OTs alone',
      note: 'Important team members but cannot make the diagnosis independently (varies by state)',
    },
    {
      label: 'Licensed Clinical Social Workers (LCSWs) or LPCs',
      note: 'Can provide therapy but typically cannot diagnose autism (varies by state)',
    },
    { label: 'Online "Autism Tests"', note: 'Cannot replace a professional evaluation' },
  ];

  // 2. THE RENDER BLOCK STARTS HERE
  return (
    <div className="space-y-6"> {/* Master wrapper for the whole page */}
      
     {/* Intro Section */}
      <div className="block mb-6">
        <ImageWithFallback
          src="/images/autism/autism-diagnosis-WhoCantab-doctor-plays.png"
          alt="Doctor playing with child during assessment"
          className="w-48 h-auto float-right ml-6 mb-4 rounded-md border border-gray-300 shadow-sm" 
        />

      {/* Key Point Box */}
      <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
        <p className="text-sm">
          <strong>Key Point:</strong> Autism diagnosis should be made by professionals with specific training and
          experience in autism assessment. Not all medical or mental health professionals have this expertise.
        </p>
      </div>
    </div>

      {/* Professionals Card Grid */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Licensed Professionals Who Can Diagnose Autism</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {professionals.map((pro) => (
            <div key={pro.title} className={`${pro.color} rounded-lg p-4 flex gap-3`}>
              {/* Credential Badge */}
              <div className={`${pro.badgeBg} rounded-full w-12 h-12 flex items-center justify-center shrink-0 mt-1`}>
                <span className="text-white text-xs font-bold">{pro.credential}</span>
              </div>
              {/* Content */}
              <div>
                <div className={`font-bold text-sm mb-1 ${pro.titleColor}`}>{pro.title}</div>
                <div className={`text-xs mb-2 ${pro.textColor} opacity-90`}>{pro.description}</div>
                <ul className={`text-xs space-y-0.5 ${pro.textColor}`}>
                  {pro.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Multidisciplinary Team — card row */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Multidisciplinary Team Approach</h3>
        <p className="text-sm mb-4">
          The best autism evaluations often involve a team of professionals working together:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {teamMembers.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.role} className="flex gap-3 bg-[#f0f9ff] rounded-md p-3 border border-[#2abcd4]/30">
                <Icon className="text-[#0A9DC4] shrink-0 mt-0.5" size={22} />
                <div>
                  <div className="font-bold text-[#0c264d] text-sm mb-1">{m.role}</div>
                  <div className="text-xs text-gray-700">{m.duty}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Who CANNOT Diagnose — table style */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg flex items-center gap-2">
          <XCircle className="text-red-500" size={20} />
          Who CANNOT Diagnose Autism
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#0c264d] text-white">
                <th className="text-left p-3 rounded-tl-md w-2/5">Professional</th>
                <th className="text-left p-3 rounded-tr-md">Why Not?</th>
              </tr>
            </thead>
            <tbody>
              {cannotDiagnose.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-red-50' : 'bg-white'}>
                  <td className="p-3 font-semibold text-red-700 border-b border-red-100 align-top">{row.label}</td>
                  <td className="p-3 text-gray-700 border-b border-red-100">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Finding a Provider */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">How to Find a Qualified Professional</h3>

        <div className="space-y-3">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Ask About Autism Experience</div>
            <div className="text-sm">
              Look for providers who regularly diagnose autism. Ask: "How many autism evaluations do you conduct per
              year?" and "Are you trained in ADOS-2 and ADI-R?"
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Get Referrals</div>
            <div className="text-sm">
              Ask your pediatrician for referrals to autism specialists. Connect with local autism support organizations
              for recommendations.
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Check University Centers</div>
            <div className="text-sm">
              Many universities have autism centers or developmental clinics that provide evaluations (may have wait
              lists).
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Contact Early Intervention or School Districts</div>
            <div className="text-sm">
              For children under 3, contact Early Intervention services. For children 3+, contact your school
              district's special education department — evaluations through schools are free.
            </div>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
        <p className="text-sm mb-2">
          <strong>Important:</strong> Wait times for autism evaluations can be 6–18 months in many areas. Don't wait
          to seek evaluation if you have concerns. You can also access Early Intervention services or school supports
          while waiting for a formal diagnosis.
        </p>
        <p className="text-sm">
          <strong>Cost:</strong> Evaluations can cost $1,500–$5,000 if not covered by insurance. Check your insurance
          benefits. School-based evaluations are free but may not be as comprehensive as clinical evaluations.
        </p>
      </div>

      {/* References */}
      <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>

        <p className="text-sm mb-2">
          <em>No inline citations for this tab.</em>
        </p>

        <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
        <div className="text-sm space-y-2">
          <p>
            American Psychiatric Association. (2013). <em>Diagnostic and Statistical Manual of Mental Disorders</em>{' '}
            (5th ed.). American Psychiatric Publishing.
          </p>
          <p>
            Lord, C., Elsabbagh, M., Baird, G., & Veenstra-Vanderweele, J. (2018). "Autism spectrum disorder."{' '}
            <em>The Lancet</em>, 392(10146), 508–520.
          </p>
        </div>
      </div>

    </div>
  );
}