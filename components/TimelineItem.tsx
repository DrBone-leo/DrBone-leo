import React from 'react';

interface TimelineItemProps {
  period: string;
  title: string;
  subtitle: string;
  description?: string;
  tags?: string[];
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ period, title, subtitle, description, tags, isLast }) => {
  return (
    <div className="relative pl-8 md:pl-32 py-6 group">
      {/* Date Column (Desktop) */}
      <div className="hidden md:block absolute left-0 top-6 w-24 text-right text-sm font-bold text-slate-500">
        {period}
      </div>
      
      {/* Line & Dot */}
      <div className={`absolute left-[0.2rem] md:left-[6.5rem] top-0 bottom-0 w-px bg-slate-200 group-hover:bg-blue-200 transition-colors ${isLast ? 'h-6' : ''}`}></div>
      <div className="absolute left-[-0.25rem] md:left-[6.15rem] top-7 w-4 h-4 rounded-full border-4 border-white bg-blue-600 shadow-sm group-hover:scale-110 transition-transform"></div>

      {/* Content */}
      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="md:hidden text-xs font-bold text-blue-600 mb-1 uppercase tracking-wider">{period}</div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>
        <div className="text-slate-700 font-medium mb-3">{subtitle}</div>
        
        {description && <p className="text-slate-600 text-sm mb-4 leading-relaxed">{description}</p>}
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, idx) => (
              <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};