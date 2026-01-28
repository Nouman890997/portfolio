import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24">
      {/* --- Section 1: Hero (Pehla Taasur) --- */}
      <section className="max-w-4xl mx-auto text-center mb-20 pt-10">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
          Ranking Businesses with Code & Data.
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Hi, I'm <span className="text-blue-400 font-bold">Nouman Awan</span>. 
          BSSE Grad & SEO Strategist. <br />
          I bridge the gap between Development and Marketing.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
            View My Projects
          </button>
          <button className="border border-gray-600 hover:border-gray-400 text-gray-300 px-6 py-3 rounded-lg font-medium transition">
            Contact Me
          </button>
        </div>
      </section>

      {/* --- Section 2: Why Hire an Engineer? --- */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">Why Hire an SEO Engineer?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Technical SEO</h3>
            <p className="text-gray-400">I fix code-level issues (Core Web Vitals, Schema) that marketers can't touch.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-purple-400 mb-2">Automation</h3>
            <p className="text-gray-400">I build Python scripts to automate competitor analysis and keyword research.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-green-400 mb-2">Data-Driven</h3>
            <p className="text-gray-400">No guesswork. I rely on APIs and Data Analytics to make decisions.</p>
          </div>
        </div>
      </section>

      {/* --- Section 3: Projects (Saboot) --- */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Project 1: Audit */}
          <div className="group p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">SEO Audit Report</h3>
              <span className="bg-yellow-900 text-yellow-200 text-xs px-2 py-1 rounded">Case Study</span>
            </div>
            <p className="text-gray-400 mb-4">Identified 15+ critical technical errors preventing a site from ranking. See the solution.</p>
            <span className="text-blue-400 text-sm group-hover:underline">View Report &rarr;</span>
          </div>

          {/* Project 2: Email Bot */}
          <div className="group p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-purple-500 transition cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Python Email Automation</h3>
              <span className="bg-green-900 text-green-200 text-xs px-2 py-1 rounded">Code</span>
            </div>
            <p className="text-gray-400 mb-4">Built a bot to send 100+ personalized cold emails using SMTP and Pandas.</p>
            <span className="text-purple-400 text-sm group-hover:underline">Check GitHub &rarr;</span>
          </div>

        </div>
      </section>
    </main>
  );
}