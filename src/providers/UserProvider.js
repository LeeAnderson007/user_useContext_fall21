import React, { useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'



export const UserContext = React.createContext()
export const UserConsumer = UserContext.Consumer

const UserProvider = (props) => {
  const usersArr = [
    {id:1, name: 'jimmy', Dob: '01/01/1999'},
    {id:2, name: 'bobby', Dob: '02/30/1987'},
    {id:3, name: 'sally', Dob: '06/13/1990'},
    {id:4, name: 'alan', Dob: '08/01/1979'},
  ]
  const [users, setUsers] = useState(usersArr)
  
  return (
    <UserContext.Provider value={users}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
