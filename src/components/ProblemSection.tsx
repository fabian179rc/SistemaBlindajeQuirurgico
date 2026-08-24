import React from 'react';
import { motion } from 'framer-motion';
const pains = [
{
  emoji: '🗂️',
  title: 'Material Disperso',
  desc: 'Apuntes, PDFs sueltos y manuales desactualizados. Cada clase, volvés a empezar desde cero.'
},
{
  emoji: '⏱️',
  title: 'Clases que Llevan Horas',
  desc: 'Preparar una sola clase te consume tiempo que podrías usar para atender otras materias o mejorar tu práctica docente.'
},
{
  emoji: '📌',
  title: 'Falta de Casos Reales',
  desc: 'Explicás conceptos, pero no tenés escenarios clínicos actualizados para que tus alumnos piensen como instrumentadores.'
},
{
  emoji: '🎯',
  title: 'Baja Participación',
  desc: 'Tus alumnos se desconectan porque el material no refleja la realidad actual del quirófano ni los protocolos vigentes en 2026.'
}];

export function ProblemSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#EDF2F6]">
            ¿Te falta estructura para enseñar sin improvisar?
          </h2>
          <p className="text-sm md:text-base text-[#93A7B8] leading-relaxed max-w-2xl mx-auto">
            Sabés los contenidos de Instrumentación Quirúrgica, pero cada
            ciclo lectivo se convierte en horas de búsqueda, armado de
            clases desde cero y dudas sobre qué incluir, cómo evaluarlo o
            cómo conectarlo con la realidad del quirófano de tu país.
          </p>
        </div>

        <div className="bg-[#16293B] border border-[#E0932E]/20 text-[#EDF2F6] rounded-2xl p-3 md:p-4 shadow-sm text-center mb-5 max-w-2xl mx-auto">
          <p className="md:text-lg font-medium text-[#DCE6ED] text-[15px]">
            ⚡ Ese no es un problema de conocimiento. Es un problema de
            sistema.
          </p>
        </div>

        <p className="text-center text-sm md:text-base text-[#93A7B8] leading-relaxed max-w-2xl mx-auto mb-5">
          Si sos docente de Instrumentación Quirúrgica, probablemente ya
          viviste esto:
        </p>

        <div className="grid sm:grid-cols-2 gap-2">
          {pains.map((item, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.1
            }}
            className="bg-[#16293B] p-2 md:p-3 rounded-xl shadow-sm border border-white/10">

              <div className="flex items-center gap-1 md:gap-1.5 mb-0.5 md:mb-1">
                <span className="text-base md:text-2xl flex-shrink-0">
                  {item.emoji}
                </span>
                <h3 className="text-xs md:text-base font-bold text-[#EDF2F6]">
                  {item.title}
                </h3>
              </div>
              <p className="text-[11px] md:text-sm text-[#93A7B8] leading-snug">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
