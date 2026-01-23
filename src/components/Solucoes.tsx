type SolucoesProps = {
    src: string
    alt: string
}

export default function Solucoes({ src, alt }: SolucoesProps) {
    return (
        <img 
            className="hover:scale-110 transition-transform duration-400 hover:cursor-pointer
                        sm:w-30 md:w-38 lg:w-57 xl:w-80"
            src={src} 
            alt={alt}
        />
    )
}