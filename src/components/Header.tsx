import logo from '../assets/tot-logo.png';

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
        </header>
    )
}