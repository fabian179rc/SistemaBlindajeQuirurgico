import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: '¿Es un producto físico o digital?',
  a: 'Es un producto 100% digital. Recibís acceso al material en formato PDF de alta resolución para descargarlo y utilizarlo desde tu computadora, tablet o dispositivo móvil.'
},
{
  q: '¿Puedo imprimirlo?',
  a: 'Sí. Podés imprimir los tomos, las guías, los esquemas, las actividades y las evaluaciones para usarlas en clase.'
},
{
  q: '¿Puedo proyectarlo en el aula?',
  a: 'Sí. El material está diseñado para ser visual y claro, por lo que podés usarlo como apoyo en tus clases, proyectarlo o compartir fragmentos con tus estudiantes según el uso educativo permitido.'
},
{
  q: '¿Sirve para secundaria?',
  a: 'Sí. Es especialmente útil para secundaria y bachillerato, aunque también puede adaptarse a formación docente, cursos introductorios, talleres ambientales y primeros años de nivel superior.'
},
{
  q: '¿Necesito ser especialista en geología?',
  a: 'No necesariamente. El material está pensado para docentes que necesitan explicar Ciencias de la Tierra con claridad, aunque no sean geólogos profesionales. Cada tema está desarrollado con lenguaje accesible y estructura didáctica.'
},
{
  q: '¿Incluye actividades?',
  a: 'Sí. Además de las actividades integradas en los tomos, recibís bonos específicos con guías de trabajo, esquemas, evaluaciones, rúbricas y preguntas disparadoras.'
},
{
  q: '¿Los ejemplos son solo globales o incluyen Hispanoamérica?',
  a: 'Incluyen contexto global y también ejemplos especialmente pensados para Hispanoamérica: volcanes, terremotos, cordilleras, recursos minerales, paisajes, agua y riesgos naturales de la región.'
},
{
  q: '¿Cuándo recibo el acceso?',
  a: 'Después de la compra, recibís el acceso al material digital para descargarlo y comenzar a usarlo.'
},
{
  q: '¿El material reemplaza la planificación docente?',
  a: 'No. Kit Geología PRO 2026 no reemplaza tu criterio profesional ni la planificación institucional. Es una herramienta para facilitar, ordenar y enriquecer tu trabajo docente. Podés adaptarlo según tu país, nivel educativo, programa oficial y características del grupo.'
}];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/15 bg-[#1D3550] text-[#EDF2F6] font-semibold tracking-[0.18em] uppercase text-xs">
            Preguntas Frecuentes
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#EDF2F6] leading-tight">
            Respuestas a tus{" "}
            <em className="text-[#E0932E] font-bold italic">
              consultas habituales
            </em>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-[#16293B] rounded-2xl shadow-sm shadow-black/20">

                <button
                  className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}>

                  <span className="font-heading font-bold text-[#EDF2F6] text-lg md:text-xl">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-[#1D3550] text-[#EDF2F6] flex items-center justify-center transition-colors"
                    aria-hidden="true">

                    {isOpen ?
                    <Minus className="w-4 h-4" /> :

                    <Plus className="w-4 h-4" />
                    }
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut'
                    }}
                    className="overflow-hidden">

                      <div className="px-6 md:px-8 pb-6 md:pb-7 -mt-1 text-[#93A7B8] leading-relaxed text-[15px] md:text-base max-w-[58ch]">
                        {faq.a}
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>);

          })}
        </div>
      </div>
    </section>);

}
