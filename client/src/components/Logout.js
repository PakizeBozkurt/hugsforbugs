import React from "react";
function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <button onClick={handleLogout} className="logout-btn">
      Logout{" "}
    </button>
  );
}
export default Logout;
