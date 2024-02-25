import React from 'react'
// import '../styles/Home.css'

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
        "IT Support Specialist"
    ];

    return (
        <div className="mt-6 text-lg leading-8 text-gray-600 border border-5px justify-items-center h-full">
            <form className="text-lg leading-8 text-gray-600 height-100% grid grid-cols-3 gap-4 justify-items-center align-items-center mx-auto" >
                <select className="p-4 h-100%">
                    <option value="">Select job</option>
                    {techJobs.map((job) => {
                        return (
                            <option key={job} value={job}>
                                {job}
                            </option>
                        );
                    })}
                </select>
                <select className="p-4 h-100%">
                    <option value="">Select location</option>
                    {locations.map((location) => {
                        return (
                            <option key={location} value={location}>
                                {location}
                            </option>
                        );
                    })}
                </select>
                <button type="submit" className="p-4 h-100%  ">
                    Search
                </button>
            </form>
        </div>

    )
}

export default SearchBar