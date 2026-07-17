import Navbar from './components/Hero/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhyChoose from './components/Hero/Navbar/Whychoose/Whychoose';
import BestSelling from './components/BestSelling/BestSelling';
import Experience from './components/experience/experience';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <BestSelling />
      <Experience />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;