import localFont from "next/font/local";

import { Handlee } from "next/font/google";
const inter = Handlee({ subsets: ["latin"], weight: ["400"] });

import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Home Page",
    description: "Home Page",
    icons: {
        icon: "./images/bag-shopping-solid.svg",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${inter.className}`}
            >
                {/* <body className={`${inter.className}`}> */}
                {children}
            </body>
        </html>
    );
}
