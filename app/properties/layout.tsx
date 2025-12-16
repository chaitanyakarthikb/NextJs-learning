import React, { ReactNode } from 'react'
type PropertiesPageLayout = {
    children:ReactNode,
}
const layout = ({children}:PropertiesPageLayout) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default layout
