import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["via.placeholder.com"],
		unoptimized: true,
		path: "https://via.placeholder.com/",
	},
};

export default withNextIntl(nextConfig);
