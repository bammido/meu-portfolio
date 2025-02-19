import ProjectCard from './project-card'
import './style.css'
import eleganzaLogo from '../../assets/images/eleganza-logo-branco.png'
import flexiDrawLogo from '../../assets/images/FlexiDraw-logo.png'
import driverSelect from '../../assets/images/DriverSelect-logo.png'

export default function Projects() {

    const projects = [
        {
            projectLink: "https://drive-select-front.vercel.app/",
            projectIMG: driverSelect,
            projectTitle: "DriverSelect",
            projectResume: "O DriverSelect é um MVP de um aplicativo web de viagens, onde usuários podem solicitar corridas. O objetivo é criar uma plataforma funcional para conectar passageiros e motoristas.",
            projectTechnologies: ["integração com google places", "supabase", "Tailwind", "React", "Typescript", "Node", "TypeORM", "React Hooks"]
        },
        {
            projectLink: "https://eleganza-seven.vercel.app/",
            projectIMG: eleganzaLogo,
            projectTitle: "Eleganza",
            projectResume: "Um espaço onde a moda transcende o simples vestir para se tornar uma expressão de estilo pessoal e elegância refinada. No coração do Eleganza reside a crença de que a moda é mais do que apenas roupas; é uma forma de arte em constante evolução, capaz de contar histórias e inspirar mudanças.",
            projectTechnologies: ["Next", "Tailwind", "React", "Typescript", "gsap", "React Hooks"]
        },
        {
            projectLink: "https://flexi-draw.vercel.app/",
            projectIMG: flexiDrawLogo,
            projectTitle: "FlexiDraw",
            projectResume: "FlexiDraw é uma aplicação de quadro branco digital que permite aos usuários criar e manipular elementos gráficos de forma intuitiva e eficiente. Com uma interface amigável e responsiva, FlexiDraw é ideal para designers e criativos que desejam desenvolver artes visuais como logos e posters, proporcionando uma experiência fluida e versátil para transformar ideias em realidade. (AINDA EM ANDAMENTO)",
            projectTechnologies: ["React", "styled-components", "Typescript", "React Hooks"]
        }
    ]

    return <section className="projects" id="projects">
        <h2>Projetos</h2>
        {projects.map(project => <ProjectCard {...project} key={project.projectTitle} />)}
    </section>
}