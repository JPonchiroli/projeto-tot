type InputProps = {
    type: string
    name: string
    id: string
    placeholder: string
}

export default function Input({type, name, id, placeholder}: InputProps) {
    return (
        <input 
            className="bg-white pl-8 p-4 mx-2 my-2 rounded-[5px] placeholder-black text-xs
                        sm:text-base"
            placeholder={placeholder}
            type={type}
            name={name}
            id={id}
            required
        />
    )
}