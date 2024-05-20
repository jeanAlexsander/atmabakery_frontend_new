import Carousel from 'react-bootstrap/Carousel';
import bluecake1 from "../../../assets/bluecake1.jpg"
import redcake1 from "../../../assets/redcake1.jpg"
import carousel1 from "../../../assets/carousel1.png"
import redcake2 from "../../../assets/redcake2.jpg"
import "./HomeCarousels.css"; 

function HomeCarousels() {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={redcake1}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img 
        className='d-block w-100'
        src={redcake2} 
        alt="Third Slide" />
      </Carousel.Item>


    </Carousel>
  );
}

export default HomeCarousels;
