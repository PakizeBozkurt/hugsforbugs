import React from "react";
function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <button
      style={{
        position: "absolute",
        border: "1px solid red",
        top: "20px",
        right: "15px",
        cursor: "pointer"
      }}
      onClick={handleLogout}
      className="logout-btn"
    >
      Logout{" "}
    </button>
  );
}
export default Logout;
