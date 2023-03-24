import React, { useState } from "react";

const Home = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    date: "",
    user: "",
    important: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({...taskData, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

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
              <option value="User 1">User 1</option>
              <option value="User 2">User 2</option>
              <option value="User 3">User 3</option>
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
