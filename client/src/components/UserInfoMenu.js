import React from "react";
import { Dropdown } from "react-bootstrap";
import Logout from "./Logout";

const UserInfoMenu = () => {
  const user = {
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="outline-success" id="user-info-dropdown">
          {user.name.charAt(0).toLocaleUpperCase()}{" "}
          {/* Replace with the name of the logged user */}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/profile">Profile</Dropdown.Item>
          <Dropdown.Item>
            {" "}
            <Logout />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default UserInfoMenu;
