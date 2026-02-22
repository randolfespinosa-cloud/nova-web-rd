import Image from "next/image"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Aura Estetica",
    description: "Sitio web para clínica de estética con reservas online y galería de resultados.",
    image: "/images/project-aura.png",
    tags: ["Next.js", "Tailwind", "Supabase"],
    link: "https://aura-estetica-94zlqnlen-randolfespinosa-5004s-projects.vercel.app/",
  },
  {
    title: "Mosaico de Sabor",
    description: "Landing page para pizzería artesanal con menú visual y pedidos en línea.",
    image: "/images/project-nova.png",
    tags: ["React", "CSS3", "Responsive"],
    link: "https://randolfespinosa-cloud.github.io/mosaico-de-sabor/",
  },
  {
    title: "Finansmart",
    description: "Plataforma de servicios contables y financieros optimizada para negocios.",
    image: "/images/project-vertex.png",
    tags: ["TypeScript", "Fintech", "Dashboard"],
    link: "https://randolfespinosa-cloud.github.io/finansmart-demo/",
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="px-6 py-24 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">Proyectos</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Nuestro trabajo reciente
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-heading text-lg font-semibold text-card-foreground">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                  Ver proyecto en vivo <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}