import React from 'react';
export function Footer() {
  return (
    <footer className="bg-[#0A1622] text-[#93A7B8] py-10 border-t border-[#1D3550]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="text-white font-bold text-xl mb-6 flex items-center justify-center gap-2">
          🌎 KIT Geología Listo
        </div>

        <p className="text-xs md:text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
          KIT Geología Listo es una herramienta digital de orientación,
          organización y apoyo didáctico para docentes, formadores y
          estudiantes de Ciencias de la Tierra. Los contenidos, actividades,
          ejemplos y recursos incluidos deben adaptarse a la normativa
          curricular, nivel educativo, contexto institucional y realidad
          local de cada docente. No reemplaza la planificación docente, la
          formación profesional ni los lineamientos oficiales de cada
          institución educativa.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="#" className="hover:text-white transition-colors">
            Términos y Condiciones
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Política de Privacidad
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Botón de Arrepentimiento
          </a>
          <a
            href="mailto:soporte@geologia-lista.tupuntodigital.shop"
            className="hover:text-white transition-colors"
          >
            Contacto
          </a>
        </div>

        <div className="text-xs text-[#5C7488]">
          <p>
            © 2026 KIT Geología Listo — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>);

}
