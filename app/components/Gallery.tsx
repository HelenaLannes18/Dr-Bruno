import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Gallery() {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-20 md:py-32">

            {/* Título da Seção */}
            <h2 className="text-4xl md:text-5xl font-light text-[#c2c2c2] tracking-wide mb-10 md:mb-16">
                Informação Oncológica
            </h2>

            {/* Container do Grid */}
            <div className="flex flex-col gap-4 md:gap-6">

                {/* Linha 1: Bloco de Texto e Imagem Larga */}
                <div className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-6">

                    {/* Bloco Cinza Escuro - Introdução */}
                    <div className="md:col-span-4 bg-[#4F4F4F] p-10 md:p-16 flex flex-col justify-center min-h-[300px] md:min-h-[400px]">
                        <h3 className="text-white text-5xl md:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
                            Entender <br /> para Curar
                        </h3>
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                            Conhecer os fundamentos da oncologia é o primeiro passo para enfrentar o diagnóstico com serenidade e confiança no tratamento.
                        </p>
                        <button className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 hover:text-white transition-colors w-fit">
                            Saiba Mais Sobre a Área
                            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                    </div>

                    {/* Imagem Larga 1 - Foco em Diagnóstico/Tecnologia */}
                    <div className="md:col-span-6 bg-[#DCDCDC] relative min-h-[300px] md:min-h-[400px] group overflow-hidden">
                        {/* Sugestão de imagem: Um microscópio moderno ou um exame de imagem */}
                        <Image src="/galeria_1.jpg" alt="Equipamento de Diagnóstico" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />

                        {/* Overlay escuro + Texto */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10">
                            <h4 className="text-white text-2xl font-bold mb-2">A Importância do Diagnóstico</h4>
                            <p className="text-gray-300 text-sm max-w-md">Identificar o tipo e o estágio do câncer é crucial para definir a estratégia terapêutica mais eficaz para cada paciente.</p>
                        </div>
                    </div>

                </div>

                {/* Linha 2: Três Imagens com Tópicos Específicos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 gap-4 md:gap-6">

                    {/* Imagem Inferior Esquerda - Prevenção */}
                    <div className="md:col-span-3 bg-[#DCDCDC] relative h-[400px] md:h-[480px] group overflow-hidden">
                        {/* Sugestão de imagem: Alimentos saudáveis, alguém exercitando ou um check-up */}
                        <Image src="/galeria_2.jpg" alt="Estilo de Vida Saudável" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
                            <h4 className="text-white text-xl font-bold mb-2">Prevenção e Rastreio</h4>
                            <p className="text-gray-300 text-xs leading-relaxed">Hábitos saudáveis e exames periódicos são as armas mais poderosas na detecção precoce e redução de riscos.</p>
                        </div>
                    </div>

                    {/* Imagem Inferior Central - Tratamento */}
                    <div className="md:col-span-4 bg-[#DCDCDC] relative h-[400px] md:h-[480px] group overflow-hidden">
                        {/* Sugestão de imagem: Mãos segurando medicação ou ilustração de células */}
                        <Image src="/galeria_3.jpg" alt="Modalidades de Tratamento" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
                            <h4 className="text-white text-xl font-bold mb-2">Caminhos para o Tratamento</h4>
                            <p className="text-gray-300 text-xs leading-relaxed max-w-[250px]">Quimioterapia, radioterapia, cirurgia e novas terapias alvo: conheça as opções para combater a doença.</p>
                        </div>
                    </div>

                    {/* Imagem Inferior Direita - Esperança/Remissão */}
                    <div className="md:col-span-3 bg-[#DCDCDC] relative h-[400px] md:h-[480px] group overflow-hidden">
                        {/* Sugestão de imagem: Uma pessoa sorrindo ao ar livre ou segurando uma fita simbólica */}
                        <Image src="/galeria_4.jpg" alt="Paciente em Recuperação" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
                            <h4 className="text-white text-xl font-bold mb-2">Vida Após o Diagnóstico</h4>
                            <p className="text-gray-300 text-xs leading-relaxed">Entenda o conceito de remissão e a importância do acompanhamento contínuo para manter a saúde e a qualidade de vida.</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Botão Inferior Alinhado à Direita */}
            <div className="flex justify-end mt-6 md:mt-8">
                <button className="bg-[#A63E14] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-[#8B3411] transition-colors">
                    Ver Mais Informações
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
            </div>

        </section>
    );
}