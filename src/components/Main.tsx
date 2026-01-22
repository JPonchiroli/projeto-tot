import welcome from "../assets/welcome.png"
import cursosPersonalizados from "../assets/cursos-personalizados.avif"
import cursosPrateleiras from "../assets/cursos-prateleira.avif"
import plataformaAprendizagem from "../assets/plataforma-aprendizagem.avif"
import consultoriaEducacional from "../assets/cursos-personalizados.avif"
import Solucoes from "./Solucoes"
import InfoCards from "./InfoCards"
import Form from "./Form"
import CarouselClientes from "./CarouselClientes"
import CarrouselCursos from "./CarouselCursos"

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

            <section>
                <h2>Nossos cliente</h2>
                <p>As empresas que geramos as experiências desejadas!</p>

                <CarouselClientes />
            </section>

            <section>
                <h2>Soluções com propósito</h2>
                <p>Entender o contexto, personalizar a jornada e caminhar lado a lado.</p>

                <div>
                    <Solucoes src={cursosPersonalizados} alt="Cursos Personalizados"/>
                    <Solucoes src={cursosPrateleiras} alt="Cursos Personalizados"/>
                    <Solucoes src={plataformaAprendizagem} alt="Cursos Personalizados"/>
                    <Solucoes src={consultoriaEducacional} alt="Cursos Personalizados"/>
                </div>
            </section>

            <section>
                <InfoCards 
                    src="https://static.wixstatic.com/media/611af1_bc8bd57236f84fbdb8aab06f2625cd03~mv2.png/v1/fill/w_114,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/aprendizes_impactados.png"
                    alt="aprendizes_impactados"
                    titulo="+ de 2,5 milhões"
                    subtitulo="de aprendizes impactados com os nossos cursos."
                />

                <InfoCards 
                    src="https://static.wixstatic.com/media/611af1_8e467101ee0449dd842b1a77de93a963~mv2.png/v1/fill/w_115,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/projetos_entregues.png"
                    alt="projetos_entregues"
                    titulo="+ de 1200"
                    subtitulo="projetos entregues para os nossos clientes."
                />

                <InfoCards 
                    src="https://static.wixstatic.com/media/611af1_830aafa33df74189999c3c20ca2f5ea8~mv2.png/v1/fill/w_98,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/engajamento_conclusao.png"
                    alt="engajamento_conclusao"
                    titulo="97%"
                    subtitulo="de engajamento e conclusão dos cursos desenvolvidos pela TOT"
                />
            </section>

            <section>
                <div>
                    <h2>Material Gratuito</h2>
                    <p>Conheça o nosso Manual da Universidade Corporativa. Nele, </p>
                    <p> você encontrará os 6 passos para uma implantação de </p>
                    <p>sucesso na sua empresa. Aproveite!</p>
                    <button>BAIXE AGORA</button>
                </div>

                <div>
                    <img 
                        src="https://static.wixstatic.com/media/ca5485_d5d6875035f84199bd3d03a2fb6504de~mv2.png/v1/crop/x_459,y_563,w_2880,h_1952/fill/w_522,h_354,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ebook%20psd.png" 
                        alt="E-book sobre  6 Passos para uma implantação de Sucesso"
                    />
                </div>
            </section>

            <section>
                <h2>Confira os nossos Cursos de Prateleira</h2>

                <CarrouselCursos />
            </section>

            <section>
                <h2>Agende uma demonstração</h2>
                <Form />
            </section>
        </main>
    )
}