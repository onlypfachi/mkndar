import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { db } from "../firebase-config";

function Home() {
  const [quote, setQuote] = useState("");

  // Fetch quotes from API
  useEffect(() => {
    async function getQuote() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      // Generate random index
      const index = Math.floor(Math.random() * data.length);

      // Set quote text
      setQuote(data[index].text);
    }
console.log(db);
    // Call getQuote initially and every 50 seconds
    getQuote();
    const interval = setInterval(getQuote, 50000);

    // Clear interval on unmount
    return () => clearInterval(interval);
  }, []);
         let locations = ["Harare", "Mutare", "Bulawayo", "Rusape", "VictoriaFalls"];
  return (
    <div className="homepageBackground">
      <div className="motivationalQuoteWrapper">
        <h2 className="quote"><center>{quote}</center></h2>
      </div>
      <form className="searchBarWrapper">
        <input type="search" placeholder="search here" className="jobtype" />
        <select className="jobLocation">
          <option value="">Select location</option>
          {locations.map((location) => {
            return (
              <option key={location} value={location}>
                {location}
              </option>
            );
          })}
        </select>
        <button type="submit" className="jobSearch">
          Search
        </button>
      </form>
    </div>
  );
}

export default Home;
