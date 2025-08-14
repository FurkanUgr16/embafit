import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsappButton";
import "../globals.css";


export const metadata = {
  title: "EmbaFit - Bursa Fitness ve Kyokushin Karate Salonu",
  description: "Bursa'da modern fitness olanakları ve geleneksel Kyokushin Karate eğitimini bir araya getiren EmbaFit'e hoş geldiniz. Sağlıklı bir yaşam için bize katılın.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Header/>
        <WhatsAppButton message="Merhaba fitness hakkında bilgi almak istiyorum" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
