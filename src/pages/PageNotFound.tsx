import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <main className="bg-[#ffe5c9] h-screen flex flex-col justify-center text-center">
            <h1 className="text-[#e34926] font-bold text-3xl mb-3
                            lg:text-7xl">
                Ops houve um engano...
            </h1>
            <p className="text-[#e34926] text-1xl mb-3
                            lg:text-4xl">
                Ainda desenvolvendo esta pagina.
            </p>

            <div className="mt-3">
                <Link to="/" className="text-white bg-[#e34926] w-60 px-10 py-3 rounded-full">
                    Voltar para pagina anterior
                </Link>
            </div>
        </main>
    )
}
