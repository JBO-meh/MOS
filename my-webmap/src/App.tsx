
import Footer from './assets/components/footer'
import Header from './assets/components/Header'
import Sidebar from './assets/components/sidebar'
import './App.css'
import BasicMap  from './assets/components/map'
function App() {


  return (
    <>
      < Header/>
      < div className="app-container">
       
        < main className="app-main">
          < BasicMap/>
          < Sidebar/>
        </ main>
      </ div>

      < Footer/>
    </>
  )
}

export default App
