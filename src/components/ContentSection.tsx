import React from "react";
import { motion } from "framer-motion";
import { PackageOpen } from "lucide-react";

const modulos = [
  {
    emoji: "🌌",
    title: "Tomo 1: El Planeta Dinámico",
    desc: "Origen, historia y estructura interna de la Tierra a través del tiempo geológico.",
  },
  {
    emoji: "🔬",
    title: "Tomo 2: El Código de las Rocas",
    desc: "Minerales, rocas ígneas, sedimentarias y metamórficas, y el ciclo de las rocas.",
  },
  {
    emoji: "🌍",
    title: "Tomo 3: Arquitectura de la Tierra",
    desc: "Tectónica de placas, volcanes, terremotos y movimiento continental.",
  },
  {
    emoji: "🏔️",
    title: "Tomo 4: Escultores del Paisaje",
    desc: "Meteorización, erosión, ríos, glaciares, costas y desiertos.",
  },
  {
    emoji: "⚠️",
    title: "Tomo 5: Geología en Acción",
    desc: "Agua subterránea, suelos, riesgos naturales y geología aplicada.",
  },
  {
    emoji: "💎",
    title: "Tomo 6: Riqueza y Futuro",
    desc: "Recursos minerales, energía, minería y transición energética.",
  },
];

export function ContentSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/15 bg-[#1D3550] text-[#EDF2F6] font-semibold tracking-[0.18em] uppercase text-xs">
            <PackageOpen className="w-4 h-4 text-[#E0932E]" />
            Los 6 Tomos de la Colección
          </span>
          <h2 className="font-heading font-bold text-[#EDF2F6] text-3xl md:text-5xl leading-tight mb-4">
            🌎 Toda la Geología en{" "}
            <span className="italic text-[#6FA8C9]">un Solo Sistema</span>
          </h2>
          <p className="text-sm md:text-base text-[#93A7B8] leading-relaxed max-w-2xl mx-auto">
            6 tomos digitales con teoría clara, esquemas y contexto
            hispanoamericano, listos para adaptar a tu clase.
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
