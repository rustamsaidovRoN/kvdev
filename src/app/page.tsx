import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Manifesto } from "@/components/home/Manifesto";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Approach } from "@/components/home/Approach";
import { Stats } from "@/components/home/Stats";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <FeaturedProjects />
        <Approach />
        <Stats />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
