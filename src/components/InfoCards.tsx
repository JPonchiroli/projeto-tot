type InfoCardsProps = {
    src: string
    alt: string
    titulo: string
    subtitulo: string
}

export default function InfoCards({src, alt, titulo, subtitulo}: InfoCardsProps) {
    return (
        <>
            <img src={src} alt={alt} />
            <h3>{titulo}</h3>
            <p>{subtitulo}</p>
        </>
    )
}