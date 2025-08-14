export default function robots(){
    const baseUrl = "https://www.embafit.com"

        return{
            rules:[
                {
                    userAgent: "*",
                    allow: ["/"]
                }
            ],
            sitemap: `${baseUrl}`
        }
}