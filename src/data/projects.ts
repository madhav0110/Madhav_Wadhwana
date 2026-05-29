export type Project = {
  title: string
  description: string
  problem: string
  role: string
  stack: string
  tags: string[]
  cta: string
  accent: string
  metrics: string[]
}

export const projects: Project[] = [
  {
    title: 'Threat Detection Dashboard',
    description: 'Real-time ML dashboard for identifying suspicious system processes using Python, Streamlit, and machine learning.',
    problem: 'Turn noisy process telemetry into a fast, readable decision surface for security review.',
    role: 'ML workflow, dashboard UX, inference pipeline, and case-study architecture.',
    stack: 'Python · Streamlit · Machine Learning · Cybersecurity',
    tags: ['Python', 'Streamlit', 'Machine Learning', 'Cybersecurity', 'Real-time Inference'],
    cta: 'See architecture',
    accent: 'from-cyan-300/24 via-blue-500/12 to-transparent',
    metrics: ['Process signals', 'Risk scoring', 'Live review'],
  },
  {
    title: 'Aquaregia Fest Website',
    description: 'Event registration platform for a university festival with responsive flows, structured content, and user-friendly registration.',
    problem: 'Help participants discover events and complete registration through clean, mobile-first flows.',
    role: 'Responsive interface, registration UX, information architecture, and deployment support.',
    stack: 'Web Development · Responsive UI · Event Platform · Forms',
    tags: ['Web Development', 'Responsive UI', 'Event Platform', 'Forms'],
    cta: 'View project',
    accent: 'from-violet-300/24 via-fuchsia-500/12 to-transparent',
    metrics: ['Registration flow', 'Mobile UI', 'Structured content'],
  },
  {
    title: '3D Globe Integration',
    description: 'Interactive geospatial web experience using CesiumJS for immersive 3D visualization.',
    problem: 'Make spatial data feel navigable with a performant, interactive 3D scene.',
    role: 'CesiumJS integration, interaction model, rendering setup, and product polish.',
    stack: 'CesiumJS · JavaScript · 3D Web · Geospatial UI',
    tags: ['CesiumJS', 'JavaScript', '3D Web', 'Geospatial UI'],
    cta: 'Explore interaction',
    accent: 'from-emerald-300/20 via-cyan-500/12 to-transparent',
    metrics: ['3D canvas', 'Map controls', 'Data layers'],
  },
  {
    title: 'Password Generator',
    description: 'Security utility for generating stronger passwords and evaluating password strength through a clean interaction model.',
    problem: 'Convert password rules into a simple tool that teaches better security behavior as people use it.',
    role: 'Security logic, validation states, utility workflow, and concise interface design.',
    stack: 'Security · Utility App · Java / Python · Password Logic',
    tags: ['Security', 'Utility App', 'Java / Python', 'Password Logic'],
    cta: 'View logic',
    accent: 'from-amber-300/20 via-orange-500/12 to-transparent',
    metrics: ['Strength meter', 'Rules engine', 'Usable security'],
  },
]
