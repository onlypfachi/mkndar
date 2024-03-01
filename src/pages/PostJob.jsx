import React from "react";

function PostJobs() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const jobTitle = formData.get("jobTitle");
    const jobDescription = formData.get("jobDescription");
    const qualifications = formData.get("qualifications");
    const employmentType = formData.getAll("employmentType");
    const workingSchedule = formData.get("workingSchedule");
    const salary = formData.get("salary");
    const multipleCandidates = formData.get("multipleCandidates");

    // Do something with the form data, such as sending it to the server
    console.log({
      jobTitle,
      jobDescription,
      qualifications,
      employmentType,
      workingSchedule,
      salary,
      multipleCandidates
    });
  }

  return (
    <main className="bg-sky-500 h-screen flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[600px] bg-white border border-4 rounded-lg p-8"
      >
        <div className="mb-6">
          <label htmlFor="jobTitle" className="block text-2xl font-semibold">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            className="w-full border-2 border-gray-300 rounded-md py-2 px-4 mt-2"
            placeholder="e.g. Kitchen staff"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="jobDescription"
            className="block text-2xl font-semibold"
          >
            Job Description
          </label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            rows="4"
            className="w-full border-2 border-gray-300 rounded-md py-2 px-4 mt-2"
            placeholder="Enter job description"
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <label
            htmlFor="qualifications"
            className="block text-2xl font-semibold"
          >
            Qualifications
          </label>
          <textarea
            id="qualifications"
            name="qualifications"
            rows="4"
            className="w-full border-2 border-gray-300 rounded-md py-2 px-4 mt-2"
            placeholder="Enter qualifications"
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <fieldset>
            <legend className="text-2xl font-semibold">Employment Type</legend>
            <div>
              <input
                type="checkbox"
                id="fullTime"
                name="employmentType"
                value="Full Time"
              />
              <label htmlFor="fullTime" className="ml-2">
                Full Time
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="partTime"
                name="employmentType"
                value="Part Time"
              />
              <label htmlFor="partTime" className="ml-2">
                Part Time
              </label>
            </div>
            {/* Add more employment type options as needed */}
          </fieldset>
        </div>
        {/* Add more form fields as needed */}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-md"
        >
          Post Job
        </button>
      </form>
    </main>
  );
}

export default PostJobs;
