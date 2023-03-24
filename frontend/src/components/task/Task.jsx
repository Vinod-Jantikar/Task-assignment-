import React from "react";
import Flag from "../flag/Flag";

const Task = ({ task }) => {
  return (
    <tr>
      <td>{task.Task}</td>
      <td>{task.Expiry_date}</td>
      <td>
        <select style={{padding: "10px", width: "150px"}}>
          <option value={task.User}>{task.User}</option>
        </select>
      </td>
      <td style={{display: "flex", justifyContent: "center"}}>
        <Flag isImportant={task.Important} style={{ cursor: "auto"}} />
      </td>
      <td>
        <img src="./assets/minus.jpg" width="30px" style={{borderRadius: "50%"}}/>
      </td>
    </tr>
  );
};

export default Task;
