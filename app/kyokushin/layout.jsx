import "../globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsappButton"


export default function KyokushinLayout({children}){
    return (
         <html lang="tr">
              <body>
                <Header />
                <WhatsAppButton />
                {children}
                <Footer />
              </body>
            </html>
    )
}