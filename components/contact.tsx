import { MessageCircle, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
          Contacto
        </p>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          Hablemos de tu proyecto
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
          Nuestro equipo esta listo para ayudarte a crear la presencia digital
          que tu negocio necesita. Escribenos y comencemos juntos.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/18293803317" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#25D366] px-8 py-4 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>

          <a
            href="https://www.instagram.com/novawebrd/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-lg border-2 border-accent bg-accent/10 px-8 py-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/20 sm:w-auto"
          >
            <Instagram className="h-5 w-5" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}