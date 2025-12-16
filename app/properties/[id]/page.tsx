import React from 'react'
type PageProps = {
    params:{
        id:string,
    }
}
const page = async ({params}:PageProps) => {
    const {id} = await params;
    console.log(id)
  return (
    <div>
      Hello, current id is : {id}
    </div>
  )
}

export default page
