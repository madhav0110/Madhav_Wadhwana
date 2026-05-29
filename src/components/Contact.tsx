import { Download, Eye, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'
import { Reveal } from './Reveal'

type ContactProps = {
  onPreviewResume: () => void
}

export default function Contact({ onPreviewResume }: ContactProps) {
  return (
    <section id="contact" className="section-shell section-pad">
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-cyan-200/15 bg-[radial-gradient(circle_at_50%_0%,rgba(117,227,255,.18),transparent_42%),rgba(255,255,255,.045)] p-6 text-center shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:p-10 lg:p-16">
        <p className="eyebrow">Contact</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(2.2rem,6vw,4.9rem)] font-semibold leading-none tracking-[-0.055em]">Have a role, prototype, or product problem worth building?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">I’m open to applied AI roles, ML engineering opportunities, full-stack AI product work, and early-stage builds that need both systems thinking and interface execution.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a href="mailto:madhaavv01@gmail.com" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 font-medium text-slate-950"><Mail size={18} /> Email Madhav</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/8 px-5 font-medium text-white"><LinkedInIcon width={18} height={18} aria-hidden="true" /> Connect on LinkedIn</a>
          <a href="https://github.com/madhav0110" target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/8 px-5 font-medium text-white"><GitHubIcon width={18} height={18} aria-hidden="true" /> View GitHub</a>
          <button type="button" onClick={onPreviewResume} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-5 font-medium text-cyan-50" aria-label="Preview Madhav Wadhwana resume PDF"><Eye size={18} /> Preview Resume</button>
          <a href="/resume.pdf" download className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/8 px-5 font-medium text-white"><Download size={18} /> Download Resume</a>
        </div>
      </Reveal>
    </section>
  )
}
