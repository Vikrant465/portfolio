import { HeroUIProvider } from "@heroui/system";
// import localFont from "next/font/local";
// import Home from "../component/home"
import Nav from '../component/navbar'
// import CounterButton from '../component/test'
import Profile from '../component/profile'
import Projects from '../component/projects'
import About from '../component/about'
export default function Main() {
  return (

    <div>

      <HeroUIProvider>
        
        <title>
          Vikrant Singh
        </title>
       
        <Nav />
        
        <Profile/>
        <About />
        <Projects/>
      </HeroUIProvider>


    </div>
  );
}
