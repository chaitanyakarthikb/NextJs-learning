import React, { ReactNode } from 'react';
import '../assets/styles/globals.css';
import Navbar from '@/components/Navbar';
type MainComponentProps = {
    children:ReactNode,
}

export const metadata = {
    title:"Property Pulse",
    keywords:"Real Estate, Property, Rental",
    description:"Find the perfect Rental Property"
}
const MainComponent = ({children}:MainComponentProps) => {
  return (
    <html>
        <body>
            <Navbar/>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default MainComponent
