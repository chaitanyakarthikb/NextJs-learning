import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import RecentProperties from '@/components/RecentProperties';
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <InfoBoxes />
      <RecentProperties/>
    </div>
  );
}

export default page;
