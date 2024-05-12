/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",

        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },

          { key: "Access-Control-allow-Origin", value: "*" },

          {
            key: "Access-Control-Allow-Methods",
            value: "GET, DELETE, PATCH, POST, PUT",
          },

          {
            key: "Access-Control-Allow-Headers",
            value:
              "x-CSRF-Token, x-Requested-With, Accept, Accept-Version, Content-Length, Content-MDS, Content-Type, Date, x-Api-Version",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
