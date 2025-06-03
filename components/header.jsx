import Image from "next/image"
import Logo from "../assets/EMBAFIT-01.png"
import Link from "next/link"




export default function Header(){
    return(
        <header className="relative group py-4">

            <div className="flex justify-center items-center">
                <Image src={Logo} width={180} height={180} alt="logo img"></Image>             
            </div>

               <div className=" top-full w-full flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="w-[80%] border-t border-gray-300"></div>
                </div>  

              <nav>
                <ul className=" mt-6 flex justify-evenly font-blackOpsOne text-xl opacity-0 invisible  group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <li className="hover:text-brandYellow active:text-brandYellow"><Link href="/">Hakkımızda</Link></li>
                    <li className="hover:text-brandYellow  active:text-brandYellow "><Link href={"/"}>Hakkımızda</Link></li>
                    <li className="hover:text-brandYellow  active:text-brandYellow"><Link href={"/"}>Hakkımızda</Link></li>
                    <li className="hover:text-brandYellow  active:text-brandYellow"><Link href={"/"}>Hakkımızda</Link></li>
                </ul>
            </nav>
        </header>
    )
}