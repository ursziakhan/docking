

import Hero from './components/Hero';
import Leasing from './components/Leasing';

import Rentals from './components/Rentals';
import Contact from './components/Contact';


function page() {
  return (
    <div>
      <Hero />
      <div className="mt-4">
          <h2 className="text-center pt-14 text-2xl md:text-4xl font-bold  leading-normal md:leading-10">
            Providing Large Docks 
          </h2>
        </div>
        <div >
          <p className="text-lg font-medium my-8  px-8 md:px-[20%] md:text-center sm:text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
         
        </div>
    <Rentals/>
      <Leasing />
  
      <Contact/>
    </div>
  );
}

export default page;
