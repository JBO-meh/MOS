import './App.css'
import Header from './meta-comp/header'
import Map from './meta-comp/map'
import Footer from './meta-comp/footer'
import Sidebar from './meta-comp/sidebar'
import { useState } from 'react';

function App() {
  let [currentSaint, setCurrentSaint] = useState(null);
  return (
    <>
 <div className="flex flex-col h-full w-full  bg-radial-[at_10%_75%] from-indigo-950 from-30% via-slate-800 via-75% to-amber-100 to-120%" >
      <Header />
      <main className="h-full w-full px-5 py-3 flex flex-row gap-5">
        <Sidebar currentSaint={currentSaint}/>
        <Map setCurrentSaint={setCurrentSaint}/>
      </main>
      <Footer />
    </div>

    </>
  )
}

export default App
