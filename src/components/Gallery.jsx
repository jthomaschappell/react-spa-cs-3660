import { Container, Row, Button, Col } from 'react-bootstrap';
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

// helper function to format the book title to be used in the search query.
const formatBookTitle = bookTitle => bookTitle.replaceAll(" ", "+").toLowerCase();



function Gallery({
  purchasedItems, setPurchasedItems
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [coverIds, setCoverIds] = useState([]);
  const [titles, setTitles] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState();

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

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);


    const formattedBookTitles = [];
    for (let book of bookTitles) {
      console.log(`Book title: ${book.title}`);
      formattedBookTitles.push(formatBookTitle(book));
    }
    console.log(`Formatted book titles: ${formattedBookTitles}`);

    const fetchBookResponses = async () => {
      console.log("Fetching book responses!");

      try {
        // call all the books at once
        const results = await Promise.all(
          formattedBookTitles.map(
            title => fetch(`http://localhost:8000/api/book/${title}`)
              .then(res => res.json())
          )
        ); 

        console.log(`Results: ${results}`);

        // parse the results
        try {
          const myCoverIds = [];
          const myTitles = [];
          const myAuthors = [];

          for (const result of results) {
            let coverId = result.cover_id;
            myCoverIds.push(coverId);
            let title = result.title;
            myTitles.push(title);
            let author = result.author;
            myAuthors.push(author);
          }

          // set the state
          setCoverIds(myCoverIds);
          setTitles(myTitles);
          setAuthors(myAuthors);
          console.log("Successfully parsed book responses!");

        } catch (error) {
          setError(error);
          console.error("Error parsing book responses:", error);
        }
      } catch (error) {
        setError(error);
        console.error("Error fetching book responses (catch block):", error);
      }
    }

    fetchBookResponses();

    // Optional cleanup function
    return () => {
      clearTimeout(loadingTimer);
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array means this runs once on mount



  return (
    <>
      {(error != null) && <h1 className='text-danger'>{error}</h1>}

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
            <GalleryItem
              image={`${coversUrl}${coverIds[0]}-L.jpg`}
              name={(isLoading || titles[0] === undefined) ? "Loading..." : `Inspiration: ${titles[0]}`}
              description={(isLoading || authors[0] === undefined) ? "Loading..." : `Let this book by ${authors[0]} inspire your book cover!`}
              isBought={purchasedItems.find(item => item.id === 6)?.isBought}
              onBuyClick={() => setPurchasedItems(prevItems => prevItems.map(item => item.id === 6 ? { ...item, isBought: true } : item))}
            />
            <GalleryItem
              image={`${coversUrl}${coverIds[1]}-L.jpg`}
              name={(isLoading || titles[1] === undefined) ? "Loading..." : `Inspiration: ${titles[1]}`}
              description={(isLoading || authors[1] === undefined) ? "Loading..." : `Let this book by ${authors[1]} inspire your book cover!`}
              isBought={purchasedItems.find(item => item.id === 7)?.isBought}
              onBuyClick={() => setPurchasedItems(prevItems => prevItems.map(item => item.id === 7 ? { ...item, isBought: true } : item))}
            />
            <GalleryItem
              image={`${coversUrl}${coverIds[2]}-L.jpg`}
              name={(isLoading || titles[2] === undefined) ? "Loading..." : `Inspiration: ${titles[2]}`}
              description={(isLoading || authors[2] === undefined) ? "Loading..." : `Let this book by ${authors[2]} inspire your book cover!`}
              isBought={purchasedItems.find(item => item.id === 8)?.isBought}
              onBuyClick={() => setPurchasedItems(prevItems => prevItems.map(item => item.id === 8 ? { ...item, isBought: true } : item))}
            />
            <GalleryItem
              image={`${coversUrl}${coverIds[3]}-L.jpg`}
              name={(isLoading || titles[3] === undefined) ? "Loading..." : `Inspiration: ${titles[3]}`}
              description={(isLoading || authors[3] === undefined) ? "Loading..." : `Let this book by ${authors[3]} inspire your book cover!`}
              isBought={purchasedItems.find(item => item.id === 9)?.isBought}
              onBuyClick={() => setPurchasedItems(prevItems => prevItems.map(item => item.id === 9 ? { ...item, isBought: true } : item))}
            />
            <GalleryItem
              image={`${coversUrl}${coverIds[4]}-L.jpg`}
              name={(isLoading || titles[4] === undefined) ? "Loading..." : `Inspiration: ${titles[4]}`}
              description={(isLoading || authors[4] === undefined) ? "Loading..." : `Let this book by ${authors[4]} inspire your book cover!`}
              isBought={purchasedItems.find(item => item.id === 10)?.isBought}
              onBuyClick={() => setPurchasedItems(prevItems => prevItems.map(item => item.id === 10 ? { ...item, isBought: true } : item))}
            />
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