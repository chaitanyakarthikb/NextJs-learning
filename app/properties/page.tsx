'use client'
import Link from 'next/link'
import React from 'react'
import Properties from '../../properties.json';
import PropertyCard from '@/components/PropertyCard';


const page = () => {
  return (
    <section className=' px-4 py-6'>
      <div className='lg:container max-w-12xl  px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto'>
       {Properties.length === 0 ? (
        <h1>No Properties FOund...</h1>
       ) : (
        Properties.map((property)=>{
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
