import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useMemo } from 'react'

const nodes = [
  [14, 22], [32, 15], [54, 25], [76, 18], [88, 38], [63, 48], [39, 44], [18, 58], [45, 70], [72, 76], [28, 84],
]
const links = [[0,1],[1,2],[2,3],[3,4],[2,5],[5,6],[6,7],[6,8],[5,9],[7,10],[8,9]]

export default function ParticleHero() {
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(50)
  const y = useMotionValue(50)
  const smoothX = useSpring(x, { stiffness: 80, damping: 24 })
  const smoothY = useSpring(y, { stiffness: 80, damping: 24 })
  const background = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, rgba(243, 180, 63, 0.34), rgba(120, 77, 17, 0.10) 32%, transparent 58%)`
  const particles = useMemo(() => Array.from({ length: 34 }, (_, index) => ({
    left: `${(index * 29) % 97}%`, top: `${(index * 47) % 89}%`, delay: (index % 7) * 0.35,
  })), [])

  return (
    <motion.div
      className="premium-card relative min-h-[24rem] overflow-hidden rounded-[1.25rem] lg:min-h-[34rem]"
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect()
        x.set(((event.clientX - bounds.left) / bounds.width) * 100)
        y.set(((event.clientY - bounds.top) / bounds.height) * 100)
      }}
      style={{ background }}
      animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      aria-label="Animated abstract neural system visualization"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(39,29,18,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(39,29,18,.09)_1px,transparent_1px)] bg-[size:38px_38px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      <svg className="absolute inset-0 h-full w-full" role="img" aria-label="Network graph with connected data nodes" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="link" x1="0" x2="1">
            <stop stopColor="#b87905" stopOpacity="0.7" />
            <stop offset="1" stopColor="#2b2116" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {links.map(([a, b]) => (
          <motion.line
            key={`${a}-${b}`}
            x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
            stroke="url(#link)" strokeWidth="0.18"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: a * 0.08 }}
          />
        ))}
        {nodes.map(([cx, cy], index) => (
          <motion.circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.2" fill={index % 2 ? '#2b2116' : '#b87905'}
            animate={reduceMotion ? undefined : { scale: [1, 1.55, 1], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 3.2, delay: index * 0.17, repeat: Infinity }} />
        ))}
      </svg>
      {particles.map((particle) => (
        <motion.span key={`${particle.left}-${particle.top}`} className="absolute h-1 w-1 rounded-full bg-amber-700/50" style={{ left: particle.left, top: particle.top }}
          animate={reduceMotion ? undefined : { y: [-8, 8, -8], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 5, delay: particle.delay, repeat: Infinity }} />
      ))}
      <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-stone-900/15 bg-[#fffaf0]/70 p-4 backdrop-blur-md">
        <div className="mb-3 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.22em] text-stone-600">
          <span>AI workflow map</span><span>live</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs text-stone-700">
          {['ingest', 'reason', 'interface'].map((item) => <span key={item} className="rounded-full bg-amber-100/70 px-3 py-2 text-center">{item}</span>)}
        </div>
      </div>
    </motion.div>
  )
}
