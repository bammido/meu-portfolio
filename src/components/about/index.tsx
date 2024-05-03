import "./style.css"
import meuCv from '../../assets/cv_bryan_fernandes.pdf'

export default function About() {
    return <section className="about" id="about">
        <h2>Sobre mim</h2>
        <p>Sou um entusiasta de tecnologia e desenvolvedor Fullstack apaixonado por criar soluções inovadoras e enfrentar desafios complexos. Atualmente, estou perseguindo meu diploma em Ciências da Computação, buscando aprofundar meu conhecimento técnico e aplicá-lo em projetos significativos.</p>
        
        
        <h3>Principais Tecnologias</h3>
        <ul>
            <li>Next</li>
            <li>React</li>
            <li>Typescript/Javascript</li>
            <li>Tailwind</li>
            <li>git</li>
            <li>Sql</li>
            <li>Node</li>
        </ul>

        <h3>Alguns pontos chave</h3>
        <ul>
            <li>Experiência Prática e Aprendizado Ágil</li>
            <li>Desenvolvimento Colaborativo</li>
            <li>Sede por Desafios e Crescimento</li>
            <li>Compromisso com a Qualidade e Aprendizado Contínuo</li>
            <li>Foco em Qualidade e Excelência</li>
        </ul>
        <p>Quando não estou no computador, costumo me exercitar, jogar fortnite ou sair com os amigos.</p>
        <a href={meuCv} download="bryan_fernandes-cv.pdf">veja meu cv</a>
    </section>
}