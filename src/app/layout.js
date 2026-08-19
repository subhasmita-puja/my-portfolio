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

verification: {
  google: "uvgyRtKOe__tFy7btf8_Y-C31MS1jiFpjGthKFR8Eko",
},

alternates: {
  canonical: "https://subhasmitaportfolio.netlify.app/",
},

openGraph: {
  title: "Subhasmita Sahoo | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, and modern web applications.",
  type: "website",
  locale: "en_IN",
  siteName: "Subhasmita Sahoo Portfolio",
},

twitter: {
  card: "summary_large_image",
  title: "Subhasmita Sahoo | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, and modern web applications.",
},

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

  <Script
    id="person-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://subhasmitaportfolio.netlify.app/#person",
        name: "Subhasmita Sahoo",
        jobTitle: "Full Stack Developer",
        description:
          "Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, and modern web application development.",
        knowsAbout: [
          "React.js",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "JavaScript",
          "Tailwind CSS",
          "Full Stack Development",
          "Web Development",
        ],
        sameAs: [
          "https://github.com/subhasmita-puja",
          "https://www.linkedin.com/in/subhasmita-sahoo-puja/",
        ],
        url: "https://subhasmitaportfolio.netlify.app/",
      }),
    }}
  />

  <Script
    id="website-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://subhasmitaportfolio.netlify.app/#website",
        url: "https://subhasmitaportfolio.netlify.app/",
        name: "Subhasmita Sahoo Portfolio",
        description:
          "Official portfolio of Subhasmita Sahoo, a Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, and modern web application development.",
        inLanguage: "en-IN",
      }),
    }}
  />
  
  {children}
  
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          strategy="beforeInteractive"
        />
      </body>
      
    </html>
  );
}