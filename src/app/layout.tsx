import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveLink } from "@/components/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav>
					<ul className="mt-2 flex justify-center space-x-4">
						<li>
							<ActiveLink href="/" exact>
								Home
							</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/products">Products</ActiveLink>
						</li>
					</ul>
				</nav>
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer>
					<p className="text-center text-sm text-gray-500">© 2021</p>
				</footer>
			</body>
		</html>
	);
}
