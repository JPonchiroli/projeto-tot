type HeaderButtonProps = {
    titulo: string
}

export default function HeaderButton({titulo}: HeaderButtonProps) {
    return (
        <button className="bg-[#ffe5c9] px-4 py-1 rounded-full shadow-xl shadow-black/15 hover:cursor-pointer">
            {titulo}
        </button>
    )

}