import "./App.css";
import stadiumImg1 from "./assets/stadium1.webp";

const data = [
  {
    name: "Stadium 1",
    price: "10k",
    img: { stadiumImg1 },
  },
  {
    name: "Stadium 2",
    price: "15k",
    img: { stadiumImg1 },
  },
  { name: "Stadium 3", price: "20k", img: { stadiumImg1 } },
  { name: "Stadium 4", price: "25k", img: { stadiumImg1 } },
];
export default function App() {
  return (
    <div>
      <Header />
      <StadiumsView />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1 className="title">6 a Side Stadium</h1>
      <p className="sub-title">Football is Life, Enjoy Your Life!</p>
    </div>
  );
}

function StadiumsView() {
  return <div className="interface"></div>;
}

function StadSlot() {
  return (
    <div>
      <p>Stadium 1</p>
      <img src={stadiumImg1}></img>
      <div>price : 15k per Ticket</div>
    </div>
  );
}
