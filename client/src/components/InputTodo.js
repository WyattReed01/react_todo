import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <div>
        <h1 className="text-center mt-5"> Todo List</h1>
        <form className="d-flex mt-5" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={handleInput}
          />
          <button className="btn btn-success">Add</button>
        </form>
      </div>
    </Fragment>
  );
};

export default InputTodo;
