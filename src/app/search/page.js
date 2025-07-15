"use client";
import { useState } from "react";

const patterns = {
  light: "bg-gradient-to-br from-blue-50 via-white to-indigo-100",
  dark: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950",
};

const sidebarItems = [
  { label: "New Chat", icon: "💬" },
  { label: "History", icon: "🕑" },
  { label: "Profile", icon: "👤" },
];

export default function HomePage() {
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [selectedSidebar, setSelectedSidebar] = useState("New Chat");
  const [history, setHistory] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!company.trim()) return;

  setLoading(true);
  setError("");
  setHistory([{ company, date: new Date().toLocaleString() }, ...history]);

  // Navigate to results page with encoded company name
  window.location.href = `/results/${encodeURIComponent(company.trim())}`;
};

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Header for mobile */}
      <header className={`md:hidden flex items-center justify-between px-4 py-3 border-b shadow sticky top-0 z-30 h-16 min-h-16 ${darkMode ? 'bg-gray-950 border-gray-800 text-blue-100' : 'bg-white border-gray-200 text-blue-700'}`}>
        <button
          aria-label="Open sidebar"
          onClick={() => setSidebarOpen(true)}
          className={`p-2 rounded-lg shadow ${darkMode ? 'bg-indigo-700 text-white' : 'bg-blue-600 text-white'}`}
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <span className={`text-xl font-extrabold bg-clip-text ${darkMode ? 'bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 text-transparent' : 'bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-transparent drop-shadow-md'}`}>BizSnap</span>
        <button
          aria-label="Toggle dark mode"
          onClick={() => setDarkMode((d) => !d)}
          className={`rounded-full p-2 shadow ${darkMode ? 'bg-gray-800 text-blue-100' : 'bg-white/80 text-blue-700'}`}
        >
          {darkMode ? (
            <svg width="24" height="24" fill="none" stroke="#fbbf24" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          )}
        </button>
      </header>
      <div className={`flex min-h-screen transition-colors duration-500 ${darkMode ? patterns.dark : patterns.light}`}> 
        {/* Sidebar - desktop & mobile */}
        <aside className={`w-72 min-h-screen border-r flex-col py-6 px-4 gap-4 shadow-xl ${darkMode ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'} hidden md:flex`}> 
          <div className="flex items-center justify-between mb-8">
            <span className={`text-2xl font-extrabold bg-clip-text ${darkMode ? 'bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 text-transparent' : 'bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-transparent drop-shadow-md'}`}>CaseGen</span>
            <button
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode((d) => !d)}
              className="rounded-full p-2 bg-white/80 dark:bg-gray-800/80 shadow hover:scale-110 transition"
            >
              {darkMode ? (
                <svg width="24" height="24" fill="none" stroke="#fbbf24" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
              ) : (
                <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              )}
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setSelectedSidebar(item.label)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-lg transition-colors duration-150 ${selectedSidebar === item.label ? (darkMode ? 'bg-indigo-700 text-white' : 'bg-blue-600 text-white') : (darkMode ? 'bg-gray-900 text-gray-200 hover:bg-indigo-900' : 'bg-white text-gray-700 hover:bg-blue-100 border border-gray-200')}`}
              >
                <span className="text-xl">{item.icon}</span> {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-8">
            <div className="text-xs text-gray-400 dark:text-gray-500">Powered by Gemini AI & Next.js</div>
          </div>
        </aside>
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 flex">
            <div className={`w-72 min-h-screen border-r flex-col py-6 px-4 gap-4 shadow-xl ${darkMode ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'} animate-slide-in-left`}> 
              <div className="flex items-center justify-between mb-8">
                <span className={`text-2xl font-extrabold bg-clip-text ${darkMode ? 'bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 text-transparent' : 'bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-transparent drop-shadow-md'}`}>CaseGen</span>
                <button
                  aria-label="Close sidebar"
                  onClick={() => setSidebarOpen(false)}
                  className="rounded-full p-2 bg-white/80 dark:bg-gray-800/80 shadow"
                >
                  <svg width="24" height="24" fill="none" stroke="#ef4444" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => { setSelectedSidebar(item.label); setSidebarOpen(false); }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-lg transition-colors duration-150 ${selectedSidebar === item.label ? (darkMode ? 'bg-indigo-700 text-white' : 'bg-blue-600 text-white') : (darkMode ? 'bg-gray-900 text-gray-200 hover:bg-indigo-900' : 'bg-white text-gray-700 hover:bg-blue-100 border border-gray-200')}`}
                  >
                    <span className="text-xl">{item.icon}</span> {item.label}
                  </button>
                ))}
              </nav>
              <div className="mt-8">
                <div className="text-xs text-gray-400 dark:text-gray-500">Powered by Gemini AI & Next.js</div>
              </div>
            </div>
            <div className="flex-1" onClick={() => setSidebarOpen(false)}></div>
          </div>
        )}
        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col md:items-center md:justify-center px-4 py-10 relative md:min-h-screen min-h-0 h-[calc(100vh-4rem)]">
          {/* Center info for mobile */}
          <div className="md:hidden flex-1 flex flex-col items-center justify-center text-center py-10 overflow-y-auto">
            <h1 className={`text-3xl font-extrabold mb-4 bg-clip-text ${darkMode ? 'bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 text-transparent' : 'bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-transparent drop-shadow-md'}`}>Business Profile Generator</h1>
            <p className="text-zinc-900 dark:text-gray-300 mb-6">Generate AI-powered business profiles for any company. Search, view history, and manage your profile.</p>
          </div>
          {/* Desktop main card */}
          <div className={`hidden md:block w-full max-w-2xl mx-auto p-8 rounded-2xl shadow-2xl border relative ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
            <div className="absolute inset-0 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 400 400" className="absolute opacity-10 dark:opacity-20">
                <defs>
                  <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="200" cy="200" r="180" fill="url(#grad)" />
              </svg>
            </div>
            <h1 className={`text-4xl font-extrabold mb-6 text-center bg-clip-text ${darkMode ? 'bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 text-transparent' : 'bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-transparent drop-shadow-md'}`}>Business Profile Generator</h1>
            {selectedSidebar === "New Chat" && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Enter company name (e.g., Zara)"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  className={`border-2 rounded-xl px-5 py-4 text-lg font-medium focus:outline-none focus:ring-2 shadow-sm ${darkMode ? 'border-indigo-700 bg-gray-800 text-gray-100 focus:ring-indigo-500' : 'border-blue-300 bg-white text-gray-900 focus:ring-blue-400'}`}
                  required
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 active:scale-95 transition-transform duration-150"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin h-5 w-5 border-2 border-t-2 border-blue-200 border-t-blue-600 rounded-full inline-block"></span>
                      Generating...
                    </span>
                  ) : (
                    <span>Generate Profile</span>
                  )}
                </button>
                {error && <p className="text-red-500 text-center font-semibold">{error}</p>}
              </form>
            )}
            {selectedSidebar === "History" && (
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold mb-2 text-center text-blue-600 dark:text-indigo-300">Search History</h2>
                {history.length === 0 ? (
                  <div className="text-center text-gray-400 dark:text-gray-500">No history yet.</div>
                ) : (
                  <ul className="flex flex-col gap-2">
                    {history.map((item, idx) => (
                      <li key={idx} className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                        <span>{item.company}</span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">{item.date}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            {selectedSidebar === "Profile" && (
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 flex items-center justify-center text-4xl text-white shadow-lg">
                  <span>👤</span>
                </div>
                <h2 className="text-2xl font-bold text-blue-600 dark:text-indigo-300">Your Profile</h2>
                <div className="text-gray-600 dark:text-gray-300 text-center">Welcome to CaseGen! Start a new chat or view your search history.</div>
              </div>
            )}
          </div>
          {/* Mobile input fixed at bottom */}
          {selectedSidebar === "New Chat" && (
            <form onSubmit={handleSubmit} className={`md:hidden fixed bottom-0 left-0 w-full flex items-center gap-2 border-t px-4 py-3 z-20 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
              <input
                type="text"
                placeholder="Enter company name (e.g., Zara)"
                value={company}
                onChange={e => setCompany(e.target.value)}
                className={`flex-1 border-2 rounded-xl px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 shadow-sm ${darkMode ? 'border-indigo-700 bg-gray-800 text-gray-100 focus:ring-indigo-500' : 'border-blue-300 bg-white text-gray-900 focus:ring-blue-400'}`}
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-bold text-base shadow-lg hover:scale-105 active:scale-95 transition-transform duration-150"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin h-5 w-5 border-2 border-t-2 border-blue-200 border-t-blue-600 rounded-full inline-block"></span>
                    Generating...
                  </span>
                ) : (
                  <span>Go</span>
                )}
              </button>
            </form>
          )}
        </main>
      </div>
      {/* Add slide-in animation for sidebar */}
      <style jsx global>{`
        @keyframes slide-in-left {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.3s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </div>
  );
}
