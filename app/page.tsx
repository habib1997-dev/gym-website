import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Marquee from "@/components/Marquee";
import Programs from "@/components/Programs";
import WhyUs from "@/components/WhyUs";
import Trainers from "@/components/Trainers";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Impact />
        <Marquee />
        <Programs />
        <WhyUs />
        <Trainers />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
