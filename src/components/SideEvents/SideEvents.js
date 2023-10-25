import "./SideEvents.css"

import Hackathon1 from "../../assets/RectangleHackathon1.png"
import Hackathon2 from "../../assets/Hackathon2fixed.png"
import Hackathon3 from "../../assets/Hackathon3Fixed.png"
import Hackathon4 from "../../assets/Hackathon4.png"
import Hackathon5 from "../../assets/Hackathon5.png"
import Hackathon6 from "../../assets/Hackathon6Fixed.png"

const SideEvents = () => {
  return (
    <section className="side-events-section bg-primary-1">
      <div className="title flex">

        <h2><span className="break-span">Side</span>Events</h2>
      </div>
      <ul>
        <li className="active">Hackathon</li>
        <li className="">Workshops</li>
        <li className="">Conference</li>
        <li className="">BTC gaming</li>
      </ul>
      <div className="main-div flex">
        <div className="img-wrapper wrapper-1 flex-column">
          <div className="img-container">
            <img src={Hackathon1} alt="" />
          </div>
          <div className="img-container alt-bg">
            <img src={Hackathon2} alt="" />
            <div></div>
          </div>
          <div className="img-container mobile-only">
            <img src={Hackathon4} alt="" />
          </div>
          <div className="img-container mobile-only alt-bg">
            <img src={Hackathon3} alt="" />
            <div></div>
          </div>
        </div>
        <div className="card flex-column">
          <p className="date">March 29</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt est similique eos a, ab quasi adipisci maiores molestias!</p>
          <div className="heading">
            <h3><span className="span-break">1 - Day </span>Hackathon</h3>
          </div>
        
        </div>
        <div className="img-wrapper wrapper-2 flex-column">
          <div className="img-container alt-bg">
            <img src={Hackathon3} alt="" />
            <div></div>
          </div>
          <div className="img-container">
            <img src={Hackathon4} alt="" />
          </div>
        </div>
        <div className="img-wrapper wrapper-3 flex-column">
          <div className="img-container">
            <img src={Hackathon5} alt="" />
          </div>
          <div className="img-container alt-bg">
            <img src={Hackathon6} alt="" />
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SideEvents