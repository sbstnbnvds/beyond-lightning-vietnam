import ElizabethStark from "../../assets/ElizabethStark.png"

const SpeakersList = () => {

    var ListOfSpeakers = {
        Speaker1: {
            Name: "John Doe",
            Job: "CEO & Entrepreneur",
            Picture: { ElizabethStark }
        },
        Speaker2: {
            Name: "Jane Doe",
            Job: "CEO & Founder",
            Picture: { ElizabethStark }
        },
        Speaker3: {
            Name: "Alice Smith",
            Job: "CTO",
            Picture: { ElizabethStark }
        },
        Speaker4: {
            Name: "Bob Johnson",
            Job: "COO",
            Picture: { ElizabethStark }
        },
        Speaker5: {
            Name: "Eva Williams",
            Job: "CMO",
            Picture: { ElizabethStark }
        },
        Speaker6: {
            Name: "David Brown",
            Job: "CTO",
            Picture: { ElizabethStark }
        },
        Speaker7: {
            Name: "Sarah Green",
            Job: "CFO",
            Picture: { ElizabethStark }
        },
        Speaker8: {
            Name: "Mark Davis",
            Job: "Chief Product Officer",
            Picture: { ElizabethStark }
        },
        Speaker9: {
            Name: "Laura White",
            Job: "VP of Marketing",
            Picture: { ElizabethStark }
        },
        Speaker10: {
            Name: "Michael Wilson",
            Job: "VP of Sales"
        },
        Speaker11: {
            Name: "Olivia Lee",
            Job: "Director of Operations",
            Picture: { ElizabethStark }
        },
        Speaker12: {
            Name: "Chris Turner",
            Job: "Product Manager",
            Picture: { ElizabethStark }
        },
        Speaker13: {
            Name: "Sophia Clark",
            Job: "Software Engineer",
            Picture: { ElizabethStark }
        },
        Speaker14: {
            Name: "Daniel Hall",
            Job: "UX Designer",
            Picture: { ElizabethStark }
        },
        Speaker15: {
            Name: "Ava Martin",
            Job: "Data Analyst",
            Picture: { ElizabethStark }
        },
        Speaker16: {
            Name: "William Taylor",
            Job: "HR Manager",
            Picture: { ElizabethStark }
        },
        Speaker17: {
            Name: "Grace Baker",
            Job: "Graphic Designer",
            Picture: { ElizabethStark }
        },
        Speaker18: {
            Name: "Jack Parker",
            Job: "Sales Manager",
            Picture: { ElizabethStark }
        },
        Speaker19: {
            Name: "Nora Miller",
            Job: "IT Specialist",
            Picture: { ElizabethStark }
        },
        Speaker20: {
            Name: "Lucas Adams",
            Job: "Financial Analyst",
            Picture: { ElizabethStark }
        },
        Speaker21: {
            Name: "Chloe Harris",
            Job: "Marketing Coordinator",
            Picture: { ElizabethStark }
        },
        Speaker22: {
            Name: "Samuel Scott",
            Job: "Accountant",
            Picture: { ElizabethStark }
        },
        Speaker23: {
            Name: "Lily Moore",
            Job: "Public Relations Specialist",
            Picture: { ElizabethStark }
        },
        Speaker24: {
            Name: "Andrew Reed",
            Job: "Event Planner",
            Picture: { ElizabethStark }
        }
    };


    return (
        <div className="speakers-section__cards">
            <div className="speakers-section__cards__card flex">
                    <img src={ElizabethStark} alt="" />
                <div className="card-content flex-column">
                    <strong>Elizabeth Stark</strong>
                    <p>CEO & Bitcoiner Lightning</p>
                </div>
            </div>
        </div>
    )
}

export default SpeakersList