import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'reactstrap'

function Admin(){
    
    const [Users, SetUsers] = useState({})
    const [Loaded, SetLoaded] = useState(false)

    useEffect(() => {
        const getUsers = async () => {
            let res = await axios.get('http://localhost:5000/users')
            SetUsers(res.data)
            SetLoaded(true)
            return res.data
        }

        getUsers();

    }, [] )


    console.log(Loaded)

    if(!Loaded) return ( <div>Loading ...</div>)
    
    console.log(Users)
    return(<Container>
            <h1 style={{marginTop: '5rem'}}> Users </h1>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email</th>
                      <th scope='col'>Status</th>
                    </tr>
                </thead>
            <tbody>
                {Users.map((user) => (
                    <tr>
                        <th scope="row">{user.id}</th>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td style = {{'color': (user.state === 'active' ? 'green' : ' ')}}>{user.state}</td>
                    </tr>
                )
                )}
            </tbody>
            </table>
            <Button href="/"> Home</Button>
    </Container>)
}

export default Admin