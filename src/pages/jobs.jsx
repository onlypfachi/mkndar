import React from "react";
// import img from "../images/bgg.jpg";
import MiniJobCard from "../components/jobs/MiniJobCard";

function Jobs() {
  const topics = ["success", "failure", "yellow", " yellow"];
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const color = "#" + randomColor;

  return (
    <section className="flex gap-5 flex-col relative m-auto mt-20 ">
      <div id="pageTitle" className="mt-20 h-36 text-center w-full z-99 mb-10">
        <h3 className="h-12 text-4xl font-bold">
          Discover Jobs hiring in your city
        </h3>
        <p className="text-sm not-italic">
          Stay updated with the latest tech insights and trends.
        </p>
        <div className="mt-8 ">
          topics :{" "}
          {topics.map((topic) => {
            return (
              <button
                type="button"
                class={`bg-${color}`}
                className="ml-2 h-8 inline-block rounded bg-info px-6 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
              >
                {topic}
              </button>
            );
          })}
        </div>
      </div>
      <section
        id="jobs"
        className="grid h-dvh gap-5 bg-white grid-cols-12 w-4/5 m-auto max-h-dvh"
      >
        <div className="col-start-1 bg-blue-50 col-span-4 max-h-dvh overflow-auto grid gap-5">
          <MiniJobCard />
          <MiniJobCard />
          <MiniJobCard />
          <MiniJobCard />
          <MiniJobCard />
          <MiniJobCard />
          <MiniJobCard />
          <MiniJobCard />
          <MiniJobCard />
          <MiniJobCard />
          <MiniJobCard />
        </div>
        <div className="col-start-5 col-span-7 bg-white max-h-dvh overflow-auto border border-black rounded-lg shadow-lg ">
          <div className=" h-48 p-4 border-b-2 border-black">
            <h3 className="capitalize font-semibold text-2xl">
              Full Stack Software Engineer Graduate Intern.
            </h3>
            <p className="text-sm text-left">Location: Remote</p>
            <p className="text-sm text-left">Salary: $700</p>
            <p className="text-sm text-left">Job type: Full time</p>
            <button
              type="button"
              className="mt-2 h-10 inline-block rounded px-6 text-xl font-bold uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#54b4d3] bg-indigo-500"
            >
              Apply Now
            </button>
          </div>
          <div className=" mt-2 h-5/6 p-4">
            <h3 className="text-2xl font-medium text-left">Job details</h3>
            <h4 className="text-xl font-medium text-left">Job Description</h4>
            <p className="text-sm font-medium text-left mt-4 mb-2">
              This is an internship position where you will gain experience in
              developing and deploying deep learning models using web
              applications. We are committed to providing you with guidance and
              mentorship to help you excel in your software engineering career.
              If you are passionate about software development, and you want to
              contribute to real-world applications, we encourage you to apply
              for this Full Stack Software Engineer Intern position. Join our
              team and be part of building innovative software solutions.
              Candidate must exhibit the following behavioral traits/skills:
              Problem-solving and analytical skills. Communication and teamwork
              abilities. This is a 3 to 6 months fulltime (40hrs a week)
              internship. No relocation available. #DesignEnablement
            </p>
            <h4 className="text-xl font-medium text-left">Qualifications</h4>
            <p className="text-sm font-medium text-left mt-4 mb-2">
              Minimum qualifications are required to be initially considered for
              this position. Preferred qualifications are in addition to the
              minimum requirements and are considered a plus factor in
              identifying top candidates. Minimum Qualifications:{" "}
              <li className="mt-2 ml-4">
                Candidate must be actively pursuing a MS degree in Computer
                Science, Software Engineering, Computer Engineering, or a
                related field. 6+ months of experience in the following:
                Programming skills in languages such as JavaScript, PHP or
                Python.
              </li>
              <li className="mt-2 ml-4">
                Candidate must be actively pursuing a MS degree in Computer
                Science, Software Engineering, Computer Engineering, or a
                related field. 6+ months of experience in the following:
                Programming skills in languages such as JavaScript, PHP or
                Python.
              </li>
              <li className="mt-2 ml-4">
                Candidate must be actively pursuing a MS degree in Computer
                Science, Software Engineering, Computer Engineering, or a
                related field. 6+ months of experience in the following:
                Programming skills in languages such as JavaScript, PHP or
                Python.
              </li>
              <li className="mt-2 ml-4 ">
                Candidate must be actively pursuing a MS degree in Computer
                Science, Software Engineering, Computer Engineering, or a
                related field. 6+ months of experience in the following:
                Programming skills in languages such as JavaScript, PHP or
                Python.
              </li>
              <li className="mt-2 ml-4 ">
                Candidate must be actively pursuing a MS degree in Computer
                Science, Software Engineering, Computer Engineering, or a
                related field. 6+ months of experience in the following:
                Programming skills in languages such as JavaScript, PHP or
                Python.
              </li>
              <li className="mt-2 ml-4 ">
                Candidate must be actively pursuing a MS degree in Computer
                Science, Software Engineering, Computer Engineering, or a
                related field. 6+ months of experience in the following:
                Programming skills in languages such as JavaScript, PHP or
                Python.
              </li>
              Experience with web development technologies in HTML, CSS, and
              JavaScript. Familiarity with front-end frameworks in one of t
              React, Angular, or Vue.js. Experience with server-side programming
              languages and frameworks (e.g., Python/Django, Node.js/Express).
              Familiarity with databases and SQL. Understanding of web
              application development and deployment concepts. Familiarity with
              version control systems (e.g., Git). Preferred Qualifications: 6+
              months of experience in the following: Experience in web
              frameworks (e.g., Flask/FastAPI/Express.js/Laravel). Familiarity
              with CI/CD concepts and tools like Jenkins. Knowledge of scalable
              and performant web application development. Familiarity with
              containerization technologies like Docker. Understanding of
              software testing methodologies and tools. Knowledge of RESTful
              APIs and backend development. Familiarity with data storage and
              retrieval systems (e.g., relational databases, NoSQL). Exposure to
              DevOps practices.
            </p>
            <h4 className="text-xl font-medium text-left">About Employer</h4>
            <p className="text-sm font-medium text-left mt-4 mb-2">
              As the world's largest chip manufacturer, Intel strives to make
              every facet of semiconductor manufacturing state-of-the-art - from
              semiconductor process development and manufacturing, through yield
              improvement to packaging, final test and optimization, and world
              class Supply Chain and facilities support. Employees in the
              Technology Development and Manufacturing Group are part of a
              worldwide network of design, development, manufacturing, and
              assembly/test facilities, all focused on utilizing the power of
              Moore’s Law to bring smart, connected devices to every person on
              Earth.
            </p>
            <h4 className="text-xl font-medium text-left">More Info</h4>
            <p className="text-sm font-medium text-left mt-4 mb-2">
              As the world's largest chip manufacturer, Intel strives to make
              every facet of semiconductor manufacturing state-of-the-art - from
              semiconductor process development and manufacturing, through yield
              improvement to packaging, final test and optimization, and world.
            </p>
            <button
              type="button"
              className="mt-2 h-10 inline-block rounded px-6 text-xl font-bold uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#54b4d3] bg-indigo-500 mb-4"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Jobs;
