import { Container, Row } from 'react-bootstrap';
import BlueVortexImage from '../assets/blue_vortex.jpeg';
import MarbleCountertopImage from '../assets/marble_countertop.jpeg';
import GondorGreyImage from '../assets/gondor_grey.jpeg';
import GreenImage from '../assets/green.jpeg';
import GryffindorRedImage from '../assets/gryffindor_red.jpeg';
import GalleryItem from '../widgets/GalleryItem';
import { useState, useEffect } from 'react';

// helper function to format the book title to be used in the search query.
const formatBookTitle = bookTitle => bookTitle.replaceAll(" ", "+").toLowerCase();

function Gallery({
  purchasedItems, setPurchasedItems
}) {

  // set the book covers array with nothing. It will load in the array of strings for urls.
  // const [bookCovers, setBookCovers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const coversUrl = "https://covers.openlibrary.org/b/id/";
  const booksUrl = "https://openlibrary.org/search.json";
  const [coverIds, setCoverIds] = useState([]);
  const [titles, setTitles] = useState([]);
  const [authors, setAuthors] = useState([]);

  const bookTitles = [
    "Lord of the Rings",
    "Wuthering Heights",
    "Pride and Prejudice",
    "Dracula",
    "Little Women"
  ];

  useEffect(() => {

    const formattedBookTitles = [];
    // Effect code here
    console.log('Component mounted');
    for (let book of bookTitles) {
      console.log(`Book title: ${book.title}`);
      formattedBookTitles.push(formatBookTitle(book));
    }
    console.log(`Formatted book titles: ${formattedBookTitles}`);

    // TODO: Fetch a single book response. 

    // TODO: STATE OF THE UNION: 
    // TODO: Work on the rules that render the book cover. 

    /**
     * fetchBookResponse happens on mount. 
     * 
     * fetchBookResponse: 
     * uses the titles and pulls the authors and the cover id's. 
     * It adds those to the object array. 
     * 
     * 
     */


    const fetchBookResponse = async () => {
      // console.log(`Fetching book response for ${formattedBookTitles[1]}`);
      console.log("Fetching book responses!");

      const results = await Promise.all(
        formattedBookTitles.map(title => fetch(`${booksUrl}?title=${title}`).then(res => res.json()))
      );

      const myCoverIds = [];
      const myTitles = [];
      const myAuthors = [];

      for (var result of results) {
        console.log(result);
      }

      for (var result of results) {

        let coverId = result.docs[0].cover_i;
        console.log(`Cover id is ${coverId}`);
        myCoverIds.push(coverId);

        let title = result.docs[0].title;
        console.log(`Title is ${title}`);
        myTitles.push(title);

        let author = result.docs[0].author_name;
        console.log(`Author is ${author}`);
        myAuthors.push(author);
      }

      for (var i = 0; i < myCoverIds.length; i++) {
        console.log("--------------------------------");
        console.log(`Index is ${i}`);
        console.log(`Cover id is ${myCoverIds[i]}`);
        console.log(`Title is ${myTitles[i]}`);
        console.log(`Author is ${myAuthors[i]}`);
      }

      setCoverIds(myCoverIds);
      setTitles(myTitles);
      setAuthors(myAuthors);
    }
    setIsLoading(false);

    fetchBookResponse();

    // Optional cleanup function
    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array means this runs once on mount



  return (
    <>
      <Container>
        <h1 className="display-4 fw-bold mb-4">GALLERY</h1>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          <GalleryItem
            image={BlueVortexImage}
            name="Blue Vortex"
            description="Low in stock!"
            isBought={purchasedItems.find(item => item.id === 1)?.isBought}
            onBuyClick={() => setPurchasedItems(prevItems => prevItems.map(item => item.id === 1 ? { ...item, isBought: true } : item))}
          />
          <GalleryItem
            image={MarbleCountertopImage}
            name="Marble Facade"
            description="Exotic!"
            isBought={purchasedItems.find(item => item.id === 2)?.isBought}
            onBuyClick={() => setPurchasedItems(prevItems => prevItems.map(item => item.id === 2 ? { ...item, isBought: true } : item))}
          />
          <GalleryItem
            image={GondorGreyImage}
            name="Gondor Grey"
            description="Lord of the Rings!"
            isBought={purchasedItems.find(item => item.id === 3)?.isBought}
            onBuyClick={() => setPurchasedItems(prevItems => prevItems.map(item => item.id === 3 ? { ...item, isBought: true } : item))}
          />
          <GalleryItem
            image={GreenImage}
            name="Green Cover"
            description="Classic forest green!"
            isBought={purchasedItems.find(item => item.id === 4)?.isBought}
            onBuyClick={() => setPurchasedItems(prevItems => prevItems.map(item => item.id === 4 ? { ...item, isBought: true } : item))}
          />
          <GalleryItem
            image={GryffindorRedImage}
            name="Gryffindor Red"
            description="Gryffindor Red is a favorite!"
            isBought={purchasedItems.find(item => item.id === 5)?.isBought}
            onBuyClick={() => setPurchasedItems(prevItems => prevItems.map(item => item.id === 5 ? { ...item, isBought: true } : item))}
          />
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
        </Row>
      </Container>
    </>
  );
}

export default Gallery; 