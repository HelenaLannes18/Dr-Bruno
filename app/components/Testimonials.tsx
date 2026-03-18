import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonialsData = [
    {
        id: 1,
        name: "Hannah Schmitt",
        role: "Nullam varius",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
    },
    {
        id: 2,
        name: "Hannah Schmitt",
        role: "Nullam varius",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
    },
    {
        id: 3,
        name: "Hannah Schmitt",
        role: "Nullam varius",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
    },
];

export default function Testimonials() {
    return (
        <section className="w-full bg-[#F3D084] py-20 md:py-32 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 md:px-12">

                {/* Cabeçalho da Seção com Setas */}
                <div className="flex justify-center items-center gap-6 md:gap-12 mb-20">
                    <button className="text-secondary hover:text-black transition-colors">
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1} />
                    </button>
                    <h2 className="text-4xl md:text-5xl font-light text-secondary tracking-wide">
                        Depoimentos
                    </h2>
                    <button className="text-secondary hover:text-black transition-colors">
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1} />
                    </button>
                </div>

                {/* Container dos Cards */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-6 mt-10">

                    {testimonialsData.map((item, index) => {
                        // Lógica para destacar o card central
                        const isCenter = index === 1;

                        return (
                            <div
                                key={item.id}
                                className={`relative w-full max-w-[320px] md:max-w-[350px] transition-transform duration-300 ${isCenter ? 'scale-100 md:scale-110 z-10' : 'scale-95 opacity-95 md:mt-8'
                                    }`}
                            >

                                {/* "Sombra" sólida Laranja/Ferrugem (Fica atrás do card branco) */}
                                <div className="absolute inset-0 bg-[#A63E14] translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-[1rem] rounded-bl-[1rem] -z-10"></div>

                                {/* Card Branco Principal */}
                                <div className="bg-white px-8 pb-10 pt-12 relative rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-[1rem] rounded-bl-[1rem] shadow-sm text-center">

                                    {/* Foto do Avatar Vazando no Topo */}
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-sm z-20">
                                        <Image src={`/img_${item.id}.png`} alt={item.name} fill className="object-cover" />
                                    </div>

                                    {/* Textos do Card */}
                                    <h3 className="text-gray-800 font-bold mt-2">{item.name}</h3>
                                    <p className="text-gray-400 text-xs mt-1 mb-4">{item.role}</p>

                                    {/* Ícone de Aspas */}
                                    <div className="text-[#A63E14] text-4xl font-serif leading-none h-6 mb-2">
                                        “
                                    </div>

                                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}