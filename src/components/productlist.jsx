import React, { Component } from "react";
import ProductData from "../components/datas/datafiles.json";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

class ProductList extends Component {
  render() {
    return (
      <div className=" d-flex justify-content-center row">
        {ProductData.map((productDetail, index) => {
          return (
            <div className=" m-4 ">
              <Card
                style={{ width: "20rem", height: "34rem" }}
                className="mb-2 "
              >
                <Card.Img className="image" src={productDetail.image} />

                <Card.Body className="">
                  <Card.Title>
                    <h1>{productDetail.name}</h1>
                  </Card.Title>
                  <Card.Text className="descrip">
                    {productDetail.description}
                  </Card.Text>

                  <h4>{productDetail.price}</h4>
                  <Button className="text-light bg-success button">
                    Comprar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductList;
