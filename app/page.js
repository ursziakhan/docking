import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Leasing from './components/Leasing';
import Morning from './components/Moring';

function page() {
  return (
    <div>
      <Header />
      <Hero />
      <Morning />
      <Leasing />
      <ContactForm />¨
      <Footer />
    </div>
  );
}

export default page;
