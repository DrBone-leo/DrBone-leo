import React from 'react';
import { Target, UserCog, Code2, Trophy } from 'lucide-react';

interface ProjectDetailProps {
  title: string;
  category: string;
  goal: string;
  role: string;
  tech: string[];
  result: string;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ title, category, goal, role, tech, result }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded mb-2 inline-block">
            {category}
          </span>
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-slate-700">项目目标</div>
              <p className="text-sm text-slate-600 leading-relaxed">{goal}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <UserCog className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-slate-700">我的职责</div>
              <p className="text-sm text-slate-600 leading-relaxed">{role}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Code2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-slate-700">关键技术</div>
              <div className="flex flex-wrap gap-2 mt-1">
                {tech.map((t, idx) => (
                  <span key={idx} className="text-xs border border-slate-200 text-slate-600 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Trophy className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-slate-700">项目成果</div>
              <p className="text-sm text-slate-600 leading-relaxed">{result}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};