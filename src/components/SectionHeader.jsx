function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className="mb-3 text-xs font-bold uppercase text-cyan-200">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">{title}</h2>
      {text && <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/64 sm:text-lg">{text}</p>}
    </div>
  )
}

export default SectionHeader
