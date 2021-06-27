import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Contacto = () => {
 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className="text-center p-auto">
        <section className="mb-4">
          <h1 className="text-center w-responsive mx-auto mb-5">
            Tienes alguna duda? Preguntanos!
          </h1>

          <div className="row d-flex justify-content-center">
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="blank_"
                method="POST"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        placeholder="Tu Mail"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mt-4 mb-4">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        placeholder="Asunto"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                      ></textarea>
                      <h1 for="message bg-danger pt-3 ">Aqui va tu consulta!</h1>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center  text-md-center m-2">
                <Button variant="success" onClick={handleShow}>
                  Enviar
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header >
                    <Modal.Title>¡Gracias por tu tiempo!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                   Nos estaremos poniendo en contacto contigo en la brevedad
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                      Salir
                    </Button>
                    
                  </Modal.Footer>
                </Modal>
              </div>
              <div className="status"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }


export default Contacto;
