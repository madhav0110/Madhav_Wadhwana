import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import { Reveal } from './Reveal'

export default function Projects() {
  return (
    <section id="work" className="section-shell section-pad">
      <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <p className="eyebrow">Featured work</p>
          <h2 className="mt-4 text-[clamp(2.2rem,6vw,4.8rem)] font-semibold leading-none tracking-[-0.055em]">Case studies with system proof.</h2>
        </div>
        <p className="max-w-md leading-7 text-slate-400">Each project is framed around the problem, role, stack, and product surface — because applied AI is only valuable when the workflow works.</p>
      </Reveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <article className="premium-card group relative min-h-full overflow-hidden rounded-[2rem] p-5 transition duration-300 hover:-translate-y-2 hover:border-white/20">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80 transition group-hover:opacity-100`} />
              <div className="relative">
                <div className="mb-6 overflow-hidden rounded-3xl border border-white/10 bg-black/24 p-4">
                  <div className="mb-4 flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-300" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-300" /></div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {project.metrics.map((metric) => <div key={metric} className="rounded-2xl border border-white/10 bg-white/6 p-4 font-mono text-xs uppercase tracking-[0.14em] text-slate-300">{metric}</div>)}
                  </div>
                  <div className="mt-4 h-24 rounded-2xl bg-[linear-gradient(90deg,rgba(117,227,255,.18),rgba(155,140,255,.08)),repeating-linear-gradient(90deg,rgba(255,255,255,.08)_0_1px,transparent_1px_18px)] transition duration-500 group-hover:scale-[1.02]" />
                </div>
                <h3 className="text-3xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
                <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
                  <div><dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">Problem</dt><dd className="mt-2 text-slate-300">{project.problem}</dd></div>
                  <div><dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">Role</dt><dd className="mt-2 text-slate-300">{project.role}</dd></div>
                  <div><dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">Tech stack</dt><dd className="mt-2 text-slate-300">{project.stack}</dd></div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 font-mono text-xs text-slate-300">{tag}</span>)}</div>
                <a href="#contact" className="focus-ring mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 text-sm font-medium text-white transition hover:bg-white/[0.12]" aria-label={`${project.cta} for ${project.title}`}>{project.cta} <ArrowUpRight size={16} /></a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
