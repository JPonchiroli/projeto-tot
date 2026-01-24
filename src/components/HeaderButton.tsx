type HeaderButtonProps = {
    titulo: string
}

export default function HeaderButton({titulo}: HeaderButtonProps) {
    return (
        <button className="bg-[#ffe5c9] rounded-full shadow-xl shadow-black/15 px-2 py-1 
                            hover:cursor-pointer hover:bg-[#151616] hover:text-[#ffe5c9] transition">
            {titulo}
        </button>
    )

}