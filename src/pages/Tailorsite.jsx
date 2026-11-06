import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MessageCircle,
  Sparkles,
  LayoutDashboard,
  Boxes,
  Users,
  CalendarClock,
  Wallet,
  Factory,
  Check,
  ArrowRight,
} from "lucide-react";
import { whatsappLink } from "../data/content.js";

const systems = [
  {
    id: 1,
    icon: Boxes,
    title: "Gestão de Estoque",
    description:
      "Controle total de entradas, saídas, inventário e alertas automáticos de reposição. Integração com leitores de código de barras e balanças.",
    features: [
      "Inventário em tempo real",
      "Alertas de estoque mínimo",
      "Relatórios de giro e perdas",
    ],
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    icon: Users,
    title: "CRM & Atendimento",
    description:
      "Centralize leads, histórico de conversas e funil de vendas. Automatize follow-ups e integre com WhatsApp Business.",
    features: [
      "Funil visual de vendas",
      "Automação de follow-up",
      "Histórico unificado por cliente",
    ],
    stack: ["Next.js", "TypeScript", "Redis"],
  },
  {
    id: 3,
    icon: CalendarClock,
    title: "Agendamento & Reservas",
    description:
      "Sistema de agenda para clínicas, salões e prestadores de serviço. Confirmação automática, lembretes e gestão de profissionais.",
    features: [
      "Agenda multi-profissional",
      "Confirmação por WhatsApp",
      "Controle de horários e faltas",
    ],
    stack: ["React", "Firebase", "Tailwind"],
  },
  {
    id: 4,
    icon: Wallet,
    title: "Gestão Financeira",
    description:
      "Contas a pagar e receber, fluxo de caixa, conciliação bancária e DRE simplificado. Dashboards prontos para decisão.",
    features: [
      "Fluxo de caixa projetado",
      "Conciliação bancária",
      "DRE e relatórios fiscais",
    ],
    stack: ["Next.js", "Prisma", "PostgreSQL"],
  },
  {
    id: 5,
    icon: Factory,
    title: "Ordens de Produção",
    description:
      "Acompanhe ordens de serviço e produção do pedido à entrega. Controle de insumos, etapas e custo por lote.",
    features: [
      "Kanban de produção",
      "Rastreio de insumos",
      "Custo real por lote",
    ],
    stack: ["React", "NestJS", "MySQL"],
  },
  {
    id: 6,
    icon: LayoutDashboard,
    title: "Painel Administrativo",
    description:
      "Dashboard central com KPIs personalizados, permissões por usuário e exportação de relatórios em PDF e Excel.",
    features: [
      "KPIs personalizáveis",
      "Permissões granulares",
      "Exportação PDF / Excel",
    ],
    stack: ["Next.js", "Recharts", "Tailwind"],
  },
];

const perks = [
  "Feito sob medida para o seu processo",
  "Treinamento e suporte inclusos",
  "Hospedagem e manutenção contínua",
  "Integração com sistemas já existentes",
];

export default function TailorMade() {
  return (
    <div className="min-h-screen bg-[#05030a] text-[#f5f3ff] p-4 sm:p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Botão Voltar */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/50 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group cursor-pointer"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Voltar para o início
          </Link>
        </div>

        {/* Cabeçalho */}
        <div className="flex flex-col mb-10 text-center md:text-left">
          <span className="text-[11px] md:text-xs font-bold tracking-[0.25em] text-amber-400 uppercase mb-2">
            Soluções Sob Medida
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="text-amber-500">&lt;</span> Sistemas de Gestão{" "}
            <span className="text-amber-500">/&gt;</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl text-sm md:text-base">
            Desenvolvemos sistemas personalizados para resolver o seu processo —
            do estoque ao financeiro, da produção ao atendimento. Nada de
            planilhas soltas: uma plataforma só sua, pensada para o seu negócio.
          </p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-medium w-fit mx-auto md:mx-0 shadow-[0_0_15px_rgba(251,146,60,0.1)]"
          >
            <Sparkles size={16} />
            <span>Orçamento gratuito e protótipo em até 7 dias</span>
          </motion.div>
        </div>

        {/* Grid de Sistemas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {systems.map((system, index) => {
            const Icon = system.icon;
            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0px 10px 40px -10px rgba(251, 146, 60, 0.3)",
                }}
                className="group relative flex flex-col bg-[#0a0714]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-7 overflow-hidden hover:border-amber-500/40 transition-colors shadow-lg"
              >
                {/* Brilho no hover */}
                <div className="absolute inset-0 bg-linear-to-br from-amber-500/0 via-amber-500/0 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Ícone */}
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300">
                  <Icon size={26} />
                </div>

                {/* Título e descrição */}
                <h2 className="relative text-lg md:text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {system.title}
                </h2>
                <p className="relative text-sm text-gray-400 leading-relaxed mb-5">
                  {system.description}
                </p>

                {/* Features */}
                <ul className="relative flex flex-col gap-2 mb-5">
                  {system.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <Check
                        size={16}
                        className="text-amber-500 shrink-0 mt-0.5"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="relative flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {system.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-md text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bloco de diferenciais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          <div className="bg-[#0a0714]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              <span className="text-amber-500">&lt;</span> Por que sob medida?{" "}
              <span className="text-amber-500">/&gt;</span>
            </h3>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Softwares prontos obrigam o seu negócio a se adaptar a eles.
              Nossos sistemas fazem o contrário: são construídos em cima do seu
              processo, do seu vocabulário e das suas regras. O resultado é
              menos retrabalho, mais adoção pela equipe e um ROI muito mais
              rápido.
            </p>
          </div>

          <div className="bg-[#0a0714]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              <span className="text-amber-500">&lt;</span> O que está incluso{" "}
              <span className="text-amber-500">/&gt;</span>
            </h3>
            <ul className="flex flex-col gap-3">
              {perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-3 text-sm md:text-base text-gray-300"
                >
                  <span className="w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-amber-400" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-20 relative overflow-hidden bg-linear-to-br from-amber-500/10 via-[#0a0714]/80 to-orange-600/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10 md:p-14 text-center flex flex-col items-center gap-5 group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2 shadow-[0_0_20px_rgba(251,146,60,0.15)]">
            <LayoutDashboard size={32} className="md:w-10 md:h-10" />
          </div>

          <h2 className="relative text-2xl md:text-4xl font-bold tracking-tight max-w-2xl text-white">
            Seu processo ainda depende de planilhas?
          </h2>

          <p className="relative text-base md:text-lg text-gray-300 max-w-2xl">
            Conte pra gente como o seu negócio funciona hoje. Em poucos dias
            apresentamos um protótipo navegável e um orçamento fechado, sem
            compromisso.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer external"
            className="relative z-10 mt-3"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(251, 146, 60, 0.55)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-amber-500 text-black text-base font-bold rounded-full shadow-[0_0_15px_rgba(251,146,60,0.5)] hover:bg-amber-400 transition-colors cursor-pointer"
            >
              <MessageCircle size={20} />
              Solicitar orçamento
            </motion.button>
          </a>
        </motion.div>

        {/* Link cruzado para outras páginas */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/sites"
            className="group flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/40 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-all"
          >
            <span>Ver também: Projetos Web</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            to="/modelos-3d"
            className="group flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/40 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-all"
          >
            <span>Ver também: Modelos 3D</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
