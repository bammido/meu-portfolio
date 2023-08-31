import './App.css'
import About from './components/about'
import Experience from './components/experience'
import whatsapp from './assets/images/whatsapp.svg'

function App() {

  return (
    <>
      <div className='main'>
        <div className='resume'>
          <div className='introduction'>
            <h1>Bryan Fernandes</h1>
            <h2>Fullstack developer</h2>
            <p>Sou um desenvolvedor Fullstack dedicado e entusiasta.</p>
          </div>
          <nav className='nav'>
            <div>
              <div className='dash' />
              <a href="#about">sobre</a>
            </div>
            <div>
              <div className='dash' />
              <a href="#experience">experiência</a>
            </div>
            <div>
              <div className='dash' />
              <a href="#projects">projetos</a>
            </div>
          </nav>
          <div className='social-media'>
            <a target="_blank" href="https://wa.me/5584996495206"><i className="fi fi-brands-whatsapp"/></a>
            <a target="_blank" href="https://www.linkedin.com/in/bryan-fernandes-de-oliveira/"><i className="fi fi-brands-linkedin" /></a>
            <a target="_blank" href="https://github.com/bammido"><i className="fi fi-brands-github" /></a>
          </div>
        </div>
        <div className='content'>
          <About />
          <Experience />
        </div>
      </div>
    </>
  )
}

export default App
