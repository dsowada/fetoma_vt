import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navItems = [
  { label: 'Startseite', href: '#home' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Equipment', href: '#equipment' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Kontakt', href: '#kontakt' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Hauptnavigation"
      >
        <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="grid size-10 place-items-center rounded-lg border border-cyan-300/40 bg-white/10 shadow-[0_0_28px_rgba(34,211,238,0.18)]">
            <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.95)]" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold uppercase text-white">FeToMa</span>
            <span className="mt-1 text-[0.68rem] uppercase text-white/55">
              Veranstaltungstechnik
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white lg:px-4"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#kontakt"
          className="hidden rounded-lg border border-violet-300/35 bg-violet-400/15 px-4 py-2 text-sm font-semibold text-violet-100 shadow-[0_0_30px_rgba(168,85,247,0.16)] transition hover:border-violet-200/60 hover:bg-violet-400/25 lg:inline-flex"
        >
          Anfrage starten
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg border border-white/15 bg-white/10 text-white md:hidden"
          aria-label={isOpen ? 'Menue schliessen' : 'Menue oeffnen'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-t border-white/10 bg-[#08080a]/95 px-5 py-5 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-base font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
