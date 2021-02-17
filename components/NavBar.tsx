import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';

const NavBar: React.FC<{}> = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                <Navbar.Brand href="/">Github Repo Finder</Navbar.Brand>
                <Nav.Link href="">
                        <a>Source code</a>
                </Nav.Link>
                <Nav.Link href="">
                        <a>Author</a>
                </Nav.Link>
            </Navbar>
        </>
    )
}

export default NavBar