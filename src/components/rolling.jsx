import { Carousel } from "react-bootstrap";
function Rolling() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src="/img/tunisia.jpg" alt="Tunisia" />
          <Carousel.Caption>
            <h3>Tunisia</h3>
            <p>Welcome to Tunisia the pearl of the mediterranean.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/img/usa.jpg" alt="USA" />
          <Carousel.Caption>
            <h3>United States of America</h3>
            <p>Home of the Brave Land of the Free</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/img/japan.jpg" alt="japan" />
          <Carousel.Caption>
            <h3>Japan</h3>
            <p>Japan Land of the Rising Sun</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Rolling;
