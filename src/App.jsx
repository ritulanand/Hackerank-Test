import './App.css';
import { useEffect, useState } from 'react';
import SearchCustomer from "./SearchCustomer";

function App() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://dummyjson.com/users?limit=${pageSize}&skip=${(page - 1) * pageSize}`);
      const response = await data.json();
      setUsers(response.users);
      setTotal(response.total);
    };
    fetchData();
  }, [page]);

  const totalPages = Math.ceil(total / pageSize);

  return (
    <>
    <h1>SearchCustomer</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <SearchCustomer customers={users} setInput={input} />
      <div style={{ marginTop: 16 }}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
        <span style={{ margin: "0 8px" }}>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
      </div>
    </>
  );
}

export default App