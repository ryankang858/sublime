import { useState } from "react";
import axios from "axios";

export const Form = () => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("")
    const [type, setType] = useState("");
    const [topic, setTopic] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = { name, comment, type, topic, date: new Date().toISOString().slice(0, 19).replace('T', ' ') }

        console.log("payload", payload);

        if (!name) {
            console.error("Name/Anonymous is required");
            setError("Name/Anonymous is required")
            return;
        }

        if (!comment) {
            console.error("Comment is required");
            setError("Comment is required")
            return;
        }

        if (!type) {
            console.error("Section data is missing");
            setError("Section is required")
            return;
        }

        if (!topic) {
            console.error("Topic is required");
            setError("Topic is required")
            return;
        }

        const res = await axios.post("/api/comments", JSON.stringify(payload), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res);
    }

    const renderError = () => {
        let result = null;

        if (error) {
            result = (
                <div className="error-message">
                    {error}
                </div>
            )
        }

        return result
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="inputName" className="form-label">Name</label>
                <input type="text" className="form-control" name="inputName" aria-describedby="emailHelp" value={name} onChange={
                    (e) => {
                        setName(e.target.value)
                    }
                }></input>
                <input type="checkbox" className="anonymousCheck" name="anonymousCheck" value={name} onChange={
                    (e) => {
                        setName("Anonymous")
                    }
                } />
                <label className="anonymous-check-label" htmlFor="anonymousCheck">Post anonymously</label>
            </div>
            <div className="mb-3">
                <label htmlFor="inputEntry" className="form-label">Comment</label>
                <textarea type="entry" className="form-control" name="inputEntry" placeholder="Say something..." value={comment} onChange={
                    (e) => {
                        setComment(e.target.value)
                    }
                } />
            </div>
            <div>
                <label htmlFor="inputType" className="form-label">Section</label>
                <select name="inputType" className="form-select" value={type} onChange={
                    (e) => {
                        setType(e.target.value)
                    }
                }>
                    <option>Select one</option>
                    <option>Discussions</option>
                    <option>Passions</option>
                    <option>Actions</option>
                </select>
            </div>
            <div>
                <label htmlFor="inputTopic" className="form-label">Topic</label>
                <select name="inputTopic" className="form-select" value={topic} onChange={
                    (e) => {
                        setTopic(e.target.value)
                    }
                }>
                    <option>Select one</option>
                    <option>Sports</option>
                    <option>Music</option>
                    <option>Arts & Crafts</option>
                    <option>Gaming</option>
                    <option>School</option>
                    <option>Tech & Engineering</option>
                    <option>Science</option>
                    <option>Math</option>
                    <option>Humanities & History</option>
                    <option>Photography & Videography</option>
                    <option>Other</option>
                </select>
            </div>
            <button type="submit" className="blue-submit-button">Submit</button>
            {renderError()}
        </form>
    );
};