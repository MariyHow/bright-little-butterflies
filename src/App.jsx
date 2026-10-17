import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useTheme from './hooks/useTheme'

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <>
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Hero isDark={isDark} onToggleTheme={toggleTheme} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
