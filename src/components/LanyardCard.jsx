import "./LanyardCard.css";
import profilePhoto from "../assets/put.jpg";

function LanyardCard() {
  return (
    <div className="responsive-wrapper">
      <div className="aesthetic-profile-card">
        <div className="card-glow card-glow-one"></div>
        <div className="card-glow card-glow-two"></div>

        <div className="profile-frame">
          <img src={profilePhoto} alt="Aditya Kusuma" />
        </div>

        <div className="profile-name">
          <h3>ADITYA KUSUMA</h3>
        </div>
      </div>
    </div>
  );
}

export default LanyardCard;