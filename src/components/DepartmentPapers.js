import React, { useState, useEffect } from "react";

function DepartmentPapers({ department }) {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch papers from the backend
    const fetchPapers = async () => {
      try {
        const response = await fetch("https://jupaperbackend-15hi.onrender.com/get-papers");
        if (!response.ok) {
          throw new Error("Failed to fetch papers");
        }
        const data = await response.json();
        console.log(data.data)
        const data1=data.data;
        // Manually filter papers by department using a for loop
        const filteredPapers = [];
        for (let i = 0; i < data1.length; i++) {
           
          if (data1[i].department === department) {
            filteredPapers.push(data1[i]);
            console.log(filteredPapers)
          }
        }

        setPapers(filteredPapers);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPapers();
  }, [department]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className="Department-Papers">
      <div className="paper-content"> 
      <h1>Papers for Department: {department}</h1>
      {papers.length > 0 ? (
        <ul>
          {papers.map((paper) => (
            <li key={paper._id}>
              <h3>{paper.title}</h3>
              <p>
                <strong>Author:</strong> {paper.author}
              </p>
              <p>
                <strong>Year:</strong> {paper.year}
              </p>
              <p>
                <strong>Abstract:</strong> {paper.abstract}
              </p>
              <a href={paper.url} target="_blank" rel="noopener noreferrer">
                Read Paper
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No papers found for the {department} department.</p>
      )}
    </div>
      </div>
  );
}

export default DepartmentPapers;
