import { HelpCircle } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: "Apa itu Gorizon?",
      answer: "Gorizon adalah konsultan IT yang fokus pada software/web development dan IT strategy consulting, dengan pendekatan yang transparan di setiap tahap kerja."
    },
    {
      question: "Layanan apa saja yang ditawarkan Gorizon?",
      answer: "Kami menawarkan layanan Software & Web Development (pembuatan aplikasi, website custom) serta IT Strategy & Consulting (audit, rekomendasi teknologi, roadmap). Selengkapnya dapat dilihat di bagian Layanan."
    },
    {
      question: "Berapa lama proses pengerjaan proyek?",
      answer: "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Umumnya berkisar antara 2 minggu hingga beberapa bulan. Kami selalu memberikan timeline yang jelas di awal sebelum pengerjaan dimulai."
    },
    {
      question: "Bagaimana cara memulai konsultasi dengan Gorizon?",
      answer: "Calon klien dapat menghubungi kami lewat WhatsApp atau Form Email yang tersedia di halaman ini untuk menjadwalkan sesi konsultasi awal secara gratis."
    },
    {
      question: "Apa perbedaan Gorizon dengan vendor IT lainnya?",
      answer: "Kami berfokus pada transparansi total. Proses kerja, timeline, dan budget disampaikan secara jujur. Kami bertindak sebagai mitra konsultasi, bukan sekadar pelaksana tugas."
    },
    {
      question: "Apakah Gorizon bisa menangani proyek skala enterprise?",
      answer: "Ya, kami bisa. Namun fokus utama kami saat ini adalah membantu UMKM hingga bisnis menengah dan startup tahap awal untuk memiliki pondasi digital yang kuat."
    },
    {
      question: "Teknologi apa saja yang digunakan Gorizon?",
      answer: "Kami menggunakan stack teknologi modern dan reliable seperti React, Next.js, Node.js, TypeScript, Tailwind CSS, PostgreSQL, dan layanan Cloud (AWS/GCP/Vercel) sesuai dengan kebutuhan proyek."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Temukan jawaban cepat untuk pertanyaan umum seputar layanan dan proses kerja kami.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-secondary rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-accent/30 transition-colors"
            >
              <h3 className="text-lg md:text-xl font-heading font-bold text-primary mb-3">
                {faq.question}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
