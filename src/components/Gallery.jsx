import { Container, Row, Col, Alert } from 'react-bootstrap';
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
  purchasedItems,
  setPurchasedItems
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

      try {
        // call all the books at once
        const results = await Promise.all(
          formattedBookTitles.map(
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
            <Col xs={12} className="text-center">
              <h1 className="display-4 fw-bold">GALLERY</h1>
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
              />
            ))}
            {[
              { id: 1, image: BlueVortexImage },
              { id: 2, image: MarbleCountertopImage },
              { id: 3, image: GondorGreyImage }, 
              { id: 4, image: GreenImage },
              { id: 5, image: GryffindorRedImage }
            ].map((item) => (
              <GalleryItem
                key={item.id}
                image={item.image}
                name={purchasedItems.find(pItem => pItem.id === item.id)?.name}
                description={purchasedItems.find(pItem => pItem.id === item.id)?.description}
                isBought={purchasedItems.find(pItem => pItem.id === item.id)?.isBought}
              />
            ))}
          </Row>
        </Container>
      }
    </>
  );
}

export default Gallery; 