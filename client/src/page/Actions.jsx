import { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "../components/Form";

export const Actions = () => {
    const [comments, setComments] = useState([]);
    const [gaming, setGaming] = useState([]);
    const [music, setMusic] = useState([]);
    const [sports, setSports] = useState([]);
    const [artsandcrafts, setArtsAndCrafts] = useState([]);
    const [school, setSchool] = useState([]);
    const [techandengineering, setTechAndEngineering] = useState([]);
    const [science, setScience] = useState([]);
    const [math, setMath] = useState([]);
    const [humanitiesandhistory, setHumanitiesAndHistory] = useState([]);
    const [photographyandvideography, setPhotographyAndVideography] = useState([]);
    const [other, setOther] = useState([]);
    const [userChoice, setUserChoice] = useState("Comments");

    const onGetData = () => {
        axios.get("/api/comments").then((res) => {
            const data = res.data.sort((a, b) => {
                const keyA = new Date(a.date),
                    keyB = new Date(b.date);
                if (keyA < keyB) return 1;
                if (keyA > keyB) return -1;
                return 0;
            });

            console.log("data", data);

            const actionComments = data.filter(
                (comment) => comment.type === "Actions"
            );

            console.log("**********", actionComments);

            const gamingData = actionComments.filter(
                (comment) => comment.topic === "Gaming"
            );
            const musicData = actionComments.filter(
                (comment) => comment.topic === "Music"
            );
            const sportsData = actionComments.filter(
                (comment) => comment.topic === "Sports"
            );
            const artsandcraftsData = actionComments.filter(
                (comment) => comment.topic === "ArtsAndCrafts"
            );
            const schoolData = actionComments.filter(
                (comment) => comment.topic === "School"
            );
            const techandengineeringData = actionComments.filter(
                (comment) => comment.topic === "TechAndEngineering"
            );
            const scienceData = actionComments.filter(
                (comment) => comment.topic === "Science"
            );
            const mathData = actionComments.filter(
                (comment) => comment.topic === "Math"
            );
            const humanitiesandhistoryData = actionComments.filter(
                (comment) => comment.topic === "HumanitiesAndHistory"
            );
            const photographyandvideographyData = actionComments.filter(
                (comment) => comment.topic === "PhotographyAndVideography"
            );
            const otherData = actionComments.filter(
                (comment) => comment.topic === "Other"
            );
            setGaming(gamingData);
            setMusic(musicData);
            setComments(actionComments);
            setSports(sportsData);
            setArtsAndCrafts(artsandcraftsData);
            setSchool(schoolData);
            setTechAndEngineering(techandengineeringData);
            setScience(scienceData);
            setMath(mathData);
            setHumanitiesAndHistory(humanitiesandhistoryData);
            setPhotographyAndVideography(photographyandvideographyData);
            setOther(otherData);

        });
    }

    useEffect(() => {
        onGetData()
    }, []);

    const renderComments = (topic) => {
        let result = null;

        let data = null;

        switch (topic) {
            case "Music":
                data = music;
                break;
            case "Gaming":
                data = gaming;
                break;
            case "Sports":
                data = sports;
                break;
            case "ArtsAndCrafts":
                data = artsandcrafts;
                break;
            case "School":
                data = school;
                break;
            case "TechAndEngineering":
                data = techandengineering;
                break;
            case "Science":
                data = science;
                break;
            case "Math":
                data = math;
                break;
            case "HumanitiesAndHistory":
                data = humanitiesandhistory;
                break;
            case "PhotographyAndVideography":
                data = photographyandvideography;
                break;
            case "Other":
                data = other;
                break;
            default:
                data = comments;
                break;
        }

        if (data.length !== 0) {
            result = data.map((comment) => {
                return (
                    <div key={comment.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{comment.name}</h5>
                                <p className="card-text">{comment.comment}</p>
                                <p className="card-text">{comment.topic}</p>
                                <p className="card-text">{comment.date}</p>
                            </div>
                        </div>
                    </div>
                );
            });
        }

        return result;
    };

    const handleChoiceSelection = (topic) => {
        setUserChoice(topic);
    };

    return (
        <>
            <div className="form-div">
                <h1 className="forums-title">Actions</h1>
                <Form className="form" handleGetData={onGetData} />
                <div className="btn-group forum-topic-buttons" role="group" aria-label="Basic example">
                    <button
                        onClick={() => handleChoiceSelection("Sports")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Sports
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("Music")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Music
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("ArtsAndCrafts")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Arts & Crafts
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("Gaming")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Gaming
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("School")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        School
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("TechAndEngineering")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Tech & Engineering
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("Science")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Science
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("Math")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Math
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("HumanitiesAndHistory")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Humanities & History
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("PhotographyAndVideography")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Photography & Videography
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("Other")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Other
                    </button>
                </div>

                <div>{renderComments(userChoice)}</div>
            </div>
        </>
    );
};
