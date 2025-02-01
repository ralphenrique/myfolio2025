import './App.css'
import Hero from './pages/Hero'
import About from './pages/About'

export default function App() {
  return (
    <>
      <div className="fixed w-screen h-screen z-50">
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
        <About/>
      </div>
    </>
  )
}