/** @type {import('next').NextConfig} */
const nextConfig = {
  devServer: {
    // Permitir conexiones desde cualquier host, incluido localhost y 127.0.0.1
    host: "0.0.0.0",
  },
};

export default nextConfig;
