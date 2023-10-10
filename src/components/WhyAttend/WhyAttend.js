import "./WhyAttend.css";

import innovativeDiscussions from "../../assets/InnovativeDiscussionIcon.png";
import globalNetworking from "../../assets/GlobalNetworkingIcons.png";
import expertsInsights from "../../assets/ExpertInsightIcon.png";
import digital from "../../assets/DigitalIcon.png";

const WhyAttend = () => {
  return (
    <section className="why-attend-section bg-primary-1">
      <div className="section-wrapper">
        <h2><span>Why </span>Attend?</h2>
        <div className="flex">
          <div className="grid-item flex-column">
            <img src={innovativeDiscussions} alt="" />
            <h3>Innovative Discussions:</h3>
            <p>Engage in thought-provoking conversations about Bitcoin, the Lightning Network, payments and
              emerging technologies.
            </p>
          </div>
          <div className="grid-item flex-column">
            <img src={globalNetworking} alt="" />
            <h3>Global Networking:</h3>
            <p>With 80% international and 20% local attendees, this is your chance to connect with
              like-minded
              individuals from around the world.</p>
          </div>
          <div className="grid-item flex-column">
            <img src={expertsInsights} alt="" />
            <h3>Expert Insights:</h3>
            <p>Learn from a curated list of speakers who are industry leaders and innovators.</p>
          </div>
          <div className="grid-item flex-column">
            <img src={digital} alt="" />
            <h3>Digital:</h3>
            <p>Can't make it in person? No worries! We offer a digital experience that includes livestreams
              and
              post event content.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyAttend