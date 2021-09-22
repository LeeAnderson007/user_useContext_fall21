import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { TrashFill } from "react-bootstrap-icons";
import UserForm from "../components/UserForm";
import { UserContext } from "../providers/UserProvider";

const User = (props) => {
  const value = useContext(UserContext)
  const [showForm, setShowForm] = useState(false)
  const user = props
  return (
      <Col key={user.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={user.avitar} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            {user.email}
          </Card.Text>
          <Card.Text>
            DoB: {user.Dob}
          </Card.Text>
          <Button 
            onClick={()=> value.dispatch({type: 'DELETE_USER', id: user.id})} 
            variant="outline-danger">
            <TrashFill/>
          </Button>
          <Button onClick={() => setShowForm(!showForm)} variant="primary">{showForm ? 'Close' : 'Edit'}</Button>
        </Card.Body>
          {showForm && <UserForm {...user}/>}
      </Card>
      </Col>
  )
}
export default User