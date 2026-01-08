import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { TimelineItem } from './components/TimelineItem';
import { ResearchCard } from './components/ResearchCard';
import { ProjectDetail } from './components/ProjectDetail';
import { GraduationCap, Briefcase, Brain, BookCheck, Award, Medal, ChevronRight, Cpu } from 'lucide-react';
import { EDUCATION, WORK_EXPERIENCE, TEAM_SUPPORT, SMART_SPORTS_PROJECTS, PROJECTS, PUBLICATIONS, INTELLECTUAL_PROPERTY, AWARDS } from './constants';

function App() {
  const [activeTab, setActiveTab] = useState<'papers' | 'projects'>('papers');

  return (
    <div className="min-h-screen font-sans bg-slate-50 pb-20">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl h-14 flex items-center justify-between">
          <span className="font-bold text-lg text-slate-800">李伦宇 Resume</span>
          <div className="hidden md:flex gap-4 text-sm font-medium text-slate-600">
            <a href="#experience" className="hover:text-blue-600 transition">经历</a>
            <a href="#tech-projects" className="hover:text-blue-600 transition">项目</a>
            <a href="#research" className="hover:text-blue-600 transition">科研</a>
            <a href="#innovation" className="hover:text-blue-600 transition">创新</a>
            <a href="#awards" className="hover:text-blue-600 transition">荣誉</a>
          </div>
        </div>
      </nav>

      <Hero />

      {/* Education & Work Experience */}
      <Section id="experience" title="教育与工作经历" icon={<GraduationCap />}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
             <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-600 rounded-sm"></span> 学术背景
             </h3>
             <div className="flex flex-col">
                {EDUCATION.map((edu, idx) => (
                  <TimelineItem 
                    key={idx}
                    period={edu.period}
                    title={`${edu.school} | ${edu.college}`}
                    subtitle={`${edu.major} - ${edu.degree}`}
                    tags={edu.details}
                    isLast={idx === EDUCATION.length - 1}
                  />
                ))}
             </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-600 rounded-sm"></span> 教学工作
             </h3>
             <div className="flex flex-col">
                {WORK_EXPERIENCE.map((work, idx) => (
                  <TimelineItem 
                    key={idx}
                    period={work.period}
                    title={work.organization}
                    subtitle={work.role}
                    description={work.description}
                    tags={work.details}
                    isLast={idx === WORK_EXPERIENCE.length - 1}
                  />
                ))}
             </div>
          </div>
        </div>

        <div className="mt-12">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-600 rounded-sm"></span> 随队医疗保障经历
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {TEAM_SUPPORT.map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded border border-slate-200 flex items-start gap-3">
                        <Medal className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                            <div className="text-sm font-bold text-slate-500">{item.period}</div>
                            <div className="font-semibold text-slate-800">{item.organization}</div>
                            <div className="text-sm text-blue-700">{item.role}</div>
                        </div>
                    </div>
                ))}
             </div>
        </div>
      </Section>

      {/* Smart Sports Project Experience (New Section) */}
      <Section id="tech-projects" title="智慧体育项目经验" icon={<Cpu />}>
        <div className="mb-6">
          <p className="text-slate-600 text-lg">
            在<b>计算机视觉</b>、<b>生成式人工智能</b>及<b>智慧与数字医疗</b>领域的实践与探索。
          </p>
        </div>
        <div>
          {SMART_SPORTS_PROJECTS.map((project, idx) => (
            <ProjectDetail 
              key={idx}
              {...project}
            />
          ))}
        </div>
      </Section>

      {/* Research & Publications */}
      <Section id="research" title="科研课题与学术成果" icon={<BookCheck />} className="bg-white">
        <div className="flex gap-4 mb-8">
            <button 
                onClick={() => setActiveTab('papers')}
                className={`px-4 py-2 rounded-full font-medium text-sm transition ${
                    activeTab === 'papers' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
            >
                发表论文 ({PUBLICATIONS.length})
            </button>
            <button 
                onClick={() => setActiveTab('projects')}
                className={`px-4 py-2 rounded-full font-medium text-sm transition ${
                    activeTab === 'projects' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
            >
                主持/参与课题 ({PROJECTS.length})
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeTab === 'papers' && PUBLICATIONS.map((pub, idx) => (
                <ResearchCard 
                    key={idx}
                    type="Paper"
                    title={pub.title}
                    subtitle={pub.authors}
                    meta={`${pub.journal} (${pub.year})`}
                    badge={pub.type}
                />
            ))}
            {activeTab === 'projects' && PROJECTS.map((proj, idx) => (
                <ResearchCard 
                    key={idx}
                    type="Project"
                    title={proj.title}
                    subtitle={`角色: ${proj.role}`}
                    meta={proj.level || 'Research Project'}
                    badge={proj.role}
                />
            ))}
        </div>
      </Section>

      {/* Smart Sports & Innovation */}
      <Section id="innovation" title="知识产权与创新拓展" icon={<Brain />}>
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-2xl font-bold mb-2">医工互联 · 数智赋能</h3>
                    <p className="text-blue-200 max-w-2xl">
                        结合计算机视觉(CV)与生成式人工智能(AIGC)，开发针对运动损伤防护与康复的智能系统。
                        持有 3 项软件著作权与 1 项实用新型专利。
                    </p>
                </div>
                <div className="flex gap-3">
                    <span className="bg-white/10 px-3 py-1 rounded border border-white/20">AIGC</span>
                    <span className="bg-white/10 px-3 py-1 rounded border border-white/20">Computer Vision</span>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTELLECTUAL_PROPERTY.map((ip, idx) => (
                <div key={idx} className="group bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition">
                    <div className="h-40 bg-slate-200 overflow-hidden relative">
                         {/* Placeholder for PDF Certificates */}
                         <img src={ip.image} alt={ip.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" />
                         <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-white text-xs truncate">
                            PDF Page Ref: {ip.type === 'Patent' ? 'P22' : `P23-25`}
                         </div>
                    </div>
                    <div className="p-4">
                        <div className="text-xs font-bold text-blue-600 mb-1">{ip.type}</div>
                        <h4 className="font-bold text-slate-800 text-sm leading-tight mb-2 h-10 overflow-hidden">{ip.name}</h4>
                        <div className="text-xs text-slate-500 font-mono">{ip.number}</div>
                    </div>
                </div>
            ))}
        </div>
      </Section>

      {/* Awards */}
      <Section id="awards" title="获奖荣誉" icon={<Award />} className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AWARDS.map((award, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4">
                        <Award size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{award.name}</h4>
                    <span className="text-sm text-slate-500">{award.year} · {award.level}</span>
                </div>
            ))}
        </div>
      </Section>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-white text-2xl font-bold mb-6">Open to PhD Opportunities</h2>
            <p className="max-w-xl mx-auto mb-8">
                Looking forward to contributing to Smart Sports and Sports Medicine research.
            </p>
            <div className="flex justify-center gap-8 mb-8">
                <a href="mailto:leolly007@163.com" className="hover:text-white transition flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">@</div>
                    leolly007@163.com
                </a>
            </div>
            <div className="text-xs border-t border-slate-800 pt-8">
                © {new Date().getFullYear()} Li Lunyu. All rights reserved. Content based on provided PDF data.
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;