import Image from "next/image";

const cvPath = "/jersyla-veida-lima-tavares-cv.pdf";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java 8+", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data",
      "Spring Security",
      "Hibernate",
      "JPA",
      "MyBatis",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQL Server"],
  },
  {
    title: "Architecture and Design",
    skills: [
      "Clean Architecture",
      "SOLID Principles",
      "Design Patterns",
      "Object-Oriented Programming",
      "Microservices",
    ],
  },
  {
    title: "Testing and Quality",
    skills: ["JUnit", "Integration Testing", "TDD", "BDD", "Swagger", "Postman"],
  },
  {
    title: "DevOps and Tools",
    skills: [
      "Docker",
      "AWS",
      "Git",
      "GitLab",
      "Git Flow",
      "Jenkins",
      "CI/CD",
      "Flyway",
      "JIRA",
      "Confluence",
    ],
  },
  {
    title: "Messaging, Agile, and Languages",
    skills: ["RabbitMQ", "ActiveMQ", "Kafka", "Scrum", "English - Intermediate B1"],
  },
];

const experiences = [
  {
    role: "Fullstack Web Developer",
    company: "Freelancer",
    period: "Sep 2024 - Present",
    location: "Itacare, Bahia, Brazil",
    highlights: [
      "Designed and delivered responsive front-end interfaces using HTML, CSS, and JavaScript/TypeScript for client projects.",
      "Implemented RESTful APIs with Java and Spring Boot, integrating multiple backend services.",
      "Improved application performance through code refactoring and query tuning.",
      "Worked on modernization of legacy modules, improving scalability and maintainability.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Equiplano Sistemas",
    period: "Jul 2022 - Jun 2024",
    location: "Ilheus, Bahia, Brazil",
    highlights: [
      "Developed RESTful APIs with Spring for public-sector systems.",
      "Optimized complex JPA queries, improving execution time and system responsiveness.",
      "Managed database schema migrations with Flyway.",
      "Integrated asynchronous processing with RabbitMQ.",
      "Created dynamic compliance reports using JasperReports.",
      "Worked with agile development practices and production support.",
    ],
  },
  {
    role: "Backend Development Internship",
    company: "Aplopes Tecnologia",
    period: "Apr 2022 - Jun 2022",
    location: "Ilheus, Bahia, Brazil",
    highlights: [
      "Supported the development of a luxury e-commerce platform.",
      "Extended Broadleaf Commerce APIs to implement custom business rules.",
      "Implemented tests using JUnit and TDD practices.",
      "Collaborated with a global multicultural team in English during sprint cycles.",
    ],
  },
];

const education = [
  {
    degree: "Postgraduate Program in Software Engineering with Agile Methods",
    institution: "Universidade Cruzeiro do Sul",
    period: "2025 - 2026",
  },
  {
    degree: "Undergraduate Degree in Systems Analysis and Development",
    institution: "Universidade Cruzeiro do Sul",
    period: "2022 - 2024",
  },
  {
    degree: "Technical Course in Information Technology",
    institution: "Instituto Federal de Educacao, Ciencia e Tecnologia Baiano",
    period: "2019 - 2022",
  },
];

const projects = [
  {
    title: "SIM Card Management System",
    type: "Technical Case Study",
    description:
      "A demonstration system inspired by telecom operations, focused on SIM card management, advanced filtering, reporting, and backend integrations.",
    technologies: ["Java", "Spring Boot", "REST APIs", "SQL Server", "JSF/PrimeFaces", "Modern frontend technologies"],
  },
  {
    title: "Delivery Platform API",
    type: "Demonstration Project",
    description:
      "A backend API for managing customers, products, orders, delivery status, and transaction history in a delivery platform.",
    technologies: ["Java", "Spring Boot", "JPA", "PostgreSQL", "Swagger", "Docker"],
  },
  {
    title: "Administrative Dashboard",
    type: "Frontend Demonstration",
    description:
      "A responsive dashboard for managing data, filters, tables, forms, and business metrics with a clean user interface.",
    technologies: ["TypeScript", "React or Next.js", "HTML", "CSS"],
  },
];

const navItems = ["About", "Skills", "Experience", "Education", "Contact"];

export default function Home() {
  return (
    <main className="overflow-hidden bg-porcelain text-ink">
      <header className="absolute left-0 right-0 top-0 z-20 border-b border-white/10 bg-[#12002b]/45 backdrop-blur-2xl">
        <div className="section-shell flex items-center justify-between py-5">
          <a className="focus-ring text-sm font-bold uppercase text-white drop-shadow-[0_0_14px_rgba(236,72,153,0.55)]" href="#top">
            JVT
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm font-medium text-champagne lg:flex">
            {navItems.map((item) => (
              <a
                className="focus-ring transition hover:text-blush"
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            className="focus-ring rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:border-rosewood/70 hover:bg-white/15 hover:text-blush hover:shadow-glow"
            href={cvPath}
          >
            Download CV
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-screen bg-porcelain pt-24">
        <Image
          src="/hero-background.png"
          alt="Purple-lit software developer workspace with monitors showing code"
          fill
          priority
          className="object-cover object-[center_38%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(10,0,25,0.22)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,0,25,0.72)_0%,rgba(18,0,43,0.48)_38%,rgba(18,0,43,0.22)_70%,rgba(18,0,43,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,0,43,0.02)_0%,rgba(18,0,43,0.38)_100%)]" />
        <div className="section-shell relative z-10 flex min-h-[calc(100vh-6rem)] items-center pb-20 pt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase text-blush drop-shadow-[0_0_18px_rgba(236,72,153,0.65)]">Full-stack Java Developer</p>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-tight text-white drop-shadow-[0_0_32px_rgba(168,85,247,0.28)] sm:text-6xl lg:text-7xl">
              Jersyla Tavares
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-50 drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)] sm:text-xl">
              I build scalable web applications and backend solutions with Java, Spring Boot, REST APIs, and modern frontend technologies.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="focus-ring rounded-full bg-gradient-to-r from-rosewood to-[#EC4899] px-6 py-3 text-center text-sm font-bold uppercase text-white shadow-glow transition hover:scale-[1.02] hover:brightness-110"
                href="#experience"
              >
                View Experience
              </a>
              <a
                className="focus-ring rounded-full border border-white/18 bg-[#18002B]/45 px-6 py-3 text-center text-sm font-bold uppercase text-slate-50 backdrop-blur transition hover:scale-[1.02] hover:border-rosewood/70 hover:text-blush hover:shadow-glow"
                href="#contact"
              >
                Contact Me
              </a>
              <a
                className="focus-ring rounded-full border border-white/18 bg-[#18002B]/45 px-6 py-3 text-center text-sm font-bold uppercase text-slate-50 backdrop-blur transition hover:scale-[1.02] hover:border-rosewood/70 hover:text-blush hover:shadow-glow"
                href={cvPath}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#12001F] py-24 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow">About Me</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Scalable backend engineering with practical full-stack delivery.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-champagne sm:text-lg">
            <p>
              I am a Full-stack Java Developer with over 4 years of experience developing scalable web applications,
              RESTful APIs, and enterprise solutions. My background includes backend development with Java and Spring
              Boot, database optimization, legacy system modernization, API integrations, automated testing, and agile
              collaboration.
            </p>
            <p>
              I also have experience creating responsive front-end interfaces using HTML, CSS, JavaScript, and
              TypeScript, with a focus on maintainable code and production-ready software solutions.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-[#18002B] py-24 sm:py-28">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="eyebrow">Technical Skills</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">Technologies I use to build reliable software.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {skillCategories.map((category) => (
              <article className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-soft transition hover:border-rosewood/55 hover:bg-white/[0.07]" key={category.title}>
                <h3 className="text-base font-semibold text-white">{category.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm font-semibold text-champagne" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-[#12001F] py-24 sm:py-28">
        <div className="section-shell">
          <p className="eyebrow">Professional Experience</p>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {experiences.map((item) => (
              <article className="grid gap-5 py-8 lg:grid-cols-[0.7fr_1fr]" key={`${item.company}-${item.role}`}>
                <div>
                  <p className="text-sm font-semibold uppercase text-blush">{item.period}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-champagne">{item.company}</p>
                  <p className="mt-1 text-sm text-sage">{item.location}</p>
                </div>
                <ul className="space-y-3 text-base leading-8 text-champagne">
                  {item.highlights.map((highlight) => (
                    <li className="pl-5 before:-ml-5 before:mr-3 before:text-blush before:content-['/']" key={highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="bg-[#1A082E] py-24 text-white sm:py-28">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase text-blush">Education</p>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Academic background in software and technology.</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {education.map((item) => (
              <article className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-soft transition hover:border-rosewood/55 hover:bg-white/[0.07]" key={item.degree}>
                <p className="text-sm font-semibold uppercase text-blush">{item.period}</p>
                <h3 className="mt-5 text-2xl font-semibold">{item.degree}</h3>
                <p className="mt-4 leading-7 text-champagne">{item.institution}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="hidden bg-[#18002B] py-24 sm:py-28">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Technical Case Studies</p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">Demo projects for portfolio and study.</h2>
            </div>
            <p className="max-w-md leading-7 text-champagne">
              These portfolio and demonstration projects show technical direction and implementation thinking. They are
              not presented as professional client work.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-soft transition hover:-translate-y-1 hover:border-rosewood/55 hover:bg-white/[0.07]" key={project.title}>
                <p className="text-sm font-semibold text-blush">{project.type}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-champagne">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase text-champagne" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#12001F] py-24 sm:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">Let us talk about software development opportunities.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-champagne">
              Feel free to contact me for software development opportunities, freelance projects, or professional
              networking.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              className="focus-ring rounded-full bg-gradient-to-r from-rosewood to-[#EC4899] px-6 py-3 text-center text-sm font-bold uppercase text-white shadow-glow transition hover:scale-[1.02] hover:brightness-110"
              href="mailto:jersylaveida@gmail.com"
            >
              Email
            </a>
            <a
              className="focus-ring rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-center text-sm font-bold uppercase text-slate-50 transition hover:scale-[1.02] hover:border-rosewood/70 hover:text-blush hover:shadow-glow"
              href="https://linkedin.com/in/jersylaveida"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="focus-ring rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-center text-sm font-bold uppercase text-slate-50 transition hover:scale-[1.02] hover:border-rosewood/70 hover:text-blush hover:shadow-glow"
              href="https://github.com/jersylaveida"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="focus-ring rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-center text-sm font-bold uppercase text-slate-50 transition hover:scale-[1.02] hover:border-rosewood/70 hover:text-blush hover:shadow-glow"
              href={cvPath}
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0A0019] py-8 text-white">
        <div className="section-shell flex flex-col justify-between gap-3 text-sm text-sage sm:flex-row">
          <p>Copyright 2026 Jersyla Veida Lima Tavares. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}
