import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from "react-hot-toast";
import App from './App.jsx'
import Lenis from 'lenis'

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

createRoot(document.getElementById('root')).render(
  <App />
)