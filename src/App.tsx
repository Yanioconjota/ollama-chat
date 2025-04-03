// 📁 src/App.tsx
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const sendPrompt = async () => {
    if (!prompt.trim()) return
    setLoading(true)
    setResponse('')
    try {
      const res = await axios.post('/ask', { prompt })
      setResponse(res.data.response)
    } catch (err) {
      setResponse(`❌ ${err} getting response from API`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-xl space-y-4">
        <h1 className="text-3xl font-bold text-center">🧠 FastAPI + Ollama Chat</h1>
        <textarea
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 resize-none"
          rows={4}
          placeholder="Ask something to llama3..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          onClick={sendPrompt}
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold disabled:opacity-50"
        >
          {loading ? 'Asking...' : 'Ask Ollama'}
        </button>

        <div className="bg-gray-800 p-4 rounded min-h-[100px]">
          <p className="whitespace-pre-wrap">{response}</p>
        </div>
      </div>
    </div>
  )
}

export default App
