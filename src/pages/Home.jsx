import { ArrowRight, CalendarCheck, Check, MessageCircle, Phone, Star, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { decoration, equipment, gallery, processSteps, reviews, services } from '../data/landingContent'

const heroImage =
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=2200&q=85'

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.24 },
  transition: { duration: 0.58, ease: 'easeOut' },
}

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Equipment />
      <Gallery />
      <Process />
      <Reviews />
      <ContactCta />
    </>
  )
}

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-svh overflow-hidden scroll-mt-20">
      <img
        src={heroImage}
        alt="Eventbeleuchtung mit Buehne und Publikum"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/70" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,6,0.96),rgba(5,5,6,0.72),rgba(5,5,6,0.38)),linear-gradient(180deg,rgba(5,5,6,0.48),rgba(5,5,6,0.88))]" />

      <div className="mx-auto flex min-h-svh max-w-7xl items-center px-5 pb-12 pt-28 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-lg border border-cyan-300/25 bg-white/10 px-3 py-2 text-xs font-semibold uppercase text-cyan-100 backdrop-blur-md"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <Zap size={15} />
            Licht, Sound & Dekoration aus der Region
          </motion.div>

          <motion.h1
            className="max-w-3xl text-5xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
          >
            Eventtechnik fuer unvergessliche Naechte
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
          >
            Licht, Sound, Partyzelte und Dekoration fuer Hochzeiten, Geburtstage,
            Firmenfeiern und Vereinsfeste. Modern geplant, sauber geliefert und
            passend zu eurem Event aufgebaut.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: 'easeOut' }}
          >
            <a
              href="#kontakt"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 py-3 text-sm font-extrabold text-black shadow-[0_0_38px_rgba(34,211,238,0.33)] transition hover:bg-cyan-200"
            >
              Jetzt anfragen
              <ArrowRight size={18} />
            </a>
            <a
              href="#leistungen"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg border border-white/18 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-violet-200/50 hover:bg-violet-300/15"
            >
              Leistungen ansehen
              <CalendarCheck size={18} />
            </a>
          </motion.div>

          <motion.div
            className="mt-12 grid max-w-2xl grid-cols-3 gap-3 text-center sm:text-left"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: 'easeOut' }}
          >
            {[['6+', 'Leistungsbereiche'], ['230V', 'Zeltbetrieb'], ['10km', 'Lieferung inkl.']].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/8 px-3 py-4 backdrop-blur-md">
                <div className="text-xl font-black text-white sm:text-2xl">{value}</div>
                <div className="mt-1 text-xs text-white/52">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="leistungen" className="scroll-mt-20 bg-[#07070a] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Alles fuer dein Event"
          title="Technik, Zelte und Dekoration aus einer Hand"
          text="FeToMa verbindet moderne Veranstaltungstechnik mit unkompliziertem Verleih und persoenlicher Beratung fuer private und regionale Events."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.04 }}
              className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.07]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-lg border border-white/15 bg-black/40 px-3 py-1 text-xs font-semibold text-cyan-100 backdrop-blur-md">
                  {service.meta}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-black text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Equipment() {
  return (
    <section id="equipment" className="scroll-mt-20 bg-[#0b0b10] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div {...fadeUp}>
          <p className="mb-3 text-xs font-bold uppercase text-violet-200">Equipment & Mietsortiment</p>
          <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">Vom Subwoofer bis zur Tischdeko</h2>
          <p className="mt-5 text-base leading-7 text-white/64 sm:text-lg">
            Der Prototyp nutzt die vorhandenen FeToMa-Leistungen als moderne Uebersicht: Technikpakete,
            einzelne Komponenten, Partyzelte und Dekoration werden nicht als trockene Liste, sondern als
            buchbare Event-Bausteine praesentiert.
          </p>
          <div className="mt-7 rounded-lg border border-cyan-300/20 bg-cyan-300/8 p-5 text-sm leading-6 text-cyan-50">
            Blowup Partyzelt: 5,50m x 5,00m, inklusive Geblaese, Befestigung, Auf- und Abbau sowie
            kostenloser Lieferung im 10km Umkreis. Weitere Licht- und Musikpakete koennen ergaenzt werden.
          </div>
        </motion.div>

        <div className="grid gap-5">
          <motion.div {...fadeUp} className="rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="text-xl font-black text-white">Technik-Auszug</h3>
              <span className="rounded-lg bg-violet-300/12 px-3 py-1 text-xs font-bold text-violet-100">auf Anfrage</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {equipment.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-white/8 bg-black/20 px-3 py-3 text-sm text-white/72">
                  <Check className="mt-0.5 shrink-0 text-cyan-300" size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {decoration.map((item) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-violet-200/40 hover:bg-white/[0.07]">
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">{item.detail}</p>
                <p className="mt-4 text-sm font-bold text-cyan-200">{item.price}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="galerie" className="scroll-mt-20 bg-[#07070a] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Eindruecke"
          title="Visuelle Energie fuer Feiern, Hochzeiten und Vereinsfeste"
          text="Die Bildsprache bleibt hochwertig und emotional, damit Besucher sofort verstehen: Hier wird Atmosphaere geplant, nicht nur Equipment verliehen."
        />

        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4">
          {gallery.map((image) => (
            <motion.figure
              key={image.title}
              {...fadeUp}
              className={['group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]', image.className].join(' ')}
            >
              <img src={image.src} alt={image.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/12 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 text-sm font-bold text-white">{image.title}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="ablauf" className="scroll-mt-20 bg-[#0b0b10] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="So laeuft eure Anfrage ab"
          title="Einfach anfragen, klar planen, entspannt feiern"
          text="Der Ablauf ist bewusst niedrigschwellig gehalten: kurze Anfrage, verstaendliche Empfehlung und ein sauberer Aufbau vor Ort."
        />

        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.number}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.05 }}
              className="relative rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="mb-8 text-4xl font-black text-white/12">{step.number}</div>
              <h3 className="text-lg font-black text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/58">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section className="bg-[#07070a] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Kundenfeedback"
          title="Zuverlaessig, unkompliziert und modern ausgestattet"
          text="Fuer den Prototyp zeigen kurze Review Cards den Vertrauensaufbau, der spaeter mit echten Stimmen ersetzt werden kann."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.05 }}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="mb-5 flex gap-1 text-cyan-300">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg font-bold leading-7 text-white">"{review}"</p>
              <p className="mt-5 text-sm text-white/48">Eventkunde aus der Region</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactCta() {
  return (
    <section id="kontakt" className="scroll-mt-20 bg-[#050506] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <motion.div
        {...fadeUp}
        className="mx-auto grid max-w-7xl overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.18),transparent_34rem),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="p-6 sm:p-10 lg:p-14">
          <p className="mb-3 text-xs font-bold uppercase text-cyan-200">Jetzt Event anfragen</p>
          <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">Bereit fuer euer naechstes Event?</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/66 sm:text-lg">
            Schreibt kurz, was ihr plant: Hochzeit, Geburtstag, Firmenfeier, Vereinsfest oder Partyzelt.
            FeToMa meldet sich mit einer passenden Empfehlung fuer Technik, Aufbau und Dekoration.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/491234567890"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 py-3 text-sm font-extrabold text-black shadow-[0_0_38px_rgba(34,211,238,0.28)] transition hover:bg-cyan-200"
            >
              WhatsApp schreiben
              <MessageCircle size={18} />
            </a>
            <a
              href="tel:+491234567890"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg border border-white/18 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-violet-200/50 hover:bg-violet-300/15"
            >
              Telefonkontakt
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/24 p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
          <h3 className="text-xl font-black text-white">Anfrage-Checkliste</h3>
          <div className="mt-6 grid gap-3">
            {['Datum und Uhrzeit', 'Eventart und Location', 'Gaestezahl', 'Gewuenschte Technik oder Deko', 'Lieferadresse und Aufbauzeit'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/72">
                <Check className="text-cyan-300" size={17} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Home
