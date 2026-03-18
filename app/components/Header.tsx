import Link from 'next/link';

export default function Header() {
    const navItems = ['Home', 'Sobre', 'Especialidades', 'FAQ', 'Endereços', 'Contato'];

    return (
        <header className="w-full flex justify-center items-center py-10 bg-background">
            <nav className="flex gap-8 md:gap-12 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase font-sans">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        href="#"
                        // Lógica para deixar o primeiro item ativo com a borda inferior
                        className={`pb-2 transition-colors duration-300 ${index === 0
                            ? 'text-secondary border-b border-secondary'
                            : 'text-gray-500 hover:text-primary'
                            }`}
                    >
                        {item}
                    </Link>
                ))}
            </nav>
        </header>
    );
}