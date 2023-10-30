import { Link } from "react-router-dom";

export const ForumGuideInfoBox = () => {
    return (
        <>
            <div className="forum-guide-info-box">
                <div className="text-and-button-box">
                    <div className="forum-guide-all-text-div">
                        <div className="forum-guide-info-header-div">
                            <h1 className="forum-guide-info-header">How to use the forum</h1>
                        </div>
                        <div className="forum-guide-content-text-div">
                            <p className="forum-guide-info-text1 body-text">
                                The forum is where you will be communicating with the community!
                            </p>
                            <div className="forum-guide-types-text">
                                <div className="forum-guide-passions-text forum-guide-info-section">
                                    <h1 className="forum-guide-info-subheader1 forum-guide-subheader">Passions</h1>
                                    <p className="forum-guide-info-text2">
                                        This is where you can talk about specific passions you have, as well as find new ones from the community!
                                    </p>
                                    <div className="do-button-forum-guide forum-to-passions-btn">
                                        <Link className="btn btn-outline-secondary forum-guide-to-forum-button" to={"/Passions"}>
                                            Find Your Passion
                                        </Link>
                                    </div>
                                </div>
                                <div className="forum-guide-actions-text forum-guide-info-section">
                                    <h1 className="forum-guide-info-subheader1 forum-guide-subheader">Actions</h1>
                                    <p className="forum-guide-info-text2">
                                        Here, you are able to talk about your mental health and your journey as well as find advice from other users about what to do if you feel stuck.
                                    </p>
                                    <div className="do-button-forum-guide forum-to-passions-btn">
                                        <Link className="btn btn-outline-secondary forum-guide-to-forum-button" to={"/Actions"}>
                                            Take Action
                                        </Link>
                                    </div>
                                </div>
                                <div className="forum-guide-discussions-text forum-guide-info-section">
                                    <h1 className="forum-guide-info-subheader1 forum-guide-subheader">Discussions</h1>
                                    <p className="forum-guide-info-text2">
                                        Have discussions about virtually anything else. This is an open space; be you!
                                    </p>
                                    <div className="do-button-forum-guide forum-to-passions-btn">
                                        <Link className="btn btn-outline-secondary forum-guide-to-forum-button" to={"/Discussions"}>
                                            Discuss With the Communtiy
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
