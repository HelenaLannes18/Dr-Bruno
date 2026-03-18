import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        // MUDANÇA 1: Adicionei md:gap-16 para criar um espaçamento entre as colunas no desktop
        <section className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center px-4 md:px-12 pt-8 md:gap-16">

            {/* Lado Esquerdo - Títulos e Setas */}
            {/* MUDANÇA 2: Alterei de md:w-1/3 para md:w-2/5 para dar mais espaço ao texto */}
            <div className="w-full md:w-2/5 flex flex-col relative z-10 md:pl-10 mb-10 md:mb-0">
                {/* Título (mantive igual) */}
                <h1 className="flex flex-col text-6xl md:text-[5rem] lg:text-[6rem] leading-[1.1] md:leading-[0.95] tracking-tight">
                    <span className="text-[#a8a8a8] font-normal">Oncologia</span>
                    <span className="text-secondary font-bold">& Cirurgia</span>
                </h1>

                {/* Subtítulo (mantive igual) */}
                <p className="mt-6 text-gray-500 text-sm md:text-base max-w-[300px]">
                    Excelência e cuidado humanizado em cada etapa do seu tratamento.
                </p>

                {/* Setas com a linha de fundo (mantive igual) */}
                <div className="flex items-center mt-10 md:mt-16 relative w-fit">
                    <div className="absolute left-[-20px] right-[-100px] h-[1px] bg-gray-200 -z-10 top-1/2 -translate-y-1/2"></div>

                    <div className="flex gap-4 bg-background px-2">
                        <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-100 hover:border-gray-300 transition-colors shadow-sm" aria-label="Anterior">
                            <ArrowLeft className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-100 hover:border-gray-300 transition-colors shadow-sm" aria-label="Próximo">
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Lado Direito - Imagem e Retângulo Branco */}
            {/* MUDANÇA 3: Alterei de md:w-2/3 para md:w-3/5 para equilibrar as proporções */}
            <div className="w-full md:w-3/5 relative">

                {/* Container da Imagem Principal (mantive igual) */}
                <div className="relative w-full h-[400px] md:h-[650px] bg-gray-300 overflow-hidden">
                    <Image
                        src="/foto_1.png"
                        alt="Excelência em Oncologia e Cirurgia"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Ícone de brilho (mantive igual) */}
                    <div className="absolute bottom-6 right-6 text-white/50 z-10">
                        <Sparkles className="w-8 h-8" />
                    </div>
                </div>

                {/* Retângulo Branco (mantive igual) */}
                <div className="absolute bottom-0 left-0 md:-left-16 bg-white px-8 md:px-10 py-6 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors z-20 shadow-sm">
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-secondary font-sans">
                        Agendar Consulta
                    </span>
                    <ArrowRight className="w-4 h-4 text-secondary" strokeWidth={1.5} />
                </div>

            </div>
        </section>
    );
}