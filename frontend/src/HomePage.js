import React from 'react'
import { Button, Jumbotron, Container } from 'reactstrap';

function HomePage(){

    return (
        <Container className='homePage'>
            <Jumbotron fluid>
                <Container fluid>
          <h1>Yodlr Design Challenge</h1>
            <p>
                <Button color='primary' href="/signup">Registration Page</Button>{' '}
                <Button color='primary' href="/admin">Admin Page</Button>
            </p>
            </Container>
            </Jumbotron>
        </Container>
    )
}

export default HomePage