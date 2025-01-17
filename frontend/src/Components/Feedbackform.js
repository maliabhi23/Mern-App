import React, { useState } from "react";

const Feedbackform = () => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const res = await fetch("http://localhost:3000/api/v1/createTodo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        setResponse(data);
        alert("Submitted Successfully");
      } else {
        alert("Failed to submit ");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred!");
    }
  };

  return (
    <div className="feedbackform">
      
      <form onSubmit={handleSubmit} className="forms">
        <div className="form-content">
          <label className="email">Email:</label>
          <input className="input-field"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-content">
          <label className="description">Description:</label>
          <textarea className="input-field"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submitbtn">Submit the Feedback</button>
      </form>

      {/* {
        response && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
};

export default Feedbackform;
