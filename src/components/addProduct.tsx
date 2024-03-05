import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";

function AddProduct(props) {
  const [show, setShow] = useState(props.show);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [values, setValues] = useState({
    name: "",
    material: "",
    type: "",
    price: "",
    units: "",
    description: "",
    weight: "",
    length: "",
    width: "",
    color: "",
  });

  const postHandler = () => {
    axios
      .post("http://localhost:8080/product/create", values)
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        props.callback(response.data);
      })
      .catch((error) => {
        console.log("algo salio mal!", error);
      });
  };

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <>
      {props.launchBtn && (
        <Button variant="primary" onClick={handleShow} id="agregarButton">
          <span
            className="material-symbols-rounded size-14"
            onClick={handleShow}
          >
            add
          </span>
          {props.launchBtnMsg}
        </Button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registro Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                name="name"
                onChange={handleInputChange}
              />
              <br />
              <Form.Label>Material</Form.Label>
              <Form.Control
                type="text"
                placeholder="Material"
                name="material"
                onChange={handleInputChange}
              />
              <br />
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tipo"
                name="type"
                onChange={handleInputChange}
              />
              <br />
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Precio"
                name="price"
                onChange={handleInputChange}
              />
              <br />
              <Form.Label>Unidades</Form.Label>
              <Form.Control
                type="text"
                placeholder="Unidades"
                name="units"
                onChange={handleInputChange}
              />
              <br />
            </div>
            <div className="col">
              <Form.Label>Peso</Form.Label>
              <Form.Control
                type="text"
                placeholder="Peso"
                name="weight"
                onChange={handleInputChange}
              />
              <br />
              <Form.Label>Largo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Largo"
                name="length"
                onChange={handleInputChange}
              />
              <br />
              <Form.Label>Ancho</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ancho"
                name="width"
                onChange={handleInputChange}
              />
              <br />
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Color"
                name="color"
                onChange={handleInputChange}
              />
              <br />
            </div>
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              placeholder="Descripcion"
              name="description"
              onChange={handleInputChange}
            />
            <br />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              postHandler();
              //handleClose();
            }}
          >
            Agregar producto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProduct;
