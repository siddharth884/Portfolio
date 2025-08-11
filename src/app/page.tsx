export default function HomePage() {
  return (
    <section className="space-y-10">
      <header className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900">Siddharth Pathak</h1>
        <p className="text-lg sm:text-xl text-blue-700">
          Java Developer | AWS Enthusiast | Backend Developer
        </p>
      </header>

      <section className="card">
        <h2 className="text-2xl font-semibold text-blue-900">About Me</h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          I am a backend-focused software engineer passionate about building reliable, scalable systems.
          With strong foundations in Java and Spring Boot, I enjoy designing RESTful APIs and microservices,
          leveraging AWS to deliver performant, maintainable solutions. I value clean code, thoughtful design,
          and continuous learning.
        </p>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold text-blue-900">Skills</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            'Java',
            'JavaScript',
            'Spring Boot',
            'Hibernate',
            'MySQL',
            'PostgreSQL',
            'AuroraDB',
            'AWS (Lambda, S3, Kinesis, API Gateway)',
            'REST API Development',
            'Microservices',
            'Git',
            'Maven',
            'Docker',
            'Postman',
          ].map((skill) => (
            <div key={skill} className="rounded-md border border-blue-100 bg-white px-3 py-2 text-sm text-blue-900">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}