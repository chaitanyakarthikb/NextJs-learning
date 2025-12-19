'use client'
import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader size={150} color="#3b82f6" cssOverride={{display:'block', margin:'100px auto'}} />
    </div>
  )
}

export default Loading
