import React, { ReactNode } from 'react';
import '../assets/styles/globals.css';
type MainComponentProps = {
    children:ReactNode,
}
const MainComponent = ({children}:MainComponentProps) => {
  return (
    <html>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default MainComponent
