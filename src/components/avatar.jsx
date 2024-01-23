import React from "react";

function Avatar() {
  const name = "Tadiwanashe David";
  const getIntitials = (name) => {
    return name
      .split(" ")
      .map((name) => name[0])
      .join("");
  };
  function generateBackground(name) {
    let hash = 0;
    let i;

    for (i = 0; i < name.length; i += 1) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    // name.charCodeAt() return an int between 0 and 65535
    // left shift (<<)  operator moves to left by number of specified
    // bites after <<. The whole for loop will create a color hash
    // based on username length
    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }
  let initials = getIntitials(name);
  let color = generateBackground(name);
  const customStyle = {
    display: "flex",
    height: "100%",
    width: "100%",
    borderRadius: "100px",
    color: "white",
    background: color,
    margin: "auto",
    gridArea: "1 / 1 / 2 / 2",
  };
  return (
    <div style={customStyle}>
      <span style={{ margin: "auto" }}> {initials} </span>
    </div>
  );
}

export default Avatar;
