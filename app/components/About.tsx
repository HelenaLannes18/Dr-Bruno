import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function About() {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-20 md:py-32 flex flex-col md:flex-row gap-16 md:gap-24 items-center">

            {/* Lado Esquerdo - Mosaico de Imagens */}
            <div className="w-full md:w-1/2 flex gap-4 md:gap-6 justify-center md:justify-start">

                {/* Coluna 1 (Imagens da Esquerda: Casual e Terno) */}
                <div className="flex flex-col gap-4 md:gap-6 w-[45%] mt-10 md:mt-0">
                    {/* Imagem 1 (Topo) - Com efeito group hover */}
                    <div className="relative w-full aspect-[3/4] bg-gray-200 overflow-hidden group">
                        <Image
                            src="/foto_2.png"
                            alt="Dr. Bruno Marcelino"
                            fill
                            className="object-cover transition-all duration-300 ease-in-out group-hover:scale-110 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1"
                        />
                    </div>

                    {/* Imagem 3 (Baixo) - com uma pequena margem para a direita para dar aquele efeito escadinha */}
                    <div className="relative w-[85%] ml-auto aspect-[3/4] bg-gray-300 overflow-hidden group">
                        <Image
                            src="/foto_4.png"
                            alt="Dr. Bruno de terno"
                            fill
                            className="object-cover transition-all duration-300 ease-in-out group-hover:scale-110 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1"
                        />
                    </div>
                </div>

                {/* Coluna 2 (Imagem da Direita: Jaleco) */}
                <div className="w-[55%] flex items-center">
                    {/* Imagem 2 (Central/Direita) - Ligeiramente maior - Com efeito group hover */}
                    <div className="relative w-full aspect-[3/4] bg-gray-400 shadow-sm overflow-hidden group">
                        <Image
                            src="/foto_3.png"
                            alt="Dr. Bruno de jaleco"
                            fill
                            className="object-cover transition-all duration-300 ease-in-out group-hover:scale-110 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1"
                        />
                    </div>
                </div>

            </div>

            {/* Lado Direito - Textos e Botão */}
            <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
                <h2 className="text-5xl md:text-6xl font-light text-[#c2c2c2] tracking-wide">
                    Sobre o <br /> Dr. Bruno
                </h2>

                <p className="text-[#666666] leading-relaxed text-sm md:text-base max-w-[500px]">
                    Cirurgião Oncológico e Geral com uma trajetória dedicada ao cuidado com a vida. Graduado em Medicina, possui sólida formação com residência em Cirurgia Geral e Cirurgia Oncológica, além de ser Mestre em Ciências Aplicadas à Saúde e ao Câncer.
                </p>

                <p className="text-[#666666] leading-relaxed text-sm md:text-base max-w-[500px]">
                    Sua paixão pela oncologia nasceu do desejo de fazer a diferença. Hoje, o Dr. Bruno alia sua excelência técnica cirúrgica a um profundo compromisso com o paciente, garantindo acesso rápido a diagnósticos precisos e tratamentos altamente seguros e humanizados.
                </p>

                {/* Botão cor ferrugem escuro */}
                <button className="bg-[#A63E14] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-[#8B3411] transition-colors mt-4">
                    Ver Currículo Completo
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
            </div>

        </section>
    );
}