import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/App.jsx'
import About from './Pages/About.jsx';
import Content from './Pages/Content.jsx';
import Activities from './Pages/Activities.jsx';
import Members from './Pages/Members.jsx';
import FlipNavWrapper from './components/FlipNavWrapper'
import Footer from './components/Footer'
import Multaqa from './Pages/Multaqa.jsx'
import BigO from './Pages/BigO.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/About", element: <About />},
  {path: "/Activities", element: <Activities />},
  {path: "/Content", element: <Content />},
  {path: "/Members", element: <Members />},
  {path: "/Multaqa", element: <Multaqa />},
  {path: "/BigOs", element: <BigO />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FlipNavWrapper />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>,
)
