import { render } from "@testing-library/react"
import React, { useContext } from "react"
import { Nav, Navbar } from "react-bootstrap"
import { UserContext } from "../providers/UserProvider"

const NavBar = () => {
  const value = useContext(UserContext)

  const renderNav = () => {
    return value.users.map((u)=>{
      return(
        <Nav.Link href={`/${u.name}`}>{u.name}</Nav.Link>
      )
    })
  }
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/users">All Users</Nav.Link>
      {renderNav()}
    </Navbar>
    </>
  )
}

export default NavBar;
