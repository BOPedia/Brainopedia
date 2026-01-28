interface FootballHelmetProps {
  className?: string;
}

export function FootballHelmet({ className = "w-5 h-5" }: FootballHelmetProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      {/* Helmet dome */}
      <path d="M4 14 C4 8, 8 4, 12 4 C16 4, 20 8, 20 14" />
      {/* Bottom edge */}
      <path d="M4 14 L4 16 C4 17, 5 18, 6 18 L18 18 C19 18, 20 17, 20 16 L20 14" />
      {/* Face mask bars */}
      <path d="M8 14 L8 20" />
      <path d="M12 14 L12 20" />
      <path d="M16 14 L16 20" />
      {/* Face mask horizontal bar */}
      <path d="M7 18 L17 18" />
    </svg>
  );
}
