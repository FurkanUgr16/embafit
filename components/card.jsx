import Image from "next/image"

export default function Card ({ cardContext = []}){
    return (
        <>
            {cardContext.map((card) => (
                <div key={card.title} className="relative w-full sm:w-[300px] md:w-[320px] lg:w-[350px] overflow-hidden flex-shrink-0 group rounded-lg sm:rounded-xl shadow-lg">
      
                    {card.imageUrl && (
                        <Image
                            width={350}
                            height={600}
                            src={card.imageUrl}
                            alt={card.title}
                            className="w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] object-cover transform transition-transform duration-300 group-hover:scale-105" 
                        />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3 sm:p-4 md:p-5 lg:p-6 text-white">
                        {card.title && (
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-blackOpsOne mb-1 sm:mb-2 text-center uppercase leading-tight">
                                {card.title}
                            </h3>
                        )} 
                        {card.description && (
                            <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 font-openSans text-center leading-relaxed px-1 sm:px-0">
                                {card.description}
                            </p>
                        )} 
                    </div>
                </div>
            ))}
        </>
    );
};