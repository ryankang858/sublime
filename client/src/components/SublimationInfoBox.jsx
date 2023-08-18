import { Link } from "react-router-dom";

export const SublimationInfoBox = () => {
  return (
    <>
      <div className="sublimation-info-box">
        <div className="sublimation-all-text-div">
          <div className="sublimation-info-header-div">
            <h1 className="sublimation-info-header">What is Sublimation?</h1>
          </div>
          <div className="sublimation-content-text-div">
            <p className="sublimation-info-text1">
              Sublimation is the process of channeling negative thoughts of
              stress or sadness into creative forms of expression to alleviate
              depression.
            </p>
            <p className="sublimation-info-text2">
              Project Sublime was made by teenage students who had experienced
              forms of depression in the past and found a productive outlet to
              overcome their challenges.
            </p>
          </div>
        </div>
        <div className="sublimation-info-image"></div>
      </div>
      <Link className="btn btn-outline-secondary" to={"/stories"}>
        Hear our stories
      </Link>
      ;
    </>
  );
};
