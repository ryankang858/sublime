import { useEffect, useState } from "react";
import axios from "axios";
export const Passions = () => {
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

      const passionComments = data.filter(
        (comment) => comment.type === "passions"
      );

      console.log(passionComments);

      const gamingData = passionComments.filter(
        (comment) => comment.topic === "Gaming"
      );
      const musicData = passionComments.filter(
        (comment) => comment.topic === "Music"
      );
      const sportsData = passionComments.filter(
        (comment) => comment.topic === "Sports"
      );
      const artsandcraftsData = passionComments.filter(
        (comment) => comment.topic === "ArtsAndCrafts"
      );
      setGaming(gamingData);
      setMusic(musicData);
      setComments(passionComments);
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
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          onClick={() => handleChoiceSelection("Gaming")}
          type="button"
          className="btn btn-primary"
        >
          Gaming
        </button>
        <button
          onClick={() => handleChoiceSelection("Music")}
          type="button"
          className="btn btn-primary"
        >
          Music
        </button>
        <button
          onClick={() => handleChoiceSelection("Sports")}
          type="button"
          className="btn btn-primary"
        >
          Sports
        </button>
        <button
          onClick={() => handleChoiceSelection("ArtsAndCrafts")}
          type="button"
          className="btn btn-primary"
        >
          Arts & Crafts
        </button>
      </div>

      <div>{renderComents(userChoice)}</div>
    </>
  );
};
