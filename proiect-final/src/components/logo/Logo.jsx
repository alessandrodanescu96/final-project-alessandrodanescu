import React, { useState } from "react";

function Logo(props) {
  const [dataLogo] = useState([
    {
      id: 1,
      name: "Singer",
    },
    {
      id: 2,
      name: "Artist",
    },
    {
      id: 3,
      name: "Actor",
    },
    {
      id: 4,
      name: "Songwriter",
    },
    {
      id: 5,
      name: "Singer",
    },
    {
      id: 6,
      name: "Artist",
    },
    {
      id: 7,
      name: "Actor",
    },
    {
      id: 8,
      name: "Songwriter",
    },
    {
      id: 9,
      name: "Singer",
    },
    {
      id: 10,
      name: "Artist",
    },
  ]);
  return (
    <section className="logo-slider">
      <div className="logo-slider-wrap">
        <div className="logo-slider-inner">
          {dataLogo.map((idx) => (
            <h3 key={idx.id}>{idx.name}</h3>
          ))}
        </div>
        <div className="logo-slider-inner style-2">
          {dataLogo.map((idx) => (
            <h3 key={idx.id}>{idx.name}</h3>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Logo;
