import { ArrowRight, Code2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-secondary via-white to-secondary pointer-events-none" />
      <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-sm font-medium text-slate-700 mb-8 border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Mitra Development Terbaik Anda
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary leading-tight mb-6">
            Software & Web Development yang Transparan dan Tepercaya untuk Bisnis Anda
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Dari website, aplikasi web, hingga sistem custom — dikerjakan dengan proses yang jelas dan komunikasi terbuka di setiap tahap. Butuh arahan strategi teknologi dulu? Kami juga bantu lewat IT consulting.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#kontak" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              Konsultasi Sekarang
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#layanan" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-medium text-lg hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              <Code2 className="w-5 h-5 text-slate-400" />
              Lihat Layanan Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
