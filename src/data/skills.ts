import { BrainCircuit, Code2, DatabaseZap, Workflow } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type SkillGroup = {
  title: string
  description: string
  tools: string[]
  icon: LucideIcon
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'AI / ML / NLP',
    description: 'Model-centered workflows for language, vision, inference, and practical ML pipelines that connect to real products.',
    tools: ['Python', 'TensorFlow', 'PyTorch', 'HuggingFace', 'spaCy', 'NLTK', 'OpenCV', 'ML pipelines'],
    icon: BrainCircuit,
  },
  {
    title: 'Frontend',
    description: 'Responsive, polished interfaces with motion systems, component structure, and product-grade UI execution.',
    tools: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Framer Motion'],
    icon: Code2,
  },
  {
    title: 'Backend / Systems',
    description: 'APIs, data flow, and real-time workflows that move prototypes toward reliable, usable intelligent systems.',
    tools: ['Flask', 'FastAPI', 'Node.js', 'SQL', 'APIs', 'Real-time workflows'],
    icon: DatabaseZap,
  },
  {
    title: 'Tools / Platforms',
    description: 'The delivery layer: version control, automation, deployment, Linux environments, cloud basics, and design collaboration.',
    tools: ['Git', 'Docker', 'Jenkins', 'Linux', 'AWS', 'Vercel', 'Figma'],
    icon: Workflow,
  },
]
