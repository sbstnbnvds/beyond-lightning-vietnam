import { useState } from "react"
import "./Navbar.css"
import "./Sidebar.css"
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
      <Link to={"ticketing"} className='buy-tickets' >
        Buy Tickets
      </Link>
    </nav>


    <aside className={(click ? 'active-sidebar' : '') + (page === 'ticketing' ? ' sidebar-ticketing' : '')}>
      <ul className="pages-list">
        <li className="active-page">
          <strong>ActivePage</strong>
          <ul className="sections-list">
            <li>Section1</li>
            <li>Section2</li>
            <li>Section3</li>
            <li>Section4</li>
            <li>Section5</li>
            <li>Section6</li>
            <li>Section7</li>
            <li>Section8</li>
            <li>Section9</li>
            <li>Section10</li>
            <li>Section11</li>
            <li>Section12</li>
            <li>Section13</li>
          </ul>
        </li>
        <li>
          <strong>TicketingPage</strong>
        </li>
      </ul>
    </aside>    
    </>
  )
}

export default Navbar