import { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "../components/Form";

export const Actions = () => {
    const [comments, setComments] = useState([]);
    const [gaming, setGaming] = useState([]);
    const [music, setMusic] = useState([]);
    const [sports, setSports] = useState([]);
    const [artsandcrafts, setArtsAndCrafts] = useState([]);
    const [userChoice, setUserChoice] = useState("Comments");

    useEffect(() => {
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

            console.log(actionComments);

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
            setGaming(gamingData);
            setMusic(musicData);
            setComments(actionComments);
            setSports(sportsData);
            setArtsAndCrafts(artsandcraftsData);
        });
    }, []);

    const renderComents = (topic) => {
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
                <Form className="form" />
                <div className="btn-group forum-topic-buttons" role="group" aria-label="Basic example">
                    <button
                        onClick={() => handleChoiceSelection("Gaming")}
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
                        onClick={() => handleChoiceSelection("Sports")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Arts & Crafts
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("ArtsAndCrafts")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Gaming
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("ArtsAndCrafts")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        School
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("ArtsAndCrafts")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Tech & Engineering
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("ArtsAndCrafts")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Science
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("ArtsAndCrafts")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Math
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("ArtsAndCrafts")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Humanities & History
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("ArtsAndCrafts")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Photography & Videography
                    </button>
                    <button
                        onClick={() => handleChoiceSelection("ArtsAndCrafts")}
                        type="button"
                        className="btn btn-primary btn-topics"
                    >
                        Other
                    </button>
                </div>

                <div>{renderComents(userChoice)}</div>
            </div>
        </>
    );
};
