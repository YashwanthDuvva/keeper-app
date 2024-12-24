import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          onChange={props.changeFunc}
          name="title"
          placeholder="Title"
          value={props.title}
        />
        <textarea
          onChange={props.changeFunc}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.content}
        />
        <button onClick={props.addFunc}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
