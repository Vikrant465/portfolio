import { HeroUIProvider } from "@heroui/system";
// import localFont from "next/font/local";
// import Home from "../component/home"
import Head from 'next/head';
import Nav from '../component/navbar'
// import CounterButton from '../component/test'
import Profile from '../component/profile'
import Projects from '../component/projects'
import About from '../component/about'
import BackgroundCirlcles from '../component/background'
import Experience from '../component/experience'
import Skills from '../component/skils'
export default function Main() {
  return (

    <div>
      <HeroUIProvider>
        {/* <title>
          Vikrant Singh
        </title> */}
        <Head>
          <title>Vikrant Singh | Portfolio</title>
        </Head>
        <main>
          <Nav />
          {/* <div className="" >hello</div> */}
          <Profile />
          <About />
          <Projects />
          <Experience/>
          <Skills />
        </main>
      </HeroUIProvider>
    </div>
  );
}
