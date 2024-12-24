import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.deleteFunc(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
