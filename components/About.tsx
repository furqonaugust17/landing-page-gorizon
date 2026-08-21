import { Search, HeartHandshake, ShieldCheck, Award } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: <Search className="w-6 h-6 text-accent" />,
      title: "Transparan",
      description: "Proses dan progres kerja selalu bisa dipantau tanpa ada yang ditutupi."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-accent" />,
      title: "Jujur",
      description: "Rekomendasi solusi sesuai kebutuhan bisnis Anda, bukan sekadar menjual jasa."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      title: "Dapat Dipercaya",
      description: "Komitmen penuh pada kualitas hasil dan ketepatan tenggat waktu."
    },
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      title: "Profesional",
      description: "Komunikasi dan hasil kerja yang memenuhi standar industri terbaik."
    }
  ];

  return (
    <section id="tentang" className="py-20 md:py-32 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Siapa Kami?
          </h2>
          <div className="text-lg text-slate-600 space-y-4 leading-relaxed">
            <p>
              <strong>Gorizon adalah mitra pengembangan software dan website</strong> yang membantu bisnis mewujudkan solusi digital secara transparan dan tepat sasaran. Kami percaya bahwa kepercayaan dibangun dari komunikasi yang jujur dan proses kerja yang jelas di setiap tahapnya — mulai dari perencanaan, pengembangan, hingga pasca-implementasi.
            </p>
            <p>
              Kami mengerjakan setiap proyek dengan pendekatan yang disesuaikan kebutuhan klien, bukan solusi satu ukuran untuk semua. Bagi klien yang butuh arahan lebih dulu sebelum masuk ke tahap pengembangan, kami juga menyediakan layanan IT strategy consulting sebagai pendukung.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-secondary border border-slate-100 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
