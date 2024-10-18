import { useState } from 'react'
import FlipNavWrapper from './FlipNavWrapper'
import GridHero from './GridHero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FlipNavWrapper/>
      <GridHero/>
    </>
  )
}

export default App
