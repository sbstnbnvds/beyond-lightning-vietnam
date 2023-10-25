import Main from "../components/Main/Main"
import About from "../components/About/About"
import WhyAttend from "../components/WhyAttend/WhyAttend"
import Speakers from "../components/Speakers/Speakers"
import SideEvents from "../components/SideEvents/SideEvents"
import Sponsors from "../components/Sponsors/Sponsors"
import MediaPartners from "../components/MediaPartners/MediaPartners"
import GetInvolved from "../components/GetInvolved/GetInvolved"
import ContactUs from "../components/ContactUs/ContactUs"


const LandingPage = () => {
  return (<>
    <Main/>
    <About/>
    <WhyAttend />
    <Speakers />
    <SideEvents/>
    <Sponsors/>
    <MediaPartners/>
    {/* <GetInvolved/>
    <ContactUs/> */}


  </>
  )
}

export default LandingPage