import React from "react";

function MiniJobCard() {
  return (
    <a href="#">
      <div className="bg-white rounded-lg shadow-lg p-4 h-64 border-2 border-sky-600">
        <h3 className="bold text-2xl border-b-4 border-black ">
          <a href="tadiwapfachi.dev">
            Full Stack Software Engineer Graduate Intern
          </a>
        </h3>
        <p className="text-sm p-4 text-left">
          this is where a short description of the job post are found this is
          where a short description of the job post are found this is where a
          short description of the job post are found
        </p>
        <span className="flex justify-between">
          <button className="underline">Econet Zimbabwe</button>
          <code>posted last week</code>
        </span>
      </div>
    </a>
  );
}

export default MiniJobCard;
