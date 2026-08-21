import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: '¿Esto tiene aval profesional o son ejercicios genéricos de internet?',
  a: 'Kit Mente Activa fue desarrollado con criterio clínico y pedagógico, aplicando principios de estimulación cognitiva validados para adultos mayores. Cada ejercicio respeta la dignidad del adulto mayor, se adapta a distintos niveles de capacidad y es útil tanto para un familiar como para un profesional. No es un compilado de ejercicios sueltos: es un sistema completo y organizado.'
},
{
  q: '¿Qué pasa si lo compro y mi familiar no quiere usarlo o no le gusta?',
  a: 'Por eso incluimos el Bono 1 (Guía de Primera Sesión) y el Bono 3 (Manual del Acompañante): ambos te ayudan a introducir el material sin presión ni frustración. Además, si dentro de los primeros 7 días no estás satisfecho/a, te devolvemos el dinero sin preguntas.'
},
{
  q: 'No tengo impresora en casa. ¿Es difícil o costoso pasarlo a papel?',
  a: 'Para nada. Los archivos son PDFs estándar que podés llevar a cualquier copistería o librería cercana, a un costo mínimo. El Bono 5 incluye una guía completa de impresión con recomendaciones de papel y organización.'
},
{
  q: '¿Me va a tocar estar al lado todo el tiempo explicando cómo se usa?',
  a: 'No. Cada ejercicio tiene instrucciones claras, en letra grande y con lenguaje simple. El kit está diseñado para que el adulto mayor pueda usarlo solo si quiere, o acompañado si lo prefiere. La autonomía es uno de los valores centrales del diseño.'
},
{
  q: 'Me da miedo que el diseño parezca "para nenes de jardín". ¿Cómo está armado?',
  a: 'Esta fue una de nuestras prioridades absolutas. Kit Mente Activa tiene una estética premium, elegante y completamente adulta: tipografía clara, colores sobrios, diseño editorial de alto nivel. Nada de dibujitos ni tonos infantilizantes. Transmite respeto desde la primera página.'
},
{
  q: '¿El pago es por única vez o me van a cobrar una suscripción?',
  a: 'Es un pago único, para siempre. Sin suscripciones, sin cargos adicionales, sin sorpresas. Pagás una sola vez y el material es tuyo de por vida, incluyendo las actualizaciones futuras.'
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
