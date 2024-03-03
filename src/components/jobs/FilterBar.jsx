import React from "react";
import * as Styled from "../../styles/jobs";

export const FilterBar = () => {
  const locations = ["harare", "mutare"];
  return (
    <Styled.Container>
      <form className="flex gap-2 p-8">
        <select className="p-4 rounded-lg border border-gray-300 w-40">
          <option value="">Select location</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <select className="p-4 rounded-lg border border-gray-300 w-40">
          <option value="">Select location</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <select className="p-4 rounded-lg border border-gray-300 w-40">
          <option value="">Select location</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <select className="p-4 rounded-lg border border-gray-300 w-40">
          <option value="">Select location</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        <div className="flex gap-2">
        {/* <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md p-2"
        /> */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Filter
        </button>
      </div>
      </form>
    </Styled.Container>
  );
};

export default FilterBar;
