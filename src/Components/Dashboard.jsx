import React from 'react'
import { Outlet } from 'react-router';

function Dashboard({children}) {
  return (
    <div>
      {children}
      <Outlet />
    </div>
  )
}

export default Dashboard
