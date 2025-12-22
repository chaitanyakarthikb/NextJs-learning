import PropertyDetails from '@/components/PropertyDetails'
import PropertyHeaderImage from '@/components/PropertyHeaderImage'
import connectToDB from '@/config/database'
import Properties from '@/models/Property'
import React from 'react'
type PageProps = {
    params:{
        id:string,
    }
}
const page = async ({params}:PageProps) => {
    const {id} = await params;
    await connectToDB();
    const property = await Properties.findById(id).lean();
  return (
    <>
      <PropertyHeaderImage image={property?.images?.[0]} />
      {property.name}
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <PropertyDetails property={property}/>
        </div>
      </section>
    </>
  );
}

export default page
