import React, { useEffect, useState } from "react";

const Home = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    date: "",
    user: "",
    important: "",
  });

  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  useEffect(() => {
    getUserData();
    getTasksData()
  }, []);

  const getUserData = () => {
    fetch(`http://localhost:3000/Users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  const getTasksData = () => {
    fetch(`http://localhost:3000/Tasks`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  };

  console.log(users)
  console.log(tasks)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div>
            <textarea onChange={handleChange} name="task" />
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
              <p>0/200</p>
            </div>
          </div>
          <div>
            <input type="date" name="date" onChange={handleChange} />
            <p>Expiry Date</p>
          </div>
          <div>
            <select onChange={handleChange} name="user">
              <option value="">select</option>

              {users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
            <p>Users</p>
          </div>

          {/* <div>
            <p>Important</p>
          </div> */}
          <div>
            <input type="submit" value="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
