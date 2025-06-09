"use client"
import { usePathname } from "next/navigation";
import { KyokushinMenuLinks, menuLinks } from "@/libs/menuLinks";
import NavLink from "./navLink";


export default function FooterLinks(){

    const pathname = usePathname();

    return(
        <NavLink navLink={pathname.startsWith("/kyokushin") ? KyokushinMenuLinks: menuLinks}
        classname="hover:text-brandYellow transition-colors duration-200 text-sm sm:text-base" />
    )
}