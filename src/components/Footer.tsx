export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-blue-200/60 bg-white/70">
      <div className="container-base py-6 text-center text-sm text-slate-600">
        © {year} Siddharth Pathak
      </div>
    </footer>
  )
}