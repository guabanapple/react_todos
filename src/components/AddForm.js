import React, { useState } from "react";

export default function AddForm(props) {
  const [title, setTitle] = useState("");

  const handleFormChange = (e) => {
    setTitle(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    props.onSubmit(title);
    setTitle("");
  };

  return (
    <form>
      <input type="text" value={title} onChange={handleFormChange} />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}
