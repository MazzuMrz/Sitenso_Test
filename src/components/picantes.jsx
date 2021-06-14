import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import ProductData from "../../src/components/datas/datapicante.json";

class picantes extends Component {
  render() {
    return (
      <div className=" d-flex justify-content-center row ml-auto mr-auto shadow-none">
        {ProductData.map((productDetail, index) => {
          return (
            <div className=" m-3 ">
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
                  <Button className="text-danger bg-warning button">Comprar</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default picantes;
