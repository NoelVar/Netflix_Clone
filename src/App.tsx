import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import Ad from './components/Ad'
import TrendingNow from './components/TrendingNow'

function App() {

  return (
    <main>
      <div className='min-h-screen bg-background text-foreground transition-colors duration-300'>
        <Header />
        <Hero />
        <Ad />
        <TrendingNow />
      </div>
    </main>
  )
}

export default App
