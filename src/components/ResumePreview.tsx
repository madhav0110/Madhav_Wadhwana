import { Download, ExternalLink, X } from 'lucide-react'
import { useEffect } from 'react'
import { siteLinks } from '../config/site'

type ResumePreviewProps = {
  open: boolean
  onClose: () => void
}

export default function ResumePreview({ open, onClose }: ResumePreviewProps) {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-3 backdrop-blur-md sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="resume-preview-title">
      <button type="button" className="absolute inset-0 cursor-default" aria-label="Close resume preview" onClick={onClose} />
      <div className="premium-card relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[1.75rem]">
        <div className="flex flex-col gap-4 border-b border-white/10 bg-[#0b0d12]/88 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Resume preview</p>
            <h2 id="resume-preview-title" className="mt-1 text-xl font-semibold tracking-tight text-white">Madhav Wadhwana — Applied AI Engineer</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href={siteLinks.resume} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 text-sm font-medium text-white transition hover:bg-white/[0.12]">
              <ExternalLink size={16} /> Open PDF
            </a>
            <a href={siteLinks.resume} download className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-medium text-slate-950 transition hover:bg-cyan-100">
              <Download size={16} /> Download
            </a>
            <button type="button" onClick={onClose} className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white transition hover:bg-white/[0.12]" aria-label="Close resume preview">
              <X size={18} />
            </button>
          </div>
        </div>
        <div className="min-h-[65vh] bg-slate-950 sm:min-h-[72vh]">
          <object data={siteLinks.resume} type="application/pdf" className="h-[65vh] w-full sm:h-[72vh]" aria-label="Resume PDF preview">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center text-slate-300">
              <p>Your browser cannot display the embedded PDF preview.</p>
              <a href={siteLinks.resume} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-white px-4 font-medium text-slate-950">Open resume PDF</a>
            </div>
          </object>
        </div>
      </div>
    </div>
  )
}
