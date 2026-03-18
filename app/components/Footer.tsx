import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full bg-[#333333] pt-16 md:pt-24 pb-8 flex flex-col items-center">

            {/* Container Principal do Grid */}
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-16">

                {/* Coluna 1: Logo */}
                <div className="flex flex-col items-start">
                    {/* Placeholder para a Logo real */}

                    <Image src="/icone.png" alt="Logo Dr. Bruno Marcelino" width={100} height={80} className="object-contain" />

                </div>

                {/* Coluna 2: Links Rápidos (Páginas) */}
                <div className="flex flex-col gap-4 text-xs md:text-sm text-gray-300 font-light">
                    <p className="font-bold text-white mb-2">Páginas</p>
                    <a href="#" className="hover:text-white transition-colors">Home</a>
                    <a href="#" className="hover:text-white transition-colors">Sobre o Dr. Bruno</a>
                    <a href="#" className="hover:text-white transition-colors">Especialidades & Tratamentos</a>
                    <a href="#" className="hover:text-white transition-colors">Experiências</a>
                    <a href="#" className="hover:text-white transition-colors">Contato</a>
                </div>

                {/* Coluna 3: Contatos e Endereços */}
                <div className="flex flex-col gap-6 text-xs md:text-sm text-gray-300 font-light pr-4">
                    <p className="font-bold text-white mb-1">Contato e Endereços</p>

                    {/* Endereço 1 - Hospital 9 de Julho */}
                    <div className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer">
                        <MapPin className="w-4 h-4 mt-1 shrink-0" strokeWidth={1.5} />
                        <p>
                            <span className="font-semibold text-white">Hospital 9 de Julho</span><br />
                            R. Santos Dumont, 56 - Granbery<br />
                            Juiz de Fora - MG
                        </p>
                    </div>

                    {/* Endereço 2 - Hospital João Felício */}
                    <div className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer">
                        <MapPin className="w-4 h-4 mt-1 shrink-0" strokeWidth={1.5} />
                        <p>
                            <span className="font-semibold text-white">Hospital João Felício</span><br />
                            R. Barão de Juiz de Fora - Vitorino Braga<br />
                            Juiz de Fora - MG
                        </p>
                    </div>

                    <div className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer mt-2">
                        <Phone className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                        <p>(32) 3690-8098</p>
                    </div>

                    <div className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer">
                        <Mail className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                        <p>brmarcelino@oncologico.com.br</p>
                    </div>
                </div>

                {/* Coluna 4: Redes Sociais */}
                <div className="flex flex-col gap-6 text-xs md:text-sm text-gray-300 font-light">
                    <p className="font-bold text-white mb-1">Mídias Sociais</p>

                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                            <Facebook className="w-4 h-4" strokeWidth={1.5} />
                        </a>
                        <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                            <Twitter className="w-4 h-4" strokeWidth={1.5} />
                        </a>
                        <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                        </a>
                        <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                            <Instagram className="w-4 h-4" strokeWidth={1.5} />
                        </a>
                    </div>
                </div>

            </div>

            {/* Linha Inferior: Direitos Autorais */}
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[#888888] text-[10px] md:text-xs text-center">
                    © {new Date().getFullYear()} Dr. Bruno Marcelino - Cirurgião Oncológico. Todos os direitos reservados.
                </p>
                <p className="text-[#888888] text-[10px] md:text-xs text-center">
                    Desenvolvido com Next.js
                </p>
            </div>

        </footer>
    );
}