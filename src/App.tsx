import './App.css'
import About from './components/about'

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
              <a>sobre</a>
            </div>
            <div>
              <div className='dash' />
              <a>experiência</a>
            </div>
            <div>
              <div className='dash' />
              <a>projetos</a>
            </div>
          </nav>
          <div className='social-media'>social media icons</div>
        </div>
        <div className='content'>
          <About />
          <h2>Experiência</h2>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
        </div>
      </div>
    </>
  )
}

export default App
