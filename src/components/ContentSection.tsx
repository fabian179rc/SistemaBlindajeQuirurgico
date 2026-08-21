import React from "react";
import { motion } from "framer-motion";
import { PackageOpen } from "lucide-react";

const modulos = [
  {
    emoji: "📘",
    title: "Vol 1: Foco Total",
    desc: "Atención y concentración: filtrar distracciones y procesar con claridad.",
  },
  {
    emoji: "📗",
    title: "Vol 2: Caja de Recuerdos",
    desc: "Memoria a corto y largo plazo, con juegos de asociación e historias.",
  },
  {
    emoji: "📙",
    title: "Vol 3: Fluidez Vital",
    desc: "Lenguaje y comunicación: vocabulario activo y conversación con seguridad.",
  },
  {
    emoji: "📕",
    title: "Vol 4: El Arquitecto",
    desc: "Funciones ejecutivas y lógica: decisiones y autonomía en casa.",
  },
  {
    emoji: "📓",
    title: "Vol 5: Precisión Diaria",
    desc: "Cálculo y razonamiento numérico, con propuestas de la vida real.",
  },
  {
    emoji: "📒",
    title: "Vol 6: Nexo Social",
    desc: "Cognición y conexión familiar: dinámicas de vínculo en grupo.",
  },
];

export function ContentSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/15 bg-[#1D3550] text-[#EDF2F6] font-semibold tracking-[0.18em] uppercase text-xs">
            <PackageOpen className="w-4 h-4 text-[#E0932E]" />
            Los 6 Volúmenes del Kit
          </span>
          <h2 className="font-heading font-bold text-[#EDF2F6] text-3xl md:text-5xl leading-tight mb-4">
            📚 Todas las Funciones Cognitivas en{" "}
            <span className="italic text-[#6FA8C9]">un Solo Kit</span>
          </h2>
          <p className="text-sm md:text-base text-[#93A7B8] leading-relaxed max-w-2xl mx-auto">
            6 volúmenes con diseño premium y más de 480 ejercicios listos
            para imprimir y aplicar en casa o en sesiones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-2 mb-8">
          {modulos.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-start gap-1.5 bg-[#16293B] border border-white/10 rounded-lg px-2 py-1.5 shadow-sm"
            >
              <span className="text-base flex-shrink-0" aria-hidden="true">
                {m.emoji}
              </span>
              <div>
                <span className="font-semibold text-[#EDF2F6] text-xs md:text-sm leading-tight block mb-0.5">
                  {m.title}
                </span>
                <span className="text-[#93A7B8] text-[11px] md:text-xs leading-snug">
                  {m.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
