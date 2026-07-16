import React, { useState } from 'react';
import {
  Heart,
  ShieldCheck,
  FileText,
  Image as ImageIcon,
  Sparkles,
  CheckCircle2,
  MapPin,
  Sparkle,
  ExternalLink,
  Coins,
  ArrowUpRight,
  FolderOpen
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('historia');
  const [activePhoto, setActivePhoto] = useState(0);

  // Seus links de integração e vaquinha
  const linkVaquinha = "https://www.vakinha.com.br/vaquinha/ajude-a-cachorrinha-miki";
  const linkGoogleSheets = "https://docs.google.com/spreadsheets/d/SEU_ID_DA_PLANILHA/edit?usp=sharing";
  const linkPastaComprovantes = "https://drive.google.com/drive/folders/SEU_ID_DO_DRIVE?usp=sharing";

  // Dados atualizados da Miki
  const totalGasto = 685;
  const totalArrecadado = 577;
  const saldoLiquidoEstimado = 535;
  const diferencaProtetor = totalGasto - saldoLiquidoEstimado;

  // Fotos reais da Miki estruturadas com links de renderização direta do Drive
  const midias = [
    {
      url: "https://lh3.googleusercontent.com/u/0/d/1BfCHM7nK9CshgS0yE-Y7H_OIn0mFzLgU",
      legenda: "Miki toda elegante de pé na parede mostrando que é uma verdadeira lady! 🐾",
      categoria: "atual"
    },
    {
      url: "https://lh3.googleusercontent.com/u/0/d/1ODP7oAoGfPoup3iUBD12doC8Zt-mPg1k",
      legenda: "Miki toda serelepe e limpinha pós-banho brincando no jardim de casa ☀️",
      categoria: "atual"
    },
    {
      url: "https://lh3.googleusercontent.com/u/0/d/12S8O6DnJPhJhkEw8JR0-MYb6cHLG8J6N",
      legenda: "Olhar carinhoso esperando um cafuné na área de casa 🥺",
      categoria: "atual"
    },
    {
      url: "https://lh3.googleusercontent.com/u/0/d/1kf6qCEHv_35CuhH56uqzZGcpnGix6HVa",
      legenda: "O rostinho mais doce de Fortaleza bem pertinho da câmera 🥰",
      categoria: "atual"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-50 text-stone-700 selection:bg-brand-100 antialiased pb-32">

      {/* Detalhes Artísticos de Fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-200/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[450px] -left-12 w-80 h-80 bg-accent-50/70 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header do Site */}
      <header className="pt-12 pb-6 px-5 max-w-5xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 bg-brand-100 text-brand-900 border border-brand-200 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-xs">
          <MapPin className="w-3.5 h-3.5 text-brand-500 animate-bounce" /> Fortaleza, CE • Jardim Guanabara
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-brand-900 leading-[1.1]">
          Adote a <span className="relative inline-block text-brand-500">
            Miki
            <span className="absolute -bottom-1 left-0 w-full h-[6px] bg-brand-200 -z-10 rounded-full" />
          </span> 🐾
        </h1>

        <p className="text-sm sm:text-base text-stone-650 max-w-md mx-auto leading-relaxed">
          Uma companheira dócil de 2 anos, resgatada e cheia de carinho para dar. Totalmente saudável e recuperada.
        </p>
      </header>

      {/* Grid Responsivo Inteligente (Mobile: 1 coluna, Desktop: 2 colunas lado a lado) */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-4">

        {/* COLUNA DA ESQUERDA (Desktop: Galeria Fixa ou Destaque Permanente) */}
        <div className="md:col-span-5 space-y-6 md:sticky md:top-6">
          <div className="bg-white border border-brand-200/60 rounded-[2rem] p-4 shadow-xs">
            {/* Aqui aplicamos o pulo do gato:
              - 'object-top' garante que o topo da imagem seja priorizado (cortando o chão molhado/sujo na base)
              - 'brightness-105 contrast-101' clareia sutilmente as fotos sem estourar as cores
            */}
            <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-brand-50 relative">
              <img
                src={midias[activePhoto].url}
                alt="Galeria Miki"
                className="w-full h-full object-cover object-top brightness-105 contrast-[1.01] transition-all duration-300"
              />
              <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-brand-900 text-[10px] uppercase font-black tracking-wider px-3 py-1 rounded-full border border-brand-200">
                ✨ {midias[activePhoto].categoria === 'vet' ? 'Consulta' : 'Dia a Dia'}
              </span>
            </div>

            <p className="mt-3 text-xs text-center italic text-stone-500 leading-relaxed bg-brand-50/50 py-2.5 px-4 rounded-xl border border-brand-100">
              "{midias[activePhoto].legenda}"
            </p>

            {/* Miniaturas */}
            <div className="grid grid-cols-4 gap-2 mt-3">
              {midias.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhoto(idx)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${activePhoto === idx
                      ? 'border-brand-500 scale-95 ring-4 ring-brand-500/10'
                      : 'border-transparent opacity-65 hover:opacity-100'
                    }`}
                >
                  <img src={item.url} className="w-full h-full object-cover object-top" alt="thumbnail" />
                </button>
              ))}
            </div>
          </div>

          {/* Card de Arrecadação Rápida (Vaquinha ao Vivo) */}
          <div className="bg-gradient-to-br from-brand-100 to-brand-50 border border-brand-200 rounded-[2rem] p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-brand-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-500" /> Vaquinha Online
              </h3>
              <span className="text-[10px] font-bold bg-brand-500 text-white px-2.5 py-1 rounded-full animate-pulse">
                Ao Vivo
              </span>
            </div>

            {/* Barra de Progresso Real */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-brand-900">
                <span>R$ {totalArrecadado},00 arrecadados</span>
                <span>Meta: R$ {totalGasto},00</span>
              </div>
              <div className="w-full h-3 bg-white/60 rounded-full overflow-hidden border border-brand-200/50">
                <div
                  className="h-full bg-gradient-to-r from-brand-500 to-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((totalArrecadado / totalGasto) * 100, 100)}%` }}
                />
              </div>
            </div>

            <a
              href={linkVaquinha}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-md transition-colors text-xs w-full"
            >
              Apoiar Vaquinha Oficial <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* COLUNA DA DIREITA (Navegação de Conteúdo Dinâmico) */}
        <div className="md:col-span-7 space-y-6">

          {/* Navegação por Abas para Mobile e Desktop */}
          <div className="flex p-1.5 bg-[#FAF6F0]/90 border border-[#EDE7DF] rounded-2xl shadow-xs sticky top-4 z-10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('historia')}
              className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${activeTab === 'historia'
                  ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-xs scale-[1.01]'
                  : 'text-stone-500 hover:bg-[#EFEAE2]'
                }`}
            >
              <Heart className={`w-4 h-4 ${activeTab === 'historia' ? 'fill-current' : ''}`} />
              Conhecer ela
            </button>

            <button
              onClick={() => setActiveTab('prestacao')}
              className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${activeTab === 'prestacao'
                  ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-xs scale-[1.01]'
                  : 'text-stone-500 hover:bg-[#EFEAE2]'
                }`}
            >
              <Coins className="w-4 h-4" />
              Gastos & Recibos
            </button>
          </div>

          {/* ABA 1: HISTÓRIA */}
          {activeTab === 'historia' && (
            <div className="space-y-6 animate-fadeIn">

              <div className="bg-white border border-brand-200/60 rounded-[2rem] p-6 shadow-xs space-y-5">
                <div className="flex items-center gap-2 text-brand-500">
                  <Sparkle className="w-5 h-5 fill-current" />
                  <h2 className="text-xl font-black text-brand-900">História e Personalidade</h2>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-stone-600">
                  A Miki foi encontrada vagando e pedindo ajuda pelas calçadas do Jardim Guanabara. Rapidamente conquistou nossos corações por ser extremamente dócil, carinhosa e muito silenciosa (ela quase nunca late!). Ela adora uma rotina de carinho, se comporta super bem em passeios de carro e aceita comprimidos e sachês de tratamento sem dar nenhuma dor de cabeça.
                </p>

                {/* Ficha Técnica Corrigida (2 anos e 12kg) */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 bg-brand-50 border border-brand-100 rounded-xl">
                    <span className="text-[10px] text-brand-600 uppercase font-bold tracking-wider block mb-0.5">Idade</span>
                    <strong className="text-sm text-brand-900">~2 Anos (Jovem)</strong>
                  </div>
                  <div className="p-3 bg-brand-50 border border-brand-100 rounded-xl">
                    <span className="text-[10px] text-brand-600 uppercase font-bold tracking-wider block mb-0.5">Porte</span>
                    <strong className="text-sm text-brand-900">Médio (~12kg)</strong>
                  </div>
                  <div className="p-3 bg-brand-50 border border-brand-100 rounded-xl">
                    <span className="text-[10px] text-brand-600 uppercase font-bold tracking-wider block mb-0.5">Raça</span>
                    <strong className="text-sm text-brand-900">SRD (Vira-lata linda)</strong>
                  </div>
                  <div className="p-3 bg-brand-50 border border-brand-100 rounded-xl">
                    <span className="text-[10px] text-brand-600 uppercase font-bold tracking-wider block mb-0.5">Temperamento</span>
                    <strong className="text-sm text-brand-900">Super Dócil & Calma</strong>
                  </div>
                </div>
              </div>

              {/* Checklist de Saúde Clínico Reabilitada */}
              <div className="bg-white border border-brand-200/60 rounded-[2rem] p-6 shadow-xs space-y-5">
                <h2 className="text-lg font-bold text-brand-900 flex items-center gap-2.5">
                  <span className="p-1.5 bg-accent-50 text-accent-500 rounded-xl">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  Check-up Clínico Concluído
                </h2>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex gap-3 items-center p-3 bg-accent-50/30 rounded-xl border border-accent-500/10">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0" />
                    <span><strong className="text-brand-900">Hemograma Completo:</strong> Realizado! Os resultados mostram que ela está super saudável, forte e com excelentes índices.</span>
                  </div>
                  <div className="flex gap-3 items-center p-3 bg-accent-50/30 rounded-xl border border-accent-500/10">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0" />
                    <span><strong className="text-brand-900">Testes rápidos:</strong> Negativos para Calazar (Leishmaniose) e Erliquiose (Doença do Carrapato).</span>
                  </div>
                  <div className="flex gap-3 items-center p-3 bg-accent-50/30 rounded-xl border border-accent-500/10">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0" />
                    <span><strong className="text-brand-900">Vermífugo OK:</strong> Protocolo TopDog completo contra endoparasitas realizado com sucesso.</span>
                  </div>
                  <div className="flex gap-3 items-center p-3 bg-accent-50/30 rounded-xl border border-accent-500/10">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0" />
                    <span><strong className="text-brand-900">Antiparasitário OK:</strong> Protegida de forma prolongada com dose única de Wellpet.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ABA 2: PRESTAÇÃO DE CONTAS */}
          {activeTab === 'prestacao' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white border border-brand-200/60 rounded-[2rem] p-6 shadow-xs space-y-5">

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold text-brand-900 flex items-center gap-2">
                      <Coins className="w-5 h-5 text-brand-500" /> Planilha de Custos do Resgate
                    </h2>
                    <p className="text-xs text-stone-500">
                      Entradas e saídas reais detalhadas para transparência completa.
                    </p>
                  </div>

                  {/* Link da Planilha no Sheets */}
                  <a
                    href={linkGoogleSheets}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-brand-500 hover:text-brand-600 font-bold bg-brand-50 py-2 px-3.5 rounded-xl border border-brand-100"
                  >
                    Google Sheets <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Planilha Interna Estilizada */}
                <div className="border border-brand-100 rounded-2xl overflow-hidden text-xs bg-brand-50/20">
                  <div className="p-3.5 bg-brand-100/50 font-bold text-brand-900 flex justify-between border-b border-brand-100">
                    <span>Descrição do Procedimento</span>
                    <span>Valor Pago</span>
                  </div>

                  <div className="divide-y divide-brand-100/40">
                    <div className="p-3.5 flex justify-between">
                      <span>1ª Consulta + Teste Rápido Calazar + Wellpet</span>
                      <span className="font-semibold text-stone-850">R$ 230,00</span>
                    </div>
                    <div className="p-3.5 flex justify-between">
                      <span>2ª Consulta + Hemograma Completo + Erliquiose</span>
                      <span className="font-semibold text-stone-850">R$ 360,00</span>
                    </div>
                    <div className="p-3.5 flex justify-between">
                      <span>Shampoo Veterinário Clorexidina + Banho especializado</span>
                      <span className="font-semibold text-stone-850">R$ 95,00</span>
                    </div>

                    <div className="p-3.5 flex justify-between bg-brand-100/20 text-brand-900 font-bold">
                      <span>Total das Despesas Clínicas</span>
                      <span>R$ {totalGasto},00</span>
                    </div>
                    <div className="p-3.5 flex justify-between bg-emerald-500/5 text-emerald-600 font-bold">
                      <span>Arrecadado Líquido na Vaquinha</span>
                      <span>- R$ {saldoLiquidoEstimado},00</span>
                    </div>
                    <div className="p-3.5 flex justify-between bg-stone-50 text-stone-500 italic">
                      <span>Custos restantes cobertos pelo Protetor</span>
                      <span>R$ {diferencaProtetor},00</span>
                    </div>
                  </div>
                </div>

                {/* Pasta de Comprovantes */}
                <div className="p-4 bg-brand-50 border border-brand-100 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-3 items-start">
                    <FolderOpen className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-brand-900">Auditoria & Comprovantes</h4>
                      <p className="text-[11px] text-stone-550 leading-relaxed">
                        Acesse as notas fiscais, exames laboratoriais de sangue e recibos originais da clínica na nuvem.
                      </p>
                    </div>
                  </div>

                  <a
                    href={linkPastaComprovantes}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-brand-500 hover:bg-brand-600 text-white font-extrabold py-2.5 px-4 rounded-xl text-xs whitespace-nowrap"
                  >
                    Abrir Comprovantes <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>

      {/* Barra Inferior de Ação (Estilo Mobile Fixo e Desktop Confortável) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-brand-200/50 z-40">
        <div className="max-w-md mx-auto flex flex-col gap-2">
          <a
            href="https://wa.me/5585999999999?text=Ol%C3%A1!%20Visitei%20a%20p%C3%A1gina%20da%20Miki%20e%20gostaria%20de%20conversar%20sobre%20o%20processo%20de%20ado%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 active:scale-98 text-white font-black py-4 px-6 rounded-2xl shadow-lg shadow-brand-500/20 text-sm transition-transform duration-100"
          >
            <Heart className="w-5 h-5 fill-current" /> Conversar para Adotar a Miki
          </a>
          <p className="text-[10px] text-center text-stone-400">
            * Fortaleza/CE • Adoção 100% gratuita e cheia de amor
          </p>
        </div>
      </div>
    </div>
  );
}