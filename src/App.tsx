import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Philosophy from './components/Philosophy'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Vision from './components/Vision'
import ResumePreview from './components/ResumePreview'
import { useCallback, useState } from 'react'

export default function App() {
  const [resumePreviewOpen, setResumePreviewOpen] = useState(false)
  const openResumePreview = useCallback(() => setResumePreviewOpen(true), [])
  const closeResumePreview = useCallback(() => setResumePreviewOpen(false), [])

  return (
    <div className="noise min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero onPreviewResume={openResumePreview} />
        <Projects />
        <Skills />
        <About />
        <Philosophy />
        <Vision />
        <Contact onPreviewResume={openResumePreview} />
      </main>
      <Footer />
      <ResumePreview open={resumePreviewOpen} onClose={closeResumePreview} />
    </div>
  )
}
