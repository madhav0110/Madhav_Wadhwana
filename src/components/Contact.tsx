import { Download, Eye, Mail } from 'lucide-react'
import { Reveal } from './Reveal'
import { siteLinks } from '../config/site'

type ContactProps = {
  onPreviewResume: () => void
}

export default function Contact({ onPreviewResume }: ContactProps) {
  return (
    <section id="contact" className="section-shell section-pad">
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-amber-700/25 bg-[radial-gradient(circle_at_50%_0%,rgba(243,180,63,.28),transparent_46%),rgba(255,250,240,.72)] p-6 text-center shadow-2xl shadow-stone-900/10 backdrop-blur-xl sm:p-10 lg:p-16">
        <p className="eyebrow">Contact</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(2.2rem,6vw,4.9rem)] font-semibold leading-none tracking-[-0.055em]">Have a role, prototype, or product problem worth building?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-700">I’m open to applied AI roles, ML engineering opportunities, full-stack AI product work, and early-stage builds that need both systems thinking and interface execution.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a href={siteLinks.email} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-stone-950 px-5 font-medium text-amber-50"><Mail size={18} /> Email Madhav</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-stone-900/15 bg-[#fffaf0]/75 px-5 font-medium text-stone-950"><span aria-hidden="true" className="font-mono text-sm">in</span> Connect on LinkedIn</a>
          <a href={siteLinks.github} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-stone-900/15 bg-[#fffaf0]/75 px-5 font-medium text-stone-950"><span aria-hidden="true" className="font-mono text-sm">GH</span> View GitHub</a>
          <button type="button" onClick={onPreviewResume} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-amber-700/25 bg-amber-100/75 px-5 font-medium text-amber-900" aria-label="Preview Madhav Wadhwana resume PDF"><Eye size={18} /> Preview Resume</button>
          <a href={siteLinks.resume} download className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-stone-900/15 bg-[#fffaf0]/75 px-5 font-medium text-stone-950"><Download size={18} /> Download Resume</a>
        </div>
      </Reveal>
    </section>
  )
}
