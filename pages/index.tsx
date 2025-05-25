import Head from 'next/head'
import { HeroUIProvider } from "@heroui/system";
// import localFont from "next/font/local";
// import Home from "../component/home"
import Nav from '../component/navbar'
// import CounterButton from '../component/test'
import Profile from '../component/profile'
import Projects from '../component/projects'

export default function Main() {
  return (

    <div>

      <HeroUIProvider>
        {/* <Head> */}
        <title>
          Vikrant Singh
        </title>
       
        <Nav />
        
        <Profile/>
        <Projects/>
      </HeroUIProvider>

    </div>
  );
}
