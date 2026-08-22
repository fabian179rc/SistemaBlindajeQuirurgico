import React from 'react';
import { motion } from 'framer-motion';
const pains = [
{
  emoji: '🗂️',
  title: 'Recursos Dispersos',
  desc: 'Tenés PDFs sueltos, videos aislados, imágenes de internet y apuntes viejos sin una secuencia clara.'
},
{
  emoji: '⏱️',
  title: 'Preparación que Consume Horas',
  desc: 'Una clase sobre tectónica, minerales o volcanes puede llevarte horas de búsqueda y armado.'
},
{
  emoji: '📌',
  title: 'Explicaciones Difíciles de Aterrizar',
  desc: 'Escalas de millones de años y procesos invisibles se vuelven abstractos sin recursos visuales.'
},
{
  emoji: '🌋',
  title: 'Alumnos que se Interesan… pero se Pierden',
  desc: 'Los volcanes y terremotos despiertan curiosidad, pero se apaga rápido sin una estructura didáctica clara.'
},
{
  emoji: '🎯',
  title: 'Faltan Actividades Listas para Aplicar',
  desc: 'Sabés explicar el tema, pero no siempre tenés a mano una actividad o evaluación lista para usar.'
}];

export function ProblemSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#EDF2F6]">
            ¿Te falta estructura para enseñar Geología sin perder horas preparando cada clase?
          </h2>
          <p className="text-sm md:text-base text-[#93A7B8] leading-relaxed max-w-2xl mx-auto">
            Sabés que la Tierra se mueve, que las rocas cuentan historias
            y que los volcanes y terremotos no ocurren al azar. Pero
            preparar la clase implica buscar información en varios
            sitios, adaptar textos técnicos, armar actividades y lograr
            que todo tenga sentido para tus estudiantes.
          </p>
        </div>

        <div className="bg-[#16293B] border border-[#E0932E]/20 text-[#EDF2F6] rounded-2xl p-3 md:p-4 shadow-sm text-center mb-5 max-w-2xl mx-auto">
          <p className="md:text-lg font-medium text-[#DCE6ED] text-[15px]">
            ⚡ Ese no es un problema de capacidad docente. Es un problema
            de sistema.
          </p>
        </div>

        <p className="text-center text-sm md:text-base text-[#93A7B8] leading-relaxed max-w-2xl mx-auto mb-5">
          Si enseñás Ciencias Naturales, Geografía, Biología o Ciencias de
          la Tierra, probablemente ya viviste estas situaciones:
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
