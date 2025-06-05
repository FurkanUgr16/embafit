export default function Hero(){
    return (
        <section className=" relative  w-screen h-[600px] bg-[url(../assets/pexels-victorfreitas-791763.jpg)] bg-cover bg-no-repeat bg-center "> 
            <div className=" absolute inset-0 p-[30px] text-center flex flex-col items-center justify-center  text-white/90 ">
                <h1 className="  font-blackOpsOne text-5xl font-black uppercase tracking-widest  text-brandYellow "> Disiplinini  Göster</h1>
                <p className="mt-4 max-w-3xl mx-auto text-center text-2xl font-openSans tracking-wide capitalize ">en İyi vücudu inşa et</p>

                {/* <div className="  absolute bottom-0 left-0 w-full h-[100px] bg-white [clip-path:polygon(0_100%,100%_0,100%_100%,0%_100%)]">
             </div> */}
            </div>

             

        </section>
    )
}