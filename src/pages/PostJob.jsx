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
        className=" mt-20 w-[1100px] bg-white border border-4 rounded-lg h-full overflow-auto"
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
          <p className="text-sm text-left ml-5 mb-4">
            A job title must describe one position only
          </p>
          <textarea
            type="text"
            className="w-2/5 self-end mr-10"
            name="jobTitle"
            placeholder="e.g. Kitchen staff"
          ></textarea>
        </div>
        <div className="flex flex-col items-left justify-center border-b-2 border-black">
          <label for="jobTitle" className="ml-5 text-left text-2xl">
            Qualifications
          </label>
          <p className="text-sm text-left ml-5 mb-4">
            A job title must describe one position on
          </p>
          <textarea
            type="text"
            className="w-2/5 self-end mr-10"
            name="jobTitle"
            placeholder="e.g. Kitchen staff"
          ></textarea>
        </div>
        <fieldset className="flex flex-col items-left justify-center border-b-2 border-black">
          <legend>Employment type</legend>
          <div>
            <input type="checkbox" id="coding" name="interest" value="coding" />
            <label for="coding">Full time</label>
          </div>
          <div>
            <input type="checkbox" id="music" name="interest" value="music" />
            <label for="music">Part time</label>
          </div>
          <div>
            <input type="checkbox" id="coding" name="interest" value="coding" />
            <label for="coding">On demand</label>
          </div>
          <div>
            <input type="checkbox" id="music" name="interest" value="music" />
            <label for="music">Negotiable</label>
          </div>
        </fieldset>
        <div className="flex flex-col items-left justify-center border-b-2 border-black">
          <label for="jobTitle" className="ml-5 text-left text-2xl">
            Working Schedule
          </label>
          <p className="text-sm text-left ml-5 mb-4">
            You can pick multiple work schedules
          </p>
          <select
            type="text"
            className="w-2/5 self-end mr-10"
            name="jobTitle"
            placeholder="e.g. Kitchen staff"
          ></select>
        </div>
        <div className="flex flex-col items-left justify-center border-b-2 border-black">
          <label for="jobTitle" className="ml-5 text-left text-2xl">
            Salary
          </label>
          <p className="text-sm text-left ml-5 mb-4">
            Choose how you prefer to pay for this job
          </p>
          <select
            type="text"
            className="w-2/5 self-end mr-10"
            name="jobTitle"
            placeholder="e.g. Kitchen staff"
          ></select>
        </div>
        <div className="flex flex-col items-left justify-center border-b-2 border-black">
          <h1>Multiple candidates?</h1>
          <div className="items-left">
            <input type="checkbox" id="music" name="interest" value="music" />
            <label for="music">Yes, I am hiring multiple candidates</label>
          </div>
        </div>

        <button type="submit">Post Job</button>
      </form>
    </main>
  );
}

export default PostJobs;
