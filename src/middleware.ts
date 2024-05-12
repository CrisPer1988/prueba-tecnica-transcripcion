import { NextResponse } from "next/server";

const allowdOrigins =
  process.env.NODE_ENV === "production"
    ? [
        "https://prueba-tecnica-transcripcion.vercel.app",
        "https://www.prueba-tecnica-transcripcion.vercel.app",
        "https://prueba-tecnica-transcripcion-cristians-projects-99e3cf7d.vercel.app",
        "https://www.prueba-tecnica-transcripcion-cristians-projects-99e3cf7d.vercel.app",
        "https://prueba-tecnica-transcrip-git-6d26c1-cristians-projects-99e3cf7d.vercel.app",
        "https://www.prueba-tecnica-transcrip-git-6d26c1-cristians-projects-99e3cf7d.vercel.app",
      ]
    : ["http://localhost:3000"];

export default function middlewate(request: Request) {
  console.log("ENTRANDO AL MIDDLEWARE");

  const origin = request.headers.get("origin");
  console.log(origin);

  if (origin && !allowdOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
