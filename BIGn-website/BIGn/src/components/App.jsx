import { useState } from 'react'
import FlipNavWrapper from './FlipNavWrapper'
import GridHero from './GridHero'
import CountUpStats from './CountUpStats'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FlipNavWrapper/>
      <GridHero/>
      <CountUpStats/>
    </>
  )
}

export default App
