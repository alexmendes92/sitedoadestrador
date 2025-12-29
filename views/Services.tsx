import React from 'react';
import { ArrowRight, Check, Star, Video, Home, Shield, Zap, Sparkles } from 'lucide-react';

interface ServicesProps {
  onServiceSelect: (id: string) => void;
}

export const ServicesView: React.FC<ServicesProps> = ({ onServiceSelect }) => {
  const services = [
    {
      id: 'puppy',
      title: "Educação de Filhotes",
      subtitle: "A base perfeita para a vida toda",
      desc: "Evite maus hábitos antes que eles comecem. Socialização e higiene.",
      img: "https://santanamendes.com.br/Site_Adestrador/Site_Adestrador_d0_img11.png",
      icon: <Sparkles size={18} />,
      tag: "ESSENCIAL",
      tagColor: "bg-blue-500",
      features: ["Xixi e cocô no lugar certo", "Controle de mordidas", "Socialização segura"],
      popular: false
    },
    {
      id: 'obedience',
      title: "Obediência Básica",
      subtitle: "Controle e liberdade nos passeios",
      desc: "Seu cão focado em você, respondendo aos comandos mesmo com distrações.",
      img: "https://santanamendes.com.br/Site_Adestrador/Site_Adestrador_d0_img12.png",
      icon: <Zap size={18} />,
      tag: "MAIS PROCURADO",
      tagColor: "bg-orange-500",
      features: ["Andar junto sem puxar", "Comandos: Senta, Fica, Vem", "Controle de impulsos"],
      popular: true
    },
    {
      id: 'behavior',
      title: "Reabilitação",
      subtitle: "Modificação Comportamental",
      desc: "Tratamento especializado para agressividade, medos, fobias e ansiedade.",
      img: "https://santanamendes.com.br/Site_Adestrador/Site_Adestrador_d0_img13.png",
      icon: <Shield size={18} />,
      tag: "ESPECIALIZADO",
      tagColor: "bg-purple-500",
      features: ["Dessensibilização", "Redução de reatividade", "Recuperação de confiança"],
      popular: false
    },
    {
      id: 'online',
      title: "Consultoria Online",
      subtitle: "Orientações para qualquer lugar",
      desc: "Apoio profissional via vídeo para resolver questões pontuais de rotina.",
      img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      icon: <Video size={18} />,
      tag: "GLOBAL",
      tagColor: "bg-green-500",
      features: ["Flexibilidade de horário", "Análise de ambiente", "Material de apoio PDF"],
      popular: false
    }
  ];

  return (
    <div className="bg-slate-50 min-h-full pb-24 animate-fade-in">
      
      {/* Header Moderno */}
      <div className="bg-slate-900 pt-8 pb-12 px-6 rounded-b-[2.5rem] relative overflow-hidden shadow-xl mb-6">
        <div className="absolute top-0 right-0 p-8 opacity-10">
           <Home size={120} className="text-white transform rotate-12 translate-x-8 -translate-y-4" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
             <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
               Premium
             </span>
             <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
             </div>
          </div>
          <h2 className="text-3xl font-bold text-white font-brand mb-2">Soluções Caninas</h2>
          <p className="text-slate-300 text-sm font-medium leading-relaxed max-w-[80%]">
            Transforme a convivência com seu cão através do método positivo.
          </p>
        </div>
      </div>

      {/* Lista de Serviços */}
      <div className="px-5 space-y-5 -mt-8 relative z-20">
        {services.map((service, idx) => (
          <div 
            key={idx}
            onClick={() => onServiceSelect(service.id)}
            className={`bg-white rounded-3xl shadow-lg shadow-slate-200/50 overflow-hidden cursor-pointer active:scale-[0.98] transition-all duration-300 group relative border ${service.popular ? 'border-orange-500 ring-4 ring-orange-500/10' : 'border-slate-100'}`}
          >
            {/* Tag Badge */}
            <div className={`absolute top-4 right-4 ${service.tagColor} text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm z-10 uppercase tracking-wide`}>
              {service.tag}
            </div>

            {/* Image Area */}
            <div className="h-36 relative overflow-hidden">
               <img 
                 src={service.img} 
                 alt={service.title} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               <div className="absolute bottom-3 left-4 text-white flex items-center gap-2">
                  <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-none">{service.title}</h3>
                    <p className="text-[10px] text-slate-200 font-medium">{service.subtitle}</p>
                  </div>
               </div>
            </div>

            {/* Content Area */}
            <div className="p-5">
              <p className="text-xs text-slate-500 mb-4 leading-relaxed font-medium">
                {service.desc}
              </p>
              
              {/* Features Checklist */}
              <div className="bg-slate-50 rounded-xl p-3 mb-4 border border-slate-100">
                 <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                       <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                          <div className="bg-green-100 text-green-600 rounded-full p-0.5">
                             <Check size={10} strokeWidth={4} />
                          </div>
                          {feature}
                       </li>
                    ))}
                 </ul>
              </div>

              <button className={`w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors ${service.popular ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md shadow-orange-200' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                Ver detalhes e agendar
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="px-6 mt-8 mb-4">
         <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 text-center">
            <p className="text-xs text-orange-800 font-bold mb-2">Não sabe qual escolher?</p>
            <button 
               onClick={() => {
                 const nav = document.querySelector('nav button:nth-child(2)') as HTMLButtonElement; // Hacky way to trigger tab change if not passed as prop, ideally should be a prop
                 if(nav) nav.click();
               }}
               className="text-orange-600 text-sm font-bold underline decoration-2 underline-offset-2 hover:text-orange-700"
            >
               Faça o Diagnóstico Gratuito
            </button>
         </div>
      </div>

    </div>
  );
};