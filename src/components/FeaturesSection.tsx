import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const features = [
  {
    lead: "Estimular su mente sin que se sienta un niño",
    desc: "Diseño premium y adulto, pensado para respetar su dignidad.",
  },
  {
    lead: "Ganar tiempo de calidad juntos",
    desc: "El Volumen 6 está pensado para compartir en familia.",
  },
  {
    lead: "Empezar sin dudas ni presión",
    desc: "Guía de acompañamiento para la primera sesión, sin frustración.",
  },
  {
    lead: "Cubrir las 6 funciones cognitivas clave",
    desc: "Memoria, atención, lenguaje, lógica, cálculo y conexión social.",
  },
  {
    lead: "Ver sus avances con claridad",
    desc: "Registro de progreso incluido, para notar cada pequeño logro.",
  },
  {
    lead: "Usarlo hoy mismo, sin esperar",
    desc: "Acceso inmediato por PDF, listo para imprimir a tu ritmo.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-2 sm:px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-[#EDF2F6] max-w-3xl mx-auto leading-snug">
            Lo que vas a lograr con Kit Mente Activa
          </h2>
        </div>

        <ul className="space-y-2 md:space-y-3">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{
                opacity: 0,
                y: 8,
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
              className="flex items-start gap-1.5 md:gap-2"
            >
              <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 mt-0.5 text-[#E0932E]" />
              <p className="text-xs md:text-sm text-[#93A7B8] leading-snug">
                <span className="text-[13px] md:text-sm font-bold text-[#EDF2F6]">
                  {feature.lead}
                </span>{" "}
                — {feature.desc}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
