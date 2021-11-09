import img1 from "../images/IMG_4751.jpg";

const Home = () => {
  return (
    <div className="home">
      <img className="img-1" src={img1} alt="Whiskey Tasting"></img>
      <h1>Welcome to Bootlegger</h1>
      <p>
        Purchase all of your desired overrated and over-hyped whiskies here!
      </p>
    </div>
  );
};

export default Home;
