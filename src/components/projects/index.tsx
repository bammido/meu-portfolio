import ProjectCard from './project-card'
import './style.css'
import eleganzaLogo from '../../assets/images/eleganza-logo-branco.png'

export default function Projects() {
    const resume = "Um espaço onde a moda transcende o simples vestir para se tornar uma expressão de estilo pessoal e elegância refinada. No coração do Eleganza reside a crença de que a moda é mais do que apenas roupas; é uma forma de arte em constante evolução, capaz de contar histórias e inspirar mudanças."
    const technologies = ["Next", "Tailwind", "React", "Typescript", "gsap"]
    const projectLink = "https://eleganza-6jmvsrkqf-bammidos-projects.vercel.app/"
    // const imageLink = 'https://private-user-images.githubusercontent.com/65303066/327856734-02d3e8ea-5bce-4b4b-86f9-ff608d8eb3ba.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQ3NjM2MTMsIm5iZiI6MTcxNDc2MzMxMywicGF0aCI6Ii82NTMwMzA2Ni8zMjc4NTY3MzQtMDJkM2U4ZWEtNWJjZS00YjRiLTg2ZjktZmY2MDhkOGViM2JhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTAzVDE5MDgzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRiMTJmNmFlYjI3NTc1YTlhNzA3ZDY1ZjhiYzhlMWM2Mzk0ZGRkN2FmYTQzNjc4NzdiMTIwNmUwOTcxZTZkZWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.zD-cXqOnQlDZrxrKIDXz6LONnFz_xRoMTaHRMYtvu9c'

    return <section className="projects" id="projects">
        <h2>Projetos</h2>
        <ProjectCard projectLink={projectLink} projectIMG={eleganzaLogo} projectTitle="Eleganza" projectResume={resume} projectTechnologies={technologies} />
    </section>
}