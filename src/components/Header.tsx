import logo from '../assets/tot-logo.png';
import welcome from '../assets/welcome.png';

export default function Header() {
    return (
        <header >
            <nav>

                <img src={logo} alt="TOT Logo" />

                <div>

                    <button>Cursos Personalizados</button>
                    <button>Cursos de Prateleira</button>
                    <button>Plataforma de Aprendizagem</button>
                    <button>Consultoria</button>
                    <button>Blog</button>
                    <button>eBooks</button>

                </div>

            </nav>

            <section>

                <h1>
                    Soluções educativas, entrega de conhecimento e conexão para a sua organização.
                </h1>

                <p>Conteúdos estratégicos, desenvolvidos para a sua realidade, adaptados para os seus colaboradores e personalizados para sua empresa. Com a TOT, o cliente nunca anda sozinho.</p>

                <button>Agendar demonstração</button>

            </section>

            <section>
                <img src={welcome} alt="Imagem Header" />
            </section>
        </header>
    )
}