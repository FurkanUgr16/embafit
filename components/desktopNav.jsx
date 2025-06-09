"use client"
import { usePathname } from "next/navigation";
import { KyokushinMenuLinks, menuLinks } from "@/libs/menuLinks";
import NavLink from "./navLink";

export default function DesktopNav({className}){
        const pathname = usePathname();
    return(
         <nav className="hidden md:block">
                <ul className="mt-6 flex justify-evenly font-blackOpsOne text-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <NavLink
                           navLink={pathname.startsWith("/kyokushin") ? KyokushinMenuLinks: menuLinks}
                            classname={className}
                        />
                </ul>
            </nav>
    )
}