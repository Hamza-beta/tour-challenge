import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navg({ setsearch }) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">My Tours ToDo</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/tour">Tour</Nav.Link>
          <Nav.Link href="/Addtour">Add Tour</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            onChange={(e) => setsearch(e.target.value)}
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navg;
