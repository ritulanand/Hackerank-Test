
import './App.css';
import { useEffect, useState } from 'react';
import SearchCustomer from "./SearchCustomer";

function App() {

  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]); 

// const customers = [
//   { name: "Phil", age: 21, location: "New York", gender: "Male", income: "$13" },
//   { name: "Alice", age: 25, location: "Philadelphia", gender: "Female", income: "$20" },
//   { name: "John", age: 30, location: "Chicago", gender: "Male", income: "$15" },
//   { name: "Phip", age: 28, location: "Boston", gender: "Male", income: "$18" },
//   { name: "Steve", age: 22, location: "Phoenix", gender: "Male", income: "$12" },
// ];
useEffect(() => {
const fetchData = async () => {
  const data = await fetch("https://dummyjson.com/users");
  const response = await data.json();
  console.log("res", response);
  setUsers(response.users);
}
fetchData();
}, []);


  return (
    <>
    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <SearchCustomer customers={users}  setInput={input} />
    </>
  )
}

export default App
