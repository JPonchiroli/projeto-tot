type SolucoesProps = {
    src: string
    alt: string
}

export default function Solucoes({ src, alt }: SolucoesProps) {
    return (
        <img 
            className="hover:scale-120 transition-transform duration-200"
            src={src} 
            alt={alt} 
        />
    )
}