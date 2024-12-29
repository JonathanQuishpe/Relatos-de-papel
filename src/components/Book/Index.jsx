import { Link } from "react-router-dom";
import './Index.scss';

const Index = ({ book, index }) => {
  return (
    <div className="col-md-3" key={index}>
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h6 className="my-0 fw-normal title">
            {book.volumeInfo?.title}
          </h6>
        </div>
        <img src={book.volumeInfo?.imageLinks?.thumbnail} className="card-img-top"
          alt={book.volumeInfo?.title} />
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            ${book.saleInfo?.listPrice?.amount || 45}
            <small className="text-body-secondary fw-light">USD</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>
              Autores: {book.volumeInfo?.authors?.join(", ")}
            </li>
            <li>
              Fecha Publicación: {book.volumeInfo?.publishedDate}
            </li>
            <li>
              Categorías: {book.volumeInfo?.categories?.join(", ")}
            </li>
          </ul>
          <Link to={`/detail/${book.id}`} className="w-100 btn btn-lg btn-sm btn-outline-primary">
            Seleccionar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Index;