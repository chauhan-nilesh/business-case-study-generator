"use client"
import Link from "next/link";
import { useState } from "react";

// Suggest splitting into: Header, SidebarMenu, Features, Footer

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={`min-h-screen flex flex-col bg-gradient-to-br ${darkMode ? 'from-gray-900 via-gray-800 to-gray-950' : 'from-blue-50 via-white to-indigo-100'}`}>
        {/* Header */}
        <header className="w-full flex items-center justify-between px-6 py-6 lg:px-20 lg:py-4">
          <div className="flex items-center gap-2">
            <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-2xl ${darkMode ? 'bg-blue-700 text-white' : 'bg-blue-600 text-white'}`}>B</span>
            <span className={`text-3xl font-extrabold tracking-tight ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>BizSnap</span>
          </div>
          <div className="flex justify-center items-center gap-4">
            <nav className="hidden md:flex gap-8 font-medium">
              <a href="#features" className={`hover:text-blue-900 transition ${darkMode ? 'text-blue-200 hover:text-blue-400' : 'text-blue-800'}`}>Features</a>
              <a href="#pricing" className={`hover:text-blue-900 transition ${darkMode ? 'text-blue-200 hover:text-blue-400' : 'text-blue-800'}`}>Pricing</a>
              <a href="#about" className={`hover:text-blue-900 transition ${darkMode ? 'text-blue-200 hover:text-blue-400' : 'text-blue-800'}`}>About</a>
              <a href="#login" className={`hover:text-blue-900 transition ${darkMode ? 'text-blue-200 hover:text-blue-400' : 'text-blue-800'}`}>Login</a>
              <a href="#signup" className={`hover:text-blue-900 transition ${darkMode ? 'text-blue-200 hover:text-blue-400' : 'text-blue-800'}`}>Signup</a>
            </nav>
            <div className="flex items-center gap-2">
              <button
                className="md:hidden p-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition dark:bg-gray-800 dark:text-blue-200 dark:hover:bg-gray-700"
                aria-label="Open menu"
                onClick={() => setMenuOpen(true)}
              >
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              <button
                aria-label="Toggle dark mode"
                onClick={() => setDarkMode((d) => !d)}
                className="rounded-full p-2 bg-blue-100 text-blue-700 dark:bg-gray-800 dark:text-blue-200 shadow hover:scale-110 transition"
              >
                {darkMode ? (
                  <svg width="24" height="24" fill="none" stroke="#fbbf24" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
                ) : (
                  <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Sidebar Menu (Mobile) */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div className="flex-1 bg-black/30" onClick={() => setMenuOpen(false)}></div>
            <aside className={`w-72 max-w-full h-full shadow-2xl flex flex-col py-8 px-6 animate-slide-in-right ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <div className="flex items-center justify-between mb-8">
                <span className={`text-2xl font-extrabold ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>BizSnap</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-full p-2 ${darkMode ? 'bg-gray-800 text-blue-200 hover:bg-gray-700' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
                >
                  <svg width="24" height="24" fill="none" stroke="#ef4444" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <nav className="flex flex-col gap-6 text-lg font-semibold">
                <a href="#features" className={`hover:text-blue-600 transition ${darkMode ? 'text-blue-200 hover:text-blue-400' : ''}`}>Features</a>
                <a href="#pricing" className={`hover:text-blue-600 transition ${darkMode ? 'text-blue-200 hover:text-blue-400' : ''}`}>Pricing</a>
                <a href="#about" className={`hover:text-blue-600 transition ${darkMode ? 'text-blue-200 hover:text-blue-400' : ''}`}>About</a>
                <a href="#login" className={`hover:text-blue-600 transition ${darkMode ? 'text-blue-200 hover:text-blue-400' : ''}`}>Login</a>
                <a href="#signup" className={`hover:text-blue-600 transition ${darkMode ? 'text-blue-200 hover:text-blue-400' : ''}`}>Signup</a>
              </nav>
            </aside>
          </div>
        )}

        {/* Hero Section */}
        <section className="flex-1 flex flex-col items-center justify-center px-4 text-center mt-8 mb-12">
          <h1 className={`text-5xl md:text-6xl font-extrabold mb-4 tracking-tight ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>BizSnap</h1>
          <h2 className={`text-2xl md:text-3xl font-semibold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Know any business in seconds</h2>
          <p className={`max-w-xl mx-auto text-lg md:text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Search any company and get AI-generated insights on their history, revenue, model, and strategy &mdash; instantly.</p>
          <Link href={"/search"} className={`inline-block px-8 py-4 rounded-xl font-bold text-xl shadow transition ${darkMode ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>Try it now</Link>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mb-16">
          <div className={`rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border ${darkMode ? 'bg-gray-900 border-blue-900' : 'bg-white border-blue-100'}`}>
            <span className="text-4xl mb-4">🔍</span>
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>Company History & Strategy</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Get a concise overview of any company&apos;s background, origin, and business strategy.</p>
          </div>
          <div className={`rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border ${darkMode ? 'bg-gray-900 border-blue-900' : 'bg-white border-blue-100'}`}>
            <span className="text-4xl mb-4">📊</span>
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>Revenue & Growth Model</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>See revenue, valuation, and growth strategies for any business, instantly summarized.</p>
          </div>
          <div className={`rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border ${darkMode ? 'bg-gray-900 border-blue-900' : 'bg-white border-blue-100'}`}>
            <span className="text-4xl mb-4">📰</span>
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>Latest News + AI Summary</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Stay updated with recent news and get AI-powered summaries for every company search.</p>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full max-w-3xl mx-auto px-4 mb-16">
          <h2 className={`text-3xl font-extrabold mb-8 text-center ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`rounded-2xl shadow-lg p-8 border flex flex-col items-center ${darkMode ? 'bg-gray-900 border-blue-900' : 'bg-white border-blue-100'}`}>
              <span className={`text-2xl font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Free</span>
              <span className={`text-4xl font-extrabold mb-4 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>$0</span>
              <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 text-center`}>
                <li>Basic company search</li>
                <li>AI summary (limited)</li>
                <li>Access to public data</li>
              </ul>
              <button className={`px-6 py-3 rounded-xl font-bold shadow transition ${darkMode ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>Get Started</button>
            </div>
            <div className={`rounded-2xl shadow-lg p-8 border flex flex-col items-center ${darkMode ? 'bg-gray-900 border-blue-900' : 'bg-white border-blue-100'}`}>
              <span className={`text-2xl font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Pro</span>
              <span className={`text-4xl font-extrabold mb-4 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>$19/mo</span>
              <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 text-center`}>
                <li>Unlimited company searches</li>
                <li>Full AI insights</li>
                <li>Download reports (PDF)</li>
                <li>Priority support</li>
              </ul>
              <button className={`px-6 py-3 rounded-xl font-bold shadow transition ${darkMode ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>Upgrade</button>
            </div>
            <div className={`rounded-2xl shadow-lg p-8 border flex flex-col items-center ${darkMode ? 'bg-gray-900 border-blue-900' : 'bg-white border-blue-100'}`}>
              <span className={`text-2xl font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Enterprise</span>
              <span className={`text-4xl font-extrabold mb-4 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>Custom</span>
              <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 text-center`}>
                <li>API access</li>
                <li>Custom integrations</li>
                <li>Team management</li>
                <li>Dedicated support</li>
              </ul>
              <button className={`px-6 py-3 rounded-xl font-bold shadow transition ${darkMode ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>Contact Sales</button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`w-full py-8 px-4 border-t text-center text-sm mt-auto ${darkMode ? 'bg-gray-900 border-blue-900 text-gray-400' : 'bg-white border-blue-100 text-gray-500'}`}>
          <span>© 2025 BizSnap</span> · <a href="#terms" className={`hover:text-blue-700 ${darkMode ? 'text-blue-200 hover:text-blue-400' : ''}`}>Terms</a> · <a href="#policy" className={`hover:text-blue-700 ${darkMode ? 'text-blue-200 hover:text-blue-400' : ''}`}>Policy</a>
        </footer>

        {/* Slide-in animation for sidebar */}
        <style jsx global>{`
          @keyframes slide-in-right {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in-right {
            animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1) both;
          }
        `}</style>
      </div>
    </div>
  );
}
