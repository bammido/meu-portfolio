import ProjectCard from './project-card'
import './style.css'
import whatslab from '../../assets/images/controle-de-investimento.png'

export default function Projects() {
    const resume = "Seu hub de controle financeiro: gerencie ações, investimentos alternativos e criptomoedas em um só lugar. Analise sua carteira com dados detalhados por categoria."
    const technologies = ["React", "Node", "Typescript", "My SQL", "Knex", "Primereact"]
    const projectLink = "https://controle-de-investimentos-react.vercel.app/"

    return <section className="projects" id="projects">
        <h2>Projetos</h2>
        <ProjectCard projectLink={projectLink} projectIMG={whatslab} projectTitle="Investimento Fácil" projectResume={resume} projectTechnologies={technologies} />
    </section>
}