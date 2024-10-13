import '../Styles/Resume.css'

const Resume = () => {
    const codeString = `
    Sou desenvolvedora web e estudante de Análise e Desenvolvimento de Sistemas, 
    com uma paixão por criar experiências digitais envolventes e visualmente atrativas. 
    Minha curiosidade me leva a explorar profundamente os temas que me interessam, permitindo-me 
    desenvolver uma compreensão sólida e multifacetada das tecnologias e 
    ferramentas que utilizo.

    Com experiência em JavaScript e React, tenho trabalhado em projetos que envolvem 
    a construção de interfaces interativas e responsivas. 
    Minha criatividade é um pilar fundamental do meu trabalho, e eu costumo passar 
    horas em busca de inspiração no Pinterest, onde descubro imagens e designs que 
    estimulam minha imaginação e influenciam meus layouts.

    Acredito que a combinação de habilidades técnicas e um olhar artístico me permite não apenas 
    resolver problemas de forma eficaz, mas também criar soluções que são esteticamente agradáveis 
    e funcionalmente robustas. Estou sempre em busca de novos desafios e oportunidades para aprender e
    crescer como profissional.
    `
    return(
        <div className="resume">
            <p>{codeString}</p>
        </div>
    )
}

export default Resume;