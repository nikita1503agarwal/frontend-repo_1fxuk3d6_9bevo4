export default function Footer() {
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 text-white/70 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Aashutosh Thapa. All rights reserved.</p>
          <p className="text-white/60">Built with React, Tailwind, and a sprinkle of 3D.</p>
        </div>
      </div>
    </footer>
  )
}
