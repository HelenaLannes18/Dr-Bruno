import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
    return (
        <section className="w-full max-w-[1400px] mx-auto py-20 md:py-32 relative flex items-center">

            {/* CORREÇÃO 1: Fundo amarelo */}
            <div className="absolute inset-0 w-full bg-gradient-to-r from-[#F3D084] from-40% md:from-65% to-transparent"></div>

            {/* CORREÇÃO 2: Container principal com z-10 */}
            <div className="flex flex-col md:flex-row items-center w-full px-4 md:px-12 py-10 relative z-10">

                {/* Seta Esquerda */}
                <button className="hidden md:flex absolute left-4 md:left-8 w-10 h-10 items-center justify-center rounded-full border border-gray-700 text-gray-800 hover:bg-black/5 transition-colors z-20">
                    <ChevronLeft className="w-5 h-5" strokeWidth={1} />
                </button>

                {/* Lado Esquerdo - Textos e Botão */}
                <div className="w-full md:w-1/2 flex flex-col items-start pl-0 md:pl-16 pr-8">
                    <h2 className="text-5xl md:text-6xl font-light text-secondary tracking-tight leading-[1.1] mb-6">
                        Áreas de <br /> Atuação
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-[400px]">
                        Atendimento especializado em Cirurgia Oncológica e Cirurgia Geral, com foco no diagnóstico preciso, tratamento minimamente invasivo e acompanhamento humanizado durante toda a jornada terapêutica.
                    </p>
                    <button className="bg-[#A63E14] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-[#8B3411] transition-colors">
                        Ver Especialidades
                        <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                </div>

                {/* Lado Direito - Imagem */}
                <div className="w-full md:w-1/2 mt-12 md:mt-0 relative flex justify-end pr-0 md:pr-16 z-10">
                    <div className="relative w-full aspect-[4/3] max-w-[600px] bg-white shadow-sm">
                        <div className="w-full h-full flex items-center justify-center text-sm text-gray-400 p-4 text-center bg-gray-100 border border-gray-200">
                            <Image
                                src="/foto_5.png"
                                alt="Atendimento especializado em cirurgia oncológica"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Seta Direita */}
                <button className="hidden md:flex absolute right-4 md:right-8 w-10 h-10 items-center justify-center rounded-full border border-gray-400 text-gray-500 hover:bg-gray-100 transition-colors z-20">
                    <ChevronRight className="w-5 h-5" strokeWidth={1} />
                </button>

            </div>
        </section>
    );
}