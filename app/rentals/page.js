"use client"
import React, { useState } from 'react';
import propertyData from '../data/page';

const Page = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="flex w-full mx-auto justify-center mb-[10%] flex-col">
     <div className="relative h-[400px] flex bg-cover bg-center text-primary opacity-90" style={{ backgroundImage: "url('/images/docks.jpg')" }}>
  <div className="absolute inset-0 bg-optional opacity-60"></div> {/* Semi-dark overlay */}
  <div className="relative  z-10 flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold mb-4">Docks 
    Rental Page</h1>
    <p className="text-lg w-[50%] text-center">
      Providing Docking Leasing and Rental Services in Umeå. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>
  </div>
</div>

    <div className='mt-[5%] mb-[2%] '><h1 className='flex justify-left ml-[15%] text-2xl font-bold'> Dockning Avilable Rentals in Umeå</h1>
    <p className='flex justify-left ml-[15%] w-[40%] text-lg '>Explore available rental docking spaces for your convenience. write abaout some rules and regulation or procedure</p>
    </div>

      <div className="flex items-center justify-center mb-8">
        <input
          className="ml-8 border-2 bg-[#1a1a64] text-primary rounded-full px-6 py-2 inline-block font-semi-bold hover:bg-primary hover:text-optional"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <button className="ml-8 border-2 bg-[#1a1a64] text-primary rounded-full px-6 py-2 inline-block font-semi-bold hover:bg-primary hover:text-optional">
          Add Your Docking
        </button>
      </div>
      <div className="texting flex justify-center">
        <table className="w-[70%]">
          <thead>
            <tr className="bg-[#ebe5e5]">
              <th className="font-bold p-4">ID</th>
              <th className="font-bold">Address</th>
              <th className="font-bold">Location</th>
              <th className="font-bold">Rent/Month</th>
              <th className="font-bold">Space Number</th>
              <th className="font-bold">Contract Date</th>
              <th className="font-bold">Available</th>
            </tr>
          </thead>
          <tbody>
            {propertyData
              .filter((property) => {
                const lowerSearch = search.toLowerCase();
                return (
                  property.address.toLowerCase().includes(lowerSearch) ||
                  property.location.toLowerCase().includes(lowerSearch) ||
                  property.rentPerMonth.toString().includes(lowerSearch) ||
                  property.spaceNumber.toString().includes(lowerSearch) ||
                  property.contractDate.toLowerCase().includes(lowerSearch)
                );
              })
              .map((property) => (
                <tr key={property.id} className="bg-white border-t border-[#c0c0c0]">
                  <td className="px-4 py-2">{property.id}</td>
                  <td className="px-4 py-2">
                    <a href={`/property/${property.id}`} className="text-[#5d5df4] hover:underline">
                      {property.address}
                    </a>
                  </td>
                  <td className="px-4 py-2">{property.location}</td>
                  <td className="px-4 py-2">{property.rentPerMonth}</td>
                  <td className="px-4 py-2">{property.spaceNumber}</td>
                  <td className="px-4 py-2">{property.contractDate}</td>
                  <td className="px-4 py-2">{property.available ? 'Yes' : 'No'}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
