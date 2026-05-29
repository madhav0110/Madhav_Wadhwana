import { Reveal } from './Reveal'

const interests = ['AI Product Engineering', 'Machine Learning Systems', 'LLM Integrations', 'Secure Automation', 'Intelligent SaaS', 'Real-time Decision Systems']

export default function Vision() {
  return (
    <section className="section-shell section-pad">
      <Reveal className="premium-card overflow-hidden rounded-[2rem] p-6 sm:p-10 lg:p-14">
        <div className="absolute" />
        <p className="eyebrow">Future direction</p>
        <h2 className="mt-4 max-w-5xl text-[clamp(2.2rem,6vw,4.8rem)] font-semibold leading-none tracking-[-0.055em]">Building toward AI systems that feel less like demos and more like products.</h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">My direction is applied AI: intelligent SaaS tools, ML-powered workflows, secure automation systems, and interfaces that help people act on complex data.</p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest) => <div key={interest} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 font-mono text-sm text-slate-300">{interest}</div>)}
        </div>
      </Reveal>
    </section>
  )
}
