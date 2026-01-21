import welcome from "../assets/welcome.png"

export default function Main() {
    return (
        <main>
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
        </main>
    )
}