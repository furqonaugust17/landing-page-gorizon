import { Compass, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Proyek', href: '#proyek' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-primary hover:opacity-90 transition-opacity">
          <Compass className="w-8 h-8 text-accent" />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl leading-none">Gorizon</span>
            <span className="text-[0.65rem] font-medium text-slate-500 uppercase tracking-wider mt-1">IT Consulting</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#kontak" 
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Konsultasi Gratis
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-slate-100 p-4 shadow-xl absolute w-full flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-accent p-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#kontak"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary text-white text-center px-5 py-3 rounded-xl font-medium mt-2"
          >
            Konsultasi Gratis
          </a>
        </nav>
      )}
    </header>
  );
}
