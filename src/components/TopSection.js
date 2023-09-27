import HeaderImage from './Header Image.svg';

const TopSection = () => {
  return (
    <div className="top-section">
      <div className="navbar">
        <div className="menu-btn">
          <div className='hamburger-menu' />
        </div>
        <button className='buy-tickets'>Buy Tickets</button>
      </div>

      <div className="title-section">
        <h1>Beyond Lightning Vietnam</h1>
        <div className="title-info">
          <h2>Da Nang, Vietnam</h2>
          <h2>March 29-30, 2024</h2>
        </div>
      </div>
      
      <div className="header-image">
        <img src={HeaderImage} alt="Header" />
      </div>
    </div>
  )
}

export default TopSection