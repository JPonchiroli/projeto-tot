import Input from "./Input";

export default function Form() {
    return (
        <div className="flex flex-col justify-center text-center">

            <h2 className="text-white text-2xl pb-5 font-bold
                            sm:text-4xl">
                Agende uma demonstração
            </h2>

            <form className="flex flex-col 
                            sm:px-17">
                <Input type="text" name="nome" id="nome" placeholder="Nome"/>
                <Input type="text" name="email" id="email" placeholder="Seu email corporativo"/>
                <Input type="text" name="empresa" id="empresa" placeholder="Qual empresa você trabalha"/>
                <Input type="text" name="ajuda" id="ajuda" placeholder="Digite aqui como podemos te ajudar"/>

                <button
                    className="bg-[#e34926] text-black rounded-[5px] inline-flex self-center px-20 py-4 mt-3"
                    type="submit"
                >
                    Enviar
                </button>
            </form>
        </div>
    )
}