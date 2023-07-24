import React from 'react';

function Morning() {
  return (
    <div
      className="flex justify-center flex-col md:flex-row md:mt-20  max-w-full gap-20 md:px-20 pt-6 p-5 mt-10 mb-10  md:mb-0
     "
    >
      <div className="main flex flex-col w-full md:w-[50%]  ">
        <div className=" w-full ">
          <img
            src="./images/docks.jpg"
            alt="Image Description"
            className=" h-full object-cover over rounded"
          />
        </div>

        <div className="flex  w-full mt-[-100px] pr-4 md:pr-10 pl-4 md:pl-10 gap-2  ">
          <div className="">
            <img
              src="./images/about.jpg"
              alt="Image Description"
              className=" h-full md:h-[70%] w-full  object-cover overflow-hidden rounded"
            />
          </div>

          <div className=" w-full ">
            <img
              src="./images/dock.jpg"
              alt="Image Description"
              className=" h-full md:h-[70%]  object-cover w-full overflow-hidden rounded"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-[45%]">
        <div className="">
          <h2 className="text-2xl md:text-4xl font-bold  leading-normal md:leading-10">
            Providing Large Docks <br></br> Rental For A Perfect
          </h2>
        </div>
        <div>
          <p className="text-lg font-medium mt-4 md:mt-8 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <ul className="text-lg font-medium mt-4 md:mt-8">
            <b>Rates</b>
            <li>Seasonal Rate (Apr 15-Oct 15): $810</li>
            <li>Monthly Rate: $265</li>
            <li>Weekly Rate: $100</li>
            <li>Daily Rate: $30</li>
            <br></br>
            <b>Details</b>
            <li>$20 discount if paid in full by March 31</li>
            <li>Payment is per slip, not by boat length</li>
          </ul>
          <button class="mt-10 px-6 py-3 text-lg font-medium text-primary bg-secondary rounded-lg shadow-md hover:bg-third transition duration-300">
            Vacant Docks
          </button>
        </div>
      </div>
    </div>
  );
}

export default Morning;
