import React from 'react'
import Properties from '../properties.json';
import PropertyCard from '@/components/PropertyCard';
import Link from 'next/link';
const RecentProperties = () => {
    const recentProperties = Properties.slice(0,3);
  return (<>
    <section className="px-4 py-6">
        <h1 className='text-3xl font-bold my-4 text-blue-600 text-center mx-auto'>Recent Properties</h1>
      <div className="lg:container max-w-12xl  px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto">
        {recentProperties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </section>
    <section className='m-auto max-w-lg my-6 px-6 '>
        <Link className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700' href={'/properties'}>View All Properties</Link>
    </section>
    </>
  );
}

export default RecentProperties
