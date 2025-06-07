import "../globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"


export default function KyokushinLayout({children}){
    return (
         <html lang="tr">
              <body>
                <Header />
                {children}
                <Footer />
              </body>
            </html>
    )
}