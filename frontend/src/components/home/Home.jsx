import React, { useEffect, useState } from "react";
import Flag from "../flag/Flag";
import Task from "../task/Task";

const Home = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    date: "",
    user: "",
    important: "",
  });

  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isImportant, setIsImportant] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  const handleFlag = () => {
    setIsImportant(!isImportant);
  };

  useEffect(() => {
    getUserData();
    getTasksData();
  }, []);

  const getUserData = () => {
    fetch(`http://localhost:7878/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  const getTasksData = () => {
    fetch(`http://localhost:7878/tasks`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  };

  console.log(users);
  console.log(tasks);

  return (
    <div style={{
      marginTop: "50px"
    }}>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <div>
            <textarea onChange={handleChange} name="task" maxLength={200} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <p>Task</p>
              <p>{taskData.task.length}/200</p>
            </div>
          </div>
          <div>
            <input type="date" name="date" onChange={handleChange} style={{padding: "7px" , width: "150px"}}          />
            <p>Expiry Date</p>
          </div>
          <div>
            <select onChange={handleChange} name="user" style={{padding: "7px" , width: "150px"}}   >
              <option value="">select</option>

              {users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
            <p>Users</p>
          </div>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <Flag isImportant={isImportant} onClick={handleFlag} />
          <p>Important</p>

          </div>

          <div>
            <input type="submit" value="submit" style={{padding: "7px" , width: "150px", marginTop: "-250px"}}   />
          </div>
        </div>
      </form>

      <table
        style={{
          border: "1px solid black",
          width: "90%",
          margin: " 50px auto"
        }}
      >
        <thead>
          <tr style={{background: "black", color: "white"}}>
            <th style={{padding: "10px"}}>Task</th>
            <th>Expiry Date</th>
            <th>Users</th>
            <th>Important</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
