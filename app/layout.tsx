import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Rooted Rhythm",
	description: "Created by Victor Boynton",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-[#03030c]">
			<body className={inter.className}>
				<Navbar></Navbar>
				{children}
			</body>
		</html>
	);
}
