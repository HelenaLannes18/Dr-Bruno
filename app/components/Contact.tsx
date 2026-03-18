"use client";
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-20 md:py-32 flex flex-col md:flex-row gap-12 md:gap-20 items-center">

            {/* Lado Esquerdo - Formulário */}
            <div className="w-full md:w-1/2 flex flex-col">
                <h2 className="text-4xl md:text-5xl font-light text-[#c2c2c2] tracking-wide mb-10 md:mb-12">
                    Contato
                </h2>

                <form className="flex flex-col gap-3 w-full max-w-[450px] mb-10">

                    {/* Inputs Simples */}
                    <input
                        type="text"
                        placeholder="Nome Completo"
                        className="bg-[#F4F4F4] w-full p-4 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:bg-gray-100 transition-colors"
                    />

                    <input
                        type="email"
                        placeholder="E-mail"
                        className="bg-[#F4F4F4] w-full p-4 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:bg-gray-100 transition-colors"
                    />

                    {/* Input com Asterisco Vermelho (Telefone Obrigatório) */}
                    <div className="relative w-full bg-[#F4F4F4]">
                        {/* Texto falso de placeholder para podermos pintar o * de vermelho */}
                        <div className="absolute top-4 left-4 text-sm text-gray-400 pointer-events-none flex">
                            Telefone / WhatsApp<span className="text-red-500">*</span>
                        </div>
                        {/* O input real, transparente, que fica por cima do texto falso */}
                        <input
                            type="tel"
                            className="w-full p-4 text-sm text-gray-700 outline-none bg-transparent relative z-10 focus:bg-white transition-colors"
                            onChange={(e) => {
                                // Pequeno script para esconder o placeholder falso quando o usuário digita
                                const fakePlaceholder = e.target.previousElementSibling;
                                if (fakePlaceholder) {
                                    (fakePlaceholder as HTMLElement).style.opacity = e.target.value ? '0' : '1';
                                }
                            }}
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Assunto"
                        className="bg-[#F4F4F4] w-full p-4 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:bg-gray-100 transition-colors"
                    />

                    {/* Textarea (Caixa maior) com Asterisco Vermelho */}
                    <div className="relative w-full bg-[#F4F4F4]">
                        <div className="absolute top-4 left-4 text-sm text-gray-400 pointer-events-none flex">
                            Mensagem<span className="text-red-500">*</span>
                        </div>
                        <textarea
                            className="w-full p-4 h-32 resize-none text-sm text-gray-700 outline-none bg-transparent relative z-10 focus:bg-white transition-colors"
                            onChange={(e) => {
                                const fakePlaceholder = e.target.previousElementSibling;
                                if (fakePlaceholder) {
                                    (fakePlaceholder as HTMLElement).style.opacity = e.target.value ? '0' : '1';
                                }
                            }}
                        ></textarea>
                    </div>

                </form>

                {/* Botão */}
                <button className="bg-[#A63E14] w-fit text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-[#8B3411] transition-colors">
                    Enviar Mensagem
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
            </div>

            {/* Lado Direito - Imagem e Retângulo Escuro */}
            <div className="w-full md:w-1/2 relative flex justify-center items-center mt-16 md:mt-0 min-h-[500px]">

                {/* Retângulo Cinza Escuro ao Fundo */}
                <div className="absolute left-0 right-0 h-[250px] md:h-[280px] bg-[#4F4F4F] -z-10"></div>

                {/* Container da Imagem do Médico (Mais alto que o retângulo) */}
                <div className="relative w-[280px] md:w-[340px] h-[400px] md:h-[480px] bg-gray-300 shadow-xl overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm bg-[#DCDCDC]">
                        <Image
                            src="/foto_13.png"
                            alt="Dr. Bruno Marcelino"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

            </div>

        </section>
    );
}