import { ArrowRight, Download, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import ParticleHero from './ParticleHero'
import { siteLinks } from '../config/site'

const proof = ['Threat Detection', 'LLM Integrations', 'Real-time Systems', 'Full-stack Delivery', 'Secure AI Workflows']

type HeroProps = {
  onPreviewResume: () => void
}

export default function Hero({ onPreviewResume }: HeroProps) {
  return (
    <section id="home" className="section-shell relative min-h-screen pt-32 sm:pt-40">
      <div className="mb-9 flex flex-wrap gap-3">
        <motion.span className="cave-chip border-amber-600/40 bg-amber-100/60 text-amber-800" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Applied AI · shipping now</motion.span>
        <motion.span className="cave-chip" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}>ML systems / secure workflows</motion.span>
      </div>
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Applied AI • ML Systems • Product Engineering</motion.p>
          <motion.h1 className="gradient-text mt-5 max-w-5xl text-[clamp(3.6rem,10vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.08em]" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}>
            Building intelligent products where <span className="font-serif italic text-amber-600">AI systems</span> meet interface craft.
          </motion.h1>
          <motion.div className="cave-rule my-7 max-w-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, delay: 0.18 }} />
          <motion.p className="max-w-2xl text-xl leading-8 text-stone-700" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2 }}>
            I design and build applied AI systems — from model logic and backend workflows to interfaces people can actually use.
          </motion.p>
          <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.3 }}>
            <a href="#work" className="cave-button-primary">View AI Case Studies <ArrowRight size={18} /></a>
            <button type="button" onClick={onPreviewResume} className="cave-button" aria-label="Preview Madhav Wadhwana resume PDF"><Eye size={18} /> Preview Resume</button>
            <a href={siteLinks.resume} download className="cave-button"><Download size={18} /> Download Resume</a>
            <a href={siteLinks.github} target="_blank" rel="noreferrer" className="cave-button"><span aria-hidden="true">GH</span> See GitHub</a>
          </motion.div>
        </div>
        <ParticleHero />
      </div>
      <motion.div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.45 }}>
        {proof.map((item, index) => <div key={item} className="premium-card rounded-xl p-4 font-mono text-xs uppercase tracking-[0.16em] text-stone-700"><span className="mr-3 text-amber-700">0{index + 1}</span>{item}</div>)}
      </motion.div>
    </section>
  )
}
