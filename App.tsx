import React, { useState } from 'react';
import { PawPrint, MessageCircle } from 'lucide-react';
import { BottomNav } from './components/BottomNav';
import { HomeView } from './views/Home';
import { QuizView } from './views/Quiz';
import { ServicesView } from './views/Services';
import { ContactView } from './views/Contact';
import { BreedsView } from './views/Breeds';
import { ServiceDetailView } from './views/ServiceDetail';
import { Tab, QuizState, ServiceDetailData } from './types';

// Centralized Data for Services (could be in a separate file, but kept here for simplicity of modification)
const SERVICES_DB: Record<string, ServiceDetailData> = {
  puppy: {
    id: 'puppy',
    title: "Educação de Filhotes",
    description: "Socialização segura, controle de mordidas e o fim do xixi errado.",
    fullDescription: "A fase de filhote é a mais crítica para o desenvolvimento do cão. Nosso programa foca em prevenir problemas futuros, criando uma base sólida de confiança e comunicação. Ensinamos seu filhote a gostar de ser manuseado, a fazer as necessidades no lugar certo e a interagir bem com o mundo.",
    image: "https://santanamendes.com.br/Site_Adestrador/Site_Adestrador_d0_img11.png",
    tag: "FILHOTES",
    tagColor: "blue",
    benefits: [
      "Educação Sanitária (Xixi e Cocô)",
      "Inibição de mordidas",
      "Socialização com pessoas e barulhos",
      "Prevenção de ansiedade de separação"
    ],
    duration: "8 aulas",
    location: "Domiciliar"
  },
  obedience: {
    id: 'obedience',
    title: "Obediência Básica",
    description: "Comandos essenciais e foco.",
    fullDescription: "Ter um cão obediente significa ter mais liberdade. Ensinamos comandos funcionais que servem para a vida real, não apenas truques de circo. Seu cão aprenderá a manter o foco em você mesmo com distrações, tornando os passeios e a convivência em casa muito mais tranquilos.",
    image: "https://santanamendes.com.br/Site_Adestrador/Site_Adestrador_d0_img12.png",
    tag: "POPULAR",
    tagColor: "orange",
    popular: true,
    benefits: [
      "Andar junto sem puxar a guia",
      "Comandos: Senta, Fica, Vem",
      "Controle de impulsos (não pular)",
      "Melhora na comunicação dono-cão"
    ],
    duration: "10 aulas",
    location: "Domiciliar e Parque"
  },
  behavior: {
    id: 'behavior',
    title: "Comportamental",
    description: "Reabilitação de agressividade e medos.",
    fullDescription: "Problemas comportamentais sérios exigem conhecimento técnico aprofundado. Trabalhamos a modificação comportamental baseada em desensibilização e contracondicionamento. Ideal para cães reativos, medrosos ou com histórico de agressividade.",
    image: "https://santanamendes.com.br/Site_Adestrador/Site_Adestrador_d0_img13.png",
    tag: "REABILITAÇÃO",
    tagColor: "purple",
    benefits: [
      "Análise funcional do comportamento",
      "Redução de reatividade",
      "Tratamento de fobias e medos",
      "Reconstrução do vínculo de confiança"
    ],
    duration: "Sob avaliação",
    location: "Domiciliar"
  },
  online: {
    id: 'online',
    title: "Consultoria Online",
    description: "Orientações via videochamada.",
    fullDescription: "Mora longe ou precisa de orientações pontuais? A consultoria online é perfeita para resolver questões específicas, tirar dúvidas sobre rotina, adaptação de novos cães ou correções simples que dependem mais da mudança de atitude do tutor.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    tag: "ONLINE",
    tagColor: "green",
    benefits: [
      "Atendimento para qualquer lugar do mundo",
      "Gravação da aula para revisão",
      "Material de apoio em PDF",
      "Flexibilidade de horário"
    ],
    duration: "1 hora/sessão",
    location: "Google Meet / Zoom"
  }
};

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  
  const [quizState, setQuizState] = useState<QuizState>({
    step: 1,
    name: '',
    age: '',
    problem: '',
    breed: '',
    size: ''
  });

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setSelectedServiceId(null); // Reset detail view when changing tabs
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  };

  const handleServiceSelect = (id: string) => {
    setSelectedServiceId(id);
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  };

  const renderContent = () => {
    // If a service is selected, show detail view (overlays everything else within the tab)
    if (selectedServiceId && SERVICES_DB[selectedServiceId]) {
      return (
        <ServiceDetailView 
          service={SERVICES_DB[selectedServiceId]} 
          onBack={() => setSelectedServiceId(null)} 
        />
      );
    }

    switch (activeTab) {
      case 'home':
        return <HomeView onNavigate={handleTabChange} onServiceSelect={handleServiceSelect} />;
      case 'diagnosis':
        return <QuizView quizState={quizState} setQuizState={setQuizState} />;
      case 'breeds':
        return <BreedsView />;
      case 'services':
        return <ServicesView onServiceSelect={handleServiceSelect} />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onNavigate={handleTabChange} onServiceSelect={handleServiceSelect} />;
    }
  };

  return (
    // Outer container: Flex on desktop to center, block on mobile
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-slate-900 sm:p-8">
      
      {/* 
        App Container logic:
        - Mobile: w-full, h-[100dvh], no border, no rounded corners.
        - Desktop (sm+): max-w-md, fixed height, rounded corners, border (phone frame).
      */}
      <div className="relative w-full sm:max-w-md h-[100dvh] sm:h-[850px] bg-slate-50 sm:rounded-[2.5rem] sm:border-8 border-slate-900 shadow-2xl overflow-hidden flex flex-col transition-all duration-300">
        
        {/* Header (Sticky) - Added sm:rounded-t-[2rem] to match container corners internally */}
        <header className="bg-white/95 backdrop-blur-sm px-4 py-3 shadow-sm z-40 flex justify-between items-center sticky top-0 shrink-0 sm:rounded-t-[2rem]">
          <div className="flex items-center gap-2">
            <PawPrint className="text-orange-500" size={28} />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-900 font-brand leading-none">Carlos Eduardo</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mt-0.5">Adestramento</span>
            </div>
          </div>
          <button 
            onClick={() => handleTabChange('contact')}
            className="bg-slate-100 p-2 rounded-full text-slate-600 hover:bg-slate-200 transition active:scale-95"
          >
            <MessageCircle size={20} />
          </button>
        </header>

        {/* Main Content */}
        <main 
          id="main-content" 
          className="flex-1 overflow-y-auto overflow-x-hidden relative bg-slate-50 no-scrollbar"
        >
          {renderContent()}
        </main>

        {/* Bottom Nav - Only show if NO service is selected to give more screen space to details */}
        {!selectedServiceId && (
           <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
        )}
        
      </div>
    </div>
  );
}

export default App;