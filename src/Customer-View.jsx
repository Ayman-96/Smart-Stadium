import { useState } from "react";
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
      lighting: "Good",
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
      <Filter />
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

function Filter() {
  const [filters, setFilters] = useState({
    price: "any",
    pitchSize: "any",
    grass: "any",
    lighting: "any",
    waterAvailability: "any",
  });

  const prices = ["any", "10k", "15k", "20k", "25k"];
  const pitchSize = ["any", "Small", "Medium", "Big"];
  const grassType = ["any", "Artificial Grass", "Natural Grass"];
  const lightingType = ["any", "Normal", "Good", "Very Bright"];
  const waterAvailability = ["any", "Available", "Not Available"];

  function handleFiltering(e) {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value, // [name] = changed value like price or grass  : value of what we select
    }));
    console.log({ name, value });
    console.log(filters.price);
  }
  return (
    <div className="filtering">
      <h2 id="filter-title">Filter Criteria :</h2>

      {/* PRICE */}
      <label className="price-label">
        Price :
        <select
          name="price"
          value={filters.price}
          onChange={(e) => handleFiltering(e)}
        >
          {prices.map((price) => (
            <option className="prices-options" value={price} key={price}>
              {price}
            </option>
          ))}
        </select>
      </label>

      {/* PITCH */}
      <label className="pitch-label">
        Pitch Size :
        <select
          name="pitchSize"
          value={filters.pitchSize}
          onChange={(e) => handleFiltering(e)}
        >
          {pitchSize.map((size) => (
            <option className="sizes-options" value={size} key={size}>
              {size}
            </option>
          ))}
        </select>
      </label>

      {/* GRASS */}
      <label className="grass-label">
        Grass Type :
        <select
          name="grass"
          value={filters.grass}
          onChange={(e) => handleFiltering(e)}
        >
          {grassType.map((grass) => (
            <option className="grasses-options" value={grass} key={grass}>
              {grass}
            </option>
          ))}
        </select>
      </label>

      {/* LIGHTING */}
      <label className="lighting-label">
        Lighting Type :
        <select
          name="lighting"
          value={filters.lighting}
          onChange={(e) => handleFiltering(e)}
        >
          {lightingType.map((light) => (
            <option className="lighting-options" value={light} key={light}>
              {light}
            </option>
          ))}
        </select>
      </label>

      {/* WATER */}
      <label className="water-label">
        Water Availability:
        <select
          name="waterAvailability"
          value={filters.waterAvailability}
          onChange={(e) => handleFiltering(e)}
        >
          {waterAvailability.map((water) => (
            <option className="water-options" value={water} key={water}>
              {water}
            </option>
          ))}
        </select>
      </label>

      <StadiumsView filters={filters} />
    </div>
  );
}

function StadiumsView({ filters }) {
  return (
    <div className="interface">
      {stadiums
        .filter(
          (stadium) =>
            (filters.price === "any" || // Price is "any" OR stadium price matches
              stadium.price === filters.price) &&
            (filters.pitchSize === "any" ||
              stadium.description.pitchSize === filters.pitchSize) &&
            (filters.grass === "any" ||
              stadium.description.grass === filters.grass) &&
            (filters.lighting === "any" ||
              stadium.description.lighting === filters.lighting) &&
            (filters.waterAvailability === "any" ||
              stadium.description.water === filters.waterAvailability),
        )
        .map((stadium) => (
          <StadSlot
            name={stadium.name}
            price={stadium.price}
            img={stadium.img}
            key={stadium.id}
            description={stadium.description}
            subImgs={stadium.subImgs}
          />
        ))}
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
