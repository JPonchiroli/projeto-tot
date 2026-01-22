type MainButtonProps = {
    titulo: string
    backgroundColor: string
    textColor: string
    estilosExtras?: string
}

export default function MainButton({titulo, backgroundColor, textColor, estilosExtras}: MainButtonProps) {
    return (
        <button className={`px-4 py-3 rounded-full text-1xl font-semibold hover:cursor-pointer ${backgroundColor} ${textColor} ${estilosExtras}`}>
            {titulo}
        </button>
    )

}