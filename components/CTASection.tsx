import { Send, Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section id="kontak" className="py-20 md:py-32 bg-primary relative overflow-hidden scroll-mt-20">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Siap Membangun Solusi Digital Anda?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Jangan ragu untuk berdiskusi dengan kami. Konsultasikan kebutuhan IT bisnis Anda sekarang secara gratis.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/6280000000000" // Placeholder
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-all hover:shadow-lg hover:shadow-[#25D366]/20 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Hubungi via WhatsApp
            </a>
            
            {/* Email Button */}
            <a 
              href="mailto:hello@gorizon.web.id" // Placeholder
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:shadow-white/10 hover:-translate-y-1"
            >
              <Send className="w-5 h-5 text-accent" />
              Kirim Email
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            Respons cepat pada hari kerja (Senin - Jumat, 09:00 - 17:00)
          </p>
        </div>
      </div>
    </section>
  );
}
