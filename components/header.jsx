import Image from "next/image"
import Logo from "../assets/EMBAFIT-01.png"
import Link from "next/link"


export default function Header(){
    return(
        <header >
            <div className="flex justify-center items-center m-2.5">
                <Image src={Logo} width={200} height={200} alt="logo img"></Image>
            </div>
              <nav>
                  <ul className="flex justify-evenly font-[anton]">
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                </ul>
              </nav>
        </header>
    )
}