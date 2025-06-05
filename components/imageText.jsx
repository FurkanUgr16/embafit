import Image from "next/image"
export default function ImageText({imageUrl, title, description, reverse, alt}){
    return(
        <section className={`flex flex-col md:flex-row items-center justify-around gap-10 px-24 py-12 text-center ${reverse && "md:flex-row-reverse md:w-full"}`}>
            <div className="w-full md:h-1/2">
                {
                    imageUrl && 
                    <Image 
                    src={imageUrl}
                    alt={alt}
                    height={600}
                    width={400}
                    className="shadow-lg object-fit w-full h-auto "
                />}
            </div>
            <div className="w-full md:h-1/2">
                <h2 className=" text-left text-4xl font-bold font-blackOpsOne mb-4 uppercase text-brandYellow">
                    {title}
                </h2>
                <p className="text-gray-600  font-openSans text-xl text-left"> {description} </p>
            </div>
        </section>
    )
}