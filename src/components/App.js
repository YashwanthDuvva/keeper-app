import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [noteContent, SetNoteContent] = useState({
    title: "",
    content: "",
  });

  const [noteItems, setNoteItems] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    SetNoteContent((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function addNoteItems(event) {
    event.preventDefault();
    setNoteItems((prevValue) => {
      return [...prevValue, noteContent];
    });
    SetNoteContent({
      title: "",
      content: "",
    });
  }

  function deleteNoteItem(id) {
    setNoteItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  //components

  return (
    <>
    
      <Header />
      <CreateArea
        changeFunc={handleChange}
        addFunc={addNoteItems}
        title={noteContent.title}
        content={noteContent.content}
      />
      {noteItems.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            deleteFunc={deleteNoteItem}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
