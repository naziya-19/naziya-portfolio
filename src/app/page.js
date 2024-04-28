import Image from "next/image";
import { HeroSection } from "./components/HeroSection";
import { Container } from "postcss";
import { Navbar } from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { Object3D } from "./components/Object3D";
import { Screen3D } from "./components/Screen3D";
import { BlogSection } from "./components/BlogSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <BlogSection />
        <ProjectsSection />
        <EmailSection />
        
      </div>
      <Footer />
    </main>
  );
}
