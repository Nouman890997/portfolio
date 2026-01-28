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
              
              {/* Buttons Section */}
              <div className="mt-8 flex items-center gap-4">
                
                {/* Email Icon Button (Direct Gmail Link) */}
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=noumannaeem050@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center rounded-full bg-teal-400/10 p-4 text-teal-300 ring-1 ring-inset ring-teal-400/20 hover:bg-teal-400/20 hover:scale-110 transition-all"
                  aria-label="Email Me"
                  title="Send me an email"
                >
                  {/* Mail SVG Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </a>
                
                {/* GitHub Button */}
                <a 
                  href="https://github.com/Nouman890997" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-slate-800 px-6 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
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
                  A full-stack pet services and adoption platform.Developed core features including user registration, pet listings, service booking, and an admin dashboard. Implemented secure RESTful APIs (JWT Auth) and role-based access control.
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">MERN Stack</li>
                    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">JWT Auth</li>
                    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">REST API</li>
                    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</li>
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
                    Developing a Python-based script to automate website audits, checking for broken links, meta tags, and performance issues using Beautiful Soup and Pandas.
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Python</li>
                    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">SEO Automation</li>
                    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Data Analytics</li>
                  </ul>
                </div>
              </div>

            </div>
            
            <footer className="mt-20 text-sm text-slate-500">
              <p>Designed & Built by Nouman.co</p>
            </footer>
          </main>
        </div>
      </div>
    </main>
  );
}