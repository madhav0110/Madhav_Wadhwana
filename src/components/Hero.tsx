import { ArrowRight, Download, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import { GitHubIcon } from './BrandIcons'
import ParticleHero from './ParticleHero'

const proof = ['Threat Detection', 'LLM Integrations', 'Real-time Systems', 'Full-stack Delivery', 'Secure AI Workflows']

type HeroProps = {
  onPreviewResume: () => void
}

export default function Hero({ onPreviewResume }: HeroProps) {
  return (
    <section id="home" className="section-shell relative min-h-screen pt-32 sm:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Applied AI • ML Systems • Product Engineering</motion.p>
          <motion.h1 className="gradient-text mt-5 max-w-5xl text-[clamp(3rem,10vw,6.9rem)] font-semibold leading-[0.92] tracking-[-0.075em]" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}>
            Building intelligent products where AI, secure systems, and interface craft meet.
          </motion.h1>
          <motion.p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2 }}>
            I design and build applied AI systems — from model logic and backend workflows to interfaces people can actually use.
          </motion.p>
          <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.3 }}>
            <a href="#work" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100">View AI Case Studies <ArrowRight size={18} /></a>
            <button type="button" onClick={onPreviewResume} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-5 font-medium text-cyan-50 transition hover:-translate-y-0.5 hover:bg-cyan-200/15" aria-label="Preview Madhav Wadhwana resume PDF"><Eye size={18} /> Preview Resume</button>
            <a href="/resume.pdf" download className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/6 px-5 font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"><Download size={18} /> Download Resume</a>
            <a href="https://github.com/madhav0110" target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/6 px-5 font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"><GitHubIcon width={18} height={18} aria-hidden="true" /> See GitHub</a>
          </motion.div>
        </div>
        <ParticleHero />
      </div>
      <motion.div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.45 }}>
        {proof.map((item) => <div key={item} className="premium-card rounded-2xl px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] text-slate-300">{item}</div>)}
      </motion.div>
    </section>
  )
}
