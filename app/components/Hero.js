import React from 'react';

function Hero() {
  return (
    <div className="relative  sm:h-300 md:h-600 flex justify-center    h-[600px] ">
      <video
        className="absolute h-full w-full object-cover opacity-150"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./videos/video.mp4" type="video/mp4" />
        {/* Add fallback content if the video format is not supported */}
      </video>
      <div className="absolute inset-0 bg-back opacity-40"></div>
      <div
        className="z-10 flex flex-col items-center justify-between
           h-full"
      >
        <div className="text-center mt-20 mx-4">
          <h1
            className="heading text-xl  md:text-2xl lg:text-3xl 
                 text-primary font-bold bg-secondary p-4 
                          rounded font-heading"
          >
            Discover Umeå Marina: Your gateway to adventures !
          </h1>

          <p className="pt-10 text-xl  font-bold lg:text-2xl  line leading-snug text-primary font-heading">
            Set sail for unforgettable experiences
            <br /> rent or lease your perfect boat today!
          </p>
        </div>

        <div className="md:flex bg-primary p-5 mt-8 w-[90%] md:w-[600px] rounded z-10 bg-opacity-90 mb-20">
          <div className="w-full md:w-1/3 px-5">
            <label htmlFor="location" className="block font-semibold mb-2">
              Location
            </label>
            <select
              id="location"
              className="border w-full border-current rounded py-2 px-3"
            >
              <option value="A">Option A</option>
              <option value="B">Option B</option>
            </select>
          </div>
          <div className="w-full md:w-1/3 px-5 mt-4 md:mt-0">
            <label htmlFor="type" className="block font-semibold mb-2">
              Type
            </label>
            <select id="type" className="w-full rounded py-2 px-3 border">
              <option value="rental">Rental</option>
              <option value="lease">Lease</option>
            </select>
          </div>
          <div className="flex md:w-1/3 w-full px-5  md:mt-7 items-center ">
            <button className="text-primary py-2 px-8 rounded bg-secondary hover:bg-third w-full ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
