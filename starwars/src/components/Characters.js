import React from "react";
import "./characters.css"

function Characters(props) {
  const { characters } = props;
  return (
    <div className="col s12 m6">
      <div className="card z-depth-4">
        <div className="card-content white-text">
        <span className="card-title">{characters.name}</span>
          <p><b>Height:</b> {characters.height} </p>
          <p><b>Gender:</b> {characters.gender} </p>
          <p><b>Hair Color:</b> {characters.hair_color} </p>
          <p><b>Skin Color:</b> {characters.skin_color} </p>
        </div>
      </div>
    </div>
  );
}

export default Characters;
