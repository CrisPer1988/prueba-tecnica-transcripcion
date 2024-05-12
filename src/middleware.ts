// import { NextResponse } from "next/server";

import { NextRequest, NextResponse } from "next/server";

// const allowdOrigins =
//   process.env.NODE_ENV === "production"
//     ? [
//         "https://prueba-tecnica-transcripcion.vercel.app/",
//         "https://www.prueba-tecnica-transcripcion.vercel.app",
//       ]
//     : ["http://localhost:3000"];

// export default function middlewate(request: Request) {
//   console.log("ENTRANDO AL MIDDLEWARE");

//   const origin = request.headers.get("origin");
//   console.log(origin);

//   if (origin && !allowdOrigins.includes(origin)) {
//     return new NextResponse(null, {
//       status: 400,
//       statusText: "Bad request",
//       headers: {
//         "Content-Type": "text/plain",
//       },
//     });
//   }

//   const response = NextResponse.next();
//   response.headers.set("Access-Control-Allow-Origin", "*");
//   response.headers.set(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, OPTIONS"
//   );
//   response.headers.set("Access-Control-Allow-Headers", "Content-Type");

//   return response;
// }

// export const config = {
//   matcher: "/api/:path*",
// };

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  res.headers.append("Access-Control-Allow-Credentials", "true");

  res.headers.append(
    "Access-Control-Allow-Origin",
    "https://prueba-tecnica-transcripcion.vercel.app"
  );

  res.headers.append(
    "Access-Control-Allow-Methods",
    "GET, DELETE, PATCH, POST, PUT"
  );

  return res;
}

export const config = {
  matcher: ["/api/:path*"],
};
