import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/faq";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Locations from "./components/Locations";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Gallery />
      <Testimonials />
      <Locations />
      <Contact />
      <Footer />
    </main>
  );
}
