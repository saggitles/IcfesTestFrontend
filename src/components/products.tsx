import axios from "axios";
import { useEffect, useState } from "react";
import AddProduct from "./addProduct";
import Swal from "sweetalert2";
import ViewDetail from "./viewDetail";
import EditProduct from "./editProduct";

const Products = () => {
  const [list, setList] = useState([]);

  const listAlpha = list.sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    axios
      .get("http://localhost:8080/product/list")
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log("algo salio mal!", error);
      });
  }, []);

  const handlerDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8080/product/delete/${id}`)
          .then((response) => {
            const newList = list.filter((item) => item.id != id);
            setList(newList);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log("algo salio mal!", error);
          });
      }
    });
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap')
      </style>

      <body>
        <div className="container-flex">
          <div className="container-content">
            <div className="panel">
              <div id="top">
                <div id="top">
                  <img src="./assets/logo1cut.png" id="logo" />
                  <h2 className="page-tile">Productos Joya Gold</h2>
                </div>
                <div className="panel-heading">
                  <div className="grp-right">
                    <span className="material-symbols-rounded size-16"></span>
                    <AddProduct
                      show={false}
                      launchBtn
                      launchBtnMsg="Agregar"
                      callback={async (result) => {
                        console.log("result", result);
                        const cloneList = list.slice();
                        console.log("cloneList before", cloneList);
                        cloneList.push(result);
                        console.log("cloneList after", cloneList);
                        setList(cloneList);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="panel-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="fit-id">Index</th>
                      <th className="fit-status">Name</th>
                      <th className="fit-status">Material</th>
                      <th className="fit-status">Type</th>
                      <th className="fit-status">Price</th>
                      <th className="fit-actions">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listAlpha.map((item, index) => {
                      return (
                        <tr>
                          <td className="fit-id">{index + 1}</td>
                          <td className="fit-status">{item.name}</td>
                          <td className="fit-status">{item.material}</td>
                          <td className="fit-status">{item.type}</td>
                          <td className="fit-status">{item.price}</td>
                          <td className="fit-actions">
                            <ViewDetail
                              show={false}
                              launchBtnView
                              product={item}
                            />

                            <button
                              className="btn-action"
                              onClick={() => handlerDelete(item.id)}
                            >
                              <span className="material-symbols-rounded size-14">
                                Delete
                              </span>
                            </button>
                            <EditProduct
                              show={false}
                              launchBtnEdit
                              product={item}
                              callback={async (result) => {
                                console.log("result", result);
                                const cloneList = list.slice();
                                console.log("cloneList before", cloneList);
                                cloneList.push(result);
                                console.log("cloneList after", cloneList);
                                setList(cloneList);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="panel-footer">
                <img src="./assets/icfeslogo.png" id="icfeslogo" />
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Products;
