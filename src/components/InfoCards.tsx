type InfoCardsProps = {
    src: string
    alt: string
    titulo: string
    subtitulo: string
}

export default function InfoCards({src, alt, titulo, subtitulo}: InfoCardsProps) {
    return (
        <div className="bg-[#ffe5c9] rounded-[28px] border border-black/20 shadow-sm h-65 flex flex-col items-center justify-center text-center px-6 
                          sm:px-10 md:w-100 lg:w-140">
            <img className="h-20 mb-4" src={src} alt={alt} />
            <h2 className="text-[#e34926] text-3xl font-semibold">{titulo}</h2>
            <p className="text-sm font-light leading-snug">{subtitulo}</p>
        </div>
    )
}