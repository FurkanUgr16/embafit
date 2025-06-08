"use client"
import { useState } from "react"
import Image from "next/image"
import Logo from "../assets/EMBAFIT-01.png"
import Link from "next/link"

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return(
        <header className="relative group py-4">
            <div className="flex justify-center items-center relative">
                <Link href="/" >
                    <Image className="flex justify-center items-center" src={Logo} width={180} height={180} alt="logo img"></Image>     
                </Link>

                
                
                {/* Hamburger Menu Button - Sadece mobilde görünür */}
                <button 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 md:hidden z-50 p-2"
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>
            </div>

            {/* Desktop hover efekti için çizgi */}
              
              <div className="top-full w-full flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="w-[80%] border-t border-gray-300"></div>
                </div> 

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="mt-6 flex justify-evenly font-blackOpsOne text-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <li className="hover:text-brandYellow active:text-brandYellow"><Link href="/">Anasayfa</Link></li>
                    <li className="hover:text-brandYellow active:text-brandYellow"><Link href={"/kyokushin"}>Kyokushin</Link></li>
                    <li className="hover:text-brandYellow active:text-brandYellow"><Link href={"/hakkimizda"}>Hakkımızda</Link></li>
                    <li className="hover:text-brandYellow active:text-brandYellow"><Link href={"/iletisim"}>İletişim</Link></li>
                </ul>
            </nav>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closeMenu}>
                <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
                    <nav className="pt-20 px-6">
                        <ul className="space-y-6 font-blackOpsOne text-xl">
                            <li>
                                <Link 
                                    href="/" 
                                    className="block py-2 hover:text-brandYellow active:text-brandYellow transition-colors"
                                    onClick={closeMenu}
                                >
                                    Anasayfa
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/kyokushin" 
                                    className="block py-2 hover:text-brandYellow active:text-brandYellow transition-colors"
                                    onClick={closeMenu}
                                >
                                    Kyokushin
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/hakkimizda" 
                                    className="block py-2 hover:text-brandYellow active:text-brandYellow transition-colors"
                                    onClick={closeMenu}
                                >
                                    Hakkımızda
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/iletisim" 
                                    className="block py-2 hover:text-brandYellow active:text-brandYellow transition-colors"
                                    onClick={closeMenu}
                                >
                                    İletişim
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}