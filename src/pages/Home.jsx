import Hero from '../components/sections/Hero';
import Overview from '../components/sections/Overview';
import About from '../components/sections/About';
import Steps from '../components/sections/Steps';
import Features from '../components/sections/Features';
import OrderFlow from '../components/sections/OrderFlow';
import VideoSection from '../components/sections/VideoSection';
import Faq from '../components/sections/Faq';
import Contact from '../components/sections/Contact';
import Download from '../components/sections/Download';

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <About />
      <Steps />
      <Features />
      <OrderFlow />
      <VideoSection />
      <Faq />
      <Contact />
      <Download />
    </>
  );
}
