import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import {FaHamburger, BiHappyBeaming, AiOutlineFieldTime,} from "react-icons/all";
import { IconContext } from "react-icons";
import logo from '../assets/img/logo/logo.png'

const card_about = () => {
  return (
    <div>
      <CardGroup className="descrip" >
        <Card className="card_about">
          <Card.Body>
            <Card.Title>
              <IconContext.Provider value={{ color: "#260C07", size: "3rem" }}>
                <div>
                  <BiHappyBeaming />
                </div>
              </IconContext.Provider>
              <p className="pt-2 h2 text-warning  card_titles">Atencion personalizada</p>
            </Card.Title>
            <Card.Text>
              La mejor atencion del area limitrofe para vos, para que la
              hamburguesa de tu mente pase a tu plato.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card_about">
          <Card.Body>
            <Card.Title>
              <IconContext.Provider value={{ color: "#260C07", size: "3rem" }}>
                <div>
                  <FaHamburger />
                </div>
              </IconContext.Provider>
              <p className="pt-2 h2 text-warning  card_titles"> Ingredientes</p>
            </Card.Title>
            <Card.Text>
              Siempre usamos los ingrediente mas frescos y de mejor calidad del
              mercado. Tu paladar nos lo va a agradecer ;)
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card_about">
          <Card.Body>
            <Card.Title>
              <IconContext.Provider value={{ color: "#260C07", size: "3rem" }}>
                <div>
                  <AiOutlineFieldTime />
                </div>
              </IconContext.Provider>
              <p  className="pt-2 h2 text-warning card_titles">Rapidisimo</p>
            </Card.Title>
            <Card.Text>
              Nuestros cadetes fueron entrenados con el RayoMcqueen para que tu comida llegue igual de caliente que como salió del horno
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
   
      <h1 className="pt-3 logo">Buen provecho te desea:</h1>
      
      <img src={logo} className="w-25" alt="Nuestro logo" />
      
      <br/>
    </div>
  );
};

export default card_about;
