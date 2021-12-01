import { Card, Col } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const CustomCard = ({title, views, uploadedAgo, uploadedBy, image}) => {
    return ( <Col>
        <Card bg="dark">
        <Card.Image src={image} variant="top" />
        <Card.Body>
            <Card.Title>
                {title}
            </Card.Title>
            <Card.Text>{uploadedBy}</Card.Text>
            <Card.Text>{uploadedAgo} | {views} Views</Card.Text>
            <Button variant="danger">Subscribe</Button>
        </Card.Body>
        </Card> 
    </Col> );
}
 
export default CustomCard;