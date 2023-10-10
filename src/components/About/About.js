import "./About.css";
import calendar from "../../assets/CalendarIcon.png"
import location from "../../assets/LocationIcon.png"

import Slider from "./Slider.js"

const About = () => {
  return (
    <section className="about-section bg-primary-2">
      <div className="section-wrapper">
        <div className="about-section__main">
          <div className="about-section__main__title-wrapper">
            <h2 className="about-section__main-title"><span className="break-span">The only </span> Bitcoin & Lightning Conference <span className="secondary-span"> in Vietnam</span></h2>

          </div>
          <div>
            <p>Welcome to the official website of Beyond Lightning Vietnam, powered by company name, by NeutronPay.</p>
            <p>The premier conference focusing on the future of Bitcoin, the Lightning Network and more! This is your exclusive invitation to be part of a circle of innovators steering the course of future developments.</p>
          </div>
        </div>
        <div className="about-section__secondary flex-column">
          <div className="about-section__secondary__info flex-column">
            <h3><span className="break-span">About the </span>Conference</h3>
            <div className="about-section__secondary__info__text flex">
              <div className="flex">
                <div className="icon-wrapper"><img src={calendar} alt="" aria-hidden="true"></img></div>
                <p><span>When: </span>March 29-30, 2024.</p>
              </div>
              <div className="flex">
                <div className="icon-wrapper"><img src={location} alt="" aria-hidden="true" /></div>
                <p><span>Where: </span> Furama Resort, Da Nang, Vietnam.</p>
              </div>
            </div>
          </div>
          <div className="video-wrapper">
            <img src="https://picsum.photos/840/600" alt="Video" />
          </div>
        </div>
        {/* <div className="slider">Slider</div> */}
      </div>
    </section>
  )
}

export default About