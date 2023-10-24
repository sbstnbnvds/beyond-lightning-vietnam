import "./SimpleTicketingPackages.css"

import PictureFrame from "../../assets/PictureFrame.svg"
import RocketIconGradient from "../../assets/RocketIconGradient.svg"
import LocationIconGradient from "../../assets/LocationIconGradient.svg"
import CalendarIconGradient from "../../assets/CalendarIconGradient.svg"

const SimpleTicketingPackages = () => {
    return (
        <section className="ticketing-section bg-primary-1 flex">
            <div className="flex main-ticketing-section bg-primary-1">

                <div className="double-bg flex-column section-wrapper">
                    <div className="sky-blue-background"></div>
                    <h2><span className='break-span'>Ticketing </span>Page</h2>
                    <div className="images flex-column">
                        <div className="picture-wrapper">
                            <img src="https://picsum.photos/690/450" className="picture" alt="" />
                            <div className="picture-frame"><img src={PictureFrame} alt="" className="picture-frame" /></div>
                        </div>
                        <div className="picture-wrapper">
                            <img src="https://picsum.photos/690/451" className="picture" alt="" />
                            <div className="picture-frame"><img src={PictureFrame} alt="" className="picture-frame" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="simple-ticketing bg-secondary-2 flex">
                <div className="section-wrapper flex-column">
                    <h3><span className="break-span">Simple Ticketing</span>Packages</h3>
                    <div className="flex event-info">
                        <div className="img">
                            <img src={RocketIconGradient} alt="" />
                        </div>
                        <div className="flex-column">
                            <h4>Event name:</h4>
                            <p>Beyond Lightning Vietnam 2024</p>
                        </div>
                    </div>
                    <div className="flex event-info">
                        <div className="img">
                            <img src={LocationIconGradient} alt="" />
                        </div>
                        <div className="flex-column">
                            <h4>Event location:</h4>
                            <p>Furama Resort, Da&nbsp;Nang, Vietnam</p>
                        </div>
                    </div>
                    <div className="flex event-info">
                        <div className="img">
                            <img src={CalendarIconGradient} alt="" />
                        </div>
                        <div className="flex-column">
                            <h4>Event date:</h4>
                            <p>March 29-30, 2024</p>
                        </div>
                    </div>
                    <div className="button"><a href="#get-your-tickets">Get your tickets</a></div>
                </div>
            </div>
        </section>
    )
}

export default SimpleTicketingPackages