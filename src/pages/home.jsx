import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { db } from "../firebase-config";
import SearchBar from "../components/searchBar";
import RecentJobs from "../components/recentJobs";
import BlogCard from "../components/blogpage/blogCard";
import { quotes } from "../components/quotes";
import * as Styled from "../styles/homeStyles.jsx";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quote, setQuote] = useState("");

  // Fetch quotes from API
  useEffect(() => {
    async function getQuote() {
      const data = quotes;

      // Generate random index
      const index = Math.floor(Math.random() * data.length);

      // Set quote text
      setQuote(data[index].text);
    }

    // Call getQuote initially and every 50 seconds
    getQuote();
    const interval = setInterval(getQuote, 50000); // Changed to fetch every 50 seconds

    // Clear interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Styled.Container>
      <Styled.LandingPage>
        <div
          className=" inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 bg-red">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Great exposure for your job opening.{" "}
              <a href="/postJobs" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Click to post <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center ">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {quote}
            </h1>
            <SearchBar />
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </Styled.LandingPage>
      <RecentJobs />
      <BlogCard />
      {/* <div className="bg-red-200 overflow-hidden flex flex-col justify-center items-center h-full">
 
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    
  </div>
</div>  */}
    </Styled.Container>
  );
}
