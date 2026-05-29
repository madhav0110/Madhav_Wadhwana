import { Cpu, Layers3, PenTool } from 'lucide-react'
import { Reveal } from './Reveal'

const cards = [
  { title: 'AI Systems Builder', copy: 'Connects model behavior, data flow, and product surfaces into working AI tools.', icon: Cpu },
  { title: 'Full-stack Product Engineer', copy: 'Builds across frontend, backend, APIs, and deployment-minded workflows.', icon: Layers3 },
  { title: 'Design-aware Problem Solver', copy: 'Uses clean structure and interface craft to make complex systems understandable.', icon: PenTool },
]

export default function About() {
  return (
    <section id="about" className="section-shell section-pad">
      <Reveal className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="mt-4 text-[clamp(2.2rem,6vw,4.7rem)] font-semibold leading-none tracking-[-0.055em]">From model logic to product reality.</h2>
        </div>
        <div className="text-lg leading-8 text-stone-700">
          <p>I’m an AI-focused computer engineering student and builder who likes working where intelligence, systems, and usability meet. My interest is not just training models, but shaping the full product around them — from backend workflows and ML pipelines to clean interfaces that make complex systems usable.</p>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {cards.map((card, index) => <Reveal key={card.title} delay={index * 0.08} className="premium-card rounded-3xl p-6"><card.icon className="mb-6 text-amber-700" /><h3 className="text-xl font-semibold">{card.title}</h3><p className="mt-3 leading-7 text-stone-600">{card.copy}</p></Reveal>)}
      </div>
    </section>
  )
}
