import { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = ({ page }) => {

  const [ click, setClick ] = useState(false)
  
  const handleClick = () => {
    setClick(!click);
    console.log("event")
  }
  return (
    <>
    <nav className={page === 'ticketing' ? 'navbar ticketing' : 'navbar'}>
      <div className="hamburger-wrapper">
        <button className={click ? "menu-btn open-menu": "menu-btn"} onClick={handleClick}>
          <span className='hamburger-menu' />
        </button>
      </div>
      <Link to={"ticketing"} >
        <button className='buy-tickets'>Buy Tickets</button>
      </Link>
    </nav>
    <aside className={click ? 'active-sidebar' : ''}>
      dsdfs
    </aside>    
    </>
  )
}

export default Navbar