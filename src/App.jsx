import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import ProjectsDelivered from './components/ProjectsDelivered';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Infrastructure from './components/Infrastructure';
import CTABanner from './components/CTABanner';
import OurPartners from './components/OurPartners';
import OurProjects from './components/OurProjects';
import WorkProcess from './components/WorkProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ProjectsDelivered />
      <Gallery />
      <Testimonials />
      <Infrastructure />
      <CTABanner />
      <OurPartners />
      <OurProjects />
      <WorkProcess />
      <Contact />
      <Footer />
    </>
  );
}
