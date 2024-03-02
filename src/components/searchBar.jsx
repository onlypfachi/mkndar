import React from "react";
import { FcSearch } from "react-icons/fc";

function SearchBar() {
  let locations = ["Harare", "Mutare", "Bulawayo", "Rusape", "VictoriaFalls"];
  let techJobs = [
    "Full-Stack Developer",
    "Front-End Developer",
    "Back-End Developer",
    "Mobile App Developer",
    "DevOps Engineer",
    "Data Scientist",
    "Data Analyst",
    "Machine Learning Engineer",
    "Cybersecurity Analyst",
    "Network Engineer",
    "Cloud Security Engineer",
    "UX/UI Designer",
    "Technical Writer",
    "Quality Assurance Engineer",
    "Product Manager",
    "Blockchain Developer",
    "AR/VR Developer",
    "AI Ethics Specialist",
    "IT Project Manager",
    "IT Support Specialist",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="mt-6 rounded-lg bg-white shadow-lg p-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4 justify-items-center">
        <select className="p-4 rounded-lg border border-gray-300">
          <option value="">Select job</option>
          {techJobs.map((job) => (
            <option key={job} value={job}>
              {job}
            </option>
          ))}
        </select>
        <select className="p-4 rounded-lg border border-gray-300 w-full">
          <option value="">Select location</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 flex items-center"
        >
          <FcSearch className="mr-2" />
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
