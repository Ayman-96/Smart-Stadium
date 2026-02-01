import { useState } from "react";
import "./App.css";
//import stadiumImg1 from ;

const stadiums = [
  {
    id: "1",
    name: "Stadium 1",
    price: "10k",
    img: "./public/greenfield.png",
    description: {
      pitchSize: "Small",
      grass: "Artificial Grass",
      lighting: "Normal",
      water: "Not Available",
    },
  },
  {
    id: "2",
    name: "Stadium 2",
    price: "15k",
    img: "./public/hilltop.png",
    description: {
      pitchSize: "Medium",
      grass: "Artificial Grass",
      lighting: "Good",
      water: "Not Available",
    },
  },
  {
    id: "3",
    name: "Stadium 3",
    price: "20k",
    img: "./public/meadow.png",
    description: {
      pitchSize: "Big",
      grass: "Natural Grass",
      lighting: "Normal",
      water: "Available",
    },
  },
  {
    id: "4",
    name: "Stadium 4",
    price: "25k",
    img: "./public/ultimate.png",
    description: {
      pitchSize: "Big",
      grass: "Natural Grass",
      lighting: "Very Bright",
      water: "Available",
    },
  },
];
export default function App() {
  return (
    <div>
      <Header />
      <StadiumsView />
      <Footer />
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
  return (
    <div className="interface">
      {stadiums.map((stadium) => {
        return (
          <StadSlot
            name={stadium.name}
            price={stadium.price}
            img={stadium.img}
            key={stadium.id}
            pitchSize={stadium.description.pitchSize}
            grass={stadium.description.grass}
            lighting={stadium.description.lighning}
            water={stadium.description.water}
          />
        );
      })}
    </div>
  );
}

function StadSlot({ name, price, img, pitchSize, grass, lighting, water }) {
  const [activeStadium, setActiveStadium] = useState(false);

  function handleActivation() {
    setActiveStadium((prev) => !prev);
    console.log(activeStadium);
  }
  return (
    <div className="slots">
      <p className="stad-name">Stadium {name}</p>
      <img src={img} className="stad-img"></img>
      <div className="stad-price">Price : {price} per Ticket</div>
      <button className="show-button" onClick={handleActivation}>
        See Details
      </button>
      {activeStadium && (
        <Description
          img={img}
          name={name}
          pitchSize={pitchSize}
          grass={grass}
          lighting={lighting}
          water={water}
        />
      )}
    </div>
  );
}

function Description({ img, name, pitchSize, grass, lighting, water }) {
  return (
    <div className="description-pop">
      <div className="description">
        <img className="desc-img" src={img}></img>
        <p>Details on the Stadium</p>
        <p className="desc-stad-name">Stadium {name}</p>
        <p className="desc-pitch-size">Pitch Size: {pitchSize}</p>
        <p className="desc-grass">Grass type: {grass}</p>
        <p className="desc-light">Lighting: {lighting} </p>
        <p className="desc-water">Water Availability: {water}</p>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <div id="left-bottom">Designed By : Ayman</div>
      <div id="center-bottom">Smart Stadium</div>
      <div id="right-bottom">aemanharde@gmail.com</div>
    </div>
  );
}
