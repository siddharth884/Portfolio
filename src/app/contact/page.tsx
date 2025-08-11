export const metadata = {
  title: 'Contact | Siddharth Pathak',
}

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold text-blue-900">Contact</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="card">
          <h2 className="text-lg font-semibold text-blue-900">Email</h2>
          <a className="link mt-2 inline-block" href="mailto:pathaksiddharth007@gmail.com">
            pathaksiddharth007@gmail.com
          </a>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold text-blue-900">Phone</h2>
          <a className="link mt-2 inline-block" href="tel:+919669904329">
            +91-9669904329
          </a>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold text-blue-900">LinkedIn</h2>
          <a className="link mt-2 inline-block" href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/yourprofile
          </a>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold text-blue-900">GitHub</h2>
          <a className="link mt-2 inline-block" href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            github.com/yourusername
          </a>
        </div>
      </div>
    </section>
  )
}