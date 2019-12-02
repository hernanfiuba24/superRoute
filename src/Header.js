import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const AppName = "SuperRoute";
const Home = "Inicio"
const Supermarkets = "Supermercados"

class Header extends React.Component {

    render() {
        return (
            <div className="AppcontainerHeader">
                <Navbar bg="primary" variant="dark" >
                    <Navbar.Brand>{AppName}</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">{Home}</Nav.Link>
                        <Nav.Link href="/supermarkets">{Supermarkets}</Nav.Link>
                    </Nav>

                </Navbar>
            </div>

        );
    }
}

export default Header;

//navbar navbar-light