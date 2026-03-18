export default function FAQ() {
    // Textos reais baseados nas especialidades do Dr. Bruno
    const faqs = [
        {
            id: "1",
            question: "Quando devo procurar um cirurgião oncológico?",
            answer: "O especialista deve ser consultado para o diagnóstico, estadiamento e tratamento cirúrgico de tumores benignos e malignos, garantindo uma abordagem precisa desde a suspeita inicial.",
        },
        {
            id: "2",
            question: "As cirurgias podem ser minimamente invasivas?",
            answer: "Sim. Sempre que há indicação clínica, utilizamos a cirurgia videolaparoscópica. Essa técnica proporciona uma recuperação mais rápida, menos dor e um retorno breve à sua rotina.",
        },
    ];

    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-20">

            {/* Título com a mesma cor e peso da seção "Sobre" */}
            <h2 className="text-4xl md:text-5xl font-light text-[#c2c2c2] tracking-wide mb-12 md:mb-20">
                Perguntas Frequentes (FAQ)
            </h2>

            {/* Grid de 2 colunas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

                {faqs.map((faq) => (
                    <div key={faq.id} className="flex items-start gap-4 md:gap-6">
                        {/* Número Gigante */}
                        <span className="text-[7rem] md:text-[9rem] font-bold text-[#EEEEEE] leading-none tracking-tighter select-none -mt-4 md:-mt-8">
                            {faq.id}
                        </span>

                        {/* Texto da Pergunta/Resposta */}
                        <div className="pt-2 md:pt-4 max-w-[350px]">
                            <p className="text-[#3A3A3A] text-sm md:text-base font-bold mb-2">
                                {faq.question}
                            </p>
                            <p className="text-[#666666] text-sm md:text-base leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}