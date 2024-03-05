import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function ViewDetail(props) {
  const [show, setShow] = useState(props.show);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {props.launchBtnView && (
        <button className="btn-action">
          <span
            className="material-symbols-rounded size-14"
            onClick={handleShow}
          >
            visibility
          </span>
        </button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Producto Detalle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                name="name"
                disabled
                readOnly
                value={props.product.name}
              />
              <br />
              <Form.Label>Material</Form.Label>
              <Form.Control
                type="text"
                placeholder="Material"
                name="material"
                disabled
                readOnly
                value={props.product.material}
              />
              <br />
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tipo"
                name="type"
                disabled
                readOnly
                value={props.product.type}
              />
              <br />
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Precio"
                name="price"
                disabled
                readOnly
                value={props.product.price}
              />
              <br />
              <Form.Label>Unidades</Form.Label>
              <Form.Control
                type="text"
                placeholder="Unidades"
                name="units"
                disabled
                readOnly
                value={props.product.units}
              />
              <br />
            </div>
            <div className="col">
              <Form.Label>Peso</Form.Label>
              <Form.Control
                type="text"
                placeholder="Peso"
                name="weight"
                disabled
                readOnly
                value={props.product.weight}
              />
              <br />
              <Form.Label>Largo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Largo"
                name="length"
                disabled
                readOnly
                value={props.product.length}
              />
              <br />
              <Form.Label>Ancho</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ancho"
                name="width"
                disabled
                readOnly
                value={props.product.width}
              />
              <br />
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Color"
                name="color"
                disabled
                readOnly
                value={props.product.color}
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
              disabled
              readOnly
              value={props.product.description}
            />
            <br />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ViewDetail;
