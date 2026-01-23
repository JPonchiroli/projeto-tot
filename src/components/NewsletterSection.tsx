import { Link } from "react-router-dom";

export default function NewsletterSection() {
    return (
        <div className="bg-[#e34926] p-2 tracking-wide">
            <span className="text-white flex flex-col items-center text-center text-sm gap-1 
                            lg:flex-row lg:justify-center lg:text-lg">
                TOT News - A sua nova newsletter sobre Educação Corporativa! 
                <Link to={"/pageNotFound"}><u>Inscreva-se aqui.</u></Link>
            </span>
        </div>
    )
}   