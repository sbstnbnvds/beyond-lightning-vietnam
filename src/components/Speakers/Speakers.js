import "./Speakers.css"
import SpeakersList from "./SpeakersList"

const Speakers = () => {


  return (
    <section className="speakers-section bg-primary-2">
      <div className="section-wrapper">
        <h2 className="asher-punk">Speakers</h2>
        <SpeakersList/>
      </div>
    </section>
  )
}

export default Speakers