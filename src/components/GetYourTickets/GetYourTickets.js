import "./GetYourTickets.css";


const GetYourTickets = () => {
  return (
    <section className="get-your-tickets" id="get-your-tickets">
      <h2><span className="span-break">Get Your </span>Tickets</h2>
      <div className="cards flex">
      <div className="card">
          <div className="card-container flex-column">
            <div>
            <h3><span className="break-span" >Ga </span>Ticket</h3>
            </div>
            <p className="subtext">(TBD Fill in details on what you'll get)</p>
            <ul className="prices">
              <li>
                <p>Early Bird <span className="break-span"/>Oct-Nov</p>
                <p className="price">$350</p>
              </li>
              <li>
                <p>Getting Closer <span className="break-span"/>Dec-Jan</p>
                <p className="price">$450</p>
              </li>
              <li>
                <p>Regular <span className="break-span"/>Feb-March</p>
                <p className="price">$500</p>
              </li>
            </ul>
          </div>
          <a href="">Buy it now</a>
        </div>

        <div className="card">
          <div className="card-container flex-column">
            <div>
              <h3><span className="break-span" >Vip </span>Ticket</h3>
            </div>
            <p className="subtext">(TBD Fill in ticketing details)</p>
            <ul className="prices">
              <li>
                <p>Early Bird <span className="break-span"/>Oct-Nov</p>
                <p className="price">$600</p>
              </li>
              <li>
                <p>Getting Closer</p>
                <p className="price">$700</p>
              </li>
              <li>
                <p>On Time </p>
                <p className="price">$800</p>
              </li>
            </ul>
          </div>
          <a href="">Buy it now</a>
        </div>

        <div className="card">
          <div className="card-container flex-column">
            <div>
              <h3><span className="break-span" >Local </span>Ticket</h3>
            </div>
            <p className="subtext">(TBD Fill in details on what you'll get)</p>
            <ul className="prices">
              <li>
                <p>Early Bird <span className="break-span"/>Oct-Nov</p>
                <p className="price">$25</p>
              </li>
              <li>
                <p>Getting Closer</p>
                <p className="price">$35</p>
              </li>
              <li>
                <p>On Time</p>
                <p className="price">$50</p>
              </li>
            </ul>
          </div>
          <a href="">Buy it now</a>
        </div>

        <div className="card">
          <div className="card-container flex-column">
            <div>
            <h3><span className="break-span" >Local </span>University Students</h3>
            </div>
            <p className="subtext">(TBD Fill in details on what you'll get)</p>
            <ul className="prices">
              <li>
                <p>Free <span>(Please bring your Uni ID)</span></p>
              </li>
            </ul>
          </div>
          <a href="">Buy it now</a>
        </div>
        
      </div>
    </section>
  )
}

export default GetYourTickets