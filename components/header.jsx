"use client"
import { usePathname } from "next/navigation"
import HamburgerMenu from "./HamburgerMenu"
import Image from "next/image"
import Logo from "../assets/EMBAFIT-01.png"
import Link from "next/link"
import NavLink from "./navLink";
import { menuLinks, KyokushinMenuLinks } from "@/libs/menuLinks";


export default function Header(){

    const pathname = usePathname();

    
    return(
        <header className="relative group py-4 bg-gray-50">
            <div className="flex justify-center items-center relative">
                <Link href="/" >
                    <Image className="flex justify-center items-center" src={Logo} width={180} height={180} alt="logo img"></Image>     
                </Link>

                
                
                {/* Hamburger Menu Button - Sadece mobilde görünür */}
                <HamburgerMenu/>
               
            </div>

            {/* Desktop hover efekti için çizgi */}
              
              <div className="top-full w-full flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="w-[80%] border-t border-gray-300"></div>
                </div> 

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="mt-6 flex justify-evenly font-blackOpsOne text-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <NavLink
                           navLink={pathname.startsWith("/kyokushin") ? KyokushinMenuLinks: menuLinks}
                            classname="hover:text-brandYellow active:text-brandYellow"
                        />
                </ul>
            </nav>
        </header>
    )
}