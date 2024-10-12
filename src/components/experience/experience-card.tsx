import TechnologyCard from "../technology-card/technology-card"

interface IExperienceCardProps {
    technologies: string[];
    period: string;
    title: string;
    // descriptions: string[];
    description: React.ReactNode;
}

export default function ExperienceCard({ technologies, description, title, period } : IExperienceCardProps) {

    return <a target="_blank" href="https://www.frameworkdigital.com.br/" className="experience-card">
        <div className="period">{period}</div>
        <div className="experience-resume">
            <h3>{title}</h3>
            {description}
            {/* {descriptions.map(description => <p key={description}>{description}</p>)} */}
            <div className="technologies">
                {technologies.map(tech => <TechnologyCard key={tech} tech={tech} />)}
            </div>
        </div>
    </a>
}