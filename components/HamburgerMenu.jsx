"use client"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavLink from './navLink';
import { useState } from "react"
import { menuLinks } from '@/libs/menuLinks';



export default function HamburgerMenu(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen)
        }
    
        const closeMenu = () => {
            setIsMenuOpen(false)
        }
    return(

        <>
             <button 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 md:hidden z-50 p-2"
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    {!isMenuOpen ? <MenuIcon fontSize="large"/> : <CloseIcon fontSize="large"/> }
                </button>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden fixed inset-0 bg-black bg-opacity-0 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closeMenu}>
                <div className={`fixed top-0 right-0 h-full w-64 bg-gray-50 shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
                    <nav className="pt-20 px-6">
                        <ul className="space-y-6 font-blackOpsOne text-xl">
                            <NavLink
                                navLink={menuLinks}
                                className="block py-2 hover:text-brandYellow active:text-brandYellow transition-colors"
                                onClick={closeMenu}
                            />
                        </ul>
                    </nav>
                </div>
            </div>

        </>

    )
}