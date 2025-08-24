export default function Header() {
    const cvFileName = "Declan-Gallagher-CV.pdf"
    return (
        <header>
            <img src="" aria-label="Declan Gallagher Logo"></img>
            <ul>
                <li><a href="./index.jsx">Home</a></li>
                <li><a href="">About Me</a></li>
                <li><a href="./Projects.jsx">Projects</a></li>
                <li><a href="">Contact Me</a></li>
                <li><a href="/files/Declan-Gallagher-CV.docx" download={cvFileName}>CV</a></li>
                <li><a href="" aria-label="Dark and light mode toggle"><img src=""></img></a></li>
            </ul>
        </header>
    )
}