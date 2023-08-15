import {  Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import StyledNavbar from '../Components/StyledNavbar'

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  )
}
export default SharedLayout
