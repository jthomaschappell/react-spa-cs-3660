import { Container, Row, Button, Col, Alert } from 'react-bootstrap';
import BlueVortexImage from '../assets/blue_vortex.jpeg';
import MarbleCountertopImage from '../assets/marble_countertop.jpeg';
import GondorGreyImage from '../assets/gondor_grey.jpeg';
import GreenImage from '../assets/green.jpeg';
import GryffindorRedImage from '../assets/gryffindor_red.jpeg';
import GalleryItem from '../widgets/GalleryItem';
import { useState, useEffect } from 'react';
import { ClipLoader } from "react-spinners";

function Spinner() {
  return <ClipLoader color="#36d7b7" />;
}

// Fallback data for when the API is unavailable
const fallbackBookData = [
  {
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    cover_id: "12117415"
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    cover_id: "12645155"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover_id: "12505266"
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    cover_id: "12505266"
  },
  {
    title: "Little Women",
    author: "Louisa May Alcott",
    cover_id: "12505266"
  }
];

// helper function to format the book title to be used in the search query.
const formatBookTitle = bookTitle => bookTitle.replaceAll(" ", "+").toLowerCase();

function Gallery({
  purchasedItems, setPurchasedItems
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [coverIds, setCoverIds] = useState([]);
  const [titles, setTitles] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  const booksUrl = "https://openlibrary.org/search.json";
  const coversUrl = "https://covers.openlibrary.org/b/id/";
  const bookTitles = [
    "Lord of the Rings",
    "Wuthering Heights",
    "Pride and Prejudice",
    "Dracula",
    "Little Women"
  ];

  // loads on mount
  useEffect(() => {
    console.log('Component mounted');
    setIsLoading(true);
    setError(null);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const formattedBookTitles = bookTitles.map(formatBookTitle);
    console.log(`Formatted book titles: ${formattedBookTitles}`);

    const fetchBookResponses = async () => {
      console.log("Fetching book responses!");
      console.log("It uses the ec2 endpoint");

      try {
        // call all the books at once
        const results = await Promise.all(
          formattedBookTitles.map(
            // Other endpoint:
            // localhost:8000/api/book/${title}
            // title => fetch(`http://ec2-35-94-237-243.us-west-2.compute.amazonaws.com:8000/api/book/${title}`)
            title => fetch(`http://localhost:8000/api/book/${title}`)
              .then(res => {
                if (!res.ok) {
                  throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
              })
              .catch(error => {
                console.error(`Error fetching ${title}:`, error);
                throw error;
              })
          )
        );

        console.log(`Results: ${results}`);

        // parse the results
        const myCoverIds = [];
        const myTitles = [];
        const myAuthors = [];

        for (const result of results) {
          myCoverIds.push(result.cover_id);
          myTitles.push(result.title);
          myAuthors.push(result.author);
        }

        // set the state
        setCoverIds(myCoverIds);
        setTitles(myTitles);
        setAuthors(myAuthors);
        setIsUsingFallback(false);
        console.log("Successfully parsed book responses!");

      } catch (error) {
        console.error("Error fetching book responses:", error);
        setError("Unable to connect to the book service. Showing fallback data.");
        
        // Use fallback data
        const fallbackData = fallbackBookData;
        setCoverIds(fallbackData.map(book => book.cover_id));
        setTitles(fallbackData.map(book => book.title));
        setAuthors(fallbackData.map(book => book.author));
        setIsUsingFallback(true);
      }
    };

    fetchBookResponses();

    // Optional cleanup function
    return () => {
      clearTimeout(loadingTimer);
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      {error && (
        <Alert variant="warning" className="mb-4">
          <Alert.Heading>Connection Issue</Alert.Heading>
          <p>{error}</p>
        </Alert>
      )}

      {isLoading ? <Spinner /> :
        <Container>
          <Row className="mb-4">
            <Col xs={6} className="text-center">
              <h1 className="display-4 fw-bold">GALLERY</h1>
            </Col>
            <Col xs={6} className="d-flex justify-content-end">
              <Button size="sm" onClick={() => setPurchasedItems(prevItems => prevItems.map(item => ({ ...item, isBought: false })))}>Reset Purchased Items</Button>
            </Col>
          </Row>

          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {[0, 1, 2, 3, 4].map((index) => (
              <GalleryItem
                key={index}
                image={`${coversUrl}${coverIds[index]}-L.jpg`}
                name={titles[index] ? `Inspiration: ${titles[index]}` : "Loading..."}
                description={authors[index] ? `Let this book by ${authors[index]} inspire your book cover!` : "Loading..."}
                isBought={purchasedItems.find(item => item.id === index + 6)?.isBought}
                onBuyClick={() => setPurchasedItems(prevItems => prevItems.map(item => item.id === index + 6 ? { ...item, isBought: true } : item))}
              />
            ))}
            <GalleryItem
              image={BlueVortexImage}
              name="Blue Vortex"
              description={purchasedItems.find(item => item.id === 1)?.description}
              isBought={purchasedItems.find(item => item.id === 1)?.isBought}
              onBuyClick={() => setPurchasedItems(prevItems => prevItems.map(item => item.id === 1 ? { ...item, isBought: true } : item))}
            />
            <GalleryItem
              image={MarbleCountertopImage}
              name={purchasedItems.find(item => item.id === 2)?.name}
              description={purchasedItems.find(item => item.id === 2)?.description}
              isBought={purchasedItems.find(item => item.id === 2)?.isBought}
              onBuyClick={() => setPurchasedItems(prevItems => prevItems.map(item => item.id === 2 ? { ...item, isBought: true } : item))}
            />
            <GalleryItem
              image={GondorGreyImage}
              name={purchasedItems.find(item => item.id === 3)?.name}
              description={purchasedItems.find(item => item.id === 3)?.description}
              isBought={purchasedItems.find(item => item.id === 3)?.isBought}
              onBuyClick={() => setPurchasedItems(prevItems => prevItems.map(item => item.id === 3 ? { ...item, isBought: true } : item))}
            />
            <GalleryItem
              image={GreenImage}
              name={purchasedItems.find(item => item.id === 4)?.name}
              description={purchasedItems.find(item => item.id === 4)?.description}
              isBought={purchasedItems.find(item => item.id === 4)?.isBought}
              onBuyClick={() => setPurchasedItems(prevItems => prevItems.map(item => item.id === 4 ? { ...item, isBought: true } : item))}
            />
            <GalleryItem
              image={GryffindorRedImage}
              name={purchasedItems.find(item => item.id === 5)?.name}
              description={purchasedItems.find(item => item.id === 5)?.description}
              isBought={purchasedItems.find(item => item.id === 5)?.isBought}
              onBuyClick={() => setPurchasedItems(prevItems => prevItems.map(item => item.id === 5 ? { ...item, isBought: true } : item))}
            />
          </Row>
        </Container>
      }
    </>
  );
}

export default Gallery; 