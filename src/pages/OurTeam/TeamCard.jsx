import Back from "../../assets/frame.png";
import "./OurTeam.css";

function TeamCard({ imgUrl, name }) {
  return (
    <div className="details-card">
      <div className="teamCard">
        <img src={Back} className="frame"></img>
        <img src={imgUrl} className="photo"></img>
      </div>
      <div className="details">{name}</div>
    </div>
  );
}

export default TeamCard;
