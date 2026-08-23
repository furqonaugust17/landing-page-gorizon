import { ExternalLink, LayoutTemplate } from 'lucide-react';
import Image from 'next/image';

export function Projects() {
  const projects = [
    {
      title: "Sistem Informasi Gadai — Pusat Gadai Padang",
      category: "Web Development",
      description: "Sistem manajemen pegadaian berbasis web untuk mencatat transaksi gadai, menghasilkan laporan, dan mengirim notifikasi otomatis ke nasabah. Dibangun untuk klien bisnis nyata yang membutuhkan pencatatan transaksi yang rapi dan proses pelaporan yang lebih efisien.",
      technologies: ["CodeIgniter 4", "Bootstrap 5", "Node.js", "MySQL"],
      impact: "Mempermudah pencatatan transaksi gadai dan pelaporan bisnis secara digital",
      image: "https://images.furqonaugust.site/projects/42b95f5d-b660-480c-b995-77c12eabfa6a.png",
      link: "https://pusatgadaipadang.com/"
    },
    {
      title: "TEFA-26 — Teaching Factory Management System",
      category: "Web Development",
      description: "Sistem manajemen Teaching Factory untuk SMKN 2 Batusangkar, mencakup pengelolaan produksi, transaksi penjualan, inventori, dan pelaporan, dengan dukungan multi-role (admin, guru, siswa, manajemen sekolah). Dikembangkan lintas platform web dan mobile dengan arsitektur yang dirancang untuk skala dan integrasi API.",
      technologies: ["Next.js 14", "Hono", "Cloudflare Workers", "Flutter"],
      impact: "Mendukung pengelolaan end-to-end produksi, penjualan, dan inventori sekolah (web & mobile)",
      image: "https://images.furqonaugust.site/projects/b59aa945-aab8-4a2d-9105-63582f4dc70f.png",
      link: "https://tefa.smkn2batusangkar.sch.id/"
    },
    {
      title: "Yokke Helpdesk — Sistem Ticketing EDC",
      category: "Web Development",
      description: "Sistem ticketing berbasis web untuk menangani laporan masalah perangkat EDC (Electronic Data Capture), dilengkapi fitur notifikasi real-time agar tim terkait bisa merespons laporan lebih cepat.",
      technologies: ["CodeIgniter 4", "JavaScript", "Bootstrap"],
      impact: "Mempercepat respons penanganan laporan masalah perangkat EDC",
      image: "https://images.furqonaugust.site/projects/1776840026108-1l31x8.png",
      link: ""
    },
    {
      title: "Cantigi Rent Car — Sistem Booking Rental Kendaraan",
      category: "Web Development",
      description: "Sistem Pemesanan Sewa Kendaraan PT. Cantigi International Tours adalah platform web untuk memudahkan pemesanan dan pengelolaan sewa kendaraan secara online, mencakup manajemen kendaraan, pelanggan, pengemudi, pembayaran, dan pelaporan transaksi. Tujuannya adalah meningkatkan efisiensi operasional dan kenyamanan pelanggan.",
      technologies: ["Laravel", "JavaScript", "Bootstrap"],
      impact: "Rental kendaraan dengan booking realtime untuk meningkatkan efisiensi operasional dan kenyamanan pelanggan.",
      image: "https://i.pinimg.com/736x/50/f6/aa/50f6aa51713bf205b24a3b983bed18e5.jpg",
      link: "https://cantigitours.com/"
    },
    {
      title: "Ethereal Kreatif — Sistem E-Commerce penjualan baju",
      category: "Web Development",
      description: "Ethereal Kreatif adalah aplikasi web yang membantu perusahaan memasarkan dan menjual produk pakaian secara online melalui katalog dan pemesanan langsung, sekaligus mendukung digitalisasi UMKM di Kota Padang.",
      technologies: ["Next.js 14", "Express.js", "tailwind"],
      impact: "Katalog interaktif dan pemesanan WhatsApp untuk memperluas pemasaran serta meningkatkan penjualan.",
      image: "https://i.pinimg.com/736x/de/25/18/de2518b8faebbd6c82b914edfc29b704.jpg",
      link: "https://ethereal-creative-project.vercel.app/"
    }
  ];

  return (
    <section id="proyek" className="py-20 md:py-32 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Proyek Kami
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Bukti nyata dari komitmen kami dalam memberikan solusi terbaik. Berikut adalah beberapa contoh proyek yang telah kami kerjakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={`Tangkapan layar dari hasil proyek: ${project.title}`}
                  loading="lazy"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                  {project.category}
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-secondary text-slate-600 text-xs font-medium px-2.5 py-1 rounded-md border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-accent">
                      {project.impact}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        className="p-2 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
                        aria-label={`Lihat detail ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder for when no projects exist / structure is used as template */}
        {projects.length === 0 && (
          <div className="text-center py-20 bg-secondary rounded-3xl border border-dashed border-slate-300">
            <LayoutTemplate className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-500 font-medium">Proyek portofolio akan segera ditambahkan di sini.</p>
          </div>
        )}
      </div>
    </section>
  );
}
