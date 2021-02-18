import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';

const NavBar: React.FC<{}> = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                <Navbar.Brand href="/">Github Repo Finder</Navbar.Brand>
                <Nav.Link href="https://jenhsuan.github.io/ALayman/profile.html">
                    Author
                </Nav.Link>
                <Nav.Link href="https://github.com/JenHsuan/github-repo-finder">
                    Github
                </Nav.Link>
                <Nav.Link href="https://daily-learning.herokuapp.com/">
                    ALayman
                </Nav.Link>
            </Navbar>
        </>
    )
}

export default NavBar
