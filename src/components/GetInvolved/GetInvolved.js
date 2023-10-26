import "./GetInvolved.css"

import Tickets from "../../assets/Ticktest.svg"
import Sponsorship from "../../assets/SponsorshipsIcon.svg"
import MediaPartner from "../../assets/MediaPartner.svg"

import Quotes from "../../assets/comillas.svg"
import Quotes2 from "../../assets/CerrarComillas.svg"

const GetInvolved = () => {
  return (
    <section className="get-involved-section bg-primary-1 flex-column">
        <h2><span className="break-span">Get </span>Involved</h2>
        <div className="cards flex">
          <div className="card flex-column">
            <div className="img-wrapper">
              <img src={Tickets} alt="" />
            </div>
            <h3>Tickets:</h3>
            <p>Secure your spot today!</p>
            <a href="/#" className="asher-punk">Click here</a>
          </div>
          <div className="card flex-column">
            <div className="img-wrapper">
              <img src={Sponsorship} alt="" />
            </div>
            <h3>Sponsorship:</h3>
            <p>Interested in becoming a sponsor?</p>
            <a href="/#" className="asher-punk">Learn more here</a>
          </div>
          <div className="card flex-column">
            <div className="img-wrapper">
              <img src={MediaPartner} alt="" />
            </div>
            <h3>Media Partner:</h3>
            <p>Want to be a media partner?</p>
            <a href="/#" className="asher-punk">Click here</a>
          </div>
        </div>
        <div className="quotes-card">We look forward to seeing you at Beyond Lightning Vietnam, where we'll explore the future
          and go beyond the horizons of Bitcoin and the Lightning Network.
          <div className="quotes-wrapper quotes-1">
            <img src={Quotes} alt="" />
          </div>
          <div className="quotes-wrapper quotes-2">
            <img src={Quotes2} alt="" />
          </div>
        </div>
    </section>
  )
}

export default GetInvolved