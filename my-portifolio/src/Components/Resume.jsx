import '../Styles/Resume.css'

const Resume = () => {
    const codeString = `
        Hi! I'm a web developer, welcome and see my projects here =>
    `
    return(
        <div className="resume">
            <pre>
                <code>{codeString}</code>
            </pre>
        </div>
    )
}

export default Resume;