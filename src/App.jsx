import axios from "axios";
import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";
import "../src/css/style.css";


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  // console.log(users);

  return (
    <div>
      <h1>INFINITY DIGITAL TECH</h1>
      <UsersList users={users} />
    </div>
  );
}

export default App;
