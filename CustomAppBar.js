import { Navbar, Container, InputGroup, FormControl, Nav, Button } from 'react-bootstrap';
const CustomAppBar = ({isSearchVisible = false, onSearch}) => {
    return (
        <Navbar bg="dark" sticky="top" expand='lg'>
            <Container fluid>
                <Navbar.Brand>
                    <img src="../logo.svg" alt="logo" height={80} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {isSearchVisible ? (
                <Nav>
                    <InputGroup>
                    <FormControl placeholder='Search' onChange={onSearch} ariaLabel="search" />
                    <Button variant="danger">
                        Search
                    </Button>
                    <Button variant="outline-light" href="/license" type='submit'>
                        License
                    </Button>
                    </InputGroup>
                </Nav>
                 ) : (
                 <div></div>
                 )}
            </Container>
        </Navbar>
    );
};
 
export default CustomAppBar;