import { MessageSquare, FileSearch, Code2, Rocket } from 'lucide-react';

export function HowWeWork() {
  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "1. Konsultasi Awal",
      description: "Diskusi awal untuk memahami kebutuhan bisnis dan masalah yang ingin diselesaikan."
    },
    {
      icon: <FileSearch className="w-6 h-6 text-primary" />,
      title: "2. Analisis & Proposal",
      description: "Kami menganalisis secara mendalam dan menyusun proposal solusi yang transparan."
    },
    {
      icon: <Code2 className="w-6 h-6 text-primary" />,
      title: "3. Pengerjaan",
      description: "Proses eksekusi yang bisa dipantau dengan laporan progres (update) berkala."
    },
    {
      icon: <Rocket className="w-6 h-6 text-primary" />,
      title: "4. Delivery & Support",
      description: "Serah terima proyek dengan dukungan pasca-implementasi yang dapat diandalkan."
    }
  ];

  return (
    <section id="proses" className="py-20 md:py-32 bg-secondary border-t border-slate-200 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Cara Kami Bekerja
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Langkah demi langkah yang terstruktur dan transparan untuk memastikan keberhasilan proyek Anda.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center mb-6 relative z-10 group-hover:border-accent group-hover:scale-110 transition-all duration-300 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
