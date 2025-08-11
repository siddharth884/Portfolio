export const metadata = {
  title: 'Projects | Siddharth Pathak',
}

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Book Rental Platform',
      description:
        'A Spring Boot-based platform for browsing, renting, and managing books with secure authentication and role-based access.',
    },
    {
      title: 'AWS Serverless API',
      description:
        'An event-driven API using AWS Lambda, API Gateway, and DynamoDB with streaming via Kinesis for asynchronous processing.',
    },
    {
      title: 'Portfolio Website',
      description:
        'Clean, responsive personal portfolio built with Next.js and Tailwind CSS showcasing projects and contact details.',
    },
    {
      title: 'Real-time Data Pipeline',
      description:
        'Ingestion and processing pipeline using Kinesis streams and Lambda consumers, persisting to Aurora/PostgreSQL.',
    },
  ]

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold text-blue-900">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <h2 className="text-xl font-semibold text-blue-900">{p.title}</h2>
            <p className="mt-3 text-slate-700">{p.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}