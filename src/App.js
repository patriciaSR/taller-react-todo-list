import React, { useState } from "react";
import Item from "./components/Item";
import ItemForm from "./components/ItemForm";
import './App.css';

function App() {
  const [items, setItems] = useState([
    {
      content: "📘 Aprender React",
      isCompleted: false
    },
    {
      content: "⚛️ Crear mi primera aplicación",
      isCompleted: false
    },
    {
      content: "🚀 Subirla a GitHub",
      isCompleted: false
    }
  ]);

  const addItem = content => {
    const newItems = [...items];
    newItems.unshift({ content: content, isCompleted: false });
    setItems(newItems);
  };

  const completeItem = (index) => {
    const newItems = [...items];
    newItems[index].isCompleted = !newItems[index].isCompleted;
    setItems(newItems);
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    console.log('yay!');
    setItems(newItems);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ItemForm addItem={addItem} />
      <ul className="ItemList">
        {items.map((item, index) => (
          <Item
            key={index}
            index={index}
            content={item.content}
            completeItem={completeItem}
            isCompleted={item.isCompleted}
            deletItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
