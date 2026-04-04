export function WaitlistSection() {
  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,11,23,0.95)] to-[rgba(7,11,23,0.85)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.15),_transparent_70%)] blur-[120px]" />
      </div>
      
      <div className="container relative z-10">
        <div className="glass rounded-[32px] p-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow mx-auto">
              <span className="eyebrow-dot bg-emerald-400" />
              Join the movement
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white">
              Simplify your inbox workflow
            </h2>
            <p className="mt-4 text-lg leading-7 text-white/75">
              Be among the first to experience EmailSimple and transform how you manage email
            </p>
          </div>
          
          <form className="mt-8 max-w-md mx-auto">
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="glass-input"
              />
              <input
                type="email"
                placeholder="Your email"
                className="glass-input"
              />
              <button
                type="submit"
                className="primary-btn w-full h-14 hover:bg-emerald-500/90"
              >
                Join Waitlist
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
