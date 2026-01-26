
import Footer from './assets/components/Footer'
import Header from './assets/components/Header'
import Sidebar from './assets/components/sidebar'
import './App.css'
import BasicMap  from './assets/components/map'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  return (
    < div className="App">
      < Header/>
      < div className="app-container">
          < BasicMap/>
      </ div>
      < Footer/>
    </ div>
  )
}

export default App
