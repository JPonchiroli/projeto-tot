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
import MainButton from "./MainButton"

export default function Main() {
    return (
        <main>
            <section className="bg-[#e34926] flex flex-col text-center p-7">

                <h1 className="font-bold tracking-wider text-xl px-2 sm:text-white">
                    Soluções educativas, entrega de conhecimento 
                    e conexão para a sua organização.
                </h1>

                <p className="text-sm sm:text-white my-3 tracking-wider">
                    Conteúdos estratégicos, desenvolvidos para a sua realidade, adaptados para os seus <br />
                    colaboradores e personalizados para sua empresa. <span className="font-semibold">Com a TOT, o cliente nunca anda sozinho.</span>
                </p>

                <div className="m-5">
                    <MainButton 
                        titulo="Agendar demonstração"
                        backgroundColor="bg-[#ffe5c9]"
                        textColor="text-black"
                    />
                </div>

            </section>

            <section>
                <img src={welcome} alt="Imagem Header" className="hidden sm:block" />
            </section>

            <section className="bg-[#ffe5c9] flex flex-col items-center text-center px-10 py-0
                                sm:px-28 sm:py-10 sm:items-start">

                <h2 className="text-[#e34926] text-3xl font-semibold mb-4">Nossos cliente</h2>
                <p className="font-extralight">As empresas que geramos as experiências desejadas!</p>

                <CarouselClientes />

            </section>

            <section className="bg-[#e34926] px-28 py-10 hidden sm:block">

                <div className="text-center lg:text-start">
                    <h2 className="text-[#ffe5c9] text-3xl font-semibold mb-4">Soluções com propósito</h2>
                    <p className="font-extralight">Entender o contexto, personalizar a jornada e caminhar lado a lado.</p>
                </div>

                <div className="flex gap-3 justify-center py-7">
                    <Solucoes src={cursosPersonalizados} alt="Cursos Personalizados"/>
                    <Solucoes src={cursosPrateleiras} alt="Cursos Personalizados"/>
                    <Solucoes src={plataformaAprendizagem} alt="Cursos Personalizados"/>
                    <Solucoes src={consultoriaEducacional} alt="Cursos Personalizados"/>
                </div>

            </section>

            <section className="flex flex-col gap-8 justify-center m-10 
                                sm:flex-row">

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

            <section className="bg-[#ee5923] flex flex-col mx-10 px-5 py-20 justify-around rounded-3xl
                                lg:mx-45 lg:flex-row lg:py-10">

                <div className="text-center content-center
                                lg:text-left ">

                    <h2 className="text-white font-semibold mb-3 text-xl
                                    sm:text-5xl">
                            Material Gratuito
                    </h2>

                    <p className="text-white font-extralight tracking-wider">
                        Conheça o nosso Manual da Universidade Corporativa. Nele, <br />
                        você encontrará os 6 passos para uma implantação de <br />
                        sucesso na sua empresa. Aproveite!
                    </p>

                    <MainButton 
                        titulo="BAIXE AGORA" 
                        backgroundColor="bg-white"
                        textColor="text-[#ee5923]"
                        estilosExtras="w-52 my-7"
                    />

                </div>

                <div>
                    <img 
                        src="https://static.wixstatic.com/media/ca5485_d5d6875035f84199bd3d03a2fb6504de~mv2.png/v1/crop/x_459,y_563,w_2880,h_1952/fill/w_522,h_354,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ebook%20psd.png" 
                        alt="E-book sobre  6 Passos para uma implantação de Sucesso"
                    />
                </div>

            </section>

            <section className="flex flex-col items-center mt-25">
                <h2 className="text-[#e34926] text-center font-bold mb-3 text-3xl px-10">
                    Confira os nossos Cursos de Prateleira
                </h2>

                <CarrouselCursos />
            </section>

            <section className="bg-[#151616] mx-5 my-5 px-7 py-7 rounded-3xl
                                lg:mx-35">
                <Form />
            </section>
        </main>
    )
}