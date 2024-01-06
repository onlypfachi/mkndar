import React from 'react'
// import '../styles/Home.css'

function SearchBar() {

    let locations = ["Harare", "Mutare", "Bulawayo", "Rusape", "VictoriaFalls"];

    return (
        <div className="mt-6 text-lg leading-8 text-gray-600 border border-5px justify-items-center ">
            <form className="text-lg leading-8 text-gray-600 height-100% grid grid-cols-3 gap-4 justify-items-center align-items-center mx-auto" >
                <input type="search" placeholder="search here" className="p-4 h-100% " />
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