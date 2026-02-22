import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary uppercase">
          Agencia de Desarrollo Web
        </p>

        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Desarrollo de sitios web{" "}
          <span className="text-primary">dinamicos</span>,{" "}
          <span className="text-accent">interactivos</span> y bien
          estructurados para escalar tu negocio
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Transformamos ideas en experiencias digitales que generan resultados.
          Creamos sitios rapidos, modernos y optimizados para convertir
          visitantes en clientes.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver nuestros proyectos
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Contactanos
          </a>
        </div>
      </div>

      <a
        href="#servicios"
        aria-label="Ir a servicios"
        className="absolute bottom-10 animate-bounce text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
