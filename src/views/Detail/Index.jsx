import books from "../../data/books";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { useState } from "react";

const Index = () => {
  const { addItem } = useShoppingCartContext();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const book = books.find((book) => book.id === id);

  const addCart = () => {
    addItem({
      id: book.id,
      title: book.volumeInfo?.title,
      price: book.saleInfo?.listPrice?.amount || 45,
      img: book.volumeInfo?.imageLinks?.thumbnail
    }, quantity);
    setQuantity(1);
  }
  return (
    book ? (
      <div className="container" >
        <h2>
          Detalle del libro
        </h2>
        <div className="row py-5">
          <div className="col-md-8 d-flex align-items-start">
            <div style={{ textAlign: "center" }}>
              <h3 className="fs-4 text-body-emphasis">
                {book.volumeInfo?.title}
              </h3>
              <img src={book.volumeInfo?.imageLinks?.thumbnail} style={{ width: "250px", height: "300px" }}
                alt={book.volumeInfo?.title} />
              <p className="mt-4" dangerouslySetInnerHTML={{ __html: book.searchInfo?.textSnippet }} />
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-start">
            <div>
              <h3 className="fs-2 text-body-emphasis">Agregar al carrito</h3>
              <input
                type="number"
                className="form-control mb-3"
                placeholder="Cantidad"
                min="1" value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <button className="btn btn-primary" onClick={addCart}>
                Agregar
              </button>
              <Link to={'/checkout'} className="btn btn-success mx-1">
                Pagar
              </Link>
              <Link to={'/home'} className="btn btn-danger mx-1">
                Volver
              </Link>
            </div>
          </div>
        </div>
      </div>) : (
      <div className="container">
        <div className="alert alert-danger" role="alert">
          Libro no encontrado. !!!
        </div>
      </div>
    )
  )
}

export default Index;