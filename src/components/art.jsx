import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Veggie from "./veggielife.jsx";
import About from "./about.jsx";
import Picantes from "./picantes.jsx";
import ProductList from "./productlist.jsx";

const art = () => {
  return (
    <div>
      <div>
        <Container className="cont mt-5">
          <Row className="m-0">
            <Col className=" m-3 text-warning titles_shop" id="ofertas">
              Ofertas del dia
            </Col>
            <ProductList />
            <Col className=" m-3 titles_shop text-success" id="veggie">
              100% Veggie
            </Col>
            <Veggie />

            <Col className="m-3 titles_shop text-warning" id="picantes">
              Burgers Picantes
            </Col>
            <Picantes />
          </Row>
        </Container>
        <hr />
        <div className="sobre text-center m-5 ">
          <h1 className="mt-1">Nosotros!</h1>
          <About className="card" />
          <img src="" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default art;
