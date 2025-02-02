import './App.css'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Interests from './pages/Interests'
import Footer from './pages/Footer'
import Lenis from 'lenis'

export default function App() {
  new Lenis({
    autoRaf: true,
  });

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[100px] backdrop-blur-[5px] bg-transparent 
  bg-[radial-gradient(transparent_1px,#0E0E0E_2px)] bg-[size:4px_4px] 
  [mask-image:linear-gradient(rgba(0,0,0,1)_60%,rgba(0,0,0,0)_100%)] 
  [-webkit-mask-image:linear-gradient(rgba(0,0,0,1)_60%,rgba(0,0,0,0)_100%)] 
  opacity-100 pointer-events-none z-50">
      </div>
      <div className="fixed w-screen h-screen z-50  pointer-events-none">
        <svg width="100%" height="100%" opacity=".2">
          <filter id="grainy">
            <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#grainy)"></rect>
        </svg>
      </div>
      <div className='bg-black pt-[150px] flex flex-col items-center'>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Interests />
        <Footer />
      </div>
    </>
  )
}