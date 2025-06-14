import HamburgerMenu from "./HamburgerMenu"
import DesktopNav from "./desktopNav"
import Image from "next/image"
import Logo from "../assets/EMBAFIT-01.png"
import Link from "next/link"
export default function Header(){

    
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
              
             <div className="hidden lg:flex top-full w-full justify-center">
    <div className="w-[80%] border-t border-gray-300"></div>
</div> 

            {/* Desktop Navigation */}
           
                <DesktopNav className="hover:text-brandYellow active:text-brandYellow" />
         
        </header>
    )
}