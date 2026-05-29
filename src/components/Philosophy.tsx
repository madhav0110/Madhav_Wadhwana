import { ShieldCheck, Sparkles, SquareStack, Wand2 } from 'lucide-react'
import { Reveal } from './Reveal'

const values = [
  { title: 'AI should be useful', copy: 'Models matter only when they solve real problems.', icon: Sparkles },
  { title: 'Interfaces should reduce complexity', copy: 'Good UI turns technical systems into understandable tools.', icon: SquareStack },
  { title: 'Systems should be reliable', copy: 'Security, data flow, and performance matter in real-world AI.', icon: ShieldCheck },
  { title: 'Craft matters', copy: 'Clean structure, smooth interaction, and thoughtful motion create trust.', icon: Wand2 },
]

export default function Philosophy() {
  return (
    <section className="section-shell section-pad">
      <Reveal className="text-center">
        <p className="eyebrow">Operating philosophy</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(2.2rem,6vw,4.8rem)] font-semibold leading-none tracking-[-0.055em]">I build where intelligence meets usability.</h2>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => <Reveal key={value.title} delay={index * 0.07} className="premium-card rounded-3xl p-6"><value.icon className="text-cyan-200" /><h3 className="mt-8 text-xl font-semibold">{value.title}</h3><p className="mt-3 leading-7 text-slate-400">{value.copy}</p></Reveal>)}
      </div>
    </section>
  )
}
