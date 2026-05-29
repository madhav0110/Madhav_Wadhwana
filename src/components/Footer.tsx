export default function Footer() {
  return (
    <footer className="section-shell pb-10 text-sm text-stone-500">
      <div className="flex flex-col justify-between gap-3 border-t border-stone-900/15 pt-8 sm:flex-row">
        <p>© {new Date().getFullYear()} Madhav Wadhwana. Applied AI Engineer.</p>
        <p className="font-mono">AI · secure systems · product interfaces</p>
      </div>
    </footer>
  )
}
