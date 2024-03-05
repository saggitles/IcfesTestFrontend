import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";

const EditProduct = (props: Props) => {
  const [show, setShow] = useState(props.show);
  const [item, setItem] = useState<Product>(props.product);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [values, setValues] = useState<Product>(props.product);

  useEffect(() => {
    //axios
    //  .get("http://localhost:8080/product/list")
    // .then((response) => {
    //  setList(response.data);
    // })
    // .catch((error) => {
    //  console.log("algo salio mal!", error);
    //});
    //setItem();
    //console.log(cloneListEdit);
    setItem(props.product); // Update the item whenever the product prop changes
  }, [props.product]);

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      {props.launchBtnEdit && (
        <button className="btn-action">
          <span
            className="material-symbols-rounded size-14"
            onClick={handleShow}
          >
            edit
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
                value={item.name}
              />
              <br />
              <Form.Label>Material</Form.Label>
              <Form.Control
                type="text"
                placeholder="Material"
                name="material"
                disabled
                readOnly
                value={item.material}
              />
              <br />
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tipo"
                name="type"
                value={item.type}
                onChange={handleInputChange}
              />
              <br />
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Precio"
                name="price"
                value={item.price}
                onChange={handleInputChange}
              />
              <br />
              <Form.Label>Unidades</Form.Label>
              <Form.Control
                type="text"
                placeholder="Unidades"
                name="units"
                disabled
                readOnly
                value={item.units}
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
                value={item.weight}
              />
              <br />
              <Form.Label>Largo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Largo"
                name="length"
                disabled
                readOnly
                value={item.length}
              />
              <br />
              <Form.Label>Ancho</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ancho"
                name="width"
                disabled
                readOnly
                value={item.width}
              />
              <br />
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Color"
                name="color"
                disabled
                readOnly
                value={item.color}
              />
              <br />
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descripcion"
                name="description"
                disabled
                readOnly
                value={item.description}
              />
              <br />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
            }}
          >
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default EditProduct;
