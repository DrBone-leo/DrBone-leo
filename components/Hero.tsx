import React from 'react';
import { Mail, Phone, MapPin, Award } from 'lucide-react';
import { BASIC_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <header className="relative bg-white border-b border-slate-200 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          
          {/* Avatar Area */}
          <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 relative">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl ring-2 ring-blue-100">
               {/* Note: This is a placeholder. User should replace with Page 1 Photo */}
              <img 
                src={BASIC_INFO.avatar} 
                alt={BASIC_INFO.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              PhD Candidate
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">
              {BASIC_INFO.name}
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              {BASIC_INFO.titles.map((title, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {title}
                </span>
              ))}
            </div>

            <p className="text-slate-600 mb-6 text-lg max-w-2xl leading-relaxed">
              专注于<b>智慧体育</b>、<b>运动医学</b>与<b>数智化康复</b>领域的研究与教学。
              致力于将计算机视觉、生成式AI与传统中医伤科结合，推动“医工互联”的创新发展。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
               <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <a href={`mailto:${BASIC_INFO.emails[0]}`} className="hover:text-blue-700 transition">{BASIC_INFO.emails[0]}</a>
               </div>
               <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>{BASIC_INFO.phones[0]}</span>
               </div>
               <div className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{BASIC_INFO.location}</span>
               </div>
               <div className="flex items-center justify-center md:justify-start gap-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>国家奖学金 / 四川省优秀毕业生</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};