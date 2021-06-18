import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Art from "../../components/art";
import Contacto from "../../components/contacto";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Container >
          <Carousel className="d-none d-xs-none d-md-block" >
            <Carousel.Item>
              
              <img
                className="w-100"
                src={
                  "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
                }
                alt="First slide"
              />
              <Carousel.Caption>
                <div className="conh1 ">
                  <h1>A tu placer!</h1>
                </div>
                <div className="conh3 d-none d-sm-block d-xs-none d-md-block d-lg-block ">
                  <h3 className="">Busca que vas a comer hoy</h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="w-100"
                src={
                  "https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg"
                }
                alt="Second slide"
              />

              <Carousel.Caption>
                <div className="conh1 ">
                  <h1>Sin culpa ;)</h1>
                </div>
                <div className="conh3 d-none d-sm-block d-xs-none d-md-block d-lg-block ">
                  <h3 className="">Segun tu paladar</h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="w-100"
                src={
                  "https://i.pinimg.com/originals/43/4c/82/434c8246343438ba20a118c2d868c154.jpg"
                }
                alt="Third slide"
              />

              <Carousel.Caption>
                <div className="conh1 ">
                  <h1>Experimentá!</h1>
                </div>
                <div className="conh3 d-none d-sm-block d-md-block d-lg-block ">
                  <h3 className="">Cosas nuevas todos los dias ;) </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        <hr />
        <Art />
        <hr />
        <Contacto />
      </div>
    );
  }
}

export default Home;
