import React from "react";
import { motion } from "framer-motion";
const bonuses = [
  {
    num: 1,
    image: "b1.webp",
    title: "Banco de Esquemas y Cuadros",
    desc: "Plantillas visuales, mapas conceptuales y síntesis para explicar el ciclo de las rocas, los bordes de placa, los volcanes y más.",
  },
  {
    num: 2,
    image: "b2.webp",
    title: "Guías de Trabajo para Clase",
    desc: "Consignas listas para analizar imágenes, clasificar rocas, leer mapas y debatir en grupo.",
  },
  {
    num: 3,
    image: "b3.webp",
    title: "Propuestas de Evaluación y Rúbricas",
    desc: "Modelos de preguntas, criterios de corrección y rúbricas para medir comprensión y aplicación.",
  },
  {
    num: 4,
    image: "b4.webp",
    title: "Gestión del Aula: Conflictos, Conducta y Motivación",
    desc: "Estrategias para motivar estudiantes, manejar interrupciones y sostener clases más fluidas.",
  },
  {
    num: 5,
    image: "b5.webp",
    title: "100 Preguntas Curiosas sobre el Planeta",
    desc: "Preguntas disparadoras en 4 capítulos para abrir clases, generar debate y despertar asombro.",
  },
];

export function BonusesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-[#EDF2F6] text-3xl md:text-5xl leading-tight mb-4">
            5 Bonos Complementarios{" "}
            <span className="italic text-[#6FA8C9]">de Aplicación Inmediata</span>
          </h2>
          <p className="text-sm md:text-base text-[#93A7B8] leading-relaxed max-w-2xl mx-auto">
            Cada bono resuelve una necesidad concreta: planificar,
            explicar, trabajar, evaluar, gestionar el aula y despertar
            curiosidad.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-5">
          {bonuses.map((b, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.08,
              }}
              className="bg-[#16293B] border border-white/10 rounded-2xl p-2 sm:p-3 shadow-sm w-[calc(50%-0.3125rem)] sm:w-[calc(50%-0.625rem)]"
            >
              <div className="relative rounded-xl overflow-hidden mb-2 sm:mb-3 h-40 sm:h-64 bg-[#091420]">
                <img
                  src={`${import.meta.env.BASE_URL}${b.image}`}
                  alt={`Bono ${b.num}: ${b.title}`}
                  width={900}
                  height={604}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 bg-rose-500 text-white font-bold text-[8px] sm:text-[11px] tracking-wide uppercase px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded sm:rounded-md shadow-sm">
                  Bono {b.num}
                </span>
                <span className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 inline-flex items-center gap-0.5 bg-emerald-600 text-white font-bold text-[8px] sm:text-[11px] tracking-wide uppercase px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded sm:rounded-md shadow-sm">
                  🎁 Gratis
                </span>
              </div>
              <div className="px-1 pb-1 sm:px-2 sm:pb-2">
                <h3 className="text-[#EDF2F6] font-heading font-bold text-xs sm:text-base leading-snug mb-1">
                  {b.title}
                </h3>
                <p className="text-[#93A7B8] text-[11px] sm:text-sm leading-snug">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
