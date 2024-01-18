import React from 'react'
import Sidebar2 from './sidebar2'

function RootLayout({children}) {
  return (
    <div className="flex gap-5">
    <Sidebar2/>
    <mian className="">{children}</mian>
    </div>
  )
}

export default RootLayout