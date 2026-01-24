import { Link } from 'react-router-dom';
import logo from '../assets/tot-logo.png';
import HeaderButton from './HeaderButton';
import SideMenu from './SideMenu';

export default function Header() {
    return (
        <header className="bg-[#ca3f1f]">
            <nav className="flex justify-between items-center p-5
                            md:mx-18">

                <img src={logo} alt="TOT Logo" />

                <div className="hidden xl:flex xl:gap-3">

                    <Link to={"/pageNotFound"}><HeaderButton titulo="Cursos Personalizados" /></Link>
                    <Link to={"/pageNotFound"}><HeaderButton titulo="Cursos de Prateleira" /></Link>
                    <Link to={"/pageNotFound"}><HeaderButton titulo="Plataforma de Aprendizagem" /></Link>
                    <Link to={"/pageNotFound"}><HeaderButton titulo="Consultoria" /></Link>
                    <Link to={"/pageNotFound"}><HeaderButton titulo="Blog" /></Link>
                    <Link to={"/pageNotFound"}><HeaderButton titulo="eBooks" /></Link>

                </div>

                <div className='hover:cursor-pointer xl:hidden'>
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