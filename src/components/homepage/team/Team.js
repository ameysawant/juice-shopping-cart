import React, { useEffect } from "react";
import "./team.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeam } from "../../../redux/actions/homepage/TeamActions";

const Team = () => {
  const dispatch = useDispatch();
  const teamData = useSelector((state) => state.teamReducer.teamData);
  const teamMembers = useSelector(
    (state) => state.teamReducer.teamData.teamMembers
  );
  // console.log(teamMembers);

  useEffect(() => {
    getTeamApi();
  }, []);

  const getTeamApi = async () => {
    // const apikey = process.env.REACT_APP_API_KEY;
    // const response = await fetch(
    //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
    // );
    const response = await fetch(`http://localhost:8000/homepage`);
    const data = await response.json();
    // console.log(data);
    dispatch(fetchTeam(data.team));
  };

  return (
    <>
      {teamData && (
        <div className="dvTeam py-5">
          <div className="container-lg">
            <div className="row mb-4">
              <div className="col-12 text-center">
                <h2 className="heading-lg">{teamData.heading}</h2>
                <p>{teamData.description}</p>
              </div>
            </div>
            <div className="row">
              {teamMembers &&
                teamMembers.map((item) => {
                  const { id, img, heading, designation } = item;
                  return (
                    <div
                      key={id}
                      className={`col-6 col-md-4 col-lg-3 text-center mb-3 ${
                        id === 5 ? "offset-lg-3" : ""
                      }`}
                    >
                      <img src={img} className="img-fluid" alt={heading} />
                      <h6 className="heading-sm">{heading}</h6>
                      <p>{designation}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Team;
