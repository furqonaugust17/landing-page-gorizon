import { Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 text-white mb-6">
              <div className="bg-white p-0.5 rounded-full shadow-md">
                <Image src="/logo.webp" alt="Gorizon Logo" width={44} height={44} className="rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none">Gorizon</span>
                <span className="text-[0.65rem] font-medium text-slate-400 uppercase tracking-wider mt-1">Software & Web Development</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Mempermudah Bisnis Anda, dengan Cara yang Transparan.
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-4">
              <li><a href="#tentang" className="hover:text-accent transition-colors">Tentang Kami</a></li>
              <li><a href="#layanan" className="hover:text-accent transition-colors">Layanan</a></li>
              <li><a href="#proses" className="hover:text-accent transition-colors">Proses</a></li>
              <li><a href="#proyek" className="hover:text-accent transition-colors">Portofolio Proyek</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                <a href="mailto:contact@gorizon.web.id" className="hover:text-accent transition-colors">contact@gorizon.web.id</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} Gorizon. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" rel="nofollow" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" rel="nofollow" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
