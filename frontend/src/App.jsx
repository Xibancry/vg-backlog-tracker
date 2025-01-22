import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Using Vite's environment variable syntax
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000'
    
    fetch(`${apiUrl}/api/test/`)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <div className="App">
      <h1>My Web Application</h1>
      <p>Message from backend: {message}</p>
    </div>
  )
}

export default App