import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const features = [
  {
    lead: "Ahorrar tiempo en preparación",
    desc: "Dejá de armar cada clase desde cero. Usá guías, secuencias y casos listos para adaptar a tu institución.",
  },
  {
    lead: "Trabajar con más orden pedagógico",
    desc: "Organizá todo el ciclo lectivo con planificación anual, unidades didácticas y rúbricas claras.",
  },
  {
    lead: "Enseñar con casos clínicos reales",
    desc: "Aplicá situaciones quirúrgicas concretas para desarrollar criterio clínico en tus alumnos.",
  },
  {
    lead: "Presentarte mejor ante tus alumnos e institución",
    desc: "Entregá material sólido, actualizado y profesional que aumente la percepción de valor de tu clase.",
  },
  {
    lead: "Cerrar cada ciclo con control",
    desc: "Sabé exactamente qué enseñar, cómo evaluarlo y qué resultados estás logrando.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-2 sm:px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-[#EDF2F6] max-w-3xl mx-auto leading-snug">
            Con Este Sistema Vas a Poder
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
              className="flex items-start gap-1.5 md:gap-2 bg-[#16293B] border border-white/10 rounded-lg px-2.5 py-2 md:px-3 md:py-2.5 shadow-sm"
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
