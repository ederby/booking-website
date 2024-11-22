/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zlsrlreblavpltfmcvwm.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname:
          "/a/ACg8ocIZEfNco4g3_wLwB7iHbcOaVsq072EajsftQWIrH6ki0wJkwzlx=s96-c/**",
      },
    ],
  },
};

export default nextConfig;
