import "../globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsappButton"

export const metadata = {
  title: "Kyokushin Karate Dersleri | EmbaFit Dojo - Bursa",
  description: "Kyokushin Karate eğitimi ile disiplin, güç ve özgüven kazanın. Bursa'daki salonumuzda her seviyeye uygun başlangıç ve ileri seviye derslerimize katılın.",
};


export default function KyokushinLayout({children}){
    return (
         <html lang="tr">
              <body>
                <Header />
                <WhatsAppButton message="Merhaba karate salonu hakkında bilgi almak istiyorum" />
                {children}
                <Footer />
              </body>
            </html>
    )
}