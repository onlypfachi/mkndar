import React from "react";
import Blogpost from "../components/blogpage/blogpost";

export default function BlogsPage() {
  const topics = ["success", "failure", "yellow", " yellow"];
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const color = "#" + randomColor;

  return (
    <main id="pageTitle" className="grid mt-20 h-36 text-center grid-cols-10">
      <div className="col-start-4 col-span-4">
        <h3 className="h-12 text-4xl font-bold">Discover the Best Blogs</h3>
        <p className="text-sm not-italic">
          Stay updated with the latest tech insights and trends.
        </p>
      </div>
      <div className="mt-8 col-start-4 col-span-4" id="topics" >
        topics :{" "}
        {topics.map((topic) => {
          return (
            <button
              type="button"
              class={`bg-${color}`}
              className={`ml-2 h-8 bg-[${color}]-100 inline-block rounded bg-info px-6 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]`}
            >
              {topic}
            </button>
          );
        })}
      </div>
      <section id="blogs" className="h-dvh  bg-green-900 flex gap-5 col-start-3 col-span-5 mt-6">
        <Blogpost />
      </section>
    </main>
  );
}
