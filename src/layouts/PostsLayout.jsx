import React, { useEffect } from 'react'
// Librares
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
// Elemntelements
import BackgroundGradiend from '../components/BackgroundGradient'
import ScreenWidthWrapper from '../components/ScreenWidthWrapper'
// Pages
//Store
import { getPosts } from '../store/postsSlice'

const PostsLayout = ({ children }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const loadPostData = () => {
      dispatch(getPosts())
    }
    loadPostData()
  }, [dispatch])

  //   let { path } = useRouteMatch()
  return (
    <>
      <BackgroundGradiend />
      <ScreenWidthWrapper>
        <Outlet />
        {/* <Routes>
          <Route path={':postId'} element={<PostPage />} />
          <Route path={''} element={<PostsListPage />} />
        </Routes> */}
        {children}
      </ScreenWidthWrapper>
    </>
  )
}

export default PostsLayout
