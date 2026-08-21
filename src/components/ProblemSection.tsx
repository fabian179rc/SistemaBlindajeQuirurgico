import React from 'react';
import { motion } from 'framer-motion';
const pains = [
{
  emoji: '😟',
  title: 'Olvidos que Preocupan',
  desc: 'Lo ves cada vez más olvidadizo o desconectado, y no sabés cómo ayudarlo.'
},
{
  emoji: '🤷',
  title: 'No Sabés por Dónde Empezar',
  desc: 'Querés que se mantenga activo, pero no sabés con qué ni cómo.'
},
{
  emoji: '🎈',
  title: 'Materiales que no Respetan',
  desc: 'Todo lo que encontrás es infantil, aburrido o genérico.'
},
{
  emoji: '⏳',
  title: 'Horas Buscando el Material Correcto',
  desc: 'Sos familiar o profesional y no encontrás algo que inspire confianza.'
}];

export function ProblemSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#EDF2F6]">
            ¿Tenés un adulto mayor que amás y querés ayudarlo?
          </h2>
          <p className="text-sm md:text-base text-[#93A7B8] leading-relaxed max-w-2xl mx-auto">
            ¿Y si pudieras ayudarlo a mantener su mente activa con un
            material creado por especialistas y pensado con el respeto
            que merece?
          </p>
        </div>

        <div className="bg-[#16293B] border border-[#E0932E]/20 text-[#EDF2F6] rounded-2xl p-3 md:p-4 shadow-sm text-center mb-5 max-w-2xl mx-auto">
          <p className="md:text-lg font-medium text-[#DCE6ED] text-[15px]">
            ✨ Sin improvisar. Sin buscar más. Sin materiales que lo hagan
            sentir un niño.
          </p>
        </div>

        <p className="text-center text-sm md:text-base text-[#93A7B8] leading-relaxed max-w-2xl mx-auto mb-5">
          Esto te va a sonar familiar:
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
