import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { HeroUIProvider } from '@heroui/react';
// // import { ThemeProvider as NextThemesProvider } from 'next-themes';

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <NextThemesProvider
//     defaultTheme="system" // Options: "light", "dark", "system"
//     attribute="class" // Controls which HTML attribute to toggle
//   >
//     <HeroUIProvider>
//       <Component {...pageProps} />
//     </HeroUIProvider>
//   </NextThemesProvider>
//     )
// }
import {HeroUIProvider} from "@heroui/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </NextThemesProvider>
    </HeroUIProvider>
  )
}

export default MyApp;
