export default function Form() {
    return (
        <form>
            <input type="text" name="nome" id="nome" placeholder="Nome"/>
            <input type="text" name="email" id="email" placeholder="Seu email corporativo"/>
            <input type="text" name="empresa" id="empresa" placeholder="Qual empresa você trabalha"/>
            <input type="text" name="ajuda" id="ajuda" placeholder="Digite aqui como podemos te ajudar"/>

            <button type="submit">Enviar</button>
        </form>
    )
}