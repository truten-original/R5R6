import React from 'react'
// Librares
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
// Elements
import Card from '../components/Card'
// Pages
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SigupPage'
// Store
import { isLoggedInSelector } from '../store/authSlice'

const AuthLayout = () => {
  //   let { path } = useRouteMatch()
  const isLoggedIn = useSelector(isLoggedInSelector())

  if (isLoggedIn) {
    return <Navigate to="/" />
  }

  return (
    <div className="flex grow flex-col justify-center items-center  dark:text-slate-200 ">
      <Card>
        <Outlet />
        {/* <Route path={'login'} element={<LoginPage />} />
          <Route path={'signup'} element={<SignUpPage />} /> */}
      </Card>
    </div>
  )
}

export default AuthLayout
