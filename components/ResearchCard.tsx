import React from 'react';
import { ExternalLink, BookOpen, User } from 'lucide-react';

interface ResearchCardProps {
  type: 'Paper' | 'Project';
  title: string;
  subtitle: string;
  meta: string; // Journal or Level
  badge?: string;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({ type, title, subtitle, meta, badge }) => {
  return (
    <div className="flex flex-col h-full bg-white p-5 rounded-lg border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
      <div className="flex justify-between items-start gap-4 mb-3">
        <div className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wide ${
          type === 'Paper' ? 'bg-emerald-50 text-emerald-700' : 'bg-indigo-50 text-indigo-700'
        }`}>
          {type === 'Paper' ? 'Publication' : 'Project'}
        </div>
        {badge && (
          <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded">
            {badge}
          </span>
        )}
      </div>
      
      <h4 className="text-lg font-bold text-slate-800 mb-2 leading-snug">{title}</h4>
      
      <div className="mt-auto pt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-slate-600">
            {type === 'Paper' ? <User size={14} /> : <ExternalLink size={14} />}
            <span>{subtitle}</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-slate-900 bg-slate-50 p-2 rounded">
            <BookOpen size={14} className="text-blue-600" />
            <span>{meta}</span>
        </div>
      </div>
    </div>
  );
};