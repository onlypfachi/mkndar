import React from "react";
import JobCard from "../components/jobs/JobCard";
import FilterBar from "../components/jobs/FilterBar"; // Capitalized import for FilterBar

const Jobs = () => {
  const topics = ["success", "failure", "yellow", "yellow"];
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const color = "#" + randomColor;

  const items = [
    {
      id: 1,
      title: "Back End Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      offer: "$120k – $140k",
      closingDate: "Closing on January 9, 2020",
    },
    {
      id: 2,
      title: "Front End Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      offer: "$120k – $140k",
      closingDate: "Closing on January 9, 2020",
    },
    {
      id: 3,
      title: "User Interface Designer",
      department: "Design",
      type: "Full-time",
      location: "Remote",
      offer: "$120k – $140k",
      closingDate: "Closing on January 9, 2020",
    },
    {
      id: 3,
      title: "User Interface Designer",
      department: "Design",
      type: "Full-time",
      location: "Remote",
      offer: "$120k – $140k",
      closingDate: "Closing on January 9, 2020",
    },
    {
      id: 3,
      title: "User Interface Designer",
      department: "Design",
      type: "Full-time",
      location: "Remote",
      offer: "$120k – $140k",
      closingDate: "Closing on January 9, 2020",
    },
  ];

  return (
    <section className="flex gap-5 flex-col m-auto mt-20 ">
      <div id="pageTitle" className="h-36 text-center w-full z-99 mb-10">
        <h3 className="h-12 text-4xl font-bold">
          Discover Jobs hiring in your city
        </h3>
        <p className="text-sm not-italic">
          Stay updated with the latest tech insights and trends.
        </p>
        <FilterBar />
      </div>
      <div className="grid gap-6 mt-6 ">
        {items.map((item) => (
          <JobCard key={item.id} job={item} />
        ))}
      </div>
      <h1 className="text-center">Related Jobs</h1>
      <div className="grid gap-4 mt-4 ">
        {items.map((item) => (
          <JobCard key={item.id} job={item} />
        ))}
      </div>
    </section>
  );
}

export default Jobs;
