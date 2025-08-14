import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function GET() {
  try {
    const { resources } = await cloudinary.search
      .expression('folder="embafit"') // Kendi klasör adını yaz
      .sort_by('public_id', 'desc')
      .max_results(50)
      .execute();

    return new Response(JSON.stringify(resources.map(file => file.secure_url)), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}