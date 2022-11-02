import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Product = (props) => {
  //console.log(props.data);
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.data.productImage} />
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <Card.Text>{props.data.price}</Card.Text>
          <Button variant="primary" onClick={(data) => props.addtocart(props.data)}>Add To Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
