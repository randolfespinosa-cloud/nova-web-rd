export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="https://novawebrd.com" className="font-heading text-lg font-bold tracking-tight text-foreground">
            Nova Web <span className="text-[#0070f3]">R</span><span className="text-[#D4AF37]">D</span>
          </a>
          <p className="text-sm text-muted-foreground">info@novawebrd.com</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
          <p className="text-sm text-muted-foreground">© 2026 Todos los derechos reservados.</p>
          <p className="text-xs text-muted-foreground/60">Hecho con ❤️ en República Dominicana.</p>
        </div>
      </div>
    </footer>
  )
}