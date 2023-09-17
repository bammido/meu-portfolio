import TechnologyCard from "../technology-card/technology-card";

interface Props {
    projectTechnologies: string[];
    projectIMG: string, projectTitle: string;
    projectResume: string;
    projectLink: string
}

export default function ProjectCard({ projectLink, projectTechnologies, projectIMG, projectTitle, projectResume }: Props) {
    return <a target="_blank" href={projectLink} className="project-card">
        <div className="project-image">
            <img src={projectIMG} />
        </div>
        <div className="project-resume">
            <h3>{projectTitle}</h3>
            <p>{projectResume}</p>
            <div className="technologies">
                {projectTechnologies.map(tech => <TechnologyCard tech={tech} />)}
            </div>
        </div>
    </a>
}