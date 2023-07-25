import React from 'react';
import propertyData from '../data/page';

const page = () => {
  return (
    <div className=" flex w-full mx-auto justify-center mb-[10%] mt-[10%]">
      <table className="w-[70%]   ">
        <thead className="">
          <tr className="bg-[#ebe5e5]    ">
            <th className=" font-bold">ID</th>
            <th className=" font-bold">Address</th>
            <th className=" font-bold">Location</th>
            <th className=" font-bold">Rent/Month</th>
            <th className="font-bold">Space Number</th>
            <th className="font-bold">Contract Date</th>
            <th className="font-bold">Available</th>
          </tr>
        </thead>
        <tbody>
          {propertyData.map((property) => (
            <tr
              key={property.id}
              className="bg-white border-t border-[#c0c0c0]"
            >
              <td className="px-4 py-2">{property.id}</td>
              <td className="px-4 py-2">
                <a
                  href={`/property/${property.id}`}
                  className="text-[#5d5df4] hover:underline"
                >
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
  );
};
export default page;
