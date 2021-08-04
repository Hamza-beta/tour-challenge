import { Button, Card } from "react-bootstrap";
function Tcard({ el }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>

          <Card.Img src={el.image} alt="destinaion" />
          <Card.Text>{el.info}</Card.Text>
          <Button variant="primary">not intrested</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Tcard;
