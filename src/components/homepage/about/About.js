import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAbout } from "../../../redux/actions/homepage/AboutActions";
import "./about.css";

const About = () => {
  const dispatch = useDispatch();
  const aboutData = useSelector((state) => state.aboutReducer.aboutData);
  const points = useSelector((state) => state.aboutReducer.aboutData.points);
  // console.log(aboutData);

  useEffect(() => {
    getAboutApi();
  }, []);

  const getAboutApi = async () => {
    // const apikey = process.env.REACT_APP_API_KEY;
    // const response = await fetch(
    //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
    // );
    const response = await fetch(`http://localhost:8000/homepage`);
    const data = await response.json();
    // console.log(data.aboutus);
    dispatch(fetchAbout(data.aboutus));
  };

  return (
    <>
      {aboutData && (
        <div className="dvAbout py-5">
          <div className="container-lg">
            <div className="row">
              <div className="col-12 mb-4 text-center">
                <h2 className="heading-lg">{aboutData.heading}</h2>
                <p>{aboutData.description}</p>
              </div>
            </div>
            <div className="row">
              {points &&
                points.map((item) => {
                  const { id, img, heading, description } = item;
                  return (
                    <div
                      key={id}
                      className="col-sm-6 col-md-4 text-center mb-4"
                    >
                      <img
                        width={50}
                        src={img}
                        alt={heading}
                        className="img-fluid"
                      />
                      <h6 className="heading-sm py-2">{heading}</h6>
                      <p>{description}</p>
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

export default About;
