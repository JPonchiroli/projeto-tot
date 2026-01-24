export default function Footer() {
    return (
        <footer className="bg-[#e34926] text-white py-10">
            <div className="container mx-auto sm:px-6">
                <div className="flex flex-col gap-10 justify-start items-start mx-10
                                sm:justify-between sm:flex-row sm:mx-20">

                    <div className="flex-1">
                        <div className="flex gap-2 mb-4 items-start sm:items-center">
                            <h2 className="text-xl font-bold">Contato</h2>
                        </div>

                        <p className="mb-2">
                            R. Antônio da Veiga, 419, Sala 10 - Victor Konder, <br />
                            Blumenau - SC - 89012-500
                        </p>
                        <p className="mb-2">(47) 96427-5326</p>
                        <p className="mb-2">(47) 3516-4418</p>
                        <p className="mb-4">contato@toteduca.com.br</p>

                        <div className="flex gap-3">
                            <img 
                                src="https://static.wixstatic.com/media/ca5485_592fb585bc484c7e90defc934005801b~mv2.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ca5485_592fb585bc484c7e90defc934005801b~mv2.png" 
                                alt="instagram"
                            />
                            <img 
                                src="https://static.wixstatic.com/media/ca5485_cb6665fbeeb74f35b93df669b834df88~mv2.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ca5485_cb6665fbeeb74f35b93df669b834df88~mv2.png" 
                                alt="linkedin"
                            />                            
                            <img 
                                src="https://static.wixstatic.com/media/ca5485_96d95ec978484d93b9938e3089203c33~mv2.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ca5485_96d95ec978484d93b9938e3089203c33~mv2.png" 
                                alt="facebook"
                            />
                            <img 
                                src="https://static.wixstatic.com/media/ca5485_0f1d137ffa144278a2f25e61d2079643~mv2.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ca5485_0f1d137ffa144278a2f25e61d2079643~mv2.png"
                                alt="whatsapp"
                            />
                        </div>
                    </div>

                    <div className="flex-1 max-w-md hidden
                                    md:block">
                        <h2 className="text-2xl font-bold mb-5">Se inscreva para receber novidades</h2>

                        <form className="space-y-4">
                            <input
                                className="w-full p-3 bg-white text-gray-500 rounded placeholder-gray-400 text-xs lg:text-base"
                                placeholder="Escreva seu nome aqui"
                                type="text"
                                required
                            />

                            <input
                                className="w-full p-3 bg-white text-gray-500 rounded placeholder-gray-400 text-xs lg:text-base"
                                placeholder="Escreva seu melhor e-mail aqui"
                                type="email"
                                required
                            />

                            <button 
                                className="w-full bg-[#ffe5c9] text-black rounded-lg py-3 font-medium hover:bg-[#ffdac0] transition hover:cursor-pointer"
                                type="submit"
                            >
                                OK
                            </button>
                        </form>
                    </div>

                </div>
                
                <div className="mt-10 pt-5 border-t border-white/20 text-center text-sm">
                    <p>COPYRIGHT ® 2025. TOT EDUCAÇÃO CORPORATIVA. TODOS OS DIREITOS RESERVADOS</p>
                </div>
            </div>
        </footer>
    )
}