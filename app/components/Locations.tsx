import { ArrowRight } from 'lucide-react';

export default function Locations() {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 md:gap-20">

            {/* Lado Esquerdo - Textos e Botão */}
            <div className="w-full md:w-1/2 flex flex-col items-start pl-0 md:pl-4">
                <h2 className="text-5xl md:text-6xl font-light text-secondary tracking-tight leading-[1.1] mb-6">
                    Endereços de <br /> Atendimento
                </h2>

                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-[400px]">
                    Atendimento especializado em Juiz de Fora nos hospitais <strong>9 de Julho</strong> e <strong>João Felício</strong>. <br /><br />
                    Oferecemos uma estrutura completa, segura e acolhedora para o seu acompanhamento oncológico e cirúrgico.
                </p>

                <button className="bg-[#A63E14] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-[#8B3411] transition-colors">
                    Como Chegar
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
            </div>

            {/* Lado Direito - Mapa Real com iframe */}
            <div className="w-full md:w-1/2 relative flex justify-end">
                {/* Container que mantém a proporção 4/3 do Figma */}
                <div className="w-full max-w-[600px] aspect-[4/3] relative bg-gray-200 overflow-hidden shadow-sm">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.4281019061427!2d-43.34684822472276!3d-21.76368638007593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989d8426fefc15%3A0x136ecc8219642b77!2sHospital%209%20de%20Julho%20%2F%20Instituto%20Oncol%C3%B3gico.!5e0!3m2!1spt-BR!2sbr!4v1773866911423!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 w-full h-full object-cover"
                    ></iframe>
                </div>
            </div>

        </section>
    );
}