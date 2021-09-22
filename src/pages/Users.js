import React, { useContext } from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { TrashFill } from "react-bootstrap-icons";
import styled from "styled-components";
import UserForm from "../components/UserForm";
import UserProvider, { UserContext } from "../providers/UserProvider";
import User from "./User";

const Users = () => {
  const value = useContext(UserContext)
  const [showForm, setShowForm] = useState(false)


  console.log(value)

  const renderUsers =() =>{
    return value.users.map((u)=> <User {...u}/>)
  }
  return (
    <Container>
      <h1>Users</h1>
      <Button onClick={()=> setShowForm(!showForm)}>Add New</Button>
      {showForm && <UserForm />}
      <Row>
        {renderUsers()}
      </Row>
    </Container>
  )
}


export default Users
// return(
// <Col key={u.id}>
//   <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src={u.avitar} />
//   <Card.Body>
//     <Card.Title>{u.name}</Card.Title>
//     <Card.Text>
//       {u.email}
//     </Card.Text>
//     <Card.Text>
//       DoB: {u.Dob}
//     </Card.Text>
//     <Button 
//       onClick={()=> value.dispatch({type: 'DELETE_USER', id: u.id})} 
//       variant="outline-danger">
//       <TrashFill/>
//     </Button>
//     <Button onClick={() => setShowForm(!showForm)} variant="primary">Edit</Button>

//     {showForm && <UserForm {...u}/>}
//   </Card.Body>
// </Card>
// </Col>
// )