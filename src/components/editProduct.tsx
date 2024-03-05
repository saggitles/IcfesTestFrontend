import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";

type ProductType = {
  id: number;
  name: string;
  material: string;
  type: string;
  price: number;
  units: number;
  description: string;
  weight: number;
  length: number;
  width: number;
  color: string;
};

type EditProductProps = {
  show: boolean;
  product: ProductType;
  callback: (product: ProductType) => void;
};

const EditProduct: React.FC<EditProductProps> = ({
  show,
  product,
  callback,
}) => {
  const [showModal, setShowModal] = useState(show);
  const [editedProduct, setEditedProduct] = useState<ProductType>(product);
  useEffect(() => {
    setShowModal(show);
    setEditedProduct(product); // Reset the form when the product changes
  }, [show, product]);

  const handleChange = (e) => {
    // Only update price and type
    if (e.target.name === "price" || e.target.name === "type") {
      setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    console.log(editedProduct);
    axios
      .put(
        `http://localhost:8080/product/update/${editedProduct.id}`,
        editedProduct
      )
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log("Exitoooo", response);
        callback(editedProduct);
        setShowModal(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
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
                value={editedProduct.name}
              />
              <br />
              <Form.Label>Material</Form.Label>
              <Form.Control
                type="text"
                placeholder="Material"
                name="material"
                disabled
                readOnly
                value={editedProduct.material}
              />
              <br />
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tipo"
                name="type"
                value={editedProduct.type}
                onChange={handleChange}
              />
              <br />
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Precio"
                name="price"
                value={editedProduct.price}
                onChange={handleChange}
              />
              <br />
              <Form.Label>Unidades</Form.Label>
              <Form.Control
                type="text"
                placeholder="Unidades"
                name="units"
                disabled
                readOnly
                value={editedProduct.units}
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
                value={editedProduct.weight}
              />
              <br />
              <Form.Label>Largo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Largo"
                name="length"
                disabled
                readOnly
                value={editedProduct.length}
              />
              <br />
              <Form.Label>Ancho</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ancho"
                name="width"
                disabled
                readOnly
                value={editedProduct.width}
              />
              <br />
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Color"
                name="color"
                disabled
                readOnly
                value={editedProduct.color}
              />
              <br />
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descripcion"
                name="description"
                disabled
                readOnly
                value={editedProduct.description}
              />
              <br />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default EditProduct;
