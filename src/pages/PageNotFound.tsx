import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <main>
            <h1>Ops houve um engano</h1>
            <p>Estamos desenvolvendo esta pagina</p>
            <Link to="/">Voltar para pagina anterior</Link>
        </main>
    )
}
