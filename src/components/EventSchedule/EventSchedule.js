import "./EventSchedule.css"

const EventSchedule = () => {

  var ListOfEvents = [
    {
      id: 1,
      time: "8:00",
      text: "Organizer Opening Remarks"
    },
    {
      id: 2,
      time: "8:10",
      text: "Intro Keynote"
    },
    {
      id: 3,
      time: "8:30",
      text: "Fiat money ruins everything"
    },
    {
      id: 4,
      time: "9:30",
      text: "Vietnam & South East Asia - the community panel"
    },
    {
      id: 5,
      time: "10:30",
      text: "Machankura: The Medium Is Not The Message"
    },
    {
      id: 6,
      time: "11:30",
      text: "The money race between CBDC and bitcoin lightning in South East Asia"
    },
    {
      id: 7,
      time: "12:30",
      text: "Lightning on the Web"
    },
    {
      id: 8,
      time: "1:30",
      text: "Asset tokenization over Lightning"
    },
    {
      id: 9,
      time: "2:30",
      text: "Performance vs security in LN mode implementations"
    },
    {
      id: 10,
      time: "3:30",
      text: "Usability of the Lightning - Problems and solutions"
    },
    {
      id: 11,
      time: "4:30",
      text: "Bitcoin adoption from Japan - Failures and lessons"
    },
    {
      id: 12,
      time: "5:10",
      text: "BOB Space BKK - tales from the trenches"
    },
    {
      id: 13,
      time: "6:00",
      text: "Closing remarks for Day 1"
    }
  ]

  ListOfEvents.map((event) =>
    < div className="bg-gradient flex" >
      <div className="bg-secondary flex">
        <div className="bg-gradient flex">
          {event.time}
        </div>
        <p>{event.text}</p>
      </div>
    </div >
  )
  return (
    <section className="schedule">
      <h2><span className="break-span">Event </span>Schedule</h2>
      {ListOfEvents.map((event) =>
        < div className="bg-gradient flex" >
          <div className="bg-secondary flex">
            <div className="bg-gradient flex">
              {event.time}
            </div>
            <p>{event.text}</p>
          </div>
        </div >
      )}

    </section>
  )
}

export default EventSchedule