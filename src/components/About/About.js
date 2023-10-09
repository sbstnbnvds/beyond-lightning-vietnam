const About = () => {
  return (
    <section className="about-section bg-primary-2">
      <div className="section-wrapper">
        <div className="about-section__main">
          <h2 className="about-section__main-title">Bitcoin & Lightning Conference</h2>
          <div>
            <p>Welcome to the official website of Beyond Lightning Vietnam, powered by company name, by NeutronPay. The premier conference focusing on the future of Bitcoin, the Lightning Network and more! This is your exclusive invitation to be part of a circle of innovators steering the course of future developments.</p>
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