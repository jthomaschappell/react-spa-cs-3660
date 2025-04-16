import { Card, Button, Col } from 'react-bootstrap';

function GalleryItem({
    image,
    name, 
    description,
    isBought,
    onBuyClick
}) {
    return (
        <div>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Img className="card-image-top" variant="top" src={image} />
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button onClick={() => {
                            if (!isBought) {
                                onBuyClick(); 
                            }
                        }}>{!isBought ? "BUY NOW" : "BOUGHT"}</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}

export default GalleryItem;