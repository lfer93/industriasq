import "../styles/Hero.scss";

const Hero = () => {
  return (
    <div className="hero-section">
        <div className="hero-content">
      <h2>Bienvenido a Industrias Q</h2>
      <h3 className="slogan">Tu aliado en uniformes</h3>
      </div>
    </div>
  );
};

export default Hero;


/* import backgroundImage from "../assets/images/herobackground.png";

const Hero = () => {
    return (
      <div className="hero-section" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "black",
        fontSize: "2rem",
        fontWeight: "bold",
        animation: "fadeIn 2s ease-in-out"
      }}>
        <h1>Bienvenido a Industrias Q</h1>
      </div>
    );
  };
  
export default Hero; */