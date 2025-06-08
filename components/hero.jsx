export default function Hero(){
    return (
        <section className="relative w-screen h-[400px] sm:h-[500px] md:h-[600px] bg-[url(../assets/pexels-victorfreitas-791763.jpg)] bg-cover bg-no-repeat bg-center"> 
            <div className="absolute inset-0 p-4 sm:p-6 md:p-[30px] text-center flex flex-col items-center justify-center text-white/90">
                <h1 className="font-blackOpsOne text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wide sm:tracking-wider md:tracking-widest text-brandYellow leading-tight"> 
                    Disiplinini Göster
                </h1>
                <p className="mt-2 sm:mt-3 md:mt-4 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-center text-sm sm:text-lg md:text-xl lg:text-2xl font-openSans tracking-wide capitalize px-4 sm:px-0">
                    en İyi vücudu inşa et
                </p>
            </div>
        </section>
    )
}