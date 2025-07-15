"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

export default function Page({ params }) {
  const [company, setCompany] = useState("")
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params
      setCompany(decodeURIComponent(resolvedParams.company))
    }
    getParams()
  }, [params])

  useEffect(() => {
    if (!company) return

    const fetchBusinessProfile = async () => {
      try {
        setLoading(true)
        setError("")

        const res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ company }),
        })

        if (!res.ok) {
          const err = await res.json()
          throw new Error(err.error || "Failed to fetch data")
        }

        const result = await res.json()
        setData(result)
      } catch (err) {
        setError(err.message || "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchBusinessProfile()
  }, [company])

  const formatSectionTitle = (title) => {
    return title
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim()
  }

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-lg text-gray-600">
            Generating business report for{" "}
            <strong className="text-gray-900">{company || "..."}</strong>
          </p>
          <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-red-800 mb-2">Error</h2>
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
            <h1 className="text-3xl font-bold text-center mb-2">{company}</h1>
            <p className="text-center text-blue-100">Business Report • {today}</p>
          </div>

          {/* Content */}
          <div className="p-8">
            {Object.keys(data).length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No data available for this company.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {Object.entries(data).map(([section, content], index) => (
                  <div
                    key={section}
                    className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0"
                  >
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full mr-3">
                        {index + 1}
                      </span>
                      {formatSectionTitle(section)}
                    </h2>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
