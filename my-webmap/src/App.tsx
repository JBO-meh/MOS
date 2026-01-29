
import Footer from './assets/components/Footer'
import Header from './assets/components/Header'
import './App.css'
import BasicMap  from './assets/components/map'
function App() {


  return (
    < div className="flex flex-col h-screen">
      < Header/>
      < div className="flex flex-col flex-auto overflow-hidden w-full h-full">
          < BasicMap/>
      </ div>
      < Footer/>
    </ div>
  )
}

export default App
