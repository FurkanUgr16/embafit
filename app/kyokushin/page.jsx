import Hero from "@/components/hero"
import ImageText from "@/components/imageText"
import GridImageLayout from "@/components/GridImageLayout"
import { ImageUrl } from "@/libs/imageUrl"



export default function KyokushinHome(){
    return<>
          <Hero 
            title=" BİR SPORDAN DAHA FAZLASI"
            text="Kyokushin: Sınırların yeniden çizildiği, iradenin test edildiği yer."
            bgImageUrl="/karateHero.jpg"
          />
            <ImageText 
              imageUrl="/full-shot-woman-practicing-taekwondo.jpg" alt=" karate"
              title="Çocuk Sınıfları "
              description="Çocuk sınıflarımız, Kyokushin'in temel değerleri olan saygı, disiplin ve öz denetimi, oyun ve tekniğin birleşimiyle öğretir. Amacımız sadece fiziksel becerileri değil, aynı zamanda odaklanma yeteneğini, sabrı ve zorluklar karşısında yılmama ruhunu geliştirmektir. Güvenli ve destekleyici bir ortamda, çocuklar hem kendilerine hem de çevrelerine karşı sorumluluk sahibi olmayı öğrenir. "
            />
              <ImageText 
                imageUrl="/black-belt-athlete-practicing-jujitsu-with-determination-generative-ai.jpg" alt="man karate"
                title="Grup Dersleri "
                description="Grup derslerimiz, farklı seviyelerdeki öğrencilerin birbirlerinden öğrendiği, karşılıklı saygı ve disiplin içinde ortak bir hedefe ilerlediği yerdir. Bu ortak enerji, bireysel motivasyonu artırır ve Kyokushin yolunda yalnız olmadığınızı hissettirir. "
              reverse
              />
                <ImageText 
                  imageUrl="/ready-fight-woman-white-karate-uniform.jpg" alt="woman karate"
                  title=" BİRE BİR ÖZEL EĞİTİM"
                  description="Karate-do yolculuğunda kişisel hedeflere yönelik yoğunlaşmak isteyenler için bire bir dersler sunuyoruz. Bu seanslar, belirli bir kata üzerinde ustalaşmak, kumite stratejilerini geliştirmek veya kuşak sınavlarına hazırlık sürecinde eksikleri gidermek için en etkili yöntemdir. Eğitmenlerimiz tüm dikkatini size vererek, tekniğinizdeki en ince detayları düzeltmenize yardımcı olur. "
                />

                  <div className="text-center mt-[60] mb-[30]">
          <h1 className=" font-blackOpsOne text-4xl text-brandYellow uppercase  ">Resim Galerisi</h1>
          <p className="font-openSans ">Salonumuzdan kareler ve daha fazlası</p>
      </div>

               
                  <GridImageLayout images={ImageUrl} />

    </>
}