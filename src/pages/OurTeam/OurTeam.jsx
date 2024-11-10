import "./OurTeam.css";
import TeamCard from "./TeamCard";
import TeamData from "./details.json";
import Navbar from "../../components/Navbar/navbar";

function OurTeam() {
  return (
    <div className="fullpage">
      <Navbar />
      <div className="topheading-container">
      <div className="topheading">Our Team</div></div>
      {Object.keys(TeamData).map((title) => (
        <>
          <div className="heading">{title}</div>
          <div className="team" key={title}>
            {Object.entries(TeamData[title]).map(([index, details]) => {
              return <TeamCard imgUrl={details.image} name={details.name} key={index}/>;
            })}
          </div>
        </>
      ))}
    </div>
  );
}
export default OurTeam;
