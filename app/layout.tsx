import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryContext from "./context/ReactQueryContext";
import Navbar from "./components/ui/Navbar";
import { ThemeProvider } from "./context/ThemeProviderContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} font-Montserrat relative dark:bg-[#232323]`}>
				<ReactQueryContext>
					<ThemeProvider attribute="class" defaultTheme="system">
						<Navbar />
						{children}
					</ThemeProvider>
				</ReactQueryContext>
			</body>
		</html>
	);
}
