import EventSchedule from "../components/EventSchedule/EventSchedule"
import GetYourTickets from "../components/GetYourTickets/GetYourTickets"
import SimpleTicketingPackages from "../components/SimpleTicketingPackages/SimpleTicketingPackages"

const TicketingPage = () => {
  return (<>
    <SimpleTicketingPackages />
    <EventSchedule />
    <GetYourTickets/>
  </>
  )
}

export default TicketingPage