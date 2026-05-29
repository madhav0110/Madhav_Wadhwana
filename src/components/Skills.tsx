import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import { Reveal } from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section-shell section-pad">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">Capabilities</p>
        <h2 className="mt-4 text-[clamp(2.2rem,6vw,4.8rem)] font-semibold leading-none tracking-[-0.055em]">Applied AI, shipped through product engineering.</h2>
        <p className="mt-5 text-lg leading-8 text-stone-700">A practical stack for building intelligent workflows: model logic, system glue, responsive interfaces, and clean delivery.</p>
      </Reveal>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08} className="premium-card group rounded-[1.75rem] p-6 transition hover:-translate-y-1 hover:border-amber-700/35">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl border border-stone-900/15 bg-[#fffaf0]/70 p-3 text-amber-700"><group.icon /></div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{group.title}</h3>
                <p className="mt-3 leading-7 text-stone-600">{group.description}</p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {group.tools.map((tool, toolIndex) => (
                <motion.span key={tool} className="rounded-full border border-stone-900/15 bg-[#fffaf0]/70 px-3 py-2 font-mono text-xs text-stone-700" initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: toolIndex * 0.035 }}>
                  {tool}
                </motion.span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
