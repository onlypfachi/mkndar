import { React } from "react";

function PostJobs() {
  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
    console.log(query);
  }
  return (
    <main className="bg-sky-500 h-dvh flex flex-col items-center ">
      <form
        action={search}
        className=" mt-20 w-[1100px] bg-white border border-4 rounded-lg h-full"
      >
        <div className="flex flex-col items-left justify-center border-b-2 border-black">
          <label for="jobTitle" className="ml-5 text-left text-2xl">
            Job Title
          </label>
          <input
            type="text"
            className="w-2/5 self-end mr-10"
            name="jobTitle"
            placeholder="e.g. Kitchen staff"
          ></input>
          <p className="text-sm text-left ml-5 mb-4">
            A job title must describe one position only
          </p>
        </div>
        <div className="flex flex-col items-left justify-center border-b-2 border-black">
          <label for="jobTitle" className="ml-5 text-left text-2xl">
            Job description
          </label>
          <textarea
            type="text"
            className="w-2/5 self-end mr-10"
            name="jobTitle"
            placeholder="e.g. Kitchen staff"
          ></textarea>
          <p className="text-sm text-left ml-5 mb-4">
            A job title must describe one position only
          </p>
        </div>
        <div className="flex flex-col items-left justify-center border-b-2 border-black">
          <label for="jobTitle" className="ml-5 text-left text-2xl">
            Qualifications
          </label>
          <textarea
            type="text"
            className="w-2/5 self-end mr-10"
            name="jobTitle"
            placeholder="e.g. Kitchen staff"
          ></textarea>
          <p className="text-sm text-left ml-5 mb-4">
            A job title must describe one position on
          </p>
        </div>
        <div className="flex flex-col items-left justify-center border-b-2 border-black">
          <label for="jobTitle" className="ml-5 text-left text-2xl">
            Qualifications 
          </label>
          <textarea
            type="text"
            className="w-2/5 self-end mr-10"
            name="jobTitle"
            placeholder="e.g. Kitchen staff"
          ></textarea>
          <p className="text-sm text-left ml-5 mb-4">
            A job title must describe one position on
          </p>
        </div>
        <input name="query" />
        <button type="submit">Search</button>
      </form>
    </main>
  );
}

export default PostJobs;
