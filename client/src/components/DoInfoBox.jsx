import { Link } from "react-router-dom";
import teammate_image from "../img/360_F_499869337_ADfiHvP681OD5VN1s05soRBfgGRScRA4.jpg";
import community_image from "../img/38-1-1024x597.jpg";

export const DoInfoBox = () => {
    return (
        <div className="do-info-box">
            <div className="do-all-text-div">
                <div className="do-info-intro-box">
                        <div className="do-info-header-div">
                            <h1 className="do-info-header">What do we do?</h1>
                        </div>
                    <div className="do-content-text-div">
                        <p className="do-info-text1 do-body-text">
                            Project Sublime aims to help teenagers who feel stressed to find a form
                            of expression and build a helping and supportive community to discuss
                            our passions.
                        </p>
                    </div>
                </div>
                    <h1 className="do-info-subheader1 do-subheader">Find your passion and your people!</h1>
                    <p className="do-info-text2 do-body-text">
                        Project Sublime was conceptualized by teenage students who had experienced
                        forms of depression in the past and found a productive outlet to
                        overcome their challenges.
                    </p>
                    <div className="do-info-image do-image-1" style={{ backgroundImage: `url(${teammate_image})` }}></div>
                    <h1 className="do-info-subheader2 do-subheader">Communicate!</h1>
                    <p className="do-info-text3 do-body-text">
                        Project Sublime was conceptualized by teenage students who had experienced
                        forms of depression in the past and found a productive outlet to
                        overcome their challenges.
                    </p>
                    <div className="do-info-image do-image-2" style={{ backgroundImage: `url(${community_image})` }}></div>
            </div>
            <div>
                <Link className="btn btn-outline-secondary do-to-forum-btn" to={"/forumguide"}>
                    Check out our forums!
                </Link>
            </div>
        </div>
    );
};
