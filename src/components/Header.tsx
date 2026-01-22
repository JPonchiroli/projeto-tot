import logo from '../assets/tot-logo.png';
import HeaderButton from './HeaderButton';

export default function Header() {
    return (
        <header className="bg-[#ca3f1f]">
            <nav className="flex justify-between items-center mx-18 p-5">

                <img src={logo} alt="TOT Logo" />

                <div className="flex gap-3">
                    <HeaderButton titulo="Cursos Personalizados"/>
                    <HeaderButton titulo="Cursos de Prateleira"/>
                    <HeaderButton titulo="Plataforma de Aprendizagem"/>
                    <HeaderButton titulo="Consultoria"/>
                    <HeaderButton titulo="Blog"/>
                    <HeaderButton titulo="eBooks"/>
                </div>

            </nav>
        </header>
    )
}