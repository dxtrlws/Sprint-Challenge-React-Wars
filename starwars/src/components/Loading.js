import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading">
      <h2>Loading... </h2>
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-yellow-only">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
