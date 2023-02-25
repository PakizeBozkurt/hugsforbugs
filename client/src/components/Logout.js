import React from 'react'
function Logout() {
  const handleLogout =()=> {
    localStorage.removeItem('token')
    window.location.href="/"}
  return (
    <div>
      <button onClick={handleLogout} className="logout-btn">Logout </button>
    </div>
  )
}
export default Logout ;