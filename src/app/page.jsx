import HeroPage from "../components/heropage/HeroPage";
import NavBar from "@/components/navbar/NavBar";
import AboutPage from "@/components/aboutpage/AboutPage";
import Experience from "@/components/experience/Experience";
import Skill from "@/components/skill/Skill";
import Education from "@/components/education/Education";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 px-8 sm:px-16 lg:px-28">
        <NavBar />
        <HeroPage />
        <AboutPage />
        <Experience />
        <Skill />
        <Education />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
