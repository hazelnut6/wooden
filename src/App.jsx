import { NavLink } from 'react-router-dom'
import Nav from './components/Nav'
import './styles/app.css'

function App() {


  return (
    <div className='homeDiv'>
      <nav>
        <Nav />
      </nav>
      <div className="homeContent"> 
        <h1 className='webName'>Wooden.</h1>
        <button className='shopBtn'>
          <NavLink to='/categories' className='shopBtnLink'>Shop now</NavLink>
        </button>
      </div>
    </div>
  )
}

export default App
