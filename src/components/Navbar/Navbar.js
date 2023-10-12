import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="menu-btn">
        <div className='hamburger-menu' />
      </div>
      <Link to={"ticketing"}>
        <button className='buy-tickets'>Buy Tickets</button>
      </Link>
    </div>
  )
}

export default Navbar