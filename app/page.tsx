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
                BSSE Graduate | Python Automation & SEO
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-400">
                Ranking businesses with Code & Data. I build Python automation tools and optimize websites for search engines.
              </p>
              
              {/* Buttons Section */}
              <div className="mt-8 flex items-center gap-4">
                
                {/* Email Button */}
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=noumannaeem050@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center rounded-full bg-teal-400/10 p-4 text-teal-300 ring-1 ring-inset ring-teal-400/20 hover:bg-teal-400/20 hover:scale-110 transition-all"
                  aria-label="Email Me"
                >
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
              
              {/* Project 1: Python Cold Email Bot (LINKED TO GITHUB) */}
              <a 
                href="https://github.com/Nouman890997/python-email-automation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative grid grid-cols-1 gap-4 p-4 transition-all hover:bg-slate-800/50 rounded-md border border-slate-800/50 hover:border-slate-700 cursor-pointer"
              >
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10">
                  <h3 className="font-medium leading-tight text-slate-200 group-hover:text-teal-300">
                    Automated Cold Emailer (Python)
                    <span className="ml-3 inline-flex items-center rounded-full bg-teal-400/10 px-2 py-1 text-xs font-medium text-teal-300 ring-1 ring-inset ring-teal-400/20">
                      Automation 🤖
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Developed a Python script to automate job applications. Reads data from Excel and sends personalized emails via Gmail SMTP.
                  </p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400 flex-shrink-0"></span>
                      <p className="text-xs text-slate-400"><strong className="text-slate-200">Tech:</strong> Python, Pandas, SMTP.</p>
                    </div>
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Python</li>
                    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Automation</li>
                  </ul>
                </div>
              </a>

              {/* Project 2: SEO Audit Case Study (LINKED TO PDF REPORT) */}
              <a 
                href="https://drive.google.com/file/d/1I_YaAaFbByGCJFZCjX0Na3q9jj6yNu2n/view?usp=sharing"
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative grid grid-cols-1 gap-4 p-4 transition-all hover:bg-slate-800/50 rounded-md border border-slate-800/50 hover:border-slate-700 cursor-pointer"
              >
                <div className="z-10">
                  <h3 className="font-medium leading-tight text-slate-200 group-hover:text-teal-300">
                    Technical SEO Audit - Outfitters
                    <span className="ml-3 inline-flex items-center rounded-full bg-teal-400/10 px-2 py-1 text-xs font-medium text-teal-300 ring-1 ring-inset ring-teal-400/20">
                      PDF Report 📄
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Generated a comprehensive performance report identifying critical failures in Core Web Vitals (LCP 4.7s) and security vulnerabilities.
                  </p>
                  
                  {/* Key Findings List */}
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                      <p className="text-xs text-slate-400"><strong className="text-slate-200">Critical Failure:</strong> Mobile Load Time hit <span className="text-teal-300">8.5s</span> (Poor Status).</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                      <p className="text-xs text-slate-400"><strong className="text-slate-200">Security Risk:</strong> Identified missing <span className="text-teal-300">SSL Certificate</span> & Sitemap.</p>
                    </div>
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">PDF Audit</li>
                    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Core Web Vitals</li>
                  </ul>
                </div>
              </a>

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