import { Code, Lightbulb, ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Software & Web Development",
      description: "Membangun website, aplikasi web, hingga sistem custom yang disesuaikan dengan proses bisnis Anda — mulai dari company profile, sistem internal, hingga aplikasi berbasis data.",
      features: ["Company Profile", "Aplikasi Web Custom", "Sistem Internal", "API Development"]
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: "IT Strategy & Consulting",
      description: "Membantu bisnis menentukan arah teknologi yang tepat, mulai dari audit sistem yang sudah berjalan, rekomendasi tools/teknologi, hingga menyusun roadmap digitalisasi jangka pendek maupun panjang.",
      features: ["Audit Sistem IT", "Rekomendasi Teknologi", "Roadmap Digitalisasi", "Konsultasi Teknis"]
    }
  ];

  return (
    <section id="layanan" className="py-20 md:py-32 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Layanan Kami
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Gorizon menawarkan layanan komprehensif mulai dari pengembangan perangkat lunak hingga konsultasi strategi IT untuk mendorong pertumbuhan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-8 shadow-inner shadow-white/20">
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-10">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#kontak" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group"
              >
                Konsultasi Layanan Ini
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
