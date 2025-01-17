import React, { useEffect, useState } from 'react';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';

export const FetchDataCompo = () => {
  const [todos, setTodos] = useState([]); // State to store todos
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  // Fetch the todo data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/v1/getTodo");
        const data = await res.json();

        if (res.ok) {
          setTodos(data.data); // Set the fetched todos to state
        } else {
          setError("Failed to fetch data");
        }
      } catch (err) {
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <div>
      <Header />

      <div className='Fetch-data-display'>
        <h1></h1>
        <h2>Feedback Data Here</h2>
         
        {/* Display the error if there is one */}
        {error && <div>{error}</div>}

        {/* If loading, show loading message */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          // If data is fetched, display it in a table format
          <div>
            <table border="1" className='table'>
              <thead>
                <tr>
                  {/* <th>ID</th> */}
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((item) => (
                  <tr key={item._id}>
                    {/* <td>{todo._id}</td> */}
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
