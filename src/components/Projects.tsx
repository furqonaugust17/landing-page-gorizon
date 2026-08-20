import { ExternalLink, LayoutTemplate } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Sistem Inventory — [Nama Klien]",
      category: "Web Development",
      description: "Pengembangan sistem manajemen inventaris yang mengintegrasikan berbagai cabang toko dengan pelacakan real-time.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      impact: "Meningkatkan efisiensi proses 30%",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Audit Keamanan & Performa IT",
      category: "IT Consulting",
      description: "Audit menyeluruh terhadap infrastruktur IT startup fintech, mengidentifikasi celah keamanan dan bottleneck performa.",
      technologies: ["AWS", "Kubernetes", "Security Audit"],
      impact: "Mengurangi downtime server hingga 99%",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Platform E-Learning Corporate",
      category: "Web Development",
      description: "Membangun platform pelatihan karyawan berbasis web dengan fitur analitik pembelajaran yang mendalam.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      impact: "Meningkatkan partisipasi karyawan 50%",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      link: "#"
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
                <img 
                  src={project.image} 
                  alt={`Screenshot ${project.title}`} 
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
