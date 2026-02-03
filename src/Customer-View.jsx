import { use, useState } from "react";
import "./App.css";
//import stadiumImg1 from ;

const stadiums = [
  {
    id: "1",
    name: "Stadium 1",
    price: "10k",
    img: "./public/greenfield/greenfield.png",
    subImgs: {
      img1: "./public/greenfield/img1.jpg",
      img2: "./public/greenfield/img2.png",
      img3: "./public/greenfield/img3.webp",
      img4: "./public/greenfield/img4.jpg",
    },
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
    img: "./public/hilltop/hilltop.png",
    subImgs: {
      img1: "./public/greenfield/img1.jpg",
      img2: "./public/greenfield/img2.png",
      img3: "./public/greenfield/img3.webp",
      img4: "./public/greenfield/img4.jpg",
    },
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
    img: "./public/meadow/meadow.png",
    subImgs: {
      img1: "./public/greenfield/img1.jpg",
      img2: "./public/greenfield/img2.png",
      img3: "./public/greenfield/img3.webp",
      img4: "./public/greenfield/img4.jpg",
    },
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
    img: "./public/ultimate/ultimate.png",
    subImgs: {
      img1: "./public/greenfield/img1.jpg",
      img2: "./public/greenfield/img2.png",
      img3: "./public/greenfield/img3.webp",
      img4: "./public/greenfield/img4.jpg",
    },
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
            description={stadium.description}
            subImgs={stadium.subImgs}
          />
        );
      })}
    </div>
  );
}

function StadSlot({ name, price, img, description, subImgs }) {
  const [activeDescription, setActiveDescription] = useState(false);

  function handleActivation() {
    setActiveDescription((prev) => !prev);
    console.log(activeDescription);
  }
  return (
    <div className="slots">
      <p className="stad-name">{name}</p>
      <img src={img} className="stad-img"></img>
      <div className="stad-price">Price : {price} per Ticket</div>
      <button className="show-button" onClick={handleActivation}>
        See Details
      </button>
      {activeDescription && (
        <Description
          img={img}
          name={name}
          description={description}
          subImgs={subImgs}
          handleActivation={handleActivation}
        />
      )}
    </div>
  );
}

function Description({ img, name, description, subImgs, handleActivation }) {
  return (
    <div className="description-pop">
      <button id="close-description" onClick={handleActivation}>
        &times;
      </button>
      <div className="description">
        <p className="desc-stad-name">{name}</p>
        <img className="desc-img" src={img} />
        <div className="sub-imgs">
          <img id="sub-img1" src={subImgs.img1} />
          <img id="sub-img2" src={subImgs.img2} />
          <img id="sub-img3" src={subImgs.img3} />
          <img id="sub-img4" src={subImgs.img4} />
        </div>
        <div className="details">
          <p>Details on the Stadium</p>
          <p className="desc-pitch-size">Pitch Size: {description.pitchSize}</p>
          <p className="desc-grass">Grass type: {description.grass}</p>
          <p className="desc-light">Lighting: {description.lighting} </p>
          <p className="desc-water">Water Availability: {description.water}</p>
        </div>
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
