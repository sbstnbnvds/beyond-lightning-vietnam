import ElizabethStark from "../../assets/speakers/ElizabethStark.png"
import JimmySong from "../../assets/speakers/Jimmy Song.png";
import AlbertBuu from "../../assets/speakers/Albert Buu.png";
import DominikWeil from "../../assets/speakers/Dominik Weil.png";
import StephanLivera from "../../assets/speakers/Stephan Livera.png";
import PeterTodd from "../../assets/speakers/Peter Todd.png";
import MalcolmWeed from "../../assets/speakers/Malcolm Weed.png";
import DeaRezkitha from "../../assets/speakers/Dea Rezkitha.png";
import KojiHigashi from "../../assets/speakers/Koji Higashi.png";
import KgothatsoNgako from "../../assets/speakers/Kgothatso Ngako.png";
import JackLee from "../../assets/speakers/Jack Lee.png";
import MikeJarmuz from "../../assets/speakers/Mike _Muzz_ Jarmuz.png";
import LouisLui from "../../assets/speakers/Louis Lui.png";
import AndreasKohl from "../../assets/speakers/Andres EJ Kohl.png";
import LeonhardWeese from "../../assets/speakers/Leonhard Weese.png";
import Piriya from "../../assets/speakers/Piriya.png";
import JeremyShowalter from "../../assets/speakers/Jeremy Showalter.png";
import RolandBewick from "../../assets/speakers/Roland Bewick.png";
import AdamMashrique from "../../assets/speakers/Adam Mashrique.png";
import AndrewPantyukhin from "../../assets/speakers/Andrew Pantyukhin.png";


const SpeakersList = () => {

    var ListOfSpeakers = [
        {
            id: 1, 
            name: "Elizabeth Stark",
            job: "Co Founder & CEO Lightning Labs",
            img: ElizabethStark
        },
        {
            id: 2,
            name: "Jimmy Song",
            job: "Bitcoin Expert Open source Coder",
            img: JimmySong
        },    
        {
            id: 3,
            name: "Albert Buu",
            job: "Founder & CEO Neutronpay",
            img: AlbertBuu
        },
        {
            id: 4,
            name: "Dominik Weil",
            job: "Co Founder & COO BitcoinVN",
            img: DominikWeil
        },
        {
            id: 5,
            name: "Stephan Livera",
            job: "Head of Education Swan Bitcoin",
            img: StephanLivera
        },
        {
            id: 6,
            name: "Peter Todd",
            job: "Crypto-chronomancer",
            img: PeterTodd
        },
        {
            id: 7,
            name: "Malcolm Weed",
            job: "COO - Neutronpay & Bitcoin Beach Vietnam",
            img: MalcolmWeed
        },
        {
            id: 8,
            name: "Dea Rezkitha",
            job: "Chair, Indonesia Bitcoin Community",
            img: DeaRezkitha
        },
        {
            id: 9,
            name: "Koji Higashi",
            job: "Co Founder Diamond Hands",
            img: KojiHigashi
        },
        {
            id: 10,
            name: "Kgothatso Ngako",
            job: "Founder & CEO Machankura",
            img: KgothatsoNgako
        },
        {
            id: 11,
            name: "Jack Lee",
            job: "Managing Partner HCM Capital",
            img: JackLee
        },
        {
            id: 12,
            name: "Mike \"Muzz\" Jarmuz",
            job: "Managing Partner Lightning Ventures",
            img: MikeJarmuz
        },
        {
            id: 13,
            name: "Louis Lui",
            job: "Founder and CEO Mimesis Capital",
            img: LouisLui
        },
        {
            id: 14,
            name: "Andreas EJ Kohl",
            job: "Co Founder Sequentia",
            img: AndreasKohl
        },
        {
            id: 15,
            name: "Leonhard Weese",
            job: "Bitcoin Association Hong Kong",
            img: LeonhardWeese
        },
        {
            id: 16,
            name: "Piriya",
            job: "Self Hosted Person Rightshift",
            img: Piriya
        },
        {
            id: 17,
            name: "Jeremy Showalter",
            job: "VP Product Swan Bitcoin",
            img: JeremyShowalter
        },
        {
            id: 18,
            name: "Roland Bewick",
            job: "Development Lead Alby",
            img: RolandBewick
        },
        {
            id: 19,
            name: "Adam Mashrique",
            job: "Hardware Developer Safegate Labs",
            img: AdamMashrique
        },
        {
            id: 20,
            name: "Andrew Pantyukhin",
            job: "Software Architect Independent Researcher",
            img: AndrewPantyukhin
        },
    ];

    return (
        <div className="speakers-section__cards">
            {ListOfSpeakers.map(Speaker => {
                return (
                    <div className="speakers-section__cards__card flex" key={Speaker.id}>
                        <img src={Speaker.img} alt={Speaker.name + " picture"} />
                        <div className="card-content flex-column">
                            <strong>{Speaker.name}</strong>
                            <p>{Speaker.job}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SpeakersList