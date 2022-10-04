import React from "react";

const Favourites = (props) => {
  return (
    <>
      <div className="result-container">
        <div className="quote-author">{props.author}</div>
        <div className="quote-content">{props.content}</div>
        <div className="quote-extra">
          Quote length: {props.content.split(" ").length} words, tags:{" "}
          {props.tags?.toString().replace(",", ", ")}
        </div>
      </div>
    </>
  );
};

export default Favourites;
