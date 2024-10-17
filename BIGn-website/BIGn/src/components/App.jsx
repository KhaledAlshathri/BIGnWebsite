import { useState } from 'react'
import FlipNavWrapper from './FlipNavWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FlipNavWrapper/>
    </>
  )
}

export default App
