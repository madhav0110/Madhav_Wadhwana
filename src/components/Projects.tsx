import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import { Reveal } from './Reveal'

export default function Projects() {
  return (
    <section id="work" className="section-shell section-pad">
      <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <p className="eyebrow">§ 01 · Featured work</p>
          <h2 className="mt-4 text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-none tracking-[-0.06em] text-stone-950">Four projects. One applied-AI thesis.</h2>
        </div>
        <p className="max-w-md leading-7 text-stone-600">A Caveman-inspired case-study grid: numbered cards, tight copy, visible proof, and warm product-system restraint instead of neon darkness.</p>
      </Reveal>
      <div className="mt-12 grid gap-5 lg:grid-cols-4">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <article className="premium-card group relative min-h-full overflow-hidden rounded-xl p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-700/45">
              <div className="mb-8 flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
                <span className="font-bold text-stone-950">0{index + 1}</span>
                <span>{index === 0 ? 'flagship' : index === 1 ? 'platform' : index === 2 ? 'visual' : 'security'}</span>
              </div>
              <h3 className="text-3xl font-semibold tracking-[-0.045em] text-stone-950">{project.title}</h3>
              <p className="mt-5 min-h-32 leading-7 text-stone-700">{project.description}</p>
              <div className="cave-rule my-6" />
              <dl className="space-y-3 font-mono text-xs uppercase tracking-[0.14em]">
                {project.metrics.map((metric, metricIndex) => (
                  <div key={metric} className="flex justify-between gap-4 border-b border-dashed border-stone-900/15 pb-2">
                    <dt className="text-stone-500">{metricIndex === 0 ? 'Signal' : metricIndex === 1 ? 'Mode' : 'Output'}</dt>
                    <dd className="text-right font-bold text-stone-950">{metric}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-md border border-stone-900/15 bg-amber-50/70 px-2.5 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-stone-600">{tag}</span>)}
              </div>
              <a href="#contact" className="focus-ring mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg border-b border-stone-950 font-mono text-sm font-semibold text-stone-950" aria-label={`${project.cta} for ${project.title}`}>{project.cta} <ArrowUpRight size={16} /></a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
