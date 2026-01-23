import logo from '../assets/tot-logo.png';
import HeaderButton from './HeaderButton';
import SideMenu from './SideMenu';

export default function Header() {
    return (
        <header className="bg-[#ca3f1f]">
            <nav className="flex justify-between items-center p-5
                            md:mx-18">

                <img src={logo} alt="TOT Logo" />

                <div className="hidden lg:flex md:gap-3">

                    <HeaderButton titulo="Cursos Personalizados" />
                    <HeaderButton titulo="Cursos de Prateleira" />
                    <HeaderButton titulo="Plataforma de Aprendizagem" />
                    <HeaderButton titulo="Consultoria" />
                    <HeaderButton titulo="Blog" />
                    <HeaderButton titulo="eBooks" />

                </div>

                <div className='hover:cursor-pointer lg:hidden'>
                    <SideMenu
                        menus={[
                            "Cursos Personalizados",
                            "Cursos de Prateleira",
                            "Plataforma de Aprendizagem",
                            "Consultoria",
                            "Blog",
                            "eBooks"
                        ]}
                    />
                </div>

            </nav>
        </header>
    )
}