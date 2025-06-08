import Image from "next/image"
import Link from "next/link"
import Instagram from "./Instagram"

export default function Footer(){
    return(
        <footer className="relative text-center px-4 sm:px-6 md:px-8">
            <div className="mt-8 sm:mt-12 md:mt-[60px] flex justify-center w-full">
                <div className="w-full border-t border-gray-300"></div>    
            </div> 
            
            <div className="flex flex-col sm:flex-row justify-center sm:justify-around mt-4 sm:mt-5 items-center gap-6 sm:gap-4 md:gap-0 pb-6 sm:pb-8">
                {/* Logo Section */}
                <div className="flex-shrink-0 flex justify-center items-center">
                    <Image
                        src="/EMBAFIT-01.png"
                        alt="Logo Img"
                        height={180}
                        width={180}
                        className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[180px] xl:h-[180px] object-contain"
                        priority={false}
                        quality={90}
                    />
                </div>

                {/* Links Section */}
                <div className="flex-shrink-0">
                    <ul className="font-openSans text-center flex flex-col gap-1 sm:gap-2">
                        <p className="font-blackOpsOne text-base sm:text-lg mb-2 text-brandYellow">Linkler</p>
                        <li className="hover:text-brandYellow transition-colors duration-200 text-sm sm:text-base">
                            <Link href="/">Anasayfa</Link>
                        </li>
                        <li className="hover:text-brandYellow transition-colors duration-200 text-sm sm:text-base">
                            <Link href="/kyokushin">Kyokushin</Link>
                        </li>
                        <li className="hover:text-brandYellow transition-colors duration-200 text-sm sm:text-base">
                            <Link href="/hakkimizda">Hakkımızda</Link>
                        </li>
                        <li className="hover:text-brandYellow transition-colors duration-200 text-sm sm:text-base">
                            <Link href="/iletisim">İletişim</Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="flex-shrink-0">
                    <p className="m-2 sm:m-2.5 font-blackOpsOne text-base sm:text-lg text-brandYellow">Sosyal Medya</p>
                    <Instagram />
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-200 pt-3 sm:pt-4 pb-4 sm:pb-6 mt-4 sm:mt-6">
                <p className="text-xs sm:text-sm text-gray-500 font-openSans">
                    © 2025 EMBAFIT. Tüm hakları saklıdır.
                </p>
            </div>
        </footer>
    )
}