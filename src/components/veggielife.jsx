import React, { useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import ProductData from "../../src/components/datas/datapicante.json";

const Veggie = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className=" d-flex justify-content-center row ml-auto mr-auto shadow-none">
      {ProductData.map((productDetail, index) => {
        return (
          <div className=" m-3 ">
            <Card style={{ width: "20rem", height: "34rem" }} className="mb-2 ">
              <Card.Img className="image" src={productDetail.image} />

              <Card.Body className="m-3">
                <Card.Title>
                  <h1>{productDetail.name}</h1>
                </Card.Title>
                <Card.Text className="descrip">
                  {productDetail.description}
                </Card.Text>

                <h4>{productDetail.price}</h4>
                <div className="text-center  text-md-center m-2">
                  <Button
                    className="button"
                    variant="success"
                    onClick={handleShow}
                  >
                    Comprar
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header className="bg-dark ">
                      <Modal.Title className="h1 text-warning ">
                        ¡Gracias por tu pedido!
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="h2">
                      Donde te mandamos tu burger?
                    </Modal.Body>
                    <Form.Group className="p-3 modal_1">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Direccion"
                      />
                      <hr />

                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Nombre completo"
                      />
                      <hr />

                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Indicaciones"
                      />
                      <hr />

                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Contacto"
                      />
                      <hr />

                      <Form>
                        {["radio"].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                              inline
                              size="lg"
                              label="Efectivo"
                              name="group1"
                              type={type}
                              id={`inline-${type}-1`}
                            />

                            <Form.Check
                              inline
                              disabled
                              size="lg"
                              label="Debito/Credito (No disponible actualmente)"
                              type={type}
                              id={`inline-${type}-3`}
                            />
                          </div>
                        ))}
                      </Form>
                    </Form.Group>
                    <div className="text-center">
                      <h2>Gracias por elegirnos!</h2>
                    </div>
                    <Modal.Footer className="justify-content-center">
                      <hr />
                      <br />
                      <Button
                        className="p-4 pl-4 pr-4 button"
                        variant="success"
                        onClick={handleClose}
                      >
                        Enviar pedido
                      </Button>
                      <Button
                        className="p-4 pl-4 pr-4 button"
                        variant="danger"
                        onClick={handleClose}
                      >
                        Salir
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Veggie;
