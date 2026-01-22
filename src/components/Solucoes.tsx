type SolucoesProps = {
    src: string
    alt: string
}

export default function Solucoes({ src, alt }: SolucoesProps) {
    return (
        <img 
            className="hover:scale-110 transition-transform duration-400 hover:cursor-pointer"
            src={src} 
            alt={alt}
        />
    )
}