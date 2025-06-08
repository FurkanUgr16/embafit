import Image from "next/image"

export default function ImageText({imageUrl, title, description, reverse, alt}){
    return(
        <section className={`flex flex-col md:flex-row items-center justify-around gap-6 sm:gap-8 md:gap-10 mx-2 sm:mx-3 px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-10 md:py-12 text-center sm:text-left mb-6 sm:mb-8 md:mb-[40px] ${reverse && "md:flex-row-reverse md:w-full"}`}>
            <div className="w-full md:w-1/2">
                {
                    imageUrl && 
                    <Image 
                        src={imageUrl}
                        alt={alt}
                        height={600}
                        width={400}
                        className="shadow-lg object-cover w-full h-auto rounded-lg sm:rounded-xl max-h-[300px] sm:max-h-[400px] md:max-h-none"
                    />
                }
            </div>
            <div className="w-full md:w-1/2 px-2 sm:px-0">
                <h2 className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-bold font-blackOpsOne mb-3 sm:mb-4 uppercase text-brandYellow leading-tight">
                    {title}
                </h2>
                <p className="text-gray-600 font-openSans text-base sm:text-lg md:text-xl text-center sm:text-left leading-relaxed"> 
                    {description} 
                </p>
            </div>
        </section>
    )
}