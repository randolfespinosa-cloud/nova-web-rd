import { Zap, Smartphone, Wrench } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Rapido y eficiente",
    description:
      "Creamos sitios optimizados con tiempos de carga ultrarapidos que mejoran la experiencia de usuario y el posicionamiento SEO.",
  },
  {
    icon: Smartphone,
    title: "Adaptable a moviles",
    description:
      "Nuestros disenos responsive se adaptan perfectamente a cualquier dispositivo, desde smartphones hasta pantallas de escritorio.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento continuo",
    description:
      "Ofrecemos soporte tecnico y actualizaciones constantes para que tu sitio web siempre funcione al maximo rendimiento.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
            Servicios
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Lo que podemos hacer por tu negocio
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-heading text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
