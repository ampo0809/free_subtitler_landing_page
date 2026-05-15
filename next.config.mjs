/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**"
      }
    ]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "connect-src 'self' https:",
              "media-src 'self' blob:",
              "frame-src 'self' https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com",
              "child-src 'self' https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com"
            ].join("; ")
          }
        ]
      }
    ];
  }
};

export default nextConfig;
