import React from 'react';
import { ArrowRight, Star, Verified, Smile, FlaskConical, ChevronRight } from 'lucide-react';
import { Tab } from '../types';

interface HomeProps {
  onNavigate: (tab: Tab) => void;
  onServiceSelect: (id: string) => void;
}

export const HomeView: React.FC<HomeProps> = ({ onNavigate, onServiceSelect }) => {
  return (
    <div className="animate-fade-in pb-6">
      {/* Hero */}
      <div className="relative w-full h-80 rounded-b-[2rem] overflow-hidden shadow-lg mb-6 group">
        <img
          alt="Parque"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src="https://santanamendes.com.br/Site_Adestrador/Site_Adestrador_d0_img0.png"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
          <div className="inline-flex items-center gap-1 bg-orange-500/90 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded-full w-fit mb-2">
            <Verified size={12} />
            MÉTODO POSITIVO
          </div>
          <h1 className="text-3xl font-bold text-white leading-tight mb-2 font-brand">
            Seu cão, seu <span className="text-orange-400">melhor amigo</span>.
          </h1>
          <p className="text-slate-200 text-sm mb-4">
            Adestramento sem medo, baseado em ciência e afeto.
          </p>
          <button
            onClick={() => onNavigate('diagnosis')}
            className="bg-white text-orange-600 font-bold py-3 px-6 rounded-xl shadow-lg active:scale-95 transition flex items-center justify-center gap-2 w-fit"
          >
            Avaliação Gratuita
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Social Proof */}
      <div className="px-6 mb-8">
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                alt="Cliente"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src={`https://santanamendes.com.br/Site_Adestrador/Site_Adestrador_d0_img${i}.png`}
              />
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
              +500
            </div>
          </div>
          <div className="text-right">
            <div className="flex text-orange-400 text-sm justify-end gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-xs text-slate-400 font-medium">Famílias felizes em SP</p>
          </div>
        </div>
      </div>

      {/* Services List (Vertical) */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-800 font-brand">Serviços em Destaque</h2>
          <button
            onClick={() => onNavigate('services')}
            className="text-orange-500 text-sm font-semibold hover:text-orange-600"
          >
            Ver todos
          </button>
        </div>
        
        <div className="flex flex-col gap-3">
          {/* Item 1 - Puppy Class -> Educação de Filhotes */}
          <div
            onClick={() => onServiceSelect('puppy')}
            className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 active:scale-95 transition cursor-pointer group"
          >
            <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 relative">
               <img
                alt="Puppy"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                src="https://santanamendes.com.br/Site_Adestrador/Site_Adestrador_d0_img11.png"
              />
            </div>
            <div className="flex-1 min-w-0">
               <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">FILHOTES</span>
               <h3 className="font-bold text-slate-800 text-base mt-1 truncate">Educação de Filhotes</h3>
               <p className="text-xs text-slate-500 line-clamp-1">Socialização, mordidas e xixi certo.</p>
            </div>
            <div className="text-slate-300">
              <ChevronRight size={20} />
            </div>
          </div>

          {/* Item 2 - Obediência (Popular) */}
          <div
            onClick={() => onServiceSelect('obedience')}
            className="bg-white p-3 rounded-2xl border-2 border-orange-100 shadow-sm flex items-center gap-4 active:scale-95 transition cursor-pointer group relative overflow-hidden"
          >
             <div className="absolute -right-4 -top-4 bg-orange-100 w-16 h-16 rounded-full opacity-50 z-0"></div>
            <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 relative z-10">
               <img
                alt="Obediência"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                src="https://santanamendes.com.br/Site_Adestrador/Site_Adestrador_d0_img12.png"
              />
            </div>
            <div className="flex-1 min-w-0 z-10">
               <span className="text-[10px] font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">POPULAR</span>
               <h3 className="font-bold text-slate-800 text-base mt-1 truncate">Obediência Básica</h3>
               <p className="text-xs text-slate-500 line-clamp-1">Comandos e passeio.</p>
            </div>
            <div className="text-orange-300 z-10">
              <ChevronRight size={20} />
            </div>
          </div>

          {/* Item 3 - Comportamental */}
          <div
            onClick={() => onServiceSelect('behavior')}
            className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 active:scale-95 transition cursor-pointer group"
          >
            <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 relative">
               <img
                alt="Comportamental"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                src="https://santanamendes.com.br/Site_Adestrador/Site_Adestrador_d0_img13.png"
              />
            </div>
            <div className="flex-1 min-w-0">
               <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">REABILITAÇÃO</span>
               <h3 className="font-bold text-slate-800 text-base mt-1 truncate">Comportamental</h3>
               <p className="text-xs text-slate-500 line-clamp-1">Agressividade e medos.</p>
            </div>
            <div className="text-slate-300">
              <ChevronRight size={20} />
            </div>
          </div>

        </div>
      </div>

      {/* Methodology */}
      <div className="px-6 mb-8">
        <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden">
          <img
            alt="Método"
            className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20"
            src="https://santanamendes.com.br/Site_Adestrador/Site_Adestrador_d0_img10.png"
          />
          <div className="relative z-10">
            <h2 className="text-lg font-bold mb-4 font-brand">Nosso Método</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <Smile className="text-orange-400" size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Sem Medo</h3>
                  <p className="text-xs text-slate-400">Reforço positivo apenas.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <FlaskConical className="text-orange-400" size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Ciência</h3>
                  <p className="text-xs text-slate-400">Psicologia comportamental.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};