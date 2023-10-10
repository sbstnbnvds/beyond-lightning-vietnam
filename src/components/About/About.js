import "./About.css"

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
        <div className="about-section__secondary">
          <div className="about-section__secondary__info">
            <h3>Conference</h3>
            <div>
              <div>
                <div><img src="https://picsum.photos/50" alt="" aria-hidden="true"></img></div>
                <p><span>When: </span>March 29-30, 2024.</p>
              </div>
              <div>
                <div></div><img src="https://picsum.photos/50" alt="" aria-hidden="true" />
                <p><span>Where: </span> Furama Resort, Da Nang, Vietnam.</p>
              </div>
            </div>
          </div>
          <div>
            <img src="https://picsum.photos/200" alt="Video" />
          </div>
        </div>
        <div className="slider">Slider</div>
      </div>
    </section>
  )
}

export default About