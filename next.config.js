/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Define o tamanho máximo do corpo da requisição em bytes
    bodyParser: {
      sizeLimit: '5mb',
    },
  },
}

module.exports = nextConfig
