import ProjectCard from './project-card'
import './style.css'
import eleganzaLogo from '../../assets/images/eleganza-logo-branco.png'

export default function Projects() {
    const resume = "Um espaço onde a moda transcende o simples vestir para se tornar uma expressão de estilo pessoal e elegância refinada. No coração do Eleganza reside a crença de que a moda é mais do que apenas roupas; é uma forma de arte em constante evolução, capaz de contar histórias e inspirar mudanças."
    const technologies = ["Next", "Tailwind", "React", "Typescript", "gsap", "React Hooks"]
    const projectLink = "https://eleganza-6jmvsrkqf-bammidos-projects.vercel.app/"

    return <section className="projects" id="projects">
        <h2>Projetos</h2>
        <ProjectCard projectLink={projectLink} projectIMG={eleganzaLogo} projectTitle="Eleganza" projectResume={resume} projectTechnologies={technologies} />
    </section>
}