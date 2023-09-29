import TechnologyCard from "../technology-card/technology-card"

export default function ExperienceCard() {
    const technologies = ["React", "Node", "Typescript", "Next", "SQL sever", "Type ORM", "Sequelize", "Gitflow"]

    return <a target="_blank" href="https://www.frameworkdigital.com.br/" className="experience-card">
        <div className="period">OUT/2022 - PRESENTE</div>
        <div className="experience-resume">
            <h3>Desenvolvedor Web - Framework Digital</h3>
            <p>Minha jornada como desenvolvedor ganhou forma na Framework, uma renomada empresa especializada em fornecer equipes de alto desempenho em tecnologia para diversas indústrias. Nesse contexto, desempenhei um papel-chave em um projeto destinado a uma grande funerária.</p>
            <p>Nessa experiência, fui encarregado de orquestrar funcionalidades abrangentes, tanto no Frontend quanto no Backend. Minha abordagem focada na excelência levou a um código bem estruturado e a soluções eficazes. Com o compromisso de buscar conhecimento de forma constante, mergulhei em desafios intrincados e os transformei em oportunidades de crescimento. Minha trajetória na Framework, alinhada ao projeto na indústria funerária, me permitiu combinar a expertise tecnológica com a capacidade de adaptação a cenários diversos.</p>
            <div className="technologies">
                {technologies.map(tech => <TechnologyCard tech={tech} />)}
            </div>
        </div>
    </a>
}