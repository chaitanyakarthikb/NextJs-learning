import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

interface PropertyHeaderImageProps {
  image: string;
}
const PropertyHeaderImage = ({ image }: PropertyHeaderImageProps) => {
  return (
    <>
      <section>
        <div className="container-xl m-auto">
          <div className="grid grid-cols-1">
            <Image
              alt="property header image"
              className="object-cover h-[50vh] w-full"
              height={0}
              width={0}
              sizes="100vw"
              src={`/_theme_files/images/properties/${image}`}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="fas mr-2" />
            Back to Properties
          </Link>
        </div>
      </section>
    </>
  );
};

export default PropertyHeaderImage;
