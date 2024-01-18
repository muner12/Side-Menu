import { useState } from 'react'

import './App.css'
import Dashbaord from './pages/Dashbaord'
import RootLayout from './layouts2/RootLayout'
import { Route, Routes } from 'react-router-dom'
import AllPage from './pages/AllPage'
import Authenthication from './pages/Authenthication';
import { Settings } from 'lucide-react'
import Build from './pages/Build';
import Analytics from './pages/Analytics';
import Storage from './pages/Storage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RootLayout>
    <Routes>
      <Route path='/' element={<AllPage/>}/>
      <Route path='/authentication' element={<Authenthication/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/storage' element={<Storage/>}/>
      <Route path='/build/:bID' element={<Build/>}/>
      <Route path='/analytics/:aID' element={<Analytics/>}/>

    </Routes>
    
    </RootLayout>
    

    </>
  )
}

export default App
