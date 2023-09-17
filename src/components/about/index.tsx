import "./style.css"
import meuCv from '../../assets/cv_bryan_fernandes2.pdf'

export default function About() {
    return <section className="about" id="about">
        <h2>Sobre mim</h2>
        <p>Sou um entusiasta de tecnologia e desenvolvedor Fullstack apaixonado por criar soluções inovadoras e enfrentar desafios complexos. Atualmente, estou perseguindo meu diploma em Ciências da Computação, buscando aprofundar meu conhecimento técnico e aplicá-lo em projetos significativos.</p>
        
        {/* <p>Tenho um compromisso inabalável com a qualidade em tudo o que faço. Escrevo código limpo e bem documentado, visando não apenas a funcionalidade, mas também a legibilidade e a manutenibilidade a longo prazo. Minha dedicação à excelência se reflete em cada aspecto do meu trabalho.</p> */}
        {/* <p>Com um ano de experiência sólida como estagiário da <a href="https://www.frameworkdigital.com.br/">FrameWork Digital</a>, trabalhando em uma variedade de projetos desafiadores. Minha paixão pela tecnologia e minha capacidade de aprender rapidamente me permitiram adquirir conhecimentos abrangentes em desenvolvimento web e contribuir de maneira significativa para equipes de desenvolvimento colaborativas.</p> */}
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