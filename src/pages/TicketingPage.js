import EventSchedule from "../components/EventSchedule/EventSchedule"
import GetYourTickets from "../components/GetYourTickets/GetYourTickets"
import Location from "../components/Location/Location"
import SimpleTicketingPackages from "../components/SimpleTicketingPackages/SimpleTicketingPackages"

const TicketingPage = () => {
  return (<>
    <SimpleTicketingPackages />
    <EventSchedule />
    <Location />
    <GetYourTickets/>
  </>
  )
}

export default TicketingPage