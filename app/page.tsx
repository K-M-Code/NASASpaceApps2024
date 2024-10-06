// import Image from "next/image";
import HeroSection from "@/components/frontend/HeroSection";
import Header from "@/components/frontend/Header";
import InfoSection from "@/components/frontend/InfoSection";
import Footer from "@/components/frontend/Footer";
import HomeContent from "@/components/frontend/HomeContent";
import FAQSection from "@/components/frontend/FAQSection";


export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection />
      <HomeContent />
      <InfoSection />
      <FAQSection />
      <Footer />
    </>
  );
}
