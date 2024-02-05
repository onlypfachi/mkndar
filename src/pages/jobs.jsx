import React from "react";
// import img from "../images/bgg.jpg";
import MiniJobCard from "../components/jobs/MiniJobCard";

function jobs() {
  const topics = ["success", "failure", "yellow", " yellow"];
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const color = "#" + randomColor;

  return (
    <main className="flex gap-5 flex-col relative">
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
        className="grid h-dvh gap-5 bg-white grid-cols-13 w-4/5 m-auto "
      >
        <div className="col-start-1 col-span-4 bg-green-500 h-full">
          <MiniJobCard />
          <MiniJobCard />
          <MiniJobCard />
          <MiniJobCard />
          <MiniJobCard />
          <MiniJobCard />
        </div>
        <div className="col-start-5 col-span-6 bg-black"></div>
      </section>
    </main>
  );
}

export default jobs;
