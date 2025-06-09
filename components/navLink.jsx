import Link from "next/link"
export default function NavLink({onClick ,classname, navLink = []}){
    return(
        <>
            {navLink.map((link) => {
                return (<li className="font-blackOpsOne text-black" key={link.href}>
                    <Link
                        href={link.href}
                        className={classname}
                        onClick={onClick}
                        
                    >
                         {link.label} 
                    </Link>
                </li>)
            })}
        </>
    )
}