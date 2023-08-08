import React from 'react';

function Morning() {
  return (
    <div className=" flex flex-row items-center w-full w-full py-2 ">
    <div className=' flex flex-col md:flex-row  w-[100%] p-8 px-28'  >
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


      <div className='w-full md:w-[60%] px-20 py-8'>
                            

                           <div className=' '>
                       
                               <h2 className='md:text-3xl text-2xl font-bold text-optional  '>Providing Large Docks
                                 Rental For A Perfect</h2>

                                   <div className='flex justify-center items-center'>
                                   <div className='border-2 w-10 border-optional inline-block justify-center'></div>
                                   </div>

                               <p className='text-optional mt-8 text-justify '> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <div className='flex flex-col text-left mt-6 '>
                                    <h2 className='md:text-2xl text-xl font-bold mb-2'>Our Docking Charges</h2></div>
                               <div > 
                               <ul class="list-none">
                            <li class="relative">
                                            <span className="absolute left-0 top-0 ml-3">&#10148;</span>
                                   <span className="ml-12 ">Item 1 write some thing important</span>
                                         </li>
                                     <li class="relative">
                                      <span className="absolute left-0 top-0 ml-3">&#10148;</span>
                                     <span class="ml-12">Item 2 write some thing important</span>
                                           </li>
                             <li class="relative">
                               <span className="absolute left-0 top-0 ml-3">&#10148;</span>
                               <span class="ml-12">Item 3 write some thing important</span>
                             </li>
                                         </ul>

                                                      <a href='#' className='border-2 mt-6 text-primary bg-[#1a1a64] rounded-full px-12 py-2 inline-block font-semi-bold hover:bg-primary hover:text-optional  '>Sign In</a>
                                                      </div>
                                       
                           </div>
                       </div>


</div>
    </div>
  );
}

export default Morning;
