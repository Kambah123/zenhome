import Image from 'next/image';

export default function ExperienceSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading & Intro - Left/Right Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Left: Heading */}
          <div className="flex-1">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Two decades of drafting experience in NSW
            </h2>
          </div>

          {/* Right: Description & CTA */}
          <div className="flex-1 lg:max-w-xl">
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-6">
              We bring years of practical drafting and design experience to every project, from small renovations to full new builds across Sydney and NSW.
            </p>
            <a 
              href="#services" 
              className="inline-flex items-center gap-3 text-white text-xl md:text-2xl font-semibold group hover:text-zinc-300 transition-colors"
            >
              View More
              <span className="inline-block w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white/60 group-hover:rotate-[-25deg] transition-all">
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Stats Bar - Grey Rounded Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6 sm:px-10 sm:py-8 mb-12 md:mb-16">
          <dl className="grid gap-8 sm:grid-cols-3">
            {/* Stat 1 */}
            <div className="flex flex-col">
              <dt className="text-3xl font-semibold text-white mb-2">
                20+ years
              </dt>
              <dd className="text-sm text-zinc-300 leading-relaxed">
                Combined industry experience
              </dd>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col">
              <dt className="text-3xl font-semibold text-white mb-2">
                Hundreds
              </dt>
              <dd className="text-sm text-zinc-300 leading-relaxed">
                Projects across Sydney & NSW
              </dd>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col">
              <dt className="text-2xl font-semibold text-white mb-2">
                Residential & Commercial
              </dt>
              <dd className="text-sm text-zinc-300 leading-relaxed">
                Design and documentation
              </dd>
            </div>
          </dl>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/5.jpg"
              alt="Drafting Projects Sydney"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/6.jpg"
              alt="Home Design NSW"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/7.jpg"
              alt="Commercial Drafting Services"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


