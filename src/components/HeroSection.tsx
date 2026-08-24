import React from "react";
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
        <h1 className="font-heading font-extrabold text-[#EDF2F6] mb-2 md:mb-3 text-[32px] leading-snug sm:text-5xl md:text-7xl md:leading-tight lg:text-8xl">
          Tu Materia de Instrumentación Quirúrgica,
          <br />
          <span className="text-[#E0932E]">
            Lista. Desde Hoy.
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
            alt="Sistema Blindaje Quirúrgico 2026 — Sistema Integral de Recursos Educativos para Docentes de Instrumentación Quirúrgica"
            className="w-full h-auto aspect-square object-contain rounded-2xl"
          />
        </div>

        <p className="md:text-xl text-[#93A7B8] mb-3 max-w-2xl mx-auto text-[12px] leading-relaxed">
          Guías didácticas, modelos de planificación, fichas técnicas, casos
          clínicos resueltos, protocolos de seguridad y herramientas de
          evaluación, listos para descargar y usar desde el primer día.
        </p>

        <ul className="text-center mx-auto mb-3 max-w-md text-emerald-400 text-[12px] md:text-base space-y-1">
          <li>
            ✓ 6 tomos digitales con guías, protocolos y fichas técnicas.
          </li>
          <li>
            ✓ Casos clínicos resueltos y simulaciones listas para clase.
          </li>
          <li>
            ✓ Evaluaciones, rúbricas y herramientas de planificación incluidas.
          </li>
        </ul>

        <div className="flex flex-col items-center mt-0 md:mt-2">
          <a
            href="#comprar"
            onClick={scrollToOffer}
            className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto bg-[#E0932E] hover:bg-[#C97D22] text-[#0E1E2E] font-bold px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-3 rounded-full shadow-lg shadow-[#E0932E]/30 transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] mb-4 md:mb-3 text-[11.5px] sm:text-base md:text-lg whitespace-nowrap md:whitespace-normal"
          >
            🚀 Quiero Mi Sistema Quirúrgico
          </a>

          <div className="flex flex-col items-center gap-1 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 text-xs sm:text-sm leading-tight font-medium text-[#93A7B8]">
            <span className="whitespace-nowrap">
              <span aria-hidden="true">⭐⭐⭐⭐⭐</span> 4.9/5 — Valoración de usuarios
            </span>
            <span
              aria-hidden="true"
              className="hidden sm:inline text-white/15"
            >
              |
            </span>
            <span className="whitespace-nowrap text-[#6FA8C9]">
              <span aria-hidden="true">🛡️</span> Garantía de 7 Días — Riesgo Cero
            </span>
            <span
              aria-hidden="true"
              className="hidden sm:inline text-white/15"
            >
              |
            </span>
            <span className="whitespace-nowrap text-[#6FA8C9]">
              <span aria-hidden="true">💻</span> Producto 100% Digital — Acceso Inmediato
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
