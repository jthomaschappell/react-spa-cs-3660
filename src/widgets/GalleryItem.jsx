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
                <Card>
                    <Card.Body>
                        <Card.Img className="card-image-top" variant="top" src={image} />
                        <Card.Title style={{ 
                            wordWrap: 'break-word',
                            overflow: 'hidden'
                        }}>{name}</Card.Title>
                        <Card.Text style={{
                            wordWrap: 'break-word',
                            overflow: 'hidden'
                        }}>
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