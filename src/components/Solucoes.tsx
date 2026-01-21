type SolucoesProps = {
    src: string
    alt: string
}

export default function Solucoes({ src, alt }: SolucoesProps) {
    return (
        <img src={src} alt={alt} />
    )
}