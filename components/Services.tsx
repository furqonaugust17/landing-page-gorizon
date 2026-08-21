import { Code, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react';

export function Services() {
  return (
    <section id="layanan" className="py-20 md:py-32 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Layanan Kami
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Fokus utama kami adalah merealisasikan ide Anda melalui pengembangan perangkat lunak yang tangguh, didukung dengan strategi IT yang tepat.
          </p>
        </div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {/* Layanan Utama: Software & Web Development */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden group">
            {/* Dekorasi Background */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-700 ease-in-out z-0"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-primary flex items-center justify-center shadow-inner shadow-white/20">
                <Code className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
                  Software & Web Development
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Membangun website, aplikasi web, hingga sistem custom yang disesuaikan dengan proses bisnis Anda — mulai dari company profile, sistem internal, hingga aplikasi berbasis data.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {[
                    "Website & Company Profile", 
                    "Aplikasi Web Custom", 
                    "Sistem Internal Bisnis", 
                    "API Development"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="#kontak" 
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-primary/20 group/btn"
                >
                  Konsultasi Proyek Dev
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Layanan Pendukung: IT Strategy & Consulting */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-100 text-primary flex items-center justify-center">
              <Lightbulb className="w-6 h-6" />
            </div>
            
            <div>
              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full mb-3">
                Layanan Pendukung
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                IT Strategy & Consulting
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Butuh arahan sebelum membangun software Anda? Kami bantu audit sistem yang sudah berjalan dan rekomendasi teknologi yang tepat, biasanya sebagai bagian awal dari proyek development.
              </p>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["Audit Sistem IT", "Rekomendasi Teknologi", "Roadmap Digitalisasi", "Konsultasi Teknis"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-1 h-1 rounded-full bg-slate-400" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
