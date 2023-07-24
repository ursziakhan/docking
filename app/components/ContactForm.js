import React from 'react';

function ContactForm() {
  return (
    <div className="  flex flex-row  h-full  pb-20  bg-fourth   max-w-full gap-16 md:px-20  p-5 mt-10 mb-10  md:mb-0">
      <div className="flex h-full justify-ceter w-full md:w-[60%]  ">
        <div className=" h-full border-2  border-primary rounded bg-secondary  m-[10%]  p-[10%]">
          <h2 className="text-3xl text-primary font-bold text-white mb-4">
            Send us a message
          </h2>
          <p className="text-primary  mb-4">
            We would love to hear from you! Fill out the form below and we'll
            get back to you as soon as possible.
          </p>

          <form className="flex flex-col h-full">
            <div className="mb-3 ">
              <label
                htmlFor="name"
                className="block text-primary  font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded bg-white text-gray-800"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-primary  font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded bg-white text-gray-800"
                placeholder="Enter your email address"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-primary  font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 rounded bg-white text-gray-800"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-optional text-primary font-bold py-2 px-4 rounded hover:bg-third transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="flex w-full md:w-[40%] items-center">
        <div className="flex flex-col h-full w-full  gap-8  justify-center ">
          <h2 className="text-3xl font-semibold">
            Nam ultrices ultrices nec tortor<br></br> pulvinar esteras loremips
            .
          </h2>

          <h3>
            <b>Name:</b> Jacob Hawkins
          </h3>
          <h3>
            <b>Address:</b> Umeå, Sweden
          </h3>
          <h3>
            <b>Phone: </b>+46 720-450-414
          </h3>
          <h3>
            <b>Hours:</b> 6:00 am –16:00 pm
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
