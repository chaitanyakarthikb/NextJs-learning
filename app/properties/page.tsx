import React from 'react'
import PropertyCard from '@/components/PropertyCard';
import connectToDB from '@/config/database';
import Properties from '@/models/Property';


const page = async() => {
  await connectToDB();
  const properties = await Properties.find({}).lean();
  return (
    <section className=' px-4 py-6'>
      <div className='lg:container max-w-12xl  px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto'>
       {properties.length === 0 ? (
        <h1>No Properties Found...</h1>
       ) : (
        properties.map((property)=>{
          return(
            <PropertyCard key={property._id} property={property}/>
          )
        })
       )}
      </div>
    </section>
  )
}

export default page
