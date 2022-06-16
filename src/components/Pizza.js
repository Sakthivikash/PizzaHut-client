import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Pizza({ pizza }) {
  const [quant, setQuant] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className="shadow-lg p-3 mb-5 bg-white rounded"
      style={{ margin: "65px" }}
    >
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          src={pizza.image}
          className="img-fluid"
          style={{
            height: "200px",
          }}
        />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control "
            value={quant}
            onChange={(e) => {
              setQuant(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((e, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-2">
            Price: {pizza.prices[0][varient] * quant} Rs/-
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn">Add To Cart</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column justify-content-center">
          <img
            src={pizza.image}
            className="img-fluid"
            style={{
              height: "300px !important",
            }}
          />
          <p>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
