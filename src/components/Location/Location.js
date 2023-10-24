import "./Location.css"
import PictureFrame from "../../assets/PictureFrame.svg"
import LocationIconGradient from "../../assets/LocationIconGradient.svg"

const Location = () => {
  return (
    <section className="location flex">
      <div className="top-div flex-column">
        <h2><span className="break-span">Check Event </span>Location on Map</h2>
        <div className="main-subtitle flex">
          <div className="img">
            <img src={LocationIconGradient} alt="" />
          </div>
          <div className="flex-column subtitle">
            <h3>Event Location:</h3>
            <p>Furama Resort, Da&nbsp;Nang, Vietnam</p>
          </div>
        </div>
      </div>
      <div className="bottom-div flex">
        <div className="picture-wrapper">
          <img src="https://picsum.photos/690/451" className="picture" alt="" />
          <div className="picture-frame"><img src={PictureFrame} alt="" className="picture-frame" /></div>
        </div>
        <div className="sky-blue-background">sd</div>
      </div>
    </section>
  )
}

export default Location