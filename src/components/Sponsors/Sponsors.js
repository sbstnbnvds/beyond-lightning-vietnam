import "./Sponsors.css"
import BitcoinVN from "../../assets/BitcoinVNLogo.svg"
import Neutronpay from "../../assets/NeutronpayLogo.svg"
import Nunchuk from "../../assets/NUNCHUCKLogo.png"
const Sponsors = () => {
  return (
    <section className="sponsors-section bg-secondary icons-section">
      <div className="section-wrapper">
        <h2>Sponsors</h2>
        <div className="icons-list flex">
          <img src={BitcoinVN} alt="BitcoinVN logo" />
          <img src={Neutronpay} alt="Neutronpay logo" />
          <img src={Nunchuk} alt="Nunchuk logo" />
        </div>
      </div>
    </section>
  )
}

export default Sponsors