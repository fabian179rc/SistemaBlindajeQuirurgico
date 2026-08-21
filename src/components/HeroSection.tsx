import React from "react";
import { motion } from "framer-motion";
import { scrollToOffer } from "../utils/scrollToOffer";
export function HeroSection() {
  return (
    <section className="relative md:min-h-[100svh] flex flex-col justify-start md:justify-center overflow-hidden bg-transparent pt-2 pb-4 md:py-2">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"
      >
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full bg-[#e0932e]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-3xl md:max-w-6xl lg:max-w-7xl text-center">
        <h1 className="font-heading font-extrabold text-[#EDF2F6] mb-2 md:mb-3 text-[26px] leading-snug sm:text-3xl md:text-5xl md:leading-tight lg:text-6xl">
          ¿Notás que Ya No Es el Mismo de Antes?{" "}
          <span className="text-[#E0932E]">
            Ayudalo a Frenar el Deterioro Antes de que Avance
          </span>
        </h1>

        <div className="mx-auto mb-3 w-full max-w-[380px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
          <img
            src={`${import.meta.env.BASE_URL}mockup9.webp`}
            width={900}
            height={900}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            alt="Kit Mente Activa — Estimulación Cognitiva para Adultos Mayores"
            className="w-full h-auto aspect-square object-contain rounded-2xl"
          />
        </div>

        <p className="md:text-xl text-[#93A7B8] mb-3 max-w-2xl mx-auto text-[12px] leading-relaxed">
          +480 ejercicios cognitivos imprimibles, diseñados por
          especialistas y pensados con amor. Listos para imprimir y usar
          al ritmo propio.
        </p>

        <ul className="text-center mx-auto mb-3 max-w-md text-emerald-400 text-[12px] md:text-base space-y-1">
          <li className="whitespace-nowrap">
            ✓ Memoria, atención, lenguaje, lógica y cálculo en un kit.
          </li>
          <li className="whitespace-nowrap">
            ✓ Diseño premium y adulto — nada infantil.
          </li>
          <li className="whitespace-nowrap">
            ✓ Listo para imprimir y usar al ritmo propio.
          </li>
        </ul>

        <div className="flex flex-col items-center mt-0 md:mt-2">
          <motion.a
            href="#comprar"
            onClick={scrollToOffer}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto bg-[#E0932E] hover:bg-[#C97D22] text-[#0E1E2E] font-bold px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-3 rounded-full shadow-lg shadow-[#E0932E]/30 transition-colors mb-4 md:mb-3 text-[11.5px] sm:text-base md:text-lg whitespace-nowrap md:whitespace-normal"
          >
            👉 ¡Sí, Quiero el Kit Completo Hoy!
          </motion.a>

          <div className="flex flex-col items-center gap-1 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 text-xs sm:text-sm leading-tight font-medium text-[#93A7B8]">
            <span className="whitespace-nowrap">
              <span aria-hidden="true">⭐</span> 4.9/5 — Calificación
            </span>
            <span
              aria-hidden="true"
              className="hidden sm:inline text-white/15"
            >
              |
            </span>
            <span className="whitespace-nowrap text-[#6FA8C9]">
              <span aria-hidden="true">🛡️</span> Garantía de 7 días — Sin
              preguntas
            </span>
            <span
              aria-hidden="true"
              className="hidden sm:inline text-white/15"
            >
              |
            </span>
            <span className="whitespace-nowrap text-[#6FA8C9]">
              <span aria-hidden="true">🔒</span> Pago 100% seguro
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
