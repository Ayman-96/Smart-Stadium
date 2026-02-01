import "./App.css";
//import stadiumImg1 from ;

const stadiums = [
  {
    id: "1",
    name: "Stadium 1",
    price: "10k",
    img: "./public/stadium1.webp",
    description: {
      pitchSize: "Small",
      grass: "Artificial Grass",
      lightning: "Normal",
      water: "Not Available",
    },
  },
  {
    id: "2",
    name: "Stadium 2",
    price: "15k",
    img: "./public/stadium1.webp",
    description: {
      pitchSize: "Medium",
      grass: "Artificial Grass",
      lightning: "Good",
      water: "Not Available",
    },
  },
  {
    id: "3",
    name: "Stadium 3",
    price: "20k",
    img: "./public/stadium1.webp",
    description: {
      pitchSize: "Big",
      grass: "Natural Grass",
      lightning: "Normal",
      water: "Available",
    },
  },
  {
    id: "4",
    name: "Stadium 4",
    price: "25k",
    img: "./public/stadium1.webp",
    description: {
      pitchSize: "Big",
      grass: "Natural Grass",
      lightning: "Very Bright",
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
            key={stadium.name}
          />
        );
      })}
    </div>
  );
}

function StadSlot({ name, price, img }) {
  return (
    <div className="slots">
      <p className="stad-name">Stadium {name}</p>
      <img src={img} className="stad-img"></img>
      <div className="stad-price">Price : {price} per Ticket</div>
      <button className="show-button">See Details</button>
    </div>
  );
}

function Description() {
  return (
    <div className="description-pop">
      <div className="description">
        <img className="desc-img"></img>
        <p>Details on the Stadium</p>
        <p className="desc-stad-name">Stadium X</p>
        <p className="desc-grass">Grass type : </p>
        <p className="desc-light">Lightening : </p>
        <p className="desc-water">Water Availability : </p>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <div id="left-bottom">Designed By : Ayman</div>
      <div id="center-bottom">Smart Stadium</div>
      <div id="right-bottom">example@gmail.com</div>
    </div>
  );
}
