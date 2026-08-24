import React from 'react';
export function Footer() {
  return (
    <footer className="bg-[#0A1622] text-[#93A7B8] py-10 border-t border-[#1D3550]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="text-white font-bold text-xl mb-6 flex items-center justify-center gap-2">
          🛡️ Sistema Blindaje Quirúrgico 2026
        </div>

        <p className="text-xs md:text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
          El Sistema Blindaje Quirúrgico es una herramienta digital de
          orientación y apoyo pedagógico para docentes de Instrumentación
          Quirúrgica. Los contenidos, casos y protocolos incluidos deben
          adaptarse a la normativa, legislación y usos vigentes en cada
          país e institución. No constituye asesoramiento médico, legal ni
          reemplaza la formación profesional ni el criterio del docente
          responsable de cada materia.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="#" className="hover:text-white transition-colors">
            Términos y Condiciones
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Política de Privacidad
          </a>
          <a
            href="mailto:soporte@sistemablindaje2026.tupuntodigital.shop"
            className="hover:text-white transition-colors"
          >
            Contacto
          </a>
        </div>

        <div className="text-xs text-[#5C7488]">
          <p>
            © 2026 Sistema Blindaje Quirúrgico 2026™ — Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>);

}
