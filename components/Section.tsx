import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, className = "", children, icon }) => {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center gap-3 mb-10 border-b pb-4 border-slate-200">
          {icon && <span className="text-blue-700">{icon}</span>}
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};