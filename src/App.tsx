import { useEffect } from 'react'
import './App.css'
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
// import Projects from './components/projects'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll("nav a");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };  

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetId = entry.target.getAttribute("id");
        navItems.forEach((navItem) => {
          navItem.classList.remove("active");
          if (navItem.getAttribute("href") === `#${targetId}`) {
            navItem.classList.add("active");
          }
        });
      }
    });
  }, options);
  

  sections.forEach((section) => {
    observer.observe(section);
  });
  }, [])

  return (
    <>
      <div className='main'>
        <div className='resume'>
          <div className='introduction'>
            <h1>Bryan Fernandes</h1>
            <h2>Full Stack developer</h2>
            <p>Sou um desenvolvedor Full Stack dedicado e entusiasta.</p>
          </div>
          <nav className='nav'>
          <a href="#about">
              <div className='dash' />
              <span>sobre</span>
            </a>
            <a href="#experience">
              <div className='dash' />
              <span>experiência</span>
            </a>
            <a href="#projects">
              <div className='dash' />
              <span>projetos</span>
            </a>
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
          <Projects />
          <p>Estou constantemente em busca de oportunidades empolgantes que me permitam aplicar minhas habilidades, paixões e conhecimento enquanto cresço como desenvolvedor e profissional de tecnologia. Seja através de desafios técnicos complexos, colaboração em equipe ou aprendizado contínuo, estou pronto para enfrentar novas jornadas e alcançar resultados excepcionais.</p>
          <p>Design baseado em Brittany Chiang </p>
        </div>
      </div>
    </>
  )
}

export default App
