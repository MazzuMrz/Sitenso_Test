import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import Productveggie from "./veggielife.jsx";
import Card_about from "./card_about.jsx";
import Picantes from "./picantes.jsx";
import ProductList from "./productlist.jsx";



const art = () => {
  return (
    <div>
      <div>
        <Container className="cont">
          <Row>
            <Col className=" m-5 titles_shop" id="ofertas">
              
              Ofertas del dia
              
            </Col>
            <ProductList />
            <Col className=" m-5 titles_shop text-success" id="veggie">
              100% Veggie
              
            </Col>
            <Productveggie />
            
            <Col className="m-5 titles_shop text-danger" id="picantes" >
              Burgers Picantes
             
            </Col>
             <Picantes />
          </Row>
        </Container>
        <hr />
        <div className="sobre text-center m-5 ">
          <h1 className="mt-1">Nosotros!</h1>
          <Card_about className="card" />
          <img src="" alt="" srcset="" />
        </div>
      </div>

      

      
      
    </div>
  );
};

export default art;
