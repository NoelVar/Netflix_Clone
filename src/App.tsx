import './App.css'
import Hero from './components/Hero'
import MovieList from './components/MovieList'
import Header from './components/Header'

function App() {

  return (
      <div className='bg-[#1a1a1a] text-white h-screen'>
        <Header />
        <Hero />
        <MovieList />
      </div>
  )
}

export default App
