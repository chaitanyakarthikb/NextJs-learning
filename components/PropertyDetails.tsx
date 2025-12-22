import React from "react";
import {
  FaBath,
  FaBed,
  FaMap,
  FaMapMarker,
  FaRulerCombined,
  FaTimes,
} from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

interface PropertyDetailsProps {
  property: any;
}
const PropertyDetails = ({ property }: PropertyDetailsProps) => {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
          <div className="text-gray-500 mb-4">{property?.type}</div>
          <h1 className="text-3xl font-bold mb-4">{property?.name}</h1>
          <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
            <FaMapMarker />
            <p className="text-orange-700">
              {" "}
              {property?.location?.street} {property?.location?.city}{" "}
              {property?.location?.state} {property?.location?.zipcode}
            </p>
          </div>

          <h3 className="text-lg text-center font-bold my-6 bg-gray-800 text-white p-2">
            Rates & Options
          </h3>
          <div className="flex flex-col md:flex-row justify-around">
            <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
              <div className="text-gray-500 mr-2 font-bold">Nightly</div>

              {property?.rates?.nightly ? (
                <>
                  <div className="text-2xl font-bold">
                    <i className="fa fa-xmark text-red-700"></i>$
                    {property?.rates?.nightly}
                  </div>
                </>
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
            <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
              <div className="text-gray-500 mr-2 font-bold">monthly</div>

              {property?.rates?.monthly ? (
                <>
                  <div className="text-2xl font-bold">
                    <i className="fa fa-xmark text-red-700"></i>$
                    {property?.rates?.monthly}
                  </div>
                </>
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
            <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
              <div className="text-gray-500 mr-2 font-bold">yearly</div>
              {property?.rates?.yearly ? (
                <>
                  <div className="text-2xl font-bold">
                    <i className="fa fa-xmark text-red-700"></i>$
                    {property?.rates?.yearly}
                  </div>
                </>
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-lg text-center font-bold mb-6">Description & Details</h3>
          <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
            <p>
              <FaBed /> {property?.beds}
              <span className="hidden sm:inline">Beds</span>
            </p>
            <p>
              <FaBath /> {property?.baths}
              <span className="hidden sm:inline">Baths</span>
            </p>
            <p>
              <FaRulerCombined />
              {property?.square_feet}{" "}
              <span className="hidden sm:inline">sqft</span>
            </p>
          </div>
          <p className="text-gray-500 mb-4 text-center">{property?.description}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-lg text-center font-bold mb-6">Amenities</h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
            {property?.amenities?.map((amenity: string, id: string) => {
              return (
                <li key={id}>
                  <i className="fas fa-check text-green-600 mr-2 mt-3"></i>{" "}
                  <FaCheck className="inline-block text-green-600 mr-2"/>
                  {amenity}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <div id="map"></div>
        </div>
      </main>
    </>
  );
};

export default PropertyDetails;
