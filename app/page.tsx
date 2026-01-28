import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-teal-300 selection:text-teal-900">
      <div className="max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* LEFT SIDE: Header & Bio */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                Nouman Awan
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-100 sm:text-xl">
                BSSE Graduate | MERN Stack & SEO Expert
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-400">
                Ranking businesses with Code & Data. I build full-stack web apps and optimize them for search engines.
              </p>
              
              {/* Buttons */}
              <div className="mt-8 flex gap-4">
                <a 
                  href="mailto:noumannaeem050@gmail.com"
                  className="rounded-full bg-teal-400/10 px-6 py-3 text-sm font-medium text-teal-300 ring-1 ring-inset ring-teal-400/20 hover:bg-teal-400/20 transition-all"
                >
                  Contact Me
                </a>
                <a 
                  href="https://github.com/Nouman890997" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-slate-800 px-6 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
                >
                  Visit GitHub
                </a>
              </div>
            </div>
          </header>

          {/* RIGHT SIDE: Projects */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-200">
              Featured Projects
            </h3>

            <div className="flex flex-col gap-10">
              
              {/* Project 1: Petorious (FYP) */}
              <div className="group relative grid grid-cols-1 gap-4 p-4 transition-all hover:bg-slate-800/50 rounded-md border border-slate-800/50 hover:border-slate-700">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10">
                  <h3 className="font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300">
                    Petorious (Final Year Project)
                    <span className="ml-3 inline-flex items-center rounded-full bg-teal-400/10 px-2 py-1 text-xs font-medium text-teal-300 ring-1 ring-inset ring-teal-400/20">
                      Completed 🏆
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    A complete MERN stack web application built for pet services. Features include user authentication, database management for pet records, and a responsive UI.
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React.js</li>
                    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Node.js</li>
                    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">MongoDB</li>
                    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Express</li>
                  </ul>
                </div>
              </div>

              {/* Project 2: SEO Tool */}
              <div className="group relative grid grid-cols-1 gap-4 p-4 transition-all hover:bg-slate-800/50 rounded-md border border-slate-800/50 hover:border-slate-700">
                <div className="z-10">
                  <h3 className="font-medium leading-tight text-slate-200 group-hover:text-teal-300">
                    Technical SEO Audit Tool
                    <span className="ml-3 inline-flex items-center rounded-full bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-300 ring-1 ring-inset ring-yellow-400/20">
                      🚧 Work in Progress
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Developing a Python-based script to automate website audits, checking for broken links, meta tags, and performance issues.
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Python</li>
                    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">SEO Automation</li>
                  </ul>
                </div>
              </div>

            </div>
            
            <footer className="mt-20 text-sm text-slate-500">
              <p>Designed & Built by Nouman Awan using Next.js & Tailwind.</p>
            </footer>
          </main>
        </div>
      </div>
    </main>
  );
}