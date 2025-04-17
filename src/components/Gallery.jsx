import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import BlueVortexImage from '../assets/blue_vortex.jpeg';
import MarbleCountertopImage from '../assets/marble_countertop.jpeg';
import GondorGreyImage from '../assets/gondor_grey.jpeg';
import GreenImage from '../assets/green.jpeg';
import GryffindorRedImage from '../assets/gryffindor_red.jpeg';
import GalleryItem from '../widgets/GalleryItem';
import { useState, useEffect } from 'react';

function Gallery({
  isBlueVortexBought, setIsBlueVortexBought,
  isGondorGreyBought, setIsGondorGreyBought, isGreenCoverBought,
  setIsGreenCoverBought, isGryffindorRedBought, setIsGryffindorRedBought,
  isMarbleFacadeBought, setIsMarbleFacadeBought
}) {

  // set the book covers array with nothing. It will load in the array of strings for urls.
  // const [bookCovers, setBookCovers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const coversUrl = "https://covers.openlibrary.org/b/id/";
  const booksUrl = "https://openlibrary.org/search.json";
  const [cover, setCover] = useState(null);

  const formatBookTitle = bookTitle => bookTitle.replaceAll(" ", "+").toLowerCase();

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
    for (var book of bookTitles) {
      console.log(`Book title: ${book}`);
      formattedBookTitles.push(formatBookTitle(book));
    }
    console.log(`Formatted book titles: ${formattedBookTitles}`);

    // TODO: Fetch a single book response. 

    // TODO: STATE OF THE UNION: 
    // TODO: Work on the rules that render the book cover. 

    // <img src={SWAPIimageConfig.thumbnails[film.episode_id]} alt={film.title} className="card-img-top img-fluid"




    const fetchBookResponse = async () => {
      console.log(`Fetching book response for ${formattedBookTitles[1]}`);
      try {
        const response = await fetch(`${booksUrl}?title=${formattedBookTitles[1]}`);
        const data = await response.json();
        console.log(JSON.stringify(data));
        const coverId = data.docs[0].cover_i;
        console.log(`Cover ID: ${coverId}`);
        // TODO: Test the cover ID. 
        try {
          const coverResponse = await fetch(`${coversUrl}${coverId}-L.jpg`);
          if (!coverResponse.ok) {
            throw new Error(`Failed to fetch cover for ${formattedBookTitles[1]}`);
          }
          const coverBlob = await coverResponse.blob();
          setCover(coverBlob);
        } catch (err) {
          console.log(`Book covers error: ${err}`);
        }
      } catch (err) {
        console.log(`Error: ${err}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBookResponse();

    // Optional cleanup function
    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array means this runs once on mount


  // useEffect(() => {
  //   const fetchBookCovers = async () => {
  //     try {
  //       setIsLoading(true);
  //       let formattedBookTitles = [];
  //       for (const title of bookTitles) {
  //         formattedBookTitles.push(formatBookTitle(title));
  //       }

  //       const promises = formattedBookTitles.map(title => fetch(`${booksUrl}?title=${title}`).then(response => {
  //         if (!response.ok) throw new Error(`Failed to fetch ${title} from API.`);
  //         return response.json();
  //       }));

  //       // TODO: This is not quite the right type of data. 

  //       const results = await Promise.all(promises);
  //       const stringified = JSON.stringify(results, null, 2); 
  //       console.log(`Stringified: ${stringified[0]}`);
  //       setIsLoading(false);
  //     } catch (err) {
  //       setError(err.message);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchBookCovers();
  // }, []);

  // TODO: Now test the useEffect by loading the page and seeing 
  // TODO: what shows up on the console.log



  // if parsed JSON is data, 
  // then data.docs[0].author_name
  // and data.docs[0].title
  // and data.docs[0].cover_i --> we can do another call to get this. 

  // https://openlibrary.org/search.json?title=little+women

  /**
   * New implementation: 
   * We call a fetch request to the get books URL. 
   * We pull out the "title" for use in "Lord of the Rings" Inspired Cover
   * We pull out the cover_i and do a call to the CDN for it. 
   * 
   * 
   * 
   * 
   * const data = JSON.parse(jsonString);
const firstCoverId = data.docs[0].cover_i;
   */







  // const bookIds = [
  //   "14625765",
  //   "12818862",
  //   "14348537",
  //   "12216503",
  //   "8775559"
  // ];
  // const coversUrl = "https://covers.openlibrary.org/b/id/"

  // // TODO: New implementation. 
  // // TODO: Pull "Name of book" cover. 
  // // TODO: Use the id from the thing to call it. 


  // /**
  //  * Fetch each of the book covers upon startup (when this component renders)
  //  * Give appropriate error messages when images are not able to be loaded. 
  //  * Thought: use useEffect and it does the fetch 
  //  * 
  //  * 
  //  * TODO: Test. Do a fetch and show in the console.log
  //  * TODO: Look at Fahim's code for this. 
  //  */

  // useEffect(() => {
  //   const fetchBookCovers = async () => {
  //     try {
  //       setIsLoading(true);

  //       const promises = bookIds.map(bookId => fetch(`${coversUrl}${bookId}-L.jpg`)
  //         .then(response => {
  //           if (!response.ok) throw new Error(`Failed to fetch book ${bookId}`);
  //           return response.json();
  //         })
  //       );

  //       // wait for promises to resolve
  //       const results = await Promise.all(promises); 
  //       setBookCovers(results); 

  //     } catch(error) {
  //       console.log(`Error was ${error}`);
  //       setError(error); 
  //     } finally {
  //       setIsLoading(false); 
  //     }

  //   const data = fetchBookCovers(); 
  //   console.log(`The data is ${data}`);
  // }, []); 


  /**
   *     useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await fetch("https://swapi.dev/api/films/");
                if (!response.ok) throw new Error("Failed to fetch films");
                const data = await response.json();
                setFilms(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFilms();
    }, []);
   */



  return (
    <>
      <Container>
        <h1 className="display-4 fw-bold mb-4">GALLERY</h1>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          <GalleryItem
            image={BlueVortexImage}
            name="Blue Vortex"
            description="Low in stock!"
            isBought={isBlueVortexBought}
            onBuyClick={() => setIsBlueVortexBought(true)}
          />
          <GalleryItem
            image={MarbleCountertopImage}
            name="Marble Facade"
            description="Exotic!"
            isBought={isMarbleFacadeBought}
            onBuyClick={() => setIsMarbleFacadeBought(true)}
          />
          <GalleryItem
            image={GondorGreyImage}
            name="Gondor Grey"
            description="Lord of the Rings!"
            isBought={isGondorGreyBought}
            onBuyClick={() => setIsGondorGreyBought(true)}
          />
          <GalleryItem
            image={GreenImage}
            name="Green Cover"
            description="Classic forest green!"
            isBought={isGreenCoverBought}
            onBuyClick={() => setIsGreenCoverBought(true)}
          />
          <GalleryItem
            image={GryffindorRedImage}
            name="Gryffindor Red"
            description="Gryffindor Red is a favorite!"
            isBought={isGryffindorRedBought}
            onBuyClick={() => setIsGryffindorRedBought(true)}
          />
        </Row>
      </Container>
    </>
  );
}

export default Gallery; 