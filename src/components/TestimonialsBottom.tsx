import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
const testimonials = [
{
  initial: 'A',
  color: 'bg-blue-100 text-blue-700',
  name: 'Alejandro S.',
  location: 'Docente — Instituto Superior, Río Negro, Argentina',
  text: 'Antes me llevaba semanas armar la planificación. Ahora tengo todo el año organizado con los protocolos 2026 y los casos integrados.'
},
{
  initial: 'F',
  color: 'bg-amber-100 text-amber-700',
  name: 'Federico M.',
  location: 'Docente — Instituto Tecnológico, Ciudad de México',
  text: 'El sistema me permitió explicar el Checklist OMS con contexto real de mi país. Mis alumnos ahora entienden la responsabilidad del instrumentador.'
},
{
  initial: 'R',
  color: 'bg-emerald-100 text-emerald-700',
  name: 'Rodrigo T.',
  location: 'Docente — SENA, Santa Marta, Colombia',
  text: 'El Bono de Adaptación LATAM me ayudó a contextualizar todo el material a la normativa colombiana sin tener que reescribir nada.'
}];

export function TestimonialsBottom() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 flex flex-col items-center">
          <MessageCircle className="w-10 h-10 text-[#E0932E] mb-3" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#EDF2F6]">
            Lo Que Dicen Otros Docentes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) =>
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
            className="bg-[#16293B] rounded-2xl p-5 shadow-sm border border-white/10 flex flex-col h-full">

              <div className="flex text-[#E0932E] mb-3">
                {[...Array(5)].map((_, i) =>
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
              )}
              </div>

              <p className="text-[#DCE6ED] text-[15px] leading-relaxed mb-4 italic flex-grow">
                "{t.text}"
              </p>

              <div className="flex items-center border-t border-white/10 pt-3 mt-auto">
                <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${t.color} mr-3 flex-shrink-0`}>

                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-[#EDF2F6] text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#93A7B8]">
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
