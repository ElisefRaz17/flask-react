import React, { useEffect, useState } from "react";
import styles from "./App.css";
function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quotePlaceholder, setQuotePlaceholder] = useState("");
  const quotes = [
    {
      id: 2,
      item: "What are the best ways to prepare for technical interview?",
    },
    { id: 3, item: "What is 100 * 100?" },
    { id: 4, item: "What are some recommended healthy dinner recipes?" },
    { id: 5, item: "What are the best ways to relax?" },
    { id: 6, item: "What are top 10 popular comedy movies?" },
  ];
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuotePlaceholder(quotes[randomIndex]);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <div className="main">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-header">
          <h1>Personal AI Assistant</h1>
          <h4>Ask any question below and the answer will be appear</h4>
        </div>
        <textarea
          type="text"
          value={prompt}
          placeholder={quotePlaceholder.item}
          rows={4}
          cols={30}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
      <div className="result-container">
        {loading ? (
          <p style={{ padding: 20 }}>Loading...</p>
        ) : (
          <p className="result">{response["data"]}</p>
        )}
      </div>
    </div>
  );
}

export default App;
