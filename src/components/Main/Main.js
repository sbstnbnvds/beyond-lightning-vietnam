import "./Main.css"
import bannerImage from "../../assets/BannerImage.png"

const Main = () => {
  return (
    <main className="main-section bg-primary-1">
      <div className="section-wrapper">
        <div className="main-section__header">
          <h1 className="main-section__header__title asher-punk">
            Beyond <span className="break-span"></span>Lightning Vietnam</h1>
          <div className="main-section__header__subtitles flex">
            <p>Da Nang, Vietnam</p>
            <p>March 29-30, 2024</p>
          </div>
        </div>
      </div>
      <div className="main-section__image">
        <img src={bannerImage} alt="Vietnam Landscape" />
      </div>
    </main>
  )
}

export default Main