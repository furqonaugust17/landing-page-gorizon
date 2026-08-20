import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center p-8">
        <h2 className="text-4xl font-heading font-bold text-primary mb-4">404 - Halaman Tidak Ditemukan</h2>
        <p className="text-slate-600 mb-8">Maaf, halaman yang Anda cari tidak tersedia.</p>
        <Link href="/" className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}
