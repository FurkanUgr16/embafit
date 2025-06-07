
import Image from "next/image"
import Link from "next/link"
import Instagram from "./Instagram"


export default function Footer(){
    return(
        <footer className="relative text-center">
            <div className=" mt-[60px] flex justify-center w-full top-full ">
                <div className="w-[80%] border-t border-gray-300 "></div>    
            </div> 
           <div className="flex justify-around mt-5 items-center ">
             <Image
                src="/EMBAFIT-01.png"
                alt="Logo Img"
                height={180}
                width={180}
            />
           

            <ul className=" font-openSans text-center flex flex-col ">
                <p className="font-blackOpsOne">Linkler</p>
                <li className="hover:text-brandYellow"><Link href="/">Anasayfa</Link></li>
                <li className="hover:text-brandYellow"><Link href="/kyokushin">Kyokushin</Link></li>
            </ul>

            <div>
                <p className="m-2.5 font-blackOpsOne">Sosyal Medya</p>
                <Instagram />
            </div>
            </div>
        </footer>
    )
}