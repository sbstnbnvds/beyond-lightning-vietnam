import "./MediaPartners.css"

import BitcoinMagazine from "../../assets/bitcoin-magazine-vector-logo_blue 1.svg";
import TheDailyHodl from "../../assets/TheDailyHodlLogo.svg";
import BeInCrypto from "../../assets/BeInCryptoLogo.svg";


const MediaPartners = () => {
  return (
    <section className="media-partners-section bg-secondary icons-section">
      <div className="section-wrapper">
        <h2><span>Media </span>Partners</h2>
        <div className="icons-list flex">
          <div className="icon-wrapper"><img src={BitcoinMagazine} alt="Bitcoin Magazine Logo" /></div>
          <div className="icon-wrapper"><img src={TheDailyHodl} alt="The Daily Hodl Logo" /></div>
          <div className="icon-wrapper"><img src={BeInCrypto} alt="Be In Crypto Logo" /></div>
        </div>
      </div>
    </section>
  )
}

export default MediaPartners