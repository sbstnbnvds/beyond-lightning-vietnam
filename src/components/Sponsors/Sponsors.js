import "./Sponsors.css"
import BitcoinVN from "../../assets/BitcoinVNLogo.svg"
import Neutronpay from "../../assets/NeutronpayLogo.svg"
import Nunchuk from "../../assets/NUNCHUKLogo.svg"


const Sponsors = () => {
  return (
    <section className="sponsors-section bg-secondary icons-section">
      <div className="section-wrapper">
        <h2>Sponsors</h2>
        <div className="icons-list flex">
          <div className="icon-wrapper ">
            <img src={BitcoinVN} alt="BitcoinVN logo" />
          </div>
          <div className="icon-wrapper">
            <img src={Neutronpay} alt="Neutronpay logo" />
          </div>
          <div className="icon-wrapper">
            <img src={Nunchuk} alt="Nunchuk logo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors