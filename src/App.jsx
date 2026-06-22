import React, { useState, useEffect } from 'react'

export default function App() {
  const [activeBranch, setActiveBranch] = useState('all')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen">
      {/* TopAppBar */}
      <nav
        className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'py-2 shadow-md' : 'py-4 shadow-sm'
        }`}
      >
        <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
          <span className="font-display-lg text-headline-md text-primary tracking-tight">
            The Bloom Archive
          </span>
          <div className="flex items-center space-x-8">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-sm"
              href="#story"
            >
              The Family
            </a>
            <a
              className="text-primary border-b-2 border-primary pb-1 font-label-sm"
              href="#mosaic"
            >
              Mosaic
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-sm"
              href="#values"
            >
              Legacy
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden px-gutter">
        <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 space-y-8 fade-in-up">
            <div className="inline-flex items-center space-x-2 text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                auto_awesome
              </span>
              <span className="font-label-sm tracking-widest uppercase">Generations of Love</span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
              To Live, To Love, <br />
              <span className="text-primary italic">To Remember</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-lg leading-relaxed">
              Welcome to our digital home. This archive is a curated journey through our collective family stories—a shared album of the lives we've built together.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-12 h-[1px] bg-outline-variant"></div>
              <p className="font-display-lg text-body-lg text-primary italic">A Collective Scrapbook</p>
            </div>
          </div>
          <div className="relative group fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-4 bg-tertiary-fixed/30 blur-3xl rounded-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="rounded-xl overflow-hidden soft-elevation aspect-[4/5] relative transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
              <img
                alt="Family gathering"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Scrapbook tape effect */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 scrapbook-tape z-20"></div>
            <div className="absolute -bottom-8 -left-8 bg-surface p-6 rounded-xl soft-elevation hidden md:block max-w-[200px] border border-outline-variant/10">
              <p className="font-display-lg text-headline-md text-primary italic leading-none mb-1">1982</p>
              <p className="font-label-sm text-on-surface-variant">Where it all began</p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Mosaic Section */}
      <section className="py-24 bg-surface-container-lowest" id="mosaic">
        <div className="max-w-container-max mx-auto px-gutter">
          {/* Family Tree Navigation */}
          <div className="text-center space-y-8 mb-16">
            <div className="space-y-4">
              <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-on-surface">
                The Family Mosaic
              </h2>
              <div className="w-16 h-1 bg-primary-container mx-auto rounded-full"></div>
            </div>
            <div className="inline-flex flex-wrap items-center justify-center gap-2 p-2 bg-surface-container rounded-full border border-outline-variant/20">
              <button
                className={`px-6 py-2.5 rounded-full font-label-sm transition-all flex items-center gap-2 ${
                  activeBranch === 'all'
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
                onClick={() => setActiveBranch('all')}
              >
                <span className="material-symbols-outlined text-sm">account_tree</span> All Branches
              </button>
              <button
                className={`px-6 py-2.5 rounded-full font-label-sm transition-all ${
                  activeBranch === 'blooms'
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
                onClick={() => setActiveBranch('blooms')}
              >
                The Blooms
              </button>
              <button
                className={`px-6 py-2.5 rounded-full font-label-sm transition-all ${
                  activeBranch === 'sterlings'
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
                onClick={() => setActiveBranch('sterlings')}
              >
                The Sterling Clan
              </button>
              <button
                className={`px-6 py-2.5 rounded-full font-label-sm transition-all ${
                  activeBranch === 'vances'
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
                onClick={() => setActiveBranch('vances')}
              >
                The Vance Side
              </button>
            </div>
          </div>

          <div className="space-y-24" id="mosaic-container">
            {/* Branch: The Blooms */}
            {(activeBranch === 'all' || activeBranch === 'blooms') && (
              <div className="family-section fade-in-up" data-branch="blooms">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="font-display-lg text-headline-md text-primary italic">The Blooms</h3>
                  <div className="flex-grow h-[1px] bg-outline-variant"></div>
                  <span className="font-label-sm text-on-surface-variant opacity-60">Est. 1954</span>
                </div>
                <div className="bg-surface-container-low p-6 md:p-10 rounded-[2rem] border border-outline-variant/10">
                  <div className="masonry-grid">
                    <div className="masonry-item relative group">
                      <div className="rounded-xl overflow-hidden soft-elevation border-4 border-surface transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
                        <img
                          alt="Vintage couple"
                          className="w-full"
                          src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
                        />
                      </div>
                      <p className="mt-3 font-display-lg text-body-md text-primary italic text-center">
                        Grandpa Arthur &amp; Grandma Rose
                      </p>
                    </div>
                    <div className="masonry-item relative group">
                      <div className="rounded-xl overflow-hidden soft-elevation border-4 border-surface transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                        <img
                          alt="Baby hands"
                          className="w-full"
                          src="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=800&q=80"
                        />
                      </div>
                      <p className="mt-3 font-display-lg text-body-md text-primary italic text-center">
                        The Next Generation
                      </p>
                    </div>
                    <div className="masonry-item relative group md:mt-8">
                      <div className="rounded-xl overflow-hidden soft-elevation border-4 border-surface transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                        <img
                          alt="Old house"
                          className="w-full"
                          src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80"
                        />
                      </div>
                      <p className="mt-3 font-display-lg text-body-md text-primary italic text-center">
                        The Family Homestead
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Branch: The Sterling Clan */}
            {(activeBranch === 'all' || activeBranch === 'sterlings') && (
              <div className="family-section fade-in-up" data-branch="sterlings">
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-label-sm text-on-surface-variant opacity-60">Est. 1978</span>
                  <div className="flex-grow h-[1px] bg-outline-variant"></div>
                  <h3 className="font-display-lg text-headline-md text-primary italic">The Sterling Clan</h3>
                </div>
                <div className="bg-surface-container-high p-6 md:p-10 rounded-[2rem] border border-outline-variant/10">
                  <div className="masonry-grid">
                    <div className="masonry-item relative group">
                      <div className="rounded-xl overflow-hidden soft-elevation border-4 border-surface transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
                        <img
                          alt="Birthday party"
                          className="w-full"
                          src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80"
                        />
                      </div>
                      <p className="mt-3 font-display-lg text-body-md text-primary italic text-center">
                        Leo's 5th Birthday
                      </p>
                    </div>
                    <div className="masonry-item relative group md:mt-12">
                      <div className="rounded-xl bg-surface p-6 border-4 border-white soft-elevation transform -rotate-1 group-hover:rotate-0 transition-transform">
                        <div className="aspect-square bg-tertiary-container/20 rounded-lg flex items-center justify-center">
                          <span className="material-symbols-outlined text-tertiary text-5xl">history_edu</span>
                        </div>
                        <p className="mt-4 font-body-md text-on-surface-variant italic leading-relaxed">
                          "The Sterlings always brought the best stories to the table."
                        </p>
                      </div>
                    </div>
                    <div className="masonry-item relative group">
                      <div className="rounded-xl overflow-hidden soft-elevation border-4 border-surface transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                        <img
                          alt="Scenic"
                          className="w-full aspect-[3/4] object-cover"
                          src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80"
                        />
                      </div>
                      <p className="mt-3 font-display-lg text-body-md text-primary italic text-center">
                        Summer of '94
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-surface-container-low" id="story">
        <div className="max-w-container-max mx-auto px-gutter grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden aspect-square soft-elevation border-8 border-surface transform -rotate-2">
              <img
                alt="Archive album"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-fixed/20 rounded-full blur-2xl"></div>
          </div>
          <div className="space-y-8 order-1 md:order-2">
            <span class="font-label-sm text-primary tracking-widest uppercase">The Collective Story</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
              Where Every Branch <br /> Finds Its Forever.
            </h2>
            <div className="space-y-6 font-body-lg text-on-surface-variant leading-relaxed">
              <p>
                This isn't just one story, but a forest of them. Our family is a collection of narratives, woven together through marriage, birth, and shared adventure. We believe history is a living, breathing thing.
              </p>
              <p>
                This archive is our digital scrapbook. It's an intentional effort to preserve the small details—the handwriting on the back of a photo, the specific tone of laughter at a reunion, and the values that keep us grounded.
              </p>
            </div>
            <div className="pt-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[1px] bg-outline-variant"></div>
                <p className="font-display-lg text-body-lg text-primary italic">Keepers of the Collective Memory</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Values Section */}
      <section className="py-24 relative overflow-hidden" id="values">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="bg-tertiary-container/10 rounded-[2rem] p-8 md:p-16 border border-tertiary-container/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
              <span className="material-symbols-outlined text-[300px] text-tertiary-container/10 select-none">
                auto_awesome
              </span>
            </div>
            <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10">
              <div className="space-y-4">
                <span className="font-label-sm text-primary tracking-widest uppercase">Our Shared Legacy</span>
                <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-on-surface">
                  The Bloom Family Values
                </h2>
                <div className="w-16 h-1 bg-primary-container mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-primary text-4xl">favorite</span>
                  <h3 className="font-display-lg text-body-lg text-on-surface italic">Unconditional Love</h3>
                  <p className="font-body-md text-on-surface-variant">The foundation of everything we build together.</p>
                </div>
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-primary text-4xl">history_edu</span>
                  <h3 className="font-display-lg text-body-lg text-on-surface italic">Honoring Roots</h3>
                  <p className="font-body-md text-on-surface-variant">Respecting the sacrifices and stories of those before us.</p>
                </div>
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-primary text-4xl">diversity_3</span>
                  <h3 className="font-display-lg text-body-lg text-on-surface italic">Constant Growth</h3>
                  <p className="font-body-md text-on-surface-variant">Supporting each other through every new season of life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-surface-container-lowest dark:bg-surface-container-low border-t border-outline-variant/30">
        <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <span className="font-display-lg text-headline-md text-primary">The Bloom Archive</span>
            <p className="text-on-surface-variant dark:text-surface-variant font-body-md opacity-80">
              Shared memories, one generation at a time.
            </p>
          </div>
          <div className="flex items-center space-x-8">
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md opacity-80 hover:opacity-100" href="#mosaic">
              The Mosaic
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md opacity-80 hover:opacity-100" href="#story">
              Our Story
            </a>
            <span className="font-body-md text-secondary italic">Est. 1982</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
