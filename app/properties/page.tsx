import Link from 'next/link'

import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Hello world, this is my Properties page</h1>
      <Link href={'/properties/add'}>Add New Property</Link>
    </div>
  )
}

export default page
