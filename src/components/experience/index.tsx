import ExperienceCard from './experience-card'
import { experiences } from './experiences'
import './style.css'

export default function Experience() {
    return <section className="experience" id="experience">
        <h2>Experiência</h2>
        {experiences.map(exp => <ExperienceCard key={exp.title} {...exp} />)}
    </section>
}