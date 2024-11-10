import "./OurTeam.css";
import TeamCard from "./TeamCard";
import TeamData from "./details.json";

function OurTeam() {
  return (
    <div className="fullpage">
      <h1 className="topheading">Our Team</h1>
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
