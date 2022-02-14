import "./App.css";
import React, { useState } from "react";
import NewTodoItem from "./components/NewTodoItem";
import Todos from "./components/Todos";
let data = [
  {
    id: 1,
    title: "Pay Bills",
    des: "Bill Number: <Strong>12243234345</Strong> <br>  Bill Amount: <Strong>Rs 10000</Strong>",
  },
  {
    id: 2,
    title: "Read a Book",
    des: "Book Name: <Strong>Fear Not: Be Strong</Strong>",
  },
];
function App() {
  const [dataa, updatedata] = useState(data);
  const addtodo = (title, des) => {
    const obj = { id: Math.random(), title: title, des: des };
    updatedata((prev) => prev.concat(obj));
  };

  const removetodo = (id) => {
    const updateddata = dataa.filter((item) => item.id !== id);
    updatedata(updateddata);
    console.log(updateddata);
  };

  return (
    <div>
      <NewTodoItem add={addtodo} />
      <Todos data={dataa} remove={removetodo} />
    </div>
  );
}

export default App;
