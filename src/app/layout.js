import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Subhasmita Sahoo | Full Stack Developer",
  description:
    "Subhasmita Sahoo is a Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, and modern web application development.",

  keywords: [
    "Subhasmita Sahoo",
    "Full Stack Developer",
    "Full Stack Developer India",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Web Developer",
    "JavaScript Developer",
  ],

  authors: [
    {
      name: "Subhasmita Sahoo",
    },
  ],

  creator: "Subhasmita Sahoo",

  icons: {
    icon: "/userAsset/gif.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <ServiceWorkerRegister />
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          strategy="beforeInteractive"
        />
      </body>
      
    </html>
  );
}