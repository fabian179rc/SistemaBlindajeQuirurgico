import React from 'react';
export function Footer() {
  return (
    <footer className="bg-[#0A1622] text-[#93A7B8] py-10 border-t border-[#1D3550]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="text-white font-bold text-xl mb-6 flex items-center justify-center gap-2">
          🧠 Kit Mente Activa
        </div>

        <p className="text-xs md:text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
          Kit Mente Activa es un material digital de estimulación cognitiva
          para adultos mayores, familiares y profesionales. No constituye
          diagnóstico, tratamiento médico ni terapia profesional, y no
          reemplaza la consulta con un médico, neurólogo, psicólogo o
          terapeuta ocupacional. Ante cualquier duda sobre la salud
          cognitiva de tu familiar, consultá a un profesional de la salud.
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
            href="mailto:soporte@kit-mente-activa.tupuntodigital.shop"
            className="hover:text-white transition-colors"
          >
            Contacto
          </a>
        </div>

        <div className="text-xs text-[#5C7488]">
          <p>
            © 2026 Kit Mente Activa — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>);

}
