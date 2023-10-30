import { Link } from "react-router-dom";
import sublimation_image from "../img/Sublimation.-A-Defense-Mechanism.-Psychology-Fanatic.webp"

export const SublimationInfoBox = () => {
  return (
    <>
      <div className="sublimation-info-box">
        <div className="text-and-button-box">
          <div className="sublimation-all-text-div">
            <div className="sublimation-info-header-div">
              <h1 className="sublimation-info-header">What is Sublimation?</h1>
            </div>
            <div className="sublimation-content-text-div">
              <p className="sublimation-info-text1 body-text">
                Sublimation is the process of channeling negative thoughts of
                stress or sadness into creative forms of expression to alleviate
                depression.
              </p>
              <p className="sublimation-info-text2">
                Project Sublime was conceptualized by teenage students who had experienced
                forms of depression in the past and found a productive outlet to
                overcome their challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="sublimation-info-image" style={{ backgroundImage: `url(${sublimation_image})`}}></div>
        <div className="do-button-sublimation">
            <Link className="btn btn-outline-secondary sublimation-to-do-button" to={"/Do"}>
              What do we do?
            </Link>
          </div>
      </div>
    </>
  );
};
