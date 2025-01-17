import React, { useState } from "react";

const CreateTodo = () => {
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
        alert("Todo created successfully!");
      } else {
        alert("Failed to create Todo");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred!");
    }
  };

  return (
    <div>
      <h1>Create Todo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Create Todo</button>
      </form>

      {
        response && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CreateTodo;
