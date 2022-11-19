import React from 'react'
// Librares
import { useSelector } from 'react-redux'
import { Outlet, Route, Routes } from 'react-router-dom'
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

  //   if (isLoggedIn) {
  //     return <Redirect to="/" />
  //   }

  return (
    <div className="flex grow flex-col justify-center items-center  dark:text-slate-200 ">
      <Card>
        <Routes>
          <Outlet />
          {/* <Route path={'login'} element={<LoginPage />} />
          <Route path={'signup'} element={<SignUpPage />} /> */}
          {/* <Redirect to={path + '/signup'} /> */}
        </Routes>
      </Card>
    </div>
  )
}

export default AuthLayout
